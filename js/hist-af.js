/* 对焦时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 af 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：lens:af、lens:liquid、cmos:pdaf>pdpix、cmos:dpaf、isp:eyeaf>eye、isp:face、cmos:spad>tof */
TIMELINES.af.hist = {
 "sonar": {
  "stages": [
   [
    1976,
    "corp",
    "Polaroid 的 Juerg Muggli 与 Manfred G. Specht 于 1976 年 11 月申请专利 US4081626：一种 Sell 型静电换能器，用张紧塑料振膜压在开同心槽的金属背板上，工作在 45–70 kHz；槽深从中心向外逐渐变浅以压低旁瓣、收窄波束，专为量产自动对焦相机的超声测距设计。",
    "In November 1976 Polaroid's Juerg Muggli and Manfred G. Specht filed US4081626: a Sell-type electrostatic transducer with a stretched plastic diaphragm over a concentrically grooved metal backplate, operating at 45–70 kHz; grooves get shallower toward the rim to suppress side lobes and narrow the beam, designed for ultrasonic ranging in mass-produced autofocus cameras.",
    [
     0
    ]
   ],
   [
    1978,
    "paper",
    "1978 年 3 月 28 日 US4081626 获批，发明人 Muggli 与 Specht，专利写明该换能器配合超声测距系统，把测得距离换算成镜头转动量以正确对焦，系统由一个静电换能器加三颗集成电路组成。",
    "On 28 March 1978 US4081626 was granted to Muggli and Specht; it describes the transducer working with an ultrasonic ranging system that converts measured distance into lens rotation for correct focus, the system comprising one electrostatic transducer and three integrated circuits.",
    [
     0
    ]
   ],
   [
    1978,
    "mass",
    "同年 Polaroid 推出 SX-70 Sonar OneStep：机身发出超声脉冲、计时回波求距离再转动镜头对焦，暗处也能用，可关掉改手动，是面向大众的第一台自动对焦单反。",
    "That year Polaroid launched the SX-70 Sonar OneStep: it emitted an ultrasonic pulse, timed the echo to get distance and turned the lens accordingly, worked in the dark, could be switched off for manual focus, and was the first autofocus SLR sold to consumers.",
    [
     1
    ]
   ],
   [
    1980,
    "corp",
    "约 1980 年起 Polaroid 把相机里的测距电路做成 Ultrasonic Ranging System Designer's Kit 对外出售，含仪器级换能器、测距电路板（由 Texas Instruments 为 SX-70 定制的板子改来）和 LED 演示板，售价约 169 美元，迅速被机器人爱好者和工业用户拿去做避障测距。",
    "From around 1980 Polaroid sold the camera ranging electronics as the Ultrasonic Ranging System Designer's Kit, with an instrument-grade transducer, a ranging board (derived from the board Texas Instruments built for the SX-70) and an LED demo board, for about $169; robot hobbyists and industrial users quickly adopted it for obstacle ranging.",
    [
     2
    ]
   ],
   [
    1981,
    "ver",
    "1981 年 Polaroid Sun 660 把 Sonar AutoFocus 带到新的 600 型胶片上，是第一台带自动对焦的 600 相机；之后的 SLR 680/690 等也沿用声呐对焦。",
    "In 1981 the Polaroid Sun 660 brought Sonar AutoFocus to the new 600-type film, the first autofocusing 600 camera; later models such as the SLR 680/690 kept sonar focusing.",
    [
     3,
     1
    ]
   ],
   [
    1985,
    "paper",
    "1985 年 3 月 Carnegie Mellon 的 Hans Moravec 与 Alberto Elfes 在 ICRA 发表《High Resolution Maps from Wide Angle Sonar》，用 Polaroid 实验室级超声换能器（量程 0.9–35 ft、波束约 30°）在 Neptune 机器人上建出占据栅格地图，开创了概率建图。",
    "In March 1985 Hans Moravec and Alberto Elfes of Carnegie Mellon presented \"High Resolution Maps from Wide Angle Sonar\" at ICRA, building occupancy-grid maps on the Neptune robot with Polaroid laboratory-grade transducers (0.9–35 ft range, ~30° beam), founding probabilistic mapping.",
    [
     4
    ]
   ],
   [
    1986,
    "ver",
    "后来的 Polaroid 6500 系列测距模块用 TI TL851/TL852 芯片组，以 49.4 kHz 发 16 个脉冲，量程 6 英寸至 35 英尺、精度约读数的 ±1%，可驱动所有 Polaroid 静电换能器，成了 1980–90 年代移动机器人的标准声呐件（年份约）。",
    "The later Polaroid 6500 series ranging module used the TI TL851/TL852 chipset, sent 16 pulses at 49.4 kHz, ranged 6 in to 35 ft at about ±1% of reading and drove any Polaroid electrostatic transducer, becoming the standard sonar part on 1980s–90s mobile robots (year approximate).",
    [
     5
    ]
   ],
   [
    2002,
    "corp",
    "Polaroid 2001 年破产后，2002 年 SensComp 收购 Polaroid OEM Products 部门，继续生产 50 kHz 静电换能器和 600 系列智能超声传感器，转向工业与机器人测距。",
    "After Polaroid's 2001 bankruptcy, SensComp acquired the Polaroid OEM Products division in 2002 and kept making 50 kHz electrostatic transducers and 600-series smart ultrasonic sensors for industrial and robot ranging.",
    [
     6
    ]
   ],
   [
    2023,
    "end",
    "2023 年 9 月 Polaroid I-2 改用红外 LiDAR 单点测距辅助连续自动对焦（0.4 m 至无穷远），即使在自家拍立得相机里，超声波对焦也被光学飞行时间测距取代。",
    "In September 2023 the Polaroid I-2 used an infrared LiDAR single-point sensor for continuous AF (0.4 m to infinity); even in Polaroid's own instant cameras ultrasonic focusing gave way to optical time-of-flight ranging.",
    [
     7
    ]
   ]
  ],
  "now": [
   "相机里已基本不用超声波对焦；它的后代是工业液位计、倒车雷达和机器人避障用的超声测距传感器，SensComp 仍在生产 Polaroid 血统的静电换能器。",
   "Ultrasonic focusing is essentially gone from cameras; its descendants are ultrasonic ranging sensors for level gauging, parking aids and robot obstacle avoidance, and SensComp still makes Polaroid-lineage electrostatic transducers."
  ],
  "replaced": [
   "先被更小更便宜的主动红外三角测距取代，后被 TTL 相位/反差检测和激光/LiDAR 飞行时间测距取代；超声波会被玻璃挡住、波束宽，是它的硬伤。",
   "First displaced by smaller, cheaper active-infrared triangulation, later by TTL phase/contrast detection and laser/LiDAR time-of-flight; being blocked by glass and having a wide beam were its weaknesses."
  ],
  "refs": [
   {
    "t": "US4081626A Electrostatic transducer having narrowed directional characteristic (Google Patents)",
    "u": "https://patents.google.com/patent/US4081626A/en"
   },
   {
    "t": "Polaroid SX-70 (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Polaroid_SX-70"
   },
   {
    "t": "Polaroid Ultrasonic Ranging System Designer's Kit discussion (comp.robotics, 1992)",
    "u": "https://discmaster.textfiles.com/view/30670/NN_1992_26.iso/spool/comp/robotics/2244"
   },
   {
    "t": "Polaroid Sun 660 LMS Autofocus Camera Review (Analog.Cafe)",
    "u": "https://analog.cafe/r/polaroid-sun-660-pngm"
   },
   {
    "t": "Moravec & Elfes, High Resolution Maps from Wide Angle Sonar (CMU RI)",
    "u": "https://www.ri.cmu.edu/publications/high-resolution-maps-from-wide-angle-sonar"
   },
   {
    "t": "Polaroid 6500 Series Sonar Ranging Module (Micromint)",
    "u": "https://www.micromint.com/app_notes/ti01_data.htm"
   },
   {
    "t": "SensComp Inc company profile",
    "u": "https://www.foodmanufacturing.com/home/id-product-categories/mro/condition-monitoring/probes-sensors/company/22223399/senscomp-inc"
   },
   {
    "t": "Polaroid I-2: the high-end camera (Polaroid press)",
    "u": "https://press.polaroid.com/229177-polaroid-i-2-the-high-end-camera-for-instant-photography-mastery"
   }
  ]
 },
 "iraf": {
  "stages": [
   [
    1977,
    "rival",
    "1977 年 11 月 30 日 Konica C35 AF 用 Honeywell 的 Visitronic 被动模块（机顶两个小窗比较两路影像）实现全球第一台量产自动对焦相机，两年卖出约 100 万台，日本人称“Jaspin Konica”。",
    "On 30 November 1977 the Konica C35 AF used Honeywell's passive Visitronic module (two small top-plate windows comparing two views) to become the first mass-produced autofocus camera, selling about a million units in two years, nicknamed \"Jaspin Konica\" in Japan.",
    [
     0
    ]
   ],
   [
    1979,
    "mass",
    "1979 年 11 月 Canon AF35M（Autoboy / Sure Shot）发售，售价 42,800 日元：IRED 发射近红外光束，PIN 光电二极管接收反射点，按三角测量求距离，是全球第一台镜间快门 35mm 自动对焦相机，也是第一台主动式自动对焦傻瓜机。",
    "The Canon AF35M (Autoboy / Sure Shot) went on sale in November 1979 at ¥42,800: an IRED emitted a near-infrared beam and a PIN photodiode located the reflection to triangulate distance; it was the world's first lens-shutter 35mm AF camera and the first compact with active AF.",
    [
     1,
     2
    ]
   ],
   [
    1981,
    "ver",
    "主动红外不靠环境光、暗处也准，AF35M 大卖，1981 年下半年月产达 11 万台；但它会被玻璃（不透近红外）骗到。1981 年的 AF35ML 和后续 AF35M II（1983）接替它。",
    "Active IR needs no ambient light and works in the dark; the AF35M sold so well that output reached 110,000 per month in the second half of 1981, though glass (opaque to near-IR) could fool it. The AF35ML (1981) and AF35M II (1983) succeeded it.",
    [
     2
    ]
   ],
   [
    1981,
    "rival",
    "同在 1981 年，Canon 在 AF35ML 和 New FD 35-70mm f/4 AF 镜头上用了被动式 SST（Solid State Triangulation）固态三角测距，说明主动红外与被动测距在傻瓜机上长期并存。",
    "Also in 1981 Canon used passive SST (Solid State Triangulation) in the AF35ML and the New FD 35-70mm f/4 AF lens, showing that active IR and passive ranging coexisted in compacts for years.",
    [
     3
    ]
   ],
   [
    1985,
    "ver",
    "1985 年 Sony CCD-V8AF（Video 8 摄像机）加入红外自动对焦，主动红外从傻瓜相机扩展到家用摄像机。",
    "In 1985 the Sony CCD-V8AF (Video 8 camcorder) added infrared autofocus, extending active IR from compact cameras to home camcorders.",
    [
     4
    ]
   ],
   [
    1996,
    "ver",
    "1996 年 Contax G2 在 G1（1994）的被动双窗测距基础上加入近红外主动测距，组成主动 + 被动混合自动对焦，低光下明显更可靠。",
    "In 1996 the Contax G2 added near-infrared active ranging to the G1's (1994) passive twin-window system, forming a hybrid active + passive AF that was much more reliable in low light.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 5 月 LG G3 把主动红外测距搬进手机：STMicroelectronics FlightSense VL6180 用 VCSEL 激光做飞行时间（ToF）测距，有效距离约 50 cm，主要在近距和暗光下辅助对焦。",
    "In May 2014 the LG G3 brought active IR ranging into phones: STMicroelectronics' FlightSense VL6180 used a VCSEL laser for time-of-flight ranging over about 50 cm, mainly assisting focus at close range and in low light.",
    [
     6
    ]
   ],
   [
    2014,
    "corp",
    "2014 年 10 月 STMicroelectronics 在日内瓦正式发布基于 FlightSense 的高精度光学测距模块，并披露 LG 用它为 G3 的激光对焦提速；单光子飞行时间测距此后被多家手机厂商采用作对焦辅助（约）。",
    "In October 2014 STMicroelectronics formally unveiled its FlightSense-based high-accuracy optical ranging module in Geneva, disclosing that LG used it to speed up the G3's laser AF; single-photon time-of-flight ranging was then adopted by several phone makers as a focus aid (approx.).",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 10 月 iPhone 12 Pro 用 LiDAR 扫描仪辅助对焦，Apple 称暗光下对焦快 6 倍；主动红外测距以 dToF/LiDAR 形式延续。",
    "In October 2020 the iPhone 12 Pro used its LiDAR Scanner to assist focus, which Apple said made low-light autofocus up to 6x faster; active IR ranging lives on as dToF/LiDAR.",
    [
     7
    ]
   ]
  ],
  "now": [
   "胶片傻瓜机时代结束后，单光束红外三角测距基本消失；主动红外测距以激光 ToF / LiDAR 形式留在手机和部分相机里，主要在暗光和低反差场景辅助相位对焦。",
   "With the end of film compacts, single-beam IR triangulation has largely disappeared; active IR ranging survives as laser ToF / LiDAR in phones and some cameras, mainly assisting phase detection in low light and low contrast."
  ],
  "replaced": [
   "在相机里被 TTL 相位检测和传感器上的 PDAF / Dual Pixel 取代；在手机里先被激光 ToF 接替，再退为 PDAF 的暗光辅助。",
   "Replaced in cameras by TTL phase detection and on-sensor PDAF / Dual Pixel; in phones it was first succeeded by laser ToF and then reduced to a low-light assist for PDAF."
  ],
  "refs": [
   {
    "t": "Autofocus Turns 50 in 2027, and the Camera That Started It Was a Konica (Fstoppers)",
    "u": "https://fstoppers.com/originals/autofocus-turns-50-2027-and-camera-started-it-was-konica-903887"
   },
   {
    "t": "Sure Shot / AF35M (Canon Camera Museum)",
    "u": "https://global.canon/en/c-museum/product/film102.html"
   },
   {
    "t": "Canon AF35M (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_AF35M"
   },
   {
    "t": "Canon New FD 35-70 mm f/4 AF (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_New_FD_35-70_mm_f/4_AF"
   },
   {
    "t": "Sony CCD-V8AF-E (Radiomuseum)",
    "u": "https://radiomuseum.org/r/sony_video_camera_recorder_ccd_v8af_e.html"
   },
   {
    "t": "Contax G (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Contax_G"
   },
   {
    "t": "STMicroelectronics FlightSense press release, 8 Oct 2014",
    "u": "https://www.st.com/content/st_com/en/about/media-center/press-item.html/p3609p.html"
   },
   {
    "t": "Apple introduces iPhone 12 Pro and iPhone 12 Pro Max (Apple Newsroom)",
    "u": "https://www.apple.com/newsroom/2020/10/apple-introduces-iphone-12-pro-and-iphone-12-pro-max-with-5g/"
   }
  ]
 },
 "cdaf": {
  "stages": [
   [
    1965,
    "paper",
    "NHK 的 Ishida 等在《NHK Technical Research Report》1965 年第 17 卷第 1 期发表《Automatic Focusing System for Television Camera Based upon Climbing Servo System》：从视频信号中取高频分量当清晰度，驱动镜头爬到峰值，即后来的“爬山法”。",
    "Ishida et al. of NHK published \"Automatic Focusing System for Television Camera Based upon Climbing Servo System\" in NHK Technical Research Report vol. 17 no. 1 (1965): take the video signal's high-frequency component as sharpness and drive the lens up to the peak, the later \"hill-climbing\" method.",
    [
     0
    ]
   ],
   [
    1981,
    "mass",
    "1981 年 11 月 Pentax ME F 成为第一台量产自动对焦单反：TTL 电子反差检测，用双排 MOS 硅传感器分析主体反差，配 SMC Pentax AF 35–70mm f/2.8（马达和 4 节 AAA 电池在镜头里）。但对焦表现差、商业失败，1983 年降价三分之一。",
    "In November 1981 the Pentax ME F became the first mass-produced AF SLR: TTL electronic contrast detection with a two-row MOS silicon sensor, paired with the SMC Pentax AF 35–70mm f/2.8 (motor and four AAA cells in the lens). It focused poorly, flopped commercially and was cut by a third in price in 1983.",
    [
     1
    ]
   ],
   [
    1982,
    "corp",
    "Hitachi 的 Toshio Murakami、Kentaro Hanma 于 1982 年 1 月申请视频摄像机爬山伺服专利（US4531158）：马达驱动镜头螺旋找“对焦电压”最大点，并加入场景变化检测电路，避免摇镜或遮挡时乱跑。",
    "Hitachi's Toshio Murakami and Kentaro Hanma filed a climbing-servo patent for video cameras in January 1982 (US4531158): a motor-driven helicoid seeks the peak \"focus voltage\", with scene-change detection so panning or occlusion does not send it astray.",
    [
     0
    ]
   ],
   [
    1983,
    "paper",
    "1983 年 8 月 Hitachi 消费品研究中心的 Hanma、Masuda、Nabeyama、Saito 在 IEEE Transactions on Consumer Electronics CE-29 卷 3 期发表固态彩色摄像机的自动对焦与白平衡新技术，爬山法进入家用摄像机。",
    "In August 1983 Hanma, Masuda, Nabeyama and Saito of Hitachi's Consumer Products Research Center published novel AF and white-balance technologies for solid-state color video cameras in IEEE Transactions on Consumer Electronics vol. CE-29 no. 3, bringing hill-climbing into home video cameras.",
    [
     2
    ]
   ],
   [
    2003,
    "mass",
    "2003 年 11 月 12 日 NTT DoCoMo 发售 Panasonic P505iS，1.28 MP CCD 摄像头带自动对焦，是全球第一台自动对焦拍照手机；此后十年手机对焦几乎全靠反差检测。",
    "On 12 November 2003 NTT DoCoMo released the Panasonic P505iS with a 1.28 MP autofocus CCD camera, the world's first AF camera phone; for the next decade phone focusing relied almost entirely on contrast detection.",
    [
     3
    ]
   ],
   [
    2008,
    "ver",
    "2008 年 Panasonic Lumix DMC-G1 作为第一台无反可换镜头相机，没有独立 AF 模块，直接用主传感器读出做反差对焦，让反差 AF 进入可换镜头相机主流。",
    "In 2008 the Panasonic Lumix DMC-G1, the first mirrorless interchangeable-lens camera, had no separate AF module and used contrast detection from the main sensor readout, bringing contrast AF into mainstream interchangeable-lens cameras.",
    [
     4
    ]
   ],
   [
    2010,
    "rival",
    "2010 年 Fujifilm FinePix F300EXR 首次在成像传感器上放相位检测像素对，号称 0.158 秒合焦，暗光再退回反差检测；混合对焦从此开始蚕食纯反差 AF。",
    "In 2010 the Fujifilm FinePix F300EXR first placed phase-detection pixel pairs on the image sensor, claiming 0.158 s focus and falling back to contrast detection in low light; hybrid AF began eating into pure contrast AF.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 5 月 Panasonic GH4 推出 DFD（Depth From Defocus）：用镜头的离焦特性数据从两张不同对焦位置的画面估算距离，减少反差 AF 来回搜索，速度接近单反。",
    "In May 2014 the Panasonic GH4 introduced DFD (Depth From Defocus): using the lens's defocus data, it estimates distance from two frames at different focus positions, cutting contrast-AF hunting to near-DSLR speed.",
    [
     6
    ]
   ],
   [
    2023,
    "end",
    "2023 年 1 月 Panasonic Lumix S5 II 终于加入 779 点相位检测（另有 315 点反差），坚持 DFD 最久的厂商也转向相位 + 反差混合；纯反差 AF 主流时代结束。",
    "In January 2023 the Panasonic Lumix S5 II finally added 779 phase-detection points (plus 315 contrast points); the last holdout for DFD moved to phase + contrast hybrid, ending the era of pure contrast AF as the mainstream.",
    [
     7
    ]
   ]
  ],
  "now": [
   "纯反差 AF 已不是主流，但它几乎在所有混合对焦系统里做最后的精确确认，也仍是低价监控摄像机、网络摄像头和部分手机副摄的主力。",
   "Pure contrast AF is no longer mainstream, but it still does the final fine confirmation in almost every hybrid AF system and remains the workhorse in low-cost surveillance cameras, webcams and some secondary phone cameras."
  ],
  "replaced": [
   "被传感器上的相位检测（PDAF、Dual Pixel、全像素四相位）和相位 + 反差混合对焦取代；它从主角变成混合对焦里的校验环节。",
   "Replaced by on-sensor phase detection (PDAF, Dual Pixel, all-pixel quad PD) and phase + contrast hybrid AF; it went from lead role to the verification step inside hybrid AF."
  ],
  "refs": [
   {
    "t": "US4531158A Automatic focusing system for video cameras, Hitachi (Google Patents)",
    "u": "https://patents.google.com/patent/US4531158A/en"
   },
   {
    "t": "Pentax ME F (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Pentax_ME_F"
   },
   {
    "t": "Hanma et al., Novel Technologies for Automatic Focusing and White Balancing of Solid State Color Video Camera (record)",
    "u": "https://manuscript.isc.ac/Inventory/49/824944.htm"
   },
   {
    "t": "NTT DoCoMo to Introduce P505iS: World's First Auto-Focus Camera Phone",
    "u": "https://www.docomo.ne.jp/english/info/media_center/pr/2003/001119.html"
   },
   {
    "t": "Panasonic Lumix DMC-G1 (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-G1"
   },
   {
    "t": "Fujifilm FinePix F300EXR (The Register)",
    "u": "https://www.theregister.com/2010/07/21/fujifilm_finepix_f300exr_z800exr/"
   },
   {
    "t": "Tech Insights: Panasonic's DFD autofocus technology (Imaging Resource)",
    "u": "https://www.imaging-resource.com/PRODS/panasonic-gh4/panasonic-gh4TECH.HTM"
   },
   {
    "t": "Panasonic's S5 II and S5 IIX Finally Bring Phase Detection AF to Lumix (PetaPixel)",
    "u": "https://petapixel.com/2023/01/04/panasonics-s5ii-and-s5iix-finally-bring-phase-detection-af-to-lumix"
   }
  ]
 },
 "motor": {
  "stages": [
   [
    1965,
    "idea",
    "1965 年 5 月苏联的 Lavrinenko 等提交“Electric Engine”发明人证书（#217509），提出用压电振动驱动转子，是超声波马达的早期源头。",
    "In May 1965 Lavrinenko and colleagues in the USSR filed author's certificate #217509 for an \"Electric Engine\" driving a rotor by piezoelectric vibration, an early root of the ultrasonic motor.",
    [
     0
    ]
   ],
   [
    1980,
    "proto",
    "1980 年 Shinsei 的指田年生（Toshiiku Sashida）做出实用超声波马达：早期用驻波加斜置鳍片，之后他与 Matsushita、ALPS、Canon 的研究者改用行波，实现双向旋转。",
    "In 1980 Toshiiku Sashida of Shinsei built a practical ultrasonic motor: early versions used standing waves with angled fins, and later work by him and researchers at Matsushita, ALPS and Canon used traveling waves for bidirectional rotation.",
    [
     0
    ]
   ],
   [
    1981,
    "mass",
    "1981 年 5 月 Canon New FD 35-70mm f/4 AF 上市（89,500 日元）：镜头上方的盒子里装 SST 测距和对焦马达，装在任何 FD 机身上都能自动对焦，Canon 称其为世界首支自动对焦变焦镜头。",
    "In May 1981 the Canon New FD 35-70mm f/4 AF went on sale (¥89,500): a box above the lens held SST ranging and a focus motor, so it autofocused on any FD body; Canon calls it the world's first AF zoom lens.",
    [
     1
    ]
   ],
   [
    1981,
    "ver",
    "1981 年 11 月 Pentax ME F 配套 SMC Pentax AF 35–70mm f/2.8：测距在机身、马达和 4 节 AAA 电池在镜头里，由机身指挥镜内马达。",
    "In November 1981 the Pentax ME F came with the SMC Pentax AF 35–70mm f/2.8: sensing in the body, motor and four AAA cells in the lens, with the body commanding the in-lens motor.",
    [
     2
    ]
   ],
   [
    1985,
    "rival",
    "1985 年 2 月 Minolta α-7000 走另一条路：AF 传感器和对焦马达都在机身，通过卡口螺丝刀耦合驱动镜头，镜头因此更小更便宜；Nikon 等也长期沿用机身马达。",
    "In February 1985 the Minolta α-7000 took the other route: AF sensor and motor both in the body, driving the lens via a screwdriver coupling, making lenses smaller and cheaper; Nikon and others kept body motors for years.",
    [
     3
    ]
   ],
   [
    1987,
    "mass",
    "1987 年 Canon 推出全电子 EF 卡口，每支镜头自带最合适的马达；同年 11 月 EF 300mm f/2.8L USM 成为全球第一支用环形超声波马达（ring USM）驱动对焦的单反镜头，快而安静。",
    "In 1987 Canon launched the all-electronic EF mount with a suitable motor built into each lens; in November the EF 300mm f/2.8L USM became the first SLR lens to drive AF with a ring ultrasonic motor, fast and quiet.",
    [
     4
    ]
   ],
   [
    1996,
    "ver",
    "1996 年 Nikon AF-S 300mm f/2.8D IF-ED 等首批采用 Silent Wave Motor（SWM），把行波转为旋转驱动对焦组；此前的 AF-I（1992）用无芯直流马达。",
    "In 1996 the Nikon AF-S 300mm f/2.8D IF-ED and peers were the first to use the Silent Wave Motor (SWM), turning traveling waves into rotation to drive the focus group; the earlier AF-I (1992) lenses used coreless DC motors.",
    [
     5
    ]
   ],
   [
    2012,
    "ver",
    "2012 年 6 月 Canon EF 40mm f/2.8 STM 成为第一支用步进马达（STM）的 EF 镜头，和 EOS 650D 同时发布，配合 Movie Servo 视频连续对焦，追求平顺静音；同期 Fujifilm 等也在新镜头上用线性马达做内对焦。",
    "In June 2012 the Canon EF 40mm f/2.8 STM became the first EF lens with a stepping motor (STM), launched with the EOS 650D for Movie Servo continuous video AF, prioritizing smooth, quiet focus; around the same time Fujifilm and others used linear motors for internal focusing in new lenses.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 6 月 Canon RF 35mm f/1.4L VCM 首次在 RF 镜头上用音圈马达（VCM），配合 Nano USM，主打静音、平顺和低呼吸效应的照片 / 视频混合镜头。",
    "In June 2024 the Canon RF 35mm f/1.4L VCM was the first RF lens with a voice coil motor (VCM), alongside Nano USM, as a quiet, smooth, low-breathing hybrid photo/video lens.",
    [
     7
    ]
   ]
  ],
  "now": [
   "镜内马达已是绝对主流：环形 / 线性超声波马达、步进 STM、线性马达和 VCM 并存，按镜片重量、速度和视频需求选型；手机镜头模组则普遍用 VCM。",
   "In-lens motors dominate: ring/linear ultrasonic, stepping STM, linear motors and VCM coexist, chosen by focus-group mass, speed and video needs; phone camera modules almost all use VCM."
  ],
  "replaced": [
   "早期的直流 / 无芯马达和机身螺丝刀驱动已被淘汰：无反相机卡口取消了机械耦合，全部改为镜内马达电子控制。",
   "Early DC/coreless motors and body screwdriver drive have been phased out: mirrorless mounts dropped mechanical coupling, moving entirely to electronically controlled in-lens motors."
  ],
  "refs": [
   {
    "t": "Ultrasonic motor (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Ultrasonic_motor"
   },
   {
    "t": "Canon New FD 35-70 mm f/4 AF (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_New_FD_35-70_mm_f/4_AF"
   },
   {
    "t": "Pentax ME F (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Pentax_ME_F"
   },
   {
    "t": "Minolta Maxxum 7000 (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Minolta_Maxxum_7000"
   },
   {
    "t": "Canon EF 300mm lens (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_EF_300mm_lens"
   },
   {
    "t": "Total Production of NIKKOR Lenses Reaches Fifty-Five Million (Nikon, 2010)",
    "u": "https://www.nikon.com/news/2010/0915_nikkor5500million_01.htm"
   },
   {
    "t": "Canon EF 40mm lens (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_EF_40mm_lens"
   },
   {
    "t": "Canon Announces RF35mm F1.4L VCM (Canon USA)",
    "u": "https://www.usa.canon.com/newsroom/2024/20240605-lens-flash"
   }
  ]
 },
 "ttlpd": {
  "stages": [
   [
    1976,
    "proto",
    "Leitz 在 1960–1973 年间申请了一批自动对焦专利，1976 年在 photokina 展出基于 Leicaflex SL2 改装的 Correfot 原型，但从未出售。",
    "Leitz filed a series of AF patents between 1960 and 1973 and showed the Correfot prototype, a modified Leicaflex SL2, at photokina 1976, but never sold it.",
    [
     0
    ]
   ],
   [
    1978,
    "paper",
    "Honeywell 的 Norman L. Stauffer 1978 年 6 月申请专利 US4185191（1980 年获批）：把通过主镜头上半部与下半部的光分开，用微透镜让成对的 CCD/CID 探测器各看一半出瞳，比较两组图样的相对位移即可得出离焦量和方向——这就是 TTL 相位检测的核心。",
    "Honeywell's Norman L. Stauffer filed US4185191 in June 1978 (granted 1980): split light through the upper and lower halves of the main lens, use microlenses so paired CCD/CID detectors each see half the exit pupil, and compare the shift between the two patterns to get defocus amount and direction — the core of TTL phase detection.",
    [
     1
    ]
   ],
   [
    1985,
    "mass",
    "1985 年 2 月 Minolta α-7000（Maxxum 7000）发售：TTL 相位检测配水平 CCD 线阵，AF 传感器和对焦马达都在机身，一次测量就算出方向和距离，是第一台机身集成自动对焦的单反。",
    "The Minolta α-7000 (Maxxum 7000) launched in February 1985: TTL phase detection with a horizontal CCD line array, AF sensor and motor both in the body, getting direction and distance in one measurement; the first SLR with integrated AF, EISA European Camera of the Year 1985.",
    [
     2
    ]
   ],
   [
    1987,
    "ver",
    "1987 年 3 月 Canon EOS 650 用自研 BASIS（Base-Stored Image Sensor）单点水平线阵做相位检测，配全电子 EF 卡口，此后到 1992 年多款 EOS 沿用。",
    "In March 1987 the Canon EOS 650 used Canon's own BASIS (Base-Stored Image Sensor), a single horizontal line sensor, for phase detection with the all-electronic EF mount; several EOS models used it through 1992.",
    [
     3
    ]
   ],
   [
    1989,
    "ver",
    "1989 年 9 月 Canon EOS-1 换上十字型 CT-BASIS，同时检测横竖两个方向的线条，对焦更稳。",
    "In September 1989 the Canon EOS-1 adopted a cross-type CT-BASIS sensor, detecting both horizontal and vertical detail for steadier focus.",
    [
     3
    ]
   ],
   [
    1992,
    "rival",
    "1992 年 2 月美国联邦陪审团裁定 Minolta 侵犯 Honeywell 自动对焦专利、须赔 9,635 万美元，随后以 1.275 亿美元和解；之后多家日本厂商也向 Honeywell 付费。",
    "In February 1992 a US federal jury found Minolta had infringed Honeywell's autofocus patents and awarded $96.35 million; the case settled for $127.5 million, and other Japanese makers later paid Honeywell too.",
    [
     4
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 8 月 Nikon D3 的 Multi-CAM 3500FX 模块有 51 个点、15 个十字型，并借 1005 像素 RGB 测光传感器做色彩追踪。",
    "In August 2007 the Nikon D3's Multi-CAM 3500FX module had 51 points, 15 cross-type, and used a 1005-pixel RGB metering sensor for color tracking.",
    [
     5
    ]
   ],
   [
    2013,
    "rival",
    "2013 年 Canon EOS 70D 推出 Dual Pixel CMOS AF：每个像素分成两个光电二极管，整片传感器都能做相位检测，实时取景和视频对焦不再依赖反光镜后的模块。",
    "In 2013 the Canon EOS 70D introduced Dual Pixel CMOS AF: each pixel is split into two photodiodes so the whole sensor does phase detection, freeing live-view and video AF from the module behind the mirror.",
    [
     6
    ]
   ],
   [
    2022,
    "end",
    "2022 年 7 月日经报道 Nikon 停止开发新单反、专注无反（Nikon 称是推测，但此后再无新单反）；反光镜后的独立相位检测模块随单反一起退场。",
    "In July 2022 Nikkei reported Nikon had stopped developing new SLRs to focus on mirrorless (Nikon called it speculation, but no new DSLR followed); the dedicated phase-detection module behind the mirror is leaving along with the DSLR.",
    [
     7
    ]
   ]
  ],
  "now": [
   "独立 TTL 相位检测模块只留在存量单反里；相位检测本身没有消失，而是搬到了成像传感器上（PDAF、Dual Pixel、四相位全像素），成为无反和手机的主力。",
   "Dedicated TTL phase-detection modules survive only in existing DSLRs; phase detection itself lives on, moved onto the image sensor (PDAF, Dual Pixel, quad-pixel all-pixel PD) as the mainstay of mirrorless cameras and phones."
  ],
  "replaced": [
   "被传感器上的相位检测取代：无需副反光镜和校准，覆盖全画面，可与反差检测和 AI 主体识别直接结合。",
   "Replaced by on-sensor phase detection: no sub-mirror or calibration, full-frame coverage, and direct integration with contrast detection and AI subject recognition."
  ],
  "refs": [
   {
    "t": "Autofocus Turns 50 in 2027, and the Camera That Started It Was a Konica (Fstoppers)",
    "u": "https://fstoppers.com/originals/autofocus-turns-50-2027-and-camera-started-it-was-konica-903887"
   },
   {
    "t": "US4185191A Range determination system, Honeywell (Google Patents)",
    "u": "https://patents.google.com/patent/US4185191A/en"
   },
   {
    "t": "Minolta Maxxum 7000 (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Minolta_Maxxum_7000"
   },
   {
    "t": "Canon Phase Detection AF Sensor Evolution",
    "u": "https://exclusivearchitecture.com/03-technical-articles-AFSE-02-1-PT.html"
   },
   {
    "t": "Minolta ordered to pay $96 million for patent violation (Deseret News, 1992)",
    "u": "https://www.deseret.com/1992/2/8/18966562/minolta-ordered-to-pay-96-million-for-patent-violation/"
   },
   {
    "t": "Nikon D3 In-depth Review (DPReview)",
    "u": "https://www.dpreview.com/reviews/nikond3"
   },
   {
    "t": "Canon EOS 70D (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_70D"
   },
   {
    "t": "Nikon is Exiting the DSLR Market: Report (PetaPixel)",
    "u": "https://petapixel.com/2022/07/12/nikon-to-withdraw-from-the-dslr-market-immediately-report"
   }
  ]
 },
 "predict": {
  "stages": [
   [
    1985,
    "idea",
    "第一代自动对焦单反（如 1985 年的 α-7000）在连续 AF 下只对“测量那一刻”的位置合焦，从测距到快门开启之间主体还在移动，拍运动物体常常跑焦；Minolta 把“预测曝光瞬间主体位置”列为第二代机身的目标。",
    "First-generation AF SLRs such as the 1985 α-7000 focused, in continuous AF, on where the subject was at the moment of measurement; the subject kept moving before the shutter opened, so moving subjects were often missed. Minolta set \"predict the subject's position at the instant of exposure\" as the goal of its second-generation bodies.",
    [
     0
    ]
   ],
   [
    1988,
    "mass",
    "1988 年 Minolta 7000i（日本 α-7700i，北美 Maxxum 7000i）推出 Predictive AF：连续测量主体距离变化，推算快门开启时的位置并提前驱动镜头，还能自动选用哪个对焦传感器、在单次与连续 AF 间自动切换。",
    "In 1988 the Minolta 7000i (α-7700i in Japan, Maxxum 7000i in North America) introduced Predictive AF: it measured the subject's changing distance, extrapolated its position when the shutter would open and drove the lens ahead, while also choosing the active sensor and switching between single and continuous AF automatically.",
    [
     1,
     0
    ]
   ],
   [
    1988,
    "paper",
    "Canon 的 Ohnuki、Akashi、Kadohara、Higashihara 于 1988 年 5 月申请专利（US4969003）：用过去三次对焦检测数据拟合二次函数描述像面运动，预测未来镜头位置，先位置控制再转为匀速跟踪，减少马达频繁启停。",
    "Canon's Ohnuki, Akashi, Kadohara and Higashihara filed a patent in May 1988 (US4969003): fit a quadratic to the last three focus detections to model image-plane motion, predict future lens positions, and move from position control to constant-speed tracking to avoid frequent motor start-stops.",
    [
     2
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 8 月 Nikon D3（及同年 D300）推出 3D 追踪：借 1005 像素 RGB 测光传感器的色彩与亮度信息，在 51 个 AF 点之间自动切换跟住主体，追焦从“预测距离”扩展到“画面中跨点跟踪”。",
    "In August 2007 the Nikon D3 (and the D300) introduced 3D tracking: using color and brightness from a 1005-pixel RGB metering sensor, it automatically switched among 51 AF points to follow the subject, extending tracking from predicting distance to following it across the frame.",
    [
     3
    ]
   ],
   [
    2012,
    "ver",
    "2012 年 6 月 Canon EOS-1D X 推出 EOS iTR AF：用 10 万像素 RGB 测光传感器配 DIGIC 4 识别人脸和目标色彩，在 61 点间跟踪运动主体。",
    "In June 2012 the Canon EOS-1D X introduced EOS iTR AF: a 100,000-pixel RGB metering sensor with DIGIC 4 recognized faces and target colors to track moving subjects across 61 points.",
    [
     4
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 1 月 Sony α6400 推出 Real-time Tracking：在成像传感器上用含 AI 物体识别的算法，综合色彩、距离（深度）和亮度图案追踪主体，并配实时眼部对焦。",
    "In January 2019 the Sony α6400 introduced Real-time Tracking: on the image sensor, an algorithm with AI object recognition combined color, distance (depth) and brightness pattern to track subjects, along with Real-time Eye AF.",
    [
     5
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 Canon EOS-1D X Mark III 首次在 Canon 相机里用深度学习算法做主体检测与追踪，这套“智能自动对焦”随后用于 EOS R3、R5、R6 等无反机。",
    "In 2020 the Canon EOS-1D X Mark III first used deep-learning algorithms for subject detection and tracking in a Canon camera; this intelligent AF then carried over to mirrorless models such as the EOS R3, R5 and R6.",
    [
     6
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 Canon EOS R3 的 Dual Pixel CMOS AF II 搭载深度学习的 EOS iTR AF X，新增赛车 / 摩托车识别，并首次在 EOS 数码相机上提供眼控对焦（Eye Control AF），用取景器内红外 LED 和传感器追踪视线选点。",
    "In 2021 the Canon EOS R3's Dual Pixel CMOS AF II carried deep-learning EOS iTR AF X, added motorsport vehicle detection, and offered Eye Control AF for the first time on an EOS digital camera, tracking the photographer's gaze with infrared LEDs and sensors in the viewfinder.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 10 月 Sony α7R V 加入独立 AI 处理单元，用人体姿态估计识别约 20 个关键点，主体背对或戴口罩也能跟住，眼部识别提升约 60%。",
    "In October 2022 the Sony α7R V added a dedicated AI processing unit using human pose estimation of about 20 body points, tracking subjects facing away or masked and improving eye recognition by about 60%.",
    [
     7
    ]
   ]
  ],
  "now": [
   "预测追焦已是所有中高端相机的标配，算法与深度学习主体识别（人眼、人体姿态、动物、车辆）融合，在传感器上的相位检测数据上逐帧运行。",
   "Predictive tracking is standard on every mid-to-high-end camera, fused with deep-learning subject recognition (eyes, body pose, animals, vehicles) and running frame by frame on on-sensor phase-detection data."
  ],
  "replaced": [
   "没有被淘汰，而是被吸收：早期只看距离的预测追焦，演变为依赖 RGB 测光传感器的色彩追踪，再演变为成像传感器上的 AI 主体识别追踪。",
   "Not retired but absorbed: early distance-only prediction evolved into color tracking via RGB metering sensors, and then into AI subject-recognition tracking on the image sensor."
  ],
  "refs": [
   {
    "t": "Minolta Levels-Up the Intelligence with the i series AF Bodies (Vintage Camera Digest)",
    "u": "https://vintagecameradigest.com/2024/07/11/minolta-levels-up-the-intelligence-with-the-i-series-af-bodies/"
   },
   {
    "t": "Minolta Maxxum 7000i (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Minolta_Maxxum_7000i"
   },
   {
    "t": "US4969003A Autofocus device, Canon (Google Patents)",
    "u": "https://patents.google.com/patent/US4969003"
   },
   {
    "t": "Nikon D3 In-depth Review (DPReview)",
    "u": "https://www.dpreview.com/reviews/nikond3"
   },
   {
    "t": "Canon EOS-1D X (Wikipedia)",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS-1D_X"
   },
   {
    "t": "This is Sony's New Real-Time Tracking in Action (PetaPixel)",
    "u": "https://petapixel.com/2019/01/22/this-is-sonys-new-real-time-tracking-autofocus-in-action"
   },
   {
    "t": "Exploring Canon's intelligent autofocus system (Canon Europe)",
    "u": "https://www.canon-europe.com/pro/stories/intelligent-autofocus-explained/"
   },
   {
    "t": "Sony's New Alpha 7RV Camera Offers Next-Generation Autofocus (Sony Europe)",
    "u": "https://www.sony.eu/presscentre/sonys-new-alpha-7rv-camera-offers-next-generation-autofocus-technologies-using-an-advanced-ai-processing-unit"
   }
  ]
 },
 "cross": {
  "stages": [
   [
    1987,
    "corp",
    "Canon 首台 EOS 机身 EOS 650 采用自研 BASIS（Base-Stored Image Sensor）线阵 AF 传感器；单方向线阵只对与线阵垂直方向的明暗变化敏感，遇到与线阵平行的横纹就容易失焦。",
    "Canon's first EOS body, the EOS 650, used its in-house BASIS (Base-Stored Image Sensor) line-array AF sensor; a one-direction line array only sees contrast across the line, so it struggles with stripes running parallel to it.",
    [
     0
    ]
   ],
   [
    1989,
    "mass",
    "1989 年 9 月 Canon EOS-1 上市（机身 189,000 日元），中央单点首次用十字型 CT-BASIS：47 bit 横向线阵 + 29 bit 纵向线阵，灵敏度为 EOS 650 BASIS 的 4 倍，可在 EV -1 对焦，专为对上横线条主体而开发，并配合预测式 AI Servo。",
    "The Canon EOS-1 went on sale in September 1989 (¥189,000 body) with the first cross-type CT-BASIS centre point: a 47-bit horizontal plus 29-bit vertical array, four times as sensitive as the EOS 650's BASIS, focusing down to EV -1 and developed to lock onto horizontally-lined subjects, paired with predictive AI Servo.",
    [
     0,
     1
    ]
   ],
   [
    1991,
    "ver",
    "Canon EOS 100 把十字型下放到中端机：改为「标准精度」十字（42 bit 横 / 34 bit 纵），f/5.6 及更亮镜头可用，工作范围 EV 0–18，仍是单点。",
    "The Canon EOS 100 brought cross-type to the mid-range as a 'standard-precision' cross (42-bit horizontal / 34-bit vertical), usable with f/5.6 or faster lenses over EV 0–18, still a single point.",
    [
     1
    ]
   ],
   [
    1996,
    "ver",
    "1996 年 10 月 Nikon F5 的 Multi-CAM 1300 模块有 5 个对焦区，其中中央、左、右 3 个是全时十字型，每个由两种 CCD 线阵组成，十字型从单点走向多点。",
    "The Nikon F5 (October 1996) Multi-CAM 1300 module had five AF areas, three of them (centre, left, right) full-time cross-type built from two kinds of CCD line sensors, taking cross-type from one point to several.",
    [
     2
    ]
   ],
   [
    2009,
    "ver",
    "Canon EOS 7D 的 19 点 AF 全部是十字型（f/5.6 下横竖两向都工作），把「全十字」带到 APS-C 机身。",
    "All 19 AF points of the Canon EOS 7D were cross-type (both orientations working at f/5.6), bringing an all-cross array to APS-C.",
    [
     3
    ]
   ],
   [
    2012,
    "ver",
    "Canon EOS-1D X 的 61 点 High-Density Reticular AF 有 41 个十字点，其中中央 5 点为 f/2.8 双十字（横竖之外再加两条斜线）。",
    "The Canon EOS-1D X's 61-point High-Density Reticular AF had 41 cross-type points, including five centre dual-cross points (two diagonals on top of horizontal and vertical) at f/2.8.",
    [
     3
    ]
   ],
   [
    2013,
    "rival",
    "Canon EOS 70D 首发 Dual Pixel CMOS AF：每个像素左右分成两个光电二极管，全幅面做像面相位检测；但分割只有一个方向，只能检测竖线，相当于又回到「单方向线阵」。",
    "The Canon EOS 70D debuted Dual Pixel CMOS AF, splitting every pixel into left and right photodiodes for image-plane phase detection across the frame; but the split runs one way and detects vertical lines only, effectively a single-direction array again.",
    [
     4,
     7
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 2 月 Samsung 发布并已量产 50MP ISOCELL GN2，Dual Pixel Pro 把绿色像素沿对角线分割，同时读出左右和上下相位差，约 1 亿个相位二极管，让手机像面相位对焦也能对横纹。",
    "In February 2021 Samsung announced the already mass-produced 50MP ISOCELL GN2, whose Dual Pixel Pro splits green pixels diagonally to read both left-right and top-bottom phase, with some 100 million phase photodiodes, letting phone image-plane PDAF handle horizontal stripes.",
    [
     5
    ]
   ],
   [
    2021,
    "end",
    "2021 年 12 月 Canon 确认 EOS-1D X Mark III（191 点、155 点十字）是最后一台旗舰单反，此后旗舰全部转向无反；独立的十字型 AF 模块随单反退出主线。",
    "In December 2021 Canon confirmed the EOS-1D X Mark III (191 points, 155 cross-type) would be its last flagship DSLR, with future flagships mirrorless only; the dedicated cross-type AF module left the mainstream with the DSLR.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Canon EOS R1 首次在 Dual Pixel CMOS AF 中实现十字型：每隔一行把双像素旋转 90°，横线检测精度与原来的竖线检测相当，追踪时近 100% 画面可用十字对焦。",
    "The Canon EOS R1 brought cross-type to Dual Pixel CMOS AF for the first time by rotating every other row of dual pixels 90°, matching horizontal-line detection to the old vertical-line performance and offering cross-type AF across nearly 100% of the frame while tracking.",
    [
     7
    ]
   ]
  ],
  "now": [
   "十字型从单反独立 AF 模块转到像面：Canon EOS R1 的旋转双像素、Samsung Dual Pixel Pro 一类全向相位像素，让传感器本身同时看横竖两向。",
   "Cross-type has moved from the DSLR AF module to the image plane: the EOS R1's rotated dual pixels and omni-directional phase pixels such as Samsung's Dual Pixel Pro let the sensor itself see both orientations."
  ],
  "replaced": [
   "作为独立 AF 模块上的十字线阵，已随单反退出；概念由像面全向相位检测继承。",
   "As a cross-shaped line array in a dedicated AF module it has gone with the DSLR; the idea lives on as omni-directional image-plane phase detection."
  ],
  "refs": [
   {
    "t": "Canon Camera Museum：EOS-1",
    "u": "https://global.canon/en/c-museum/product/film132.html"
   },
   {
    "t": "Canon Phase Detection AF Sensor Evolution（CT-BASIS 一、二代）",
    "u": "https://exclusivearchitecture.com/03-technical-articles-AFSE-02-1-PT.html"
   },
   {
    "t": "Nikon：Debut of Nikon F5",
    "u": "https://imaging.nikon.com/history/chronicle/history-f5/"
   },
   {
    "t": "The-Digital-Picture：Canon EOS DSLR Autofocus Explained",
    "u": "https://www.the-digital-picture.com/Photography-Tips/Canon-EOS-DSLR-Autofocus-Explained.aspx"
   },
   {
    "t": "Canon Dual Pixel CMOS AF（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Canon_Dual_Pixel_CMOS_AF"
   },
   {
    "t": "PetaPixel：Samsung ISOCELL GN2 Dual Pixel Pro",
    "u": "https://petapixel.com/2021/02/23/samsung-unveils-new-50mp-sensor-with-next-gen-dual-pixel-autofocus"
   },
   {
    "t": "PetaPixel：Canon Confirms We've Seen Its Last Flagship DSLR",
    "u": "https://petapixel.com/2021/12/28/canon-confirms-weve-seen-its-last-flagship-dslr/"
   },
   {
    "t": "Canon Technology：EOS R1",
    "u": "https://global.canon/en/technology/r1-2024.html"
   }
  ]
 },
 "touch": {
  "stages": [
   [
    2005,
    "mass",
    "2005 年 10 月 Sony 发布 Cyber-shot DSC-N1（11 月上市，约 500 美元），是首台触摸操作的 Cyber-shot；3 英寸触摸屏提供「Free Spot Focus」：点屏幕即可对偏离中心的主体对焦，也可点选点测光。",
    "In October 2005 Sony announced the Cyber-shot DSC-N1 (on sale in November for about $500), the first touch-operated Cyber-shot; its 3-inch touchscreen offered 'Free Spot Focus': tap to focus on an off-centre subject, or tap for spot metering.",
    [
     0
    ]
   ],
   [
    2007,
    "ver",
    "Sony DSC-T200 / T70（2007 年 9 月上市，约 400 / 300 美元）把触摸对焦和人脸检测结合：可在屏幕上直接选要对焦的主体，或在人脸检测找到的多个目标中点选。",
    "The Sony DSC-T200 and T70 (on sale September 2007 for about $400 and $300) combined touch focus with face detection: tap the subject to focus on, or pick among targets found by face detection.",
    [
     1
    ]
   ],
   [
    2008,
    "ver",
    "2008 年 3 月 Panasonic 发布自家首台触屏机 Lumix DMC-FX500（3 英寸触屏、25mm 广角、5× 变焦，5 月上市 399.95 美元），点主体即同时设定 AF/AE；它不是最早的触屏相机。",
    "In March 2008 Panasonic announced its first touchscreen camera, the Lumix DMC-FX500 (3-inch touchscreen, 25mm wide, 5× zoom, shipping May at $399.95); touching a subject set both AF and AE, though it was not the first touchscreen camera.",
    [
     2
    ]
   ],
   [
    2009,
    "ver",
    "2009 年 6 月 8 日 Apple 发布 iPhone 3GS，3MP 自动对焦相机加入「tap to focus」：点屏幕选中物体或区域，同时重调对焦和曝光，把触摸对焦带进大众手机。",
    "On 8 June 2009 Apple announced the iPhone 3GS, whose 3MP autofocus camera added 'tap to focus': touch an object or area and focus and exposure readjust, bringing touch focus to mass-market phones.",
    [
     3
    ]
   ],
   [
    2010,
    "ver",
    "2010 年 3 月 Panasonic Lumix DMC-G2 号称首台带可动触控屏的可换镜头相机：可在实时取景中点选对焦点，点中主体后进入 AF Tracking 持续追踪，还可触摸快门。",
    "In March 2010 the Panasonic Lumix DMC-G2 was billed as the first interchangeable-lens camera with an articulated touch LCD: tap to choose the focus point in live view, tapping a subject starts AF Tracking, and a touch shutter was available.",
    [
     4
    ]
   ],
   [
    2011,
    "ver",
    "此后 Panasonic 所有 MFT 机身都保留触摸选对焦点；Olympus PEN E-P3 与 Sony NEX 系列也加入触屏对焦，触摸 AF 成为无反标配。",
    "Every Panasonic MFT body after the G2 kept touch focus-point selection, and the Olympus PEN E-P3 and Sony's NEX line added touch focus too, making touch AF standard on mirrorless cameras.",
    [
     4
    ]
   ],
   [
    2012,
    "ver",
    "Canon EOS 650D / Rebel T4i 是首台触屏单反，采用电容式多点触控屏，实时取景下可点选 AF 点、追踪人脸和物体并触摸拍摄。",
    "The Canon EOS 650D / Rebel T4i was the first touchscreen DSLR, with a capacitive multi-touch panel; in Live View it could tap to select the AF point, track faces and objects, and shoot by touch.",
    [
     5
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 9 月 Canon EOS M5 加入 Touch & Drag AF：眼睛贴着 EVF 时用拇指在背屏拖动对焦框，可设定有效触控区域，把触摸对焦变成「触控板」。",
    "In September 2016 the Canon EOS M5 added Touch & Drag AF: with the eye at the EVF, the thumb drags the AF frame on the rear screen within a configurable active area, turning touch focus into a touchpad.",
    [
     6
    ]
   ],
   [
    2021,
    "ver",
    "iPhone 13 系列 Cinematic 模式：点人物即切换焦点（rack focus），再点一次锁定并追踪；拍完还能在编辑时重新选择焦点。",
    "The iPhone 13's Cinematic mode: tap a person to rack focus, tap again to lock and track, and re-pick the focus point after shooting.",
    [
     7
    ]
   ]
  ],
  "now": [
   "触摸对焦已是相机、手机标配，并与主体识别结合：点一下即进入追踪，视频里点选切焦，部分手机可拍后改焦点。",
   "Touch focus is standard on cameras and phones and now hands off to subject recognition: one tap starts tracking, taps rack focus in video, and some phones let focus be changed after shooting."
  ],
  "replaced": [
   "未被淘汰；主体识别普及后，它更多用于从多个识别目标里选哪一个。Canon EOS R3（2021）的眼控对焦是另一种选点方式。",
   "Not replaced; with subject recognition widespread it is mainly used to choose which detected subject to follow. Canon's Eye Control AF on the EOS R3 (2021) is an alternative way to pick the point."
  ],
  "refs": [
   {
    "t": "Photo Review：Sony Cyber-shot DSC-N1",
    "u": "https://www.photoreview.com.au/reviews/advanced-compact-cameras/sony-cyber-shot-dsc-n1/"
   },
   {
    "t": "Sony 2007 T200/T70 新闻稿",
    "u": "https://sony.mediaroom.com/2007-08-21-Latest-Sony-Cyber-shot-T-series-Cameras-Bring-New-Focus-And-Smiles-To-Point-And-Shoot-Users"
   },
   {
    "t": "DPReview：Panasonic announces Lumix DMC-FX500",
    "u": "https://www.dpreview.com/articles/7441474943/panasonicfx500"
   },
   {
    "t": "Apple Newsroom：iPhone 3GS（2009）",
    "u": "https://www.apple.com/newsroom/2009/06/08Apple-Announces-the-New-iPhone-3GS-The-Fastest-Most-Powerful-iPhone-Yet/"
   },
   {
    "t": "Panasonic Lumix DMC-G2（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-G2"
   },
   {
    "t": "Imaging Resource：Touchscreen Canon T4i",
    "u": "https://www.imaging-resource.com/news/touchscreen-canon-t4i-slr-two-new-lenses-unveiled-previewed/"
   },
   {
    "t": "PetaPixel：Canon Unveils the EOS M5",
    "u": "https://petapixel.com/2016/09/15/canon-unveils-eos-m5-aps-c-mirrorless-evf-finally"
   },
   {
    "t": "9to5Mac：iPhone 13 Cinematic mode capabilities",
    "u": "https://9to5mac.com/2021/09/16/iphone-13-cinematic-mode-capabilities/"
   }
  ]
 },
 "dfd": {
  "stages": [
   [
    1987,
    "paper",
    "MIT Media Lab 的 Alex Pentland 在 IEEE PAMI 发表《A New Sense for Depth of Field》（9:523–531），提出通过测量边缘的模糊程度推算距离，是 Depth from Defocus 的奠基论文。",
    "Alex Pentland of the MIT Media Lab published 'A New Sense for Depth of Field' in IEEE PAMI (9:523–531), recovering distance by measuring edge blur, the founding paper of depth from defocus.",
    [
     0
    ]
   ],
   [
    1994,
    "paper",
    "Stony Brook 的 Murali Subbarao 与 Gopal Surya 在 IJCV 发表《Depth from defocus: A spatial domain approach》（13:271–294），用空间域卷积/反卷积变换，从两幅不同相机参数的图像求距离，计算量小、适合实时。",
    "Murali Subbarao and Gopal Surya (Stony Brook) published 'Depth from defocus: A spatial domain approach' in IJCV (13:271–294), using a spatial-domain convolution/deconvolution transform on two images taken with different camera settings, cheap enough for real time.",
    [
     0
    ]
   ],
   [
    1995,
    "proto",
    "Columbia University 的 Shree K. Nayar、Masahiro Watanabe、Minori Noguchi 做出实时 focus range sensor 原型：配合优化的投射照明图案，以 30 Hz 输出 512×480 深度图，平均 RMS 误差 0.2%（ICCV 1995，1996 年刊于 IEEE PAMI）。",
    "Shree K. Nayar, Masahiro Watanabe and Minori Noguchi at Columbia built a real-time focus range sensor prototype: with an optimised projected illumination pattern it output 512×480 depth maps at 30 Hz with 0.2% average RMS error (ICCV 1995, IEEE PAMI 1996).",
    [
     1
    ]
   ],
   [
    2010,
    "corp",
    "据 Panasonic 高管 2014 年受访所述，DFD 在 GH4 发布前已研发约四年（约 2010 年起），核心是为每支 Lumix G 镜头建立散焦（bokeh）特性数据，这些数据对 Olympus、Sigma 等其他镜头厂不可用。",
    "Panasonic executives said in 2014 that DFD had been in development for about four years before the GH4 (from around 2010), built on defocus (bokeh) profiles for each Lumix G lens that other makers such as Olympus or Sigma do not have.",
    [
     2
    ]
   ],
   [
    2013,
    "rival",
    "对手同期转向像面相位检测：Canon EOS 70D（2013 年 7 月）的 Dual Pixel CMOS AF 让全部有效像素兼做相位检测；Panasonic 则以 AF 像素会损失画质为由坚持对比度 AF 路线。",
    "Rivals moved to image-plane phase detection at the time: the Canon EOS 70D's Dual Pixel CMOS AF (July 2013) made every effective pixel a phase-detection pixel, while Panasonic stayed with contrast AF, arguing AF pixels cost image quality.",
    [
     3,
     7
    ]
   ],
   [
    2014,
    "mass",
    "2014 年 Panasonic Lumix DMC-GH4 首发 DFD AF：比较一近一远两张图像的离焦区域，结合镜头数据算出主体距离和方向，先快速驱动到附近再由对比度 AF 精修，标称 0.07 秒；只对 Panasonic 自家镜头生效。",
    "In 2014 the Panasonic Lumix DMC-GH4 debuted DFD AF: comparing the out-of-focus areas of a near and a far frame with lens data to compute distance and direction, driving close fast and finishing with contrast AF, rated at 0.07 s; Panasonic lenses only.",
    [
     2,
     4
    ]
   ],
   [
    2017,
    "ver",
    "Lumix GH5 把 DFD 扩展到 225 区对比度 AF；同年 11 月的 G9 沿用 225 区，配合最高 480 fps 的传感器读出，标称 0.04 秒，AF-C 下 20 fps 连拍。",
    "The Lumix GH5 extended DFD to 225-area contrast AF; November's G9 kept 225 areas and paired them with up to 480 fps sensor readout for a rated 0.04 s and 20 fps bursts with AF-C.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 1 月全画幅 Lumix S5II 首次加入 779 点 Phase Hybrid AF：按场景在相位检测和对比度+DFD 之间自动切换，DFD 从主角变成混合 AF 的一部分。",
    "In January 2023 the full-frame Lumix S5II added 779-point Phase Hybrid AF, switching automatically between phase detection and contrast+DFD by scene, demoting DFD from lead role to part of a hybrid.",
    [
     6
    ]
   ],
   [
    2023,
    "end",
    "2023 年 9 月 Lumix G9 II 成为首台带相位对焦的 Panasonic MFT 机（779 个相位点 + 315 个对比度点，仍含 DFD），纯对比度 + DFD 方案在 Panasonic 产品线上就此结束。",
    "In September 2023 the Lumix G9 II became Panasonic's first MFT body with phase-detect AF (779 phase points plus 315 contrast points, DFD still included), ending pure contrast+DFD AF in the Panasonic line.",
    [
     7
    ]
   ]
  ],
  "now": [
   "Panasonic 新机（S5II、G9 II、GH7 等）都是相位检测 + 对比度/DFD 的 Phase Hybrid AF；DFD 仍作为判断方向和距离的辅助保留。",
   "New Panasonic bodies (S5II, G9 II, GH7 and others) use Phase Hybrid AF combining phase detection with contrast/DFD; DFD stays on as an aid for direction and distance."
  ],
  "replaced": [
   "作为主力 AF 已被像面相位检测取代；2023 年 S5II / G9 II 之后 Panasonic 也改用混合相位对焦。",
   "As the primary AF it was replaced by image-plane phase detection; Panasonic itself moved to hybrid phase AF with the S5II and G9 II in 2023."
  ],
  "refs": [
   {
    "t": "Depth from focus/defocus 教程（Paolo Favaro, CVonline）",
    "u": "https://homepages.inf.ed.ac.uk/rbf/CVonline/LOCAL_COPIES/FAVARO1/dfdtutorial.html"
   },
   {
    "t": "Nayar, Watanabe, Noguchi：Real-Time Focus Range Sensor（ICCV 1995）",
    "u": "https://mlanthology.org/iccv/1995/nayar1995iccv-real"
   },
   {
    "t": "Imaging Resource：Panasonic Q&A Part I（DFD）",
    "u": "https://www.imaging-resource.com/news/2014/06/05/panasonic-executive-interview-part-i-why-no-long-teles-and-depth-from-defoc"
   },
   {
    "t": "Canon Dual Pixel CMOS AF（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Canon_Dual_Pixel_CMOS_AF"
   },
   {
    "t": "Imaging Resource：Panasonic GH4 Tech Insights（DFD）",
    "u": "https://www.imaging-resource.com/PRODS/panasonic-gh4/panasonic-gh4TECH.HTM"
   },
   {
    "t": "Cameralabs：Panasonic Lumix G9 review",
    "u": "https://www.cameralabs.com/panasonic-lumix-g9-review"
   },
   {
    "t": "Panasonic：LUMIX S5IIX / S5II deliver Phase Hybrid AF",
    "u": "https://www.panasonic.com/au/corporate/news/articles/benchmark-lumix-s-series-cameras-unveiled-s5iix-and-s5ii-deliver-phase-hybrid-af-and-active-is.html"
   },
   {
    "t": "Engadget：Lumix G9 II is Panasonic's first MFT camera with hybrid AF",
    "u": "https://www.engadget.com/panasonics-lumix-g9-ii-is-its-first-micro-four-thirds-camera-with-hybrid-autofocus-140036804.html"
   }
  ]
 },
 "subj": {
  "stages": [
   [
    2005,
    "mass",
    "2005 年 2 月 Nikon 发布业界首个 Face-priority AF，搭载于 Coolpix 7900 / 5900 / 7600：人像模式下扫描人脸并按其位置控制对焦，是「相机自己决定对哪里」的起点。",
    "In February 2005 Nikon announced the industry's first Face-priority AF on the Coolpix 7900, 5900 and 7600: in portrait mode the camera finds faces and drives focus to them, the start of the camera deciding where to focus.",
    [
     0
    ]
   ],
   [
    2012,
    "paper",
    "University of Toronto 的 Alex Krizhevsky、Ilya Sutskever、Geoffrey Hinton 在 NIPS 2012 发表 AlexNet：6000 万参数的深度卷积网络在 ImageNet 分类上大幅领先此前方法，开启深度学习识别时代，为机内多类主体识别铺路。",
    "Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton (University of Toronto) published AlexNet at NIPS 2012: a 60-million-parameter deep CNN beat previous ImageNet results by a wide margin, opening the deep-learning recognition era that later enabled in-camera multi-class detection.",
    [
     1
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 1 月 Olympus OM-D E-M1X 首发 Intelligent Subject Detection AF：双 TruePic VIII 共八核运行深度学习算法，识别赛车/摩托、火车、飞机并锁定最佳部位，每类用数万张图训练；2 月上市，2,999.99 美元。",
    "In January 2019 the Olympus OM-D E-M1X debuted Intelligent Subject Detection AF: eight cores across dual TruePic VIII engines ran deep-learning models to recognise motorsports, trains and aircraft and lock onto the best part, each class trained on tens of thousands of images; on sale in February at $2,999.99.",
    [
     2
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 1 月 Sony α6400 引入基于 AI 的 Real-time Tracking 与 Real-time Eye AF，主体追踪开始由 AI 识别驱动。",
    "In January 2019 the Sony α6400 introduced AI-based Real-time Tracking and Real-time Eye AF, putting AI recognition behind subject tracking.",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 4 月 Sony α7 III / α7R III 固件 3.0 把 Real-time Tracking、Real-time Eye AF 带到全画幅，并加入动物眼部 AF，识别从人扩展到动物。",
    "In April 2019 firmware 3.0 brought Real-time Tracking and Real-time Eye AF to the full-frame α7 III / α7R III and added Animal Eye AF, extending recognition from people to animals.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 1 月 6 日 Canon EOS-1D X Mark III 用深度学习分析体育照片数据库，得到头部检测算法（EOS iTR AF X），人脸被遮挡、戴墨镜或面罩时仍能追住头部；这是 Canon 首个深度学习 AF。",
    "On 6 January 2020 the Canon EOS-1D X Mark III added a head-detection algorithm learned from a database of sports photos (EOS iTR AF X), keeping hold of heads when faces were hidden by masks, sunglasses or motion; Canon's first deep-learning AF.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 Canon EOS R3 加入车辆识别（「Vehicles」模式）：识别方程式、GT、拉力赛车和公路/越野摩托，并可追踪车手头盔，是对 E-M1X 车辆类别的跟进。",
    "In 2021 the Canon EOS R3 added vehicle detection ('Vehicles' mode) for formula, GT and rally cars and road/off-road motorcycles, able to track the rider's helmet, following the E-M1X's vehicle classes.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 10 月 28 日 Nikon Z9 用深度学习开发的算法同时识别人、狗、猫、鸟、汽车、摩托、自行车、火车、飞机 9 类主体。",
    "On 28 October 2021 the Nikon Z9 used a deep-learning-developed algorithm to detect nine subject types at once: people, dogs, cats, birds, cars, motorcycles, bicycles, trains and aircraft.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 10 月 26 日 Sony α7R V 首次在 α 机身加入专用 AI 处理单元，用人体姿态估计（眼、头、颈、肩、肘、腕、髋、膝、踝）提高识别率，并新增昆虫、汽车/火车、飞机类别。",
    "On 26 October 2022 the Sony α7R V added the first dedicated AI processing unit in an Alpha body, using human pose estimation (eyes, head, neck, shoulders, elbows, wrists, hips, knees, ankles) to improve recognition, and added insects, cars/trains and aircraft.",
    [
     7
    ]
   ]
  ],
  "now": [
   "主流无反都用深度学习做多类主体与部位识别（眼、头盔、驾驶舱），并开始理解动作：Canon EOS R1 / R5 Mark II（2024）的 Action Priority AF 根据球员关节姿态和球的位置判断篮球、排球、足球里谁在关键动作。",
   "Mainstream mirrorless cameras run deep-learning multi-class subject and part detection (eyes, helmets, cockpits) and are starting to understand action: Action Priority AF on the Canon EOS R1 / R5 Mark II (2024) reads players' joint poses and the ball position to pick the key player in basketball, volleyball and football."
  ],
  "replaced": [
   "仍在快速迭代，没有被替代；它反而取代了手动选对焦点和早期只认人脸的检测。",
   "Still evolving fast and not replaced; if anything it has displaced manual AF-point selection and early face-only detection."
  ],
  "refs": [
   {
    "t": "DPReview：Nikon Face-Priority AF（2005）",
    "u": "https://www.dpreview.com/articles/1009928338/nikonfaceaf"
   },
   {
    "t": "Krizhevsky et al., ImageNet Classification with Deep CNNs（NIPS 2012）",
    "u": "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html"
   },
   {
    "t": "Imaging Resource：Olympus E-M1X Q&A",
    "u": "https://imaging-resource.com/news/2019/01/24/olympus-e-m1x-closer-look-amazing-tech-underlying-new-OM-D-series-flagship"
   },
   {
    "t": "PetaPixel：Sony a7/a7R III Firmware v3 Adds Real Time Eye AF, Animal Eye AF",
    "u": "https://petapixel.com/2019/04/11/sony-a7-a7r-iii-firmware-v3-adds-real-time-eye-af-animal-eye-af-timelapse"
   },
   {
    "t": "Canon USA：EOS-1D X Mark III 发布（2020）",
    "u": "https://www.usa.canon.com/newsroom/2020/20200106-1dxmkiii"
   },
   {
    "t": "Canon Europe：AF tracking for racing cars and motorbikes（EOS R3）",
    "u": "https://canon-europe.com/press-centre/press-releases/2021/06/af-tracking-for-racing-cars-and-motorbikes-more-details-of-canons-eos-r3-revealed-a-high-speed-high-performance-mirrorless"
   },
   {
    "t": "Nikon：Nikon releases the Z 9",
    "u": "https://www.nikon.com/news/2021/1028_mirrorless_01.htm"
   },
   {
    "t": "Sony：Alpha 7R V AI-Based Autofocus 新闻稿",
    "u": "https://www.sony.co.uk/presscentre/sony-electronics-new-alpha-7r-v-camera-delivers-a-new-high-resolution-imaging-experience-with-ai-based-autofocus"
   }
  ]
 },
 "breath": {
  "stages": [
   [
    2005,
    "rival",
    "ARRI / ZEISS Master Prime 电影定焦（2005）用专利的 Dual Floating Elements 在光学上几乎消除对焦呼吸，同时保留近摄性能；光学抑制呼吸一直是电影镜头的路线。",
    "The ARRI / ZEISS Master Prime cine primes (2005) used patented Dual Floating Elements to optically all but eliminate focus breathing while keeping close-focus performance; optical suppression has long been the cine-lens route.",
    [
     0
    ]
   ],
   [
    2007,
    "corp",
    "Canon 广播变焦镜头 DIGISUPER 系列采用 CAFS（Constant Angle Focusing System）：32 bit CPU 计算对焦造成的视角变化，同步反向驱动变焦组抵消，使全变焦范围的呼吸接近零；约 2007 年 NAB 发布的 DIGISUPER 100AF 等型号均列有此功能。",
    "Canon's DIGISUPER broadcast zooms used CAFS (Constant Angle Focusing System): a 32-bit CPU computes the angle-of-view change caused by focusing and drives the zoom group the other way, bringing breathing near zero across the zoom range; models such as the DIGISUPER 100AF, shown at NAB around 2007, list it.",
    [
     1,
     2
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 10 月 Sony α7 IV 首次在可换镜头机身内加入 Breathing Compensation：按镜头资料裁切并放大视频，固定在整个对焦行程中最窄的视角；仅支持全部 GM 和部分 G 镜头。",
    "In October 2021 the Sony α7 IV introduced in-body Breathing Compensation: using lens profiles it crops and rescales video to the narrowest angle of view across the focus travel; only all GM and some G lenses are supported.",
    [
     3
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 1 月 Sony FX6 固件 V2.00 加入 focus breathing compensation（电子调整画幅大小），与触摸追踪 AF 一同推出；S&Q 和 RAW 输出模式下不可用，功能扩展到 Cinema Line。",
    "In January 2022 Sony FX6 firmware V2.00 added focus breathing compensation (electronically resizing the frame) alongside touch-tracking AF, unavailable in S&Q and RAW modes, extending the feature to Cinema Line.",
    [
     4
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 11 月 Canon EOS R6 Mark II 成为首台支持 Focus Breathing Correction 的 Canon 机身，按兼容 RF 镜头的光学设计值修正；广角端可能出现画面边缘轻微变形或晃动。",
    "In November 2022 the Canon EOS R6 Mark II became the first Canon body with Focus Breathing Correction, correcting from the optical design data of compatible RF lenses; at wide focal lengths the frame edges may distort or shift slightly.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 EOS R8、R50 跟进，多支 RF 镜头通过镜头固件更新加入兼容；Canon 兼容表目前列出 29 支 RF / RF-S 镜头。",
    "In 2023 the EOS R8 and R50 followed and several RF lenses gained support via lens firmware; Canon's compatibility list now names 29 RF / RF-S lenses.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 3 月 Fujifilm 开始接受 Fujinon Duvo HZK25-1000mm（40×，配 1.5× 增距可达 1500mm）订购，镜头自带 Breathing Compensation Technology，对焦时取景不变，4 月在 NAB 展出。",
    "In March 2023 Fujifilm opened orders for the Fujinon Duvo HZK25-1000mm (40×, 1500mm with the 1.5× extender) with built-in Breathing Compensation Technology keeping framing constant while focusing, shown at NAB in April.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Canon 旗舰 EOS R1 与 EOS R5 Mark II 也加入 Focus Breathing Correction，之后的 R6 III、R8 II、R50 V 延续，成为 Canon 无反视频的常规功能。",
    "Canon's flagship EOS R1 and EOS R5 Mark II gained Focus Breathing Correction, carried on by the later R6 III, R8 II and R50 V, making it routine for Canon mirrorless video.",
    [
     5
    ]
   ],
   [
    2025,
    "ver",
    "Nikon Z5II 加入 Breathing compensation，接兼容镜头时修正对焦造成的视角变化；N-RAW 12-bit 视频下不可用。",
    "The Nikon Z5II added Breathing compensation, correcting focus-induced angle-of-view changes with compatible lenses; unavailable when recording N-RAW 12-bit.",
    [
     7
    ]
   ]
  ],
  "now": [
   "Sony、Canon、Nikon 的视频机身都提供基于镜头资料的电子呼吸补偿，代价是轻微裁切；广播 / 电影镜头则在镜头端用伺服或光学设计解决。",
   "Sony, Canon and Nikon video-capable bodies all offer lens-profile-based electronic breathing compensation at the cost of a slight crop; broadcast and cine lenses solve it in the lens with servos or optical design."
  ],
  "replaced": [
   "未被替代；长远看新一代镜头在光学上压低呼吸（浮动对焦组设计）会减少对电子裁切补偿的依赖，但不支持 RAW 视频等限制仍在。",
   "Not replaced; over time new lenses with low-breathing optical designs (floating focus groups) reduce reliance on electronic crop compensation, though limits such as no RAW-video support remain."
  ],
  "refs": [
   {
    "t": "ZEISS：Master Prime Lenses",
    "u": "https://www.zeiss.com/consumer-products/int/cinematography/master-prime-lenses.html"
   },
   {
    "t": "Canon Technology：Broadcast Television Lenses（CAFS）",
    "u": "https://global.canon/en/technology/canon-tech/tech/bclenses/"
   },
   {
    "t": "SVG：Canon NAB News — DIGISUPER 100AF and 86AF（2007）",
    "u": "https://www.sportsvideo.org/2007/04/10/canon-nab-news-digisuper-100af-and-86af-hdgc-lenses-canobeam-uncompressed-bi-directional-hd-and-sd-sdi-transmission/"
   },
   {
    "t": "DPReview：Sony a7 IV review（Breathing Compensation）",
    "u": "https://www.dpreview.com/reviews/9494401150/2"
   },
   {
    "t": "Newsshooter：Sony FX6 V2.00 firmware",
    "u": "https://www.newsshooter.com/2022/01/27/sonys-v-2-00-firmware-for-the-fx6-now-available-to-download/"
   },
   {
    "t": "Canon HK：EOS R 系列 Focus Breathing Correction 兼容镜头表",
    "u": "https://hk.canon/en/consumer/web/eos-r-focus-breathing-correction-compatible-lens-list"
   },
   {
    "t": "American Cinematographer：Fujifilm Introduces Fujinon HZK 25-1,000mm Box Lens",
    "u": "https://theasc.com/articles/fujifilm-introduces-fujinon-hzk-25-1-000mm-box-lens"
   },
   {
    "t": "Nikon Z5II 参考手册：Breathing compensation",
    "u": "https://onlinemanual.nikonimglib.com/z5IIc/en/vrm_breathing_compensation_217.html"
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
 "pdpix": {
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
 "eye": {
  "stages": [
   [
    2001,
    "paper",
    "Paul Viola 与 Michael Jones 发表 boosted cascade 检测器（CVPR 2001）：integral image、AdaBoost 选特征、级联快速剔除背景，实时 15 fps 检测人脸。消费相机人脸对焦的算法基础由此而来。",
    "Paul Viola and Michael Jones published the boosted-cascade detector (CVPR 2001): integral images, AdaBoost feature selection and a cascade that quickly rejects background, detecting faces in real time at 15 fps, the algorithmic basis of consumer face-detect AF.",
    [
     0
    ]
   ],
   [
    2005,
    "mass",
    "Nikon 于 2005 年 3 月在 Coolpix 7900 / 5900 / 7600 / 4600 / S1 上推出 Face-priority AF：最多识别 3 张脸，框出并跟踪，对焦最近的人脸。“识别主体再对焦”首次量产。",
    "In Mar 2005 Nikon launched Face-priority AF on the Coolpix 7900/5900/7600/4600/S1: up to three faces detected, framed and tracked, focusing on the nearest, the first mass-market detect-then-focus system.",
    [
     1
    ]
   ],
   [
    2012,
    "proto",
    "Olympus OM-D E-M5（2012）的 Face & Eye Priority AF 已能在人脸里找到瞳孔并对焦，可选左眼、右眼或最近的眼，比 Sony 的 Eye AF 早一年。",
    "Olympus's OM-D E-M5 (2012) Face & Eye Priority AF could already find and focus on the pupil within a face, with left-eye, right-eye or nearest-eye choice, a year before Sony's Eye AF.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "Sony α7 / α7R 推出命名为 Eye AF 的功能：按住自定义键即对焦人眼，找不到眼睛时退回人脸；评测认为这是大光圈人像对焦的突破。",
    "Sony's α7/α7R introduced the function named Eye AF: hold a custom button to focus on the eye, falling back to face detection; reviewers called it a breakthrough for wide-aperture portraits.",
    [
     3,
     4
    ]
   ],
   [
    2019,
    "ver",
    "Sony α6400（2019 年 1 月）推出 Real-time Eye AF 与 Real-time Tracking，用 AI 物体识别、半按快门即持续追眼；α9 v5.0 固件（3 月）跟进，v6.0（夏季）加入动物眼。",
    "Sony's α6400 (Jan 2019) introduced Real-time Eye AF and Real-time Tracking, using AI object recognition to track eyes on a half-press; the α9 got it in firmware v5.0 (March) and animal eye AF in v6.0 (summer).",
    [
     5
    ]
   ],
   [
    2019,
    "ver",
    "Eye AF 上手机：Sony Xperia 1（2019 年 2 月 MWC 发布）把 α 系列的 Eye AF 移植过来，是第一款带眼部对焦的手机。",
    "Eye AF reached phones: the Sony Xperia 1 (announced at MWC, Feb 2019) brought over Eye AF from the α line, the first phone with eye-detect autofocus.",
    [
     6
    ]
   ],
   [
    2019,
    "rival",
    "Olympus OM-D E-M1X（2019 年 1 月）推出 Intelligent Subject Detection AF：每类主体用数万张标注图做 deep learning 训练，识别赛车 / 摩托、火车、飞机并对准头盔或机身。“识别对象”从人脸扩展到交通工具。",
    "Olympus's OM-D E-M1X (Jan 2019) introduced Intelligent Subject Detection AF, trained with deep learning on tens of thousands of labeled images per class, to detect race cars/motorcycles, trains and airplanes and focus on helmet or body, extending detection from faces to vehicles.",
    [
     7
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III（2020 年 1 月）首次用 deep learning 训练头部检测，学习了大量体育机构照片，戴头盔、护目镜、侧脸也能追。EOS R5 / R6 随后加入动物识别。",
    "Canon's EOS-1D X Mark III (Jan 2020) was its first deep-learning head detection, trained on sports-agency photo libraries, so helmets, goggles and turned heads can be tracked; the EOS R5/R6 then added animal detection.",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "Canon EOS R3 加入 deep learning 车辆识别（方程式、GT、拉力车和摩托车，可选优先车或车手），并配 Eye Control AF；Nikon Z9（2021 年 10 月）可识别 9 类主体，包括人、猫狗、鸟、自行车、摩托、汽车、火车和飞机。",
    "Canon's EOS R3 added deep-learning vehicle detection (formula, GT, rally cars and motorcycles, with vehicle or driver priority) plus Eye Control AF; Nikon's Z9 (Oct 2021) detected nine subject types: people, dogs, cats, birds, bicycles, motorcycles, cars, trains and airplanes.",
    [
     9,
     10
    ]
   ],
   [
    2022,
    "ver",
    "Sony α7R V（2022 年 10 月）加入独立 AI processing unit，用 human pose estimation 追踪人体约 20 个关键点，背身、戴口罩也能对焦，并新增昆虫、汽车、火车、飞机识别。",
    "Sony's α7R V (Oct 2022) added a dedicated AI processing unit with human pose estimation tracking about 20 body points, so subjects turned away or masked can be focused, and added insect, car, train and airplane recognition.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年 deep learning 主体识别对焦已是 Sony、Canon、Nikon、OM System 无反的标配：人、动物、鸟、昆虫、车辆、飞机都能自动识别，并用姿态估计在看不到眼睛时继续追焦；手机人像 / 视频也在用眼部和主体追焦。",
   "In 2026 deep-learning subject-detect AF is standard on Sony, Canon, Nikon and OM System mirrorless cameras, auto-recognizing people, animals, birds, insects, vehicles and aircraft and using pose estimation to keep tracking when the eye is hidden; phones use eye and subject tracking for portraits and video."
  ],
  "replaced": [
   "“Eye AF”这个单一功能已被吸收进更通用的 AI 主体识别与姿态估计。下一步是理解场景和动作，预判主体会做什么，而不只是认出它是什么。",
   "Eye AF as a single feature has been absorbed into general AI subject recognition and pose estimation. The next step is understanding scenes and actions, predicting what the subject will do rather than only recognizing what it is."
  ],
  "refs": [
   {
    "t": "Rapid Object Detection Using a Boosted Cascade of Simple Features (CVPR 2001) - ML Anthology",
    "u": "https://mlanthology.org/cvpr/2001/viola2001cvpr-rapid"
   },
   {
    "t": "The New Face of Photography: Nikon Face-Priority AF - Nikon USA press release (2005)",
    "u": "https://www.nikonusa.com/press-room/the-new-face-of-photography-n"
   },
   {
    "t": "Olympus OM-D E-M5 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/olympusem5/4"
   },
   {
    "t": "Eye AF - ILCE-7/ILCE-7R Help Guide - Sony",
    "u": "https://helpguide.sony.net/gbmig/44840601/v1/eng/contents/TP0000241596.html"
   },
   {
    "t": "Eye Detection in Sony A7R: It's About Time - diglloyd (2013)",
    "u": "https://www.diglloyd.com/blog/2013/20131022_3-SonyA7r-eye-detection.html"
   },
   {
    "t": "Sony announces α9 camera upgrade through major firmware updates - Alpha Universe",
    "u": "https://alphauniverse.com/stories/sony-announces--9-camera-upgrade-through-major-firmware-updates/"
   },
   {
    "t": "Sony's Xperia 1 has a triple-cam and eye-AF - Australian Photography",
    "u": "https://www.australianphotography.com/gear/sony-s-xperia-1-has-a-triple-cam-and-eye-af"
   },
   {
    "t": "Olympus E-M1X Q&A: a closer look at the tech - Imaging Resource",
    "u": "https://imaging-resource.com/news/2019/01/24/olympus-e-m1x-closer-look-amazing-tech-underlying-new-OM-D-series-flagship"
   },
   {
    "t": "What is Deep Learning AF: how does Canon's AI-powered autofocus work? - Digital Camera World",
    "u": "https://www.digitalcameraworld.com/features/what-is-deep-learning-af-how-does-canons-ai-powered-autofocus-work"
   },
   {
    "t": "Canon's new AI autofocus system will let the EOS R3 track race cars - Engadget",
    "u": "https://www.engadget.com/canon-eos-r3-race-car-tracking-125059799.html"
   },
   {
    "t": "Nikon releases the Z 9 full-frame mirrorless camera - Nikon (2021)",
    "u": "https://www.nikon.com/news/2021/1028_mirrorless_01.htm"
   },
   {
    "t": "Sony's high-resolution A7R V mirrorless camera - Engadget",
    "u": "https://www.engadget.com/sony-a7r-5-mirrorless-camera-61-megapixels-8k-video-152052459.html"
   }
  ]
 },
 "face": {
  "stages": [
   [
    1998,
    "paper",
    "CMU 的 Henry Rowley、Shumeet Baluja、Takeo Kanade 在 IEEE PAMI 发表《Neural Network-Based Face Detection》：用神经网络扫描小窗口判断是否为正脸，并用 bootstrap 收集负样本。",
    "Henry Rowley, Shumeet Baluja and Takeo Kanade (CMU) published \"Neural Network-Based Face Detection\" in IEEE PAMI (Jan 1998): a neural net scans small windows for upright frontal faces, trained with bootstrapped negatives.",
    [
     0
    ]
   ],
   [
    2001,
    "paper",
    "Paul Viola 与 Michael Jones 在 CVPR 2001 提出积分图 + AdaBoost + 级联分类器，在 700 MHz Pentium III 上对 384×288 视频做到 15 fps，第一次让人脸检测能实时跑在弱处理器上，成为相机里人脸检测十年的主流算法。",
    "Paul Viola and Michael Jones (CVPR 2001) combined integral images, AdaBoost and a classifier cascade to detect faces at 15 fps on 384×288 video on a 700 MHz Pentium III, making real-time detection feasible on weak processors and dominating in-camera detection for a decade.",
    [
     1
    ]
   ],
   [
    2005,
    "mass",
    "Nikon 于 2005 年 2 月 16 日推出业界首个 Face-priority AF，搭载在 Coolpix 7900、5900、7600 上：人像模式下自动找脸并对焦，技术来自 Identix 的 FaceIt。",
    "On Feb 16, 2005 Nikon introduced the industry-first Face-priority AF on the Coolpix 7900, 5900 and 7600: in portrait mode the camera finds a face and focuses on it, using Identix's FaceIt technology.",
    [
     2
    ]
   ],
   [
    2006,
    "ver",
    "Fujifilm 把人脸检测做进 Real Photo Processor II 硬件（先在 S6000fd/S6500fd，9 月又下放到口袋机 F31fd）：0.05 秒内找到最多 10 张脸并据此对焦和测光。",
    "Fujifilm put face detection into Real Photo Processor II hardware (first S6000fd/S6500fd, then the pocket F31fd in September): up to 10 faces found within 0.05 s to drive focus and exposure.",
    [
     3
    ]
   ],
   [
    2006,
    "ver",
    "Lexus GS 450h 在日本首次搭载驾驶员监测系统：转向柱上的 CCD 摄像头配红外 LED 判断驾驶员脸朝向，走神时提前触发预碰撞警报；同年 2 月 Toyota 在日内瓦公布 LS 460 的同类系统。",
    "The Lexus GS 450h in Japan was first with a Driver Monitoring System: a steering-column CCD camera with infrared LEDs tracks face direction and brings forward pre-crash warnings; in Feb 2006 Toyota showed the same for the LS 460 at Geneva.",
    [
     4,
     5
    ]
   ],
   [
    2007,
    "ver",
    "Sony Cyber-shot T200/T70（2007 年 8 月 21 日发布）在人脸检测基础上加入 Smile Shutter，检测到笑容自动按快门，人脸检测从“找脸”走向“读表情”。",
    "Sony's Cyber-shot T200/T70 (announced Aug 21, 2007) added Smile Shutter on top of face detection, firing automatically on a smile and moving from finding faces to reading expressions.",
    [
     6
    ]
   ],
   [
    2008,
    "ver",
    "Sony Ericsson C902 Cyber-shot（2008 年 2 月 10 日发布，5 MP）把人脸检测对焦带进手机。同年 Toyota Crown Hybrid 的驾驶员监测增加了眼睑闭合检测疲劳。",
    "The Sony Ericsson C902 Cyber-shot (announced Feb 10, 2008, 5 MP) brought face-detection AF to phones; the same year Toyota's Crown Hybrid added eyelid-based drowsiness detection to driver monitoring.",
    [
     7,
     4
    ]
   ],
   [
    2018,
    "ver",
    "Dahua 于 2018 年 7 月 12 日发布 deepsense 深度学习人脸检测/识别网络摄像机（如 DH-IPC-HFW8242E-Z4FR），机内库可存 10,000 张人脸，并分析性别、年龄、表情、眼镜、口罩、胡须 6 种属性。",
    "On July 12, 2018 Dahua launched deepsense deep-learning face detection/recognition IP cameras (e.g. DH-IPC-HFW8242E-Z4FR) with an on-camera 10,000-face database and six attributes: gender, age, expression, glasses, mask and beard.",
    [
     8
    ]
   ],
   [
    2019,
    "ver",
    "Sony α6400（2019 年 1 月）用基于 AI 物体识别的 Real-time Eye AF 实时追踪眼睛，6 月固件又加入猫狗等动物眼部对焦。",
    "The Sony α6400 (Jan 2019) used AI-based object recognition for Real-time Eye AF, and a June firmware added eye AF for cats, dogs and similar animals.",
    [
     9
    ]
   ],
   [
    2019,
    "ver",
    "欧盟法规 (EU) 2019/2144 把驾驶员注意力监测纳入新车安全要求，并规定系统不得持续录像或向第三方共享数据，车内人脸监测从高端选配变成法规配置。",
    "EU Regulation 2019/2144 made driver attention monitoring part of new-car safety requirements, while forbidding continuous recording or third-party data sharing, turning in-cabin face monitoring from a luxury option into a mandated feature.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III（2020 年 1 月 6 日发布）的 191 点光学取景器 AF 用 Deep Learning 追踪头部和面部，实时取景下支持脸、头、眼检测。",
    "Canon's EOS-1D X Mark III (announced Jan 6, 2020) used Deep Learning in its 191-point viewfinder AF to track heads and faces, with face, head and eye detection in Live View.",
    [
     10
    ]
   ],
   [
    2022,
    "end",
    "Sony α7R V（2022 年 10 月）的独立 AI 处理单元用人体姿态估计识别主体，背对镜头也能对焦，并扩展到动物、鸟、昆虫、车辆和飞机；单纯的“人脸检测”被通用的深度学习主体识别取代。",
    "Sony's α7R V (Oct 2022) used a dedicated AI processing unit with human pose estimation to keep focus even on subjects facing away, extending recognition to animals, birds, insects, vehicles and aircraft; plain face detection gave way to general deep-learning subject recognition.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年人脸检测已融进更广的主体识别：相机用深度学习识别人体姿态、眼睛和多类动物与车辆（如 Sony α7R V、Canon EOS-1D X Mark III 之后的 EOS R 机型），手机做人像分割和美颜，汽车按欧盟法规标配红外驾驶员监测，安防摄像机机内做人脸比对。",
   "In 2026 face detection is folded into broader subject recognition: cameras use deep learning for body pose, eyes, animals and vehicles (Sony α7R V, Canon's EOS R line after the 1D X Mark III), phones do portrait segmentation and retouching, cars ship infrared driver monitoring under EU rules, and security cameras match faces on-device."
  ],
  "replaced": [
   "Viola-Jones 一类手工特征级联检测器已被 CNN 等深度学习模型取代，“人脸检测”本身也被扩展成全身姿态、眼部和多类别主体识别，运行在独立 AI 单元或 NPU 上。",
   "Hand-crafted cascade detectors like Viola-Jones were replaced by CNN-based deep learning, and face detection itself has widened into body-pose, eye and multi-class subject recognition running on dedicated AI units or NPUs."
  ],
  "refs": [
   {
    "t": "Neural Network-Based Face Detection (Rowley, Baluja, Kanade, IEEE PAMI 1998)",
    "u": "https://publications.ri.cmu.edu/neural-network-based-face-detection-3"
   },
   {
    "t": "Rapid Object Detection Using a Boosted Cascade of Simple Features (Viola & Jones, CVPR 2001)",
    "u": "https://mlanthology.org/cvpr/2001/viola2001cvpr-rapid"
   },
   {
    "t": "Nikon Face-Priority AF (DPReview, Feb 2005)",
    "u": "https://www.dpreview.com/articles/1009928338/nikonfaceaf"
   },
   {
    "t": "Fujifilm FinePix F31fd (DPReview, Sept 2006)",
    "u": "https://www.dpreview.com/articles/0915232969/fujif31fd"
   },
   {
    "t": "Driver monitoring system - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Driver_monitoring_system"
   },
   {
    "t": "Lexus pre-crash safety with driver monitoring for new LS (Toyota, Feb 28, 2006)",
    "u": "https://global.toyota/detail/270877"
   },
   {
    "t": "Latest Sony Cyber-shot T-series Cameras Bring New Focus and Smiles (Sony, Aug 2007)",
    "u": "https://sony.mediaroom.com/2007-08-21-Latest-Sony-Cyber-shot-T-series-Cameras-Bring-New-Focus-And-Smiles-To-Point-And-Shoot-Users"
   },
   {
    "t": "Sony Ericsson C902 Cyber-shot and C702 Cyber-shot (Photography Blog, Feb 2008)",
    "u": "https://www.photographyblog.com/news/sony_ericsson_c902_cyber_shot_and_c702_cyber_shot"
   },
   {
    "t": "Dahua Unveils deepsense Face Detection/Face Recognition Network Cameras (PR Newswire, July 2018)",
    "u": "https://www.prnewswire.co.uk/news-releases/dahua-unveils-deepsense-face-detectionface-recognition-network-cameras-687995891.html"
   },
   {
    "t": "Firmware Friday: Sony A6400 gets Real-time Animal Eye AF (Imaging Resource, June 2019)",
    "u": "https://imaging-resource.com/news/2019/06/14/firmware-friday-sony-a6400-gets-real-time-animal-eye-af-and-more"
   },
   {
    "t": "Canon announces the EOS-1D X Mark III (Canon Canada, Jan 6, 2020)",
    "u": "https://www.canon.ca/en/About-Canon/News/Press-Releases/2020/2020-JAN-06-1D-X-MARK-III"
   },
   {
    "t": "Sony's New Alpha 7R V (Rangefinder, Oct 2022)",
    "u": "https://rangefinderonline.com/gear/sony-new-alpha-7r-v/"
   }
  ]
 },
 "tof": {
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
 }
};
