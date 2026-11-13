# PhotonFall 界面简化 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把左侧讲解栏换成"3D 全屏 + 顶部药丸栏 + 左下浮动小卡 + 右侧详细抽屉"，3D 标注按需显示，加第一次进入的操作提示和手机底部抽屉。

**Architecture:** 保留所有面板元素及其 id，只改它们在 DOM 里的位置和样式。新增一个可被 Node 加载的纯函数/数据文件 `js/layout.js`（标注提取、位置文字、卡片控件清单），每一步用新字段 `fig` 指定卡片上的关键小图。界面层拆成 `js/card.js`（小卡 + 抽屉 + 目录 + 放大图）、`js/onboard.js`（提示卡），`js/sheet.js`（手机底部抽屉）；`panel.js` 退化为调用它们。

**Tech Stack:** 原生 JS（普通 script）、three.js r128、CSS 变量；测试用 `node tests/check.js` 和浏览器里的 `tests/smoke.js`。

**Spec:** `docs/superpowers/specs/2026-11-13-photonfall-simplify-design.md`

## Global Constraints

- 不引框架、不加构建、不升级 three.js；普通 `<script>`，不能用 ES modules / fetch；双击 `index.html` 能用。
- 所有文字、演进节点、小图一个字不删，只换位置；章节、步骤编号、路由格式不变。
- 3D 场景运动和动画逻辑不动（标注显示条件属于界面层，可以改）。
- 颜色用 `:root` 变量 / `PAL`；浅色纸感卡片 + 深色 3D 舞台。
- 现有面板元素 id 不变；拆分组合面板时新容器用新 id，原 id 和事件绑定保留。
- 断点约 768px；电脑和手机页面都没有横向滚动。
- `localStorage` 读写包 try/catch，失败当作没看过提示。
- 现有交互不退化：相机控件、各步按钮滑块、点标注看元器件、关键词高亮、全景导览、时间轴双向跳转、深链接、方向键。
- 提交信息中文，末尾一行：`Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## Review Focus

1. **矮屏电脑**（1280×700）上带相机控件 + 取景器的步骤：卡片不超出视口，内部滚动，按钮行始终可点。→ Task 3 冒烟。
2. **抽屉开着进出时间轴**：时间轴里卡片和抽屉都隐藏，回来后抽屉状态恢复、内容是当前步。→ Task 4 冒烟。
3. **标注开关为"全部"时切步、点击被隐藏标注的关键词**：切步后集合按新步重算；被隐藏的标注点关键词时临时出现。→ Task 5 冒烟。
4. **`localStorage` 抛异常**（隐私模式）：页面照常，提示卡每次出现，不报错。→ Task 6 冒烟。
5. **手机底部抽屉拖动时**：手指在抽屉上拖动不转动 3D。→ Task 7 冒烟。

## 测试约定

- `node tests/check.js`：零依赖，按顺序加载 `js/route.js`、`js/steps.js`、`js/evolution.js`、`js/layout.js`（存在才加载）到同一个 vm 上下文；被加载文件顶层不能访问 DOM / THREE。vm 里的对象和数组跟外部字面量做 `deepStrictEqual` 会因原型不同失败，比较前先 `JSON.parse(JSON.stringify(x))`。
- 冒烟：`python3 -m http.server 8765` 后台启动，内置浏览器开新的前台标签页打开 `http://localhost:8765/`，强制刷新 js/css（`fetch(…,{cache:'reload'})` 后 `location.reload()`）并确认新代码生效，执行整个 `tests/smoke.js`，再 `await smoke()`，期望 `{ok:true, fails:[]}`；电脑和手机（`resize_window` preset mobile，用完改回 desktop）各一次。同一标签页历史超过 50 条会让 `[route]` 误报，每次用新标签页。面板不刷新动画帧时可临时用 setTimeout 代替 rAF，并在报告里写明。结束关掉自己起的服务器。

---

### Task 1: 布局数据与纯函数

**Files:**
- Create: `js/layout.js`
- Modify: `js/steps.js`（加 `fig` 字段）
- Modify: `tests/check.js`（加载 layout.js，加检查）

**Interfaces:**
- Produces（`js/layout.js`，全局）：
  - `mentioned(lead: string) -> string[]`：按出现顺序返回所有 `data-hl="…"` 的值，去重
  - `locText(i: number, steps, chapters) -> string`：第 0 步返回 `'先看全景'`；其余返回 `` `${ch} ${章名} · 第 ${x}/${y} 步` ``，x/y 是本章内序号与本章步数
  - `locShort(i, steps, chapters) -> string`：第 0 步 `'先看全景'`；其余 `` `${ch} ${章名} · ${x}/${y}` ``
  - `CARD_CTL: string[]`：进卡片的控件容器 id，值为 `['ctl','chipctl','tourpn','coatpn','shutpn','storpn','mlsctl','quadctl','abwrap','pdafctl','snrctl','ibctl','reflctl']`（后四个是 Task 2 拆出来的新容器）
- Produces（`STEPS[i].fig`，可选字符串）：卡片上关键小图的元素 id。取值：
  - macro 且显示相机控件的步骤 1、2、3、5、6、7、9 → `'vffig'`（Task 2 给取景器那个 `<figure>` 加 id）
  - 4 → `'pdc'`；8 → `'reflc'`；10 → `'ibc'`；12 → `'spec'`；16、17 → `'pot'`；22 → `'snr'`；23 → `'dnwrap'`；24 → `'adcc'`；25 → `'shc'`；26 → `'i8fig'`（Task 2 给第 ⑨ 张 ISP 图的 `<figure>` 加 id）
  - 其余（含 0、11）不设

- [ ] **Step 1: 写失败的检查**

```js
check('layout: mentioned', () => {
  assert.deepStrictEqual(J(ctx.mentioned('a<k data-hl="微透镜">x</k>b<k data-hl="左 PD">y</k><k data-hl="微透镜">z</k>')), ['微透镜','左 PD']);
  assert.deepStrictEqual(J(ctx.mentioned('无关键词')), []);
});
check('layout: locText', () => {
  const S = ctx.STEPS, C = ctx.CHAPTERS;
  assert.strictEqual(ctx.locText(0, S, C), '先看全景');
  assert.strictEqual(ctx.locText(1, S, C), '1 镜头 · 第 1/10 步');
  assert.strictEqual(ctx.locText(16, S, C), '3 像素 · 第 2/3 步');
  assert.strictEqual(ctx.locText(32, S, C), '6 周边 · 第 6/6 步');
  assert.strictEqual(ctx.locShort(16, S, C), '3 像素 · 2/3');
});
check('layout: fig', () => {
  const want = {1:'vffig',2:'vffig',3:'vffig',4:'pdc',5:'vffig',6:'vffig',7:'vffig',8:'reflc',9:'vffig',10:'ibc',12:'spec',16:'pot',17:'pot',22:'snr',23:'dnwrap',24:'adcc',25:'shc',26:'i8fig'};
  ctx.STEPS.forEach((s, i) => assert.strictEqual(s.fig, want[i], `step ${i} fig`));
  assert.strictEqual(ctx.CARD_CTL.length, 13);
});
```

（`J = x => JSON.parse(JSON.stringify(x))`，在 check.js 顶部定义。）

- [ ] **Step 2: 运行确认失败** — Run: `node tests/check.js` → 三项 `✗`（`mentioned is not a function`）。

- [ ] **Step 3: 实现 `js/layout.js`，给 steps.js 加 `fig`，check.js 加载 layout.js**

- [ ] **Step 4: 运行确认通过** — Run: `node tests/check.js` → 全部 `✓`。

- [ ] **Step 5: Commit** — `git add js/layout.js js/steps.js tests/check.js && git commit -m "加入布局数据：关键小图字段、标注提取、位置文字"`

---

### Task 2: 新骨架与面板归位（功能先通，样式最小）

**Files:**
- Modify: `index.html`（重写 body 结构；拆组合面板；删 `#chnav #sub #hint`；脚本加 `js/layout.js`（steps.js 之后）、`js/card.js`（panel.js 之前））
- Create: `js/card.js`
- Modify: `js/panel.js`、`js/app.js`、`js/components.js`（如引用旧容器）
- Modify: `tests/smoke.js`（旧布局断言改写 + 新 `[card]` 段）
- Modify: `css/style.css`（只加让新结构可用的最少样式）

**Interfaces:**
- Consumes: `CARD_CTL`、`STEPS[i].fig`、`locText`（Task 1）；现有 `go(i)`、`navigate`、`renderPanel`、`evoForStep`、`listComps`
- DOM（id 固定）：
  - `#view`（3D，铺满）
  - `#prog`（保留）
  - `#topbar`：`#tocbtn`（☰ 目录）、`#loc`（位置文字）、`#tlbtn`（🕰）、`#lblbtn`（标注开关，Task 5 接逻辑）、`#helpbtn`（?，Task 6 接逻辑）
  - `#card`：`#title`、`#lead`、`#cardctl`（控件区）、`#cardfig`（关键小图区）、`#cardevo`（来龙去脉小药丸）、按钮行 `#detailbtn`、`#prev`、`#next`（`#nextt` 放下一步标题）、`#cardfold`（收起按钮）
  - `#drawer`（`role="dialog"`，`aria-labelledby="drawert"`）：`#drawert`、`#drawerclose`、标签按钮 `[data-tab="deep"|"evo"|"comp"]`、三个面板 `#tabdeep`（里面先放 `#drawerfigs` 再放 `#adv`，再放 `<h3>硬核</h3>` + `#hard`）、`#tabevo`（放 `#evo`）、`#tabcomp`（放 `#compwrap` 的列表）
  - 原 `#ctlslot` 删除；所有面板放进一个隐藏的 `#parking` 容器，由 `placePanels(i)` 每步搬家
- 组合面板拆分：`#pdafwrap` → `#pdafctl`（滑块）+ `#pdafwrap`（只剩画布和说明）；`#snrwrap` → `#snrctl`（三个滑块）+ `#snrwrap`（两张画布和说明）；`#ibwrap` → `#ibctl`（按钮）+ `#ibwrap`（画布）；`#reflwrap` → `#reflctl`（入射角滑块）+ `#reflwrap`（画布）。新控件容器都带 `data-pn`，并在 steps.js 里加进原来对应步骤的 `pn`。取景器 `<figure>` 加 `id="vffig"`，ISP 第 ⑨ 张 `<figure>` 加 `id="i8fig"`。
- Produces（`js/card.js`）：
  - `placePanels(i: number)`：把当前可见的控件容器（`CARD_CTL` 里且未 hidden 的）移进 `#cardctl`；把 `STEPS[i].fig` 指向的元素移进 `#cardfig`（为 `'vffig'` 时只移这个 figure，`#photo` 那个 figure 留在原面板）；其余可见面板移进 `#drawerfigs`；不可见的放回 `#parking`
  - `openDrawer(tab?: 'deep'|'evo'|'comp')`、`closeDrawer()`、全局 `drawerOpen: boolean`、`drawerTab: string`
  - `renderCard(i)`：填 `#loc`（`locText`）、`#cardevo`（每个 `evoForStep(i)` 一枚 `<button class="evo-chip" data-id>`，文字 `🕰 ${year} · ${title}`，点击 `navigate({view:'timeline',id})`）、`#nextt`、按钮可用状态；隐藏没内容的抽屉标签
- `go(i)` 末尾调用顺序：现有可见性逻辑 → `renderPanel(i)`（填 lead/adv/hard/evo）→ `renderCard(i)` → `placePanels(i)` → `listComps()`

- [ ] **Step 1: 改写冒烟里引用旧布局的断言，并加 `[card]` 段**

旧断言替换原则：`#chnav`/`#sub` 的检查改成 `#loc` 文字等于 `locText(step,…)`；`#hardwrap` 可见性改成"`#hard` 为空时 `#tabdeep` 里的硬核标题隐藏"；`$('panel').contains(...)` 改成 `$('card').contains(...)`；`[focus]` 段改为验证 `#prev/#next` 失效时焦点移到另一个按钮或 `#title`。新段：

```js
// [card]
for (let i = 0; i < STEPS.length; i++) {
  navigate({view:'step', n:i}); await wait(40);
  for (const id of CARD_CTL) { const el = $(id); if (el && !el.hidden)
    expect($('cardctl').contains(el), `[card] step ${i} control ${id} in card`); }
  if (STEPS[i].fig) expect($('cardfig').contains($(STEPS[i].fig)), `[card] step ${i} fig ${STEPS[i].fig} in card`);
  else expect($('cardfig').children.length === 0, `[card] step ${i} no fig`);
  expect($('loc').textContent === locText(i, STEPS, CHAPTERS), `[card] step ${i} loc`);
}
navigate({view:'step', n:16}); await wait(60);
$('detailbtn').click(); await wait(60);
expect(drawerOpen && !$('drawer').hidden, '[card] detail opens drawer');
expect($('tabdeep').contains($('tm')), '[card] non-key figure in drawer');
document.querySelector('[data-tab="evo"]').click(); expect(!$('tabevo').hidden && $('tabdeep').hidden, '[card] tab switch');
dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'})); await wait(60);
expect(!drawerOpen && document.activeElement === $('detailbtn'), '[card] Esc closes, focus back');
```

（含义：可见控件都在卡片里；有 `fig` 的步骤关键图在卡片里；没 `fig` 的步骤卡片图区为空。）

- [ ] **Step 2: 运行确认失败** — 冒烟 → `[card] …`（`CARD_CTL` / `#cardctl` 不存在）。

- [ ] **Step 3: 实现骨架、拆分面板、`js/card.js`，改 panel.js/app.js，最少 CSS**

- [ ] **Step 4: 运行确认通过** — `node tests/check.js` 全过；冒烟电脑一次 `{ok:true, fails:[]}`（手机留到 Task 7）。手动确认第 1 步相机控件和拍照、第 4 步离焦滑块、第 10 步防抖按钮、第 22 步三个滑块、第 8 步入射角滑块都还能用。

- [ ] **Step 5: Commit** — `git add index.html js/card.js js/panel.js js/app.js js/steps.js css/style.css tests/smoke.js js/components.js && git commit -m "界面骨架改为 3D 全屏 + 浮动小卡 + 详细抽屉，面板按步骤归位"`

---

### Task 3: 电脑端视觉、卡片收起、小图放大

**Files:**
- Modify: `css/style.css`、`js/card.js`、`index.html`（放大层 `#zoom`）
- Modify: `tests/smoke.js`（`[cardui]` 段）

**Interfaces:**
- Produces: `toggleCard(force?: boolean)`、全局 `cardFolded: boolean`；`openZoom(el)`、`closeZoom()`；`#zoom`（`role="dialog"`）
- 顶栏药丸浅色半透明浮在 3D 上；`#prog` 贴视口上沿 2–3px 砖红；卡片左下约 340px 宽、`max-height: calc(100vh - 顶栏高度 - 两侧间距)`、内部滚动、按钮行粘在卡片底部；抽屉右侧 `min(460px, 42vw)`；演进小药丸用现有 token，视觉比原演进卡轻

- [ ] **Step 1: 写 `[cardui]` 冒烟段**

```js
// [cardui]
navigate({view:'step', n:1}); await wait(60);
const cr = $('card').getBoundingClientRect();
expect(cr.bottom <= innerHeight && cr.top >= 0, '[cardui] card inside viewport');
expect($('next').getBoundingClientRect().bottom <= innerHeight, '[cardui] next button visible');
toggleCard(true); navigate({view:'step', n:2}); await wait(60);
expect(cardFolded && $('lead').offsetParent === null, '[cardui] fold persists across steps');
toggleCard(false);
$('cardfig').firstElementChild.click(); await wait(40);
expect(!$('zoom').hidden, '[cardui] figure zoom opens');
dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'})); await wait(40);
expect($('zoom').hidden, '[cardui] Esc closes zoom');
expect(document.documentElement.scrollWidth <= innerWidth, '[cardui] no h-scroll');
```

并用 `resize_window` 设 1280×700 再跑一次本段（Review Focus 1）。

- [ ] **Step 2: 运行确认失败**
- [ ] **Step 3: 实现样式、收起、放大**
- [ ] **Step 4: 运行确认通过（1440×900 与 1280×700），截图第 1、16、22、31 步**
- [ ] **Step 5: Commit** — `"电脑端浮动小卡与抽屉样式，卡片可收起，小图可放大"`

---

### Task 4: 目录弹层与时间轴顶栏

**Files:**
- Modify: `js/card.js`、`index.html`（`#toc`）、`css/style.css`、`js/timeline.js`
- Modify: `tests/smoke.js`（`[toc]` 段）

**Interfaces:**
- Produces: `openToc()`、`closeToc()`；`#toc`（`role="dialog"`），按章分组列出全部步骤标题按钮（`data-i`），当前步 `aria-current="true"`；点击 → `navigate({view:'step', n})` 并关闭
- 时间轴视图：顶部换成同风格药丸栏（☰ 目录、"技术演进时间轴"、回到讲解）；进入时隐藏 `#card`、`#drawer`、`#topbar` 的讲解专用项；离开时恢复（抽屉若之前开着则仍开着）

- [ ] **Step 1: 写 `[toc]` 冒烟段**

```js
// [toc]
navigate({view:'step', n:3}); await wait(40);
$('tocbtn').click(); await wait(40);
expect(!$('toc').hidden, '[toc] opens');
$('toc').querySelector('[data-i="20"]').click(); await wait(80);
expect(step === 20 && $('toc').hidden, '[toc] jump closes');
openDrawer(); navigate({view:'timeline', id:null}); await wait(80);
expect($('card').offsetParent === null && $('drawer').offsetParent === null, '[toc] timeline hides card+drawer');
history.back(); await wait(200);
expect(step === 20 && drawerOpen && !$('drawer').hidden, '[toc] drawer restored after timeline');
closeDrawer();
```

- [ ] **Step 2: 运行确认失败**
- [ ] **Step 3: 实现**
- [ ] **Step 4: 运行确认通过**
- [ ] **Step 5: Commit** — `"顶栏目录弹层，时间轴顶栏统一，进出时间轴保留抽屉状态"`

---

### Task 5: 标注按需显示

**Files:**
- Modify: `js/app.js`（`frame()` 里 `labels.forEach` 的 `on` 条件，约 193 行）、`js/highlight.js`（临时点亮标记）、`js/card.js`（`#lblbtn`）
- Modify: `tests/smoke.js`（`[labels]` 段）

**Interfaces:**
- Produces: 全局 `showAllLabels: boolean`（默认 false）；`curMentioned: Set<string>`（`go(i)` 时设为 `new Set(mentioned(STEPS[i].lead))`）；每个 label 对象可带 `pinUntil: number`（`performance.now()` 时间戳），`hl()` 命中时设为 `now + 1600`
- `frame()` 中：`const on = l.g.visible && tmp.z < 1 && (showAllLabels || curMentioned.has(l.el.textContent) || (l.pinUntil || 0) > now)`
- `#lblbtn` 文字在"标注：提到的 / 标注：全部"之间切换，`aria-pressed` 同步

- [ ] **Step 1: 写 `[labels]` 冒烟段**

```js
// [labels]
showAllLabels = false; navigate({view:'step', n:16}); await wait(150);
const vis = () => labels.filter(l => !l.el.hidden).map(l => l.el.textContent).sort();
const want = [...new Set(mentioned(STEPS[16].lead))].sort();
expect(vis().length > 0 && vis().every(t => want.includes(t)), '[labels] only mentioned visible');
$('lblbtn').click(); await wait(150);
expect(showAllLabels && vis().length > want.length, '[labels] all shows more');
navigate({view:'step', n:15}); await wait(150);
expect(showAllLabels, '[labels] toggle persists');
$('lblbtn').click(); await wait(150);
const hidden = labels.find(l => l.el.hidden && l.g.visible && !curMentioned.has(l.el.textContent));
if (hidden) { hl(hidden.el.textContent); await wait(150); expect(!hidden.el.hidden, '[labels] hl temporarily shows hidden label'); }
```

（第一条断言：默认可见的标注都在入门句提到的集合里，且至少有一个。）

- [ ] **Step 2: 运行确认失败**
- [ ] **Step 3: 实现**
- [ ] **Step 4: 运行确认通过；第 0 步导览全程看一遍，导览点到的标注照常出现**
- [ ] **Step 5: Commit** — `"3D 标注默认只显示入门句提到的，可切换全部，关键词点击临时显示"`

---

### Task 6: 第一次进入的操作提示

**Files:**
- Create: `js/onboard.js`（加在 `js/card.js` 之后）
- Modify: `index.html`（`#onboard` 容器）、`css/style.css`、`js/app.js`（删除 `#hint` 相关引用，如有）
- Modify: `tests/smoke.js`（`[onboard]` 段）

**Interfaces:**
- Produces: `ONBOARD_KEY = 'photonfall.onboarded'`；`showOnboard()`、`hideOnboard()`；`onboardSeen() -> boolean`（try/catch 包裹，异常返回 false）；`markOnboard()`（try/catch，异常忽略）
- 三张卡文字固定为：
  1. `拖动画面可以转动，双指或滚轮缩放。`
  2. `文字里带下划线的词可以点，3D 里会标出来。`
  3. `点"下一步"往下走；"详细"里有更深的内容和来龙去脉。`
- 每张有"下一张"（最后一张为"知道了"）；看完或点"知道了"调 `markOnboard()`；启动时 `!onboardSeen()` 则显示；`#helpbtn` 调 `showOnboard()`；不打断导览

- [ ] **Step 1: 写 `[onboard]` 冒烟段**

```js
// [onboard]
try { localStorage.removeItem(ONBOARD_KEY); } catch {}
hideOnboard(); if (!onboardSeen()) showOnboard();
expect(!$('onboard').hidden && $('onboard').textContent.includes('拖动画面可以转动'), '[onboard] shows when unseen');
for (let k = 0; k < 3; k++) $('onboard').querySelector('button').click();
expect($('onboard').hidden && onboardSeen(), '[onboard] done marks seen');
$('helpbtn').click(); expect(!$('onboard').hidden, '[onboard] ? reopens'); hideOnboard();
const orig = Storage.prototype.getItem; Storage.prototype.getItem = () => { throw new Error('blocked'); };
let threw = false; try { expect(onboardSeen() === false, '[onboard] storage error → unseen'); } catch { threw = true; }
Storage.prototype.getItem = orig; expect(!threw, '[onboard] storage error does not throw');
```

- [ ] **Step 2: 运行确认失败**
- [ ] **Step 3: 实现**
- [ ] **Step 4: 运行确认通过；手动：清掉标记刷新出现，点完刷新不再出现**
- [ ] **Step 5: Commit** — `"第一次进入显示三张操作提示，? 可重新打开"`

---

### Task 7: 手机底部抽屉

**Files:**
- Create: `js/sheet.js`（加在 `js/onboard.js` 之后）
- Modify: `css/style.css`（`@media (max-width:768px)`）、`js/card.js`（"详细"在手机上改为把抽屉切到展开档）、`index.html`（卡片顶部把手 `#grip`）
- Modify: `tests/smoke.js`（`[sheet]` 段，仅窄屏执行）

**Interfaces:**
- Produces: `setSheet(state: 'min'|'mid'|'max')`、全局 `sheetState`；手机上 `#card` 即底部抽屉，`max` 档时在卡片内显示三个标签（复用 `#drawer` 的三个面板，移入卡片下方或以同一抽屉全屏显示——实现者二选一，保持标签和内容一致）
- 档位高度：`min` 只露标题一行；`mid` 不超过 `50vh`；`max` 约 `92vh`
- 拖动 `#grip` 用 pointer 事件，`setPointerCapture`，松手按最近档吸附；拖动期间 `ctr.enabled = false`，结束恢复
- 顶栏在手机上：`☰`、`#loc` 用 `locShort`、`🕰`、`?`；`#lblbtn` 移到目录弹层底部

- [ ] **Step 1: 写 `[sheet]` 冒烟段（`innerWidth <= 768` 时执行）**

```js
// [sheet]
if (innerWidth <= 768) {
  navigate({view:'step', n:1}); await wait(80);
  expect(sheetState === 'mid' && $('card').getBoundingClientRect().height <= innerHeight * 0.52, '[sheet] mid ≤ ~50vh');
  expect($('loc').textContent === locShort(1, STEPS, CHAPTERS), '[sheet] short loc');
  $('detailbtn').click(); await wait(80);
  expect(sheetState === 'max', '[sheet] detail expands');
  setSheet('min'); await wait(80);
  expect($('card').getBoundingClientRect().height < 90, '[sheet] min is a strip');
  const g = $('grip').getBoundingClientRect(), x = g.left + g.width/2, y0 = g.top + 4;
  $('grip').dispatchEvent(new PointerEvent('pointerdown', {clientX:x, clientY:y0, pointerId:1, bubbles:true}));
  expect(ctr.enabled === false, '[sheet] drag disables orbit');
  $('grip').dispatchEvent(new PointerEvent('pointermove', {clientX:x, clientY:y0 - 300, pointerId:1, bubbles:true}));
  $('grip').dispatchEvent(new PointerEvent('pointerup', {clientX:x, clientY:y0 - 300, pointerId:1, bubbles:true}));
  await wait(80);
  expect(ctr.enabled === true && sheetState !== 'min', '[sheet] drag up snaps, orbit restored');
  setSheet('mid');
  expect(document.documentElement.scrollWidth <= innerWidth, '[sheet] no h-scroll');
}
```

- [ ] **Step 2: 运行确认失败（手机视口）**
- [ ] **Step 3: 实现**
- [ ] **Step 4: 电脑和手机各跑一次全部冒烟，确认通过；截图手机第 1、16 步的 mid 和 max 档**
- [ ] **Step 5: Commit** — `"手机上小卡变底部抽屉，三档可拖动"`

---

### Task 8: Esc 顺序、焦点、README 与全面验收

**Files:**
- Modify: `js/card.js`、`js/timeline.js`（统一 Esc 处理）、`README.md`
- Modify: `tests/smoke.js`（`[esc]` 段）

**Interfaces:**
- Esc 依次关闭最上层：`#zoom` → `#toc` → `#onboard` → `#drawer`（或手机 `max` 档回到 `mid`）→ 时间轴抽屉；一次按键只关一层
- 所有新按钮有可见焦点；`#toc`、`#drawer`、`#zoom`、`#onboard` 打开时焦点进入，关闭时回到触发按钮

- [ ] **Step 1: 写 `[esc]` 冒烟段**

```js
// [esc]
const esc = () => dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'}));
navigate({view:'step', n:1}); await wait(60);
openDrawer(); openToc(); openZoom($('cardfig').firstElementChild); await wait(40);
esc(); expect($('zoom').hidden && !$('toc').hidden && drawerOpen, '[esc] closes zoom first');
esc(); expect($('toc').hidden && drawerOpen, '[esc] then toc');
esc(); expect(!drawerOpen, '[esc] then drawer');
```

- [ ] **Step 2: 运行确认失败**
- [ ] **Step 3: 实现；README 的"操作方式"和"每一步的讲解栏包含"按新界面重写，文件结构加入 `layout.js`、`card.js`、`onboard.js`、`sheet.js`**
- [ ] **Step 4: 全面验收**：`node tests/check.js` 全过；冒烟电脑与手机各一次全过；回归走一遍原有交互（第 1–9 步相机控件与拍照、第 4 步离焦、第 8 步镀膜按钮与入射角、第 10 步防抖、第 13 步微透镜偏移、第 14 步四合一、第 21 步堆栈切换、第 22 步信噪比滑块、第 27/31 步按钮、点 3D 标注看元器件、第 0 步导览与重播、时间轴双向跳转、刷新 `#/timeline/<id>`）；静态检查无 `type="module"`、`import `、`fetch(`
- [ ] **Step 5: Commit** — `"Esc 按层关闭与焦点管理，README 改写为新界面"`
