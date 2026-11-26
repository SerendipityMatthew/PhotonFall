/* 第 7 章「拍摄效果」：点效果按钮，镜头 / 焦距 / 对焦 / 光圈 / 快门 / ISO 动画过渡到预设值，
   3D 里镜片组、光圈叶片、光路和对焦平面跟着变，取景器（lens.js 的 drawVF）实时出效果。
   参数动不出来的效果（追焦、爆炸变焦、星轨、星芒、剪影、移轴、透视、夜景、人像）在取景器里另画：
   lens.js 里读 st.fx / st.pd / st.dark / st.nf，其余在下面 drawVF 外面包一层后期。
   依赖：lens.js（st、rebuild、selectLens、LENSES、NS、TS、ISOS、img、W、HH、PX、vf、vg、LIGHTS、ballX），app.js（step、STEPS）。 */

/* lens: LENSES 下标；f 焦距；s 对焦距离 m；N 光圈值；t 快门秒；iso 不写 = 自动按曝光挑；
   fx 取景器特效；pd 相机前后挪的米数（透视）；dark 场景比白天暗几档；nf 噪声倍数 */
const FX = [
  {id:'shallow', cat:'dof', zh:'浅景深人像', en:'Shallow-DOF portrait', lens:5, f:85, s:3, N:1.8, t:1/250,
   how:['85mm f/1.8 对焦主体，人离背景灯远：主体清楚，前景和背景都化开','85mm f/1.8 focused on the subject, lights far behind: subject sharp, foreground and background melt']},
  {id:'bokeh', cat:'dof', zh:'大圆光斑', en:'Big round bokeh', lens:7, f:135, s:3, N:1.8, t:1/250,
   how:['135mm f/1.8、11 片圆形叶片，背景灯在 8 m：光斑直径 ≈ f²/(N·(S−f)) 最大；注意画面边缘的猫眼','135mm f/1.8, 11 rounded blades, lights at 8 m: disc ≈ f²/(N·(S−f)) is largest; note the cat\'s eyes at the edges']},
  {id:'deep', cat:'dof', zh:'全景深风光', en:'Front-to-back sharp', lens:3, f:28, s:2.4, N:11, t:1/15,
   how:['28mm f/11 对焦到超焦距（约 2.4 m）：从 1.2 m 到无限远都清楚','28mm f/11 focused at the hyperfocal distance (≈2.4 m): sharp from 1.2 m to infinity']},
  {id:'tilt', cat:'dof', zh:'移轴微缩', en:'Tilt-shift miniature', lens:3, f:70, s:3, N:8, t:1/250, fx:'tilt',
   how:['移轴镜头把焦平面倾斜，只留一条清楚带；或后期上下渐变模糊 + 提饱和，配合俯拍','A tilt lens slants the focal plane to leave one sharp band; or blur top and bottom in post, add saturation, shoot from above']},
  {id:'freeze', cat:'motion', zh:'高速凝固', en:'Freeze motion', lens:0, f:100, s:3, N:2, t:1/4000,
   how:['1/4000 s，光圈开大、ISO 自动拉高：飞动的小球凝固成一个点','1/4000 s with a wide aperture and auto ISO: the moving ball freezes into a dot']},
  {id:'slow', cat:'motion', zh:'慢门拉丝', en:'Slow-shutter streak', lens:0, f:100, s:3, N:16, t:1/4,
   how:['1/4 s、f/16，上三脚架：运动的小球拖成一条线；白天要加 ND 减光镜才不过曝','1/4 s at f/16 on a tripod: the ball streaks into a line; in daylight add an ND filter to avoid overexposure']},
  {id:'pan', cat:'motion', zh:'追焦', en:'Panning', lens:0, f:100, s:3, N:8, t:1/15, fx:'pan',
   how:['1/15–1/125 s，相机跟着主体平移：主体清楚，背景拉成横线','1/15–1/125 s while swinging the camera with the subject: subject sharp, background smeared into lines']},
  {id:'zoom', cat:'motion', zh:'爆炸变焦', en:'Zoom burst', lens:0, f:100, s:3, N:11, t:1/4, fx:'zoom',
   how:['1/4 s 曝光的同时转变焦环：画面从中心向外放射','Turn the zoom ring during a 1/4 s exposure: streaks radiate from the center']},
  {id:'trails', cat:'motion', zh:'星轨', en:'Star trails', lens:3, f:40, s:30, N:2.8, t:1/4, dark:8, fx:'trails',
   how:['广角大光圈（如 24mm f/1.4），三脚架，单张 15–30 s 连拍上百张再叠加（或一次曝光 30 分钟以上）','A wide fast lens (e.g. 24mm f/1.4) on a tripod: shoot hundreds of 15–30 s frames and stack them (or one 30-minute-plus exposure)']},
  {id:'sil', cat:'light', zh:'逆光剪影', en:'Backlit silhouette', lens:0, f:85, s:3, N:8, t:1/1000, fx:'sil',
   how:['按亮背景测光（或减 2–3 档曝光补偿），主体压成全黑的轮廓','Meter for the bright background (or dial −2 to −3 EV): the subject becomes a black outline']},
  {id:'star', cat:'light', zh:'星芒', en:'Sunstar / starburst', lens:3, f:24, s:3, N:16, t:1/15, fx:'star',
   how:['f/11–f/16 拍点光源：叶片奇数时芒数 = 叶片数 × 2（11 片 → 22 芒），偶数时 = 叶片数','f/11–f/16 on point lights: odd blade counts give 2× spikes (11 blades → 22), even counts give one per blade']},
  {id:'hdr', cat:'light', zh:'HDR 明暗都有', en:'HDR, detail in both ends', lens:0, f:85, s:3, N:4, t:1/250, fx:'hdr',
   how:['包围曝光（−2 / 0 / +2）合成，或手机 HDR：压高光、提暗部、保留局部对比','Bracket −2 / 0 / +2 and merge, or phone HDR: pull highlights, lift shadows, keep local contrast']},
  {id:'wide', cat:'persp', zh:'广角夸张透视', en:'Wide-angle exaggeration', lens:1, f:16, s:2.3, N:4, t:1/250, pd:-.7, fx:'wide',
   how:['16mm 走近到主体跟前：主体一样大，前景变得巨大、背景缩得很小','16mm walked up close: the subject stays the same size, the foreground balloons and the background shrinks']},
  {id:'tele', cat:'persp', zh:'长焦压缩', en:'Telephoto compression', lens:9, f:400, s:23, N:6.3, t:1/500, pd:20, fx:'tele',
   how:['400mm 退到 20 多米外：主体一样大，背景被「拉近」放大，前后像贴在一起','400mm from 20+ m back: the subject stays the same size, the background is pulled in and enlarged, layers stack together']},
  {id:'night', cat:'comp', zh:'夜景模式', en:'Night mode', lens:3, f:50, s:3, N:2.8, t:1/15, iso:3200, dark:8, nf:.25,
   how:['手持连拍 16 张 1/15 s，对齐后叠加：亮度够了，噪声降到 1/√16 = 1/4','16 handheld 1/15 s frames aligned and stacked: bright enough, with noise cut to 1/√16 = 1/4']},
  {id:'portrait', cat:'comp', zh:'人像模式', en:'Portrait mode', lens:3, f:60, s:3, N:8, t:1/250, fx:'portrait',
   how:['镜头本身几乎全清楚（看 3D 里光圈很小）；算法估出景深图，再把前景背景按距离模糊','The optics keep almost everything sharp (see the small aperture in 3D); software estimates depth and blurs by distance']},
];

const fxEn = () => typeof getLang === 'function' && getLang() === 'en';
let fxCur = null, fxAnim = null;

function renderFx() {
  const el = $('fxctl'), s = STEPS[step];
  if (!el || !s || !s.fx) return;
  const en = fxEn(), list = FX.filter(p => p.cat === s.fx);
  el.innerHTML = `<div class="row fxbtns">${list.map(p => `<button type="button" data-fx="${p.id}" aria-pressed="${fxCur === p.id}">${en ? p.en : p.zh}</button>`).join('')}</div>
    <p class="fxhow">${fxCur && list.some(p => p.id === fxCur) ? FX.find(p => p.id === fxCur).how[en ? 1 : 0] : (en ? 'Pick an effect: the lens, aperture and shutter move to its settings, and the viewfinder shows the result.' : '点一个效果：镜头、光圈、快门会自动调到对应设置，取景器里看结果。')}</p>
    <button type="button" class="fxreset">${en ? 'Back to plain view' : '恢复普通取景'}</button>`;
  el.querySelectorAll('[data-fx]').forEach(b => b.onclick = () => applyFx(b.dataset.fx));
  el.querySelector('.fxreset').onclick = () => { fxClear(); renderFx(); };
}

function fxClear() {
  fxCur = null; fxAnim = null;
  const had = st.fx || st.pd || st.dark || (st.nf || 1) !== 1;
  st.fx = ''; st.pd = 0; st.dark = 0; st.nf = 1;
  if (had) rebuild();
}

/* 进入某一步：拍摄效果章显示本类按钮；离开这一章就把特效清掉，别影响前面各步的取景器 */
function fxStep(s) {
  if (!s.fx) { if (fxCur || st.fx) fxClear(); return; }
  if (fxCur && FX.find(p => p.id === fxCur).cat !== s.fx) fxClear();
  renderFx();
}

const nearest = (arr, v) => arr.reduce((b, x, i) => Math.abs(Math.log(x / v)) < Math.abs(Math.log(arr[b] / v)) ? i : b, 0);

function applyFx(id) {
  const P = FX.find(p => p.id === id);
  fxCur = id;
  if (+$('lens').value !== P.lens) selectLens(P.lens);
  st.fx = P.fx || ''; st.dark = P.dark || 0; st.nf = P.nf || 1;
  const L = LENSES[P.lens], f = Math.min(L.f[L.f.length - 1], Math.max(L.f[0], P.f));
  const apT = Math.max(+$('ap').min, nearest(NS, P.N)), shT = nearest(TS, P.t);
  /* ISO：预设没写就按曝光自动挑最接近正确的一档 */
  const ev = k => Math.log2(TS[shT] * 250 * ISOS[k] / 100 * 4 / (NS[apT] * NS[apT])) - st.dark;
  const isoT = P.iso ? nearest(ISOS, P.iso) : ISOS.reduce((b, _, k) => Math.abs(ev(k)) < Math.abs(ev(b)) ? k : b, 0);
  const from = {f: +$('zo').value, ap: +$('ap').value, sh: +$('sh').value, iso: +$('iso').value, s: st.s, pd: st.pd || 0};
  const to = {f, ap: apT, sh: shT, iso: isoT, s: P.s, pd: P.pd || 0};
  const t0 = performance.now(), dur = 900;
  fxAnim = id;
  const tick = now => {
    if (fxAnim !== id) return;
    const k = Math.min(1, (now - t0) / dur), e = k * k * (3 - 2 * k);
    $('zo').value = Math.round(from.f + (to.f - from.f) * e);
    $('ap').value = Math.round(from.ap + (to.ap - from.ap) * e);
    $('sh').value = Math.round(from.sh + (to.sh - from.sh) * e);
    $('iso').value = Math.round(from.iso + (to.iso - from.iso) * e);
    st.s = from.s * (to.s / from.s) ** e;
    st.pd = from.pd + (to.pd - from.pd) * e;
    rebuild();
    if (k < 1) requestAnimationFrame(tick); else fxAnim = null;
  };
  requestAnimationFrame(tick);
  renderFx();
}

/* ---------- 取景器后期：在 lens.js 的 drawVF 画完之后再加一层 ---------- */
const fxTmp = mkCanvas(W, HH), fxG = fxTmp.getContext('2d');
const drawVFBase = drawVF;
drawVF = function (t) {
  drawVFBase(t);
  const fx = st.fx;
  if (!fx || !('filter' in vg)) return;
  const cx = W / 2, cy = HH / 2;
  fxG.clearRect(0, 0, W, HH); fxG.drawImage(vf, 0, 0);
  const sharp = (x, y, w, h, a = 1) => { vg.save(); vg.globalAlpha = a; vg.beginPath(); vg.rect(x, y, w, h); vg.clip(); vg.drawImage(fxTmp, 0, 0); vg.restore(); };
  if (fx === 'tilt') {
    vg.filter = 'blur(3px) saturate(1.5)'; vg.drawImage(fxTmp, 0, 0); vg.filter = 'saturate(1.5) contrast(1.08)';
    [[.26, .3], [.33, .6], [.4, 1]].forEach(([y, a]) => sharp(0, HH * y, W, HH * (1 - 2 * y), a));   // 中间一条清楚带，边缘渐变
    vg.filter = 'none';
  } else if (fx === 'pan') {
    vg.globalAlpha = 1 / 8;
    for (let i = 0; i < 8; i++) vg.drawImage(fxTmp, (i - 3.5) * 4, 0);
    vg.globalAlpha = 1;
    const p = img(st.f, 3) / 3 * PX;                                  // 主体（人 + 小球）保持清楚
    sharp(cx - .3 * p, cy - .24 * p, .6 * p, .5 * p);
  } else if (fx === 'zoom') {
    vg.globalAlpha = .14;
    for (let i = 1; i <= 8; i++) { const k = 1 + i * .028; vg.drawImage(fxTmp, cx - cx * k, cy - cy * k, W * k, HH * k); }
    vg.globalAlpha = 1;
  } else if (fx === 'star') {
    const p = img(st.f, 8) / 8 * PX, b = LENS.b, n = b % 2 ? 2 * b : b;
    vg.globalCompositeOperation = 'lighter'; vg.lineCap = 'round';
    LIGHTS.forEach(l => {
      const lx = cx + l.X * p, ly = cy - .4 * p;
      vg.strokeStyle = l.c; vg.lineWidth = 1; vg.globalAlpha = .75;
      for (let i = 0; i < n; i++) { const a = i / n * 2 * Math.PI + .2, r = i % 2 ? 9 : 16; vg.beginPath(); vg.moveTo(lx, ly); vg.lineTo(lx + r * Math.cos(a), ly + r * Math.sin(a)); vg.stroke(); }
    });
    vg.globalAlpha = 1; vg.globalCompositeOperation = 'source-over';
  } else if (fx === 'trails') {
    const sky = vg.createLinearGradient(0, 0, 0, HH * .62);
    sky.addColorStop(0, 'rgba(4,8,22,.92)'); sky.addColorStop(1, 'rgba(4,8,22,.55)');
    vg.fillStyle = sky; vg.fillRect(0, 0, W, HH * .62);
    const px = W * .62, py = -HH * .35;                               // 北天极在画面上方
    vg.globalCompositeOperation = 'lighter'; vg.lineWidth = 1;
    for (let i = 0; i < 70; i++) {
      const r = 60 + (i * 97 % 260), a0 = (i * 0.618 % 1) * 2 * Math.PI, c = ['#cfe0ff', '#ffe6c4', '#ffffff', '#ffd2b0'][i % 4];
      vg.strokeStyle = c; vg.globalAlpha = .35 + (i % 5) * .1;
      vg.beginPath(); vg.arc(px, py, r, a0, a0 + .55); vg.stroke();
    }
    vg.globalAlpha = 1; vg.globalCompositeOperation = 'source-over';
  } else if (fx === 'sil') {
    const g = vg.createLinearGradient(0, 0, 0, HH);                   // 逆光的暖色天空
    g.addColorStop(0, 'rgba(255,170,90,.35)'); g.addColorStop(1, 'rgba(255,120,60,.1)');
    vg.globalCompositeOperation = 'screen'; vg.fillStyle = g; vg.fillRect(0, 0, W, HH); vg.globalCompositeOperation = 'source-over';
  } else if (fx === 'hdr') {
    vg.filter = 'contrast(.8) saturate(1.2) brightness(1.06)'; vg.drawImage(fxTmp, 0, 0); vg.filter = 'none';
    vg.globalCompositeOperation = 'screen'; vg.globalAlpha = .18; vg.drawImage(fxTmp, 0, 0); vg.globalAlpha = 1; vg.globalCompositeOperation = 'source-over';
  }
};
