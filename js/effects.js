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
  {id:'zoom', cam:[-4, 2.5, 6], look:[-4.5, 0, 0], cat:'motion', zh:'爆炸变焦', en:'Zoom burst', lens:0, f:100, s:3, N:11, t:1/4, fx:'zoom',
   how:['1/4 s 曝光的同时转变焦环：画面从中心向外放射','Turn the zoom ring during a 1/4 s exposure: streaks radiate from the center']},
  {id:'trails', cam:[-6, 6, 16], look:[-10, 4, -4], cat:'motion', zh:'星轨', en:'Star trails', lens:3, f:40, s:30, N:2.8, t:1/4, dark:8, fx:'trails',
   how:['广角大光圈（如 24mm f/1.4），三脚架，单张 15–30 s 连拍上百张再叠加（或一次曝光 30 分钟以上）','A wide fast lens (e.g. 24mm f/1.4) on a tripod: shoot hundreds of 15–30 s frames and stack them (or one 30-minute-plus exposure)']},
  {id:'sil', grp:0, cat:'light', zh:'逆光剪影', en:'Backlit silhouette', lens:0, f:85, s:3, N:8, t:1/1000, fx:'sil',
   how:['按亮背景测光（或减 2–3 档曝光补偿），主体压成全黑的轮廓','Meter for the bright background (or dial −2 to −3 EV): the subject becomes a black outline']},
  {id:'star', grp:0, cat:'light', zh:'星芒', en:'Sunstar / starburst', lens:3, f:24, s:3, N:16, t:1/15, fx:'star',
   how:['f/11–f/16 拍点光源：叶片奇数时芒数 = 叶片数 × 2（11 片 → 22 芒），偶数时 = 叶片数','f/11–f/16 on point lights: odd blade counts give 2× spikes (11 blades → 22), even counts give one per blade']},
  {id:'hdr', grp:1, cat:'light', zh:'HDR 明暗都有', en:'HDR, detail in both ends', lens:0, f:85, s:3, N:4, t:1/250, fx:'hdr',
   how:['包围曝光（−2 / 0 / +2）合成，或手机 HDR：压高光、提暗部、保留局部对比','Bracket −2 / 0 / +2 and merge, or phone HDR: pull highlights, lift shadows, keep local contrast']},
  {id:'wide', cat:'persp', zh:'广角夸张透视', en:'Wide-angle exaggeration', lens:1, f:16, s:2.3, N:4, t:1/250, pd:-.7, fx:'wide',
   how:['16mm 走近到主体跟前：主体一样大，前景变得巨大、背景缩得很小','16mm walked up close: the subject stays the same size, the foreground balloons and the background shrinks']},
  {id:'tele', cat:'persp', zh:'长焦压缩', en:'Telephoto compression', lens:9, f:400, s:23, N:6.3, t:1/500, pd:20, fx:'tele',
   how:['400mm 退到 20 多米外：主体一样大，背景被「拉近」放大，前后像贴在一起','400mm from 20+ m back: the subject stays the same size, the background is pulled in and enlarged, layers stack together']},
  {id:'night', cat:'comp', zh:'夜景模式', en:'Night mode', lens:3, f:50, s:3, N:2.8, t:1/15, iso:3200, dark:8, nf:.25,
   how:['手持连拍 16 张 1/15 s，对齐后叠加：亮度够了，噪声降到 1/√16 = 1/4','16 handheld 1/15 s frames aligned and stacked: bright enough, with noise cut to 1/√16 = 1/4']},
  {id:'portrait', cat:'comp', zh:'人像模式', en:'Portrait mode', lens:3, f:60, s:3, N:8, t:1/250, fx:'portrait',
   how:['镜头本身几乎全清楚（看 3D 里光圈很小）；算法估出景深图，再把前景背景按距离模糊','The optics keep almost everything sharp (see the small aperture in 3D); software estimates depth and blurs by distance']},
  /* ---------- 第二批 ---------- */
  {id:'fgblur', cat:'dof', zh:'前景虚化', en:'Foreground blur', lens:4, f:50, s:3, N:1.2, t:1/1000,
   how:['50mm f/1.2，镜头贴近前景的叶子，对焦后面的主体：前景化成一层柔和的色块','50mm f/1.2 right up to the leaves, focused on the subject behind: the foreground melts into a soft wash']},
  {id:'stack', cam:[-4, 7, 26], look:[-26, 0, 0], cat:'dof', zh:'景深合成', en:'Focus stacking', lens:6, f:90, s:1.2, N:4, t:1/250, fx:'stack',
   how:['三脚架，焦点从近到远拍一串（3D 里对焦平面在扫），每层取最清楚的合成：大光圈也能前后全清楚','On a tripod, shoot a series focused near to far (the 3D focal plane sweeps), keep the sharpest of each layer: everything sharp even at a wide aperture']},
  {id:'paint', cam:[-12, 1.6, 6], look:[-19, 0.6, 0], cat:'motion', zh:'光绘', en:'Light painting', lens:3, f:50, s:3, N:8, t:1/4, dark:9, fx:'paint',
   how:['暗处 B 门曝光 10–30 s，拿灯在主体前画：光走过的路都留在照片里，人穿深色衣服不会留影','Bulb exposure of 10–30 s in the dark, draw with a light in front of the subject: its whole path stays in the photo, a person in dark clothes leaves no trace']},
  {id:'lapse', cam:[-36, 14, 130], look:[-24, 10, 0], cat:'motion', zh:'延时摄影', en:'Time-lapse', lens:3, f:50, s:3, N:8, t:1/250, fx:'lapse',
   how:['间隔 2–10 s 拍几百张，合成视频：几小时的太阳东升西落压成几秒；曝光和白平衡要锁定','Shoot hundreds of frames 2–10 s apart and make a video: hours of sunrise to sunset in seconds; lock exposure and white balance']},
  {id:'highkey', grp:1, cat:'light', zh:'高调', en:'High key', lens:0, f:85, s:3, N:2.8, t:1/250, ev:1.5, fx:'highkey',
   how:['曝光 +1 到 +2 档、背景打亮、少阴影：画面明亮轻盈，主体别过曝','+1 to +2 EV, bright background, few shadows: light and airy, keep the subject from clipping']},
  {id:'lowkey', grp:1, cat:'light', zh:'低调', en:'Low key', lens:0, f:85, s:3, N:4, t:1/250, ev:-2, fx:'lowkey',
   how:['暗背景，只用一束侧光照主体，曝光 −1 到 −2 档：大面积暗部衬托亮处','Dark background, one side light on the subject, −1 to −2 EV: large shadows set off the highlights']},
  {id:'golden', grp:0, cam:[-16, 9, 62], look:[0, 3, 0], cat:'light', zh:'黄金时刻', en:'Golden hour', lens:0, f:85, s:3, N:2.8, t:1/250, fx:'golden',
   how:['日出后、日落前约 1 小时：太阳低、光暖、影子长（看 3D 里太阳落低、光变橙）','About an hour after sunrise or before sunset: low warm sun, long shadows (watch the 3D sun drop and turn orange)']},
  {id:'blue', grp:0, cam:[-16, 9, 62], look:[0, 3, 0], cat:'light', zh:'蓝调时刻', en:'Blue hour', lens:0, f:85, s:3, N:2.8, t:1/15, dark:6, fx:'blue',
   how:['日落后约 20–40 分钟：太阳落到地平线下，天空深蓝、灯刚亮，三脚架慢门','About 20–40 min after sunset: sun below the horizon, deep blue sky, lights just on; tripod and slow shutter']},
  {id:'warm', grp:2, cat:'light', zh:'暖调', en:'Warm tone', lens:0, f:85, s:3, N:2.8, t:1/250, fx:'warm',
   how:['白平衡色温调高（如 7000 K）或往琥珀方向偏移：画面偏暖、温馨','Raise the white-balance temperature (e.g. 7000 K) or shift toward amber: warm and cozy']},
  {id:'cool', grp:2, cat:'light', zh:'冷调', en:'Cool tone', lens:0, f:85, s:3, N:2.8, t:1/250, fx:'cool',
   how:['白平衡色温调低（如 3800 K）或往蓝方向偏移：画面偏冷、安静','Lower the white-balance temperature (e.g. 3800 K) or shift toward blue: cool and calm']},
  {id:'bw', grp:2, cat:'light', zh:'黑白', en:'Black and white', lens:0, f:85, s:3, N:2.8, t:1/250, fx:'bw',
   how:['黑白模式；后期用红色通道压暗蓝天、提亮皮肤，层次更强','Monochrome mode; in post use the red channel to darken blue sky and brighten skin for more separation']},
  {id:'film', grp:2, cat:'light', zh:'胶片感', en:'Film look', lens:0, f:85, s:3, N:2.8, t:1/250, fx:'film',
   how:['胶片模拟或 LUT：暗部略抬、高光柔和、偏一点暖、加颗粒和暗角','Film simulation or LUT: lifted blacks, soft highlights, a little warmth, grain and vignette']},
  {id:'flare', grp:0, cam:[-16, 9, 62], look:[0, 3, 0], cat:'light', zh:'眩光', en:'Lens flare', lens:3, f:55, s:3, N:5.6, t:1/500, fx:'flare',
   how:['让太阳在画面边缘，选镀膜少的老镜头：光在镜片之间来回反射，沿一条线出现光斑','Put the sun at the frame edge and use a lightly coated lens: light bounces between elements and leaves ghosts along a line']},
  {id:'fisheye', cat:'persp', zh:'鱼眼', en:'Fisheye', lens:3, f:40, s:3, N:5.6, t:1/250, fx:'fisheye',
   how:['鱼眼镜头 180° 视角：直线向外弯，越靠边越弯；水平线过中心才是直的','Fisheye lens, 180° view: straight lines bow outward, more toward the edges; a horizon through the center stays straight']},
  {id:'grid', cat:'persp', zh:'三分法构图', en:'Rule of thirds', lens:0, f:85, s:3, N:2.8, t:1/250, fx:'grid',
   how:['打开取景器网格，主体放在三分线交点、地平线放在三分线上；引导线从边角引向主体','Turn on the grid, put the subject on a third-line intersection and the horizon on a third line; let leading lines run in from a corner']},
  {id:'superres', cam:[-1.5, 1.1, 2.4], look:[0, 0, 0], cat:'comp', zh:'超分辨率', en:'Super-resolution', lens:0, f:85, s:3, N:5.6, t:1/250, fx:'superres',
   how:['传感器按半个像素挪 4–16 次连拍（3D 里传感器在微动），合成后每个点颜色完整、细节更多；主体要静止','The sensor shifts by half a pixel for 4–16 shots (the 3D sensor jiggles); merged, every point has full color and more detail; subject must hold still']},
  {id:'astro', cam:[-6, 6, 16], look:[-10, 4, -4], cat:'comp', zh:'天文模式', en:'Astro mode', lens:3, f:35, s:30, N:2.8, t:1/4, dark:9, nf:.2, fx:'astro',
   how:['三脚架，手机自动连拍几分钟（每张 15 s 左右），对齐星点叠加，地景单独处理：星星是点不是线','On a tripod the phone shoots for minutes (≈15 s each), aligns the stars and stacks them, treats the foreground separately: stars stay points, not trails']},
];

const FX_GRP = [['光线', 'Light'], ['影调', 'Tone'], ['色彩', 'Color']];
const fxEn = () => typeof getLang === 'function' && getLang() === 'en';
let fxCur = null, fxAnim = null, fxT0 = 0;

function renderFx() {
  const el = $('fxctl'), s = STEPS[step];
  if (!el || !s || !s.fx) return;
  const en = fxEn(), list = FX.filter(p => p.cat === s.fx);
  const btn = p => `<button type="button" data-fx="${p.id}" aria-pressed="${fxCur === p.id}">${en ? p.en : p.zh}</button>`;
  /* 效果多的一步（第 39 步 12 个）按 grp 分成几组，每组一行小标题，手机抽屉里不至于一大片按钮 */
  const rows = list.some(p => p.grp != null)
    ? FX_GRP.map((g, i) => `<p class="fxgrp">${g[en ? 1 : 0]}</p><div class="row fxbtns">${list.filter(p => p.grp === i).map(btn).join('')}</div>`).join('')
    : `<div class="row fxbtns">${list.map(btn).join('')}</div>`;
  el.innerHTML = `${rows}
    <p class="fxhow">${fxCur && list.some(p => p.id === fxCur) ? FX.find(p => p.id === fxCur).how[en ? 1 : 0] : (en ? 'Pick an effect: the lens, aperture and shutter move to its settings, and the viewfinder shows the result.' : '点一个效果：镜头、光圈、快门会自动调到对应设置，取景器里看结果。')}</p>
    <button type="button" class="fxreset">${en ? 'Back to plain view' : '恢复普通取景'}</button>`;
  el.querySelectorAll('[data-fx]').forEach(b => b.onclick = () => applyFx(b.dataset.fx));
  el.querySelector('.fxreset').onclick = () => { fxClear(); renderFx(); };
}

function fxClear() {
  fxCur = null; fxAnim = null;
  const had = st.fx || st.pd || st.dark || (st.nf || 1) !== 1;
  st.fx = ''; st.pd = 0; st.dark = 0; st.nf = 1; st.stackDone = false;
  fx3dReset();
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
  fx3dReset();
  st.fx = P.fx || ''; st.dark = P.dark || 0; st.nf = P.nf || 1; st.stackDone = false; fxT0 = performance.now() / 1000 + 1;   // 参数动画 0.9 s 走完再开始特效动画
  const L = LENSES[P.lens], f = Math.min(L.f[L.f.length - 1], Math.max(L.f[0], P.f));
  const apT = Math.max(+$('ap').min, nearest(NS, P.N)), shT = nearest(TS, P.t);
  /* ISO：预设没写就按曝光自动挑最接近正确的一档 */
  const ev = k => Math.log2(TS[shT] * 250 * ISOS[k] / 100 * 4 / (NS[apT] * NS[apT])) - st.dark;
  const tgt = P.ev || 0, isoT = P.iso ? nearest(ISOS, P.iso) : ISOS.reduce((b, _, k) => Math.abs(ev(k) - tgt) < Math.abs(ev(b) - tgt) ? k : b, 0);
  const from = {f: +$('zo').value, ap: +$('ap').value, sh: +$('sh').value, iso: +$('iso').value, s: st.s, pd: st.pd || 0};
  const to = {f, ap: apT, sh: shT, iso: isoT, s: P.s, pd: P.pd || 0};
  const t0 = performance.now(), dur = 900;
  fxAnim = id;
  if (P.cam) { goal.p.set(...P.cam); goal.l.set(...P.look); tween = true; }   // 有 3D 动画的效果：镜头转到动画发生的地方
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

/* ---------- 3D 特效层：星空穹顶、光绘光带、太阳移动、传感器微动、变焦来回、对焦平面扫描 ---------- */
const fx3d = new THREE.Group(); macro.add(fx3d);
const SUN0 = SUN.clone(), sunBall = macro.children.find(o => o.isMesh && o.geometry.parameters && o.geometry.parameters.radius === .7 && o.position.distanceTo(SUN) < .01);
const sunLbl = labels.find(l => l.el.dataset.labelKey === '太阳');
const SUNC0 = sun.color.getHex(), SUNI0 = sun.intensity;
/* 星空：天极在场景上方偏北，星星按到天极的角距分布；trails 时每颗星画一段随时间变长的弧 */
const POLE = V(-12, 16, -14), NSTAR = 260;
const starPts = [], starGeo = new THREE.BufferGeometry();
for (let i = 0; i < NSTAR; i++) {
  const a = i * 2.39996, r = 4 + 22 * Math.sqrt((i * 0.618034) % 1), y = (i * 0.414213) % 1;
  starPts.push({a, r, y: -6 + 10 * y, s: .6 + (i % 7) / 7});
}
starGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NSTAR * 3), 3));
const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({color: 0xe8f0ff, size: .16, sizeAttenuation: true, transparent: true, opacity: .95}));
const TRAILN = 24, trailGeo = new THREE.BufferGeometry();
trailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NSTAR * TRAILN * 6), 3));
const trails = new THREE.LineSegments(trailGeo, new THREE.LineBasicMaterial({color: 0xbcd2ff, transparent: true, opacity: .55}));
fx3d.add(stars, trails);
/* 天极坐标系：u、v 在垂直于天极轴的平面里，星星绕轴转 */
const SKYAX = V(.35, 1, -.45).normalize(), U1 = V(1, 0, 0).cross(SKYAX).normalize(), V1 = SKYAX.clone().cross(U1);
const starAt = (p, ang, out) => out.copy(POLE).addScaledVector(U1, Math.cos(p.a + ang) * p.r).addScaledVector(V1, Math.sin(p.a + ang) * p.r).addScaledVector(SKYAX, p.y);
/* 光绘：主体前面一条心形光带，曝光时间里一点点画出来 */
const heart = new THREE.CatmullRomCurve3(Array.from({length: 40}, (_, i) => {
  const t = i / 40 * 2 * Math.PI, x = 16 * Math.sin(t) ** 3, y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return V(sx(2.4), .55 + y * .045, x * .05);
}), true);
const wandGeo = new THREE.TubeGeometry(heart, 240, .045, 8, true);
const wand = new THREE.Mesh(wandGeo, new THREE.MeshBasicMaterial({color: 0xff5fa2}));
const wandGlow = new THREE.Mesh(wandGeo, new THREE.MeshBasicMaterial({color: 0xff9ccc, transparent: true, opacity: .25, depthWrite: false}));
wandGlow.scale.setScalar(1);
fx3d.add(wand, wandGlow);
const WANDN = wandGeo.index.count;
const tmpV = V();

function fx3dReset() {
  stars.visible = trails.visible = wand.visible = wandGlow.visible = false;
  sun.position.copy(SUN0); if (sunBall) sunBall.position.copy(SUN0); if (sunLbl) sunLbl.v.copy(SUN0).add(V(0, 1.1, 0));
  sun.color.setHex(SUNC0); sun.intensity = SUNI0;
  if (sunBall) { sunBall.scale.setScalar(1); sunBall.material.color.setHex(0xffd66b); }
  senG.position.set(0, 0, 0);
}
fx3dReset();

const setSun = (a, col, I) => {   // a：太阳高度角（弧度），绕场景在 x-y 平面里走一段弧
  const P = V(-18 + 24 * Math.cos(a), 24 * Math.sin(a) - 1, 9);
  sun.position.copy(P); if (sunBall) { sunBall.position.copy(P); sunBall.scale.setScalar(2.4); sunBall.material.color.setHex(col); } if (sunLbl) sunLbl.v.copy(P).add(V(0, 2.4, 0));   // 镜头拉远看太阳时放大，免得只剩几个像素
  sun.color.setHex(col); sun.intensity = I;
};
const lerpHex = (a, b, k) => new THREE.Color(a).lerp(new THREE.Color(b), k).getHex();

/* 每帧：app.js 在 drawVF 之前调用 */
function fxFrame(t, dt) {
  const fx = st.fx; if (!fx) return;
  const e = Math.max(0, performance.now() / 1000 - fxT0);   // 参数动画走完后的秒数
  if (fx === 'trails' || fx === 'astro') {
    stars.visible = true; trails.visible = fx === 'trails';
    const pos = starGeo.attributes.position.array, tp = trailGeo.attributes.position.array, rot = e * .25, len = Math.min(1.4, e * .18);
    starPts.forEach((p, i) => {
      starAt(p, fx === 'astro' ? 0 : rot, tmpV).toArray(pos, i * 3);
      if (fx === 'trails') for (let k = 0; k < TRAILN; k++) {
        starAt(p, rot - len * k / TRAILN, tmpV).toArray(tp, (i * TRAILN + k) * 6);
        starAt(p, rot - len * (k + 1) / TRAILN, tmpV).toArray(tp, (i * TRAILN + k) * 6 + 3);
      }
    });
    starGeo.attributes.position.needsUpdate = true; trailGeo.attributes.position.needsUpdate = true;
    setSun(-.35, 0x2a3a6a, .12);
  }
  if (fx === 'paint') {
    wand.visible = wandGlow.visible = true;
    const k = (e % 6) / 4.5;                                      // 4.5 s 画完，停 1.5 s 再重画
    const n = Math.floor(Math.min(1, k) * WANDN / 3) * 3;
    wandGeo.setDrawRange(0, n);
    wandGlow.scale.setScalar(1 + .25 * Math.sin(t * 6) ** 2);
    setSun(-.3, 0x1a2440, .1);
  }
  if (fx === 'lapse') {                                           // 太阳 8 s 走一趟：日出 → 正午 → 日落 → 夜
    const k = (e % 10) / 8, a = Math.min(1, k) * Math.PI - .15, el = Math.sin(a);
    st.lapseEl = k > 1 ? -1 : el;
    setSun(k > 1 ? -.4 : a, el < .25 ? lerpHex(0xff8a3c, 0xfff0cc, Math.max(0, el) / .25) : 0xfff0cc, k > 1 ? .08 : Math.max(.15, 1.25 * Math.min(1, el * 2)));
  }
  if (fx === 'golden') setSun(.22, 0xff9a4a, 1.1);
  if (fx === 'blue') setSun(-.18, 0x5b7cff, .35);
  if (fx === 'flare') setSun(.32, 0xfff4dd, 1.6);
  if (fx === 'superres') {                                        // 传感器按半个像素走一个小方块：右、下、左、上
    const q = Math.floor(e * 2.5) % 4, d = .09;   // 放大了看得见；真实位移是半个像素
    senG.position.set(0, [0, 0, d, d][q] - d / 2, [0, d, d, 0][q] - d / 2);
  }
  if (fx === 'zoom' && !fxAnim) {                                 // 爆炸变焦：曝光时转变焦环，3D 里变焦组来回走
    const L = LENS.f; $('zo').value = Math.round(L[0] + (L[1] - L[0]) * (.5 + .5 * Math.sin(e * 2.2))); rebuild();
  }
  if (fx === 'stack' && !fxAnim && !st.stackDone) {               // 景深合成：对焦从 1.2 m 扫到 8 m
    const k = Math.min(1, e / 2.6); st.s = 1.2 * (8 / 1.2) ** k; rebuild();
    if (k >= 1) { st.stackDone = true; st.s = 3; rebuild(); }
  }
}

/* 取景器第二批特效 */
let fishMap = null, fishOut = null, fishOut32 = null;
const drawVF1 = drawVF;
drawVF = function (t) {
  drawVF1(t);
  const fx = st.fx;
  if (!fx || !('filter' in vg)) return;
  const cx = W / 2, cy = HH / 2, e = Math.max(0, performance.now() / 1000 - fxT0);
  const tint = (c, a, mode = 'source-over') => { vg.globalCompositeOperation = mode; vg.globalAlpha = a; vg.fillStyle = c; vg.fillRect(0, 0, W, HH); vg.globalAlpha = 1; vg.globalCompositeOperation = 'source-over'; };
  const refilter = f => { fxG.clearRect(0, 0, W, HH); fxG.drawImage(vf, 0, 0); vg.filter = f; vg.drawImage(fxTmp, 0, 0); vg.filter = 'none'; };
  const vignette = (a, r0 = .35) => { const g = vg.createRadialGradient(cx, cy, W * r0, cx, cy, W * .75); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${a})`); vg.fillStyle = g; vg.fillRect(0, 0, W, HH); };
  if (fx === 'highkey') { refilter('contrast(.78) brightness(1.08) saturate(.85)'); tint('#fff', .12, 'screen'); }
  else if (fx === 'lowkey') { refilter('contrast(1.25) saturate(.9)'); const g = vg.createRadialGradient(cx + 6, cy - 6, 8, cx, cy, W * .45); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.92)'); vg.fillStyle = g; vg.fillRect(0, 0, W, HH); }
  else if (fx === 'golden') { tint('#ff9a3c', .32, 'soft-light'); tint('#ffb066', .18, 'screen'); }
  else if (fx === 'blue') { tint('#0d1c55', .62, 'multiply'); tint('#2a4cff', .18, 'screen');
    const p = img(st.f, 8) / 8 * PX; vg.globalCompositeOperation = 'lighter';                    // 灯亮起来
    LIGHTS.forEach(l => { const g = vg.createRadialGradient(cx + l.X * p, cy - .4 * p, 0, cx + l.X * p, cy - .4 * p, 10); g.addColorStop(0, l.c); g.addColorStop(1, 'rgba(0,0,0,0)'); vg.fillStyle = g; vg.fillRect(0, 0, W, HH); });
    vg.globalCompositeOperation = 'source-over'; }
  else if (fx === 'warm') tint('#ff8a2a', .22, 'soft-light'), tint('#ffa040', .1, 'screen');
  else if (fx === 'cool') tint('#2a7bff', .26, 'soft-light'), tint('#6aa8ff', .08, 'screen');
  else if (fx === 'bw') refilter('grayscale(1) contrast(1.18)');
  else if (fx === 'film') { refilter('sepia(.28) contrast(.9) saturate(.9) brightness(1.04)'); tint('#1e2a3a', .1, 'lighten'); vignette(.45);
    vg.globalCompositeOperation = 'overlay'; vg.globalAlpha = .35; vg.drawImage(noise, -Math.random() * W, -Math.random() * HH); vg.globalAlpha = 1; vg.globalCompositeOperation = 'source-over'; }
  else if (fx === 'flare') {                                      // 太阳在左上角外，鬼影沿过中心的直线排开
    const sxp = W * .08, syp = HH * .06;
    vg.globalCompositeOperation = 'lighter';
    const g0 = vg.createRadialGradient(sxp, syp, 0, sxp, syp, 70); g0.addColorStop(0, 'rgba(255,245,220,.95)'); g0.addColorStop(1, 'rgba(255,200,120,0)'); vg.fillStyle = g0; vg.fillRect(0, 0, W, HH);
    [[.35, 9, '120,200,255'], [.6, 16, '140,255,170'], [1.15, 22, '255,150,90'], [1.4, 8, '200,140,255'], [1.7, 30, '255,220,120']].forEach(([k, r, c]) => {
      const x = sxp + (cx - sxp) * k * 1.2, y = syp + (cy - syp) * k * 1.2, g = vg.createRadialGradient(x, y, r * .2, x, y, r);
      g.addColorStop(0, `rgba(${c},.05)`); g.addColorStop(.8, `rgba(${c},.28)`); g.addColorStop(1, `rgba(${c},0)`); vg.fillStyle = g; vg.beginPath(); vg.arc(x, y, r, 0, 7); vg.fill();
    });
    tint('#ffe0b0', .08, 'screen'); vg.globalCompositeOperation = 'source-over';
  }
  else if (fx === 'fisheye') {                                    // 桶形畸变：每个输出像素按半径反查源像素
    if (!fishMap) { fishMap = new Int32Array(W * HH); const R = Math.hypot(cx, cy) * .78;
      for (let y = 0; y < HH; y++) for (let x = 0; x < W; x++) { const dx = (x - cx) / R, dy = (y - cy) / R, k = 1 + .5 * (dx * dx + dy * dy), sx2 = Math.round(cx + dx * k * R), sy2 = Math.round(cy + dy * k * R);
        fishMap[y * W + x] = sx2 >= 0 && sx2 < W && sy2 >= 0 && sy2 < HH ? sy2 * W + sx2 : -1; } }
    if (!fishOut) { fishOut = vg.createImageData(W, HH); fishOut32 = new Uint32Array(fishOut.data.buffer); }
    const src32 = new Uint32Array(vg.getImageData(0, 0, W, HH).data.buffer), BLACK = 0xff000000;   /* 一次拷整个像素（4 字节），比逐通道快几倍 */
    for (let i = 0; i < W * HH; i++) { const j = fishMap[i]; fishOut32[i] = j >= 0 ? src32[j] | BLACK : BLACK; }
    vg.putImageData(fishOut, 0, 0); vignette(.6, .42);
  }
  else if (fx === 'grid') {                                       // 三分线 + 交点；主体在右上交点附近
    vg.strokeStyle = 'rgba(255,255,255,.7)'; vg.lineWidth = 1; vg.setLineDash([4, 4]);
    [1, 2].forEach(k => { vg.beginPath(); vg.moveTo(W * k / 3, 0); vg.lineTo(W * k / 3, HH); vg.moveTo(0, HH * k / 3); vg.lineTo(W, HH * k / 3); vg.stroke(); });
    vg.setLineDash([]); vg.fillStyle = 'rgba(240,164,135,.95)';
    [[1, 1], [2, 1], [1, 2], [2, 2]].forEach(([i, j]) => { vg.beginPath(); vg.arc(W * i / 3, HH * j / 3, 3.5 + 1.5 * Math.sin(t * 3 + i + j), 0, 7); vg.fill(); });
  }
  else if (fx === 'superres') refilter('contrast(1.12) saturate(1.08)');
  else if (fx === 'paint' || fx === 'astro') {                    // 夜里：先压暗，再画光带或星空
    tint('#05070d', .78, 'multiply');
    if (fx === 'paint') {
      const k = Math.min(1, (e % 6) / 4.5), p = img(st.f, 2.4) / 2.4 * PX, n = Math.floor(k * 80);
      vg.globalCompositeOperation = 'lighter'; vg.lineCap = 'round'; vg.lineJoin = 'round';
      [[7, 'rgba(255,90,160,.25)'], [3, 'rgba(255,120,180,.8)'], [1.2, 'rgba(255,230,240,1)']].forEach(([w, c]) => {
        vg.strokeStyle = c; vg.lineWidth = w; vg.beginPath();
        for (let i = 0; i <= n; i++) { const a = i / 80 * 2 * Math.PI, X = 16 * Math.sin(a) ** 3, Y = 13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a); const x = cx + X * .011 * p, y = cy - .08 * p - Y * .01 * p; i ? vg.lineTo(x, y) : vg.moveTo(x, y); }
        vg.stroke(); });
      vg.globalCompositeOperation = 'source-over';
    } else {
      const sky = vg.createLinearGradient(0, 0, 0, HH * .6); sky.addColorStop(0, '#02040c'); sky.addColorStop(1, 'rgba(10,16,40,.6)');
      vg.fillStyle = sky; vg.fillRect(0, 0, W, HH * .6);
      vg.globalCompositeOperation = 'lighter';
      const mw = vg.createLinearGradient(W * .1, 0, W * .8, HH * .6); mw.addColorStop(0, 'rgba(0,0,0,0)'); mw.addColorStop(.5, 'rgba(150,160,210,.22)'); mw.addColorStop(1, 'rgba(0,0,0,0)');
      vg.fillStyle = mw; vg.fillRect(0, 0, W, HH * .6);
      for (let i = 0; i < 220; i++) { const x = (i * 97.3) % W, y = (i * 53.7) % (HH * .58), b = .4 + (i % 6) / 8; vg.fillStyle = `rgba(230,238,255,${b})`; vg.fillRect(x, y, i % 9 ? 1 : 1.6, i % 9 ? 1 : 1.6); }
      vg.globalCompositeOperation = 'source-over';
    }
  }
  else if (fx === 'lapse') {                                      // 跟着 3D 太阳的高度换天色
    const el = st.lapseEl ?? 1;
    if (el < 0) tint('#06102e', .78, 'multiply');
    else if (el < .3) { tint('#ff7a2a', .35 * (1 - el / .3), 'soft-light'); tint('#1a2350', .3 * (1 - el / .3), 'multiply'); }
  }
  else if (fx === 'stack' && !st.stackDone) {                     // 扫描中：画面上标出当前清楚的那一层
    vg.fillStyle = 'rgba(79,216,232,.85)'; vg.fillRect(0, HH - 4, W * Math.min(1, e / 2.6), 4);
  }
};
