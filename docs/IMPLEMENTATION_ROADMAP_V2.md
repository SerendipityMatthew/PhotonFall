# PhotonFall V2 执行路线图

分阶段执行计划。每项：优先级 / 修改文件 / 依赖任务 / 工作量 / 风险 / 验收 / 测试方法。全部 PR 对应 PHOTONFALL_AUDIT_V2.md 里的 PF-###。

**基本约束**：
- 每个 PF 一个分支、一个 PR。
- 分支从 `develop` 切，走 PR 合并，不本地 merge 推送。
- 每次 PR 跑 `node tests/check.js` 全过。
- 视觉改动起本地 `python3 -m http.server`（见 `.claude/launch.json`）真打开确认。
- 浏览器 HTTP 缓存要换端口或 `?v=xxx` 破缓存。

## Phase 1 · 修 P0（1 周内）

### PR1 · PF-001 ENOB 公式用 SINAD

- **优先级**：P0
- **文件**：[js/steps.js:252](../js/steps.js#L252)（第 24 步）
- **依赖**：无
- **工作量**：10 分钟
- **风险**：极低。只改一行文字。
- **验收**：第 24 步 hard 栏 ENOB 公式用 SINAD；下面加一句「SINAD 比 SNR 多算了谐波失真」。
- **测试**：`node tests/check.js` + 肉眼。
- **分支名**：`enob-sinad`

### PR2 · PF-004 ISP 九步「典型顺序」声明

- **优先级**：P0
- **文件**：[js/steps.js:262](../js/steps.js#L262)（第 26 步 lead 或 adv）
- **依赖**：无
- **工作量**：10 分钟
- **风险**：极低。
- **验收**：步 26 开头承认「这是一种典型顺序，各家实际细节不同」，列 2-3 种可变情况。
- **测试**：肉眼。
- **分支名**：`isp-typical-order`

### PR3 · PF-003 LOFIC 电容形态标「推断」+ 日期

- **优先级**：P0
- **文件**：[js/steps.js:135-148](../js/steps.js#L135)（第 17 步）
- **依赖**：无
- **工作量**：10 分钟
- **风险**：极低。
- **验收**：hard 栏「电容形态」列加 `(推断)`，或段落末加「电容形态为公开资料推断」脚注；adv 文末或 refs 顶部加「最后核对：2026-11-16」。
- **测试**：肉眼。
- **分支名**：`lofic-vendor-notation`

## Phase 2 · P1 补修（2 周内）

### PR4 · PF-005 MTF50 表格数值更正

- **优先级**：P1
- **文件**：[js/steps.js:49-54](../js/steps.js#L49)（第 5 步 hard 表）
- **依赖**：无
- **工作量**：15 分钟
- **风险**：低。只改四个数。
- **验收**：MTF50 f/2 ≈ 367、f/5.6 ≈ 131、f/11 ≈ 67、f/22 ≈ 33。或加公式脚注 `MTF50 ≈ 0.404 · ν_c`。
- **测试**：肉眼 + 若做 PR20（physics.js），新增测试 `assert.ok(Math.abs(mtf50(2) - 367) < 5)`。
- **分支名**：`mtf50-fix`

### PR5 · PF-006 jpegli vs libjxl 消歧

- **优先级**：P1
- **文件**：[js/steps.js:429](../js/steps.js#L429)（第 30 步 hard 栏）
- **依赖**：无
- **工作量**：10 分钟
- **风险**：低。
- **验收**：改成「Google 自己的 libjxl 支持（`cjxl --lossless_jpeg=1`）；jpegli 是另一个工具，输出 JPEG 字节流，不是 JXL」。
- **测试**：肉眼。
- **分支名**：`jpegli-libjxl`

### PR6 · PF-007 Quad Bayer 电荷域 / 数字域明确

- **优先级**：P1
- **文件**：[js/steps.js:90](../js/steps.js#L90)（第 14 步 adv / hard）
- **依赖**：无
- **工作量**：20 分钟
- **风险**：低。
- **验收**：adv 或 hard 栏加小表区分：电荷域（SNR +12 dB）vs 数字域（SNR +6 dB）。
- **测试**：肉眼。
- **分支名**：`quad-bayer-domains`

### PR7 · PF-008 噪声模拟器 FWC 假设 + dark 口径

- **优先级**：P1
- **文件**：[js/readout.js:3](../js/readout.js#L3)
- **依赖**：无
- **工作量**：30 分钟
- **风险**：低。
- **验收**：
  - UI 文字「暗电流 N」改为「暗电流积累 N e⁻」。
  - 图下加一行「假设满阱 3500 e⁻/µm²」。
- **测试**：肉眼，起 server 真测滑块。
- **分支名**：`snr-sim-labels`

### PR8 · PF-009 YCbCr 标准区分

- **优先级**：P1
- **文件**：[js/steps.js:507](../js/steps.js#L507)（第 31 步视频编码 YUV 节）
- **依赖**：无
- **工作量**：10 分钟
- **风险**：低。
- **验收**：加一行「BT.601 / BT.709 / BT.2020 Y 系数不同」+ 三组数字。
- **测试**：肉眼。
- **分支名**：`ycbcr-standards`

### PR9 · PF-010 HDR 加 Lw 滑块

- **优先级**：P1
- **文件**：[js/isp.js:46-67](../js/isp.js#L46)、[index.html](../index.html) hdrctl 区段
- **依赖**：无
- **工作量**：1 h
- **风险**：中（涉及 UI 新增）。
- **验收**：HDR 模拟器加 Lw 滑块（300 / 1000 / 4000 nits），HLG 曲线实时重算。
- **测试**：肉眼，真打开动滑块。
- **分支名**：`hdr-lw-slider`

### PR10 · PF-002 FSI/BSI/Stacked 3D 场景改 2×2

- **优先级**：P1（已经降，文字已修）
- **文件**：[js/structures.js](../js/structures.js)
- **依赖**：无
- **工作量**：3 h（涉及 3D 布局）
- **风险**：中-高（改 3D 可能影响 CAM 和 look 参数；既有教学序列阅读感被破坏）。
- **验收**：场景从横线四柱改成 2×2 布局（左上 FSI+Mono、右上 FSI+Stacked、左下 BSI+Mono、右下 BSI+Stacked），LOFIC 另一个场景。
- **测试**：肉眼，所有视角点击确认。
- **分支名**：`arch-2x2-matrix`
- **备选方案**：若风险太大，保留现 3D，只在场景上方加「2×2 维度图」浮层。

## Phase 3 · P2 深化（1 月内）

### PR11 · PF-011 CIE 1931 光谱轨迹扩充

- **优先级**：P2
- **文件**：[js/isp.js:24](../js/isp.js#L24)
- **依赖**：无
- **工作量**：30 分钟
- **风险**：低。
- **验收**：SPECTRAL 数组扩到 40+ 点（400-700 nm 每 10 nm，或每 5 nm 更好）。曲线视觉平滑。
- **测试**：肉眼 + 若做 physics.js，`assert.ok(SPECTRAL.length >= 40)`。
- **分支名**：`cie-spectral-expand`

### PR12 · PF-013 ISP CCM 来源说明

- **优先级**：P2
- **文件**：[js/steps.js:317](../js/steps.js#L317)（第 26 步 hard）
- **依赖**：无
- **工作量**：10 分钟
- **风险**：低。
- **验收**：hard 栏加「演示用的 CCM 是教学值，真实相机按光源做两组实测矩阵」。
- **测试**：肉眼。
- **分支名**：`isp-ccm-source`

### PR13 · PF-012 LOFIC 模拟器读噪滑块

- **优先级**：P2
- **文件**：[js/lofic.js:44](../js/lofic.js#L44)、[index.html](../index.html) loficctl
- **依赖**：无
- **工作量**：1 h
- **风险**：低。
- **验收**：LOFIC 模拟器加读噪滑块（0.5 / 1 / 2 / 3 e⁻），DR 实时重算。
- **测试**：肉眼，起 server 真测。
- **分支名**：`lofic-readnoise-slider`

### PR14 · PF-015 微透镜偏移 CRA 曲线

- **优先级**：P2
- **文件**：[js/steps.js:89](../js/steps.js#L89)（第 13 步）
- **依赖**：无
- **工作量**：1 h
- **风险**：低。
- **验收**：加一个小图：横轴 CRA（0-30°），纵轴微透镜偏移（归一化到像素间距），显示手机 vs 相机的差异。
- **测试**：肉眼。
- **分支名**：`cra-shift-curve`

### PR15 · 补 S02 MTF 加 lens aberration 曲线

- **优先级**：P2
- **文件**：[js/optics-extras.js:22-39](../js/optics-extras.js#L22)
- **依赖**：无
- **工作量**：1 h
- **风险**：低。
- **验收**：MTF 模拟器加第 4 条曲线「典型镜头像差 MTF」（高斯衰减 `exp(-(ν/ν_ab)²)`），`ν_ab` 可为 200 cy/mm 示意值。
- **测试**：肉眼，`node tests/check.js` 不破坏。
- **分支名**：`mtf-lens-aberration`

### PR16 · 补 S07 噪声模拟器 PRNU + ADC 量化

- **优先级**：P2
- **文件**：[js/readout.js:3](../js/readout.js#L3)
- **依赖**：无
- **工作量**：2 h
- **风险**：中（涉及新噪声分量，可能让图表挤）。
- **验收**：加 PRNU 开关（勾上加 σ_PRNU ≈ 1% · S）+ ADC 量化噪声（bit depth 滑块 8/10/12/14）。
- **测试**：肉眼。
- **分支名**：`noise-sim-prnu-adc`

### PR17 · S10 ISP 加「步骤顺序交换」

- **优先级**：P2
- **文件**：[js/isp.js:1-20](../js/isp.js#L1)、[index.html](../index.html) ispctl（新）
- **依赖**：无
- **工作量**：3 h
- **风险**：中（涉及 ISP 流水线重构）。
- **验收**：加按钮「NR 做在：Bayer 域 / linear RGB 域 / gamma 后」，用户可切换，i7 的图片实时重算。
- **测试**：肉眼。
- **分支名**：`isp-step-order`

### PR18 · S13 JPEG 加 chroma subsampling

- **优先级**：P2
- **文件**：[js/isp.js:71](../js/isp.js#L71)
- **依赖**：无
- **工作量**：2 h
- **风险**：中（浏览器 `toDataURL` 的 chroma 控制有限，可能要手造 YCbCr）。
- **验收**：加 4:4:4 / 4:2:2 / 4:2:0 切换，展示彩色边缘的差异。
- **测试**：肉眼。
- **分支名**：`jpeg-chroma-subsampling`

## Phase 4 · 测试与质量（1 月内）

### PR19 · 重构常量为可测试模块

- **优先级**：P2
- **文件**：新建 [js/physics.js](../js/physics.js)；修改 [js/isp.js](../js/isp.js)
- **依赖**：无
- **工作量**：1 h
- **风险**：低（把 HDR_CURVES / SPECTRAL / GAMUTS / MX 从 isp.js 移到 physics.js，保持全局变量不变）。
- **验收**：physics.js 独立加载，isp.js 用它的常量；UI 行为不变。
- **测试**：`node tests/check.js` + 真打开。
- **分支名**：`physics-module`

### PR20 · 新增 tests/physics.js

- **优先级**：P2
- **文件**：新建 [tests/physics.js](../tests/physics.js)；修改 [.claude/launch.json](../.claude/launch.json)（加测试 runner）
- **依赖**：PR19
- **工作量**：2 h
- **风险**：低。
- **验收**：新测试跑过 10+ 条断言：
  - 艾里斑直径 f/2 ≈ 2.684
  - 衍射 MTF50 f/2 ≈ 367
  - PQ(1) = 10000
  - PQ(0) &lt; 0.01
  - HLG(0) = 0
  - HLG monotone
  - sRGB(1) = 100
  - SPECTRAL ≥ 40（PR11 后）
  - 色域面积 Rec.2020 &gt; Adobe &gt; DP3 &gt; sRGB
  - ENOB formula constants 1.76, 6.02
- **测试**：`node tests/physics.js` 全过；刻意改坏某个公式应让某条测试炸。
- **分支名**：`tests-physics`

## Phase 5 · 知识补齐（1-2 月）

### PR21 · 加「人眼」步

- **优先级**：P1-P2
- **文件**：[js/steps.js](../js/steps.js)（在步 28 HDR 前插入）、[js/chapters.js](../js/chapters.js)、[tests/check.js](../tests/check.js)
- **依赖**：无
- **工作量**：1 天（内容创作 + 简单示意图）
- **风险**：中（步 ID 改动会影响全部 related: 字段）。
- **验收**：新步「人眼接光：LMS 锥 / 杆视 / 光度视 / 暗视 / 色恒常」。章节号重排到 7 章。tests/check.js 更新。
- **测试**：`node tests/check.js` 全过。
- **分支名**：`human-vision-step`

### PR22 · 加「显示技术」步

- **优先级**：P2
- **文件**：[js/steps.js](../js/steps.js)（第 7 章「显示与观察」）
- **依赖**：PR21
- **工作量**：1 天
- **风险**：中。
- **验收**：新步「显示端：屏幕如何还原」。
- **测试**：`node tests/check.js` 全过。
- **分支名**：`display-tech-step`

### PR23 · 第 33 步拆分：多帧融合 + ML 对焦

- **优先级**：P2
- **文件**：[js/steps.js:510](../js/steps.js#L510)
- **依赖**：无
- **工作量**：1 天
- **风险**：中（文字量 2 倍，拆分后要重排 related）。
- **验收**：第 33 步拆成两步：「夜景 / HDR / 超分：多帧融合算法」+「人像 / 对焦：ML 场景分析」。
- **测试**：`node tests/check.js` 全过。
- **分支名**：`compphoto-split`

## Phase 6 · P3 平台化（可选长期）

### PR24-28 · 各种可选

- **PR24** · PF-017 独立 sitemap URL（1 天）：给 34 步各加一个 `#/step/N` 到 sitemap，加 `LearningResource` schema。
- **PR25** · PF-019 移动端 Canvas 自适应（2 天）：加 ResizeObserver，Canvas DPR scaling。
- **PR26** · PF-016 Three.js WebGL context lost handler（1 h）：加 `webglcontextlost` 监听。
- **PR27** · 加学习路径入口（1 天）：首页加 4 条路径（A/B/C/D）引导。
- **PR28** · PF-018 英文内容（2-4 周）：挑战最大、收益也最大，低优先。

## 执行约束与假设

**哪些 PR 可以并行**：
- Phase 1 的 PR1 / PR2 / PR3 彼此独立，可并行。
- Phase 2 的 PR4-PR10 多数独立，但 PR10（3D 改造）单独一支。
- PR19 → PR20（measure 依赖重构）是串行。
- PR21 → PR22（章节重排）是串行。

**哪些 PR 风险要人工复核**：
- PR10（3D 2×2 改造）：视觉改动大。
- PR17（ISP 步骤顺序交换）：涉及流水线逻辑。
- PR21 / PR23（新步 + 拆步）：会牵动 related 字段和 tests/check.js 的断言。

**工作量总计**：
- Phase 1：30 分钟
- Phase 2：9 h
- Phase 3：13 h
- Phase 4：3 h
- Phase 5：3 天
- Phase 6：≥ 2 周

两个月内可完成 Phase 1-5 的全部 P0 和 P1-P2。Phase 6 按需进行。

## 本轮审查到代码修改的 Handoff

1. 用户确认本审查文档。
2. 按 Phase 1 的 PR1 开始，每个 PR 单独分支 → PR → 用户合并。
3. 每个 PR 更新本文件（把该项标记为「已合并」）。

## 核对日期

**2026-11-16**。
