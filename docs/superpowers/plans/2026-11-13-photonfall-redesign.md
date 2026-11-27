# PhotonFall 重做 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 PhotonFall 改成"小白由浅入深"的讲解页（章节导航 + 入门/进阶/硬核三层 + 关键词高亮 + 第 0 步全景导览），并新增按年代组织的技术演进线（演进卡 + 时间轴视图），整体换成浅色科普书风格。

**Architecture:** 保留单页 `index.html` 和全部 3D 场景，按现有方式用普通 `<script>` 共享顶层变量。新增纯函数路由（`js/route.js`）、讲解栏渲染（`js/panel.js`）、关键词高亮（`js/highlight.js`）、全景导览（`js/tour.js`）、演进数据（`js/evolution.js`）和时间轴视图（`js/timeline.js`）。数据层（步骤、演进节点、路由）用一个零依赖的 Node 检查脚本测试；界面层用一段在浏览器里执行的冒烟脚本测试。

**Tech Stack:** 原生 JS（普通 script）、three.js r128 + OrbitControls（CDN）、CSS 变量；测试用 Node 自带的 `vm` + `assert`，不引入任何依赖。

**Spec:** `docs/superpowers/specs/2026-11-13-photonfall-redesign-design.md`

## Global Constraints

- 不引入框架，不加构建步骤，不升级 three.js（保持 r128）。
- 所有脚本都是普通 `<script>`，不能用 ES modules，不能用 `fetch` 读本地数据：双击打开 `index.html`（`file://`）必须仍然能用。
- 现有 3D 场景的运动和动画逻辑不动；材质、颜色、标注样式可以改。
- 颜色全部定义成 `:root` 变量；强调色砖红约 `#c8502d`；讲解栏米白纸感，标题衬线体（宋体 / Georgia 系），正文无衬线体；3D 舞台保持深色。
- 手机断点约 768px：3D 在上约占 45% 高度，讲解栏在下；页面没有横向滚动。
- 步骤编号 0–31（0 = 先看全景，原第 N 步编号不变）；章节 0–6 的划分见 Task 2。
- 现有交互（变焦、对焦、光圈、快门、ISO、拍照，各步按钮和滑块，点标注看元器件说明，方向键切换）一个都不能退化。
- 历史事实上网核对；无法确认的写成"约""前后"。
- 提交信息用中文，末尾加：`Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## Review Focus

1. **乱写或过期的网址**（`#/step/99`、`#/step/abc`、`#/timeline/不存在`、`#/foo`）：回到第 0 步或只打开时间轴、不打开抽屉，不报错。→ Task 1 的路由测试，Task 10 的冒烟检查。
2. **直接打开 `#/timeline/<id>` 后刷新**：时间轴打开、对应卡片的抽屉展开、3D 暂停渲染。→ Task 10 冒烟检查。
3. **第 0 步导览没播完就离开**（比如马上按方向键去第 5 步）：导览立即停止，镜头不再被导览控制，停在第 5 步的镜位。→ Task 8 冒烟检查。
4. **在时间轴视图或输入框里按方向键**：不切换步骤。→ Task 3 冒烟检查。
5. **高亮的关键词对应的标注在屏幕外或被遮挡**：不报错，镜头转过去，标注照样强调。→ Task 6 冒烟检查。

---

## 测试约定

**Node 检查**：`node tests/check.js`。它在同一个 `vm` 上下文里按顺序加载 `js/route.js`、`js/steps.js`、`js/evolution.js`（文件存在才加载），然后执行 `tests/check.js` 里登记的检查，打印每项 `✓`/`✗`，有失败就以退出码 1 结束。被加载的这三个文件**顶层不能访问 DOM、`THREE` 或其他脚本里的变量**（函数体里可以）。

**浏览器冒烟检查**：`tests/smoke.js` 定义 `async function smoke()`，返回 `{ok:boolean, fails:string[]}`。执行方式：

```bash
python3 -m http.server 8765
```

然后在浏览器面板打开 `http://localhost:8765/`，用 javascript 工具执行 `tests/smoke.js` 的全部内容，再执行 `await smoke()`。Expected：`{ok:true, fails:[]}`。每个任务往 `smoke()` 里追加自己的检查段，段名写在失败信息前缀里，例如 `"[route] …"`。

---

### Task 1: 检查脚本与路由纯函数

**Files:**
- Create: `tests/check.js`
- Create: `js/route.js`

**Interfaces:**
- Produces（`js/route.js`，全局函数）：
  - `parseRoute(hash: string, maxStep: number) -> {view:'step', n:number} | {view:'timeline', id:string|null}`
  - `routeHash(r) -> string`，例如 `'#/step/5'`、`'#/timeline'`、`'#/timeline/bsi'`
  - `historyMode(from: Route|null, to: Route, chOf: (n:number)=>number) -> 'push'|'replace'`
- Produces（`tests/check.js`）：`check(name: string, fn: ()=>void)` 登记一项检查；上下文对象 `ctx` 暴露被加载文件的全局量（`ctx.parseRoute`、`ctx.STEPS` 等）。

- [ ] **Step 1: 在 develop 上新建分支**

```bash
git checkout develop && git checkout -b redesign
```

- [ ] **Step 2: 写 `tests/check.js` 和失败的路由测试**

`tests/check.js` 用 `vm.createContext({})`，按顺序 `vm.runInContext(fs.readFileSync(f,'utf8'), ctx, {filename:f})` 加载上面三个文件（不存在就跳过）。因为 `const` 声明不会挂到上下文对象上，加载完后再执行一行 `vm.runInContext('this.STEPS=typeof STEPS!=="undefined"?STEPS:undefined; …', ctx)`，把用到的全局量（`parseRoute, routeHash, historyMode, CHAPTERS, STEPS, ERAS, LANES, EVO, evoForStep`）导出到 `ctx` 上。

路由检查：

```js
check('route: parse', () => {
  const p = h => ctx.parseRoute(h, 31);
  assert.deepStrictEqual(p('#/step/5'),  {view:'step', n:5});
  assert.deepStrictEqual(p('#/step/0'),  {view:'step', n:0});
  assert.deepStrictEqual(p('#/step/31'), {view:'step', n:31});
  assert.deepStrictEqual(p('#/timeline'), {view:'timeline', id:null});
  assert.deepStrictEqual(p('#/timeline/bsi'), {view:'timeline', id:'bsi'});
  for (const bad of ['', '#', '#/step/32', '#/step/-1', '#/step/abc', '#/step/2.5', '#/foo'])
    assert.deepStrictEqual(p(bad), {view:'step', n:0}, bad);
});
check('route: hash round-trip', () => {
  for (const h of ['#/step/0','#/step/17','#/timeline','#/timeline/cmos-vs-ccd'])
    assert.strictEqual(ctx.routeHash(ctx.parseRoute(h, 31)), h);
});
check('route: historyMode', () => {
  const ch = n => n < 9 ? 1 : 2, S = n => ({view:'step', n}), T = {view:'timeline', id:null};
  assert.strictEqual(ctx.historyMode(null, S(3), ch), 'replace');
  assert.strictEqual(ctx.historyMode(S(3), S(4), ch), 'replace');
  assert.strictEqual(ctx.historyMode(S(8), S(9), ch), 'push');
  assert.strictEqual(ctx.historyMode(S(3), T, ch), 'push');
  assert.strictEqual(ctx.historyMode(T, S(3), ch), 'push');
  assert.strictEqual(ctx.historyMode(T, {view:'timeline', id:'bsi'}, ch), 'push');
});
```

- [ ] **Step 3: 运行，确认失败**

Run: `node tests/check.js`
Expected: 三项 `✗`，原因是 `parseRoute is not a function`，退出码 1。

- [ ] **Step 4: 在 `js/route.js` 实现这三个函数**

`parseRoute` 只接受 `#/step/<非负整数>`（不超过 `maxStep`）和 `#/timeline(/<id>)?`，其余一律返回 `{view:'step', n:0}`。`historyMode`：`from` 为 `null` 时返回 `'replace'`；两边都是步骤且 `chOf` 相同时返回 `'replace'`；其余返回 `'push'`。

- [ ] **Step 5: 运行，确认通过**

Run: `node tests/check.js`
Expected: 三项 `✓`，退出码 0。

- [ ] **Step 6: Commit**

```bash
git add tests/check.js js/route.js
git commit -m "加入 Node 检查脚本和路由纯函数"
```

---

### Task 2: 章节与步骤数据重组

**Files:**
- Modify: `js/steps.js`（整个文件）
- Modify: `js/app.js:9`（`s.h` → `s.adv`）
- Modify: `tests/check.js`

**Interfaces:**
- Produces（`js/steps.js`）：
  - `CHAPTERS: {id:number, name:string}[]`，共 7 项：`0 先看全景 · 1 镜头 · 2 进传感器前 · 3 像素 · 4 结构 · 5 读出与处理 · 6 周边`
  - `STEPS[i]` 新增 `ch:number`；原 `h` 字段改名为 `adv`；本任务后续还会加 `lead`、`hard?`（Task 7）、`noCam?`（Task 8）
  - `STEPS.length === 32`；`STEPS[0]` 是新的"先看全景"
- 章节归属：第 0 步 → 0；1–8 → 1；9–12 → 2；13–15 → 3；16–19 → 4；20–24 → 5；25–31 → 6

- [ ] **Step 1: 写失败的结构检查**

```js
check('steps: shape', () => {
  const S = ctx.STEPS, C = ctx.CHAPTERS;
  assert.strictEqual(C.length, 7);
  assert.strictEqual(S.length, 32);
  const want = [0, ...Array(8).fill(1), ...Array(4).fill(2), ...Array(3).fill(3), ...Array(4).fill(4), ...Array(5).fill(5), ...Array(7).fill(6)];
  assert.deepStrictEqual(S.map(s => s.ch), want);
  S.forEach((s, i) => {
    for (const k of ['t', 'g', 'adv']) assert.ok(typeof s[k] === 'string' && s[k].length, `step ${i} ${k}`);
    assert.ok(Array.isArray(s.cam) && Array.isArray(s.look), `step ${i} cam/look`);
    assert.ok(!('h' in s), `step ${i} still has h`);
  });
  assert.strictEqual(S[1].t, '光从景物出发');
  assert.strictEqual(S[31].t, '计算摄影：夜景、人像、超分');
});
```

- [ ] **Step 2: 运行，确认失败**

Run: `node tests/check.js`
Expected: `steps: shape` `✗`（`CHAPTERS` 未定义）。

- [ ] **Step 3: 改 `js/steps.js`**

在文件顶部加 `CHAPTERS`；在数组最前面插入第 0 步：`{ch:0, t:'先看全景：一张照片是怎么来的', g:'macro', cam:[-6,8,24], look:[-13,0,0], adv:'<p>（Task 7 补全）</p>'}`；给原有 31 步加 `ch`；把 `h:` 全部改成 `adv:`。`app.js:9` 里的 `s.h` 改成 `s.adv`。

- [ ] **Step 4: 运行，确认通过**

Run: `node tests/check.js`
Expected: 全部 `✓`。

- [ ] **Step 5: 浏览器里确认页面没坏**

起服务器打开页面，用 javascript 工具执行：

```js
for (let i = 0; i < STEPS.length; i++) go(i);
```

Expected：`read_console_messages` 没有错误；第 1 步标题显示"2. 光从景物出发"（编号多了一位是正常的，Task 3 会改显示方式）。

- [ ] **Step 6: Commit**

```bash
git add js/steps.js js/app.js tests/check.js
git commit -m "步骤数据加章节字段和第 0 步，h 改名 adv"
```

---

### Task 3: 讲解栏骨架与路由接线

**Files:**
- Modify: `index.html`（重写 `<aside id="panel">` 内部结构；脚本顺序）
- Create: `js/panel.js`
- Modify: `js/app.js`（`go()` 拆分，加 `navigate/applyRoute`，键盘逻辑）
- Create: `tests/smoke.js`

**Interfaces:**
- Consumes: `parseRoute`、`routeHash`、`historyMode`（Task 1）；`CHAPTERS`、`STEPS[i].ch/adv`（Task 2）
- Produces:
  - `renderPanel(i:number)`（`js/panel.js`）：填充 `#chnav`（章节按钮 + 末尾"🕰 时间轴"）、`#prog`（宽度 = `i/31`）、`#sub`（本章各步标题按钮，当前步 `aria-current="true"`）、`#title`、`#lead`、`#adv`、`#hard`（无内容时整个折叠块 `hidden`）、`#evo`（本任务先留空）、`#prevt`/`#nextt`（相邻步骤标题）
  - `navigate(r: Route)`（`js/app.js`）：根据 `historyMode(current, r, n=>STEPS[n].ch)` 调 `history.pushState` 或 `replaceState` 写入 `routeHash(r)`，然后 `applyRoute(r)`
  - `applyRoute(r: Route)`：`view:'step'` 时调 `go(r.n)`；`view:'timeline'` 时调 `showTimeline(r.id)`（Task 10 之前用一个只 `console.info` 的占位函数）
  - `go(i)` 只负责：切场景可见性、显示/隐藏控件面板、设置镜位、`renderPanel(i)`、`listComps()`
  - 全局 `route`：当前路由对象
- 讲解栏 DOM 顺序（id 固定）：`#chnav` → `#prog` → `#sub` → `#title` → `#lead` → `#ctlslot`（把现有 `#ctl`、`#vfwrap`、`#txwrap`、`#chipctl`、`#dnwrap`、`#isp` 和全部 `[data-pn]` 面板移进来，id 不变）→ `<details id="advwrap"><summary>进阶</summary><div id="adv">` → `<details id="hardwrap"><summary>硬核</summary><div id="hard">` → `#evo` → 现有 `#compwrap`（默认折叠，标题改成"本步元器件"）→ `.nav`（`#prev` + `#prevt`，`#next` + `#nextt`）

- [ ] **Step 1: 写冒烟脚本的 `[route]` 和 `[keys]` 段（此时会失败）**

```js
// [route]
location.hash = '#/step/12'; await wait(300);
expect(step === 12, '[route] hash → step 12');
expect($('title').textContent.includes(STEPS[12].t), '[route] title');
const h0 = history.length;
navigate({view:'step', n:13}); await wait(100);       // 12 属第 2 章，13 属第 3 章 → push
expect(history.length === h0 + 1, '[route] cross-chapter push');
navigate({view:'step', n:14}); await wait(100);       // 13、14 同在第 3 章 → replace
expect(history.length === h0 + 1, '[route] same-chapter replace');
history.back(); await wait(300);
expect(step === 12, '[route] back');
location.hash = '#/step/abc'; await wait(300);
expect(step === 0, '[route] bad hash → 0');
// [keys]
navigate({view:'step', n:5}); await wait(100);
dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight'})); await wait(100);
expect(step === 6, '[keys] arrow right');
const inp = $('zo'); inp.focus();
inp.dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight', bubbles:true})); await wait(100);
expect(step === 6, '[keys] ignored in input');
// [layout]
for (let i = 0; i < 32; i++) {
  navigate({view:'step', n:i}); await wait(30);
  expect(!!$('chnav').querySelector('[aria-current="true"]'), `[layout] chapter marked ${i}`);
  expect($('hardwrap').hidden === !STEPS[i].hard, `[layout] hard visibility ${i}`);
}
```

`smoke()` 外壳：开头挂 `window.onerror` 收集错误、定义 `wait(ms)` 和 `expect(cond, msg)`，结尾把收集到的错误也算进 `fails`。

- [ ] **Step 2: 运行，确认失败**

按"测试约定"执行冒烟脚本。Expected：`fails` 里有 `[route] …`（`navigate is not defined`）。

- [ ] **Step 3: 重写 `index.html` 的讲解栏结构，新建 `js/panel.js`，改 `js/app.js`**

脚本顺序：`core.js → route.js → steps.js → evolution.js(Task 9 才有) → lens.js … extras-chapters.js → highlight.js(Task 6) → tour.js(Task 8) → panel.js → timeline.js(Task 10) → app.js`。

`app.js` 启动时：`route = parseRoute(location.hash, 31)`，`history.replaceState(null, '', routeHash(route))`，`applyRoute(route)`。监听 `popstate` 和 `hashchange`：`route = parseRoute(location.hash, 31); applyRoute(route)`（不写历史）。键盘：目标是 `INPUT`/`TEXTAREA`/`SELECT` 时忽略；`route.view==='timeline'` 时忽略；否则 `navigate({view:'step', n:step±1})`（越界不动）。章节按钮跳到该章第一步；`#sub` 按钮跳到对应步。

- [ ] **Step 4: 运行冒烟脚本，确认通过**

Expected：`{ok:true, fails:[]}`。再手动看一眼：第 1 步的变焦、对焦、拍照仍然能用；第 16 步的电势图和时序图正常显示。

- [ ] **Step 5: Commit**

```bash
git add index.html js/panel.js js/app.js tests/smoke.js
git commit -m "讲解栏改成章节导航加三层折叠，接入 hash 路由"
```

---

### Task 4: 浅色科普书视觉与手机布局

**Files:**
- Modify: `css/style.css`（重写）
- Modify: `tests/smoke.js`（加 `[visual]` 段）

**Interfaces:**
- Consumes: Task 3 的全部 DOM id
- Produces: `:root` 变量 `--paper --paper-2 --ink --ink-dim --line --accent --stage --stage-ink --r --g --b`（Task 5、10 会用到）

- [ ] **Step 1: 写 `[visual]` 冒烟段**

```js
// [visual]
const css = getComputedStyle(document.documentElement);
expect(css.getPropertyValue('--accent').trim().toLowerCase() === '#c8502d', '[visual] accent token');
expect(getComputedStyle($('panel')).backgroundColor !== getComputedStyle($('view')).backgroundColor, '[visual] paper vs stage');
expect(document.documentElement.scrollWidth <= innerWidth, '[visual] no horizontal scroll');
```

- [ ] **Step 2: 运行，确认失败**

Expected：`[visual] accent token` 失败。

- [ ] **Step 3: 重写 `css/style.css`**

要点（具体数值由实现者定）：讲解栏 `--paper` 米白；标题衬线（`"Songti SC", "Noto Serif SC", Georgia, serif`）；正文无衬线；`#lead` 是讲解栏里最显眼的块（字号最大，左侧砖红竖线）；`<details>` 折叠块、演进卡、本步元器件各有一眼可分的样式；章节导航是一排圆角药丸，当前章砖红实底；3D 舞台 `--stage` 深色；`.lb` 标注气泡改成深底浅字小卡片，`.lb.hl` 是高亮态（Task 6 用）。`@media (max-width: 768px)`：`body` 改为纵向，`#view` 高约 `45vh` 放上面；`#chnav`、`#sub` 横向滚动不换行。

- [ ] **Step 4: 运行冒烟脚本，确认通过；再用 375×812 视口执行一次**

用 `resize_window` 设为 `mobile`，刷新，再跑一次冒烟脚本。Expected：两次都 `{ok:true, fails:[]}`。分别截图看一眼第 1、16、28 步，然后 `resize_window` 恢复 `desktop`。

- [ ] **Step 5: Commit**

```bash
git add css/style.css tests/smoke.js
git commit -m "换成浅色科普书风格，加手机布局"
```

---

### Task 5: 小图配色与 25–31 步场景统一

**Files:**
- Modify: `js/core.js`（加 `PAL`）
- Modify: `js/optics-extras.js`（`drawAiry`、`drawPdaf`、防抖轨迹 `ibc`）、`js/sensor-extras.js`（`spec`）、`js/readout.js`（`snr`、`npatch` 标注文字、`adcc`、`shc`）、`js/pixel-4t.js`（`tm`、`pot`）
- Modify: `js/extras-chapters.js`（材质颜色，不动运动逻辑）
- Modify: `tests/smoke.js`（加 `[palette]` 段）

**Interfaces:**
- Produces: `PAL`（`js/core.js` 全局常量），字段：`paper, ink, dim, grid, accent, r, g, b, cyan, amber`；值和 Task 4 的 CSS 变量保持一致（直接写死同样的十六进制值，不在运行时读 CSS）
- 25–31 步场景统一用前 24 步已有的颜色：拜耳色 `BAY`、光子黄 `0xffe27a`、电子青 `0x4fd8e8`、电路青绿 `0x19c2a0`、底板 `0x2a3142`

- [ ] **Step 1: 写 `[palette]` 冒烟段**

逐个画布取最左上 2×2 像素的平均亮度：跳到使用该画布的步骤，等 300ms，读像素。

```js
// [palette]  画布底色应该是浅色（亮度 > 200）
const cvs = {airy:5, pdc:4, ibc:8, spec:10, snr:20, adcc:22, shc:23, tm:14, pot:14};
for (const [id, st] of Object.entries(cvs)) {
  navigate({view:'step', n:st}); await wait(300);
  const d = $(id).getContext('2d').getImageData(1, 1, 2, 2).data;
  const lum = (d[0] + d[1] + d[2]) / 3;
  expect(lum > 200, `[palette] ${id} background light (${lum|0})`);
}
```

（步骤号是 Task 2 之后的新编号：第 0 步插在最前面，所以新编号 = 原来界面上显示的编号。）

- [ ] **Step 2: 运行，确认失败**

Expected：多个 `[palette] … background light` 失败。

- [ ] **Step 3: 加 `PAL`，把上面这些画图函数里写死的颜色换成 `PAL` 字段，每次绘制先用 `PAL.paper` 填底；改 `extras-chapters.js` 的材质颜色**

- [ ] **Step 4: 运行，确认通过**

Expected：`{ok:true, fails:[]}`。截图看第 16、20、27、30 步。

- [ ] **Step 5: Commit**

```bash
git add js/core.js js/optics-extras.js js/sensor-extras.js js/readout.js js/pixel-4t.js js/extras-chapters.js tests/smoke.js
git commit -m "讲解栏小图改成浅色调色板，25-31 步场景配色统一"
```

---

### Task 6: 关键词高亮

**Files:**
- Create: `js/highlight.js`
- Modify: `js/app.js`（`frame()` 里调 `animHl(dt)`）
- Modify: `js/panel.js`（给 `#lead [data-hl]` 绑定点击和悬停）
- Modify: `index.html`（加 `highlight.js` 的 script 标签）
- Modify: `tests/smoke.js`（加 `[hl]` 段）

高亮目标直接用各场景已有的 HTML 标注（`label()` 创建的那些），不另建一套 id；场景代码不需要改。没有合适标注的部件，在对应场景里补一个 `label()` 即可。

**Interfaces:**
- Consumes: 现有全局 `labels: {g, el, v}[]`、`goal`、`tween`、`scene`
- Produces:
  - `hl(text: string) -> boolean`：在 `labels` 里找 `el.textContent === text` 且 `g` 当前可见的一项；找不到返回 `false`。找到则给 `el` 加 `hl` 类 1600ms，把一个共享的发光圆环网格 `hlRing` 移到 `v` 并开始脉动，`goal.l` 向 `v` 移动 40%，`tween = true`，返回 `true`
  - `animHl(dt: number)`：驱动 `hlRing` 的脉动和淡出
- 关键词写法：入门文字里 `<k data-hl="<标注原文>">日常说法</k>`，`data-hl` 必须**逐字等于**该步场景里某个标注的文字

- [ ] **Step 1: 写 `[hl]` 冒烟段**

```js
// [hl]
navigate({view:'step', n:13}); await wait(200);          // 4×4 像素阵列，有"微透镜"标注
expect(hl('微透镜') === true, '[hl] finds visible label');
expect(labels.find(l => l.el.textContent === '微透镜').el.classList.contains('hl'), '[hl] class added');
expect(hl('不存在的标注') === false, '[hl] missing label → false');
navigate({view:'step', n:1}); await wait(200);
expect(hl('微透镜') === false, '[hl] hidden group ignored');
// 标注在屏幕外：把镜头拉远到看不见，再高亮
cam.position.set(0, 0, 500); await wait(50);
expect(hl('FE 50-150mm F2 GM') === true, '[hl] off-screen label still works');
```

（Task 7 会再加一段：所有入门文字里的 `data-hl` 都能找到标注。）

- [ ] **Step 2: 运行，确认失败**

Expected：`[hl] …`（`hl is not defined`）。

- [ ] **Step 3: 实现 `js/highlight.js`；`panel.js` 渲染完入门层后给每个 `[data-hl]` 绑定 `click` 和 `mouseenter` → `hl(el.dataset.hl)`；`app.js` 的 `frame()` 在渲染前调 `animHl(dt)`**

- [ ] **Step 4: 运行，确认通过**

Expected：`{ok:true, fails:[]}`。

- [ ] **Step 5: Commit**

```bash
git add js/highlight.js js/app.js js/panel.js tests/smoke.js index.html
git commit -m "入门文字里的关键词可以点，3D 里对应标注高亮"
```

---

### Task 7: 入门层与硬核层内容

**Files:**
- Modify: `js/steps.js`（32 步的 `lead`，各步 `hard`，第 0 步的 `adv`）
- Modify: `tests/check.js`（加 `steps: content`）
- Modify: `tests/smoke.js`（加 `[hl-content]` 段）

**Interfaces:**
- Consumes: `hl()` 的约定（Task 6）
- Produces: 每步 `lead: string`（HTML），可选 `hard: string`

**写作规则**（来自 spec）：入门层一两句大白话加一个日常比喻，不是把术语缩短；`adv` 里的公式块（`<div class="f">`）、对比表（`<table>`）、具体厂商型号段落移到 `hard`，`adv` 保留叙述；`adv` 原有文字不删，只搬家。

- [ ] **Step 1: 写失败的内容检查**

```js
check('steps: content', () => {
  ctx.STEPS.forEach((s, i) => {
    assert.ok(typeof s.lead === 'string' && s.lead.length, `step ${i} lead`);
    assert.ok(/data-hl="[^"]+"/.test(s.lead), `step ${i} lead has a keyword`);
    const text = s.lead.replace(/<[^>]+>/g, '');
    assert.ok(text.length <= 90, `step ${i} lead too long (${text.length})`);
    assert.ok(!/<table|class="f"/.test(s.adv), `step ${i} formula/table left in adv`);
  });
  assert.ok(!ctx.STEPS[0].adv.includes('Task 7'), 'step 0 adv written');
});
```

冒烟段：

```js
// [hl-content]  每个关键词都能在它那一步找到标注
for (let i = 0; i < 32; i++) {
  navigate({view:'step', n:i}); await wait(60);
  for (const k of $('lead').querySelectorAll('[data-hl]'))
    expect(hl(k.dataset.hl), `[hl-content] step ${i} "${k.dataset.hl}"`);
}
```

- [ ] **Step 2: 运行，确认失败**

Run: `node tests/check.js`
Expected：`steps: content` `✗`（`step 0 lead`）。

- [ ] **Step 3: 写 32 步的 `lead`，把公式、表格、厂商细节从 `adv` 搬到 `hard`，写第 0 步的 `adv`**

第 0 步 `adv` 讲完整链路：光 → 镜头 → 滤光玻璃 → 微透镜与滤色片 → 像素变电子 → 读出与 ADC → ISP → 照片，每段一句，并说明每段在第几章。

- [ ] **Step 4: 运行两种检查，确认通过**

Run: `node tests/check.js` → 全部 `✓`；冒烟脚本 → `{ok:true, fails:[]}`。

- [ ] **Step 5: Commit**

```bash
git add js/steps.js tests/check.js tests/smoke.js
git commit -m "32 步补上入门层，公式表格移到硬核层"
```

---

### Task 8: 第 0 步全景导览

**Files:**
- Create: `js/tour.js`
- Modify: `js/steps.js`（第 0 步加 `noCam:1`、`pn:['tourpn']`）
- Modify: `js/app.js`（`go()` 里调 `startTour/stopTour`；`noCam` 时隐藏 `#ctl` 和 `#vfwrap`；`frame()` 里调 `animTour(dt)`）
- Modify: `index.html`（`#ctlslot` 里加 `<div class="row" id="tourpn" data-pn hidden><button id="tourbtn">重播</button></div>`）
- Modify: `tests/smoke.js`（加 `[tour]` 段）

**Interfaces:**
- Produces（`js/tour.js`）：
  - `TOUR: {cam:[x,y,z], look:[x,y,z], dur:number}[]`：景物 → 镜头 → 传感器表面，4–6 段，总时长约 30 秒
  - `startTour()`、`stopTour()`、`animTour(dt)`；全局 `tourOn: boolean`
  - 用户开始拖动画面（`ctr` 的 `start` 事件）→ `stopTour()`

- [ ] **Step 1: 写 `[tour]` 冒烟段**

```js
// [tour]
navigate({view:'step', n:0}); await wait(200);
expect(tourOn === true, '[tour] auto starts on step 0');
expect($('ctl').hidden && $('vfwrap').hidden, '[tour] camera controls hidden');
navigate({view:'step', n:5}); await wait(1500);
expect(tourOn === false, '[tour] stops when leaving');
expect(cam.position.distanceTo(new THREE.Vector3(...STEPS[5].cam)) < 0.5, '[tour] camera settles on step 5');
navigate({view:'step', n:0}); await wait(200);
ctr.dispatchEvent({type:'start'});
expect(tourOn === false, '[tour] user drag stops it');
$('tourbtn').click();
expect(tourOn === true, '[tour] replay');
```

- [ ] **Step 2: 运行，确认失败**

Expected：`[tour] …`（`tourOn is not defined`）。

- [ ] **Step 3: 实现 `js/tour.js` 并接线**

- [ ] **Step 4: 运行，确认通过**

Expected：`{ok:true, fails:[]}`。完整看一遍导览，确认最后停在传感器表面、画面不穿模。

- [ ] **Step 5: Commit**

```bash
git add js/tour.js js/steps.js js/app.js index.html tests/smoke.js
git commit -m "第 0 步加自动播放的全景导览"
```

---

### Task 9: 演进节点数据（完成后停下来给用户过目）

**Files:**
- Create: `js/evolution.js`
- Modify: `tests/check.js`（加 `evo: data`）

**Interfaces:**
- Produces（`js/evolution.js`）：
  - `ERAS`：`[{id:'film',name:'胶片',span:'1990 前'},{id:'ccd',name:'CCD 数码',span:'1990s'},{id:'cmos',name:'CMOS',span:'2000s'},{id:'bsi',name:'背照与堆栈',span:'2010s'},{id:'phone',name:'手机计算摄影',span:'2015+'},{id:'ai',name:'全局快门与 AI',span:'2020s'}]`
  - `LANES`：`[{id:'lens',name:'镜头'},{id:'sensor',name:'传感器'},{id:'proc',name:'图像处理'},{id:'store',name:'存储与传输'},{id:'product',name:'产品形态'}]`
  - `EVO: {id, year, era, lane, title, solved, newProblem, driver, industry, story, steps:number[], draw:(c:CanvasRenderingContext2D, w:number, h:number)=>void}[]`（spec 要求每张卡都有配图，所以 `draw` 必填；画法可以很简单）
  - `evoForStep(n:number) -> EVO[]`：`steps` 含 `n` 的节点，按 `year` 排序
- `draw` 只在函数体里使用其他脚本的全局量（`drawScene` 等），保证 Node 能加载这个文件

- [ ] **Step 1: 写失败的数据检查**

```js
check('evo: data', () => {
  const E = ctx.EVO, eras = new Set(ctx.ERAS.map(e => e.id)), lanes = ctx.LANES.map(l => l.id);
  assert.ok(E.length >= 20 && E.length <= 25, `count ${E.length}`);
  assert.strictEqual(new Set(E.map(e => e.id)).size, E.length, 'unique ids');
  for (const e of E) {
    assert.ok(/^[a-z0-9-]+$/.test(e.id), `id ${e.id}`);
    assert.ok(eras.has(e.era), `${e.id} era`);
    assert.ok(lanes.includes(e.lane), `${e.id} lane`);
    for (const k of ['title', 'solved', 'newProblem', 'driver', 'industry', 'story'])
      assert.ok(typeof e[k] === 'string' && e[k].length, `${e.id} ${k}`);
    assert.ok(e.steps.length && e.steps.every(n => Number.isInteger(n) && n >= 1 && n <= 31), `${e.id} steps`);
    assert.strictEqual(typeof e.draw, 'function', `${e.id} draw`);
  }
  for (const l of lanes) assert.ok(E.filter(e => e.lane === l).length >= 3, `lane ${l} ≥ 3`);
  for (let n = 2; n <= 31; n++) assert.ok(ctx.evoForStep(n).length >= 1, `step ${n} has a card`);
});
```

- [ ] **Step 2: 运行，确认失败**

Run: `node tests/check.js`
Expected：`evo: data` `✗`（`EVO` 未定义）。

- [ ] **Step 3: 上网核对后写 20–25 个节点**

至少包括：胶片 ISO 与颗粒、CCD 数码相机、Bayer 滤色阵列、CMOS 取代 CCD、4T 像素与 CDS、背照式 BSI、堆栈式、四合一像素、相位对焦上传感器、机身防抖、ED / 非球面 / 纳米镀膜、无反取代单反、手机吃掉卡片机、多帧 HDR / 夜景、存储卡 SD → CFexpress、Log 与 H.265 视频、LOFIC / 单帧 HDR（车载推动）、全局快门全画幅、AI 识别对焦、数码取代胶片与柯达。每个节点在 `story` 末尾记一行来源（网站或出版物名称），年份不确定的写"约"。

- [ ] **Step 4: 运行，确认通过**

Run: `node tests/check.js`
Expected：全部 `✓`。

- [ ] **Step 5: Commit**

```bash
git add js/evolution.js tests/check.js
git commit -m "加入 20-25 个技术演进节点数据"
```

- [ ] **Step 6: 停下来给用户过目**

用 `node -e` 从 `js/evolution.js` 生成一张表（id、年份、泳道、标题、四格摘要），写到 `docs/superpowers/evolution-review.md`，发给用户。**等用户确认或改完，再开始 Task 10。**

---

### Task 10: 演进卡与时间轴视图

**Files:**
- Create: `js/timeline.js`
- Modify: `js/panel.js`（`#evo` 渲染演进卡）
- Modify: `js/app.js`（`applyRoute` 接真正的 `showTimeline/hideTimeline`；`frame()` 在 `paused` 时跳过 `renderer.render`）
- Modify: `index.html`（`<section id="timeline" hidden>`，里面放 `#tlaxis`、`#tllanes`、`<aside id="tldrawer" hidden>`）
- Modify: `css/style.css`（时间轴、演进卡、抽屉、手机下泳道纵排）
- Modify: `tests/smoke.js`（加 `[timeline]` 段）

**Interfaces:**
- Consumes: `ERAS`、`LANES`、`EVO`、`evoForStep`（Task 9）；`navigate`、`route`（Task 3）
- Produces:
  - `showTimeline(id: string|null)`：`body` 加 `tl` 类（隐藏 `#panel` 和 `#view`，显示 `#timeline`），`paused = true`，渲染六个年代列 × 五条泳道；`id` 对应某个节点时打开抽屉并把该卡片滚动到视野内，找不到就不开抽屉
  - `hideTimeline()`：反向操作，`paused = false`
  - 全局 `paused: boolean`
- 演进卡（讲解页）：标题、年份、四格摘要；点击 → `navigate({view:'timeline', id})`
- 抽屉：标题、年份、`story`、用 `draw` 画在一个 `<canvas>` 上的配图，"去看原理"按钮每个 `steps` 一个（按钮文字是该步标题）→ `navigate({view:'step', n})`

- [ ] **Step 1: 写 `[timeline]` 冒烟段**

```js
// [timeline]
navigate({view:'step', n:17}); await wait(200);
expect($('evo').querySelectorAll('.evo-card').length === evoForStep(17).length, '[timeline] cards on step');
$('evo').querySelector('.evo-card').click(); await wait(300);
expect(route.view === 'timeline' && paused === true && !$('tldrawer').hidden, '[timeline] card → drawer');
dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight'})); await wait(100);
expect(route.view === 'timeline', '[timeline] arrows ignored');
$('tldrawer').querySelector('[data-step]').click(); await wait(300);
expect(route.view === 'step' && paused === false, '[timeline] 去看原理 → step');
location.hash = '#/timeline/not-a-node'; await wait(300);
expect(route.view === 'timeline' && $('tldrawer').hidden, '[timeline] unknown id → no drawer');
for (const e of EVO) {
  location.hash = '#/timeline/' + e.id; await wait(60);
  expect(!$('tldrawer').hidden && $('tldrawer').textContent.includes(e.title), `[timeline] deep link ${e.id}`);
}
expect(document.documentElement.scrollWidth <= innerWidth, '[timeline] no page h-scroll');
```

另外人工检查一次"刷新后保持"：打开 `#/timeline/<任一 id>`，刷新页面，确认抽屉仍然打开、3D 没在渲染。

- [ ] **Step 2: 运行，确认失败**

Expected：`[timeline] …`（`.evo-card` 数量为 0）。

- [ ] **Step 3: 实现 `js/timeline.js`、讲解页演进卡、相关 CSS**

- [ ] **Step 4: 运行，确认通过；手机视口再跑一次**

Expected：桌面和 `mobile` 视口都 `{ok:true, fails:[]}`。截图：时间轴总览、打开的抽屉、手机下的泳道。

- [ ] **Step 5: Commit**

```bash
git add js/timeline.js js/panel.js js/app.js index.html css/style.css tests/smoke.js
git commit -m "加入演进卡和时间轴视图，与讲解页双向跳转"
```

---

### Task 11: README 与全面验收

**Files:**
- Modify: `README.md`

- [ ] **Step 1: 更新 README**

改内容表（7 章 + 时间轴）、文件结构（新增 `route.js`、`panel.js`、`highlight.js`、`tour.js`、`evolution.js`、`timeline.js`、`tests/`）、运行方式（加 `node tests/check.js` 和冒烟脚本的用法）、准确性说明（新增：演进线的年份和事件经网络核对，"约"表示不确定，每个节点在详情里列了来源）。

- [ ] **Step 2: 全部检查**

Run: `node tests/check.js` → 全部 `✓`。
冒烟脚本：桌面视口、`mobile` 视口各跑一次 → 都是 `{ok:true, fails:[]}`。

- [ ] **Step 3: 双击打开验证**

用浏览器面板打开 `file:///Users/matthew/Downloads/github/PhotonFall/index.html`（如果面板把 `file://` 当静态快照、不执行脚本，就改用系统浏览器 `open index.html`，并截一张图）。Expected：页面正常、3D 加载、能切步骤。

- [ ] **Step 4: 回归走查**

手动走一遍原有交互：第 1–8 步的变焦、对焦、光圈、快门、ISO、拍照；第 4 步相位对焦滑块；第 10 步防抖开关；第 13 步微透镜偏移按钮；第 14 步四合一切换；第 19 步堆栈式切换；第 20 步信噪比滑块；第 25 步镀膜、第 26 步快门、第 30 步卡速三个按钮；点任意 3D 标注出元器件说明。全部正常才算完成。

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "README 更新为新结构，补充演进线准确性说明"
```
