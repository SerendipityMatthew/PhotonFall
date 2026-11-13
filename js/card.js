/* 浮动小卡与详细抽屉：每步把面板搬到卡片或抽屉里，填位置文字和来龙去脉小药丸。
   依赖 STEPS / CHAPTERS（steps.js）、CARD_CTL / locText（layout.js）、$（core.js）；
   evoForStep（evolution.js）、navigate / route（app.js）只在运行时调用。 */

let drawerOpen = false, drawerTab = 'deep', cardFolded = false;

/* 手机（≤768px）：小卡变底部抽屉（sheet.js）。只在这一处判断，变宽变窄时 sheet.js 重新布置 */
const PHONE = matchMedia('(max-width:768px)'), isPhone = () => PHONE.matches;

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
  /* 取景器步骤控件很多：取景器放在控件上面，打开卡片就能看到拖滑块的效果；其他步骤控件在前。
     顺序已对就不动（免得卡片里正聚焦的控件失焦）；抽屉标签由 go() 在列完元器件后统一更新 */
  const figFirst = s.fig === 'vffig', [a, b] = figFirst ? [$('cardfig'), $('cardctl')] : [$('cardctl'), $('cardfig')];
  if (a.nextElementSibling !== b) b.before(a);
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
    const btn = tabBtn(t);
    btn.setAttribute('aria-selected', String(t === k));
    btn.tabIndex = t === k ? 0 : -1;   // roving tabindex: only active tab in tab order
  }
}

/* 没内容的标签藏起来；当前标签被藏了就换到第一个还在的；全都没内容时禁用入口按钮 */
function syncTabs() {
  for (const t in TABS) tabBtn(t).hidden = !tabHasContent(t);
  if (tabBtn(drawerTab).hidden) {
    const first = Object.keys(TABS).find(t => !tabBtn(t).hidden);
    if (first) drawerTab = first;
  }
  showTab(drawerTab);
  /* 全部标签都无内容：禁用详细按钮（defensive edge case） */
  const hasAny = Object.keys(TABS).some(t => !tabBtn(t).hidden);
  $('detailbtn').disabled = !hasAny;
}

function openDrawer(tab) {
  if (tab) drawerTab = tab;
  syncTabs();
  drawerOpen = true;
  $('drawer').hidden = false;
  $('detailbtn').setAttribute('aria-expanded', 'true');
  if (isPhone() && sheetState !== 'max') setSheet('max', true);   // 手机：三个标签就在底部抽屉里，抽屉拉到最高
  $('drawert').focus({preventScroll: true});
}

function closeDrawer(refocus = true) {
  if (!drawerOpen) return;
  drawerOpen = false;
  $('drawer').hidden = true;
  $('detailbtn').setAttribute('aria-expanded', 'false');
  if (isPhone() && sheetState === 'max') setSheet('mid', true);    // 手机：回到默认高度
  if (refocus) $('detailbtn').focus({preventScroll: true});
}

/* ---------- 卡片收起 ---------- */
/* 收起后只剩一条「标题 · 展开」；切步时保持 */
function toggleCard(force) {
  cardFolded = force === undefined ? !cardFolded : !!force;
  if (isPhone()) { setSheet(cardFolded ? 'min' : 'mid', true); return; }   // 手机：收起 = 抽屉最低一档
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
  $('loc').textContent = (isPhone() ? locShort : locText)(i, STEPS, CHAPTERS);

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
$('detailbtn').onclick = () => {
  if (drawerOpen) return closeDrawer();
  openDrawer();
  if (isPhone()) $('card').scrollTop = $('drawer').offsetTop - $('grip').offsetHeight;   // 手机：直接看到标签
};
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

/* 统一 Esc 分层处理：每次只关最上层，依次为：
   放大小图 → 目录弹层 → 操作提示 → 元器件说明卡片 → 详细抽屉（时间轴里跳过） → 时间轴抽屉。
   Tab 在放大层里循环，不离开。Range 输入框不使用 Esc，无需特殊处理。 */
addEventListener('keydown', e => {
  if (zoomed && e.key === 'Tab') { e.preventDefault(); $('zoomclose').focus(); return; }
  if (e.key !== 'Escape') return;
  // 1. 放大小图
  if (zoomed) { e.preventDefault(); closeZoom(); return; }
  // 2. 目录弹层
  if (!$('toc').hidden) { e.preventDefault(); closeToc(); return; }
  // 3. 操作提示
  if (!$('onboard').hidden) { e.preventDefault(); markOnboard(); hideOnboard(); return; }   // Esc 也算看过，下次不再自动弹
  // 4. 元器件说明卡片（由 components.js 创建，id=compcard）
  const cc = document.getElementById('compcard'); if (cc && !cc.hidden) { e.preventDefault(); cc.hidden = true; return; }
  // 5. 详细抽屉（手机 max 档回到 mid；其他情况关闭）。在时间轴里它被盖住看不见，跳过，回讲解时还要恢复
  const inTimeline = typeof route !== 'undefined' && route && route.view === 'timeline';
  if (drawerOpen && !inTimeline) {
    e.preventDefault();
    if (isPhone() && sheetState === 'max') { setSheet('mid', true); $('detailbtn').focus({preventScroll: true}); }   // 焦点和电脑一样回到「详细」
    else closeDrawer();
    return;
  }
  // 6. 时间轴抽屉
  if (inTimeline && !$('tldrawer').hidden) {
    e.preventDefault();
    navigate({view: 'timeline', id: null});
  }
});

/* ---------- 目录弹层 ---------- */
let tocOpener = null;

function buildToc() {
  $('tocbody').innerHTML = CHAPTERS.map(ch => {
    const steps = [];
    for (let i = 0; i < STEPS.length; i++) if (STEPS[i].ch === ch.id) steps.push(i);
    return '<section class="toc-ch"><h3 class="toc-chname">' + ch.name + '</h3>' +
      steps.map(i => '<button type="button" class="toc-step" data-i="' + i + '"' +
        (i === step ? ' aria-current="true"' : '') + '>' + STEPS[i].t + '</button>').join('') +
      '</section>';
  }).join('');
}

function openToc(opener) {
  tocOpener = opener || $('tocbtn');
  buildToc();
  $('toc').hidden = false;
  const cur = $('toc').querySelector('[aria-current="true"]');
  if (cur) { cur.scrollIntoView({block: 'nearest'}); cur.focus({preventScroll: true}); }
}

function closeToc() {
  if ($('toc').hidden) return;
  $('toc').hidden = true;
  if (tocOpener) tocOpener.focus({preventScroll: true});
}

/* ---------- 标签键盘导航：左右方向键在可见标签之间循环 ---------- */
document.querySelector('.drawer-tabs').addEventListener('keydown', e => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  const keys = Object.keys(TABS).filter(t => !tabBtn(t).hidden);
  if (keys.length < 2) return;
  const cur = keys.indexOf(drawerTab);
  if (cur === -1) return;
  e.preventDefault();
  e.stopPropagation();   // 阻止冒泡到 window，避免 app.js 同时切换步骤
  const dir = e.key === 'ArrowRight' ? 1 : -1;
  const next = (cur + dir + keys.length) % keys.length;
  showTab(keys[next]);
  tabBtn(keys[next]).focus();
});

$('tocbtn').onclick = () => openToc($('tocbtn'));
$('tocclose').onclick = closeToc;
$('toc').addEventListener('click', e => {
  const b = e.target.closest('[data-i]');
  if (b) {
    /* 选了步骤：直接关闭弹层（不还焦点给开启按钮），导航，最后把焦点稳在 #title。
       这样无论从顶栏还是时间轴里的目录跳步，时间轴和弹层都已消失，#title 始终可见。 */
    $('toc').hidden = true;
    navigate({view: 'step', n: +b.dataset.i});
    $('title').focus({preventScroll: true});
  } else if (e.target === $('toc')) closeToc();   // 点弹层外：还焦点给开启按钮
});
