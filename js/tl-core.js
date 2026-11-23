/* 技术首发时间线的公共部分：各主题（CMOS、镜头……）把数据登记到 TIMELINES，
   这里负责主站「详细」抽屉里的四泳道小图；独立全屏页见 js/tl-page.js。
   数据行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。 */
const TIMELINES = {};

/* 规整：同一技术第二次进入同一个行业，不算「传入」，改成「里程碑」，免得「之后传到」里出现两个同行业。 */
function tlNormalize(rows) {
  const seen = {};
  const rank = {1: 0, 0: 1, 2: 2};   // 同年先首发，再传入，最后里程碑
  [...rows].sort((a, b) => a[0] - b[0] || rank[a[4]] - rank[b[4]]).forEach(r => {
    const s = seen[r[5]] ||= new Set();
    if (r[4] === 0 && s.has(r[1])) r[4] = 2;
    s.add(r[1]);
  });
  return rows;
}

function renderTlPanel(key) {
  const D = TIMELINES[key], el = D && document.getElementById(D.el);
  if (!el) return;
  tlNormalize(D.rows);
  const en = typeof getLang === 'function' && getLang() === 'en', t = D.text[en ? 'en' : 'zh'];
  const years = [...new Set(D.rows.map(r => r[0]))].sort((a, b) => a - b);
  const cnt = k => D.rows.filter(r => r[1] === k && r[4] === 1).length;
  el.innerHTML = `<p class="cap">${t.panelCap} ${en ? 'Solid = first in this industry; hollow → = spread here later; ◆ = later milestone in the same industry.' : '实心 = 首发；空心 → = 之后传到这个行业；◆ = 同一行业后来的里程碑。'} <a href="${D.page}" target="_blank" rel="noopener">${en ? 'Full-page timeline ↗' : '全屏时间线 ↗'}</a></p>
    <div class="cmt" role="table" aria-label="${t.title}">
      <div class="cmt-row cmt-head" role="row"><span role="columnheader"></span>${D.lanes.map(l => `<span role="columnheader" class="cmt-${l.k}">${en ? l.en : l.zh}<small>${cnt(l.k)} ${en ? 'firsts' : '项首发'}</small></span>`).join('')}</div>
      ${years.map(y => `<div class="cmt-row" role="row"><b role="rowheader">${y}</b>${D.lanes.map(l => `<span role="cell">${D.rows.filter(r => r[0] === y && r[1] === l.k).map(r => `<a href="${D.page}#h=${r[5]}" class="cmt-chip cmt-${l.k}${r[4] === 1 ? ' first' : ''}">${['→ ', '', '◆ '][r[4]]}${en ? r[3] : r[2]}</a>`).join('')}</span>`).join('')}</div>`).join('')}
    </div>`;
}
function renderTlPanels() { Object.keys(TIMELINES).forEach(renderTlPanel); }
