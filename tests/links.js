#!/usr/bin/env node
/* 来源链接检查：按需手动跑（要联网，不进 check.js）。
   扫 js/ 里所有 http(s) 链接（发展史、时间线、步骤的来源），逐个请求，列出打不开的。
   用法：node tests/links.js [--json 输出文件]
   判定：404 / 410 / 域名解析失败 / 连接失败 = 失效；401 / 403 / 429 / 超时多半是网站拦自动请求，单独列出、需人工看。 */
'use strict';
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(path.join(root, 'js')).filter(f => f.endsWith('.js') && !f.startsWith('vendor'));
const where = new Map();
for (const f of files) {
  const s = fs.readFileSync(path.join(root, 'js', f), 'utf8');
  for (const m of s.matchAll(/https?:\/\/[^\s"'`<>\\]+/g)) {
    let u = m[0].replace(/[.,;:]+$/, '');
    while (u.endsWith(')') && (u.match(/\(/g) || []).length < (u.match(/\)/g) || []).length) u = u.slice(0, -1);   // 末尾多出来的右括号是正文的，URL 里成对的括号保留（如 Wikipedia 的 Panning_(camera)）
    u = u.replace(/[.,;:]+$/, '');
    if (!where.has(u)) where.set(u, new Set());
    where.get(u).add(f);
  }
}
const urls = [...where.keys()];
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';
async function probe(u) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(u, {method, redirect: 'follow', headers: {'user-agent': UA, accept: 'text/html,*/*'}, signal: AbortSignal.timeout(20000)});
      if (method === 'HEAD' && (r.status === 405 || r.status === 403 || r.status >= 500)) continue;   // 有的站不接受 HEAD，换 GET 再试
      return {status: r.status};
    } catch (e) {
      if (method === 'GET') return {error: e.cause?.code || e.name};
    }
  }
}
(async () => {
  const res = [], N = 12;
  let i = 0;
  await Promise.all(Array.from({length: N}, async () => {
    while (i < urls.length) { const u = urls[i++]; res.push({u, ...(await probe(u)), files: [...where.get(u)]}); }
  }));
  const dead = res.filter(r => r.status === 404 || r.status === 410 || ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET', 'CERT_HAS_EXPIRED'].includes(r.error));
  const blocked = res.filter(r => !dead.includes(r) && (r.error || r.status >= 400));
  console.log(`checked ${res.length} links: ${res.length - dead.length - blocked.length} ok, ${dead.length} dead, ${blocked.length} blocked / need a manual look`);
  for (const [name, list] of [['DEAD', dead], ['BLOCKED', blocked]])
    for (const r of list) console.log(`${name} ${r.status || r.error} ${r.u}  (${r.files.join(', ')})`);
  const k = process.argv.indexOf('--json');
  if (k > 0) fs.writeFileSync(process.argv[k + 1], JSON.stringify({dead, blocked}, null, 1));
  process.exitCode = dead.length ? 1 : 0;
})();
