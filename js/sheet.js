/* 手机底部抽屉：≤768px 时 #card 贴在屏幕底部，三档高度——
   min 只露把手和标题一行，mid 默认（≤45% 屏高，3D 舞台缩到抽屉上方），max 几乎全屏并显示"详细"的三个标签。
   详细抽屉 #drawer 在手机上整个搬进卡片（按钮行上方），标签和内容与电脑完全相同；max 档 ⇔ drawerOpen。
   拖把手（pointer 事件）松手按最近档吸附，快速一甩按方向换档；点把手 min→mid→max→mid。
   依赖 $ / ctr（core.js）、card.js 的 PHONE / isPhone / openDrawer / closeDrawer / cardFolded、STEPS / CHAPTERS / step；
   在 onboard.js 之后、app.js 之前加载。 */

let sheetState = 'mid';
const SHEET_MIN = 64;                       // 与 css 里 min 档高度一致
const sheetH = s => s === 'min' ? SHEET_MIN : innerHeight * (s === 'mid' ? .45 : .92);

/* 用户手势（拖、点把手、详细、Esc）带吸附动画；直接调 setSheet 默认立即到位 */
let animT = 0;
/* 收尾：去掉动画类，并把还没走完的高度过渡直接结束（不渲染的后台页里过渡会一直停在起点） */
function sheetAnimEnd() {
  clearTimeout(animT);
  $('card').classList.remove('sheet-anim');
  $('card').getAnimations().forEach(a => { if (a.transitionProperty === 'height') a.finish(); });
}
function sheetAnim() {
  $('card').classList.add('sheet-anim');
  clearTimeout(animT);
  animT = setTimeout(sheetAnimEnd, 400);
}

function setSheet(s, animate = false) {
  if (!['min', 'mid', 'max'].includes(s)) return;
  sheetState = s;
  if (!isPhone()) return;                   // 电脑上只记下来，不影响浮动小卡
  $('card').style.height = '';
  if (animate) sheetAnim(); else sheetAnimEnd();
  document.body.dataset.sheet = s;
  cardFolded = s === 'min';
  $('grip').setAttribute('aria-label', '调整讲解栏高度（现在：' + {min: '收起', mid: '默认', max: '展开'}[s] + '）');
  if (s === 'max' && !drawerOpen) openDrawer();
  if (s !== 'max' && drawerOpen) {
    const inside = $('drawer').contains(document.activeElement);
    closeDrawer(false);
    if (inside) $('grip').focus({preventScroll: true});
  }
}

/* ---------- 变宽变窄：搬详细抽屉和标注开关，换位置文字 ---------- */
const drawerHome = $('drawer').nextElementSibling;   // 电脑上 #drawer 原来的位置
function sheetLayout() {
  const phone = isPhone();
  /* 手机上 #drawer 嵌在卡片里，dialog 语义不对；改用 role="region" */
  $('drawer').setAttribute('role', phone ? 'region' : 'dialog');
  if (phone) {
    $('card').insertBefore($('drawer'), $('card').querySelector('.nav'));
    $('tocfoot').appendChild($('lblbtn'));
    $('card').classList.remove('folded');
    setSheet(drawerOpen ? 'max' : cardFolded ? 'min' : 'mid');
  } else {
    drawerHome.before($('drawer'));
    $('topbar').insertBefore($('lblbtn'), $('helpbtn'));
    delete document.body.dataset.sheet;
    $('card').style.height = '';
    $('card').classList.toggle('folded', cardFolded);
    $('cardfold').textContent = cardFolded ? '展开' : '收起';
    $('cardfold').setAttribute('aria-expanded', String(!cardFolded));
  }
  if (typeof STEPS !== 'undefined' && typeof step !== 'undefined')
    $('loc').textContent = (phone ? locShort : locText)(step, STEPS, CHAPTERS);
}
PHONE.addEventListener('change', sheetLayout);

/* ---------- 把手：拖动与点按 ---------- */
let drag = null, dragEndT = 0;
const grip = $('grip');

grip.addEventListener('pointerdown', e => {
  if (!isPhone() || e.button > 0) return;
  try { grip.setPointerCapture(e.pointerId); } catch {}   // 合成事件没有真实指针，捕获会抛错
  drag = {id: e.pointerId, y0: e.clientY, h0: $('card').getBoundingClientRect().height, y: e.clientY, t: performance.now(), v: 0, moved: false};
  ctr.enabled = false;                                     // 拖抽屉时 3D 不跟着转
  sheetAnimEnd();
});

grip.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.id) return;
  const now = performance.now();
  drag.v = (drag.y - e.clientY) / Math.max(1, now - drag.t);   // 向上为正，px/ms
  drag.y = e.clientY; drag.t = now;
  if (Math.abs(e.clientY - drag.y0) > 6) drag.moved = true;
  if (!drag.moved) return;
  const h = Math.min(sheetH('max'), Math.max(SHEET_MIN, drag.h0 + drag.y0 - e.clientY));
  $('card').style.height = h + 'px';
});

function endDrag(e, cancel) {
  if (!drag || e.pointerId !== drag.id) return;
  const d = drag; drag = null;
  ctr.enabled = true;
  if (!d.moved) return;                                    // 没拖动：交给 click 当作点按
  dragEndT = performance.now();
  const order = ['min', 'mid', 'max'];
  let s = sheetState;
  if (!cancel) {
    const h = $('card').getBoundingClientRect().height;
    s = order.reduce((a, b) => Math.abs(sheetH(b) - h) < Math.abs(sheetH(a) - h) ? b : a);
    if (Math.abs(d.v) > .6) {                              // 快速一甩：朝甩的方向换到下一档
      const cur = order.indexOf(s), dir = d.v > 0 ? 1 : -1;
      if ((sheetH(s) - h) * dir < 0) s = order[Math.min(2, Math.max(0, cur + dir))];
    }
  }
  setSheet(s, true);
}
grip.addEventListener('pointerup', e => endDrag(e, false));
grip.addEventListener('pointercancel', e => endDrag(e, true));
grip.addEventListener('lostpointercapture', e => endDrag(e, false));

/* 点按（含键盘回车 / 空格）：min→mid→max→mid；方向键上下逐档 */
grip.addEventListener('click', () => {
  if (performance.now() - dragEndT < 400) return;          // 刚拖完的那一下 click 不算
  setSheet(sheetState === 'mid' ? 'max' : 'mid', true);
});
grip.addEventListener('keydown', e => {
  const order = ['min', 'mid', 'max'], k = order.indexOf(sheetState);
  if (e.key === 'ArrowUp' && k < 2) { e.preventDefault(); setSheet(order[k + 1], true); }
  if (e.key === 'ArrowDown' && k > 0) { e.preventDefault(); setSheet(order[k - 1], true); }
});

sheetLayout();
