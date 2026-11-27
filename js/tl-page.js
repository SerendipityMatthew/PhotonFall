/* 独立全屏时间线页（cmos-timeline.html、lens-timeline.html 共用）：<body data-tl="cmos|lens"> 选主题，
   数据由 js/cmostl.js / js/lenstl.js 登记到 TIMELINES（js/tl-core.js）。语言跟主站共用 localStorage。 */
const D = TIMELINES[document.body.dataset.tl], ROWS = tlNormalize(D.rows), LANES = D.lanes, DESC = D.desc;
const T = {
  zh: {hint: '点上面的行业可以只看它', solid: '首发', hollow: '之后传入', ms: '里程碑', first: '首发', flw: '传入', to: '之后传到', from: '首发于',
       firsts: '项首发', home: '⌂ 回首页', lang: 'EN', hist: '发展史 →'},
  en: {hint: 'Tap an industry above to show only it', solid: 'First', hollow: 'Spread here later', ms: 'Milestone', first: 'First', flw: 'Spread', to: 'Then spread to', from: 'First in',
       firsts: 'firsts', home: '⌂ Home', lang: '中', hist: 'Full history →'},
};
const on = new Set(LANES.map(l => l.k));
const lane = k => LANES.find(l => l.k === k);
const id = r => `${r[5]}-${r[1]}-${r[0]}` + (ROWS.filter(x => x[5] === r[5] && x[1] === r[1] && x[0] === r[0]).indexOf(r) || '');   // 同技术同行业同年的第二张卡加 -1

function render() {
  const en = getLang() === 'en', t = {...T[en ? 'en' : 'zh'], ...D.text[en ? 'en' : 'zh']}, L = l => en ? l.en : l.zh;
  document.documentElement.lang = en ? 'en' : 'zh-CN';
  document.title = t.title + ' · PhotonFall';
  for (const k of ['h1', 'sub', 'hint', 'eyebrow']) document.getElementById(k).textContent = t[k];
  home.textContent = t.home; lang.textContent = t.lang; foot.textContent = t.foot;
  if (D.refs) foot.insertAdjacentHTML('beforeend', `<details class="refs"><summary>${en ? 'Sources' : '来源'}（${D.refs.length}）</summary><ol>${D.refs.map(r => `<li><a href="${r.u}" target="_blank" rel="noopener">${r.t}</a></li>`).join('')}</ol></details>`);
  steplink.textContent = D.step[en ? 'en' : 'zh'] + ' ↗'; steplink.href = 'index.html#/step/' + D.step.n;
  legend.innerHTML = `<span class="solid"><i></i>${t.solid}</span><span><i></i>${t.hollow}</span><span>◆ ${t.ms}</span>`;
  stats.innerHTML = LANES.map(l => `<li><button type="button" data-k="${l.k}" aria-pressed="${on.has(l.k)}" style="--c:var(--${l.k})"><b>${ROWS.filter(r => r[1] === l.k && r[4] === 1).length}</b><span>${L(l)} · ${t.firsts}</span></button></li>`).join('');
  let side = 0, html = '<li class="fill" aria-hidden="true"></li>';
  for (const y of [...new Set(ROWS.map(r => r[0]))].sort((a, b) => a - b)) {
    html += `<li class="yr"><span>${y}</span></li>`;
    for (const r of ROWS.filter(r => r[0] === y)) {
      const [name, prod] = (en ? r[3] : r[2]).split(' · '), l = lane(r[1]), first = r[4] === 1, ms = r[4] === 2;
      const rel = ROWS.filter(x => x[5] === r[5] && x !== r && (first ? x[4] !== 1 : x[4] === 1));
      const links = rel.filter((x, i) => rel.findIndex(y => y[1] === x[1] && y[0] === x[0]) === i)   // 同行业同年只留第一个
        .map(x => `<a href="#${id(x)}" style="--cc:var(--${x[1]})">${L(lane(x[1]))} ${x[0]}</a>`).join('');
      html += `<li class="it ${side++ % 2 ? 'r' : ''} ${first ? 'first' : ''}" id="${id(r)}" data-k="${r[1]}" data-key="${r[5]}" style="--c:var(--${r[1]})"><div class="card">
        <span class="tag"><em>${L(l)}</em><em class="${first ? '' : 'flw'}">${first ? t.first : ms ? '◆ ' + t.ms : '→ ' + t.flw}</em></span>
        <h3>${name}</h3><p class="prod">${prod || ''}</p>
        ${first ? `<p class="d">${DESC[r[5]][en ? 1 : 0]}</p>` : ''}
        ${links ? `<p class="to">${first ? t.to : t.from}：${links}</p>` : ''}
        ${D.hist && D.hist[r[5]] ? `<button type="button" class="hbtn" data-h="${r[5]}">${t.hist}</button>` : ''}</div></li>`;
    }
  }
  tl.innerHTML = html;
  filter(); reveal(); onScroll();
}
function filter() {
  tl.querySelectorAll('.it').forEach(it => it.classList.toggle('off', !on.has(it.dataset.k)));
  tl.querySelectorAll('.yr').forEach(y => {   // 这一年没有可见的卡片就把年份也藏起来
    let n = y.nextElementSibling, any = false;
    while (n && n.classList.contains('it')) { any ||= !n.classList.contains('off'); n = n.nextElementSibling; }
    y.style.display = any ? '' : 'none';
  });
  stats.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', on.has(b.dataset.k)));
}
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -12% 0px'}) : null;
function reveal() { tl.querySelectorAll('.it').forEach(it => io ? io.observe(it) : it.classList.add('in')); }
function onScroll() {
  const h = document.documentElement, p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
  bar.style.width = (p * 100) + '%';
  const r = tl.getBoundingClientRect(), fill = tl.querySelector('.fill');
  fill.style.height = Math.max(0, Math.min(r.height, innerHeight * .6 - r.top)) + 'px';
}
addEventListener('scroll', onScroll, {passive: true});
addEventListener('resize', onScroll);
stats.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const k = b.dataset.k;
  if (on.size === LANES.length) { on.clear(); on.add(k); }   // 全开时点一个 = 只看它
  else if (on.has(k)) { on.delete(k); if (!on.size) LANES.forEach(l => on.add(l.k)); }
  else on.add(k);
  filter(); onScroll();
});
tl.addEventListener('click', e => {   // 点「之后传到 / 首发于」跳到对应卡片并闪一下
  const a = e.target.closest('.to a'); if (!a) return;
  const it = document.querySelector(a.getAttribute('href'));
  if (it && it.classList.contains('off')) { on.add(it.dataset.k); filter(); }
  setTimeout(() => { it.classList.add('in', 'flash'); setTimeout(() => it.classList.remove('flash'), 1400); }, 400);
});
lang.onclick = () => { try { localStorage.setItem('photonfall_lang', getLang() === 'en' ? 'zh' : 'en'); } catch (e) {} render(); };
render();

/* ---------- 发展史弹窗：数据在 js/hist-<主题>.js（按需加载，主站不加载），地址 #h=技术编号 可直接分享 ---------- */
const STAGE = {
  idea: ['设想', 'Concept'], paper: ['论文', 'Paper'], proto: ['原型', 'Prototype'], corp: ['企业研发', 'Industry R&D'],
  mass: ['量产', 'Mass production'], ver: ['迭代', 'New version'], rival: ['竞争方案', 'Rival'], end: ['替代 / 淘汰', 'Replaced'],
};
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/tl-hist.css">');
document.body.insertAdjacentHTML('beforeend', '<dialog id="hist" aria-labelledby="hist-h"></dialog>');
const dlg = document.getElementById('hist');
function openHist(k) {
  const H = D.hist && D.hist[k]; if (!H) return false;
  const en = getLang() === 'en', i = en ? 1 : 0, f = ROWS.find(r => r[5] === k && r[4] === 1);
  const [name, prod] = (en ? f[3] : f[2]).split(' · '), L = l => en ? l.en : l.zh;
  const refs = ix => (ix || []).map(n => H.refs[n] ? `<a href="${H.refs[n].u}" target="_blank" rel="noopener">[${n + 1}]</a>` : '').join('');
  dlg.innerHTML = `<button type="button" class="hx" aria-label="${en ? 'Close' : '关闭'}">×</button>
    <p class="heye">${L(lane(f[1]))} · ${en ? 'first shipped' : '首发'} ${f[0]} · ${prod || ''}</p>
    <h2 id="hist-h">${name}</h2><p class="hd">${DESC[k][i]}</p>
    <ol class="hs">${H.stages.map(s => `<li class="st-${s[1]}"><b>${s[0]}</b><em>${(STAGE[s[1]] || [s[1], s[1]])[i]}</em><p>${en ? s[3] : s[2]} ${refs(s[4])}</p></li>`).join('')}</ol>
    ${H.now ? `<div class="hbox"><h3>${en ? 'Where it stands now' : '现在的状态'}</h3><p>${H.now[i]}</p></div>` : ''}
    ${H.replaced ? `<div class="hbox end"><h3>${en ? 'Replaced by / next' : '被什么替代'}</h3><p>${H.replaced[i]}</p></div>` : ''}
    <details class="hrefs"><summary>${en ? 'Sources' : '来源'}（${H.refs.length}）</summary><ol>${H.refs.map(r => `<li><a href="${r.u}" target="_blank" rel="noopener">${r.t}</a></li>`).join('')}</ol></details>`;
  if (!dlg.open) dlg.showModal();
  dlg.scrollTop = 0;
  history.replaceState(null, '', '#h=' + k);
  return true;
}
function openFromHash() {
  const m = location.hash.match(/^#h=([\w-]+)/); if (!m) return;
  if (!openHist(m[1])) document.querySelector(`[data-key="${m[1]}"]`)?.scrollIntoView({block: 'center'});
}
dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('.hx')) dlg.close(); });
dlg.addEventListener('close', () => history.replaceState(null, '', location.pathname + location.search));
tl.addEventListener('click', e => { const b = e.target.closest('.hbtn'); if (b) openHist(b.dataset.h); });
if (D.histSrc) {   // 有发展史的主题才加载（在数据文件里写 histSrc）
  const hs = document.createElement('script');
  hs.src = D.histSrc; hs.onload = () => { render(); openFromHash(); }; hs.onerror = openFromHash;
  document.body.appendChild(hs);
} else openFromHash();   // 还没写发展史：#h= 只滚到对应卡片
