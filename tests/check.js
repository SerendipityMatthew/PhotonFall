#!/usr/bin/env node
'use strict';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');
const assert = require('assert');

// ---------------------------------------------------------------------------
// Load project files into an isolated vm context
// ---------------------------------------------------------------------------
const root   = path.resolve(__dirname, '..');
const vmCtx  = vm.createContext({});

for (const rel of ['js/route.js', 'js/steps.js', 'js/evolution.js']) {
  const abs = path.join(root, rel);
  if (fs.existsSync(abs)) {
    vm.runInContext(fs.readFileSync(abs, 'utf8'), vmCtx, { filename: abs });
  }
}

// const declarations don't attach to the context object; pull them out explicitly
vm.runInContext(
  'this.parseRoute   = typeof parseRoute   !== "undefined" ? parseRoute   : undefined;' +
  'this.routeHash    = typeof routeHash    !== "undefined" ? routeHash    : undefined;' +
  'this.historyMode  = typeof historyMode  !== "undefined" ? historyMode  : undefined;' +
  'this.CHAPTERS     = typeof CHAPTERS     !== "undefined" ? CHAPTERS     : undefined;' +
  'this.STEPS        = typeof STEPS        !== "undefined" ? STEPS        : undefined;' +
  'this.ERAS         = typeof ERAS         !== "undefined" ? ERAS         : undefined;' +
  'this.LANES        = typeof LANES        !== "undefined" ? LANES        : undefined;' +
  'this.EVO          = typeof EVO          !== "undefined" ? EVO          : undefined;' +
  'this.evoForStep   = typeof evoForStep   !== "undefined" ? evoForStep   : undefined;',
  vmCtx
);

// Build ctx: expose globals; wrap functions so returned objects are
// in the outer realm (required for assert.deepStrictEqual cross-context).
const ctx = {};
const GLOBAL_KEYS = [
  'parseRoute', 'routeHash', 'historyMode',
  'CHAPTERS', 'STEPS', 'ERAS', 'LANES', 'EVO', 'evoForStep',
];
for (const k of GLOBAL_KEYS) {
  const v = vmCtx[k];
  ctx[k] = (typeof v === 'function')
    ? (...args) => {
        const r = v(...args);
        return (r !== null && typeof r === 'object') ? JSON.parse(JSON.stringify(r)) : r;
      }
    : v;
}

// ---------------------------------------------------------------------------
// Minimal check harness
// ---------------------------------------------------------------------------
const checks = [];

function check(name, fn) {
  checks.push({ name, fn });
}

// ---------------------------------------------------------------------------
// Route checks
// ---------------------------------------------------------------------------
check('route: parse', () => {
  const max = ctx.STEPS.length - 1, p = h => ctx.parseRoute(h, max);
  assert.deepStrictEqual(p('#/step/5'),  {view:'step', n:5});
  assert.deepStrictEqual(p('#/step/0'),  {view:'step', n:0});
  assert.deepStrictEqual(p('#/step/' + max), {view:'step', n:max});
  assert.deepStrictEqual(p('#/timeline'), {view:'timeline', id:null});
  assert.deepStrictEqual(p('#/timeline/bsi'), {view:'timeline', id:'bsi'});
  for (const bad of ['', '#', '#/step/' + (max + 1), '#/step/-1', '#/step/abc', '#/step/2.5', '#/foo'])
    assert.deepStrictEqual(p(bad), {view:'step', n:0}, bad);
});

check('route: hash round-trip', () => {
  for (const h of ['#/step/0','#/step/17','#/timeline','#/timeline/cmos-vs-ccd'])
    assert.strictEqual(ctx.routeHash(ctx.parseRoute(h, ctx.STEPS.length - 1)), h);
});

check('route: historyMode', () => {
  const ch = n => n < 9 ? 1 : 2, S = n => ({view:'step', n}), T = {view:'timeline', id:null};
  assert.strictEqual(ctx.historyMode(null, S(3), ch), 'replace');
  assert.strictEqual(ctx.historyMode(S(3), S(4), ch), 'replace');
  assert.strictEqual(ctx.historyMode(S(8), S(9), ch), 'push');
  assert.strictEqual(ctx.historyMode(S(3), T, ch), 'push');
  assert.strictEqual(ctx.historyMode(T, S(3), ch), 'push');
  assert.strictEqual(ctx.historyMode(T, {view:'timeline', id:'bsi'}, ch), 'push');
});

check('steps: shape', () => {
  const S = ctx.STEPS, C = ctx.CHAPTERS;
  assert.strictEqual(C.length, 7);
  assert.strictEqual(S.length, 33);
  const want = [0, ...Array(10).fill(1), ...Array(4).fill(2), ...Array(3).fill(3), ...Array(4).fill(4), ...Array(5).fill(5), ...Array(6).fill(6)];
  assert.deepStrictEqual([...S.map(s => s.ch)], want);
  S.forEach((s, i) => {
    for (const k of ['t', 'g', 'adv']) assert.ok(typeof s[k] === 'string' && s[k].length, `step ${i} ${k}`);
    assert.ok(Array.isArray(s.cam) && Array.isArray(s.look), `step ${i} cam/look`);
    assert.ok(!('h' in s), `step ${i} still has h`);
  });
  assert.strictEqual(S[1].t, '光从景物出发');
  assert.strictEqual(S[7].t, '镜头里的每片镜片');
  assert.strictEqual(S[8].t, '镜片镀膜');
  assert.strictEqual(S[8].g, 'coat');
  assert.ok(S[8].pn.includes('coatpn'), 'step 8 keeps the coating button');
  assert.ok(!S.some(s => s.t === '镜头镀膜、眩光与鬼影'), 'old coating step merged away');
  assert.strictEqual(S[S.length - 1].t, '计算摄影：夜景、人像、超分');
});

check('steps: content', () => {
  ctx.STEPS.forEach((s, i) => {
    assert.ok(typeof s.lead === 'string' && s.lead.length, `step ${i} lead`);
    assert.ok(/data-hl="[^"]+"/.test(s.lead), `step ${i} lead has a keyword`);
    const text = s.lead.replace(/<[^>]+>/g, '');
    assert.ok(text.length <= 90, `step ${i} lead too long (${text.length})`);
    assert.ok(!/<table|class="f"/.test(s.adv), `step ${i} formula/table left in adv`);
  });
  assert.ok(!ctx.STEPS[0].adv.includes('Task 7'), 'step 0 adv written');
});

check('evo: data', () => {
  const last = ctx.STEPS.length - 1;
  const E = ctx.EVO, eras = new Set(ctx.ERAS.map(e => e.id)), lanes = ctx.LANES.map(l => l.id);
  assert.ok(E.length >= 20 && E.length <= 25, `count ${E.length}`);
  assert.strictEqual(new Set(E.map(e => e.id)).size, E.length, 'unique ids');
  for (const e of E) {
    assert.ok(/^[a-z0-9-]+$/.test(e.id), `id ${e.id}`);
    assert.ok(eras.has(e.era), `${e.id} era`);
    assert.ok(lanes.includes(e.lane), `${e.id} lane`);
    for (const k of ['title', 'solved', 'newProblem', 'driver', 'industry', 'story'])
      assert.ok(typeof e[k] === 'string' && e[k].length, `${e.id} ${k}`);
    assert.ok(e.steps.length && e.steps.every(n => Number.isInteger(n) && n >= 1 && n <= last), `${e.id} steps`);
    assert.strictEqual(typeof e.draw, 'function', `${e.id} draw`);
  }
  assert.ok(ctx.evoForStep(7).length >= 1 && ctx.evoForStep(8).length >= 1, 'new steps 7, 8 have cards');
  for (const l of lanes) assert.ok(E.filter(e => e.lane === l).length >= 3, `lane ${l} ≥ 3`);
  for (let n = 2; n <= last; n++) assert.ok(ctx.evoForStep(n).length >= 1, `step ${n} has a card`);
});

// ---------------------------------------------------------------------------
// Run all checks and report
// ---------------------------------------------------------------------------
let failed = 0;
for (const { name, fn } of checks) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (err) {
    console.log(`✗ ${name}`);
    console.log(`  ${err.message}`);
    failed++;
  }
}

if (failed > 0) {
  console.log(`\n${failed} check(s) failed.`);
  process.exit(1);
} else {
  console.log(`\nAll ${checks.length} check(s) passed.`);
}
