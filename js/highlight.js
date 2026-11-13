/* js/highlight.js — 关键词高亮
   依赖：labels / scene / cam / ctr / tween（core.js）；goal（app.js，比本文件后加载，
   只在点击时用到，那时早已定义） */

/* ---------- 共享发光圆环（加一次，始终挂在 scene 上） ---------- */
const hlRing = (() => {
  const geo = new THREE.TorusGeometry(0.6, 0.06, 8, 48);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xf0a487,     // var(--accent-glow)
    transparent: true,
    opacity: 0,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.visible = false;
  scene.add(mesh);
  return mesh;
})();

let _hlT = -1;        // 动画计时器，-1 = 空闲
let _hlTimer = null;  // setTimeout 句柄（防止多次调用叠计时器）
let _hlEl = null;     // 当前持有 .hl 类的 DOM 元素

/* hl(text, nudge = false) → boolean
   在 labels 里找 el.textContent === text 且整条祖先链均 visible 的项。
   找不到返回 false；找到：
   - 清除上一次的 .hl 类和计时器（防止同标签连续调用截断高亮）
   - 给 el 加 .hl 类 1600 ms
   - 把 hlRing 移到 v 并开始脉动
   - 仅当 nudge === true 时：镜头留在原地（读者自己转过的视角不动），朝向往 v 转 40%；
     转完标注还在舞台外，就直接对准 v；还看不见就把镜头沿视线挪近
   - 返回 true */
function hl(text, nudge = false) {
  const found = labels.find(l => {
    if (l.el.textContent !== text) return false;
    // 遍历整条 THREE.Object3D 祖先链
    let obj = l.g;
    while (obj) {
      if (!obj.visible) return false;
      obj = obj.parent;
    }
    return true;
  });

  if (!found) return false;

  // 临时点亮标记：让 frame() 在高亮期间显示该标注（即使 showAllLabels=false 且不在 curMentioned）
  found.pinUntil = performance.now() + 1600;

  // 清除上一次的计时器和高亮类（防止 hover→click 叠计时器截断 click 的高亮）
  if (_hlTimer !== null) { clearTimeout(_hlTimer); _hlTimer = null; }
  if (_hlEl !== null) { _hlEl.classList.remove('hl'); _hlEl = null; }

  // 高亮 1600 ms，记住计时器句柄和目标元素
  found.el.classList.add('hl');
  _hlEl = found.el;
  _hlTimer = setTimeout(() => {
    found.el.classList.remove('hl');
    _hlEl = null;
    _hlTimer = null;
  }, 1600);

  // 圆环移到目标并开始脉动
  hlRing.position.copy(found.v);
  hlRing.scale.setScalar(1);
  hlRing.visible = true;
  hlRing.material.opacity = 1;
  _hlT = 0;

  // 仅点击时轻推镜头朝向
  if (nudge) {
    /* 正在飞往这一步的预设机位就别打断；否则以读者此刻的位置和朝向为起点 */
    if (!tween) { goal.p.copy(cam.position); goal.l.copy(ctr.target); }
    goal.l.lerp(found.v, 0.4);
    if (!_hlOnStage(found.v)) goal.l.copy(found.v);
    /* 对准了还看不见（离得太远、超出远裁剪面）：沿视线往前挪到这一步预设的观察距离 */
    if (!_hlOnStage(found.v)) {
      const s = STEPS[step], d = V(...s.cam).distanceTo(V(...s.look));
      goal.p.sub(found.v).setLength(d).add(found.v);
    }
    tween = true;
  }

  return true;
}

/* 镜头到 goal.p、看向 goal.l 时，v 是否落在舞台画面里（四周留 10%） */
const _hlCam = new THREE.PerspectiveCamera();
function _hlOnStage(v) {
  _hlCam.copy(cam);
  _hlCam.position.copy(goal.p);
  _hlCam.lookAt(goal.l);
  _hlCam.updateMatrixWorld();
  const p = v.clone().project(_hlCam);
  return p.z < 1 && Math.abs(p.x) < 0.9 && Math.abs(p.y) < 0.9;
}

/* hlClear() — 换步时调用：停掉计时器，收起圆环和 .hl，清掉所有临时点亮标记 */
function hlClear() {
  if (_hlTimer !== null) { clearTimeout(_hlTimer); _hlTimer = null; }
  if (_hlEl !== null) { _hlEl.classList.remove('hl'); _hlEl = null; }
  hlRing.visible = false;
  hlRing.material.opacity = 0;
  _hlT = -1;
  labels.forEach(l => { l.pinUntil = 0; });
}

/* animHl(dt) — 在 frame() 里每帧渲染前调用 */
function animHl(dt) {
  if (_hlT < 0) return;
  _hlT += dt;

  const dur = 1.6;
  if (_hlT >= dur) {
    hlRing.visible = false;
    hlRing.material.opacity = 0;
    _hlT = -1;
    return;
  }

  // 脉动缩放（3.5 周期 / 1.6 s）
  const scale = 1 + 0.18 * Math.sin(_hlT * Math.PI * 3.5);
  hlRing.scale.setScalar(scale);

  // 最后 0.4 s 淡出
  const fadeStart = 1.2;
  const opacity = _hlT < fadeStart ? 1 : (dur - _hlT) / (dur - fadeStart);
  hlRing.material.opacity = Math.max(0, opacity);
}
