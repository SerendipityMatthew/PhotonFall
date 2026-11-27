/* 镜头时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 lens 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：cmos:meta */
TIMELINES.lens.hist = {
 "iris": {
  "stages": [
   [
    1567,
    "idea",
    "Daniele Barbaro 记录：把透镜周边遮住、只留中间一圈，成像更清晰，这是光阑思想的早期文字记载。",
    "Daniele Barbaro noted that covering a lens to leave only a central circle made the image more vivid, an early written record of the stop idea.",
    [
     0
    ]
   ],
   [
    1858,
    "paper",
    "John Waterhouse 推出可互换的黄铜“Waterhouse stops”；同年 Charles C. Harrison 与 Joseph Schnitzer 为六叶片可调光阑申请专利。",
    "John Waterhouse introduced interchangeable brass 'Waterhouse stops'; the same year Charles C. Harrison and Joseph Schnitzer patented an adjustable six-bladed stop.",
    [
     0
    ]
   ],
   [
    1867,
    "proto",
    "英国皇家显微镜学会的 J. H. Brown 做出改进型虹膜光阑，多叶片收放结构在显微镜上先成熟（Kingslake 认为最早发明者已不可考）。",
    "J. H. Brown of the Royal Microscopical Society produced an improved iris diaphragm; Kingslake notes the original inventor remains unknown.",
    [
     0
    ]
   ],
   [
    1880,
    "mass",
    "（约）多叶片虹膜光阑逐渐取代插片式光阑，成为摄影镜头的标准配置，叶片数一般 5–10 片。",
    "(approx.) Multi-blade iris diaphragms gradually replaced slot-in stops and became standard in photographic lenses, typically with 5–10 blades.",
    [
     0
    ]
   ],
   [
    1947,
    "ver",
    "Gamma Duflex 成为第一台同时具备回位反光镜、自动光圈和正像眼平取景的 SLR，但只生产约 800 台。",
    "The Gamma Duflex became the first SLR combining a return mirror, automatic diaphragm and upright eye-level finder, though only about 800 were made.",
    [
     1
    ]
   ],
   [
    1959,
    "ver",
    "Pentacon F / Contax F（1956）把光圈联动做进卡口；Nikon F（1959）让全自动光圈加瞬回反光镜成为专业 SLR 标准：取景全开、快门瞬间收缩。",
    "The Pentacon F/Contax F (1956) put aperture actuation into the mount; the Nikon F (1959) made the fully automatic diaphragm with instant-return mirror the professional SLR standard.",
    [
     1
    ]
   ],
   [
    1987,
    "ver",
    "Canon EOS 650 与 EF 卡口在镜头内装 EMD 电磁光圈（步进电机 + 叶片组），彻底去掉机身与镜头之间的机械光圈拨杆，今天无反镜头基本都是电控光圈。",
    "Canon's EOS 650 and EF mount put an EMD electromagnetic diaphragm (stepping motor plus blade unit) in each lens, removing the mechanical aperture lever; today's mirrorless lenses are essentially all electronically driven.",
    [
     2
    ]
   ],
   [
    2008,
    "mass",
    "Motorola ZN5（Kodak 合作 5MP 相机，2008 年 7 月中国首发）是已知最早带可变光圈的手机，可在 f/2.8 与 f/5.6 间切换。",
    "The Motorola ZN5 (5MP Kodak camera, launched in China July 2008) is the earliest known phone with a variable aperture, switching between f/2.8 and f/5.6.",
    [
     3
    ]
   ],
   [
    2017,
    "ver",
    "Samsung W2018 翻盖手机在 f/1.5 与 f/2.4 两档间切换，被称为 Nokia N86 8MP 之后首次在手机固定镜头上重新用可变光圈；2018 年 Galaxy S9 把双光圈带进旗舰主线，S10 / Note 10 延续。",
    "The Samsung W2018 flip phone switched between f/1.5 and f/2.4, the first phone variable aperture since the Nokia N86 8MP; the Galaxy S9 (2018) brought dual aperture to the flagship line, continued in S10/Note 10.",
    [
     4,
     7
    ]
   ],
   [
    2020,
    "end",
    "Galaxy S20 改回固定光圈，Samsung 转向 ToF / 算法景深：机械光圈增加模组厚度，计算虚化可以替代浅景深效果。",
    "The Galaxy S20 returned to a fixed aperture as Samsung shifted to ToF and algorithmic depth: the mechanism added module thickness and computational bokeh could fake shallow depth of field.",
    [
     7
    ]
   ],
   [
    2022,
    "ver",
    "Huawei Mate 50 Pro 主摄 f/1.4–f/4.0 十档物理可变光圈（约 1/3 档一级），模组含环形磁场微控马达与物理叶片，精度 5–10 μm。",
    "The Huawei Mate 50 Pro main camera offered a 10-step physical aperture from f/1.4 to f/4.0 (about 1/3 stop per step), driven by a ring-magnet micro motor with 5–10 μm precision.",
    [
     5
    ]
   ],
   [
    2024,
    "ver",
    "Xiaomi 14 Ultra 在 1 英寸 LYT-900 主摄上做到 f/1.63–f/4.0 无级可变光圈，叶片连续开合、12-bit 马达控制，可像电影机一样用光圈而非快门调曝光。",
    "The Xiaomi 14 Ultra put a stepless f/1.63–f/4.0 aperture on its 1-inch LYT-900 main camera with a 12-bit motor, letting video exposure be set by aperture rather than shutter speed, as on cinema cameras.",
    [
     6
    ]
   ]
  ],
  "now": [
   "2026 年相机与电影镜头一律是电控多叶片光圈（如 Canon RF 系列的 EMD）；手机端可变光圈集中在中国影像旗舰（Huawei Mate / Pura 系列多档光圈、Xiaomi 14 Ultra 起的无级光圈），Samsung 据报道在评估回归。",
   "In 2026 every camera and cine lens uses an electronically driven multi-blade iris (e.g. Canon RF EMD); in phones, variable apertures are concentrated in Chinese imaging flagships (Huawei Mate/Pura multi-step, Xiaomi stepless since the 14 Ultra), with Samsung reportedly considering a return."
  ],
  "replaced": [
   "光圈本身没有被取代，只是从机械拨杆变成电磁驱动。在手机上，它的景深功能部分被计算虚化（ToF / 双摄 / AI 深度）替代，曝光功能部分由电子 ND 和多帧 HDR 承担。",
   "The iris itself has not been replaced, only moved from mechanical levers to electromagnetic drive. In phones its depth-of-field role is partly taken by computational bokeh (ToF, dual cameras, AI depth) and its exposure role by electronic ND and multi-frame HDR."
  ],
  "refs": [
   {
    "t": "Diaphragm (optics) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Diaphragm_(optics)"
   },
   {
    "t": "SLR History - klassik-cameras.de",
    "u": "https://klassik-cameras.de/SLR_History.html"
   },
   {
    "t": "EMD - RF Lens World - Canon",
    "u": "https://asia.canon/en/campaign/rf-lens-world/the-advantages-of-rf-lenses/emd"
   },
   {
    "t": "Motorola Zine ZN5 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Motorola_Zine_ZN5"
   },
   {
    "t": "Samsung's W2018 flip phone has a variable aperture camera - Engadget",
    "u": "https://www.engadget.com/2017-12-01-samsung-w2018-flip-phone-variable-aperture-china.html"
   },
   {
    "t": "Huawei Mate 50 Pro has a camera lens with variable aperture - ProVideo Coalition",
    "u": "https://www.provideocoalition.com/huawei-mate-50-pro-has-a-camera-lens-with-variable-aperture/"
   },
   {
    "t": "Xiaomi 14 Ultra's variable aperture is the true headline feature - Notebookcheck",
    "u": "https://www.notebookcheck.net/Forget-the-1-inch-sensor-the-Xiaomi-14-Ultra-s-variable-aperture-is-the-true-headline-feature.807929.0.html"
   },
   {
    "t": "Samsung ends its dual-aperture experiment - Pickr",
    "u": "https://www.pickr.com.au/news/2020/samsung-ends-its-dual-aperture-experiment/"
   }
  ]
 },
 "lowd": {
  "stages": [
   [
    1733,
    "idea",
    "英国律师兼业余光学家 Chester Moore Hall 用冕牌玻璃加火石玻璃组合做出第一批消色差双合透镜，并秘密分包给不同光学匠制作。",
    "Barrister and amateur optician Chester Moore Hall combined crown and flint glass into the first achromatic doublets, secretly contracting the elements to different opticians.",
    [
     0
    ]
   ],
   [
    1758,
    "paper",
    "John Dollond 从 George Bass 处得知 Hall 的设计，复现后于 1758 年获得消色差双合透镜专利，并引发专利诉讼。",
    "John Dollond learned of Hall's design via George Bass, reproduced it and was granted a patent on the achromatic doublet in 1758, sparking litigation.",
    [
     0
    ]
   ],
   [
    1763,
    "proto",
    "Peter Dollond 做出三片式改进设计，被视为复消色差（apochromat）概念的开端：让三种波长聚到同一焦点。",
    "Peter Dollond devised an improved triplet regarded as the start of the apochromat idea: bringing three wavelengths to one focus.",
    [
     0
    ]
   ],
   [
    1886,
    "mass",
    "Ernst Abbe 计算、Otto Schott 新型光学玻璃（1884 年成立 Schott & Gen.）支撑，蔡司推出第一款复消色差显微镜物镜，对三个波长校正色差；Abbe 约 1881 年起试验天然萤石。",
    "Based on Ernst Abbe's calculations and Otto Schott's new optical glasses (Schott & Gen. founded 1884), Zeiss launched the first apochromatic microscope objective, corrected for three wavelengths; Abbe had experimented with natural fluorite from about 1881.",
    [
     1
    ]
   ],
   [
    1966,
    "corp",
    "Canon 于 1966 年 8 月启动“Canon F Plan”，1967 年 3 月用电炉合成出第一批萤石晶体，1968 年 2 月确立量产工艺，绕开天然萤石尺寸小、杂质多的问题。",
    "Canon launched the 'Canon F Plan' in August 1966, grew its first synthetic fluorite crystals in an electric furnace in March 1967 and established production technology in February 1968, sidestepping the small size and impurities of natural fluorite.",
    [
     2
    ]
   ],
   [
    1969,
    "mass",
    "Canon FL-F 300mm f/5.6（1969 年 5 月）成为第一支给大众用户的可换镜头相机用合成萤石镜头，7 片 6 组中有 2 片萤石。",
    "The Canon FL-F 300mm f/5.6 (May 1969) became the first interchangeable-lens camera lens for ordinary consumers to use synthetic fluorite, with two fluorite elements among seven.",
    [
     2
    ]
   ],
   [
    1972,
    "ver",
    "Nikkor-H 300mm f/2.8（1972 年 1 月，设计者清水义之）为札幌冬奥会记者而做，靠超低色散玻璃压住长焦色差；早期批次用的是德国 Schott 玻璃，产量只有一百多支，之后才换成 Nikon 自产 ED 玻璃。",
    "The Nikkor-H 300mm f/2.8 (January 1972, designed by Yoshiyuki Shimizu) was built for press photographers at the Sapporo Olympics and used extra-low-dispersion glass to kill telephoto colour fringing; early units used German Schott glass, only about a hundred-odd were made, and Nikon's own ED glass came later.",
    [
     3
    ]
   ],
   [
    1975,
    "ver",
    "Leica APO-Telyt-R 180mm f/3.4 上市，源自 1970 年代初为美国海军远距离侦察相机做的设计（Walter Mandler），是 Leica 第一支复消色差镜头，生产到 1998 年。",
    "Leica released the APO-Telyt-R 180mm f/3.4, derived from Walter Mandler's early-1970s design for a US Navy long-range surveillance camera; Leica's first apochromatic lens, made until 1998.",
    [
     4
    ]
   ],
   [
    1978,
    "ver",
    "Canon 用自研 UD（Ultra-low Dispersion）玻璃作为萤石的廉价替代，并在 1978 年推出 L 系列，把萤石 / UD 定为高端镜头标志。",
    "Canon developed UD (Ultra-low Dispersion) glass as a cheaper alternative to fluorite and launched the L series in 1978, making fluorite/UD the badge of its premium lenses.",
    [
     5
    ]
   ],
   [
    1993,
    "ver",
    "Canon Super UD 玻璃问世，首用于 EF 400mm f/5.6L USM，一片 Super UD 可顶两片普通 UD，光学特性接近萤石。",
    "Canon introduced Super UD glass, first used in the EF 400mm f/5.6L USM; one Super UD element does the work of two UD elements, close to fluorite.",
    [
     5
    ]
   ],
   [
    2001,
    "rival",
    "Canon EF 400mm f/4 DO IS USM（2001 年 12 月）用多层衍射光学元件（DO）抵消色差：衍射元件色散符号与玻璃相反，镜头短 26%、轻 36%。",
    "The Canon EF 400mm f/4 DO IS USM (December 2001) used a multi-layer diffractive optical element whose dispersion opposes that of glass, making the lens 26% shorter and 36% lighter.",
    [
     6
    ]
   ],
   [
    2015,
    "rival",
    "Nikon AF-S 300mm f/4E PF ED VR 首次用 PF（Phase Fresnel）衍射镜片校正色差，体积大幅缩小，但强光下可能出现环状彩色眩光。",
    "The Nikon AF-S 300mm f/4E PF ED VR introduced a PF (Phase Fresnel) diffractive element to correct chromatic aberration, shrinking the lens dramatically at the cost of possible ring-shaped coloured flare.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年萤石与 ED / UD / Super ED 类低色散玻璃仍是长焦与高端变焦的标配：Canon 到 2019 年已有 28 款 EF 萤石镜头，RF 超长焦继续使用；Nikon Z 系列同时用 ED 玻璃和 PF 衍射镜片；同类萤石元件也用在广播镜头和天文望远镜上。",
   "In 2026 fluorite and ED/UD/Super ED-type glasses remain standard in telephotos and premium zooms: Canon had 28 EF fluorite models by 2019 and keeps using it in RF super-telephotos; Nikon Z lenses mix ED glass with PF diffractive elements; fluorite also goes into broadcast lenses and astronomical telescopes."
  ],
  "replaced": [
   "没有被取代。衍射元件（Canon DO、Nikon PF）把一部分低色散玻璃的活接了过去，主要为了减重；机内和 RAW 软件的横向色差校正也减轻了光学校正的负担。下一步可能是超表面等平面光学，但还处在早期。",
   "Not replaced. Diffractive elements (Canon DO, Nikon PF) take over part of the job to save weight, and in-camera/RAW lateral-CA correction reduces the optical burden; flat optics such as metasurfaces are a possible next step but still early."
  ],
  "refs": [
   {
    "t": "Achromatic lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Achromatic_lens"
   },
   {
    "t": "History of microscopy - ZEISS",
    "u": "https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/microscopy.html"
   },
   {
    "t": "Canon celebrates 50th anniversary of lens employing synthetic fluorite (2019)",
    "u": "https://global.canon/en/news/2019/20191107.html"
   },
   {
    "t": "NIKKOR - The Thousand and One Nights No.11",
    "u": "https://imaging.nikon.com/imaging/information/story/0011/"
   },
   {
    "t": "Leica APO-Telyt-R 180mm f/3.4 - apotelyt.com",
    "u": "https://www.apotelyt.com/photo-lens/leica-apo-telyt-r-180mm-34"
   },
   {
    "t": "UD Lenses - RF Lens World - Canon",
    "u": "https://asia.canon/en/campaign/rf-lens-world/the-advantages-of-rf-lenses/ud-lenses"
   },
   {
    "t": "EF400mm f/4 DO IS USM - Canon Camera Museum",
    "u": "https://global.canon/en/c-museum/product/ef366.html"
   },
   {
    "t": "AF-S NIKKOR 300mm f/4E PF ED VR - Nikon news release (2015)",
    "u": "https://www.nikon.com/company/news/2015/0106_lens_02/"
   }
  ]
 },
 "fish": {
  "stages": [
   [
    1906,
    "idea",
    "物理学家 Robert W. Wood 在 Philosophical Magazine 发表“Fish-eye views, and vision under water”，用灌水容器加针孔模拟鱼在水下看到的半球视野，并造出 fisheye 一词。",
    "Physicist Robert W. Wood published 'Fish-eye views, and vision under water' in the Philosophical Magazine, using a water-filled pinhole camera to mimic a fish's hemispherical view and coining the word fisheye.",
    [
     1,
     0
    ]
   ],
   [
    1922,
    "proto",
    "W. N. Bond 用一片半球形玻璃透镜替换 Wood 的水箱，使全天空相机变得便携。",
    "W. N. Bond replaced Wood's water tank with a simple hemispherical glass lens, making the whole-sky camera portable.",
    [
     0
    ]
   ],
   [
    1923,
    "proto",
    "剑桥的 Robin Hill 与 R. & J. Beck 做出 Hill Sky Lens 云层相机（1923 年专利，1924 年在 QJRMS 发表“A lens for whole sky photographs”），180 度视场，被公认为第一支鱼眼镜头，用于气象云量观测。",
    "Robin Hill and R. & J. Beck built the Hill Sky Lens cloud camera (patented 1923, described in QJRMS in 1924 as 'A lens for whole sky photographs'), with 180° coverage; it is credited as the first fisheye lens and was used for meteorological cloud surveys.",
    [
     2,
     0
    ]
   ],
   [
    1932,
    "corp",
    "德国 AEG 在 Hill 设计基础上开发 Weitwinkelobjektiv 广角物镜，鱼眼开始被工业企业研究。",
    "Germany's AEG developed the Weitwinkelobjektiv based on Hill's design, bringing fisheye optics into industrial R&D.",
    [
     0
    ]
   ],
   [
    1938,
    "ver",
    "Nippon Kogaku 推出 Fisheye-Nikkor 16mm f/8 用于军用和云层摄影；同年 Zeiss Pleon 用于二战航空侦察。",
    "Nippon Kogaku produced the Fisheye-Nikkor 16mm f/8 for military and cloud photography; the same year the Zeiss Pleon served WWII aerial reconnaissance.",
    [
     0
    ]
   ],
   [
    1962,
    "mass",
    "Fisheye-Nikkor 8mm f/8 成为第一支 35mm 量产鱼眼（180 度圆形成像）；同年 Pentax Fish-eye Takumar 18mm f/11 推出第一支对角线（全画幅）鱼眼。",
    "The Fisheye-Nikkor 8mm f/8 became the first mass-produced 35mm fisheye (180° circular image); the same year Pentax's Fish-eye Takumar 18mm f/11 introduced the first diagonal (full-frame) fisheye.",
    [
     0
    ]
   ],
   [
    1968,
    "ver",
    "OP Fisheye-Nikkor 10mm f/5.6 采用正射投影，是第一支 SLR 用正射鱼眼，也是第一支非球面 SLR 镜头，用于科学测量与照明分析，产量不足 1000 支。",
    "The OP Fisheye-Nikkor 10mm f/5.6 used orthographic projection: the first orthographic fisheye and first aspherical lens for SLRs, aimed at scientific and lighting measurement, with fewer than 1,000 made.",
    [
     3
    ]
   ],
   [
    1972,
    "ver",
    "Fisheye-Nikkor 6mm f/2.8 把视场推到 220 度，看到镜头后方的景物。",
    "The Fisheye-Nikkor 6mm f/2.8 pushed coverage to 220°, seeing behind the lens.",
    [
     0
    ]
   ],
   [
    1999,
    "rival",
    "法国 ImmerVision 提出 panomorph 镜头：有意控制畸变，在关注区域提高像素密度，并做成变形压缩来适配矩形传感器，2000 年代先用于安防。",
    "France's ImmerVision introduced the panomorph lens, shaping distortion to raise pixel density in areas of interest and using anamorphosis to fit rectangular sensors; it entered security cameras in the 2000s.",
    [
     6
    ]
   ],
   [
    2007,
    "mass",
    "Nissan Around View Monitor 首发于日本 Elgrand（2007 年 10 月），12 月上 Infiniti EX35：前后左右四颗 180 度超广角摄像头拼出鸟瞰图，用于泊车。",
    "Nissan's Around View Monitor debuted on the Japanese Elgrand (October 2007) and the Infiniti EX35 (December): four 180° ultra-wide cameras synthesise a bird's-eye view for parking.",
    [
     4
    ]
   ],
   [
    2008,
    "ver",
    "Mobotix Q22 在 CeBIT 2008 发布：单颗半球鱼眼镜头 + 3.1MP 传感器覆盖 360 度，用软件展平和电子云台代替机械云台，PoE 供电。",
    "The Mobotix Q22, shown at CeBIT 2008, covered 360° with one hemispheric lens and a 3.1MP sensor, replacing mechanical pan/tilt with software dewarping; powered by PoE.",
    [
     5
    ]
   ],
   [
    2016,
    "ver",
    "LG G5 加入 135 度广角副摄（8MP），当时是手机上最宽的视角，开启手机超广角副摄潮流。",
    "The LG G5 added a 135° wide-angle secondary camera (8MP), the widest on any phone at the time, starting the ultra-wide trend in phones.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "Canon RF5.2mm f/2.8L DUAL FISHEYE 把两支鱼眼并排装在一个卡口上，左右光路各有同步 EMD 光圈，用于 VR180 立体拍摄。",
    "Canon's RF5.2mm f/2.8L DUAL FISHEYE placed two fisheyes side by side on one mount with synchronised EMDs in each path, for stereoscopic VR180 capture.",
    [
     8
    ]
   ]
  ],
  "now": [
   "2026 年鱼眼 / 超广角光学无处不在：车载环视已成中高端车型标配，自动驾驶用多颗鱼眼补盲；安防半球全景机普及；手机超广角副摄视场多在 110–120 度；全景相机和 VR 用双鱼眼（如 Canon RF5.2mm Dual Fisheye）。",
   "In 2026 fisheye and ultra-wide optics are everywhere: surround view is standard on mid- to high-end cars and autonomous driving uses multiple fisheyes to cover blind spots; hemispheric 360° security cameras are common; phone ultra-wides typically span 110–120°; 360° and VR cameras use twin fisheyes (e.g. Canon RF5.2mm Dual Fisheye)."
  ],
  "replaced": [
   "鱼眼光学没有被取代。它被软件去畸变吸收，逐步演变为畸变受控的 panomorph / 自由曲面广角，在 360 度场景下也和多镜头拼接方案并存。",
   "Fisheye optics have not been replaced. They have been absorbed into software dewarping and are evolving into distortion-controlled panomorph and freeform wide-angles, coexisting with multi-camera stitching for 360° capture."
  ],
  "refs": [
   {
    "t": "Fisheye lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Fisheye_lens"
   },
   {
    "t": "Wood, R. W. (1906) Fish-eye views, and vision under water - Zenodo",
    "u": "https://zenodo.org/records/1725410"
   },
   {
    "t": "Hill's whole sky cloud camera, R. & J. Beck Ltd - Science Museum Group",
    "u": "https://collection.sciencemuseumgroup.org.uk/objects/co440406/hills-whole-sky-cloud-camera-r-j-beck-ltd"
   },
   {
    "t": "NIKKOR - The Thousand and One Nights No.6 (OP Fisheye-Nikkor 10mm)",
    "u": "https://imaging.nikon.com/imaging/information/story/0006/index.html"
   },
   {
    "t": "Nissan to introduce world's first Around View Monitor (2007)",
    "u": "https://global.nissannews.com/en/releases/071012-01-e"
   },
   {
    "t": "Mobotix Q22 security camera offers 360-degrees of vision - Engadget",
    "u": "https://www.engadget.com/2008-07-29-mobotix-q22-security-camera-offers-360-degrees-of-vision.html"
   },
   {
    "t": "Panomorph - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Panomorph"
   },
   {
    "t": "LG debuts the G5 - LG Newsroom",
    "u": "https://www.lg.com/global/newsroom/news/corporate/lg-debuts-the-g5-its-first-ever-modular-smartphone-2/"
   },
   {
    "t": "EMD (incl. RF5.2mm Dual Fisheye) - RF Lens World - Canon",
    "u": "https://asia.canon/en/campaign/rf-lens-world/the-advantages-of-rf-lenses/emd"
   }
  ]
 },
 "zoom": {
  "stages": [
   [
    1834,
    "idea",
    "Peter Barlow 向英国皇家学会展示可变焦距的望远镜装置，变焦思想先出现在望远镜上。",
    "Peter Barlow presented a variable-focal-length telescope device to the Royal Society; the zoom idea appeared first in telescopes.",
    [
     8
    ]
   ],
   [
    1902,
    "paper",
    "Clile C. Allen 获美国专利 US 696,788（1901 年申请）：正-负-正三组，中间负组沿螺旋槽移动，连续改变放大倍率并基本保持合焦，被视为第一支真正的变焦镜头。",
    "Clile C. Allen received US patent 696,788 (filed 1901): a positive-negative-positive system whose middle element slides along a spiral track, varying magnification continuously while staying near focus; regarded as the first true zoom lens.",
    [
     1,
     0
    ]
   ],
   [
    1932,
    "mass",
    "Bell & Howell 推出 Taylor-Hobson 设计的 Cooke “Varo” 40–120mm 35mm 电影变焦镜头，这是变焦镜头第一次工业化生产。",
    "Bell & Howell introduced the Taylor-Hobson-designed Cooke 'Varo' 40–120mm for 35mm movie cameras, the first industrially produced zoom lens.",
    [
     0,
     8
    ]
   ],
   [
    1946,
    "corp",
    "奥地利裔工程师 Frank G. Back 在 1946 年 10 月 SMPE 大会上发表 Zoomar 变焦镜头并申请专利，1947 年用于电视和 Paramount 新闻片（世界大赛转播），成为第一支商业成功的变焦镜头。",
    "Austrian-born engineer Frank G. Back presented the Zoomar at the SMPE convention in October 1946 and filed a patent; it went on air in 1947 and was used by Paramount newsreels at the World Series, becoming the first commercially successful zoom.",
    [
     2
    ]
   ],
   [
    1958,
    "ver",
    "Pierre Angénieux 继 1956 年恒定光圈 17–68mm 之后推出 12–120mm 十倍电影变焦，1964 年因十倍变焦获奥斯卡科技奖，变焦从此成为电影与电视的主力镜头。",
    "After his constant-aperture 17–68mm of 1956, Pierre Angénieux produced the 12–120mm 10x cine zoom, winning a 1964 Academy technical award; zooms became workhorses of film and TV.",
    [
     3
    ]
   ],
   [
    1959,
    "mass",
    "Back 设计、慕尼黑 Kilfitt 制造的 36–82mm f/2.8 Zoomar 成为第一支量产的 35mm 静态相机变焦镜头，以 Voigtländer-Zoomar 名义配 Bessamatic，也有 Exakta 卡口版。",
    "The 36–82mm f/2.8 Zoomar, designed by Back and made by Kilfitt in Munich, became the first regular-production zoom for 35mm still cameras, sold as the Voigtländer-Zoomar for the Bessamatic and also in Exakta mount.",
    [
     2,
     0
    ]
   ],
   [
    1963,
    "ver",
    "Zoom-Nikkor Auto 43–86mm f/3.5（设计者樋口隆）长 78.2mm、重 410g，是第一支实用尺寸的标准变焦，带动“标准变焦”概念普及。",
    "The Zoom-Nikkor Auto 43–86mm f/3.5 (designer Takashi Higuchi), 78.2 mm long and 410 g, was the first practical-sized standard zoom and popularised the concept.",
    [
     4
    ]
   ],
   [
    1986,
    "ver",
    "Pentax Zoom 70（35–70mm）把电动变焦塞进 35mm 傻瓜机，开启变焦便携机时代，后来演变为数码卡片机和超长焦机。",
    "The Pentax Zoom 70 (35–70mm) fitted a power zoom into a 35mm compact, starting the zoom point-and-shoot era that led to digital compacts and superzooms.",
    [
     0
    ]
   ],
   [
    2004,
    "mass",
    "Sharp V602SH（Vodafone 日本，2004 年 6 月上市）是第一部带光学变焦的手机：2MP 自动对焦相机配 2 倍光学变焦。",
    "The Sharp V602SH (Vodafone Japan, on sale June 2004) was the first phone with optical zoom: a 2MP autofocus camera with 2x optical zoom.",
    [
     5
    ]
   ],
   [
    2019,
    "rival",
    "手机改走“多摄定焦切换”路线：Huawei P30 Pro 用 90 度潜望式固定长焦，在几颗定焦之间切换并用数码补间，这成为主流替代方案。",
    "Phones shifted to switching between fixed-focal cameras: the Huawei P30 Pro used a 90° periscope fixed telephoto, with digital zoom in between, which became the mainstream alternative.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "Sony Xperia 1 IV 推出号称世界首个手机“真光学变焦”的潜望长焦，在 85–125mm 之间连续变焦，不再只是两档切换。",
    "The Sony Xperia 1 IV introduced what Sony called the world's first true optical zoom in a phone, a periscope telephoto zooming continuously from 85 to 125 mm instead of switching between two steps.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Xperia 1 VI 把连续光学变焦扩展到 85–170mm（约 7.1 倍），并加入近摄功能。",
    "The Xperia 1 VI extended continuous optical zoom to 85–170 mm (about 7.1x) and added close-focus macro.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年相机与电影机变焦镜头是主流（如 24–70mm f/2.8、电影伺服变焦）；手机上大多仍用多颗定焦潜望加多帧超分，连续光学变焦只在少数机型上出现（Sony Xperia 1 IV / V / VI 系列）。",
   "In 2026 zooms dominate camera and cinema use (24–70mm f/2.8, cine servo zooms); phones mostly still use several fixed periscopes plus multi-frame super-resolution, and continuous optical zoom appears only on a few models (Sony Xperia 1 IV/V/VI)."
  ],
  "replaced": [
   "在相机上没有被取代，只是越来越轻、越来越快。在手机上，机械变焦组大多被“多摄定焦 + 计算变焦”取代，下一步可能是液体镜头或可调超表面做的无运动部件变焦。",
   "Not replaced in cameras, only made lighter and faster. In phones, moving zoom groups were largely replaced by multiple fixed cameras plus computational zoom; liquid lenses or tunable metasurfaces may next deliver zoom without moving parts."
  ],
  "refs": [
   {
    "t": "Zoom lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Zoom_lens"
   },
   {
    "t": "US696788A - Optical objective (Clile C. Allen) - Google Patents",
    "u": "https://patents.google.com/patent/US696788A/en"
   },
   {
    "t": "Zoomar lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Zoomar_lens"
   },
   {
    "t": "Pierre Angénieux - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pierre_Ang%C3%A9nieux"
   },
   {
    "t": "NIKKOR - The Thousand and One Nights No.4 (Zoom-NIKKOR 43-86mm)",
    "u": "https://imaging.nikon.com/imaging/information/story/0004/"
   },
   {
    "t": "The first cellphone with an optical zoom - Engadget (2004)",
    "u": "https://www.engadget.com/2004-05-11-the-first-cellphone-with-an-optical-zoom.html"
   },
   {
    "t": "Sony's Xperia 1 IV features the world's first true optical zoom lens - Engadget",
    "u": "https://www.engadget.com/sonys-xperia-1-iv-smartphone-has-the-worlds-first-true-optical-zoom-lens-071003899.html"
   },
   {
    "t": "Sony Xperia 1 VI launch - Android Central",
    "u": "https://www.androidcentral.com/phones/sony-xperia-1-vi-launch"
   },
   {
    "t": "Zoom Lens History - zoomlenshistory.org.uk",
    "u": "https://www.zoomlenshistory.org.uk"
   }
  ]
 },
 "coat": {
  "stages": [
   [
    1886,
    "idea",
    "Lord Rayleigh 发现轻微失泽（表面氧化）的玻璃反而透光更多：表层折射率介于玻璃与空气之间，降低了反射。",
    "Lord Rayleigh observed that slightly tarnished glass transmitted more light than clean glass, because the surface layer's index lay between glass and air.",
    [
     0
    ]
   ],
   [
    1904,
    "proto",
    "Cooke 公司的 Harold Dennis Taylor 开发出化学方法，在镜片表面人为制造这种减反层。",
    "Harold Dennis Taylor of Cooke developed a chemical method for deliberately producing such anti-reflection layers.",
    [
     0
    ]
   ],
   [
    1935,
    "paper",
    "蔡司的 Olexander (Alexander) Smakula 发明真空蒸镀低折射率氟化物薄膜的干涉型增透膜，即蔡司 T 镀膜，并获德国专利，被列为军事机密。",
    "Olexander (Alexander) Smakula at Carl Zeiss invented interference anti-reflection coating by vacuum-depositing low-index fluoride films (the Zeiss T coating); it was patented in Germany and kept a military secret.",
    [
     0,
     1
    ]
   ],
   [
    1938,
    "corp",
    "到 1938 年德国已有 17 家镀膜工厂，产品只供军用光学（如望远镜、测距仪）。",
    "By 1938 seventeen coating plants were operating in Germany, all limited to military optics such as binoculars and rangefinders.",
    [
     0
    ]
   ],
   [
    1938,
    "rival",
    "GE 的 Katharine Burr Blodgett 于 1938 年 3 月获美国专利 2,220,660，用逐层转移的皂膜（Langmuir–Blodgett 膜）做出四分之一波长增透层，媒体称之为“隐形玻璃”，但膜层太脆弱，不能实用。",
    "GE's Katharine Burr Blodgett received US patent 2,220,660 in March 1938 for quarter-wave anti-reflection layers built from transferred soap films (Langmuir–Blodgett films); the press called it 'invisible glass', though the films were too fragile for practical use.",
    [
     2
    ]
   ],
   [
    1940,
    "mass",
    "镀膜蔡司镜头在 1940 年莱比锡春季博览会公开展出，民用镀膜镜头开始普及（约：1939 年已有少量镀膜镜头在美国零售）。",
    "Coated Zeiss lenses were shown publicly at the 1940 Leipzig Spring Fair and civilian coated lenses began to spread (approx.: a few coated lenses were already retailed in the US in 1939).",
    [
     0
    ]
   ],
   [
    1971,
    "ver",
    "Asahi Pentax 推出 Super-Multi-Coated Takumar，7 层 SMC 镀膜并全线采用，而同期竞争对手多为单层 MgF2 或 2–3 层。",
    "Asahi Pentax launched Super-Multi-Coated Takumar lenses with a 7-layer SMC coating across the whole line, while rivals still mostly used single-layer MgF2 or 2–3 layers.",
    [
     3
    ]
   ],
   [
    1973,
    "rival",
    "Clapham 与 Hutley 在 Nature 发表“moth eye”减反原理：仿蛾眼角膜的亚波长结构让折射率渐变，这是后来纳米结构镀膜的理论起点。",
    "Clapham and Hutley published the 'moth eye' principle in Nature: sub-wavelength structures mimicking moth corneas grade the refractive index, the basis of later nanostructured coatings.",
    [
     4
    ]
   ],
   [
    2005,
    "ver",
    "Nikon 把半导体光刻投影镜头的纳米颗粒增透技术移植到相机镜头，命名为 Nano Crystal Coat，首用于 AF-S VR Nikkor 300mm f/2.8G IF-ED（2004 年发布、2005 年上市），能压低大角度入射造成的鬼影。",
    "Nikon transferred nanoparticle AR coating from its lithography projection lenses to camera lenses as Nano Crystal Coat, first on the AF-S VR Nikkor 300mm f/2.8G IF-ED (announced 2004, shipped 2005), suppressing ghosts from oblique light.",
    [
     5
    ]
   ],
   [
    2008,
    "ver",
    "Canon 发布 SWC（Subwavelength Structure Coating），在镜片表面排布比可见光波长更小的楔形结构，首用于 EF24mm f/1.4L II USM，对大曲率广角镜片尤其有效。",
    "Canon announced SWC (Subwavelength Structure Coating), arrays of wedge structures smaller than visible wavelengths, first on the EF24mm f/1.4L II USM and especially effective on strongly curved wide-angle elements.",
    [
     6
    ]
   ],
   [
    2022,
    "mass",
    "Xiaomi 12S Ultra 在手机镜头上用 ALD 原子层沉积增透膜：逐原子层沉积，能在高度非球面的塑料镜片上均匀成膜，压低眩光和鬼影。",
    "The Xiaomi 12S Ultra brought ALD (atomic layer deposition) AR coating to phone lenses: deposited one atomic layer at a time, it coats highly aspheric plastic elements uniformly and cuts flare and ghosting.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年相机镜头普遍是多层介质膜加纳米结构膜（Nikon Nano Crystal / Meso Amorphous、Canon SWC / ASC、Zeiss T*）；手机端 ALD 增透膜已从 Xiaomi 扩散到 OPPO 等更多品牌，Sony / vivo 用 Zeiss T* 方案；ALD 镀膜在 380–1000 nm 平均反射可低于 0.07%。",
   "In 2026 camera lenses commonly combine multilayer dielectric stacks with nanostructured coatings (Nikon Nano Crystal/Meso Amorphous, Canon SWC/ASC, Zeiss T*); in phones ALD AR coating has spread from Xiaomi to OPPO and others, with Sony/vivo using Zeiss T*; ALD coatings can reach under 0.07% average reflectance across 380–1000 nm."
  ],
  "replaced": [
   "增透镀膜没有被取代，而是一代代叠加：单层 MgF2 → 多层介质膜 → 亚波长纳米结构 / ALD。下一步是更宽角、更宽谱的梯度折射率结构，并与超表面光学结合。",
   "AR coating has not been replaced but stacked generation upon generation: single-layer MgF2 → multilayer dielectric → sub-wavelength nanostructures/ALD; next come wider-angle, broader-band graded-index structures integrated with metasurface optics."
  ],
  "refs": [
   {
    "t": "Anti-reflective coating - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Anti-reflective_coating"
   },
   {
    "t": "History of camera and cine lenses - ZEISS",
    "u": "https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/camera-and-cine-lenses.html"
   },
   {
    "t": "This Month in Physics History: Katharine Blodgett - APS News",
    "u": "https://www.aps.org/apsnews/2007/03/this-month-in-physics-history"
   },
   {
    "t": "Pentax (lens) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_(lens)"
   },
   {
    "t": "Clapham & Hutley (1973) Reduction of lens reflexion by the 'moth eye' principle - Nature 244, 281",
    "u": "https://www.nature.com/articles/244281a0"
   },
   {
    "t": "Nano Crystal Coat puts innovation right before your eyes - Nikon",
    "u": "https://www.nikon.com/about/technology/stories/2002_nanocrystalcoat/"
   },
   {
    "t": "Canon develops SWC coating technology (2008)",
    "u": "https://global.canon/en/news/2008/sep17e.html"
   },
   {
    "t": "ALD antireflection coatings for camera lenses - Beneq",
    "u": "https://beneq.com/en/markets/optical-coatings/camera-lens-coating/"
   }
  ]
 },
 "asph": {
  "stages": [
   [
    984,
    "idea",
    "10 世纪波斯学者 Ibn Sahl 发现球面与抛物面组合能以极小像差聚焦光线，是非球面思想最早的记录（年份约）。",
    "The Persian mathematician Ibn Sahl found in the 10th century that combining spherical and parabolic surfaces focuses light with minimal aberration, the earliest recorded aspheric idea (year approx.).",
    [
     0
    ]
   ],
   [
    1637,
    "idea",
    "René Descartes 与 Christiaan Huygens 在 17 世纪推导出无球差的非球面面形，Descartes 的面形后称 Cartesian oval（约）。",
    "René Descartes and Christiaan Huygens worked out aberration-free aspheric profiles in the 17th century; Descartes' shape became known as the Cartesian oval (approx.).",
    [
     0
    ]
   ],
   [
    1668,
    "proto",
    "1667/8 年 2 月 27 日 Francis Smethwick 向 Royal Society 展示了第一批高质量非球面透镜，成像明显优于球面镜。",
    "On 27 February 1667/8 Francis Smethwick presented the first high-quality aspheric lenses to the Royal Society, outperforming spherical ones.",
    [
     0
    ]
   ],
   [
    1956,
    "mass",
    "Elgeet 用薄膜抛光工艺为 16mm 电影镜头 Golden Navitar 12mm f/1.2 量产非球面镜片，被视为第一枚商业量产非球面镜片元件。",
    "Elgeet used membrane polishing to mass-produce an aspheric element for the 16mm cine lens Golden Navitar 12mm f/1.2, regarded as the first commercially mass-produced aspheric element.",
    [
     0
    ]
   ],
   [
    1963,
    "corp",
    "Canon 1963 年开始研究相机镜头用非球面，1969 年在日本相机展展出原型 FL55mm f/1.2 AL。",
    "Canon began R&D on aspherics for camera lenses in 1963 and showed a prototype FL55mm f/1.2 AL at a Japanese camera show in 1969.",
    [
     2
    ]
   ],
   [
    1966,
    "mass",
    "Leica 在 Photokina 1966 发布 Helmut Marx 设计的 Noctilux 50mm f/1.2：6 片 4 组，首尾两面手工研磨非球面，1966–1975 年仅产约 1757 支，是首支量产的 35mm 相机非球面镜头。",
    "Leica launched the Noctilux 50mm f/1.2 at Photokina 1966, designed by Helmut Marx: 6 elements in 4 groups with two hand-ground aspheric surfaces; about 1,757 were made 1966–1975, the first serially produced 35mm still-camera lens with aspherics.",
    [
     1
    ]
   ],
   [
    1971,
    "ver",
    "Canon FD 55mm f/1.2 AL 随 F-1 发布，是首支带自动光圈的大光圈 SLR 非球面镜头，研磨非球面仍需逐片手工修正。",
    "Canon's FD 55mm f/1.2 AL launched with the F-1 as the first large-aperture SLR lens with an aspheric element and auto diaphragm; its ground asphere still needed hand correction.",
    [
     2
    ]
   ],
   [
    1982,
    "mass",
    "Kodak Disc 相机用 12.5mm f/2.8 四片式镜头，内含首枚大批量模压玻璃非球面（GMo），当年售出约 800 万台；同年 Canon Snappy 50 首次在 35mm 镜头中用塑料模压非球面（PMo）。",
    "The Kodak Disc camera's 12.5mm f/2.8 four-element lens carried the first mass-produced molded-glass asphere, with about 8 million cameras sold that year; the same year the Canon Snappy 50 was the first 35mm camera lens with a plastic-molded (PMo) asphere.",
    [
     3,
     2
    ]
   ],
   [
    1985,
    "ver",
    "Canon New FD35-105mm f/3.5-4.5 成为首支采用玻璃模压非球面（GMo）的 35mm 全画幅可换镜头，非球面从昂贵手工件变成可量产零件。",
    "Canon's New FD35-105mm f/3.5-4.5 became the first interchangeable lens for 35mm full frame with a glass-molded (GMo) asphere, turning aspherics from hand-made parts into mass-producible ones.",
    [
     2
    ]
   ],
   [
    1992,
    "ver",
    "Canon 1990 年推出用紫外固化树脂在球面玻璃上成形的 replica 非球面；Nikon 1992 年在 AI AF Zoom-Nikkor 28-70mm f/3.5-4.5D 用上复合（hybrid）非球面，变焦镜头开始普遍用非球面。",
    "Canon introduced replica aspherics (UV-cured resin layer on a spherical glass element) in 1990; Nikon used a hybrid aspherical element in the AI AF Zoom-Nikkor 28-70mm f/3.5-4.5D in 1992, and aspherics became routine in zooms.",
    [
     2,
     4
    ]
   ],
   [
    2008,
    "ver",
    "Leica Noctilux-M 50mm f/0.95 ASPH（Peter Karbe 设计）上市，是当时最快的 35mm 非球面镜头；1976 年的 f/1.0 版曾刻意放弃非球面以保证量产一致性。",
    "Leica's Noctilux-M 50mm f/0.95 ASPH by Peter Karbe became the fastest aspherical 35mm lens of its time; the 1976 f/1.0 had deliberately dropped aspherics for consistent production.",
    [
     1
    ]
   ],
   [
    2011,
    "ver",
    "手机镜头从早期双高斯/库克三片式演化为多片塑料模压非球面；iPhone 4S 用 5 片式 f/2.4 定制镜头配 8MP 传感器，此前的拍照手机已在用塑料非球面（约）。",
    "Phone lenses evolved from double-Gauss or Cooke-triplet forms into stacks of molded plastic aspheres; the iPhone 4S paired an 8MP sensor with a five-element f/2.4 custom lens, while earlier camera phones already used plastic aspheres (approx.).",
    [
     6,
     5
    ]
   ],
   [
    2016,
    "rival",
    "Harvard 的 Federico Capasso 团队在 Science 发表 TiO2 纳米柱可见光超透镜（metalens），NA 0.8，用一层平面纳米结构取代曲面；2022 年 Metalenz 的超表面光学首次随 ST VL53L8 ToF 模块量产。",
    "Federico Capasso's Harvard group published TiO2-nanofin visible-light metalenses in Science (NA 0.8), replacing curved surfaces with one flat nanostructured layer; in 2022 Metalenz meta-optics shipped in ST's VL53L8 ToF module.",
    [
     7,
     8
    ]
   ],
   [
    2023,
    "ver",
    "玻塑混合镜头（1G3P、1G6P 等，模压玻璃非球面 + 塑料非球面）进入旗舰手机长焦，如 iPhone 15 Pro Max 5x 长焦和 Huawei P70 Art，由 Largan、Sunny Optical 供应。",
    "Glass-plastic hybrid stacks (1G3P, 1G6P: molded glass aspheres plus plastic aspheres) reached flagship phone telephotos such as the iPhone 15 Pro Max 5x camera and Huawei P70 Art, supplied by Largan and Sunny Optical.",
    [
     9
    ]
   ]
  ],
  "now": [
   "非球面已是标配：相机镜头普遍混用研磨、模压、复合非球面（Canon 2023 年 RF28mm F2.8 STM 仍在改进 PMo），手机主摄普遍是 7P–8P 塑料非球面或玻塑混合镜组。",
   "Aspherics are standard: camera lenses mix ground, molded and hybrid aspheres (Canon's 2023 RF28mm F2.8 STM still refines PMo), and phone main cameras use 7P–8P plastic-asphere or glass-plastic hybrid stacks."
  ],
  "replaced": [
   "没有被取代，而是被吸收进所有镜头设计；下一步是自由曲面和超表面（metalens）平面光学，后者已先在 ToF 等窄波段传感器里量产。",
   "Not replaced but absorbed into virtually every lens design; next come freeform surfaces and flat metasurface optics (metalenses), which already ship in narrow-band sensors such as ToF modules."
  ],
  "refs": [
   {
    "t": "Aspheric lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Aspheric_lens"
   },
   {
    "t": "Noctilux - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Noctilux"
   },
   {
    "t": "Canon Camera Museum: Aspherical lens elements, 50th anniversary",
    "u": "https://global.canon/en/c-museum/special/exhibition1.html"
   },
   {
    "t": "Fstoppers: The Strange Story of the Kodak Disc",
    "u": "https://fstoppers.com/film/strange-story-kodak-disc-worst-camera-kodak-ever-shipped-904187"
   },
   {
    "t": "Nikon: NIKKOR - The Thousand and One Nights No.63",
    "u": "https://imaging.nikon.com/history/story/0063/index.htm"
   },
   {
    "t": "Apple: Apple Launches iPhone 4S, iOS 5 & iCloud (2011)",
    "u": "https://www.apple.com/newsroom/2011/10/04Apple-Launches-iPhone-4S-iOS-5-iCloud/"
   },
   {
    "t": "Camera phone - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Camera_phone"
   },
   {
    "t": "Harvard SEAS: Metalens works in the visible spectrum (2016)",
    "u": "https://www.seas.harvard.edu/news/2016/06/metalens-works-visible-spectrum-sees-smaller-wavelength-light"
   },
   {
    "t": "Optica OPN: Metasurfaces Come to the Market (2022)",
    "u": "https://www.optica-opn.org/home/industry/2022/june/metasurfaces_come_to_the_market/"
   },
   {
    "t": "Android Headlines: glass-plastic hybrid camera lenses (2023)",
    "u": "https://www.androidheadlines.com/2023/12/android-glass-camera-lenses.html"
   }
  ]
 },
 "af": {
  "stages": [
   [
    1960,
    "paper",
    "Ernst Leitz（Leica）1960–1973 年间申请了一系列自动对焦及相关传感器专利。",
    "Ernst Leitz (Leica) filed a series of autofocus and sensor patents between 1960 and 1973.",
    [
     0,
     1
    ]
   ],
   [
    1976,
    "proto",
    "Leitz 在 Photokina 1976 展出自动对焦原型 Correfot，但从未发售。",
    "Leitz showed the Correfot autofocus prototype at Photokina 1976 but never sold it.",
    [
     0,
     1
    ]
   ],
   [
    1976,
    "corp",
    "Honeywell 在 1970 年代中期开发被动式测距模块 Visitronic（两个窗口比对影像），申请四项专利并对外授权，自己不造相机（年份约）。",
    "In the mid-1970s Honeywell developed the passive Visitronic module, comparing images from two windows, took out four patents and licensed it rather than building cameras (year approx.).",
    [
     1
    ]
   ],
   [
    1977,
    "mass",
    "Konica C35 AF 于 1977 年 11 月 30 日发售，采用 Honeywell Visitronic，成为第一台量产自动对焦相机，两年约售 100 万台。",
    "The Konica C35 AF went on sale on 30 November 1977 with Honeywell's Visitronic module, the first mass-produced autofocus camera, selling about a million units in two years.",
    [
     1,
     0
    ]
   ],
   [
    1978,
    "rival",
    "Polaroid SX-70 Sonar OneStep 用超声波主动测距；Canon 1979 年推出主动红外测距，此后十年成为多数傻瓜机的方案。",
    "The Polaroid SX-70 Sonar OneStep used active ultrasonic ranging; Canon introduced active infrared AF in 1979, which most compact makers adopted over the next decade.",
    [
     1,
     0
    ]
   ],
   [
    1981,
    "ver",
    "Pentax ME F 成为首台自动对焦 35mm SLR，马达装在专用镜头里；1983 年 Nikon F3AF 跟进。",
    "The Pentax ME F became the first autofocus 35mm SLR, with the motor in a dedicated lens; the Nikon F3AF followed in 1983.",
    [
     0
    ]
   ],
   [
    1985,
    "ver",
    "Minolta Maxxum 7000（1985 年 2 月）首次把相位检测 AF 传感器和对焦马达都放进机身，定义了 AF 单反；Honeywell 1987 年起诉 Minolta，1992 年和解金 1.275 亿美元。",
    "The Minolta Maxxum 7000 (February 1985) first put both the phase-detection AF sensor and the focus motor in the body, defining the AF SLR; Honeywell sued in 1987 and won a $127.5 million settlement in 1992.",
    [
     1,
     0
    ]
   ],
   [
    1987,
    "ver",
    "Canon 改用全电子 EF 卡口，1987 年 11 月发售的 EF 300mm f/2.8L USM 是世界首支环形超声波马达（USM）镜头，内对焦、静音高速并支持全时手动对焦。",
    "Canon switched to the all-electronic EF mount; the EF 300mm f/2.8L USM (November 1987) was the world's first lens with a ring ultrasonic motor, with internal focusing, quiet fast AF and full-time manual focus.",
    [
     2,
     0
    ]
   ],
   [
    2003,
    "mass",
    "NTT DoCoMo 2003 年 11 月发布 mova P505iS，1.28MP CCD，号称世界首款自动对焦拍照手机；此后手机 AF 多用音圈马达（VCM）推动镜组（约）。",
    "NTT DoCoMo announced the mova P505iS in November 2003, a 1.28MP CCD phone billed as the world's first autofocus camera phone; phone AF later standardised largely on voice-coil motors (VCM) moving the lens (approx.).",
    [
     3
    ]
   ],
   [
    2010,
    "ver",
    "Fujifilm FinePix F300EXR（2010 年 7 月发布）首次把相位检测像素做进图像传感器（Super CCD EXR），与反差检测混合，号称 0.158 秒对焦。",
    "The Fujifilm FinePix F300EXR (announced July 2010) first built phase-detection pixels into the image sensor (Super CCD EXR), hybrid with contrast detection, claiming 0.158 s focus.",
    [
     4
    ]
   ],
   [
    2013,
    "ver",
    "Canon EOS 70D（2013 年 7 月）推出 Dual Pixel CMOS AF：每个像素分成两个光电二极管，可分别读出做相位检测，也可合并成像。",
    "The Canon EOS 70D (July 2013) introduced Dual Pixel CMOS AF: each pixel split into two photodiodes, read separately for phase detection or together for imaging.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "手机进入片上相位对焦和主动测距时代：iPhone 6 用 Focus Pixels 相位对焦，LG G3（2014 年 5 月）首创红外激光对焦辅助。",
    "Phones gained on-sensor phase detection and active ranging: the iPhone 6 used Focus Pixels PDAF, and the LG G3 (May 2014) introduced infrared laser AF.",
    [
     6,
     7
    ]
   ],
   [
    2021,
    "rival",
    "Xiaomi Mi MIX Fold（2021 年 3 月）首次在手机用液体镜头，由马达改变液体透镜曲率，一颗 8MP 镜头兼做 3x 长焦和 3cm 微距。",
    "The Xiaomi Mi MIX Fold (March 2021) was the first phone with a liquid lens, a motor reshaping it so one 8MP camera served as both 3x telephoto and 3cm macro.",
    [
     8
    ]
   ]
  ],
  "now": [
   "主流是传感器上的相位检测（全像素双核/四核）加反差和 AI 主体识别，相机端由线性马达、USM 驱动，手机端由闭环 VCM 驱动，如 Canon EOS R 系列、Sony α 系列和各家旗舰手机。",
   "The mainstream is on-sensor phase detection (dual- or quad-pixel) plus contrast and AI subject recognition, driven by linear motors or USM in cameras and closed-loop VCMs in phones, e.g. Canon EOS R, Sony Alpha and flagship phones."
  ],
  "replaced": [
   "自动对焦本身仍在用；被替换的是测距方式（外置测距、独立 AF 模块被片上相位检测取代）和驱动器（齿轮马达让位于 USM、线性马达）。下一步是液体镜头、MEMS 驱动和深度学习追焦。",
   "Autofocus itself remains; what got replaced were the ranging methods (external rangefinders and separate AF modules gave way to on-sensor PDAF) and the drives (geared motors gave way to USM and linear motors). Next come liquid lenses, MEMS actuators and learned subject tracking."
  ],
  "refs": [
   {
    "t": "Autofocus - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Autofocus"
   },
   {
    "t": "Fstoppers: Autofocus Turns 50 in 2027, and the Camera That Started It Was a Konica",
    "u": "https://fstoppers.com/originals/autofocus-turns-50-2027-and-camera-started-it-was-konica-903887"
   },
   {
    "t": "Canon Camera Museum: EF300mm f/2.8L USM",
    "u": "https://global.canon/en/c-museum/product/ef270.html"
   },
   {
    "t": "NTT DoCoMo: P505iS, World's First Auto-Focus Camera Phone (2003)",
    "u": "https://www.docomo.ne.jp/english/info/media_center/pr/2003/001119.html"
   },
   {
    "t": "Imaging Resource: Fujifilm F300EXR announcement (2010)",
    "u": "https://imaging-resource.com/NEWS/1279688476.html"
   },
   {
    "t": "PetaPixel: Canon Unveils the 70D with Dual Pixel AF (2013)",
    "u": "https://petapixel.com/2013/07/01/canon-unveils-the-70d-dual-pixel-aps-c-sensor-brings-snappier-autofocusing/"
   },
   {
    "t": "Apple: iPhone 6 and iPhone 6 Plus announcement (2014)",
    "u": "https://www.apple.com/au/newsroom/2014/09/09Apple-Announces-iPhone-6-iPhone-6-Plus-The-Biggest-Advancements-in-iPhone-History"
   },
   {
    "t": "LG G3 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/LG_G3"
   },
   {
    "t": "Videomaker: Mi Mix Fold features world's first smartphone liquid lens",
    "u": "https://www.videomaker.com/news/mi-mix-fold-features-worlds-first-smartphone-liquid-lens/"
   }
  ]
 },
 "diff": {
  "stages": [
   [
    1785,
    "idea",
    "David Rittenhouse 1785 年用螺纹间绷发丝做出第一块人造衍射光栅；Joseph von Fraunhofer 1821 年首次用光栅得到线状光谱。",
    "David Rittenhouse made the first artificial diffraction grating in 1785 from hairs strung between screw threads; Joseph von Fraunhofer first used a grating to obtain line spectra in 1821.",
    [
     0
    ]
   ],
   [
    1823,
    "idea",
    "Augustin-Jean Fresnel 把透镜拆成同心环带（Buffon 1748 年已有类似构想），1823 年 7 月首个灯塔 Fresnel 透镜在 Cordouan 点亮；这是折射式台阶结构，衍射版环带透镜后来沿用其名。",
    "Augustin-Jean Fresnel split a lens into concentric zones (Buffon had a similar idea in 1748), and the first lighthouse Fresnel lens was lit at Cordouan in July 1823; it was refractive, but later diffractive zone lenses took his name.",
    [
     1
    ]
   ],
   [
    1969,
    "paper",
    "IBM 的 L. B. Lesem、P. M. Hirsch、J. A. Jordan 在 IBM Journal of Research and Development 发表 kinoform：计算出的纯相位浮雕元件，能量集中到单一衍射级；专利 US3606515A 1968 年申请、1971 年授权。",
    "IBM's L. B. Lesem, P. M. Hirsch and J. A. Jordan published the kinoform in the IBM Journal of Research and Development, a computed phase-only relief element concentrating energy into one order; patent US3606515A was filed in 1968 and granted in 1971.",
    [
     2
    ]
   ],
   [
    1982,
    "mass",
    "Sony CDP-101（1982 年 10 月 1 日）开启 CD 时代，激光拾音头用衍射光栅把光束分成主光束和两束 ±1 级循迹光束；后来的拾音头把全息光学元件 HOE 集成成 hologram laser。",
    "The Sony CDP-101 (1 October 1982) opened the CD era; its laser pickup used a diffraction grating to split the beam into a main beam and two first-order tracking beams, and later pickups integrated a holographic optical element (HOE) into a hologram laser.",
    [
     3,
     4
    ]
   ],
   [
    1988,
    "paper",
    "Thomas Stone 与 Nicholas George 在 Applied Optics 发表混合衍射-折射消色差透镜：衍射面色散与玻璃相反，可大幅减小玻璃曲率、少用特殊玻璃。",
    "Thomas Stone and Nicholas George published hybrid diffractive-refractive achromats in Applied Optics: a diffractive surface's dispersion opposes glass, allowing much smaller curvatures and fewer special glasses.",
    [
     5
    ]
   ],
   [
    2001,
    "mass",
    "Canon 2001 年 12 月推出 EF 400mm f/4 DO IS USM，首个用多层衍射光学元件（DO）的相机镜头，比同规格常规设计短约 26%、轻约 36%。",
    "In December 2001 Canon released the EF 400mm f/4 DO IS USM, the first camera lens with a multi-layer diffractive optical element (DO), about 26% shorter and 36% lighter than a conventional design.",
    [
     6
    ]
   ],
   [
    2014,
    "ver",
    "Canon EF 400mm f/4 DO IS II USM（2014 年 11 月）改用无间隙双层 DO，并把 DO 移到光路深处，环状眩光降到初代约 1/4。",
    "The Canon EF 400mm f/4 DO IS II USM (November 2014) used a gapless dual-layer DO placed deeper in the optics, cutting ring-shaped flare to about a quarter of the original.",
    [
     7
    ]
   ],
   [
    2015,
    "corp",
    "Nikon 2015 年 1 月发布 AF-S NIKKOR 300mm f/4E PF ED VR，首次在 NIKKOR 用自研相位菲涅尔（PF）镜片，比上一代轻约 545 g、短约 75 mm。",
    "In January 2015 Nikon announced the AF-S NIKKOR 300mm f/4E PF ED VR, its first lens with an in-house Phase Fresnel (PF) element, about 545 g lighter and 75 mm shorter than its predecessor.",
    [
     8
    ]
   ],
   [
    2016,
    "rival",
    "Federico Capasso 团队在 Science 发表可见光超透镜（metalens）：TiO2 纳米柱亚波长结构，NA 0.8，在 405/532/660 nm 衍射极限聚焦。",
    "Federico Capasso's group published visible-light metalenses in Science: subwavelength TiO2 nanofins with NA 0.8, focusing at the diffraction limit at 405, 532 and 660 nm.",
    [
     9
    ]
   ],
   [
    2017,
    "mass",
    "iPhone X 的 Face ID 用 TrueDepth 点阵投射器把红外激光经衍射元件分成 3 万多个不可见光点做 3D 人脸建模，衍射光学大规模进入手机。",
    "The iPhone X's Face ID used a TrueDepth dot projector that splits an IR laser into more than 30,000 invisible dots for 3D face mapping, bringing diffractive optics to phones at scale.",
    [
     10
    ]
   ],
   [
    2020,
    "ver",
    "Canon RF 600mm F11 和 RF 800mm F11 IS STM（2020 年 7 月）用双层 DO 做出约 930 g 的 600mm 自动对焦镜头，把 DO 从高端带到入门价位。",
    "Canon's RF 600mm F11 and RF 800mm F11 IS STM (July 2020) used dual-layer DO to make a roughly 930 g autofocus 600mm lens, taking DO from flagship to entry-level prices.",
    [
     11
    ]
   ],
   [
    2022,
    "ver",
    "Nikon NIKKOR Z 800mm f/6.3 VR S（2022 年 4 月）是首支 Z 卡口 PF 镜头，比 F 卡口 800mm 轻约 48%、短约 16%；2023 年 Z 600mm f/6.3 VR S 跟进。同年 Metalenz 超表面光学随 ST VL53L8 量产。",
    "The Nikon NIKKOR Z 800mm f/6.3 VR S (April 2022) was the first Z-mount PF lens, about 48% lighter and 16% shorter than the F-mount 800mm, followed by the Z 600mm f/6.3 VR S in 2023; the same year Metalenz meta-optics entered production in ST's VL53L8.",
    [
     12,
     13
    ]
   ]
  ],
  "now": [
   "相机端衍射元件集中在超长焦：Canon DO（RF 600/800 F11）和 Nikon PF（Z 600/800 f/6.3）；手机和汽车里大量用于结构光点阵投射、ToF 光学，超表面光学也在扩产。",
   "In cameras diffractive elements are concentrated in super-telephotos: Canon DO (RF 600/800 F11) and Nikon PF (Z 600/800 f/6.3); in phones and cars they are widely used for structured-light dot projectors and ToF optics, with metasurface optics ramping up."
  ],
  "replaced": [
   "仍在用；成像领域的下一代是超表面（metalens），它也是衍射原理的亚波长版本，已先在 ToF、点阵投射等单波长场合取代传统 DOE 和折射镜片。",
   "Still in use; the next generation for imaging is the metasurface (metalens), a subwavelength form of diffractive optics that is first displacing conventional DOEs and refractive lenses in single-wavelength uses such as ToF and dot projection."
  ],
  "refs": [
   {
    "t": "Diffraction grating - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Diffraction_grating"
   },
   {
    "t": "Fresnel lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Fresnel_lens"
   },
   {
    "t": "US3606515A - Method of manufacturing wave shaping objects (kinoform), IBM",
    "u": "https://patents.google.com/patent/US3606515A/en"
   },
   {
    "t": "Sony CDP-101 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_CDP-101"
   },
   {
    "t": "Sam's Laser FAQ: Lasers in Consumer Electronics - The Optical Pickup",
    "u": "https://repairfaq.org/sam/opickup.htm"
   },
   {
    "t": "Stone & George, Hybrid diffractive-refractive lenses and achromats, Applied Optics 27(14), 1988",
    "u": "https://opg.optica.org/abstract.cfm?URI=ao-27-14-2960"
   },
   {
    "t": "Canon Camera Museum: EF400mm f/4 DO IS USM",
    "u": "https://global.canon/en/c-museum/product/ef366.html"
   },
   {
    "t": "Canon Camera Museum: EF400mm f/4 DO IS II USM",
    "u": "https://global.canon/en/c-museum/product/ef435.html"
   },
   {
    "t": "Nikon: AF-S NIKKOR 300mm f/4E PF ED VR (2015)",
    "u": "https://www.nikon.com/company/news/2015/0106_lens_02/"
   },
   {
    "t": "Harvard SEAS: Metalens works in the visible spectrum (2016)",
    "u": "https://www.seas.harvard.edu/news/2016/06/metalens-works-visible-spectrum-sees-smaller-wavelength-light"
   },
   {
    "t": "Apple: The future is here: iPhone X (2017)",
    "u": "https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/"
   },
   {
    "t": "Canon Camera Museum: RF600mm F11 IS STM",
    "u": "https://global.canon/en/c-museum/product/rf492.html"
   },
   {
    "t": "Nikon: NIKKOR Z 800mm f/6.3 VR S (2022)",
    "u": "https://nikon.com/news/2022/0406_lens_01.htm"
   },
   {
    "t": "Optica OPN: Metasurfaces Come to the Market (2022)",
    "u": "https://www.optica-opn.org/home/industry/2022/june/metasurfaces_come_to_the_market/"
   }
  ]
 },
 "ois": {
  "stages": [
   [
    1962,
    "idea",
    "Juan de la Cierva（Dynasciences）1962 年申请专利 US3212420：在镜头前放可变角度液体棱镜，由速率陀螺和伺服实时偏折光路，抵消飞机姿态抖动，产品即 Dynalens；1965 年授权。",
    "Juan de la Cierva of Dynasciences filed US3212420 in 1962: a variable-angle fluid-filled prism in front of the lens, tilted by rate gyros and servos to cancel aircraft motion; granted in 1965, it became the Dynalens.",
    [
     1
    ]
   ],
   [
    1983,
    "paper",
    "Panasonic 的 Oshima 等人 1983 年申请基于振动陀螺的手抖补偿基础专利。",
    "Oshima et al. at Panasonic filed the fundamental patent for vibration-gyro-based handshake compensation in 1983.",
    [
     2
    ]
   ],
   [
    1988,
    "mass",
    "Panasonic PV-460 VHS 摄像机 1988 年 6 月上市，用音叉式振动陀螺检测抖动，让镜头与传感器整组摆动（lens unit swing）校正光轴，是首款内置光学防抖的消费摄像机，2026 年获评 IEEE Milestone。",
    "Panasonic's PV-460 VHS camcorder (June 1988) used a tuning-fork vibration gyro and swung the whole lens-and-sensor unit to correct the optical axis, the first consumer camcorder with optical stabilisation; it became an IEEE Milestone in 2026.",
    [
     2
    ]
   ],
   [
    1994,
    "ver",
    "Nikon Zoom 700VR（美国名 Zoom-Touch 105 VR）1994 年发布，38–105mm f/4–7.8 镜头内移动镜片做双轴 VR，是首台带光学防抖的相机。",
    "Nikon's Zoom 700VR (Zoom-Touch 105 VR in the US), released in 1994, shifted elements in its 38–105mm f/4–7.8 lens for two-axis VR, the first still camera with optical stabilisation.",
    [
     0,
     3
    ]
   ],
   [
    1995,
    "ver",
    "Canon EF 75-300mm f/4-5.6 IS USM 1995 年 9 月上市，首支带防抖的 SLR 可换镜头：陀螺检测，平移第二组镜片，约 2 档。",
    "The Canon EF 75-300mm f/4-5.6 IS USM (September 1995) was the first interchangeable SLR lens with stabilisation: gyro sensing and a shifting second lens group, worth about two stops.",
    [
     4
    ]
   ],
   [
    2003,
    "rival",
    "Minolta DiMAGE A1 首次用传感器位移（sensor-shift）做双轴防抖，所有镜头都能防抖；2008 年 Sony A900 把它带到全画幅。",
    "The Minolta DiMAGE A1 introduced two-axis sensor-shift stabilisation, working with any lens; Sony brought it to full frame with the A900 in 2008.",
    [
     0
    ]
   ],
   [
    2009,
    "ver",
    "Canon EF 100mm f/2.8L Macro IS USM 首次用 Hybrid IS，同时补偿角度抖动和平移抖动，针对微距。",
    "The Canon EF 100mm f/2.8L Macro IS USM introduced Hybrid IS, correcting both angular and shift shake for macro work.",
    [
     0
    ]
   ],
   [
    2012,
    "mass",
    "Nokia Lumia 920（2012 年 9 月发布）首次在手机上用光学防抖：floating lens 用陀螺控制整组光学模组移动，号称约 3EV。",
    "The Nokia Lumia 920 (announced September 2012) brought OIS to phones: its floating-lens design moved the whole optical assembly under gyro control, claimed at about 3 EV.",
    [
     5,
     0
    ]
   ],
   [
    2014,
    "ver",
    "Sony α7 II 做出全画幅 5 轴机身防抖；同年 iPhone 6 Plus 加入 OIS，手机 OIS 走向主流。",
    "The Sony α7 II brought 5-axis in-body stabilisation to full frame; the same year the iPhone 6 Plus added OIS and phone OIS went mainstream.",
    [
     0,
     6
    ]
   ],
   [
    2015,
    "ver",
    "Panasonic Lumix GX8 推出 Dual IS，让镜头 OIS 与机身防抖协同；Olympus 2016 年推出同步双防抖。",
    "The Panasonic Lumix GX8 introduced Dual IS, coordinating lens OIS with in-body stabilisation; Olympus followed with synchronised dual IS in 2016.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "iPhone 12 Pro Max 首次在 iPhone 用传感器位移防抖，四角磁铁驱动传感器，Apple 称每秒校正 5000 次以上；同年 vivo X50 Pro 推出微云台，整个摄像模组反向转动，号称补偿幅度约为传统 OIS 的 3 倍。",
    "The iPhone 12 Pro Max brought sensor-shift stabilisation to iPhone, moving the sensor with magnets at four corners and, per Apple, adjusting over 5,000 times a second; the same year the vivo X50 Pro introduced a micro-gimbal rotating the whole camera module, claiming about three times the correction range of conventional OIS.",
    [
     7,
     8
    ]
   ]
  ],
  "now": [
   "光学防抖已是标配：相机普遍是机身 5 轴 + 镜头 OIS 协同，手机主摄普遍有 OIS，iPhone 用传感器位移，vivo 等用云台式模组，再叠加电子防抖（EIS）。",
   "Optical stabilisation is standard: cameras combine 5-axis IBIS with lens OIS, phone main cameras nearly all have OIS (sensor-shift on iPhone, gimbal-style modules on vivo and others), layered with electronic stabilisation (EIS)."
  ],
  "replaced": [
   "没有被取代；镜片位移在手机上逐步让位于传感器位移和整模组云台，视频端越来越依赖 EIS 与陀螺数据后期防抖做补充。",
   "Not replaced; in phones lens shift is giving way to sensor shift and whole-module gimbals, and video increasingly leans on EIS and gyro-based stabilisation as a complement."
  ],
  "refs": [
   {
    "t": "Image stabilization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Image_stabilization"
   },
   {
    "t": "US3212420A - Image motion compensator (Juan de la Cierva, Dynasciences)",
    "u": "https://patents.google.com/patent/US3212420"
   },
   {
    "t": "ETHW: Milestones: Camcorder with Image Stabilization, 1988",
    "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
   },
   {
    "t": "Camera-wiki: Nikon Zoom 700 VR / Zoom-Touch 105 VR",
    "u": "https://camera-wiki.org/wiki/Nikon_Zoom_700_VR/Zoom-Touch_105_VR"
   },
   {
    "t": "Canon Camera Museum: EF75-300mm f/4-5.6 IS USM",
    "u": "https://global.canon/en/c-museum/product/ef330.html"
   },
   {
    "t": "Windows Blog: Taking PureView to the next level (2012)",
    "u": "https://blogs.windows.com/devices/2012/09/05/taking-pureview-to-the-next-level/"
   },
   {
    "t": "Apple: iPhone 6 and iPhone 6 Plus announcement (2014)",
    "u": "https://www.apple.com/au/newsroom/2014/09/09Apple-Announces-iPhone-6-iPhone-6-Plus-The-Biggest-Advancements-in-iPhone-History"
   },
   {
    "t": "Digit: Apple iPhone 12 Pro Max sensor-shift stabilisation explained",
    "u": "https://www.digit.in/news/mobile-phones/apple-iphone-12-pro-max-camera-sensor-shift-stabilisation-explained-57333.html"
   },
   {
    "t": "Android Central: Vivo X50 series brings gimbal stabilization to phones",
    "u": "https://www.androidcentral.com/vivo-x50-series-brings-gimbal-video-stabilization-phones"
   }
  ]
 },
 "apod": {
  "stages": [
   [
    1964,
    "paper",
    "切趾（apodisation，希腊语意为去掉衍射的「足」）用于压低衍射旁瓣，19 世纪已有类似技巧；P. Jacquinot 与 B. Roizen-Dossier 1964 年在 Progress in Optics 发表经典综述。",
    "Apodisation (Greek for removing the foot) suppresses diffraction side lobes and had precursors in the 19th century; P. Jacquinot and B. Roizen-Dossier published the classic review in Progress in Optics in 1964.",
    [
     0,
     1
    ]
   ],
   [
    1968,
    "idea",
    "Minolta 的 Mino Masayuki 与 Okano Yukio 提出用径向透过率单调递减的吸收元件改善焦外像，优先权 1968 年，美国专利 US3843235 于 1974 年授权，这是摄影镜头用切趾改善散景的早期专利。",
    "Minolta's Masayuki Mino and Yukio Okano proposed an absorbing element whose transmission falls off radially to improve defocused images; priority 1968, granted as US3843235 in 1974, an early patent on apodisation for photographic bokeh.",
    [
     2
    ]
   ],
   [
    1985,
    "corp",
    "Minolta 在 1980 年代继续为 STF（Smooth Trans Focus）申请专利，研发量产切趾滤镜（约）。",
    "Minolta kept patenting STF (Smooth Trans Focus) in the 1980s while developing a manufacturable apodisation filter (approx.).",
    [
     3
    ]
   ],
   [
    1999,
    "mass",
    "Minolta AF 135mm f/2.8 [T4.5] STF 1999 年上市：8 片 6 组，光圈旁放一片凹形中性灰渐变镜片做切趾滤镜，透光只有 T4.5，且只能手动对焦。",
    "The Minolta AF 135mm f/2.8 [T4.5] STF launched in 1999: 8 elements in 6 groups with a concave neutral-grey graded element beside the aperture as the apodisation filter, transmitting only T4.5, manual focus only.",
    [
     3,
     4
    ]
   ],
   [
    2000,
    "rival",
    "Minolta Maxxum 7 加入 STF 模式：按一次快门在同一格胶片上以不同光圈连拍 7 次，用多重曝光模拟切趾效果，需上三脚架。",
    "The Minolta Maxxum 7 added an STF mode: one press fires 7 exposures on the same frame at different apertures, simulating apodisation by multiple exposure on a tripod.",
    [
     0,
     5
    ]
   ],
   [
    2006,
    "ver",
    "Sony 接手 Minolta 相机业务后把该镜头重新推出为 A 卡口 Sony 135mm f/2.8 [T4.5] STF（SAL135F28）。",
    "After taking over Minolta's camera business, Sony reissued the lens as the A-mount Sony 135mm f/2.8 [T4.5] STF (SAL135F28).",
    [
     3,
     6
    ]
   ],
   [
    2014,
    "ver",
    "Fujifilm 2014 年 9 月发布 XF56mm F1.2 R APD，号称首支带切趾滤镜的自动对焦镜头，用反差检测 AF 绕开渐变滤镜对相位对焦的干扰。",
    "Fujifilm announced the XF56mm F1.2 R APD in September 2014, billed as the first autofocus lens with an apodisation filter, using contrast AF to sidestep the filter's interference with phase detection.",
    [
     6,
     7
    ]
   ],
   [
    2016,
    "ver",
    "Venus Optics Laowa 105mm f/2 STF（2016）把切趾带到第三方低价镜头：f/2 的虚化、T3.2 的进光，手动对焦，约 699 美元。",
    "The Venus Optics Laowa 105mm f/2 STF (2016) brought apodisation to a low-cost third-party lens: f/2 bokeh with T3.2 light transmission, manual focus, about USD 699.",
    [
     8,
     3
    ]
   ],
   [
    2016,
    "rival",
    "iPhone 7 Plus 在 iOS 10.1（2016 年 10 月）推出人像模式，用双摄测深和机器学习在软件里模拟散景，切趾式光学虚化开始受计算摄影挑战。",
    "The iPhone 7 Plus gained Portrait mode with iOS 10.1 (October 2016), simulating bokeh in software from dual-camera depth and machine learning, challenging optical apodisation with computational photography.",
    [
     9
    ]
   ],
   [
    2017,
    "ver",
    "Sony FE 100mm F2.8 STF GM OSS（2017 年 2 月发布）是首支能自动对焦的全画幅切趾镜头，T5.6，11 片光圈，支持反差和焦平面相位对焦，并带光学防抖和 0.25x 微距。",
    "The Sony FE 100mm F2.8 STF GM OSS (announced February 2017) was the first full-frame apodisation lens with autofocus, T5.6, 11 blades, contrast plus focal-plane phase-detection AF, with OSS and 0.25x macro.",
    [
     10,
     6
    ]
   ],
   [
    2019,
    "rival",
    "Canon RF85mm F1.2 L USM DS（2019 年 12 月上市）不用独立滤镜，而在两个镜面镀 DS（Defocus Smoothing）膜，透过率从中心向边缘渐降。",
    "The Canon RF85mm F1.2 L USM DS (December 2019) used no separate filter; DS (Defocus Smoothing) coatings on two surfaces lower transmittance from centre to edge.",
    [
     11,
     6
    ]
   ],
   [
    2022,
    "end",
    "Fujifilm XF56mm F1.2 R APD 已停产，官方推荐不带切趾滤镜的 XF56mm F1.2 R WR 作为后继（年份约），切趾镜头仍是小众。",
    "Fujifilm has discontinued the XF56mm F1.2 R APD and points buyers to the XF56mm F1.2 R WR, which has no apodisation filter (year approx.); apodisation lenses remain niche.",
    [
     7,
     6
    ]
   ]
  ],
  "now": [
   "仍是少数人像镜头的特色：Sony FE 100mm F2.8 STF GM OSS、Canon RF85mm F1.2 L USM DS、Laowa 105mm f/2 STF 等仍在售；代价是损失约 1–2 档进光。",
   "Still a niche portrait-lens feature: the Sony FE 100mm F2.8 STF GM OSS, Canon RF85mm F1.2 L USM DS and Laowa 105mm f/2 STF are still sold, at the cost of roughly 1–2 stops of light."
  ],
  "replaced": [
   "在大众市场被计算虚化取代：手机人像模式用深度图在软件里生成平滑散景；光学端从独立渐变镜片演变为 DS 镀膜等更薄的实现。",
   "In the mass market it is being replaced by computational bokeh: phone portrait modes render smooth blur from depth maps in software; optically it has moved from separate graded elements to thinner implementations such as DS coatings."
  ],
  "refs": [
   {
    "t": "Apodization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Apodization"
   },
   {
    "t": "Nisenson & Papaliolios, Detection of Earth-like Planets Using Apodized Telescopes (arXiv astro-ph/0101241)",
    "u": "https://ar5iv.labs.arxiv.org/html/astro-ph/0101241"
   },
   {
    "t": "US3843235A - Image forming optical system wherein defocus images are improved (Minolta)",
    "u": "https://patents.google.com/patent/US3843235A/en"
   },
   {
    "t": "Smooth Trans Focus - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Smooth_Trans_Focus"
   },
   {
    "t": "Dyxum/mhohner lens data: Minolta AF 135/2.8 [T4.5] STF",
    "u": "https://www.mhohner.de/sony-minolta/onelens/af135f28stf?lg=e"
   },
   {
    "t": "Smooth Transition Focus - Simulation with the Minolta Maxxum 7",
    "u": "https://wkoopmans.ca/notebook/?p=22286"
   },
   {
    "t": "Fstoppers: The Secret That Makes the Creamiest Bokeh in Photography",
    "u": "https://fstoppers.com/education/secret-makes-creamiest-bokeh-photography-and-why-it-remains-niche-903798"
   },
   {
    "t": "Fujifilm: FUJINON XF56mmF1.2 R APD",
    "u": "https://www.fujifilm-x.com/global/?p=16934"
   },
   {
    "t": "Venus Optics Laowa 105mm f/2 Smooth Trans Focus - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Venus_Optics_Laowa_105mm_f/2_Smooth_Trans_Focus"
   },
   {
    "t": "Apple: Portrait mode now available on iPhone 7 Plus with iOS 10.1",
    "u": "https://www.apple.com/newsroom/2016/10/portrait-mode-now-available-on-iphone-7-plus-with-ios-101/"
   },
   {
    "t": "Sony: 100mm F2.8 STF G Master announcement (2017)",
    "u": "https://sony.mediaroom.com/2017-02-07-Sony-Introduces-100mm-F2-8-STF-G-Master-TM-with-Highest-Ever-Quality-Bokeh-for-an-Lens"
   },
   {
    "t": "Canon Camera Museum: RF85mm F1.2 L USM DS",
    "u": "https://global.canon/en/c-museum/product/rf488.html"
   }
  ]
 },
 "fold": {
  "stages": [
   [
    1967,
    "idea",
    "电影摄影用的 Kenworthy Snorkel 潜望式镜头系统问世，用反射镜把光路折转，拍微缩模型和近景，是折叠光路的早期商用形态。",
    "The Kenworthy Snorkel Camera System, a periscope-type lens for cinematography introduced in 1967, folded the light path with mirrors to shoot miniatures and close-ups — an early commercial folded optic.",
    [
     0
    ]
   ],
   [
    2002,
    "mass",
    "Minolta 在 CES 2002（1 月 8 日）发布 DiMAGE X：3x 变焦镜组侧躺在机身内、通过棱镜成像（37–111mm 等效），机身约 20mm 厚、镜头完全不伸出，是最早量产的折叠光路数码相机之一。",
    "Minolta announced the DiMAGE X at CES on 8 January 2002: a 3x zoom (37–111mm equiv.) lying sideways behind a prism, in a body about 20mm thick with no extending lens — one of the first mass-produced folded-optics digital cameras.",
    [
     1,
     0
    ]
   ],
   [
    2004,
    "ver",
    "Sharp 902SH（Vodafone，2004 年 9 月发布）带 2MP CCD 与 2x 光学变焦，Wikipedia 认为它可能是首款采用折叠镜头的手机（约）。",
    "The Sharp 902SH for Vodafone (announced September 2004) had a 2MP CCD and 2x optical zoom; Wikipedia cites it as possibly the first phone with a folded lens (approx.).",
    [
     2,
     0
    ]
   ],
   [
    2015,
    "mass",
    "ASUS 在 CES 2015 发布 ZenFone Zoom：HOYA 制造的潜望式 3x 光学变焦模组平躺机内，13MP、带 OIS 与激光对焦，机身 11.95mm，号称最薄 3x 光学变焦手机；原定 2015 Q2 上市，实际各地陆续到 2016 年初才开卖（约）。",
    "ASUS unveiled the ZenFone Zoom at CES 2015: a HOYA-built periscope 3x optical zoom lying flat in the body, 13MP with OIS and laser AF, 11.95mm thick — the thinnest 3x optical zoom phone; planned for Q2 2015, it reached most markets only by early 2016 (approx.).",
    [
     3,
     0
    ]
   ],
   [
    2017,
    "proto",
    "Oppo 在 MWC 2017 展示与以色列 Corephotonics 合作的“5x 双摄变焦”原型：光经棱镜转 90 度进入横置 3x 长焦，模组仅 5.7mm 高，棱镜与镜组一起移动做 OIS。",
    "At MWC 2017 Oppo showed a 5x dual-camera zoom prototype developed with Israel's Corephotonics: a prism turns light 90° into a sideways 3x telephoto in a 5.7mm-tall module, with prism and lens moving for OIS.",
    [
     4
    ]
   ],
   [
    2019,
    "ver",
    "Huawei P30 Pro（2019 年 3 月）首次把潜望式 5x 光学长焦（8MP、125mm 等效）做进量产旗舰，镜组和 CMOS 横向排列，掀起潜望长焦潮。",
    "The Huawei P30 Pro (March 2019) put a periscope 5x optical telephoto (8MP, 125mm equiv.) into a mass-market flagship, with lens group and CMOS laid out horizontally, kicking off the periscope boom.",
    [
     5,
     0
    ]
   ],
   [
    2020,
    "ver",
    "Huawei P40 Pro+ 推出 10x 潜望长焦，倍率翻倍；同年多家旗舰跟进 10x 级别潜望。",
    "The Huawei P40 Pro+ introduced a 10x periscope telephoto in 2020, doubling magnification as other flagships followed.",
    [
     0
    ]
   ],
   [
    2022,
    "ver",
    "Sony Xperia 1 IV 首次在手机潜望模组里移动镜组实现 85–125mm 连续光学变焦，而非在固定焦段间跳切。",
    "The Sony Xperia 1 IV was the first phone whose periscope moved lens groups for continuous 85–125mm optical zoom instead of hopping between fixed focal lengths.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "iPhone 15 Pro Max 采用四重反射棱镜（tetraprism），在小体积里实现 120mm / 5x 长焦，配 3D sensor-shift OIS+AF 模组、f/2.8。",
    "The iPhone 15 Pro Max used a tetraprism that reflects light four times to reach 120mm / 5x in a small module, with a 3D sensor-shift OIS+AF and f/2.8.",
    [
     7
    ]
   ],
   [
    2025,
    "ver",
    "Huawei Pura 80 Ultra 用可移动棱镜在两组镜头间切换、共用一块大底传感器，实现 3.7x 与 9.4x 双焦段潜望长焦。",
    "The Huawei Pura 80 Ultra uses a movable prism to switch between two lens groups sharing one large sensor, giving 3.7x and 9.4x periscope focal lengths.",
    [
     8
    ]
   ]
  ],
  "now": [
   "2026 年潜望长焦已是旗舰标配，主流为 3–5x 大底潜望加 10x 级远摄，代表有 iPhone 15/16/17 Pro 的 tetraprism、Huawei Pura 80 Ultra 双焦段切换、Sony Xperia 系列连续变焦。",
   "In 2026 periscope telephotos are standard on flagships, typically a large-sensor 3–5x plus a 10x-class tele; examples include Apple's tetraprism iPhone Pros, the Huawei Pura 80 Ultra's switchable dual-focal periscope and Sony's continuous-zoom Xperia."
  ],
  "replaced": [
   "没有被取代，而是在吸收别的路线：高像素主摄裁切（in-sensor zoom）抢走 2–3x 的位置，潜望朝更大传感器、多焦段切换、连续光学变焦方向演进。",
   "Not replaced; it is absorbing rivals. High-resolution main-sensor cropping has taken over 2–3x, while periscopes move toward larger sensors, switchable multi-focal designs and continuous optical zoom."
  ],
  "refs": [
   {
    "t": "Periscope lens - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Periscope_lens"
   },
   {
    "t": "DPReview: Minolta DiMAGE X review",
    "u": "https://www.dpreview.com/reviews/minoltadimagex"
   },
   {
    "t": "Mobile Phone Museum: Sharp 902SH",
    "u": "https://mobilephonemuseum.com/phone-detail/902sh"
   },
   {
    "t": "Engadget: ASUS ZenFone Zoom at CES 2015",
    "u": "https://www.engadget.com/2015-01-05-asus-zenfone-zoom-ces-2015.html"
   },
   {
    "t": "Engadget: Oppo's 5x zoom dual camera inspired by periscopes (2017)",
    "u": "https://www.engadget.com/2017-02-27-oppos-5x-zoom-dual-camera.html"
   },
   {
    "t": "Laser Focus World: Huawei launches 5X zoom on P30 using folded optics",
    "u": "https://www.laserfocusworld.com/articles/2019/03/huawei-launches-5x-zoom-on-p30-smartphone-using-folded-optics.html"
   },
   {
    "t": "Engadget: Sony Xperia 1 IV world's first true optical zoom lens",
    "u": "https://www.engadget.com/sonys-xperia-1-iv-smartphone-has-the-worlds-first-true-optical-zoom-lens-071003899.html"
   },
   {
    "t": "Apple Newsroom: iPhone 15 Pro and iPhone 15 Pro Max",
    "u": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/"
   },
   {
    "t": "Notebookcheck: Huawei Pura 80 Ultra and Pura 80 Pro unveiled",
    "u": "https://www.notebookcheck.net/Huawei-Pura-80-Ultra-and-Pura-80-Pro-unveiled-with-radical-camera-improvements.1034490.0.html"
   }
  ]
 },
 "ibis": {
  "stages": [
   [
    1994,
    "rival",
    "先出现的是镜头防抖：Nikon Zoom 700VR（1994）首个双轴光学防抖镜头，Canon EF 75–300mm IS USM（1995）把它带进可换镜头；缺点是每支镜头都要自带防抖组。",
    "Lens-based stabilization came first: the Nikon Zoom 700VR (1994) had the first two-axis stabilized lens and Canon's EF 75–300mm IS USM (1995) brought it to interchangeable lenses — but every lens needs its own IS group.",
    [
     0
    ]
   ],
   [
    2003,
    "mass",
    "Minolta DiMAGE A1（2003 年 8 月 7 日发布，5MP、28–200mm 等效）首创 Anti-Shake：不动镜片，而让 CCD 在 x/y 两轴浮动补偿抖动，是首台传感器位移防抖相机。",
    "The Minolta DiMAGE A1 (announced 7 August 2003, 5MP, 28–200mm equiv.) introduced Anti-Shake, moving the CCD on x/y axes instead of a lens element — the first sensor-shift stabilized camera.",
    [
     1,
     0
    ]
   ],
   [
    2004,
    "ver",
    "Konica Minolta Maxxum 7D（Dynax 7D）把 CCD 位移防抖搬进单反机身，让所有卡口镜头都获得防抖。",
    "The Konica Minolta Maxxum 7D (Dynax 7D) brought CCD-shift stabilization to a DSLR body, stabilizing every mounted lens.",
    [
     0
    ]
   ],
   [
    2006,
    "corp",
    "Pentax K100D（2006 年 5 月美国上市）采用机身 Shake Reduction；同年 Sony 接手 Konica Minolta 相机业务，以 Super SteadyShot 延续该技术。",
    "The Pentax K100D (US launch May 2006) adopted in-body Shake Reduction; Sony, having taken over Konica Minolta's camera business, continued the technology as Super SteadyShot.",
    [
     2,
     0
    ]
   ],
   [
    2007,
    "corp",
    "Olympus E-510 加入机身防抖，用超声波驱动（Supersonic Wave Drive）移动传感器，四大厂里第三家采用 IBIS。",
    "The Olympus E-510 added in-body IS driven by a Supersonic Wave Drive, making Olympus another major maker to adopt IBIS.",
    [
     0
    ]
   ],
   [
    2012,
    "ver",
    "Olympus OM-D E-M5（2012 年 2 月 8 日）推出世界首个 5 轴 IBIS：除 x/y 平移外还补偿 pitch、yaw 与绕光轴 roll，约 4 档。",
    "The Olympus OM-D E-M5 (8 February 2012) launched the world's first 5-axis IBIS, correcting pitch, yaw and roll around the optical axis on top of x/y shift, about 4 stops.",
    [
     3
    ]
   ],
   [
    2014,
    "ver",
    "Sony α7 II（2014 年 11 月 20 日）把 5 轴传感器位移防抖带进全画幅无反，之后全画幅机型陆续标配。",
    "The Sony α7 II (20 November 2014) brought 5-axis sensor-shift IS to full-frame mirrorless; full-frame bodies soon made it standard.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "Panasonic Lumix GX8 推出 Dual IS，把镜头防抖与机身防抖协同控制，此后 Canon、Nikon、OM 都做了镜头+机身联动。",
    "The Panasonic Lumix GX8 introduced Dual IS, coordinating lens and body stabilization; Canon, Nikon and OM later did the same.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "iPhone 12 Pro Max 主摄首次在 iPhone 上用 sensor-shift OIS：移动比镜筒轻得多的传感器，每秒数千次修正。",
    "The iPhone 12 Pro Max main camera was the first iPhone with sensor-shift OIS, moving the far lighter sensor instead of the lens barrel thousands of times per second.",
    [
     5
    ]
   ],
   [
    2020,
    "rival",
    "vivo X50 Pro（2020 年 6 月）推出“微云台”，双滚珠悬挂整个摄像头模组反向摆动，号称防抖角度比传统 OIS 大 300%，与 sensor-shift 争夺手机防抖路线。",
    "The vivo X50 Pro (June 2020) launched a micro-gimbal that swings the whole camera module on a double-ball suspension, claiming 300% more correction angle than OIS — a rival to sensor-shift in phones.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS R5（2020 年 7 月 9 日）配 5 轴 IBIS，配合 IS 镜头最高 8 档，宣告 IBIS 成为高端全画幅标配。",
    "The Canon EOS R5 (9 July 2020) had 5-axis IBIS rated up to 8 stops with IS lenses, cementing IBIS as standard on high-end full-frame.",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "OM System OM-1 Mark II（2024 年 1 月 30 日）配合支持镜头达 8.5 档防抖，当时业界最高。",
    "The OM System OM-1 Mark II (30 January 2024) reached 8.5 stops with supported lenses, the highest in the industry at the time.",
    [
     8
    ]
   ]
  ],
  "now": [
   "2026 年 IBIS 几乎是所有中高端无反（Sony、Canon、Nikon、Fujifilm、OM System）标配，最高约 8–8.5 档；手机上 iPhone 主摄等旗舰用 sensor-shift，也有长焦把传感器位移与棱镜防抖组合。",
   "In 2026 IBIS is standard on nearly all mid- to high-end mirrorless cameras (Sony, Canon, Nikon, Fujifilm, OM System), rated around 8–8.5 stops; in phones, iPhone main cameras and other flagships use sensor-shift, sometimes combined with prism stabilization on telephotos."
  ],
  "replaced": [
   "没有被取代；它与镜头防抖、电子防抖（EIS/陀螺仪裁切）融合成多级协同防抖。同一套位移机构还衍生出像素位移高像素合成、Pentax AstroTracer 等功能。",
   "Not replaced; it has merged with lens IS and electronic (gyro-crop) stabilization into coordinated systems. The same shift mechanism also enables pixel-shift high-resolution modes and astro tracking."
  ],
  "refs": [
   {
    "t": "Image stabilization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Image_stabilization"
   },
   {
    "t": "DPReview: Minolta DiMAGE A1 – anti-shake CCD",
    "u": "https://www.dpreview.com/articles/0039274904/dimagea1"
   },
   {
    "t": "Pentax K100D - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_K100D"
   },
   {
    "t": "Engadget: Olympus OM-D E-M5 five-axis sensor-shift stabilization hands-on",
    "u": "https://www.engadget.com/2012/02/08/olympus-om-d-e-m5-five-axis-sensor-shift-image-stabilization-han/"
   },
   {
    "t": "Sony α7 II - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_%CE%B17_II"
   },
   {
    "t": "TechCrunch: iPhone 12 Pro camera upgrades",
    "u": "https://techcrunch.com/2020/10/13/apples-iphone-12-pro-camera-upgrades-sharpen-focus-on-serious-photographers"
   },
   {
    "t": "Android Central: Vivo X50 series brings gimbal-like stabilization",
    "u": "https://www.androidcentral.com/vivo-x50-series-brings-gimbal-video-stabilization-phones"
   },
   {
    "t": "Canon EOS R5 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_R5"
   },
   {
    "t": "Engadget: OM System OM-1 Mark II improved stabilization",
    "u": "https://engadget.com/om-systems-om-1-mark-ii-offers-improved-autofocus-and-stabilization-201810603.html"
   }
  ]
 },
 "nano": {
  "stages": [
   [
    1935,
    "rival",
    "Olexander Smakula 在 Carl Zeiss 发明干涉型增透膜（T* 前身），1940 年随 Biotar、Sonnar 商用；此后多层真空镀膜成为主流，但对大角度入射光效果下降。",
    "Olexander Smakula at Carl Zeiss invented interference anti-reflection coatings in 1935, commercialized on the Biotar and Sonnar in 1940; multilayer vacuum coatings became standard but lose effectiveness at steep incidence.",
    [
     0
    ]
   ],
   [
    1962,
    "idea",
    "Bernhard 等人发现蛾、蝶复眼角膜表面布满 200–300nm 的“角膜乳突”阵列；后续研究（1967 年前后）指出它像渐变折射率层一样消除反射，即“蛾眼”原理（约）。",
    "Bernhard and colleagues found arrays of 200–300nm corneal nipples on moth and butterfly eyes; later work (around 1967) showed they act like a graded-index layer that suppresses reflection — the moth-eye principle (approx.).",
    [
     1,
     2
    ]
   ],
   [
    1973,
    "paper",
    "Clapham 与 Hutley 在 Nature 发表“moth eye”原理减少透镜反射的论文，用干涉光刻在光刻胶上做出亚波长结构；后来全息光刻+反应离子刻蚀可把玻璃反射率从 4.2% 降到 0.4% 以下。",
    "Clapham and Hutley published in Nature (1973) on reducing lens reflection with the moth-eye principle, making subwavelength structures by interference lithography; holographic lithography plus reactive ion etching later cut glass reflectance from 4.2% to below 0.4%.",
    [
     2,
     1
    ]
   ],
   [
    2004,
    "mass",
    "Nikon 2004 年 9 月 16 日发布 AF-S VR Nikkor 300mm f/2.8G IF-ED，首用 Nano Crystal Coat（源自半导体光刻机投影镜头的纳米颗粒超低折射率膜），2005 年 1 月上市。",
    "Nikon announced the AF-S VR Nikkor 300mm f/2.8G IF-ED on 16 September 2004, the first lens with Nano Crystal Coat — an ultra-low-index nanoparticle film derived from its lithography-stepper projection lenses — shipping January 2005.",
    [
     3,
     4
    ]
   ],
   [
    2008,
    "ver",
    "Canon 2008 年 9 月 17 日发布 SWC（亚波长结构镀膜），在镜面上排列 200–400nm 的楔形结构，使折射率连续变化，首用于 EF 24mm f/1.4L II USM，专治大入射角反射。",
    "Canon announced SWC on 17 September 2008: 200–400nm wedge structures on the lens surface give a continuously changing index, debuting on the EF 24mm f/1.4L II USM to suppress steep-angle reflections.",
    [
     5,
     6
    ]
   ],
   [
    2009,
    "ver",
    "Nikon 2009 年 10 月推出带 Nano Crystal Coat 的 Lambda S 显微镜物镜（CFI Apo 60X H Lambda S 等，水浸 NA 1.25–1.27），2011 年再推 CFI60 Plan Apo Lambda 系列。",
    "In October 2009 Nikon launched Lambda S microscope objectives with Nano Crystal Coat (e.g. CFI Apo 60X H Lambda S, water-immersion NA 1.25–1.27), followed by the CFI60 Plan Apo Lambda series in 2011.",
    [
     7,
     13
    ]
   ],
   [
    2014,
    "ver",
    "Canon 推出 ASC（Air Sphere Coating）：在蒸镀膜上加一层含空气的 SiO2 薄膜，以极低折射率压制近垂直入射光，可用于各种曲率面，与 SWC 互补（首用约 2014 年 EF 100-400mm II）。",
    "Canon introduced ASC (Air Sphere Coating): an SiO2 film containing air over conventional coatings, giving very low index for near-normal light on any curvature and complementing SWC (first used around 2014 on the EF 100-400mm II, approx.).",
    [
     8
    ]
   ],
   [
    2019,
    "ver",
    "Nikon NIKKOR Z 24-70mm f/2.8 S（2019 年 2 月）首用 ARNEO Coat，专压垂直入射光，与 Nano Crystal Coat 叠加使用。",
    "The NIKKOR Z 24-70mm f/2.8 S (February 2019) debuted ARNEO Coat for near-perpendicular light, stacked with Nano Crystal Coat.",
    [
     9,
     14
    ]
   ],
   [
    2022,
    "ver",
    "Nikon NIKKOR Z 400mm f/2.8 TC VR S（2022 年 1 月）首用 Meso Amorphous Coat：比纳米颗粒更小的非晶颗粒形成介孔结构，斜射优于 Nano Crystal、垂直不逊于 ARNEO，号称 NIKKOR 史上最强增透。",
    "The NIKKOR Z 400mm f/2.8 TC VR S (January 2022) debuted Meso Amorphous Coat: amorphous particles smaller than nanoparticles form a mesoporous film, beating Nano Crystal at oblique and matching ARNEO at normal incidence — Nikon's best anti-reflection yet.",
    [
     10,
     14
    ]
   ],
   [
    2022,
    "rival",
    "手机镜头走 ALD（原子层沉积）增透路线：Xiaomi 2022 年在 12S 系列（约）镜片上采用 ALD 膜，可在塑料非球面上均匀覆盖；2024 年传 Apple 为 iPhone 16 Pro 引入 ALD 设备。",
    "Phone lenses took the ALD (atomic layer deposition) route: Xiaomi used ALD coatings on its 12S-series lenses in 2022 (approx.), conformal on plastic aspheres; in 2024 Apple was reported to adopt ALD equipment for the iPhone 16 Pro.",
    [
     11,
     12
    ]
   ]
  ],
  "now": [
   "2026 年纳米/亚波长增透已是高端可换镜头标配：Nikon Nano Crystal、ARNEO、Meso Amorphous，Canon SWC 与 ASC，Sony Nano AR Coating II；显微镜物镜和手机镜片（ALD 超低反射膜）也普遍采用。",
   "In 2026 nano/subwavelength AR coatings are standard on high-end interchangeable lenses — Nikon Nano Crystal, ARNEO and Meso Amorphous, Canon SWC and ASC, Sony Nano AR Coating II — and are widespread in microscope objectives and phone lenses (ALD ultra-low-reflection films)."
  ],
  "replaced": [
   "没有被取代，而是代际叠加：从纳米颗粒膜到楔形结构、含气膜、介孔非晶膜，再到手机的 ALD 与蛾眼纳米压印膜；下一步是与超表面（metasurface）光学的一体化。",
   "Not replaced but layered by generations: nanoparticle films, then wedge structures, air-containing and mesoporous amorphous films, plus ALD and nanoimprinted moth-eye films in phones; the next step is integration with metasurface optics."
  ],
  "refs": [
   {
    "t": "Anti-reflective coating - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Anti-reflective_coating"
   },
   {
    "t": "PMC: Optical modelling and phylogenetic analysis of corneal nipple arrays in butterflies and moths (2019)",
    "u": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6780202"
   },
   {
    "t": "Laser Focus World: Motheye surfaces reflect little light",
    "u": "https://www.laserfocusworld.com/optics/article/16548704/thin-films-motheye-surfaces-reflect-little-light"
   },
   {
    "t": "Nikon USA press release: AF-S VR Nikkor 300mm f/2.8G IF-ED (16 Sep 2004)",
    "u": "https://www.nikonusa.com/press-room/nikon-steadies-the-action-with"
   },
   {
    "t": "Nikon: Nano Crystal Coat puts innovation right before your eyes",
    "u": "https://www.nikon.com/about/technology/stories/2002_nanocrystalcoat/"
   },
   {
    "t": "Canon global news: Subwavelength Structure Coating (17 Sep 2008)",
    "u": "https://global.canon/en/news/2008/sep17e.html"
   },
   {
    "t": "Canon Hong Kong: SWC coating",
    "u": "https://hk.canon/en/consumer/swc/article"
   },
   {
    "t": "Nikon Instruments: Lambda S objectives with Nano Crystal Coat (Oct 2009)",
    "u": "https://www.microscope.healthcare.nikon.com/about/news/nikon-instruments-introduces-new-high-performance-objectives-with-worlds-highest-numerical-apertures-among-water-immersion-objectives"
   },
   {
    "t": "Canon Asia: Air Sphere Coating (ASC)",
    "u": "https://asia.canon/en/campaign/rf-lens-world/the-advantages-of-rf-lenses/asc"
   },
   {
    "t": "Nikon news: NIKKOR Z 24-70mm f/2.8 S with ARNEO Coat (2019)",
    "u": "https://www.nikon.com/company/news/2019/0214_lens_01/"
   },
   {
    "t": "Nikon news: NIKKOR Z 400mm f/2.8 TC VR S with Meso Amorphous Coat (2022)",
    "u": "https://www.nikon.com/company/news/2022/0119_lens_01.html"
   },
   {
    "t": "Beneq: ALD antireflection coatings for camera lenses",
    "u": "https://beneq.com/en/markets/optical-coatings/camera-lens-coating/"
   },
   {
    "t": "MacRumors: iPhone 16 Pro camera may get ALD coating (2024)",
    "u": "https://www.macrumors.com/2024/04/15/iphone-16-pro-camera-reduced-lens-flare"
   },
   {
    "t": "Nikon Instruments: CFI60 Plan Apochromat Lambda with Nano-Crystal Coat (2011)",
    "u": "https://www.microscope.healthcare.nikon.com/about/news/nikon-instruments-introduces-new-high-performance-objectives-with-nano-crystal-coat-technology"
   },
   {
    "t": "NIKKOR Lens Glossary",
    "u": "https://imaging.nikon.com/imaging/lineup/lens/glossary/"
   }
  ]
 },
 "liquid": {
  "stages": [
   [
    1875,
    "idea",
    "Gabriel Lippmann 详细描述电毛细现象：电压改变液体与表面的润湿；1936 年 Frumkin 用表面电荷改变水滴形状，1981 年 Beni 与 Hackwood 提出 electrowetting 一词。",
    "Gabriel Lippmann described electrocapillarity in 1875 — voltage changes how a liquid wets a surface; Frumkin reshaped water drops with surface charge in 1936, and Beni and Hackwood coined electrowetting in 1981.",
    [
     0
    ]
   ],
   [
    1993,
    "paper",
    "Bruno Berge 研究在电极上覆盖绝缘介质层的电润湿（EWOD），避开电解问题，为液体镜头打下基础。",
    "Bruno Berge studied electrowetting on a dielectric-coated electrode (EWOD) in 1993, avoiding electrolysis and laying the groundwork for liquid lenses.",
    [
     0
    ]
   ],
   [
    1997,
    "paper",
    "Berge 与 Jérôme Peseux（Université Joseph Fourier, Grenoble）1997 年 10 月 8 日申请变焦液体镜头专利（US6369954，2002 年授权）：导电液中的绝缘油滴，250V 下约 40 屈光度变化；2000 年发表于 European Physical Journal E。",
    "Berge and Jérôme Peseux (Université Joseph Fourier, Grenoble) filed the variable-focus liquid lens patent on 8 October 1997 (US6369954, granted 2002): an insulating oil drop in conductive liquid, about 40 diopters of change at 250V; the paper followed in European Physical Journal E in 2000.",
    [
     1
    ]
   ],
   [
    2004,
    "proto",
    "Philips Research 在 CeBIT 2004 展示 FluidFocus：直径 3mm、长 2.2mm，焦距 5cm 到无穷远，全程切换 <10ms，测试超过 100 万次对焦无衰减。",
    "Philips Research showed FluidFocus at CeBIT 2004: 3mm diameter by 2.2mm long, focusing 5cm to infinity, full-range switching under 10ms, over one million focus cycles without degradation.",
    [
     2
    ]
   ],
   [
    2006,
    "mass",
    "Varioptic（Berge 2002 年（约）在里昂创办）2006 年 1 月推出 Arctic 320，首个百万像素级自动对焦液体镜头，面向拍照手机，授权 Samsung Electro-Mechanics；2007 年 1 月起由 Creative Sensor 在中国量产。",
    "Varioptic (founded by Berge in Lyon around 2002, approx.) launched the Arctic 320 in January 2006, the first multi-megapixel autofocus liquid lens, aimed at camera phones and licensed to Samsung Electro-Mechanics; Creative Sensor began volume production in China in January 2007.",
    [
     3,
     4
    ]
   ],
   [
    2008,
    "rival",
    "ETH Zurich 衍生的 Optotune（约 2008 年成立）推出 EL-10-30 形变聚合物可调焦镜，用介电弹性体驱动，通光口径首次超过 5mm；同期还有液晶镜头、压电、MEMS 等路线竞争。",
    "Optotune, spun out of ETH Zurich (founded around 2008, approx.), launched the EL-10-30 shape-changing polymer tunable lens driven by a dielectric elastomer, the first over 5mm aperture; liquid-crystal, piezo and MEMS approaches competed too.",
    [
     5
    ]
   ],
   [
    2010,
    "corp",
    "液体镜头转向工业读码：Microscan QX Hawk（约 2009）率先采用，Cognex 2010 年 1 月与 Varioptic 签授权，把液体镜头用于 DataMan 读码器自动对焦。",
    "Liquid lenses moved into industrial code reading: Microscan's QX Hawk (around 2009, approx.) adopted them, and Cognex licensed Varioptic's lens in January 2010 for autofocus in DataMan readers.",
    [
     4,
     5
    ]
   ],
   [
    2011,
    "corp",
    "Parrot 2011 年 5 月收购 Varioptic 全部股权（当时 19 人、2010 年营收 €0.6M），手机市场没起来，转攻工业、生物识别与医疗。",
    "Parrot bought 100% of Varioptic in May 2011 (19 staff, €0.6M revenue in 2010); with the phone market not taking off, focus shifted to industrial, biometric and medical uses.",
    [
     6
    ]
   ],
   [
    2016,
    "ver",
    "Microscan MicroHAWK ID-30/ID-40（2016 年 7 月）集成 Varioptic Arctic 25H 液体镜头，-30 至 85°C 工作，5cm–无穷远连续自动对焦 30fps。",
    "Microscan's MicroHAWK ID-30/ID-40 (July 2016) integrated Varioptic's Arctic 25H liquid lens, working from -30 to 85°C with continuous 5cm-to-infinity autofocus at 30fps.",
    [
     7
    ]
   ],
   [
    2017,
    "corp",
    "Corning 2017 年收购 Varioptic，2018 年产能近翻倍，2019 年 6 月累计出货 200 万颗，主攻机器视觉、读码、医疗成像。",
    "Corning acquired Varioptic in 2017, nearly doubled capacity in 2018 and shipped its 2 millionth lens by June 2019, for machine vision, barcode reading and medical imaging.",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "Xiaomi Mi MIX Fold（2021 年 3 月 30 日）首次在手机上用液体镜头：8MP、80mm 等效，3x 长焦与 3cm 微距一镜两用，由马达挤压液囊改变曲率，-40 至 60°C 可用。",
    "The Xiaomi Mi MIX Fold (30 March 2021) was the first phone with a liquid lens: 8MP, 80mm equiv., doubling as 3x telephoto and 3cm macro, with a motor squeezing a fluid packet to change curvature, rated -40 to 60°C.",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年液体镜头主战场是工业：Corning Varioptic、Optotune 镜头广泛用于读码器、机器视觉、医疗内窥与显微；手机上仅 Mi MIX Fold 等少数尝试，主流仍是 VCM。",
   "In 2026 liquid lenses live mainly in industry: Corning Varioptic and Optotune lenses are widely used in code readers, machine vision, medical endoscopy and microscopy; in phones only a few attempts like the Mi MIX Fold exist, VCMs remain mainstream."
  ],
  "replaced": [
   "在手机上被更便宜成熟的 VCM 音圈马达（及后来的 sensor-shift、潜望马达）挡在门外；工业领域仍在扩张，下一步是集成 OIS 的液体镜头和与超表面、液晶镜头的竞争。",
   "In phones it was shut out by cheaper, mature VCM actuators (and later sensor-shift and periscope motors); in industry it is still growing, with OIS-integrated liquid lenses next and competition from metasurface and liquid-crystal lenses."
  ],
  "refs": [
   {
    "t": "Electrowetting - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Electrowetting"
   },
   {
    "t": "US6369954B1 Lens with variable focus (Berge, Peseux) - Google Patents",
    "u": "https://patents.google.com/patent/US6369954"
   },
   {
    "t": "Phys.org: Philips' fluid lenses bring things into focus (2004)",
    "u": "https://phys.org/news308.html"
   },
   {
    "t": "Reviewed: Liquid lens innovations take initial form in camera phones (2006)",
    "u": "https://www.reviewed.com/cameras/news/liquid-lens-innovations-takes-initial-form-in-camera-phones"
   },
   {
    "t": "Vision Systems Design: Varioptic and Cognex enter partnership for liquid lens (2010)",
    "u": "https://www.vision-systems.com/cameras-accessories/article/16749295/varioptic-and-cognex-enter-partnership-for-liquid-lens"
   },
   {
    "t": "Vision Systems Design: Tunable optics",
    "u": "https://www.vision-systems.com/non-factory/life-sciences/article/16738542/tunable-optics"
   },
   {
    "t": "Image Sensors World: Varioptic acquired by Parrot (2011)",
    "u": "https://image-sensors-world.blogspot.com/2011/05/varioptic-acquired.html?m=0"
   },
   {
    "t": "Vision Systems Design: Microscan barcode readers feature liquid lens from Varioptic (2016)",
    "u": "https://www.vision-systems.com/cameras-accessories/article/16742333/microscan-barcode-readers-now-feature-liquid-lens-from-varioptic"
   },
   {
    "t": "Image Sensors World: Corning shipped 2 million Varioptic lenses (2019)",
    "u": "https://image-sensors-world.blogspot.com/2019/06/corning-shipped-2-million-varioptic.html"
   },
   {
    "t": "Engadget: Xiaomi Mi Mix Fold with liquid lens (2021)",
    "u": "https://www.engadget.com/xiaomi-mi-mix-fold-foldable-phone-liquid-lens-launch-price-availability-142220296.html"
   }
  ]
 },
 "wlo": {
  "stages": [
   [
    1990,
    "idea",
    "1980–90 年代 Philips 为 CD 光头量产复制透镜，积累了紫外固化复制工艺；1990 年代出现第一批晶圆级微光学公司，把半导体光刻、对准、切割用于微透镜阵列（约）。",
    "In the 1980s–90s Philips mass-replicated lenses for CD optical pickups, building UV-cure replication know-how; the first wafer-scale micro-optics firms appeared in the 1990s, applying lithography, alignment and dicing to microlens arrays (approx.).",
    [
     0,
     1
    ]
   ],
   [
    2004,
    "paper",
    "Fraunhofer IOF（Jena）发展晶圆级 UV 压印复制，Duparré 等人 2004 年在 SPIE 等会议发表基于人工复眼的超薄相机，整体厚度仅 320µm（约）。",
    "Fraunhofer IOF in Jena developed wafer-scale UV-molding replication; Duparré et al. presented ultra-thin artificial-compound-eye cameras at SPIE and other venues in 2004, only 320µm thick (approx.).",
    [
     2
    ]
   ],
   [
    2006,
    "corp",
    "Philips 光学业务独立为 Anteryon（Eindhoven），以 WaferOptics 复制与堆叠技术做手机相机微光学；同期 Heptagon（新加坡/瑞士）也在做晶圆级光学封装。",
    "Philips' optics unit spun off as Anteryon (Eindhoven) in 2006, using WaferOptics replication and stacking for phone camera micro-optics; Heptagon (Singapore/Switzerland) worked on wafer-level optical packaging in parallel.",
    [
     1,
     8
    ]
   ],
   [
    2007,
    "proto",
    "Tessera 2007 年 6 月发布 OptiML WLC：在晶圆上一次制成数千颗镜片、多层晶圆对准键合后切割，号称体积减 50%、光学成本省 30%，依托收购的 Shellcase、Digital Optics、Eyesquad。",
    "Tessera announced OptiML WLC in June 2007: thousands of lenses made per wafer, multiple lens wafers aligned, bonded and diced, claiming 50% smaller modules and 30% lower optics cost, built on acquired Shellcase, Digital Optics and Eyesquad.",
    [
     3
    ]
   ],
   [
    2009,
    "mass",
    "OmniVision 2009 年 2 月发布 CameraCube（媒体 2008 年底已有报道（约））：传感器、ISP 与晶圆级镜头一体，2.5×2.9×2.5mm，可回流焊；OVM6680 与 OVM7690（VGA）当即量产，用于手机前置摄像头。",
    "OmniVision announced CameraCube in February 2009 (with press coverage from late 2008, approx.): sensor, ISP and wafer-level lens in one reflowable 2.5×2.9×2.5mm package; OVM6680 and the VGA OVM7690 entered volume production for phone front cameras.",
    [
     4,
     5
    ]
   ],
   [
    2013,
    "end",
    "高像素手机主摄需要多片高精度塑料非球面，晶圆级玻璃/树脂镜片跟不上；Tessera 子公司 DigitalOptics 2013 年 3 月关闭珠海工厂、退出模组制造（2012 年亏损 $88.5M），2014 年出售晶圆级光学专利。",
    "High-resolution phone main cameras needed multiple precise plastic aspheres that wafer-level lenses could not match; Tessera's DigitalOptics closed its Zhuhai fab and exited module making in March 2013 after an $88.5M operating loss in 2012, later selling its wafer-level optics patents.",
    [
     6
    ]
   ],
   [
    2016,
    "ver",
    "晶圆级光学转向 3D 感测：Himax 2016 年 1 月推出集成 DOE 的晶圆级激光准直器，高度 <2mm，把结构光投射器缩小到 5mm、体积减为 1/9。",
    "Wafer-level optics pivoted to 3D sensing: in January 2016 Himax launched a wafer-level laser collimator with integrated DOE, under 2mm tall, shrinking structured-light projectors to 5mm and one-ninth the volume.",
    [
     7
    ]
   ],
   [
    2016,
    "corp",
    "ams 2016 年 10 月以最高 €845M 收购 Heptagon（830 余人、250+ 专利族），押注手机光学感测；Anteryon 2019 年被苏州晶方（WLOPT）收购。",
    "ams agreed in October 2016 to buy Heptagon for up to €845M (830+ staff, 250+ patent families), betting on phone optical sensing; Anteryon was bought by Suzhou's Jingfang (WLOPT) in 2019.",
    [
     8,
     1
    ]
   ],
   [
    2019,
    "ver",
    "OmniVision OVM6948 CameraCubeChip（2019 年 10 月）获吉尼斯“最小商用图像传感器”：传感器 0.575mm 见方、模组 0.65×0.65×1.158mm，200×200 像素，可放进 1mm 一次性内窥镜。",
    "OmniVision's OVM6948 CameraCubeChip (October 2019) won the Guinness record for smallest commercial image sensor: 0.575mm sensor, 0.65×0.65×1.158mm module, 200×200 pixels, fitting 1mm disposable endoscopes.",
    [
     9
    ]
   ],
   [
    2020,
    "ver",
    "OmniVision OVM9284（2020 年 6 月）号称首款车规晶圆级相机：1MP 全局快门、940nm 优化、6.5×6.5mm，用于驾驶员监测，2020 Q4 量产。",
    "OmniVision's OVM9284 (June 2020), billed as the first automotive-grade wafer-level camera: 1MP global shutter optimized for 940nm, 6.5×6.5mm, for driver monitoring, mass production Q4 2020.",
    [
     10
    ]
   ],
   [
    2022,
    "rival",
    "Metalenz 与 STMicroelectronics 把超表面平面镜头用 300mm 晶圆厂量产进 FlightSense ToF 模组（VL53L8），一片平面镜代替 3–4 片镜片，是晶圆级光学的下一代形态。",
    "Metalenz and STMicroelectronics put metasurface flat lenses, made in a 300mm fab, into the FlightSense ToF module (VL53L8) in 2022, replacing 3–4 lens elements with one — the next generation of wafer-level optics.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年晶圆级光学在低分辨率、超小体积场景是主流：手机 ToF/结构光/接近传感器的准直镜与 DOE、医用一次性内窥镜相机（OVM6948 一类）、车内 DMS/OMS 相机（OVM9284 一类）、AR 眼镜眼动追踪相机。",
   "In 2026 wafer-level optics dominates low-resolution, ultra-small uses: collimators and DOEs in phone ToF, structured-light and proximity sensors, disposable medical endoscope cameras (OVM6948 class), in-cabin DMS/OMS cameras (OVM9284 class) and eye-tracking cameras in AR glasses."
  ],
  "replaced": [
   "在高像素手机主摄上被注塑塑料非球面镜组取代，没能普及；在感测领域，晶圆级工艺正演进为超表面（metalens）平面光学，由半导体晶圆厂直接制造。",
   "For high-resolution phone main cameras it lost to injection-molded plastic asphere stacks; in sensing, the wafer-level process is evolving into metasurface flat optics made directly in semiconductor fabs."
  ],
  "refs": [
   {
    "t": "Microlens - Wikipedia (Wafer-level optics)",
    "u": "https://en.wikipedia.org/wiki/Wafer-level_optics"
   },
   {
    "t": "optics.org: Jingfang acquires Anteryon (2019)",
    "u": "https://www.optics.org/news/10/1/33"
   },
   {
    "t": "Fraunhofer IOF: UV molding / step-and-repeat replication",
    "u": "https://iof.fraunhofer.de/en/competences/micro-and-nano-structuring/step-and-repeat-replication.html"
   },
   {
    "t": "Laser Focus World: Tessera unveils wafer-level camera technology (2007)",
    "u": "https://www.laserfocusworld.com/optics/article/16568813/tessera-unveils-waferlevel-camera-technology-for-mobile-phones"
   },
   {
    "t": "OmniVision press release: CameraCube technology (Feb 2009)",
    "u": "https://www.ovt.com/?p=767"
   },
   {
    "t": "Electronic Design: 3D reflowable technology simplifies mobile camera design",
    "u": "https://www.electronicdesign.com/technologies/industrial/boards/article/21771307/3d-reflowable-technology-simplifies-mobile-camera-design"
   },
   {
    "t": "optics.org: Tessera closes China fab, shifts strategy (2013)",
    "u": "https://optics.org/news/4/3/36"
   },
   {
    "t": "F4News: Himax WLO adopted in 3D structured light camera (2016)",
    "u": "https://www.f4news.com/2016/01/06/himax-wlo-adopted-in-3d-structured-light-camera"
   },
   {
    "t": "tech.eu: ams acquires Heptagon (2016)",
    "u": "https://tech.eu/2016/10/24/ams-heptagon/"
   },
   {
    "t": "OmniVision press release: Guinness record smallest image sensor OVM6948 (2019)",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-guinness-world-record-for-smallest-image-sensor-and-new-miniature-camera-module-for-disposable-medical-applications"
   },
   {
    "t": "OmniVision press release: world's first automotive wafer-level camera OVM9284 (2020)",
    "u": "https://www.ovt.com/press-releases/omnivision-unveils-worlds-first-automotive-wafer-level-camera-module-enabling-better-driver-monitoring-systems-in-more-vehicles/"
   },
   {
    "t": "Laser Focus World: World's first metasurface for consumer electronics (2022)",
    "u": "https://www.laserfocusworld.com/optics/article/14277991/worlds-first-metasurface-for-consumer-electronics-makes-commercial-debut"
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
