/* js/highlight.js — 关键词高亮
   依赖：labels（core.js）、goal / tween（app.js 在 highlight.js 之后加载，
   但 goal / tween / scene 在 core.js 里定义，highlight.js 只消费它们） */

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

let _hlT = -1;   // 动画计时器，-1 = 空闲

/* hl(text) → boolean
   在 labels 里找 el.textContent === text 且整条祖先链均 visible 的项。
   找不到返回 false；找到：
   - 给 el 加 .hl 类 1600 ms
   - 把 hlRing 移到 v 并开始脉动
   - goal.l 向 v 移动 40%，tween = true
   - 返回 true */
function hl(text) {
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

  // 清除旧高亮
  labels.forEach(l => l.el.classList.remove('hl'));

  // 高亮 1600 ms
  found.el.classList.add('hl');
  setTimeout(() => found.el.classList.remove('hl'), 1600);

  // 圆环移到目标并开始脉动
  hlRing.position.copy(found.v);
  hlRing.scale.setScalar(1);
  hlRing.visible = true;
  hlRing.material.opacity = 1;
  _hlT = 0;

  // 轻推镜头朝向
  goal.l.lerp(found.v, 0.4);
  tween = true;

  return true;
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
