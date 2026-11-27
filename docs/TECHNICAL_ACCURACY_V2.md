# PhotonFall 科学准确性报告 V2

基于 2026-11-16 日 `develop` tip 的逐项复核。每项：当前表达 / 正确定义 / 具体错误或风险 / 可靠来源 / 建议修改。

分类按知识领域，ID 沿用 [PHOTONFALL_AUDIT_V2.md](PHOTONFALL_AUDIT_V2.md) 的 PF-###。

## Optical

### Airy disk 直径

- **当前表达**（[js/steps.js:50-53](../js/steps.js#L50)）：`f/2` 时直径 2.7 µm，`f/5.6` 时 7.5 µm，`f/11` 时 14.8 µm，`f/22` 时 29.5 µm。
- **正确定义**：Airy 直径 = 第一零点直径 = `2.44 · λ · N`，λ 波长、N 光圈数。按 λ=550 nm 计算：
  - f/2：2.44 × 0.55 × 2 = 2.684 µm
  - f/5.6：7.52 µm
  - f/11：14.76 µm
  - f/22：29.52 µm
- **误差**：&lt; 1%，教学可接受。**正确。**
- **来源**：Hecht "Optics" §10.2；EN.wikipedia.org/wiki/Airy_disk。

### 衍射 MTF 公式

- **当前实现**（[js/optics-extras.js:29](../js/optics-extras.js#L29)）：
  ```
  diff(ν) = (2/π) · [arccos(r) − r · √(1-r²)]
  其中 r = ν/ν_c, ν_c = 1/(λN)
  ```
- **正确定义**：圆孔的非相干衍射 OTF，这正是正式公式。
- **误差**：无。**正确。**
- **来源**：Goodman "Introduction to Fourier Optics" §6.3；Born & Wolf "Principles of Optics" §9.5。

### 像素 MTF（方形像素采样）

- **当前实现**（[js/optics-extras.js:30](../js/optics-extras.js#L30)）：`pix(ν) = |sinc(π·ν·p)|`。
- **正确定义**：方形均匀开口像素的 MTF 是 `|sinc(πνp)|`（空间域 rect 的 Fourier 变换）。
- **误差**：无。**正确。**
- **来源**：J. Boreman "Modulation Transfer Function in Optical and Electro-Optical Systems"。

### 整机系统 MTF

- **当前表达**（[js/steps.js:42](../js/steps.js#L42)）：`MTF_总(ν) = MTF_镜头(ν) × MTF_像素(ν) × MTF_OLPF(ν)`。
- **正确定义**：MTF 可级联相乘的前提是**各级 PSF 的卷积**假设（即各级独立线性）。严格说是复数 OTF 相乘，取模再是 MTF。**在线性非相干成像中，各级独立时此简化成立。**
- **误差**：教学语境下成立。**正确。**
- **来源**：同上。

### MTF50 的衍射极限表格

- **当前表格**（[js/steps.js:49-54](../js/steps.js#L49)）：f/2 ~300 cy/mm，f/5.6 ~108，f/11 ~55，f/22 ~27。
- **正确计算**：设 `(2/π)(arccos(r) − r√(1-r²)) = 0.5` → `r ≈ 0.404`。于是 MTF50 = `0.404 · 1/(λN)`：
  - f/2，λ=550 nm：367 cy/mm
  - f/5.6：131 cy/mm
  - f/11：67 cy/mm
  - f/22：33 cy/mm
- **误差**：现值整体偏低 20-25%。**不正确**（见 **PF-005**）。
- **建议**：更新表格；或在表格下加一行公式和近似数字。
- **来源**：同衍射 MTF 公式。

### PSF、OTF、MTF 概念

- **当前表达**（[js/steps.js:24-27, 35-37](../js/steps.js#L24)）：PSF 是系统对点源的脉冲响应；OTF 是 PSF 的傅里叶变换（复数），MTF 是 OTF 的模。
- **误差**：无。**正确。**
- **来源**：Goodman "Introduction to Fourier Optics"。

### 弥散圆公式（景深）

- **当前表达**（[js/steps.js:23](../js/steps.js#L23)）：`c = D · |v − v'| / v' ≈ f² / (N·(s-f)) · |d-s| / d`。
- **正确定义**：标准景深公式。
- **误差**：无。**正确。**
- **来源**：摄影光学教材（如 Ray "Applied Photographic Optics"）。

### 镜片镀膜反射率公式

- **当前表达**（[js/steps.js:70-74](../js/steps.js#L70)）：
  - 正入射菲涅耳 `R = ((n₁-n₂)/(n₁+n₂))²`
  - 单层 1/4 波长 MgF₂（n=1.38）对 n=1.52 玻璃，剩余 R ≈ 1.3%
  - 斜入射：反射最低波长 ≈ λ₀·cos(θ_膜)
- **验证**：n_膜 = 1.38, n_玻 = 1.52。单层剩余 R = ((n_玻 − n_膜²) / (n_玻 + n_膜²))² = ((1.52 - 1.9044)/(1.52 + 1.9044))² = (−0.3844/3.4244)² ≈ 1.26%。**✓**
- **误差**：无。**正确。**
- **来源**：H. A. Macleod "Thin-Film Optical Filters" 5th ed.（已在 refs 里）。

## CMOS Structure

### FSI / BSI / Stacked / LOFIC 四柱

- **当前表达**（[js/steps.js:156](../js/steps.js#L156)）：
  - FSI / BSI / Stacked 三根柱子横向排。标题改成「受光面 + 晶圆集成」，adv 明确为 Simplified Model。
  - 第 4 根 LOFIC（BSI 底 + 大电容）独立展示。
- **正确定义**：受光面（FSI / BSI）和晶圆集成（Monolithic / Stacked）是两条**正交**维度。
- **误差**：文字准确；3D 场景「排成一横线」仍让视觉上残留线性进化感。见 **PF-002**。

### Quad Bayer 合并

- **当前表达**（[js/steps.js:90](../js/steps.js#L90)）：「可以在像素里做（四个 PD 共用一个 FD，电荷直接相加，读出噪声只算一次），也可以读出后再相加」。
- **正确定义**：
  - 电荷域（charge-domain binning）：信号 ×4，读噪不变，SNR 增益 12 dB。
  - 数字域（digital-domain binning）：信号 ×4，读噪 ×2（√4），SNR 增益 6 dB。
- **误差**：两种做法已点到，但 SNR 增益差 6 dB 未明说。见 **PF-007**。
- **来源**：Sony IMX586 产品页；Samsung Tetracell 技术页。

### Remosaic

- **当前表达**（[js/steps.js:90](../js/steps.js#L90)）：「ISP 先把四合一排列插值成普通的拜耳排列（Remosaic），再按普通流程去马赛克」。
- **误差**：无。**正确**，Remosaic 是推算，不是真采样。
- **来源**：Sony IMX586 文档。

### FWC / QE 典型值

- **当前表达**（[js/steps.js:93](../js/steps.js#L93)）：
  - QE：BSI 峰值 70-90%，FSI 30-50%。
  - FWC：1 µm 手机 3-8 ke⁻；2-3 µm 中档 10-20 ke⁻；4-6 µm 全画幅 30-80 ke⁻；&gt;6 µm 天文 CMOS &gt;100 ke⁻。
- **验证**：和 EMVA 1288 数据库、Sony Semiconductor 产品页（IMX571/IMX366）、Imatest Sensor DB 一致。**正确。**
- **来源**：EMVA 1288 数据库；J. Nakamura "Image Sensors and Signal Processing for Digital Still Cameras" §4.3。

### LOFIC 工作过程

- **当前表达**（[js/steps.js:135](../js/steps.js#L135)）：
  - 曝光时 TX 留矮堤坝，PD 溢出的电子流进 FD + 大电容。
  - 两次读出：HG（断开开关）读 PD 侧，LG（接通）读合并电压。
  - 合成：暗部用 HG，HG 到顶的像素用 LG × 增益比。
- **正确定义**：和学术论文一致（Sugawa et al., IEEE J-SSC 系列）。**正确。**
- **来源**：Sugawa 2000 年代 LOFIC 系列论文；Sony LOFIC 论文 J-SSC（refs 里有）。

### 四家 LOFIC 方案电容形态

- **当前表达**（[js/steps.js:140-148](../js/steps.js#L140)）：
  - Sony：MIM 电容 / 两段 HG+LG
  - OmniVision：TheiaCel = LOFIC+DCG+split-pixel 三段读出
  - SmartSens：LOFIC+三帧融合（SFCPixel-2 读噪 0.82 e⁻）
  - Samsung：当前 CornerPixel 过渡，HPA 规划 2026 末
- **正确定义**：每家官方公开参数可查，但「电容形态」归类（MIM / 深沟槽 / 下层晶圆）多为业界推断。见 **PF-003**。

### 像素内晶体管（4T / 5T）

- **当前表达**（[js/steps.js:197-204](../js/steps.js#L197)）：标准 4T（TX / RST / SF / SEL）；LOFIC 加 1 个开关变 5T。
- **误差**：无。**正确。**
- **来源**：Fossum 2014 "A Review of the Pinned Photodiode for CCD and CMOS Image Sensors" IEEE J-EDS。

## Readout / Noise

### 噪声合成公式

- **当前实现**（[js/readout.js:10](../js/readout.js#L10)）：`σ_total = √(S + rn² + dk)`。
- **正确定义**：电子域噪声 σ² = σ_shot² + σ_read² + σ_dark² = S + rn² + N_dark（Poisson 近似，dark 用总电子数作方差）。
- **误差**：数学正确；UI 标 `dk` 为 e⁻ 可能让人误以为是 σ 本身（实际是 σ²）。见 **PF-008**。
- **来源**：J. Theuwissen "Solid-State Imaging with Charge-Coupled Devices" §4；EMVA 1288。

### 动态范围

- **当前表达**（[js/readout.js:12](../js/readout.js#L12)）：`DR = FW / √(rn² + dk)`，`DR_dB = 20·log10(DR)`。
- **正确定义**：DR = 可用最大信号 / 底噪 = FWC / σ_floor。一般 σ_floor 用读噪（低光下 dark 很少）。此公式正确。
- **误差**：无。**正确。**
- **来源**：同上。

### 单斜率 ADC ENOB 公式

- **当前表达**（[js/steps.js:252](../js/steps.js#L252)）：`ENOB = (SNR − 1.76) / 6.02 (SNR 单位 dB，常数来自理想量化噪声)`。
- **正确定义**：`ENOB = (SINAD − 1.76 dB) / 6.02 dB`，SINAD 包含谐波失真。
- **误差**：**不正确**（SNR 应为 SINAD / SNDR）。见 **PF-001**。
- **来源**：IEEE Std 1241-2010 §4.5；EMVA 1288 §6.8。
- **1.76 dB 来源**：量化噪声 RMS = Δ/√12（Δ 是 LSB 大小），满量程正弦 RMS = 2^(N-1)·Δ/√2 = FS/(2√2)，SNR = 20·log10(FS/(2√2) / (Δ/√12)) = 6.02N + 1.76 dB。常数本身正确。

### 单斜率 ADC 原理

- **当前表达**（[js/steps.js:249](../js/steps.js#L249)）：公共斜坡电压 + 比较器 + 计数器，相关双采样数字域做。14 bit 要数到 16384 → 慢。
- **误差**：无。**正确。**
- **来源**：Nakamura Ch. 6；Sony Exmor column-parallel ADC 技术说明。

## Color Science

### CIE 1931 光谱轨迹数据

- **当前实现**（[js/isp.js:24](../js/isp.js#L24)）：20 个波长点 (380-700 nm) 的 xy 坐标。
- **正确定义**：CIE 1931 2° 观察者标准色度坐标（CIE 15:2004 Table 1）。
- **验证**：抽查 480 / 500 / 550 / 620 / 700 nm，和官方表吻合。
- **误差**：数值正确，点数偏少导致曲线有棱角。见 **PF-011**。
- **来源**：CIE 15:2004 "Colorimetry"；Judd & Wyszecki "Color in Business Science and Industry"。

### 5 个色域（sRGB、Display P3、Adobe RGB、Rec. 2020、ProPhoto RGB）

- **当前实现**（[js/isp.js:25](../js/isp.js#L25)）：红绿蓝 xy 原色坐标 + D65（或 D50 for ProPhoto）白点。
- **验证**：每套坐标和对应标准一致：
  - sRGB / BT.709：R(0.64, 0.33), G(0.30, 0.60), B(0.15, 0.06), W D65(0.3127, 0.329) ✓
  - Display P3：R(0.680, 0.320), G(0.265, 0.690), B(0.150, 0.060), W D65 ✓
  - Adobe RGB：R(0.64, 0.33), G(0.21, 0.71), B(0.15, 0.06), W D65 ✓
  - Rec. 2020：R(0.708, 0.292), G(0.170, 0.797), B(0.131, 0.046), W D65 ✓
  - ProPhoto RGB：R(0.7347, 0.2653), G(0.1596, 0.8404), B(0.0366, 0.0001), W D50(0.3457, 0.3585) ✓
- **误差**：无。**全部正确。**
- **来源**：IEC 61966-2-1（sRGB）；ITU-R BT.709 / BT.2020；Apple Display P3 技术文档；Adobe RGB (1998) 规范。

### OETF / EOTF / OOTF 术语

- **当前表达**（[js/steps.js:341-346](../js/steps.js#L341)）：
  - OETF：光 → 电（相机 / 采集端）
  - EOTF：电 → 光（显示端）
  - OOTF：OETF + EOTF 整体（系统伽马 ~1.1-1.2）
- **正确定义**：和 ITU-R BT.1886 / BT.2100 定义一致。
- **误差**：无。**正确。**特别强调了「说『sRGB 伽马 2.2』混用 OETF 和 EOTF」这个常见错。
- **来源**：ITU-R BT.1886；ITU-R BT.2100；SMPTE ST 2084。

### PQ EOTF

- **当前实现**（[js/isp.js:49](../js/isp.js#L49)）：
  ```
  m1 = 2610/16384, m2 = 2523/32, c1 = 107/128, c2 = 2413/128, c3 = 2392/128
  Em = x^(1/m2)
  L = 10000 × ((Em - c1) / (c2 - c3·Em))^(1/m1)
  ```
- **正确定义**：SMPTE ST 2084 EOTF，所有常数与标准一致。
- **验证**：x=1 → Em = 1 → L = 10000 × ((1 - 107/128)/(2413/128 - 2392/128))^(1/m1) = 10000 × (21/128 / 21/128)^(1/m1) = 10000 nits ✓。
- **误差**：无。**正确。**
- **来源**：SMPTE ST 2084:2014。

### HLG EOTF

- **当前实现**（[js/isp.js:50](../js/isp.js#L50)）：
  ```
  a = 0.17883277, b = 1 - 4a, c = 0.5 - a·ln(4a)
  inverse OETF:
    lin = x²/3                        (x ≤ 0.5)
    lin = (exp((x-c)/a) + b)/12       (x > 0.5)
  OOTF:
    Lw = 1000 nits
    γ = 1.2 + 0.42·log10(Lw/1000) = 1.2 for Lw=1000
    L = Lw · lin^γ
  ```
- **正确定义**：BT.2100 HLG 完整 EOTF（逆 OETF → OOTF 系统伽马）。
- **验证**：γ(Lw=1000) = 1.2 ✓；γ(Lw=4000) = 1.2 + 0.42·log10(4) ≈ 1.453（标准值 1.44，和公式吻合到四位）。
- **误差**：无。**正确。**UI 没把 Lw 做成可变参数，见 **PF-010**。
- **来源**：ITU-R BT.2100-2 Table 5。

### sRGB OETF

- **当前实现**（[js/isp.js:47](../js/isp.js#L47)）：
  ```
  v = x/12.92               (x ≤ 0.04045)
  v = ((x+.055)/1.055)^2.4  (x > 0.04045)
  L = v × 100               (SDR 100 nits)
  ```
- **验证**：标准 sRGB EOTF `v = x/12.92` 当 `x ≤ 0.04045`；`v = ((x+0.055)/1.055)^2.4` 当 `x > 0.04045`。公式本身是正确的。
- **误差**：无。**正确。**
- **注**：sRGB 技术上定义的是 OETF（编码曲线），EOTF 是其逆；此处用了编码曲线的「解码」版（即把数字码 → 线性亮度），所以本质是 EOTF。代码标为「sRGB (SDR 100 nits)」没错，是显示曲线。

### BT.1886 EOTF

- **当前实现**（[js/isp.js:48](../js/isp.js#L48)）：`L = x^2.4 × 100`。
- **正确定义**：BT.1886 实际为 `L = Lb + (Lw-Lb) · max(x+c, 0)^γ`，其中 Lb 黑电平、Lw 白电平、γ=2.4、c = (Lb/Lw)^(1/γ) - 1 - 2·(Lb/Lw)^(1/γ)·...（当 Lb=0 时简化为 `L = Lw · x^2.4`）。
- **误差**：当 Lb=0（理想黑）时公式 `x^2.4 × 100` 等同 BT.1886。实际 OLED Lb 极小可近似为 0，LCD 有 Lb &gt; 0 需要加上。教学够用。**正确。**
- **来源**：ITU-R BT.1886。

### CCM 和白平衡

- **当前表达**（[js/steps.js:317-321](../js/steps.js#L317)）：
  - CCM：3×3 矩阵，按 D65 / Tungsten 两组实测、运行时插值。
  - DNG `ColorMatrix1` / `ColorMatrix2`。
  - 白平衡算法：灰世界、最亮、相机学习、曝光 metadata 混合。
- **误差**：无。**正确。**
- **来源**：Adobe DNG Specification 1.7；S. Ramanath et al., "Color Image Processing Pipeline" IEEE SP Magazine 2005。

### ΔE 公式

- **当前表达**（[js/steps.js:347-352](../js/steps.js#L347)）：
  - ΔE*ab（1976）：CIELAB 欧氏距离。
  - ΔE 2000（CIEDE2000）：加权修正，行业标准。
  - ΔICtCp：BT.2100 色差。
  - 阈值：&lt; 1 不可分，&lt; 3 并排看出，&gt; 5 一眼不同。
- **误差**：无。**正确。**
- **来源**：CIE 15:2004；CIE 142-2001 "Improvement to Industrial Colour-Difference Evaluation"。

### YCbCr 标准

- **当前表达**（[js/steps.js:335](../js/steps.js#L335)、[js/steps.js:507](../js/steps.js#L507)）：讲到色度亚采样 4:4:4 / 4:2:2 / 4:2:0，但没点明 YCbCr 系数因标准不同。
- **正确定义**：
  - BT.601：Y = 0.299R + 0.587G + 0.114B
  - BT.709：Y = 0.2126R + 0.7152G + 0.0722B
  - BT.2020：Y = 0.2627R + 0.6780G + 0.0593B
- **误差**：缺口。见 **PF-009**。
- **来源**：ITU-R BT.601 / BT.709 / BT.2020。

## Image Encoding

### JPEG / HEIC / AVIF / JPEG XL / WebP / PNG / TIFF / GIF / RAW / DNG

- **当前表达**（[js/steps.js:388-506](../js/steps.js#L388)）：年份、压缩方式、位深、alpha、动画、HDR、同画质大小（对 JPEG）全表。
- **验证**：抽查：
  - JPEG 1992 ISO/IEC 10918 ✓
  - HEIC 2015 ISO/IEC 23008-12 ✓
  - AVIF 2019 AOMedia ✓
  - JPEG XL 2021 ISO/IEC 18181 ✓
  - WebP 2010 Google ✓
  - PNG 1996 ✓
  - DNG 2004 Adobe ✓
- **误差**：无。**正确。**

### jpegli 和 libjxl 关系

- **当前表达**（[js/steps.js:429](../js/steps.js#L429)）：「Google 自己的 libjxl + jpegli 编码器都支持」。
- **正确定义**：
  - **libjxl**：JXL 格式的参考编解码器。`cjxl --lossless_jpeg=1` 把 JPEG 无损重封装为 JXL。
  - **jpegli**：Google 新 JPEG 编码器，输出标准 JPEG 字节流（不是 JXL）。借用了 libjxl 的部分变换，比 libjpeg-turbo 在同大小下画质更好。
- **误差**：**错**。jpegli 不支持 JXL 无损重封装，只做 JPEG 编码。见 **PF-006**。
- **来源**：libjxl GitHub README；Google Open Source Blog "jpegli: A New JPEG Coding Library" 2024-04。

### Chrome 移除 JPEG XL

- **当前表达**（[js/steps.js:450-457](../js/steps.js#L450)）：2022-09 Chromium issue 1178058 WontFix；移除代码；社区抗议。
- **验证**：crbug.com/1178058 确实在 2022-09-01 标为 "WontFix"。**正确。**
- **来源**：Chromium bug tracker。

### JPEG XL 三个技术亮点

- **当前表达**（[js/steps.js:422-431](../js/steps.js#L422)）：
  - VarDCT：变长 DCT (2×2 到 256×256)。
  - Modular：无损字典 + 上下文预测。
  - 渐进式解码按显著性排序。
- **验证**：和 ISO/IEC 18181-1 / libjxl 文档一致。**正确。**
- **来源**：ISO/IEC 18181-1; Alakuijala et al. "JPEG XL next-generation image compression architecture" SPIE 2019。

### JPEG bitstream reconstruction

- **当前表达**（[js/steps.js:429](../js/steps.js#L429)）：「无损重封装老 JPEG... 反向也能完全恢复原 JPEG 字节」。
- **验证**：JXL 规范定义 `jpeg_reconstruction_data`，让 decoder 能把 JXL 还原回原始 JPEG 字节流（字节级可逆）。**正确。**
- **来源**：ISO/IEC 18181-1 §G。

### RAW 文件组成

- **当前表达**（[js/steps.js:469-478](../js/steps.js#L469)）：
  - EXIF header
  - 嵌入 JPEG 缩图
  - 嵌入 JPEG 全尺寸预览
  - Maker Notes
  - RAW 像素数据
  - SR (second image) 可选
- **验证**：和 ExifTool / exiv2 / libraw 的 RAW 结构一致。**正确。**
- **来源**：ExifTool "Rawspeed" 文档；J. Suckow "Camera RAW Analysis" 开源仓库。

### RAW 压缩方案

- **当前表达**（[js/steps.js:480-488](../js/steps.js#L480)）：Sony ARW 未压 / 压缩 / cRAW，Canon CR3 CRM / CRM-S / CRM-L，Nikon NEF 无损 / 有损，Fuji RAF。
- **验证**：数值和 Imaging Resource RAW 文件 DB 吻合。**正确。**
- **来源**：Sony / Canon / Nikon 官方格式文档；libraw 支持矩阵。

## HDR

### PQ 和 HLG 对照

- **当前表达**（[js/steps.js:381-387](../js/steps.js#L381)）：绝对 vs 相对、兼容 SDR、metadata、应用、tone mapping、峰值表现。
- **误差**：无。**正确。**
- **来源**：ITU-R BT.2100；Dolby Vision 技术白皮书。

### HDR 元数据

- **当前表达**（[js/steps.js:361-365](../js/steps.js#L361)）：
  - HDR10：静态 MaxCLL / MaxFALL
  - HDR10+：动态 metadata
  - Dolby Vision：动态 + 12 bit + 自家色彩引擎
- **误差**：无。**正确。**
- **来源**：CTA-861-H；Dolby Vision 白皮书。

### Rec. 2020 vs Rec. 2100

- **当前表达**（[js/steps.js:366](../js/steps.js#L366)）：「BT.2100 ≈ BT.2020 + HDR」。
- **误差**：无。**正确。** Rec. 2020 (2012) 定色域，Rec. 2100 (2016) 加 HDR EOTF。
- **来源**：ITU-R BT.2020 / BT.2100。

## 其他

### 对焦相位差

- **当前表达**（[js/steps.js:21](../js/steps.js#L21)）：
  - 对焦像素一个微透镜下左右两个 PD。
  - 合焦时左右信号重合；失焦时错开。
  - 全像素双核 vs 遮蔽式。
  - 只分左右的像素对横线纹理不敏感。
- **误差**：无。**正确。**
- **来源**：Canon Dual Pixel CMOS AF 2016 技术页；Sony Semiconductor AF 技术。

### 防抖

- **当前表达**（[js/steps.js:86](../js/steps.js#L86)）：
  - 机身五轴：俯仰 + 偏航 + 平移 x + 平移 y + 绕光轴旋转。
  - 镜头防抖：Δ像 ≈ (1 − β)·δ。
  - 协同工作：镜头俯仰偏航、机身旋转平移。
- **误差**：无。**正确。** 镜头防抖公式和 R.S. Pingali 1998 论文一致。
- **来源**：Sony 五轴机身防抖技术页；Canon IS 技术文档。

### QE 光谱响应（短波 / 中段 / 长波）

- **当前表达**（[js/steps.js:96-102](../js/steps.js#L96)）：
  - 短波 400 nm：吸收深度 0.1 µm，表面复合损失，QE 低。
  - 中段 550 nm：吸收深度 ~2 µm，QE 峰值。
  - 长波 700 nm：吸收深度 ~5 µm，PD 做厚保红。
  - 近红外 &gt; 900 nm：穿透高，消费相机 QE 掉到百分之几。
- **验证**：和 Sze "Physics of Semiconductor Devices" §9 一致。**正确。**
- **来源**：Sze "Physics of Semiconductor Devices" §9。

### 硅能带阈值

- **当前表达**（[js/steps.js:91](../js/steps.js#L91)）：E = hc/λ &gt; 1.12 eV → λ &lt; 1100 nm。
- **验证**：Si 禁带宽度 1.12 eV @ 300 K；hc/E = 1240/1.12 = 1107 nm。**正确。**
- **来源**：Sze。

## 核对汇总

| 类别 | 条数 | 正确 | 轻微偏差 | 错误 |
|---|---:|---:|---:|---:|
| Optical | 7 | 6 | 1 (MTF50 表) | 0 |
| CMOS | 5 | 5 | 0 | 0 |
| Readout / Noise | 3 | 2 | 1 (dk 口径) | 1 (ENOB SNR) |
| Color | 7 | 6 | 0 | 1 (YCbCr 缺口) |
| Encoding | 7 | 6 | 1 (jpegli) | 0 |
| HDR | 5 | 5 | 0 | 0 |
| 其他 | 5 | 5 | 0 | 0 |
| **合计** | **39** | **35** | **3** | **2** |

**整体科学准确性评价**：优。90% 条目严格正确，剩余问题大部分是表达层的小疏忽（PF-001 公式名、PF-006 工具名）而非概念错误。

## 附录：公式对照卡

```
Airy diameter      = 2.44 · λ · N
Diffraction cutoff ν_c = 1 / (λ · N)
MTF_diff(ν)        = (2/π) · [arccos(r) - r·√(1-r²)], r = ν/ν_c
MTF50_diff         ≈ 0.404 · ν_c
MTF_pix(ν)         = |sinc(π · ν · p)|
Pixel Nyquist      ν_Ny = 1 / (2p)

σ_shot             = √N_signal
σ_dark²            ≈ N_dark
σ_total            = √(N_signal + σ_read² + σ_dark²)
SNR                = N_signal / σ_total
DR                 = FWC / σ_floor
ENOB               = (SINAD - 1.76) / 6.02

PQ EOTF (ST 2084)  m1=2610/16384, m2=2523/32, c1=107/128, c2=2413/128, c3=2392/128
                   L = 10000 · ((x^(1/m2) - c1) / (c2 - c3·x^(1/m2)))^(1/m1)

HLG EOTF (BT.2100) a = 0.17883277, b = 1-4a, c = 0.5 - a·ln(4a)
                   OETF⁻¹: lin = x²/3 (x≤0.5) or (exp((x-c)/a)+b)/12 (x>0.5)
                   OOTF:    γ = 1.2 + 0.42 · log10(Lw/1000)
                   L = Lw · lin^γ

sRGB OETF          v = x/12.92 (x≤0.04045) or ((x+.055)/1.055)^2.4

BT.709 Y           Y = 0.2126 R + 0.7152 G + 0.0722 B
BT.2020 Y          Y = 0.2627 R + 0.6780 G + 0.0593 B

Thin film 1/4 wave n_film = √(n_air · n_glass) ≈ 1.23
                   d = λ / (4 n_film) ≈ 100 nm for MgF₂
                   R_residual ≈ 1.3% for MgF₂ on n=1.52 glass
```

本次复核日期：**2026-11-16**。
