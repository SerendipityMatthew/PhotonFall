/* SPAD 模拟（第 15 步）：光子按泊松分布到达；SPAD 不在死时间里就雪崩、计一次、淬灭后指数回充，
   死时间里来的光子丢掉。下半画「计数率 vs 入射率」：m = n / (1 + n·τ)（不可瘫痪型死时间模型），看强光怎么堆积饱和。
   时间放慢：屏幕 1 秒 = 模拟 400 ns。依赖 optics-extras.js 的 PANIM / cx2 / FONT，core.js 的 PAL。 */

const SPAD = {tau: 20, win: 400, slow: 400};             // 死时间 ns、窗口 ns、每秒推进 ns
const sp = {t: 0, av: [], ph: [], n: 0, lost: 0, dead: -1e9};
const spRate = () => 10 ** +$('spadr').value;            // 入射光子 / 秒

$('spadr').oninput = () => { sp.n = sp.lost = 0; };
PANIM.spadwrap = (t, dt) => {
  const step = dt * SPAD.slow, rate = spRate() * 1e-9;   // 每 ns 期望光子数
  let tt = sp.t;
  for (;;) {                                              // 泊松到达：指数间隔
    tt += -Math.log(1 - Math.random()) / rate;
    if (tt > sp.t + step) break;
    const ok = tt >= sp.dead;
    sp.ph.push([tt, ok]);
    if (ok) { sp.av.push(tt); sp.dead = tt + SPAD.tau; sp.n++; } else sp.lost++;
  }
  sp.t += step;
  const lo = sp.t - SPAD.win;
  sp.ph = sp.ph.filter(p => p[0] > lo); sp.av = sp.av.filter(a => a > lo - SPAD.tau);
  drawSpad();
};

/* 节点电压（归一化）：工作点 1，击穿 .7；雪崩时 1 ns 内掉到 .62，之后以 τ/3 回充 */
function spV(x) {
  let a = -1e9;
  for (const v of sp.av) if (v <= x) a = v;
  const d = x - a;
  if (d > SPAD.tau * 3) return 1;
  return d < 1 ? 1 - .38 * d : .62 + .38 * (1 - Math.exp(-(d - 1) / (SPAD.tau / 3)));
}

function drawSpad() {
  const c = cx2('spadc'), W = 330, H = 230, en = getLang() === 'en';
  c.fillStyle = PAL.paper; c.fillRect(0, 0, W, H); c.font = FONT; c.lineWidth = 1;
  const L = 34, R = W - 8, X = x => L + (x - (sp.t - SPAD.win)) / SPAD.win * (R - L), Y = v => 102 - (v - .55) / .5 * 70;
  /* 光子到达：计到的实心，死时间里丢掉的空心 */
  sp.ph.forEach(([x, ok]) => {
    c.beginPath(); c.arc(X(x), 22, 3, 0, 7);
    if (ok) { c.fillStyle = PAL.g; c.fill(); } else { c.strokeStyle = PAL.dim; c.stroke(); }
  });
  /* 死时间阴影 */
  c.fillStyle = 'rgba(200,80,45,.10)';
  sp.av.forEach(a => { const x0 = Math.max(L, X(a)), x1 = Math.min(R, X(a + SPAD.tau)); if (x1 > x0) c.fillRect(x0, 30, x1 - x0, 78); });
  /* 击穿电压 */
  c.strokeStyle = PAL.dim; c.setLineDash([4, 3]); c.beginPath(); c.moveTo(L, Y(.7)); c.lineTo(R, Y(.7)); c.stroke(); c.setLineDash([]);
  /* 节点电压曲线 */
  c.strokeStyle = PAL.accent; c.lineWidth = 2; c.beginPath();
  for (let px = L; px <= R; px++) { const x = sp.t - SPAD.win + (px - L) / (R - L) * SPAD.win; px === L ? c.moveTo(px, Y(spV(x))) : c.lineTo(px, Y(spV(x))); }
  c.stroke(); c.lineWidth = 1;
  c.fillStyle = PAL.dim;
  c.fillText(en ? 'photons' : '光子', 2, 25);
  c.fillText('V', 2, Y(1) + 4); c.fillText('Vbd', 2, Y(.7) + 4);
  c.fillText(en ? `← ${SPAD.win} ns window · shaded = dead time ${SPAD.tau} ns` : `← ${SPAD.win} ns 窗口 · 阴影 = 死时间 ${SPAD.tau} ns`, L, 120);

  /* 下半：计数率 vs 入射率（对数坐标） */
  const top = 134, bot = 204, gx = r => L + (Math.log10(r) - 5) / 5 * (R - L), gy = r => bot - (Math.log10(Math.max(r, 1e5)) - 5) / 5 * (bot - top);
  c.strokeStyle = PAL.grid; c.strokeRect(L, top, R - L, bot - top);
  c.strokeStyle = PAL.dim; c.setLineDash([3, 3]); c.beginPath(); c.moveTo(gx(1e5), gy(1e5)); c.lineTo(gx(1e10), gy(1e10)); c.stroke(); c.setLineDash([]);
  c.strokeStyle = PAL.cyan; c.lineWidth = 2; c.beginPath();
  for (let e = 5; e <= 10.001; e += .05) { const n = 10 ** e, m = n / (1 + n * SPAD.tau * 1e-9); e === 5 ? c.moveTo(gx(n), gy(m)) : c.lineTo(gx(n), gy(m)); }
  c.stroke(); c.lineWidth = 1;
  const n = spRate(), m = n / (1 + n * SPAD.tau * 1e-9);
  c.fillStyle = PAL.accent; c.beginPath(); c.arc(gx(n), gy(m), 4, 0, 7); c.fill();
  c.fillStyle = PAL.dim;
  c.fillText(en ? 'counted' : '计到', 2, top + 8); c.fillText('10⁵', L - 2, bot + 12); c.fillText('10¹⁰ /s', R - 44, bot + 12);
  c.fillText(en ? 'ideal' : '理想', gx(3e9) - 30, gy(3e9) + 2);
  c.fillStyle = PAL.ink;
  const tot = sp.n + sp.lost, kept = tot ? Math.round(sp.n / tot * 100) : 100;
  c.fillText((en ? `counted ${sp.n} · lost ${sp.lost} · kept ${kept}% (model ${Math.round(m / n * 100)}%)` : `计到 ${sp.n} · 丢失 ${sp.lost} · 留住 ${kept}%（模型 ${Math.round(m / n * 100)}%）`), 8, H - 6);
  $('spadro').textContent = n >= 1e9 ? (n / 1e9).toFixed(1) + ' G/s' : (n / 1e6).toFixed(n < 1e7 ? 1 : 0) + ' M/s';
}
