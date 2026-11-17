/* 双语：UI chrome 和章节名。step 内容（title / lead / adv / hard / key）暂未翻译，按 lang 显示原中文。 */

const I18N = {
  zh: {
    menu: '目录', timeline: '时间轴', labels: '标注', help: '操作提示',
    collapse: '收起', expand: '展开', detail: '详细', 'detail-arrow': '详细 ↗',
    prev: '上一步', next: '下一步：', close: '关闭', zoomSmall: '放大这张小图',
    cardGrip: '调整讲解栏高度',
    drawerTitle: '详细', tabDeep: '深入', tabEvo: '来龙去脉', tabComp: '元器件',
    hAdv: '进阶', hHard: '硬核', hRefs: '来源', hRel: '相关知识点',
    stepComps: '本步元器件',
    tocTitle: '目录', allRefsBtn: '📚 所有参考资料', allRefsTitle: '所有参考资料',
    pagerNav: '步骤导航', sidetreeNav: '课程目录',
    zoomDialog: '放大的小图', nextSlide: '下一张',
    langSwitch: 'EN', langSwitchAria: '切换语言：English',
  },
  en: {
    menu: 'Menu', timeline: 'Timeline', labels: 'Labels', help: 'Help',
    collapse: 'Collapse', expand: 'Expand', detail: 'Detail', 'detail-arrow': 'Detail ↗',
    prev: 'Prev', next: 'Next: ', close: 'Close', zoomSmall: 'Zoom this figure',
    cardGrip: 'Adjust panel height',
    drawerTitle: 'Detail', tabDeep: 'Deep Dive', tabEvo: 'How It Came To Be', tabComp: 'Components',
    hAdv: 'Advanced', hHard: 'Hardcore', hRefs: 'Sources', hRel: 'Related',
    stepComps: 'Components in this step',
    tocTitle: 'Contents', allRefsBtn: '📚 All References', allRefsTitle: 'All References',
    pagerNav: 'Step navigation', sidetreeNav: 'Course outline',
    zoomDialog: 'Zoomed figure', nextSlide: 'Next',
    langSwitch: '中', langSwitchAria: 'Switch language: 中文',
  },
};

const DEFAULT_LANG = 'zh';
function getLang() {
  try { return localStorage.getItem('photonfall_lang') || DEFAULT_LANG; } catch(e) { return DEFAULT_LANG; }
}
function setLang(lang) {
  try { localStorage.setItem('photonfall_lang', lang); } catch(e) {}
  applyLang();
}
function t(key) {
  const d = I18N[getLang()] || I18N[DEFAULT_LANG];
  return d[key] ?? I18N[DEFAULT_LANG][key] ?? key;
}

function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  /* 让 pager / sidetree 换成对应语言的章节名 */
  if (typeof buildPager === 'function') buildPager();
  if (typeof buildSideTree === 'function') buildSideTree();
  if (typeof step === 'number') {
    if (typeof syncPager === 'function') syncPager(step);
    if (typeof syncSideTree === 'function') syncSideTree(step);
  }
}

window.t = t; window.getLang = getLang; window.setLang = setLang; window.applyLang = applyLang;
