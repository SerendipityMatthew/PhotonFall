# PhotonFall 交互实验设计 V2

逐个模拟器核对：用什么数据 / 用什么公式 / 真实计算还是示意 / 哪些参数可改 / 哪些假设未标注。

每项按 spec 要求回答：**输入 / 公式 / 输出 / 哪些是真实物理参数 / 哪些是示意参数 / 模型假设 / 不包含什么 / 参考资料 / 能否测试验证**。

## 模拟器一览

| ID | 步 | 名 | 位置 | 真实计算？ |
|---|---:|---|---|:---:|
| S01 | 4 | 相位对焦位移 | [js/optics-extras.js:76-82](../js/optics-extras.js#L76) | 示意（tanh 曲线） |
| S02 | 5 | 艾里斑 + MTF 曲线 | [js/optics-extras.js:11-39](../js/optics-extras.js#L11) | 真实（J1 Bessel + sinc） |
| S03 | 9 | 防抖轨迹 | [js/optics-extras.js:104-117](../js/optics-extras.js#L104) | 示意（正弦叠加抖动） |
| S04 | 12 | 光谱响应曲线 | [js/components.js](../js/components.js) | 真实（硅 + RGB 滤色片光谱） |
| S05 | 17 | LOFIC 过程动画 | [js/lofic.js:12-41](../js/lofic.js#L12) | 示意（粒子动画） |
| S06 | 17 | LOFIC 信号延伸 | [js/lofic.js:44-72](../js/lofic.js#L44) | 真实（log-log 分段线性） |
| S07 | 22 | SNR 分量分解 | [js/readout.js:3-31](../js/readout.js#L3) | 真实（Poisson + Gaussian） |
| S08 | 24 | 单斜率 ADC | [js/readout.js:36-43](../js/readout.js#L36) | 真实（比较器 + 计数器） |
| S09 | 25 | 卷帘 vs 全局 | [js/readout.js:47-52](../js/readout.js#L47) | 示意（一根移动条） |
| S10 | 26 | ISP 九阶段 | [js/isp.js:3-20](../js/isp.js#L3) | **全真实**（demosaic + CCM + gamma + NR + sharpen） |
| S11 | 29 | CIE 1931 色域图 | [js/isp.js:27-43](../js/isp.js#L27) | 真实（CIE 坐标 + 色域三角） |
| S12 | 29 | HDR 传递曲线 | [js/isp.js:46-67](../js/isp.js#L46) | 真实（PQ / HLG / sRGB / BT.1886 EOTF） |
| S13 | 30 | JPEG 质量 / 大小 | [js/isp.js:71-76](../js/isp.js#L71) | **真实**（浏览器 JPEG 编码） |

## S01 · 相位对焦位移

**输入**：滑块 `d` 失焦量（-1 到 +1，无单位）
**公式**：`T(x) = 0.12 + 0.7·0.5·(tanh((x-18)/b·1.2) - tanh((x-30)/b·1.2))`，`b = 0.6 + |d|·4`。两条曲线按 ±d·7 偏移。
**输出**：橙 / 紫两条曲线 + 错开量判定。
**真实 vs 示意**：**示意**。tanh 构造的边缘响应。真实 PDAF 信号要从镜头出瞳切半积分，不是简单平移。
**假设**：
- 边缘响应用 tanh 近似。
- 错开量线性对应失焦量。
**不包含**：真实 PDAF 的像差、信号强度随光场变化、插值残缺。
**参考**：Canon Dual Pixel CMOS AF 2016（已引用）。
**可测**：加 `assert(|T(x,d=0) - T(x,d=0)| < 1e-6)`。
**改进建议**：降为 Conceptual Illustration 标签已足；若升级可用傅里叶基或半瞳积分。

## S02 · 艾里斑 + MTF 曲线

**输入**：UI 光圈 `N`（f-number）
**公式**：
- 艾里斑强度 `I(r) = (2·J1(u)/u)²`，`u = π·r / (λ·N)`，`λ = 0.55 µm`。
- Bessel J1 用标准多项式近似（`js/optics-extras.js:8`，Hankel 展开 + 渐近）。
- 衍射 MTF：`(2/π)(arccos(r) - r√(1-r²))`，`r = ν/ν_c`，`ν_c = 1/(λN)`。
- 像素 MTF：`|sinc(π·ν·p)|`，`p = 3.76 µm`。
- 综合：diffraction × pixel（粗线）。
**输出**：艾里斑图像 + Nyquist 虚线 + MTF50 虚线。
**真实 vs 示意**：**真实**。J1 展开、MTF 公式都是标准形式。
**假设**：
- 单色 550 nm。
- 像素方形均匀开口（忽略 fill factor）。
- 无镜头像差（只有衍射极限）。
- 像素间距固定 3.76 µm。
**不包含**：镜头 MTF（真实镜头 &lt; 衍射极限）、OLPF、demosaic、色差。
**参考**：Goodman "Introduction to Fourier Optics"；Norman Koren MTF 教程（已引用）。
**可测**：
```js
assert.ok(Math.abs(airyDiameter(550, 2) - 2.684) < 0.01);
assert.ok(Math.abs(diffMTF(0.404 / (0.55*2*1e-3))) - 0.5 < 0.005);
```
**改进建议**（P1）：加 lens aberration MTF（高斯衰减 e^(-(ν/ν_ab)²)），让读者看到「镜头 + 衍射 + 像素 = 整机」。

## S03 · 防抖轨迹

**输入**：按钮切换 `关 / 机身 / 镜头`。
**公式**：抖动 `a, b = 0.035·(sin(5.3t) + 0.6·sin(11.7t+1.3))` 等。机身防抖把 `mount.position.y = dy`；镜头防抖 `lensCorr.position = 0.16·(dy, dz)`。
**输出**：传感器 / 镜头的位移 + 像点在传感器上的轨迹（累积描边）。
**真实 vs 示意**：**示意**。正弦叠加模拟手抖频谱大概合理（手抖主频 2-10 Hz），但：
- 真实陀螺仪响应、VCM 带宽、PID 控制未建模。
- 镜头防抖的 `0.16·dy` 是手调的视觉参数，不对应公式 `Δ像 = (1-β)·δ`。
**假设**：
- 手抖视为两频率正弦叠加。
- 机身防抖理想追踪，完全补偿（真实残差 &gt; 0）。
- 镜头防抖只演示俯仰偏航（匝数 β 不显示）。
**不包含**：横滚（绕光轴旋转）、平移（机身可，镜头不行）、协同防抖。
**参考**：Sony 五轴机身防抖技术页；Canon IS / Nikon VR 技术介绍（已引用）。
**可测**：无法对 "好看" 测试；可以测 `ibHist` 长度不超过 90 条。
**改进建议**（P2）：加「协同防抖」第四档；加横滚示意。

## S04 · 光谱响应曲线

**输入**：无交互（固定曲线）。
**公式**：三条滤色片曲线（R / G / B）+ 硅吸收曲线 + 红外截止滤光片曲线。
**真实 vs 示意**：**真实**。曲线形状匹配工业 CIS 光谱数据（Sony Semiconductor 光谱图、Omnivision 产品 datasheet）。
**假设**：
- 曲线归一化到峰值 1。
- 波长 380-780 nm。
**不包含**：实际传感器的单片光谱测量、QE 绝对值、暗电流对波长依赖。
**参考**：CIS 综述论文（Nakamura Ch. 4）。
**改进建议**（P3）：用具体某传感器的 datasheet 曲线替代一般化曲线。

## S05 · LOFIC 过程动画

**输入**：时间 `t`（每周期 16 s）。
**公式**：
- 电压 `v_FD(t)` 按 8 段分段函数，每段模拟不同时相。
- 电子粒子位置 `lerpVectors` 在 PD / FD / 大电容之间。
- 控制信号 RST / TX / S / SEL 按预设时序开关。
**输出**：3D 粒子动画 + 电势图 + 时序图 + 阶段文字说明。
**真实 vs 示意**：**示意**（学术意义上）。粒子数、电压降、时序符合定性原理，但：
- 电压降 0.06 V / 0.8 V 是教学值（真实依 CG 变）。
- 时序比例是示意（真实 μs 级）。
- 粒子数 20 代表 20000 e⁻，比例压缩。
**假设**：
- PD 满阱 8 e⁻（= 8000）、总 20 e⁻（= 20000）。
- HG 100 µV/e⁻，LG 5 µV/e⁻（真实值依设计不同）。
- TX 分三档：全开 / 半开 / 关。
**不包含**：复位噪声、kTC 噪声、CDS 对复位噪声的消除、真实 LOFIC 的 well capacity 非线性。
**参考**：Sugawa LOFIC 系列论文；Sony LOFIC J-SSC 论文。
**可测**：无法直接测动画，可以测 `LPH` 阶段数量（应该 8）。
**改进建议**（P1）：加一个「噪声开关」，展示 HG / LG 读出各自噪声大小的区别。

## S06 · LOFIC 信号延伸

**输入**：滑块 `lofp`（PD 满阱 1-100 ke⁻）、`lofk`（电容容量比 10-100×）。
**公式**：
- 无 LOFIC：线性到 `pd` 然后截平。
- 有 LOFIC：线性到 `pd`，再以斜率 `1/k` 到 `pd×k`，再截平。
- DR：`20·log10(FWC / 2)`，假设读噪 2 e⁻。
**输出**：log-log 响应曲线 + DR 数值（dB + 档数）。
**真实 vs 示意**：**真实**（分段线性是 LOFIC 的理想响应）。
**假设**：
- 读噪 = 2 e⁻（固定，未在 UI 显示 — **PF-012**）。
- HG → LG 转换瞬时（真实有过渡区）。
- 两段都线性（真实在饱和前略弯）。
**不包含**：转换点处的信号接缝误差、两段读出噪声、HG / LG 增益不准导致的条带。
**参考**：Sugawa 论文；OmniVision OX08D10 规格。
**可测**：
```js
// FWC = 20 ke⁻, k = 50 → DR = 20·log10(20000·50/2) ≈ 114 dB
assert.ok(Math.abs(drLoficDb(20, 50) - 114) < 1);
```
**改进建议**（P1）：加读噪滑块；加转换点标注；加「段间接缝」演示（故意让 HG 和 LG 对不上，看曲线出现条带）。

## S07 · SNR 分量分解

**输入**：滑块 `np`（像素 pitch 1-5 µm）、`nr`（读噪 0.5-10 e⁻）、`nd`（暗电流积累 1-100 e⁻）。
**公式**：
- FWC = `3500 · p²` e⁻（假设 3500 e⁻/µm²）
- 散粒 σ_shot = √N（Poisson）
- 读噪 σ_read = rn（固定）
- 暗流 σ_dark = √nd（Poisson）
- 总噪声 σ_total = √(S + rn² + nd)
- DR = FWC / σ_floor，DR_dB = 20·log10(DR)
**输出**：
- SNR 曲线（实线 = 实测，虚线 = 只散粒）。
- 噪声分量分解图（散粒 / 读出 / 暗流 / 总噪声四条，交叉点标出 `读噪 = 散粒 @ N`）。
- 三张图像块（5 / 50 / 500 光子）展示颗粒感。
**真实 vs 示意**：**真实**（Poisson + Gaussian 合成）。
**假设**：
- FWC = 3500 e⁻/µm²（未在 UI 显示 — **PF-008**）。
- 读噪是零均值高斯（真实有 1/f 分量）。
- 暗流是 Poisson（真实有温度依赖）。
- 像素亮度正比于光子（线性，饱和前）。
**不包含**：PRNU / DSNU、kTC 噪声、1/f 分量、色彩通道间差异、ADC 量化噪声。
**参考**：J. Theuwissen "Solid-State Imaging" §4；EMVA 1288。
**可测**：
```js
// p=3, rn=2, nd=10 → FWC = 31.5ke⁻, σ_floor = √(4+10) ≈ 3.74
assert.ok(Math.abs(fwc(3) - 31500) < 1);
assert.ok(Math.abs(drDb(3, 2, 10) - 20*Math.log10(31500/3.74)) < 0.5);
```
**改进建议**（P1）：加 PRNU 开关；加 ADC 量化噪声滑块（bit depth）。

## S08 · 单斜率 ADC

**输入**：时间 `t`（动画）。
**公式**：
- 斜坡电压匀速上升 0 → 1。
- 4 列像素电压 `[0.22, 0.58, 0.83, 0.41]`。
- 比较器：当斜坡超过像素电压时锁住当前计数。
- 10 bit 数字：计数值 0-1023。
**输出**：斜坡 + 4 条水平虚线 + 比较器翻转瞬间 + 列值表格。
**真实 vs 示意**：**真实**（单斜率 ADC 原理展示）。
**假设**：
- 斜坡完全线性（真实有非线性 INL）。
- 比较器瞬时翻转（真实有 setup time）。
- 相关双采样未展示。
**不包含**：Flash ADC、SAR ADC、Pipeline ADC、量化噪声、INL / DNL。
**参考**：Nakamura Ch. 6；Sony Exmor column-parallel ADC。
**改进建议**（P2）：加一个「ADC 架构切换」演示 SAR / Pipeline，展示速度 vs 功耗折中。

## S09 · 卷帘 vs 全局快门

**输入**：时间 `t`。
**公式**：
- 一根黄条按 `bar(t) = (t·260) % (pw+40) - 20` 水平移动。
- 卷帘：逐行 shift `t0 + y/ph · 1.2` 复位；全局：一次全画面同时曝光。
- 青线表示正在读出的那一行。
**输出**：两个画面并列，各一根黄条，卷帘的黄条倾斜（果冻效应），全局的直。
**真实 vs 示意**：**示意**。真实卷帘读出是逐行 reset，每行 μs 级；这里把时间比例做成可视。
**假设**：
- 每行读出时间固定。
- 画面内容只有一根移动条（不含频闪、LED PWM 等现象）。
**不包含**：果冻效应的多种表现（倾斜、波浪、分裂）、LED 频闪与行频 beat、机械快门和电子快门叠加。
**参考**：常见 CMOS 文档；机械快门 vs 电子快门教材。
**改进建议**（P3）：加 LED 频闪演示（闪烁的光源 + 卷帘 → 条带）。

## S10 · ISP 九阶段

**输入**：固定场景（`drawScene`）。
**公式**：九个阶段依次：
1. RAW 生成：`e = M · RGB_lin · ILL · falloff · 3000`，加噪 + 量化到 10 bit + 加 BLK（黑电平）。
2. 扣黑电平：`s1 = max(0, raw - BLK) / FS`。
3. 补 vignetting：`s2 = s1 / falloff`。
4. Demosaic：局部 3×3 均值（分 R/G/B 通道按像素位置分）。
5. WB：`s4 = s3 / ILL`。
6. CCM：`s5 = MX⁻¹ · s4`。
7. Gamma：`s6 = s5^(1/2.2)`，加 S 曲线 `v = 0.7v + 0.3v²(3-2v)`。
8. NR：双边滤波式平滑 `exp(-(v-v0)²/0.008)`。
9. Sharpen：`s8 = s7 + 0.8·(s7 - 3×3均值)`。
**输出**：i0 到 i8 九张小图。
**真实 vs 示意**：**全真实**（demosaic / CCM / NR / sharpen 都是实际算法）。
**假设**：
- CCM 是手造的教学值 `MX = [[.78,.17,.05],[.12,.76,.12],[.04,.2,.76]]`（**PF-013**）。
- 光源 ILL = [0.55, 1, 0.7]（偏暖）。
- gamma 1/2.2。
- 场景只有 96×64 像素，真实 ISP 处理千万像素。
**不包含**：lens shading correction（只用了径向 fallback）、chromatic aberration correction、tone mapping / HDR、denoise ML。
**参考**：Adobe DNG Spec 1.7；Ramanath "Color Image Processing Pipeline" IEEE SP Magazine 2005。
**可测**：
```js
// 单个像素经完整 ISP 后，RGB 应在 [0, 1]
const rgb = ispPipeline(testRaw);
assert.ok(rgb.every(v => v >= 0 && v <= 1));
```
**改进建议**（P1-P2）：
- 加「步骤顺序交换」演示（NR 做在 Bayer 域 vs linear RGB 域 vs gamma 后）。
- 加「停在某一步」滑块，让用户看 i0-i8。

## S11 · CIE 1931 色域图

**输入**：5 个色域开关（sRGB / Display P3 / Adobe RGB / Rec. 2020 / ProPhoto）。
**公式**：
- 马蹄形 CIE 光谱轨迹（20 点，CIE 1931 2° 观察者）。
- 每个色域三原色 + 白点。
**输出**：xy 坐标图 + 5 个色域三角形 + 白点。
**真实 vs 示意**：**真实**（坐标全部对标 CIE 和 ITU 标准）。
**假设**：
- 光谱轨迹 20 点插值（真实 CIE 表 5 nm 一点 81 点）。
- 没显示光谱色的颜色（马蹄是空心白）。
**不包含**：色域体积（3D）、色域相交面积百分比、ΔE 等距线。
**参考**：CIE 15:2004；IEC 61966-2-1；ITU-R BT.709 / BT.2020；Adobe RGB (1998)。
**可测**：
```js
// 色域三角形的面积应该 Rec. 2020 > Adobe RGB > Display P3 > sRGB
assert.ok(area(GAMUTS.rec2020) > area(GAMUTS.adobe));
assert.ok(area(GAMUTS.adobe) > area(GAMUTS.dispP3));
```
**改进建议**（P2）：
- 扩充 SPECTRAL 到 40+ 点（**PF-011**）。
- 加色域内彩色填充（可用 sRGB 近似映射）。
- 加 ΔE 等距线。

## S12 · HDR 传递曲线

**输入**：5 个曲线开关（sRGB / BT.1886 / PQ / HLG / Linear）。
**公式**：全部 EOTF 真实实现（见 [TECHNICAL_ACCURACY_V2.md](TECHNICAL_ACCURACY_V2.md) §HDR）。
**输出**：log-y 轴 (0.01 - 10000 nits) × linear-x (0-1) 曲线图，SDR 范围阴影标注。
**真实 vs 示意**：**真实**（所有 EOTF 公式都和标准一致）。
**假设**：
- HLG 的 Lw = 1000 nits（固定，未开放 — **PF-010**）。
- BT.1886 简化为 Lb=0 的理想 OLED。
- sRGB EOTF 实际是 OETF 的逆。
**不包含**：OETF 对比（只画 EOTF）、HDR10+ / Dolby Vision 动态 metadata、BT.2446 / 2408 tone mapping。
**参考**：SMPTE ST 2084；ITU-R BT.1886 / BT.2100。
**可测**：
```js
assert.ok(Math.abs(pq(1.0) - 10000) < 1);
assert.ok(Math.abs(pq(0.5) - 92) < 5);  // PQ(0.5) ≈ 92 nits
assert.ok(Math.abs(hlg(0)) < 1e-6);
```
**改进建议**（P1）：加 Lw 滑块；加 OETF 对比（切换 EOTF / OETF）。

## S13 · JPEG 质量 / 大小

**输入**：滑块 `cq` 质量 0-100。
**公式**：`canvas.toDataURL('image/jpeg', q/100)` → base64 → byte count。
**输出**：原图 + 压缩图 + 质量% + 文件大小。
**真实 vs 示意**：**真实**（浏览器 JPEG 编码器直接给结果）。
**假设**：
- 浏览器 JPEG 编码器质量参数解释（Chrome / Safari / Firefox 可能不同）。
- base64 → byte 用 `×3/4 − 22` 近似。
**不包含**：不同编码器对比（libjpeg-turbo vs mozjpeg vs jpegli）、chroma subsampling 选项、progressive vs baseline。
**可测**：
```js
// 质量 100 比质量 20 大
assert.ok(size(1.0) > size(0.2));
// 文件大小合理（50 bytes 到 2 MB 内）
assert.ok(size(0.5) > 1024 && size(0.5) < 2e6);
```
**改进建议**（P2）：加 chroma subsampling 切换（4:4:4 / 4:2:2 / 4:2:0）；加 AVIF / WebP 对比；加 PSNR 计算。

## 本轮应该重点投入的实验

按**信息密度 / 工程成本**排序：

| 优先级 | 实验 | 要加什么 | 工作量 |
|---|---|---|---:|
| P1 | S02 MTF | 加 lens aberration MTF 一条曲线 | 1 h |
| P1 | S06 LOFIC | 加读噪滑块；加段间接缝演示 | 1 h |
| P1 | S07 SNR | 加 ADC 量化噪声滑块、PRNU 开关 | 2 h |
| P1 | S10 ISP | 加「步骤顺序交换」演示 | 3 h |
| P1 | S12 HDR | 加 Lw 滑块 | 30 min |
| P2 | S11 色域 | 扩光谱点数 + 彩色填充 | 1 h |
| P2 | S13 JPEG | 加 chroma subsampling + AVIF 对比 | 2 h |
| P2 | S05 LOFIC 动画 | 加噪声切换 | 1 h |
| P3 | S09 卷帘 | 加 LED 频闪演示 | 1 h |
| P3 | S08 ADC | 加多种 ADC 架构对比 | 3 h |

## 测试覆盖

当前测试（[tests/check.js](../tests/check.js)）只做结构检查，不测物理公式。建议新建 `tests/physics.js`（见 **PF-020**）：

```js
#!/usr/bin/env node
'use strict';
const assert = require('assert');

// 加载 isp.js 定义的曲线函数（需要重构成 export）
const { HDR_CURVES, SPECTRAL, GAMUTS } = require('../js/isp.js');

// PQ EOTF
assert.ok(Math.abs(HDR_CURVES.pq.fn(1.0) - 10000) < 1, 'PQ(1) = 10000 nits');
assert.ok(HDR_CURVES.pq.fn(0) < 0.01, 'PQ(0) < 0.01 nits');

// HLG EOTF
assert.ok(Math.abs(HDR_CURVES.hlg.fn(0)) < 1e-6, 'HLG(0) = 0');
assert.ok(HDR_CURVES.hlg.fn(1) > HDR_CURVES.hlg.fn(0.5), 'HLG monotone');

// sRGB EOTF
assert.ok(Math.abs(HDR_CURVES.srgb.fn(1.0) - 100) < 0.1, 'sRGB(1) = 100 nits');

// CIE 1931 光谱轨迹单调性（x 从左往右应先降再升）
assert.ok(SPECTRAL.length >= 20, 'spectral locus coverage');

// 色域面积关系
const area = g => Math.abs((g.R[0]*(g.G[1]-g.B[1]) + g.G[0]*(g.B[1]-g.R[1]) + g.B[0]*(g.R[1]-g.G[1]))/2);
assert.ok(area(GAMUTS.rec2020) > area(GAMUTS.adobe), 'Rec2020 > Adobe');
assert.ok(area(GAMUTS.adobe) > area(GAMUTS.dispP3), 'Adobe > P3');

console.log('✓ physics tests passed');
```

**挑战**：现在 `isp.js` 不是模块（classic script），这些常量都是文件级 `const`。建议把 `HDR_CURVES / SPECTRAL / GAMUTS / MX` 移到 `js/physics.js`（新文件），声明为 `globalThis.HDR_CURVES = ...`，测试文件 `vm.runInContext` 加载它即可，无需改成 ES module。

## 核对日期

**2026-11-16**。
