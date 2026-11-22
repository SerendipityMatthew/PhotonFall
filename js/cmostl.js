/* 第 21 步抽屉里的「CMOS 技术首发行业时间线」：四条泳道（手机 / 安防·汽车 / 工业 / 相机），
   实心 = 这项技术最先在这个行业量产，空心 → = 之后传到这个行业。数据核对来源见第 21 步硬核区。 */

const CMT_LANES = [
  {k: 'phone', zh: '手机', en: 'Phones'},
  {k: 'auto', zh: '安防 / 汽车', en: 'Security / Auto'},
  {k: 'ind', zh: '工业', en: 'Industrial'},
  {k: 'cam', zh: '相机', en: 'Cameras'},
];
/* [年份, 行业, 中文, English, 首发?] */
const CMT = [
  [2000, 'cam', 'CMOS 进单反 · Canon EOS D30', 'CMOS in a DSLR · Canon EOS D30', 1],
  [2009, 'cam', '背照式 BSI · Sony 摄像机', 'BSI · Sony camcorder', 1],
  [2010, 'cam', '片上相位对焦 · Fujifilm F300EXR', 'On-sensor PDAF · Fujifilm F300EXR', 1],
  [2010, 'phone', 'BSI · iPhone 4', 'BSI · iPhone 4', 0],
  [2011, 'auto', '双转换增益 DCG · Aptina DR-Pix（约）', 'Dual conversion gain · Aptina DR-Pix (approx.)', 1],
  [2012, 'cam', '1 英寸大底 · RX100', '1-inch sensor · RX100', 1],
  [2013, 'phone', '堆栈式 · Xperia Z', 'Stacked · Xperia Z', 1],
  [2013, 'phone', '深沟槽隔离 DTI · ISOCELL', 'Deep trench isolation · ISOCELL', 1],
  [2013, 'ind', '全局快门 · Sony Pregius', 'Global shutter · Sony Pregius', 1],
  [2013, 'cam', '全像素双核对焦 · Canon 70D', 'Dual Pixel AF · Canon 70D', 1],
  [2014, 'phone', '片上相位对焦 · iPhone 6', 'On-sensor PDAF · iPhone 6', 0],
  [2014, 'phone', '1 英寸 · Panasonic CM1', '1-inch · Panasonic CM1', 0],
  [2015, 'cam', '三层堆栈 + DRAM · RX100 IV', '3-layer stack + DRAM · RX100 IV', 1],
  [2015, 'cam', 'BSI 全画幅 · α7R II', 'Full-frame BSI · α7R II', 0],
  [2016, 'phone', 'Cu-Cu 混合键合 · Galaxy S7', 'Cu-Cu hybrid bonding · Galaxy S7', 1],
  [2016, 'phone', '全像素双核 · Galaxy S7', 'Dual Pixel AF · Galaxy S7', 0],
  [2017, 'auto', 'LED 防闪烁 + HDR · IMX390', 'LED flicker mitigation + HDR · IMX390', 1],
  [2017, 'cam', '堆栈全画幅 · α9', 'Full-frame stacked · α9', 0],
  [2017, 'phone', '三层堆栈 · Xperia XZs', '3-layer stack · Xperia XZs', 0],
  [2018, 'phone', '四合一 Quad Bayer · P20 Pro', 'Quad Bayer · P20 Pro', 1],
  [2020, 'phone', 'SPAD LiDAR · iPhone 12 Pro', 'SPAD LiDAR · iPhone 12 Pro', 1],
  [2020, 'ind', '片上 AI 视觉传感器 · IMX500', 'On-sensor AI vision sensor · IMX500', 1],
  [2020, 'ind', 'InGaAs 短波红外 + Cu-Cu · IMX990', 'InGaAs SWIR + Cu-Cu · IMX990', 1],
  [2021, 'ind', '事件传感器 · IMX636', 'Event sensor · IMX636', 1],
  [2021, 'phone', '双转换增益 · Samsung GN2', 'Dual conversion gain · Samsung GN2', 0],
  [2022, 'auto', 'SPAD 车载 LiDAR · IMX459', 'SPAD automotive LiDAR · IMX459', 0],
  [2023, 'auto', 'LOFIC 单次曝光 HDR · OX08D10', 'LOFIC single-exposure HDR · OX08D10', 1],
  [2023, 'phone', '双层晶体管像素 · Xperia 1 V', 'Two-layer transistor pixel · Xperia 1 V', 1],
  [2023, 'cam', '全局快门全画幅 · α9 III', 'Full-frame global shutter · α9 III', 0],
  [2024, 'phone', 'LOFIC · OV50K40', 'LOFIC · OV50K40', 0],
];

function renderCmosTl() {
  const el = $('cmostl'), en = getLang() === 'en';
  const years = [...new Set(CMT.map(r => r[0]))];
  const cnt = k => CMT.filter(r => r[1] === k && r[4]).length;
  el.innerHTML = `<p class="cap">${en ? 'Which industry shipped each CMOS technology first. Solid = first in this industry; hollow → = spread here later.' : '每项 CMOS 技术最先在哪个行业量产。实心 = 首发；空心 → = 之后传到这个行业。'}</p>
    <div class="cmt" role="table" aria-label="${en ? 'CMOS technology first-adopter timeline' : 'CMOS 技术首发行业时间线'}">
      <div class="cmt-row cmt-head" role="row"><span role="columnheader"></span>${CMT_LANES.map(l => `<span role="columnheader" class="cmt-${l.k}">${en ? l.en : l.zh}<small>${cnt(l.k)} ${en ? 'firsts' : '项首发'}</small></span>`).join('')}</div>
      ${years.map(y => `<div class="cmt-row" role="row"><b role="rowheader">${y}</b>${CMT_LANES.map(l => `<span role="cell">${CMT.filter(r => r[0] === y && r[1] === l.k).map(r => `<i class="cmt-chip cmt-${l.k}${r[4] ? ' first' : ''}">${r[4] ? '' : '→ '}${en ? r[3] : r[2]}</i>`).join('')}</span>`).join('')}</div>`).join('')}
    </div>`;
}
renderCmosTl();
