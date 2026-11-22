/* 首页 landing：只在不带路由打开网站时显示（#/step/... 等分享链接直接进内容）。
   背景动画：光子从上方落下，穿过镜头折向焦点，打到拜耳滤色片上——颜色对得上的像素才亮。
   在 onboard.js / app.js 之前加载：app.js 启动时会把空 hash 改成 #/step/0。 */

const LANDING = !location.hash || location.hash === '#' || location.hash === '#/';
const LTXT = {
  zh: {eyebrow: '交互式 3D 成像科学讲解', tag: '跟着一颗光子，<br>走完从景物到照片的全过程。',
       sub: '镜头怎么聚光，像素怎么把光变成电，电路怎么把电变成数字，ISP 怎么算出颜色。每一步都看得见、点得动。',
       go: '开始旅程', quiz: '🎯 测验', tl: '🕰 时间轴', tls: '技术演化时间线', tlx: ['📈 CMOS', '🔭 镜头', '🧠 ISP', '💾 存储', '🖥 显示', '🎬 视频', '🪄 计算摄影'], lang: 'EN',
       stats: ['步', '章', '道测验题', '支真实镜头'], ch: '直接跳到某一章', hint: '光子穿过镜头，只有滤色片颜色对得上的像素才会亮'},
  en: {eyebrow: 'Interactive 3D imaging science', tag: 'Follow one photon<br>from the scene to the photo.',
       sub: 'How a lens gathers light, how a pixel turns light into charge, how circuits turn charge into numbers, and how the ISP computes color. Every step is visible and clickable.',
       go: 'Start the journey', quiz: '🎯 Quiz', tl: '🕰 Timeline', tls: 'Technology timelines', tlx: ['📈 CMOS', '🔭 Lens', '🧠 ISP', '💾 Storage', '🖥 Display', '🎬 Video', '🪄 Computational'], lang: '中',
       stats: ['steps', 'chapters', 'quiz questions', 'real lenses'], ch: 'Jump to a chapter', hint: 'Photons pass the lens; a pixel lights only when its color filter matches'},
};

function renderLanding() {
  const el = $('landing');
  if (el.hidden) return;
  const en = getLang() === 'en', T = LTXT[en ? 'en' : 'zh'];
  const nums = [STEPS.length, CHAPTERS.length, typeof QUIZ === 'object' ? QUIZ.length : 100, typeof LENSES === 'object' ? LENSES.length : 12];
  const first = CHAPTERS.map(c => STEPS.findIndex(s => s.ch === c.id));
  $('lpbody').innerHTML = `
    <p class="lp-eye">${T.eyebrow}</p>
    <h1 class="lp-h1">PhotonFall<span>${en ? '' : '光子落点'}</span></h1>
    <p class="lp-tag">${T.tag}</p>
    <p class="lp-sub">${T.sub}</p>
    <div class="lp-cta">
      <button type="button" class="lp-go" data-go="step:0">${T.go} →</button>
      <button type="button" data-go="quiz">${T.quiz}</button>
      <button type="button" data-go="timeline">${T.tl}</button>
      <button type="button" data-go="lang" aria-label="${en ? 'Switch language: 中文' : '切换语言：English'}">${T.lang}</button>
    </div>
    <nav class="lp-tls" aria-label="${T.tls}"><span>${T.tls}</span>${['cmos', 'lens', 'isp', 'storage', 'display', 'video', 'comp'].map((f, i) => `<a href="${f}-timeline.html">${T.tlx[i]}</a>`).join('')}</nav>
    <ul class="lp-stats">${nums.map((n, i) => `<li><b>${n}</b><span>${T.stats[i]}</span></li>`).join('')}</ul>
    <nav class="lp-ch" aria-label="${T.ch}">${CHAPTERS.map((c, i) => `<button type="button" data-go="step:${first[i]}"><i>${String(i).padStart(2, '0')}</i>${en ? c.nameEn : c.name}</button>`).join('')}</nav>
    <p class="lp-hint">${T.hint}</p>`;
}

function hideLanding() {
  const el = $('landing');
  if (el.hidden) return;
  el.classList.add('out');
  setTimeout(() => { el.hidden = true; lp.run = false; }, 600);
}
function leaveLanding(r) {
  hideLanding();
  navigate(r);
  if (r.view === 'step' && !onboardSeen()) setTimeout(showOnboard, 650);
}

$('landing').hidden = !LANDING;
$('landing').addEventListener('click', e => {
  const b = e.target.closest('[data-go]');
  if (!b) return;
  const [v, n] = b.dataset.go.split(':');
  if (v === 'lang') return setLang(getLang() === 'en' ? 'zh' : 'en');
  leaveLanding(v === 'step' ? {view: 'step', n: +n} : {view: v, id: null, cat: null});
});

/* ---------- 背景动画 ---------- */
const lp = {run: LANDING, ph: [], cells: [], W: 0, H: 0, still: matchMedia('(prefers-reduced-motion: reduce)').matches};
const LP_COL = {r: [239, 90, 95], g: [72, 194, 106], b: [90, 149, 255]};
function lpSize() {
  const c = $('lpc'), d = Math.min(2, devicePixelRatio || 1);
  lp.W = c.clientWidth; lp.H = c.clientHeight;
  c.width = lp.W * d; c.height = lp.H * d; c.getContext('2d').setTransform(d, 0, 0, d, 0, 0);
  /* 传感器：底部一排拜耳格子 RGGB */
  const n = Math.max(16, Math.round(lp.W / 26)), w = lp.W * .7 / n;
  lp.cells = [];
  for (let r = 0; r < 3; r++) for (let i = 0; i < n; i++)
    lp.cells.push({x: lp.W * .15 + i * w, y: lp.H * .9 + r * w * .55, w, h: w * .5, f: (r % 2 ? 'gb' : 'rg')[i % 2], e: 0});
}
function lpSpawn() {
  const k = ['r', 'g', 'b', 'w'][Math.random() * 4 | 0];
  lp.ph.push({x: lp.W * (.1 + Math.random() * .8), y: -10, k, bent: false, vx: 0, vy: 260 + Math.random() * 160});
}
function lpFrame(now) {
  if (!lp.run) return;
  const dt = Math.min(.05, (now - (lp.t || now)) / 1000); lp.t = now;
  const c = $('lpc').getContext('2d'), {W, H} = lp, lensY = H * .62, sensY = H * .9, cx = W / 2;
  c.fillStyle = 'rgba(13,20,32,.28)'; c.fillRect(0, 0, W, H);          // 半透明清屏 = 拖尾
  for (let i = 0; i < 3; i++) if (Math.random() < dt * 60) lpSpawn();
  /* 镜头 */
  c.strokeStyle = 'rgba(169,212,255,.18)'; c.lineWidth = 1.5;
  c.beginPath(); c.ellipse(cx, lensY, W * .42, 10, 0, 0, 7); c.stroke();
  c.fillStyle = 'rgba(169,212,255,.05)'; c.fill();
  /* 光子 */
  lp.ph = lp.ph.filter(p => {
    if (!p.bent && p.y >= lensY) {                                  // 过镜头：折向对称的像点（倒像）
      p.bent = true; const tx = cx - (p.x - cx) * .55;
      const t = (sensY - lensY) / p.vy; p.vx = (tx - p.x) / t;
    }
    const ox = p.x, oy = p.y; p.x += p.vx * dt; p.y += p.vy * dt;
    const col = p.k === 'w' ? [255, 246, 220] : LP_COL[p.k];
    c.strokeStyle = `rgba(${col},.9)`; c.lineWidth = 2;
    c.beginPath(); c.moveTo(ox, oy); c.lineTo(p.x, p.y); c.stroke();
    if (p.y < sensY) return true;
    const cell = lp.cells.find(q => p.x >= q.x && p.x < q.x + q.w);
    if (cell && (p.k === 'w' || p.k === cell.f)) cell.e = 1;       // 滤色片颜色对上才亮
    return false;
  });
  /* 拜耳传感器 */
  lp.cells.forEach(q => {
    const col = LP_COL[q.f]; q.e = Math.max(0, q.e - dt * 1.4);
    c.fillStyle = `rgba(${col},${.16 + .84 * q.e})`; c.fillRect(q.x + 1, q.y, q.w - 2, q.h);
    if (q.e > .3) { c.shadowColor = `rgb(${col})`; c.shadowBlur = 14 * q.e; c.fillRect(q.x + 1, q.y, q.w - 2, q.h); c.shadowBlur = 0; }
  });
  if (!lp.still) requestAnimationFrame(lpFrame);
}
function lpStart() {
  lp.run = true; lp.t = 0; lpSize();
  if (lp.still) { for (let i = 0; i < 90; i++) lpFrame(i * 33); } else requestAnimationFrame(lpFrame);
}
/* 顶栏 ⌂ 回首页：地址变成 #/，刷新也还在首页；浏览器后退回到原来那一步 */
function showLanding() {
  const el = $('landing');
  if (location.hash !== '#/') history.pushState(null, '', '#/');
  el.hidden = false; el.classList.remove('out');
  if (!lp.run) lpStart();
  renderLanding();
  el.querySelector('.lp-go')?.focus({preventScroll: true});
}
addEventListener('resize', () => { if (lp.run) lpSize(); });
addEventListener('popstate', () => { if (location.hash === '#/') showLanding(); else hideLanding(); });
$('homebtn').onclick = showLanding;
if (LANDING) {
  lpStart();
  addEventListener('load', () => history.replaceState(null, '', '#/'));   // app.js 启动时把地址改成了 #/step/0，改回来
}
