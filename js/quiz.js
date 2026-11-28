/* Quiz: 7 categories × 25 questions · routes: #/quiz, #/quiz/<cat>
   题库从 steps.js 的 adv/hard 知识点抽取 */

const QUIZ_CATS = [
  {id:'basic',   name:'基础知识',     nameEn:'Basic Knowledge',    icon:'📘'},
  {id:'current', name:'当前采用技术', nameEn:'Current Tech',       icon:'🔬'},
  {id:'history', name:'发展历史',     nameEn:'History',            icon:'📜'},
  {id:'future',  name:'未来发展预测', nameEn:'Future Predictions', icon:'🚀'},
  {id:'practice',name:'实战：大圆光斑', nameEn:'Field test: big round bokeh', icon:'📸'},
  {id:'effects', name:'实战：拍摄效果', nameEn:'Field test: shooting effects', icon:'🎬'},
  {id:'pro',     name:'进阶：闪光、视频与画质', nameEn:'Advanced: flash, video & image quality', icon:'⚡'},
];

const QUIZ = [
/* ---------- BASIC 基础知识 (25) ---------- */
{cat:'basic',q:'硅的禁带宽度约 1.12 eV，对应的截止波长约为？',qEn:'Silicon\'s bandgap is about 1.12 eV. The cutoff wavelength is approximately?',opts:['550 nm','800 nm','1100 nm','2000 nm'],optsEn:['550 nm','800 nm','1100 nm','2000 nm'],ans:2,expl:'光子能量 E = hc/λ，1.12 eV 对应 λ ≈ 1100 nm。超过此波长硅无法吸收。',explEn:'E = hc/λ: 1.12 eV ≈ 1100 nm. Silicon cannot absorb photons beyond this wavelength.',step:15},
{cat:'basic',q:'Bayer 滤色片 RGGB 阵列中，绿色格子占总数的比例是？',qEn:'In a Bayer RGGB array, green pixels make up what fraction of the total?',opts:['1/4','1/3','1/2','2/3'],optsEn:['1/4','1/3','1/2','2/3'],ans:2,expl:'RGGB 四格里绿占两格，一半。因为人眼对绿最敏感。',explEn:'Two of four cells are green = 1/2. Because the human eye is most sensitive to green.',step:12},
{cat:'basic',q:'收到 N 个光电子时，散粒噪声 σ 大约是？',qEn:'When N photoelectrons are collected, the shot noise σ is approximately?',opts:['N','√N','log N','1/N'],optsEn:['N','√N','log N','1/N'],ans:1,expl:'σ = √N（泊松分布标准差）。所以信号越大，相对噪声越小。',explEn:'σ = √N (Poisson standard deviation). The larger the signal, the smaller the relative noise.',step:22},
{cat:'basic',q:'光圈 f/2.8 和 f/4 相比，进光量大约多多少倍？',qEn:'Compared to f/4, how much more light does f/2.8 let in?',opts:['1 倍','2 倍','4 倍','8 倍'],optsEn:['1×','2×','4×','8×'],ans:1,expl:'进光量正比于 1/f²。f/2.8 → f/4 差一档，进光量 2 倍。',explEn:'Light ∝ 1/f². One stop apart means 2× light.',step:5},
{cat:'basic',q:'ISO 从 100 提到 200，要保持同样曝光，快门怎么变？',qEn:'Raising ISO from 100 to 200, how must shutter change to keep exposure?',opts:['延长 1 倍','缩短 1/2','不变','变 4 倍'],optsEn:['Double','Halve','No change','Quadruple'],ans:1,expl:'ISO 翻倍相当于增益翻倍，快门时间减半即可。',explEn:'Doubling ISO doubles gain; halve the shutter time to compensate.',step:9},
{cat:'basic',q:'CMOS 图像传感器的读出方式是？',qEn:'How are pixels read out in a CMOS image sensor?',opts:['整帧一次读','逐列','逐行','随机'],optsEn:['Whole frame at once','Column by column','Row by row','Randomly'],ans:2,expl:'CMOS 按行读出：行驱动按序开 SEL，每行像素电压沿列线下去。',explEn:'CMOS reads row by row: the row driver opens SEL in sequence, pixel voltages travel down columns.',step:23},
{cat:'basic',q:'Pinned Photodiode 表面的 p+ 层主要作用是？',qEn:'What is the main purpose of the p+ layer on top of a Pinned Photodiode?',opts:['增强光吸收','压低表面暗电流','改变色彩','提高分辨率'],optsEn:['Boost absorption','Suppress surface dark current','Change color','Increase resolution'],ans:1,expl:'p+ 层钉住表面能级，把 Si-SiO₂ 界面态生成的电子推回衬底复合，暗电流降 100×+。',explEn:'The p+ layer pins the surface, pushing interface-trap-generated electrons back to the substrate — 100×+ dark-current reduction.',step:15},
{cat:'basic',q:'量子效率（QE）是指？',qEn:'Quantum efficiency (QE) means?',opts:['入射光子转为电子的比率','ADC 位深','像素面积','信噪比'],optsEn:['Ratio of photons converted to electrons','ADC bit depth','Pixel area','SNR'],ans:0,expl:'QE = 收到电子数 / 入射光子数。现代 BSI 峰值可达 70-90%。',explEn:'QE = electrons collected / incident photons. Modern BSI peaks at 70-90%.',step:15},
{cat:'basic',q:'FWC（Full Well Capacity）的常用单位是？',qEn:'The common unit of Full Well Capacity (FWC) is?',opts:['V','dB','e⁻','lx'],optsEn:['V','dB','e⁻','lx'],ans:2,expl:'FWC 以电子数（e⁻）计，表示一个像素能装的电子上限。',explEn:'FWC is measured in electrons (e⁻), the maximum electrons a pixel can store.',step:15},
{cat:'basic',q:'相关双采样（CDS）主要消除的噪声是？',qEn:'Correlated Double Sampling (CDS) mainly eliminates?',opts:['散粒噪声','1/f 噪声','kTC 复位噪声','暗电流'],optsEn:['Shot noise','1/f noise','kTC reset noise','Dark current'],ans:2,expl:'CDS 测复位电平和信号电平的差，正好抵消 FD 上的 kTC 随机噪声。',explEn:'CDS subtracts reset level from signal level, cancelling the random kTC noise on FD.',step:16},
{cat:'basic',q:'一个 12-bit ADC 可以表达多少档色阶？',qEn:'How many gray levels can a 12-bit ADC represent?',opts:['256','1024','4096','65536'],optsEn:['256','1024','4096','65536'],ans:2,expl:'2^12 = 4096 档。',explEn:'2^12 = 4096 levels.',step:24},
{cat:'basic',q:'人眼明视觉（锥细胞）光谱响应 V(λ) 的峰值在哪个波长？',qEn:'The peak of photopic V(λ) (cones) is at what wavelength?',opts:['450 nm','507 nm','555 nm','650 nm'],optsEn:['450 nm','507 nm','555 nm','650 nm'],ans:2,expl:'明视觉 V(λ) 峰值 555 nm（绿-黄）。暗视觉 V\\\'(λ) 峰值 507 nm，Purkinje 位移。',explEn:'Photopic V(λ) peaks at 555 nm (green-yellow). Scotopic V\\\'(λ) peaks at 507 nm — the Purkinje shift.',step:28},
{cat:'basic',q:'焦距越长，视角越？',qEn:'Longer focal length means?',opts:['越宽','越窄','不变','变圆'],optsEn:['Wider FoV','Narrower FoV','No change','Becomes circular'],ans:1,expl:'焦距长 → 像面大 → 视角窄。长焦看得远但窄。',explEn:'Longer focal → larger image on sensor → narrower FoV. Telephoto sees far but narrow.',step:2},
{cat:'basic',q:'想要浅景深拍人像虚化背景，下列哪个做法无效？',qEn:'For shallow depth of field (bokeh), which does NOT help?',opts:['长焦距','大光圈','靠近主体','提高 ISO'],optsEn:['Long focal','Large aperture','Get closer','Raise ISO'],ans:3,expl:'ISO 只控曝光放大，不影响景深。前三个都缩小景深。',explEn:'ISO only controls exposure gain, not depth of field. The other three all shrink DoF.',step:5},
{cat:'basic',q:'CRA 是什么的缩写？',qEn:'What does CRA stand for?',opts:['Color Rendering Angle','Chief Ray Angle','CMOS Reset Array','Cone Response Axis'],optsEn:['Color Rendering Angle','Chief Ray Angle','CMOS Reset Array','Cone Response Axis'],ans:1,expl:'Chief Ray Angle 主光线角，边缘像素光斜入的角度。',explEn:'Chief Ray Angle — the angle at which light arrives at edge pixels.',step:13},
{cat:'basic',q:'OLPF 光学低通滤镜的作用是？',qEn:'What does an OLPF (Optical Low-Pass Filter) do?',opts:['挡红外','压摩尔纹','遮尘','增灵敏度'],optsEn:['Block IR','Prevent moiré','Block dust','Increase sensitivity'],ans:1,expl:'OLPF 把细到传感器采样频率一半以上的纹理稍抹开，避免摩尔纹。',explEn:'OLPF blurs textures finer than the sensor\\\'s Nyquist frequency, preventing moiré.',step:11},
{cat:'basic',q:'背照式（BSI）传感器，光从硅的哪一面进入？',qEn:'In a BSI sensor, which face of silicon does light enter from?',opts:['正面（有金属布线的）','背面（硅衬底磨薄后）','侧面','任意面'],optsEn:['Front (with metal routing)','Back (after thinning)','Side','Any'],ans:1,expl:'BSI = Back-Side Illuminated。硅从背面磨到 3-5 μm，光从背面入射，不穿过金属。',explEn:'BSI = Back-Side Illuminated. Silicon is thinned to 3-5 μm; light enters from the back, bypassing the metal.',step:18},
{cat:'basic',q:'下列色域从小到大排列正确的是？',qEn:'Gamuts ordered smallest to largest:',opts:['sRGB < DCI-P3 < Rec.2020','Rec.2020 < DCI-P3 < sRGB','sRGB < Rec.2020 < DCI-P3','DCI-P3 < sRGB < Rec.2020'],optsEn:['sRGB < DCI-P3 < Rec.2020','Rec.2020 < DCI-P3 < sRGB','sRGB < Rec.2020 < DCI-P3','DCI-P3 < sRGB < Rec.2020'],ans:0,expl:'sRGB（最小） < DCI-P3（约 25% 更大） < Rec.2020（最大，接近谱轨迹）。',explEn:'sRGB (smallest) < DCI-P3 (~25% larger) < Rec.2020 (largest, close to spectral locus).',step:30},
{cat:'basic',q:'摄影里 1 档（1 EV）亮度差对应多少 dB？',qEn:'One photographic stop (1 EV) equals how many dB?',opts:['3 dB','6 dB','10 dB','20 dB'],optsEn:['3 dB','6 dB','10 dB','20 dB'],ans:1,expl:'1 EV = 亮度翻倍 = 2× ≈ 20·log₁₀(2) ≈ 6 dB（信号幅度）。',explEn:'1 EV = 2× brightness = 20·log₁₀(2) ≈ 6 dB (signal amplitude).',step:22},
{cat:'basic',q:'伽马曲线在 ISP 里的主要目的是？',qEn:'The main purpose of gamma in ISP is?',opts:['调白平衡','按人眼感知重新分配数字量化精度','降低噪声','扩充色域'],optsEn:['Adjust white balance','Redistribute digital quantization to match human perception','Reduce noise','Expand gamut'],ans:1,expl:'人眼对暗部更敏感，伽马把更多编码位数留给暗部，用更少位数就够。',explEn:'Humans perceive dark values more finely; gamma allocates more code steps to shadows, so fewer bits suffice.',step:26},
{cat:'basic',q:'λ/4 厚度抗反射膜让反射光抵消，利用的物理原理是？',qEn:'A λ/4-thick AR coating cancels reflections using what principle?',opts:['多普勒效应','薄膜干涉（相位相反）','散射','量子遂穿'],optsEn:['Doppler','Thin-film interference (opposite phases)','Scattering','Quantum tunneling'],ans:1,expl:'两次反射的光相位差 π，相长相消干涉抵消。',explEn:'The two reflected beams differ by π in phase and interfere destructively.',step:8},
{cat:'basic',q:'红光在硅里的穿透深度与蓝光相比？',qEn:'Red light\\\'s penetration depth into silicon, compared to blue, is?',opts:['更浅','更深','一样','红光完全不能穿透'],optsEn:['Shallower','Deeper','Same','Red cannot penetrate'],ans:1,expl:'蓝 ~0.1 μm 浅层被吸收，红 ~5 μm 需更深。所以厚硅利于红光 QE。',explEn:'Blue absorbs in ~0.1 μm, red needs ~5 μm. Thicker silicon → better red QE.',step:15},
{cat:'basic',q:'一般来说，像素尺寸越小，FWC（满阱容量）会？',qEn:'Generally, smaller pixels have what effect on FWC?',opts:['更大','更小','一样','随机'],optsEn:['Larger','Smaller','Same','Random'],ans:1,expl:'FWC 大致正比像素面积。所以小像素的宽动态范围要靠 DCG / LOFIC 弥补。',explEn:'FWC ∝ pixel area. Smaller pixels need DCG / LOFIC to recover dynamic range.',step:15},
{cat:'basic',q:'信噪比 SNR = 20·log₁₀(N/σ) 中单位是？',qEn:'In SNR = 20·log₁₀(N/σ), what is the unit?',opts:['bit','dB','EV','lux'],optsEn:['bit','dB','EV','lux'],ans:1,expl:'分贝（dB）。1 EV 亮度差对应 6 dB。',explEn:'Decibel (dB). 1 EV brightness difference = 6 dB.',step:22},
{cat:'basic',q:'色温（单位 K）越高，光的色调越？',qEn:'Higher color temperature (Kelvin) means light appears?',opts:['越黄','越蓝','越绿','越紫'],optsEn:['Yellower','Bluer','Greener','More purple'],ans:1,expl:'低 K（2700 K 钨丝灯）偏黄，高 K（6500 K 日光）偏蓝。',explEn:'Low K (2700 K tungsten) is yellow, high K (6500 K daylight) is blue.',step:30},

/* ---------- CURRENT 当前采用技术 (25) ---------- */
{cat:'current',q:'BSI 结构大约从哪一年开始成为手机旗舰的标配？',qEn:'Around what year did BSI become standard in flagship phones?',opts:['2000','2004','2008','2015'],optsEn:['2000','2004','2008','2015'],ans:2,expl:'Sony Exmor R 2008 推出，之后几年普及。',explEn:'Sony Exmor R launched 2008; widespread adoption followed in the next few years.',step:18},
{cat:'current',q:'LOFIC 是什么的缩写？',qEn:'What does LOFIC stand for?',opts:['Low Fixed Imaging Chip','Lateral Overflow Integration Capacitor','Light Only For Image Cell','Logic Output From Image Chip'],optsEn:['Low Fixed Imaging Chip','Lateral Overflow Integration Capacitor','Light Only For Image Cell','Logic Output From Image Chip'],ans:1,expl:'Lateral Overflow Integration Capacitor，横向溢出积分电容，接住 PD 装不下的电子。',explEn:'Lateral Overflow Integration Capacitor, catching electrons that overflow the PD.',step:17},
{cat:'current',q:'DCG 指的是？',qEn:'DCG stands for?',opts:['Dual Color Gate','Dual Conversion Gain','Dynamic Charge Generator','Dark Current Gate'],optsEn:['Dual Color Gate','Dual Conversion Gain','Dynamic Charge Generator','Dark Current Gate'],ans:1,expl:'Dual Conversion Gain 双转换增益。FD 旁加一个开关电容，切换 HCG / LCG。',explEn:'Dual Conversion Gain. A switchable capacitor on FD toggles HCG / LCG.',step:17},
{cat:'current',q:'首款量产 BSI 堆栈式 CMOS 传感器是哪家哪年？',qEn:'Which company launched the first mass-produced stacked BSI CMOS sensor and when?',opts:['Samsung 2010','Sony 2012','Canon 2008','OmniVision 2015'],optsEn:['Samsung 2010','Sony 2012','Canon 2008','OmniVision 2015'],ans:1,expl:'Sony Exmor RS（IMX135）2012 年首发堆栈式 CIS。',explEn:'Sony Exmor RS (IMX135), 2012.',step:18},
{cat:'current',q:'Hybrid Bonding 混合键合包含哪两种界面？',qEn:'Hybrid Bonding combines which two interfaces?',opts:['Cu-Cu + SiO₂-SiO₂','Al-Al + Si-Si','Cu-Al + SiO₂-Si','Ni-Au + SiO₂-SiO₂'],optsEn:['Cu-Cu + SiO₂-SiO₂','Al-Al + Si-Si','Cu-Al + SiO₂-Si','Ni-Au + SiO₂-SiO₂'],ans:0,expl:'Cu-Cu（电连接）+ SiO₂-SiO₂（介质接合）同时形成。',explEn:'Cu-Cu (electrical) + SiO₂-SiO₂ (dielectric) formed simultaneously.',step:21},
{cat:'current',q:'Vertical TG（VTG）相比平面 TG 的主要优势是？',qEn:'Compared to a planar TG, Vertical TG (VTG) mainly offers?',opts:['省电','PD 可做得又深又窄','提高 QE','降低成本'],optsEn:['Lower power','PD can be deep and narrow','Higher QE','Lower cost'],ans:1,expl:'垂直柱栅从 PD 底部提电子，让 PD 占满表面，装更多电子，适合 ≤1 μm 像素。',explEn:'The vertical gate pulls electrons from the PD bottom, letting PD fill the surface and hold more electrons — ideal for ≤1 μm pixels.',step:16},
{cat:'current',q:'Dual VTG（DVTG）主要用在哪家的哪个产品系列？',qEn:'Dual VTG (DVTG) is mainly used by which company and product line?',opts:['Sony IMX','Samsung ISOCELL HP','OmniVision OX','Canon EOS'],optsEn:['Sony IMX','Samsung ISOCELL HP','OmniVision OX','Canon EOS'],ans:1,expl:'Samsung ISOCELL HP2 / HP3 / HP9 等 200 MP 系列。',explEn:'Samsung ISOCELL HP2 / HP3 / HP9 200 MP series.',step:16},
{cat:'current',q:'Quad Bayer 电荷域（charge-domain）合并对 SNR 的增益大约是？',qEn:'Charge-domain binning in Quad Bayer gives roughly how much SNR gain?',opts:['+3 dB','+6 dB','+12 dB','+20 dB'],optsEn:['+3 dB','+6 dB','+12 dB','+20 dB'],ans:2,expl:'4 个像素共用 FD，信号 ×4、读噪不变，SNR 约 +12 dB。数字域合并只 +6 dB。',explEn:'Four pixels share FD; signal ×4 while read noise stays, SNR ~ +12 dB. Digital binning only +6 dB.',step:14},
{cat:'current',q:'相位对焦比反差对焦快大约？',qEn:'Phase AF is faster than contrast AF by approximately?',opts:['一个数量级','差不多','慢一倍','完全一样'],optsEn:['An order of magnitude','About the same','Twice as slow','Exactly the same'],ans:0,expl:'一次就能算出"向前还是向后"和"偏多少"，不用来回试。',explEn:'One shot gives "which way, how far" — no back-and-forth searching.',step:4},
{cat:'current',q:'HDR10 / HDR10+ 使用的 EOTF 伽马曲线叫？',qEn:'HDR10 / HDR10+ use which EOTF curve?',opts:['sRGB gamma 2.2','PQ','HLG','Log-C'],optsEn:['sRGB gamma 2.2','PQ','HLG','Log-C'],ans:1,expl:'PQ（Perceptual Quantizer），SMPTE ST 2084。HLG 是 BBC/NHK 的广播兼容方案。',explEn:'PQ (Perceptual Quantizer), SMPTE ST 2084. HLG is the BBC/NHK broadcast-compatible alternative.',step:30},
{cat:'current',q:'Dolby Vision 相对 HDR10 的关键不同是？',qEn:'Dolby Vision\\\'s key difference from HDR10 is?',opts:['更大色域','动态元数据（每镜头 / 每帧）','更高码率','更小文件'],optsEn:['Larger gamut','Dynamic metadata (per-shot/per-frame)','Higher bitrate','Smaller files'],ans:1,expl:'Dolby Vision 带每帧或每镜头的动态元数据，比 HDR10 的静态元数据适应性更好。',explEn:'Dolby Vision carries dynamic per-frame / per-shot metadata, more adaptive than HDR10\\\'s static metadata.',step:30},
{cat:'current',q:'HEIC 同等画质下文件大小大约是 JPEG 的？',qEn:'HEIC file size compared to JPEG at equal quality is about?',opts:['一样','一半','两倍','1/10'],optsEn:['Same','Half','Double','1/10'],ans:1,expl:'HEIC（HEVC intra）同画质约 JPEG 一半。但生态不如 JPEG 普遍。',explEn:'HEIC (HEVC intra) is ~half the size of JPEG at equal quality. But its ecosystem is less universal.',step:32},
{cat:'current',q:'H.265 (HEVC) 相比 H.264 (AVC) 在同码率下压缩效率提升约？',qEn:'H.265 (HEVC) vs H.264 (AVC) compression gain at the same bitrate is?',opts:['10%','25%','50%','90%'],optsEn:['10%','25%','50%','90%'],ans:2,expl:'H.265 对同画质能压到 H.264 的约一半，提升约 50%。',explEn:'H.265 roughly halves H.264 bitrate at the same quality, ~50% gain.',step:33},
{cat:'current',q:'手机传感器到 ISP 之间最常见的高速数字接口是？',qEn:'The most common high-speed digital interface between phone sensor and ISP is?',opts:['SPI','MIPI CSI-2','USB','PCIe'],optsEn:['SPI','MIPI CSI-2','USB','PCIe'],ans:1,expl:'MIPI CSI-2（D-PHY 或 C-PHY），移动影像行业标准。',explEn:'MIPI CSI-2 (D-PHY or C-PHY) is the mobile imaging industry standard.',step:21},
{cat:'current',q:'Sony 的"双层晶体管像素"（2-Layer Transistor Pixel）原型大约在哪一年公布？',qEn:'Sony\\\'s 2-Layer Transistor Pixel prototype was announced around?',opts:['2012','2017','2021','2025'],optsEn:['2012','2017','2021','2025'],ans:2,expl:'Sony 2021 年发布，把像素晶体管从 PD 层挪到下一层硅。2024 年用于部分手机。',explEn:'Sony announced it in 2021, moving pixel transistors from the PD wafer to a layer below. Used in some phones from 2024.',step:18},
{cat:'current',q:'Google HDR+ 的核心思想是？',qEn:'The core idea of Google HDR+ is?',opts:['单张长曝光','多张短曝光对齐合并','AI 补光','更大像素'],optsEn:['Single long exposure','Align & merge multiple short exposures','AI fill light','Larger pixels'],ans:1,expl:'HDR+ 先拍多帧短曝光，对齐合并降噪 + 扩动态。Google 2016 SIGGRAPH 论文。',explEn:'HDR+ captures many short exposures, aligns & merges them for denoise + dynamic range. Google SIGGRAPH 2016.',step:35},
{cat:'current',q:'Apple Deep Fusion 的主要作用是？',qEn:'Apple Deep Fusion\\\'s main role is?',opts:['AI 单帧降噪','多帧细节融合','超分辨率','变焦'],optsEn:['Single-frame AI denoise','Multi-frame detail fusion','Super-resolution','Zoom'],ans:1,expl:'Deep Fusion 用 ML 从多帧中选最清晰的局部细节融合，不是单帧降噪。',explEn:'Deep Fusion uses ML to pick the sharpest local detail from several frames — not single-frame denoise.',step:36},
{cat:'current',q:'第一款上手机主摄的 1 英寸 CMOS 传感器是哪一款？',qEn:'The first 1-inch CMOS sensor used as a phone main camera is?',opts:['Samsung ISOCELL GN2','Sony IMX989','OmniVision OV64','Sony IMX600'],optsEn:['Samsung ISOCELL GN2','Sony IMX989','OmniVision OV64','Sony IMX600'],ans:1,expl:'Sony IMX989 2022 年发布，小米 12S Ultra 首发搭载。',explEn:'Sony IMX989 launched 2022, first used in the Xiaomi 12S Ultra.',step:21},
{cat:'current',q:'Samsung 的 ISOCELL 技术命名来自？',qEn:'The ISOCELL name comes from?',opts:['ISO 50 cell','isolate cell','island of silicon','infrared smart cell'],optsEn:['ISO 50 cell','isolate cell','island of silicon','infrared smart cell'],ans:1,expl:'isolate cell —— 用 DTI 把像素之间电学 / 光学隔离。',explEn:'"isolate cell" — DTI isolates pixels electrically and optically.',step:18},
{cat:'current',q:'B-DTI（背面深沟槽隔离）里现在常见的金属填料是？',qEn:'Modern B-DTI commonly fills with which metal?',opts:['Al','Cu','W','Ag'],optsEn:['Al','Cu','W','Ag'],ans:2,expl:'钨 W 作光学墙完全阻挡串扰。槽内先 SiO₂ + HfO₂ 钝化再填 W。',explEn:'Tungsten (W) as an optical wall. First SiO₂ + HfO₂ for passivation, then W fill.',step:18},
{cat:'current',q:'典型手机 CIS 的列级单斜率 ADC 位深常见是？',qEn:'Typical column single-slope ADC bit depth in phone CIS is?',opts:['8-bit','10-12 bit','16-bit','20-bit'],optsEn:['8-bit','10-12 bit','16-bit','20-bit'],ans:1,expl:'主流 10-12 bit；科学 / 全画幅可到 14-16 bit。',explEn:'Mainstream 10-12 bit; scientific / full-frame goes to 14-16 bit.',step:24},
{cat:'current',q:'红外截止滤光片在相机结构里通常位于？',qEn:'The IR-cut filter sits where in a camera?',opts:['镜头最前','镜头内部','传感器盖板前','传感器硅内'],optsEn:['Front of lens','Inside lens','In front of sensor cover','Inside silicon'],ans:2,expl:'紧贴传感器上方的光学堆叠里，和 OLPF / 保护玻璃组合。',explEn:'In the optical stack just above the sensor, alongside OLPF / cover glass.',step:11},
{cat:'current',q:'现代 CFA 彩色滤光片主流用？',qEn:'Modern CFAs are mostly made with?',opts:['染料 (dye)','颜料 (pigment)','量子点','金属薄膜'],optsEn:['Dye','Pigment','Quantum dots','Metal film'],ans:1,expl:'颜料型（有机颜料纳米粒子）取代染料型，耐温耐褪色十年以上。',explEn:'Pigment-based (organic nano-pigment) replaced dyes for 10+ year heat / UV stability.',step:12},
{cat:'current',q:'现代高端 BSI CIS 的读出噪声典型值（高增益档）是？',qEn:'Modern high-end BSI CIS read noise (high-gain) is typically?',opts:['~100 e⁻','~10 e⁻','~1-3 e⁻','<0.01 e⁻'],optsEn:['~100 e⁻','~10 e⁻','~1-3 e⁻','<0.01 e⁻'],ans:2,expl:'1-3 e⁻ RMS 是现代主流，HCG 档甚至 <1 e⁻。',explEn:'1-3 e⁻ RMS is standard; HCG mode can reach <1 e⁻.',step:22},
{cat:'current',q:'现代 BSI 像素的硅背面抗反射膜常用哪种高折射率介质？',qEn:'Modern BSI back-side AR coating commonly uses which high-index dielectric?',opts:['SiO₂','HfO₂','Al','TiN'],optsEn:['SiO₂','HfO₂','Al','TiN'],ans:1,expl:'HfO₂ 做多层 AR 的高 n 层，兼带负电荷钝化替代背面 p+ 钉扎。',explEn:'HfO₂ serves as the high-index layer in multilayer AR and doubles as a negative-charge passivation replacing the back-side p+ pinning.',step:18},

/* ---------- HISTORY 发展历史 (25) ---------- */
{cat:'history',q:'Bayer 滤色片阵列的专利是哪一年申请 / 授权的？',qEn:'In what year was the Bayer color filter array patented?',opts:['1965','1976','1985','1995'],optsEn:['1965','1976','1985','1995'],ans:1,expl:'US 3,971,065 由 Kodak 的 Bryce E. Bayer 1976 年获得。',explEn:'US 3,971,065 by Bryce E. Bayer of Kodak, 1976.',step:12},
{cat:'history',q:'Bayer 滤色片的发明人叫？',qEn:'The inventor of the Bayer filter is?',opts:['Bryce E. Bayer','Willard Boyle','Walter Kosonocky','Nobukazu Teranishi'],optsEn:['Bryce E. Bayer','Willard Boyle','Walter Kosonocky','Nobukazu Teranishi'],ans:0,expl:'Kodak 的 Bryce E. Bayer（1929-2012）。',explEn:'Bryce E. Bayer (1929-2012) of Kodak.',step:12},
{cat:'history',q:'Pinned Photodiode（PPD）大约哪一年被发明？',qEn:'The Pinned Photodiode (PPD) was invented around?',opts:['1969','1975','1982','1995'],optsEn:['1969','1975','1982','1995'],ans:2,expl:'Nobukazu Teranishi 于 NEC 1982 年发明给 CCD 用。',explEn:'Nobukazu Teranishi invented it at NEC in 1982 for CCD use.',step:15},
{cat:'history',q:'Pinned Photodiode 的主要发明人是？',qEn:'The primary inventor of the Pinned Photodiode is?',opts:['Eric Fossum','Nobukazu Teranishi','Willard Boyle','Michael Tompsett'],optsEn:['Eric Fossum','Nobukazu Teranishi','Willard Boyle','Michael Tompsett'],ans:1,expl:'寺西信一 Nobukazu Teranishi，当时在 NEC。',explEn:'Nobukazu Teranishi, then at NEC.',step:15},
{cat:'history',q:'CCD 大约哪一年在贝尔实验室发明？',qEn:'The CCD was invented at Bell Labs around what year?',opts:['1947','1960','1969','1980'],optsEn:['1947','1960','1969','1980'],ans:2,expl:'Willard Boyle 和 George E. Smith 1969 年发明；两人 2009 年获诺贝尔物理奖。',explEn:'Willard Boyle and George E. Smith, 1969. They shared the 2009 Nobel Prize in Physics.',step:23},
{cat:'history',q:'CMOS Active Pixel Sensor（4T 像素及其现代化改进）的奠基人是？',qEn:'The pioneer of the modern CMOS Active Pixel Sensor is?',opts:['Eric Fossum','Shockley','Bardeen','Jack Kilby'],optsEn:['Eric Fossum','Shockley','Bardeen','Jack Kilby'],ans:0,expl:'Eric Fossum，JPL 时期 1993 年前后奠定 CMOS APS 的工程基础。',explEn:'Eric Fossum, at JPL around 1993, laid the engineering foundation for CMOS APS.',step:16},
{cat:'history',q:'Eric Fossum 发表奠定 CMOS APS 的工作大约在哪一年？',qEn:'Eric Fossum\\\'s foundational CMOS APS work was published around?',opts:['1985','1990','1993','2001'],optsEn:['1985','1990','1993','2001'],ans:2,expl:'1993 IEEE Workshop on CCDs and Advanced Image Sensors。',explEn:'IEEE Workshop on CCDs and Advanced Image Sensors, 1993.',step:16},
{cat:'history',q:'Sony Exmor R（第一款量产消费级 BSI CMOS）发布年是？',qEn:'Sony Exmor R (first mass-market BSI CMOS) launched in?',opts:['2005','2008','2012','2016'],optsEn:['2005','2008','2012','2016'],ans:1,expl:'2008 年 Sony 发布 Exmor R，紧凑相机首发。',explEn:'Sony released Exmor R in 2008, debuting in compact cameras.',step:18},
{cat:'history',q:'首款量产堆栈式 CMOS（像素层 + 逻辑层键合）发布年是？',qEn:'First mass-market stacked CMOS (pixel + logic bonded) launched in?',opts:['2008','2010','2012','2016'],optsEn:['2008','2010','2012','2016'],ans:2,expl:'Sony Exmor RS（IMX135）2012 发布。',explEn:'Sony Exmor RS (IMX135), 2012.',step:18},
{cat:'history',q:'Sony IMX378 首次把 1.1 μm 像素做到 Cu-Cu Hybrid Bonding 是哪一年？',qEn:'Sony IMX378 first brought 1.1 μm pixels with Cu-Cu Hybrid Bonding in what year?',opts:['2012','2014','2016','2020'],optsEn:['2012','2014','2016','2020'],ans:2,expl:'2016 IEDM，Sony 发布 Hybrid Bonding 技术，首发产品 IMX378（Pixel 1 用）。',explEn:'2016 IEDM, Sony introduced Hybrid Bonding, first shipping in IMX378 (used in Pixel 1).',step:21},
{cat:'history',q:'Samsung ISOCELL 技术首代发布年是？',qEn:'Samsung ISOCELL (first generation) was announced in?',opts:['2010','2013','2017','2020'],optsEn:['2010','2013','2017','2020'],ans:1,expl:'2013 年 Samsung 发布 ISOCELL，用 DTI 隔离每个像素。',explEn:'Samsung announced ISOCELL in 2013, using DTI to isolate each pixel.',step:18},
{cat:'history',q:'Sony IMX400 三层堆叠（像素 + DRAM + 逻辑）发布年是？',qEn:'Sony IMX400 (3-wafer stack: pixel + DRAM + logic) launched in?',opts:['2012','2015','2017','2022'],optsEn:['2012','2015','2017','2022'],ans:2,expl:'2017 年 Sony 发布 IMX400，三层堆叠支持超高速连拍。',explEn:'Sony launched IMX400 in 2017, enabling ultra-high-speed capture via 3-wafer stack.',step:18},
{cat:'history',q:'从 Al 互连转到 Cu 大马士革互连大约在哪一年由 IBM 首先量产？',qEn:'The industry shift from Al to Cu damascene interconnect was first mass-produced by IBM around?',opts:['1985','1991','1997','2005'],optsEn:['1985','1991','1997','2005'],ans:2,expl:'1997 年 IBM 在 0.22 μm CMOS 首次用 Cu 替代 Al。',explEn:'IBM introduced Cu in 0.22 μm CMOS in 1997, replacing Al.',step:21},
{cat:'history',q:'JPEG 图像压缩标准（ISO/IEC 10918）正式发布于？',qEn:'The JPEG image compression standard (ISO/IEC 10918) was ratified in?',opts:['1985','1992','2000','2010'],optsEn:['1985','1992','2000','2010'],ans:1,expl:'1992 年发布，至今仍是网络最普遍的图像格式。',explEn:'Ratified in 1992; still the most ubiquitous image format on the web.',step:32},
{cat:'history',q:'H.264 (AVC) 发布年是？',qEn:'H.264 (AVC) was released in?',opts:['1996','2003','2010','2018'],optsEn:['1996','2003','2010','2018'],ans:1,expl:'ITU-T H.264 / MPEG-4 AVC 2003 年发布，YouTube / 蓝光全靠它。',explEn:'ITU-T H.264 / MPEG-4 AVC, 2003. YouTube / Blu-ray all use it.',step:33},
{cat:'history',q:'H.265 (HEVC) 发布年是？',qEn:'H.265 (HEVC) was released in?',opts:['2008','2013','2018','2022'],optsEn:['2008','2013','2018','2022'],ans:1,expl:'ITU-T H.265 / MPEG-H Part 2 2013 年发布。',explEn:'ITU-T H.265 / MPEG-H Part 2, 2013.',step:33},
{cat:'history',q:'AV1 视频编解码规范发布年是？',qEn:'The AV1 video codec specification was released in?',opts:['2012','2015','2018','2023'],optsEn:['2012','2015','2018','2023'],ans:2,expl:'Alliance for Open Media (AOMedia) 2018 年发布 AV1 1.0 规范。',explEn:'Alliance for Open Media (AOMedia) released AV1 1.0 in 2018.',step:33},
{cat:'history',q:'ITU-R BT.2020 UHDTV 色域标准发布年是？',qEn:'ITU-R BT.2020 UHDTV gamut standard was released in?',opts:['2005','2009','2012','2017'],optsEn:['2005','2009','2012','2017'],ans:2,expl:'2012 年 ITU-R 发布 BT.2020，定义了 4K/8K 的广色域参考。',explEn:'ITU-R published BT.2020 in 2012, defining the wide-gamut reference for 4K/8K.',step:30},
{cat:'history',q:'2005 年之前，消费数码相机的主流图像传感器是？',qEn:'Before 2005, consumer digital cameras mainly used which sensor type?',opts:['CMOS','CCD','InGaAs','Film'],optsEn:['CMOS','CCD','InGaAs','Film'],ans:1,expl:'CCD 当时噪声低、画质好；CMOS APS 直到 2000s 中才在消费领域追上。',explEn:'CCD had lower noise then; CMOS APS caught up in consumer markets around the mid-2000s.',step:23},
{cat:'history',q:'CMOS 真正开始主导消费相机大约是哪个时间段？',qEn:'CMOS began dominating consumer cameras around?',opts:['1990s','2000s 初','2005-2010','2015 之后'],optsEn:['1990s','Early 2000s','2005-2010','After 2015'],ans:2,expl:'2005 前后 Canon 全幅相机率先用 CMOS，Sony 2008 Exmor R 后手机全面 CMOS 化。',explEn:'~2005 Canon brought CMOS to full-frame DSLRs; after Sony\\\'s 2008 Exmor R, phones went all-CMOS.',step:23},
{cat:'history',q:'JPEG 2000 虽然技术更先进，但未能取代 JPEG 的主要原因是？',qEn:'JPEG 2000 did not replace JPEG mainly because?',opts:['压缩比不如 JPEG','计算量大、专利不清、浏览器支持差','色彩准确度不足','不支持透明'],optsEn:['Lower compression','Heavy compute + patent FUD + poor browser support','Insufficient color accuracy','No transparency support'],ans:1,expl:'计算慢、专利池不明、主流浏览器从不原生支持，是生态问题不是技术问题。',explEn:'Slow compute, unclear patent pool, no native browser support — ecosystem issues, not technical.',step:32},
{cat:'history',q:'Sony 双层晶体管像素（2L-Tr）原型发布年是？',qEn:'Sony\\\'s 2-Layer Transistor Pixel prototype announcement year?',opts:['2016','2019','2021','2024'],optsEn:['2016','2019','2021','2024'],ans:2,expl:'2021 年 Sony 公开原型；2024 年起用于部分 Xperia 和 α 相机。',explEn:'Prototype announced 2021; shipping from 2024 in some Xperia and α cameras.',step:18},
{cat:'history',q:'索尼 Xperia PRO-I 搭载 1 英寸 CIS 发布大约在哪一年？',qEn:'Xperia PRO-I with a 1-inch CIS launched in?',opts:['2016','2019','2021','2025'],optsEn:['2016','2019','2021','2025'],ans:2,expl:'2021 年发布，用 Sony 1 英寸 IMX557 的一部分（裁切）。真正全用 1" 要到 IMX989。',explEn:'Launched 2021 with a crop of Sony\\\'s 1" IMX557. Full 1" came later with IMX989.',step:21},
{cat:'history',q:'Fossum 2014 年发表的综述论文《A Review of the Pinned Photodiode》刊登在？',qEn:'Fossum\\\'s 2014 review "A Review of the Pinned Photodiode" appeared in?',opts:['IEEE J-SSC','IEEE J-EDS','Nature','Physical Review'],optsEn:['IEEE J-SSC','IEEE J-EDS','Nature','Physical Review'],ans:1,expl:'IEEE Journal of the Electron Devices Society (J-EDS)。',explEn:'IEEE Journal of the Electron Devices Society (J-EDS).',step:15},
{cat:'history',q:'Google HDR+ 相关论文发表于哪一年的 SIGGRAPH Asia？',qEn:'Google HDR+ paper appeared at SIGGRAPH Asia in what year?',opts:['2008','2012','2016','2020'],optsEn:['2008','2012','2016','2020'],ans:2,expl:'Hasinoff 等 2016 年 SIGGRAPH Asia。',explEn:'Hasinoff et al., SIGGRAPH Asia 2016.',step:35},

/* ---------- FUTURE 未来发展预测 (25) ---------- */
{cat:'future',q:'Meta-lens（超透镜）的核心材料通常是？',qEn:'Meta-lenses are typically made from?',opts:['玻璃模压','TiO₂ 纳米柱阵列','有机颜料','硅橡胶'],optsEn:['Molded glass','TiO₂ nanopillar array','Organic pigment','Silicone rubber'],ans:1,expl:'在 SiN 或玻璃基底上刻 TiO₂ 亚波长纳米柱，用相位调制聚光。',explEn:'TiO₂ subwavelength nanopillars on SiN or glass, focusing via phase modulation.',step:12},
{cat:'future',q:'Meta-lens 用来替代传统 CIS 里的什么？',qEn:'Meta-lenses are intended to replace what in a CIS?',opts:['CFA','微透镜','PD','TG'],optsEn:['CFA','Microlens','PD','TG'],ans:1,expl:'替代像素顶上的丙烯酸热熔微透镜，更薄、能校正色差。',explEn:'Replaces the acrylic thermal-reflow microlens on each pixel — thinner, with chromatic correction.',step:12},
{cat:'future',q:'QD-CFA（量子点 CFA）相比有机颜料 CFA 的核心优势是？',qEn:'QD-CFA\\\'s core advantage over organic pigment CFA is?',opts:['更便宜','光谱带宽很窄（~20 nm FWHM）','更耐高温','完全透明'],optsEn:['Cheaper','Very narrow spectral FWHM (~20 nm)','Better heat resistance','Fully transparent'],ans:1,expl:'20-30 nm 窄 FWHM 让色域接近 Rec.2020，也降低了相邻通道串扰。',explEn:'20-30 nm FWHM pushes gamut toward Rec.2020 and reduces inter-channel crosstalk.',step:12},
{cat:'future',q:'QD-CFA 主要的量产环保挑战是哪种元素？',qEn:'QD-CFA\\\'s main environmental concern is which element?',opts:['Cd（镉）','Fe','Au','Zn'],optsEn:['Cd','Fe','Au','Zn'],ans:0,expl:'CdSe 系量子点含 Cd，有 RoHS 限制；InP 系环保但量子产额低。',explEn:'CdSe QDs contain Cd (RoHS-restricted). InP alternatives are RoHS-safe but lower in quantum yield.',step:12},
{cat:'future',q:'Organic Photoconductive Film（OPF）一体化了哪两件事？',qEn:'Organic Photoconductive Film (OPF) integrates which two functions?',opts:['分色 + 光电转换','对焦 + 快门','互连 + 封装','ADC + ISP'],optsEn:['Color separation + photoconversion','Focus + shutter','Interconnect + package','ADC + ISP'],ans:0,expl:'有机膜本身可以选择性吸收特定波段并产生载流子，取消 CFA。',explEn:'The organic film itself absorbs specific bands and generates carriers — removing CFA.',step:12},
{cat:'future',q:'OPF 技术的代表研发厂商是？',qEn:'Which companies lead OPF R&D?',opts:['Intel / AMD','Panasonic / Fujifilm / Sony','Samsung / LG','Qualcomm / Apple'],optsEn:['Intel / AMD','Panasonic / Fujifilm / Sony','Samsung / LG','Qualcomm / Apple'],ans:1,expl:'Panasonic 2018 首发原型，Fujifilm 和 Sony 2024 继续推进。',explEn:'Panasonic first prototype 2018; Fujifilm and Sony continued R&D through 2024.',step:12},
{cat:'future',q:'SiGe 外延扩展 CIS 可以覆盖到哪一段光谱？',qEn:'SiGe epitaxy extends CIS sensitivity into which band?',opts:['UV','NIR 到 1000-1100 nm','深紫外','微波'],optsEn:['UV','NIR to 1000-1100 nm','Deep UV','Microwave'],ans:1,expl:'SiGe 禁带降到 ~0.9 eV，在 900-1100 nm NIR 吸收提高 5-10 倍。',explEn:'SiGe reduces bandgap to ~0.9 eV, boosting NIR 900-1100 nm absorption 5-10×.',step:15},
{cat:'future',q:'InGaAs 的禁带约 0.75 eV，主要覆盖哪个波段？',qEn:'InGaAs with ~0.75 eV bandgap covers which band primarily?',opts:['紫外','可见光','SWIR 短波红外','毫米波'],optsEn:['UV','Visible','SWIR','mm-wave'],ans:2,expl:'SWIR 1-1.7 μm。Sony IMX990 用 Cu-Cu 键合把 InGaAs 阵列接到 Si CMOS 读出。',explEn:'SWIR 1-1.7 μm. Sony IMX990 uses Cu-Cu bonding to join an InGaAs array to Si CMOS readout.',step:15},
{cat:'future',q:'Sony IMX990 这类消费级 SWIR 传感器主要用的光电材料是？',qEn:'Sony IMX990-class consumer SWIR sensors use what photodetector material?',opts:['Si','Ge','InGaAs','Perovskite'],optsEn:['Si','Ge','InGaAs','Perovskite'],ans:2,expl:'InGaAs（In 含量 53%），1550 nm SWIR Q.E. 可达 80%。',explEn:'InGaAs (53% In), SWIR QE up to 80% at 1550 nm.',step:15},
{cat:'future',q:'Ge-on-Si 异质外延最核心的工艺难点是？',qEn:'The main process challenge in Ge-on-Si heteroepitaxy is?',opts:['温度不够','晶格失配 (~4%)','没有 EUV','价格太高'],optsEn:['Not hot enough','Lattice mismatch (~4%)','No EUV','Too expensive'],ans:1,expl:'Si-Ge 晶格失配 4%，位错密度要压到 10⁶/cm² 以下才能低暗电流。',explEn:'Si-Ge lattice mismatch is 4%; dislocation density must drop below 10⁶/cm² for low dark current.',step:15},
{cat:'future',q:'钙钛矿（Perovskite）光电材料的吸收系数比硅高多少量级？',qEn:'Perovskite absorption coefficient exceeds silicon by how many orders of magnitude?',opts:['一样','约 1 个量级','约 2 个量级','约 5 个量级'],optsEn:['Same','~1 order','~2 orders','~5 orders'],ans:2,expl:'100 nm 钙钛矿膜就能完成硅 10 μm 的吸收。',explEn:'A 100 nm perovskite film absorbs what silicon needs 10 μm for.',step:15},
{cat:'future',q:'钙钛矿光电探测器量产前的两大核心障碍是？',qEn:'Two main barriers before perovskite photodetectors reach production:',opts:['色彩偏差 + 过热','长期稳定性 + Pb 毒性','色域小 + 读噪高','分辨率低 + 功耗大'],optsEn:['Color bias + overheat','Long-term stability + Pb toxicity','Small gamut + high read noise','Low res + high power'],ans:1,expl:'典型 MAPbI₃ 含铅，寿命也是难点，所以仍停在原型阶段。',explEn:'Typical MAPbI₃ contains lead; stability over time is also a challenge, so it stays at prototype stage.',step:15},
{cat:'future',q:'下一代 CMOS 互连里，Co / Ru 主要考虑替代 Cu 在？',qEn:'Co / Ru is mainly considered to replace Cu in?',opts:['M0 / M1 最细线','顶层焊盘','封装 PCB','TSV'],optsEn:['M0 / M1 finest lines','Top-layer pads','Package PCB','TSV'],ans:0,expl:'Cu 在 <20 nm 线上 TaN 阻挡层占比太大，Co/Ru 不需阻挡层，电阻更低。',explEn:'Cu\\\'s TaN barrier dominates at <20 nm; Co/Ru need no barrier, so resistance is lower.',step:21},
{cat:'future',q:'Air Gap（空气介质）互连的相对介电常数 k 约为？',qEn:'Air-gap interconnect dielectric constant k is about?',opts:['1','2.5','4','10'],optsEn:['1','2.5','4','10'],ans:0,expl:'空气 k ≈ 1，比 Low-k 介质（2.5）更低，RC 延迟更小。',explEn:'Air k ≈ 1, lower than Low-k dielectrics (2.5), reducing RC delay.',step:21},
{cat:'future',q:'当前已量产 Stacked CIS 的最大堆叠层数是？',qEn:'Current max number of stacked wafers in mass-produced CIS is?',opts:['2','3','4','6'],optsEn:['2','3','4','6'],ans:1,expl:'Sony IMX400 2017 三层（像素 + DRAM + 逻辑）。四层以上仍是论文。',explEn:'Sony IMX400 2017 is 3-wafer (pixel + DRAM + logic). 4+ wafers still at paper stage.',step:21},
{cat:'future',q:'Full-depth DTI 的未来趋势填料是？',qEn:'The future trend for Full-depth DTI fill is?',opts:['Cu','W 钨','低折射率 SiO₂ 介质','Al'],optsEn:['Cu','W (tungsten)','Low-index SiO₂ dielectric','Al'],ans:2,expl:'全填 SiO₂ 不加金属，Q.E. 比 W 型更高（不吸光），但电学串扰要靠偏置管住。',explEn:'Fill fully with SiO₂ (no metal) — higher QE than W (no absorption), with electrical crosstalk controlled by biasing.',step:18},
{cat:'future',q:'蛾眼（moth-eye）AR 阵列能把反射率压到？',qEn:'Moth-eye AR arrays push reflectance down to?',opts:['~10%','~5%','~2%','<0.5%'],optsEn:['~10%','~5%','~2%','<0.5%'],ans:3,expl:'亚波长纳米锥创造渐变等效折射率，比常规 ALD 多层膜更低、角度/带宽更宽。',explEn:'Subwavelength nano-cones create a graded effective index — lower than standard ALD multilayer and wider in angle/bandwidth.',step:18},
{cat:'future',q:'GAA 环绕栅 pixel transistor 目前处于什么阶段？',qEn:'GAA pixel transistor is currently at what stage?',opts:['已消费量产','代工厂试产','论文原型','理论推测'],optsEn:['Consumer-shipping','Foundry pilot','Paper prototype','Pure theory'],ans:2,expl:'仍是论文 / 会议原型，未见消费 CIS 量产。',explEn:'Still paper / conference prototypes, no consumer CIS shipping.',step:16},
{cat:'future',q:'结构色（plasmonic / photonic crystal）CFA 目前处于什么阶段？',qEn:'Structural-color (plasmonic / photonic-crystal) CFAs are at what stage?',opts:['已大规模量产','消费相机商用','论文和原型','完全不可行'],optsEn:['Mass-produced','Consumer camera shipping','Papers and prototypes','Infeasible'],ans:2,expl:'Panasonic 2013 和 NIST 2022 都有论文，但 Q.E. 低、工艺复杂度高，未量产。',explEn:'Panasonic 2013 and NIST 2022 have papers, but low QE and complex process — not mass produced.',step:12},
{cat:'future',q:'AV1 / VVC 相比 H.265 的压缩效率提升大约？',qEn:'AV1 / VVC compression efficiency over H.265 is roughly?',opts:['5%','30-50%','100%','500%'],optsEn:['5%','30-50%','100%','500%'],ans:1,expl:'同画质 AV1 比 H.265 省约 30%，VVC 约 30-50%。',explEn:'At equal quality AV1 saves ~30% vs H.265; VVC saves 30-50%.',step:33},
{cat:'future',q:'JPEG XL 在主流浏览器里的支持现状（2024-2025）是？',qEn:'JPEG XL mainstream browser support status (2024-2025) is?',opts:['Chrome / Firefox / Safari 全支持','Safari 开启，Chrome 曾支持后移除','仅 IE 支持','没有任何浏览器支持'],optsEn:['Fully supported','Safari on, Chrome once supported then removed','IE only','Not supported anywhere'],ans:1,expl:'Chrome 2022 年移除 JPEG XL 支持；Safari 17 后默认启用。',explEn:'Chrome removed JPEG XL in 2022; Safari 17+ enabled by default.',step:32},
{cat:'future',q:'Cu-Cu Hybrid Bonding 的 pitch（像素级键合点间距）目前最小到？',qEn:'The smallest Cu-Cu Hybrid Bonding pitch (per-pixel bond) today is about?',opts:['10 μm','6 μm','3 μm','≤ 1 μm'],optsEn:['10 μm','6 μm','3 μm','≤ 1 μm'],ans:3,expl:'2024 公开论文显示已到 1 μm 甚至更小，是像素级连接的基础。',explEn:'2024 papers show ≤ 1 μm (and finer) — essential for per-pixel connectivity.',step:21},
{cat:'future',q:'下一代 Sony CIS 把像素晶体管（SF / RST / SEL）继续推往哪里？',qEn:'Next-gen Sony CIS keeps pushing pixel transistors (SF / RST / SEL) to?',opts:['放到微透镜上方','搬到下一层硅（2-Layer Transistor）','全部省略','搬到镜头内'],optsEn:['Above microlens','To a second silicon layer (2-Layer Transistor)','Remove them','Into the lens'],ans:1,expl:'2L-Tr 把这些晶体管搬到 PD 下方另一层硅，让 PD 占满表面。',explEn:'2L-Tr moves these transistors onto a silicon layer below the PD, so PD fills the surface.',step:18},
{cat:'future',q:'哪一种 CFA 技术理论上能做到"零褪色"？',qEn:'Which CFA technology can be theoretically "zero-fade"?',opts:['有机染料','有机颜料','QD 量子点','结构色 plasmonic / photonic crystal'],optsEn:['Organic dye','Organic pigment','QD','Structural color (plasmonic / photonic crystal)'],ans:3,expl:'金属 / 介质纳米结构分色，寿命由材料物理限制，不涉及有机分子褪色。',explEn:'Metal / dielectric nanostructures separate color — lifetime set by material physics, no organic dye fading.',step:12},
{cat:'future',q:'OPF 技术暂未普及消费 CIS 的主要原因是？',qEn:'The main reason OPF has not reached consumer CIS mass production is?',opts:['成本太高','量子效率稳定性 / 寿命','颜色不够准','分辨率不够'],optsEn:['Too expensive','Quantum efficiency stability / lifetime','Color inaccuracy','Resolution too low'],ans:1,expl:'有机膜的 QE 稳定性和十万小时寿命是产业化前最大门槛。',explEn:'Organic film QE stability and 100k-hour lifetime are the biggest pre-production hurdles.',step:12},
/* ---------- PRACTICE 实战：拍出又大又圆的光斑 (25) ---------- */
/* 如何让光斑变大 */
{cat:'practice',q:"85mm f/1.4 对焦 2 m，远处路灯在全画幅传感器上糊成的光斑直径大约是多少？（b ≈ f² ÷ [N × (S − f)]）",qEn:"85mm f/1.4 focused at 2 m: roughly how large is the blur disc of a distant street lamp on a full-frame sensor? (b ≈ f² ÷ [N × (S − f)])",opts:["0.3 mm", "1 mm", "2.7 mm", "8 mm"],optsEn:["0.3 mm", "1 mm", "2.7 mm", "8 mm"],ans:2,expl:"85² ÷ (1.4 × 1915) ≈ 2.7 mm，约占 36 mm 画面宽度的 7%。",explEn:"85² ÷ (1.4 × 1915) ≈ 2.7 mm, about 7% of the 36 mm frame width.",step:5},
{cat:'practice',q:"同一支 85mm，从 f/1.4 收到 f/2.8，远处光斑直径变成原来的多少？",qEn:"Same 85mm, stopped from f/1.4 to f/2.8: the distant blur disc becomes what fraction of its size?",opts:["1/4", "1/2", "不变", "2 倍"],optsEn:["1/4", "1/2", "Unchanged", "2×"],ans:1,expl:"光斑直径和 f 值成反比，f 值翻倍，直径减半（面积是 1/4）。",explEn:"Disc diameter is inversely proportional to the f-number: double N, half the diameter (a quarter of the area).",step:5},
{cat:'practice',q:"拍同样大小的半身人像（构图不变），85mm f/1.4 的远景光斑大约是 50mm f/1.8 的几倍？",qEn:"Same half-body framing: the 85mm f/1.4 background disc is roughly how many times the 50mm f/1.8 one?",opts:["1.2 倍", "2.2 倍", "3 倍", "一样大"],optsEn:["1.2×", "2.2×", "3×", "The same"],ans:1,expl:"构图不变时人站的距离和焦距成正比，光斑约和 f ÷ N 成正比：(85/1.4) ÷ (50/1.8) ≈ 2.2。",explEn:"With framing fixed, subject distance scales with focal length, so the disc scales roughly with f ÷ N: (85/1.4) ÷ (50/1.8) ≈ 2.2.",step:5},
{cat:'practice',q:"构图不变，135mm f/1.8 和 85mm f/1.4 比，谁的远景光斑更大？",qEn:"Same framing: which gives the larger background disc, 135mm f/1.8 or 85mm f/1.4?",opts:["85mm f/1.4，因为光圈更大", "取决于像素数", "一样大", "135mm f/1.8，约大 1.2 倍"],optsEn:["85mm f/1.4, wider aperture", "Depends on megapixels", "The same", "135mm f/1.8, about 1.2× larger"],ans:3,expl:"看 f ÷ N：135/1.8 = 75，85/1.4 ≈ 61，135mm 约大 1.2 倍，而且背景压缩得更干净。",explEn:"Compare f ÷ N: 135/1.8 = 75 vs 85/1.4 ≈ 61, so the 135mm is about 1.2× larger, with a tighter background too.",step:5},
{cat:'practice',q:"人站在 3 m 处不动，下列哪一项让远处光斑变大最多？",qEn:"Subject stays at 3 m. Which change enlarges the distant bokeh the most?",opts:["焦距 50 → 100mm", "光圈 f/2.8 → f/2", "背景灯从 10 m 移到 20 m", "换一台更高像素的机身"],optsEn:["Focal length 50 → 100mm", "Aperture f/2.8 → f/2", "Background lights from 10 m to 20 m", "A higher-megapixel body"],ans:0,expl:"光斑和焦距平方成正比：焦距翻倍约 4 倍；开大一档只有约 1.4 倍；背景再远一点只多一成多；像素数不影响。",explEn:"The disc grows with focal length squared: doubling f gives about 4×; one stop wider only about 1.4×; moving lights further adds ~10%; megapixels do nothing.",step:5},
{cat:'practice',q:"85mm f/1.4、背景在很远处，人从 4 m 走近到 2 m，光斑大约变成原来的多少？",qEn:"85mm f/1.4, background far away: the subject moves from 4 m to 2 m. The bokeh becomes roughly?",opts:["一样大", "约 1.4 倍", "约 2 倍", "约 4 倍"],optsEn:["The same", "About 1.4×", "About 2×", "About 4×"],ans:2,expl:"背景在远处时 b ≈ f² ÷ [N × (S − f)]，对焦距离减半，光斑约翻倍。",explEn:"With a far background b ≈ f² ÷ [N × (S − f)]; halving the focus distance about doubles the disc.",step:5},
{cat:'practice',q:"人站在 2 m，灯串挂在身后 4 m 处（离相机 4 m），光斑是灯串在很远处时的多少？",qEn:"Subject at 2 m, string lights 4 m from the camera: the bokeh is what fraction of lights at infinity?",opts:["约 1/4", "约一半", "一样大", "约 2 倍"],optsEn:["About 1/4", "About half", "The same", "About 2×"],ans:1,expl:"要乘 (D − S) ÷ D = (4 − 2) ÷ 4 = 0.5。灯离人越远，光斑越接近上限。",explEn:"Multiply by (D − S) ÷ D = (4 − 2) ÷ 4 = 0.5. The further the lights are behind the subject, the closer to the maximum.",step:5},
{cat:'practice',q:"手机主摄（约 6.9mm f/1.8）对焦 1 m，远处光点的光斑大约占传感器宽度的多少？",qEn:"A phone main camera (about 6.9mm f/1.8) focused at 1 m: the distant blur disc is roughly what fraction of sensor width?",opts:["约 0.3%", "约 3%", "约 10%", "约 30%"],optsEn:["About 0.3%", "About 3%", "About 10%", "About 30%"],ans:0,expl:"6.9² ÷ (1.8 × 993) ≈ 0.027 mm，传感器宽约 9.6 mm，只占 0.3%，基本是一个点。所以手机要靠人像模式算出光斑。",explEn:"6.9² ÷ (1.8 × 993) ≈ 0.027 mm on a ~9.6 mm wide sensor: about 0.3%, basically a dot. Phones have to compute bokeh in portrait mode.",step:36},
{cat:'practice',q:"同样站 2 m、同样 f/1.4、同样视角，全画幅 85mm 和 APS-C 56mm 比，光斑占画面的比例谁大？",qEn:"Same 2 m, same f/1.4, same field of view: full-frame 85mm vs APS-C 56mm, which has bokeh filling more of the frame?",opts:["APS-C，因为焦距短", "全画幅大 4 倍", "一样大", "全画幅，约大 1.5 倍"],optsEn:["APS-C, shorter focal length", "Full frame, 4× larger", "The same", "Full frame, about 1.5× larger"],ans:3,expl:"全画幅约 2.6 mm ÷ 36 mm ≈ 7%，APS-C 约 1.1 mm ÷ 23.5 mm ≈ 4.8%，差的正是约 1.5 倍的画幅系数。",explEn:"Full frame ≈ 2.6 mm ÷ 36 mm ≈ 7%; APS-C ≈ 1.1 mm ÷ 23.5 mm ≈ 4.8%: about the 1.5× crop factor.",step:5},
/* 如何让光斑够圆 */
{cat:'practice',q:"画面边缘的光斑变成柠檬形、猫眼形，主要原因是？",qEn:"Why do bokeh balls near the frame edge turn into lemons or cat's eyes?",opts:["斜射光被镜筒和后组挡掉一部分（机械暗角）", "传感器像素太小", "快门太快", "白平衡没调好"],optsEn:["Oblique light clipped by the barrel and rear elements (mechanical vignetting)", "Pixels too small", "Shutter too fast", "Wrong white balance"],ans:0,expl:"离轴的光束被镜筒前后两个口径同时切掉一部分，剩下的形状就像猫眼。",explEn:"Off-axis beams are clipped by both the front and rear openings of the barrel, leaving a cat's-eye shape.",step:6},
{cat:'practice',q:"想减轻边缘的猫眼光斑，下列哪个办法有效？",qEn:"Which helps reduce cat's-eye bokeh at the edges?",opts:["把 ISO 调高", "加一片 UV 镜", "收小 1/3 到 2/3 档，或把光点放画面中间", "改用连拍"],optsEn:["Raise ISO", "Add a UV filter", "Stop down 1/3 to 2/3, or keep the lights centered", "Use burst mode"],ans:2,expl:"稍收光圈让光束变细、不再被镜筒切到；画面中心本来就没有这个问题。代价是光斑略小。",explEn:"Stopping down a little narrows the beam so the barrel no longer clips it; the center never has the problem. The cost is slightly smaller balls.",step:6},
{cat:'practice',q:"收小光圈后光斑变成带棱角的多边形，想保持圆形该选什么镜头？",qEn:"Stopped down, the bokeh turns polygonal. What lens keeps it round?",opts:["叶片少、直边叶片", "带防抖", "变焦范围大", "圆形叶片、叶片多（9 片以上）"],optsEn:["Few straight-edged blades", "With stabilization", "Long zoom range", "Rounded blades, many of them (9+)"],ans:3,expl:"光斑形状就是光圈孔的形状。叶片多且边缘是弧形，收两三档仍接近圆。",explEn:"The bokeh takes the shape of the aperture opening; many curved blades stay near-round for a few stops.",step:5},
/* 如何让光斑干净 */
{cat:'practice',q:"光斑里有一圈一圈像洋葱的纹路，最常见的原因是？",qEn:"Rings inside bokeh balls like an onion are most often caused by?",opts:["模压非球面镜片表面的细微环纹", "传感器微透镜", "白平衡", "JPEG 压缩"],optsEn:["Fine rings on molded aspherical surfaces", "Sensor microlenses", "White balance", "JPEG compression"],ans:0,expl:"模压模具的车削痕会印在非球面镜片表面，在离焦光斑里被放大成环纹。磨制非球面或工艺好的镜头轻得多。",explEn:"Turning marks on the mold transfer to the aspherical surface and show up magnified in out-of-focus discs. Ground or well-made aspheres show far less.",step:7},
{cat:'practice',q:"边缘亮一圈、中间暗的「肥皂泡」光斑，通常来自？",qEn:"\"Soap-bubble\" bokeh with a bright rim and darker center usually comes from?",opts:["像素坏点", "球差过校正", "镀膜太好", "防抖"],optsEn:["Dead pixels", "Over-corrected spherical aberration", "Coating too good", "Stabilization"],ans:1,expl:"球差让离焦光斑内部亮度不均，过校正时能量集中到边缘。Meyer Trioplan 这类镜头专门拿它当特色。",explEn:"Spherical aberration makes the disc unevenly lit; over-correction pushes energy to the rim. Lenses like the Meyer Trioplan sell it as a look.",step:6},
{cat:'practice',q:"想要边缘柔和渐变、像奶油一样化开的光斑，哪种镜头专门为此设计？",qEn:"Which lens type is built for bokeh with soft, gradually fading edges?",opts:["鱼眼镜头", "移轴镜头", "切趾（STF / APD）镜头", "折返镜头"],optsEn:["Fisheye", "Tilt-shift", "Apodization (STF / APD) lens", "Mirror (catadioptric) lens"],ans:2,expl:"切趾镜头在光路里加一片中间透、边缘渐暗的滤镜，让光斑边缘渐变，代价是损失约一档多的光。",explEn:"An apodization element is clear in the middle and darkens toward the edge, feathering the disc edge at the cost of more than a stop of light.",step:7},
{cat:'practice',q:"焦外前景光斑发紫、背景光斑发绿，原因是？",qEn:"Purple foreground bokeh and green background bokeh are caused by?",opts:["横向色差", "传感器串扰", "自动白平衡", "纵向色差（不同颜色焦点前后错开）"],optsEn:["Lateral chromatic aberration", "Sensor crosstalk", "Auto white balance", "Longitudinal chromatic aberration (colors focus at different depths)"],ans:3,expl:"纵向色差让红绿蓝的焦点前后错开，焦前焦后分别偏紫、偏绿。复消色差（APO）镜头或稍收光圈能减轻。",explEn:"Longitudinal CA puts red, green and blue foci at different depths, tinting front and back bokeh. APO lenses or a slightly smaller aperture help.",step:6},
{cat:'practice',q:"用 500mm 折返镜头拍，光斑变成中间空心的「甜甜圈」，因为？",qEn:"A 500mm mirror lens makes hollow \"donut\" bokeh because?",opts:["前面的副镜挡住了光路中央", "光圈叶片太多", "快门太慢", "传感器太小"],optsEn:["The secondary mirror blocks the center of the light path", "Too many blades", "Shutter too slow", "Sensor too small"],ans:0,expl:"折返镜头的副镜挡在光路中央，光圈是一个圆环，离焦光斑也就成了圆环。",explEn:"The secondary mirror sits in the middle of the light path, so the aperture is a ring and so is every out-of-focus disc.",step:7},
/* 光源与曝光 */
{cat:'practice',q:"想拍出一颗颗清晰的大圆光斑，背景里最好有什么？",qEn:"For distinct big round balls, what should the background have?",opts:["大面积均匀的灯箱", "远处小而亮的点光源（灯串、路灯、树叶间的阳光）", "白墙", "蓝天"],optsEn:["A large even light box", "Small, bright point lights far away (string lights, lamps, sun through leaves)", "A white wall", "Blue sky"],ans:1,expl:"光斑是每个点光源的离焦像。光源越接近一个点、越亮、离得越远，光斑越完整。",explEn:"Each ball is the defocused image of one point light. The more point-like, brighter and further away, the cleaner the ball.",step:5},
{cat:'practice',q:"背景是一整块大面积的发光招牌，离焦后会怎样？",qEn:"A large glowing sign in the background, defocused, becomes?",opts:["一颗颗分开的圆光斑", "完全消失", "糊成一片的亮块", "星芒"],optsEn:["Separate round balls", "Nothing at all", "A smeared bright blob", "Starbursts"],ans:2,expl:"面光源上每一点都各自糊成一个圆，叠在一起就成一片，看不出单个光斑。",explEn:"Every point of an area light blurs into its own disc; overlapping, they merge into a blob.",step:5},
{cat:'practice',q:"夜景人像里光斑全成了白色、看不出颜色，应该怎么调？",qEn:"Night portrait: the bokeh balls are all white with no color. What to adjust?",opts:["提高曝光", "关掉防抖", "换更高 ISO", "曝光压低一点，人物用闪光灯或反光板补光"],optsEn:["Expose brighter", "Turn off stabilization", "Raise ISO", "Expose a little darker and light the subject with flash or a reflector"],ans:3,expl:"光斑过曝时 R、G、B 全削顶就成了白色。按光斑定曝光保住颜色，主体另外补光。",explEn:"Overexposed balls clip all channels to white. Expose for the balls to keep color, and light the subject separately.",step:5},
{cat:'practice',q:"想拍出心形光斑，怎么做？",qEn:"How do you get heart-shaped bokeh?",opts:["在镜头前加一张挖了心形孔的黑卡纸", "后期加滤镜", "开最大光圈", "用鱼眼镜头"],optsEn:["Put black card with a heart cut-out in front of the lens", "A filter in post", "Shoot wide open", "Use a fisheye"],ans:0,expl:"镜头前的孔比镜头口径小时，它就成了新的光圈，离焦光斑都变成孔的形状。",explEn:"When the cut-out is smaller than the lens opening it becomes the effective aperture, and every out-of-focus ball takes its shape.",step:5},
{cat:'practice',q:"背景光斑都被切掉一角，最可能是？",qEn:"Every bokeh ball has a corner cut off. Most likely?",opts:["白平衡", "遮光罩或叠加的滤镜太窄，挡住了部分光路", "对焦不准", "传感器灰尘"],optsEn:["White balance", "A narrow hood or stacked filters blocking part of the beam", "Missed focus", "Sensor dust"],ans:1,expl:"离轴光束被前面的遮挡物切掉一块。换合适的遮光罩、去掉叠加的滤镜即可。",explEn:"Something in front clips the off-axis beam. Use the right hood and remove stacked filters.",step:6},
{cat:'practice',q:"手机人像模式里的大光斑是怎么来的？",qEn:"Where does the big bokeh in phone portrait mode come from?",opts:["手机镜头的真实光学焦外", "传感器更大", "按景深图把背景模糊，并把亮点渲染成光斑", "变焦"],optsEn:["Real optical defocus from the phone lens", "A bigger sensor", "Blurring the background by a depth map and rendering bright points as balls", "Zoom"],ans:2,expl:"双摄视差或神经网络估出景深图，再按距离做模糊，高光点单独渲染成圆盘，有的还模拟猫眼和洋葱圈。",explEn:"Dual-camera parallax or a neural network estimates depth, the background is blurred by distance, and highlights are rendered as discs, some even with cat's eyes and onion rings.",step:36},
{cat:'practice',q:"街头夜景想要最饱满的光斑，什么时间拍最好？",qEn:"For the fullest street-light bokeh, when is the best time to shoot?",opts:["正午", "日出前一小时没有灯的时候", "阴天中午", "日落后的蓝调时刻到夜晚"],optsEn:["Midday", "An hour before sunrise with lights off", "An overcast midday", "From blue hour after sunset into night"],ans:3,expl:"背景越暗，光斑越突出；蓝调时刻天空还有一点颜色，灯都亮了，光斑和背景反差最好。",explEn:"The darker the background, the more the balls stand out; at blue hour the sky still has color and the lights are on.",step:5},
{cat:'practice',q:"只能带一支镜头去拍「又大又圆」的光斑，下列哪支最合适？",qEn:"One lens for \"big and round\" bokeh. Which is best?",opts:["135mm f/1.8，11 片圆形叶片", "24mm f/1.4", "50mm 收到 f/8", "18–55mm f/5.6 套头"],optsEn:["135mm f/1.8, 11 rounded blades", "24mm f/1.4", "50mm at f/8", "18–55mm f/5.6 kit zoom"],ans:0,expl:"长焦加大光圈让光斑最大，圆形叶片多保证收一点光圈也圆；24mm 光圈大但焦距太短，f/8 和 f/5.6 光斑都很小。",explEn:"Long focal length plus wide aperture gives the biggest balls, and many rounded blades keep them round; 24mm is too short, and f/8 or f/5.6 gives tiny balls.",step:5},
/* ---------- EFFECTS 实战：拍摄效果 (25) ---------- */
{cat:'effects',q:"想拍「主体清楚、背景化开」的人像，下列哪组设置最合适？",qEn:"For a sharp subject with a melted background, which settings fit best?",opts:["85mm f/1.8，人离背景远", "16mm f/11，人靠墙", "50mm f/16", "手机广角 f/8"],optsEn:["85mm f/1.8, subject far from the background", "16mm f/11, subject against a wall", "50mm f/16", "Phone wide at f/8"],ans:0,expl:"长焦 + 大光圈 + 背景拉远，三者都让焦外更糊；人离背景的距离往往比光圈值更关键。",explEn:"Long lens, wide aperture and a distant background all soften the blur; subject-to-background distance often matters more than the f-number.",step:37},
{cat:'effects',q:"16mm f/11 的超焦距约 0.78 m，对焦在这里时清楚的范围大约是？",qEn:"At 16mm f/11 the hyperfocal distance is about 0.78 m. Focused there, what is sharp?",opts:["只有 0.78 m 那一层", "约 0.39 m 到无限远", "0.78 m 到 1.5 m", "只有无限远"],optsEn:["Only the 0.78 m plane", "About 0.39 m to infinity", "0.78 m to 1.5 m", "Only infinity"],ans:1,expl:"对焦在超焦距 H 时，H/2 到无限远都在景深内。",explEn:"Focused at the hyperfocal distance H, everything from H/2 to infinity is in focus.",step:37},
{cat:'effects',q:"移轴「微缩模型」效果靠的是哪条光学原理？",qEn:"Which optical principle makes the tilt-shift \"miniature\" look?",opts:["沙姆定律（Scheimpflug）：倾斜镜头让焦平面倾斜", "衍射极限", "反平方定律", "色差"],optsEn:["Scheimpflug: tilting the lens tilts the focal plane", "The diffraction limit", "The inverse-square law", "Chromatic aberration"],ans:0,expl:"镜头平面、传感器平面和清楚的物平面交于一条线；反向倾斜让清楚带变窄，就像桌上的模型。",explEn:"Lens plane, sensor plane and sharp object plane meet in one line; tilting the other way narrows the sharp band like a tabletop model.",step:37},
{cat:'effects',q:"微距拍昆虫，f/8 时景深仍然只有零点几毫米。想从头到尾都清楚，最好的办法是？",qEn:"Macro on an insect: even at f/8 the depth of field is a fraction of a millimetre. Best way to get it all sharp?",opts:["收到 f/32", "景深合成：从近到远对焦拍一串再合成", "提高 ISO", "换更高像素的机身"],optsEn:["Stop down to f/32", "Focus stacking: shoot near to far and merge", "Raise ISO", "A higher-resolution body"],ans:1,expl:"f/32 会被衍射拖糊；景深合成每层取最清楚的一张，大光圈也能前后全清楚。主体必须静止。",explEn:"f/32 is softened by diffraction; stacking keeps the sharpest of each layer, so even a wide aperture ends up sharp throughout. The subject must hold still.",step:37},
{cat:'effects',q:"5 m/s 的物体在 10 m 处，85mm 镜头，快门 1/250 s，在传感器上大约拖多长？",qEn:"An object at 5 m/s, 10 m away, 85mm lens, 1/250 s: about how far does it smear on the sensor?",opts:["0.001 mm", "0.17 mm", "2 mm", "17 mm"],optsEn:["0.001 mm", "0.17 mm", "2 mm", "17 mm"],ans:1,expl:"像面位移 ≈ v × t × f ÷ d = 5 × 0.004 × 85 ÷ 10 ≈ 0.17 mm，相当于几十个像素，看得出来。",explEn:"Displacement ≈ v × t × f ÷ d = 5 × 0.004 × 85 ÷ 10 ≈ 0.17 mm, dozens of pixels, clearly visible.",step:38},
{cat:'effects',q:"白天想把溪水拍成丝绸状，1/4 s 还是过曝。最该加什么？",qEn:"Daylight, you want silky water, but 1/4 s still overexposes. What should you add?",opts:["UV 镜", "ND 减光镜", "柔光镜", "闪光灯"],optsEn:["A UV filter", "An ND filter", "A soft-focus filter", "Flash"],ans:1,expl:"ND 减光镜均匀减少进光，让慢门在白天也不过曝；偏振镜也能减 1–2 档，但主要用来去反光。",explEn:"An ND filter cuts light evenly so slow shutters work in daylight; a polarizer also cuts 1–2 stops but is mainly for reflections.",step:38},
{cat:'effects',q:"追焦拍骑车的人，要背景拉成横线、人清楚，快门和动作怎么配？",qEn:"Panning a cyclist for streaked background and a sharp rider: shutter and technique?",opts:["1/4000 s，相机不动", "1/15–1/125 s，相机跟着人平移，按完继续跟", "30 s，三脚架", "1/8000 s，连拍"],optsEn:["1/4000 s, camera still", "1/15–1/125 s, swing with the rider and keep following after the press", "30 s on a tripod", "1/8000 s burst"],ans:1,expl:"相机转动和主体同步时主体在像面上不动，背景按相机转速拉成线；快门太快背景就不拉丝了。",explEn:"When the camera tracks the subject, the subject stays still on the sensor and the background streaks; too fast a shutter and the background won't streak.",step:38},
{cat:'effects',q:"爆炸变焦的放射线是怎么来的？",qEn:"Where do the radial streaks of a zoom burst come from?",opts:["后期滤镜", "曝光的同时转动变焦环，画面在曝光中放大缩小", "闪光灯", "对焦呼吸"],optsEn:["A post filter", "Turning the zoom ring during the exposure, so the image scales while exposing", "Flash", "Focus breathing"],ans:1,expl:"变焦让画面绕中心放大，每个亮点在曝光中沿半径方向拖成线；中心附近拖得最短。",explEn:"Zooming scales the image about the center, so each bright point streaks radially during the exposure; streaks are shortest near the center.",step:38},
{cat:'effects',q:"星星绕北极星一小时大约转多少度？",qEn:"Roughly how many degrees do stars turn around Polaris in an hour?",opts:["1°", "15°", "45°", "90°"],optsEn:["1°", "15°", "45°", "90°"],ans:1,expl:"地球每 24 小时转 360°，每小时约 15°；拍 2 小时星轨，弧长约 30°。",explEn:"Earth turns 360° in 24 hours, about 15° an hour; a 2-hour trail spans about 30°.",step:38},
{cat:'effects',q:"单张拍星空、想要星星是点不是线，用 24mm 全画幅，按「500 法则」最长曝光约多少？",qEn:"One frame, pinpoint stars, 24mm on full frame: by the 500 rule, the longest exposure is about?",opts:["2 s", "20 s", "2 分钟", "10 分钟"],optsEn:["2 s", "20 s", "2 minutes", "10 minutes"],ans:1,expl:"500 ÷ 24 ≈ 21 s。高像素机身用更严格的 NPF 法则，时间会更短。",explEn:"500 ÷ 24 ≈ 21 s. On high-resolution bodies the stricter NPF rule gives shorter times.",step:38},
{cat:'effects',q:"光绘时人在画面里走来走去拿灯画，为什么照片上看不到人？",qEn:"In light painting the person walks around in frame. Why don't they show up?",opts:["相机自动抠掉了", "人穿深色衣服、身上没光，在长曝光里留下的光太少", "快门太快", "用了闪光灯"],optsEn:["The camera removes them", "Dark clothes and no light on them leave too little exposure in a long shot", "Shutter too fast", "Flash was used"],ans:1,expl:"长曝光只累积亮的东西；暗衣服的人一直在动，每个位置停留时间很短，几乎不曝光。",explEn:"A long exposure only builds up bright things; a dark-clothed, moving person spends little time anywhere and barely registers.",step:38},
{cat:'effects',q:"逆光拍剪影，测光应该按哪里？",qEn:"Shooting a backlit silhouette, where should you meter?",opts:["按主体的脸", "按明亮的背景（或曝光补偿 −2 到 −3 档）", "按地面", "用平均测光不用调"],optsEn:["On the subject's face", "On the bright background (or −2 to −3 EV)", "On the ground", "Average metering, no change"],ans:1,expl:"相机把测光区域当成 18% 中灰；按亮背景测光，比背景暗 5–8 档的主体就成了全黑。",explEn:"The camera renders the metered area as 18% gray; metering the bright background turns a subject 5–8 stops darker into black.",step:39},
{cat:'effects',q:"11 片叶片的镜头收到 f/16 拍路灯，星芒有几条？",qEn:"A lens with 11 blades at f/16 on a street lamp: how many spikes?",opts:["11", "22", "8", "16"],optsEn:["11", "22", "8", "16"],ans:1,expl:"星芒来自叶片直边的衍射；奇数叶片没有平行边，芒数是叶片数的两倍。",explEn:"Spikes come from diffraction at straight blade edges; odd counts have no parallel edges, so spikes = 2 × blades.",step:39},
{cat:'effects',q:"同样 f/16，换成 8 片叶片的镜头，星芒有几条？",qEn:"Same f/16 with an 8-blade lens: how many spikes?",opts:["4", "8", "16", "24"],optsEn:["4", "8", "16", "24"],ans:1,expl:"偶数叶片相对的两条边平行，亮线重合，芒数等于叶片数。",explEn:"With even counts opposite edges are parallel and their lines overlap, so spikes = blades.",step:39},
{cat:'effects',q:"场景亮暗相差 16 档，单张只能记 12 档左右，想两头都留住，常用办法是？",qEn:"A scene spans 16 stops but one frame holds about 12. Usual way to keep both ends?",opts:["提高 ISO", "包围曝光后合成 HDR，再做色调映射", "开更大光圈", "关掉降噪"],optsEn:["Raise ISO", "Bracket, merge to HDR, then tone-map", "Open the aperture", "Turn off noise reduction"],ans:1,expl:"包围曝光扩大记录范围，色调映射（尤其局部色调映射）再把它压回屏幕能显示的六七档。",explEn:"Bracketing extends what is recorded, and tone mapping (especially local) squeezes it back to the six or seven stops a screen shows.",step:39},
{cat:'effects',q:"「黄金时刻」指的是什么时候？",qEn:"When is \"golden hour\"?",opts:["正午 12 点", "日出后、日落前约 1 小时", "日落后 2 小时", "午夜"],optsEn:["Noon", "About an hour after sunrise and before sunset", "Two hours after sunset", "Midnight"],ans:1,expl:"太阳低、光线穿过更厚的大气，蓝光被散射掉，剩下暖色，影子也长。",explEn:"The sun is low, light crosses more atmosphere, blue scatters away, leaving warm light and long shadows.",step:39},
{cat:'effects',q:"「蓝调时刻」最适合拍什么？",qEn:"What does \"blue hour\" suit best?",opts:["正午人像", "城市夜景：天空深蓝、灯刚亮", "室内静物", "高速运动"],optsEn:["Midday portraits", "Cityscapes: deep blue sky with lights just on", "Indoor still life", "Fast action"],ans:1,expl:"日落后约 20–40 分钟天空还有颜色，和人工灯光的亮度接近，一张照片里两者都有细节。",explEn:"About 20–40 min after sunset the sky still has color and roughly matches the artificial lights, so both hold detail.",step:39},
{cat:'effects',q:"想让照片整体偏暖，白平衡色温应该往哪边调？",qEn:"To make a photo warmer, which way should the white-balance temperature go?",opts:["调低（如 3500 K）", "调高（如 7000 K）", "不能用白平衡", "只能后期"],optsEn:["Lower (e.g. 3500 K)", "Higher (e.g. 7000 K)", "White balance can't do it", "Only in post"],ans:1,expl:"设定的色温越高，相机以为光越蓝，就越往暖色补偿，画面偏暖；调低则偏冷。",explEn:"The higher the set temperature, the bluer the camera assumes the light, so it compensates toward warm; lower makes it cooler.",step:39},
{cat:'effects',q:"拍黑白风光想压暗蓝天、让云更突出，传统上用哪种颜色的滤镜（或后期通道）？",qEn:"For B&W landscapes with darker blue sky and stronger clouds, which filter color (or channel) is traditional?",opts:["蓝色", "红色", "绿色", "紫色"],optsEn:["Blue", "Red", "Green", "Purple"],ans:1,expl:"红滤镜挡掉蓝光，蓝天在黑白里变暗，白云就显出来了。",explEn:"A red filter blocks blue light, so the sky darkens in B&W and white clouds stand out.",step:39},
{cat:'effects',q:"要让人物在画面里一样大，16mm 站 0.8 m 和 400mm 站 20 m，背景看起来有什么区别？",qEn:"Keeping the subject the same size, 16mm at 0.8 m vs 400mm at 20 m: how does the background differ?",opts:["一样", "400mm 的背景显得大得多、近得多", "16mm 的背景更大", "只有颜色不同"],optsEn:["The same", "With 400mm the background looks much bigger and closer", "With 16mm the background is bigger", "Only color differs"],ans:1,expl:"背景和主体的大小比只看两者离相机的距离比；退远后这个比接近 1，背景就被「压缩」得很大。",explEn:"The background-to-subject size ratio depends only on their distances from the camera; stepping back brings that ratio near 1, compressing the background large.",step:40},
{cat:'effects',q:"「广角会把人脸拍变形」，真正的原因是？",qEn:"\"Wide angles distort faces.\" What is really going on?",opts:["广角镜头质量差", "站得太近，近大远小被放大", "传感器太小", "白平衡不对"],optsEn:["Wide lenses are poor quality", "Standing too close exaggerates near-large far-small", "The sensor is too small", "Wrong white balance"],ans:1,expl:"透视只由距离决定；贴脸拍时鼻子比耳朵近很多，鼻子就显得大。用长焦退远拍更接近肉眼印象。",explEn:"Perspective depends only on distance; up close the nose is much nearer than the ears, so it looks big. A longer lens from farther away looks more natural.",step:40},
{cat:'effects',q:"三分法构图里，主体最好放在哪？",qEn:"In the rule of thirds, where should the subject go?",opts:["正中央", "三分线的交点附近", "画面最边上", "随便"],optsEn:["Dead center", "Near a third-line intersection", "At the very edge", "Anywhere"],ans:1,expl:"把画面横竖各分三份，主体放在四个交点附近，地平线放在三分线上，画面更有张力。",explEn:"Split the frame into thirds both ways; put the subject near one of the four intersections and the horizon on a third line.",step:40},
{cat:'effects',q:"手机夜景模式连拍 16 张对齐叠加，随机噪声大约降到原来的多少？",qEn:"Phone night mode stacks 16 aligned frames. Random noise drops to about?",opts:["1/16", "1/4", "1/2", "不变"],optsEn:["1/16", "1/4", "1/2", "Unchanged"],ans:1,expl:"信号随张数 N 线性增加，噪声按 √N 增加，信噪比提高 √N；16 张就是 4 倍，噪声相对降到 1/4。",explEn:"Signal grows with N, noise with √N, so SNR rises by √N; 16 frames give 4×, noise relatively 1/4.",step:41},
{cat:'effects',q:"手机人像模式里，3D 演示中光圈是收小的，背景却很虚。虚化从哪来？",qEn:"In portrait mode the demo's aperture stays small, yet the background is blurred. Where does the blur come from?",opts:["镜头光学", "算法按景深图把前景背景模糊", "传感器更大", "对焦呼吸"],optsEn:["The optics", "Software blurs by a depth map", "A bigger sensor", "Focus breathing"],ans:1,expl:"手机镜头焦距短，光学上几乎全清楚；双摄视差或神经网络估出景深，再按距离做模糊，发丝和玻璃最容易抠错。",explEn:"Short phone lenses keep almost everything sharp optically; parallax or a neural network estimates depth and blurs by distance, failing first on hair and glass.",step:41},
{cat:'effects',q:"相机「高像素合成」（像素位移多拍）要求什么？",qEn:"What does in-camera pixel-shift high-resolution shooting require?",opts:["主体和相机都尽量静止", "高速运动的主体", "必须用闪光灯", "必须用鱼眼"],optsEn:["Subject and camera as still as possible", "A fast-moving subject", "Flash is required", "A fisheye is required"],ans:0,expl:"传感器按半个或一个像素挪动拍 4–16 张再合成；中间有东西动了就会出重影。",explEn:"The sensor shifts by half or one pixel for 4–16 shots that are merged; anything moving in between ghosts.",step:41},
/* ---------- PRO 进阶：闪光、视频与画质 (25) ---------- */
{cat:'pro',q:'夜里想让人和背景灯都亮，应该怎么做？',qEn:'At night, how do you get both the person and the background lights bright?',opts:['把闪光量开大','放慢快门（慢速同步）','缩小光圈','提高快门速度'],optsEn:['Turn up the flash','Slow the shutter (slow sync)','Stop down','Use a faster shutter'],ans:1,expl:'闪光只照近处的人；背景靠环境光，环境光多少由快门时间决定，所以放慢快门。',explEn:'The flash only reaches the person; the background is ambient light, set by shutter time, so slow the shutter.',step:42},
{cat:'pro',q:'闪光照片里，快门速度主要决定哪部分的亮度？',qEn:'In a flash photo, what does shutter speed mainly control?',opts:['被闪光照亮的主体','背景（环境光）','闪光的颜色','闪光持续时间'],optsEn:['The flash-lit subject','The background (ambient)','The flash color','The flash duration'],ans:1,expl:'闪光比快门短得多，主体亮度看闪光量、光圈和 ISO；快门只管环境光。',explEn:'The flash is far shorter than the shutter, so the subject depends on flash output, aperture and ISO; the shutter only governs ambient.',step:42},
{cat:'pro',q:'主体在 3 m、背景在 6 m，闪光照到背景比主体暗几档？',qEn:'Subject at 3 m, background at 6 m: how many stops darker is the flash on the background?',opts:['1 档','2 档','3 档','4 档'],optsEn:['1 stop','2 stops','3 stops','4 stops'],ans:1,expl:'照度 ∝ 1/r²，距离翻倍光剩 1/4，就是 2 档。',explEn:'Illuminance ∝ 1/r²: double the distance leaves 1/4 the light, 2 stops.',step:42},
{cat:'pro',q:'闪光指数 GN 60（ISO 100），用 f/4 最远能打多远？',qEn:'A GN 60 flash (ISO 100) at f/4 reaches how far?',opts:['7.5 m','15 m','30 m','60 m'],optsEn:['7.5 m','15 m','30 m','60 m'],ans:1,expl:'GN = 距离 × 光圈值，60 ÷ 4 = 15 m。',explEn:'GN = distance × f-number, so 60 ÷ 4 = 15 m.',step:42},
{cat:'pro',q:'焦平面快门调到高于同步速度、又不用高速同步直接闪，会怎样？',qEn:'Above sync speed with a focal-plane shutter and no HSS, what happens?',opts:['照片上出现黑边','闪光变得更亮','色温变蓝','没有区别'],optsEn:['A dark band appears','The flash gets brighter','Color turns blue','No difference'],ans:0,expl:'快门只剩一条缝在扫，极短的闪光只照到这条缝，其余部分是黑的。',explEn:'Only a slit sweeps the sensor, so the brief flash lights just that slit and the rest goes dark.',step:42},
{cat:'pro',q:'后帘同步拍运动的物体，拖影在哪？',qEn:'With rear-curtain sync, where is the motion trail?',opts:['主体前面','主体后面','两侧都有','没有拖影'],optsEn:['In front of the subject','Behind the subject','On both sides','No trail'],ans:1,expl:'快门快关时才闪，清楚的主体落在终点，拖影在后面，运动方向读起来是对的。',explEn:'The flash fires just before the shutter closes, so the sharp subject is at the end and the trail behind it.',step:42},
{cat:'pro',q:'高速同步（HSS）的代价是？',qEn:'What is the cost of high-speed sync (HSS)?',opts:['快门每快一档，有效闪光少一档','色温变得很蓝','必须用全局快门','不能用 TTL'],optsEn:['Each faster stop of shutter loses a stop of flash','Color goes very blue','Requires a global shutter','TTL stops working'],ans:0,expl:'HSS 把闪光拆成一串脉冲当连续光用，进光量和快门时间成正比。',explEn:'HSS pulses the flash into near-continuous light, so what reaches the sensor scales with shutter time.',step:42},
{cat:'pro',q:'TTL 闪光是怎么定闪光量的？',qEn:'How does TTL flash decide its output?',opts:['主闪前先预闪，通过镜头测反射光','按对焦距离查表','只测环境光','永远全光输出'],optsEn:['A pre-flash metered through the lens before the main burst','A lookup by focus distance','Ambient metering only','Always full power'],ans:0,expl:'预闪 → 测反射 → 算主闪，全程几十毫秒。',explEn:'Pre-flash → meter the reflection → set the main burst, all within tens of milliseconds.',step:42},
{cat:'pro',q:'手机 LED 闪光为什么凝固不了动作？',qEn:'Why can\'t a phone LED flash freeze motion?',opts:['它持续亮几十到几百毫秒，亮度也低','色温太低','离镜头太近','ISP 会把它关掉'],optsEn:['It stays on for tens to hundreds of ms and is dim','Color temperature is too low','It sits too close to the lens','The ISP turns it off'],ans:0,expl:'LED 不是瞬间闪光，亮度比氙气灯低一个数量级以上。',explEn:'An LED is not a burst; it is more than ten times dimmer than xenon.',step:42},
{cat:'pro',q:'30p 配 1/60 s，快门角是多少？',qEn:'At 30p and 1/60 s, what is the shutter angle?',opts:['90°','180°','270°','360°'],optsEn:['90°','180°','270°','360°'],ans:1,expl:'快门角 = 360° × 30 × 1/60 = 180°。',explEn:'Angle = 360° × 30 × 1/60 = 180°.',step:43},
{cat:'pro',q:'24p 按 180° 规则，快门应设多少？',qEn:'At 24p, the 180° rule calls for which shutter?',opts:['1/24 s','1/50 s','1/100 s','1/500 s'],optsEn:['1/24 s','1/50 s','1/100 s','1/500 s'],ans:1,expl:'1/(2×24) = 1/48 s，数码机最接近的档是 1/50 s。',explEn:'1/(2×24) = 1/48 s; the nearest digital setting is 1/50 s.',step:43},
{cat:'pro',q:'24p 用 1/1000 s 拍运动，画面会怎样？',qEn:'Shooting motion at 24p and 1/1000 s looks like?',opts:['每帧清楚，但动作一顿一顿','拖影更长更顺','整体过曝','频闪消失'],optsEn:['Sharp frames but stuttering motion','Longer, smoother blur','Overexposed','Flicker disappears'],ans:0,expl:'快门角只有约 9°，帧与帧之间没有拖影衔接。',explEn:'The angle is only ≈9°, so no blur bridges the frames.',step:43},
{cat:'pro',q:'120p 拍、按 24p 播放，时间慢几倍？',qEn:'Shot at 120p and played at 24p, how much slower is time?',opts:['2 倍','4 倍','5 倍','10 倍'],optsEn:['2×','4×','5×','10×'],ans:2,expl:'120 ÷ 24 = 5。',explEn:'120 ÷ 24 = 5.',step:43},
{cat:'pro',q:'白天要 f/2 又要守 180° 规则，ISO 最低仍过曝 6 档，镜头前加什么？',qEn:'You want f/2 and the 180° rule in daylight; at base ISO it is still 6 stops over. What goes on the lens?',opts:['ND8','ND16','ND64','偏振镜'],optsEn:['ND8','ND16','ND64','Polarizer'],ans:2,expl:'ND64 = 2⁶，减 6 档；ND8 只减 3 档。',explEn:'ND64 = 2⁶, six stops; ND8 is only three.',step:43},
{cat:'pro',q:'50 Hz 电网的灯光下拍视频，防频闪快门选？',qEn:'Under 50 Hz mains lighting, which shutter avoids flicker?',opts:['1/60 s','1/100 s','1/125 s','1/250 s'],optsEn:['1/60 s','1/100 s','1/125 s','1/250 s'],ans:1,expl:'灯每秒闪 100 次，快门是 1/100 s 的整数倍（1/50、1/100）就不闪。',explEn:'Lights pulse 100 times a second; a whole multiple of 1/100 s (1/50, 1/100) avoids flicker.',step:43},
{cat:'pro',q:'拍 Log 为什么最好用 10 bit？',qEn:'Why should log footage be 10-bit?',opts:['8 bit 每档分到的码值太少，调色会断层','10 bit 文件更小','Log 只能存成 10 bit','10 bit 自带降噪'],optsEn:['8-bit gives too few codes per stop and bands when graded','10-bit files are smaller','Log can only be stored as 10-bit','10-bit has built-in noise reduction'],ans:0,expl:'8 bit 只有 256 级，十几档摊下来每档太少；10 bit 有 1024 级。',explEn:'8-bit has 256 levels spread over a dozen-plus stops; 10-bit has 1024.',step:43},
{cat:'pro',q:'Log 素材直接看发灰，是因为？',qEn:'Why does log footage look flat straight out of camera?',opts:['十几档动态范围被压进码值，对比和饱和度低','白平衡错了','镜头眩光','ND 镜偏色'],optsEn:['A dozen-plus stops are squeezed in, lowering contrast and saturation','Wrong white balance','Lens flare','ND color cast'],ans:0,expl:'Log 让每一档分到差不多的码值，留给后期套 LUT 和调色。',explEn:'Log gives every stop about the same codes, leaving contrast to the LUT and grade.',step:43},
{cat:'pro',q:'像素间距 4 µm，Nyquist 频率约是多少？',qEn:'With a 4 µm pixel pitch, the Nyquist frequency is about?',opts:['62.5 lp/mm','125 lp/mm','250 lp/mm','500 lp/mm'],optsEn:['62.5 lp/mm','125 lp/mm','250 lp/mm','500 lp/mm'],ans:1,expl:'f_N = 1/(2p) = 1/(2 × 0.004 mm) = 125 lp/mm。',explEn:'f_N = 1/(2p) = 1/(2 × 0.004 mm) = 125 lp/mm.',step:11},
{cat:'pro',q:'比 Nyquist 频率还细的纹理，采样以后会怎样？',qEn:'Detail finer than Nyquist, after sampling, becomes?',opts:['折叠成低频的假纹理（摩尔纹）','直接消失','变成随机噪声','被 ISP 完整还原'],optsEn:['A false low-frequency pattern (moiré)','Gone entirely','Random noise','Fully restored by the ISP'],ans:0,expl:'f_假 = |f − k·f_s|，拍完以后分不出真假。',explEn:'f_alias = |f − k·f_s|, and after capture real and folded texture look the same.',step:11},
{cat:'pro',q:'λ = 0.55 µm、f/16 时，衍射截止频率约是多少？',qEn:'At λ = 0.55 µm and f/16, the diffraction cutoff is about?',opts:['57 lp/mm','114 lp/mm','227 lp/mm','455 lp/mm'],optsEn:['57 lp/mm','114 lp/mm','227 lp/mm','455 lp/mm'],ans:1,expl:'f_c = 1/(λN) = 1/(0.00055 mm × 16) ≈ 114 lp/mm，已低于 3.76 µm 像素的 133 lp/mm。',explEn:'f_c = 1/(λN) = 1/(0.00055 mm × 16) ≈ 114 lp/mm, below the 133 lp/mm of a 3.76 µm pixel.',step:11},
{cat:'pro',q:'斜边 SFR 测试为什么要把边倾斜约 5°？',qEn:'Why is the slanted-edge SFR edge tilted about 5°?',opts:['各行落在边的不同亚像素位置，拼出过采样的边缘曲线','避免眩光','顺便测畸变','让自动对焦更准'],optsEn:['Rows land at different sub-pixel offsets, building an oversampled edge profile','To avoid flare','To measure distortion too','To help autofocus'],ans:0,expl:'ESF 过采样 → 求导得 LSF → 傅里叶变换得 MTF。',explEn:'Oversampled ESF → differentiate to LSF → Fourier transform to MTF.',step:26},
{cat:'pro',q:'降噪把低对比度纹理抹平了，斜边却依然锐利，用哪种测试卡能发现？',qEn:'Noise reduction erased low-contrast texture but edges stay sharp. Which chart catches it?',opts:['Dead leaves（随机圆片）卡','24 色 ColorChecker','灰阶卡','畸变网格卡'],optsEn:['Dead-leaves (random discs) chart','24-patch ColorChecker','Gray-step chart','Distortion grid'],ans:0,expl:'Dead leaves 测的是纹理 MTF，斜边测不出纹理损失。',explEn:'Dead leaves measures texture MTF, which a slanted edge misses.',step:26},
{cat:'pro',q:'每颗摄像头模组的 LSC、AWB、PDAF 标定数据存在哪？',qEn:'Where are each camera module\'s LSC, AWB and PDAF calibration data stored?',opts:['模组上的 OTP 存储器','存储卡','云端服务器','照片的 EXIF'],optsEn:['OTP memory on the module','The memory card','A cloud server','Photo EXIF'],ans:0,expl:'产线逐颗标定后写进 OTP，ISP 开机读取，不同个体才拍得一样。',explEn:'Each unit is calibrated on the line and written to OTP; the ISP reads it at boot so units match.',step:26},
{cat:'pro',q:'变焦条选了 3×，但光线很暗，手机常会怎么做？',qEn:'You pick 3× in very dim light. What does the phone often do?',opts:['改用主摄裁切','改用超广角','关掉长焦防抖','提高帧率'],optsEn:['Switch to a main-camera crop','Switch to the ultra-wide','Turn off tele stabilization','Raise the frame rate'],ans:0,expl:'长焦传感器小、光圈小，进光少一到两档以上，主摄裁切反而噪声更低。',explEn:'The tele\'s small sensor and aperture lose one to two stops or more, so a main crop is cleaner.',step:2},
{cat:'pro',q:'双摄测距的距离误差随距离 Z 怎么变？',qEn:'How does stereo depth error grow with distance Z?',opts:['∝ Z','∝ Z²','∝ √Z','不变'],optsEn:['∝ Z','∝ Z²','∝ √Z','Constant'],ans:1,expl:'δZ ≈ Z²·δd/(f·b)，手机基线一两厘米，几米外就分不清前后。',explEn:'δZ ≈ Z²·δd/(f·b); with a 1–2 cm baseline, depth blurs beyond a few meters.',step:2},
];

/* ============================================================
   渲染 / 答题逻辑
   ============================================================ */

let quizState = null;
/* {cat: 'basic', qs: [...25 question indices], idx: 0, selected: null, checked: false, correct: 0} */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function catById(id) {
  return QUIZ_CATS.find(c => c.id === id);
}

function catLabel(c) {
  const en = typeof getLang === 'function' && getLang() === 'en';
  return (en && c.nameEn) ? c.nameEn : c.name;
}

function renderQuizIndex() {
  const el = $('quizview');
  if (!el) return;
  const en = typeof getLang === 'function' && getLang() === 'en';
  const title = en ? 'Practice' : '测验';
  const sub = en ? 'Pick a category to start. 25 questions each, 4 pts per question.' : '选一个分类开始。每类 25 题，每题 4 分。';
  el.innerHTML = `
    <div class="qz-wrap">
      <h1 class="qz-title">${title}</h1>
      <p class="qz-sub">${sub}</p>
      <div class="qz-cats">
        ${QUIZ_CATS.map(c => {
          const count = QUIZ.filter(q => q.cat === c.id).length;
          return `<button type="button" class="qz-cat" data-cat="${c.id}">
            <span class="qz-cat-ico">${c.icon}</span>
            <span class="qz-cat-name">${catLabel(c)}</span>
            <span class="qz-cat-n">${count} ${en ? 'questions' : '题'}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="qz-back-row">
        <button type="button" class="qz-back" data-back="step">${en ? '← Back to lessons' : '← 回到课程'}</button>
      </div>
    </div>`;
  el.querySelectorAll('.qz-cat').forEach(b => b.onclick = () => navigate({view:'quiz', cat: b.dataset.cat}));
  el.querySelector('.qz-back').onclick = () => navigate({view:'step', n: step || 0});
}

/* 选项打乱显示，免得靠位置猜答案；全是从小到大的数字时保持原顺序（读起来更顺） */
function optOrder(opts) {
  const n = opts.map(o => parseFloat(o.replace(/^[^\d.-]+/, '')));
  return n.every((v, i) => !isNaN(v) && (i === 0 || v > n[i - 1])) ? opts.map((_, i) => i) : shuffle(opts.map((_, i) => i));
}

function startQuiz(catId) {
  const indices = QUIZ.map((q, i) => q.cat === catId ? i : -1).filter(i => i >= 0);
  quizState = {
    cat: catId,
    qs: shuffle(indices),
    ord: Object.fromEntries(indices.map(i => [i, optOrder(QUIZ[i].opts)])),   // 每题选项的显示顺序，切语言也不变
    idx: 0,
    selected: null,
    checked: false,
    correct: 0,
  };
}

function renderQuizQuestion() {
  const el = $('quizview');
  if (!el || !quizState) return;
  const en = typeof getLang === 'function' && getLang() === 'en';
  const q = QUIZ[quizState.qs[quizState.idx]];
  const c = catById(quizState.cat);
  const total = quizState.qs.length;
  const qText = (en && q.qEn) ? q.qEn : q.q;
  const opts = (en && q.optsEn) ? q.optsEn : q.opts;
  const expl = (en && q.explEn) ? q.explEn : q.expl;

  el.innerHTML = `
    <div class="qz-wrap">
      <div class="qz-head">
        <span class="qz-chip">${c.icon} ${catLabel(c)}</span>
        <span class="qz-prog">${quizState.idx + 1} / ${total}</span>
        <span class="qz-score">${en ? 'Score' : '得分'}: ${quizState.correct * 4} / ${total * 4}</span>
      </div>
      <div class="qz-q">${qText}</div>
      <div class="qz-opts">
        ${quizState.ord[quizState.qs[quizState.idx]].map((i, k) => `<button type="button" class="qz-opt" data-i="${i}">
          <span class="qz-opt-letter">${String.fromCharCode(65 + k)}</span>
          <span class="qz-opt-text">${opts[i]}</span>
        </button>`).join('')}
      </div>
      <div class="qz-fb" hidden></div>
      <div class="qz-actions">
        <button type="button" class="qz-back" data-back="index">${en ? '← Categories' : '← 分类'}</button>
        <button type="button" class="qz-check" disabled>${en ? 'Check answer' : '对答案'}</button>
        <button type="button" class="qz-next" hidden>${en ? 'Next →' : '下一题 →'}</button>
      </div>
    </div>`;

  el.querySelectorAll('.qz-opt').forEach(b => b.onclick = () => {
    if (quizState.checked) return;
    quizState.selected = +b.dataset.i;
    el.querySelectorAll('.qz-opt').forEach(x => x.classList.toggle('on', +x.dataset.i === quizState.selected));
    el.querySelector('.qz-check').disabled = false;
  });

  el.querySelector('.qz-check').onclick = () => {
    if (quizState.selected == null) return;
    quizState.checked = true;
    const right = quizState.selected === q.ans;
    if (right) quizState.correct++;
    el.querySelectorAll('.qz-opt').forEach(x => {
      const i = +x.dataset.i;
      if (i === q.ans) x.classList.add('right');
      else if (i === quizState.selected) x.classList.add('wrong');
      x.disabled = true;
    });
    const fb = el.querySelector('.qz-fb');
    fb.innerHTML = `
      <div class="qz-fb-tag ${right ? 'ok' : 'no'}">${right ? (en ? '✓ Correct' : '✓ 答对') : (en ? '✗ Incorrect' : '✗ 答错')}</div>
      <div class="qz-fb-expl">${expl}</div>
      ${q.step != null ? `<div class="qz-fb-step"><a href="#/step/${q.step}" data-step="${q.step}">${en ? 'See Step ' + q.step : '相关步骤：第 ' + q.step + ' 步'}</a></div>` : ''}`;
    fb.hidden = false;
    el.querySelector('.qz-check').hidden = true;
    const nextBtn = el.querySelector('.qz-next');
    nextBtn.hidden = false;
    nextBtn.focus();
  };

  el.querySelector('.qz-next').onclick = () => {
    if (quizState.idx + 1 >= total) {
      renderQuizResult();
    } else {
      quizState.idx++;
      quizState.selected = null;
      quizState.checked = false;
      renderQuizQuestion();
    }
  };

  el.querySelector('.qz-back').onclick = () => navigate({view:'quiz', cat: null});
}

function renderQuizResult() {
  const el = $('quizview');
  if (!el || !quizState) return;
  const en = typeof getLang === 'function' && getLang() === 'en';
  const c = catById(quizState.cat);
  const total = quizState.qs.length;
  const score = quizState.correct * 4;
  const maxScore = total * 4;
  const pct = Math.round(quizState.correct / total * 100);
  const mood = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const tag = en
    ? (pct >= 80 ? 'Well done!' : pct >= 60 ? 'Good start — try again?' : 'Review the chapters and retry.')
    : (pct >= 80 ? '答得漂亮！' : pct >= 60 ? '不错，再试一次？' : '回去复习一下再来。');

  el.innerHTML = `
    <div class="qz-wrap">
      <div class="qz-result">
        <div class="qz-result-ico">${mood}</div>
        <h2 class="qz-result-cat">${c.icon} ${catLabel(c)}</h2>
        <div class="qz-result-score">${score} / ${maxScore}</div>
        <div class="qz-result-pct">${quizState.correct} / ${total} ${en ? 'correct' : '正确'} · ${pct}%</div>
        <p class="qz-result-tag">${tag}</p>
        <div class="qz-result-actions">
          <button type="button" class="qz-again">${en ? 'Try again' : '再来一次'}</button>
          <button type="button" class="qz-back-cats">${en ? '← Other categories' : '← 换个分类'}</button>
        </div>
      </div>
    </div>`;
  el.querySelector('.qz-again').onclick = () => { startQuiz(quizState.cat); renderQuizQuestion(); };
  el.querySelector('.qz-back-cats').onclick = () => navigate({view:'quiz', cat: null});
}

function showQuiz(cat) {
  const view = $('quizview');
  if (!view) return;
  document.body.classList.add('quiz-mode');
  view.hidden = false;
  /* 挂起 3D 渲染 */
  for (const k in (window.GR || {})) if (GR[k]) GR[k].visible = false;
  if (cat) {
    if (!quizState || quizState.cat !== cat) startQuiz(cat);
    renderQuizQuestion();
  } else {
    quizState = null;
    renderQuizIndex();
  }
}

function hideQuiz() {
  const view = $('quizview');
  if (view) view.hidden = true;
  document.body.classList.remove('quiz-mode');
}
