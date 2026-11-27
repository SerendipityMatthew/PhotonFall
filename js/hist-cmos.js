/* CMOS 时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 cmos-timeline.html 里按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 */
TIMELINES.cmos.hist = {
 "lofic": {
  "stages": [
   [
    2005,
    "idea",
    "东北大学 Sugawa 组在 ISSCC 2005 提出 LOFIC：光电二极管饱和后溢出的电荷存进像素内横向电容，1/3 英寸 VGA、7.5 µm 像素、0.35 µm 工艺，单次曝光 100 dB 且无残影。",
    "Sugawa's group at Tohoku University proposed LOFIC at ISSCC 2005: overflow charge from a saturated photodiode is stored in an in-pixel lateral capacitor; a 1/3-inch VGA, 7.5 µm-pixel, 0.35 µm chip reached 100 dB in one exposure with no lag.",
    [
     0
    ]
   ],
   [
    2006,
    "paper",
    "Akahane、Sugawa 等在 IEEE JSSC 发表改进版，改善未饱和信号灵敏度和溢出信号线性度，仍为 100 dB VGA。",
    "Akahane, Sugawa et al. published an improved version in IEEE JSSC, raising sensitivity of the non-saturated signal and linearity of the overflow signal, still a 100 dB VGA chip.",
    [
     1
    ]
   ],
   [
    2006,
    "paper",
    "同组在 ISSCC 2006 把 LOFIC 与电压、电流混合读出结合，演示约 200 dB 的免光圈传感器（约）。",
    "The same group showed at ISSCC 2006 an iris-less sensor combining LOFIC with hybrid voltage and current readout, about 200 dB (approx.).",
    [
     2
    ]
   ],
   [
    2019,
    "proto",
    "东北大学做出 2.8 µm 背照式 LOFIC 像素：满阱 120 ke-、转换增益 160 µV/e-，纯单次曝光超过 100 dB，证明 LOFIC 能缩到 BSI 小像素。",
    "Tohoku built a 2.8 µm BSI LOFIC pixel with 120 ke- full well and 160 µV/e- conversion gain, exceeding 100 dB in pure single exposure and showing LOFIC can shrink to small BSI pixels.",
    [
     3
    ]
   ],
   [
    2020,
    "proto",
    "Fujihara、Sugawa 等做出两级 LOFIC 原型，满阱 11.4 Me-，单次曝光线性响应超过 120 dB，各切换点 SNR 都高于 35 dB（EI 2020，IEEE TED 2021）。",
    "Fujihara, Sugawa et al. built a two-stage LOFIC prototype with 11.4 Me- full well, over 120 dB linear single-exposure range and SNR above 35 dB at every switch point (EI 2020, IEEE TED 2021).",
    [
     4
    ]
   ],
   [
    2023,
    "paper",
    "Samsung 在 IISW 2023 发表 2.1 µm 全深 DTI 车载传感器：大光电二极管高转换增益加小光电二极管溢出到像素内存储电容，85 °C 下单次曝光 120 dB，溢出容量 210 ke-。",
    "Samsung presented at IISW 2023 a 2.1 µm full-depth-DTI automotive sensor: high-CG large photodiode plus a small photodiode overflowing into in-pixel storage capacitors, 120 dB single exposure at 85 °C with 210 ke- overflow capacity.",
    [
     5
    ]
   ],
   [
    2023,
    "mass",
    "OmniVision 于 2023 年 9 月 AutoSens 发布 TheiaCel 与 OX08D10：800 万像素、2.1 µm，LOFIC 结合 DCG 与分裂二极管，单次曝光 HDR 并消除 LED 闪烁；当时已送样，量产定在 2024 年下半年。",
    "OmniVision unveiled TheiaCel and the OX08D10 at AutoSens in September 2023: 8 MP, 2.1 µm, LOFIC combined with DCG and split diode for single-exposure HDR without LED flicker; samples were available then and mass production was slated for 2H 2024.",
    [
     6,
     7
    ]
   ],
   [
    2024,
    "ver",
    "LOFIC 首次进入手机：OmniVision 1 英寸 OV50K40 用于 Honor Magic6 至臻版 / RSR（Magic6 Pro 用的是 OV50H），主打高光不溢出（约）。",
    "LOFIC reached phones: OmniVision's 1-inch OV50K40 shipped in the Honor Magic6 Ultimate / RSR (the Magic6 Pro used the OV50H), aimed at keeping highlights from clipping (approx.).",
    [
     8
    ]
   ],
   [
    2024,
    "rival",
    "同期主流对手仍是多帧或交错曝光 HDR（DOL / staggered）和分裂像素 HDR；前者有运动伪影，后者小像素满阱吃亏，这正是 LOFIC 的卖点。",
    "Rivals were still multi-frame or staggered-exposure HDR and split-pixel HDR; the first suffers motion artifacts and the second loses full well at small pitch, which is LOFIC's selling point.",
    [
     6
    ]
   ],
   [
    2026,
    "ver",
    "Sony 2026 年 3 月发布安防用 IMX908：1/2.8 英寸 840 万像素，1.45 µm LOFIC 像素，单次曝光 96 dB，饱和电荷约为前代 IMX778 的 20 倍。",
    "In March 2026 Sony announced the IMX908 for security: 1/2.8-inch, 8.4 MP, 1.45 µm LOFIC pixels, 96 dB single exposure and about 20x the saturation charge of the earlier IMX778.",
    [
     9
    ]
   ],
   [
    2026,
    "ver",
    "Sony 2026 年 6 月发布首款手机 LOFIC 传感器 LYTIA L910：1/1.28 英寸 5000 万像素，单次曝光 100 dB（约 16.6 档），配合三档转换增益 TCG-HDR，夏季量产，首批用于 vivo X500 与 OPPO Find X10（约）。",
    "In June 2026 Sony announced its first phone LOFIC sensor, the LYTIA L910: 1/1.28-inch, 50 MP, 100 dB single exposure (about 16.6 stops) with triple-conversion-gain TCG-HDR, mass production in summer, first in the vivo X500 and OPPO Find X10 (approx.).",
    [
     10,
     11
    ]
   ]
  ],
  "now": [
   "正在快速变成主流：车载 OX08D10 / OX03H10、安防 IMX908、手机 OV50K40 与 LYTIA L910 都已采用。",
   "Fast becoming mainstream: automotive OX08D10 / OX03H10, security IMX908 and phone OV50K40 and LYTIA L910 all use it."
  ],
  "replaced": [
   "仍在上升期；可能的接班是 LOFIC 与多档转换增益、像素级堆叠电容（把大电容放到下层晶圆）的组合。",
   "Still rising; likely successors combine LOFIC with multi-step conversion gain and pixel-level stacked capacitors placed on a lower wafer."
  ],
  "refs": [
   {
    "t": "Sugawa 等 ISSCC 2005 LOFIC 论文条目",
    "u": "https://search.isc.ac/inventory/49/1672147.htm"
   },
   {
    "t": "Akahane 等 JSSC 2006 论文条目",
    "u": "https://search.isc.ac/Inventory/49/880368.htm"
   },
   {
    "t": "Akahane 等 ISSCC 2006（dblp）",
    "u": "https://dblp.uni-trier.de/rec/conf/isscc/AkahaneRAMS06.html"
   },
   {
    "t": "2.8 µm BSI LOFIC 像素（Sensors 2019）",
    "u": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6960954/"
   },
   {
    "t": "两级 LOFIC 120 dB（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2020/12/2-stage-lofic-sensor-with-120db-dr.html"
   },
   {
    "t": "Samsung IISW 2023 车载 120 dB 单次曝光",
    "u": "https://imagesensors.org/Past%20Workshops/2023%20Workshop/2023%20Papers/R43.pdf"
   },
   {
    "t": "OmniVision TheiaCel 与 OX08D10 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-technology-and-automotive-image-sensor-for-led-flicker-free-exterior-cameras/"
   },
   {
    "t": "OmniVision TheiaCel 白皮书",
    "u": "https://www.ovt.com/wp-content/uploads/2023/09/A-New-Era-for-Single-Exposure-HDR-TheiaCel.pdf"
   },
   {
    "t": "Honor Magic6 至臻版 / RSR 用 OV50K（GSMArena）",
    "u": "https://m.gsmarena.com/newscomm-61966p2.php"
   },
   {
    "t": "Sony IMX908 1.45 µm LOFIC 安防传感器",
    "u": "https://www.prnewswire.com/news-releases/sony-semiconductor-solutions-to-release-4k-image-sensor-for-security-cameras-with-the-industrys-smallest-1-45-m-lofic-pixels-302712065.html"
   },
   {
    "t": "Sony LYTIA L910（PetaPixel）",
    "u": "https://petapixel.com/2026/06/22/sonys-first-lofic-image-sensor-promises-nearly-17-stops-of-dynamic-range/"
   },
   {
    "t": "LYTIA L910 首发机型（GSMArena）",
    "u": "https://www.gsmarena.com/newsdetail.php3?idNews=73318"
   }
  ]
 },
 "dcg": {
  "stages": [
   [
    2003,
    "idea",
    "Micron 的 Howard Rhodes 与 Sungkwon Hong 申请双转换增益专利：浮动扩散节点上用晶体管接入一个电容，在高、低两档转换增益间切换（2006 年授权，后归 Aptina）。",
    "Micron's Howard Rhodes and Sungkwon Hong filed the dual-conversion-gain patent: a transistor switches a capacitor onto the floating diffusion to toggle between high and low conversion gain (granted 2006, later assigned to Aptina).",
    [
     0
    ]
   ],
   [
    2009,
    "corp",
    "Aptina 发布安防用 MT9M033 高清传感器，宣传采用其专利双转换增益技术（约）。",
    "Aptina announced the MT9M033 HD sensor for surveillance, marketed with its patented dual conversion gain (approx.).",
    [
     1
    ]
   ],
   [
    2010,
    "mass",
    "Aptina 推出 DR-Pix：同一像素在 LCG 模式下大满阱、HCG 模式下低读出噪声；车载 MT9M024（120 万像素、HDR 超过 115 dB）2010 年 11 月发布，2011 年第三季度量产。",
    "Aptina launched DR-Pix: LCG mode for large charge capacity and HCG mode for low read noise in the same pixel; the automotive MT9M024 (1.2 MP, over 115 dB HDR) was announced in November 2010 for production in Q3 2011.",
    [
     2,
     3
    ]
   ],
   [
    2010,
    "rival",
    "同期另一条路是列级双增益读出，例如 ARRI Alexa 的双增益架构，把同一信号用两个放大器读两遍，不改像素（约）。",
    "A parallel route was column-level dual-gain readout, such as ARRI Alexa's dual gain architecture, reading the same signal through two amplifiers without changing the pixel (approx.).",
    []
   ],
   [
    2014,
    "ver",
    "Panasonic VariCam 35 把 DCG 做成电影机的双原生 ISO 800 / 5000，每个像素内置 ISO 切换电路，此后成为电影机和无反相机的常见卖点。",
    "Panasonic's VariCam 35 turned DCG into dual native ISO 800 / 5000 for cinema, with an ISO switch in every pixel; it then became a common selling point for cinema and mirrorless cameras.",
    [
     4
    ]
   ],
   [
    2019,
    "ver",
    "Samsung ISOCELL Bright GW1（6400 万像素）带 Smart-ISO 双转换增益，按场景亮度在两档原生 ISO 间切换，下半年用于 Redmi Note 8 Pro 等手机（场景间切换，不是同帧 HDR）。",
    "Samsung's 64 MP ISOCELL Bright GW1 shipped Smart-ISO dual conversion gain, switching between two native ISOs by scene brightness, in phones such as the Redmi Note 8 Pro in 2H 2019 (inter-scene, not same-frame HDR).",
    [
     5
    ]
   ],
   [
    2019,
    "paper",
    "OmniVision 的 Solhusvik 等在 IISW 2019 发表首个把分裂二极管与 DCG 读出合在一起的 2.8 µm 像素：大光电二极管分别以 HCG、LCG 读出，加小光电二极管，共三路采样，噪声底 0.8 e-，同时做 HDR 和 LED 防闪烁。",
    "OmniVision's Solhusvik et al. presented at IISW 2019 the first 2.8 µm pixel combining split diode with DCG readout: the large photodiode read at both HCG and LCG plus the small photodiode, three captures, 0.8 e- noise floor, giving HDR with LED flicker mitigation.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "OmniVision OX03C10 把 Deep Well、DCG 与分裂像素合在 3.0 µm 像素上，四路采样实现 140 dB HDR 和 LED 防闪烁，用于车载环视。",
    "OmniVision's OX03C10 combined Deep Well, DCG and split pixel in a 3.0 µm pixel, with four captures for 140 dB HDR and LED flicker mitigation in automotive viewing cameras.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "Samsung ISOCELL GN2（5000 万像素、1.4 µm）带 Smart ISO Pro，即同帧双转换增益 iDCG：一次曝光同时读出高、低两档增益合成 HDR。",
    "Samsung's ISOCELL GN2 (50 MP, 1.4 µm) introduced Smart ISO Pro, an intra-scene DCG that reads high and low gain from the same exposure and merges them into HDR.",
    [
     8
    ]
   ],
   [
    2023,
    "rival",
    "LOFIC 开始量产：OmniVision TheiaCel 在 DCG 之上再加横向溢出电容，单次曝光动态范围超过单纯 DCG，二者多为叠加而非替代。",
    "LOFIC entered production: OmniVision's TheiaCel adds a lateral overflow capacitor on top of DCG, reaching wider single-exposure range than DCG alone; the two are mostly stacked rather than substituted.",
    [
     9
    ]
   ],
   [
    2026,
    "ver",
    "Sony LYTIA L910 采用三档转换增益 TCG-HDR，配合 LOFIC 单次曝光 100 dB，DCG 从两档扩展到三档。",
    "Sony's LYTIA L910 uses triple-conversion-gain TCG-HDR with LOFIC for 100 dB single exposure, extending DCG from two steps to three.",
    [
     10
    ]
   ]
  ],
  "now": [
   "主流：几乎所有新款手机、车载、安防和相机传感器都内置 DCG，代表有 ISOCELL GN2、OX03C10 和各类双原生 ISO 相机。",
   "Mainstream: almost every new phone, automotive, security and camera sensor has DCG, e.g. ISOCELL GN2, OX03C10 and dual-native-ISO cameras."
  ],
  "replaced": [
   "不会被单独替代，而是被叠加：三档转换增益 TCG 和 LOFIC 在它之上继续扩展动态范围。",
   "Not replaced so much as built upon: triple conversion gain and LOFIC extend dynamic range on top of it."
  ],
  "refs": [
   {
    "t": "Micron 双转换增益专利 US7075049",
    "u": "https://patents.google.com/patent/US7075049"
   },
   {
    "t": "Aptina MT9M033（Design News）",
    "u": "https://www.designnews.com/industry/aptina-imaging-corp-s-mt9m033"
   },
   {
    "t": "Aptina DR-Pix 白皮书",
    "u": "https://www.photonstophotos.net/Aptina/DR-Pix_WhitePaper.pdf"
   },
   {
    "t": "Aptina 车载 115 dB HDR 传感器发布（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2010/11/aptina-announces-12mp-115db-hdr.html"
   },
   {
    "t": "VariCam 35 双原生 ISO 原理（Newsshooter）",
    "u": "https://www.newsshooter.com/2014/11/28/panasonic-varicam-native-iso-of-800-and-5000-how-do-they-do-it/"
   },
   {
    "t": "Samsung ISOCELL Bright GW1 发布",
    "u": "https://news.samsung.com/global/samsung-to-bring-industrys-highest-resolution-for-mobile-cameras-with-new-64mp-isocell-image-sensor"
   },
   {
    "t": "Solhusvik 等 IISW 2019 DCG 加分裂像素",
    "u": "https://imagesensors.org/Past%20Workshops/2019%20Workshop/2019%20Papers/R32.pdf"
   },
   {
    "t": "OmniVision OX03C10 140 dB 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-launches-worlds-first-image-sensor-for-automotive-viewing-cameras-with-140-db-hdr-and-top-led-flicker-mitigation-performance"
   },
   {
    "t": "Samsung ISOCELL GN2 发布",
    "u": "https://news.samsung.com/us/samsung-introduces-isocell-gn2-faster-true-to-life-auto-focusing/"
   },
   {
    "t": "OmniVision TheiaCel 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-technology-and-automotive-image-sensor-for-led-flicker-free-exterior-cameras/"
   },
   {
    "t": "Sony LYTIA L910 TCG-HDR（PetaPixel）",
    "u": "https://petapixel.com/2026/06/22/sonys-first-lofic-image-sensor-promises-nearly-17-stops-of-dynamic-range/"
   }
  ]
 },
 "lfm": {
  "stages": [
   [
    2003,
    "idea",
    "Fujifilm SuperCCD SR 在每个感光点放一大一小两个光电二极管（S 像素高灵敏、R 像素低灵敏），动态范围约为前代 4 倍，是后来分裂像素 HDR 的思路源头。",
    "Fujifilm's SuperCCD SR put a large and a small photodiode in each site (high-sensitivity S and low-sensitivity R pixels) for about 4x the dynamic range, the conceptual ancestor of split-pixel HDR.",
    [
     0
    ]
   ],
   [
    2015,
    "paper",
    "OmniVision 的 Willassen 等在 IISW 2015 发表 4.2 µm 分裂二极管 BSI HDR 传感器：长短两路可以重叠曝光，减轻运动和脉冲光源（LED）带来的伪影。",
    "OmniVision's Willassen et al. presented at IISW 2015 a 4.2 µm split-diode BSI HDR sensor whose large and small diodes expose concurrently, reducing artifacts from motion and pulsed light sources such as LEDs.",
    [
     1
    ]
   ],
   [
    2017,
    "mass",
    "Sony 2017 年 4 月发布车载 IMX390：245 万像素，业界首个同时支持 LED 防闪烁和 HDR，单独 HDR 120 dB、两者同时开启 110 dB；5 月送样，2018 年 3 月量产出货。",
    "Sony announced the automotive IMX390 in April 2017: 2.45 MP, the industry's first to run LED flicker mitigation and HDR together, 120 dB HDR or 110 dB with LFM on; samples in May 2017 and volume shipments from March 2018.",
    [
     2
    ]
   ],
   [
    2017,
    "rival",
    "同年 5 月 OmniVision 推出 OX01A10 / OX02A10，用 4.2 µm 分裂像素做 HDR 与 LED 防闪烁；另一些厂商用多次短曝光切片（chopping）来覆盖 LED 脉冲。",
    "In May 2017 OmniVision launched the OX01A10 / OX02A10 with 4.2 µm split pixels for HDR and LFM; others used chopped multiple short exposures to cover LED pulses.",
    [
     3
    ]
   ],
   [
    2018,
    "paper",
    "Sony 的 Iida 等在 IEDM 2018 发表子像素结构 CMOS 传感器：随机噪声 0.68 e-rms、动态范围 121 dB，同时具备 LED 防闪烁（约）。",
    "Sony's Iida et al. presented at IEDM 2018 a sub-pixel CMOS sensor with 0.68 e-rms noise, 121 dB dynamic range and LED flicker mitigation (approx.).",
    []
   ],
   [
    2019,
    "paper",
    "OmniVision 在 IISW 2019 发表 2.8 µm 分裂像素加 DCG，三路采样同时做 HDR 和 LED 防闪烁，是当时最小的分裂二极管像素。",
    "OmniVision presented at IISW 2019 a 2.8 µm split pixel with DCG, three captures for HDR plus LFM, the smallest split-diode pixel reported then.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "OmniVision OX03C10：3.0 µm 分裂像素、四路采样，140 dB HDR，号称当时 LED 防闪烁最好的车载环视传感器。",
    "OmniVision's OX03C10: 3.0 µm split pixel with four captures, 140 dB HDR, billed as the best LFM viewing-camera sensor at the time.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Samsung 首款车载传感器 ISOCELL Auto 4AC 用 CornerPixel：3.0 µm 大像素角上放一个 1.0 µm 小像素，120 dB HDR 并支持 LED 防闪烁。",
    "Samsung's first automotive sensor, the ISOCELL Auto 4AC, used CornerPixel: a 1.0 µm small pixel at the corner of a 3.0 µm large one, 120 dB HDR with LFM.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "OmniVision OX08D10 用 TheiaCel：LOFIC 加分裂二极管，800 万像素 2.1 µm，单次曝光完成 HDR 和 LED 防闪烁，可看清约 200 米外。",
    "OmniVision's OX08D10 used TheiaCel, LOFIC plus split diode, 8 MP at 2.1 µm, doing HDR and LFM in a single exposure out to about 200 m.",
    [
     7
    ]
   ],
   [
    2023,
    "ver",
    "Sony IMX735：1742 万像素车载传感器，HDR 与 LED 防闪烁同开时 106 dB，动态范围优先模式 130 dB。",
    "Sony's IMX735: a 17.42 MP automotive sensor, 106 dB with HDR and LFM together, 130 dB in dynamic-range-priority mode.",
    [
     8
    ]
   ],
   [
    2025,
    "ver",
    "Sony IMX828：1/1.7 英寸 800 万像素，内置 MIPI A-PHY，LED 防闪烁下 120 dB、动态范围优先 150 dB，2025 年 11 月送样。",
    "Sony's IMX828: 1/1.7-inch, 8 MP with built-in MIPI A-PHY, 120 dB with LFM or 150 dB in range-priority mode, sampling from November 2025.",
    [
     9
    ]
   ]
  ],
  "now": [
   "车载标配：前视、环视和电子后视镜传感器基本都带 LED 防闪烁，代表有 IMX390、OX03C10、OX08D10、IMX735。",
   "Standard in automotive: front, surround and mirror-replacement sensors almost all have LFM, e.g. IMX390, OX03C10, OX08D10, IMX735."
  ],
  "replaced": [
   "实现方式正从分裂像素和多次切片曝光转向 LOFIC 单次曝光（TheiaCel 一类），像素可以更小、满阱更大。",
   "The implementation is shifting from split pixels and chopped exposures to LOFIC single exposure (TheiaCel style), allowing smaller pixels with larger full well."
  ],
  "refs": [
   {
    "t": "Fujifilm FinePix F700 与 SuperCCD SR（DPReview）",
    "u": "https://www.dpreview.com/articles/5614787510/finepixf700"
   },
   {
    "t": "Willassen 等 IISW 2015 分裂二极管 HDR",
    "u": "https://imagesensors.org/Past%20Workshops/2015%20Workshop/2015%20Papers/13-01_Willassen.pdf"
   },
   {
    "t": "Sony IMX390 发布（2017-04-12）",
    "u": "https://sony.mediaroom.com/2017-04-12-Sony-Commercializes-the-Industrys-First-1-Automotive-2MP-High-Sensitivity-CMOS-Image-Sensor-with-LED-Flicker-mitigation-and-HDR"
   },
   {
    "t": "OmniVision 车载 LED 防闪烁技术说明",
    "u": "https://www.ovt.com/led-flicker-mitigation-automotive-applications"
   },
   {
    "t": "Solhusvik 等 IISW 2019 DCG 加分裂像素",
    "u": "https://imagesensors.org/Past%20Workshops/2019%20Workshop/2019%20Papers/R32.pdf"
   },
   {
    "t": "OmniVision OX03C10 140 dB 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-launches-worlds-first-image-sensor-for-automotive-viewing-cameras-with-140-db-hdr-and-top-led-flicker-mitigation-performance"
   },
   {
    "t": "Samsung ISOCELL Auto 4AC 发布",
    "u": "https://news.samsung.com/global/samsung-introduces-its-first-isocell-image-sensor-tailored-for-automotive-applications"
   },
   {
    "t": "OmniVision TheiaCel 与 OX08D10 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-technology-and-automotive-image-sensor-for-led-flicker-free-exterior-cameras/"
   },
   {
    "t": "Sony IMX735 发布（2023-09-12）",
    "u": "https://sony.mediaroom.com/2023-09-12-Sony-Semiconductor-Solutions-to-Release-CMOS-Image-Sensor-for-Automotive-Cameras-with-Industry-Leading-17-42-Effective-Megapixels"
   },
   {
    "t": "Sony IMX828 发布（2025-10-27）",
    "u": "https://sony.mediaroom.com/2025-10-27-Sony-Semiconductor-Solutions-to-Release-Industrys-First-CMOS-Image-Sensor-for-Automotive-Applications-with-Built-in-MIPI-A-PHY-Interface"
   }
  ]
 },
 "twolayer": {
  "stages": [
   [
    2012,
    "idea",
    "Sony 2012 年推出首款堆叠式 CMOS Exmor RS（IMX135 等）：像素层叠在逻辑电路晶圆上。这是两层晶体管像素的前身，当时像素晶体管仍和光电二极管挤在同一层。",
    "Sony launched the first stacked CMOS, Exmor RS (IMX135 and others), in 2012 with the pixel layer on a logic wafer; this was the precursor, though pixel transistors still shared a layer with the photodiodes.",
    [
     0
    ]
   ],
   [
    2021,
    "paper",
    "Sony 的 Nakazawa 等在 IEDM 2021 发表《3D Sequential Process Integration for CMOS Image Sensor》：用耐热晶圆键合和深接触孔，把像素晶体管叠到光电二极管上方，做出 0.7 µm、6752 × 4928 的 BSI 样片。",
    "Sony's Nakazawa et al. presented 3D Sequential Process Integration for CMOS Image Sensor at IEDM 2021: thermally stable wafer bonding and deep contacts put pixel transistors above the photodiodes, demonstrated on a 0.7 µm, 6752 x 4928 BSI chip.",
    [
     1
    ]
   ],
   [
    2021,
    "corp",
    "Sony 2021 年 12 月宣布全球首个两层晶体管像素堆叠 CMOS 技术：光电二极管层与像素晶体管层分开，饱和信号约翻倍，放大管可以做大以降低暗光噪声。",
    "In December 2021 Sony announced the world's first 2-layer transistor pixel stacked CMOS: photodiodes and pixel transistors on separate layers, roughly doubling saturation signal and allowing a larger amplifier transistor for lower low-light noise.",
    [
     2
    ]
   ],
   [
    2022,
    "paper",
    "Sony 2022 年初进一步公开工艺细节：顺序三维集成，光电二极管层只放传输门，复位、放大、选择管移到上层（约）。",
    "In early 2022 Sony disclosed more process detail: sequential 3D integration with only the transfer gate on the photodiode layer and reset, amplifier and select transistors moved to the upper layer (approx.).",
    [
     3
    ]
   ],
   [
    2023,
    "mass",
    "Xperia 1 V（2023 年 5 月）首发 Exmor T for mobile：1/1.35 英寸，有效约 4800 万像素、1.12 µm（宣传 5200 万为总像素），带 OctaPD 双光电二极管对焦；TechInsights 拆解确认为两层晶体管像素。",
    "The Xperia 1 V (May 2023) debuted Exmor T for mobile: 1/1.35-inch, about 48 MP effective at 1.12 µm (the 52 MP figure counts total pixels), with OctaPD dual-photodiode AF; TechInsights teardown confirmed the 2-layer transistor pixel.",
    [
     4,
     5,
     6
    ]
   ],
   [
    2023,
    "paper",
    "Sony 在 IISW 2023 报告两层晶体管像素的演进，做到 0.6 µm 像素，借埋入式局部连线兼顾高满阱和低噪声。",
    "At IISW 2023 Sony reported the evolution of the 2-layer pixel down to 0.6 µm, using buried sub-local connections to keep high full well and low noise.",
    [
     7
    ]
   ],
   [
    2023,
    "rival",
    "对手的路线：Samsung ISOCELL HP2 用双垂直传输门 D-VTG 把小像素满阱提高约 33%，其余厂商主攻三层晶圆堆叠和像素级铜铜键合，而不是把像素晶体管单独做一层（约）。",
    "Rivals took other paths: Samsung's ISOCELL HP2 used a dual vertical transfer gate (D-VTG) for about 33% more full well, while others pursued three-wafer stacking and pixel-level Cu-Cu bonding rather than a separate pixel-transistor layer (approx.).",
    [
     8
    ]
   ],
   [
    2024,
    "ver",
    "Sony 把这类传感器归入 LYTIA 品牌（型号前带 T，如 LYT-T808），Xperia 1 VI 等后续机型继续使用 1/1.35 英寸 Exmor T（约）。",
    "Sony folded these sensors into the LYTIA brand with a T prefix (such as LYT-T808), and later phones like the Xperia 1 VI kept the 1/1.35-inch Exmor T (approx.).",
    [
     9
    ]
   ]
  ],
  "now": [
   "小众：量产只见 Sony 自家 Xperia 1 V 起的旗舰，其他手机厂商基本没有采用。",
   "Niche: in production only in Sony's own Xperia flagships from the 1 V onward; other phone makers have largely not adopted it."
  ],
  "replaced": [
   "尚未被替代；同样为扩满阱，行业更多押注 LOFIC 和多档转换增益，长期看可能与像素级多层堆叠（电容放下层）合流。",
   "Not yet replaced; for full-well gains the industry is betting more on LOFIC and multi-step conversion gain, and it may merge with multi-layer pixel-level stacking that puts capacitors on a lower layer."
  ],
  "refs": [
   {
    "t": "Sony Exmor RS 堆叠式 CMOS（2012，phys.org）",
    "u": "https://phys.org/news/2012-08-sony-exmor-rs-world-stacked.html"
   },
   {
    "t": "Nakazawa 等 IEDM 2021（DOI）",
    "u": "https://doi.org/10.1109/IEDM19574.2021.9720563"
   },
   {
    "t": "Sony 两层晶体管像素发布（2021-12）",
    "u": "https://www.sony.eu/presscentre/sony-develops-worlds-first-stacked-cmos-image-sensor-technology-with-2-layer-transistor-pixel"
   },
   {
    "t": "Sony 解释两层像素工艺（PetaPixel）",
    "u": "https://petapixel.com/2022/02/16/sony-further-explains-the-tech-behind-its-groundbreaking-new-sensor"
   },
   {
    "t": "Sony Xperia 1 V 发布",
    "u": "https://www.sony.eu/presscentre/sony-launches-new-xperia-1-v-smartphone"
   },
   {
    "t": "TechInsights Xperia 1 V 传感器分析",
    "u": "https://www.techinsights.com/ja/node/52156"
   },
   {
    "t": "TechInsights 两层晶体管像素演进",
    "u": "https://www.techinsights.com/ja/node/52294"
   },
   {
    "t": "Sony IISW 2023 0.6 µm 两层像素",
    "u": "https://imagesensors.org/Past%20Workshops/2023%20Workshop/2023%20Papers/R12.pdf"
   },
   {
    "t": "Samsung ISOCELL HP2（PetaPixel）",
    "u": "https://petapixel.com/tag/samsungisocellhp1/"
   },
   {
    "t": "Sony LYT-T808 参数（helpix）",
    "u": "https://helpix.ru/isensor/sony_lytia-t808/"
   }
  ]
 },
 "quad": {
  "stages": [
   [
    2008,
    "idea",
    "Fujifilm Super CCD EXR 把同色像素成对相邻排列，暗处两两合并提高灵敏度，亮处可做双灵敏度宽容度，是同色小像素合并思路的早期例子（约）。",
    "Fujifilm's Super CCD EXR placed same-color pixels in adjacent pairs, binning them in low light or using them for dual sensitivity, an early example of same-color pixel binning (approx.).",
    [
     0
    ]
   ],
   [
    2017,
    "corp",
    "Sony 安防用 IMX294CJK（4/3 英寸、1071 万像素）采用 Quad Bayer 排列，并用 Quad Bayer Coding HDR 在同一帧里让 2 × 2 同色像素用不同曝光，减少运动伪影。",
    "Sony's security IMX294CJK (4/3-inch, 10.71 MP) used a Quad Bayer layout with Quad Bayer Coding HDR, giving 2 x 2 same-color pixels different exposures in one frame to reduce motion artifacts.",
    [
     1
    ]
   ],
   [
    2017,
    "rival",
    "Samsung 2017 年 10 月发布 ISOCELL Slim 2X7：2400 万像素、首个低于 1 µm 的 0.9 µm 像素，用 Tetracell 四合一；TechInsights 在 Vivo V7+ 前置摄像头里发现了它。",
    "In October 2017 Samsung announced the ISOCELL Slim 2X7: 24 MP with the first sub-1 µm (0.9 µm) pixels and Tetracell 4-in-1 binning; TechInsights found it in the Vivo V7+ front camera.",
    [
     2,
     3
    ]
   ],
   [
    2018,
    "mass",
    "Huawei P20 Pro（2018 年 3 月）主摄 1/1.7 英寸 4000 万像素 Quad Bayer（Sony IMX600），默认 2 × 2 合并输出 1000 万像素，是首个用于主摄的四合一传感器。",
    "The Huawei P20 Pro (March 2018) used a 1/1.7-inch 40 MP Quad Bayer main sensor (Sony IMX600), binning 2 x 2 to 10 MP by default, the first 4-in-1 sensor used as a main camera.",
    [
     4
    ]
   ],
   [
    2018,
    "ver",
    "Sony 2018 年 7 月发布 IMX586：4800 万像素、0.8 µm 像素，合并后相当于 1.6 µm 的 1200 万像素，2019 年铺满中高端手机。",
    "Sony announced the IMX586 in July 2018: 48 MP with 0.8 µm pixels, equivalent to a 1.6 µm 12 MP sensor when binned; it spread across mid- and high-end phones in 2019.",
    [
     5
    ]
   ],
   [
    2019,
    "paper",
    "Sony 的 Okawa 等在 IEDM 2019 发表 1/2 英寸 4800 万像素 Quad Bayer Coding 加 2 × 2 共用微透镜（2 × 2 OCL），实现全像素相位对焦，最低对焦照度 1 lux。",
    "Sony's Okawa et al. presented at IEDM 2019 a 1/2-inch 48 MP Quad Bayer Coding sensor with 2 x 2 on-chip lenses (2 x 2 OCL) giving all-pixel PDAF down to 1 lux.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Samsung ISOCELL Bright HM1（2020 年 2 月，Galaxy S20 Ultra）：1/1.33 英寸 1.08 亿像素、0.8 µm，Nonacell 九合一，等效 2.4 µm 大像素。",
    "Samsung's ISOCELL Bright HM1 (February 2020, Galaxy S20 Ultra): 1/1.33-inch, 108 MP at 0.8 µm, Nonacell 9-in-1 binning equivalent to 2.4 µm pixels.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "Samsung 2021 年 9 月发布 ISOCELL HP1：2 亿像素、0.64 µm，ChameleonCell 可在 2 × 2、4 × 4 和全像素之间切换，2022 年随 Moto X30 Pro / Edge 30 Ultra 上市。",
    "In September 2021 Samsung announced the ISOCELL HP1: 200 MP at 0.64 µm, ChameleonCell switching among 2 x 2, 4 x 4 and full resolution; it shipped in 2022 in the Moto X30 Pro / Edge 30 Ultra.",
    [
     8
    ]
   ],
   [
    2022,
    "ver",
    "Samsung ISOCELL HP3 把像素缩到 0.56 µm，可四合一出 5000 万像素或十六合一出 1250 万像素；同年 DJI Mini 3 Pro 用 1/1.3 英寸 4800 万四合一传感器合并成 1200 万，四合一进入无人机。",
    "Samsung's ISOCELL HP3 shrank pixels to 0.56 µm, binning 4-in-1 to 50 MP or 16-in-1 to 12.5 MP; the same year the DJI Mini 3 Pro brought a 1/1.3-inch 48 MP quad sensor binned to 12 MP to drones.",
    [
     9,
     10
    ]
   ],
   [
    2025,
    "ver",
    "Sony 发布首款 2 亿像素 LYTIA 901：1/1.12 英寸、0.7 µm，采用 Quad-Quad Bayer Coding（QQBC，4 × 4 同色），2026 年首发于 vivo 旗舰。",
    "Sony launched its first 200 MP sensor, the LYTIA 901: 1/1.12-inch, 0.7 µm, with Quad-Quad Bayer Coding (QQBC, 4 x 4 same color), debuting in vivo's 2026 flagships.",
    [
     11
    ]
   ],
   [
    2025,
    "end",
    "在相机和全画幅领域四合一基本没有扩散，大底传感器仍用标准 Bayer 加更大的单像素；手机上大像素 5000 万主摄（如 LYTIA 系列）也回到 2 × 2 OCL 或标准四合一而非继续加像素（约）。",
    "4-in-1 never spread to large-sensor cameras, which still use standard Bayer with bigger pixels; on phones, large-pixel 50 MP main sensors stopped at 2 x 2 OCL or plain quad binning instead of chasing pixel count (approx.).",
    []
   ]
  ],
  "now": [
   "手机、无人机、运动相机等小底设备的主流；2 亿像素十六合一（ISOCELL HP 系列、LYTIA 901）是当前顶点。",
   "Mainstream in small-sensor devices such as phones, drones and action cameras; 200 MP 16-in-1 (ISOCELL HP series, LYTIA 901) is the current peak."
  ],
  "replaced": [
   "仍是主流；接班方向是 2 × 2 OCL 全像素对焦、AI 重马赛克，以及 LOFIC 单次曝光 HDR 与之结合，而不是继续堆像素数。",
   "Still mainstream; the next steps are 2 x 2 OCL all-pixel AF, AI remosaicing and pairing with LOFIC single-exposure HDR rather than adding more pixels."
  ],
  "refs": [
   {
    "t": "Super CCD（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Super_CCD"
   },
   {
    "t": "Sony IMX294 4/3 英寸 Quad Bayer 安防传感器",
    "u": "https://www.fierceelectronics.com/components/sony-launches-4-3-cmos-sensor-for-4k-surveillance"
   },
   {
    "t": "Samsung ISOCELL Slim 2X7 Tetracell 发布",
    "u": "https://news.samsung.com/us/samsungs-new-image-sensors-bring-fast-slim-attributes-mobile-iot-applications"
   },
   {
    "t": "TechInsights 在 Vivo V7+ 发现 2X7",
    "u": "https://techinsights.com/blog/samsung-s5k2x7sp-09-mm-image-sensor"
   },
   {
    "t": "P20 Pro 三摄技术解析（GSMArena）",
    "u": "https://m.gsmarena.com/explaining_huawei_p20_pros_triple_camera-amp-30497.php"
   },
   {
    "t": "Sony IMX586 发布（GSMArena）",
    "u": "https://www.gsmarena.com/sony_introduces_imx586_sensor_with_48_mp-news-32367.php"
   },
   {
    "t": "Okawa 等 IEDM 2019 2x2 OCL（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2019/12/iedm-2019-sony-48mp-all-pixel-pdaf.html"
   },
   {
    "t": "Samsung ISOCELL Bright HM1 发布",
    "u": "https://news.samsung.com/global/samsungs-108mp-isocell-bright-hm1-delivers-brighter-ultra-high-res-images-with-industry-first-nonacell-technology"
   },
   {
    "t": "Samsung ISOCELL HP1 发布（GSMArena）",
    "u": "https://www.gsmarena.com/samsung_unveils_flagship_200mp_isocell_hp1_50mp_isocell_gn5_-news-50775.php"
   },
   {
    "t": "Samsung ISOCELL HP3 0.56 µm（GSMArena）",
    "u": "https://www.gsmarena.com/samsung_introduces_new_200_mp_sensor__isocell_hp3_with_smallest_ever_pixels-news-54776.php"
   },
   {
    "t": "DJI Mini 3 Pro 发布",
    "u": "https://www.mynewsdesk.com/uk/dji/pressreleases/dji-mini-3-pro-redefines-what-a-sub-249g-camera-drone-can-do-3181137"
   },
   {
    "t": "Sony LYTIA 901 2 亿像素（TechInsights）",
    "u": "https://www.techinsights.com/blog/sony-launches-first-200mp-smartphone-sensor-lytia-901"
   }
  ]
 },
 "bsi": {
  "stages": [
   [
    1974,
    "idea",
    "Texas Instruments 的 Shortes 等人在 Applied Physics Letters 发表减薄背照 CCD：把 500×1 线阵 CCD 磨到 30 µm 以下，光从背面进、绕开多晶硅栅极。",
    "Shortes et al. at Texas Instruments reported thinned back-illuminated CCD imagers in Applied Physics Letters: a 500x1 CCD thinned below 30 um, lit from the back to avoid the poly gates.",
    [
     0
    ]
   ],
   [
    1990,
    "ver",
    "（约）1990 年代起，SITe / Tektronix、e2v 等的减薄背照 CCD 成为天文和科学相机标配，量子效率可达 90% 左右，代价是工艺难、良率低、价格高。",
    "(approx.) From the 1990s thinned back-illuminated CCDs from SITe/Tektronix, e2v and others became standard in astronomy and scientific cameras, reaching around 90% QE at the cost of hard processing, low yield and high price.",
    [
     0
    ]
   ],
   [
    2005,
    "proto",
    "MIT Lincoln Laboratory 在 ISSCC 2005 展示 1024×1024、8 µm 像素的 3D 集成背照成像器：全填充因子光电二极管层键合到 SOI CMOS 读出层。",
    "MIT Lincoln Laboratory showed a 1024x1024, 8 um pixel 3D-integrated back-illuminated imager at ISSCC 2005, bonding a 100% fill-factor photodiode tier to an SOI CMOS readout tier.",
    [
     1
    ]
   ],
   [
    2006,
    "paper",
    "Sony 的 Iwabuchi 等人在 ISSCC 2006 发表《A back-illuminated high-sensitivity small-pixel color CMOS image sensor with flexible layout of metal wiring》，把背照搬到彩色小像素 CMOS 上。",
    "Iwabuchi et al. (Sony) presented a back-illuminated high-sensitivity small-pixel color CMOS image sensor with flexible metal wiring layout at ISSCC 2006, bringing BSI to small-pixel color CMOS.",
    [
     2
    ]
   ],
   [
    2008,
    "corp",
    "2008 年 5 月 OmniVision 联合 TSMC 发布 OmniBSI 架构，9 月推出 1/3 英寸 8 MP、1.4 µm 的 OV8810；6 月 Sony 发布 Exmor R 技术，样片为 5 MP、1.75 µm、60 fps。",
    "In May 2008 OmniVision, with TSMC, launched the OmniBSI architecture and in September the 1/3-inch 8 MP 1.4 um OV8810; in June 2008 Sony unveiled Exmor R with a 5 MP 1.75 um 60 fps prototype.",
    [
     3,
     4,
     5
    ]
   ],
   [
    2009,
    "mass",
    "Sony 把 Exmor R 背照 CMOS 首先装进 2009 年的 Handycam 摄像机（HDR-XR520V / CX520V 等），同年进入 Cyber-shot 卡片机，成为首个量产消费级背照 CMOS。",
    "Sony first shipped Exmor R BSI CMOS in its 2009 Handycam camcorders (HDR-XR520V / CX520V etc.) and Cyber-shot compacts the same year, the first mass-produced consumer BSI CMOS.",
    [
     5,
     6
    ]
   ],
   [
    2010,
    "ver",
    "背照进入手机：iPhone 4 主摄采用 OmniVision 5 MP 背照传感器（OV5650，约），之后 1.4 µm 及以下手机像素几乎全部转向 BSI。",
    "BSI reached phones: the iPhone 4 main camera used a 5 MP OmniVision BSI sensor (OV5650, approx.), and soon nearly all phone pixels at 1.4 um and below moved to BSI.",
    [
     3
    ]
   ],
   [
    2010,
    "rival",
    "当时的竞争方案是前照式 FSI 加光导管（light pipe）和更薄金属层，大像素（如 APS-C / 全画幅）仍坚持 FSI 多年，因为大像素背照收益小、成本高。",
    "The competing approach was front-side illumination with light pipes and thinner metal stacks; large-pixel APS-C and full-frame sensors stayed FSI for years because BSI gave little gain there at higher cost.",
    [
     2
    ]
   ],
   [
    2013,
    "ver",
    "背照成为堆栈式的前提：Sony Exmor RS 把背照像素晶圆直接键合到逻辑晶圆上，背照从工艺选项变成标准底座。",
    "BSI became the foundation for stacking: Sony Exmor RS bonded the BSI pixel wafer directly onto a logic wafer, turning BSI from an option into the default base.",
    [
     7
    ]
   ],
   [
    2015,
    "ver",
    "Sony α7R II 搭载全球首款背照 35 mm 全画幅传感器（42.4 MP），同年 STARVIS（IMX290 / 291）把背照带进安防监控。",
    "The Sony a7R II carried the first back-illuminated 35 mm full-frame sensor (42.4 MP), and the same year STARVIS (IMX290/291) brought BSI to security cameras.",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "背照与堆栈、Cu-Cu、DTI 叠加成为手机、相机、车载、工业传感器的通用结构；Sony 2-Layer Transistor Pixel 进一步把光电二极管与像素晶体管分层。",
    "BSI combined with stacking, Cu-Cu and DTI became the universal structure for phone, camera, auto and industrial sensors; Sony's 2-Layer Transistor Pixel further split photodiodes from pixel transistors.",
    [
     9
    ]
   ]
  ],
  "now": [
   "绝对主流：几乎所有手机、无反相机、安防和车载 CMOS 都是背照，例如 Sony IMX / LYTIA、Samsung ISOCELL、OmniVision OmniBSI 系列。",
   "Dominant: almost every phone, mirrorless, security and automotive CMOS is back-illuminated, e.g. Sony IMX/LYTIA, Samsung ISOCELL and OmniVision OmniBSI families."
  ],
  "replaced": [
   "没有被替代，而是被吸收进堆栈式结构；后续演进方向是多层像素（2-Layer Transistor Pixel）和背面光学结构（DTI、超构表面）。",
   "Not replaced but absorbed into stacked sensors; next steps are multi-layer pixels (2-Layer Transistor Pixel) and back-side optics (DTI, metasurfaces)."
  ],
  "refs": [
   {
    "t": "Shortes 1974 背照 CCD（APL）",
    "u": "https://ui.adsabs.harvard.edu/abs/1974ApPhL..24..565S/abstract"
   },
   {
    "t": "MIT LL ISSCC 2005 3D 集成成像器",
    "u": "https://www.ll.mit.edu/r-d/publications/megapixel-cmos-image-sensor-fabricated-three-dimensional-integrated-circuit"
   },
   {
    "t": "Iwabuchi ISSCC 2006（dblp）",
    "u": "https://dblp1.uni-trier.de/rec/conf/isscc/IwabuchiMOMKH06.html"
   },
   {
    "t": "OmniVision OmniBSI 发布新闻稿",
    "u": "https://www.ovt.com/press-releases/omnivision-turns-digital-imaging-world-upside-down/"
   },
   {
    "t": "OmniVision OV8810 新闻稿",
    "u": "https://www.ovt.com/press-releases/omnivision-premieres-worlds-first-1-3-inch-8-megapixel-camerachip-sensor-with-1-4-micron-omnibsi-technology/"
   },
   {
    "t": "Sony Exmor R 2008 发布（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2008/06/sony-announced-175um-bsi-pixel.html"
   },
   {
    "t": "Sony 2009 背照卡片机（phys.org）",
    "u": "https://phys.org/news/2009-08-sony-debuts-digital-camera-back-illuminated.pdf"
   },
   {
    "t": "Sukegawa ISSCC 2013 堆栈式（ITE 报告）",
    "u": "https://www.jstage.jst.go.jp/article/itetr/37.19/0/37.19_31/_article/-char/en"
   },
   {
    "t": "Sony α7R II 新闻稿",
    "u": "https://sony.mediaroom.com/2015-06-10-Sonys-New-a7R-II-Camera-Delivers-Innovative-Imaging-Experience-with-Worlds-First-Back-Illuminated-35mm-Full-Frame-Sensor"
   },
   {
    "t": "Sony 2-Layer Transistor Pixel 新闻稿",
    "u": "https://www.sony.eu/presscentre/sony-develops-worlds-first-stacked-cmos-image-sensor-technology-with-2-layer-transistor-pixel"
   }
  ]
 },
 "stack": {
  "stages": [
   [
    2005,
    "idea",
    "MIT Lincoln Laboratory 在 ISSCC 2005 发表 3D 集成百万像素成像器：氧化物键合加每像素 2 µm 3D via，证明像素层与读出层可以分晶圆制造再叠起来。",
    "MIT Lincoln Laboratory's ISSCC 2005 megapixel imager used oxide bonding and a 2 um 3D via per pixel, showing pixel and readout tiers could be built on separate wafers and stacked.",
    [
     0
    ]
   ],
   [
    2012,
    "corp",
    "2012 年 1 月 Sony 宣布开发出堆栈式 CMOS：背照像素芯片叠在 65 nm 逻辑芯片上，用 TSV 连接，命名 Exmor RS。",
    "In January 2012 Sony announced a stacked CMOS: a BSI pixel chip on a 65 nm logic chip connected by TSVs, branded Exmor RS.",
    [
     1
    ]
   ],
   [
    2013,
    "paper",
    "Sony 的 Sukegawa 等人在 ISSCC 2013 发表 1/4 英寸 8 MP、1.12 µm 背照堆栈 CMOS：芯片面积比 90 nm 单片缩小 30%，逻辑规模从 50 万门增到 240 万门。",
    "Sukegawa et al. (Sony) presented a 1/4-inch 8 MP 1.12 um back-illuminated stacked CMOS at ISSCC 2013: 30% smaller than the 90 nm monolithic chip, logic rising from 500k to 2.4M gates.",
    [
     2,
     3
    ]
   ],
   [
    2013,
    "mass",
    "首批量产堆栈式传感器 IMX135（13 MP）随 Sony Xperia Z 于 2013 年初上市，同期 ISX014（8 MP、1.12 µm）也已出货。",
    "The first mass-produced stacked sensor IMX135 (13 MP) shipped in the Sony Xperia Z in early 2013, alongside the 8 MP 1.12 um ISX014.",
    [
     1,
     4
    ]
   ],
   [
    2013,
    "rival",
    "Olympus 在 ISSCC 2013 展示用微凸点（micro-bump）逐像素连接的 3D 堆栈全局快门传感器（约），代表另一条路线：凸点而非 TSV。",
    "Olympus showed a 3D-stacked global-shutter sensor with per-pixel micro-bumps at ISSCC 2013 (approx.), an alternative route using bumps instead of TSVs.",
    [
     5
    ]
   ],
   [
    2015,
    "rival",
    "OmniVision / TSMC 的 PureCel-S（如 OV23850）和 Samsung 堆栈 ISOCELL（如 S5K3M2）在 2015 年进入手机，堆栈不再是 Sony 独有。",
    "OmniVision/TSMC PureCel-S (e.g. OV23850) and Samsung stacked ISOCELL (e.g. S5K3M2) entered phones in 2015, ending Sony's exclusivity.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "堆栈式进相机：RX100 IV / RX10 II 的 1 英寸 20 MP 堆栈传感器（带 DRAM）上市。",
    "Stacking reached cameras: the 1-inch 20 MP stacked sensor (with DRAM) in the RX100 IV and RX10 II.",
    [
     6
    ]
   ],
   [
    2016,
    "ver",
    "连接方式从 TSV 换成 Cu-Cu 混合键合：Galaxy S7 里的 Sony IMX260 首次用 DBI 把像素芯片面对面键合到 ISP 芯片。",
    "The interconnect moved from TSVs to Cu-Cu hybrid bonding: the Sony IMX260 in the Galaxy S7 was the first to bond the pixel die face to face to the ISP die using DBI.",
    [
     7
    ]
   ],
   [
    2017,
    "ver",
    "Sony α9 搭载 24.2 MP 全画幅堆栈传感器（带集成内存），实现 20 fps 无黑屏连拍，堆栈进入全画幅。",
    "The Sony a9 used a 24.2 MP full-frame stacked sensor with integral memory for 20 fps blackout-free shooting, bringing stacking to full frame.",
    [
     8
    ]
   ],
   [
    2018,
    "ver",
    "Sony IMX490 车载传感器（5.4 MP、120 dB HDR、LED 闪烁抑制）采用堆栈结构，2020 年 Pregius S 把背照堆栈带进工业全局快门。",
    "Sony's automotive IMX490 (5.4 MP, 120 dB HDR, LED flicker mitigation) used a stacked design, and Pregius S in 2020 brought BSI stacking to industrial global-shutter sensors.",
    [
     9,
     10
    ]
   ],
   [
    2021,
    "ver",
    "Sony 在 IEDM 2021 发布 2-Layer Transistor Pixel：光电二极管和像素晶体管再分两层，饱和信号约翻倍，2023 年随 Xperia 1 V 量产。",
    "At IEDM 2021 Sony unveiled the 2-Layer Transistor Pixel, splitting photodiodes and pixel transistors onto separate layers for about double the saturation signal; it shipped in the Xperia 1 V in 2023.",
    [
     11
    ]
   ]
  ],
  "now": [
   "主流：中高端手机、旗舰无反（Sony α1 / α9 系列等）、车载和工业传感器普遍采用背照堆栈。",
   "Mainstream: mid- to high-end phones, flagship mirrorless (Sony a1/a9 series etc.), automotive and industrial sensors widely use BSI stacking."
  ],
  "replaced": [
   "没有被替代，而是向更多层演进：三层（DRAM、像素晶体管层）和像素级 Cu-Cu 连接是接班方向。",
   "Not replaced but extended to more layers: three-layer stacks (DRAM or pixel-transistor tiers) and pixel-level Cu-Cu links are the successors."
  ],
  "refs": [
   {
    "t": "MIT LL ISSCC 2005 3D 集成成像器",
    "u": "https://www.ll.mit.edu/r-d/publications/megapixel-cmos-image-sensor-fabricated-three-dimensional-integrated-circuit"
   },
   {
    "t": "Sony 公布 TSV 堆栈 CMOS（radiolocman）",
    "u": "https://www.radiolocman.com/news/new.html?di=148107"
   },
   {
    "t": "Sukegawa ISSCC 2013（ITE 报告）",
    "u": "https://www.jstage.jst.go.jp/article/itetr/37.19/0/37.19_31/_article/-char/en"
   },
   {
    "t": "ISSCC 2013 图像传感器论文（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2012/11/image-sensors-at-isscc-2013.html"
   },
   {
    "t": "TechInsights 手机成像技术综述 第 3 部分",
    "u": "https://www.techinsights.com/blog/survey-enabling-technologies-successful-consumer-digital-imaging-products-part-3-pixel"
   },
   {
    "t": "ISSCC 2013 论文列表（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2012/11/image-sensors-at-isscc-2013.html?m=1"
   },
   {
    "t": "RX100 IV 三层堆栈传感器（Digital Trends）",
    "u": "https://digitaltrends.com/photography/sony-rx100-iv-rx10-ii-news-specs"
   },
   {
    "t": "Sony IMX260 在 Galaxy S7（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2016/03/sony-imx260-in-samsung-galaxy-s7.html"
   },
   {
    "t": "Sony α9 发布（Sony 新闻）",
    "u": "https://sony.mediaroom.com/"
   },
   {
    "t": "Sony 半导体 车载传感器产品页",
    "u": "https://www.sony-semicon.com/en/products/is/automotive/automotive.html"
   },
   {
    "t": "Sony Pregius S 技术页",
    "u": "https://www.sony-semicon.com/en/technology/industry/pregius.html"
   },
   {
    "t": "Sony 2-Layer Transistor Pixel 新闻稿",
    "u": "https://www.sony.eu/presscentre/sony-develops-worlds-first-stacked-cmos-image-sensor-technology-with-2-layer-transistor-pixel"
   }
  ]
 },
 "dram": {
  "stages": [
   [
    2012,
    "idea",
    "（约）堆栈式一出现，业界就设想在像素与逻辑之间再插一层存储，用于高速缓冲和抑制果冻效应；当时 DRAM 与 CMOS 逻辑工艺不兼容，只能分晶圆制造再叠。",
    "(approx.) As soon as stacking appeared the industry proposed inserting a memory tier between pixels and logic for high-speed buffering and less rolling-shutter skew; since DRAM and logic processes differ, it had to be a separate wafer.",
    [
     0
    ]
   ],
   [
    2015,
    "mass",
    "Sony RX100 IV 与 RX10 II（2015 年 6 月）的 1 英寸 20.1 MP Exmor RS 宣称为像素、信号处理、DRAM 三层结构，实现 960 fps 高帧率和防果冻读出。",
    "The 1-inch 20.1 MP Exmor RS in the Sony RX100 IV and RX10 II (June 2015) was marketed as a pixel / signal-processing / DRAM three-layer structure, enabling 960 fps and fast readout.",
    [
     1,
     2
    ]
   ],
   [
    2017,
    "paper",
    "Sony 的 Haruta 等人在 ISSCC 2017 发表 1/2.3 英寸 20 MP 三层堆栈 CMOS：90 nm 背照像素层、30 nm DRAM 中间层、40 nm 逻辑底层，用 TSV 互连（作者为约）。",
    "Haruta et al. (Sony, author approx.) presented a 1/2.3-inch 20 MP three-layer stacked CMOS at ISSCC 2017: a 90 nm BSI pixel tier, 30 nm DRAM middle tier and 40 nm logic bottom tier, linked by TSVs.",
    [
     3,
     4
    ]
   ],
   [
    2017,
    "ver",
    "IMX400（Exmor RS 第四代）在 Xperia XZs / XZ Premium 量产，手机首次实现 960 fps 超级慢动作；TechInsights 拆解确认 DRAM 芯片夹在 ISP 与像素芯片之间。",
    "The IMX400 (fourth-generation Exmor RS) shipped in the Xperia XZs / XZ Premium, giving phones their first 960 fps super slow motion; TechInsights teardowns confirmed the DRAM die sandwiched between ISP and pixel dies.",
    [
     4,
     5
    ]
   ],
   [
    2017,
    "ver",
    "Sony α9 的全画幅堆栈传感器带集成内存，读出速度约为前代 20 倍，实现 20 fps 无黑屏连拍（内存是否为独立 DRAM 层为约）。",
    "The Sony a9 full-frame stacked sensor had integral memory and roughly 20x faster readout, enabling 20 fps blackout-free shooting (whether it is a separate DRAM tier is approx.).",
    [
     6
    ]
   ],
   [
    2018,
    "rival",
    "Samsung 在 MWC 2018 发布 ISOCELL Fast 2L3（S5K2L3）：12 MP 三层堆栈，模拟逻辑层下方附 2 Gb LPDDR4 DRAM，用于 Galaxy S9 的 960 fps。",
    "At MWC 2018 Samsung announced the ISOCELL Fast 2L3 (S5K2L3): a 12 MP three-stack with 2 Gb LPDDR4 DRAM under the logic layer, used for 960 fps in the Galaxy S9.",
    [
     7
    ]
   ],
   [
    2019,
    "rival",
    "（约）竞争路线：不加 DRAM 层，而是在逻辑层里做大容量 SRAM / 帧缓存，或干脆做全局快门（Sony Pregius S、α9 III），从根上消除果冻效应。",
    "(approx.) Rival routes skipped the DRAM tier, using large SRAM frame buffers in the logic tier, or went straight to global shutter (Sony Pregius S, a9 III) to remove rolling-shutter skew entirely.",
    [
     8
    ]
   ],
   [
    2021,
    "end",
    "（约）960 fps 慢动作在手机上热度下降，带 DRAM 的三层堆栈在后续旗舰机中越来越少；高速读出转而依靠更快的 ADC 与逻辑层缓存。",
    "(approx.) As 960 fps slow motion lost appeal on phones, DRAM three-layer stacks became rarer in later flagships; fast readout increasingly relied on faster ADCs and logic-tier buffering.",
    [
     8
    ]
   ]
  ],
  "now": [
   "小众：主要见于 Sony 1 英寸卡片机（RX100 IV 之后各代）与少量高速传感器；手机端 2017 到 2019 年后逐渐少见（约）。",
   "Niche: mainly in Sony 1-inch compacts (RX100 IV onwards) and some high-speed sensors; on phones it became uncommon after about 2017 to 2019 (approx.)."
  ],
  "replaced": [
   "正被全局快门传感器和逻辑层内大缓存取代；多层堆栈的第三层更多用来放像素晶体管（2-Layer Transistor Pixel）。",
   "Being replaced by global-shutter sensors and large on-logic buffers; the third tier of multi-layer stacks is increasingly used for pixel transistors (2-Layer Transistor Pixel)."
  ],
  "refs": [
   {
    "t": "Sony 公布 TSV 堆栈 CMOS（radiolocman）",
    "u": "https://www.radiolocman.com/news/new.html?di=148107"
   },
   {
    "t": "RX100 IV / RX10 II 发布（Digital Trends）",
    "u": "https://digitaltrends.com/photography/sony-rx100-iv-rx10-ii-news-specs"
   },
   {
    "t": "Sony RX 系列技术解读",
    "u": "https://www.sony-asia.com/microsite/discover-rx/technology-article1.html"
   },
   {
    "t": "Sony 在图像传感器中嵌入 DRAM（EE Times Asia）",
    "u": "https://www.eetasia.com/sony-embeds-dram-in-image-sensors/"
   },
   {
    "t": "TechInsights IMX400 三层堆栈拆解",
    "u": "https://www.techinsights.com/blog/sony-imx400-3-layer-stacked-exmor-rs-cmos-image-sensor"
   },
   {
    "t": "Sony 手机三层堆栈传感器（Digital Trends）",
    "u": "https://digitaltrends.com/photography/sony-stacked-smartphone-sensor"
   },
   {
    "t": "Sony α9 发布（Sony 新闻）",
    "u": "https://sony.mediaroom.com/"
   },
   {
    "t": "Samsung ISOCELL Fast 2L3 新闻稿",
    "u": "https://news.samsung.com/global/samsungs-newest-isocell-image-sensor-enables-mobile-devices-to-slow-down-time"
   },
   {
    "t": "Sony Pregius S 技术页",
    "u": "https://www.sony-semicon.com/en/technology/industry/pregius.html"
   }
  ]
 },
 "cucu": {
  "stages": [
   [
    2000,
    "idea",
    "Ziptronix 于 2000 年 10 月从 Research Triangle Institute 分拆成立，拥有室温氧化物直接键合（ZiBond）专利，为后来的混合键合打底。",
    "Ziptronix spun out of Research Triangle Institute in October 2000 with room-temperature oxide direct bonding (ZiBond) patents, the basis for later hybrid bonding.",
    [
     0
    ]
   ],
   [
    2005,
    "proto",
    "2005 年 Ziptronix 宣布首次成功实现 DBI（Direct Bond Interconnect）：在氧化物直接键合的同时让嵌在其中的金属焊盘形成电连接（约）。",
    "In 2005 Ziptronix announced the first successful DBI (Direct Bond Interconnect), forming metal pad connections at the same time as the oxide direct bond (approx.).",
    [
     0,
     1
    ]
   ],
   [
    2011,
    "corp",
    "Sony 在 2011 年授权 Ziptronix 的 ZiBond 直接键合专利，用于背照与堆栈传感器的晶圆键合。",
    "Sony licensed Ziptronix ZiBond direct bonding patents in 2011 for wafer bonding of BSI and stacked sensors.",
    [
     2,
     3
    ]
   ],
   [
    2013,
    "rival",
    "当时的对手方案是 TSV：Sony 第一代堆栈（IMX135，2013）在像素阵列外围用 TSV 连接两片晶圆，占用面积且间距大；Olympus 等则尝试微凸点。",
    "The rival was TSVs: Sony's first stacks (IMX135, 2013) linked wafers with TSVs around the array, costing area at large pitch; Olympus and others tried micro-bumps.",
    [
     4
    ]
   ],
   [
    2015,
    "corp",
    "2015 年 3 月 Sony 再授权 Ziptronix DBI 混合键合用于先进图像传感器；同年 8 月 Tessera 以约 3900 万美元收购 Ziptronix（后归 Invensas / Xperi / Adeia）。",
    "In March 2015 Sony licensed Ziptronix DBI hybrid bonding for advanced image sensors; in August 2015 Tessera bought Ziptronix for about 39 million USD (later Invensas / Xperi / Adeia).",
    [
     2,
     3
    ]
   ],
   [
    2016,
    "mass",
    "Galaxy S7 中的 Sony IMX260（12 MP、1.4 µm）是首个量产的 Cu-Cu 混合键合芯片，像素芯片面对面键合到 ISP 芯片，Sony 称 2016 年 1 月开始量产；第一代键合间距约 6 µm。",
    "The Sony IMX260 (12 MP, 1.4 um) in the Galaxy S7 was the first mass-produced Cu-Cu hybrid-bonded chip, pixel die face to face with the ISP die; Sony dates volume production to January 2016, at about 6 um bond pitch.",
    [
     5,
     6,
     7
    ]
   ],
   [
    2016,
    "paper",
    "Sony 的 Kagawa 等人在 IEDM 2016 发表《Novel stacked CMOS image sensor with advanced Cu2Cu hybrid bonding》，说明 Cu-Cu 连接可放在像素阵列下方。",
    "Kagawa et al. (Sony) presented Novel stacked CMOS image sensor with advanced Cu2Cu hybrid bonding at IEDM 2016, showing Cu-Cu links can sit under the pixel array.",
    [
     8
    ]
   ],
   [
    2018,
    "ver",
    "Sony 在 ISSCC 2018 发布 1.46 MP 背照全局快门传感器：每个 6.9 µm 像素都通过 Cu-Cu 连到下层的独立 14 bit ADC，660 fps，实现像素级连接。",
    "At ISSCC 2018 Sony showed a 1.46 MP BSI global-shutter sensor where every 6.9 um pixel connects through Cu-Cu to its own 14-bit ADC below, at 660 fps: pixel-level bonding.",
    [
     9
    ]
   ],
   [
    2019,
    "ver",
    "（约）Sony 0.8 µm 像素一代把混合键合间距缩到 3.1 µm，TechInsights 称为图像传感器纪录；Kagawa 等人另展示 1 µm 间距 Cu-Cu 键合研究，约为常规的三分之一。",
    "(approx.) Sony's 0.8 um pixel generation shrank hybrid bond pitch to 3.1 um, called a record by TechInsights; Kagawa et al. also demonstrated 1 um pitch Cu-Cu research, about a third of the conventional pitch.",
    [
     10,
     11
    ]
   ],
   [
    2021,
    "ver",
    "像素级 Cu-Cu 推广到 SPAD 测距（如 Sony 车载 SPAD 深度传感器，约）和多层堆栈；Samsung、OmniVision 也相继在图像传感器上采用混合键合（年份为约）。",
    "Pixel-level Cu-Cu spread to SPAD depth sensors (e.g. Sony automotive SPAD, approx.) and multi-layer stacks; Samsung and OmniVision also adopted hybrid bonding in image sensors (years approx.).",
    [
     10,
     12
    ]
   ]
  ],
  "now": [
   "主流：Sony、Samsung、OmniVision 的中高端堆栈传感器基本都用 Cu-Cu 混合键合，同一技术也正进入 HBM 与先进逻辑封装。",
   "Mainstream: mid- to high-end stacked sensors from Sony, Samsung and OmniVision mostly use Cu-Cu hybrid bonding, and the same technique is entering HBM and advanced logic packaging."
  ],
  "replaced": [
   "仍在演进：方向是亚微米间距、芯片对晶圆（CoW）混合键合和三层以上像素级连接，暂无替代者。",
   "Still evolving: toward sub-micron pitch, chip-on-wafer hybrid bonding and pixel-level links across three or more tiers; no replacement in sight."
  ],
  "refs": [
   {
    "t": "Ziptronix 早期历史（Solid State Technology）",
    "u": "https://sst.semiconductor-digest.com/?p=24967"
   },
   {
    "t": "Ziptronix 3D 互连新闻（Design and Reuse）",
    "u": "https://www.design-reuse.com/news/11646/ziptronix-revolutionizes-chip-interconnect-dimensional-integrated-circuits.html"
   },
   {
    "t": "Ziptronix 向 Sony 授权 DBI（Vision Systems Design）",
    "u": "https://www.vision-systems.com/cameras-accessories/article/16740306/ziptronix-licenses-new-direct-bonding-patents-to-sony-for-advanced-image-sensors"
   },
   {
    "t": "Tessera 收购 Ziptronix（Electronics360）",
    "u": "https://electronics360.globalspec.com/article/5669/tessera-acquires-ziptronix-for-39-million"
   },
   {
    "t": "Sukegawa ISSCC 2013 TSV 堆栈（ITE 报告）",
    "u": "https://www.jstage.jst.go.jp/article/itetr/37.19/0/37.19_31/_article/-char/en"
   },
   {
    "t": "IFTLE 303：Sony 在 Galaxy S7 引入 DBI",
    "u": "https://sst.semiconductor-digest.com/insights-from-leading-edge/2016/09/iftle-303-sony-introduces-ziptronix-dbi-technology-in-samsung-galaxy-s7"
   },
   {
    "t": "TechInsights Galaxy S7 edge 拆解",
    "u": "https://www.techinsights.com/blog/samsung-galaxy-s7-edge-teardown"
   },
   {
    "t": "Sony IMX260 在 Galaxy S7（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2016/03/sony-imx260-in-samsung-galaxy-s7.html"
   },
   {
    "t": "堆栈 CIS 3D 集成综述（IEEE Xplore）",
    "u": "https://ieeexplore.ieee.org/document/9058895"
   },
   {
    "t": "Sony 像素并行 ADC 全局快门（ISSCC 2018）",
    "u": "https://www.the-digital-picture.com/News/Sony-Develops-a-Back-Illuminated-CMOS-Image-Sensor-with-Global-Shutter-Function"
   },
   {
    "t": "TechInsights 手机成像器四部曲",
    "u": "https://techinsights.com/ja/node/30438"
   },
   {
    "t": "手机 CIS 工艺综述（arXiv 2306.05339）",
    "u": "https://arxiv.org/pdf/2306.05339"
   },
   {
    "t": "TechInsights：Samsung 首款混合键合成像器",
    "u": "https://www.techinsights.com/blog/samsung-unveils-first-imager-featuring-hybrid-bond-technology"
   }
  ]
 },
 "dti": {
  "stages": [
   [
    1985,
    "idea",
    "（约）深沟槽隔离（trench isolation）最早来自 1980 年代的 DRAM 沟槽电容与双极 / CMOS 器件隔离，后被借用到像素间做电学和光学隔离。",
    "(approx.) Deep trench isolation originated in 1980s DRAM trench capacitors and bipolar/CMOS device isolation, later borrowed to isolate pixels electrically and optically.",
    [
     0
    ]
   ],
   [
    2010,
    "proto",
    "TechInsights 报告最早在 STMicroelectronics 的 5 MP、1.4 µm 背照芯片中发现 DTI，采用 SOI 晶圆上从正面挖的 F-DTI（TechInsights 文中年份与所称产品有出入，为约）。",
    "TechInsights reports the first DTI in back-illuminated CIS in a STMicroelectronics 5 MP 1.4 um chip, a front-side F-DTI on SOI wafers (the year and product named in that text conflict, approx.).",
    [
     1
    ]
   ],
   [
    2011,
    "paper",
    "STMicroelectronics 的 Tournier 等人在 IISW 2011 发表《Pixel-to-pixel isolation by deep trench technology: application to CMOS image sensor》。",
    "Tournier et al. (STMicroelectronics) presented Pixel-to-pixel isolation by deep trench technology: application to CMOS image sensor at IISW 2011.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 9 月 Samsung 发布 ISOCELL 像素技术，在像素间加物理隔离墙，首款 S5K4H5YB（8 MP、1.12 µm、1/4 英寸）计划 2013 年第四季度量产。",
    "In September 2013 Samsung announced ISOCELL pixel technology with physical barriers between pixels; the first chip S5K4H5YB (8 MP, 1.12 um, 1/4-inch) was slated for Q4 2013 mass production.",
    [
     3,
     4
    ]
   ],
   [
    2013,
    "rival",
    "同年 Sony 在 Cyber-shot HX300 的 IMX147（20 MP、1.2 µm）里用了浅的 B-DTI：从背面挖约 0.3 µm、填钨；另一条路线是靠离子注入隔离和背面金属格栅防串色。",
    "The same year Sony used a shallow B-DTI in the IMX147 (20 MP, 1.2 um) of the Cyber-shot HX300, about 0.3 um deep from the back and tungsten-filled; the other route relied on implant isolation and back-side metal grids.",
    [
     1
    ]
   ],
   [
    2015,
    "ver",
    "Sony 改用更深、介质填充的 B-DTI；Samsung 1.12 µm 芯片出现 1.3 µm 深的 B-DTI（硅厚 2.6 µm）；Galaxy S7 的 IMX260 B-DTI 约 1.9 µm 深。",
    "Sony moved to deeper dielectric-filled B-DTI; Samsung 1.12 um chips showed 1.3 um deep B-DTI in 2.6 um silicon; the IMX260 in the Galaxy S7 had about 1.9 um deep B-DTI.",
    [
     1
    ]
   ],
   [
    2016,
    "ver",
    "Samsung 在 1.0 µm 像素（如 Galaxy A8 的 S5K3P3SX）采用全深度 F-DTI；OmniVision PureCel Plus-S（OV16880，TSMC 代工）用 0.45 µm 深、填钨的局部 B-DTI。",
    "Samsung used full-depth F-DTI for 1.0 um pixels (e.g. S5K3P3SX in the Galaxy A8); OmniVision PureCel Plus-S (OV16880, made by TSMC) used a 0.45 um deep tungsten-filled partial B-DTI.",
    [
     1
    ]
   ],
   [
    2017,
    "ver",
    "OmniVision Nyxel（首款 OS05A20）把 DTI 与厚硅结合，提高 850 / 940 nm 近红外量子效率，面向安防和车载夜视。",
    "OmniVision Nyxel (first chip OS05A20) combined DTI with thick silicon to raise 850/940 nm near-infrared QE for security and automotive night vision.",
    [
     5
    ]
   ],
   [
    2018,
    "ver",
    "Samsung ISOCELL Plus 用 Fujifilm 开发的新材料取代像素间的金属隔离墙，减少光学损耗与反射，感光度提升约 15%。",
    "Samsung ISOCELL Plus replaced the metal barrier between pixels with a new Fujifilm-developed material, cutting optical loss and reflection for about 15% more sensitivity.",
    [
     6
    ]
   ],
   [
    2021,
    "ver",
    "（约）0.7 µm 以下像素普遍采用全深度 F-DTI 加多晶硅填充与偏置，Samsung ISOCELL 2.0 和 0.56 µm 像素、Sony / OmniVision 小像素都依赖它。",
    "(approx.) Sub-0.7 um pixels widely use full-depth F-DTI with poly fill and bias; Samsung ISOCELL 2.0, 0.56 um pixels and Sony/OmniVision small pixels all depend on it.",
    [
     7
    ]
   ]
  ],
  "now": [
   "主流：1.4 µm 以下手机像素和近红外安防 / 车载传感器几乎都用 DTI（B-DTI 或全深度 F-DTI），代表有 Samsung ISOCELL、OmniVision Nyxel。",
   "Mainstream: nearly all phone pixels below 1.4 um and NIR security/automotive sensors use DTI (B-DTI or full-depth F-DTI), e.g. Samsung ISOCELL and OmniVision Nyxel."
  ],
  "replaced": [
   "仍是缩像素的必要条件；演进方向是更深更窄的全深度 DTI、像素内分隔（双像素 / 四像素 PDAF）以及配合超构表面的光学隔离。",
   "Still essential for pixel shrink; it is evolving toward deeper and narrower full-depth DTI, in-pixel isolation for dual/quad PDAF, and optical isolation combined with metasurfaces."
  ],
  "refs": [
   {
    "t": "深沟槽隔离像素专利示例",
    "u": "https://patents.google.com/patent/US7534691"
   },
   {
    "t": "TechInsights 手机成像技术综述 第 3 部分（像素）",
    "u": "https://www.techinsights.com/blog/survey-enabling-technologies-successful-consumer-digital-imaging-products-part-3-pixel"
   },
   {
    "t": "IISW 2011 会议程序",
    "u": "https://imagesensors.org/Past%20Workshops/2011%20Workshop/2011%20IISW%20Final%20Program.pdf"
   },
   {
    "t": "Samsung ISOCELL 发布新闻稿",
    "u": "https://news.samsung.com/global/samsung-launches-isocell-innovative-image-sensor-technology-for-premium-mobile-devices"
   },
   {
    "t": "Samsung 公布 ISOCELL 像素（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2013/09/samsung-announces-isocell-pixel.html"
   },
   {
    "t": "OmniVision Nyxel 技术页",
    "u": "https://www.ovt.com/technologies/nyxel-technology/"
   },
   {
    "t": "Samsung ISOCELL Plus 新闻稿",
    "u": "https://news.samsung.com/global/samsung-brings-enhanced-color-accuracy-and-sharpness-to-mobile-photos-with-new-isocell-plus-technology"
   },
   {
    "t": "手机 CIS 工艺综述（arXiv 2306.05339）",
    "u": "https://arxiv.org/pdf/2306.05339"
   }
  ]
 },
 "gs": {
  "stages": [
   [
    1969,
    "idea",
    "（约）CCD 发明后不久，interline transfer CCD 用遮光的垂直移位寄存器把整帧电荷同时转走，成为最早的“全局快门”传感器形态，后来 CMOS 全局快门就是要在像素里复刻这种存储节点。",
    "(approx.) Soon after the CCD's invention, interline-transfer CCDs moved the whole frame's charge at once into shielded vertical registers, the original global shutter that CMOS later had to replicate with in-pixel storage.",
    [
     0
    ]
   ],
   [
    1995,
    "paper",
    "（约）1990 年代 JPL 的 Fossum 团队把 CMOS APS 做成像素内电荷转移结构，随后学界提出在像素里加采样保持电容或存储节点实现 snapshot 曝光；具体首篇论文未能确认，属笼统描述。",
    "(approx.) In the 1990s Fossum's JPL team built CMOS APS with intra-pixel charge transfer, and in-pixel sample-and-hold or storage-node snapshot pixels followed; the very first paper could not be confirmed, so this is generic.",
    [
     0,
     1
    ]
   ],
   [
    2005,
    "mass",
    "Micron 推出 MT9V022：1/3 英寸 752×480、6.0 μm 像素、60 fps，采用自家 TrueSNAP（Shutter Node Active Pixel）全局快门，专为车道偏离、驾驶员疲劳检测等车载应用设计。",
    "Micron launched the MT9V022: 1/3-inch 752x480, 6.0 um pixels, 60 fps, using its TrueSNAP (Shutter Node Active Pixel) global shutter, aimed at automotive lane-departure and driver-drowsiness systems.",
    [
     2
    ]
   ],
   [
    2008,
    "rival",
    "（约）同一时期机器视觉主流仍是 interline CCD（Sony ICX 系列等），CMOS 全局快门的存储节点漏光（PLS）和噪声比 CCD 差，多数相机厂还在观望。",
    "(approx.) Machine vision at the time still relied mostly on interline CCDs such as Sony's ICX line; CMOS global-shutter storage nodes suffered from parasitic light sensitivity and noise worse than CCD.",
    [
     3
    ]
   ],
   [
    2013,
    "ver",
    "Sony 推出 Pregius 第一代，代表型号 IMX174：2.4 MP、1/1.2 英寸、5.86 μm 像素，前照式全局快门，噪声和 PLS 接近 CCD，成为工业相机从 CCD 转 CMOS 的转折点。",
    "Sony introduced first-generation Pregius, e.g. IMX174: 2.4 MP, 1/1.2-inch, 5.86 um pixels, front-illuminated global shutter with CCD-like noise and PLS, the turning point for industrial cameras leaving CCD.",
    [
     3,
     4
    ]
   ],
   [
    2015,
    "end",
    "（约）Sony 宣布逐步停产 CCD，Pregius 系列接替其在机器视觉中的位置，全局快门 CMOS 成为工业相机主流。",
    "(approx.) Sony announced the wind-down of its CCD production, and Pregius took over CCD's role, making global-shutter CMOS the machine-vision mainstream.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "Sony Pregius S（如 IMX530，24 MP、2.74 μm）把背照式和堆栈结构用到全局快门上，QE 约 71.5%，像素间距从 3.45 μm 缩到 2.74 μm。",
    "Sony Pregius S (e.g. IMX530, 24 MP, 2.74 um) brought back-illumination and stacking to global shutter, with about 71.5% QE and pitch shrinking from 3.45 to 2.74 um.",
    [
     4
    ]
   ],
   [
    2020,
    "corp",
    "RED Komodo 6K 采用 19.9 MP Super 35 全局快门 CMOS，6K 40 fps，把全局快门带进商用电影机。",
    "The RED Komodo 6K used a 19.9 MP Super 35 global-shutter CMOS (6K at 40 fps), bringing global shutter into commercial cinema cameras.",
    [
     5
    ]
   ],
   [
    2021,
    "rival",
    "（约）高速堆栈式卷帘快门（如 Sony α1、Nikon Z9 的读出约 1/250 s 级）把果冻效应压到很小，成为全局快门在消费相机上的主要对手，且动态范围更高。",
    "(approx.) Fast stacked rolling shutters (e.g. Sony a1, Nikon Z9, readout around 1/250 s class) shrank skew greatly and offered higher dynamic range, the main rival to global shutter in consumer cameras.",
    [
     6
    ]
   ],
   [
    2023,
    "mass",
    "Sony α9 III 发布：24.6 MP 全画幅堆栈全局快门，120 fps 无黑屏连拍、全速闪光同步、最高 1/80000 s，是首台全画幅全局快门可换镜相机。",
    "Sony a9 III: 24.6 MP full-frame stacked global shutter, 120 fps blackout-free bursts, flash sync at all speeds up to 1/80,000 s, the first full-frame global-shutter interchangeable-lens camera.",
    [
     6
    ]
   ]
  ],
  "now": [
   "工业、车载 DMS 和 AR/VR 追踪里已是主流（Sony Pregius S、onsemi 等），消费相机里仍属小众旗舰（α9 III）。",
   "Mainstream in industrial, automotive DMS and AR/VR tracking (Sony Pregius S, onsemi etc.); still a niche flagship feature in consumer cameras (a9 III)."
  ],
  "replaced": [
   "尚未被替代；可能的接班是像素级 ADC 的数字全局快门和更快的堆栈卷帘快门，二者在消费相机上竞争。",
   "Not replaced; likely successors are digital global shutter with pixel-level ADCs, competing with ever-faster stacked rolling shutters in consumer cameras."
  ],
  "refs": [
   {
    "t": "CCD 与全局快门（维基）",
    "u": "https://en.wikipedia.org/wiki/Charge-coupled_device"
   },
   {
    "t": "Eric Fossum 与 CMOS APS（维基）",
    "u": "https://en.wikipedia.org/wiki/Eric_Fossum"
   },
   {
    "t": "MT9V022 数据手册（onsemi）",
    "u": "https://www.onsemi.com/pdf/datasheet/mt9v022-d.pdf"
   },
   {
    "t": "Sony Pregius 全局快门（Teledyne）",
    "u": "https://www.teledynevisionsolutions.com/learn/learning-center/machine-vision/sony-pregius-global-shutter-cmos/"
   },
   {
    "t": "Sony Pregius S 传感器（Basler）",
    "u": "https://www.baslerweb.com/en/learning/sony-pregius-s-sensors/"
   },
   {
    "t": "RED Komodo 6K 发布（Newsshooter）",
    "u": "https://www.newsshooter.com/2020/10/14/red-komodo-officially-released/"
   },
   {
    "t": "Sony α9 III 全局快门（PetaPixel）",
    "u": "https://petapixel.com/2023/11/07/sony-a9-iii-first-impressions-the-global-shutter-era-has-arrived"
   }
  ]
 },
 "pdaf": {
  "stages": [
   [
    1985,
    "rival",
    "（约）单反用独立的相位对焦模块（反光镜后的副镜加 AF 传感器），Minolta α-7000（1985）普及了机身内相位对焦；无反和卡片机则只能用慢的反差对焦，这是片上 PDAF 要解决的问题。",
    "(approx.) SLRs used a separate phase-detect AF module behind the mirror, popularized by the Minolta a-7000 (1985); mirrorless and compacts had only slow contrast AF, the gap on-sensor PDAF filled.",
    [
     0
    ]
   ],
   [
    2000,
    "idea",
    "（约）2000 年代起多家相机厂（Fujifilm、Nikon、Canon 等）申请专利：在图像传感器上把部分像素半遮光，左右开口的像素对构成相位检测；首个提出者未能确认。",
    "(approx.) From the 2000s several makers (Fujifilm, Nikon, Canon and others) patented half-masked pixel pairs on the image sensor for phase detection; the first proposer could not be confirmed.",
    [
     1
    ]
   ],
   [
    2010,
    "mass",
    "Fujifilm FinePix F300EXR 发布：12 MP Super CCD EXR 上放置相位检测像素对，相机按光线自动在相位与反差对焦之间切换，是首台片上相位对焦的卡片机。注意它是 CCD 不是 CMOS。",
    "Fujifilm FinePix F300EXR: phase-detect pixel pairs on a 12 MP Super CCD EXR, switching automatically between phase and contrast AF, the first compact with on-sensor PDAF. Note it is a CCD, not CMOS.",
    [
     1,
     2
    ]
   ],
   [
    2011,
    "corp",
    "Nikon 1 V1/J1 用 Aptina 的 CMOS 传感器，带 73 点片上相位对焦，是首批具备焦平面相位对焦的可换镜相机。",
    "The Nikon 1 V1/J1 used an Aptina CMOS sensor with 73 on-sensor phase-detect points, among the first interchangeable-lens cameras with focal-plane PDAF.",
    [
     3
    ]
   ],
   [
    2012,
    "ver",
    "Sony NEX-5R 的 Fast Hybrid AF（99 个相位点 + 25 区反差）与 Canon EOS 650D 的 Hybrid CMOS AF 相继推出，片上 PDAF 进入主流无反和单反实时取景。",
    "Sony NEX-5R's Fast Hybrid AF (99 phase points plus 25 contrast areas) and Canon EOS 650D's Hybrid CMOS AF arrived, bringing on-sensor PDAF to mainstream mirrorless and DSLR live view.",
    [
     4,
     5
    ]
   ],
   [
    2014,
    "mass",
    "Galaxy S5（ISOCELL 传感器）和 iPhone 6（“Focus Pixels”）把遮光式 PDAF 带进手机，对焦时间降到约 0.3 s 级。",
    "The Galaxy S5 (ISOCELL sensor) and iPhone 6 (Focus Pixels) brought masked-pixel PDAF to phones, cutting focus time to roughly the 0.3 s class.",
    [
     6
    ]
   ],
   [
    2016,
    "rival",
    "Canon Dual Pixel 与 Galaxy S7 的全像素双核对焦出现：每个像素都能测相位，不再牺牲遮光像素，开始挤压稀疏遮光 PDAF。",
    "Canon Dual Pixel and the Galaxy S7's all-pixel dual-photodiode AF appeared, measuring phase at every pixel without sacrificing masked pixels and squeezing sparse masked PDAF.",
    [
     7
    ]
   ],
   [
    2019,
    "ver",
    "（约）手机传感器改用 2×1 OCL（两个像素共一个微透镜，如 Samsung Super PD）代替遮光，进光不损失，PDAF 像素密度提高。",
    "(approx.) Phone sensors moved to 2x1 OCL (two pixels under one microlens, e.g. Samsung Super PD) instead of metal masks, losing no light and raising PDAF density.",
    [
     8
    ]
   ],
   [
    2022,
    "end",
    "Samsung ISOCELL HP3 的 Super QPD 让 2×2 共用微透镜、全部像素参与上下左右相位检测；遮光式 PDAF 退到中低端传感器。",
    "Samsung ISOCELL HP3's Super QPD put one microlens over 2x2 pixels so all pixels detect phase in both directions; masked PDAF retreated to low and mid-range sensors.",
    [
     8
    ]
   ]
  ],
  "now": [
   "遮光式片上 PDAF 仍大量存在于中低端手机和部分相机（如 Sony、Nikon 无反的稀疏 PDAF 像素），但旗舰已转向全像素方案。",
   "Masked on-sensor PDAF is still common in budget phones and some cameras (sparse PDAF pixels in Sony and Nikon mirrorless), while flagships have moved to all-pixel schemes."
  ],
  "replaced": [
   "正被全像素双核（Dual Pixel）和 2×2 OCL / Super QPD 等共享微透镜方案取代。",
   "Being replaced by all-pixel dual photodiodes (Dual Pixel) and shared-microlens schemes such as 2x2 OCL / Super QPD."
  ],
  "refs": [
   {
    "t": "自动对焦历史（维基）",
    "u": "https://en.wikipedia.org/wiki/Autofocus"
   },
   {
    "t": "Fujifilm 相位检测系统解析（DPReview）",
    "u": "https://www.dpreview.com/articles/2151234617/fujifilmpd"
   },
   {
    "t": "F300EXR 发布（Imaging Resource）",
    "u": "https://imaging-resource.com/NEWS/1279688476.html"
   },
   {
    "t": "Nikon 1 J1/V1 新闻稿",
    "u": "https://www.nikon.com/company/news/2011/0921_digital_01/"
   },
   {
    "t": "Sony NEX-5R 新闻稿",
    "u": "https://sony.mediaroom.com/2012-08-29-New-Sony-NEX-5R-Camera-Delivers-Professional-Imaging-Power-and-Wi-Fi-Convenience-in-Lightweight-Stylish-Package"
   },
   {
    "t": "Canon EOS 650D（维基）",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_650D"
   },
   {
    "t": "iPhone 6 Focus Pixels（维基）",
    "u": "https://en.wikipedia.org/wiki/IPhone_6"
   },
   {
    "t": "Canon Dual Pixel CMOS AF（维基）",
    "u": "https://en.wikipedia.org/wiki/Canon_Dual_Pixel_CMOS_AF"
   },
   {
    "t": "ISOCELL HP3 与 Super QPD（Samsung）",
    "u": "https://news.samsung.com/global/samsung-unveils-isocell-image-sensor-with-industrys-smallest-0-56%ce%bcm-pixel"
   }
  ]
 },
 "dpaf": {
  "stages": [
   [
    2010,
    "idea",
    "（约）把一个像素的光电二极管一分为二、共用一个微透镜，用左右两半的视差做相位检测；Canon 等在 2000 年代末申请相关专利，确切首个提出者未能确认。",
    "(approx.) Splitting each pixel's photodiode in two under one microlens and using the left/right parallax for phase detection; Canon and others filed patents in the late 2000s, the exact originator unconfirmed.",
    [
     0
    ]
   ],
   [
    2013,
    "mass",
    "Canon EOS 70D 首发 Dual Pixel CMOS AF：20.2 MP APS-C，每像素两个光电二极管可分读做对焦、合读成像，实时取景约 80% 画面可相位对焦。",
    "Canon EOS 70D debuted Dual Pixel CMOS AF: 20.2 MP APS-C, two photodiodes per pixel read separately for AF and combined for imaging, covering about 80% of the frame in live view.",
    [
     0,
     1
    ]
   ],
   [
    2014,
    "rival",
    "同期对手是稀疏遮光 PDAF（Sony、Nikon、手机）和反差对焦（Panasonic DFD）；双核方案全像素可用但读出数据量翻倍、制造更难。",
    "Rivals were sparse masked PDAF (Sony, Nikon, phones) and contrast AF (Panasonic DFD); dual pixel covers every pixel but doubles AF readout data and is harder to make.",
    [
     2
    ]
   ],
   [
    2016,
    "mass",
    "Galaxy S7 首个把全像素双核带进手机：12 MP、1.4 μm，分 Sony IMX260 与 Samsung S5K2L1 两个供应版本。",
    "The Galaxy S7 brought all-pixel dual photodiodes to phones: 12 MP, 1.4 um, supplied as either Sony IMX260 or Samsung S5K2L1.",
    [
     3,
     4
    ]
   ],
   [
    2016,
    "ver",
    "Canon EOS 5D Mark IV 引入 Dual Pixel RAW，保存左右两半图像用于后期微调焦点和散景。",
    "The Canon EOS 5D Mark IV introduced Dual Pixel RAW, saving both half-images for post-shot focus and bokeh tweaks.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS R5/R6 的 Dual Pixel CMOS AF II：几乎 100% 画面覆盖，结合深度学习做人眼和动物追踪。",
    "Canon EOS R5/R6 Dual Pixel CMOS AF II: near 100% frame coverage with deep-learning eye and animal tracking.",
    [
     0
    ]
   ],
   [
    2021,
    "ver",
    "（约）Samsung ISOCELL GN2 的 Dual Pixel Pro 把部分像素改为斜向（上下）分割，补足对水平纹理不敏感的问题。",
    "(approx.) Samsung ISOCELL GN2's Dual Pixel Pro split some pixels diagonally (top/bottom) to fix insensitivity to horizontal patterns.",
    [
     5
    ]
   ],
   [
    2022,
    "rival",
    "Samsung ISOCELL HP3 的 Super QPD 和 Sony 2×2 OCL 用一个微透镜盖四个像素，全像素同时检测水平与垂直相位，成为手机高像素传感器的新路线。",
    "Samsung ISOCELL HP3's Super QPD and Sony's 2x2 OCL put one microlens over four pixels for both horizontal and vertical phase at every pixel, the new route for high-res phone sensors.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Canon EOS R1 用新 24.2 MP 堆栈传感器，部分双核像素转向布置，实现全画面十字型（cross-type）相位检测。",
    "The Canon EOS R1's new 24.2 MP stacked sensor reorients some dual-pixel photodiodes for cross-type phase detection across the full frame.",
    [
     7
    ]
   ]
  ],
  "now": [
   "主流：Canon 全线无反、众多手机主摄都用全像素双核或其四分变体。",
   "Mainstream: all of Canon's mirrorless line and many phone main cameras use all-pixel dual photodiodes or quad variants."
  ],
  "replaced": [
   "在手机高像素传感器上正被 2×2 OCL / Super QPD 四像素方案接班；相机端演进为十字型双核。",
   "In high-res phone sensors it is being succeeded by 2x2 OCL / Super QPD quad schemes; in cameras it is evolving into cross-type dual pixel."
  ],
  "refs": [
   {
    "t": "Canon Dual Pixel CMOS AF（维基）",
    "u": "https://en.wikipedia.org/wiki/Canon_Dual_Pixel_CMOS_AF"
   },
   {
    "t": "EOS 70D（Canon 相机博物馆）",
    "u": "https://global.canon/en/c-museum/product/dslr816.html"
   },
   {
    "t": "Canon 70D 评测（DPReview）",
    "u": "https://www.dpreview.com/?p=310052"
   },
   {
    "t": "Galaxy S7 相机（Samsung Newsroom）",
    "u": "https://news.samsung.com/global/setting-a-new-standard-in-mobile-photography-the-camera-of-the-galaxy-s7"
   },
   {
    "t": "Galaxy S7 拆解（TechInsights）",
    "u": "https://www.techinsights.com/blog/samsung-galaxy-s7-edge-teardown"
   },
   {
    "t": "ISOCELL GN2 Dual Pixel Pro（维基 ISOCELL）",
    "u": "https://en.wikipedia.org/wiki/ISOCELL"
   },
   {
    "t": "ISOCELL HP3 Super QPD（Samsung）",
    "u": "https://news.samsung.com/global/samsung-unveils-isocell-image-sensor-with-industrys-smallest-0-56%ce%bcm-pixel"
   },
   {
    "t": "Canon EOS R1 技术（Canon）",
    "u": "https://global.canon/en/technology/canon-tech/tech/r1/"
   }
  ]
 },
 "spad": {
  "stages": [
   [
    1980,
    "idea",
    "（约）1960 至 1980 年代，Haitz、McIntyre 等研究盖革模式雪崩二极管，Politecnico di Milano 的 Cova 团队发展主动淬灭电路，奠定 SPAD 单光子计数原理。",
    "(approx.) From the 1960s to 1980s Haitz, McIntyre and others studied Geiger-mode avalanche diodes, and Cova's group at Politecnico di Milano developed active quenching, establishing SPAD photon counting.",
    [
     0
    ]
   ],
   [
    2003,
    "proto",
    "EPFL 的 Rochas 等在工业 CMOS 高压工艺里做出 SPAD，并集成 4×8 SPAD 阵列，证明 SPAD 可以和标准 CMOS 电路同片。",
    "Rochas et al. at EPFL built SPADs in an industrial high-voltage CMOS process and integrated a 4x8 array, showing SPADs can share a die with standard CMOS circuits.",
    [
     1
    ]
   ],
   [
    2005,
    "paper",
    "Niclass、Charbon 等在 JSSC 发表基于 SPAD 的 CMOS 3D 图像传感器（32×32 阵列，约），开启 SPAD 飞行时间成像研究。",
    "Niclass, Charbon et al. published a SPAD-based CMOS 3D image sensor in JSSC (32x32 array, approx.), launching SPAD time-of-flight imaging research.",
    [
     1,
     2
    ]
   ],
   [
    2013,
    "corp",
    "ST 推出 FlightSense VL6180X：SPAD 阵列 + VCSEL + 环境光传感器一体，称首个 ToF 接近传感器。",
    "ST launched the FlightSense VL6180X, integrating a SPAD array, VCSEL emitter and ambient light sensor, billed as the first ToF proximity sensor.",
    [
     3
    ]
   ],
   [
    2014,
    "mass",
    "LG G3 用 ST FlightSense 做激光对焦，SPAD 测距首次进入量产手机。",
    "The LG G3 used ST FlightSense for laser AF, the first mass-market phone with SPAD ranging.",
    [
     3
    ]
   ],
   [
    2020,
    "proto",
    "EPFL 与 Canon 发表 1 MP SPAD 相机 MegaX；Canon 同年宣布首个百万像素 SPAD 图像传感器。",
    "EPFL and Canon presented MegaX, a 1 MP SPAD camera; Canon announced the first megapixel SPAD image sensor the same year.",
    [
     4
    ]
   ],
   [
    2020,
    "mass",
    "iPad Pro 与 iPhone 12 Pro 的 LiDAR 用 Sony 首款背照堆栈 SPAD 阵列 dToF 传感器，TechInsights 拆解确认。",
    "The LiDAR in iPad Pro and iPhone 12 Pro used Sony's first back-illuminated stacked SPAD-array dToF sensor, confirmed by TechInsights teardown.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Canon 在 IEDM 2021 发表 3.2 MP 3D 堆栈电荷聚焦 SPAD，940 nm PDE 24.4%，时间抖动低于 100 ps。",
    "Canon presented a 3.2 MP 3D-stacked charge-focusing SPAD at IEDM 2021, with 24.4% PDE at 940 nm and sub-100 ps jitter.",
    [
     6
    ]
   ],
   [
    2022,
    "mass",
    "Sony IMX459 车载 SPAD 开始出样（2021 年 9 月发布，2022 年 3 月样品）：10 μm 像素、约 10 万像素、905 nm PDE 24%、最远 300 m、15 cm 分辨率。",
    "Sony IMX459 automotive SPAD sampled (announced Sept 2021, samples Mar 2022): 10 um pixels, about 100k pixels, 24% PDE at 905 nm, up to 300 m at 15 cm resolution.",
    [
     7
    ]
   ],
   [
    2023,
    "mass",
    "Canon MS-500 发售：1 英寸 3.2 MP SPAD 可换镜监控相机，用于港口、边境等极暗环境的彩色成像。",
    "Canon MS-500 launched: an interchangeable-lens surveillance camera with a 1-inch 3.2 MP SPAD sensor for color imaging in very dark ports and borders.",
    [
     8
    ]
   ],
   [
    2023,
    "rival",
    "（约）对手包括 iToF（Sony DepthSense、Infineon REAL3）、SiPM 与 APD 线阵 LiDAR、FMCW 相干 LiDAR；成像方面则是大像素 CMOS 和 EMCCD。",
    "(approx.) Rivals include iToF (Sony DepthSense, Infineon REAL3), SiPM and APD LiDAR, FMCW coherent LiDAR, and for imaging large-pixel CMOS and EMCCD.",
    [
     0
    ]
   ]
  ],
  "now": [
   "测距方面已主流（手机接近与激光对焦、iPhone LiDAR、车载 LiDAR）；作为成像传感器仍属小众（Canon MS-500）。",
   "Mainstream for ranging (phone proximity and laser AF, iPhone LiDAR, automotive LiDAR); still niche as an imaging sensor (Canon MS-500)."
  ],
  "replaced": [
   "仍在上升期；车载方向与 FMCW LiDAR 竞争，成像方向可能与 QIS 等超低噪声 CMOS 争夺弱光市场。",
   "Still rising; in automotive it competes with FMCW LiDAR, and in imaging it may vie with QIS and other deep-sub-electron-noise CMOS for low light."
  ],
  "refs": [
   {
    "t": "SPAD 原理与历史（维基）",
    "u": "https://en.wikipedia.org/wiki/Single-photon_avalanche_diode"
   },
   {
    "t": "CMOS 集成 SPAD 阵列（SPIE）",
    "u": "https://spie.org/news/3182-cmos-integration-enables-massively-parallel-single-photon-detection"
   },
   {
    "t": "Niclass ISSCC 2004 论文（EPFL）",
    "u": "https://infoscience.epfl.ch/record/82270/files/ISSCC%2704.pdf?version=1"
   },
   {
    "t": "ST VL6180 FlightSense",
    "u": "https://www.st.com/en/imaging-and-photonics-solutions/vl6180.html"
   },
   {
    "t": "Canon 百万像素 SPAD（Canon）",
    "u": "https://global.canon/en/news/2020/20200624.html"
   },
   {
    "t": "Apple LiDAR 用 Sony SPAD（edge-ai-vision）",
    "u": "https://www.edge-ai-vision.com/?p=25828"
   },
   {
    "t": "Canon 3.2 MP SPAD（Canon 新闻稿）",
    "u": "https://global.canon/en/news/2021/20211215.html"
   },
   {
    "t": "Sony IMX459 发布（Sony）",
    "u": "https://www.sony.eu/presscentre/sony-to-release-a-stacked-spad-depth-sensor-for-automotive-lidar-applications-an-industry-first"
   },
   {
    "t": "Canon MS-500 发布（Canon USA）",
    "u": "https://www.usa.canon.com/newsroom/2023/20230801-ms500"
   }
  ]
 },
 "event": {
  "stages": [
   [
    1988,
    "idea",
    "Caltech 的 Carver Mead 与 Misha Mahowald 发表硅视网膜（Neural Networks 1988），1991 年登上 Scientific American，提出用模拟电路模仿视网膜只报告变化的思想。",
    "Carver Mead and Misha Mahowald at Caltech described the silicon retina (Neural Networks, 1988; Scientific American, 1991), mimicking the retina with analog circuits that report change.",
    [
     0
    ]
   ],
   [
    2006,
    "paper",
    "Lichtsteiner、Posch、Delbruck 在 ISSCC 2006 发表 128×128、120 dB、30 mW 的异步视觉传感器，对相对光强变化响应。",
    "Lichtsteiner, Posch and Delbruck presented a 128x128, 120 dB, 30 mW asynchronous vision sensor responding to relative intensity change at ISSCC 2006.",
    [
     1
    ]
   ],
   [
    2008,
    "paper",
    "同一团队在 JSSC 2008 发表 DVS 经典论文：128×128、120 dB、15 μs 延迟，每个像素连续时间量化对数光强变化并输出事件；DVS128 相机开始面向研究者销售。",
    "The same team's landmark JSSC 2008 DVS paper: 128x128, 120 dB, 15 us latency, each pixel quantizing log-intensity change in continuous time; DVS128 cameras began selling to researchers.",
    [
     1,
     2
    ]
   ],
   [
    2011,
    "ver",
    "AIT 的 Posch 等在 JSSC 发表 ATIS：QVGA（304×240）、静态 143 dB，事件触发的 PWM 曝光同时给出灰度。",
    "Posch et al. at AIT published ATIS in JSSC: QVGA (304x240), 143 dB static DR, with event-triggered PWM exposure that also yields grayscale.",
    [
     3
    ]
   ],
   [
    2014,
    "ver",
    "苏黎世团队的 DAVIS（Brandli 等，JSSC 2014）：240×180，同一像素同时输出事件和传统 APS 帧，便于和帧算法结合。",
    "Zurich's DAVIS (Brandli et al., JSSC 2014): 240x180, outputting both events and conventional APS frames from the same pixel.",
    [
     4
    ]
   ],
   [
    2014,
    "corp",
    "Chronocam（后改名 Prophesee）在巴黎成立，创始人含 Posch、Benosman；2015 年 iniVation 在苏黎世成立，2018 年并入 iniLabs 的 DVS 业务。",
    "Chronocam (later Prophesee) was founded in Paris with Posch and Benosman among founders; iniVation was founded in Zurich in 2015 and absorbed iniLabs' DVS business in 2018.",
    [
     5,
     6
    ]
   ],
   [
    2017,
    "proto",
    "Samsung 在 ISSCC 2017 发表 640×480、9 μm 像素、300 Meps 的 BSI DVS，首次由大厂做出 VGA 事件传感器。",
    "Samsung presented a 640x480, 9 um, 300 Meps BSI DVS at ISSCC 2017, the first VGA event sensor from a major vendor.",
    [
     7
    ]
   ],
   [
    2018,
    "corp",
    "Prophesee 推出 Gen3 VGA（640×480、15 μm）封装传感器和 Onboard 参考系统，开始小批量工业应用。",
    "Prophesee launched its Gen3 VGA (640x480, 15 um) packaged sensor and the Onboard reference system for early industrial use.",
    [
     5
    ]
   ],
   [
    2020,
    "paper",
    "Sony 与 Prophesee 在 ISSCC 2020 发表 1280×720 背照堆栈事件传感器（Finateu 等）：4.86 μm、大于 124 dB、1.066 Geps，90 nm BI CIS 叠 40 nm 逻辑，Cu-Cu 连接。",
    "Sony and Prophesee presented a 1280x720 BSI stacked event sensor at ISSCC 2020 (Finateu et al.): 4.86 um, over 124 dB, 1.066 Geps, 90 nm BI CIS on 40 nm logic with Cu-Cu bonding.",
    [
     8
    ]
   ],
   [
    2021,
    "mass",
    "Sony 发布 IMX636（0.92 MP）与 IMX637（0.33 MP）堆栈事件传感器，4.86 μm，2021 年 10 月出样，是首个大厂量产的事件传感器。",
    "Sony announced the IMX636 (0.92 MP) and IMX637 (0.33 MP) stacked event sensors, 4.86 um, sampling Oct 2021, the first event sensors mass-produced by a major CIS vendor.",
    [
     9
    ]
   ],
   [
    2023,
    "ver",
    "（约）Prophesee 推出 GENX320（320×320、6.3 μm），面向低功耗 IoT 和 AR 眼动追踪；学界与厂商开始做事件与 RGB 混合像素传感器。",
    "(approx.) Prophesee launched GENX320 (320x320, 6.3 um) for low-power IoT and AR eye tracking; hybrid event-plus-RGB pixel sensors began to appear.",
    [
     5
    ]
   ],
   [
    2024,
    "rival",
    "（约）对手是高速帧相机和全局快门 CMOS 配合 AI 处理；事件传感器在数据量、延迟和动态范围占优，但生态与算法仍不成熟。",
    "(approx.) Rivals are high-speed frame cameras and global-shutter CMOS with AI; event sensors win on data rate, latency and DR but the ecosystem and algorithms are immature.",
    [
     10
    ]
   ]
  ],
  "now": [
   "小众但在增长：工业检测、振动监测、AR 眼动追踪等，代表产品 Sony IMX636、Prophesee GENX320。",
   "Niche but growing: industrial inspection, vibration monitoring and AR eye tracking, led by Sony IMX636 and Prophesee GENX320."
  ],
  "replaced": [
   "尚无替代者；可能演进为与 RGB 帧传感器融合的混合像素传感器。",
   "No replacement yet; likely to evolve into hybrid sensors fusing event pixels with RGB frame pixels."
  ],
  "refs": [
   {
    "t": "Mahowald 与硅视网膜（维基）",
    "u": "https://en.wikipedia.org/wiki/Misha_Mahowald"
   },
   {
    "t": "ISSCC 2006 DVS 论文条目（researchr）",
    "u": "https://researchr.org/publication/LichtsteinerPD06"
   },
   {
    "t": "JSSC 2008 DVS 论文（AIT）",
    "u": "https://publications.ait.ac.at/en/publications/a-128x128-120db-15%C2%B5s-latency-asynchronous-temporal-contrast-visio/"
   },
   {
    "t": "ATIS 论文（IEEE Xplore）",
    "u": "https://ieeexplore.ieee.org/document/5648367"
   },
   {
    "t": "事件视觉传感器综述（arXiv）",
    "u": "https://arxiv.org/pdf/2502.06116"
   },
   {
    "t": "Prophesee 融资与历史（GlobeNewswire）",
    "u": "https://globenewswire.com/news-release/2018/02/21/1372315/0/en/Prophesee-formerly-Chronocam-announces-initial-closing-of-19M-funding-round-to-include-key-new-strategic-investor.html"
   },
   {
    "t": "iniVation 官网",
    "u": "https://inivation.com/"
   },
   {
    "t": "Samsung ISSCC 2017 DVS（researchr）",
    "u": "https://researchr.org/publication/SonSKJKSPLPWRLW17"
   },
   {
    "t": "Sony 与 Prophesee ISSCC 2020（edge-ai-vision）",
    "u": "https://www.edge-ai-vision.com/2020/02/prophesee-and-sony-develop-a-stacked-event-based-vision-sensor-with-the-industrys-smallest-pixels-and-highest-hdr-performance/"
   },
   {
    "t": "Sony IMX636/IMX637 发布（Sony）",
    "u": "https://www.sony.eu/presscentre/sony-to-release-two-types-of-stacked-event-based-vision-sensors-with-the-industrys-smallest1-4-86micrometre-pixel-size-for-detecting-subject-changes-only"
   },
   {
    "t": "事件相机芯片（IEEE Spectrum）",
    "u": "https://spectrum.ieee.org/event-based-camera-chips"
   }
  ]
 },
 "dslr": {
  "stages": [
   [
    1968,
    "idea",
    "Peter Noble 在 IEEE TED 发表自扫描硅图像探测器阵列，提出像素内带晶体管的 MOS 图像传感器雏形；同期 Weckler 等研究光电二极管积分读出（约）。",
    "Peter Noble published self-scanned silicon image detector arrays in IEEE TED, an early MOS image sensor with in-pixel transistors; Weckler and others explored photodiode integration readout around the same time (approx.).",
    [
     0
    ]
   ],
   [
    1993,
    "paper",
    "JPL 的 Eric Fossum 在 SPIE 1900 发表《Active pixel sensors: are CCDs dinosaurs?》，定义像素内至少一个有源晶体管的 APS，避开 CCD 近乎完美电荷转移的弱点。",
    "Eric Fossum at JPL published Active pixel sensors: are CCDs dinosaurs? in SPIE vol. 1900, defining the APS with at least one active transistor per pixel and avoiding the CCD's need for near-perfect charge transfer.",
    [
     1,
     2
    ]
   ],
   [
    1994,
    "proto",
    "Mendis、Kemeny、Fossum 在 IEEE TED 41(3) 报告用标准 CMOS 代工工艺做出的 100% CMOS 有源像素图像传感器。",
    "Mendis, Kemeny and Fossum reported in IEEE TED 41(3) a fully CMOS active pixel image sensor made in a standard foundry process.",
    [
     3
    ]
   ],
   [
    1995,
    "corp",
    "Fossum 等人从 JPL 创办 Photobit 将 CMOS APS 商业化；此后 Kodak、Toshiba、Canon 等纷纷获授权或自研。",
    "Fossum and colleagues spun Photobit out of JPL to commercialize CMOS APS; Kodak, Toshiba, Canon and others licensed or developed their own versions.",
    [
     2
    ]
   ],
   [
    2000,
    "mass",
    "Canon EOS D30 发布，3.25MP（有效约 3.1MP）APS-C CMOS 由 Canon 自研自产，是首台采用 CMOS 主传感器的量产单反，片上降噪抵消了 CMOS 当时的固定图案噪声劣势。",
    "Canon EOS D30 launched with an in-house 3.25 MP (about 3.1 MP effective) APS-C CMOS sensor, the first mass-produced DSLR with a CMOS main sensor; on-chip noise reduction offset CMOS fixed-pattern noise.",
    [
     4
    ]
   ],
   [
    2001,
    "rival",
    "同期主流仍是 CCD：Nikon D1 系列、Canon EOS-1D（2001）都用 CCD，CCD 在低噪声和全局曝光上仍占优。",
    "CCD still dominated at the time: the Nikon D1 series and Canon EOS-1D (2001) used CCDs, which still led in low noise and global exposure.",
    [
     5
    ]
   ],
   [
    2002,
    "ver",
    "Canon EOS-1Ds 搭载 11.1MP 全画幅 CMOS，证明 CMOS 能做大面积高像素主传感器。",
    "Canon EOS-1Ds used an 11.1 MP full-frame CMOS sensor, proving CMOS could scale to large high-resolution main sensors.",
    [
     5
    ]
   ],
   [
    2007,
    "ver",
    "Sony 推出列并行 ADC 的 Exmor CMOS，Nikon D3 用 12.1MP 全画幅 CMOS，Nikon 旗舰全面转向 CMOS（约）。",
    "Sony introduced column-parallel ADC Exmor CMOS and the Nikon D3 used a 12.1 MP full-frame CMOS, moving Nikon's flagships to CMOS (approx.).",
    [
     6
    ]
   ],
   [
    2012,
    "ver",
    "Leica M（Typ 240）改用 CMOSIS 24MP CMOS，Kodak CCD 在高端旁轴里也退场；2014 年 Pentax 645Z 以 CMOS 取代 645D 的 CCD（约）。",
    "The Leica M (Typ 240) switched to a 24 MP CMOSIS CMOS, ending Kodak CCDs in high-end rangefinders; in 2014 the Pentax 645Z replaced the 645D's CCD with CMOS (approx.).",
    [
     7
    ]
   ],
   [
    2015,
    "end",
    "Sony 宣布 CCD 停产计划：2015 年 8 月最后订货，2017 年 3 月停止晶圆生产，2020 年 3 月停止出货，CCD 基本退出主流成像。",
    "Sony announced its CCD end of life: last-time buy in August 2015, wafer production ending March 2017 and shipments ending March 2020, effectively retiring CCD from mainstream imaging.",
    [
     8,
     9
    ]
   ]
  ],
  "now": [
   "CMOS 已是相机、手机、工业几乎全部主传感器，CCD 只剩少量科研与特殊用途。",
   "CMOS is now the main sensor in virtually all cameras, phones and industrial devices; CCD survives only in a few scientific and niche uses."
  ],
  "replaced": [
   "CMOS 本身仍是主流，接班方向是堆栈式、全局快门、SPAD 和光子计数等 CMOS 变体。",
   "CMOS itself remains mainstream; successors are CMOS variants such as stacked, global-shutter, SPAD and photon-counting sensors."
  ],
  "refs": [
   {
    "t": "Noble 1968 自扫描硅阵列（IEEE TED）",
    "u": "https://ieeexplore.ieee.org/document/1475034"
   },
   {
    "t": "Fossum 1993 SPIE APS 论文",
    "u": "https://ntrs.nasa.gov/citations/20060038662"
   },
   {
    "t": "Eric Fossum 维基百科",
    "u": "https://en.wikipedia.org/wiki/Eric_Fossum"
   },
   {
    "t": "Mendis 等 1994 CMOS APS（NASA 存档引用）",
    "u": "https://ntrs.nasa.gov/api/citations/20080007027/downloads/20080007027.pdf"
   },
   {
    "t": "Canon EOS D30 维基百科",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_D30"
   },
   {
    "t": "Canon EOS-1Ds 维基百科",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS-1Ds"
   },
   {
    "t": "Nikon D3 维基百科",
    "u": "https://en.wikipedia.org/wiki/Nikon_D3"
   },
   {
    "t": "Leica M（Typ 240）维基百科",
    "u": "https://en.wikipedia.org/wiki/Leica_M_(Typ_240)"
   },
   {
    "t": "PetaPixel：Sony 停产 CCD",
    "u": "https://petapixel.com/2015/03/01/sony-to-stop-producing-ccd-image-sensors-to-focus-on-cmos-growth"
   },
   {
    "t": "Imperx：Sony CCD 停产时间表",
    "u": "https://www.imperx.com/test/sony-discontinues-ccd-image-sensors/"
   }
  ]
 },
 "inch": {
  "stages": [
   [
    1950,
    "idea",
    "“1 英寸”沿用摄像管（vidicon）外径命名，实际有效面积约 13.2×8.8mm，对角线约 16mm（约）。",
    "The 1-inch type name comes from vidicon tube diameters; the actual area is about 13.2 x 8.8 mm with roughly a 16 mm diagonal (approx.).",
    [
     0
    ]
   ],
   [
    2011,
    "corp",
    "Nikon 1 系统（V1/J1）用 10MP 的 CX 格式 1 英寸传感器，首次把 1 英寸带进消费级可换镜头机。",
    "The Nikon 1 system (V1/J1) used a 10 MP CX-format 1-inch sensor, first bringing 1-inch to consumer interchangeable-lens cameras.",
    [
     1
    ]
   ],
   [
    2012,
    "rival",
    "Nokia 808 PureView 用 41MP 1/1.2 英寸传感器走超采样路线，是手机大底的另一种尝试。",
    "The Nokia 808 PureView used a 41 MP 1/1.2-inch sensor with oversampling, an alternative path to large phone sensors.",
    [
     2
    ]
   ],
   [
    2012,
    "mass",
    "Sony RX100 发布，20.2MP 1 英寸 Exmor CMOS 配 28-100mm 等效 F1.8 镜头，首台口袋 1 英寸大底便携机。",
    "Sony RX100 launched with a 20.2 MP 1-inch Exmor CMOS and a 28-100 mm equivalent f/1.8 lens, the first pocket compact with a 1-inch sensor.",
    [
     3
    ]
   ],
   [
    2014,
    "mass",
    "Panasonic Lumix DMC-CM1 发布，20MP 1 英寸传感器配 Leica 镜头的 Android 手机，首部 1 英寸手机。",
    "Panasonic Lumix DMC-CM1 launched as an Android phone with a 20 MP 1-inch sensor and Leica lens, the first 1-inch phone.",
    [
     4
    ]
   ],
   [
    2014,
    "ver",
    "Canon G7 X 等第三方相机采用 Sony 1 英寸传感器，RX100 III 加入弹出式 EVF，1 英寸成为高端便携机标准规格（约）。",
    "Cameras such as the Canon G7 X adopted Sony's 1-inch sensor and the RX100 III added a pop-up EVF, making 1-inch the standard for premium compacts (approx.).",
    [
     5
    ]
   ],
   [
    2015,
    "ver",
    "RX100 IV 换用堆栈式 Exmor RS 1 英寸传感器，带 DRAM 层，支持高速读出与 4K 视频。",
    "The RX100 IV moved to a stacked Exmor RS 1-inch sensor with a DRAM layer, enabling fast readout and 4K video.",
    [
     3
    ]
   ],
   [
    2021,
    "ver",
    "Sharp AQUOS R6 用 20MP 1 英寸传感器加 Leica 光学，掀起现代 1 英寸手机潮。",
    "The Sharp AQUOS R6 used a 20 MP 1-inch sensor with Leica optics, starting the modern 1-inch phone wave.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "Sony IMX989（50MP 1 英寸，1.6μm）先后用于 Sharp AQUOS R7（裁切使用，4720 万像素）和 Xiaomi 12S Ultra（用满全幅面，5030 万像素）。",
    "Sony IMX989 (50 MP 1-inch, 1.6 um) appeared in the Sharp AQUOS R7 (cropped, 47.2 MP) and the Xiaomi 12S Ultra (full area, 50.3 MP).",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "Sony LYT-900（50MP 1 英寸）用于 OPPO Find X7 Ultra、Xiaomi 14 Ultra 等，读出速度和动态范围提升（约）。",
    "Sony LYT-900 (50 MP 1-inch) shipped in the OPPO Find X7 Ultra and Xiaomi 14 Ultra, with faster readout and higher dynamic range (approx.).",
    [
     2
    ]
   ],
   [
    2024,
    "end",
    "便携机市场被手机大幅侵蚀，1 英寸便携机新品放缓；手机端 1 英寸则成为旗舰影像机标配，与 1/1.3 英寸加多摄、计算摄影并存（约）。",
    "Phones have eaten much of the compact market and new 1-inch compacts have slowed, while in phones 1-inch has become standard for camera flagships, alongside 1/1.3-inch multi-camera and computational approaches (approx.).",
    [
     2
    ]
   ]
  ],
  "now": [
   "主流：1 英寸是旗舰影像手机主摄标配（LYT-900 等），便携机端仍有 RX100 系列等存量产品。",
   "Mainstream: 1-inch is the standard main camera in camera-flagship phones (e.g. LYT-900), with compacts like the RX100 line still around."
  ],
  "replaced": [
   "便携机正被手机取代；手机端可能的接班是更大底（超 1 英寸）、LOFIC 高动态和双层晶体管像素。",
   "Compacts are being replaced by phones; in phones possible successors are larger-than-1-inch sensors, LOFIC high dynamic range and 2-layer transistor pixels."
  ],
  "refs": [
   {
    "t": "图像传感器格式（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Image_sensor_format"
   },
   {
    "t": "Nikon 1 系列（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Nikon_1_series"
   },
   {
    "t": "大底拍照手机列表（维基百科）",
    "u": "https://en.wikipedia.org/wiki/List_of_large_sensor_camera_phones"
   },
   {
    "t": "Sony RX100 系列（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Sony_Cyber-shot_DSC-RX100"
   },
   {
    "t": "Panasonic Lumix DMC-CM1（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-CM1"
   },
   {
    "t": "Canon PowerShot G7 X（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Canon_PowerShot_G7_X"
   },
   {
    "t": "PetaPixel：Sharp AQUOS R6",
    "u": "https://petapixel.com/2021/05/17/sharps-leica-branded-aquos-r6-phone-packs-a-massive-1-inch-sensor"
   },
   {
    "t": "GSMArena：Xiaomi 12S Ultra 用 IMX989",
    "u": "https://m.gsmarena.com/xiaomi_12s_ultra_will_have_1inch_sony_imx989_camera_sensor-news-54849.php"
   }
  ]
 },
 "ai": {
  "stages": [
   [
    1991,
    "idea",
    "Mahowald 与 Carver Mead 的“硅视网膜”把感光与模拟计算放在同一芯片，提出传感器端就近处理的视觉芯片思路（约）。",
    "Mahowald and Carver Mead's silicon retina put sensing and analog computation on one chip, the idea of processing vision at the sensor (approx.).",
    [
     0
    ]
   ],
   [
    2010,
    "rival",
    "焦平面处理器（如 Manchester 的 SCAMP 像素并行处理阵列）在每个像素旁做模拟或数字运算，是片上视觉的学术路线（约）。",
    "Focal-plane processors such as Manchester's SCAMP pixel-parallel array computed beside each pixel, an academic route to on-sensor vision (approx.).",
    [
     1
    ]
   ],
   [
    2017,
    "corp",
    "Sony 量产带 DRAM 的三层堆栈 CMOS，证明可以在像素层下面堆叠额外功能层，为放入 AI 逻辑铺路（约）。",
    "Sony mass-produced a three-layer stacked CMOS with DRAM, showing extra functional layers could be stacked under the pixel layer and paving the way for AI logic (approx.).",
    [
     2
    ]
   ],
   [
    2020,
    "mass",
    "Sony 于 2020 年 5 月发布 IMX500（裸片）与 IMX501（封装），1/2.3 英寸 12.3MP 背照式像素层叠在含 DSP 与 SRAM 的逻辑层上，可直接输出识别元数据，IMX500 4 月起送样。",
    "In May 2020 Sony announced IMX500 (bare chip) and IMX501 (packaged): a 1/2.3-inch 12.3 MP back-illuminated pixel chip stacked on a logic chip with DSP and SRAM, outputting inference metadata directly; IMX500 samples began in April.",
    [
     3,
     4
    ]
   ],
   [
    2020,
    "corp",
    "Sony 同期与 Microsoft 合作，把 IMX500 的边缘 AI 与 Azure 云服务结合，面向零售和工业视觉。",
    "Sony partnered with Microsoft at the same time to pair IMX500 edge AI with Azure cloud services for retail and industrial vision.",
    [
     5
    ]
   ],
   [
    2021,
    "paper",
    "Sony 在 ISSCC 2021（论文 9.6）发表 1/2.3 英寸 12.3MP 堆栈式传感器，22nm 逻辑层 CNN 处理器能效 4.97 TOPS/W，读图与推理并行可达 120fps。",
    "Sony presented at ISSCC 2021 (paper 9.6) the 1/2.3-inch 12.3 MP stacked sensor with a 22 nm logic-layer CNN processor at 4.97 TOPS/W, running readout and inference in parallel at up to 120 fps.",
    [
     6
    ]
   ],
   [
    2021,
    "ver",
    "Sony 推出 AITRIOS 边缘 AI 平台，为 IMX500 提供模型部署和设备管理（约）。",
    "Sony launched the AITRIOS edge AI platform to deploy models and manage IMX500 devices (approx.).",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "Raspberry Pi 与 Sony 于 2024 年 9 月 30 日推出 Raspberry Pi AI Camera，基于 IMX500，售价 70 美元，把片上 AI 带进创客市场。",
    "Raspberry Pi and Sony released the Raspberry Pi AI Camera on 30 September 2024, built on IMX500 and priced at 70 USD, bringing on-sensor AI to makers.",
    [
     8
    ]
   ],
   [
    2024,
    "rival",
    "竞争路线是低功耗常开传感器加外部 NPU（如手机 SoC 的常开视觉模块）以及事件相机，把 AI 放在传感器旁而不是传感器里（约）。",
    "Rivals are low-power always-on sensors paired with an external NPU (such as always-on vision blocks in phone SoCs) and event cameras, placing AI beside the sensor rather than inside it (approx.).",
    [
     9
    ]
   ]
  ],
  "now": [
   "小众但在增长：IMX500 用于零售、智慧城市、工业检测和 Raspberry Pi AI Camera，尚未进入消费手机主摄。",
   "Niche but growing: IMX500 is used in retail, smart city, industrial inspection and the Raspberry Pi AI Camera, but not yet in consumer phone main cameras."
  ],
  "replaced": [
   "仍在发展期，接班方向是算力更高的多层堆栈、存内计算和与事件传感器结合的片上 AI。",
   "Still developing; successors point to higher-performance multi-layer stacks, compute-in-memory and on-sensor AI combined with event sensing."
  ],
  "refs": [
   {
    "t": "Mahowald 与 Mead 硅视网膜（维基百科 Neuromorphic engineering）",
    "u": "https://en.wikipedia.org/wiki/Neuromorphic_engineering"
   },
   {
    "t": "SCAMP 视觉芯片（Manchester）",
    "u": "https://personalpages.manchester.ac.uk/staff/p.dudek/scamp/"
   },
   {
    "t": "Sony 三层堆栈 DRAM 传感器新闻稿",
    "u": "https://www.sony.com/en/SonyInfo/News/Press/201702/17-013E/"
   },
   {
    "t": "Sony IMX500/IMX501 新闻稿",
    "u": "https://sony.mediaroom.com/2020-05-14-Sony-to-Release-Worlds-First-Intelligent-Vision-Sensors-with-AI-Processing-Functionality"
   },
   {
    "t": "Sony Europe：IMX500 发布",
    "u": "https://www.sony.eu/presscentre/sony-to-release-worlds-first-intelligent-vision-sensors-with-ai-processing-functionality"
   },
   {
    "t": "Engadget：Sony 片上 AI 传感器",
    "u": "https://engadget.com/sony-image-sensor-ai-smart-cameras-070036055.html"
   },
   {
    "t": "ISSCC 2021 论文 9.6 讲座页",
    "u": "https://underline.io/lecture/13564-9-6-a-1dash2-3inch-12-3mpixel-with-on-chip-4-97topsdashw-cnn-processor-back-illuminated-stacked-cmos-image-sensor"
   },
   {
    "t": "Sony AITRIOS 平台",
    "u": "https://www.aitrios.sony-semicon.com/"
   },
   {
    "t": "Sony Europe：Raspberry Pi AI Camera",
    "u": "https://www.sony.eu/presscentre/sony-semiconductor-solutions-and-raspberry-pi-launch-raspberry-pi-ai-camera"
   },
   {
    "t": "事件相机（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Event_camera"
   }
  ]
 },
 "swir": {
  "stages": [
   [
    1980,
    "idea",
    "与 InP 晶格匹配的 In0.53Ga0.47As 截止波长约 1.7μm，最早作为光纤通信探测器材料，随后被用于短波红外成像（约）。",
    "In0.53Ga0.47As lattice-matched to InP has a cutoff near 1.7 um; it was first used for fiber-optic detectors and later for SWIR imaging (approx.).",
    [
     0
    ]
   ],
   [
    1985,
    "rival",
    "军用红外成像主要用 HgCdTe 等材料的混合焦平面阵列，探测层与硅读出电路以铟柱（indium bump）倒装互连，需深冷（约）。",
    "Military IR imaging relied on hybrid focal-plane arrays of materials such as HgCdTe, flip-chip joined to silicon readouts with indium bumps and needing deep cooling (approx.).",
    [
     0
    ]
   ],
   [
    1991,
    "corp",
    "Sensors Unlimited 在 Princeton 成立，专做晶格匹配 InGaAs 光电二极管阵列与相机。",
    "Sensors Unlimited was founded in Princeton to build lattice-matched InGaAs photodiode arrays and cameras.",
    [
     1
    ]
   ],
   [
    1999,
    "proto",
    "Sensors Unlimited 的技术报告记录 128×128、60μm 像素 InGaAs 光电二极管阵列，配 CMOS 读出电路形成二维焦平面阵列。",
    "A Sensors Unlimited technical report documented a 128 x 128 InGaAs photodiode array with 60 um pixels, combined with a CMOS readout to form a 2D focal-plane array.",
    [
     2
    ]
   ],
   [
    2003,
    "ver",
    "Sensors Unlimited 开始量产小型免深冷 InGaAs 相机（常见 320×240 级），用于工业检测和安防；Xenics、FLIR、Hamamatsu 等跟进（约）。",
    "Sensors Unlimited began producing small uncooled InGaAs cameras (typically 320 x 240 class) for inspection and security, with Xenics, FLIR and Hamamatsu following (approx.).",
    [
     3
    ]
   ],
   [
    2016,
    "corp",
    "Sony 在 IMX260（Galaxy S7）等堆栈式 CMOS 中量产 Cu-Cu 混合键合，取代 TSV 连接像素层与逻辑层，后被移植到 InGaAs 与硅的异质键合（约）。",
    "Sony mass-produced Cu-Cu hybrid bonding in stacked CMOS such as IMX260 (Galaxy S7), replacing TSVs between pixel and logic layers, a process later carried over to InGaAs-to-silicon bonding (approx.).",
    [
     4
    ]
   ],
   [
    2018,
    "rival",
    "胶体量子点 SWIR 传感器（如 SWIR Vision Systems 的 Acuros）直接涂布在硅读出电路上，分辨率高、成本低，但量子效率和暗电流不及 InGaAs（约）。",
    "Colloidal quantum-dot SWIR sensors such as SWIR Vision Systems' Acuros are coated directly on silicon readouts for high resolution and low cost, but trail InGaAs in quantum efficiency and dark current (approx.).",
    [
     5
    ]
   ],
   [
    2019,
    "paper",
    "Sony 的 Manda 等在 IEDM 2019 发表用 Cu-Cu 键合把 InGaAs/InP 光电二极管阵列接到硅读出电路的背照式传感器，1280×1040、5μm 像素，覆盖可见到 SWIR。",
    "Manda et al. of Sony presented at IEDM 2019 a back-illuminated sensor Cu-Cu bonding an InGaAs/InP photodiode array to a silicon readout, 1280 x 1040 at 5 um pitch, covering visible to SWIR.",
    [
     6
    ]
   ],
   [
    2020,
    "mass",
    "Sony 发布 SenSWIR 的 IMX990（1.34MP，8.2mm 对角，8bit 130fps）和 IMX991（0.34MP，250fps），5μm 像素为当时商用 InGaAs 最小，0.4 到 1.7μm 一颗芯片覆盖。",
    "Sony launched SenSWIR IMX990 (1.34 MP, 8.2 mm diagonal, 8-bit 130 fps) and IMX991 (0.34 MP, 250 fps), whose 5 um pixel was the smallest commercial InGaAs pitch, covering 0.4 to 1.7 um on one chip.",
    [
     7,
     8
    ]
   ],
   [
    2023,
    "ver",
    "Sony 于 2023 年 11 月发布 IMX992（5.32MP）和 IMX993（3.21MP），像素缩到 3.45μm，2024 年 2 月起送样，暗处低噪声模式改进。",
    "In November 2023 Sony announced IMX992 (5.32 MP) and IMX993 (3.21 MP) with pixels shrunk to 3.45 um, sampling from February 2024 with improved low-light noise modes.",
    [
     9
    ]
   ],
   [
    2024,
    "end",
    "InGaAs 仍是高性能 SWIR 主流；低成本、大面阵市场正被量子点和 Ge-on-Si 等硅兼容方案蚕食（约）。",
    "InGaAs remains the mainstream for high-performance SWIR, while quantum-dot and Ge-on-Si silicon-compatible approaches are eating into low-cost large-array markets (approx.).",
    [
     5
    ]
   ]
  ],
  "now": [
   "工业主流：SenSWIR IMX990/991/992/993 广泛用于半导体检测、分选、农业和安防相机。",
   "Industrial mainstream: SenSWIR IMX990/991/992/993 are widely used in semiconductor inspection, sorting, agriculture and security cameras."
  ],
  "replaced": [
   "InGaAs 仍主流，可能的接班者是可在硅上单片集成的胶体量子点和 Ge-on-Si SWIR 传感器。",
   "InGaAs remains mainstream; likely successors are colloidal quantum-dot and Ge-on-Si SWIR sensors that integrate monolithically on silicon."
  ],
  "refs": [
   {
    "t": "砷化镓铟（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Indium_gallium_arsenide"
   },
   {
    "t": "Sensors Unlimited 公司简介",
    "u": "https://www.sensorsinc.com/company/about"
   },
   {
    "t": "DTIC：128×128 InGaAs 阵列报告",
    "u": "https://apps.dtic.mil/sti/tr/pdf/ADA390252.pdf"
   },
   {
    "t": "NASA Spinoff：InGaAs 相机",
    "u": "https://spinoff.nasa.gov/node/10238"
   },
   {
    "t": "TechInsights：SenSWIR IMX990/991 拆解",
    "u": "https://www.techinsights.com/blog/image-sensor/groundbreaking-senswir-image-sensors-sony-imx990-imx991"
   },
   {
    "t": "SWIR Vision Systems 量子点传感器",
    "u": "https://www.swirvisionsystems.com/"
   },
   {
    "t": "Image Sensors World：IEDM 2019 Sony SWIR",
    "u": "https://image-sensors-world.blogspot.com/2020/01/iedm-2019-sony-swir-imager.html"
   },
   {
    "t": "Vision Systems Design：IMX990/991 发布",
    "u": "https://www.vision-systems.com/cameras-accessories/article/14176970/sony-imx990-imx991-swir-image-sensors-with-senswir-technology-announced"
   },
   {
    "t": "Image Sensors World：Sony SWIR 发布",
    "u": "https://image-sensors-world.blogspot.com/2020/05/sony-unveils-swir-sensors-for.html"
   },
   {
    "t": "Sony：IMX992/993 新闻稿",
    "u": "https://sony.mediaroom.com/2023-11-28-Sony-Semiconductor-Solutions-to-Release-SWIR-Image-Sensor-for-Industrial-Applications-with-Industry-Leading-5-32-Effective-Megapixels"
   }
  ]
 },
 "meta": {
  "stages": [
   [
    2011,
    "idea",
    "Harvard 的 Nanfang Yu、Federico Capasso 等在 Science 334 发表相位不连续界面的广义反射折射定律，用亚波长金属天线阵列在界面上突变相位。",
    "Nanfang Yu, Federico Capasso and colleagues at Harvard published generalized laws of reflection and refraction with phase discontinuities in Science 334, using subwavelength metallic antenna arrays to impose abrupt phase shifts.",
    [
     0
    ]
   ],
   [
    2012,
    "proto",
    "Capasso 组 Aieta 等在 Nano Letters 演示电信波段超薄平面透镜和轴锥镜（约）。",
    "Aieta et al. in the Capasso group demonstrated ultrathin flat lenses and axicons at telecom wavelengths in Nano Letters (approx.).",
    [
     1
    ]
   ],
   [
    2015,
    "rival",
    "Caltech 的 Arbabi、Faraon 等用高对比度介质纳米柱做高效超构表面，与 Harvard 并行推进介质路线（约）。",
    "Arbabi, Faraon and colleagues at Caltech built high-efficiency metasurfaces from high-contrast dielectric nanoposts, advancing the dielectric route in parallel with Harvard (approx.).",
    [
     2
    ]
   ],
   [
    2016,
    "paper",
    "Khorasaninejad、Chen、Devlin、Capasso 等在 Science 发表 TiO2 可见光超构透镜，NA 0.8，在 405、532、660nm 衍射极限聚焦，效率 86%、73%、66%。",
    "Khorasaninejad, Chen, Devlin, Capasso and colleagues published TiO2 visible metalenses in Science with NA 0.8, diffraction-limited focusing at 405, 532 and 660 nm and efficiencies of 86, 73 and 66 percent.",
    [
     3
    ]
   ],
   [
    2016,
    "corp",
    "Rob Devlin 与 Capasso 创立 Metalenz，目标是用半导体光刻工艺量产平面光学（约）。",
    "Rob Devlin and Capasso founded Metalenz to mass-produce flat optics with semiconductor lithography (approx.).",
    [
     4
    ]
   ],
   [
    2018,
    "paper",
    "Capasso 组 Wei Ting Chen 等在 Nature Nanotechnology 报告可见光宽带消色差超构透镜，色散仍是成像应用的主要难点（约）。",
    "Wei Ting Chen et al. in the Capasso group reported a broadband achromatic visible metalens in Nature Nanotechnology; dispersion remained the main obstacle for imaging (approx.).",
    [
     5
    ]
   ],
   [
    2022,
    "mass",
    "Metalenz 与 ST 于 2022 年 6 月宣布 FlightSense ToF 模组 VL53L8 首次商用超构表面透镜，在 ST 法国 Crolles 300mm 晶圆厂制造，替换原有光学元件。",
    "In June 2022 Metalenz and ST announced the VL53L8 FlightSense ToF module as the first commercial metasurface lens, made in ST's 300 mm fab in Crolles, France, replacing existing optics.",
    [
     6,
     7
    ]
   ],
   [
    2022,
    "rival",
    "同类单波长近红外模组的竞争方案是传统衍射光学元件（DOE）、Fresnel 透镜和晶圆级折射光学（约）。",
    "Competing options for single-wavelength NIR modules were conventional diffractive optical elements, Fresnel lenses and wafer-level refractive optics (approx.).",
    [
     8
    ]
   ],
   [
    2024,
    "ver",
    "Metalenz 于 2024 年 2 月在 MWC 宣布 Polar ID 采用三星 ISOCELL Vizion 931 全局快门传感器，偏振敏感超构光学一次成像获取材料与轮廓信息用于人脸解锁。",
    "In February 2024 at MWC Metalenz announced Polar ID using Samsung's ISOCELL Vizion 931 global-shutter sensor, with polarization-sensitive meta-optics capturing material and contour data in one shot for face unlock.",
    [
     9
    ]
   ],
   [
    2025,
    "ver",
    "Metalenz 与 UMC 于 2025 年 11 月宣布 Polar ID 进入量产，UMC 用 40nm 工艺制造偏振超构光学层，并以晶圆对晶圆键合集成到 ISOCELL Vizion 931 传感器上。",
    "In November 2025 Metalenz and UMC announced Polar ID mass production, with UMC making the polarization meta-optic layer in a 40 nm process and wafer-on-wafer bonding it to the ISOCELL Vizion 931 sensor.",
    [
     10
    ]
   ]
  ],
  "now": [
   "小众但已量产：主要在单波长近红外的 ToF、结构光和人脸识别模组，可见光彩色主摄尚未采用。",
   "Niche but in production: mainly in single-wavelength NIR ToF, structured light and face authentication modules, not yet in visible color main cameras."
  ],
  "replaced": [
   "仍在上升期，正在替代近红外模组里的折射与衍射小镜片；可见光成像需先解决宽带色散和效率。",
   "Still rising and replacing refractive and diffractive micro-optics in NIR modules; visible imaging first needs broadband dispersion and efficiency solved."
  ],
  "refs": [
   {
    "t": "Yu 等 2011 Science 广义斯涅尔定律",
    "u": "https://capasso.seas.harvard.edu/publications/light-propagation-phase-discontinuities-generalized-laws-reflection-and"
   },
   {
    "t": "Capasso 组论文列表",
    "u": "https://capasso.seas.harvard.edu/publications"
   },
   {
    "t": "Caltech Faraon 组",
    "u": "https://faraon.caltech.edu/"
   },
   {
    "t": "Khorasaninejad 等 2016 Science 可见光超构透镜",
    "u": "https://capasso.seas.harvard.edu/publications/metalenses-visible-wavelengths-diffraction-limited-focusing-and-subwavelength"
   },
   {
    "t": "Metalenz 官网",
    "u": "https://metalenz.com/"
   },
   {
    "t": "超构透镜（维基百科 Metalens）",
    "u": "https://en.wikipedia.org/wiki/Metalens"
   },
   {
    "t": "Laser Focus World：首个消费级超构表面",
    "u": "https://www.laserfocusworld.com/optics/article/14277991/worlds-first-metasurface-for-consumer-electronics-makes-commercial-debut."
   },
   {
    "t": "eeNews Europe：首个消费级超构透镜出货",
    "u": "https://www.eenewseurope.com/en/first-consumer-optical-metasurface-lens-ships"
   },
   {
    "t": "衍射光学元件（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Diffractive_optics"
   },
   {
    "t": "GlobeNewswire：Polar ID 采用 ISOCELL Vizion",
    "u": "https://www.globenewswire.com/news-release/2024/02/26/2834945/0/en/Metalenz-Confirms-Samsung-ISOCELL-Vizion-Image-Sensor-as-Light-Engine-for-Polar-ID-the-World-s-Smallest-Most-Affordable-and-Secure-Face-Unlock-Solution.html"
   },
   {
    "t": "UMC：Polar ID 量产新闻稿",
    "u": "https://www.umc.com/en/News/press_release/Content/technology_related/20251113"
   }
  ]
 }
};
