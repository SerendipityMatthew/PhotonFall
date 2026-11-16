# PhotonFall 技术审查 V2

第二轮深度审查，核对 2026-11-16 日 `develop` tip（`027240d`）的实际代码。全部按 Phase 1-9 顺序走完，V1 结论一条条过。**审查只出文档，不动业务代码**。

本文档格式参考：PF-ID + 优先级 + 领域 + 状态 + 文件位置 + 当前实现 + 问题 + 科学依据 + 建议 + 验收 + 测试。

细分：
- 科学准确性逐项：[TECHNICAL_ACCURACY_V2.md](TECHNICAL_ACCURACY_V2.md)
- 知识架构与缺口：[KNOWLEDGE_ARCHITECTURE_V2.md](KNOWLEDGE_ARCHITECTURE_V2.md)
- 交互实验评估：[INTERACTION_LAB_V2.md](INTERACTION_LAB_V2.md)
- 执行路线图：[IMPLEMENTATION_ROADMAP_V2.md](IMPLEMENTATION_ROADMAP_V2.md)

## 可信度标签（沿用 V1）

| 标签 | 含义 |
|---|---|
| **Confirmed** | 有官方 / 论文 / 标准可查，且本仓库给出链接 |
| **General Principle** | 物理 / 信息论 / 色彩学教材里的标准内容 |
| **Simplified Model** | 为教学简化的模型 |
| **Conceptual Illustration** | 示意图，参数或布局不代表真实器件 |
| **Vendor Specific** | 某厂商的具体实现 |
| **Estimated** | 公开资料不足，按业界常见做法估算 |
| **Needs Verification** | 本次未复核或口径不明 |

代码里的字段是 `cal:[...]`，取自：`general` / `simplified` / `concept` / `vendor` / `estimated` / `confirmed` / `todo`，渲染在抽屉顶部的三色小胶囊里（[css/style.css](../css/style.css) `.cal`）。

## 项目真实状态（截至 027240d）

**已完成**
- 34 步，7 章（`CHAPTERS.length === 7`，`STEPS.length === 34`）。
- 25 条演进记录 `EVO`，每步至少一条，分 6 条 lane（光学 / 电路 / 色彩 / 读出 / 工艺 / 应用）。
- 10 个 Canvas 2D 交互模拟器：PDAF 位移、艾里斑 + MTF、防抖轨迹、光谱 + 滤色片、ISP 九阶段（跑真实 demosaic + CCM + gamma + NR + sharpen）、SNR 分量、单斜率 ADC、卷帘 vs 全局快门、CIE 1931 色度图 + 5 个色域、PQ/HLG/sRGB/BT.1886 曲线、JPEG 编码质量、LOFIC 信号延伸。
- Three.js r128 多场景：22 个 `g` 字段（宏观 / 微观 / PDAF / IBIS / 玻璃 / 滤色片 / Quad / LOFIC / 架构 / 芯片 / RS vs GS / ADC / …），统一一个相机、一个 tour 开关。
- 可信度字段 `cal` 和结构化资料字段 `refs:[{t, u?, n?}]` 已覆盖全部 34 步；抽屉里渲染为 pills + 「来源」列表。
- Related 跳转芯片 `related:[idx]` 覆盖全部 34 步；抽屉底部渲染为 `.rel-chip`。
- SEO：meta description / Open Graph / Twitter Card / JSON-LD / robots.txt / sitemap.xml / OG 预览图 (1200×630) 全部到位。
- 测试：`tests/check.js` 9 项（route 3 + steps 2 + evo 1 + layout 3）全过。

**技术栈**：原生 ES2015 classic scripts，无 build，无依赖管理。Three.js r128 + 两个 Canvas 2D 上下文。本地 `python3 -m http.server`，线上 CloudFlare Pages。

**哪些算达到专业教学水平**（科学准确性 + 交互验证 + 资料可追溯 三者兼备）
- 第 5 步 光圈与虚化：MTF 公式正确，艾里斑 J1 用正宗 Bessel 展开，诊断表仅轻度数值偏差。
- 第 11 步 微透镜 + 拜耳：光谱响应曲线和硅吸收曲线有图，颜色串扰阐述清晰。
- 第 16 步 光子变电子 + QE 光谱响应：400-900 nm 行为解释完整，分短 / 中 / 长波段。
- 第 24 步 单斜率 ADC：动画 + 相关双采样交代完整。
- 第 26 步 ISP 九阶段：全套真实计算（RAW → 黑电平 → vignetting 补偿 → 去马赛克 → WB → CCM → gamma → NR → sharpen），hard 栏覆盖 WB 四种算法 + CCM 与 ColorMatrix1/2。
- 第 29 步 色彩空间 + 色深 + 色彩管理：OETF/EOTF/OOTF 术语讲清楚、不混用，PQ vs HLG 六行对照正确。
- 第 30 步 图像格式：JPEG / HEIC / AVIF / JXL / RAW / DNG 各自定位、年份、授权、Chrome JXL 2022 事件全部 Confirmed。
- 第 31 步 视频编码：YUV 子采样、I/P/B、GOP、Log 伽马、RAW 视频覆盖完整。

**哪些仍属概念演示（Conceptual Illustration）**
- 第 2 步 场景距离压缩；第 3 步等效薄透镜（已标 Simplified）。
- 第 14 步 四合一像素合并动画（动画是可视化示意，电子数是教学数）。
- 第 18-20 步 FSI/BSI/Stacked/LOFIC 架构柱子（已标 Simplified，但 3D 比例是示意）。
- 第 25 步 卷帘 vs 全局动画（示意一根黄条扫过，真实 CMOS 有 μs 级精度）。

## P0 问题

### PF-001 · ENOB 公式用 SNR 而非 SINAD（Confirmed Issue）

- **优先级**：P0
- **领域**：ADC
- **状态**：Confirmed
- **文件位置**：[js/steps.js:252](../js/steps.js#L252)（第 24 步 单斜率 ADC · hard 栏 iq-ENOB 节）
- **当前实现**：`ENOB = (SNR − 1.76) / 6.02 (SNR 单位 dB，常数来自理想量化噪声)`
- **问题**：ENOB 定义公式的分子是 **SINAD**（或 SNDR），不是 SNR。SINAD 包含谐波失真和背景噪声，SNR 只包含噪声。写成 SNR 会让读者认为单纯信噪比就够推 ENOB，实测会偏乐观。
- **科学依据**：IEEE Std 1241-2010「Terminology and Test Methods for ADCs」§4.5；EMVA 1288 §6.8。标准定义 `ENOB = (SINAD − 1.76 dB) / 6.02 dB`，其中 SINAD 为 Signal-to-Noise-and-Distortion Ratio。
- **建议**：公式本身改成 `ENOB = (SINAD − 1.76) / 6.02`，紧接着解释：「SINAD 比 SNR 多算了谐波失真，用 SNR 推出来的 ENOB 会偏高」。实测数据手册也通常同时给 SNR 和 SINAD。
- **验收**：步 24 hard 栏公式用 SINAD；下一行解释 SNR vs SINAD vs SNDR 的差异。
- **测试**：静态 `node tests/check.js` + 肉眼复核；可加一行 regexp 断言 `/ENOB\s*=\s*\(SINAD/`。

### PF-002 · FSI / BSI / Stacked 的 3D 场景仍是线性四柱（Partial Fix）

- **优先级**：P0
- **领域**：CMOS
- **状态**：Potential Issue（文字已修 / 场景未修）
- **文件位置**：[js/steps.js:156](../js/steps.js#L156)（第 18 步 像素结构：受光面 + 晶圆集成）；[js/structures.js](../js/structures.js)（3D 场景 `arch`）
- **当前实现**：
  - adv 和 hard 已把两条正交维度（受光面 / 晶圆集成）讲清楚，还明确标注「下面的 3D 场景沿用常见的教学进化顺序呈现，<b>是 Simplified Model</b>」。
  - 3D 场景的四根柱子仍是「FSI → BSI → Stacked → LOFIC」线性排列，视觉上暗示代际。
- **问题**：文字说得清楚、画面还是老样子。只扫画面不读 adv 的读者，可能仍认为 Stacked 是 BSI 的下一代。V1 PF 建议把柱子布局成 2×2 维度表。
- **科学依据**：Sony Exmor 技术页；J. Nakamura, "Image Sensors and Signal Processing for Digital Still Cameras" Ch. 3。
- **建议**：中等优先。现有标注足以避免严重误解，但场景做成 2×2 矩阵（横轴 FSI / BSI、纵轴 Mono / Stacked）会把信息一致起来。LOFIC 柱子单独一步（第 19 步「LOFIC 电容放在哪」已经专门讲），可以从本步移走。
- **验收**：3D 场景能通过标签清晰读出两条维度；原有 FSI/BSI/Stacked 文字对照保留。
- **测试**：肉眼验证 + `node tests/check.js` 不破坏。

### PF-003 · LOFIC 内容四家厂商方案的可信度区分（Partial Fix）

- **优先级**：P0
- **领域**：LOFIC / CMOS
- **状态**：Partial Fix
- **文件位置**：[js/steps.js:135-148](../js/steps.js#L135)（第 17 步）
- **当前实现**：`cal:['general','vendor','estimated']`；四家方案各一段。
- **问题**：
  - 已标 `vendor` + `estimated`，这是对的。
  - 但「电容形态」列（MIM / 深沟槽 / 下层晶圆）对 Sony / 豪威 / 思特威 / 三星四家的归类，是公开资料的推断，没有标 `(推断)`。
  - 思特威「三帧融合」出自厂方营销，和豪威「三段读出」原理不同；文本已说明「这个『三帧』和豪威的『三段读出』不是一回事」。
  - 本次复核日期没有记录在正文。
- **建议**：hard 栏的「电容形态」一列加标 `(推断)`，或在段落末加「电容具体放哪，各家官方资料中只有部分披露，剩余以公开资料推断」的脚注；底部 refs 列表头或 adv 文末加「最后核对：2026-11-16」。
- **验收**：读者一眼能看出哪些是官方 Confirmed、哪些是业界推断。
- **测试**：肉眼 + `node tests/check.js`。

### PF-004 · ISP 九步呈现为固定顺序（Needs Clarification）

- **优先级**：P0
- **领域**：ISP
- **状态**：Potential Issue
- **文件位置**：[js/steps.js:262-322](../js/steps.js#L262)（第 26 步 ISP 九步）；[js/isp.js:1-20](../js/isp.js#L1)（实现）
- **当前实现**：步标题「ISP 九步 / RAW → JPEG」。九个阶段按：黑电平 → vignetting → 去马赛克 → WB → CCM → gamma → NR → sharpen → 输出。
- **问题**：
  - 真实 ISP 不存在固定的九步顺序。Sony IMX 的 ISP、Apple Image Processor、高通 Spectra 顺序都不同：有的把 NR 做在 demosaic 之前（原 Bayer 域），有的把 sharpen 融入 demosaic。
  - 当前教学顺序是 Adobe DNG spec 的参考顺序，便于讲解，但未提示这是其中一种。
- **科学依据**：Adobe DNG spec 1.7；R. Ramanath et al., "Color Image Processing Pipeline" IEEE Signal Processing Magazine 2005。
- **建议**：标题或 adv 加「这是一种典型顺序，各家实际细节不同」，列出 2-3 条常见顺序差异（NR 可在 Bayer 域 / linear RGB 域 / gamma 后多处；WB 可在 demosaic 前或后）。
- **验收**：步 26 开头承认顺序是「典型教学顺序」。
- **测试**：肉眼。

## P1 问题

### PF-005 · MTF 诊断表的 MTF50 数值略有偏差

- **优先级**：P1
- **领域**：Optical
- **状态**：Potential Issue
- **文件位置**：[js/steps.js:49-54](../js/steps.js#L49)（第 5 步 光圈与虚化 · hard 栏表格）
- **当前实现**：表格给 f/2 时「衍射 MTF50 ~300 cy/mm」。
- **问题**：标准圆孔衍射 MTF 公式 `MTF(ν) = (2/π)[arccos(r) − r√(1-r²)]`，其中 `r = ν/ν_c`，`ν_c = 1/(λN)`。求 MTF = 0.5 对应 `r ≈ 0.404`。f/2 λ=550 nm 时 `ν_c = 909 cy/mm`，所以 MTF50 ≈ `0.404 × 909 = 367 cy/mm`，不是 300。f/5.6 给 108，实算 ≈ 131；f/11 给 55，实算 ≈ 67；f/22 给 27，实算 ≈ 34。整表偏低约 20%。
- **科学依据**：Goodman "Introduction to Fourier Optics" §6.3；Norman Koren "Modulation Transfer Function"（已在 refs 里引用）。
- **建议**：重新按 `r ≈ 0.404 × ν_c` 更新表格数值，或在表格下加一行 `MTF50 = 0.404 × ν_c（r 取 arccos(r) − r√(1-r²) = π/4 的根）` 和具体数字。
- **验收**：MTF50 ≈ 367 / 131 / 67 / 34 cy/mm 对应 f/2 / f/5.6 / f/11 / f/22；或增一列「按 r=0.404 近似」。
- **测试**：可以写单元测试 `assert(Math.abs(mtf50(2) - 367) < 10)`。

### PF-006 · JPEG XL jpegli / libjxl 关系略混

- **优先级**：P1
- **领域**：Encoding
- **状态**：Potential Issue
- **文件位置**：[js/steps.js:429](../js/steps.js#L429)（第 30 步 图像格式 · hard 栏「JPEG XL 的三个技术亮点 · ②」）
- **当前实现**：「Google 自己的 libjxl + jpegli 编码器都支持」。
- **问题**：
  - **libjxl** 是 JPEG XL 的参考编解码器（JXL 格式本身的实现）。
  - **jpegli** 是 Google 开源的**JPEG** 编码器（输出仍是 JPEG 字节流），借用了 libjxl 内部的部分变换，比 libjpeg-turbo 在相同大小下画质更好。它不输出 JXL 文件。
  - **JXL 无损重封装老 JPEG** 是 libjxl 的 `cjxl --lossless_jpeg=1` 功能，和 jpegli 没关系。
- **科学依据**：libjxl GitHub README；Google Open Source Blog「jpegli: A New JPEG Coding Library」2024-04。
- **建议**：这一段改成「Google 自己的 `libjxl` 编码器（`cjxl --lossless_jpeg=1`）支持；注意 **jpegli** 是另一个工具，输出的是 JPEG 字节流、不是 JXL」。
- **验收**：jpegli 和 libjxl 区分清楚；无损重封装功能只算在 libjxl 头上。
- **测试**：肉眼。

### PF-007 · Quad Bayer 合并未明确区分电荷域和数字域

- **优先级**：P1
- **领域**：CMOS
- **状态**：Partial Fix
- **文件位置**：[js/steps.js:90](../js/steps.js#L90)（第 14 步 四合一像素 · adv）
- **当前实现**：「合并可以在像素里做（四个 PD 共用一个 FD，电荷直接相加，读出噪声只算一次），也可以读出后再相加」。
- **问题**：两种做法已经点到，但没有强调它们的关键差异 ——
  - **电荷域合并**（charge-domain binning）：四个 PD 的电子经 TX 全部灌到同一个 FD，再做一次读出。信号 ×4，读噪不变，SNR 显著提升。只在像素设计支持（共用 FD 布局）的传感器上可做。
  - **数字域合并**（digital-domain binning）：每像素单独读出各自的数字，再在 ISP 里加。信号 ×4，读噪 ×2（√4），SNR 虽也提升但不如电荷域。所有传感器都可做。
- **科学依据**：Sony IMX586 产品页；Samsung Tetracell / Nonacell 技术页；J. Theuwissen "Solid-State Imaging with Charge-Coupled Devices" §4。
- **建议**：adv 追加两句，清晰区分两种域；或 hard 栏加小表 `合并方式 / 信号倍数 / 读噪倍数 / SNR 增益`。
- **验收**：电荷域 vs 数字域明确列出。
- **测试**：肉眼。

### PF-008 · 第 27 步噪声模型复核：FWC 常量和 dark 噪声口径

- **优先级**：P1
- **领域**：Readout / Noise
- **状态**：Potential Issue
- **文件位置**：[js/readout.js:3](../js/readout.js#L3)（drawSnr 实现）
- **当前实现**：
  - `FW = 3500 * p * p`：满阱按 3500 e⁻/µm² 估。
  - 噪声合成 `σ = √(S + rn² + dk)`，其中 `dk` 是滑块给的数值。
- **问题**：
  - 3500 e⁻/µm² 是手机类 BSI 的中间估计，全画幅可到 5000+，CCD 和部分工业 CMOS 可到 10000+；教学上数字够用，但模拟器 UI 没有注明「假设 3500 e⁻/µm² 单位面积满阱」。
  - `dk` 在数值合成里当方差用（`+ dk`），但 UI 显示为 `e⁻`（电子数）。在暗电流噪声里，若 `dk = 暗电子总数`，σ_dark² = dk 是对的（Poisson 近似）；所以数学正确、UI 文字可能让人以为是 σ 本身。
- **建议**：
  - UI 文字 `暗电流 N` 改为 `暗电流积累 N e⁻`，或直接写「σ_dark² ≈ N」。
  - 图下的注释加一行：「假设满阱 3500 e⁻/µm²，实际视厂商和工艺可低至 2500、高至 6000」。
- **验收**：读者能看出是教学用近似。
- **测试**：肉眼。

### PF-009 · YCbCr 未明确区分 BT.601 / BT.709 / BT.2020

- **优先级**：P1
- **领域**：Color / Encoding
- **状态**：Potential Issue
- **文件位置**：[js/steps.js:335](../js/steps.js#L335)（第 29 步 · 色度亚采样节）；[js/steps.js:507](../js/steps.js#L507)（第 31 步 视频编码 · YUV 节）
- **当前实现**：只说「色度 Cb Cr / U V」，没有点明不同 YCbCr 标准的矩阵系数不同。
- **问题**：BT.601 (SDTV) / BT.709 (HDTV) / BT.2020 (UHDTV) 使用不同的 RGB → YCbCr 系数（Y 的加权不同）。混用会出现偏色。
- **科学依据**：ITU-R BT.601 / BT.709 / BT.2020 / BT.2100。
- **建议**：第 31 步 YUV 节加一行小字：「不同标准的 Y 系数不同：BT.601 (0.299, 0.587, 0.114) / BT.709 (0.2126, 0.7152, 0.0722) / BT.2020 (0.2627, 0.6780, 0.0593)。4K UHDTV 用 BT.2020，HDTV 用 BT.709」。
- **验收**：读者意识到 YCbCr 是一族曲线不是一条。
- **测试**：肉眼。

### PF-010 · HLG 系统伽马与显示亮度的依赖关系未在 UI 中呈现

- **优先级**：P1
- **领域**：HDR
- **状态**：Potential Improvement
- **文件位置**：[js/isp.js:50](../js/isp.js#L50)（drawHdr HLG 曲线）；[js/steps.js:358](../js/steps.js#L358)（第 29 步 · HLG 节）
- **当前实现**：代码用 `Lw = 1000 nits`，系统伽马 `1.2 + 0.42·log10(Lw/1000) = 1.2`。
- **问题**：系统伽马正确（和 BT.2100 一致），但 UI 没有把这个「随 Lw 变」展示出来。读者看不出「同一 HLG 信号在不同峰值电视上的 tone mapping 由系统 gamma 完成」。
- **科学依据**：ITU-R BT.2100-2 Table 5。
- **建议**：HDR 模拟器加一个 Lw 滑块（300 / 1000 / 4000 nits），曲线实时重算；或在曲线下加文字「当前 Lw=1000 nits，系统伽马=1.2；Lw=4000 nits 时系统伽马≈1.46」。
- **验收**：读者能通过交互看出 HLG 相对亮度特性。
- **测试**：肉眼。

## P2 问题

### PF-011 · CIE 1931 光谱轨迹数据点太少

- **优先级**：P2
- **领域**：Color
- **状态**：Needs Verification → Confirmed Issue
- **文件位置**：[js/isp.js:24](../js/isp.js#L24)（`SPECTRAL` 数组）
- **当前实现**：20 个波长点，值来自 CIE 1931 2° 观察者标准色度坐标。
- **问题**：
  - **数值对**：抽查 480 / 500 / 550 / 620 / 700 nm 全部和 CIE 1931 官方 2° 观察者表吻合。
  - **数量少**：20 点让马蹄曲线边缘可见棱角，尤其在 460-520 nm 的蓝绿弯处明显。标准表每 5 nm 一个点（380-780 共 81 点），常用的工业图至少用 40 点。
- **科学依据**：CIE 15:2004 "Colorimetry"；Judd & Wyszecki, Color in Business Science and Industry。
- **建议**：扩展到 400-700 nm 每 5 nm 一个点（约 61 点），数据可从 CIE 官方表直接复制。文件体积增加 <2 KB。
- **验收**：马蹄曲线视觉平滑。
- **测试**：加单元测试 `assert(SPECTRAL.length >= 40)`。

### PF-012 · LOFIC 模拟器 DR 公式隐式假设读噪 = 2 e⁻

- **优先级**：P2
- **领域**：LOFIC
- **状态**：Potential Issue
- **文件位置**：[js/lofic.js:67](../js/lofic.js#L67)
- **当前实现**：`drNo = 20*Math.log10(pd/2), drLo = 20*Math.log10(capFW/2)`。注释 `// 假定读噪 2 e⁻`。
- **问题**：假设合理（当代低噪 CIS 读噪 1-3 e⁻），但 UI 不显示这个假设，读者看到「DR 100 dB」可能以为是通用结论。
- **建议**：图下加一行 `(假设读噪 2 e⁻)`；或增一个滑块 `读噪 1/2/3 e⁻`。
- **验收**：UI 可见读噪假设。
- **测试**：肉眼。

### PF-013 · ISP 模拟器色彩矩阵未解释来源

- **优先级**：P2
- **领域**：ISP / Color
- **状态**：Needs Verification
- **文件位置**：[js/isp.js:4](../js/isp.js#L4)（`MX` 矩阵）
- **当前实现**：`MX = [[.78,.17,.05],[.12,.76,.12],[.04,.2,.76]]`
- **问题**：是手造的一个教学 CCM，不对应任何真实相机。文字里没明说。
- **建议**：步 26 hard 栏加「演示用的 CCM 是教学值，真实相机按光源做两组实测矩阵」；或直接用公开的 DNG ColorMatrix（例：Nikon Z8 的 ColorMatrix1）。
- **验收**：读者不会误以为这是某台相机的真实 CCM。
- **测试**：肉眼。

### PF-014 · 第 20 步「堆栈式 LOFIC」3D 比例是示意

- **优先级**：P2
- **领域**：CMOS / LOFIC
- **状态**：Already Noted
- **文件位置**：[js/steps.js:207](../js/steps.js#L207)
- **当前实现**：adv 文末已说「图里各层厚度和面积比例是示意」。
- **问题**：无新问题，已充分标注。
- **建议**：保留现状。

### PF-015 · 第 11 步微透镜偏移模型简化

- **优先级**：P2
- **领域**：Optical
- **状态**：Partial Fix
- **文件位置**：[js/steps.js:89](../js/steps.js#L89)（第 13 步 微透镜偏移）
- **当前实现**：五个位置的微透镜偏移示意，光斑溢出 PD 后标红。
- **问题**：模型是定性示意（焦点被拉回 PD 正上方），未展示真实的主光线角 vs 偏移距离曲线。手机镜头 CRA 可达 30° 以上，相机 CRA 一般 &lt; 10°。
- **建议**：加一个小图：横轴 CRA，纵轴微透镜偏移（归一化到像素间距）。
- **验收**：读者理解偏移量和 CRA 成几何关系。

### PF-016 · Three.js r128 版本的继承责任

- **优先级**：P2
- **领域**：Engineering
- **状态**：Potential Issue
- **文件位置**：[index.html:81-85](../index.html#L81)（CDN script）
- **当前实现**：r128 (2021-04-15)。
- **问题**：当前 three.js 最新 ~r168+（2026）。r128 功能够用（整站不依赖后出的 PBR 新特性），但：
  - 没有 WebGPU 支持（Chrome 113+ 已启用）。
  - 没有新的 color management（LinearSRGB 工作空间）。
  - r128 在 iOS Safari 16+ 偶发 WebGL context lost（本项目未复现，但有报道）。
- **建议**：不建议现在强升。可以在 LARGE 改造时（例如 WebGPU 迁移）一起做。短期加一个 WebGL context lost handler（现无）：
  ```js
  renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); /* 重建 */ });
  ```
- **验收**：若现版遇到 iOS Safari context lost，加 handler；否则维持。
- **测试**：Browser smoke test 加一项：模拟 context lost → 看 handler 是否重建。

## P3 问题

### PF-017 · 独立知识点 URL / 多语言 / 静态可索引

- **优先级**：P3
- **领域**：SEO / Engineering
- **状态**：Potential Improvement
- **文件位置**：[sitemap.xml](../sitemap.xml)（当前只 2 条 URL）
- **当前实现**：SPA hash routing (`#/step/N`)；搜索引擎只能索引首页。
- **问题**：Google 不索引 hash 路由后面的内容。34 个知识点都藏在首页 JS 里，搜索不到。
- **建议**（按工作量排序）：
  - **轻量**（1 天工作）：在 sitemap 加 34 条 `#/step/N` URL，加 structured data（LearningResource per step）。可能无效（Google 不认 hash）。
  - **中度**（1 周）：改成 `?step=N` 查询参数，服务器端静态生成 34 个 HTML 片段，首屏 SSR，剩下交 JS 渲染。
  - **重度**（1 月）：真 SSG，每步一条静态 URL。
- **验收**：Google Search Console 索引数 1 → 34+。

### PF-018 · 英文内容

- **优先级**：P3
- **领域**：Internationalization
- **状态**：Not Started
- **当前实现**：全中文。
- **建议**：下一阶段再考虑。先把中文内容稳住。
- **验收**：提供 `?lang=en` 切换；或独立 `/en/` 路径。

### PF-019 · 移动端优化审查

- **优先级**：P3
- **领域**：Engineering
- **状态**：Needs Verification
- **当前实现**：`viewport` 已设 `width=device-width`；布局用 flex + grid；Canvas 2D 用固定像素。
- **问题**：Canvas 的 `drawAiry` 等用固定 320×170；在窄屏（&lt; 360px）会溢出。
- **建议**：所有 Canvas 用 ResizeObserver 自适应父容器宽；DPR scaling（`ctx.scale(dpr, dpr)`）。
- **验收**：iPhone SE 宽度（375px）无横向滚动。

### PF-020 · 自动化测试覆盖率

- **优先级**：P3
- **领域**：Engineering / Quality
- **状态**：Potential Improvement
- **文件位置**：[tests/check.js](../tests/check.js)（9 项静态）
- **当前实现**：验证 STEPS.length、CHAPTERS.length、CARD_CTL.length、EVO ids、每步 lead 长度等。
- **问题**：没有验证**任何物理公式**。改错了 MTF 公式、PQ 常数、艾里斑直径，测试都过。
- **建议**：新增 `tests/physics.js`：
  ```js
  // 艾里斑直径
  assert.ok(Math.abs(airyDiameter(550, 2) - 2.684) < 0.01, 'Airy f/2');
  // 衍射 MTF50
  assert.ok(Math.abs(mtf50Diff(2) - 367) < 5, 'MTF50 f/2');
  // PQ EOTF 单调
  assert.ok(pq(0.5) > pq(0.3), 'PQ monotone');
  assert.ok(Math.abs(pq(1.0) - 10000) < 1, 'PQ(1) = 10000 nits');
  // HLG(0) = 0
  assert.ok(Math.abs(hlg(0)) < 1e-6);
  // sRGB OETF 分段连续
  const srgb = x => x <= .04045 ? x/12.92 : ((x+.055)/1.055)**2.4;
  assert.ok(Math.abs(srgb(0.04045) - 0.04045/12.92) < 1e-6);
  ```
- **验收**：新加的测试运行通过，且刻意改坏公式会让某条测试炸。
- **测试**：`node tests/physics.js`。

## V1 结论复核

### V1 P0-1（FSI/BSI/Stacked 分类）：Partial Fix → PF-002 继续

V1 要求把一维进化改成二维正交。文字已改（标题「受光面 + 晶圆集成」，adv 明确列四种组合，hard 栏两个二维表）。3D 场景仍是线性，PF-002 继续跟踪。

### V1 P0-2（LOFIC Vendor Specific 标注）：Partial Fix → PF-003 继续

`cal:['general','vendor','estimated']` 已加，refs 结构化。细节标注（「电容形态」「推断」字样）未加，PF-003 继续跟踪。

### V1 P0 待审查队列进展

| V1 列的项 | 当前状态 |
|---|---|
| ISP 固定九步 | 未改，PF-004 跟踪 |
| CMOS 像素参数复核 | 已部分加 `cal`，典型值合理；噪声模型见 PF-008 |
| 色彩科学术语 | 已完整（OETF/EOTF/OOTF、色域 vs 色彩体积、ΔE 2000 都讲清楚），PF-009 跟踪 YCbCr 小缺口 |
| 可信度标签 | 全部 34 步已覆盖 `cal` |
| 参考资料 | 全部 34 步已有 `refs` |

## 最终汇报

**1. PhotonFall 真正完成了什么**：34 步覆盖从光子到照片的完整链路，10 个 Canvas 真实计算的交互实验，22 个 three.js 3D 场景，完整的可信度标签 + 结构化来源 + 相关跳转系统，SEO 基础设施齐备。

**2. 哪些已达专业教学水平**（上面「项目真实状态」已列出）：光圈 / 微透镜 / QE 光谱响应 / 单斜率 ADC / ISP 全套 / 色彩空间 / 图像格式 / 视频编码。

**3. 哪些仍只是概念演示**：场景距离压缩、等效薄透镜、Quad Bayer 合并动画、FSI/BSI/Stacked 柱子、卷帘 vs 全局动画。均已标 `simplified` 或 `concept`。

**4. 科学错误**：PF-001（ENOB 公式用 SNR 而非 SINAD）。此外 PF-005（MTF50 数值偏 20%）、PF-006（jpegli / libjxl 混用）偏向表述不准。

**5. 可能导致用户错误认知**：
   - PF-001（ENOB 公式）→ 读者推 ENOB 会偏乐观
   - PF-002（Stacked 看起来像「BSI 下一代」）→ 线性进化误解
   - PF-004（ISP 九步看起来固定）→ 以为所有相机都这个顺序

**6. 知识缺失**：详见 [KNOWLEDGE_ARCHITECTURE_V2.md](KNOWLEDGE_ARCHITECTURE_V2.md)。摘要：Human Vision（LMS / 杆视锥）完全未覆盖；Display Technology（LCD / OLED / Mini LED / Micro OLED）只在 HDR 中旁敲侧击；Camera System Engineering（MIPI CSI-2 / SLVS-EC / CFexpress 带宽模型）已经够用。

**7. 最该投入的交互**：MTF 模拟器加 lens aberration MTF 一条曲线（现只有 diffraction × pixel）；LOFIC 加读噪滑块；ISP 加「步骤顺序交换」演示；HDR 加 Lw 滑块。详见 [INTERACTION_LAB_V2.md](INTERACTION_LAB_V2.md)。

**8. 最该优先修复的 10 个**：
   1. PF-001 ENOB 公式（P0 · 1 行改）
   2. PF-003 LOFIC vendor 电容形态标「推断」（P0 · 10 分钟）
   3. PF-005 MTF50 表格数值更正（P1 · 15 分钟）
   4. PF-006 jpegli / libjxl 消歧（P1 · 10 分钟）
   5. PF-004 ISP 九步「典型顺序」声明（P0 · 5 分钟）
   6. PF-011 CIE 光谱数据扩至 40+ 点（P2 · 30 分钟）
   7. PF-020 加 `tests/physics.js`（P3 · 1 小时）
   8. PF-007 Quad Bayer 电荷域 / 数字域明确（P1 · 20 分钟）
   9. PF-009 YCbCr 标准区分（P1 · 10 分钟）
   10. PF-010 HDR 加 Lw 滑块（P1 · 1 小时）

**9. 暂时不值得做**：PF-016 Three.js 升级（无紧迫问题）、PF-018 英文内容（优先中文深度）、PF-017 SSR/SSG（工作量大，SEO 收益未证）。

**10. 怎么不推翻继续发展**：全部 PF 条目都是在现有 34 步、现有数据字段、现有抽屉布局下的点状修改，不涉及架构重写。按 [IMPLEMENTATION_ROADMAP_V2.md](IMPLEMENTATION_ROADMAP_V2.md) 的优先级分 10-15 个 PR 推进。

## 方法论

1. 本文和另 4 份档的任一结论都要指明现状代码位置、问题、改法、参考资料。
2. 改法先落到相应文档，再写代码。
3. 一次 PR 对应一个 PF 条目，不打包。
4. 现有功能不破坏为底线。
5. 每次 PR 跑 `node tests/check.js`，视觉改动起本地 server 真打开。
6. 每条引用必须给可访问链接（标准编号、论文 DOI、官方页面）；没来源的降为 `Needs Verification`。
7. 本次核对日期：**2026-11-16**。
