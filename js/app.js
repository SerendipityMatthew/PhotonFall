/* 步骤切换、动画循环与启动 */

/* ---------- 状态 ---------- */
let step = 0, route;
const goal = {p: V(), l: V()};
const GR = {macro, micro, tx, arch, chip, cap5, pdaf, ibis, mls, quad, stk4, coat, shut, hdr, cs, vid, stor, compu};

/* ---------- 路由 ---------- */
function navigate(r) {
  if (r.view === 'step' && (r.n < 0 || r.n >= STEPS.length)) return;
  const mode = historyMode(route, r, n => STEPS[n].ch);
  const hash = routeHash(r);
  if (mode === 'push') history.pushState(null, '', hash);
  else history.replaceState(null, '', hash);
  route = r;
  applyRoute(r);
}

function applyRoute(r) {
  if (r.view === 'step') { hideTimeline(); go(r.n); }
  else if (r.view === 'timeline') showTimeline(r.id);
}

/* ---------- 事件委托 ---------- */
$('prev').onclick = () => navigate({view: 'step', n: step - 1});
$('next').onclick = () => navigate({view: 'step', n: step + 1});

addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
  if (route && route.view === 'timeline') return;
  if (!$('zoom').hidden) return;                        // 放大的小图开着：方向键不翻步
  if (e.altKey || e.metaKey || e.ctrlKey) return;      // Alt+← 是浏览器后退，⌘← 等也留给系统
  if (e.key === 'ArrowRight') navigate({view: 'step', n: step + 1});
  if (e.key === 'ArrowLeft')  navigate({view: 'step', n: step - 1});
});

addEventListener('popstate',   () => { route = parseRoute(location.hash, STEPS.length - 1); applyRoute(route); });
addEventListener('hashchange', () => { route = parseRoute(location.hash, STEPS.length - 1); applyRoute(route); });

/* ---------- 步骤切换 ---------- */
function go(i) {
  if (i < 0 || i >= STEPS.length) return;
  step = i;
  const s = STEPS[i];

  /* 场景可见性 */
  for (const k in GR) GR[k].visible = k === s.g;

  /* 控件面板显示 */
  $('ctl').hidden = $('vfwrap').hidden = s.g !== 'macro' || !!s.noCam;
  $('txwrap').hidden  = s.g !== 'tx';
  $('chipctl').hidden = s.g !== 'chip';
  $('dnwrap').hidden  = !s.dn;
  $('isp').hidden     = !s.isp;
  lof.visible = !!s.lofic;
  document.querySelectorAll('[data-pn]').forEach(el => el.hidden = !(s.pn || []).includes(el.id));
  glassL.visible = s.lg === 'glass';
  partsL.visible = s.lg === 'parts';
  st.ab = !!s.ab && $('abon').checked;
  if ((s.pn || []).includes('pdafwrap')) drawPdaf();
  if ((s.pn || []).includes('snrwrap')) drawSnr();
  if ((s.pn || []).includes('reflwrap')) drawRefl();

  /* 镜位 */
  goal.p.set(...s.cam);
  goal.l.set(...s.look);
  tween = true;

  hlClear();

  /* 导览 */
  if (s.noCam) startTour();
  else stopTour();

  /* 卡片与抽屉：先填文字，再按可见性把面板搬到位，最后列元器件、更新抽屉标签 */
  renderPanel(i);
  renderCard(i);
  placePanels(i);
  listComps();
  syncTabs();
}

/* ---------- 动画循环 ---------- */
const M = new THREE.Object3D(), col = new THREE.Color(), clock = new THREE.Clock(), tmp = V();
function frame() {
  requestAnimationFrame(frame);
  if (paused) return;                    // 时间轴盖住了舞台：不算动画也不渲染
  const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime;
  animTour(dt);
  if (tween) {
    cam.position.lerp(goal.p, .07);
    ctr.target.lerp(goal.l, .07);
    if (cam.position.distanceTo(goal.p) < .01 && ctr.target.distanceTo(goal.l) < .01) tween = false;
  }
  ctr.update();
  if (macro.visible) {
    let open = true, dark = false;
    if (shot) {
      shot.t += dt;
      const a = shot.t, e = .3 + shot.open;
      open = a > .3 && a < e || a > e + .3;
      dark = a < .3 || a >= e && a < e + .3;
      if (a >= e && !shot.done) {
        shot.done = true;
        $('photo').getContext('2d').drawImage(vf, 0, 0);
        $('exif').textContent = `${st.f} mm · f/${st.N} · ${TN[+$('sh').value]} s · ISO ${st.iso}`;
      }
      if (a > e + .6) shot = null;
    }
    shutter.position.y += ((open ? 1.3 : 0) - shutter.position.y) * .35;
    ball3.position.z = ballX(t) * K;
    drawVF(t);
    if (dark) { vg.fillStyle = '#000'; vg.fillRect(0, 0, W, HH); }
    senTex.needsUpdate = true;
    paths.forEach((pa, r) => {
      const L = pa.len[3];
      for (let k = 0; k < PH; k++) {
        let d = ((t * .05 + k / PH + r * .37) % 1) * L, s = 1;
        while (s < 3 && d > pa.len[s]) s++;
        tmp.lerpVectors(pa.pts[s - 1], pa.pts[s], (d - pa.len[s - 1]) / (pa.len[s] - pa.len[s - 1]));
        M.position.copy(tmp);
        M.scale.setScalar(!open && tmp.x > -.2 ? 0 : 1);
        M.updateMatrix();
        photons.setMatrixAt(r * PH + k, M.matrix);
      }
    });
    photons.instanceMatrix.needsUpdate = true;
  } else if (tx.visible) (lof.visible ? animLof : animTx)(t);
  else if (arch.visible) animArch(t, dt);
  else if (chip.visible) animChip(t, dt);
  else if (cap5.visible) animCap(t, dt);
  else if (pdaf.visible) animPdaf(t);
  else if (ibis.visible) animIbis(t);
  else if (mls.visible)  animMls(t);
  else if (quad.visible) animQuad(t, dt);
  else if (stk4.visible) animStk4(t, dt);
  else if (coat.visible) animCoat(t, dt);
  else if (shut.visible) animShut(t, dt);
  else if (hdr.visible)  animHdr(t, dt);
  else if (cs.visible)   animCs(t, dt);
  else if (vid.visible)  animVid(t, dt);
  else if (stor.visible) animStor(t, dt);
  else if (compu.visible) animCompu(t, dt);
  else {
    mp.forEach((p, n) => {
      p.y -= dt * 1.1;
      if (p.y < 1 && p.c !== p.px.c || p.y < DEPTH[p.c]) {
        if (p.y < DEPTH[p.c] && Math.random() < QE[p.c]) p.px.e = Math.min(FULL, p.px.e + 1);
        spawn(p);
        mph.setColorAt(n, col.set(BAY[p.c]));
      }
      const f = p.y > 1.1 ? 1 : Math.max(.18, 1 - (1.1 - p.y) / .6 * .82);
      M.position.set(p.px.x + p.x0 * f, p.y, p.px.z + p.z0 * f);
      M.scale.setScalar(1);
      M.updateMatrix();
      mph.setMatrixAt(n, M.matrix);
    });
    mph.instanceMatrix.needsUpdate = true;
    mph.instanceColor.needsUpdate = true;
    rowT += dt; pulseT += dt;
    if (rowT > 1.6) {
      rowT = 0; pulseT = 0; row = (row + 1) % 4;
      px.forEach((p, n) => {
        if (p.k === row) { p.dn = Math.round(p.e / FULL * 1023); p.e = 0; $('d' + n).textContent = p.dn; }
      });
    }
    rowBox.position.z = row - 1.5;
    px.forEach(p => { const h = Math.max(.001, p.e / FULL * .72); p.fill.scale.y = h; p.fill.position.y = .13 + h / 2; });
    for (let i = 0; i < 4; i++) {
      const a = Math.min(1, pulseT / .8);
      M.position.set(i - 1.5, -.05, (row - 1.5) + (3.2 - (row - 1.5)) * a);
      M.scale.setScalar(a < 1 ? 1 : 0);
      M.updateMatrix();
      pulses.setMatrixAt(i, M.matrix);
    }
    pulses.instanceMatrix.needsUpdate = true;
  }
  (STEPS[step].pn || []).forEach(id => PANIM[id] && PANIM[id](t, dt));
  const w = view.clientWidth, h = view.clientHeight;
  labels.forEach(l => {
    tmp.copy(l.v).project(cam);
    const on = l.g.visible && tmp.z < 1;
    l.el.hidden = !on;
    if (on) l.el.style.transform = `translate(${((tmp.x + 1) / 2 * w).toFixed(1)}px,${((1 - tmp.y) / 2 * h).toFixed(1)}px) translate(-50%,-50%)`;
  });
  animHl(dt);
  renderer.render(scene, cam);
}

/* ---------- 启动 ---------- */
rebuild();
route = parseRoute(location.hash, STEPS.length - 1);
history.replaceState(null, '', routeHash(route));
const initN = route.view === 'step' ? route.n : 0;
cam.position.set(...STEPS[initN].cam);
ctr.target.set(...STEPS[initN].look);
applyRoute(route);
frame();
