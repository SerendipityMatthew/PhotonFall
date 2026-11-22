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
    quizBtn: '🎯 测验', quizBtnAria: '测验',
    pathsHint: '换个顺序看这些步（点开展开整条路径）：',
    pathBasics: '快速入门（9 步）', pathOptics: '光学工程师（9 步）',
    pathSemi: '半导体工程师（10 步）', pathColor: '色彩与显示（8 步）',
    tourFlowAria: '一张照片走过的路',
    flowLight: '光', flowLightSub: '景物反光',
    flowLens: '镜头', flowLensSub: '聚成像',
    flowSensor: '传感器', flowSensorSub: '光变成电',
    flowAdc: '电路', flowAdcSub: '电变数字',
    flowIsp: 'ISP', flowIspSub: '算出颜色',
    flowPhoto: '照片', flowPhotoSub: '存成文件',
    tourCap: '导览跟着光走到传感器表面为止。之后的事在芯片里，看不见：电路把每格攒下的电读成数字（RAW），ISP 再把这堆数字算成一张彩色照片，存进卡里（第 5 章）。',
    tourReplay: '重播',
    lensPick: '镜头', home: '首页',
    motorHint: '点上面「对到前景 / 主体 / 背景灯」或拖「对焦距离」，看马达怎么把对焦组推过去；默认是当前镜头用的马达。',
    motXD: 'XD 线性', motDLM: '双线性', motDDSSM: 'DDSSM 超声', motAuto: '自动来回',
    motAria: '对焦马达模拟：马达结构剖面和对焦组位置随时间变化',
    spadHint: 'SPAD 像素放慢 2.5 百万倍：绿点是被计到的光子，空心是死时间里丢掉的。把光调强，看计数怎么饱和。',
    spadRate: '入射光子', spadAria: 'SPAD 模拟：光子到达、节点电压、死时间，以及计数率随入射率饱和的曲线',
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
    quizBtn: '🎯 Quiz', quizBtnAria: 'Practice quiz',
    pathsHint: 'Other orderings of these steps (click to expand a path):',
    pathBasics: 'Basics (9 steps)', pathOptics: 'Optical engineer (9 steps)',
    pathSemi: 'Semiconductor engineer (10 steps)', pathColor: 'Color & display (8 steps)',
    tourFlowAria: 'The path of a photo',
    flowLight: 'Light', flowLightSub: 'Scene reflection',
    flowLens: 'Lens', flowLensSub: 'Focus to image',
    flowSensor: 'Sensor', flowSensorSub: 'Light → electrons',
    flowAdc: 'Circuit', flowAdcSub: 'Electrons → digits',
    flowIsp: 'ISP', flowIspSub: 'Compute colors',
    flowPhoto: 'Photo', flowPhotoSub: 'Save to file',
    tourCap: 'The tour follows light up to the sensor surface. What happens afterward lives inside the chip, invisible: circuits read each cell\\\'s charge into digits (RAW), the ISP turns those digits into a color photo, and writes it to the card (Chapter 5).',
    tourReplay: 'Replay',
    lensPick: 'Lens', home: 'Home',
    motorHint: 'Click "Focus on foreground / subject / background lights" above, or drag the focus slider, to watch the motor push the focus group. Defaults to the current lens\'s motor.',
    motXD: 'XD linear', motDLM: 'Double linear', motDDSSM: 'DDSSM piezo', motAuto: 'Auto back-and-forth',
    motAria: 'Focus motor simulator: motor cross-section and focus-group position over time',
    spadHint: 'A SPAD pixel slowed 2.5 million times: green dots are counted photons, hollow ones arrived during dead time and were lost. Turn the light up to watch counting saturate.',
    spadRate: 'Incident photons', spadAria: 'SPAD simulator: photon arrivals, node voltage, dead time, and count rate saturating with incident rate',
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
  /* 刷新 3D 场景 label */
  document.querySelectorAll('.lb').forEach(el => {
    const key = el.dataset.labelKey;
    if (!key) return;
    el.textContent = (lang === 'en' && typeof LABEL_EN === 'object' && LABEL_EN[key]) ? LABEL_EN[key] : key;
  });
  /* 重渲染当前步（让 step title / lead / card 跟语言切换）*/
  if (typeof step === 'number') {
    if (typeof renderPanel === 'function') renderPanel(step);
    if (typeof renderCard === 'function') renderCard(step);
    if (typeof syncPager === 'function') syncPager(step);
    if (typeof syncSideTree === 'function') syncSideTree(step);
  }
  if (typeof renderLensDb === 'function') renderLensDb();
  if (typeof syncMotorBtns === 'function') syncMotorBtns();
  if (typeof renderLanding === 'function') renderLanding();
  if (typeof renderTlPanels === 'function') renderTlPanels();
  /* 当前若在 quiz 视图，重渲染 */
  const qv = document.getElementById('quizview');
  if (qv && !qv.hidden) {
    if (typeof quizState !== 'undefined' && quizState) {
      if (typeof renderQuizQuestion === 'function') renderQuizQuestion();
    } else {
      if (typeof renderQuizIndex === 'function') renderQuizIndex();
    }
  }
}

window.t = t; window.getLang = getLang; window.setLang = setLang; window.applyLang = applyLang;
