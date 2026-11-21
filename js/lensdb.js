/* 主页「常见镜头」卡片：数据 LENSES / LENS / selectLens 在 lens.js。
   视角按全画幅对角线 43.27 mm 算；入瞳 D = f / N，同样构图下 D 越大背景越虚。
   点卡片 = 换成这支镜头，并跳到第 5 步（光圈与虚化）看取景器效果。 */

const fov = f => Math.round(2 * Math.atan(43.27 / (2 * f)) * 180 / Math.PI);
const MOTOR = {XD: ['XD 线性马达', 'XD Linear Motor'], DDSSM: ['DDSSM 直驱超声马达', 'DDSSM (direct-drive SSM)'], DLM: ['双线性马达', 'Double Linear Motor']};
const motorTxt = (l, en) => `${l.m > 1 ? l.m + ' × ' : ''}${MOTOR[l.mt][en ? 1 : 0]}`;
const glassTxt = (l, en) => en ? l.sp.replace(/asph/g, 'aspherical') : l.sp.replace(/asph/g, '非球面').replace('fluorite', '萤石');
const elTxt = (l, en) => {
  const [e, g] = l.el.split('/');
  const base = en ? `${e} elements in ${g} groups` : `${e} 片 ${g} 组`;
  return l.fl ? base + (en ? ' (incl. 1 filter)' : '（含 1 片滤镜）') : base;
};

function renderLensDb() {
  lensLbl.textContent = LENS.n;   // applyLang 会把 3D 标签刷回原文，这里补回当前镜头名
  const el = $('lensdb');
  if (!el) return;
  const en = typeof getLang === 'function' && getLang() === 'en';
  const open = el.querySelector('details')?.open;
  el.innerHTML = `<details${open ? ' open' : ''}><summary class="path-head">${en ? 'Common lenses' : '常见镜头'} (${LENSES.length})</summary>
    <p class="cap">${en ? 'Click a lens to use it, then see it in the Step 5 viewfinder. You can also switch lenses from the "Lens" menu above the zoom slider. FoV = full-frame diagonal; D = entrance pupil (f / N): the bigger D, the blurrier the background at the same framing.' : '点一支镜头就换上它，并跳到第 5 步在取景器里看效果；也可以在变焦滑块上方的「镜头」菜单里换。视角按全画幅对角线算；D = 入瞳直径（f / N），同样构图下 D 越大背景越虚。'}</p>
    <div class="ldb">${LENSES.map((l, i) => {
      const zoom = l.f.length > 1;
      const fl = zoom ? `${l.f[0]}-${l.f[1]} mm` : `${l.f[0]} mm`;
      const ap = l.N2 ? `f/${l.N}-${l.N2}` : `f/${l.N}`;
      const v = zoom ? `${fov(l.f[1])}-${fov(l.f[0])}°` : `${fov(l.f[0])}°`;
      const fMax = l.f[l.f.length - 1], D = Math.round(fMax / (l.N2 || l.N));
      return `<button type="button" class="ldb-c" data-i="${i}" aria-pressed="${l === LENS}"><b>${l.n}</b>
        <span>${fl} · ${ap} · ${en ? 'FoV' : '视角'} ${v}</span>
        <span>D ${D} mm · ${l.b} ${en ? 'blades' : '片叶片'} · ${l.g} g</span>
        <span>${elTxt(l, en)} · ${glassTxt(l, en)}</span>
        <span>${en ? 'AF: ' : '对焦：'}${motorTxt(l, en)}</span>
        <small>${en ? l.en : l.zh}</small></button>`;
    }).join('')}</div>
    <p class="cap">${en ? 'Specs checked against each model\'s spec / feature pages on sony.jp (2026-11). Where Sony gives a glass type but no count, only the type is listed.' : '规格核对自 sony.jp 各型号规格页与特长页（2026-11）。官方只写了种类没写片数的特殊镜片，这里只写种类。'}</p></details>`;
  el.querySelectorAll('.ldb-c').forEach(b => b.onclick = () => {
    selectLens(+b.dataset.i);
    if (typeof navigate === 'function') navigate({view: 'step', n: 5});
  });
}
renderLensDb();
