/* 主页「常见镜头」：Sony FE 代表镜头。参数以 Sony 官网为准。
   视角按全画幅对角线 43.27 mm 算；入瞳 D = f / N，同样构图下 D 越大背景越虚。 */

const LENSES = [
  {n:'FE 16-35mm F2.8 GM II', f:[16,35], N:2.8, b:11, g:547, zh:'超广角：风光、建筑、星空', en:'Ultra-wide: landscape, architecture, astro'},
  {n:'FE 24mm F1.4 GM', f:[24], N:1.4, b:11, g:445, zh:'广角定焦：星空、环境人像、街拍', en:'Wide prime: astro, environmental portrait, street'},
  {n:'FE 24-70mm F2.8 GM II', f:[24,70], N:2.8, b:11, g:695, zh:'标准变焦：一支走天下', en:'Standard zoom: the do-everything lens'},
  {n:'FE 50mm F1.2 GM', f:[50], N:1.2, b:11, g:778, zh:'标准大光圈：人像、暗光，虚化最强的标头', en:'Fast standard: portrait, low light, strongest-bokeh 50'},
  {n:'FE 85mm F1.8', f:[85], N:1.8, b:9, g:371, zh:'人像定焦：便宜轻巧的虚化入门', en:'Portrait prime: light, affordable bokeh starter'},
  {n:'FE 90mm F2.8 Macro G OSS', f:[90], N:2.8, b:9, g:602, zh:'微距：1:1 放大，花、昆虫、产品', en:'Macro: 1:1 magnification, flowers, insects, products'},
  {n:'FE 135mm F1.8 GM', f:[135], N:1.8, b:11, g:950, zh:'中长焦人像：背景压缩 + 奶油虚化', en:'Tele portrait: background compression + creamy bokeh'},
  {n:'FE 70-200mm F2.8 GM OSS II', f:[70,200], N:2.8, b:11, g:1045, zh:'长焦变焦：活动、舞台、人像', en:'Tele zoom: events, stage, portrait'},
  {n:'FE 200-600mm F5.6-6.3 G OSS', f:[200,600], N:5.6, N2:6.3, b:11, g:2115, zh:'超长焦变焦：鸟类、野生动物、体育（性价比）', en:'Super-tele zoom: birds, wildlife, sports (value)'},
  {n:'FE 400mm F2.8 GM OSS', f:[400], N:2.8, b:11, g:2895, zh:'超长焦大光圈：职业体育、暗光运动', en:'Fast super-tele: pro sports, low-light action'},
  {n:'FE 600mm F4 GM OSS', f:[600], N:4, b:11, g:3040, zh:'超长焦大光圈：远距离鸟类、野生动物', en:'Fast super-tele: distant birds, wildlife'},
];

const fov = f => Math.round(2 * Math.atan(43.27 / (2 * f)) * 180 / Math.PI);

function renderLensDb() {
  const el = $('lensdb');
  if (!el) return;
  const en = typeof getLang === 'function' && getLang() === 'en';
  const open = el.querySelector('details')?.open;
  el.innerHTML = `<details${open ? ' open' : ''}><summary class="path-head">${en ? 'Common lenses' : '常见镜头'} (${LENSES.length})</summary>
    <p class="cap">${en ? 'FoV = full-frame diagonal. D = entrance pupil (f / N): the bigger D, the blurrier the background at the same framing.' : '视角按全画幅对角线算。D = 入瞳直径（f / N）：同样构图下 D 越大，背景越虚。'}</p>
    <div class="ldb">${LENSES.map(l => {
      const zoom = l.f.length > 1;
      const fl = zoom ? `${l.f[0]}-${l.f[1]} mm` : `${l.f[0]} mm`;
      const ap = l.N2 ? `f/${l.N}-${l.N2}` : `f/${l.N}`;
      const v = zoom ? `${fov(l.f[1])}-${fov(l.f[0])}°` : `${fov(l.f[0])}°`;
      const fMax = l.f[l.f.length - 1], D = Math.round(fMax / (l.N2 || l.N));
      return `<div class="ldb-c"><b>${l.n}</b>
        <span>${fl} · ${ap} · ${en ? 'FoV' : '视角'} ${v}</span>
        <span>D ${D} mm · ${l.b} ${en ? 'blades' : '片叶片'} · ${l.g} g</span>
        <small>${en ? l.en : l.zh}</small></div>`;
    }).join('')}</div>
    <p class="cap">${en ? 'Specs per Sony official pages; check there for current values.' : '参数以 Sony 官网为准。'}</p></details>`;
}
renderLensDb();
