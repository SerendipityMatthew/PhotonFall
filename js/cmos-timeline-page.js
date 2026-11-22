/* 独立时间线页：数据来自 js/cmostl.js（CMT / CMT_LANES / CMT_DESC），语言跟主站共用 localStorage。 */
const T = {
  zh: {h1: '谁先用上了这项技术？', sub: 'CMOS 图像传感器的每项关键技术，最先在手机、安防/汽车、工业还是相机上量产，又是怎么流到其他行业的。',
       hint: '点上面的行业可以只看它', solid: '首发', hollow: '之后传入', ms: '里程碑', first: '首发', flw: '传入', to: '之后传到', from: '首发于',
       firsts: '项首发', home: '⌂ 回首页', s21: '第 21 步：整颗传感器', lang: 'EN',
       foot: '「首发」指第一次进入量产产品，不是第一次发表论文。年份和产品来自厂商新闻稿与拆解报告，来源列在主站第 21 步的硬核区；DR-Pix 年份为估计。'},
  en: {h1: 'Who shipped it first?', sub: 'Every key CMOS image sensor technology: did it ship first in phones, security/automotive, industrial or cameras, and how did it spread to the rest?',
       hint: 'Tap an industry above to show only it', solid: 'First', hollow: 'Spread here later', ms: 'Milestone', first: 'First', flw: 'Spread', to: 'Then spread to', from: 'First in',
       firsts: 'firsts', home: '⌂ Home', s21: 'Step 21: The whole sensor', lang: '中',
       foot: '"First" means first in a shipping product, not first paper. Years and products come from vendor press releases and teardown reports, listed in Step 21 of the main site; the DR-Pix year is approximate.'},
};
const on = new Set(CMT_LANES.map(l => l.k));
const lane = k => CMT_LANES.find(l => l.k === k);
const id = r => `${r[5]}-${r[1]}-${r[0]}`;

function render() {
  const en = getLang() === 'en', t = T[en ? 'en' : 'zh'], L = l => en ? l.en : l.zh;
  document.documentElement.lang = en ? 'en' : 'zh-CN';
  document.title = en ? 'CMOS Technology Timeline · PhotonFall' : 'CMOS 技术时间线 · PhotonFall';
  for (const k of ['h1', 'sub', 'hint']) document.getElementById(k).textContent = t[k];
  home.textContent = t.home; step21.textContent = t.s21 + ' ↗'; lang.textContent = t.lang; foot.textContent = t.foot;
  legend.innerHTML = `<span class="solid"><i></i>${t.solid}</span><span><i></i>${t.hollow}</span><span>◆ ${t.ms}</span>`;
  stats.innerHTML = CMT_LANES.map(l => `<li><button type="button" data-k="${l.k}" aria-pressed="${on.has(l.k)}" style="--c:var(--${l.k})"><b>${CMT.filter(r => r[1] === l.k && r[4] === 1).length}</b><span>${L(l)} · ${t.firsts}</span></button></li>`).join('');
  let side = 0, html = '<li class="fill" aria-hidden="true"></li>';
  for (const y of [...new Set(CMT.map(r => r[0]))].sort((a, b) => a - b)) {
    html += `<li class="yr"><span>${y}</span></li>`;
    for (const r of CMT.filter(r => r[0] === y)) {
      const [name, prod] = (en ? r[3] : r[2]).split(' · '), l = lane(r[1]), first = r[4] === 1, ms = r[4] === 2;
      const rel = CMT.filter(x => x[5] === r[5] && x !== r && (first ? x[4] !== 1 : x[4] === 1));
      const links = rel.map(x => `<a href="#${id(x)}" style="--cc:var(--${x[1]})">${L(lane(x[1]))} ${x[0]}</a>`).join('');
      html += `<li class="it ${side++ % 2 ? 'r' : ''} ${first ? 'first' : ''}" id="${id(r)}" data-k="${r[1]}" style="--c:var(--${r[1]})"><div class="card">
        <span class="tag"><em>${L(l)}</em><em class="${first ? '' : 'flw'}">${first ? t.first : ms ? '◆ ' + t.ms : '→ ' + t.flw}</em></span>
        <h3>${name}</h3><p class="prod">${prod || ''}</p>
        ${first ? `<p class="d">${CMT_DESC[r[5]][en ? 1 : 0]}</p>` : ''}
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
  if (on.size === CMT_LANES.length) { on.clear(); on.add(k); }   // 全开时点一个 = 只看它
  else if (on.has(k)) { on.delete(k); if (!on.size) CMT_LANES.forEach(l => on.add(l.k)); }
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
