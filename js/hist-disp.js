/* 显示时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 disp 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 */
TIMELINES.disp.hist = {
 "touch": {
  "stages": [
   [
    1965,
    "paper",
    "英国 Royal Radar Establishment（Malvern）的 E. A. Johnson 在 Electronics Letters 1965 年 10 月刊发表《Touch display—a novel input/output device for computers》，提出在 CRT 表面布置导线、用手指电容感应来选点，设想用于空中交通管制；1967 年发长文，1969 年获美国专利。",
    "E. A. Johnson of the Royal Radar Establishment (Malvern, UK) published 'Touch display—a novel input/output device for computers' in Electronics Letters (Oct 1965): finger-capacitance wires on a CRT face, intended for air traffic control; a fuller paper followed in 1967 and a US patent in 1969.",
    [
     0,
     1
    ]
   ],
   [
    1971,
    "proto",
    "University of Kentucky 的 G. Samuel Hurst 发明 Elograph 触摸传感器，1971 年获专利并成立 Elographics；1977 年 Elographics 与 Siemens 合作开发并申请五线电阻式触摸屏专利，成为后来工业与 POS 触屏的主流方案。",
    "G. Samuel Hurst at the University of Kentucky built the Elograph sensor, patented in 1971, and founded Elographics; in 1977 Elographics and Siemens developed and patented five-wire resistive touch, which became the mainstay of industrial and POS touchscreens.",
    [
     1,
     0
    ]
   ],
   [
    1972,
    "proto",
    "University of Illinois 为 Magnavox PLATO IV 学生终端申请红外光学触屏专利（16×16 红外位置传感）；同年 CERN 的 Bent Stumpe 做出自电容透明触屏，1977 年与 Frank Beck 做出互电容版本，用于 SPS 加速器控制室。",
    "The University of Illinois filed a 1972 patent for the infrared optical touchscreen of the Magnavox PLATO IV terminal (16×16 IR position sensors); the same year Bent Stumpe at CERN built a transparent self-capacitance screen, followed in 1977 by a mutual-capacitance version with Frank Beck for the SPS control room.",
    [
     0
    ]
   ],
   [
    1983,
    "mass",
    "HP-150 上市，屏幕四周的红外发射/接收管组成网格，是最早的商用触屏电脑之一，但只能识别单点、精度为字符级。",
    "The HP-150 shipped with a grid of infrared emitters and receivers around a 9-inch CRT, one of the first commercial touchscreen computers; single-touch only, with character-cell precision.",
    [
     0
    ]
   ],
   [
    1984,
    "proto",
    "Bell Labs 的 Bob Boie 做出第一块可叠在屏幕上的透明多点触控覆层；University of Toronto 输入研究组 1982 年做出多点触控系统，1985 年改用电容方式做出多点触控板。",
    "Bob Boie at Bell Labs built the first transparent multi-touch overlay for a display; the University of Toronto Input Research Group had a multi-touch system in 1982 and a capacitive multi-touch tablet by 1985.",
    [
     1,
     0
    ]
   ],
   [
    1986,
    "corp",
    "GM/Delco 在 1986–1989 款 Buick Riviera（及 1988–1989 Buick Reatta）上用 CRT 触屏 Graphic Control Center 取代空调和音响按键，是车载触屏首例，但用户反响不佳。",
    "GM/Delco fitted the CRT touchscreen Graphic Control Center to the 1986–1989 Buick Riviera (and 1988–1989 Reatta), replacing HVAC and radio buttons; the first automotive touchscreen, but unpopular with buyers.",
    [
     0
    ]
   ],
   [
    1994,
    "mass",
    "IBM 与 BellSouth 的 Simon Personal Communicator 于 1994 年 8 月 16 日开售（原型 1992 年 COMDEX 展出），4.5 英寸单色电阻屏配手写笔，可触屏拨号和打字，半年卖出约 5 万台。",
    "The IBM/BellSouth Simon Personal Communicator went on sale on 16 Aug 1994 (prototype shown at COMDEX 1992): a 4.5-inch monochrome resistive screen with stylus for dialing and typing; about 50,000 units sold in six months.",
    [
     2
    ]
   ],
   [
    1998,
    "corp",
    "University of Delaware 的 Wayne Westerman 与 John Elias 创立 FingerWorks，推出 TouchStream、iGesture 多指手势输入板；2005 年初被 Apple 收购，技术与人员成为 iPhone 多点触控的基础。",
    "Wayne Westerman and John Elias of the University of Delaware founded FingerWorks, making TouchStream and iGesture multi-finger gesture pads; Apple acquired it in early 2005 and its patents and founders underpinned iPhone multi-touch.",
    [
     3
    ]
   ],
   [
    2005,
    "ver",
    "Sony Cyber-shot DSC-N1（2005 年 10 月发布）首次在 Cyber-shot 上用 3 英寸 23 万像素触控 LCD 代替大部分按键；摄像机上 Sony Handycam DCR-PC101K 早在 2002 年就有触控液晶（约）。",
    "The Sony Cyber-shot DSC-N1 (announced Oct 2005) was the first Cyber-shot to replace most buttons with a 3-inch 230k-dot touch LCD; among camcorders, the Sony Handycam DCR-PC101K already had a touch-panel LCD in 2002 (approx.).",
    [
     4,
     7
    ]
   ],
   [
    2007,
    "ver",
    "LG Prada（2007 年 5 月）成为第一款电容触屏手机，随后 iPhone 用投射式电容（projected capacitive）多点触控取代电阻屏加手写笔，手指捏合缩放成为标准交互；2009 年第四季度全球多数智能手机已改用触屏。",
    "The LG Prada (May 2007) was the first phone with a capacitive touchscreen, and the iPhone then popularised projected-capacitive multi-touch in place of resistive-plus-stylus, making pinch-to-zoom standard; by Q4 2009 most smartphones shipped with touchscreens.",
    [
     0
    ]
   ],
   [
    2012,
    "ver",
    "iPhone 5 采用 in-cell 触控，把触控传感器做进液晶层内，省去单独的触控玻璃层，机身更薄；同期 Samsung Super AMOLED 走 on-cell 路线。",
    "The iPhone 5 adopted in-cell touch, building the sensor into the LCD stack instead of a separate touch layer, making the screen thinner; Samsung's Super AMOLED took the on-cell route.",
    [
     5
    ]
   ],
   [
    2026,
    "rival",
    "Euro NCAP 2026 规程要求转向灯、雨刮、双闪、喇叭和 eCall 必须用实体控件，过度依赖中控触屏的车型被扣分，汽车领域出现回归实体按键的趋势。",
    "Euro NCAP's 2026 protocols require indicators, wipers, hazard lights, horn and eCall to use physical controls and penalise cars that bury them in the central touchscreen, pushing automakers back toward physical buttons.",
    [
     6
    ]
   ]
  ],
  "now": [
   "投射式电容多点触控（in-cell/on-cell）已是手机、平板、车载中控和相机翻转屏的标准配置，如 iPhone、Galaxy 系列和大多数无反相机都可触屏对焦、触屏快门。",
   "Projected-capacitive multi-touch (in-cell/on-cell) is standard on phones, tablets, car infotainment screens and camera articulating LCDs; iPhones, Galaxy phones and most mirrorless cameras offer touch-to-focus and touch shutter."
  ],
  "replaced": [
   "没有被取代，仍是主流；电阻式和红外式只留在工业、POS 等场景。汽车上因 Euro NCAP 2026 规程部分功能退回实体按键，下一步是更好的触觉反馈、压感与语音/手势结合。",
   "Not replaced and still dominant; resistive and infrared touch survive mainly in industrial and POS uses. In cars some functions are moving back to physical buttons under Euro NCAP 2026, and the next steps are better haptics, force sensing, and voice/gesture input."
  ],
  "refs": [
   {
    "t": "Touchscreen - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Touchscreen"
   },
   {
    "t": "The Royal Air Force and the Invention of the Modern Touchscreen - Embedded Computing Design",
    "u": "https://embeddedcomputing.com/home-page/the-royal-air-force-and-the-invention-of-the-modern-touch-screen"
   },
   {
    "t": "IBM Simon - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/IBM_Simon"
   },
   {
    "t": "FingerWorks - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/FingerWorks"
   },
   {
    "t": "Sony's Latest Cyber-Shot Digital Camera Lets You Carry Your Photo Album (Sony press release, 2005)",
    "u": "https://sony.mediaroom.com/2005-10-03-Sonys-Latest-Cyber-Shot-Digital-Camera-Lets-You-Carry-Your-Photo-Album"
   },
   {
    "t": "Tight iPhone 5 Supplies Linked to In-Cell Display Technology - MacRumors",
    "u": "https://www.macrumors.com/2012/09/25/tight-iphone-5-supplies-linked-to-in-cell-display-technology/"
   },
   {
    "t": "Buttons are back for basic functions, Euro NCAP confirms in testing",
    "u": "https://www.euroncap.com/en/press-media/buttons-are-back-for-basic-functions-euro-ncap-confirms-in-testing/"
   },
   {
    "t": "Sony DCR-PC101K 発表 - PHILE WEB (2002)",
    "u": "https://www.phileweb.com/sp/news/d-av/200205/07/4677.html"
   }
  ]
 },
 "tft": {
  "stages": [
   [
    1962,
    "idea",
    "RCA 的 John Wallmark 1957 年申请薄膜 MOSFET 专利，Paul K. Weimer 1962 年在 RCA 用 CdSe/CdS 做出第一只薄膜晶体管（TFT）。",
    "John Wallmark of RCA filed a thin-film MOSFET patent in 1957, and Paul K. Weimer at RCA built the first thin-film transistor (TFT) from CdSe/CdS in 1962.",
    [
     0
    ]
   ],
   [
    1968,
    "idea",
    "RCA Laboratories 的 Bernard Lechner 提出用 TFT 逐像素驱动液晶的有源矩阵构想；1971 年 Lechner、Marlowe、Nester、Tults 演示了 2×18 的动态散射模式矩阵显示。",
    "Bernard Lechner at RCA Laboratories conceived TFT-driven active-matrix LCD in 1968; in 1971 Lechner, Marlowe, Nester and Tults demonstrated a 2×18 dynamic-scattering matrix display.",
    [
     0
    ]
   ],
   [
    1973,
    "proto",
    "Westinghouse 的 T. Peter Brody、J. A. Asars、G. D. Dixon 做出第一块 CdSe TFT 液晶屏；1974 年 Brody 与 Fang-Chen Luo 演示首个平板有源矩阵 LCD，1975 年 Brody 提出 active matrix 一词。",
    "T. Peter Brody, J. A. Asars and G. D. Dixon at Westinghouse built the first CdSe TFT LCD; in 1974 Brody and Fang-Chen Luo showed the first flat active-matrix LCD, and Brody coined 'active matrix' in 1975.",
    [
     0
    ]
   ],
   [
    1979,
    "paper",
    "University of Dundee 的 P. G. LeComber、W. E. Spear、A. Ghaith 在 Electronics Letters 15 卷 6 期发表非晶硅（a-Si）场效应器件，指出辉光放电沉积的 a-Si TFT 可用于寻址液晶屏，成为后来大尺寸 TFT-LCD 的主流材料。",
    "P. G. LeComber, W. E. Spear and A. Ghaith at the University of Dundee published an amorphous-silicon (a-Si) field-effect device in Electronics Letters 15(6), proposing glow-discharge a-Si TFTs for addressing LCDs; a-Si became the workhorse of large TFT-LCDs.",
    [
     3
    ]
   ],
   [
    1984,
    "mass",
    "Epson ET-10（美国名 Epson Elf）于 1984 年 8 月上市，2 英寸多晶硅 TFT 有源矩阵 TN 彩色液晶、52,800 像素，是世界第一台液晶彩色口袋电视。",
    "The Epson ET-10 (Epson Elf in the US) went on sale in Aug 1984 with a 2-inch polysilicon TFT active-matrix TN colour LCD of 52,800 pixels, the world's first colour LCD pocket TV.",
    [
     2
    ]
   ],
   [
    1988,
    "proto",
    "Sharp 展示 14 英寸 a-Si TFT-LCD 电视屏，厚 2.7 cm，而当时量产 TFT 屏只有 3 英寸；证明平板全彩屏可取代 CRT，获 IEEE Milestone。",
    "Sharp demonstrated a 14-inch a-Si TFT-LCD for TV, 2.7 cm thick, when mass-produced TFT panels were only 3 inches; it proved flat full-colour screens could replace CRTs and is an IEEE Milestone.",
    [
     1
    ]
   ],
   [
    1996,
    "ver",
    "为解决 TN 视角窄的问题，Hitachi 1996 年推出 IPS，随后出现 MVA/PVA（VA 系）、Sharp ASV、AFFS 等广视角变体；Samsung 2011 年推出 PLS。",
    "To fix TN's narrow viewing angles, Hitachi launched IPS in 1996, followed by MVA/PVA (VA family), Sharp ASV and AFFS; Samsung introduced PLS in 2011.",
    [
     0
    ]
   ],
   [
    2004,
    "paper",
    "东京工业大学 Hideo Hosono 组（Nomura 等）在 Nature 432 卷发表室温制备的非晶 InGaZnO（a-IGZO）透明柔性 TFT，迁移率比 a-Si 高约一个数量级。",
    "Hideo Hosono's group at Tokyo Tech (Nomura et al.) reported room-temperature amorphous InGaZnO (a-IGZO) transparent flexible TFTs in Nature 432, with mobility about an order of magnitude above a-Si.",
    [
     4,
     5
    ]
   ],
   [
    2010,
    "rival",
    "Samsung Galaxy S 用 4.0 英寸 Super AMOLED 主屏，自发光 OLED 开始在高端手机上与 TFT-LCD 竞争；但 OLED 本身仍需 TFT（LTPS）背板驱动。",
    "The Samsung Galaxy S used a 4.0-inch Super AMOLED main screen, and self-emissive OLED began displacing TFT-LCD in premium phones, though OLED itself still needs a TFT (LTPS) backplane.",
    [
     8
    ]
   ],
   [
    2012,
    "mass",
    "Sharp 2012 年 3 月在 Kameyama 二厂量产全球首批 IGZO 氧化物 TFT 液晶面板（与 Semiconductor Energy Laboratory 合作），样品含 32 英寸 3840×2160 显示器和 10 英寸 2560×1600 笔记本屏。",
    "In March 2012 Sharp began mass production of the first IGZO oxide-TFT LCD panels at Kameyama Plant No. 2 (with Semiconductor Energy Laboratory), with samples including a 32-inch 3840×2160 monitor panel and a 10-inch 2560×1600 notebook panel.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "Apple Watch Series 4 采用 LTPO 背板（LTPS 与氧化物 TFT 混合），可降低刷新率省电；之后 LTPO 用到 iPhone Pro 等高端 OLED 手机。",
    "Apple Watch Series 4 adopted an LTPO backplane (mixing LTPS and oxide TFTs) to lower refresh rate and save power; LTPO later spread to iPhone Pro and other premium OLED phones.",
    [
     7
    ]
   ]
  ],
  "now": [
   "a-Si 和 IGZO TFT-LCD 仍是电视、显示器、笔记本和车载屏的主力，常配 Mini-LED 背光；所有 AMOLED 也靠 LTPS/LTPO/氧化物 TFT 背板驱动，如 Apple Watch 和 iPhone Pro 的 LTPO OLED。",
   "a-Si and IGZO TFT-LCDs still dominate TVs, monitors, laptops and car displays, often with Mini-LED backlights; every AMOLED is also driven by an LTPS/LTPO/oxide TFT backplane, e.g. the LTPO OLEDs in Apple Watch and iPhone Pro."
  ],
  "replaced": [
   "作为液晶屏，TFT-LCD 在手机、相机 EVF 和高端电视上正被 OLED 取代；但 TFT 背板技术本身没有被取代，而是转为驱动 OLED，未来 MicroLED 也要靠 TFT 或 CMOS 背板。",
   "As an LCD, TFT-LCD is being replaced by OLED in phones, camera EVFs and premium TVs; the TFT backplane itself was not replaced but now drives OLED, and future MicroLED will also need TFT or CMOS backplanes."
  ],
  "refs": [
   {
    "t": "Thin-film-transistor liquid-crystal display - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Thin-film-transistor_liquid-crystal_display"
   },
   {
    "t": "Milestones: Sharp 14-inch TFT-LCD for TV, 1988 - ETHW",
    "u": "https://ethw.org/Milestones:Sharp_14-inch_Thin-Film-Transistor_Liquid-Crystal_Display_%28TFT-LCD%29_for_TV%2C_1988"
   },
   {
    "t": "Epson 'Elf' ET-10 Handheld Color Television (1984) - antiqueradio.org",
    "u": "https://www.antiqueradio.org/EpsonET-10ColorTelevision.htm"
   },
   {
    "t": "LeComber, Spear, Ghaith: Amorphous-silicon field-effect device and possible application, Electronics Letters 15(6), 1979",
    "u": "https://manuscript.isc.ac/Inventory/49/949886.htm"
   },
   {
    "t": "Nomura et al., Room-temperature fabrication of transparent flexible TFTs using amorphous oxide semiconductors, Nature 432 (2004)",
    "u": "https://ideas.repec.org/a/nat/nature/v432y2004i7016d10.1038_nature03090.html"
   },
   {
    "t": "JST: Hideo Hosono, IGZO-TFT research results",
    "u": "https://www.jst.go.jp/EN/achievements/research/hideo_hosono2016.html"
   },
   {
    "t": "Sharp begins production of IGZO LCD panels (Sharp news, 2012)",
    "u": "https://global.sharp/corporate/news/120413.html"
   },
   {
    "t": "Apple launches two new OLED iPhones and the LTPO OLED Watch Series 4 - OLED-Info",
    "u": "https://oled-info.com/apple-launches-two-new-oled-iphones-and-ltpo-oled-watch-series-4"
   },
   {
    "t": "Samsung Welcomes You to the Smart Life with the Global Launch of the Galaxy S",
    "u": "https://samsungmobilepress.com/press-releases/samsung-welcomes-you-to-the-smart-life-with-the-global-launch-of-the-galaxy-s"
   }
  ]
 },
 "hud": {
  "stages": [
   [
    1940,
    "idea",
    "HUD 源自二战前战斗机的反射式瞄准具；1940 年代初英国 Telecommunications Research Establishment 把雷达图像与陀螺瞄准具一起投到 de Havilland Mosquito 夜战机的风挡上（约）。",
    "HUDs evolved from pre-WWII fighter reflector sights; in the early 1940s the UK Telecommunications Research Establishment projected radar imagery with gyro-gunsight symbols onto the windscreen of de Havilland Mosquito night fighters (approx.).",
    [
     0
    ]
   ],
   [
    1958,
    "mass",
    "Royal Navy 的 Blackburn Buccaneer（1958 年 4 月 30 日首飞）装备 Strike Sight 抬头显示，由 Rank Cintel 从 1958 年起生产，被视为世界首个服役的 HUD。",
    "The Royal Navy's Blackburn Buccaneer (first flight 30 Apr 1958) carried the Strike Sight head-up display, built by Rank Cintel from 1958 and regarded as the first operational HUD.",
    [
     0
    ]
   ],
   [
    1975,
    "ver",
    "1960 年代法国试飞员 Gilbert Klopfstein 做出第一套现代 HUD；1975 年发展出用于仪表进近着陆的 HUD，1970 年代 HUD 进入民航。",
    "French test pilot Gilbert Klopfstein created the first modern HUD in the 1960s; a HUD for instrument (IFR) approaches was developed in 1975, and HUDs entered commercial aviation in the 1970s.",
    [
     0
    ]
   ],
   [
    1988,
    "mass",
    "GM 在 1988 Oldsmobile Cutlass Supreme Indianapolis 500 Pace Car 纪念版敞篷车（50 台复刻版）上首装量产车 HUD：Oldsmobile、Delco 与 Hughes 不到四个月做成，用 VFD 光源和原厂风挡反射，在车头上方显示数字车速和指示灯。",
    "GM fitted the first production-car HUD to the 1988 Oldsmobile Cutlass Supreme Indianapolis 500 Pace Car replica convertibles (50 replicas): built by Oldsmobile, Delco and Hughes in under four months, it used a VFD source and the stock windshield to show a digital speedometer and telltales above the hood.",
    [
     1,
     0
    ]
   ],
   [
    2003,
    "ver",
    "BMW 5 系 E60 成为第一款提供 HUD 的欧洲量产车（Siemens VDO 供货），显示车速、导航和故障警告；同年 Cadillac XLR 采用 Nippon Seiki 的 LCD HUD。",
    "The BMW 5 Series E60 became the first European production car to offer a HUD (supplied by Siemens VDO), showing speed, navigation and warnings; the same year the Cadillac XLR used a Nippon Seiki LCD HUD.",
    [
     2
    ]
   ],
   [
    2005,
    "ver",
    "Cadillac STS 推出多色 HUD（绿、黄、蓝、红）；2010 年 Audi A7 改用像素化显示，2014 年 Mercedes S 级 W222 做到 480×240 全彩。",
    "The Cadillac STS introduced a multi-colour HUD (green, yellow, blue, red); the 2010 Audi A7 moved to a pixel-based display and the 2014 Mercedes S-Class W222 reached 480×240 full colour.",
    [
     2
    ]
   ],
   [
    2010,
    "rival",
    "Ford、Mazda、MINI 等在 2010–2018 年间大量采用翻折式 combiner HUD，用独立透明板代替风挡反射，成本低但画面小，是风挡式 HUD 的廉价对手。",
    "Between 2010 and 2018 Ford, Mazda, MINI and others widely used fold-up combiner HUDs, a separate transparent plate instead of the windshield; cheaper but smaller, a low-cost rival to windshield HUDs.",
    [
     2
    ]
   ],
   [
    2012,
    "proto",
    "Pioneer 推出采用激光扫描直接投射的后装 AR-HUD，把导航信息叠加到路面视野上。",
    "Pioneer introduced an aftermarket AR-HUD using laser beam scanning, overlaying navigation onto the road view.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "Mercedes-Benz S 级 W223（2020 年 9 月发布）首推量产 AR-HUD：用 Texas Instruments 130 万微镜 DMD 投影，虚像距约 10 米、相当于 77 英寸屏，导航箭头贴合在真实车道上。",
    "The Mercedes-Benz S-Class W223 (revealed Sept 2020) launched the first production AR-HUD: a Texas Instruments DMD with 1.3 million mirrors projects a virtual image about 10 m ahead, equivalent to a 77-inch screen, with navigation arrows locked onto the real lane.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "Volkswagen 2020 年 12 月在 ID.3/ID.4 上把 AR-HUD 带到紧凑级：LCD 作图像源（PGU），远景窗口约 10 米、对角约 1.8 米，近景窗口约 3 米。",
    "In Dec 2020 Volkswagen brought AR-HUD to the compact class in the ID.3/ID.4: an LCD picture generation unit, a far window about 10 m away and about 1.8 m diagonal, plus a near window at about 3 m.",
    [
     4
    ]
   ],
   [
    2025,
    "end",
    "2025 年起出现全息 AR-HUD 和整条风挡下沿的集成显示方案，开始取代传统小视窗 HUD 和部分仪表盘。",
    "From 2025, holographic AR-HUDs and displays integrated along the whole windshield were announced, beginning to replace small-window HUDs and parts of the instrument cluster.",
    [
     0
    ]
   ]
  ],
  "now": [
   "HUD 已从豪华车普及到中级车，AR-HUD 用于 Mercedes S 级、Volkswagen ID 系列、Hyundai IONIQ 5 等，主流图像源为 TFT-LCD、DLP 或激光扫描。",
   "HUDs have spread from luxury to mid-range cars; AR-HUDs appear in the Mercedes S-Class, Volkswagen ID models and Hyundai IONIQ 5, with TFT-LCD, DLP or laser scanning as the image source."
  ],
  "replaced": [
   "没有被取代，仍在发展：下一步是更大视场的 AR-HUD、全息波导 HUD 和整条风挡显示。",
   "Not replaced and still advancing: next come wider-field AR-HUDs, holographic waveguide HUDs and full-width windshield displays."
  ],
  "refs": [
   {
    "t": "Head-up display - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Head-up_display"
   },
   {
    "t": "The First Head Up Display Introduced by General Motors (SAE 890288, 1989)",
    "u": "https://saemobilus.sae.org/papers/first-head-display-introduced-general-motors-890288"
   },
   {
    "t": "The history of automotive heads-up displays from 2000s to 2020s - Hudway",
    "u": "https://hudway.co/blog/history-of-automotive-heads-up-displays-21-st-century"
   },
   {
    "t": "Mercedes S-Class Dramatically Expands MBUX Capabilities - WardsAuto",
    "u": "https://wardsauto.com/mercedes-benz/mercedes-s-class-dramatically-expands-mbux-capabilities"
   },
   {
    "t": "From the luxury class to the compact segment: the augmented reality head-up display - Volkswagen Newsroom",
    "u": "https://www.volkswagen-newsroom.com/en/press-releases/from-the-luxury-class-to-the-compact-segment-the-augmented-reality-head-up-display-6730"
   }
  ]
 },
 "ips": {
  "stages": [
   [
    1974,
    "idea",
    "R. Soref 在 1974 年专利中描述了用叉指电极产生平行于基板电场的实验性 IPS 液晶，但当时没能做出比 TN 更好的画质。",
    "R. Soref described an experimental IPS-LCD with interdigitated electrodes producing an in-plane field in a 1974 patent, but could not make it outperform TN at the time.",
    [
     0
    ]
   ],
   [
    1990,
    "paper",
    "Fraunhofer 研究所（Freiburg）的 Guenter Baur 等人申请 IPS 有利分子排列的德国和美国专利（1990 年 1 月 9 日），专利转让给 Merck KGaA。",
    "Guenter Baur et al. at the Fraunhofer institute in Freiburg filed German and US patents (9 Jan 1990) on advantageous IPS molecular arrangements, assigned to Merck KGaA.",
    [
     0
    ]
   ],
   [
    1992,
    "proto",
    "Hitachi 工程师解决了 IPS 与 TFT 阵列矩阵互连的实用问题，并申请多项改进专利；NEC 与 Hitachi 成为最早的 IPS 有源矩阵 LCD 厂商。",
    "Hitachi engineers worked out the practical details of interconnecting IPS with a TFT matrix and filed improvement patents; NEC and Hitachi became the first makers of IPS active-matrix LCDs.",
    [
     0
    ]
   ],
   [
    1995,
    "proto",
    "Hitachi 1995 年 12 月 26 日发布 13.3 英寸超广视角 Super TFT 原型，面向电视和电脑双用途；同年 Oh-e 与 Kondo 发表 IPS 模式电光特性论文。",
    "On 26 Dec 1995 Hitachi announced a 13.3-inch ultra-wide-angle Super TFT prototype for both TV and PC use; that year Oh-e and Kondo published on the electro-optics of the IPS mode.",
    [
     1
    ]
   ],
   [
    1996,
    "mass",
    "Hitachi 1996 年量产 Super TFT（IPS），用于 13.3 英寸显示器；同年 Samsung 开发多畴光学图案化，VA 系广视角路线随之竞争。",
    "Hitachi began mass production of Super TFT (IPS) in 1996 for 13.3-inch monitors; the same year Samsung developed optical patterning for multi-domain LCDs, and the VA wide-angle family emerged as a rival.",
    [
     0,
     1
    ]
   ],
   [
    1998,
    "ver",
    "Hitachi 迭代出 Super-IPS（S-IPS，1998）、Advanced Super-IPS（AS-IPS，2002）和 IPS-Pro（2004 起），改善响应时间和对比度。",
    "Hitachi iterated to Super-IPS (S-IPS, 1998), Advanced Super-IPS (AS-IPS, 2002) and IPS-Pro (from 2004), improving response time and contrast.",
    [
     0
    ]
   ],
   [
    2007,
    "ver",
    "LG 推出 H-IPS（2007），之后 E-IPS（2009）降低成本；同年 Hitachi 在 au W52H 手机上用 2.9 英寸 IPS 液晶，上下左右 170° 视角，是 IPS 进入手机的早期例子。",
    "LG introduced H-IPS (2007) and later cost-reduced E-IPS (2009); the same year Hitachi put a 2.9-inch IPS LCD with 170° viewing angles in the au W52H phone, an early IPS phone.",
    [
     0,
     4
    ]
   ],
   [
    2010,
    "ver",
    "Apple iPhone 4 的 Retina 屏采用 LED 背光 IPS，之后 Retina 产品线长期使用 IPS；LG 推出 P-IPS（2010）和 AH-IPS（2011）以提高透光率和分辨率。",
    "The iPhone 4 Retina display used LED-backlit IPS, and Apple's Retina line long stayed IPS; LG added P-IPS (2010) and AH-IPS (2011) for higher transmittance and resolution.",
    [
     0
    ]
   ],
   [
    2011,
    "rival",
    "Samsung 推出 PLS（Plane-to-Line Switching），原理接近 IPS；VA 系（MVA/PVA）则以更高对比度在电视上与 IPS 竞争。",
    "Samsung introduced PLS (Plane-to-Line Switching), close to IPS in principle, while the VA family (MVA/PVA) competed in TVs with higher contrast.",
    [
     2
    ]
   ],
   [
    2022,
    "ver",
    "LG Display 推出 IPS Black，对比度提升到 2000:1、黑位深约 35%，首发于 Dell UltraSharp U2723QE/U3223QE。",
    "LG Display launched IPS Black with 2000:1 contrast and about 35% deeper blacks, debuting in the Dell UltraSharp U2723QE/U3223QE.",
    [
     3
    ]
   ]
  ],
  "now": [
   "IPS 仍是专业显示器、笔记本、平板和车载屏的主流液晶类型，如 Dell UltraSharp IPS Black 系列；但在手机上已基本让位给 OLED。",
   "IPS remains the mainstream LCD type in professional monitors, laptops, tablets and car displays, e.g. Dell UltraSharp IPS Black models, but has largely given way to OLED in phones."
  ],
  "replaced": [
   "在手机和高端电视上被 OLED 取代，显示器端正受 QD-OLED/WOLED 冲击；IPS 液晶本身仍在演进（IPS Black、Mini-LED 背光）。",
   "Replaced by OLED in phones and premium TVs and under pressure from QD-OLED/WOLED in monitors; IPS LCD itself keeps evolving (IPS Black, Mini-LED backlights)."
  ],
  "refs": [
   {
    "t": "IPS panel - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/IPS_panel"
   },
   {
    "t": "Hitachi news release, 26 Dec 1995: 13.3-inch Super TFT",
    "u": "https://www.hitachi.com/New/cnews/E/1996/951226.html"
   },
   {
    "t": "Thin-film-transistor liquid-crystal display - Wikipedia (Types)",
    "u": "https://en.wikipedia.org/wiki/Thin-film-transistor_liquid-crystal_display"
   },
   {
    "t": "What is IPS Black Technology? - Dell",
    "u": "https://www.dell.com/support/kbdoc/en-us/000201399/"
   },
   {
    "t": "日立 W52H ニュースリリース（2007年5月22日）",
    "u": "https://www.hitachi.co.jp/New/cnews/month/2007/05/0522a.html"
   }
  ]
 },
 "oled": {
  "stages": [
   [
    1953,
    "idea",
    "法国 Nancy 大学 André Bernanose 团队在 1950 年代初首次观察到有机材料的电致发光（约）。",
    "André Bernanose's team at the University of Nancy first observed electroluminescence in organic materials in the early 1950s (approx.).",
    [
     0
    ]
   ],
   [
    1963,
    "paper",
    "New York University 的 Martin Pope 组改进电极接触，在蒽晶体中观察到直流电致发光，但需数百伏电压。",
    "Martin Pope's group at New York University developed suitable electrode contacts and observed DC electroluminescence in anthracene crystals, though at hundreds of volts.",
    [
     0
    ]
   ],
   [
    1987,
    "paper",
    "Eastman Kodak 的 Ching W. Tang 与 Steven Van Slyke 在 Applied Physics Letters 51 卷 913 页发表双层有机薄膜 EL 器件，低于 10 V 驱动、亮度超过 1000 cd/m²，被视为第一个实用 OLED。",
    "Ching W. Tang and Steven Van Slyke at Eastman Kodak published a two-layer organic thin-film EL device in Applied Physics Letters 51:913, under 10 V and over 1000 cd/m², regarded as the first practical OLED.",
    [
     0,
     1
    ]
   ],
   [
    1990,
    "paper",
    "Cambridge 的 J. H. Burroughes、R. H. Friend 等在 Nature 发表基于 PPV 共轭聚合物的发光二极管，开启可溶液加工的聚合物 OLED 路线。",
    "J. H. Burroughes, R. H. Friend et al. at Cambridge reported PPV conjugated-polymer LEDs in Nature, opening the solution-processable polymer OLED route.",
    [
     2
    ]
   ],
   [
    1997,
    "mass",
    "Pioneer 量产世界首个商用 OLED：256×64 绿色单色无源矩阵（PMOLED）屏，用于车载 FM 文字多重广播接收机。",
    "Pioneer mass-produced the first commercial OLED: a 256×64 green monochrome passive-matrix (PMOLED) panel in an in-car FM teletext multiplex receiver.",
    [
     3,
     0
    ]
   ],
   [
    1998,
    "paper",
    "Princeton/USC 的 M. A. Baldo、M. E. Thompson、S. R. Forrest 在 Nature 395 卷发表磷光 OLED，同时利用单重态和三重态激子，使红、绿 OLED 内量子效率可接近 100%。",
    "M. A. Baldo, M. E. Thompson and S. R. Forrest (Princeton/USC) reported phosphorescent OLEDs in Nature 395, harvesting both singlet and triplet excitons so red and green OLEDs could approach 100% internal efficiency.",
    [
     4
    ]
   ],
   [
    2002,
    "corp",
    "NTT docomo 的 Fujitsu F504i（2002 年 5 月 24 日发售）用有机 EL 做翻盖外屏，主屏仍是 TFT。",
    "Fujitsu's F504i for NTT docomo (on sale 24 May 2002) used an organic EL sub-display on the flip lid, with a TFT main screen.",
    [
     5
    ]
   ],
   [
    2003,
    "mass",
    "Kodak EasyShare LS633（2003 年 3 月 PMA 发布）用 Kodak/Sanyo 合作的 2.2 英寸 512×218 LTPS 有源矩阵 OLED，是第一款 AMOLED 消费产品。",
    "The Kodak EasyShare LS633 (announced at PMA, Mar 2003) used a 2.2-inch 512×218 LTPS active-matrix OLED made with Sanyo, the first consumer AMOLED product.",
    [
     6
    ]
   ],
   [
    2004,
    "ver",
    "Sony 2004 年 9 月量产全彩 OLED，首用于 CLIÉ PEG-VZ90：3.8 英寸 480×320、厚 2.14 mm、Super Top Emission 结构、对比度 1000:1。",
    "Sony began mass-producing full-colour OLED in Sept 2004 for the CLIÉ PEG-VZ90: 3.8-inch 480×320, 2.14 mm thick, Super Top Emission, 1000:1 contrast.",
    [
     7
    ]
   ],
   [
    2010,
    "ver",
    "Samsung Galaxy S（2010 年 3 月发布）用 4.0 英寸 800×480 Super AMOLED，把触控层做成 on-cell，反光更少，AMOLED 成为旗舰手机主屏。",
    "The Samsung Galaxy S (announced Mar 2010) used a 4.0-inch 800×480 Super AMOLED with on-cell touch and less reflection, making AMOLED a flagship main screen.",
    [
     8
    ]
   ],
   [
    2013,
    "ver",
    "LG 55EM9700 于 2013 年 1 月在韩国开订，55 英寸 WRGB OLED（白色 OLED 加彩色滤光片、四色子像素），厚 4 mm，约 1 万美元，大尺寸 OLED 电视开始商用。",
    "LG's 55EM9700 opened pre-orders in Korea in Jan 2013: a 55-inch WRGB OLED (white OLED with colour filters, four sub-pixels), 4 mm thick, about US$10,000, launching large OLED TVs.",
    [
     9
    ]
   ],
   [
    2022,
    "ver",
    "Samsung Display 的 QD-OLED（蓝色 OLED 加量子点色转换）首发于 Sony Bravia XR A95K（CES 2022，55/65 英寸）。",
    "Samsung Display's QD-OLED (blue OLED with quantum-dot colour conversion) debuted in the Sony Bravia XR A95K (CES 2022, 55/65-inch).",
    [
     10
    ]
   ],
   [
    2024,
    "ver",
    "iPad Pro（M4）用双层叠串 tandem OLED，全屏亮度 1000 nits、HDR 峰值 1600 nits，解决 OLED 亮度与寿命瓶颈。",
    "The iPad Pro (M4) used two-stack tandem OLED for 1000 nits full-screen and 1600 nits HDR peak, addressing OLED's brightness and lifetime limits.",
    [
     11
    ]
   ]
  ],
  "now": [
   "OLED 已是高端手机、手表、相机 EVF、平板和高端电视的主流，代表产品有 iPhone、Galaxy、iPad Pro tandem OLED、LG WOLED 和 Samsung/Sony QD-OLED 电视；蓝色磷光材料寿命仍是难点。",
   "OLED is mainstream in premium phones, watches, camera EVFs, tablets and high-end TVs, e.g. iPhone, Galaxy, the iPad Pro tandem OLED, LG WOLED and Samsung/Sony QD-OLED TVs; blue phosphorescent lifetime remains the hard problem."
  ],
  "replaced": [
   "没有被取代，正在取代 LCD；潜在接班者是 MicroLED 和 QD 电致发光（QD-EL），但成本和良率还不支持大规模量产。",
   "Not replaced; it is replacing LCD. Possible successors are MicroLED and quantum-dot electroluminescence (QD-EL), but cost and yield do not yet support volume production."
  ],
  "refs": [
   {
    "t": "OLED - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/OLED"
   },
   {
    "t": "Steven Van Slyke - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Steven_Van_Slyke"
   },
   {
    "t": "Burroughes et al., Light-emitting diodes based on conjugated polymers, Nature 1990 - IBM Research",
    "u": "https://research.ibm.com/publications/light-emitting-diodes-based-on-conjugated-polymers"
   },
   {
    "t": "Pioneer / SOAR - OLED company spotlight, history and future - OLED-Info",
    "u": "https://www.oled-info.com/pioneer-soar-oled-company-spotlight-history-and-future"
   },
   {
    "t": "Baldo et al., Highly efficient phosphorescent emission from organic electroluminescent devices, Nature 395 (1998)",
    "u": "https://ideas.repec.org/a/nat/nature/v395y1998i6698d10.1038_25954.html"
   },
   {
    "t": "ドコモ、D504i と F504i を発売 - ケータイ Watch (2002)",
    "u": "https://k-tai.watch.impress.co.jp/cda/article/news_toppage/9466.html"
   },
   {
    "t": "Kodak LS633 First with OLED Display - DPReview",
    "u": "https://www.dpreview.com/articles/0923133050/kodakls633"
   },
   {
    "t": "Sony to start mass production of full color OLED - Phys.org (2004)",
    "u": "https://phys.org/news/2004-09-sony-mass-production-full-color-oled.html"
   },
   {
    "t": "Samsung Welcomes You to the Smart Life with the Global Launch of the Galaxy S",
    "u": "https://samsungmobilepress.com/press-releases/samsung-welcomes-you-to-the-smart-life-with-the-global-launch-of-the-galaxy-s"
   },
   {
    "t": "LG Begins Rollout of Eagerly Anticipated OLED TV - LG Newsroom",
    "u": "https://www.lg.com/global/newsroom/news/media-entertainment-solution/lg-begins-rollout-of-eagerly-anticipated-oled-tv"
   },
   {
    "t": "Sony launches its 2022 OLED TV range, including the world's first QD-OLED TV, the A95K - OLED-Info",
    "u": "https://www.oled-info.com/sony-launches-its-2022-oled-tv-range-including-worlds-first-qd-oled-tv-a95k"
   },
   {
    "t": "Apple unveils stunning new iPad Pro with M4 chip and Apple Pencil Pro - Apple Newsroom",
    "u": "https://www.apple.com/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/"
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
 "epaper": {
  "stages": [
   [
    1973,
    "paper",
    "Matsushita 的 Ota、Ohnishi、Yoshiyama 在 Proceedings of the IEEE 发表 EPID（electrophoretic image display）面板：带电颜料颗粒在液体中随直流电压迁移改变反射色，75 V 下对比度 40:1。",
    "Ota, Ohnishi and Yoshiyama of Matsushita published the EPID (electrophoretic image display) panel in Proceedings of the IEEE: charged pigment particles migrate in a liquid under DC voltage to change reflected colour, reaching 40:1 contrast at 75 V.",
    [
     2
    ]
   ],
   [
    1974,
    "idea",
    "Xerox PARC 的 Nick Sheridon 在 1970 年代（约）提出 Gyricon：直径 75–106 µm 的黑白双色小球在油腔中随电场旋转，被视为第一种电子纸。",
    "In the 1970s (approx.) Nick Sheridon at Xerox PARC proposed Gyricon: 75–106 µm bichromal black/white spheres that rotate in oil-filled cavities under an electric field, regarded as the first e-paper.",
    [
     1,
     9
    ]
   ],
   [
    1997,
    "corp",
    "MIT Media Lab 的 Joseph Jacobson 与本科生 JD Albert、Barrett Comiskey 及 Jerome Rubin、Russ Wilcox 创立 E Ink Corporation；微胶囊电泳显示的基础专利于 1996 年 10 月提交。",
    "MIT Media Lab professor Joseph Jacobson, undergraduates JD Albert and Barrett Comiskey, plus Jerome Rubin and Russ Wilcox founded E Ink Corporation; the foundational microencapsulated electrophoretic patent was filed in October 1996.",
    [
     0
    ]
   ],
   [
    1998,
    "paper",
    "Comiskey、Albert、Yoshizawa、Jacobson 在 Nature 394 卷发表《An electrophoretic ink for all-printed reflective electronic displays》：把电泳液封进微胶囊，可以纯印刷方式做出双稳态显示。",
    "Comiskey, Albert, Yoshizawa and Jacobson published 'An electrophoretic ink for all-printed reflective electronic displays' in Nature vol. 394: microencapsulating the electrophoretic fluid allows a bistable display made purely by printing.",
    [
     3
    ]
   ],
   [
    1999,
    "proto",
    "1999 年 5 月 4 日 E Ink 的 Immedia 标牌在马萨诸塞州 Marlborough 的 J.C. Penney 门店试用：约 6 英尺长、3 mm 厚的弧形蓝白字标牌，用寻呼机远程换字，是电子墨水首次商用。",
    "On 4 May 1999 E Ink's Immedia sign went on trial in a J.C. Penney store in Marlborough, Massachusetts: a curved, roughly 6-ft-long, 3 mm thick blue-on-white sign updated by pager, the first commercial use of electronic ink.",
    [
     4
    ]
   ],
   [
    2004,
    "mass",
    "Sony LIBRIé 成为第一台商用 E Ink 电子书阅读器；E Ink 与 Philips Components 合作做模组，Prime View International（PVI）2005 年接手 Philips 的电子纸业务。",
    "Sony's LIBRIé became the first commercial E Ink e-reader; E Ink worked with Philips Components on modules, and Prime View International (PVI) took over Philips' e-paper business in 2005.",
    [
     5,
     1
    ]
   ],
   [
    2005,
    "rival",
    "竞争路线相继出现又退场：Xerox 的 Gyricon LLC 因背板做不到每平方英尺 10 美元以下于 2005 年 12 月关闭；SiPix microcup、Bridgestone 液态粉末、Liquavista 电润湿、Qualcomm Mirasol 干涉调制等都没能撼动 E Ink。",
    "Rivals came and went: Xerox closed Gyricon LLC in December 2005 because backplanes could not get under $10 per sq ft; SiPix microcup, Bridgestone liquid powder, Liquavista electrowetting and Qualcomm Mirasol interferometric modulators never displaced E Ink.",
    [
     9,
     1
    ]
   ],
   [
    2006,
    "ver",
    "Motorola MOTOFONE F3 于 2006 年 11 月 28 日发售，用 E Ink 电泳膜做 ClearVision 主屏，是第一部采用电子纸的手机，但只能显示两行文字。",
    "The Motorola MOTOFONE F3 went on sale on 28 November 2006 with a ClearVision main screen made from E Ink's electrophoretic film, the first phone with e-paper, though it showed only two lines of text.",
    [
     6
    ]
   ],
   [
    2007,
    "ver",
    "E Ink 推出 Vizplex 膜；Amazon Kindle 于 2007 年 11 月 19 日上市，6 英寸 600×800、4 级灰阶，售价 399 美元，把电子纸带进大众市场。",
    "E Ink introduced Vizplex film; the Amazon Kindle launched on 19 November 2007 with a 6-inch 600×800, 4-level greyscale screen at $399, bringing e-paper to the mass market.",
    [
     0,
     7
    ]
   ],
   [
    2009,
    "corp",
    "PVI 以最终约 4.5 亿美元收购 E Ink，交易于 2009 年 12 月 24 日完成，此后 E Ink 由台湾元太（E Ink Holdings）主导生产。",
    "PVI acquired E Ink for a final price of about $450 million, closing on 24 December 2009; production has since been led by Taiwan's E Ink Holdings.",
    [
     0
    ]
   ],
   [
    2010,
    "ver",
    "第二代 Pearl 膜于 2010 年 7 月随新版 Kindle DX 推出、对比度更高；同年推出彩色滤光片方案 Triton（4,096 色但偏暗）。2012 年 Kindle Paperwhite 加入前光，E Ink 收购 SiPix。",
    "Second-generation Pearl film arrived in July 2010 with the updated Kindle DX, raising contrast; the same year brought colour-filter Triton (4,096 colours but dim). In 2012 the Kindle Paperwhite added a frontlight and E Ink bought SiPix.",
    [
     0,
     8,
     7
    ]
   ],
   [
    2013,
    "ver",
    "Carta 膜于 2013 年 1 月推出，此后 Carta HD、Carta 1200（2021）、Carta 1300（2023）持续提高对比度和刷新速度；同年推出黑白红/黄三色颗粒的 Spectra，主要用于电子价签。",
    "Carta film arrived in January 2013, followed by Carta HD, Carta 1200 (2021) and Carta 1300 (2023) with better contrast and faster updates; the same year saw Spectra, with black, white and red or yellow particles, aimed mainly at shelf labels.",
    [
     0,
     8
    ]
   ],
   [
    2019,
    "ver",
    "彩色路线分成两支：Kaleido（2019）在黑白膜上叠彩色滤光片，Advanced Color ePaper（ACeP，2016）/Gallery 用多色颗粒在每个像素里直接显色；Spectra 6（2023）面向标牌。",
    "Colour split into two branches: Kaleido (2019) puts a colour filter array over monochrome film, while Advanced Color ePaper (ACeP, 2016) and Gallery use multi-colour particles at every pixel; Spectra 6 (2023) targets signage.",
    [
     0,
     8
    ]
   ],
   [
    2024,
    "ver",
    "Amazon Kindle Colorsoft 于 2024 年 10 月 30 日上市，7 英寸、黑白 300 ppi、彩色 150 ppi；reMarkable Paper Pro（2024 年 9 月 4 日）首次把 Gallery 3 的 CMY+白 四色颗粒用于手写本，11.8 英寸 229 ppi。",
    "The Amazon Kindle Colorsoft launched on 30 October 2024 with a 7-inch screen at 300 ppi mono and 150 ppi colour; the reMarkable Paper Pro (4 September 2024) was the first note-taker to use Gallery 3's four-particle CMY + white ink, 11.8 inches at 229 ppi.",
    [
     10,
     11
    ]
   ]
  ],
  "now": [
   "2026 年电泳电子纸仍是反射式显示的主流：阅读器用 Carta 1300 黑白和 Kaleido 3 彩色（Kindle Colorsoft、Kobo），手写本用 Gallery 3（reMarkable Paper Pro），零售电子价签和公交站牌用 Spectra 6。",
   "In 2026 electrophoretic e-paper is still the leading reflective display: readers use Carta 1300 mono and Kaleido 3 colour (Kindle Colorsoft, Kobo), note-takers use Gallery 3 (reMarkable Paper Pro), and retail shelf labels and transit signs use Spectra 6."
  ],
  "replaced": [
   "没有被取代；Gyricon、Mirasol、电润湿等竞争路线都已退出。真正的压力来自低功耗反射式 LCD 和高亮度 OLED；下一步是更快刷新、更高彩色分辨率的全彩电子纸。",
   "Not replaced: rivals such as Gyricon, Mirasol and electrowetting have all left the market. The real pressure comes from low-power reflective LCD and bright OLED; the next step is full-colour e-paper with faster refresh and higher colour resolution."
  ],
  "refs": [
   {
    "t": "E Ink - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/E_Ink"
   },
   {
    "t": "Electronic paper - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Electronic_paper"
   },
   {
    "t": "Ota, Ohnishi, Yoshiyama: Electrophoretic image display (EPID) panel, Proc. IEEE 1973",
    "u": "https://manuscript.isc.ac/Inventory/49/927297.htm"
   },
   {
    "t": "Comiskey et al.: An electrophoretic ink for all-printed reflective electronic displays, Nature 394 (1998)",
    "u": "https://ideas.repec.org/a/nat/nature/v394y1998i6690d10.1038_28349.html"
   },
   {
    "t": "Salon: Digital ink (1999)",
    "u": "https://www.salon.com/1999/05/04/digital_ink"
   },
   {
    "t": "Sony Reader (Librie) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_Librie"
   },
   {
    "t": "Motorola Fone F3 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Motorola_Fone_F3"
   },
   {
    "t": "Amazon Kindle - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Amazon_Kindle"
   },
   {
    "t": "E Ink blog: Evolution to conquering color",
    "u": "https://blog.eink.com/evolution-to-conquering-color"
   },
   {
    "t": "Gyricon - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Gyricon"
   },
   {
    "t": "Kindle Colorsoft - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Kindle_Colorsoft"
   },
   {
    "t": "E Ink blog: New reMarkable Paper Pro",
    "u": "https://blog.eink.com/new-remarkable-paper-pro"
   }
  ]
 },
 "microoled": {
  "stages": [
   [
    1987,
    "idea",
    "Eastman Kodak 的 Ching Wan Tang 与 Steven Van Slyke 做出第一个实用的双层 OLED，为后来把 OLED 蒸镀到硅芯片上奠定基础。",
    "Ching Wan Tang and Steven Van Slyke at Eastman Kodak built the first practical two-layer OLED, the basis for later depositing OLEDs on silicon chips.",
    [
     0
    ]
   ],
   [
    1996,
    "corp",
    "eMagin 于 1996 年在纽约 Hopewell Junction 成立，从 Kodak 获得 OLED 永久非独占授权（75 项以上专利），并与 IBM 联合研发，专攻 OLED-on-silicon 微显示。",
    "eMagin was founded in 1996 in Hopewell Junction, New York, took a perpetual non-exclusive OLED licence from Kodak (75+ patents) and co-developed with IBM, focusing on OLED-on-silicon microdisplays.",
    [
     3,
     1
    ]
   ],
   [
    2000,
    "proto",
    "eMagin 的 OLED 微显示获 SID Information Display 杂志年度显示器金奖。",
    "eMagin's OLED microdisplay won SID Information Display magazine's Display of the Year Gold Award.",
    [
     3
    ]
   ],
   [
    2001,
    "proto",
    "2001 年 1 月 eMagin 与 IBM 展示世界首个直视 OLED-on-silicon 微显示，装在一台 Linux 腕表电脑里。",
    "In January 2001 eMagin and IBM showed the world's first direct-view OLED-on-silicon microdisplay, built into a Linux wristwatch computer.",
    [
     1
    ]
   ],
   [
    2001,
    "mass",
    "首款商用产品 SVGA+ 微显示：0.62 英寸、852×600、驱动电路直接做在硅背板里，2001 年 4 月送样、7 月出货，主要供军用、工业和医疗头显。",
    "The first commercial product, the SVGA+ microdisplay: 0.62 inch, 852×600, drive electronics built into the silicon backplane, sampled in April 2001 and shipped in July, mainly for military, industrial and medical headsets.",
    [
     1,
     2
    ]
   ],
   [
    2002,
    "ver",
    "eMagin 于 2002 年 2 月出货支持立体显示的 SVGA-3D（800×600），并入选美军 Land Warrior 单兵系统。",
    "eMagin shipped the stereo-capable SVGA-3D (800×600) in February 2002 and was selected for the US Army Land Warrior programme.",
    [
     1
    ]
   ],
   [
    2005,
    "mass",
    "eMagin Z800 3DVisor 于 2005 年第二季度上市，售价 899 美元，用两块 800×600 OLED 微显示，加头部追踪，可由 USB 供电，是首个面向消费者的 OLED 头显。",
    "The eMagin Z800 3DVisor shipped in Q2 2005 at $899 with two 800×600 OLED microdisplays and head tracking, powered over USB, the first consumer OLED head-mounted display.",
    [
     4,
     3
    ]
   ],
   [
    2011,
    "ver",
    "Sony 自产 0.5 英寸 XGA（1024×768）白光 OLED+彩色滤光片微显示 ECX331，用于 α77、α65、NEX-7 和 NEX-5N 选配 EVF；同年 0.7 英寸 720p ECX332A 用于 HMZ-T1 头显。",
    "Sony began making its own 0.5-inch XGA (1024×768) white-OLED plus colour-filter microdisplay, the ECX331, used in the α77, α65, NEX-7 and the NEX-5N's optional EVF; the 0.7-inch 720p ECX332A of the same year went into the HMZ-T1 headset.",
    [
     5,
     6
    ]
   ],
   [
    2020,
    "rival",
    "竞争路线 microLED-on-silicon 起步：JBD 于 2020 年 11 月量产 0.13 英寸 VGA microLED 微显示，绿光亮度达 200 万 nits，主攻户外可读的 AR 眼镜；LCoS 也仍在 AR 中使用。",
    "Rival microLED-on-silicon arrived: JBD began mass-producing a 0.13-inch VGA microLED microdisplay in November 2020 with 2 million nits in green, aimed at outdoor-readable AR glasses; LCoS remains in use in AR too.",
    [
     9
    ]
   ],
   [
    2022,
    "ver",
    "相机 EVF 持续升级：Sony α7R V（2022 年 10 月）用 0.64 英寸 Quad-XGA OLED EVF，944 万点、0.9 倍放大倍率，约是 2011 年 XGA 的 4 倍点数。",
    "Camera EVFs kept improving: the Sony α7R V (October 2022) uses a 0.64-inch Quad-XGA OLED EVF with 9.44 million dots and 0.9× magnification, about four times the dots of the 2011 XGA panel.",
    [
     7
    ]
   ],
   [
    2023,
    "corp",
    "Samsung Display 以约 2.18 亿美元全现金收购 eMagin，补齐硅基 OLED 能力。",
    "Samsung Display bought eMagin in an all-cash deal worth about $218 million to add OLED-on-silicon capability.",
    [
     3
    ]
   ],
   [
    2024,
    "ver",
    "Apple Vision Pro（2023 年 6 月发布、2024 年发售）两块邮票大小的 micro-OLED 共 2300 万像素，每只眼的像素多于一台 4K 电视。",
    "The Apple Vision Pro (announced June 2023, on sale 2024) uses two postage-stamp-sized micro-OLED panels with 23 million pixels in total, more pixels per eye than a 4K TV.",
    [
     8
    ]
   ],
   [
    2025,
    "ver",
    "Samsung Galaxy XR 于 2025 年 10 月 22 日上市，售价 1,799 美元，用两块 Sony 4K（3552×3840）OLED 微显示，90 Hz；Samsung Display 也开始自产同类面板。",
    "The Samsung Galaxy XR launched on 22 October 2025 at $1,799 with two Sony 4K (3552×3840) OLED microdisplays at 90 Hz; Samsung Display has also started making such panels itself.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年硅基 OLED 是高端 EVF 和 VR/MR 头显的标准微显示：Sony 供应相机 EVF（α7R V 944 万点）、Apple Vision Pro 和 Samsung Galaxy XR 的 4K 面板，Samsung Display（原 eMagin）、BOE、SeeYA 也在量产。",
   "In 2026 OLED-on-silicon is the standard microdisplay for high-end EVFs and VR/MR headsets: Sony supplies camera EVFs (9.44M dots on the α7R V) and 4K panels for the Apple Vision Pro and Samsung Galaxy XR, while Samsung Display (ex-eMagin), BOE and SeeYA also mass-produce them."
  ],
  "replaced": [
   "在 EVF 和 VR 中仍是现役主流。需要极高亮度的透视式 AR 眼镜正在转向 microLED-on-silicon（如 JBD），而硅基 OLED 本身在往 RGB 直接蒸镀、多叠层（tandem）方向提高亮度。",
   "Still the mainstream choice for EVFs and VR. See-through AR glasses that need extreme brightness are moving to microLED-on-silicon (e.g. JBD), while OLED-on-silicon itself is gaining brightness through direct RGB patterning and tandem stacks."
  ],
  "refs": [
   {
    "t": "OLED - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/OLED"
   },
   {
    "t": "eMagin Corp Form 10-K FY2001 (SEC)",
    "u": "https://www.sec.gov/Archives/edgar/data/0001046995/000095012702000396/a10k.txt"
   },
   {
    "t": "Vision Systems Design: eMagin ships OLED-on-silicon microdisplay (2001)",
    "u": "https://www.vision-systems.com/cameras-accessories/article/16744320/emagin-ships-oled-on-silicon-microdisplay"
   },
   {
    "t": "eMagin - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/EMagin"
   },
   {
    "t": "OLED-Info: eMagin unveils the Z800 3D Visor",
    "u": "https://oled-info.com/emagin/emagin_unveils_z800_3d_visor"
   },
   {
    "t": "OLED-Info: Sony announces 0.5-inch XGA OLED microdisplay and four cameras",
    "u": "https://oled-info.com/sony-announces-their-05-xga-oled-microdisplay-and-four-cameras-use-it-viewfinder"
   },
   {
    "t": "OLED-Info: Sony announces new 720p OLED microdisplay",
    "u": "https://www.oled-info.com/sony-announces-new-720p-oled-microdisplay"
   },
   {
    "t": "Sony α7R V - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_%CE%B17R_V"
   },
   {
    "t": "Apple Newsroom: Introducing Apple Vision Pro (2023)",
    "u": "https://www.apple.com/newsroom/2023/06/introducing-apple-vision-pro/"
   },
   {
    "t": "Display Daily: JBD's 0.13-inch microLED display in mass production",
    "u": "https://displaydaily.com/jbd-s-0-13-microled-display-in-mass-production/"
   },
   {
    "t": "OLED-Info: Samsung launches the Galaxy XR headset",
    "u": "https://www.oled-info.com/samsung-launches-galaxy-xr-vr-headset-powered-oled-microdisplay"
   }
  ]
 },
 "mtouch": {
  "stages": [
   [
    1965,
    "idea",
    "英国皇家雷达研究所（RRE, Malvern）的 Eric A. Johnson 在 Electronics Letters 发表《Touch display》，用 CRT 屏面上的导线感应手指，是第一块手指操作的电容触摸屏。",
    "Eric A. Johnson of the Royal Radar Establishment (Malvern, UK) published 'Touch display' in Electronics Letters, sensing fingers with wires on the face of a CRT: the first finger-operated capacitive touchscreen.",
    [
     0
    ]
   ],
   [
    1973,
    "proto",
    "CERN 的 Frank Beck 与 Bent Stumpe 在 1970 年代初（约 1973）做出透明电容触摸屏，可隔着薄绝缘膜感应触摸，用于 SPS 加速器控制室；CERN 1976 年起已用多点触控屏。",
    "In the early 1970s (approx. 1973) Frank Beck and Bent Stumpe at CERN built a transparent capacitive touchscreen that sensed touch through a thin insulating film, for the SPS accelerator control room; CERN was using multi-touch screens by 1976.",
    [
     0,
     1
    ]
   ],
   [
    1982,
    "proto",
    "多伦多大学的 Nimish Mehta 做出第一个面向人机输入的多点触控系统：磨砂玻璃加光学摄像，可感应多点压力。",
    "Nimish Mehta at the University of Toronto built the first multi-touch system designed for human input to a computer, using frosted glass and optical sensing of multiple pressure points.",
    [
     2
    ]
   ],
   [
    1985,
    "paper",
    "多伦多大学的 Lee、Buxton、Smith 发表电容式多点触控板，可同时检测多个触点的位置和压力；1984 年 Bell Labs 的 Nakatani 提出“soft machines”触屏界面概念。",
    "Lee, Buxton and Smith at the University of Toronto presented a capacitive multi-touch tablet that sensed several touch positions and pressures at once; in 1984 Nakatani at Bell Labs had framed touchscreen 'soft machines'.",
    [
     2
    ]
   ],
   [
    1999,
    "paper",
    "特拉华大学 Wayne Westerman 完成多点触控手势博士论文，并与导师 John Elias 于 1999 年 1 月 25 日申请专利 US6323846（电容接近感应、手势与打字合一），随后成立 FingerWorks。",
    "Wayne Westerman finished his PhD on multi-touch gestures at the University of Delaware and, with adviser John Elias, filed US6323846 on 25 January 1999 (capacitive proximity sensing unifying typing and gestures), then founded FingerWorks.",
    [
     2,
     3,
     1
    ]
   ],
   [
    2001,
    "rival",
    "其他路线并行：MERL 的 DiamondTouch（2001）能分辨不同用户的手，Sony CSL 的 Rekimoto 做出电容网格 SmartSkin（2002），Microsoft 2001 年开始研发桌面 Surface（PixelSense）。",
    "Parallel approaches: MERL's DiamondTouch (2001) could tell which user's hand was which, Rekimoto at Sony CSL built the capacitive-mesh SmartSkin (2002), and Microsoft began the tabletop Surface (PixelSense) in 2001.",
    [
     2,
     1
    ]
   ],
   [
    2004,
    "corp",
    "Apple 的 Steve Hotelling、Joshua Strickon、Brian Huppi 于 2004 年 5 月 6 日申请 Multipoint Touchscreen 专利（US7663607），描述透明自电容/互电容网格独立检测多点；2005 年 Apple 收购 FingerWorks。",
    "Apple's Steve Hotelling, Joshua Strickon and Brian Huppi filed the Multipoint Touchscreen patent (US7663607) on 6 May 2004, a transparent self- or mutual-capacitance grid detecting multiple touches independently; Apple bought FingerWorks in 2005.",
    [
     4,
     1
    ]
   ],
   [
    2005,
    "rival",
    "NYU 的 Jeff Han 演示基于受抑全内反射（FTIR）的背投多点触控大屏，2006 年创立 Perceptive Pixel，走光学路线。",
    "Jeff Han at NYU demonstrated large rear-projected multi-touch using frustrated total internal reflection (FTIR) and founded Perceptive Pixel in 2006, taking the optical route.",
    [
     2
    ]
   ],
   [
    2007,
    "mass",
    "iPhone 于 2007 年 1 月发布、6 月上市，投射式电容多点触控支持双指缩放，让多点触控成为主流；早一个月上市的 LG Prada 也是电容屏但只支持单点。同年 Microsoft Surface 发布。",
    "The iPhone, announced in January 2007 and on sale in June, used projected-capacitive multi-touch with pinch-to-zoom and made multi-touch mainstream; the LG Prada, on sale a month earlier, was capacitive but single-touch. Microsoft Surface was announced the same year.",
    [
     1,
     0,
     2
    ]
   ],
   [
    2011,
    "ver",
    "相机开始换电容屏：Olympus PEN E-P3（2011 年 8 月）用电容式 OLED 触屏但不支持多点手势；Canon EOS 650D（2012 年 6 月 8 日发布）是 Canon 第一台触屏单反，玻璃电容屏支持双指缩放。",
    "Cameras moved to capacitive: the Olympus PEN E-P3 (August 2011) had a capacitive OLED touchscreen without multi-touch gestures; the Canon EOS 650D (announced 8 June 2012) was Canon's first touchscreen DSLR, with capacitive glass supporting pinch-to-zoom.",
    [
     8,
     7
    ]
   ],
   [
    2012,
    "ver",
    "iPhone 5 采用 in-cell 触控，把触控电极直接做进 LCD 像素层而不是单独贴一层，屏幕更薄；初期良率低导致缺货。",
    "The iPhone 5 adopted in-cell touch, building the touch electrodes into the LCD itself instead of a separate layer for a thinner screen; low early yields caused shortages.",
    [
     5
    ]
   ],
   [
    2016,
    "ver",
    "Samsung Display 的 Y-OCTA 把触控传感器直接做在柔性 OLED 的薄膜封装（TFE）上，首见于 Galaxy Note 7，更薄且成本约降 30%。",
    "Samsung Display's Y-OCTA deposits the touch sensor directly on the flexible OLED's thin-film encapsulation (TFE), first used in the Galaxy Note 7, thinner and about 30% cheaper.",
    [
     6
    ]
   ]
  ],
  "now": [
   "2026 年投射式电容多点触控已是手机、平板、笔记本、车机中控和相机背屏的标配，触控层基本都集成进面板：LCD 用 in-cell，OLED 用 on-cell（Y-OCTA 一类）。",
   "In 2026 projected-capacitive multi-touch is standard on phones, tablets, laptops, car centre screens and camera rear screens, with touch nearly always built into the panel: in-cell for LCD and on-cell (Y-OCTA-style) for OLED."
  ],
  "replaced": [
   "它取代了需要按压的电阻屏，自己没有被取代，而是并进了显示面板。下一步是更深的集成（触控和显示共用驱动 IC）、主动笔、压感和触觉反馈。",
   "It replaced pressure-based resistive screens and has not been replaced itself; instead it has merged into the display panel. Next comes deeper integration (touch and display sharing a driver IC), active styluses, force sensing and haptics."
  ],
  "refs": [
   {
    "t": "Touchscreen - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Touchscreen"
   },
   {
    "t": "Multi-touch - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Multi-touch"
   },
   {
    "t": "Bill Buxton: Multi-Touch Systems that I Have Known and Loved",
    "u": "https://www.billbuxton.com/multitouchOverview.html"
   },
   {
    "t": "US6323846B1 - Method and apparatus for integrating manual input (Westerman, Elias)",
    "u": "https://patents.google.com/patent/US6323846B1/en"
   },
   {
    "t": "US7663607B2 - Multipoint touchscreen (Apple)",
    "u": "https://patents.google.com/patent/US7663607B2/en"
   },
   {
    "t": "MacRumors: Tight iPhone 5 supplies linked to in-cell display technology",
    "u": "https://www.macrumors.com/2012/09/25/tight-iphone-5-supplies-linked-to-in-cell-display-technology/"
   },
   {
    "t": "Display Daily: So what is Y-OCTA?",
    "u": "https://displaydaily.com/so-what-is-y-octa/"
   },
   {
    "t": "Imaging Resource: Touchscreen Canon T4i SLR unveiled",
    "u": "https://www.imaging-resource.com/news/touchscreen-canon-t4i-slr-two-new-lenses-unveiled-previewed/"
   },
   {
    "t": "DPReview: Olympus PEN E-P3 review",
    "u": "https://www.dpreview.com/reviews/olympusep3"
   }
  ]
 },
 "hrr": {
  "stages": [
   [
    2001,
    "paper",
    "NHK 技研的 Taiichiro Kurita 在 SID 2001 和 ITE（2002）论文中分析：LCD 是保持型（hold-type）显示，每帧持续发光，眼睛追踪运动物体时就会看到拖影，60 Hz 的保持时间太长。",
    "Taiichiro Kurita of NHK Science & Technical Research Labs showed in SID 2001 and ITE (2002) papers that LCDs are hold-type displays lit for the whole frame, so eye-tracking moving objects sees blur, and 60 Hz holds each frame too long.",
    [
     0
    ]
   ],
   [
    2002,
    "rival",
    "同一研究提出两条出路：一是脉冲式发光（背光扫描/插黑帧 BFI，缩短每帧亮的时间），二是运动补偿插帧提高帧率。前者后来成为 ULMB、BFI 等与高刷并行的方案。",
    "The same research proposed two fixes: impulse-type emission (scanning backlight / black-frame insertion, shortening how long each frame is lit) and motion-compensated interpolation to raise frame rate. The first later became ULMB and BFI, used alongside high refresh.",
    [
     0
    ]
   ],
   [
    2005,
    "mass",
    "JVC 于 2005 年秋在日本推出全球首款 120 Hz LCD 电视（Clear Motion Drive，插入运动补偿帧），2006 年 8 月在美国推出 37 英寸 LT-37X987；随后 Samsung、Sony（Motionflow）跟进。",
    "JVC launched the world's first 120 Hz LCD TV in Japan in autumn 2005 (Clear Motion Drive, inserting motion-compensated frames), bringing the 37-inch LT-37X987 to the US in August 2006; Samsung and Sony (Motionflow) followed.",
    [
     1
    ]
   ],
   [
    2009,
    "ver",
    "Samsung SyncMaster 2233RZ（CES 2009 发布、4 月上市、399 美元）是早期能接收真 120 fps 输入的桌面 LCD：22 英寸 1680×1050 TN，靠双链 DVI，配合 NVIDIA 3D Vision。",
    "The Samsung SyncMaster 2233RZ (CES 2009, on sale in April at $399) was an early desktop LCD that accepted true 120 fps input: 22-inch 1680×1050 TN over dual-link DVI, paired with NVIDIA 3D Vision.",
    [
     2
    ]
   ],
   [
    2012,
    "ver",
    "ASUS VG248QE 成为首款 144 Hz 电竞显示器；同年 Olympus OM-D E-M5 的 EVF 提供把刷新率翻倍到 120 Hz 的高速模式（代价是分辨率和电量）。",
    "The ASUS VG248QE became the first 144 Hz gaming monitor; the same year the Olympus OM-D E-M5's EVF offered a high-speed mode doubling refresh to 120 Hz (at a cost in resolution and battery).",
    [
     3,
     4
    ]
   ],
   [
    2015,
    "ver",
    "Sharp AQUOS ZETA SH-01H（docomo，2015 年 11 月初发售）用 120 Hz 驱动的“High-Speed IGZO”液晶，是最早的 120 Hz 手机之一。",
    "The Sharp AQUOS ZETA SH-01H (docomo, on sale early November 2015) used a 120 Hz 'High-Speed IGZO' LCD, one of the first 120 Hz phones.",
    [
     5
    ]
   ],
   [
    2017,
    "ver",
    "Apple iPad Pro（2017 年 6 月 5 日）推出 ProMotion，按内容自动调到最高 120 Hz，Pencil 延迟 20 ms；Razer Phone（11 月 1 日）用 5.7 英寸 120 Hz IGZO 屏让高刷进入全球手机市场；ASUS PG258Q 达到 240 Hz。",
    "The Apple iPad Pro (5 June 2017) introduced ProMotion, adapting up to 120 Hz with 20 ms Pencil latency; the Razer Phone (1 November) brought a 5.7-inch 120 Hz IGZO screen to global phones; the ASUS PG258Q reached 240 Hz.",
    [
     6,
     7,
     3
    ]
   ],
   [
    2020,
    "ver",
    "ASUS ROG Swift PG259QN 达到 360 Hz。",
    "The ASUS ROG Swift PG259QN reached 360 Hz.",
    [
     3
    ]
   ],
   [
    2021,
    "ver",
    "iPhone 13 Pro 用 LTPO OLED 实现 10–120 Hz 自适应 ProMotion：需要时高刷、静止时降频省电，自适应刷新成为手机高刷的标准做法。",
    "The iPhone 13 Pro used LTPO OLED for 10–120 Hz adaptive ProMotion, running fast when needed and slowing down to save power; adaptive refresh became the standard way to do high refresh on phones.",
    [
     8
    ]
   ],
   [
    2023,
    "ver",
    "ASUS ROG Swift Pro PG248QP 达到 540 Hz；2025 年 Samsung 推出 500 Hz QD-OLED 面板、ASUS 推出 610 Hz 的 XG248QSG Ace。",
    "The ASUS ROG Swift Pro PG248QP hit 540 Hz; in 2025 Samsung released a 500 Hz QD-OLED panel and ASUS the 610 Hz XG248QSG Ace.",
    [
     3,
     9
    ]
   ],
   [
    2025,
    "ver",
    "Koorui G7 在 CES 2025 展示 750 Hz、24.5 英寸 1080p TN 显示器，0.5 ms 响应。",
    "Koorui showed the G7 at CES 2025: a 750 Hz, 24.5-inch 1080p TN monitor with 0.5 ms response.",
    [
     10
    ]
   ],
   [
    2026,
    "ver",
    "千赫兹时代到来：Acer Predator XB253Q U1 为 1,000 Hz、24.5 英寸 1080p TN，售价 1,099 美元，计划 2027 年第一季度上市；LG、AntGamer 等也在推 1,000 Hz 产品。",
    "The kilohertz era: the Acer Predator XB253Q U1 is a 1,000 Hz, 24.5-inch 1080p TN monitor at $1,099, due in Q1 2027; LG, AntGamer and others are also pushing 1,000 Hz models.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年手机旗舰普遍是 1–120/144 Hz LTPO 自适应高刷，电竞显示器 OLED 达 500–720 Hz、TN 开始冲 1,000 Hz，相机 EVF 普遍提供 120 fps 模式。",
   "In 2026 flagship phones generally use 1–120/144 Hz LTPO adaptive refresh, OLED gaming monitors reach 500–720 Hz with TN starting to hit 1,000 Hz, and camera EVFs commonly offer a 120 fps mode."
  ],
  "replaced": [
   "没有被取代，而是从固定高刷转向可变刷新（LTPO、VRR/G-SYNC/FreeSync）。降低运动模糊的另一条路是缩短发光时间（BFI、背光闪烁），常与高刷一起用；下一步是千赫兹面板。",
   "Not replaced; it has moved from fixed high refresh to variable refresh (LTPO, VRR/G-SYNC/FreeSync). The other way to cut motion blur, shorter emission (BFI, strobed backlight), is often combined with it; kilohertz panels are next."
  ],
  "refs": [
   {
    "t": "Kurita: Temporal responses of displays and improvement of moving picture quality (ITE Technical Report, 2002)",
    "u": "https://www.jstage.jst.go.jp/article/itetr/26.5/0/26.5_13/_article/-char/en"
   },
   {
    "t": "SVG Online: JVC brings 120Hz LCD panels to U.S. (2006)",
    "u": "https://www.sportsvideo.org/2006/06/29/jvc-brings-120hz-lcd-panels-to-u-s/"
   },
   {
    "t": "TFT Central: Samsung SM2233RZ review",
    "u": "https://tftcentral.co.uk/reviews/samsung_2233rz.htm"
   },
   {
    "t": "ASUS ROG: 20 years in the Republic of Gamers, part two (displays)",
    "u": "https://rog.asus.com/articles/gaming/20-years-in-the-republic-of-gamers-part-two-rog-claims-supremacy-in-the-display-space-and-never-lets-go/"
   },
   {
    "t": "DPReview: Olympus OM-D E-M5 review - viewfinder and screen",
    "u": "https://www.dpreview.com/reviews/olympusem5/5"
   },
   {
    "t": "GIGAZINE: AQUOS ZETA SH-01H with 120Hz high-speed IGZO (2015)",
    "u": "http://gigazine.net/gsc_news/en/20150930-aquos-zeta-dcm2015w"
   },
   {
    "t": "Apple Newsroom: iPad Pro 10.5 and 12.9-inch with ProMotion (2017)",
    "u": "https://www.apple.com/newsroom/2017/06/ipad-pro-10-5-and-12-9-inch-models-introduces-worlds-most-advanced-display-breakthrough-performance/"
   },
   {
    "t": "The Next Web: Razer Phone hands-on (2017)",
    "u": "https://thenextweb.com/news/hands-on-the-razer-phone-comes-with-a-120hz-display-and-incredibly-good-speakers"
   },
   {
    "t": "Apple Newsroom: iPhone 13 Pro and iPhone 13 Pro Max (2021)",
    "u": "https://www.apple.com/newsroom/2021/09/apple-unveils-iphone-13-pro-and-iphone-13-pro-max-more-pro-than-ever-before/"
   },
   {
    "t": "TFT Central: Gen 4 Samsung QD-OLED 2025 panels and improvements",
    "u": "https://tftcentral.co.uk/articles/gen-4-samsung-qd-oled-2025-panels-and-improvements"
   },
   {
    "t": "TweakTown: World's first 750Hz gaming monitor unveiled at CES 2025",
    "u": "https://www.tweaktown.com/news/102419/worlds-first-750hz-refresh-rate-gaming-monitor-unveiled-at-ces-2025/index.html"
   },
   {
    "t": "PCWorld: Acer made a 1000Hz monitor",
    "u": "https://www.pcworld.com/article/3224880/acer-made-a-1000hz-monitor-and-yes-it-costs-over-1000.html"
   }
  ]
 },
 "retina": {
  "stages": [
   [
    1862,
    "idea",
    "荷兰眼科医生 Herman Snellen 发布视力表，把正常视力定义为能分辨 1 角分的细节；“视网膜级”屏幕的判据就来自这个 1 角分极限。",
    "Dutch ophthalmologist Herman Snellen published his eye chart, defining normal vision as resolving 1 arcminute of detail; the 'retina' screen criterion derives from this 1-arcminute limit.",
    [
     0
    ]
   ],
   [
    2001,
    "proto",
    "IBM T220/T221 显示器（2001–2005 年销售）22.2 英寸 3840×2400、204 ppi，面板由 IBM 与奇美合资的 IDTech 生产，2002 年降价到 8,399 美元，是早期高 PPI 桌面屏。",
    "The IBM T220/T221 monitors (sold 2001–2005) packed 3840×2400 into 22.2 inches, 204 ppi, with panels from IDTech, an IBM–Chi Mei joint venture; the price fell to $8,399 in 2002. An early high-PPI desktop screen.",
    [
     1
    ]
   ],
   [
    2009,
    "rival",
    "日本手机先一步做到同等密度：Sharp 制造的 SoftBank 934SH（2009 年 6 月 5 日发售）3.0 英寸 854×480，约 326 ppi，与后来的 iPhone 4 相当，但没有“视网膜”的营销概念和软件缩放体系。",
    "Japanese phones got there first: the Sharp-made SoftBank 934SH (on sale 5 June 2009) had a 3.0-inch 854×480 screen, about 326 ppi, matching the later iPhone 4, but without the 'retina' marketing idea or a software scaling system.",
    [
     2
    ]
   ],
   [
    2010,
    "mass",
    "iPhone 4（2010 年 6 月 7 日发布、24 日上市）3.5 英寸 960×640、326 ppi，Apple 命名为 Retina display，称正常距离下肉眼分辨不出单个像素；乔布斯给的标准是 10–12 英寸距离约 300 ppi。",
    "The iPhone 4 (announced 7 June 2010, on sale 24 June) had a 3.5-inch 960×640, 326 ppi screen that Apple named the Retina display, claiming the eye cannot pick out pixels at normal distance; Jobs gave the bar as about 300 ppi at 10–12 inches.",
    [
     3,
     4
    ]
   ],
   [
    2010,
    "paper",
    "DisplayMate 的 Raymond Soneira 指出判据取决于观看距离，并认为要约 477 ppi 才真正不可分辨；天文学家 Phil Plait 则认为按常规视力 Apple 的说法成立。",
    "DisplayMate's Raymond Soneira argued the criterion depends on viewing distance and that about 477 ppi is needed for true imperceptibility; astronomer Phil Plait countered that Apple's claim holds for typical vision.",
    [
     4,
     5
    ]
   ],
   [
    2012,
    "ver",
    "Retina 扩展到大屏：第三代 iPad（2012 年 3 月 16 日上市）2048×1536、310 万像素，是 iPad 2 的 4 倍；同年 MacBook Pro 用 220 ppi Retina。Apple 采用每个逻辑像素对应 2×2 物理像素的 HiDPI 方案。",
    "Retina moved to big screens: the third-generation iPad (on sale 16 March 2012) had 2048×1536, 3.1 million pixels, four times the iPad 2; that year's MacBook Pro used a 220 ppi Retina panel. Apple maps each logical pixel to 2×2 physical pixels (HiDPI).",
    [
     6,
     4,
     5
    ]
   ],
   [
    2015,
    "ver",
    "PPI 竞赛顶峰：Sony Xperia Z5 Premium（2015 年 9 月 2 日发布）5.5 英寸 3840×2160 4K LCD，806 ppi，是第一部 4K 手机。",
    "The PPI race peaked: the Sony Xperia Z5 Premium (announced 2 September 2015) had a 5.5-inch 3840×2160 4K LCD at 806 ppi, the first 4K phone.",
    [
     7
    ]
   ],
   [
    2017,
    "ver",
    "iPhone X（2017 年 9 月 12 日发布）首次在 iPhone 上用 OLED，称 Super Retina，5.8 英寸、约 458 ppi，之后 Super Retina XDR 加入 HDR 高亮度。",
    "The iPhone X (announced 12 September 2017) was the first iPhone with OLED, branded Super Retina, 5.8 inches at about 458 ppi; Super Retina XDR later added HDR brightness.",
    [
     8,
     4
    ]
   ],
   [
    2017,
    "rival",
    "Samsung 等 OLED 手机用 PenTile 等子像素排列，每个像素不是完整 RGB 三子像素，标称 PPI 与实际清晰度不完全等价；业界不再单纯追求 PPI，而是在约 400–500 ppi 停下来。",
    "Samsung and other OLED phones use PenTile-style subpixel layouts where each pixel lacks a full RGB triplet, so nominal PPI is not the same as true sharpness; the industry stopped chasing PPI and settled around 400–500 ppi.",
    [
     10
    ]
   ],
   [
    2024,
    "ver",
    "近眼显示把需求推到数千 ppi：Apple Vision Pro 两块 micro-OLED 共 2300 万像素，每只眼多于一台 4K 电视。",
    "Near-eye displays push needs into thousands of ppi: the Apple Vision Pro's two micro-OLED panels hold 23 million pixels, more per eye than a 4K TV.",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年“视网膜级”已是手机和笔记本的默认配置：手机多在 400–500 ppi（如 iPhone 17 Pro 约 460 ppi），笔记本和桌面屏 200 ppi 左右（5K 27 英寸约 218 ppi），Apple 仍用 Retina/Liquid Retina/Super Retina XDR 命名。",
   "In 2026 'retina-class' density is the default on phones and laptops: phones mostly sit at 400–500 ppi (e.g. iPhone 17 Pro about 460 ppi), laptops and desktop monitors around 200 ppi (27-inch 5K about 218 ppi), and Apple still uses the Retina / Liquid Retina / Super Retina XDR names."
  ],
  "replaced": [
   "没有被取代，已被吸收为行业基线；手机 PPI 竞赛在 4K 手机后基本停止，竞争转向亮度、HDR 和刷新率。仍需提高密度的是 VR/AR 微显示，目标是数千 ppi 的“人眼分辨率”头显。",
   "Not replaced; absorbed as the industry baseline. The phone PPI race largely stopped after 4K phones and competition moved to brightness, HDR and refresh rate. Density still matters for VR/AR microdisplays, aiming at 'human-eye resolution' headsets in the thousands of ppi."
  ],
  "refs": [
   {
    "t": "Snellen chart - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Snellen_chart"
   },
   {
    "t": "IBM T220/T221 LCD monitors - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/IBM_T220/T221_LCD_monitors"
   },
   {
    "t": "SoftBank 934SH - Wikipedia (Japanese)",
    "u": "https://ja.wikipedia.org/wiki/SoftBank_934SH"
   },
   {
    "t": "Apple Newsroom: Apple Presents iPhone 4 (2010)",
    "u": "https://www.apple.com/newsroom/2010/06/07Apple-Presents-iPhone-4/"
   },
   {
    "t": "Retina display - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Retina_display"
   },
   {
    "t": "DisplayMate Display News",
    "u": "https://www.displaymate.com/news.html"
   },
   {
    "t": "Apple Newsroom: Apple Launches New iPad (2012)",
    "u": "https://www.apple.com/newsroom/2012/03/07Apple-Launches-New-iPad/"
   },
   {
    "t": "Sony Xperia Z5 Premium - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_Xperia_Z5_Premium"
   },
   {
    "t": "Apple Newsroom: The future is here: iPhone X (2017)",
    "u": "https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/"
   },
   {
    "t": "Apple Newsroom: Introducing Apple Vision Pro (2023)",
    "u": "https://www.apple.com/newsroom/2023/06/introducing-apple-vision-pro/"
   },
   {
    "t": "Pixel density - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pixel_density"
   }
  ]
 },
 "qd": {
  "stages": [
   [
    1981,
    "idea",
    "Alexei Ekimov 在玻璃中发现尺寸决定颜色的半导体纳米晶（量子点），1983 年 Louis Brus 在溶液中独立发现；1988 年 Reed 命名“quantum dot”。三人中 Ekimov、Brus 与 Bawendi 获 2023 年诺贝尔化学奖。",
    "Alexei Ekimov found size-dependent colour in semiconductor nanocrystals (quantum dots) in glass; Louis Brus found them independently in solution in 1983, and Reed coined 'quantum dot' in 1988. Ekimov, Brus and Bawendi shared the 2023 Nobel Prize in Chemistry.",
    [
     0
    ]
   ],
   [
    1993,
    "paper",
    "MIT 的 Moungi Bawendi 与 Murray 发展出高质量胶体量子点合成法，使尺寸、发光波长可控，成为显示应用的材料基础。",
    "Moungi Bawendi and Murray at MIT developed a high-quality colloidal synthesis giving control over dot size and emission wavelength, the materials basis for display use.",
    [
     0,
     2
    ]
   ],
   [
    1994,
    "paper",
    "Colvin、Schlamp、Alivisatos 在 Nature 370 卷发表用 CdSe 纳米晶加半导体聚合物做成的发光二极管，是电致发光量子点（QD-LED）的开山之作。",
    "Colvin, Schlamp and Alivisatos published LEDs made from CdSe nanocrystals and a semiconducting polymer in Nature vol. 370, the founding paper of electroluminescent QD-LEDs.",
    [
     1,
     3
    ]
   ],
   [
    2004,
    "corp",
    "QD Vision 于 2004 年由 Seth Coe-Sullivan、Vladimir Bulović 等 MIT 研究者创立；Nanosys 于 2001 年由 Larry Bock、Charles Lieber、Paul Alivisatos 创立，两家成为量子点显示材料的先行者。",
    "QD Vision was founded in 2004 by MIT researchers including Seth Coe-Sullivan and Vladimir Bulović; Nanosys was founded in 2001 by Larry Bock, Charles Lieber and Paul Alivisatos. The two pioneered quantum-dot display materials.",
    [
     2,
     4
    ]
   ],
   [
    2013,
    "mass",
    "Sony 2013 年 6 月起在数百万台 BRAVIA Triluminos 电视中使用 QD Vision 的 Color IQ（装红绿量子点的细玻璃管，放在蓝光 LED 旁），是首款商用量子点显示，色域提升约 50%；同年 Amazon Kindle Fire HDX 7 用 3M 与 Nanosys 的 QDEF 量子点膜。",
    "From June 2013 Sony used QD Vision's Color IQ (a thin glass tube of red and green dots beside blue LEDs) in millions of BRAVIA Triluminos TVs, the first commercial quantum-dot display, with about 50% more gamut; the same year the Amazon Kindle Fire HDX 7 used 3M and Nanosys's QDEF quantum-dot film.",
    [
     2,
     4,
     1
    ]
   ],
   [
    2015,
    "ver",
    "CES 2015 上 Samsung（SUHD）、TCL、Sony 都展示量子点增强 LCD；量子点转换效率超过 95%，含镉材料受欧盟限制，Samsung 主打无镉（InP）量子点。",
    "At CES 2015 Samsung (SUHD), TCL and Sony all showed QD-enhanced LCDs; dots convert light with over 95% efficiency, and because cadmium is restricted in the EU, Samsung pushed cadmium-free (InP) dots.",
    [
     1,
     5
    ]
   ],
   [
    2016,
    "corp",
    "Samsung 于 2016 年 11 月以约 7,000 万美元收购 QD Vision 及其专利，强化无镉量子点路线，对抗 LG 的 OLED 电视。",
    "In November 2016 Samsung bought QD Vision and its patents for about $70 million, reinforcing its cadmium-free QD strategy against LG's OLED TVs.",
    [
     6
    ]
   ],
   [
    2017,
    "ver",
    "Samsung 在 CES 2017（1 月 4 日）把电视更名为 QLED（Q9/Q8/Q7），改用新的金属量子点材料，峰值亮度 1,500–2,000 nits；并与 Hisense、TCL 组成 QLED 联盟。但它仍是量子点膜背光的 LCD，不是自发光。",
    "At CES 2017 (4 January) Samsung rebranded its TVs as QLED (Q9/Q8/Q7) with a new metal quantum-dot material and 1,500–2,000 nits peak; it formed a QLED Alliance with Hisense and TCL. These were still QD-film-backlit LCDs, not self-emissive.",
    [
     7,
     1
    ]
   ],
   [
    2022,
    "ver",
    "QD-OLED：Samsung Display 用蓝色 OLED 发光、喷墨打印的红绿量子点做色转换，2021 年底（约）开始生产；Alienware AW3423DW（2022 年 3 月出货，34 英寸 3440×1440、175 Hz、1,299 美元）是第一款 QD-OLED 产品，随后有 Sony A95K 电视。",
    "QD-OLED: Samsung Display uses blue OLED emitters with inkjet-printed red and green quantum dots for colour conversion, starting production in late 2021 (approx.); the Alienware AW3423DW (shipping March 2022, 34-inch 3440×1440, 175 Hz, $1,299) was the first QD-OLED product, followed by the Sony A95K TV.",
    [
     8,
     1
    ]
   ],
   [
    2024,
    "ver",
    "量子点进入座舱：Zeekr 7X（2024 年 9 月 20 日开始交付）中控用龙利科技（Longli）16 英寸 3.5K 量子点膜 Mini LED 屏，号称首款车规级量子点 Mini LED。",
    "Quantum dots entered the cabin: the Zeekr 7X (deliveries from 20 September 2024) uses a 16-inch 3.5K quantum-dot-film Mini LED centre screen from Longli, billed as the first automotive-grade QD Mini LED display.",
    [
     9
    ]
   ],
   [
    2024,
    "rival",
    "下一代电致发光量子点（EL-QD/QDEL，不需背光或 OLED）在 Display Week 2024 集中亮相：TCL CSOT 14 英寸喷墨打印 QD-EL（350 nits），Samsung 18.2 英寸无镉喷墨样机（>90% BT.2020），Sharp 用光刻工艺做“NanoLED”，仍未量产。",
    "The next generation, electroluminescent QD (EL-QD/QDEL, needing no backlight or OLED), appeared together at Display Week 2024: TCL CSOT's 14-inch inkjet-printed QD-EL (350 nits), Samsung's 18.2-inch cadmium-free inkjet prototype (>90% BT.2020) and Sharp's photolithographic 'NanoLED'; none is in mass production.",
    [
     10
    ]
   ],
   [
    2025,
    "ver",
    "第四代 QD-OLED（Penta Tandem，五叠层 EL 3.0 材料）电视面板峰值达 4,000 nits、亮度提升 30%，并推出 27 英寸 4K 240 Hz（166 ppi）和 500 Hz 显示器面板。",
    "Fourth-generation QD-OLED (Penta Tandem, five-stack EL 3.0 material) reached 4,000 nits peak on TV panels, 30% brighter, with new 27-inch 4K 240 Hz (166 ppi) and 500 Hz monitor panels.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年所有量产量子点显示都是光致发光：LCD 用量子点膜加 Mini LED 背光（Samsung Neo QLED、TCL、Hisense 电视，Zeekr 等车载屏），OLED 用 QD-OLED 色转换（Samsung S95 系列、Sony 电视、众多 240–500 Hz 电竞显示器）。",
   "In 2026 every mass-produced quantum-dot display is photoluminescent: LCDs use QD film with Mini LED backlights (Samsung Neo QLED, TCL and Hisense TVs, car screens such as Zeekr), and OLEDs use QD-OLED colour conversion (Samsung S95 series, Sony TVs and many 240–500 Hz gaming monitors)."
  ],
  "replaced": [
   "没有被取代，反而从 LCD 附件发展为 QD-OLED 的核心。下一步是电致发光量子点（EL-QD/QDEL/NanoLED），让量子点自己发光、省掉背光和 OLED 层，以及 microLED 上的量子点色转换。",
   "Not replaced; it grew from an LCD add-on into the core of QD-OLED. Next is electroluminescent QD (EL-QD/QDEL/NanoLED), where the dots emit light themselves with no backlight or OLED layer, plus QD colour conversion on microLED."
  ],
  "refs": [
   {
    "t": "Quantum dot - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Quantum_dot"
   },
   {
    "t": "Quantum dot display - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Quantum_dot_display"
   },
   {
    "t": "MIT News: Startup quantum dot TV displays (QD Vision, 2014)",
    "u": "https://news.mit.edu/2014/startup-quantum-dot-tv-displays-1119"
   },
   {
    "t": "Crossref: Colvin, Schlamp, Alivisatos, Nature 370, 354 (1994)",
    "u": "https://api.crossref.org/works/10.1038/370354a0"
   },
   {
    "t": "Nanosys - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nanosys"
   },
   {
    "t": "IEEE Spectrum: Will quantum dots dominate displays?",
    "u": "https://spectrum.ieee.org/will-quantum-dots-dominate-displays"
   },
   {
    "t": "SamMobile: Samsung confirms acquisition of QD Vision (2016)",
    "u": "https://www.sammobile.com/2016/11/23/samsung-confirms-acquisition-of-qd-vision-a-us-based-quantum-dot-display-company/"
   },
   {
    "t": "What Hi-Fi: CES 2017 Samsung takes aim at OLED with three QLED TV ranges",
    "u": "https://www.whathifi.com/news/ces-2017-samsung-takes-aim-oled-three-qled-tv-ranges"
   },
   {
    "t": "OLED-Info: Dell's Alienware 34-inch QD-OLED monitor now shipping",
    "u": "https://www.oled-info.com/dells-alienware-34-qd-oled-monitor-now-shipping"
   },
   {
    "t": "Mini/MicroLED: Zeekr 7X launch with Longli Mini LED display",
    "u": "https://www.minimicroled.com/zeekr-7x-launch-mini-led-longli/"
   },
   {
    "t": "Display Daily: EL-QLED eye candy at Display Week 2024",
    "u": "https://displaydaily.com/el-qled-eye-candy-at-display-week-2024/"
   },
   {
    "t": "TFT Central: Gen 4 Samsung QD-OLED 2025 panels and improvements",
    "u": "https://tftcentral.co.uk/articles/gen-4-samsung-qd-oled-2025-panels-and-improvements"
   }
  ]
 },
 "flex": {
  "stages": [
   [
    1992,
    "paper",
    "Gustafsson、Heeger 等人在 Nature 发表《Flexible light-emitting diodes made from soluble conducting polymers》，首次在塑料基板上做出可弯曲的聚合物发光二极管。",
    "Gustafsson, Heeger et al. published \"Flexible light-emitting diodes made from soluble conducting polymers\" in Nature, the first bendable polymer LED on a plastic substrate.",
    [
     0
    ]
   ],
   [
    2007,
    "proto",
    "Sony 在 SID 2007 展示 2.5 英寸全彩柔性 OLED，用有机 TFT（OTFT）背板做在塑料上，120×RGB×160 像素、厚 0.3 mm、仅 1.5 g。",
    "At SID 2007 Sony showed a 2.5-inch full-colour flexible OLED driven by an organic TFT (OTFT) backplane on plastic: 120×RGB×160 pixels, 0.3 mm thick, 1.5 g.",
    [
     1
    ]
   ],
   [
    2010,
    "proto",
    "Sony 展示 4.1 英寸、80 µm 厚的可卷曲 OTFT-OLED，能卷在半径 4 mm 的圆柱上边卷边放视频，卷曲 1000 次无明显退化。",
    "Sony demonstrated a 4.1-inch, 80 µm rollable OTFT-OLED that plays video while wrapped around a 4 mm-radius cylinder, with no clear degradation after 1,000 roll cycles.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "Samsung Galaxy Round（2013 年 10 月 9 日，韩国 SK Telecom 独占）首发 5.7 英寸 Full HD Super Flexible AMOLED，是首款量产柔性 OLED 曲面屏手机。",
    "Samsung's Galaxy Round (9 Oct 2013, SK Telecom Korea only) debuted a 5.7-inch Full HD Super Flexible AMOLED, the first mass-produced flexible-OLED curved-screen phone.",
    [
     3
    ]
   ],
   [
    2018,
    "ver",
    "Royole 柔宇 FlexPai 柔派 2018 年 10 月 31 日开订、12 月发货，7.8 英寸 1920×1440 外折屏，是首款可买到的折叠屏手机，售价 ¥8,999 起。",
    "Royole's FlexPai opened orders on 31 Oct 2018 and shipped in December: a 7.8-inch 1920×1440 out-folding screen, the first foldable phone on sale, from ¥8,999.",
    [
     4,
     5
    ]
   ],
   [
    2019,
    "ver",
    "Samsung Galaxy Fold 2019 年 2 月发布，7.3 英寸内折 Infinity Flex 屏 + 4.6 英寸外屏；因评测机屏幕损坏推迟，9 月 6 日才在韩国上市。",
    "Samsung's Galaxy Fold was unveiled in Feb 2019 with a 7.3-inch in-folding Infinity Flex screen plus a 4.6-inch cover screen; review-unit screen failures delayed sales to 6 Sep 2019 in Korea.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Galaxy Z Flip 首次用超薄玻璃 UTG（Samsung Display 与 Dowoo Insys 合作）替代 Galaxy Fold 的聚酰亚胺 PI 盖板，此后折叠屏盖板普遍转向 UTG。",
    "The Galaxy Z Flip was the first to replace the Galaxy Fold's polyimide (PI) cover with Ultra Thin Glass (UTG, made by Samsung Display with Dowoo Insys); foldables have largely moved to UTG since.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "2021 款 Cadillac Escalade 用 LG Display 柔性 P-OLED 拼成 38 英寸曲面座舱屏（三块面板，最大 16.9 英寸），是首个量产车上的曲面 OLED。",
    "The 2021 Cadillac Escalade uses LG Display flexible P-OLED for a 38-inch curved cockpit (three panels, largest 16.9 inches), the first curved OLED in a production car.",
    [
     8
    ]
   ],
   [
    2024,
    "ver",
    "Huawei Mate XT 2024 年 9 月发布，10.2 英寸 3184×2232 Z 字形三折屏，是首款量产三折手机。",
    "Huawei's Mate XT (Sep 2024) brought a 10.2-inch 3184×2232 Z-shaped tri-fold screen, the first mass-produced tri-fold phone.",
    [
     9
    ]
   ],
   [
    2025,
    "ver",
    "Samsung Galaxy Z TriFold 2025 年 12 月 1 日发布，10 英寸 U 形内折三折屏，主屏在折叠时被保护在内侧。",
    "Samsung's Galaxy Z TriFold (1 Dec 2025) uses a 10-inch U-shaped inward tri-fold so the main screen stays protected when closed.",
    [
     9
    ]
   ],
   [
    2026,
    "ver",
    "Apple iPhone Duo 2026 年 9 月发布，7.6 英寸内屏 + 5.4 英寸外屏，10 层叠构、定制高刚性聚合物盖板与上下玻璃，宣称折痕\"感知不到\"。",
    "Apple's iPhone Duo (Sep 2026) pairs a 7.6-inch inner and 5.4-inch outer screen; a 10-layer stack with a stiff custom polymer cover and glass above and below is claimed to make the crease imperceptible.",
    [
     10
    ]
   ]
  ],
  "now": [
   "柔性 OLED 已是旗舰手机主流：曲面、直屏手机多用柔性基板，折叠屏有 Galaxy Z Fold/Flip、iPhone Duo、Huawei Mate XT 三折等，车机也用柔性 P-OLED 做曲面大屏。",
   "Flexible OLED is now mainstream in flagship phones: most curved and even flat phones use flexible substrates, foldables include Galaxy Z Fold/Flip, iPhone Duo and Huawei's Mate XT tri-fold, and cars use flexible P-OLED for curved cockpits."
  ],
  "replaced": [
   "尚无替代者，仍在演进：从 PI 盖板到 UTG，从单折到三折，下一步是卷轴屏和可拉伸屏，以及更少折痕的叠构。",
   "Not replaced and still evolving: from PI covers to UTG, from single folds to tri-folds; next come rollable and stretchable screens and stacks with less visible creases."
  ],
  "refs": [
   {
    "t": "Flexible organic light-emitting diode - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Flexible_organic_light-emitting_diode"
   },
   {
    "t": "Sony Shows Flexible OLED at SID 2007 - OLED-Info",
    "u": "https://oled-info.com/sony/sony_shows_flexible_oled_at_sid_2007"
   },
   {
    "t": "Sony develops roll-up OLED video screen - Phys.org (2010)",
    "u": "https://phys.org/news/2010-05-sony-roll-up-oled-video-screen.html"
   },
   {
    "t": "Samsung GALAXY ROUND Pioneers the Curved Display Smartphone Experience - Samsung Mobile Press",
    "u": "https://www.samsungmobilepress.com/articles/samsung-galaxy-round-pioneers-the-curved-display-smartphone-experience"
   },
   {
    "t": "Meet FlexPai: The world's first foldable smartphone - Digit",
    "u": "https://www.digit.in/news/mobile-phones/meet-flexpai-the-worlds-first-foldable-smartphone-44442.html"
   },
   {
    "t": "Royole FlexPai - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Royole_FlexPai"
   },
   {
    "t": "Samsung Galaxy Fold - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Samsung_Galaxy_Fold"
   },
   {
    "t": "Samsung Ultra Thin Glass from Z Flip offered to other devices - 9to5Google",
    "u": "https://9to5google.com/2020/02/19/samsung-ultra-thin-glass-z-flip-other-devices/"
   },
   {
    "t": "World's First In-Vehicle P-OLED Cockpit From LG Debuts in New 2021 Cadillac Escalade - LG",
    "u": "https://www.lg.com/global/newsroom/news/vehicle-solutions/worlds-first-in-vehicle-p-oled-cockpit-from-lg-debuts-in-new-2021-cadillac-escalade/"
   },
   {
    "t": "Samsung Galaxy Z TriFold vs. Huawei Mate XTs - Android Central",
    "u": "https://www.androidcentral.com/phones/samsung-galaxy/samsung-galaxy-z-trifold-vs-huawei-mate-xts"
   },
   {
    "t": "Apple unveils iPhone Duo - Apple Newsroom",
    "u": "https://www.apple.com/ph/newsroom/2026/09/apple-unveils-iphone-duo/"
   }
  ]
 },
 "hdr": {
  "stages": [
   [
    2004,
    "paper",
    "Seetzen、Heidrich、Whitehead、Ward 等在 SIGGRAPH 2004（ACM TOG）发表《High Dynamic Range Display Systems》：低分辨率可调 LED 背光 + LCD 双重调制，动态范围超 50,000:1、峰值 8,500 cd/m²。",
    "Seetzen, Heidrich, Whitehead, Ward et al. presented \"High Dynamic Range Display Systems\" at SIGGRAPH 2004 (ACM TOG): a low-res modulated LED backlight behind an LCD, over 50,000:1 dynamic range and 8,500 cd/m² peak.",
    [
     0
    ]
   ],
   [
    2004,
    "corp",
    "UBC 实验室衍生的 Sunnybrook Technologies 改名 BrightSide Technologies，推出 DR37-P 等专业 HDR 显示器（约 2005 年），对比度 200,000:1，面向医疗影像和后期。",
    "Sunnybrook Technologies, a UBC lab spin-off, became BrightSide Technologies and sold professional HDR displays such as the DR37-P (approx. 2005) with 200,000:1 contrast for medical imaging and post-production.",
    [
     1
    ]
   ],
   [
    2007,
    "corp",
    "Dolby 2007 年 4 月以 2,800 万美元收购 BrightSide，把这套技术改名 Dolby Vision。",
    "Dolby bought BrightSide for US$28 million in April 2007 and renamed the technology Dolby Vision.",
    [
     1
    ]
   ],
   [
    2014,
    "ver",
    "Dolby 2014 年 1 月发布面向家庭的 Dolby Vision；同年 8 月 SMPTE 把 PQ 感知量化曲线标准化为 ST 2084，最高可编码 10,000 nit。",
    "Dolby launched consumer Dolby Vision in January 2014; in August SMPTE standardised the PQ transfer function as ST 2084, encoding up to 10,000 nits.",
    [
     2
    ]
   ],
   [
    2015,
    "mass",
    "Vizio Reference Series 2015 年 10 月上市，65/120 英寸，384 区全阵列背光、800 nit，官方称是首款完整支持 Dolby Vision 的电视；同年 8 月 CTA 定义开放的 HDR10。",
    "Vizio's Reference Series went on sale in October 2015 (65 and 120 inches, 384-zone full-array backlight, 800 nits), billed as the first complete Dolby Vision TV; in August the CTA defined the open HDR10 format.",
    [
     3,
     2
    ]
   ],
   [
    2015,
    "rival",
    "BBC 与 NHK 联合提出 HLG（Hybrid Log-Gamma），无需元数据、兼容 SDR 电视，适合直播；2016 年 10 月 SKY Perfect JSAT 用 HLG 开播全球首个 4K HDR 广播。",
    "BBC and NHK jointly proposed HLG (Hybrid Log-Gamma), a metadata-free, SDR-compatible curve for live broadcast; SKY Perfect JSAT began the world's first 4K HDR broadcasts in HLG in October 2016.",
    [
     2
    ]
   ],
   [
    2016,
    "ver",
    "Samsung Galaxy Note7（2016 年 8 月）成为首款支持 HDR10 的手机，可播 Amazon Prime Video HDR 内容；同年 3 月 Atomos Shogun Flame / Ninja Flame 推出 1500 nit、10-bit AtomHDR 机顶监视记录器。",
    "Samsung's Galaxy Note7 (Aug 2016) became the first HDR10 phone, streaming Amazon Prime Video HDR; in March Atomos launched the 1,500-nit, 10-bit AtomHDR Shogun Flame and Ninja Flame on-camera monitor-recorders.",
    [
     4,
     5
    ]
   ],
   [
    2016,
    "ver",
    "ITU 2016 年 7 月发布 Rec. 2100（BT.2100），把 PQ 与 HLG 两条曲线、BT.2020 色域和 10/12-bit 统一进一个国际标准。",
    "In July 2016 the ITU published Rec. 2100 (BT.2100), putting PQ, HLG, BT.2020 primaries and 10/12-bit coding into one international standard.",
    [
     2
    ]
   ],
   [
    2017,
    "ver",
    "LG G6（MWC 2017，2 月 26 日）是首款支持 Dolby Vision 的手机，5.7 英寸 2880×1440 18:9 屏同时支持 HDR10。",
    "LG's G6 (MWC, 26 Feb 2017) was the first Dolby Vision phone; its 5.7-inch 2880×1440 18:9 screen also handled HDR10.",
    [
     6
    ]
   ],
   [
    2017,
    "rival",
    "Samsung 与 Amazon 2017 年 4 月发布 HDR10+，在 HDR10 上加逐场景动态元数据（SMPTE ST 2094-40），作为免授权费的 Dolby Vision 替代。",
    "Samsung and Amazon announced HDR10+ in April 2017, adding scene-by-scene dynamic metadata (SMPTE ST 2094-40) to HDR10 as a royalty-free rival to Dolby Vision.",
    [
     7
    ]
   ],
   [
    2018,
    "ver",
    "Atomos Ninja V（NAB 2018 发布，Q3 上市，695 美元）把 1000 nit 10-bit HDR 监看做进 5 英寸小机身，可实时显示 Log/PQ/HLG 信号 10+ 档动态范围。",
    "Atomos's Ninja V (NAB 2018, shipped Q3, $695) put 1,000-nit 10-bit HDR monitoring into a 5-inch body, showing 10+ stops from Log/PQ/HLG signals in real time.",
    [
     8
    ]
   ],
   [
    2023,
    "ver",
    "Android 14 支持 Ultra HDR（JPEG_R）：SDR JPEG 里附一张增益图 gain map，HDR 屏按余量提亮高光，旧设备照常显示 SDR；后续与 ISO 21496-1 增益图元数据兼容。",
    "Android 14 added Ultra HDR (JPEG_R): an SDR JPEG carries a gain map that HDR screens use to lift highlights, while older viewers show the SDR image; later versions align with ISO 21496-1 gain-map metadata.",
    [
     9,
     10
    ]
   ]
  ],
  "now": [
   "HDR 已是电视、手机、显示器和相机监看的标配：PQ/HLG + HDR10/Dolby Vision/HDR10+ 并存，手机如 iPhone 17 系列与 Galaxy 旗舰拍摄和显示 HDR 照片（增益图）与 Dolby Vision 视频，Atomos、Sony 等监视器提供 1000 nit 以上 HDR 监看。",
   "HDR is standard across TVs, phones, monitors and camera monitoring: PQ/HLG with HDR10, Dolby Vision and HDR10+ coexist; phones such as the iPhone 17 line and Galaxy flagships capture and show gain-map HDR photos and Dolby Vision video, and Atomos and Sony monitors offer 1,000-nit-plus HDR monitoring."
  ],
  "replaced": [
   "没有被替代，而是被吸收为基础能力；下一步是更亮的 tandem OLED、Mini LED/Micro RGB 背光，以及静态照片的增益图 HDR（ISO 21496-1）普及。",
   "Not replaced but absorbed as a baseline; next come brighter tandem OLED, Mini LED and Micro RGB backlights, and wider use of gain-map HDR for still photos (ISO 21496-1)."
  ],
  "refs": [
   {
    "t": "High Dynamic Range Display Systems (Seetzen et al., SIGGRAPH 2004) - UBC Imager",
    "u": "https://www.cs.ubc.ca/labs/imager/tr/2004/Seetzen_2004_HDR/"
   },
   {
    "t": "BrightSide Technologies - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/BrightSide_Technologies"
   },
   {
    "t": "High-dynamic-range television - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/High-dynamic-range_television"
   },
   {
    "t": "VIZIO announces pricing and availability for Reference Series with Dolby Vision (Oct 2015)",
    "u": "https://www.vizio.com/en/press/2015/oct/vizio-announces-pricing-and-availability-for-highly-anticipated-reference-series-collection-featuring-dolby-vision-high-dynamic-range-support"
   },
   {
    "t": "Samsung and Amazon make Galaxy Note 7 the first smartphone to support HDR streaming - SamMobile",
    "u": "https://www.sammobile.com/2016/08/02/samsung-and-amazon-make-galaxy-note-7-the-first-smartphone-to-support-hdr-streaming/"
   },
   {
    "t": "Atomos Shogun Flame & Ninja Flame Are the First 7\" HDR 4K Recording Monitors - No Film School",
    "u": "https://nofilmschool.com/2016/03/atomos-shogun-flame-ninja-flame-hdr-4k-monitor-recorder-price-cost"
   },
   {
    "t": "LG G6 is the world's first Dolby Vision smartphone - What Hi-Fi?",
    "u": "https://www.whathifi.com/news/lg-g6-worlds-first-dolby-vision-smartphone"
   },
   {
    "t": "HDR10+ - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/HDR10%2B"
   },
   {
    "t": "NAB 2018 Awards: Atomos Ninja V - Videomaker",
    "u": "https://www.videomaker.com/videonews/2018/04/nab-2018-awards-atomos-ninja-v-is-the-shogun-inferno-equivalent-for-smaller-cameras-and-a-best-of/"
   },
   {
    "t": "Ultra HDR - Android Open Source Project",
    "u": "https://source.android.com/docs/core/camera/ultra-hdr"
   },
   {
    "t": "Ultra HDR Image Format v1.1 - Android Developers",
    "u": "https://developer.android.com/media/platform/hdr-image-format"
   }
  ]
 },
 "ltpo": {
  "stages": [
   [
    2004,
    "paper",
    "东京工业大学 Hideo Hosono 团队在 Nature 发表室温制备的非晶 IGZO 氧化物 TFT，迁移率是非晶硅的 20–50 倍、漏电极低，成为 LTPO 里\"O\"的来源。",
    "Hideo Hosono's group at Tokyo Tech published room-temperature amorphous IGZO oxide TFTs in Nature, with 20–50× the mobility of amorphous silicon and very low leakage: the \"O\" in LTPO.",
    [
     0
    ]
   ],
   [
    2012,
    "rival",
    "Sharp 2012 年量产 IGZO 液晶，利用氧化物 TFT 低漏电做 idling stop 低频驱动省电；这是纯氧化物背板路线，后来与 LTPS 混合成 LTPO。",
    "Sharp began mass-producing IGZO LCDs in 2012, using low-leakage oxide TFTs for idling-stop low-frequency driving; this all-oxide route was later combined with LTPS as LTPO.",
    [
     0,
     1
    ]
   ],
   [
    2013,
    "paper",
    "Apple 专利《Displays with silicon and semiconducting oxide thin-film transistors》（US 9,818,765，优先权 2013 年 8 月，2014 年 4 月申请，发明人 Hiroshi Osawa 等）提出在同一背板上混用硅 TFT 与氧化物 TFT。",
    "Apple's patent \"Displays with silicon and semiconducting oxide thin-film transistors\" (US 9,818,765; priority Aug 2013, filed Apr 2014; inventors incl. Hiroshi Osawa) combined silicon and oxide TFTs on one backplane.",
    [
     2
    ]
   ],
   [
    2018,
    "mass",
    "Apple Watch Series 4 首次量产 LTPO OLED：开关管用 LTPS、驱动管用 IGZO，省电约 5–15%。",
    "Apple Watch Series 4 was the first mass-produced LTPO OLED: LTPS switching TFTs with IGZO drive TFTs, saving roughly 5–15% power.",
    [
     3,
     4
    ]
   ],
   [
    2019,
    "ver",
    "Apple Watch Series 5 借 LTPO 把刷新率从 60 Hz 降到 1 Hz，实现常亮显示 Always-On。",
    "Apple Watch Series 5 used LTPO to drop from 60 Hz to 1 Hz, enabling an always-on display.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "Samsung Display 把自家 LTPO 方案称 HOP，首发于 Galaxy Note20 Ultra（6.9 英寸 1440×3088），在 120/60/30/10 Hz 间切换，整体显示功耗最多降 22%。",
    "Samsung Display's LTPO variant, called HOP, debuted in the Galaxy Note20 Ultra (6.9-inch 1440×3088), switching between 120/60/30/10 Hz and cutting display power by up to 22%.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "iPhone 13 Pro / Pro Max 把 LTPO 与 ProMotion 结合，带来最高 120 Hz、静止时自动降频的自适应刷新。",
    "iPhone 13 Pro and Pro Max combined LTPO with ProMotion for adaptive refresh up to 120 Hz that drops when the image is static.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Apple Watch Series 10 首发 LTPO3：把驱动 TFT 也从 LTPS 换成氧化物，进一步降低漏电和功耗；同年 iPad Pro tandem OLED 支持 10–120 Hz 自适应刷新。",
    "Apple Watch Series 10 debuted LTPO3, moving the drive TFT from LTPS to oxide for lower leakage and power; the same year iPad Pro's tandem OLED gained 10–120 Hz adaptive refresh.",
    [
     3,
     7
    ]
   ],
   [
    2025,
    "ver",
    "iPhone 17 与 iPhone Air 也用上 ProMotion，iPhone 全系首次都是 LTPO 高刷屏。",
    "iPhone 17 and iPhone Air gained ProMotion, making the whole iPhone lineup LTPO high-refresh for the first time.",
    [
     6
    ]
   ],
   [
    2026,
    "ver",
    "iPhone Duo 两块屏都支持 ProMotion 与 Always-On，内屏为 LTPO 折叠 AMOLED（1–120 Hz）。",
    "Both screens of the iPhone Duo support ProMotion and Always-On; the inner screen is a foldable LTPO AMOLED (1–120 Hz).",
    [
     8,
     1
    ]
   ]
  ],
  "now": [
   "LTPO 已是高端 OLED 的标配：iPhone 17 全系、iPhone Duo、Galaxy S/Z 系列、Pixel 及多数安卓旗舰都用 1–120 Hz LTPO，手表用它做常亮，平板 iPad Pro 也用上。",
   "LTPO is standard for premium OLED: the whole iPhone 17 line, iPhone Duo, Galaxy S/Z, Pixel and most Android flagships run 1–120 Hz LTPO, watches use it for always-on, and iPad Pro uses it too."
  ],
  "replaced": [
   "尚未被替代，正在向更多氧化物演进：LTPO3 把驱动管也换成氧化物，下一步是从手表扩展到手机，以及更大尺寸的全氧化物背板。",
   "Not replaced; it is moving toward more oxide: LTPO3 makes the drive TFT oxide too, and next spreads from watches to phones and larger all-oxide backplanes."
  ],
  "refs": [
   {
    "t": "Indium gallium zinc oxide - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Indium_gallium_zinc_oxide"
   },
   {
    "t": "LTPO OLED backplanes - OLED-Info",
    "u": "https://oled-info.com/ltpo"
   },
   {
    "t": "US9818765B2 Displays with silicon and semiconducting oxide thin-film transistors - Google Patents",
    "u": "https://patents.google.com/patent/US9818765B2/en"
   },
   {
    "t": "Apple Watch LTPO always-on display - iFixit",
    "u": "https://www.ifixit.com/News/32943/apple-watch-ltpo-always-on-display"
   },
   {
    "t": "Apple Watch Series 10 advanced display tech likely coming to iPhone - 9to5Mac",
    "u": "https://9to5mac.com/2024/10/24/apple-watch-series-10-advanced-display-tech-likely-coming-to-iphone/"
   },
   {
    "t": "Samsung announces new variable refresh rate technology in its latest AMOLED - OLED-Info",
    "u": "https://www.oled-info.com/samsung-announces-new-variable-refresh-rate-technology-its-latest-amoled"
   },
   {
    "t": "All New iPhone Models Now Feature ProMotion Displays - MacRumors",
    "u": "https://www.macrumors.com/2025/09/09/all-new-iphone-models-now-promotion/"
   },
   {
    "t": "Apple unveils stunning new iPad Pro with M4 chip - Apple Newsroom",
    "u": "https://www.apple.com/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/"
   },
   {
    "t": "Apple unveils iPhone Duo - Apple Newsroom",
    "u": "https://www.apple.com/ph/newsroom/2026/09/apple-unveils-iphone-duo/"
   }
  ]
 },
 "microled": {
  "stages": [
   [
    2000,
    "idea",
    "Kansas State University 的 Hongxing Jiang 与 Jingyu Lin 团队（Jin、Li 等）做出首个 InGaN 微盘 LED 与无源驱动 MicroLED 微显示，并申请专利 US 6,410,940《Micro-size LED and detector arrays for mini-displays》。",
    "Hongxing Jiang and Jingyu Lin's team at Kansas State University (with Jin, Li et al.) made the first InGaN microdisk LEDs and a passive-matrix MicroLED microdisplay, patented as US 6,410,940 \"Micro-size LED and detector arrays for mini-displays\".",
    [
     0,
     1
    ]
   ],
   [
    2001,
    "paper",
    "Jiang、Jin、Li、Shakya、Lin 在 Applied Physics Letters 78(9) 发表《III-nitride blue microdisplays》，证明自发光氮化物微显示无需背光、视角不偏色。",
    "Jiang, Jin, Li, Shakya and Lin published \"III-nitride blue microdisplays\" in Applied Physics Letters 78(9), showing self-emissive nitride microdisplays need no backlight and keep colour at any angle.",
    [
     1
    ]
   ],
   [
    2009,
    "proto",
    "Jiang、Lin 在 Texas Tech 与 III-N Technology 把 MicroLED 阵列与硅 CMOS 驱动集成，做出首个有源驱动、可放视频的 VGA（640×480）MicroLED 微显示。",
    "At Texas Tech and III-N Technology, Jiang and Lin bonded a MicroLED array to silicon CMOS drivers, the first active-matrix, video-capable VGA (640×480) MicroLED microdisplay.",
    [
     0,
     1
    ]
   ],
   [
    2012,
    "proto",
    "Sony 在 CES 2012 展示 55 英寸 1920×1080 Crystal LED 电视原型，每个子像素一颗 LED、共约 600 万颗，但成本过高，2013 年转投 OLED。",
    "Sony showed a 55-inch 1920×1080 Crystal LED TV prototype at CES 2012, one LED per subpixel (about 6 million), but costs were prohibitive and it turned to OLED in 2013.",
    [
     2,
     0
    ]
   ],
   [
    2014,
    "corp",
    "Apple 收购 MicroLED 创业公司 LuxVue，开始为手表等设备自研 MicroLED。",
    "Apple acquired MicroLED start-up LuxVue and began in-house MicroLED work for devices such as the Watch.",
    [
     0,
     3
    ]
   ],
   [
    2017,
    "mass",
    "Sony 把技术改名 CLEDIS（Crystal LED Integrated Structure），InfoComm 2016 首次公开、CES 2017 展示约 9.7×2.7 m 8K×2K 模块墙，2017 年面向商用出货（约），像素仅 0.003 mm²、黑色面积 >99%。",
    "Sony renamed the technology CLEDIS (Crystal LED Integrated Structure), first shown at InfoComm 2016 and at CES 2017 as a ~9.7×2.7 m 8K×2K modular wall, shipping to business customers in 2017 (approx.); each pixel is 0.003 mm², leaving >99% of the surface black.",
    [
     2,
     4
    ]
   ],
   [
    2018,
    "ver",
    "Samsung 在 CES 2018 发布 146 英寸模块化 MicroLED 电视 The Wall，称是首款面向消费者的模块化 MicroLED 电视，尺寸可按需拼接。",
    "Samsung unveiled The Wall, a 146-inch modular MicroLED TV, at CES 2018, billed as the first consumer modular MicroLED TV with customisable size.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Sony、Samsung、Konka 等开始正式销售 MicroLED 拼接墙，Samsung 随后推出 89 英寸等更小家用尺寸，但单价仍在十万美元级。",
    "Sony, Samsung and Konka began selling MicroLED video walls; Samsung later added smaller home sizes such as 89 inches, still priced around US$100k.",
    [
     0
    ]
   ],
   [
    2024,
    "end",
    "Apple 取消 MicroLED 版 Apple Watch Ultra 项目，供应商 ams OSRAM 称\"基石项目\"意外取消，原因是良率低、成本高、风险大。",
    "Apple cancelled its MicroLED Apple Watch Ultra; supplier ams OSRAM said a \"cornerstone project\" was unexpectedly cancelled, citing low yields, high cost and risk.",
    [
     3
    ]
   ],
   [
    2025,
    "ver",
    "Garmin fēnix 8 Pro MicroLED（2025 年 9 月，1,999.99 美元）成为首款 MicroLED 智能手表，1.4 英寸 454×454、峰值 4,500 nit，但常亮续航仅约 4 天。",
    "Garmin's fēnix 8 Pro MicroLED (Sep 2025, $1,999.99) became the first MicroLED smartwatch: 1.4-inch 454×454, 4,500 nits peak, but only about 4 days with always-on.",
    [
     6
    ]
   ],
   [
    2025,
    "rival",
    "Samsung 推出 115 英寸 Micro RGB 电视：用小于 100 µm 的 RGB LED 做背光、前面仍是 LCD，覆盖 100% BT.2020，以更低成本抢 MicroLED 的大屏高端定位。",
    "Samsung launched a 115-inch Micro RGB TV: an LCD lit by RGB LEDs under 100 µm, covering 100% of BT.2020, a cheaper rival for MicroLED's large premium segment.",
    [
     7
    ]
   ]
  ],
  "now": [
   "MicroLED 仍以商用拼接墙（Samsung The Wall、Sony Crystal LED）和极少数高价产品为主，如 Garmin fēnix 8 Pro MicroLED；AR 眼镜用的硅基 MicroLED 微显示也在推进，大规模巨量转移良率仍是瓶颈。",
   "MicroLED remains mostly in commercial video walls (Samsung The Wall, Sony Crystal LED) and a few pricey products such as the Garmin fēnix 8 Pro MicroLED; silicon-backplane MicroLED microdisplays for AR glasses are advancing, but mass-transfer yield is still the bottleneck."
  ],
  "replaced": [
   "尚未普及也未被替代；在消费电视上被 OLED 和 Mini LED / Micro RGB 背光液晶抢先，手表上 Apple 已退出，未来看巨量转移成本能否降下来。",
   "Not mainstream and not replaced; in consumer TVs OLED and Mini LED / Micro RGB-backlit LCDs got there first, Apple has exited for watches, and its future depends on cutting mass-transfer cost."
  ],
  "refs": [
   {
    "t": "MicroLED - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/MicroLED"
   },
   {
    "t": "Jingyu Lin - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Jingyu_Lin"
   },
   {
    "t": "Crystal LED - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Crystal_LED"
   },
   {
    "t": "Apple Watch Ultra With MicroLED Display Seemingly 'Canceled' For Now - MacRumors",
    "u": "https://macrumors.com/2024/02/29/microled-apple-watch-ultra-canceled-for-now"
   },
   {
    "t": "Sony micro LED displays soon commercialized - DIGITIMES (Jan 2017)",
    "u": "https://www.digitimes.com/news/a20170110PD206.html"
   },
   {
    "t": "Samsung Unveils The Wall, the World's First Modular MicroLED 146-inch TV - Samsung",
    "u": "https://www.samsung.com/levant/news/local/samsung-unveils-the-wall-the-worlds-first-modular-microled-146-inch-tv"
   },
   {
    "t": "Garmin releases Fenix 8 Pro with LTE and microLED display - Notebookcheck",
    "u": "https://www.notebookcheck.net/Garmin-releases-Fenix-8-Pro-with-LTE-connectivity-and-battery-life-killing-microLED-display.1103775.0.html"
   },
   {
    "t": "Samsung launches world first Micro RGB in Hong Kong - Samsung",
    "u": "https://www.samsung.com/hk_en/news/product/samsung-launches-world-first-micro-rgb-in-hong-kong-setting-new-standard-for-premium-tv-technology"
   }
  ]
 },
 "miniled": {
  "stages": [
   [
    2004,
    "idea",
    "UBC 的 Seetzen、Whitehead 等在 SIGGRAPH 2004 提出用低分辨率、逐颗可调的 LED 阵列做液晶背光（双重调制），这是分区调光 local dimming 与 Mini LED 背光的思想源头。",
    "At SIGGRAPH 2004, UBC's Seetzen, Whitehead et al. proposed backlighting an LCD with a low-res array of individually driven LEDs (dual modulation), the root of local dimming and Mini LED backlights.",
    [
     0
    ]
   ],
   [
    2007,
    "corp",
    "Dolby 收购把这套背光技术商业化的 BrightSide，Sony 等电视厂随后授权使用，LED 全阵列分区背光进入高端电视。",
    "Dolby bought BrightSide, which had commercialised the backlight; Sony and other TV makers licensed it, bringing full-array local-dimming LED backlights to premium TVs.",
    [
     1
    ]
   ],
   [
    2015,
    "ver",
    "传统全阵列背光时代：Vizio Reference Series 用 384 个 LED 分区、800 nit，分区只有几百个，光晕明显，催生把 LED 缩小到百微米级的 Mini LED。",
    "The pre-Mini LED full-array era: Vizio's Reference Series used 384 LED zones at 800 nits; with only hundreds of zones blooming was visible, pushing LEDs down to the ~100 µm Mini LED scale.",
    [
     2
    ]
   ],
   [
    2019,
    "mass",
    "TCL 在 CES 2019 发布 8-Series，称首款 Mini LED 背光电视；65/75 英寸 4K 版 2019 年 11 月出货，背光含 25,000 多颗 Mini LED、约 1,000 个分区，售价 1,999/2,999 美元。",
    "TCL announced the 8-Series at CES 2019 as the first Mini LED-backlit TV; the 65/75-inch 4K models shipped in Nov 2019 with over 25,000 mini-LEDs in about 1,000 zones, at $1,999/$2,999.",
    [
     3,
     4
    ]
   ],
   [
    2021,
    "ver",
    "iPad Pro 12.9 英寸（M1）Liquid Retina XDR 背光有 10,384 颗 0.2 mm Mini LED、2,596 个分区，把 Mini LED 带进平板，随后用于 MacBook Pro。",
    "The 12.9-inch M1 iPad Pro's Liquid Retina XDR backlight packs 10,384 0.2 mm mini-LEDs in 2,596 zones, bringing Mini LED to tablets and then MacBook Pro.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "车载开始量产：Cadillac Lyriq 33 英寸曲面 Mini LED 背光座舱屏（Innolux 供应）2022 年投产，同年 Nio、Roewe 也在仪表屏上用 Mini LED（约），2022 年被视为车载 Mini LED 元年。",
    "Cars adopted it: the Cadillac Lyriq's 33-inch curved Mini LED-backlit cockpit (supplied by Innolux) entered production in 2022, and Nio and Roewe used Mini LED for clusters the same year (approx.), making 2022 the first year of automotive Mini LED.",
    [
     6,
     7
    ]
   ],
   [
    2024,
    "end",
    "Apple 把 iPad Pro 从 Mini LED 换成 tandem OLED Ultra Retina XDR（全屏 1000 nit、峰值 1600 nit、10–120 Hz），高端平板转向自发光。",
    "Apple moved iPad Pro from Mini LED to a tandem OLED Ultra Retina XDR (1,000 nits full-screen, 1,600 peak, 10–120 Hz), shifting premium tablets to self-emissive panels.",
    [
     8
    ]
   ],
   [
    2025,
    "ver",
    "Samsung 推出 115 英寸 Micro RGB 电视，背光改成小于 100 µm 的红绿蓝三色 LED 逐区控色，覆盖 100% BT.2020；2026 年扩展到 55–115 英寸，被视为 Mini LED 的下一代。",
    "Samsung launched a 115-inch Micro RGB TV whose backlight uses red, green and blue LEDs under 100 µm with per-zone colour control, covering 100% of BT.2020; it expands to 55–115 inches in 2026 as Mini LED's successor.",
    [
     9
    ]
   ]
  ],
  "now": [
   "Mini LED 背光是高端液晶的主流：TCL、Hisense、Samsung Neo QLED 等电视动辄数千分区，MacBook Pro、电竞显示器和 Xiaomi SU7 等车型的中控屏都在用。",
   "Mini LED backlighting is mainstream for premium LCD: TCL, Hisense and Samsung Neo QLED TVs use thousands of zones, and it appears in MacBook Pro, gaming monitors and car screens such as the Xiaomi SU7."
  ],
  "replaced": [
   "在平板和部分笔记本上正被 tandem OLED 取代；电视端则向 RGB Mini/Micro LED 背光（如 Samsung Micro RGB）演进，长远目标是 MicroLED 自发光。",
   "Being replaced by tandem OLED in tablets and some laptops; in TVs it is evolving into RGB Mini/Micro LED backlights such as Samsung Micro RGB, with self-emissive MicroLED as the long-term goal."
  ],
  "refs": [
   {
    "t": "High Dynamic Range Display Systems (Seetzen et al., SIGGRAPH 2004) - UBC Imager",
    "u": "https://www.cs.ubc.ca/labs/imager/tr/2004/Seetzen_2004_HDR/"
   },
   {
    "t": "BrightSide Technologies - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/BrightSide_Technologies"
   },
   {
    "t": "VIZIO announces pricing and availability for Reference Series with Dolby Vision (Oct 2015)",
    "u": "https://www.vizio.com/en/press/2015/oct/vizio-announces-pricing-and-availability-for-highly-anticipated-reference-series-collection-featuring-dolby-vision-high-dynamic-range-support"
   },
   {
    "t": "TCL Unleash 8-Series 8K Mini-LED TV at CES 2019 - HDTVTest",
    "u": "https://www.hdtvtest.co.uk/news/TCL-Unleash-8-Series-8K-Mini-LED-TV-with-Quantum-Dot-and-HDMI-21-at-CES-2019"
   },
   {
    "t": "TCL opens up pre-orders for its 8-series 4K QLED TVs - Engadget",
    "u": "https://www.engadget.com/2019-10-08-tcl-8-series-tv-pre-orders-4k-qled-mini-led.html"
   },
   {
    "t": "How many mini-LEDs did Apple pack in iPad Pro? - TechInsights",
    "u": "https://www.techinsights.com/blog/teardown/how-many-mini-leds-did-apple-pack-ipad-pro"
   },
   {
    "t": "Cadillac Lyriq Mini LED display (Innolux) - SmartAutoClub",
    "u": "https://www.smartautoclub.com/p/23645/"
   },
   {
    "t": "Mini-LED backlit automotive displays - Semiconductor Today",
    "u": "https://www.semiconductor-today.com/features/PDF/semiconductor-today-december-january-2023-Mini-LED-backlit.pdf"
   },
   {
    "t": "Apple unveils stunning new iPad Pro with M4 chip - Apple Newsroom",
    "u": "https://www.apple.com/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/"
   },
   {
    "t": "Samsung launches world first Micro RGB in Hong Kong - Samsung",
    "u": "https://www.samsung.com/hk_en/news/product/samsung-launches-world-first-micro-rgb-in-hong-kong-setting-new-standard-for-premium-tv-technology"
   }
  ]
 },
 "udc": {
  "stages": [
   [
    1990,
    "paper",
    "AT&T Bell Labs 的 Richard Gitlin 等申请专利 US 5,159,445（1992 年授权）：把摄像头放在平板显示器后方，屏幕在显示与透明之间快速切换，解决视频会议的眼神对视问题。",
    "AT&T Bell Labs' Richard Gitlin et al. filed US 5,159,445 (granted 1992): a camera behind a flat-panel screen that rapidly switches between display and transparent modes, fixing eye contact in video calls.",
    [
     0
    ]
   ],
   [
    2019,
    "proto",
    "Oppo 与 Xiaomi 2019 年 6 月先后放出屏下摄像头视频，Oppo 6 月 26 日在 MWC Shanghai 展示可用原型：摄像头区域用透明材料和重新设计的像素结构，配大底大光圈传感器。",
    "Oppo and Xiaomi both teased under-screen cameras in June 2019; on 26 June Oppo showed a working prototype at MWC Shanghai, using transparent materials and a redesigned pixel structure over a large-sensor, wide-aperture camera.",
    [
     1
    ]
   ],
   [
    2020,
    "mass",
    "ZTE Axon 20 5G（2020 年 9 月 1 日发布）成为首款量产屏下摄像头手机，6.92 英寸 OLED 下藏 32MP 前摄。",
    "ZTE's Axon 20 5G (announced 1 Sep 2020) became the first mass-produced under-display-camera phone, hiding a 32MP selfie camera under a 6.92-inch OLED.",
    [
     2
    ]
   ],
   [
    2021,
    "ver",
    "ZTE Axon 30（2021 年 7 月）第二代 UDC：摄像头区域改 delta 像素排列、7 层高透材料、独立像素增强芯片，前摄 16MP。",
    "ZTE's Axon 30 (Jul 2021) brought second-gen UDC: delta pixel layout, a 7-layer high-transparency stack and a dedicated pixel-enhancement chip over a 16MP camera.",
    [
     3
    ]
   ],
   [
    2021,
    "ver",
    "Samsung Galaxy Z Fold3（2021 年 8 月）在 7.6 英寸内屏下放 4MP UDC（2 µm 像素），是 Samsung 首款屏下摄像头产品。",
    "Samsung's Galaxy Z Fold3 (Aug 2021) put a 4MP UDC (2 µm pixels) under its 7.6-inch inner screen, Samsung's first under-display camera.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Xiaomi MIX 4（2021 年 8 月 10 日）的 CUP 屏下摄像头为 20MP，上方像素密度保持 400 ppi，与全屏一致，研发投入近 8,000 万美元。",
    "Xiaomi's MIX 4 (10 Aug 2021) used a 20MP Camera Under Panel (CUP) with the area above kept at 400 ppi like the rest of the screen, after nearly $80 million of R&D.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "ZTE Axon 40 Ultra（2022 年 6 月）第三代 UDC：摄像头上方 400 ppi，16MP 四合一 2.24 µm 像素，配 AI 降噪算法。",
    "ZTE's Axon 40 Ultra (Jun 2022) brought third-gen UDC: 400 ppi above the camera and a 16MP sensor binning to 2.24 µm, with AI noise reduction.",
    [
     6
    ]
   ],
   [
    2025,
    "end",
    "Samsung Galaxy Z Fold7 内屏放弃自 Fold3 起使用的 UDC，改回 10MP 挖孔摄像头，以换取更好的自拍画质。",
    "Samsung's Galaxy Z Fold7 dropped the inner-screen UDC used since the Fold3 and returned to a 10MP punch-hole camera for better selfie quality.",
    [
     7
    ]
   ],
   [
    2025,
    "rival",
    "挖孔仍是主流：屏幕吸光让 UDC 画质落后，多数旗舰坚持挖孔；只有 RedMagic 11 Pro 等游戏手机（2025 年 10 月，BOE 6.85 英寸 144 Hz 屏下 16MP）还坚持 UDC 以换取无遮挡全屏。",
    "Punch-holes remain the norm because the screen blocks light and UDC image quality lags; only gaming phones such as the RedMagic 11 Pro (Oct 2025, 16MP under a 6.85-inch 144 Hz BOE panel) keep UDC for an unbroken screen.",
    [
     7,
     8
    ]
   ],
   [
    2026,
    "ver",
    "Apple iPhone Duo 在 7.6 英寸内屏下藏一颗 FaceTime 摄像头，不用时隐形，是 Apple 首款屏下摄像头产品。",
    "Apple's iPhone Duo hides a FaceTime camera beneath its 7.6-inch inner screen that stays invisible when not in use, Apple's first under-display camera.",
    [
     9
    ]
   ]
  ],
  "now": [
   "屏下摄像头仍是小众：Nubia/RedMagic 游戏手机和 iPhone Duo 内屏在用，Samsung 已在 Fold7 退回挖孔；画质靠更透明的像素区和 AI 修复补偿。",
   "Under-display cameras remain niche: Nubia/RedMagic gaming phones and the iPhone Duo inner screen use them, while Samsung reverted to a punch-hole on the Fold7; image quality relies on more transparent pixel areas and AI restoration."
  ],
  "replaced": [
   "主流旗舰仍以挖孔（含 Dynamic Island 等形态）为主，UDC 未取代挖孔；下一步是提高透光率和计算成像修复，让屏下前摄画质接近挖孔。",
   "Mainstream flagships still use punch-holes (including Dynamic Island-style cutouts) and UDC has not displaced them; next steps are higher transmittance and computational restoration to bring UDC quality close to punch-hole cameras."
  ],
  "refs": [
   {
    "t": "US5159445A Teleconferencing video display system for improving eye contact - Google Patents",
    "u": "https://patents.google.com/patent/US5159445A/en"
   },
   {
    "t": "Oppo under-screen camera at MWC Shanghai - Engadget (2019)",
    "u": "https://www.engadget.com/2019-06-26-oppo-under-screen-camera-mwc-shanghai.html"
   },
   {
    "t": "ZTE Axon 20 5G launches as first smartphone with under-display camera - 9to5Google",
    "u": "https://9to5google.com/2020/09/02/zte-axon-20-5g-launches-as-first-smartphone-w-under-display-camera/"
   },
   {
    "t": "ZTE unleashes the second-gen under-display Axon 30 - Notebookcheck",
    "u": "https://www.notebookcheck.net/ZTE-unleashes-the-second-gen-under-display-Axon-30-smartphone-with-confirmation-of-a-global-release.552454.0.html"
   },
   {
    "t": "Samsung debuts the Galaxy Z Fold3 as its first-gen under-display camera flagship - Notebookcheck",
    "u": "https://www.notebookcheck.net/Samsung-debuts-the-Galaxy-Z-Fold3-as-its-first-gen-under-display-camera-flagship.554640.0.html"
   },
   {
    "t": "Xiaomi Mi Mix 4 specs and release - 9to5Google",
    "u": "https://9to5google.com/2021/08/10/xiaomi-mi-mix-4-specs-release/"
   },
   {
    "t": "ZTE Axon 40 Ultra launch - Android Central",
    "u": "https://androidcentral.com/phones/zte-axon-40-ultra-launch"
   },
   {
    "t": "Samsung Galaxy Z Fold 7 ditches UDC for punch hole - Android Headlines",
    "u": "https://www.androidheadlines.com/2025/06/samsung-galaxy-z-fold-7-ditches-udc-punch-hole.html"
   },
   {
    "t": "RedMagic 11 Pro+ and 11 Pro launch with under-display camera - NokiaMob",
    "u": "https://nokiamob.net/2025/10/17/redmagic-11-pro-and-11-pro-launch-snapdragon-8-elite-gen-5-144hz-amoled-under-display-camera/"
   },
   {
    "t": "Apple unveils iPhone Duo - Apple Newsroom",
    "u": "https://www.apple.com/ph/newsroom/2026/09/apple-unveils-iphone-duo/"
   }
  ]
 }
};
