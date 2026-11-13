/* 第 0 步全景导览：自动镜头动画 */

/*
 * TOUR 关键帧：景物 → 镜头 → 传感器表面
 * 每帧 dur 是从上一帧到本帧的时长（秒），共 4 段约 30 秒。
 * 坐标取自场景地理（macro 场景）：
 *   景物约 x≈-13，镜筒约 x≈-5…0，传感器表面约 x≈0
 */
const TOUR = [
  {cam:[-6, 8, 24],       look:[-13,  0,    0],   dur: 0},               // 起点：全景视角（同第 0 步）
  {cam:[-13, 3, 8],       look:[-13,  0,    0],   dur: 7, k: 'light'},   // 景物：靠近被摄物
  {cam:[-5,  4, 12],      look:[-5,   0,    0],   dur: 8, k: 'lens'},    // 镜头：镜筒正面
  {cam:[-2,  2,  5],      look:[ 0,   0,    0],   dur: 7, k: 'sensor'},  // 过渡：飞向传感器
  {cam:[-0.95, 0.62, 1.5],look:[-0.08, 0.05, 0],  dur: 8, k: 'sensor'},  // 传感器表面
];

/* 讲解栏里的链路示意图（#flow）：k 是飞往这一帧时所在的那一段。
   镜头停在传感器表面后，后三段（电路、ISP、照片）在 3D 里看不见，只在示意图上依次点亮。 */
const FLOW_HL   = {light: '太阳', lens: 'FE 50-150mm F2 GM', sensor: '全画幅 CMOS'};   // 这一段在 3D 里对应的标注
const FLOW_POST = ['adc', 'isp', 'photo'], FLOW_POST_DUR = 1.6;
let flowK = null;

function setFlow(k) {
  if (k === flowK) return;
  flowK = k;
  let past = k !== null;
  $('flow').querySelectorAll('li').forEach(li => {
    const cur = li.dataset.k === k;
    if (cur) { li.setAttribute('aria-current', 'step'); past = false; }
    else li.removeAttribute('aria-current');
    li.toggleAttribute('data-done', past && !cur);
  });
  if (FLOW_HL[k]) hl(FLOW_HL[k]);          // 只高亮标注，不推镜头
}

/* 这一段的标注整段都显示：每帧续一小段 pinUntil（hl 本身只点亮 1.6 秒，关键词点击仍是 1.6 秒） */
function pinFlow(k) {
  const text = FLOW_HL[k];
  if (!text) return;
  const vis = l => { for (let o = l.g; o; o = o.parent) if (!o.visible) return false; return true; };
  const l = labels.find(l => l.el.textContent === text && vis(l));
  if (l) l.pinUntil = Math.max(l.pinUntil || 0, performance.now() + 250);
}

let tourOn = false;
let tourT  = 0;   // tour 内部已流逝时间（秒）

/* 平滑缓入缓出（二次） */
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function startTour() {
  tourOn = true;
  tourT  = 0;
  tween  = false;
  flowK  = undefined;      // 下一帧一定重新点亮第一段
}

function stopTour() {
  tourOn = false;
  setFlow(null);
}

function animTour(dt) {
  if (!tourOn) return;
  tween  = false;          /* 阻止 goal/tween 和导览争抢镜头 */
  tourT += dt;

  let cumT = 0;
  for (let i = 1; i < TOUR.length; i++) {
    const segDur = TOUR[i].dur;
    if (tourT <= cumT + segDur) {
      const te  = easeInOut((tourT - cumT) / segDur);
      const a   = TOUR[i - 1], b = TOUR[i];
      const mix = (x, y) => x + (y - x) * te;
      cam.position.set(mix(a.cam[0], b.cam[0]),  mix(a.cam[1], b.cam[1]),  mix(a.cam[2], b.cam[2]));
      ctr.target.set( mix(a.look[0], b.look[0]), mix(a.look[1], b.look[1]), mix(a.look[2], b.look[2]));
      setFlow(b.k);
      pinFlow(b.k);
      return;
    }
    cumT += segDur;
  }

  /* 镜头停在最后一帧；示意图接着点亮电路 → ISP → 照片，然后导览结束（照片那格保持点亮） */
  const last = TOUR[TOUR.length - 1];
  cam.position.set(...last.cam);
  ctr.target.set(...last.look);
  const post = Math.floor((tourT - cumT) / FLOW_POST_DUR);
  setFlow(FLOW_POST[Math.min(post, FLOW_POST.length - 1)]);
  if (post >= FLOW_POST.length) tourOn = false;
}

/* 用户拖动时停止导览 */
ctr.addEventListener('start', stopTour);

/* 重播按钮 */
$('tourbtn').addEventListener('click', startTour);
