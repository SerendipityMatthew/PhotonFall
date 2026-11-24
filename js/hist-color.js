/* 人眼与色彩时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 color 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：disp:p3、vid:hlg */
TIMELINES.color.hist = {
 "awb": {
  "stages": [
   [
    1964,
    "idea",
    "Polaroid 创始人 Edwin Land 造出「Retinex」（retina+cortex）一词，用 Color Mondrian 实验说明人眼看到的颜色并不只由视网膜接收的光谱决定，而是大脑跨整个视野比较得出的——这是后来相机自动白平衡想模仿的「色彩恒常性」。",
    "Polaroid founder Edwin Land coined 'Retinex' (retina + cortex) in 1964; his Color Mondrian experiments showed perceived color is not set by the light reaching the retina alone but by comparisons across the scene — the color constancy that camera AWB later tries to imitate.",
    [
     1
    ]
   ],
   [
    1970,
    "corp",
    "Sony 的 Kubota Yasuharu 与 Shiono Takashi 1970 年 1 月申请彩色电视摄像机白平衡专利（1976 年以 US RE28774 再颁）：拍一张白卡、按开关后同时以绿通道为基准调整红、蓝增益并存入记忆电路，即后来广播摄像机的「一键白平衡」，仍属半自动。",
    "Sony engineers Yasuharu Kubota and Takashi Shiono filed a white-balance control patent in January 1970 (reissued as US RE28774 in 1976): shoot a white card, press a switch, and the red and blue gains are adjusted against green simultaneously and held in memory — the semi-automatic 'one-push' white balance of broadcast cameras.",
    [
     0
    ]
   ],
   [
    1971,
    "paper",
    "Land 与 John McCann 在 JOSA 61(1):1–11 发表《Lightness and Retinex Theory》，提出三组独立锥细胞通道各自计算相对明度、与物体反射率相关的计算模型，开启用算法估计光源的研究。",
    "Land and John McCann published 'Lightness and Retinex Theory' in JOSA 61(1):1–11 (1971): three independent cone channels each compute relative lightness correlated with reflectance — the start of algorithmic illuminant estimation.",
    [
     1
    ]
   ],
   [
    1980,
    "paper",
    "Gershon Buchsbaum 在 Journal of the Franklin Institute 310(1):1–26 发表《A spatial processor model for object colour perception》，假设整幅场景平均反射率为中性灰，用全画面平均色估计光源——即「灰度世界（gray world）」算法，成为早期相机 AWB 最常用的启发式。",
    "Gershon Buchsbaum published 'A spatial processor model for object colour perception' in the Journal of the Franklin Institute 310(1):1–26 (1980), assuming the scene averages to neutral gray and estimating the illuminant from the global mean — the 'gray world' heuristic behind most early camera AWB.",
    [
     2
    ]
   ],
   [
    1982,
    "mass",
    "JVC 推出工业摄像机 KY-1900（三支 Saticon 管，约 400 线），机身「Auto-White」电路可让摄像机自动保持白平衡，被同代更贵的机型所不及（约，来自用户回忆类资料）。",
    "JVC launched the KY-1900 industrial camera (three Saticon tubes, ~400 lines) in 1982; its 'Auto-White' circuit gave automatic white balance that pricier cameras of the day lacked (approximate; based on a practitioner's recollection).",
    [
     3
    ]
   ],
   [
    1986,
    "mass",
    "Canon 1986 年 8 月发售 8mm 摄录机 VM-E1N，实现全自动白平衡，室内外都能稳定补偿色温；前代 VM-E1 还要靠色温滤镜开关手动切换。消费摄录机从此普及 AWB。",
    "Canon's VM-E1N 8 mm camcorder (August 1986) achieved fully automatic white balance, compensating color temperature indoors and out; its predecessor VM-E1 still used a manual color-temperature filter switch. AWB then became standard on consumer camcorders.",
    [
     4
    ]
   ],
   [
    2015,
    "paper",
    "Google 的 Jonathan T. Barron 在 ICCV 2015 发表 Convolutional Color Constancy（CCC），利用「通道缩放=对数色度直方图平移」把光源估计变成二维定位问题，用判别式学习把基准误差降低近 40%。",
    "Google's Jonathan T. Barron presented Convolutional Color Constancy (CCC) at ICCV 2015: since scaling color channels translates the log-chroma histogram, illuminant estimation becomes 2D localization solved by discriminative learning, cutting benchmark error by nearly 40%.",
    [
     5
    ]
   ],
   [
    2017,
    "paper",
    "Barron 与 Yun-Ta Tsai 在 CVPR 2017 发表 Fast Fourier Color Constancy（FFCC），在环面上用频域求解，误差比此前最佳低 13–20%、速度快 250–3000 倍，手机上约 700 fps，并输出光源的完整后验分布以做时间平滑。",
    "Barron and Yun-Ta Tsai presented Fast Fourier Color Constancy (FFCC) at CVPR 2017: solved in the frequency domain on a torus, 13–20% lower error than the prior best and 250–3000× faster, about 700 fps on a phone, with a full posterior over illuminants for temporal smoothing.",
    [
     5
    ]
   ],
   [
    2018,
    "mass",
    "Google 2018 年 11 月 14 日为 Pixel 手机推出 Night Sight，内含针对 Pixel 3 训练的学习型 AWB：用大量在校色显示器上人工校正白平衡的照片训练，专门处理暗光与钠灯等强色偏光源下传统 AWB 失效的问题。",
    "Google launched Night Sight on Pixel phones on 14 November 2018 with a learning-based AWB trained for the Pixel 3 on photos hand-corrected on calibrated monitors, targeting low light and strongly colored sources such as sodium lamps where classic AWB fails.",
    [
     6
    ]
   ],
   [
    2020,
    "rival",
    "Huawei P40 Pro 把色温传感器从 3 通道升级为 8 通道多光谱色温传感器，配合语义神经网络 AI AWB，称色彩准确度提升 45%——用额外的光谱硬件辅助估计光源，与 Google 纯软件路线并行。",
    "The Huawei P40 Pro (2020) upgraded its color-temperature sensor from 3 to 8 multispectral channels, paired with a semantics-based neural-network AWB claimed to be 45% more accurate — dedicated spectral hardware as an alternative to Google's software-only approach.",
    [
     7
    ]
   ]
  ],
  "now": [
   "AWB 是所有数码相机、摄像机和手机 ISP 的标配。旗舰手机普遍把学习型光源估计、语义分割（人脸、天空分区处理）和多光谱色温传感器结合；Google 2019 年在 Pixel 4 上把学习型 AWB 从 Night Sight 推广到所有拍照模式。",
   "AWB is standard in every digital camera, camcorder and phone ISP. Flagship phones combine learned illuminant estimation, semantic segmentation (faces and sky treated separately) and multispectral color-temperature sensors; Google extended learning-based AWB from Night Sight to all photo modes on the Pixel 4 in 2019."
  ],
  "replaced": [
   "AWB 本身没有被替代。被替代的是方法：灰度世界、白点等启发式逐渐让位于学习型算法和多光谱传感器辅助；专业摄像仍保留手动和一键白平衡。",
   "AWB itself has not been replaced; its methods have. Gray-world and white-patch heuristics are giving way to learned algorithms and multispectral sensor assistance, while professional video keeps manual and one-push white balance."
  ],
  "refs": [
   {
    "t": "US RE28774E — White balance control system (Sony, 1970)",
    "u": "https://patents.google.com/patent/USRE28774E/en"
   },
   {
    "t": "Land & McCann, Lightness and Retinex Theory (JOSA 1971)",
    "u": "https://cs.jhu.edu/~misha/ReadingSeminar/Papers/Land71.pdf"
   },
   {
    "t": "Buchsbaum, A spatial processor model for object colour perception (1980)",
    "u": "https://www.scilit.net/publications/7717b8bb3b3739fd693ff53acdc5af7f"
   },
   {
    "t": "JVC KY-1900 back to the future (HD Warrior)",
    "u": "https://www.hdwarrior.co.uk/2012/01/22/jvc-ky-1900-back-to-the-future-1984/"
   },
   {
    "t": "Canon Camera Museum — VM-E1N",
    "u": "https://global.canon/en/c-museum/product/8mmvc311.html"
   },
   {
    "t": "Barron & Tsai, Fast Fourier Color Constancy (CVPR 2017)",
    "u": "https://arxiv.org/abs/1611.07596"
   },
   {
    "t": "Google Research — Night Sight: Seeing in the Dark on Pixel Phones",
    "u": "https://research.google/blog/night-sight-seeing-in-the-dark-on-pixel-phones/"
   },
   {
    "t": "Huawei P40 camera explained (Android Authority)",
    "u": "https://androidauthority.com/huawei-p40-camera-explained-1097350"
   }
  ]
 },
 "cfa": {
  "stages": [
   [
    1974,
    "idea",
    "Kodak 的 Bryce Bayer 1974 年 5 月 24 日在实验记录本里写下：红、绿、蓝各自规则采样，「绿色多一倍，因为它对清晰度最重要」。同年 Kodak 同事 Peter Dillon 也设想把滤色片直接做在 CCD 每个像素上（integral CFA）。",
    "On 24 May 1974 Kodak's Bryce Bayer wrote in his lab notebook that red, green and blue should each be sampled in regular arrays 'with twice as many green, which is most important to sharpness'. The same year Kodak colleague Peter Dillon conceived fabricating color filters directly on each CCD pixel (the integral CFA).",
    [
     1,
     2
    ]
   ],
   [
    1976,
    "paper",
    "Kodak 1975 年 3 月以 Bayer 为唯一发明人申请《Color imaging array》，1976 年 7 月获美国专利 3,971,065：亮度（绿）元素排成棋盘格、红蓝各占四分之一，横竖方向都有均匀的亮度采样。同年 12 月 Dillon 在 IEEE 会议上报告了片上集成 CFA。",
    "Kodak filed 'Color imaging array' in March 1975 with Bayer as sole inventor; US patent 3,971,065 issued in July 1976: green luminance elements in a checkerboard, red and blue a quarter each, giving uniform luminance sampling horizontally and vertically. In December 1976 Dillon presented the integral CFA at an IEEE conference.",
    [
     0,
     1,
     2
    ]
   ],
   [
    1978,
    "proto",
    "Dillon 做出世界上第一台单片彩色视频摄像机，论文发表于 1978 年 2 月的 IEEE 期刊。因为 Bayer 排列与 NTSC 隔行扫描不兼容，他另外设计了一种绿色棋盘、每行都有红蓝像素的 CFA。",
    "Dillon built the first single-chip color video camera, described in an IEEE paper in February 1978. Because the Bayer layout clashed with NTSC interlaced scanning, he devised an alternative CFA with a green checkerboard and red and blue on every line.",
    [
     2
    ]
   ],
   [
    1980,
    "mass",
    "Hitachi 推出世界首台家用半导体彩色摄像机 VK-C1000：单片 MOS 图像传感器加片上滤色阵列，384×485 像素，用固态单片 CFA 取代摄像管和三片分光（约，资料记为 1980–1981 年）。",
    "Hitachi released the VK-C1000, billed as the first solid-state color video camera for home use: a single MOS image sensor with an on-chip color filter, 384×485 pixels, replacing pickup tubes and three-sensor prisms (approximate; sources give 1980–1981).",
    [
     3
    ]
   ],
   [
    1991,
    "mass",
    "Kodak DCS 100 于 1991 年 5 月上市（Photokina 1990 首展），基于 Nikon F3，用 130 万像素 KAF-1300 CCD，售价约 2 万美元，共售出 987 台。其 DC3 彩色后背采用 Kodak 自定的 CFA 排列，并不是标准 Bayer。",
    "The Kodak DCS 100 shipped in May 1991 (shown at Photokina 1990): a Nikon F3 body with a 1.3 MP KAF-1300 CCD, about US$20,000, 987 units sold. Its DC3 color back used a custom CFA layout rather than the standard Bayer pattern.",
    [
     4
    ]
   ],
   [
    1992,
    "mass",
    "Kodak DCS 200 用 KAF-1600 传感器（1524×1012），是第一台采用 Bayer 彩色滤镜排列的数码相机。此后 Bayer 成为数码相机、摄像机和手机传感器的默认方案。",
    "The Kodak DCS 200 (1992), with a KAF-1600 sensor (1524×1012), was the first digital camera to use the Bayer color filter pattern, which then became the default for digital cameras, camcorders and phone sensors.",
    [
     4,
     1
    ]
   ],
   [
    2002,
    "rival",
    "Foveon X3 首次用于 Sigma SD9 单反：利用硅对不同波长的吸收深度，在同一像素位置叠三层光电二极管分别感应蓝、绿、红，不需要 CFA 和去马赛克。",
    "Foveon X3 debuted in the Sigma SD9 DSLR in 2002: three stacked photodiodes per site exploit silicon's wavelength-dependent absorption depth to sense blue, green and red without a CFA or demosaicing.",
    [
     5
    ]
   ],
   [
    2007,
    "ver",
    "Kodak 申请了一组 RGBW 专利，在 Bayer 阵列中加入透明（全色）像素，接收全部可见光，提高暗光灵敏度。",
    "Kodak filed a set of RGBW patents in 2007, adding clear (panchromatic) pixels that take in all visible light to the Bayer array for better low-light sensitivity.",
    [
     7
    ]
   ],
   [
    2012,
    "rival",
    "Fujifilm X-Pro1 于 2012 年 1 月 9 日发布，首次采用 X-Trans 传感器（1630 万像素）。6×6 非周期排列降低摩尔纹，因此可以取消光学低通滤镜；后续有 X-Trans II（2013）、III（2016，2430 万像素）、4（2018，背照式）和 5 HR/HS（2022）。",
    "The Fujifilm X-Pro1 (announced 9 January 2012) introduced the 16.3 MP X-Trans sensor, whose 6×6 aperiodic pattern suppresses moiré so the optical low-pass filter can go. It was followed by X-Trans II (2013), III (2016, 24.3 MP), 4 (2018, BSI) and 5 HR/HS (2022).",
    [
     6
    ]
   ],
   [
    2014,
    "ver",
    "Sony 推出 Quad Bayer：4×4 单元中相邻 2×2 像素同色。暗光时四合一合并成大像素，亮光时重排（remosaic）成标准 Bayer 输出全分辨率，后来成为手机高像素传感器的主流排列。",
    "Sony introduced Quad Bayer in 2014: 4×4 tiles in which each 2×2 block shares one color, binned four-to-one in low light or remosaiced to standard Bayer for full resolution in good light. It became the mainstream layout for high-resolution phone sensors.",
    [
     7
    ]
   ],
   [
    2019,
    "ver",
    "Huawei P30 首次采用 RYYB Quad Bayer，用黄色像素代替绿色（每 16 像素中 8 黄、4 红、4 蓝），提高进光量，但色彩还原需要更复杂的换算。",
    "The Huawei P30 (2019) was the first to use an RYYB Quad Bayer, replacing green with yellow (8 yellow, 4 red, 4 blue per 16 pixels) for more light, at the cost of harder color conversion.",
    [
     7
    ]
   ],
   [
    2020,
    "ver",
    "Samsung Nonacell 采用 3×3 同色像素组、6×6 重复单元（18 绿、9 红、9 蓝），九合一合并，用于 1 亿像素级手机传感器。",
    "Samsung's Nonacell (2020) uses 3×3 same-color groups in a 6×6 repeat (18 green, 9 red, 9 blue), binned nine-to-one, for 100 MP-class phone sensors.",
    [
     7
    ]
   ],
   [
    2022,
    "end",
    "Sigma 停产 DP0/DP1/DP2/DP3 后，截至 2025 年已没有任何量产相机使用 Foveon X3；全画幅 Foveon 的研发因发现关键缺陷而延期，2026 年 3 月仍处于第二阶段原型。叠层方案没能撼动 Bayer。",
    "After Sigma discontinued the DP0/DP1/DP2/DP3 in 2022, no production camera used a Foveon X3 sensor as of 2025; the full-frame Foveon was delayed by a critical flaw and was still a stage-2 prototype in March 2026. The stacked approach never dislodged Bayer.",
    [
     5
    ]
   ]
  ],
  "now": [
   "Bayer 及其衍生排列（Quad Bayer、Nonacell、RYYB、RGBW）仍覆盖几乎所有数码相机和手机传感器。手机高像素传感器普遍采用同色像素组，在合并与重排之间切换；X-Trans 只在 Fujifilm 相机上延续。",
   "Bayer and its derivatives (Quad Bayer, Nonacell, RYYB, RGBW) still cover nearly every camera and phone sensor; high-resolution phone sensors use same-color pixel groups that switch between binning and remosaicing, while X-Trans lives on only in Fujifilm cameras."
  ],
  "replaced": [
   "没有被替代。Foveon 叠层、X-Trans 等竞争方案一直是小众，Foveon 2022 年后已没有新机型。",
   "Not replaced. Rivals such as stacked Foveon and X-Trans stayed niche, and Foveon has had no new production camera since 2022."
  ],
  "refs": [
   {
    "t": "US3971065A — Color imaging array (Google Patents)",
    "u": "https://patents.google.com/patent/US3971065A"
   },
   {
    "t": "Bryce Bayer — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Bryce_Bayer"
   },
   {
    "t": "Peter L. P. Dillon — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Peter_L._P._Dillon"
   },
   {
    "t": "Semiconductor History Museum of Japan — Development of solid-state image-sensing devices",
    "u": "https://www.shmj.or.jp/english/pdf/pkg/exhibi526E.pdf"
   },
   {
    "t": "Kodak DCS — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Kodak_DCS"
   },
   {
    "t": "Foveon X3 sensor — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Foveon_X3_sensor"
   },
   {
    "t": "Fujifilm X-Trans sensor — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Fujifilm_X-Trans_sensor"
   },
   {
    "t": "Bayer filter — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Bayer_filter"
   }
  ]
 },
 "cms": {
  "stages": [
   [
    1990,
    "corp",
    "1980 年代末到 1990 年代初，各厂商各做一套色彩管理：Linotype-Hell DaVinci、Kodak Precision Transforms / KCMS（技术来自 Eikonix，后授权给 Sun）、Adobe PostScript Level 2 的 Color Space Array 与 Color Rendering Dictionary。它们都以 CIE 色空间为中介，但互不兼容（约）。",
    "In the late 1980s and early 1990s each vendor built its own color management — Linotype-Hell DaVinci, Kodak Precision Transforms / KCMS (from Eikonix technology, later licensed to Sun), and Adobe's Color Space Arrays and Color Rendering Dictionaries in PostScript Level 2. All used CIE-based intermediate spaces but were mutually incompatible (approximate).",
    [
     0
    ]
   ],
   [
    1993,
    "mass",
    "Apple 1993 年 1 月发布 ColorSync 1.0，是第一个内置在操作系统里的色彩管理系统。由 Apple Color Imaging Research Group 开发，Robin Myers 为主要架构师、Gary Starkweather 参与，使用 Apple 自有的描述文件格式。",
    "Apple released ColorSync 1.0 in January 1993, the first color management system built into an operating system. It came from Apple's Color Imaging Research Group, with Robin Myers as lead architect and Gary Starkweather contributing, and used a proprietary profile format.",
    [
     0,
     1
    ]
   ],
   [
    1993,
    "corp",
    "1993 年 3 月 Fogra 在慕尼黑召开数字印前研讨会，Adobe 的 James King 主持的专家组发现设备之间缺少交换描述数据的标准，于是 Linotype-Hell、Agfa、Kodak、Apple、SGI、Sun 组成工作组。8 月 Apple 公开 ColorSync 并免费提供给工作组，最终定下以 D50、CIE 1931 观察者为基准的固定 Profile Connection Space。",
    "At Fogra's March 1993 symposium in Munich, a panel chaired by Adobe's James King found there was no standard way to exchange device data, so Linotype-Hell, Agfa, Kodak, Apple, SGI and Sun formed a group. In August Apple opened ColorSync to it free of charge, and the group fixed a single Profile Connection Space based on D50 and the CIE 1931 observer.",
    [
     0
    ]
   ],
   [
    1994,
    "paper",
    "第一版 ICC 规范于 1994 年 6 月 10 日发布（内部编号 3.0），先放在 SGI 的 FTP 上供下载。同年成立 Inter-Color Consortium（后改名 International Color Consortium），Fogra 的 Michael Has 任技术秘书，Apple 的 Michael Stokes 与 SGI 的 Todd Newman 任首届正副主席。",
    "The first ICC specification (internally numbered 3.0) was published on 10 June 1994, first downloadable from an SGI FTP server. That year the Inter-Color Consortium (later International Color Consortium) was formed, with Fogra's Michael Has as technical secretary and Apple's Michael Stokes and SGI's Todd Newman as first chair and vice-chair.",
    [
     0
    ]
   ],
   [
    1995,
    "ver",
    "ColorSync 2.0（1995 年 3 月）改用 ICC 跨平台描述文件，支持扫描仪、相机、显示器、打印机以及 device link；同年 Windows 95 内置 ICM 1.0，同样支持 ICC 描述文件。",
    "ColorSync 2.0 (March 1995) switched to cross-platform ICC profiles covering scanners, cameras, displays and printers, plus device links; Windows 95 the same year shipped ICM 1.0, which also supported ICC profiles.",
    [
     1,
     3
    ]
   ],
   [
    1997,
    "corp",
    "Microsoft 1997 年 4 月 23 日宣布授权 Linotype-Hell 的 LinoColorCMM，作为 ICM 2.0 的默认色彩管理模块。ICM 2.0 随 Windows 98 和 Windows 2000 推出，没有设备描述文件时默认按 sRGB 处理。",
    "On 23 April 1997 Microsoft licensed Linotype-Hell's LinoColorCMM as the default CMM for ICM 2.0, which shipped with Windows 98 and Windows 2000 and falls back to sRGB when no device profile exists.",
    [
     2,
     3
    ]
   ],
   [
    2001,
    "ver",
    "ICC v4 规范于 2001 年 12 月发布，严格规定所有色度数据（包括介质白点）都必须适配到 D50，并为感知和饱和度意图引入参考色域。同年 9 月 ColorSync 4.0 随 Mac OS X 10.1 深度集成进系统。",
    "The ICC v4 specification (December 2001) required all colorimetry, including media white, to be chromatically adapted to D50, and introduced a reference gamut for perceptual and saturation intents. In September that year ColorSync 4.0 shipped deeply integrated into Mac OS X 10.1.",
    [
     0,
     1
    ]
   ],
   [
    2005,
    "ver",
    "ICC v4 以 ISO 15076-1:2005 发布（技术上等同 ICC.1:2004-10），ICC 规范从此由 ISO TC130 与 ICC 共同出版。",
    "ICC v4 was published as ISO 15076-1:2005 (technically identical to ICC.1:2004-10), after which ICC specifications have been co-published by ISO TC130 and the ICC.",
    [
     0
    ]
   ],
   [
    2007,
    "ver",
    "Windows Vista 推出 Windows Color System（WCS），核心 CITE 引擎采用 Canon Kyuanos 技术，支持基于 CIECAM02 的 XML 描述文件、超过 32 bit 的位深、多通道和 HDR，同时兼容 ICC v4 与旧 ICM。",
    "Windows Vista introduced the Windows Color System (WCS), whose CITE engine uses Canon's Kyuanos technology, supporting CIECAM02-based XML profiles, more than 32 bits per pixel, multichannel and HDR color while remaining compatible with ICC v4 and legacy ICM.",
    [
     3
    ]
   ],
   [
    2016,
    "mass",
    "iOS 9.3（2016 年 3 月）为 iOS 带来 ColorSync 支持，首先服务于支持 DCI-P3 广色域的 9.7 英寸 iPad Pro。此前每台 iOS 设备只有 sRGB 一个描述文件。同年秋天的 iPhone 7（iOS 10）成为首款 P3 广色域 iPhone。",
    "iOS 9.3 (March 2016) brought ColorSync support to iOS, first for the DCI-P3 wide-gamut 9.7-inch iPad Pro; before that every iOS device had a single sRGB profile. The iPhone 7 (iOS 10) that autumn became the first P3 wide-gamut iPhone.",
    [
     4
    ]
   ],
   [
    2017,
    "ver",
    "Android 8.0 引入 ColorSpace 与广色域渲染接口，Android 8.1 起支持系统级色彩管理，要求经过良好标定、支持 Display-P3 的屏幕，让 sRGB 和 P3 内容都能正确显示。",
    "Android 8.0 introduced ColorSpace and wide-gamut rendering APIs, and from Android 8.1 the platform supports system color management on well-characterized Display-P3 screens so that sRGB and P3 content both render correctly.",
    [
     5
    ]
   ],
   [
    2019,
    "ver",
    "由 Onyx Graphics 的 Max Derhak 主导的新一代架构 iccMAX（ICC.2）以 ISO 20677:2019 发布，加入光谱数据、色貌处理和非 D50 色度，作为 v4 的扩展而不是替代。",
    "iccMAX (ICC.2), a new architecture led by Max Derhak of Onyx Graphics, was published as ISO 20677:2019, adding spectral data, appearance processing and non-D50 colorimetry as an extension of v4 rather than a replacement.",
    [
     0
    ]
   ],
   [
    2022,
    "ver",
    "Windows 11 22H2 推出 Auto Color Management（ACM，2022 年 10 月公布）：硬件加速的系统级色彩管理，即使应用本身不做色彩管理，颜色也能正确显示，并以 10–16 bit 精度加抖动处理。首批支持 Surface Studio 2+ 和 Surface Pro 9。",
    "Windows 11 22H2 introduced Auto Color Management (announced October 2022): hardware-accelerated system-level color management so even unmanaged apps display correctly, with 10–16-bit precision and dithering, first on the Surface Studio 2+ and Surface Pro 9.",
    [
     6
    ]
   ]
  ],
  "now": [
   "macOS/iOS 的 ColorSync、Android 8.1 起的系统色彩管理、Windows 11 的 ACM 都在系统层把 sRGB、Display P3 等内容正确映射到屏幕。ICC v4 是主流描述文件格式，iccMAX 用于光谱和特殊行业，HDR 由 Apple EDR 和 Windows Advanced Color 处理。",
   "ColorSync on macOS/iOS, Android's system color management since 8.1 and Windows 11 ACM all map sRGB, Display P3 and other content to the screen at the OS level; ICC v4 is the mainstream profile format, iccMAX serves spectral and niche industries, and HDR is handled by Apple EDR and Windows Advanced Color."
  ],
  "replaced": [
   "没有被替代，只在内部迭代：专有格式 → ICC v2 → v4 → iccMAX；Windows 从 ICM 发展到 WCS 再到 ACM，WCS 的 CIECAM02 XML 描述文件很少有人用。",
   "Not replaced, only iterated: proprietary formats → ICC v2 → v4 → iccMAX; Windows went from ICM to WCS to ACM, and WCS's CIECAM02 XML profiles saw little use."
  ],
  "refs": [
   {
    "t": "ICC White Paper #49 — History of the ICC",
    "u": "https://archive.color.org/files/whitepapers/ICC_White_Paper49_ICC_History.pdf"
   },
   {
    "t": "A brief history of ColorSync (The Eclectic Light Company)",
    "u": "https://eclecticlight.co/2025/02/08/a-brief-history-of-colorsync/"
   },
   {
    "t": "Microsoft Licenses LinoColorCMM Technology To Improve Color Management in Windows (1997)",
    "u": "https://news.microsoft.com/source/1997/04/23/microsoft-licenses-linocolorcmm-technology-to-improve-color-management-in-windows/"
   },
   {
    "t": "Windows Color System — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Windows_Color_System"
   },
   {
    "t": "ColorSync Support in iOS 9.3 (Jeff Carlson)",
    "u": "https://jeffcarlson.com/2016/03/23/colorsync-support-in-ios-9-3/"
   },
   {
    "t": "Android Open Source Project — Color management",
    "u": "https://source.android.com/docs/core/display/color-mgmt"
   },
   {
    "t": "DirectX Developer Blog — Auto Color Management (2022)",
    "u": "https://devblogs.microsoft.com/directx/auto-color-management"
   }
  ]
 },
 "dn": {
  "stages": [
   [
    1998,
    "mass",
    "Sony 1998 年 4 月发售 DV 摄录机 DCR-TRV9，首次搭载 NightShot：用机械方式把红外截止滤光片移出光路，借助硅传感器本身对近红外的敏感，配合机身红外 LED 补光，在完全黑暗中（0 lux）约 3 米内成像，画面为单色。",
    "Sony's DCR-TRV9 DV camcorder (April 1998) introduced NightShot: the IR-cut filter is moved out of the light path mechanically so the silicon sensor's native near-IR sensitivity, plus a built-in IR LED, can image in total darkness (0 lux) to about 3 m, in monochrome.",
    [
     0,
     1
    ]
   ],
   [
    1998,
    "end",
    "1998 年 7 月日本杂志《宝岛》（Takarajima）报道，NightShot 在白天配合红外滤镜可以透视部分薄衣物。Sony 随后修改了 CCD-TRV65 等机型的生产，把 NightShot 限制在暗光下使用并配合慢速快门，堵住白天滥用的可能。",
    "In July 1998 the Japanese magazine Takarajima showed that NightShot, used in daylight with an IR filter, could see through some thin fabrics. Sony changed production of models such as the CCD-TRV65 to restrict NightShot to low light with slow shutter speeds, preventing daytime misuse.",
    [
     2
    ]
   ],
   [
    1999,
    "corp",
    "Matsushita（Panasonic）的 Ikoma Ken、Tamura Kazushige、Takakuwa Makoto 1999 年 9 月 1 日申请监控摄像机滤光片切换专利（EP1130457）：根据图像信号电平，白天自动用彩色滤光片，夜间切到可透过红外的黑白模式。这就是后来监控行业的 ICR 日夜切换。",
    "Matsushita (Panasonic) engineers Ken Ikoma, Kazushige Tamura and Makoto Takakuwa filed a surveillance-camera filter-switching patent on 1 September 1999 (EP1130457): based on image signal level it uses a color filter by day and switches to an IR-passing monochrome mode at night — the ICR day/night switching later standard in CCTV.",
    [
     3
    ]
   ],
   [
    2001,
    "ver",
    "Sony 推出 Super NightShot（DCR-TRV30、TRV20、PC110 等机型）：在 NightShot 基础上自动把快门从 1/60 秒放慢到 1/4 秒，灵敏度约提高一倍；另有 Color Slow Shutter 用慢快门在暗光下保留色彩（约）。",
    "Sony introduced Super NightShot (DCR-TRV30, TRV20, PC110 and others): on top of NightShot it automatically slows the shutter from 1/60 s to 1/4 s for roughly double the sensitivity, alongside Color Slow Shutter for keeping color in dim light (approximate).",
    [
     1
    ]
   ],
   [
    2006,
    "ver",
    "Honeywell 2006 年 2 月 27 日发布 HCD484E「True Day/Night」彩色摄像机：可移动的红外截止滤光片白天位于光路中拍彩色，夜间移开、借红外拍黑白，可选配 SWX75/SWX200 红外灯。机械 ICR 已是监控摄像机的常规配置。",
    "Honeywell announced the HCD484E 'True Day/Night' color camera on 27 February 2006: a movable IR-cut filter sits in the path for daytime color and retracts at night for IR-assisted monochrome, with optional SWX75/SWX200 IR illuminators — mechanical ICR was by then routine in CCTV.",
    [
     4
    ]
   ],
   [
    2011,
    "rival",
    "Axis 推出 Lightfinder 技术（首款机型 Q1602），靠高灵敏传感器、大光圈镜头和自研 ARTPEC 芯片的图像处理，在极低照度下仍停留在彩色模式、不切换到黑白（约）。",
    "Axis introduced Lightfinder (first in the Q1602), using a sensitive sensor, fast optics and its ARTPEC system-on-chip processing to stay in color mode instead of switching to monochrome in very low light (approximate).",
    [
     7
    ]
   ],
   [
    2015,
    "ver",
    "Sony 发布面向监控的 STARVIS 背照式 CMOS 技术。IMX290LQR 于 2015 年 6 月量产，同像素尺寸下可见光灵敏度是旧产品的 2 倍以上，850 nm 近红外灵敏度是 3 倍以上，同时增强了彩色夜视和红外夜视。",
    "Sony launched STARVIS back-illuminated CMOS for surveillance; the IMX290LQR entered mass production in June 2015 with more than 2× visible and more than 3× 850 nm near-IR sensitivity versus same-pixel-size predecessors, improving both color and IR night imaging.",
    [
     5
    ]
   ],
   [
    2018,
    "rival",
    "Hikvision 推出第一代 ColorVu 全彩夜视摄像机：F1.0 超大光圈镜头加高灵敏传感器，光线不足时用暖光补光而不是红外，力求 24 小时彩色画面。",
    "Hikvision introduced the first-generation ColorVu full-color cameras in 2018: F1.0 super-aperture lenses and high-sensitivity sensors, with warm white supplemental light instead of IR, aiming for 24/7 color video.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Hikvision 于 2020 年 10 月发布 ColorVu 2.0：加入 4K 分辨率和 2.8–12 mm 电动变焦，F1.0 进光量约为 F2.0 的 4 倍，配合 3D 降噪、暖光补光和 AcuSense 深度学习人车识别。",
    "Hikvision released ColorVu 2.0 in October 2020, adding 4K resolution and 2.8–12 mm motorized varifocal lenses; F1.0 admits about 4× the light of F2.0, combined with 3D noise reduction, warm supplemental light and AcuSense deep-learning person/vehicle detection.",
    [
     6
    ]
   ]
  ],
  "now": [
   "监控摄像机普遍同时配备 ICR 日夜切换和红外补光，中高端产品同时提供「全彩」方案（F1.0 镜头、STARVIS 类高灵敏传感器、暖光补光）以及红外与白光混合补光。消费摄录机的 NightShot 已随摄录机市场萎缩，手机改用多帧合成的夜景模式。",
   "Surveillance cameras routinely combine ICR day/night switching with IR illumination, while mid- to high-end lines also offer 'full-color' designs (F1.0 lenses, STARVIS-class sensors, warm light) and hybrid IR/white-light illumination. Camcorder NightShot faded with the camcorder market, and phones use multi-frame night modes instead."
  ],
  "replaced": [
   "移除 IR-cut 的黑白红外夜视没有被淘汰，仍是成本最低、照射距离最远的方案。但在需要辨认颜色的场景（衣着、车辆颜色），它正逐步被全彩夜视和混合补光取代。",
   "IR-cut-removal monochrome night vision is not obsolete — it remains the cheapest, longest-range option — but where color matters (clothing, vehicle color) it is being displaced by full-color night imaging and hybrid illumination."
  ],
  "refs": [
   {
    "t": "Sony Handycam history (sony.jp)",
    "u": "https://www.sony.jp/handycam/history/"
   },
   {
    "t": "Sony — NightShot / Super NightShot / Color Slow Shutter (sony.jp)",
    "u": "https://www.sony.jp/products/Consumer/VD/dictionary/point03.html"
   },
   {
    "t": "This Sony camera got pulled because it had X-ray vision (Digital Camera World)",
    "u": "https://www.digitalcameraworld.com/cameras/camcorders/this-sony-camera-got-pulled-because-it-had-superman-x-ray-vision-that-could-see-through-clothes"
   },
   {
    "t": "EP1130457A1 — Camera and device for switching optical filters (Panasonic)",
    "u": "https://patents.google.com/patent/EP1130457A1/en"
   },
   {
    "t": "Honeywell Introduces High-Resolution True Day Night Camera (2006)",
    "u": "https://www.securityinfowatch.com/video-surveillance/press-release/10559014/honeywell-honeywell-introduces-high-resolution-true-day-night-camera"
   },
   {
    "t": "Sony Shows Off a New Ultra-Sensitive CMOS Sensor Called STARVIS (PetaPixel)",
    "u": "https://petapixel.com/2015/10/26/sony-shows-off-a-new-ultra-sensitive-cmos-sensor-called-starvis"
   },
   {
    "t": "Hikvision releases ColorVu 2.0 cameras (TASS press release)",
    "u": "https://tass.com/press-releases/1212757/amp"
   },
   {
    "t": "Axis Lightfinder",
    "u": "https://www.axis.com/technologies/lightfinder"
   }
  ]
 },
 "srgb": {
  "stages": [
   [
    1990,
    "idea",
    "ITU-R BT.709 的 HDTV 三原色于 1990 年 4 月获得全球一致通过。后来 sRGB 直接沿用这套原色和 D65 白点，以便与电视内容兼容。",
    "The ITU-R BT.709 HDTV primaries won unanimous worldwide agreement in April 1990; sRGB later adopted the same primaries and D65 white point for compatibility with television content.",
    [
     0
    ]
   ],
   [
    1996,
    "paper",
    "HP 的 Michael Stokes、Ricardo Motta 与 Microsoft 的 Matthew Anderson、Srinivasan Chandrasekar 发布《A Standard Default Color Space for the Internet – sRGB》（v1.10，1996 年 11 月 5 日）：以典型 CRT（平均 gamma 约 2.2）和 64 lux 的昏暗办公观看环境为基准，为网页上没有描述文件的图像约定一个默认色彩空间。",
    "HP's Michael Stokes and Ricardo Motta and Microsoft's Matthew Anderson and Srinivasan Chandrasekar issued 'A Standard Default Color Space for the Internet – sRGB' (v1.10, 5 November 1996): based on a typical CRT (average gamma about 2.2) and a dim 64 lux viewing environment, it set a default for untagged images on the web.",
    [
     0,
     1
    ]
   ],
   [
    1997,
    "ver",
    "日本 JEIDA 的 Exif 2.0（1997 年 11 月）加入 sRGB 色彩空间标记，数码相机从此可以声明照片按 sRGB 编码。",
    "JEIDA's Exif 2.0 (November 1997) added an sRGB color space tag, letting digital cameras declare photos as sRGB-encoded.",
    [
     2
    ]
   ],
   [
    1998,
    "mass",
    "Windows 98 附带的 ICM 2.0 把 sRGB 作为系统默认色彩空间：显示器没有描述文件时按 sRGB 处理，输入图像没有指定色彩空间时也按 sRGB 映射。sRGB 由此成为 PC 上的事实标准。",
    "ICM 2.0 in Windows 98 made sRGB the system default: sRGB is assumed when a monitor has no profile and used as the input space for untagged images, making sRGB the de facto PC standard.",
    [
     3
    ]
   ],
   [
    1998,
    "rival",
    "Adobe 在 Photoshop 5.0 中推出 Adobe RGB (1998)，绿色原色比 sRGB 更饱和，能覆盖更多 CMYK 印刷色，成为专业摄影和印前的广色域替代选择。",
    "Adobe introduced Adobe RGB (1998) with Photoshop 5.0: a more saturated green primary covers more of the CMYK print gamut, making it the wide-gamut alternative for professional photography and prepress.",
    [
     6
    ]
   ],
   [
    1998,
    "ver",
    "Exif 2.1（1998 年 12 月）加入 DCF 互操作标签。DCF 规定数码相机默认以 sRGB 记录，相机、打印机和电脑之间直接按 sRGB 交换照片。",
    "Exif 2.1 (December 1998) added DCF interoperability tags; DCF made sRGB the default for camera recording, so cameras, printers and PCs exchange photos as sRGB.",
    [
     2
    ]
   ],
   [
    1999,
    "paper",
    "IEC 于 1999 年 10 月 18 日发布 IEC 61966-2-1:1999，sRGB 成为正式国际标准，并修正了草案中的小舍入误差。传输函数采用低端线性段加偏移幂函数的分段曲线，与纯 2.2 gamma 略有差别。",
    "The IEC published IEC 61966-2-1:1999 on 18 October 1999, making sRGB a formal international standard and fixing small rounding errors in the draft; its transfer function is piecewise — a linear toe plus an offset power law — slightly different from a pure 2.2 gamma.",
    [
     1
    ]
   ],
   [
    1999,
    "corp",
    "Microsoft 1999 年 8 月发布 Windows 2000 色彩方案时提出 sRGB64，一种线性编码的 64 bit RGB 空间，面向图形设计、视频和游戏中超出 sRGB 范围和 8 bit 精度的需求。",
    "Announcing Windows 2000's color features in August 1999, Microsoft proposed sRGB64, a linearly encoded 64-bit RGB space for graphics, video and gaming needs beyond sRGB's range and 8-bit precision.",
    [
     4
    ]
   ],
   [
    2003,
    "ver",
    "IEC 61966-2-1 的 Amendment 1（2003）加入 sYCC（YCbCr 编码，可表达超出 sRGB 的颜色）和 bg-sRGB 等超过 8 bit 的扩展编码。",
    "Amendment 1 to IEC 61966-2-1 (2003) added sYCC (a YCbCr encoding that can carry colors beyond sRGB) and bg-sRGB extended encodings for more than 8 bits.",
    [
     1
    ]
   ],
   [
    2003,
    "ver",
    "Exif 2.21（2003 年 9 月）加入对 Adobe RGB 的支持，相机可以在 sRGB 和 Adobe RGB 之间选择。sRGB 从此不再是唯一选项，但仍是默认。",
    "Exif 2.21 (September 2003) added Adobe RGB support, letting cameras choose between sRGB and Adobe RGB — sRGB was no longer the only option but stayed the default.",
    [
     2
    ]
   ],
   [
    2015,
    "rival",
    "Apple 2015 年的 iMac 成为首台内置广色域屏幕的消费电脑，采用 Display P3：DCI-P3 原色、D65 白点，沿用 sRGB 传输曲线。此后 iPhone、Mac 和网页（CSS display-p3）逐步转向 P3。",
    "Apple's 2015 iMac became the first consumer computer with a built-in wide-gamut display, using Display P3: DCI-P3 primaries, D65 white and the sRGB transfer curve. iPhone, Mac and the web (CSS display-p3) then moved toward P3.",
    [
     5
    ]
   ]
  ],
  "now": [
   "sRGB 仍是网页、操作系统和没有描述文件的图像的默认色彩空间，也是绝大多数 JPEG 照片和普通显示器的基准。手机和高端显示器已转向 Display P3，HDR 内容使用 Rec.2020 加 PQ/HLG。",
   "sRGB remains the default for the web, operating systems and untagged images, and the baseline for most JPEGs and ordinary monitors; phones and premium displays have moved to Display P3, and HDR content uses Rec.2020 with PQ/HLG."
  ],
  "replaced": [
   "没有被淘汰，但在高端设备上正被广色域空间分流：专业印刷用 Adobe RGB，Apple 生态和新手机用 Display P3，HDR 视频用 Rec.2020。sRGB 退居为兜底的「最低共同标准」。",
   "Not obsolete, but displaced at the high end by wide-gamut spaces — Adobe RGB in professional print, Display P3 in Apple's ecosystem and new phones, Rec.2020 in HDR video — leaving sRGB as the lowest-common-denominator fallback."
  ],
  "refs": [
   {
    "t": "A Standard Default Color Space for the Internet – sRGB (W3C)",
    "u": "https://www.w3.org/Graphics/Color/sRGB.html"
   },
   {
    "t": "sRGB — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/SRGB"
   },
   {
    "t": "Exif — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Exif"
   },
   {
    "t": "What's New in Version 2.0 of ICM (MSDN archive)",
    "u": "https://techshelps.github.io/MSDN/ICM/devdoc/live/pdgrmm/icm_82i5.htm"
   },
   {
    "t": "Windows 2000 Achieves Scalable Color Solution for All Users (Microsoft, 1999)",
    "u": "https://news.microsoft.com/source/1999/08/31/windows-2000-achieves-scalable-color-solution-for-all-users/"
   },
   {
    "t": "DCI-P3 — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/DCI-P3"
   },
   {
    "t": "Adobe RGB color space — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Adobe_RGB_color_space"
   }
  ]
 },
 "argb": {
  "stages": [
   [
    1997,
    "corp",
    "Adobe 开始为 Photoshop 新加的 ICC 色彩管理制作工作空间 profile，Photoshop 首席开发者 Thomas Knoll 以高清电视暂行标准 SMPTE 240M 为蓝本建了一个比 sRGB 更宽的 RGB 空间，但误抄了理想化而非实际的原色值，红原色坐标也抄错了。",
    "Adobe began building working-space ICC profiles for Photoshop's new colour management; lead developer Thomas Knoll based a wider-than-sRGB space on the SMPTE 240M HDTV standard, but copied idealised rather than actual primaries and mis-copied the red primary.",
    [
     0
    ]
   ],
   [
    1998,
    "mass",
    "Photoshop 5.0 随附这一空间（最初名为 SMPTE-240M）。用户指出数值与标准不符后，Adobe 发现「错」的原色反而让 CMYK 转换更好，于是保留数值、改名 Adobe RGB (1998)，同时避开 SMPTE 商标问题。绿原色更饱和，覆盖了印刷 CMYK 的大部分青绿色。",
    "Photoshop 5.0 shipped the space (first labelled SMPTE-240M). When users noted it did not match the standard, Adobe found the 'wrong' primaries actually improved CMYK conversion, so it kept the numbers and renamed it Adobe RGB (1998), also sidestepping trademark issues. Its more saturated green covers most printable CMYK cyan-greens.",
    [
     0
    ]
   ],
   [
    1999,
    "paper",
    "IEC 把同一色彩空间以 opRGB（optional RGB）之名纳入 IEC 61966-2-5 标准体系，与 sRGB（IEC 61966-2-1）并列。",
    "The IEC adopted the same space as opRGB ('optional RGB') in IEC 61966-2-5, alongside sRGB (IEC 61966-2-1).",
    [
     0
    ]
   ],
   [
    2001,
    "mass",
    "Nikon D1X 加入可选色彩空间（sRGB 或 Adobe RGB (1998)），改掉了初代 D1 只用接近 NTSC 色域的做法；同年 Canon EOS-1D、次年 EOS-1Ds 也提供 Adobe RGB，Adobe RGB 成为专业数码单反的标配选项。",
    "The Nikon D1X added a selectable colour space (sRGB or Adobe RGB 1998), replacing the original D1's NTSC-like space; Canon's EOS-1D (2001) and EOS-1Ds (2002) followed, making Adobe RGB a standard option on pro DSLRs.",
    [
     1
    ]
   ],
   [
    2002,
    "rival",
    "Kodak 的 ROMM RGB（ProPhoto RGB）以 ANSI/I3A IT10.7666-2002 发布，色域覆盖 CIE L*a*b* 中 90% 以上的物体表面色，比 Adobe RGB 更宽，成为 RAW 处理与印前的「超大」工作空间。",
    "Kodak's ROMM RGB (ProPhoto RGB) was published as ANSI/I3A IT10.7666-2002, covering over 90% of real surface colours in CIE L*a*b* — wider than Adobe RGB — and became the 'oversized' working space for raw processing and prepress.",
    [
     2
    ]
   ],
   [
    2004,
    "mass",
    "EIZO 在 2004 年 9 月 Photokina 发布 ColorEdge CG220（22.2 英寸、1920×1200），称为业界首款覆盖 Adobe RGB 色域的 LCD 显示器，2004 年 11 月量产；此前普通 CCFL 背光 LCD 只有约 70% Adobe RGB。",
    "EIZO unveiled the ColorEdge CG220 (22.2-inch, 1920×1200) at Photokina in September 2004, billed as the first LCD covering the Adobe RGB gamut; mass production began November 2004, when ordinary CCFL LCDs reached only about 70% of Adobe RGB.",
    [
     3
    ]
   ],
   [
    2005,
    "paper",
    "2005 年 5 月 13 日 Adobe 正式公开《Adobe RGB (1998) Color Image Encoding》技术规范，给出原色、白点（D65）、伽马（563/256≈2.2）和参考观看环境。",
    "On 13 May 2005 Adobe published the 'Adobe RGB (1998) Color Image Encoding' specification, defining the primaries, D65 white point, gamma (563/256 ≈ 2.2) and reference viewing conditions.",
    [
     0
    ]
   ],
   [
    2005,
    "ver",
    "NEC SpectraView Reference 21（LCD2180WG-LED）2005 年 6 月投产、8 月交付，号称全球首款 LED 背光桌面 LCD：用红绿蓝三色 LED 背光，色域超过 100% Adobe RGB 与 NTSC。",
    "NEC's SpectraView Reference 21 (LCD2180WG-LED) entered production in June 2005 and shipped in August as the first LED-backlit desktop LCD; its RGB LED backlight exceeded 100% of Adobe RGB and NTSC.",
    [
     4
    ]
   ],
   [
    2007,
    "ver",
    "IEC 61966-2-5（opRGB）出了最新修订版（2007 年 11 月 7 日），后来 HDMI 等接口规范也用 opRGB 这一名称标记该色域。",
    "IEC 61966-2-5 (opRGB) received its latest edition on 7 November 2007; interface specifications such as HDMI later used the opRGB name for this gamut.",
    [
     0
    ]
   ],
   [
    2011,
    "ver",
    "ISO 12640-4:2011 把 Adobe RGB 收作印刷与图像交换用的标准测试图像编码之一，进一步巩固它在印前领域的地位。",
    "ISO 12640-4:2011 adopted Adobe RGB as one of the standard test-image encodings for graphic arts, cementing its role in prepress.",
    [
     0
    ]
   ],
   [
    2013,
    "mass",
    "Samsung Galaxy S4 的 Super AMOLED 屏加入「Professional Photo」屏幕模式（部分地区直接标为「Adobe RGB」），DisplayMate 测得它相当接近 Adobe RGB 标准，是手机上较早的 Adobe RGB 模式。",
    "The Samsung Galaxy S4's Super AMOLED screen added a 'Professional Photo' mode (labelled 'Adobe RGB' in some regions), which DisplayMate found fairly close to the Adobe RGB standard — an early Adobe RGB mode on a phone.",
    [
     5
    ]
   ],
   [
    2015,
    "rival",
    "Apple 在 2015 年 10 月的 Retina 5K iMac 上改用 Display P3（DCI-P3 原色 + D65 + sRGB 曲线），随后 iPhone 7 等手机和电脑跟进；P3 的红色更宽而青绿色不如 Adobe RGB，在消费电子上取代了 Adobe RGB 的「广色域」角色。",
    "Apple's October 2015 Retina 5K iMac switched to Display P3 (DCI-P3 primaries, D65, sRGB curve), followed by the iPhone 7 and other devices; P3 has a wider red but less cyan-green than Adobe RGB, and took over the 'wide gamut' role in consumer electronics.",
    [
     6
    ]
   ]
  ],
  "now": [
   "Adobe RGB 仍是相机可选色彩空间和摄影/印前专业显示器的核心指标（高端型号标称 99% 左右覆盖），但在手机、电脑和视频领域已基本让位给 Display P3 和 Rec.2020。",
   "Adobe RGB remains a selectable camera colour space and a key spec for photo/prepress monitors (high-end models quote about 99% coverage), but phones, computers and video have largely moved to Display P3 and Rec.2020."
  ],
  "replaced": [
   "消费级设备的广色域被 Display P3 取代，HDR 视频用 Rec.2020；RAW 后期多用 ProPhoto RGB 等更宽的工作空间，Adobe RGB 退守印刷相关的摄影工作流。",
   "Consumer wide gamut was taken over by Display P3 and HDR video by Rec.2020; raw workflows use wider spaces such as ProPhoto RGB, leaving Adobe RGB to print-oriented photography."
  ],
  "refs": [
   {
    "t": "Adobe RGB color space - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Adobe_RGB_color_space"
   },
   {
    "t": "Nikon D1x Review - DPReview",
    "u": "https://www.dpreview.com/reviews/nikond1x"
   },
   {
    "t": "ProPhoto RGB color space - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/ProPhoto_RGB_color_space"
   },
   {
    "t": "EIZO Introduces ColorEdge CG220 LCD Monitor to Photo Market - CreativePro",
    "u": "https://creativepro.com/eizo-introduces-coloredge-cg220-lcd-monitor-to-photo-market/"
   },
   {
    "t": "NEC Display Solutions Introduces the World's First LED-Backlit LCD Desktop Display",
    "u": "https://sharpnecdisplays.us/about/press-release/nec-display-solutions-introduces-the-worlds-first-/363"
   },
   {
    "t": "Galaxy S4 Display Technology Shoot-Out - DisplayMate",
    "u": "https://displaymate.com/Galaxy_S4_ShootOut_1.htm"
   },
   {
    "t": "DCI-P3 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/DCI-P3"
   }
  ]
 },
 "film": {
  "stages": [
   [
    1994,
    "idea",
    "富士胶片 1934 年创立后积累了几十年胶片配色经验；1990 年代的 Fujichrome 反转片线 Velvia（高饱和）、Provia（1994 年推出、2001 年改进为 Provia 100F）、Astia（柔和肤色）各有一套色彩与反差取向，后来成为数码「胶片模拟」的命名来源。",
    "Fujifilm, founded in 1934, built decades of film colour know-how; its 1990s Fujichrome reversal lines — Velvia (saturated), Provia (launched 1994, improved to Provia 100F in 2001) and Astia (soft skin tones) — each had a distinct colour and contrast character that later named its digital Film Simulations.",
    [
     0
    ]
   ],
   [
    2003,
    "proto",
    "2003 年 2 月 PMA 前发布的 FinePix F700（首款 SuperCCD SR，599.95 美元）在 FinePix Color 菜单里提供 Normal、Chrome（高饱和）和 B&W，机内直接出偏胶片取向的 JPEG，是胶片模拟的前身。",
    "The FinePix F700 (first SuperCCD SR camera, US$599.95), announced before PMA in February 2003, offered Normal, Chrome (high saturation) and B&W in its FinePix Color menu — in-camera film-leaning JPEGs that foreshadowed Film Simulation.",
    [
     1
    ]
   ],
   [
    2004,
    "mass",
    "2004 年 2 月 5 日发布、10 月上市的 FinePix S3 Pro 正式引入 Film Simulation：Standard、F1（人像）、F2（近似 Velvia），把「换胶卷」变成机内设置，让摄影师不必拍 RAW 也能选色彩风格。富士官方把胶片模拟的诞生定在 2004 年。",
    "The FinePix S3 Pro (announced 5 February 2004, on sale October 2004) formally introduced Film Simulation — Standard, F1 (portrait) and F2 (Velvia-like) — turning 'changing film' into a camera setting so photographers need not shoot raw. Fujifilm dates Film Simulation to 2004.",
    [
     0,
     2
    ]
   ],
   [
    2008,
    "ver",
    "2008 年 1 月 24 日发布的 FinePix S100FS（fs 即 film simulation）第一次在数码相机上直接使用 Fujichrome 品牌名：Provia（标准）、Velvia（鲜艳）、Astia（柔和）。",
    "The FinePix S100FS ('fs' for film simulation), announced 24 January 2008, was the first Fujifilm digital camera to use Fujichrome names directly: Provia (standard), Velvia (vivid) and Astia (soft).",
    [
     3
    ]
   ],
   [
    2011,
    "ver",
    "X100 把 Provia / Velvia / Astia 与带滤镜的单色模式做进复古旁轴的核心体验，随 X 系统成为富士 JPEG 直出文化的标志，胶片模拟从附加功能变成品牌卖点。",
    "The X100 built Provia / Velvia / Astia and filtered monochrome modes into its retro rangefinder experience; with the X system it made Fujifilm's straight-out-of-camera JPEG culture iconic, turning Film Simulation from a feature into a brand pillar.",
    [
     0
    ]
   ],
   [
    2014,
    "ver",
    "X30 首发 Classic Chrome：低饱和、偏硬反差，模仿纪实杂志常用的反转片质感，此后成为最受欢迎的模拟之一。",
    "The X30 debuted Classic Chrome — muted colour with firm contrast, modelled on the reversal film of documentary magazines — which became one of the most popular simulations.",
    [
     4
    ]
   ],
   [
    2016,
    "rival",
    "Huawei P9 与 Leica 合作，在手机相机里加入 Leica Standard / Vivid / Smooth 三种「胶片模式」，并可用于视频和全景，是手机上较早的「胶片色彩配方」。",
    "The Huawei P9, co-engineered with Leica, added three 'film modes' — Leica Standard, Vivid and Smooth — usable for video and panoramas too, an early 'film colour recipe' on a phone.",
    [
     5
    ]
   ],
   [
    2016,
    "ver",
    "X-Pro2 加入 Acros 黑白模拟，按 ISO 加入颗粒、暗部更深；同年起颗粒效果（Grain Effect）也成为可调项。",
    "The X-Pro2 added the Acros black-and-white simulation with ISO-dependent grain and deeper shadows; grain effect became an adjustable setting from this generation.",
    [
     0
    ]
   ],
   [
    2019,
    "ver",
    "2018 年 X-H1 带来面向视频的 Eterna（低饱和、宽影调，模仿电影负片）；2019 年 X-Pro3 带来 Classic Neg.，模仿 Superia 彩色负片的偏色和硬对比。",
    "The 2018 X-H1 brought Eterna for video (muted, wide tonality, modelled on cine negative); the 2019 X-Pro3 brought Classic Neg., modelled on the colour shifts and hard contrast of Superia negative film.",
    [
     0
    ]
   ],
   [
    2021,
    "rival",
    "富士 GFX100S 首发 Nostalgic Neg.（琥珀色高光、印片质感）；同年 Apple iPhone 13 推出 Photographic Styles（标准 / 高对比 / 鲜明 / 暖 / 冷），在多帧合成管线中按区域调色并保护肤色，但风格在拍摄时就固定写入。",
    "Fujifilm's GFX100S debuted Nostalgic Neg. (amber highlights, print look); the same year Apple's iPhone 13 introduced Photographic Styles (Standard, Rich Contrast, Vibrant, Warm, Cool), applied regionally in the multi-frame pipeline while protecting skin tones, but baked in at capture.",
    [
     0,
     7
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 9 月 12 日随 GFX100 II 发布 Reala Ace：色彩还原忠实、高光偏硬、暗部柔和，号称「全能」模拟，之后通过固件下放到 X100VI、X-T5、X-H2 等机型。",
    "Reala Ace launched with the GFX100 II on 12 September 2023 — faithful colour, firmer highlights, softer shadows, billed as an all-rounder — and was later brought to the X100VI, X-T5, X-H2 and others.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "iPhone 16 系列推出新一代 Photographic Styles：按肤色设计的多种底色（Undertone）与心情风格，可在拍摄后反复修改、无损撤销，手机「胶片配方」从一次性滤镜变成可编辑的渲染参数。",
    "The iPhone 16 line introduced next-generation Photographic Styles with skin-tone-aware undertones and mood styles that can be changed or removed after capture, turning the phone 'film recipe' from a one-shot filter into an editable rendering parameter.",
    [
     7
    ]
   ]
  ],
  "now": [
   "富士已有约 20 种胶片模拟，社区「配方」文化盛行；手机端 Apple、Huawei、Xiaomi 等都提供可编辑的色彩风格或与 Leica 等合作的影调，色彩配方成为成像品牌差异化的核心。",
   "Fujifilm now offers around 20 film simulations with a thriving 'recipe' culture; on phones Apple, Huawei, Xiaomi and others provide editable colour styles or Leica-style tunings, making colour recipes a core brand differentiator."
  ],
  "replaced": [
   "尚未被替代；趋势是从拍摄时烘焙进 JPEG 变成随 RAW/HEIF 保存、拍后可改的渲染参数，以及在 Lightroom 等软件里以 Camera Profile 形式复现。",
   "Not replaced; the trend is from baking into JPEG at capture to storing the look as an editable rendering parameter with RAW/HEIF, and reproducing it as camera profiles in software such as Lightroom."
  ],
  "refs": [
   {
    "t": "Film Simulation - FUJIFILM X Series & GFX",
    "u": "https://www.fujifilm-x.com/en-gb/products/film-simulation/"
   },
   {
    "t": "Fujifilm FinePix F700 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/fujifilmf700"
   },
   {
    "t": "Fujifilm FinePix S3 Pro Review - DPReview",
    "u": "https://www.dpreview.com/reviews/fujifilms3pro"
   },
   {
    "t": "The Film in Fujifilm Goes Digital in the S100fs - Reviewed",
    "u": "https://www.reviewed.com/cameras/news/the-film-in-fujifilm-goes-digital-in-the-s100fs-17320"
   },
   {
    "t": "Film Simulation: Classic Chrome - FUJIFILM X",
    "u": "https://www.fujifilm-x.com/en-gb/stories/film-simulation-classic-chrome/"
   },
   {
    "t": "Huawei P9 review - GSMArena",
    "u": "https://www.gsmarena.com/huawei_p9-review-1428p8.php"
   },
   {
    "t": "New: Reala Ace Film Simulation - Fuji X Weekly",
    "u": "https://fujixweekly.com/2023/09/12/new-reala-ace-film-simulation"
   },
   {
    "t": "Customizing Your iPhone 16 Images With Photographic Styles - MacRumors",
    "u": "https://www.macrumors.com/guide/iphone-16-photographic-styles/"
   }
  ]
 },
 "cct": {
  "stages": [
   [
    1986,
    "mass",
    "约 1980 年代后期，家用 VHS 摄像机如 Panasonic NV-M5 在镜头旁装独立 AWB 传感器：几只带 R/G/B 滤光片的光电二极管直接测环境光颜色，输出三路信号给白平衡电路。",
    "Around the late 1980s, VHS camcorders such as the Panasonic NV-M5 carried a separate AWB sensor beside the lens — photodiodes with R/G/B filters measuring the ambient light colour directly and feeding three channels to the white-balance circuit.",
    [
     0
    ]
   ],
   [
    2000,
    "mass",
    "约 2000 年前后，Kodak DCS 系列专业数码单反机身正面有一个标志性的独立白平衡传感器窗口，用来测环境光色温辅助自动白平衡。",
    "Around 2000, Kodak DCS professional DSLRs had a distinctive separate white-balance sensor window on the front of the body to measure ambient light colour for auto white balance.",
    [
     1
    ]
   ],
   [
    2001,
    "rival",
    "2001 年 3 月发布的 Kodak DCS 760 取消了这个外置白平衡传感器，改为直接根据图像数据计算白平衡——基于图像统计的 TTL 白平衡成为主流竞争方案。",
    "The Kodak DCS 760, announced March 2001, dropped the external white-balance sensor and computed white balance from image data instead — image-statistics TTL white balance became the dominant rival approach.",
    [
     1
    ]
   ],
   [
    2003,
    "mass",
    "2003 年 7 月 22 日发布的 Nikon D2H 用混合白平衡：1005 像素 RGB 测光 CCD + LBCAST 图像传感器 + 机顶外置 Ambient Light Sensor；后者不受被摄体颜色影响地测环境光，还能识别光源频闪区分人造光与日光。",
    "The Nikon D2H (announced 22 July 2003) used hybrid white balance: a 1,005-pixel RGB metering CCD, the LBCAST image sensor and an external Ambient Light Sensor on the prism, which metered ambient light independent of subject colour and detected flicker to tell artificial light from daylight.",
    [
     2
    ]
   ],
   [
    2018,
    "mass",
    "Huawei P20 Pro 在闪光灯模组里加入色温传感器，评估整个场景的环境光色温，帮助区分肤色和环境色；同期的标准版 P20 没有这颗传感器。",
    "The Huawei P20 Pro added a colour-temperature sensor in the flash module to assess ambient colour temperature across the scene and separate skin tones from room colour; the standard P20 omitted it.",
    [
     3
    ]
   ],
   [
    2019,
    "corp",
    "ams 在 CES 2019 展示 AS7341：3.1×2.0×1.0 mm 封装内的 11 通道光谱传感器，覆盖整个可见光，用于手机相机自动白平衡、光源识别与频闪检测，2019 年 2 月量产。",
    "ams showed the AS7341 at CES 2019: an 11-channel spectral sensor covering the visible range in a 3.1×2.0×1.0 mm package, aimed at phone-camera auto white balance, light-source identification and flicker detection; mass production began February 2019.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "Huawei P40 Pro 把色温传感器从 3 通道升级为 8 通道多光谱，配合 AI AWB 算法，官方称色彩准确度提升 45%。",
    "The Huawei P40 Pro upgraded its colour-temperature sensor from 3 to 8 multispectral channels; with an AI AWB algorithm, Huawei claimed 45% better colour precision.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Huawei P50 Pro 延续多光谱色温传感器，用于优化白平衡与色彩还原；多光谱 AWB 辅助传感器此后在国产旗舰中逐渐普及。",
    "The Huawei P50 Pro kept a multispectral colour-temperature sensor for white balance and colour rendering; multispectral AWB helper sensors then spread across Chinese flagships.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Huawei Mate 70 系列首发「红枫原色摄像头」：约 150 万像素的成像式多光谱传感器，有 150 万以上的多光谱通道，同时获得二维图像和光谱，可按区域分析混合光；官方称 D65 下平均 ΔE 低于 1.2，比 Mate 60 Pro 降低约 37%。",
    "The Huawei Mate 70 series debuted the 'Red Maple' true-colour camera: a ~1.5 MP imaging multispectral sensor with over 1.5 million spectral channels, capturing image and spectrum together to analyse mixed lighting by region; Huawei claims average ΔE below 1.2 under D65, about 37% lower than the Mate 60 Pro.",
    [
     7
    ]
   ]
  ],
  "now": [
   "高端手机普遍配多通道光谱传感器辅助 AWB，并从单点测量走向成像式多光谱（华为红枫）；专业相机则基本只靠图像传感器自身数据做白平衡。",
   "High-end phones commonly carry multichannel spectral sensors to aid AWB, moving from single-point measurement to imaging multispectral sensors (Huawei Red Maple); dedicated cameras mostly rely on the image sensor's own data."
  ],
  "replaced": [
   "在相机上，早期外置白平衡传感器被基于图像统计和 AI 的 TTL 白平衡取代；在手机上，3 通道色温传感器正被多光谱及成像式光谱传感器取代。",
   "In cameras, early external white-balance sensors were replaced by image-statistics and AI-based TTL white balance; in phones, 3-channel colour sensors are giving way to multispectral and imaging spectral sensors."
  ],
  "refs": [
   {
    "t": "Panasonic NV-M5 teardown - Experimental Engineering",
    "u": "https://experimental-engineering.co.uk/tag/ccd"
   },
   {
    "t": "Kodak DCS 760 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/kodakdcs760/10"
   },
   {
    "t": "Nikon D2H - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nikon_D2H"
   },
   {
    "t": "Huawei P20 Pro Leica triple camera explained - Android Authority",
    "u": "https://www.androidauthority.com/huawei-p20-pro-leica-triple-camera-explained-849537"
   },
   {
    "t": "New multi-channel spectral sensor from ams - EE Journal",
    "u": "https://www.eejournal.com/industry_news/new-multi-channel-spectral-sensor-from-ams-set-to-transform-the-market-for-mobile-color-light-measurement/"
   },
   {
    "t": "HUAWEI P40 Pro+ camera design",
    "u": "https://consumer.huawei.com/en/campaign/p40/sophisticated-camera-system"
   },
   {
    "t": "Huawei P50 Pro Camera test - DXOMARK",
    "u": "https://www.dxomark.com/huawei-p50-pro-camera-review-outstanding-in-all-areas/"
   },
   {
    "t": "华为 Mate 70 Pro 的第四颗镜头 - 爱范儿",
    "u": "https://www.ifanr.com/1607466"
   }
  ]
 },
 "night": {
  "stages": [
   [
    1998,
    "paper",
    "美国 Uniformed Services University 的 Ignacio Provencio 团队发现感光色素 melanopsin，为「视杆、视锥之外的第三类感光细胞」找到分子基础。",
    "Ignacio Provencio's team at the Uniformed Services University identified the photopigment melanopsin, giving a molecular basis for a third class of photoreceptor beyond rods and cones.",
    [
     1
    ]
   ],
   [
    2001,
    "paper",
    "Thomas Jefferson University 的 George Brainard 等在 Journal of Neuroscience（2001 年 8 月）发表褪黑素抑制作用光谱：最敏感波段 446–477 nm，符合一种新型 opsin 色素，证明人眼里存在调节昼夜节律的新感光器。",
    "George Brainard et al. (Thomas Jefferson University) published the action spectrum for melatonin suppression in the Journal of Neuroscience (August 2001): peak potency at 446–477 nm, fitting a novel opsin and revealing a new circadian photoreceptor in the human eye.",
    [
     0
    ]
   ],
   [
    2002,
    "paper",
    "Brown University 的 David Berson 与 Johns Hopkins 的 Samer Hattar 等证明表达 melanopsin 的视网膜神经节细胞（ipRGC）自身感光、投射到生物钟中枢，峰值敏感约 480 nm 蓝光，为「夜间减蓝光」提供了生理依据。",
    "David Berson (Brown) and Samer Hattar (Johns Hopkins) and colleagues showed melanopsin-expressing retinal ganglion cells (ipRGCs) are intrinsically photosensitive and project to the circadian clock, peaking around 480 nm — the physiological basis for cutting blue light at night.",
    [
     1
    ]
   ],
   [
    2009,
    "mass",
    "2009 年 2 月 Michael Herf 与 Lorna Herf 发布 f.lux：按所在地日出日落自动把屏幕色温从日光白渐变到暖色，先支持 Windows 和 Mac。",
    "In February 2009 Michael and Lorna Herf released f.lux, which shifts the screen from daylight white to warm tones based on local sunrise and sunset, first for Windows and Mac.",
    [
     2
    ]
   ],
   [
    2009,
    "rival",
    "2009 年 11 月 4 日 Jon Lund Steffensen 发布开源的 Redshift，为 Linux 桌面按太阳高度平滑调整显示色温，后来衍生出 Gammastep 等分支。",
    "On 4 November 2009 Jon Lund Steffensen released the open-source Redshift, smoothly adjusting Linux display colour temperature by solar elevation; it later spawned forks such as Gammastep.",
    [
     3
    ]
   ],
   [
    2015,
    "ver",
    "CyanogenMod 12/12.1 的 LiveDisplay 把 CM7 的 RenderFX 等功能整合进系统，可按时间自动切换夜间色温，是 Android 手机上较早的系统级夜间暖色模式（第三方 ROM）。",
    "CyanogenMod 12/12.1's LiveDisplay folded CM7's RenderFX and other features into the system, automatically switching to a night colour temperature on schedule — an early system-level night mode on Android phones (third-party ROM).",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 11 月 f.lux 在 GitHub 放出可用 Xcode 侧载到 iPhone 的项目，Apple 以违反开发者协议要求撤下；f.lux 此前已因使用受限接口被 App Store 拒绝。",
    "In November 2015 f.lux posted an Xcode project on GitHub for sideloading onto iPhones; Apple asked for its removal, having already rejected f.lux from the App Store for using restricted APIs.",
    [
     2
    ]
   ],
   [
    2016,
    "mass",
    "Apple 2016 年 1 月宣布、3 月随 iOS 9.3 正式推出 Night Shift，在 iPhone / iPad 上按日落日出自动调暖，夜间护眼进入主流手机系统。",
    "Apple announced Night Shift in January 2016 and shipped it with iOS 9.3 in March, warming iPhone and iPad screens from sunset to sunrise and bringing night mode to a mainstream phone OS.",
    [
     2
    ]
   ],
   [
    2017,
    "ver",
    "2017 年 3 月 27 日 macOS Sierra 10.12.4 把 Night Shift 带到 Mac；4 月 11 日 Windows 10 Creators Update 推出 Night light（测试版里叫 Blue light），电脑系统也内置夜间模式。",
    "macOS Sierra 10.12.4 (27 March 2017) brought Night Shift to the Mac, and the Windows 10 Creators Update (11 April 2017) added Night light (called Blue light in preview builds), building night mode into desktop OSes.",
    [
     5,
     6
    ]
   ],
   [
    2018,
    "paper",
    "一项 2018 年研究指出，只改变自发光屏幕的光谱组成而不降低亮度，可能不足以避免对褪黑素分泌的抑制。",
    "A 2018 study suggested that changing a self-luminous display's spectral composition without lowering brightness may be insufficient to prevent melatonin suppression.",
    [
     2
    ]
   ],
   [
    2021,
    "end",
    "Brigham Young University 的 Chad Jensen 团队在 Sleep Health 发表对 167 名 18–24 岁手机用户的腕动计研究：开 Night Shift 与否对入睡和睡眠质量没有差异，睡前不用手机的人睡得最好。",
    "Chad Jensen's team at Brigham Young University reported in Sleep Health on 167 phone users aged 18–24 wearing actigraphs: Night Shift made no difference to sleep onset or quality, and those who skipped phones before bed slept best.",
    [
     7
    ]
   ]
  ],
  "now": [
   "Night Shift、Night Light、护眼模式已是手机、电脑和电视的系统标配，常与环境光自适应（True Tone 等）和深色模式一起用；但睡眠获益的证据有限，研究更强调降低亮度和减少睡前使用。",
   "Night Shift, Night Light and eye-comfort modes are standard on phones, computers and TVs, often alongside ambient adaptation (True Tone) and dark mode; evidence of sleep benefit is limited, and research stresses lower brightness and less pre-bed use."
  ],
  "replaced": [
   "独立软件 f.lux、Redshift 大多被系统内置功能替代；单纯调色温的方案正被结合亮度、melanopic 照度和硬件低蓝光面板的方案补充。",
   "Standalone tools like f.lux and Redshift were largely superseded by built-in OS features; simple colour-temperature shifting is being supplemented by approaches combining brightness, melanopic illuminance and hardware low-blue-light panels."
  ],
  "refs": [
   {
    "t": "Action spectrum for melatonin regulation in humans (Brainard et al., 2001) - PubMed",
    "u": "https://pubmed.ncbi.nlm.nih.gov/11487664/"
   },
   {
    "t": "Intrinsically photosensitive retinal ganglion cell - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Intrinsically_photosensitive_retinal_ganglion_cell"
   },
   {
    "t": "f.lux - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/F.lux"
   },
   {
    "t": "Redshift (software) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Redshift_(software)"
   },
   {
    "t": "CyanogenMod 12 / 12.1 new features - Android Authority",
    "u": "https://androidauthority.com/cyanogenmod-12-12-1-new-features-599895"
   },
   {
    "t": "Apple Releases macOS Sierra 10.12.4 With New Night Shift Mode - MacRumors",
    "u": "https://www.macrumors.com/2017/03/27/apple-releases-macos-sierra-10-12-4/"
   },
   {
    "t": "Windows 10 Tip: Lower the blue light emitted from your PC with Night light",
    "u": "https://blogs.windows.com/windowsexperience/2017/05/08/windows-10-tip-lower-blue-light-emitted-pc-night-light/"
   },
   {
    "t": "Is Night Shift really helping you sleep better? - BYU News",
    "u": "https://news.byu.edu/intellect/is-night-shift-really-helping-you-sleep-better"
   }
  ]
 },
 "lut": {
  "stages": [
   [
    1993,
    "paper",
    "Kodak 推出 Cineon 数字胶片系统（4K、10 bit）并在 SMPTE Journal 发表 Cineon 对数编码：像素值表示印片密度（printing density），扫描时用 1D LUT 把线性曝光转成对数密度——这是后来所有 Log 曲线和「Log→显示 LUT」的源头。",
    "Kodak's Cineon digital film system (4K, 10-bit) and its SMPTE Journal paper introduced log encoding: pixel values represent printing density, with a 1D LUT converting linear exposure to log density on scanning — the root of every later log curve and 'log-to-display LUT'.",
    [
     0
    ]
   ],
   [
    2002,
    "corp",
    "FilmLight 成立并推出 Truelight 胶片色彩管理系统，用 3D LUT 在电子显示器上预览胶片印片效果，beta 版用于电影《Deep Blue》，后被 ILM 等采用并获奥斯卡科技奖；3D LUT 成为数字中间片（DI）的标准工具。",
    "FilmLight was founded and launched the Truelight film colour-management system, using 3D LUTs to preview film-print results on electronic displays; a beta was used on 'Deep Blue', it was adopted by ILM and others and won an Academy technical award — making 3D LUTs standard in digital intermediate.",
    [
     1
    ]
   ],
   [
    2008,
    "mass",
    "Sony CineAlta F35（2008 年底上市，与 F23 同机身，Super 35 CCD）提供 S-Log 伽马，机内 MLUT（Monitor LUT）可从 Memory Stick 载入用户 LUT，只作用于取景器和监看输出，录制仍为 S-Log。",
    "The Sony CineAlta F35 (shipping late 2008, same body as the F23, Super 35 CCD) offered S-Log gamma with an in-camera MLUT (Monitor LUT) that could load user LUTs from Memory Stick, applied only to viewfinder and monitor outputs while recording stayed S-Log.",
    [
     2
    ]
   ],
   [
    2010,
    "mass",
    "ARRI 2010 年 4 月发布 ALEXA：录 Log C（ProRes 或 ARRIRAW），监看口和取景器用机内 Rec.709 LUT（即后来的 K1S1「ALEXA Classic 709」）实时显示成片观感；ARRI 同时提供在线 LUT Generator。Robert Richardson 的《Hugo》是首批使用者。",
    "ARRI announced the ALEXA in April 2010: recording Log C (ProRes or ARRIRAW) while the monitor outputs and viewfinder showed an in-camera Rec.709 LUT (the K1S1 'ALEXA Classic 709') for a finished look; ARRI also provided an online LUT Generator. Robert Richardson's 'Hugo' was among the first users.",
    [
     3
    ]
   ],
   [
    2013,
    "ver",
    "Adobe 发布 Cube LUT Specification 1.0，把源自 Iridas（SpeedGrade）的 .cube 文本格式规范化，支持 1D/3D LUT 与输入域定义，成为相机、监视器、调色软件与手机 App 之间事实上的通用格式。",
    "Adobe published Cube LUT Specification 1.0, formalising the .cube text format inherited from Iridas (SpeedGrade) with 1D/3D LUTs and input-domain definitions; it became the de facto interchange format across cameras, monitors, grading software and phone apps.",
    [
     4
    ]
   ],
   [
    2014,
    "rival",
    "美国电影艺术与科学学院在约十年研究后于 2014 年 12 月发布 ACES 1.0：以场景线性 ACES 色彩空间和标准化的 IDT / RRT / ODT 变换替代各家私有 LUT 链，成为 LUT 工作流的主要竞争与补充方案。",
    "After about a decade of work, the Academy of Motion Picture Arts and Sciences released ACES 1.0 in December 2014: a scene-linear colour space with standardised IDT / RRT / ODT transforms replacing ad-hoc vendor LUT chains — the main rival and complement to LUT workflows.",
    [
     5
    ]
   ],
   [
    2015,
    "ver",
    "ALEXA 家族扩展到 ALEXA 65（2014）、ALEXA Mini（2015）等 6 个系列 19 种型号，Log C 录制 + 机内 LUT 监看成为电影、剧集和广告拍摄的行业默认流程。",
    "The ALEXA family grew to 19 models in six lines including the ALEXA 65 (2014) and ALEXA Mini (2015), making Log C capture with in-camera LUT monitoring the industry default for features, series and commercials.",
    [
     3
    ]
   ],
   [
    2023,
    "mass",
    "2023 年 5 月 FiLMiC Pro 7.4 支持导入最多 8 个 .cube LUT（iOS 最多 64 点、Android 65 点），在手机上拍 flat / log 画面同时实时预览 Rec.709 成片，厂商称为移动端业界首创。",
    "In May 2023 FiLMiC Pro 7.4 added import of up to eight .cube LUTs (up to 64-point on iOS, 65-point on Android), letting phones shoot flat/log while previewing Rec.709 in real time — billed as an industry first for mobile.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 9 月 iPhone 15 Pro 在 ProRes 录制中首次提供 Apple Log，Apple 公开官方 LUT；免费的 Blackmagic Camera App 可把 LUT 只用于预览或直接烧录进素材，手机 Log + LUT 工作流进入主流。",
    "In September 2023 the iPhone 15 Pro first offered Apple Log for ProRes recording with an official Apple LUT; the free Blackmagic Camera app could apply LUTs for preview only or burn them in, bringing phone log + LUT workflows into the mainstream.",
    [
     7
    ]
   ]
  ],
  "now": [
   "监看 LUT 已是电影机、无反相机、外接监视器和手机专业 App 的标配，不少相机还能把 LUT 直接烧录进录制（如 Panasonic Real Time LUT）；.cube 是通用格式，HDR 监看则需要多套 LUT 或色彩管理管线。",
   "Monitoring LUTs are standard on cinema cameras, mirrorless bodies, field monitors and pro phone apps, and many cameras can bake a LUT into recording (e.g. Panasonic Real Time LUT); .cube is the common format, while HDR monitoring needs multiple LUTs or a colour-managed pipeline."
  ],
  "replaced": [
   "尚未被淘汰，但在后期中逐渐被 ACES、OpenColorIO 以及基于数学公式的显示渲染变换（如 ARRI LogC4 / REVEAL 的转换）取代，LUT 更多变成这些变换的烘焙结果。",
   "Not obsolete, but in post it is increasingly superseded by ACES, OpenColorIO and formula-based display rendering transforms (e.g. ARRI LogC4 / REVEAL), with LUTs becoming baked outputs of those transforms."
  ],
  "refs": [
   {
    "t": "Cineon - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Cineon"
   },
   {
    "t": "FilmLight company history",
    "u": "https://www.filmlight.ltd.uk/company/history/history.php"
   },
   {
    "t": "Sony F35 Operation Manual - Monitor LUT",
    "u": "https://fitness.manualsonline.com/manuals/mfg/sony/f35.html?p=46"
   },
   {
    "t": "The ARRI ALEXA is 10 years old - Newsshooter",
    "u": "https://www.newsshooter.com/2020/05/27/the-arri-alexa-is-10-years-old/"
   },
   {
    "t": "Cube LUT Specification 1.0 - Adobe",
    "u": "https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf"
   },
   {
    "t": "Academy Color Encoding System - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Academy_Color_Encoding_System"
   },
   {
    "t": "FiLMiC Pro v7.4 now offers full LUT support - Newsshooter",
    "u": "https://www.newsshooter.com/2023/05/08/filmic-pro-v7-4-now-offers-full-lut-support/"
   },
   {
    "t": "Log is the 'Pro' in iPhone 15 Pro - Prolost",
    "u": "https://prolost.com/applelog"
   }
  ]
 },
 "cvd": {
  "stages": [
   [
    1798,
    "paper",
    "John Dalton 1794 年 10 月 31 日在曼彻斯特文学与哲学学会宣读《Extraordinary Facts relating to the Vision of Colours》，1798 年刊于学会 Memoirs 第 5 卷，是第一篇系统描述色觉缺陷的论文；他本人就是红绿色盲，英文 daltonism 由此得名。",
    "John Dalton read 'Extraordinary Facts relating to the Vision of Colours' to the Manchester Literary and Philosophical Society on 31 October 1794; published in its Memoirs (vol. 5) in 1798, it was the first systematic study of defective colour vision. Dalton was himself red-green colour blind, hence the word daltonism.",
    [
     0
    ]
   ],
   [
    1997,
    "paper",
    "Hans Brettel、Françoise Viénot、John D. Mollon 在 JOSA A 14 卷 10 期发表《Computerized simulation of color appearance for dichromats》：在 LMS 锥细胞空间里把每个颜色投影到二色视者的简化刺激面上，让正常人在屏幕上看到色盲眼中的图像，成为此后所有色盲模拟与补偿算法的基础。",
    "Hans Brettel, Françoise Viénot and John D. Mollon published 'Computerized simulation of color appearance for dichromats' in JOSA A 14(10): each colour is projected in LMS cone space onto the reduced stimulus surface of a dichromat, letting normal observers see on screen what a colour-blind viewer sees. It became the basis of later simulation and compensation algorithms.",
    [
     1
    ]
   ],
   [
    2000,
    "proto",
    "Stanford 博士后 Robert Dougherty 与 Alex Wade 上线 Vischeck 网站，用户上传图片即可模拟红色盲、绿色盲、蓝色盲看到的效果；其模拟代码后来被并入 GIMP。",
    "Stanford postdocs Robert Dougherty and Alex Wade launched the Vischeck website, which simulates how an uploaded image looks to protanopes, deuteranopes and tritanopes; its simulation code later went into GIMP.",
    [
     2
    ]
   ],
   [
    2002,
    "proto",
    "Vischeck 推出 Daltonize（约 2002 年 5 月建成），从模拟走向校正：在对立色空间增大 L−M 对比，并把色盲看不到的差异转移到亮度（L+M）和蓝黄（S）通道，这正是后来系统级「色彩校正」的思路。",
    "Vischeck added Daltonize (built around May 2002), moving from simulation to correction: it boosts L−M contrast in an opponent space and shifts the lost differences into the luminance (L+M) and blue-yellow (S) channels, the idea behind later system-level colour correction.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "Samsung Galaxy Note 3 的辅助功能里提供「Colour adjustment（色彩调整）」：用户按相近程度给一组色块排序，系统据此测出色觉类型并调整整屏颜色，是较早量产的手机系统级色盲补偿。",
    "The Samsung Galaxy Note 3 shipped a 'Colour adjustment' accessibility option: the user orders a set of colour tiles by similarity, and the phone derives the deficiency and remaps the whole screen, an early mass-market system-level colour-blindness compensation on a phone.",
    [
     4
    ]
   ],
   [
    2013,
    "corp",
    "Android 4.4 KitKat 的 SurfaceFlinger 里已出现 Daltonizer 模块（区分 protanomaly / deuteranomaly / tritanomaly），在开发者选项中以「模拟颜色空间」隐藏存在，尚未开放给普通用户。",
    "Android 4.4 KitKat already contained a Daltonizer module in SurfaceFlinger (protanomaly / deuteranomaly / tritanomaly), exposed only as a hidden 'Simulate color space' developer option rather than a user feature.",
    [
     5
    ]
   ],
   [
    2014,
    "mass",
    "Android 5.0 Lollipop 在「辅助功能」中正式加入「色彩校正」，提供绿色弱（Deuteranomaly）、红色弱（Protanomaly）、蓝色弱（Tritanomaly）三种模式，由 GPU 合成阶段对整屏做颜色矩阵变换，初期标注为实验性功能。",
    "Android 5.0 Lollipop added 'Color correction' to Accessibility with Deuteranomaly, Protanomaly and Tritanomaly modes, applied as a colour matrix to the whole screen at composition time; it was initially labelled experimental.",
    [
     6
    ]
   ],
   [
    2016,
    "ver",
    "iOS 10 在「辅助功能 › 显示调节」加入 Color Filters：灰度、红/绿（Protanopia）、绿/红（Deuteranopia）、蓝/黄（Tritanopia）四种预设，另可自选色调和强度，覆盖 iPhone 与 iPad 整个系统。",
    "iOS 10 added Color Filters under Accessibility › Display Accommodations: Grayscale, Red/Green (protanopia), Green/Red (deuteranopia) and Blue/Yellow (tritanopia) presets plus a custom tint with intensity, system-wide on iPhone and iPad.",
    [
     7
    ]
   ],
   [
    2017,
    "ver",
    "Windows 10 Fall Creators Update（1709 版）加入系统级颜色滤镜：灰度、反色、灰度反色、绿色盲、红色盲、蓝色盲六种，对 Win32 与商店应用都生效，可用 Win+Ctrl+C 快捷开关。",
    "Windows 10 Fall Creators Update (version 1709) added system-level colour filters: grayscale, invert, grayscale inverted, deuteranopia, protanopia and tritanopia, applied to Win32 and Store apps alike and toggled with Win+Ctrl+C.",
    [
     3
    ]
   ]
  ],
  "now": [
   "Android、iOS、iPadOS、Windows 都内置系统级色彩校正 / 颜色滤镜；Android 15 还为每种校正模式加了强度滑块。这类功能已是手机和电脑的标准无障碍配置。",
   "Android, iOS, iPadOS and Windows all ship system-level colour correction / colour filters, and Android 15 added an intensity slider for each mode. It is now a standard accessibility feature on phones and PCs."
  ],
  "replaced": [
   "没有被替代。它只能重新分配颜色差异，不能恢复缺失的锥细胞信号，因此与 EnChroma 等滤光眼镜、以及界面设计上「不只靠颜色传达信息」的无障碍规范并存互补。",
   "Not replaced. It can only redistribute colour differences, not restore missing cone signals, so it coexists with filter glasses such as EnChroma and with accessibility guidelines that say not to convey information by colour alone."
  ],
  "refs": [
   {
    "t": "Dalton: Extraordinary facts relating to the vision of colours (Biodiversity Heritage Library)",
    "u": "https://www.biodiversitylibrary.org/part/308502"
   },
   {
    "t": "Brettel, Viénot, Mollon 1997: Computerized simulation of color appearance for dichromats",
    "u": "https://ouci.dntb.gov.ua/works/4NZLAbK4"
   },
   {
    "t": "Vischeck: About",
    "u": "https://www.vischeck.com/about.html"
   },
   {
    "t": "Windows Central: How to enable color filters in the Windows 10 Fall Creators Update",
    "u": "https://www.windowscentral.com/how-enable-color-filters-windows-10-fall-creators-update"
   },
   {
    "t": "Samsung: Accessibility options on Galaxy Note3",
    "u": "https://www.samsung.com/za/support/mobile-devices/what-accessibility-options-are-available-on-my-samsung-galaxy-note3/"
   },
   {
    "t": "AOSP android-4.4_r1 Daltonizer.h",
    "u": "https://android.googlesource.com/platform/frameworks/native/+/android-4.4_r1/services/surfaceflinger/Effects/Daltonizer.h"
   },
   {
    "t": "Android Central: Accessibility features in Android 5.0 Lollipop",
    "u": "https://www.androidcentral.com/accessibility-features-android-50-lollipop"
   },
   {
    "t": "TidBITS: New Accessibility Features Coming to Apple's Ecosystem (2016)",
    "u": "https://tidbits.com/2016/08/11/new-accessibility-features-coming-to-apples-ecosystem/"
   }
  ]
 },
 "pq": {
  "stages": [
   [
    1999,
    "paper",
    "Philips 的 Peter G. J. Barten 出版《Contrast Sensitivity of the Human Eye and Its Effects on Image Quality》（SPIE，源自其埃因霍温理工大学博士论文），给出覆盖宽亮度范围的人眼对比敏感度模型；PQ 后来就是按这个模型的最小可觉差（JND）来分配码值。",
    "Peter G. J. Barten published 'Contrast Sensitivity of the Human Eye and Its Effects on Image Quality' (SPIE, from his Eindhoven doctoral thesis), a contrast-sensitivity model over a wide luminance range; PQ later allocated its code values by this model's just-noticeable differences.",
    [
     1
    ]
   ],
   [
    2013,
    "paper",
    "Dolby 的 Scott Miller、Mahdi Nezamabadi、Scott Daly 在 SMPTE Motion Imaging Journal 122 卷 4 期发表《Perceptual Signal Coding for More Efficient Usage of Bit Codes》：不再沿用 CRT 的 gamma，而是直接按 Barten 对比敏感度设计 EOTF，即 Perceptual Quantizer（PQ），覆盖 0–10000 nit，12-bit 无可见色带。",
    "Dolby's Scott Miller, Mahdi Nezamabadi and Scott Daly published 'Perceptual Signal Coding for More Efficient Usage of Bit Codes' in SMPTE Motion Imaging Journal 122(4): an EOTF designed from Barten's contrast sensitivity rather than CRT gamma, the Perceptual Quantizer (PQ), spanning 0–10,000 nits with no visible banding at 12 bits.",
    [
     1,
     0
    ]
   ],
   [
    2014,
    "corp",
    "Dolby 在 CES 2014 正式发布 Dolby Vision 品牌并现场演示，以 PQ 为传输曲线、配合逐场景动态元数据，宣布 Netflix、Xbox Video 等内容方支持。",
    "Dolby officially launched and demonstrated the Dolby Vision brand at CES 2014, built on the PQ curve plus scene-by-scene dynamic metadata, with content partners such as Netflix and Xbox Video.",
    [
     2
    ]
   ],
   [
    2014,
    "ver",
    "SMPTE 于 2014 年 8 月发布 ST 2084:2014，把 PQ 标准化为绝对亮度 EOTF：码值直接对应 0–10000 cd/m² 的显示亮度。",
    "SMPTE published ST 2084:2014 in August 2014, standardising PQ as an absolute-luminance EOTF in which code values map directly to 0–10,000 cd/m².",
    [
     0
    ]
   ],
   [
    2015,
    "rival",
    "BBC 与 NHK 联合开发 Hybrid Log-Gamma（HLG），2015 年 7 月成为 ARIB STD-B67：相对亮度、无需元数据、对 SDR 电视向下兼容，主攻直播电视，成为 PQ 之外的另一条 HDR 曲线。",
    "The BBC and NHK jointly developed Hybrid Log-Gamma (HLG), standardised as ARIB STD-B67 in July 2015: scene-relative, metadata-free and backward compatible with SDR sets, aimed at live broadcast as the alternative HDR curve to PQ.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "CTA（美国消费技术协会）于 2015 年 8 月 27 日公布 HDR10 Media Profile：PQ（ST 2084）+ 10-bit + BT.2020 原色 + 静态元数据，成为免授权的 HDR 基础格式。",
    "On 27 August 2015 the Consumer Technology Association announced the HDR10 Media Profile: PQ (ST 2084), 10-bit, BT.2020 primaries and static metadata, the royalty-free baseline HDR format.",
    [
     0
    ]
   ],
   [
    2015,
    "mass",
    "Vizio Reference Series（RS65-B2 与 RS120-B3，800 nit 全阵列 LED 背光、384 个局部调光区，65 英寸售 5999.99 美元）于 2015 年 10 月公布价格并开始接单，是最早量产上市的 Dolby Vision（PQ）电视。",
    "Vizio's Reference Series (RS65-B2 and RS120-B3, 800-nit full-array LED backlight with 384 dimming zones, 65-inch at $5,999.99) got pricing and opened orders in October 2015, the first mass-market Dolby Vision (PQ) TVs.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "ITU-R 于 2016 年 7 月发布 BT.2100，把 PQ 与 HLG 并列为 HDR 电视的两种传输函数，并规定 10/12-bit 与 BT.2020 色域，PQ 由此成为国际电视标准。",
    "ITU-R published BT.2100 in July 2016, listing PQ and HLG side by side as the two HDR-TV transfer functions with 10/12-bit coding and BT.2020 primaries, making PQ an international TV standard.",
    [
     0,
     4
    ]
   ],
   [
    2016,
    "mass",
    "Samsung Galaxy Note7（2016 年 8 月）成为第一部符合 HDR10 的手机，并与 Amazon Video 合作首推手机 HDR 流媒体，屏幕支持 PQ 10-bit 信号。",
    "The Samsung Galaxy Note7 (August 2016) became the first HDR10-compliant smartphone and, with Amazon Video, the first phone to stream HDR, accepting 10-bit PQ signals.",
    [
     6
    ]
   ],
   [
    2017,
    "ver",
    "Samsung 与 Amazon Video 于 2017 年 4 月 20 日推出 HDR10+：仍用 PQ 曲线，但加入 SMPTE ST 2094-40 动态元数据，逐场景调整色调映射，作为 Dolby Vision 的免授权替代。",
    "On 20 April 2017 Samsung and Amazon Video introduced HDR10+: still PQ, but with SMPTE ST 2094-40 dynamic metadata for scene-by-scene tone mapping, as a royalty-free alternative to Dolby Vision.",
    [
     5
    ]
   ],
   [
    2020,
    "mass",
    "Canon EOS-1D X Mark III（2020 年 1 月发布）是第一台能以 HDR PQ 记录 10-bit HEIF 照片的 EOS 单反，把 PQ 从视频带进静态照片。",
    "The Canon EOS-1D X Mark III (announced January 2020) was the first EOS DSLR to record 10-bit HEIF stills with HDR PQ, bringing PQ from video into still photography.",
    [
     7
    ]
   ]
  ],
  "now": [
   "PQ 是 HDR10、HDR10+、Dolby Vision 的共同基础，覆盖 Ultra HD Blu-ray、流媒体、电视、手机和相机 HEIF；与 HLG 一起写进 BT.2100，是目前主流的 HDR 编码曲线。",
   "PQ underpins HDR10, HDR10+ and Dolby Vision across Ultra HD Blu-ray, streaming, TVs, phones and camera HEIF; written into BT.2100 alongside HLG, it is the dominant HDR transfer curve today."
  ],
  "replaced": [
   "尚未被替代。直播电视多用 HLG，照片领域则流行「SDR 底图 + 增益图」以兼容老设备，但 PQ 仍是 HDR 母版与点播内容的标准曲线。",
   "Not replaced. Live broadcast often uses HLG and photos increasingly use an SDR base plus gain map for compatibility, but PQ remains the standard curve for HDR masters and on-demand content."
  ],
  "refs": [
   {
    "t": "Wikipedia: Perceptual quantizer",
    "u": "https://en.wikipedia.org/wiki/Perceptual_quantizer"
   },
   {
    "t": "Miller, Nezamabadi, Daly: Perceptual Signal Coding for More Efficient Usage of Bit Codes (SMPTE MIJ 2013)",
    "u": "https://journal.smpte.org/periodicals/SMPTE%20Motion%20Imaging%20Journal/122/4/13/"
   },
   {
    "t": "TechRadar: New Dolby imaging tech officially dubbed Dolby Vision (CES 2014)",
    "u": "https://techradar.com/news/television/new-dolby-imaging-tech-officially-dubbed-dolby-vision-arriving-late-2014-1211990"
   },
   {
    "t": "VIZIO: Pricing and availability for Reference Series with Dolby Vision (Oct 2015)",
    "u": "https://www.vizio.com/en/press/2015/oct/vizio-announces-pricing-and-availability-for-highly-anticipated-reference-series-collection-featuring-dolby-vision-high-dynamic-range-support"
   },
   {
    "t": "Wikipedia: Hybrid log–gamma",
    "u": "https://en.wikipedia.org/wiki/Hybrid_log%E2%80%93gamma"
   },
   {
    "t": "CNX Software: Samsung & Amazon introduce HDR10+ (2017)",
    "u": "https://www.cnx-software.com/2017/04/20/samsung-amazon-introduce-hdr10-standard-with-dynamic-metadata-tone-mapping/"
   },
   {
    "t": "PhoneArena: The Note 7 is the first smartphone with HDR10-compliant display",
    "u": "https://www.phonearena.com/news/The-Note-7-is-the-first-smartphone-with-HDR10-compliant-display-and-this-is-why-you-should-care_id83772"
   },
   {
    "t": "Canon SNAPSHOT: HDR PQ HEIF, breaking through the limits of JPEG",
    "u": "https://snapshot.canon-asia.com/article/hdr-pq-heif-breaking-through-the-limits-of-jpeg"
   }
  ]
 },
 "tone": {
  "stages": [
   [
    1902,
    "paper",
    "Johannes von Kries 发表《Theoretische Studien über die Umstimmung des Sehorgans》，提出色适应的系数定律：三种锥细胞各自按环境光增益缩放。它解释了人眼为何能在不同光源下保持颜色恒常，也是之后「屏幕白点跟随环境光」的理论依据。",
    "Johannes von Kries published his theoretical study of the adaptation of the visual organ (1902), proposing the coefficient law of chromatic adaptation: each cone class is scaled by its own gain under the ambient illuminant. It explains colour constancy and is the theoretical basis for display white points that follow ambient light.",
    [
     0
    ]
   ],
   [
    2014,
    "corp",
    "Apple 于 2014 年 11 月提交（2015 年 3 月正式申请、2016 年 10 月授权）美国专利 US9478157《Ambient light adaptive displays》，发明人包括 Jiaying Wu、Gabriel Marcu、Ricardo Motta、John Z. Zhong 等：用环境光传感器测得的色度调整显示器中性点，抵消人眼色适应带来的偏色。",
    "Apple filed (priority November 2014, application March 2015, granted October 2016) US patent 9,478,157 'Ambient light adaptive displays', with inventors including Jiaying Wu, Gabriel Marcu, Ricardo Motta and John Z. Zhong: the display's neutral point is shifted using ambient chromaticity from a light sensor to compensate for the viewer's chromatic adaptation.",
    [
     1
    ]
   ],
   [
    2016,
    "mass",
    "2016 年 3 月发布的 9.7 英寸 iPad Pro 首次搭载 True Tone：两颗四通道环境光传感器测量环境光亮度与色温，实时调整屏幕白平衡，同时屏幕首次支持 DCI-P3 广色域。",
    "The 9.7-inch iPad Pro, announced March 2016, introduced True Tone: two four-channel ambient light sensors measure ambient brightness and colour temperature and adjust the display white balance in real time, alongside Apple's first DCI-P3 tablet display.",
    [
     2
    ]
   ],
   [
    2017,
    "ver",
    "2017 年 9 月 12 日发布的 iPhone 8 / 8 Plus 与 iPhone X 首次把 True Tone 带到 iPhone，4.7 与 5.5 英寸 Retina HD 屏会按环境光调整白平衡。",
    "iPhone 8 / 8 Plus and iPhone X, announced 12 September 2017, brought True Tone to iPhone, with the 4.7- and 5.5-inch Retina HD displays adjusting white balance to ambient light.",
    [
     3
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 7 月 12 日更新的 MacBook Pro 成为第一台带 True Tone 的 Mac，配合 Apple T2 芯片，用内置光线传感器让屏幕色温匹配周围环境。",
    "The MacBook Pro updated on 12 July 2018 became the first Mac with a True Tone display, working with the Apple T2 chip and an embedded light sensor to match screen colour temperature to the surroundings.",
    [
     4
    ]
   ],
   [
    2019,
    "rival",
    "Microsoft 在 Windows 10 1903 版加入 Adaptive Color：要求笔记本配备经校准的环境色彩传感器（色度误差 0.025 以内）和 nits 校准的屏幕，由 Display Enhancement Service 把白点从 D65 向环境光色度移动。",
    "Microsoft added Adaptive Color in Windows 10 version 1903: laptops need a calibrated ambient colour sensor (chromaticity within 0.025) and a nits-calibrated panel, and the Display Enhancement Service shifts the white point from D65 towards the ambient chromaticity.",
    [
     5
    ]
   ],
   [
    2019,
    "rival",
    "Google Pixel 4 / 4 XL 加入 Ambient EQ，用环境光与色彩传感器调整屏幕白平衡；但从 Pixel 5 起的手机都取消了这项功能。",
    "Google's Pixel 4 / 4 XL added Ambient EQ, using an ambient light and colour sensor to adjust display white balance; Pixel phones after the Pixel 4 dropped it.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "Windows 11 21H2 改进 Adaptive Color：过渡时间按白点变化量调整、限制白点可移动范围避免极端偏色、取消强度滑块（默认 50%），并与 Night light 融合，不再两者相乘导致画面过红。",
    "Windows 11 21H2 refined Adaptive Color: transition time scales with white-point change, the white point is clamped to avoid extreme casts, the strength slider was removed (default 50%), and it is fused with Night light instead of multiplying into an overly red image.",
    [
     5
    ]
   ],
   [
    2024,
    "rival",
    "Samsung 在 Galaxy S24 系列推出 Adaptive Color Tone，按环境亮度与光源自动调整屏幕颜色与白平衡，之后扩展到 S25、Z Fold、Z Flip 和新款 A 系列。",
    "Samsung introduced Adaptive Color Tone with the Galaxy S24 series, automatically adjusting screen colour and white balance to ambient brightness and light source, later extended to the S25, Z Fold, Z Flip and newer A-series models.",
    [
     6
    ]
   ],
   [
    2025,
    "ver",
    "Google 在 Pixel 10 系列以 Adaptive Tone 之名恢复 Ambient EQ，新增 ams TMD3743 环境光与色彩传感器（Pixel 10 Pro Fold 除外）。",
    "Google revived Ambient EQ as Adaptive Tone on the Pixel 10 series, adding an ams TMD3743 ambient light and colour sensor (except on the Pixel 10 Pro Fold).",
    [
     7
    ]
   ]
  ],
  "now": [
   "环境色温自适应已是 iPhone、iPad、Mac、带色彩传感器的 Windows 笔记本、Samsung Galaxy 和 Pixel 10 的标准功能，通常默认开启，并与夜间模式（Night Shift / Night light）协同工作。",
   "Ambient white-point adaptation is now standard on iPhone, iPad, Mac, Windows laptops with colour sensors, Samsung Galaxy and Pixel 10, usually on by default and coordinated with night modes such as Night Shift and Night light."
  ],
  "replaced": [
   "没有被替代。需要准确颜色的调色、修图场景通常会关闭它，或由应用通过系统接口临时绕过（如 Windows 的 Display Enhancement Override）。",
   "Not replaced. Colour-critical grading and retouching usually turn it off, or apps bypass it through system APIs such as Windows' Display Enhancement Override."
  ],
  "refs": [
   {
    "t": "Wikipedia: Von Kries coefficient law",
    "u": "https://en.wikipedia.org/wiki/Von_Kries_coefficient_law"
   },
   {
    "t": "US9478157B2: Ambient light adaptive displays (Apple)",
    "u": "https://patents.google.com/patent/US9478157B2/en"
   },
   {
    "t": "MacRumors: Apple Announces 9.7-Inch iPad Pro with True Tone Display",
    "u": "https://www.macrumors.com/2016/03/21/apple-9-7-inch-ipad-pro/"
   },
   {
    "t": "Apple Newsroom: iPhone 8 and iPhone 8 Plus (2017)",
    "u": "https://www.apple.com/newsroom/2017/09/iphone-8-and-iphone-8-plus-a-new-generation-of-iphone/"
   },
   {
    "t": "Apple Newsroom: Apple updates MacBook Pro (July 2018)",
    "u": "https://www.apple.com/newsroom/2018/07/apple-updates-macbook-pro-with-faster-performance-and-new-features-for-pros/"
   },
   {
    "t": "Microsoft Learn: Adaptive Color",
    "u": "https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/sensors-adaptive-color"
   },
   {
    "t": "Samsung: What is Adaptive color tone feature",
    "u": "https://www.samsung.com/ae/support/mobile-devices/what-is-adaptive-color-tone-feature/"
   },
   {
    "t": "Notebookcheck: Pixel 10 brings back Ambient EQ as Adaptive Tone",
    "u": "https://www.notebookcheck.net/Googler-reveals-Pixel-10-feature-from-Pixel-4-and-Pixel-4-XL-ahead-of-schedule.1033387.0.html"
   }
  ]
 },
 "gain": {
  "stages": [
   [
    2005,
    "paper",
    "Greg Ward 与 Maryann Simmons 在第 13 届 Color and Imaging Conference 发表《JPEG-HDR: A Backwards-Compatible, High Dynamic Range Extension to JPEG》（2004 年 SIGGRAPH 已有子带编码报告）：文件主体是色调映射后的普通 JPEG，附带一张压缩的比值图（ratio image），HDR 软件相乘即可恢复原始高动态范围，旧软件照常显示，这就是增益图的原型。",
    "Greg Ward and Maryann Simmons presented 'JPEG-HDR: A Backwards-Compatible, High Dynamic Range Extension to JPEG' at the 13th Color and Imaging Conference (after a 2004 SIGGRAPH talk on subband encoding): a tone-mapped standard JPEG carries a compressed ratio image that HDR-aware software multiplies back to recover the full range, while legacy readers show the JPEG. This is the prototype of the gain map.",
    [
     0
    ]
   ],
   [
    2015,
    "rival",
    "JPEG 委员会发布 JPEG XT（ISO/IEC 18477）：第 1 部分 2015 年 6 月，第 2 部分「HDR 图像编码」2016 年 7 月，同样采用「8-bit JPEG 基础层 + 扩展层」的双层结构向下兼容，但几乎没有被相机和浏览器采用。",
    "The JPEG committee published JPEG XT (ISO/IEC 18477): Part 1 in June 2015 and Part 2, HDR coding, in July 2016, with the same backward-compatible 8-bit JPEG base layer plus extension layer, but it saw almost no adoption by cameras or browsers.",
    [
     1
    ]
   ],
   [
    2020,
    "mass",
    "iPhone 12 起拍摄的 HEIC/JPEG 照片内嵌 8-bit 单通道亮度增益图（辅助图类型 urn:com:apple:photo:2020:aux:hdrgainmap），iOS 14.1 的「照片」app 在 iPhone 12 的 OLED 上据此提亮高光，是第一个大规模量产的增益图照片；格式为 Apple 私有。",
    "From iPhone 12 onwards, HEIC/JPEG photos embed an 8-bit single-channel luminance gain map (auxiliary type urn:com:apple:photo:2020:aux:hdrgainmap), and the Photos app in iOS 14.1 uses it to lift highlights on the iPhone 12's OLED, the first mass-produced gain-map photos; the format was Apple-proprietary.",
    [
     2
    ]
   ],
   [
    2022,
    "corp",
    "Adobe 在 2022 年 10 月 MAX 大会发布 Camera Raw 15 的 HDR Output 技术预览（先 Mac，12 月扩展到 Windows），可在 HDR 屏上编辑并导出 HDR 照片，之后 Lightroom 导出 JPEG 时附带增益图。",
    "At Adobe MAX in October 2022 Adobe released the HDR Output technology preview in Camera Raw 15 (Mac first, Windows from December), enabling HDR editing and export on HDR displays; Lightroom later began writing gain maps into exported JPEGs.",
    [
     3
    ]
   ],
   [
    2023,
    "corp",
    "Adobe 的 Eric Chan 主导公开 Adobe Gain Map 规范（XMP 命名空间 hdrgm），支持多通道、gamma、offset 与 HDR capacity 参数，并发布测试图，要求 Chrome Canary 116 build 5827 以上查看。",
    "Adobe's Eric Chan led the public Adobe Gain Map specification (XMP namespace hdrgm), with multi-channel maps, gamma, offsets and HDR-capacity parameters, plus test images viewable in Chrome Canary 116 build 5827 or later.",
    [
     5
    ]
   ],
   [
    2023,
    "mass",
    "Google 在 Android 14 推出 Ultra HDR（JPEG_R）：SDR JPEG 主图后用 CIPA MPF 附加一张 JPEG 增益图，元数据沿用 Adobe 的 hdrgm XMP，按屏幕当前 HDR/SDR 白点比在对数域插值；Pixel 8 默认以此格式拍照，Chrome 116 起可直接显示。",
    "Google introduced Ultra HDR (JPEG_R) in Android 14: an SDR JPEG primary image with a JPEG gain map appended via CIPA MPF, metadata in Adobe's hdrgm XMP, interpolated in log space by the display's current HDR/SDR white ratio; Pixel 8 shoots it by default and Chrome 116 displays it.",
    [
     4,
     5
    ]
   ],
   [
    2024,
    "ver",
    "Apple 在 WWDC 2024 宣布 iOS 18、iPadOS 18、macOS 15 提供读写 ISO 21496-1 增益图的开发者接口，称之为 Adaptive HDR；相机拍摄仍沿用 Apple 旧格式。",
    "At WWDC 2024 Apple announced developer APIs in iOS 18, iPadOS 18 and macOS 15 for reading and writing ISO 21496-1 gain maps, branded Adaptive HDR; camera capture still uses Apple's older format.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Android 15 开始支持 ISO 21496-1：从 Bitmap 编码 Ultra HDR JPEG 时同时写入 Ultra HDR v1 与 ISO 21496-1 两套元数据，解码时优先读 ISO 元数据；Ultra HDR 规范随之升到 v1.1。",
    "Android 15 added ISO 21496-1 support: encoding Ultra HDR JPEGs from a Bitmap writes both Ultra HDR v1 and ISO 21496-1 metadata, and decoders should prefer the ISO metadata; the Ultra HDR spec was revised to v1.1.",
    [
     4
    ]
   ],
   [
    2025,
    "ver",
    "ISO 于 2025 年 7 月正式发布 ISO 21496-1:2025《Digital photography — Gain map metadata for image conversion — Part 1: Dynamic range conversion》，统一 Apple、Google、Adobe 三家的增益图元数据。",
    "ISO published ISO 21496-1:2025 'Digital photography — Gain map metadata for image conversion — Part 1: Dynamic range conversion' in July 2025, unifying the gain-map metadata of Apple, Google and Adobe.",
    [
     7
    ]
   ]
  ],
  "now": [
   "增益图已成为 HDR 照片的主流交付方式：iPhone、Pixel 与多数 Android 旗舰默认拍摄，Chromium 浏览器、Adobe Lightroom / Camera Raw、Apple 与 Android 系统都能读写，正在向 ISO 21496-1 统一。",
   "Gain maps are now the mainstream way to deliver HDR photos: iPhone, Pixel and most Android flagships capture them by default, Chromium browsers, Adobe Lightroom / Camera Raw, Apple and Android all read and write them, and the ecosystem is converging on ISO 21496-1."
  ],
  "replaced": [
   "没有被替代，反而在取代各家私有格式（Apple 旧 hdrgainmap、Ultra HDR v1 元数据）。与纯 PQ/HLG 编码的 HDR HEIF/AVIF 并存，后者在不支持 HDR 的设备上兼容性较差。",
   "Not replaced; instead it is displacing proprietary variants (Apple's older hdrgainmap, Ultra HDR v1 metadata). It coexists with pure PQ/HLG HDR HEIF/AVIF, which degrade less gracefully on SDR devices."
  ],
  "refs": [
   {
    "t": "Ward & Simmons 2005: JPEG-HDR, a Backwards-Compatible HDR Extension to JPEG (CIC13)",
    "u": "https://library.imaging.org/cic/articles/13/1/art00052"
   },
   {
    "t": "Wikipedia: JPEG XT",
    "u": "https://en.wikipedia.org/wiki/JPEG_XT"
   },
   {
    "t": "Apple Developer: Applying Apple HDR effect to your photos",
    "u": "https://developer.apple.com/documentation/appkit/applying-apple-hdr-effect-to-your-photos"
   },
   {
    "t": "Adobe Community: Camera Raw 15.0 HDR Output beta feedback thread (MAX 2022)",
    "u": "https://community.adobe.com/t5/camera-raw-discussions/p-beta-feature-hdr-output-feedback-thread/td-p/13275618"
   },
   {
    "t": "Android Developers: Ultra HDR Image Format v1.1",
    "u": "https://developer.android.com/media/platform/hdr-image-format"
   },
   {
    "t": "Eric Chan: JPEG Gain Map Test Photos (Adobe)",
    "u": "https://people.csail.mit.edu/ericchan/hdr/jpeg-gain-map-adobe.html"
   },
   {
    "t": "Greg Benz: What do Apple's latest updates mean for HDR photography?",
    "u": "https://gregbenzphotography.com/hdr-photos/apple-macos-ios-hdr-iso-gain-map-21496-1/"
   },
   {
    "t": "ISO 21496-1:2025 Gain map metadata for image conversion",
    "u": "https://www.iso.org/standard/86775.html"
   }
  ]
 },
 "skin": {
  "stages": [
   [
    1950,
    "idea",
    "约 1950 年代，Kodak 向冲印店分发 Shirley 卡校准彩色印片机：卡上是色块和白人女性员工 Shirley Page 的照片，冲印师以「Shirley 的肤色正常」为准，浅肤色由此成为彩色胶片与冲印的默认基准。",
    "Around the 1950s Kodak distributed Shirley cards for labs to calibrate colour printers: colour patches plus a photo of a white Kodak employee, Shirley Page. Technicians balanced until 'Shirley looked right', making light skin the default reference for colour film and printing.",
    [
     0,
     1
    ]
   ],
   [
    1970,
    "corp",
    "约 1970 年代，Kodak 摄影技术部门的 Jim Lyon 发现只用白人模特的问题，开始在测试中大量使用黑人模特，目的是做出能处理任何肤色的更好产品。",
    "Around the 1970s Jim Lyon of Kodak's photo technology division recognised the problem with white-only cards and began using Black models extensively in testing, aiming for a better product that could handle any colour.",
    [
     0
    ]
   ],
   [
    1980,
    "corp",
    "约 1980 年代，Kodak 改良胶片对深色的层次表现，直接推动力并非有色人种的投诉，而是巧克力与家具厂商抱怨深色产品拍不出细节；之后的 Kodak Gold Max 等胶卷暗部表现明显改善。",
    "Around the 1980s Kodak improved its film's rendering of dark tones, driven not by complaints from people of colour but by chocolate and furniture makers whose dark products lost detail; later films such as Kodak Gold Max rendered shadows much better.",
    [
     1
    ]
   ],
   [
    1995,
    "ver",
    "约 1990 年代中期，Kodak 推出多种族 Shirley 卡，同一张卡上并列黑人、亚裔、拉丁裔与白人模特，供冲印店同时校准多种肤色。",
    "Around the mid-1990s Kodak issued a multiracial Shirley card showing Black, Asian, Latina and white models side by side, so labs could balance several skin tones at once.",
    [
     0
    ]
   ],
   [
    2009,
    "paper",
    "Concordia 大学的 Lorna Roth 在 Canadian Journal of Communication 34 卷 1 期发表《Looking at Shirley, the Ultimate Norm: Colour Balance, Image Technologies, and Cognitive Equity》，系统梳理胶片、冲印、电视行业以浅肤色为色彩平衡基准的历史，提出「认知公平」。",
    "Lorna Roth of Concordia University published 'Looking at Shirley, the Ultimate Norm: Colour Balance, Image Technologies, and Cognitive Equity' in the Canadian Journal of Communication 34(1), tracing how film, printing and TV industries used light skin as the colour-balance norm and arguing for cognitive equity.",
    [
     2
    ]
   ],
   [
    2018,
    "paper",
    "MIT Media Lab 的 Joy Buolamwini 与 Timnit Gebru 在 FAT* 2018 发表《Gender Shades》：三家商用人脸性别分类系统对深肤色女性错误率最高达 34.7%，浅肤色男性最高仅 0.8%，并指出常用人脸数据集 79.6%–86.2% 是浅肤色。",
    "Joy Buolamwini (MIT Media Lab) and Timnit Gebru published 'Gender Shades' at FAT* 2018: three commercial gender classifiers erred on darker-skinned women up to 34.7% versus at most 0.8% for lighter-skinned men, and common face datasets were 79.6–86.2% lighter-skinned.",
    [
     4
    ]
   ],
   [
    2021,
    "rival",
    "Snap 工程师 Bertrand Saint-Preux 2020 年夏提出 Inclusive Camera 项目，Snapchat 于 2021 年请电影摄影指导参与，重做曝光、补光（Ring Light）与色调映射，让深肤色在低光下不再发灰或被提亮，并开放到 Camera Kit。",
    "Snap engineer Bertrand Saint-Preux pitched the Inclusive Camera project in summer 2020; in 2021 Snapchat worked with film cinematographers to rework exposure, Ring Light fill and tone mapping so darker skin no longer looked ashy or over-brightened, later exposing it in Camera Kit.",
    [
     5
    ]
   ],
   [
    2021,
    "mass",
    "Google Pixel 6（2021 年 10 月 19 日）推出 Real Tone：大幅扩充人脸检测训练数据，重新调校自动白平衡与自动曝光，新增减少杂散光冲淡深肤色的算法，并与 Kira Kelly、Deun Ivory 等摄影师合作评片，Google Photos 自动增强也同步调整。",
    "Google's Pixel 6 (19 October 2021) introduced Real Tone: a far more diverse face-detection training set, retuned auto white balance and auto exposure, a new algorithm to stop stray light washing out darker skin, tuning with photographers such as Kira Kelly and Deun Ivory, and matching changes to Google Photos auto-enhance.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "Google 在 2022 年 5 月 I/O 发布与哈佛社会学家 Ellis Monk 合作的 10 级 Monk Skin Tone（MST）肤色量表并开源，用于评估 AI 与相机的肤色公平；Google Photos 同期推出按 MST 评估的 Real Tone 滤镜。",
    "At I/O in May 2022 Google released the open 10-shade Monk Skin Tone (MST) scale, developed with Harvard sociologist Ellis Monk, to evaluate skin-tone fairness in AI and cameras; Google Photos launched Real Tone filters evaluated with MST.",
    [
     7
    ]
   ],
   [
    2022,
    "ver",
    "Pixel 7（2022 年 10 月）与全球合作方新拍一万多张人像来改进 Real Tone；同代 Night Sight 曝光时间减半、更少运动模糊，低光人像也更清晰。",
    "For the Pixel 7 (October 2022) Google and partners created over 10,000 new portraits to improve Real Tone; the same generation's Night Sight halved exposure time with less motion blur, sharpening low-light portraits.",
    [
     3
    ]
   ]
  ],
  "now": [
   "Real Tone 持续出现在每代 Pixel 相机中，并扩展到视频；Monk Skin Tone 量表已开源供业界评估使用。肤色公平正成为手机厂商相机调校与 AI 数据集评测的常规指标，但各家方法多不公开。",
   "Real Tone continues in every Pixel camera and has expanded to video, and the Monk Skin Tone scale is open for industry evaluation. Skin-tone fairness is becoming a routine criterion in phone camera tuning and AI dataset evaluation, though most vendors do not publish their methods."
  ],
  "replaced": [
   "没有被替代。它不是单一算法，而是一套数据集与调校方法，正从单一品牌功能变成行业通行的评测要求。",
   "Not replaced. It is a set of datasets and tuning practices rather than a single algorithm, and it is shifting from a brand feature to an industry-wide evaluation requirement."
  ],
  "refs": [
   {
    "t": "NPR: How Kodak's Shirley Cards Set Photography's Skin-Tone Standard (2014)",
    "u": "https://www.npr.org/transcripts/363517842"
   },
   {
    "t": "99% Invisible: Shirley Cards (transcript)",
    "u": "https://99percentinvisible.org/episode/shirley-cards/transcript/"
   },
   {
    "t": "Roth 2009: Looking at Shirley, the Ultimate Norm (Canadian Journal of Communication)",
    "u": "https://doi.org/10.22230/cjc.2009v34n1a2196"
   },
   {
    "t": "Google Blog: 10 new camera upgrades on Pixel 7 and 7 Pro",
    "u": "https://blog.google/products/pixel/pixel-7-camera/"
   },
   {
    "t": "Buolamwini & Gebru 2018: Gender Shades (PMLR 81)",
    "u": "https://proceedings.mlr.press/v81/buolamwini18a.html"
   },
   {
    "t": "Axios: Inside Snapchat's push to make cameras more inclusive (2021)",
    "u": "https://www.axios.com/2021/04/29/snapchat-cameras-overhaul-racism"
   },
   {
    "t": "Google Blog: Image equity, Real Tone on Pixel 6",
    "u": "https://blog.google/products/pixel/image-equity-real-tone-pixel-6-photos/"
   },
   {
    "t": "Google Blog: Monk Skin Tone Scale",
    "u": "https://blog.google/technology/ai/monk-skin-tone-scale/"
   }
  ]
 },
 "p3": {
  "stages": [
   [
    1999,
    "proto",
    "1999 年 Star Wars: Episode I 用 Texas Instruments DLP Cinema 原型放映机做首次公开数字放映，数字影院的色彩基准开始以氙灯 DLP 放映机为参照（约）。",
    "In 1999 Star Wars: Episode I had the first public digital screening on Texas Instruments DLP Cinema prototype projectors, and digital cinema colour began to be referenced to xenon-lamp DLP projectors (approx.).",
    [
     1
    ]
   ],
   [
    2005,
    "paper",
    "好莱坞 Digital Cinema Initiatives（DCI）发布 Digital Cinema System Specification v1.0，定义后来称为 DCI-P3 的色彩空间：2.6 gamma、48 cd/m² 白、约 6300 K 氙灯白点。",
    "Hollywood's Digital Cinema Initiatives (DCI) released the Digital Cinema System Specification v1.0, defining what became DCI-P3: 2.6 gamma, 48 cd/m² white and a ~6300 K xenon white point.",
    [
     0,
     4
    ]
   ],
   [
    2008,
    "mass",
    "HP 推出第一台 DreamColor 显示器，可显示 97% DCI-P3，P3 从影院进入专业调色显示器。",
    "HP released the first DreamColor monitor covering 97% of DCI-P3, bringing P3 from cinema to professional grading monitors.",
    [
     0
    ]
   ],
   [
    2010,
    "ver",
    "SMPTE 发布 EG 432-1:2010，加入 D65 白点版本（P3-D65）；2011 年 4 月 RP 431-2:2011 规定参考放映环境，P3-DCI 原色在此正式定义。",
    "SMPTE published EG 432-1:2010 adding a D65 white-point variant (P3-D65), and RP 431-2:2011 (Apr 2011) defined the reference viewing environment and formally specified the P3-DCI primaries.",
    [
     0
    ]
   ],
   [
    2012,
    "rival",
    "ITU-R BT.2020（Rec.2020）于 2012 年 8 月 23 日发布，覆盖 CIE 1931 的 75.8%，比 DCI-P3 的 53.6% 更大，成为 UHD/HDR 的容器色域。",
    "ITU-R BT.2020 (Rec.2020) was published on 23 Aug 2012, covering 75.8% of CIE 1931 versus 53.6% for DCI-P3, and became the container gamut for UHD/HDR.",
    [
     3
    ]
   ],
   [
    2014,
    "ver",
    "Eizo 推出第一台支持 P3 的专业 4K 显示器。",
    "Eizo introduced the first professional 4K monitor supporting P3.",
    [
     0
    ]
   ],
   [
    2015,
    "ver",
    "Apple 2015 年 10 月 13 日更新 iMac，Retina 5K/4K 屏采用 P3 色域，比 sRGB 大约 25%；Apple 定义的 Display P3 用 D65 白点和 sRGB 曲线，成为第一台内置 P3 屏的消费电脑。",
    "On 13 Oct 2015 Apple updated the iMac with Retina 5K/4K displays using a P3 gamut about 25% larger than sRGB; Apple's Display P3 uses a D65 white point and sRGB curve, the first consumer computer with a built-in P3 display.",
    [
     0,
     2
    ]
   ],
   [
    2015,
    "rival",
    "NHK 2015 年 5 月展示激光背光 4K LCD，覆盖 98% Rec.2020，显示超出 P3 的色域在技术上可行。",
    "In May 2015 NHK showed a laser-backlit 4K LCD covering 98% of Rec.2020, showing gamuts beyond P3 were technically achievable.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "UHD Alliance 要求 Ultra HD Premium 认证设备覆盖 90% DCI-P3；同年 iPhone 7 推出从相机拍摄到屏幕显示的全链路广色域（P3）。",
    "The UHD Alliance required 90% DCI-P3 coverage for Ultra HD Premium devices; the same year the iPhone 7 introduced end-to-end wide colour (P3) from camera capture to display.",
    [
     0,
     5
    ]
   ],
   [
    2023,
    "ver",
    "Google Pixel 8 等安卓手机也支持 P3-D65 照片拍摄；Netflix 等流媒体常用 P3-D65 原色加 PQ 曲线制作 HDR 内容。",
    "Android phones such as the Google Pixel 8 also support P3-D65 photo capture, and Netflix commonly masters HDR with P3-D65 primaries and the PQ curve.",
    [
     0
    ]
   ]
  ],
  "now": [
   "P3 已是手机、平板、笔记本和 HDR 电视的事实标准，iPhone、Pixel、Galaxy、MacBook Pro 等都覆盖约 100% P3；影视 HDR 母版多在 Rec.2020 容器内按 P3-D65 制作。",
   "P3 is the de facto standard for phones, tablets, laptops and HDR TVs; iPhone, Pixel, Galaxy and MacBook Pro cover about 100% P3, and HDR masters are usually made in P3-D65 inside a Rec.2020 container."
  ],
  "replaced": [
   "尚未被取代：Rec.2020 是更大的目标色域，但现有屏幕多数只覆盖约 70–80%，激光和量子点（QD-OLED、Mini-LED QD）正在把显示推向 Rec.2020。",
   "Not yet replaced: Rec.2020 is the larger target, but most displays cover only about 70–80% of it; laser and quantum-dot technologies (QD-OLED, QD Mini-LED) are pushing displays toward Rec.2020."
  ],
  "refs": [
   {
    "t": "DCI-P3 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/DCI-P3"
   },
   {
    "t": "The inception of digital cinema and the journey ahead - Texas Instruments",
    "u": "https://ti.com/about-ti/newsroom/company-blog/the-inception-of-digital-cinema-and-the-journey-ahead.html"
   },
   {
    "t": "Apple Updates iMac Family with Stunning New Retina Displays - Apple Newsroom (2015)",
    "u": "https://www.apple.com/newsroom/2015/10/13Apple-Updates-iMac-Family-with-Stunning-New-Retina-Displays/"
   },
   {
    "t": "Rec. 2020 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Rec._2020"
   },
   {
    "t": "Color - Cinepedia",
    "u": "https://cinepedia.com/picture/color/"
   },
   {
    "t": "Apple introduces iPhone 7 & iPhone 7 Plus - Apple Newsroom (2016)",
    "u": "https://www.apple.com/newsroom/2016/09/apple-introduces-iphone-7-iphone-7-plus/"
   }
  ]
 },
 "hlg": {
  "stages": [
   [
    2014,
    "paper",
    "BBC R&D 的 Tim Borer 发表白皮书 WHP 283《Non-linear Opto-Electrical Transfer Functions for High Dynamic Range Television》，提出一条低亮度段沿用传统 gamma、高亮度段改用对数的新 OETF，并作为提案提交 ITU。",
    "Tim Borer of BBC R&D published White Paper WHP 283, \"Non-linear Opto-Electrical Transfer Functions for High Dynamic Range Television\", proposing a new OETF that keeps a conventional gamma for low light and switches to a logarithmic curve for highlights; it was submitted to the ITU as a contribution.",
    [
     0
    ]
   ],
   [
    2014,
    "rival",
    "同期 Dolby 提出的 PQ（Perceptual Quantizer，后成为 SMPTE ST 2084）走的是绝对亮度 + 元数据路线，是 HLG 的主要竞争方案；HLG 则主打相对亮度、无需元数据、能直接在 SDR 电视上显示（约）。",
    "At the same time Dolby's PQ (Perceptual Quantizer, later SMPTE ST 2084) took the absolute-luminance-plus-metadata route and became HLG's main rival; HLG instead targeted relative luminance, no metadata, and direct viewing on SDR TVs (approx.).",
    [
     2
    ]
   ],
   [
    2015,
    "corp",
    "2015 年 5 月 BBC 宣布与 NHK 合作，把两家的 HDR 方案合并成 Hybrid Log-Gamma 提交 ITU；6 月 HLG 被提交给 JCT-VC，并写入 HEVC 扩展草案。",
    "In May 2015 the BBC announced it was working with NHK to merge their HDR proposals into Hybrid Log-Gamma for the ITU; in June HLG was proposed to JCT-VC and added to the draft HEVC extensions.",
    [
     2
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 7 月 3 日，日本 ARIB 批准 STD-B67，这是 HLG 的第一份正式标准。",
    "On 3 July 2015 Japan's ARIB approved STD-B67, the first formal standard for HLG.",
    [
     2
    ]
   ],
   [
    2015,
    "paper",
    "Borer 与 Andrew Cotton 在 IBC 2015 发表 WHP 309《A Display Independent High Dynamic Range Television System》，系统阐述 HLG「与显示器无关、无需 mastering 元数据、兼容 SDR」，获 IBC 最佳论文奖。",
    "Borer and Andrew Cotton presented WHP 309, \"A Display Independent High Dynamic Range Television System\", at IBC 2015, setting out HLG as display-independent, free of mastering metadata and SDR-compatible; it won the IBC best paper award.",
    [
     1
    ]
   ],
   [
    2015,
    "proto",
    "2015 年 10 月 Sony 在 SMPTE 年会上用改装的 HDR 显示器演示 HLG；11 月 LG 宣布其 2015 款 4K OLED 电视同时支持 HLG 与 PQ。",
    "In October 2015 Sony demonstrated HLG on a modified HDR display at the SMPTE conference; in November LG announced that its 2015 4K OLED TVs would support both HLG and PQ.",
    [
     2
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 7 月 ITU-R 发布 BT.2100，把 HLG 与 PQ 并列为 HDR 电视的两种传输函数；同年 11 月 DVB 的 UHD-1 Phase 2 也纳入 HLG，2017 年 5 月 ATSC 3.0 跟进。",
    "In July 2016 ITU-R published BT.2100, listing HLG and PQ side by side as the two HDR-TV transfer functions; DVB's UHD-1 Phase 2 added HLG that November, and ATSC 3.0 followed in May 2017.",
    [
     2,
     5
    ]
   ],
   [
    2016,
    "mass",
    "2016 年 10 月 4 日 SKY Perfect JSAT 开播全球首个用 HLG 的 4K HDR 广播；11 月 YouTube 宣布 HDR 流媒体支持 HLG 与 PQ；12 月 BBC 在 iPlayer 上放出《Planet Earth II》的 HLG 测试片段。",
    "On 4 October 2016 SKY Perfect JSAT started the world's first 4K HDR broadcasts using HLG; in November YouTube announced HDR streaming with HLG or PQ; in December the BBC put an HLG test clip of Planet Earth II on iPlayer.",
    [
     2
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 7 月 Sony PXW-FS5 V4.0 与 PXW-Z150 固件以新 Picture Profile 加入 HLG（HLG / HLG1–3）+ BT.2020，实现机内直出「Instant HDR」；同年 9 月 Sony 又发布原生支持 HLG 的 FDR-AX700、PXW-Z90、HXR-NX80，Panasonic GH5 固件 2.0 也加入 HLG 录制。",
    "In July 2017 firmware V4.0 for the Sony PXW-FS5, along with new PXW-Z150 firmware, added HLG (HLG and HLG1–3) with BT.2020 as a picture profile, giving in-camera \"Instant HDR\"; in September Sony announced the FDR-AX700, PXW-Z90 and HXR-NX80 with native HLG, and Panasonic's GH5 firmware 2.0 also added HLG recording.",
    [
     2,
     3,
     6
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 12 月 BBC 在 iPlayer 以 4K HLG 上线《Blue Planet II》全集，DirecTV 也开始在 4K 频道播出 HLG。",
    "In December 2017 the BBC released Blue Planet II in 4K HLG on iPlayer, and DirecTV began broadcasting HLG on its 4K channels.",
    [
     2
    ]
   ],
   [
    2018,
    "mass",
    "2018 年 2 月 Sony Xperia XZ2 / XZ2 Compact 成为首款能录 4K HDR 视频的手机，格式是 10-bit HLG BT.2020；12 月 1 日 NHK BS4K / BS8K 开播，采用 HLG HDR。",
    "In February 2018 the Sony Xperia XZ2 / XZ2 Compact became the first phones to record 4K HDR video, in 10-bit HLG BT.2020; on 1 December NHK BS4K / BS8K launched using HLG HDR.",
    [
     4,
     7
    ]
   ],
   [
    2020,
    "mass",
    "2020 年 iPhone 12 系列用 Dolby Vision Profile 8.4 录制 HDR 视频，其基础层就是 HLG，让 HLG 成为手机录像最常见的 HDR 格式。",
    "In 2020 the iPhone 12 series recorded HDR video in Dolby Vision Profile 8.4, whose base layer is HLG, making HLG the most common HDR format for phone video.",
    [
     2
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 10 月 ITU 因 BT.2100（HLG 与 PQ）获颁 Engineering Emmy，BBC、NHK 等贡献者一同受表彰。",
    "In October 2023 the ITU received an Engineering Emmy for BT.2100 (HLG and PQ), honouring contributors including the BBC and NHK.",
    [
     5
    ]
   ]
  ],
  "now": [
   "HLG 是直播电视（BBC、NHK、DVB、ATSC 3.0）和相机 / 手机机内直出 HDR 的主力格式，免版税、无需元数据，几乎所有 HDR 电视都支持。",
   "HLG is the main HDR format for live broadcasting (BBC, NHK, DVB, ATSC 3.0) and for in-camera / in-phone HDR output; it is royalty-free, needs no metadata, and is supported by nearly every HDR TV."
  ],
  "replaced": [
   "没有被替代，而是与 PQ 系（HDR10、HDR10+、Dolby Vision）分工并存：PQ 统治流媒体与蓝光的后期调色内容，HLG 守住直播与即拍即播。",
   "Not replaced; it coexists with the PQ family (HDR10, HDR10+, Dolby Vision): PQ dominates graded streaming and disc content, while HLG holds live and shoot-and-share workflows."
  ],
  "refs": [
   {
    "t": "BBC WHP 283: Non-linear Opto-Electrical Transfer Functions for HDR Television (2014)",
    "u": "https://displaydaily.com/wp-content/uploads/2015/05/WHP283.pdf"
   },
   {
    "t": "BBC WHP 309: A Display Independent High Dynamic Range Television System (2015)",
    "u": "https://displaydaily.com/wp-content/uploads/2016/09/WHP309.pdf"
   },
   {
    "t": "Wikipedia: Hybrid log–gamma",
    "u": "https://en.wikipedia.org/wiki/Hybrid_log%E2%80%93gamma"
   },
   {
    "t": "Newsshooter: Sony expanded HDR workflows, new firmware for FS5 and PXW-Z150",
    "u": "https://www.newsshooter.com/2017/03/23/sony-announce-expanded-hdr-workflows-new-firmware-for-fs5-and-pxw-z150/"
   },
   {
    "t": "Sony support: Xperia XZ2 HDR (HLG) video recording",
    "u": "https://www.sony.co.uk/electronics/support/articles/SX636701"
   },
   {
    "t": "ITU receives Emmy Award for HDR-TV (BT.2100)",
    "u": "https://itu.int/hub/?p=28469"
   },
   {
    "t": "Sony: PXW-Z90, HXR-NX80, FDR-AX700 4K HDR (HLG) camcorders",
    "u": "https://pro.sony/en_HK/press/1237495212198"
   },
   {
    "t": "Wikipedia: NHK BS8K",
    "u": "https://en.wikipedia.org/wiki/NHK_BS8K"
   }
  ]
 }
};
