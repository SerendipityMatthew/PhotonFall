/* 第 21 步抽屉里的「CMOS 技术首发行业时间线」：四条泳道（手机 / 安防·汽车 / 工业 / 相机），
   实心 = 这项技术最先在这个行业量产，空心 → = 之后传到这个行业。数据核对来源见第 21 步硬核区。 */

const CMT_LANES = [
  {k: 'phone', zh: '手机', en: 'Phones'},
  {k: 'auto', zh: '安防 / 汽车', en: 'Security / Auto'},
  {k: 'ind', zh: '工业', en: 'Industrial'},
  {k: 'cam', zh: '相机', en: 'Cameras'},
];
/* [年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号（同一技术首发和流向共用，独立时间线页用来串起来）] */
const CMT = [
  [2000, 'cam', 'CMOS 进单反 · Canon EOS D30', 'CMOS in a DSLR · Canon EOS D30', 1, 'dslr'],
  [2005, 'auto', '全局快门 CMOS · Micron MT9V022（TrueSNAP）', 'Global shutter CMOS · Micron MT9V022 (TrueSNAP)', 1, 'gs'],
  [2009, 'cam', '背照式 BSI · Sony 摄像机', 'BSI · Sony camcorder', 1, 'bsi'],
  [2010, 'cam', '片上相位对焦 · Fujifilm F300EXR', 'On-sensor PDAF · Fujifilm F300EXR', 1, 'pdaf'],
  [2010, 'phone', 'BSI · iPhone 4', 'BSI · iPhone 4', 0, 'bsi'],
  [2011, 'auto', '双转换增益 DCG · Aptina DR-Pix（约）', 'Dual conversion gain · Aptina DR-Pix (approx.)', 1, 'dcg'],
  [2012, 'cam', '1 英寸大底 · RX100', '1-inch sensor · RX100', 1, 'inch'],
  [2013, 'phone', '堆栈式 · Xperia Z', 'Stacked · Xperia Z', 1, 'stack'],
  [2013, 'phone', '深沟槽隔离 DTI · ISOCELL', 'Deep trench isolation · ISOCELL', 1, 'dti'],
  [2013, 'ind', '全局快门 · Sony Pregius', 'Global shutter · Sony Pregius', 0, 'gs'],
  [2013, 'cam', '全像素双核对焦 · Canon 70D', 'Dual Pixel AF · Canon 70D', 1, 'dpaf'],
  [2014, 'phone', 'SPAD 测距 · LG G3 激光对焦（ST FlightSense）', 'SPAD ranging · LG G3 laser AF (ST FlightSense)', 1, 'spad'],
  [2014, 'phone', '片上相位对焦 · iPhone 6', 'On-sensor PDAF · iPhone 6', 0, 'pdaf'],
  [2014, 'phone', '1 英寸 · Panasonic CM1', '1-inch · Panasonic CM1', 0, 'inch'],
  [2015, 'cam', '三层堆栈 + DRAM · RX100 IV', '3-layer stack + DRAM · RX100 IV', 1, 'dram'],
  [2015, 'cam', 'BSI 全画幅 · α7R II', 'Full-frame BSI · α7R II', 0, 'bsi'],
  [2016, 'phone', 'Cu-Cu 混合键合 · Galaxy S7', 'Cu-Cu hybrid bonding · Galaxy S7', 1, 'cucu'],
  [2016, 'phone', '全像素双核 · Galaxy S7', 'Dual Pixel AF · Galaxy S7', 0, 'dpaf'],
  [2017, 'auto', 'LED 防闪烁 + HDR · IMX390', 'LED flicker mitigation + HDR · IMX390', 1, 'lfm'],
  [2017, 'cam', '堆栈全画幅 · α9', 'Full-frame stacked · α9', 0, 'stack'],
  [2017, 'phone', '三层堆栈 · Xperia XZs', '3-layer stack · Xperia XZs', 0, 'dram'],
  [2018, 'phone', '四合一 Quad Bayer · P20 Pro', 'Quad Bayer · P20 Pro', 1, 'quad'],
  [2020, 'phone', 'SPAD LiDAR · iPhone 12 Pro', 'SPAD LiDAR · iPhone 12 Pro', 2, 'spad'],
  [2020, 'ind', '堆栈背照全局快门 · Sony Pregius S', 'Stacked BSI global shutter · Sony Pregius S', 2, 'gs'],
  [2020, 'cam', '全局快门电影机 · RED Komodo 6K', 'Global-shutter cinema camera · RED Komodo 6K', 0, 'gs'],
  [2020, 'ind', '片上 AI 视觉传感器 · IMX500', 'On-sensor AI vision sensor · IMX500', 1, 'ai'],
  [2020, 'ind', 'InGaAs 短波红外 + Cu-Cu · IMX990', 'InGaAs SWIR + Cu-Cu · IMX990', 1, 'swir'],
  [2021, 'ind', '事件传感器 · IMX636', 'Event sensor · IMX636', 1, 'event'],
  [2021, 'phone', '双转换增益 · Samsung GN2', 'Dual conversion gain · Samsung GN2', 0, 'dcg'],
  [2022, 'auto', 'SPAD 车载 LiDAR · IMX459', 'SPAD automotive LiDAR · IMX459', 0, 'spad'],
  [2023, 'auto', 'LOFIC 单次曝光 HDR · OX08D10', 'LOFIC single-exposure HDR · OX08D10', 1, 'lofic'],
  [2023, 'phone', '双层晶体管像素 · Xperia 1 V', 'Two-layer transistor pixel · Xperia 1 V', 1, 'twolayer'],
  [2022, 'phone', '超构透镜 metalens · ST ToF 模组（Metalenz）', 'Metalens · ST ToF module (Metalenz)', 1, 'meta'],
  [2023, 'auto', 'SPAD 监控相机 · Canon MS-500', 'SPAD surveillance camera · Canon MS-500', 0, 'spad'],
  [2023, 'cam', '全局快门全画幅 · α9 III', 'Full-frame global shutter · α9 III', 2, 'gs'],
  [2024, 'phone', 'LOFIC · OV50K40', 'LOFIC · OV50K40', 0, 'lofic'],
  [2026, 'phone', 'LOFIC · Sony LYTIA L910', 'LOFIC · Sony LYTIA L910', 2, 'lofic'],
  [2024, 'phone', '偏振超构表面人脸解锁 · Polar ID 采用三星 ISOCELL Vizion 931（发布）', 'Polarization metasurface face unlock · Polar ID with Samsung ISOCELL Vizion 931 (announced)', 2, 'meta'],
];

/* 每项技术一句话说明（独立时间线页 cmos-timeline.html 用） */
const CMT_DESC = {
  dslr: ['CMOS 第一次进入单反主传感器，开始取代 CCD。', 'CMOS first becomes a DSLR main sensor and starts replacing CCD.'],
  bsi: ['把金属布线挪到光电二极管背面，进光量约翻倍。', 'Wiring moved behind the photodiode, roughly doubling light collection.'],
  pdaf: ['在传感器上放一部分相位检测像素，取景同时就能测焦。', 'Some phase-detect pixels on the sensor itself measure focus while you frame.'],
  dcg: ['同一个像素切换两档转换增益，暗处低噪、亮处不溢出。', 'One pixel switches between two conversion gains: low noise in shadows, headroom in highlights.'],
  inch: ['把 1 英寸大底塞进小机身，画质跳一个台阶。', 'A 1-inch sensor in a small body, a step up in image quality.'],
  stack: ['像素层和逻辑电路层分成两片晶圆叠起来，像素面积和电路都更大。', 'Pixel layer and logic on separate stacked wafers: more room for both.'],
  dti: ['像素之间挖深沟隔开，小像素不再串色。', 'Deep trenches between pixels stop crosstalk in small pixels.'],
  gs: ['每个像素自带存储节点，整帧同一瞬间曝光，不再果冻。最早用在车载和机器视觉，2020 年进电影机，2023 年进全画幅相机。', 'Every pixel has its own storage node; the whole frame exposes at once, no jello. First in automotive and machine vision, then cinema cameras (2020) and full-frame cameras (2023).'],
  dpaf: ['每个像素一分为二，全画面都能相位对焦。', 'Every pixel split in two, so the whole frame can phase-detect focus.'],
  dram: ['像素、逻辑之外再叠一层 DRAM 缓存，读出快到 960 fps。', 'A DRAM layer stacked under pixel and logic, enabling 960 fps readout.'],
  cucu: ['两片晶圆的每个连接点直接铜对铜键合，取代 TSV。', 'Direct copper-to-copper bonds join the wafers, replacing TSVs.'],
  lfm: ['分裂像素 + HDR，拍 LED 红绿灯和车灯不再闪烁。', 'Split pixel plus HDR: LED traffic lights and headlights no longer flicker.'],
  quad: ['四个同色小像素一组，暗处合并、亮处拆开。', 'Four same-colour small pixels per group: binned in the dark, split in bright light.'],
  spad: ['单光子雪崩二极管测光的飞行时间，直接得到距离；先做手机激光对焦，再到 LiDAR、车载和夜视监控。', 'Single-photon avalanche diodes time light to get distance: phone laser AF first, then LiDAR, cars and night surveillance.'],
  meta: ['一层纳米柱靠相位聚焦，取代多片小镜片；先量产在单波长红外 ToF 模组里。', 'A single layer of nanopillars focuses by phase, replacing several small lenses; first shipped in single-wavelength IR ToF modules.'],
  ai: ['传感器下层直接放 AI 处理器，只输出识别结果。', 'An AI processor in the sensor stack outputs results instead of images.'],
  swir: ['InGaAs 感光层和硅读出电路铜铜键合，看见短波红外。', 'InGaAs photodiodes Cu-Cu bonded to silicon readout to see short-wave infrared.'],
  event: ['像素只在亮度变化时输出事件，没有帧的概念。', 'Pixels output events only when brightness changes; no frames at all.'],
  lofic: ['溢出的电子存进像素旁的电容，单次曝光就有超高动态范围。原理由东北大学 Sugawa 组 2005 年在 ISSCC 提出，2023 年才先在车载量产。', 'Overflow electrons go into an in-pixel capacitor for single-exposure HDR. Proposed by Sugawa\'s Tohoku group at ISSCC 2005; first mass-produced in cars in 2023.'],
  twolayer: ['光电二极管和像素晶体管分到两层，满阱约翻倍。', 'Photodiode and pixel transistors on separate layers, roughly doubling full well.'],
};

function renderCmosTl() {
  const el = document.getElementById('cmostl'), en = getLang() === 'en';
  if (!el) return;
  const years = [...new Set(CMT.map(r => r[0]))].sort((a, b) => a - b);
  const cnt = k => CMT.filter(r => r[1] === k && r[4] === 1).length;
  el.innerHTML = `<p class="cap">${en ? 'Which industry shipped each CMOS technology first. Solid = first in this industry; hollow → = spread here later; ◆ = later milestone in the same industry.' : '每项 CMOS 技术最先在哪个行业量产。实心 = 首发；空心 → = 之后传到这个行业；◆ = 同一行业后来的里程碑。'} <a href="cmos-timeline.html" target="_blank" rel="noopener">${en ? 'Full-page timeline ↗' : '全屏时间线 ↗'}</a></p>
    <div class="cmt" role="table" aria-label="${en ? 'CMOS technology first-adopter timeline' : 'CMOS 技术首发行业时间线'}">
      <div class="cmt-row cmt-head" role="row"><span role="columnheader"></span>${CMT_LANES.map(l => `<span role="columnheader" class="cmt-${l.k}">${en ? l.en : l.zh}<small>${cnt(l.k)} ${en ? 'firsts' : '项首发'}</small></span>`).join('')}</div>
      ${years.map(y => `<div class="cmt-row" role="row"><b role="rowheader">${y}</b>${CMT_LANES.map(l => `<span role="cell">${CMT.filter(r => r[0] === y && r[1] === l.k).map(r => `<i class="cmt-chip cmt-${l.k}${r[4] === 1 ? ' first' : ''}">${['→ ', '', '◆ '][r[4]]}${en ? r[3] : r[2]}</i>`).join('')}</span>`).join('')}</div>`).join('')}
    </div>`;
}
renderCmosTl();
