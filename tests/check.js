#!/usr/bin/env node
'use strict';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');
const assert = require('assert');
const J = x => JSON.parse(JSON.stringify(x));

// ---------------------------------------------------------------------------
// Load project files into an isolated vm context
// ---------------------------------------------------------------------------
const root   = path.resolve(__dirname, '..');
const vmCtx  = vm.createContext({});

for (const rel of ['js/route.js', 'js/steps.js', 'js/evolution.js', 'js/layout.js']) {
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
  'this.evoForStep   = typeof evoForStep   !== "undefined" ? evoForStep   : undefined;' +
  'this.mentioned    = typeof mentioned    !== "undefined" ? mentioned    : undefined;' +
  'this.locText      = typeof locText      !== "undefined" ? locText      : undefined;' +
  'this.locShort     = typeof locShort     !== "undefined" ? locShort     : undefined;' +
  'this.CARD_CTL     = typeof CARD_CTL     !== "undefined" ? CARD_CTL     : undefined;',
  vmCtx
);

// Build ctx: expose globals; wrap functions so returned objects are
// in the outer realm (required for assert.deepStrictEqual cross-context).
const ctx = {};
const GLOBAL_KEYS = [
  'parseRoute', 'routeHash', 'historyMode',
  'CHAPTERS', 'STEPS', 'ERAS', 'LANES', 'EVO', 'evoForStep',
  'mentioned', 'locText', 'locShort', 'CARD_CTL',
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
  assert.strictEqual(C.length, 8);
  assert.strictEqual(S.length, 42);
  const want = [0, ...Array(10).fill(1), ...Array(4).fill(2), ...Array(3).fill(3), ...Array(4).fill(4), ...Array(5).fill(5), ...Array(10).fill(6), ...Array(5).fill(7)];
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
  assert.strictEqual(S[36].t, '计算摄影 · ML 场景分析：人像、对焦、降噪');
  assert.strictEqual(S[S.length - 1].t, '拍摄效果 · 计算摄影效果');
  S.slice(37).forEach((s, i) => assert.ok(s.fx && s.g === 'macro' && s.pn.includes('fxctl'), `step ${37 + i} is a shooting-effects step`));
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
  assert.ok(E.length >= 20 && E.length <= 30, `count ${E.length}`);
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

check('layout: mentioned', () => {
  assert.deepStrictEqual(J(ctx.mentioned('a<k data-hl="微透镜">x</k>b<k data-hl="左 PD">y</k><k data-hl="微透镜">z</k>')), ['微透镜','左 PD']);
  assert.deepStrictEqual(J(ctx.mentioned('无关键词')), []);
});
check('layout: locText', () => {
  const S = ctx.STEPS, C = ctx.CHAPTERS;
  assert.strictEqual(ctx.locText(0, S, C), '先看全景');
  assert.strictEqual(ctx.locText(1, S, C), '1 镜头 · 第 1/10 步');
  assert.strictEqual(ctx.locText(16, S, C), '3 像素 · 第 2/3 步');
  assert.strictEqual(ctx.locText(36, S, C), '6 周边 · 第 10/10 步');
  assert.strictEqual(ctx.locShort(16, S, C), '3 像素 · 2/3');
});
check('html: no inline scripts (CSP)', () => {
  const fs = require('fs'), path = require('path'), root = path.join(__dirname, '..');
  for (const f of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(root, f), 'utf8');
    for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (/type=["']application\/ld\+json/.test(m[1])) continue;   // JSON-LD 不执行，CSP 不管
      assert.ok(!m[2].trim(), `${f}: inline <script> is blocked by the CSP in _headers; move it to a js/ file`);
    }
  }
});

check('timelines: rows and histories', () => {
  /* 14 条技术时间线 + 发展史：每个技术恰好一个首发、有简介和发展史；行按年份排；发展史阶段合法、来源序号不越界 */
  const c = vm.createContext({window: {}, document: {getElementById: () => null, querySelector: () => null}});
  const tlFiles = fs.readdirSync(path.join(root, 'js')).filter(f => /tl\.js$/.test(f) && f !== 'tl-core.js');
  vm.runInContext([fs.readFileSync(path.join(root, 'js/tl-core.js'), 'utf8'), ...tlFiles.map(f => fs.readFileSync(path.join(root, 'js', f), 'utf8'))].join('\n') + ';this.T = TIMELINES', c);
  const T = c.T, STAGES = ['idea', 'paper', 'proto', 'corp', 'mass', 'ver', 'rival', 'end'];
  assert.strictEqual(Object.keys(T).length, 14, 'timeline count');
  for (const [k, D] of Object.entries(T)) {
    assert.ok(fs.existsSync(path.join(root, D.page)), `${k} page ${D.page}`);
    assert.ok(D.histSrc && fs.existsSync(path.join(root, D.histSrc)), `${k} histSrc`);
    vm.runInContext(fs.readFileSync(path.join(root, D.histSrc), 'utf8'), c);
    const keys = [...new Set(D.rows.map(r => r[5]))], H = D.hist;
    D.rows.forEach((r, i) => {
      assert.ok(Number.isInteger(r[0]) && ['phone', 'auto', 'ind', 'cam'].includes(r[1]) && [0, 1, 2].includes(r[4]), `${k} row ${i} shape`);
      assert.ok(i === 0 || r[0] >= D.rows[i - 1][0], `${k} row ${i} out of year order (${r[0]})`);
    });
    for (const key of keys) {
      assert.strictEqual(D.rows.filter(r => r[5] === key && r[4] === 1).length, 1, `${k}/${key} needs exactly one first-launch row`);
      assert.ok(D.desc[key] && D.desc[key][0] && D.desc[key][1], `${k}/${key} desc`);
      const h = H[key];
      assert.ok(h && h.stages.length >= 3 && h.refs.length, `${k}/${key} history`);
      h.stages.forEach((st, i) => {
        assert.ok(Number.isInteger(st[0]) && STAGES.includes(st[1]) && st[2] && st[3], `${k}/${key} stage ${i}`);
        assert.ok(i === 0 || st[0] >= h.stages[i - 1][0], `${k}/${key} stage ${i} out of year order`);
        assert.ok((st[4] || []).every(n => Number.isInteger(n) && n >= 0 && n < h.refs.length), `${k}/${key} stage ${i} ref index`);
      });
      for (const f of ['now', 'replaced']) assert.ok(!h[f] || (h[f].length === 2 && h[f][0] && h[f][1]), `${k}/${key} ${f}`);
      assert.ok(h.refs.every(r => r.t && /^https?:\/\//.test(r.u)), `${k}/${key} refs`);
    }
    for (const key of Object.keys(H)) assert.ok(keys.includes(key), `${k}: history ${key} has no rows`);
  }
});
check('layout: fig', () => {
  const want = {1:'vffig',2:'vffig',3:'vffig',4:'pdc',5:'vffig',6:'vffig',7:'vffig',8:'reflc',9:'vffig',10:'ibc',12:'spec',16:'pot',17:'pot',22:'snr',23:'dnwrap',24:'adcc',25:'shc',26:'i8fig',37:'vffig',38:'vffig',39:'vffig',40:'vffig',41:'vffig'};
  ctx.STEPS.forEach((s, i) => assert.strictEqual(s.fig, want[i], `step ${i} fig`));
  assert.strictEqual(ctx.CARD_CTL.length, 23);
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
