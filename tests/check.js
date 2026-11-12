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
  const p = h => ctx.parseRoute(h, 31);
  assert.deepStrictEqual(p('#/step/5'),  {view:'step', n:5});
  assert.deepStrictEqual(p('#/step/0'),  {view:'step', n:0});
  assert.deepStrictEqual(p('#/step/31'), {view:'step', n:31});
  assert.deepStrictEqual(p('#/timeline'), {view:'timeline', id:null});
  assert.deepStrictEqual(p('#/timeline/bsi'), {view:'timeline', id:'bsi'});
  for (const bad of ['', '#', '#/step/32', '#/step/-1', '#/step/abc', '#/step/2.5', '#/foo'])
    assert.deepStrictEqual(p(bad), {view:'step', n:0}, bad);
});

check('route: hash round-trip', () => {
  for (const h of ['#/step/0','#/step/17','#/timeline','#/timeline/cmos-vs-ccd'])
    assert.strictEqual(ctx.routeHash(ctx.parseRoute(h, 31)), h);
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
  assert.strictEqual(S.length, 32);
  const want = [0, ...Array(8).fill(1), ...Array(4).fill(2), ...Array(3).fill(3), ...Array(4).fill(4), ...Array(5).fill(5), ...Array(7).fill(6)];
  assert.deepStrictEqual([...S.map(s => s.ch)], want);
  S.forEach((s, i) => {
    for (const k of ['t', 'g', 'adv']) assert.ok(typeof s[k] === 'string' && s[k].length, `step ${i} ${k}`);
    assert.ok(Array.isArray(s.cam) && Array.isArray(s.look), `step ${i} cam/look`);
    assert.ok(!('h' in s), `step ${i} still has h`);
  });
  assert.strictEqual(S[1].t, '光从景物出发');
  assert.strictEqual(S[31].t, '计算摄影：夜景、人像、超分');
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
