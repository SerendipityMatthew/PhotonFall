/* 第 0 步全景导览：自动镜头动画 */

/*
 * TOUR 关键帧：景物 → 镜头 → 传感器表面
 * 每帧 dur 是从上一帧到本帧的时长（秒），共 4 段约 30 秒。
 * 坐标取自场景地理（macro 场景）：
 *   景物约 x≈-13，镜筒约 x≈-5…0，传感器表面约 x≈0
 */
const TOUR = [
  {cam:[-6, 8, 24],       look:[-13,  0,    0],   dur: 0},   // 起点：全景视角（同第 0 步）
  {cam:[-13, 3, 8],       look:[-13,  0,    0],   dur: 7},   // 景物：靠近被摄物
  {cam:[-5,  4, 12],      look:[-5,   0,    0],   dur: 8},   // 镜头：镜筒正面
  {cam:[-2,  2,  5],      look:[ 0,   0,    0],   dur: 7},   // 过渡：飞向传感器
  {cam:[-0.95, 0.62, 1.5],look:[-0.08, 0.05, 0],  dur: 8},   // 传感器表面
];

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
}

function stopTour() {
  tourOn = false;
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
      return;
    }
    cumT += segDur;
  }

  /* 导览自然结束：停在最后一帧 */
  const last = TOUR[TOUR.length - 1];
  cam.position.set(...last.cam);
  ctr.target.set(...last.look);
  tourOn = false;
}

/* 用户拖动时停止导览 */
ctr.addEventListener('start', stopTour);

/* 重播按钮 */
$('tourbtn').addEventListener('click', startTour);
