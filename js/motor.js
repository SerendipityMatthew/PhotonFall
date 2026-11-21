/* 对焦马达模拟（第 3 步）：对焦组按马达特性去追目标位置，3D 里的对焦组跟着走。
   每种马达用一个带速度上限的二阶伺服模型：a = ω²·误差 − 2ζω·v。ω / ζ / 速度上限是示意值，不是厂商实测。
   依赖 lens.js 的 st / LENS / rebuild / placeFoc / mfd，optics-extras.js 的 PANIM / cx2，core.js 的 PAL / FONT。 */

const MOTORS = {
  XD:    {w: 40, z: .75, v: 12,  zh: 'XD 线性马达',      en: 'XD Linear Motor'},
  DLM:   {w: 24, z: .85, v: 6,   zh: '双线性马达',       en: 'Double Linear Motor'},
  DDSSM: {w: 20, z: 1,   v: 3, zh: 'DDSSM 直驱超声马达', en: 'DDSSM (piezo drive)'},
};
const ms = {st: 0, type: 'XD', lens: null, v: 0, a: 0, hist: [], t0: 0, done: null, lastT: null, auto: false, autoT: 0, far: false};

function motorActive() { return typeof step === 'number' && (STEPS[step].pn || []).includes('motorwrap'); }
function syncMotorBtns() {
  document.querySelectorAll('#motbtns [data-mt]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mt === ms.type)));
  $('motauto').setAttribute('aria-pressed', String(ms.auto));
}
document.querySelectorAll('#motbtns [data-mt]').forEach(b => b.onclick = () => { ms.type = b.dataset.mt; syncMotorBtns(); });
$('motauto').onclick = () => { ms.auto = !ms.auto; ms.autoT = -9; syncMotorBtns(); };

PANIM.motorwrap = (t, dt) => {
  if (ms.lens !== LENS) { ms.lens = LENS; ms.type = LENS.mt; syncMotorBtns(); }
  if (ms.auto && t - ms.autoT > 1.6) {            // 自动来回：前景 ↔ 背景灯
    ms.autoT = t; ms.far = !ms.far; st.s = ms.far ? 8 : 1.2; rebuild();
  }
  ms.st += dt;                                     // 模拟时间：用它计时，帧率掉了读数也不变
  if (st.foT !== ms.lastT) { ms.lastT = st.foT; ms.t0 = ms.st; ms.done = null; }

  const M = MOTORS[ms.type];
  let x = st.foA ?? st.foT, v = ms.v, a = 0;
  const n = Math.max(1, Math.ceil(dt / .001)), h = dt / n;
  for (let i = 0; i < n; i++) {
    a = M.w * M.w * (st.foT - x) - 2 * M.z * M.w * v;
    v = Math.max(-M.v, Math.min(M.v, v + a * h));
    x += v * h;
  }
  st.foA = x; ms.v = v; ms.a = a; placeFoc(x);
  motor3d(ms.type, ms.type === 'DDSSM' ? Math.abs(v) : Math.min(1, Math.abs(a) / (M.w * M.w * .25)));
  if (ms.done === null && Math.abs(st.foT - x) < .005 && Math.abs(v) < .05) ms.done = ms.st - ms.t0;
  ms.hist.push([ms.st, st.foT, x]);
  while (ms.hist.length && ms.hist[0][0] < ms.st - 1.6) ms.hist.shift();
  drawMotor(t);
};

function drawMotor(t) {
  const c = cx2('motc'), W = 330, H = 236, en = typeof getLang === 'function' && getLang() === 'en';
  const M = MOTORS[ms.type], moving = Math.abs(ms.v) > .02;
  c.fillStyle = PAL.paper; c.fillRect(0, 0, W, H); c.font = FONT; c.lineWidth = 1;
  const cnt = ms.type === LENS.mt && LENS.m > 1 ? LENS.m + ' × ' : '';
  c.fillStyle = PAL.ink; c.fillText(cnt + (en ? M.en : M.zh), 10, 14);
  c.fillStyle = PAL.dim; c.textAlign = 'right'; c.fillText(en ? 'near ← front · back → far' : '近 ← 向前 · 向后 → 远', W - 10, 14); c.textAlign = 'left';

  /* 上半：马达结构剖面，对焦组装在滑架上 */
  const ry = 64, cx = 268 - (st.foA ?? 0) * 200;
  if (ms.type === 'DDSSM') {
    const jit = moving ? Math.sin(t * 900) * 2 : 0;
    c.fillStyle = '#c9b8e8'; c.fillRect(20, 40, 14 + jit, 48);                       // 压电陶瓷
    c.strokeStyle = PAL.dim; c.strokeRect(20, 40, 14 + jit, 48);
    c.fillStyle = '#9aa3b5'; c.fillRect(34 + jit, ry - 2, 270, 4);                    // 驱动杆
    c.fillStyle = '#6b6359'; c.fillRect(cx - 12, ry - 7, 24, 14);                     // 摩擦夹块
    c.fillStyle = PAL.dim;
    c.fillText(en ? 'piezo' : '压电陶瓷', 14, 100);
    c.fillText(en ? (moving ? 'ultrasonic vibration → friction pushes the group' : 'stopped: friction holds it, no power needed')
                  : (moving ? '超声振动 → 摩擦把对焦组推着走' : '停住：靠摩擦锁住，不用通电'), 78, 104);
  } else {
    const strip = y => { for (let k = 0; k < 18; k++) { c.fillStyle = k % 2 ? '#ef8a8d' : '#8fb4ff'; c.fillRect(30 + k * 15, y, 15, 9); } };
    const coil = y => {
      const I = Math.min(1, Math.abs(ms.a) / (M.w * M.w * .25));
      c.fillStyle = `rgba(224,122,69,${.35 + .65 * I})`; c.fillRect(cx - 15, y, 30, 11);
      c.strokeStyle = '#a0522d'; for (let k = -12; k <= 12; k += 4) { c.beginPath(); c.moveTo(cx + k, y); c.lineTo(cx + k, y + 11); c.stroke(); }
    };
    c.fillStyle = '#9aa3b5'; c.fillRect(30, ry - 1, 270, 2);                           // 导杆
    strip(96); coil(84);
    if (ms.type === 'DLM') { strip(23); coil(33); }
    const F = Math.max(-38, Math.min(38, -ms.a / (M.w * M.w) * 160));                  // 屏幕上向左 = 向前
    if (Math.abs(F) > 3) {
      c.strokeStyle = PAL.accent; c.fillStyle = PAL.accent; c.lineWidth = 2;
      c.beginPath(); c.moveTo(cx, 78); c.lineTo(cx + F, 78); c.stroke();
      c.beginPath(); c.moveTo(cx + F, 78); c.lineTo(cx + F - Math.sign(F) * 6, 74); c.lineTo(cx + F - Math.sign(F) * 6, 82); c.fill(); c.lineWidth = 1;
    }
    c.fillStyle = PAL.dim;
    c.fillText(en ? (moving ? 'coil current in magnet field → F = B·I·L' : 'stopped: closed loop keeps a small holding current')
                  : (moving ? '线圈通电 × 磁铁 → 洛伦兹力 F = B·I·L' : '停住：闭环控制，靠电流把位置稳住'), 30, 120);
  }
  c.fillStyle = 'rgba(169,212,255,.55)'; c.strokeStyle = '#5a95ff';                    // 对焦组镜片
  c.beginPath(); c.ellipse(cx, ry, 8, 30, 0, 0, 7); c.fill(); c.stroke();

  /* 下半：目标位置 vs 对焦组实际位置 */
  const top = 132, bot = 206, L = 30, R = W - 10, T = 1.6, X = tt => R - (ms.st - tt) / T * (R - L), Y = f => bot - f * (bot - top);
  c.strokeStyle = PAL.grid; c.strokeRect(L, top, R - L, bot - top);
  c.fillStyle = PAL.dim; c.fillText(en ? 'near' : '近', 6, top + 8); c.fillText(en ? 'far' : '远', 6, bot);
  const line = (k, col, dash) => {
    c.strokeStyle = col; c.lineWidth = 2; c.setLineDash(dash); c.beginPath();
    ms.hist.forEach((p, i) => i ? c.lineTo(X(p[0]), Y(p[k])) : c.moveTo(X(p[0]), Y(p[k]))); c.stroke(); c.setLineDash([]); c.lineWidth = 1;
  };
  line(1, PAL.accent, [5, 4]); line(2, PAL.cyan, []);
  c.fillStyle = PAL.accent; c.fillText(en ? 'target' : '目标', L + 4, top + 12);
  c.fillStyle = PAL.cyan; c.fillText(en ? 'focus group' : '对焦组', L + 44, top + 12);
  c.fillStyle = PAL.ink;
  c.fillText((en ? 'Focus time ' : '对焦用时 ') + (ms.done == null ? '…' : Math.round(ms.done * 1000) + ' ms') + (en ? ' (illustrative)' : '（示意）'), 10, H - 10);
}
