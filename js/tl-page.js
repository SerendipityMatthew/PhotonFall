/* 独立全屏时间线页（cmos-timeline.html、lens-timeline.html 共用）：<body data-tl="cmos|lens"> 选主题，
   数据由 js/cmostl.js / js/lenstl.js 登记到 TIMELINES（js/tl-core.js）。语言跟主站共用 localStorage。 */
const D = TIMELINES[document.body.dataset.tl], ROWS = D.rows, LANES = D.lanes, DESC = D.desc;
const T = {
  zh: {hint: '点上面的行业可以只看它', solid: '首发', hollow: '之后传入', ms: '里程碑', first: '首发', flw: '传入', to: '之后传到', from: '首发于',
       firsts: '项首发', home: '⌂ 回首页', lang: 'EN'},
  en: {hint: 'Tap an industry above to show only it', solid: 'First', hollow: 'Spread here later', ms: 'Milestone', first: 'First', flw: 'Spread', to: 'Then spread to', from: 'First in',
       firsts: 'firsts', home: '⌂ Home', lang: '中'},
};
const on = new Set(LANES.map(l => l.k));
const lane = k => LANES.find(l => l.k === k);
const id = r => `${r[5]}-${r[1]}-${r[0]}`;

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
      const links = rel.map(x => `<a href="#${id(x)}" style="--cc:var(--${x[1]})">${L(lane(x[1]))} ${x[0]}</a>`).join('');
      html += `<li class="it ${side++ % 2 ? 'r' : ''} ${first ? 'first' : ''}" id="${id(r)}" data-k="${r[1]}" style="--c:var(--${r[1]})"><div class="card">
        <span class="tag"><em>${L(l)}</em><em class="${first ? '' : 'flw'}">${first ? t.first : ms ? '◆ ' + t.ms : '→ ' + t.flw}</em></span>
        <h3>${name}</h3><p class="prod">${prod || ''}</p>
        ${first ? `<p class="d">${DESC[r[5]][en ? 1 : 0]}</p>` : ''}
        ${links ? `<p class="to">${first ? t.to : t.from}：${links}</p>` : ''}</div></li>`;
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
