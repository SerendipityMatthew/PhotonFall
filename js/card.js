/* 浮动小卡与详细抽屉：每步把面板搬到卡片或抽屉里，填位置文字和来龙去脉小药丸。
   依赖 STEPS / CHAPTERS（steps.js）、CARD_CTL / locText（layout.js）、$（core.js）；
   evoForStep（evolution.js）、navigate / route（app.js）只在运行时调用。 */

let drawerOpen = false, drawerTab = 'deep', cardFolded = false;

/* 所有面板按 HTML 里的顺序记下来；不用的时候都停在 #parking */
const PANELS = [...$('parking').children];

/* 关键小图如果是某个面板里的一部分（取景器、画布、ISP 第 ⑨ 张），搬走时在原处留个注释占位，
   下一步先放回去，原面板的结构就不会乱 */
let figMoved = [];
function figOut(el, dest) {
  const ph = document.createComment('fig:' + (el.id || ''));
  el.replaceWith(ph);
  dest.appendChild(el);
  figMoved.push({el, ph});
}
function figBack() {
  for (const {el, ph} of figMoved.reverse()) ph.replaceWith(el);
  figMoved = [];
}

/* 让 dest 的子元素按 list 的顺序排；已经在位的不动（免得正在聚焦的控件失焦） */
function arrange(dest, list) {
  list.forEach((el, k) => { if (dest.children[k] !== el) dest.insertBefore(el, dest.children[k] || null); });
  while (dest.children.length > list.length) $('parking').appendChild(dest.children[list.length]);
}

function placePanels(i) {
  const s = STEPS[i], fig = s.fig ? $(s.fig) : null, figIsPanel = PANELS.includes(fig);
  closeZoom(false);                                        // 放大着的小图先放回原处，再整理
  figBack();
  if (fig && !figIsPanel) {
    const cap = fig.nextElementSibling;
    figOut(fig, $('cardfig'));
    if (cap && cap.classList.contains('cap')) figOut(cap, $('cardfig'));   // 图下的说明跟着图走
  }
  const ctl = [], figs = [];
  for (const el of PANELS) {
    if (el.hidden) { if (el.parentNode !== $('parking')) $('parking').appendChild(el); }
    else if (el === fig) $('cardfig').appendChild(el);
    else if (CARD_CTL.includes(el.id)) ctl.push(el);
    else if (el.children.length) figs.push(el);
    else $('parking').appendChild(el);                     // 图搬走后空了的面板
  }
  arrange($('cardctl'), ctl);
  arrange($('drawerfigs'), figs);
  syncTabs();
}

/* ---------- 抽屉 ---------- */
const TABS = {deep: 'tabdeep', evo: 'tabevo', comp: 'tabcomp'};
const tabBtn = k => document.querySelector(`[data-tab="${k}"]`);

function tabHasContent(k) {
  if (k === 'deep') return !!($('drawerfigs').children.length || $('adv').innerHTML.trim() || $('hard').innerHTML.trim());
  if (k === 'evo') return !!$('evo').children.length;
  return !$('compwrap').hidden;
}

function showTab(k) {
  drawerTab = k;
  for (const t in TABS) {
    $(TABS[t]).hidden = t !== k;
    tabBtn(t).setAttribute('aria-selected', String(t === k));
  }
}

/* 没内容的标签藏起来；当前标签被藏了就换到第一个还在的 */
function syncTabs() {
  for (const t in TABS) tabBtn(t).hidden = !tabHasContent(t);
  if (tabBtn(drawerTab).hidden) {
    const first = Object.keys(TABS).find(t => !tabBtn(t).hidden);
    if (first) drawerTab = first;
  }
  showTab(drawerTab);
}

function openDrawer(tab) {
  if (tab) drawerTab = tab;
  syncTabs();
  drawerOpen = true;
  $('drawer').hidden = false;
  $('detailbtn').setAttribute('aria-expanded', 'true');
  $('drawert').focus({preventScroll: true});
}

function closeDrawer() {
  if (!drawerOpen) return;
  drawerOpen = false;
  $('drawer').hidden = true;
  $('detailbtn').setAttribute('aria-expanded', 'false');
  $('detailbtn').focus({preventScroll: true});
}

/* ---------- 卡片收起 ---------- */
/* 收起后只剩一条「标题 · 展开」；切步时保持 */
function toggleCard(force) {
  cardFolded = force === undefined ? !cardFolded : !!force;
  $('card').classList.toggle('folded', cardFolded);
  $('cardfold').textContent = cardFolded ? '展开' : '收起';
  $('cardfold').setAttribute('aria-expanded', String(!cardFolded));
}

/* ---------- 小图放大 ---------- */
/* 把小图本身搬进放大层（画面继续实时更新），原处留注释占位，关闭时放回 */
let zoomed = null;
function openZoom(el) {
  if (!el || zoomed) return;
  const cap = el.nextElementSibling;
  $('zoomcap').textContent = cap && cap.classList.contains('cap') ? cap.textContent : '';
  const ph = document.createComment('zoom');
  el.replaceWith(ph);
  $('zoombody').appendChild(el);
  zoomed = {el, ph};
  $('zoom').hidden = false;
  $('zoomclose').focus({preventScroll: true});
}

function closeZoom(refocus = true) {
  if (!zoomed) return;
  zoomed.ph.replaceWith(zoomed.el);
  zoomed = null;
  $('zoom').hidden = true;
  if (refocus) $('cardfig').focus({preventScroll: true});
}

/* ---------- 卡片 ---------- */
function renderCard(i) {
  const fa = document.activeElement;
  $('loc').textContent = locText(i, STEPS, CHAPTERS);

  $('cardevo').innerHTML = evoForStep(i).map(e =>
    `<button type="button" class="evo-chip" data-id="${e.id}"><span aria-hidden="true">🕰</span> <time>${e.year}</time> · ${e.title}</button>`).join('');

  $('nextt').textContent = i < STEPS.length - 1 ? STEPS[i + 1].t : '';
  $('prev').title = i > 0 ? '上一步：' + STEPS[i - 1].t : '';
  $('prev').disabled = i === 0;
  $('next').disabled = i === STEPS.length - 1;
  /* 焦点所在的按钮刚变成不可用：交给另一个按钮，免得掉到 <body> */
  if (fa === $('next') && fa.disabled) $('prev').focus();
  if (fa === $('prev') && fa.disabled) $('next').focus();

  $('card').scrollTop = 0;
  for (const t in TABS) $(TABS[t]).scrollTop = 0;
}

/* ---------- 事件 ---------- */
$('cardevo').addEventListener('click', e => {
  const b = e.target.closest('.evo-chip');
  if (b) navigate({view: 'timeline', id: b.dataset.id});
});
$('detailbtn').onclick = () => drawerOpen ? closeDrawer() : openDrawer();
$('drawerclose').onclick = closeDrawer;
document.querySelector('.drawer-tabs').addEventListener('click', e => {
  const b = e.target.closest('[data-tab]');
  if (b) showTab(b.dataset.tab);
});
$('tlbtn').onclick = () => navigate({view: 'timeline', id: null});
$('cardfold').onclick = () => toggleCard();
$('title').addEventListener('click', () => { if (cardFolded) toggleCard(false); });

/* 点关键小图（或聚焦后按回车 / 空格）放大；点放大层的空白处或 × 关闭 */
$('cardfig').addEventListener('click', () => openZoom($('cardfig').firstElementChild));
$('cardfig').addEventListener('keydown', e => {
  if (e.target !== $('cardfig') || (e.key !== 'Enter' && e.key !== ' ')) return;
  e.preventDefault();
  openZoom($('cardfig').firstElementChild);
});
$('zoom').addEventListener('click', e => { if (e.target === $('zoom')) closeZoom(); });
$('zoomclose').onclick = () => closeZoom();

/* Esc 先关放大的小图，再关抽屉（最小版；Task 8 换成分层的 Esc 处理）。时间轴里的 Esc 归 timeline.js */
addEventListener('keydown', e => {
  if (zoomed && e.key === 'Tab') { e.preventDefault(); $('zoomclose').focus(); return; }   // 焦点留在放大层里
  if (e.key !== 'Escape' || (route && route.view === 'timeline')) return;
  if (zoomed) { e.preventDefault(); closeZoom(); }
  else if (drawerOpen) { e.preventDefault(); closeDrawer(); }
});
