/* 曝光时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 ae 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：isp:wdr、isp:face、comp:hdr、cmos:dcg、cmos:lfm、shutter:flicker */
TIMELINES.ae.hist = {
 "meter": {
  "stages": [
   [
    1931,
    "mass",
    "最早一批光电测光表上市，如底特律 J. Thos. Rhamstine 的 Electrophot 和 Weston 650。这一代光电池输出太弱，必须配电池才能驱动表头。",
    "The first photoelectric exposure meters went on sale, such as J. Thos. Rhamstine's Electrophot (Detroit) and the Weston 650. Their cells were too weak to drive a needle on their own and needed batteries.",
    [
     0
    ]
   ],
   [
    1932,
    "mass",
    "Weston Electrical Instrument Corporation（新泽西 Newark）推出 Weston Universal 617：硒光电池（Photronic cell）直接驱动微安表，不用电池，售价 40 美元，并随之推出 Weston 感光度体系。",
    "Weston Electrical Instrument Corporation of Newark, New Jersey launched the Weston Universal 617: Photronic selenium cells drove a microammeter with no battery. It sold for $40 and introduced the Weston film-speed system.",
    [
     1,
     0
    ]
   ],
   [
    1934,
    "ver",
    "617 改为单片光电池的 617-2，体积和成本下降；Weston 系列此后成为摄影师和电影摄影师的标准手持测光表。",
    "The 617 was replaced by the single-cell 617-2, which was smaller and cheaper. The Weston line then became the standard handheld meter for still and cinema photographers.",
    [
     1
    ]
   ],
   [
    1935,
    "mass",
    "Zeiss Ikon Contaflex 35mm 双反相机把硒光电池藏在铭牌翻盖下，取景罩旁小窗显示对针读数，是世界上第一台内置测光表的相机；测光表不与光圈快门联动，读数仍要手动转到镜头上。",
    "The Zeiss Ikon Contaflex 35mm TLR hid a selenium cell under its nameplate flap with a match-needle window beside the hood, making it the first camera with a built-in meter. The meter was uncoupled, so readings still had to be set on the lens by hand.",
    [
     2
    ]
   ],
   [
    1936,
    "ver",
    "Contax III 在 Contax II 旁观测距联动机身顶部加装非联动硒测光表，内置测光进入高端 35mm 旁轴相机。",
    "The Contax III added an uncoupled selenium meter to the top plate of the Contax II rangefinder, bringing built-in metering to high-end 35mm rangefinders.",
    [
     3
    ]
   ],
   [
    1960,
    "ver",
    "Nikon Nikkorex 8（1960 年 9 月）8mm 电影机采用 CdS（硫化镉）光敏电阻，Nikon 称这是相机机身（含静物相机）首次内置 CdS。CdS 要电池但灵敏得多，暗光也能测，此后几乎所有内置测光都改用 CdS。",
    "Nikon's Nikkorex 8 8mm cine camera (September 1960) used a CdS photoresistor; Nikon calls it the first CdS cell built into any camera body, still cameras included. CdS needs a battery but is far more sensitive in dim light, and it soon became the standard for built-in meters.",
    [
     4
    ]
   ],
   [
    1963,
    "ver",
    "东京光学（Topcon）RE Super 上市，是第一台量产 TTL（through-the-lens）测光的 35mm 单反，测光元件装在反光镜上，全开光圈测光。",
    "Tokyo Kogaku's Topcon RE Super became the first production 35mm SLR with TTL metering, with the cell on the reflex mirror and readings taken at full aperture.",
    [
     5
    ]
   ],
   [
    1964,
    "ver",
    "Asahi Pentax Spotmatic 量产，在目镜两侧放两片 CdS 读取对焦屏亮度，以收缩光圈方式做平均 TTL 测光；它的销量让 TTL 测光成为单反标配。",
    "The Asahi Pentax Spotmatic went into production with two CdS cells beside the eyepiece reading the focusing screen, giving stop-down averaging TTL metering. Its sales made TTL metering standard on SLRs.",
    [
     5
    ]
   ],
   [
    1976,
    "ver",
    "Canon AE-1 改用 SPC（硅光电池）做 TTL 全开光圈测光。硅元件响应快、没有 CdS 的「记忆」滞后，1970 年代后逐步取代 CdS。",
    "The Canon AE-1 used an SPC (silicon photocell) for full-aperture TTL metering. Silicon responds quickly without CdS's memory lag, and replaced CdS from the 1970s on.",
    [
     6
    ]
   ],
   [
    1983,
    "ver",
    "Nikon FA（1983 年 9 月）推出 AMP（Automatic Multi-Pattern）多区测光，把画面分成 5 区分别测量后按算法判定曝光，开发历时 6 年，是后来 Matrix / 评价测光的起点。",
    "The Nikon FA (September 1983) introduced AMP (Automatic Multi-Pattern) metering: five zones measured separately and judged by an algorithm. Development took six years, and it was the start of Matrix and evaluative metering.",
    [
     7
    ]
   ]
  ],
  "now": [
   "数码相机和手机直接用图像传感器测光，独立测光元件只剩单反取景器里的 RGB 测光模块；手持测光表（Sekonic 等）仍用于电影布光、闪光和胶片摄影。",
   "Digital cameras and phones meter straight off the image sensor; a separate metering element survives only as the RGB metering sensor in DSLR viewfinders. Handheld meters (Sekonic and others) remain in use for cinema lighting, flash and film photography."
  ],
  "replaced": [
   "硒光电池先被 CdS、再被硅光电二极管取代；机外手持表被 TTL 机内测光取代，后者又在无反和手机上被图像传感器逐像素测光取代。",
   "Selenium cells were replaced first by CdS, then by silicon photodiodes. Handheld meters gave way to in-camera TTL metering, which on mirrorless cameras and phones has in turn given way to per-pixel metering off the image sensor."
  ],
  "refs": [
   {
    "t": "PHSC: The age of selenium begins",
    "u": "https://phsc.ca/camera/the-age-of-selenium-begins/"
   },
   {
    "t": "Weston Meter: Model 617",
    "u": "https://westonmeter.org.uk/617.htm"
   },
   {
    "t": "Science Museum Group: Contaflex camera",
    "u": "https://collection.sciencemuseumgroup.org.uk/objects/co8205028/contaflex-camera"
   },
   {
    "t": "Wikipedia: Contax",
    "u": "https://en.wikipedia.org/wiki/Contax"
   },
   {
    "t": "Nikon Imaging: Part 18 Nikkorex 8",
    "u": "https://imaging.nikon.com/history/chronicle/cousins18-e/"
   },
   {
    "t": "Wikipedia: Topcon RE Super",
    "u": "https://en.wikipedia.org/wiki/Topcon_RE_Super"
   },
   {
    "t": "Canon Camera Museum: AE-1",
    "u": "https://global.canon/en/c-museum/product/film93.html"
   },
   {
    "t": "Nikon Imaging: Part 14 Nikon FA and Nikon FE2",
    "u": "https://imaging.nikon.com/history/chronicle/cousins14-e/"
   }
  ]
 },
 "ae": {
  "stages": [
   [
    1938,
    "mass",
    "Kodak 推出 Super Kodak Six-20：机顶硒测光表通过机械连杆直接带动光圈，快门优先，是第一台量产自动曝光相机；外观由 Walter Dorwin Teague 设计，售价 225 美元，到 1944 年只造了约 719 台。",
    "Kodak launched the Super Kodak Six-20: a top-mounted selenium meter drove the aperture through a mechanical linkage, with shutter priority. It was the first production auto-exposure camera. Walter Dorwin Teague styled it, it cost $225, and only about 719 were made through 1944.",
    [
     0
    ]
   ],
   [
    1957,
    "paper",
    "Bell & Howell 的 Mervin W. La Rue 在 Journal of the SMPTE 发表《A New Automatic Iris Control for Motion-Picture Cameras》，介绍 200-EE 电影机：光电池感应亮度，经继电器和由水银电池供电的小直流电机连续调整光圈，自动曝光从此进入家用电影机。",
    "Mervin W. La Rue of Bell & Howell published 'A New Automatic Iris Control for Motion-Picture Cameras' in the Journal of the SMPTE, describing the 200-EE cine camera: a photocell sensed brightness, and a relay with a small mercury-battery DC motor adjusted the iris continuously. Auto exposure thereby reached home movie cameras.",
    [
     1
    ]
   ],
   [
    1959,
    "mass",
    "「1959 自动曝光班」：Agfa Optima、Bell & Howell Electric Eye 127、Braun Paxette Electromatic、Kodak Automatic 35、Kodak Brownie Starmatic、Revere Eye-Matic EE 127 等 5 家 6 款机型同年上市，硒表驱动的自动曝光进入大众傻瓜相机。",
    "The 'Auto Exposure Class of 1959': five companies released six models in one year, including the Agfa Optima, Bell & Howell Electric Eye 127, Braun Paxette Electromatic, Kodak Automatic 35, Kodak Brownie Starmatic and Revere Eye-Matic EE 127. Selenium-driven auto exposure reached mass-market point-and-shoots.",
    [
     2
    ]
   ],
   [
    1965,
    "mass",
    "Konica Auto-Reflex 是第一台焦平面快门自动曝光 35mm 单反：机身外置（非 TTL）CdS 测光，Copal 金属焦平面快门，快门优先自动选光圈。",
    "The Konica Auto-Reflex was the first focal-plane-shutter auto-exposure 35mm SLR: a body-mounted non-TTL CdS meter and a Copal metal focal-plane shutter, with shutter priority setting the aperture.",
    [
     3
    ]
   ],
   [
    1968,
    "ver",
    "Konica Autoreflex T 与 Yashica TL Electro-X 把 TTL 测光和焦平面快门自动曝光结合起来，快门优先成为单反自动曝光的第一种形态。",
    "The Konica Autoreflex T and Yashica TL Electro-X combined TTL metering with focal-plane-shutter auto exposure, making shutter priority the first form of SLR auto exposure.",
    [
     4
    ]
   ],
   [
    1971,
    "ver",
    "Asahi Pentax ES（Electro Spotmatic）先在日本上市，是第一台全电子控制快门的 35mm 单反，也是第一台光圈优先自动曝光单反：人定光圈，相机在 8 秒到 1/1000 秒间无级选择快门；1972 年起销往海外。",
    "The Asahi Pentax ES (Electro Spotmatic) launched in Japan as the first 35mm SLR with a fully electronic shutter and the first with aperture-priority AE: the user set the aperture and the camera chose a stepless speed from 8 s to 1/1000 s. Export sales began in 1972.",
    [
     4
    ]
   ],
   [
    1972,
    "corp",
    "RCA 的 Cydney A. Johnson 与 Sidney L. Bendell 申请自动光圈控制专利（优先权日 1972 年 9 月 21 日），用视频信号驱动镜头光圈；后被 Harris、Canon、Sony 等专利引用，视频摄像机和 CCTV 的 auto iris 镜头沿这条路发展。",
    "Cydney A. Johnson and Sidney L. Bendell of RCA filed an automatic iris control patent (priority 21 September 1972) that drove the lens iris from the video signal. Later patents from Harris, Canon and Sony cited it, and auto-iris lenses for video and CCTV cameras grew out of this approach.",
    [
     5
    ]
   ],
   [
    1973,
    "ver",
    "Canon EF 内置快门优先自动曝光，专业级单反开始普遍提供自动曝光。",
    "The Canon EF built in shutter-priority AE, and professional SLRs began offering auto exposure as a matter of course.",
    [
     4
    ]
   ],
   [
    1976,
    "mass",
    "Canon AE-1（1976 年 4 月）由微电脑集中控制 5 大单元 25 个小单元，用 SPC 做 TTL 全开光圈测光、快门优先自动曝光；零件减少、可自动化生产，自动曝光从高端走向大众单反，全球热销。",
    "The Canon AE-1 (April 1976) used a microcomputer to control five major and 25 minor units, with SPC full-aperture TTL metering and shutter-priority AE. Fewer parts and automated assembly brought auto exposure from premium to mainstream SLRs, and it sold strongly worldwide.",
    [
     6
    ]
   ],
   [
    2016,
    "paper",
    "Google 的 Samuel W. Hasinoff 等在 SIGGRAPH Asia 2016 发表 HDR+ 论文：自动曝光故意欠曝以保住高光，连拍多张同曝光 raw 帧对齐降噪合成，再做 HDR 色调映射；已在多款量产手机上使用。",
    "Samuel W. Hasinoff and colleagues at Google published the HDR+ paper at SIGGRAPH Asia 2016: auto exposure deliberately underexposes to keep highlights, then aligns, denoises and merges a burst of equal-exposure raw frames before HDR tone mapping. It already shipped on several production phones.",
    [
     7
    ]
   ]
  ],
  "now": [
   "自动曝光是所有相机、手机、监控和车载摄像头的默认工作方式，由 ISP 按图像传感器统计逐帧调整快门、增益和光圈；手机还把它与多帧合成 HDR、人脸/主体检测结合。",
   "Auto exposure is the default on every camera, phone, surveillance and automotive camera: the ISP adjusts shutter, gain and aperture frame by frame from image-sensor statistics. Phones combine it with multi-frame HDR and face or subject detection."
  ],
  "replaced": [
   "硒表加机械连杆的自动曝光被 CdS / 硅元件加电子快门取代，又被微处理器取代；单张曝光的思路正被多帧合成部分取代，曝光只为保高光，亮度留给后期算法。",
   "Selenium meters with mechanical linkages gave way to CdS or silicon cells with electronic shutters, and then to microprocessors. The single-exposure approach is now partly replaced by multi-frame merging, where exposure only protects highlights and brightness is left to later algorithms."
  ],
  "refs": [
   {
    "t": "George Eastman Museum: 75 years – The Super Kodak Six-20",
    "u": "https://www.eastman.org/blog/75-years-super-kodak-six-20"
   },
   {
    "t": "Journal of the SMPTE: A New Automatic Iris Control for Motion-Picture Cameras (1957)",
    "u": "https://journal.smpte.org/periodicals/Journal%20of%20the%20SMPTE/66/7/12/"
   },
   {
    "t": "Mike Eckman: AGFA Optima I (1960)",
    "u": "https://mikeeckman.com/?p=4117"
   },
   {
    "t": "Wikipedia: Konica Autoreflex",
    "u": "https://en.wikipedia.org/wiki/Konica_Autoreflex"
   },
   {
    "t": "Digital Camera World: The SLR revolution you forgot – how Auto Exposure changed film photography",
    "u": "https://www.digitalcameraworld.com/cameras/film-cameras/the-slr-revolution-you-forgot-how-auto-exposure-changed-film-photography-forever"
   },
   {
    "t": "Google Patents: CA985777A Automatic iris control (RCA)",
    "u": "https://patents.google.com/patent/CA985777A/en"
   },
   {
    "t": "Canon Camera Museum: AE-1",
    "u": "https://global.canon/en/c-museum/product/film93.html"
   },
   {
    "t": "Google Research: Burst photography for high dynamic range and low-light imaging on mobile cameras",
    "u": "https://research.google/pubs/pub45586/"
   }
  ]
 },
 "spot": {
  "stages": [
   [
    1941,
    "corp",
    "好莱坞摄影师 Karl Freund 创办 Photo Research Corporation，专做电影摄影用光度仪器；其 Spectra 点测亮度计用光电倍增管和真空管放大器，从机位直接读出约 1° 小区域的亮度，为 Freund 赢得奥斯卡技术成就奖。",
    "Hollywood cinematographer Karl Freund founded Photo Research Corporation to build photometric instruments for film. Its Spectra spot brightness meter used a photomultiplier and tube amplifier to read a roughly 1° area directly from the camera position, and earned Freund an Academy technical award.",
    [
     0
    ]
   ],
   [
    1948,
    "mass",
    "约 1948 年，英国 Salford Electrical Instruments 的 SEI Exposure Photometer 由 Ilford 经销（美国由 Zoomar）：取景里有 0.5°/1° 小圆点，按钮点亮内置灯泡，转动表身让圆点与被摄体亮度一致到「消失」，即读出亮度。它一直生产到 1960 年代。",
    "Around 1948 the SEI Exposure Photometer from Salford Electrical Instruments (UK) was distributed by Ilford, and by Zoomar in the US. A 0.5° or 1° spot in the finder was lit by an internal lamp; turning the body until the spot matched the subject and 'disappeared' gave the reading. It was made into the 1960s.",
    [
     1
    ]
   ],
   [
    1960,
    "proto",
    "Asahi 在 Photokina 1960 展出 Spotmatic 原型，承诺 TTL 点测光，是第一台宣传机内点测的单反。",
    "Asahi showed the Spotmatic prototype at Photokina 1960, promising TTL spot metering. It was the first SLR to advertise in-camera spot metering.",
    [
     2
    ]
   ],
   [
    1964,
    "rival",
    "Spotmatic 量产时放弃了点测，改用两片 CdS 读取整个对焦屏的平均 TTL 测光，产品名与功能不符，平均测光反而成了主流。",
    "When the Spotmatic reached production it dropped spot metering for averaging TTL metering from two CdS cells reading the whole screen. The name no longer matched the feature, and averaging became the mainstream.",
    [
     2
    ]
   ],
   [
    1965,
    "mass",
    "Canon Pellix（1965 年 4 月）用固定半透膜反光镜，把 CdS 放在膜后，做取景中心 12% 面积的收缩光圈 TTL 局部测光（Canon 称 spot）。这是 Canon 第一台 TTL 单反，也是最早量产的机内点/局部测光之一。",
    "The Canon Pellix (April 1965) used a fixed pellicle mirror with a CdS cell behind it for stop-down TTL partial metering of the central 12% of the frame, which Canon called spot metering. It was Canon's first TTL SLR and one of the first production cameras with in-camera spot or partial metering.",
    [
     3
    ]
   ],
   [
    1968,
    "ver",
    "Mamiya/Sekor 1000 DTL 与 500 DTL 增加一个拨杆，在约 10% 画面的点测和平均测光之间切换，是当时唯一能双模式测光的单反。",
    "The Mamiya/Sekor 1000 DTL and 500 DTL added a switch between spot (about 10% of the frame) and averaging metering. They were the only SLRs of their day to offer both patterns.",
    [
     4
    ]
   ],
   [
    1983,
    "ver",
    "Olympus OM-4 内置多点测光：2% 画面（50mm 下 3.3°）点测，最多存 8 个点自动平均，并有 Highlight / Shadow 按钮按最亮或最暗处定曝光；测光元件是双同心分段硅光电二极管。",
    "The Olympus OM-4 built in multi-spot metering: a 2% spot (3.3° with a 50mm lens), up to eight readings averaged automatically, and Highlight and Shadow buttons to base exposure on the brightest or darkest area. The sensor was a dual-concentric segmented silicon photodiode.",
    [
     5
    ]
   ],
   [
    2005,
    "rival",
    "Nikon 与 Identix 合作在 Coolpix 7900/5900/7600 上推出 Face-priority AF，相机首次自动找出人脸。此后人脸/主体识别区域被用来自动加权测光，替代了人工把点测对准主体。",
    "Nikon, working with Identix, introduced Face-priority AF on the Coolpix 7900, 5900 and 7600, the first time a camera found faces by itself. Detected face and subject regions were later used to weight metering automatically, replacing the job of aiming a spot meter at the subject by hand.",
    [
     6
    ]
   ],
   [
    2009,
    "mass",
    "iPhone 3GS（2009 年 6 月）推出 tap to focus：在屏幕上点主体，相机随之重新对焦并按该区域重设曝光，点测光以「点一下」的方式进入大众手机。",
    "The iPhone 3GS (June 2009) introduced tap to focus: tapping a subject on screen refocused and re-exposed for that area, bringing spot metering to mainstream phones as a single tap.",
    [
     7
    ]
   ]
  ],
  "now": [
   "相机仍保留点测模式，常与对焦点联动；手机用点按屏幕设定测光区域并可锁定 AE；专业手持点测表在电影布光和大画幅摄影中仍在用。",
   "Cameras still offer a spot mode, often linked to the AF point. Phones set the metering area with a tap and can lock AE, and professional handheld spot meters remain in use for cinema lighting and large-format work."
  ],
  "replaced": [
   "作为默认测光方式，点测已被评价/矩阵测光和人脸/主体识别加权测光取代；目视比较式的光度计早已被光电式点测表取代。",
   "As a default metering method, spot metering has been replaced by evaluative or matrix metering and by face- or subject-weighted metering. Visual-comparison photometers were long ago replaced by photoelectric spot meters."
  ],
  "refs": [
   {
    "t": "Wikipedia: Karl Freund",
    "u": "https://en.wikipedia.org/wiki/Karl_Freund"
   },
   {
    "t": "Science Museum Group: Salford Electrical Instruments exposure photometer",
    "u": "https://collection.sciencemuseumgroup.org.uk/objects/co8067444/salford-electrical-instruments-exposure-photometer-with-supplementary-lens-attachment-and-manual"
   },
   {
    "t": "Digital Camera World: This camera arrived four years late and was missing the feature it was named after",
    "u": "https://www.digitalcameraworld.com/cameras/film-cameras/this-camera-arrived-four-years-late-and-was-missing-the-feature-it-was-literally-named-after-yet-it-sold-in-the-millions"
   },
   {
    "t": "Canon Camera Museum: Pellix",
    "u": "https://global.canon/en/c-museum/product/film56.html"
   },
   {
    "t": "Camerapedia: Mamiya/Sekor TL/DTL series",
    "u": "https://camerapedia.fandom.com/wiki/Mamiya/Sekor_TL/DTL_series"
   },
   {
    "t": "Wikipedia: Olympus OM-4",
    "u": "https://en.wikipedia.org/wiki/Olympus_OM-4"
   },
   {
    "t": "DPReview: Nikon Face-Priority AF",
    "u": "https://www.dpreview.com/articles/1009928338/nikonfaceaf"
   },
   {
    "t": "Apple Newsroom: Apple Announces the New iPhone 3GS (2009)",
    "u": "https://www.apple.com/newsroom/2009/06/08Apple-Announces-the-New-iPhone-3GS-The-Fastest-Most-Powerful-iPhone-Yet/"
   }
  ]
 },
 "waveform": {
  "stages": [
   [
    1953,
    "corp",
    "Tektronix 的 Cliff Moulton 把 514 示波器改造成面向电视台的 524（TekWiki 记为 1952–1953 年），可按电视行/场同步扫描显示视频电平，用于调试发射机和演播室设备；原估计只卖 200 台，最终约产 1 万台。",
    "Tektronix's Cliff Moulton reworked the 514 oscilloscope into the TV-station-oriented 524 (dated 1952–1953 on TekWiki), which displayed video levels with line- and field-synced sweeps for adjusting transmitters and studio gear. Forecast at 200 units, it sold about 10,000.",
    [
     0
    ]
   ],
   [
    1955,
    "mass",
    "Tektronix 525 出现在 1955 年春季目录，是 Tek 第一台正式称为 Waveform Monitor 的产品：60 Hz–5 MHz 带宽，75 Ω 输入，行扫描与场扫描，售价 1050 美元，生产到 1964 年。",
    "The Tektronix 525 appeared in the spring 1955 catalogue as Tek's first product formally called a Waveform Monitor: 60 Hz–5 MHz bandwidth, 75 Ω input, line and field sweeps, priced at $1,050 and made until 1964.",
    [
     1
    ]
   ],
   [
    1955,
    "ver",
    "约 1955 年 3 月，524AD 改进版在 524 基础上增加每电视行 40 个时标点、时标定位和更好的扫描延迟调节，面板改为与 Tek 新系列一致。",
    "Around March 1955 the improved 524AD added 40 time markers per TV line, marker positioning and better sweep-delay adjustment to the 524, with a panel matching Tek's newer series.",
    [
     0
    ]
   ],
   [
    1965,
    "ver",
    "Tektronix 529（Phil Crosby 设计）电子管与晶体管混合，P31 荧光屏，扫描放大 ×1/×5/×25；Mod 188D 支持 405/525/625/819 线多制式。",
    "The Tektronix 529, designed by Phil Crosby, mixed tubes and transistors, used a P31 phosphor and offered ×1/×5/×25 sweep magnification. The Mod 188D supported 405-, 525-, 625- and 819-line standards.",
    [
     2
    ]
   ],
   [
    1976,
    "ver",
    "Tektronix 1480 系列开始生产，按 NTSC、PAL、PAL-M 和双制式分出 1480/1481/1482/1485 等型号，成为广播电视台的标准机架式波形监视器。",
    "Production of the Tektronix 1480 series began, split into 1480/1481/1482/1485 models for NTSC, PAL, PAL-M and dual standard. It became the standard rack-mount waveform monitor in broadcast stations.",
    [
     3
    ]
   ],
   [
    1994,
    "ver",
    "Tektronix WFM601 开始生产，直接监测 SMPTE 259M 270 Mb/s SDI 标清数字视频，波形监视器从模拟复合信号进入数字串行接口时代。",
    "Production of the Tektronix WFM601 began. It monitored SMPTE 259M 270 Mb/s SDI standard-definition digital video directly, moving waveform monitors from analog composite signals to the digital serial interface era.",
    [
     4
    ]
   ],
   [
    2008,
    "mass",
    "Panasonic AG-HMC150 AVCCAM 手持摄像机（2008 年 7 月 31 日发布）在 LCD 上提供波形和矢量示波器，按 Scopes 键切换，摄像师在机上就能看曝光电平。",
    "Panasonic's AG-HMC150 AVCCAM handheld camcorder (announced 31 July 2008) showed a waveform and vectorscope on its LCD, cycled with a Scopes button, so operators could check exposure levels on the camera.",
    [
     5
    ]
   ],
   [
    2017,
    "ver",
    "Panasonic Lumix GH5（2017 年 1 月 4 日发布）应专业用户要求加入波形监视器和矢量示波器，机内波形从专业摄像机下放到无反相机。",
    "The Panasonic Lumix GH5 (announced 4 January 2017) added a waveform monitor and vectorscope at professional users' request, bringing in-camera waveforms from pro camcorders down to mirrorless cameras.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "Blackmagic Design 在 IBC 2023 发布免费 iPhone 应用 Blackmagic Camera，提供波形、矢量示波器、斑马纹和 false color，波形监视进入手机拍摄。",
    "Blackmagic Design released the free iPhone app Blackmagic Camera at IBC 2023 with waveform, vectorscope, zebras and false color, bringing waveform monitoring to phone shooting.",
    [
     7
    ]
   ]
  ],
  "now": [
   "广播和后期仍用 Telestream（原 Tektronix）、Leader 等的硬件波形监视器，支持 SDI/IP 与 HDR；摄像机、无反、外接监视器、调色软件和手机拍摄应用都内置软件波形。",
   "Broadcast and post-production still use hardware waveform monitors from Telestream (formerly Tektronix), Leader and others, with SDI/IP and HDR support. Camcorders, mirrorless cameras, external monitors, grading software and phone camera apps all build in software waveforms."
  ],
  "replaced": [
   "阴极射线管模拟波形监视器已被光栅化数字监视器和软件示波器取代；面向普通用户的曝光判断上，直方图、斑马纹和 false color 与波形并存。",
   "Analog CRT waveform monitors have been replaced by rasterizing digital monitors and software scopes. For everyday exposure checks, histograms, zebras and false color coexist with the waveform."
  ],
  "refs": [
   {
    "t": "TekWiki: 524",
    "u": "https://w140.com/tekwiki/wiki/524"
   },
   {
    "t": "TekWiki: 525",
    "u": "https://w140.com/tekwiki/wiki/525"
   },
   {
    "t": "TekWiki: 529",
    "u": "https://w140.com/tekwiki/wiki/529"
   },
   {
    "t": "TekWiki: 1480",
    "u": "https://w140.com/tekwiki/wiki/1480"
   },
   {
    "t": "TekWiki: WFM601",
    "u": "https://w140.com/tekwiki/wiki/WFM601"
   },
   {
    "t": "ProVideo Coalition: Panasonic unveils pricing, ship date for new AG-HMC150",
    "u": "https://www.provideocoalition.com/panasonic_unveils_pricing_ship_date_for_new_ag_hmc150/"
   },
   {
    "t": "ProVideo Coalition: Panasonic introduces new LUMIX GH5 at CES 2017",
    "u": "https://www.provideocoalition.com/panasonic-introduces-new-lumix-gh5-ces-2017/"
   },
   {
    "t": "Videomaker: Blackmagic Camera review",
    "u": "https://www.videomaker.com/reviews/software/blackmagic-camera-review-todays-best-camera-app-for-professionals/"
   }
  ]
 },
 "program": {
  "stages": [
   [
    1954,
    "idea",
    "德国快门厂 Friedrich Deckel 在 1950 年代初提出曝光值（Lichtwert / Light Value）概念：光圈与快门的等效组合用一个数表示，Synchro-Compur 快门在 Photokina 1954 首次带 LVS 刻度，Rollei、Hasselblad、Voigtländer、Kodak 等随即采用。程序曲线本质就是沿一条 EV 线自动选组合。",
    "German shutter maker Friedrich Deckel proposed the exposure value (Lichtwert, Light Value) in the early 1950s: one number for all equivalent aperture–shutter pairs. Synchro-Compur shutters first carried the LVS scale at Photokina 1954, soon adopted by Rollei, Hasselblad, Voigtländer, Kodak and others. A program line is essentially an automatic choice along an EV line.",
    [
     0
    ]
   ],
   [
    1959,
    "mass",
    "Agfa Optima 是第一台量产程序曝光相机：硒表驱动机械机构同时设定快门和光圈；此前全自动曝光只有 1930 年代 Kodak 的手工小批量机型。",
    "The Agfa Optima was the first production camera with programmed exposure: a selenium meter drove a mechanism that set both shutter speed and aperture. Before it, fully automatic exposure existed only in Kodak's hand-built 1930s model.",
    [
     1
    ]
   ],
   [
    1959,
    "rival",
    "Braun Paxette Electromatic 同期上市并自称「世界第一台全自动相机」；Agfa 起诉 Braun 胜诉，Braun 被迫撤下这句广告。",
    "The Braun Paxette Electromatic appeared at the same time, billed as 'the world's first fully automatic camera'. Agfa sued Braun and won, and Braun had to withdraw the claim from its advertising.",
    [
     1
    ]
   ],
   [
    1960,
    "paper",
    "美国标准 ASA PH2.5-1960 提出 APEX（Additive System of Photographic Exposure），把曝光值推广到光圈、快门、感光度和亮度各项，用加减法计算，后来相机电路和 Exif 里的程序曝光参数都沿用这一体系。",
    "The US standard ASA PH2.5-1960 proposed APEX (Additive System of Photographic Exposure), extending exposure value to aperture, shutter, film speed and luminance so they could be added and subtracted. Later camera circuits and the program parameters in Exif follow this system.",
    [
     2
    ]
   ],
   [
    1962,
    "ver",
    "Agfa Optima 1a 继承 Optima 1：硒光电池既测光又提供驱动力，自动设定光圈和快门，闪光时固定 1/30 秒，另有 B 门。",
    "The Agfa Optima 1a succeeded the Optima 1: the selenium cell both measured light and powered automatic setting of aperture and shutter, with flash fixed at 1/30 s and a bulb mode.",
    [
     3
    ]
   ],
   [
    1978,
    "mass",
    "Canon A-1（1978 年 4 月）以全数字微电脑控制，提供快门优先、光圈优先、程序、收缩光圈和闪光五种 AE，是第一台微处理器控制程序曝光的 35mm 单反；SPC 中央重点测光，EV −2–18。",
    "The Canon A-1 (April 1978) was fully digitally controlled by a microcomputer and offered five AE modes: shutter priority, aperture priority, program, stopped-down and flash. It was the first 35mm SLR with microprocessor-controlled program exposure, using SPC centre-weighted metering over EV −2 to 18.",
    [
     4
    ]
   ],
   [
    1985,
    "ver",
    "Minolta Maxxum 7000（1985 年 2 月）的程序曲线会按焦距自动偏移：短于 35mm 或长于 105mm 时优先换取高速快门或景深，并可手动程序偏移（program shift）。",
    "The Minolta Maxxum 7000 (February 1985) shifted its program automatically with focal length, favouring faster speeds or depth of field below 35mm or above 105mm, and allowed manual program shift.",
    [
     5
    ]
   ],
   [
    1986,
    "ver",
    "Canon T90（1986 年 2 月）提供 7 种可变偏移程序 AE（variable shift program），连同快门优先、光圈优先等共 8 种自动曝光模式和 2 种手动模式，程序曲线可按镜头和拍摄需要选择。",
    "The Canon T90 (February 1986) offered seven variable-shift program AE modes, part of eight auto-exposure modes (including shutter and aperture priority) plus two manual modes, so the program line could be chosen to suit the lens and the shot.",
    [
     6
    ]
   ],
   [
    2007,
    "ver",
    "Panasonic Lumix DMC-FX55/FX33（2007 年 7 月发布）首推 Intelligent Auto（iA）：相机用人脸检测和 Intelligent Scene Selector 自动在人像、风景、微距、夜景等场景程序间切换，用户不再需要自己选场景模式。",
    "Panasonic's Lumix DMC-FX55 and FX33 (announced July 2007) debuted Intelligent Auto (iA): face detection and an Intelligent Scene Selector switched automatically among portrait, scenery, macro and night programs, so users no longer chose scene modes themselves.",
    [
     7
    ]
   ]
  ],
  "now": [
   "程序自动（P 档、Auto、iA）是消费相机和手机的默认模式，程序曲线通常把 ISO 也纳入自动选择；手机进一步按场景识别和多帧合成来决定曝光。",
   "Program auto (P, Auto, iA) is the default mode on consumer cameras and phones, and the program line usually includes ISO among the automatic choices. Phones go further, deciding exposure from scene recognition and multi-frame merging."
  ],
  "replaced": [
   "机械凸轮式固定程序被微处理器可偏移程序取代，场景模式又被自动场景识别取代；手机上单次程序曝光正被多帧计算摄影取代。",
   "Fixed mechanical-cam programs were replaced by shiftable microprocessor programs, and scene modes by automatic scene recognition. On phones, single-shot program exposure is being replaced by multi-frame computational photography."
  ],
  "refs": [
   {
    "t": "Wikipedia: Exposure value",
    "u": "https://en.wikipedia.org/wiki/Exposure_value"
   },
   {
    "t": "Camerapedia: Agfa Optima",
    "u": "https://camerapedia.fandom.com/wiki/Agfa_Optima"
   },
   {
    "t": "Wikipedia: APEX system",
    "u": "https://en.wikipedia.org/wiki/APEX_system"
   },
   {
    "t": "Wikipedia: Agfa Optima 1a",
    "u": "https://en.wikipedia.org/wiki/Agfa_Optima_1a"
   },
   {
    "t": "Canon Camera Museum: A-1",
    "u": "https://global.canon/en/c-museum/product/film100.html"
   },
   {
    "t": "Ken Rockwell: Minolta Maxxum 7000",
    "u": "https://kenrockwell.com/minolta/maxxum/7000.htm"
   },
   {
    "t": "Canon Camera Museum: T90",
    "u": "https://global.canon/en/c-museum/product/film118.html"
   },
   {
    "t": "Imaging Resource: Panasonic announces two new FX-series digicams (2007)",
    "u": "https://www.imaging-resource.com/NEWS/1185264001.html"
   }
  ]
 },
 "ttl": {
  "stages": [
   [
    1960,
    "proto",
    "Asahi Optical（Pentax）在 photokina 1960 展出 Spotmatic 原型，是第一台公开展示的镜后测光 35mm SLR，原计划做点测光。",
    "Asahi Optical (Pentax) showed the Spotmatic prototype at photokina 1960, the first behind-the-lens metering 35 mm SLR shown in public, originally planned with spot metering.",
    [
     1,
     2
    ]
   ],
   [
    1962,
    "rival",
    "同期的主流做法是外置测光：Nikon F 的第一代 Photomic 测光取景器（1962 年起交付）用独立光电池，测的光不经过镜头，换镜头、加滤镜都要手动修正。",
    "The mainstream alternative was external metering: the first Nikon F Photomic finder (delivered from 1962) used an independent photocell that did not look through the lens, so lens and filter changes needed manual correction.",
    [
     3
    ]
   ],
   [
    1963,
    "mass",
    "Tokyo Kogaku（Topcon）推出 Topcon RE Super，第一台量产 TTL 测光 SLR：在反光镜上铣出细缝漏光给镜后的 CdS 元件，并通过 RE 镜头的光圈模拟器实现全开光圈测光，Exakta 卡口。",
    "Tokyo Kogaku (Topcon) launched the Topcon RE Super, the first production TTL-metering SLR: slits milled into the mirror leaked light to a CdS cell behind it, and an aperture simulator in RE lenses allowed full-aperture metering; Exakta bayonet mount.",
    [
     0
    ]
   ],
   [
    1964,
    "mass",
    "Pentax Spotmatic 晚了约四年才上市，量产前把点测光改成了平均测光，名字却留了下来；采用收缩光圈测光（推 SW 开关），带 50mm f/1.8 售 249 美元（RE Super 369 美元），1964–1976 年约产 400 万台，让 TTL 测光真正普及。",
    "The Pentax Spotmatic reached the market about four years late, with spot metering changed to averaging before production but the name kept; it metered stopped down (via an SW switch), sold for $249 with a 50 mm f/1.8 (vs $369 for the RE Super), and about 4 million were made from 1964 to 1976, making TTL metering mainstream.",
    [
     1,
     2
    ]
   ],
   [
    1965,
    "ver",
    "Nikon 把 F 的测光取景器换成 Photomic T，改为镜后 TTL 平均测光（约），之后又有改进版 Photomic Tn。",
    "Nikon replaced the F's metering finder with the Photomic T, switching to through-the-lens averaging (approx.), later refined as the Photomic Tn.",
    [
     3
    ]
   ],
   [
    1968,
    "ver",
    "Nikon Photomic FTn 改为 60% 中央重点 TTL 测光，这一测光模式此后几十年都是 Nikon 相机的标准。",
    "The Nikon Photomic FTn introduced 60% centre-weighted TTL metering, which remained Nikon's standard pattern for decades.",
    [
     3
    ]
   ],
   [
    1973,
    "ver",
    "Pentax Spotmatic F 配合 Super-Multi-Coated Takumar 镜头的光圈联动爪，实现全开光圈测光，取景不再因测光而变暗。",
    "The Pentax Spotmatic F, with the aperture-coupling prong of Super-Multi-Coated Takumar lenses, metered at full aperture so the finder no longer darkened while metering.",
    [
     2
    ]
   ],
   [
    1975,
    "ver",
    "Olympus OM-2 推出 ADM（Auto Dynamic Metering）：两个硅蓝光电池在曝光过程中直接测胶片面反射光（OTF），是第一台在曝光中实时 TTL 直接测光的相机。",
    "The Olympus OM-2 introduced ADM (Auto Dynamic Metering): two silicon blue cells read light reflected off the film during the exposure (OTF), the first camera with real-time TTL direct metering.",
    [
     6
    ]
   ],
   [
    1983,
    "ver",
    "Nikon FA 经六年研发推出 AMP（Automatic Multi-Pattern）多分区测光，是世界首个矩阵 / 评价测光，此后几乎所有相机都采用分区测光。",
    "After six years of development, the Nikon FA introduced AMP (Automatic Multi-Pattern), the world's first multi-segment matrix / evaluative meter; virtually all later cameras adopted segmented metering.",
    [
     4
    ]
   ],
   [
    1996,
    "ver",
    "Nikon F5 用 1005 像素 RGB 测光传感器做 3D Color Matrix 测光，第一次把被摄体颜色也作为曝光判断依据。",
    "The Nikon F5 used a 1005-pixel RGB metering sensor for 3D Color Matrix metering, the first to use subject colour as an exposure factor.",
    [
     5
    ]
   ],
   [
    2008,
    "end",
    "Panasonic Lumix DMC-G1 作为第一台 Micro Four Thirds 无反可换镜相机，直接用成像传感器测光；专门的测光元件随反光镜一起消失，“镜后测光”变成了“传感器即测光表”。",
    "The Panasonic Lumix DMC-G1, the first Micro Four Thirds mirrorless interchangeable-lens camera, metered with the image sensor itself; the dedicated meter cell disappeared along with the mirror, and TTL metering became 'the sensor is the meter'.",
    [
     7
    ]
   ]
  ],
  "now": [
   "今天所有手机、无反、摄像机都用成像传感器本身测光，天然是 TTL，并结合多分区、人脸 / 场景识别；单反仍用独立的 RGB 测光传感器。",
   "Today every phone, mirrorless camera and camcorder meters with the image sensor itself, which is inherently TTL, combined with multi-zone and face / scene recognition; DSLRs still use a separate RGB metering sensor."
  ],
  "replaced": [
   "TTL 本身没有被替代，而是被吸收：独立 CdS / SPD 测光元件被成像传感器测光取代，外置测光只剩手持测光表。",
   "TTL itself was not replaced but absorbed: separate CdS / SPD meter cells gave way to image-sensor metering, and external metering survives only in handheld meters."
  ],
  "refs": [
   {
    "t": "Topcon RE Super - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Topcon_RE_Super"
   },
   {
    "t": "Digital Camera World: Pentax Spotmatic arrived four years late",
    "u": "https://www.digitalcameraworld.com/cameras/film-cameras/this-camera-arrived-four-years-late-and-was-missing-the-feature-it-was-literally-named-after-yet-it-sold-in-the-millions"
   },
   {
    "t": "Pentax Spotmatic - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_Spotmatic"
   },
   {
    "t": "Nikon F - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nikon_F"
   },
   {
    "t": "Nikon FA - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nikon_FA"
   },
   {
    "t": "Nikon: Debut of Nikon F5",
    "u": "https://imaging.nikon.com/history/chronicle/history-f5/"
   },
   {
    "t": "Olympus OM-2 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Olympus_OM-2"
   },
   {
    "t": "Panasonic Lumix DMC-G1 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-G1"
   }
  ]
 },
 "av": {
  "stages": [
   [
    1960,
    "idea",
    "ASA PH2.5-1960 胶片感光度标准提出 APEX 体系，把光圈写成 Av = log₂N²、快门写成 Tv，曝光计算变成加法；后来 Canon、Pentax、Leica 直接用 Av / Tv 命名光圈优先和快门优先模式。",
    "The ASA PH2.5-1960 film-speed standard proposed the APEX system, expressing aperture as Av = log₂N² and shutter as Tv so exposure became addition; Canon, Pentax and Leica later used Av / Tv to name aperture- and shutter-priority modes.",
    [
     0
    ]
   ],
   [
    1965,
    "mass",
    "Yashica 在 1965 年 12 月推出 Electro 35 旁轴相机：Copal 电子快门无级变速，用户定光圈（f/1.7–f/16）、相机自动给 1/500–30 秒快门，是第一款商业成功的电子控制光圈优先相机，各型号累计约 800 万台。",
    "In December 1965 Yashica introduced the Electro 35 rangefinder: a stepless Copal electronic shutter, the user set the aperture (f/1.7–f/16) and the camera chose 1/500–30 s, the first commercially successful electronically controlled aperture-priority camera, eventually selling about 8 million across variants.",
    [
     1
    ]
   ],
   [
    1968,
    "rival",
    "Konica Autoreflex T 和 Yashica TL Electro-X 走另一条路：快门优先自动曝光，搭配 TTL 测光和焦平面快门，成为之后 SLR 自动曝光的基本配置。",
    "The Konica Autoreflex T and Yashica TL Electro-X took the other route: shutter-priority auto exposure with TTL metering and a focal-plane shutter, the configuration later SLR AE adopted.",
    [
     2
    ]
   ],
   [
    1971,
    "mass",
    "Asahi Pentax Electro Spotmatic 在日本上市，是第一台光圈优先电子自动曝光 SLR，全电子快门，配 SMC Takumar 可全开光圈测光；早期电路不太可靠，只在日本销售。",
    "The Asahi Pentax Electro Spotmatic went on sale in Japan, the first aperture-priority electronic auto-exposure SLR, with a fully electronic shutter and full-aperture metering with SMC Takumar lenses; its early circuitry was temperamental and it was sold only in Japan.",
    [
     3,
     2
    ]
   ],
   [
    1972,
    "ver",
    "改进电路后的 Pentax ES 在国际市场销售；同年 Nikon 推出 Nikomat EL，是 Nikon 第一台光圈优先自动曝光 SLR。",
    "The Pentax ES, with revised circuitry, was sold internationally; the same year Nikon launched the Nikomat EL, its first aperture-priority AE SLR.",
    [
     3,
     4
    ]
   ],
   [
    1973,
    "ver",
    "Pentax ES II 继续改进电子快门与光圈优先系统。",
    "The Pentax ES II further refined the electronic shutter and aperture-priority system.",
    [
     3
    ]
   ],
   [
    1977,
    "ver",
    "Nikon EL2 把测光元件从 CdS 换成 SPD（硅光电二极管），响应更快，为此改用 Bi-MOS 集成电路。",
    "The Nikon EL2 switched the meter cell from CdS to SPD (silicon photodiode) for faster response, adopting a Bi-MOS integrated circuit to handle its weaker current.",
    [
     4
    ]
   ],
   [
    1979,
    "ver",
    "Canon AV-1、Nikon EM、Olympus OM-10 等入门机只提供光圈优先一种自动模式，光圈优先成为大众 SLR 的标配。",
    "Entry-level models such as the Canon AV-1, Nikon EM and Olympus OM-10 offered aperture priority as their only auto mode, making it standard on mass-market SLRs.",
    [
     2
    ]
   ],
   [
    1980,
    "ver",
    "Nikon F3 以全电子快门加光圈优先自动曝光进入专业旗舰。",
    "The Nikon F3 brought a fully electronic shutter and aperture-priority AE to the professional flagship.",
    [
     2
    ]
   ],
   [
    1983,
    "ver",
    "Nikon FA 第一次在 Nikon SLR 上同时提供 P、S、A、M 四种模式，PASM 自此成为标准拨盘。",
    "The Nikon FA was the first Nikon SLR with all four P, S, A and M modes, and PASM became the standard dial.",
    [
     5
    ]
   ],
   [
    2018,
    "rival",
    "手机镜头光圈通常固定，没有真正的光圈优先；Samsung Galaxy S9 用双档机械光圈（f/1.5 / f/2.4）做了第一步尝试。",
    "Phone lenses usually have fixed apertures, so there is no real aperture priority; the Samsung Galaxy S9 took a first step with a two-position mechanical aperture (f/1.5 / f/2.4).",
    [
     7
    ]
   ],
   [
    2022,
    "ver",
    "Huawei Mate 50 系列用六叶片可变光圈，在专业模式下 f/1.4–f/4.0 共 10 档可调，手机开始重新提供光圈优先式的景深控制。",
    "The Huawei Mate 50 series used a six-blade variable aperture with 10 steps from f/1.4 to f/4.0 in Pro mode, bringing aperture-priority-style depth-of-field control back to phones.",
    [
     6,
     7
    ]
   ]
  ],
  "now": [
   "光圈优先仍是可换镜头相机最常用的模式之一，通常配合 Auto ISO 同时自动快门和感光度；手机多为固定光圈，只有少数可变光圈机型提供真正的 A 模式，景深多靠计算虚化。",
   "Aperture priority remains one of the most used modes on interchangeable-lens cameras, usually paired with Auto ISO; phones mostly have fixed apertures, only a few variable-aperture models offer a true A mode, and depth of field is mostly simulated computationally."
  ],
  "replaced": [
   "没有被淘汰；在手机上它的景深功能被计算虚化（人像模式）大部分取代。",
   "Not obsolete; on phones its depth-of-field role has largely been taken over by computational bokeh (portrait mode)."
  ],
  "refs": [
   {
    "t": "APEX system - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/APEX_system"
   },
   {
    "t": "Yashica Electro 35 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Yashica_Electro_35"
   },
   {
    "t": "Digital Camera World: How Auto Exposure changed film photography",
    "u": "https://www.digitalcameraworld.com/cameras/film-cameras/the-slr-revolution-you-forgot-how-auto-exposure-changed-film-photography-forever"
   },
   {
    "t": "Pentax Spotmatic - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_Spotmatic"
   },
   {
    "t": "Nikon: Nikomat ELW / Nikon EL2",
    "u": "https://imaging.nikon.com/history/chronicle/cousins08-e/index.htm"
   },
   {
    "t": "Nikon FA - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nikon_FA"
   },
   {
    "t": "GSMArena: Huawei Mate 50 series debuts with variable aperture camera",
    "u": "https://www.gsmarena.com/huawei_mate_50_series_debut_with_sd_8_gen_1_variable_aperture_camera-news-55667.php"
   },
   {
    "t": "ProVideo Coalition: Huawei Mate 50 Pro has a camera lens with variable aperture",
    "u": "https://www.provideocoalition.com/huawei-mate-50-pro-has-a-camera-lens-with-variable-aperture/"
   }
  ]
 },
 "ttlflash": {
  "stages": [
   [
    1965,
    "corp",
    "Honeywell 推出自动电子闪光灯（Auto/Strobonar），用光敏元件测量被摄体反射的闪光，够量就截断闪光（约）；但传感器在闪光灯或机身外部，不经过镜头。",
    "Honeywell introduced automatic electronic flash (Auto/Strobonar), using a photocell to measure reflected flash and quench it when enough had arrived (approx.); the sensor sat outside the lens on the flash or body.",
    [
     1,
     4
    ]
   ],
   [
    1975,
    "mass",
    "Olympus OM-2（Yoshihisa Maitani 团队设计）推出 OTF 直接测光：曝光过程中测胶片面反射光，配 Quick Auto 310 闪光灯实现世界首个 TTL 闪光测光，由机身控制闪光时长与强度。",
    "The Olympus OM-2 (designed by Yoshihisa Maitani's team) introduced OTF direct metering of light reflected off the film during exposure; with the Quick Auto 310 flash it delivered the world's first TTL flash metering, the body controlling flash duration.",
    [
     0,
     5
    ]
   ],
   [
    1979,
    "ver",
    "OM-2N 增加取景器内的闪光充电完成与曝光确认 LED 指示。",
    "The OM-2N added in-finder LEDs for flash-ready and exposure confirmation.",
    [
     0
    ]
   ],
   [
    1980,
    "ver",
    "Nikon F3 配 SB-12 推出 Nikon 第一代胶片 TTL 闪光：反光镜升起、快门打开后实时测胶片反射光，经热靴专用触点截断闪光。",
    "Nikon's first film TTL flash arrived with the F3 and SB-12: after mirror-up and with the shutter open it metered film reflection in real time and quenched the flash via a dedicated hot-shoe pin.",
    [
     2
    ]
   ],
   [
    1986,
    "ver",
    "Canon T90 推出 A-TTL：程序模式下先打预闪测距 / 定光圈，但预闪传感器装在闪光灯上，加滤镜时会不准。",
    "The Canon T90 introduced A-TTL: in program mode a preflash helped set the aperture, but its sensor was on the flash unit, causing errors with filters.",
    [
     3
    ]
   ],
   [
    1995,
    "ver",
    "Canon EOS 50（Elan II）配 EX 闪光灯推出 E-TTL：主闪前打一次弱预闪，由机身内评价测光传感器经镜头测量，再算出主闪功率。",
    "The Canon EOS 50 (Elan II) with EX flashes introduced E-TTL: a weak preflash before the main flash is measured through the lens by the body's evaluative meter to set main-flash power.",
    [
     3
    ]
   ],
   [
    1999,
    "end",
    "数码传感器表面不像胶片那样稳定反光，OTF 胶片面测光失效；Nikon D1 改用 D-TTL，在快门打开前测预闪在快门帘上的反射，配 SB-28DX 等“DX”闪光灯。",
    "Digital sensors do not reflect like film, so OTF film-plane metering stopped working; the Nikon D1 switched to D-TTL, metering a preflash off the closed shutter curtain, with 'DX' flashes such as the SB-28DX.",
    [
     2
    ]
   ],
   [
    2003,
    "ver",
    "Nikon D2H 配 SB-800 推出 i-TTL：反光镜升起前打低功率预闪，用取景器 RGB 测光传感器测量，并以 CLS 创意闪光系统支持无线多灯 TTL。",
    "The Nikon D2H with the SB-800 introduced i-TTL: a low-power preflash before mirror-up, measured by the viewfinder RGB meter, with the Creative Lighting System enabling wireless multi-flash TTL.",
    [
     2
    ]
   ],
   [
    2004,
    "ver",
    "Canon EOS-1D Mark II 推出 E-TTL II，把镜头对焦距离信息加入闪光算法，减少被高反光物体误导。",
    "The Canon EOS-1D Mark II introduced E-TTL II, adding lens distance information to the flash algorithm so bright reflective objects mislead it less.",
    [
     3
    ]
   ],
   [
    2012,
    "ver",
    "Canon 600EX-RT 改用 2.4 GHz 无线电控制离机闪光，取代红外光学通信。",
    "The Canon 600EX-RT switched off-camera flash control to 2.4 GHz radio, replacing infrared optical signalling.",
    [
     3
    ]
   ]
  ],
  "now": [
   "今天的“TTL 闪光”几乎都是预闪测光：相机在主闪前打一次弱闪，用测光传感器或成像传感器测量后算出主闪功率，再用无线电控制多灯；手机 LED 闪光同样靠预闪调曝光。",
   "Today's 'TTL flash' is almost always preflash metering: the camera fires a weak flash before the main one, measures it with the meter or image sensor, computes main-flash power, and controls multiple units by radio; phone LED flashes also use a preflash to set exposure."
  ],
  "replaced": [
   "曝光中实时测胶片反射光的 OTF TTL 闪光随胶片一起淘汰，被 D-TTL / i-TTL / E-TTL 等预闪方案取代。",
   "Real-time OTF flash metering off the film disappeared with film, replaced by preflash systems such as D-TTL, i-TTL and E-TTL."
  ],
  "refs": [
   {
    "t": "Olympus OM-2 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Olympus_OM-2"
   },
   {
    "t": "Camerapedia: Honeywell Electronic Flash",
    "u": "https://camerapedia.fandom.com/wiki/Honeywell_Electronic_Flash"
   },
   {
    "t": "ScanTips: Nikon TTL flash systems",
    "u": "https://scantips.com/lights/ttl.html"
   },
   {
    "t": "Canon EOS flash system - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_flash_system"
   },
   {
    "t": "What Digital Camera: The flash – advanced technology guide",
    "u": "https://www.whatdigitalcamera.com/technology_guides/the-flash-advanced-technology-guide-61353"
   },
   {
    "t": "Through-the-lens metering - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Through-the-lens_metering"
   }
  ]
 },
 "blc": {
  "stages": [
   [
    1976,
    "mass",
    "Canon AE-1（1976 年 4 月上市）在镜头卡口旁设逆光补偿按钮：按住拍摄时光圈自动多开 1.5 档，专治人站在亮窗前被拍成剪影。",
    "The Canon AE-1 (on sale April 1976) had a backlight control switch beside the lens mount: holding it during the shot opened the aperture 1.5 stops extra, aimed at subjects silhouetted against a bright window.",
    [
     0
    ]
   ],
   [
    1985,
    "corp",
    "1980 年代的摄像机普遍带手动逆光补偿开关，做法是提高 AGC 增益把主体拉回正常电平（约）；代价是亮部信息丢失、噪点被放大。",
    "1980s video cameras commonly had a manual backlight switch that raised AGC gain to bring the subject back to normal level (approx.); the cost was lost highlight information and amplified noise.",
    [
     1
    ]
   ],
   [
    1988,
    "paper",
    "Fuji Photo Film 的 Kenji Saito 申请专利（优先权 1988 年 1 月）：在自动光圈取平均之前先把超过 110–120% 的亮部信号压缩，让亮背景不再把光圈收得过小，实现自动逆光修正。",
    "Kenji Saito of Fuji Photo Film filed a patent (priority January 1988) that compressed signal above 110–120% before the auto-iris averaging, so a bright background no longer closed the iris too far, giving automatic backlight correction.",
    [
     1
    ]
   ],
   [
    1988,
    "paper",
    "Canon 的 Katsuji Yoshimura 等人申请专利（优先权 1988 年 5 月）：测光框跟随主体移动，比较框内外平均亮度，判定逆光时加大框内权重，避免固定中央测光框在主体移开后失效。",
    "Canon's Katsuji Yoshimura et al. filed a patent (priority May 1988) in which the metering frame tracks the subject, compares inside and outside average luminance, and boosts the inside weight when backlight is detected, fixing fixed centre frames that fail when the subject moves.",
    [
     2
    ]
   ],
   [
    1990,
    "mass",
    "BLC 成为 CCD 安防摄像机的标准开关（约）：把画面分区、按主体区域整体提高曝光；缺点是整幅画面一起变亮，已经很亮的背景会被冲白。",
    "BLC became a standard switch on CCD surveillance cameras (approx.): the frame is divided into zones and overall exposure raised for the subject area; the drawback is that the whole frame brightens and an already bright background washes out.",
    [
     3
    ]
   ],
   [
    1997,
    "rival",
    "Panasonic 推出第一代 Super Dynamic 技术，在高反差场景中得到自然的画面，开启宽动态 WDR 路线：不再只是整体提亮，而是同时保住亮部和暗部。",
    "Panasonic introduced the first Super Dynamic technology for natural images in high-contrast scenes, starting the WDR route: instead of brightening everything, keep both highlights and shadows.",
    [
     4
    ]
   ],
   [
    2000,
    "ver",
    "Panasonic Super Dynamic II 推出，使 24 小时监控成为可能。",
    "Panasonic Super Dynamic II launched, making 24-hour surveillance practical.",
    [
     4
    ]
   ],
   [
    2005,
    "ver",
    "Panasonic Super Dynamic III 用倍速 CCD 和 DSP 分别拍下亮部与暗部再合成一帧，动态范围约为普通摄像机的 128 倍。",
    "Panasonic Super Dynamic III used a double-speed CCD and DSP to capture bright and dark parts separately and merge them into one frame, about 128× the dynamic range of a conventional camera.",
    [
     5
    ]
   ],
   [
    2005,
    "rival",
    "Nikon 与 Identix 合作在 COOLPIX 7900 / 5900 / 7600 上推出业界首个 Face-priority AF；此后人脸检测逐步用于决定曝光（约），相机能直接按人脸亮度曝光，不再需要手动按逆光键。",
    "Nikon, working with Identix, launched the industry's first Face-priority AF on the COOLPIX 7900 / 5900 / 7600; face detection was later extended to drive exposure (approx.), letting cameras expose for faces without a manual backlight button.",
    [
     6
    ]
   ],
   [
    2009,
    "end",
    "Panasonic 发布 Super Dynamic 5；在安防领域 WDR（多帧合成或宽动态传感器）和针对车灯等亮点的 HLC 逐步取代 BLC，BLC 被视为 CCD 时代的旧技术。",
    "Panasonic announced Super Dynamic 5; in surveillance, WDR (multi-frame or wide-dynamic-range sensors) and HLC for bright spots such as headlights gradually displaced BLC, now seen as a CCD-era technique.",
    [
     4,
     3
    ]
   ]
  ],
  "now": [
   "安防摄像机仍保留 BLC 开关，但默认多用 WDR / HLC；手机和相机靠人脸 / 主体识别测光加多帧 HDR 自动处理逆光，很少再需要手动逆光补偿。",
   "Surveillance cameras still keep a BLC switch but mostly default to WDR / HLC; phones and cameras handle backlight automatically with face / subject-aware metering and multi-frame HDR, rarely needing manual backlight compensation."
  ],
  "replaced": [
   "被 WDR（多帧合成、宽动态传感器）、HLC 和人脸识别测光 + HDR 取代。",
   "Replaced by WDR (multi-frame merging, wide-dynamic-range sensors), HLC, and face-aware metering plus HDR."
  ],
  "refs": [
   {
    "t": "Canon AE-1 manual: Shooting Against the Light",
    "u": "https://www.manualslib.com/manual/1420719/Canon-Ae-1.html?page=51"
   },
   {
    "t": "US5075778A Backlight correction system (Fuji Photo Film)",
    "u": "https://patents.google.com/patent/US5075778"
   },
   {
    "t": "US5677733A Exposure control device having a plurality of light detecting areas (Canon)",
    "u": "https://patents.google.com/patent/US5677733A/en"
   },
   {
    "t": "Reolink: WDR, BLC and HLC in CCTV cameras",
    "u": "https://reolink.com/blog/wdr-blc-hlc-in-cctv-camera-ip-camera/"
   },
   {
    "t": "GIT Sicherheit: Panasonic new Super Dynamic 5 technology",
    "u": "https://git-sicherheit.de/en/topstories/panasonic-new-super-dynamic-5-technology"
   },
   {
    "t": "SecurityInfoWatch: Panasonic Super Dynamic III",
    "u": "https://www.securityinfowatch.com/video-surveillance/press-release/10609424/video-surveillance"
   },
   {
    "t": "DPReview: Nikon Face-Priority AF",
    "u": "https://www.dpreview.com/articles/1009928338/nikonfaceaf"
   }
  ]
 },
 "zebra": {
  "stages": [
   [
    1972,
    "idea",
    "Ikegami HL-33 成为第一台紧凑手持彩色 ENG 摄像机；新闻摄像师离开转播车里的视频工程师和波形监视器，需要在寻像器里直接判断电平（约）。",
    "The Ikegami HL-33 became the first compact handheld colour ENG camera; news shooters left the video engineer and waveform monitor behind and needed to judge levels directly in the viewfinder (approx.).",
    [
     0
    ]
   ],
   [
    1985,
    "mass",
    "广播 / 专业摄像机寻像器开始内置斑马纹，例如 Ikegami ITC-730A、ITC-350 用斑马纹提示视频电平以便调光圈（约，1980 年代中期）。",
    "Broadcast and professional camera viewfinders began building in zebra patterns; the Ikegami ITC-730A and ITC-350, for example, used zebra to indicate video level for iris setting (approx., mid-1980s).",
    [
     1
    ]
   ],
   [
    1989,
    "paper",
    "Samsung 的 Hyo-Sam Lee 申请专利（优先权 1989 年 8 月）：指出传统斑马纹只在超过 100 IRE 时报警，提出把视频增益分成多档、按档选择斑马纹，用副载波分频生成条纹。",
    "Samsung's Hyo-Sam Lee filed a patent (priority August 1989) noting conventional zebra only warned above 100 IRE, and proposed splitting video gain into bands with selectable zebra per band, generating stripes from a divided colour subcarrier.",
    [
     2
    ]
   ],
   [
    1995,
    "mass",
    "Sony DCR-VX1000（首台三 CCD MiniDV 摄像机）在菜单里提供 ZEBRA 开关，斑马纹从广播机下放到高端消费 / 准专业机型。",
    "The Sony DCR-VX1000 (the first three-CCD MiniDV camcorder) offered a ZEBRA menu setting, bringing zebra from broadcast down to high-end consumer / prosumer models.",
    [
     3
    ]
   ],
   [
    1997,
    "ver",
    "Sony HDCAM 摄录一体机 HDW-700 提供约 70% 与 100% 以上两种斑马纹（约）：70% 用来对肤色等中间调，100% 用来防高光溢出，这成了专业机的惯例。",
    "The Sony HDCAM camcorder HDW-700 offered zebra at about 70% and at 100% and above (approx.): 70% for midtones such as skin, 100% to guard against clipping, which became the professional convention.",
    [
     4
    ]
   ],
   [
    1999,
    "ver",
    "Sony DCR-VX2000 用实体开关在 70 IRE 与 100 IRE 两档斑马纹之间切换（约），准专业机也具备双档斑马纹。",
    "The Sony DCR-VX2000 used a physical switch to select 70 IRE or 100 IRE zebra (approx.), giving prosumer cameras two-level zebra too.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "Panasonic Lumix GH4 把斑马纹做进无反相机，并能输出到外接监视器，照相机拍视频开始配备摄像机式曝光辅助。",
    "The Panasonic Lumix GH4 put zebra into a mirrorless camera, even outputting it to an external monitor, as stills cameras gained camcorder-style exposure aids for video.",
    [
     6
    ]
   ],
   [
    2017,
    "ver",
    "Sony α7R III 等无反相机提供可设阈值的斑马纹设置，拍照取景同样可用。",
    "Mirrorless cameras such as the Sony α7R III offered zebra with adjustable thresholds, usable for stills framing as well.",
    [
     7
    ]
   ],
   [
    2023,
    "rival",
    "Blackmagic Design 推出免费 iPhone 应用 Blackmagic Camera，同时提供斑马纹和伪色（False Color）；伪色用不同颜色表示各级曝光，比只标一个阈值的斑马纹信息更多。",
    "Blackmagic Design released the free iPhone app Blackmagic Camera with both zebra and False Color; false colour maps exposure levels to colours, giving more information than a single-threshold zebra.",
    [
     8
    ]
   ]
  ],
  "now": [
   "斑马纹仍是专业摄像机、电影机和无反相机的标配，常与波形、直方图、伪色一起用；手机原生相机基本不提供，靠第三方专业拍摄 App。",
   "Zebra remains standard on professional camcorders, cinema cameras and mirrorless bodies, often used alongside waveform, histogram and false colour; native phone camera apps rarely offer it, leaving it to third-party pro apps."
  ],
  "replaced": [
   "没有被淘汰；在电影机上部分被伪色和波形监视取代，因为它们能同时显示多个曝光区间。",
   "Not obsolete; on cinema cameras it is partly superseded by false colour and waveform, which show many exposure bands at once."
  ],
  "refs": [
   {
    "t": "TV Technology: Ikegami celebrates 60 years",
    "u": "https://tvtechnology.com/news/ikegami-celebrates-60-years"
   },
   {
    "t": "SMECC: Ikegami cameras",
    "u": "https://smecc.org/ikegami.htm"
   },
   {
    "t": "US5025308A Zebra signal generating circuit of a video camera (Samsung)",
    "u": "https://patents.google.com/patent/US5025308A/en"
   },
   {
    "t": "Sony DCR-VX1000 manual: Using with the zebra pattern",
    "u": "https://www.manualsdir.com/manuals/444158/sony-dcr-vx1000.html?page=42"
   },
   {
    "t": "Sony HDW-700 manual: Viewfinder",
    "u": "https://www.manualslib.com/manual/2769192/Sony-Hdw-700.html?page=28"
   },
   {
    "t": "Sony DCR-VX2000 manual: Shooting with the zebra pattern",
    "u": "https://www.manualsdir.com/manuals/440996/sony-dcr-vx2000.html?page=47"
   },
   {
    "t": "Adorama: Panasonic Lumix GH4 first look",
    "u": "https://www.adorama.com/alc/panasonic-lumix-gh4-4k-video-hybrid-first-look"
   },
   {
    "t": "Sony ILCE-7RM3 Help Guide: Zebra Setting",
    "u": "https://helpguide.sony.net/ilc/1710/v1/en/contents/TP0001667679.html"
   },
   {
    "t": "Blackmagic Camera app",
    "u": "https://www.blackmagicdesign.com/products/blackmagiccamera"
   }
  ]
 },
 "matrix": {
  "stages": [
   [
    1977,
    "corp",
    "约 1977 年底，Nippon Kogaku（今 Nikon）相机设计部约十人开始研究多区测光：在一块基板上排了 4×6 共 24 颗 5 mm 见方的 SPD（硅光电二极管），装进 FE 机身做原型，实测后认定把画面分成 5 个区就够实用。",
    "Around late 1977 about ten engineers in Nippon Kogaku's (now Nikon) camera design department began work on multi-zone metering: a substrate carrying 24 SPD (silicon photodiode) chips of 5 mm square in a 4×6 grid was fitted into an FE body as a prototype, and testing showed that five zones were enough in practice.",
    [
     0
    ]
   ],
   [
    1983,
    "mass",
    "1983 年 9 月 Nikon FA 上市，首次量产多区测光 AMP（Automatic Multi-Pattern）：两颗分段 SPD 把画面分成中央加四个象限共 5 区，由 4-bit 微处理器（524 kHz、8 KB）按程序计算；程序据称参考了近 10 万张照片的评估。FA 拿下第一届 Camera Grand Prix。",
    "The Nikon FA (Sept 1983) was the first production camera with multi-segment metering, AMP (Automatic Multi-Pattern): two segmented SPDs split the frame into a centre plus four quadrants, and a 4-bit microcomputer (524 kHz, 8 KB) evaluated them with a program reportedly derived from assessing nearly 100,000 photographs. The FA won the first Camera Grand Prix.",
    [
     0,
     1
    ]
   ],
   [
    1983,
    "rival",
    "同年 Olympus OM-4 走了另一条路：多点 spot 测光，由摄影师自己选点再平均。它在首届 Camera Grand Prix 上以微弱差距输给 FA。",
    "The same year the Olympus OM-4 took the opposite approach, multi-spot metering where the photographer picks and averages spots; it narrowly lost the first Camera Grand Prix to the FA.",
    [
     0
    ]
   ],
   [
    1987,
    "ver",
    "1987 年 3 月 Canon EOS 650 推出 Canon 第一套评价测光（evaluative metering），6 区分段传感器，被称为 Factor-Six Light Analysis System；多区测光从此成为各家标配，Wikipedia 称其被各大厂商迅速仿效。",
    "The Canon EOS 650 (March 1987) introduced Canon's first evaluative metering, a 6-zone segmented sensor nicknamed the Factor-Six Light Analysis System; multi-zone metering was quickly copied by every major SLR maker.",
    [
     2,
     1
    ]
   ],
   [
    1992,
    "ver",
    "Nikon F90（N90）推出 3D Matrix：8 区 Advanced Matrix 传感器测亮度与反差，再加上 D 型 AF Nikkor 镜头回传的对焦距离信息，三类数据共同决定曝光。",
    "The Nikon F90 (N90) introduced 3D Matrix metering: an 8-segment Advanced Matrix sensor measured brightness and contrast, combined with focus-distance information sent by D-type AF Nikkor lenses.",
    [
     3
    ]
   ],
   [
    1992,
    "ver",
    "Minolta 7xi、9xi 改用 14 块六边形蜂窝状分区的评价测光，并与自动对焦区联动。",
    "The Minolta 7xi and 9xi moved to evaluative metering with 14 hexagonal honeycomb segments, linked to the autofocus areas.",
    [
     4
    ]
   ],
   [
    1996,
    "ver",
    "1996 年 10 月 Nikon F5 上市，3D Color Matrix 改用 1005 像素 CCD 测光元件，并首次给测光传感器加 R/G/B 滤色片，把颜色也纳入曝光判断，对荧光灯、钨丝灯下或大面积黄绿蓝的画面明显更准。",
    "The Nikon F5 (Oct 1996) used a 1,005-pixel CCD metering element with the world's first R/G/B filters on a metering sensor for 3D Color Matrix, adding colour to the exposure decision and improving results under fluorescent or tungsten light or with large yellow, green or blue areas.",
    [
     5
    ]
   ],
   [
    1999,
    "ver",
    "Canon EOS 300 首次采用均匀网格排列的 35 区测光。",
    "The Canon EOS 300 was the first to use 35 metering zones arranged in a uniform grid.",
    [
     2
    ]
   ],
   [
    2008,
    "rival",
    "2008 年 Panasonic Lumix G1 作为第一台 Micro Four Thirds 无反可换镜头相机，直接用主图像传感器做 144 区 Intelligent Multiple 测光，不再需要单独的测光元件；这条路后来成为无反和手机的主流。",
    "The Panasonic Lumix G1 (2008), the first Micro Four Thirds mirrorless interchangeable-lens camera, metered with 144-zone Intelligent Multiple directly from the main image sensor, with no separate metering element; this approach later became standard in mirrorless cameras and phones.",
    [
     7
    ]
   ],
   [
    2009,
    "ver",
    "Canon EOS 7D 推出 iFCL（intelligent Focus, Color and Luminance）测光：63 区双层传感器同时测亮度和颜色，并参考对焦点信息。",
    "The Canon EOS 7D introduced iFCL (intelligent Focus, Color and Luminance) metering, a 63-zone dual-layer sensor measuring both luminance and colour and using focus-point data.",
    [
     2
    ]
   ],
   [
    2012,
    "ver",
    "Nikon D4、D800 改用 91,000 像素 RGB 传感器的 3D Color Matrix III，检测到人脸时按脸的亮度定曝光；同年 Canon EOS-1D X 用 10 万像素 RGB 测光阵列，加入 iSA 被摄体分析。",
    "The Nikon D4 and D800 moved to 3D Color Matrix III with a 91,000-pixel RGB sensor that exposes for a detected face; the same year the Canon EOS-1D X used a 100,000-pixel RGB metering array with iSA subject analysis.",
    [
     6,
     2
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III 用 40 万像素 RGB+IR 测光传感器，并以深度学习辅助人脸检测，是单反独立测光传感器的高峰之一。",
    "The Canon EOS-1D X Mark III used a 400,000-pixel RGB+IR metering sensor with AI-assisted face detection, one of the high points of the DSLR's dedicated metering sensor.",
    [
     2
    ]
   ]
  ],
  "now": [
   "多区 / 矩阵 / 评价测光仍是所有相机和手机的默认测光模式；只是计算位置变了：无反和手机直接用图像传感器的统计数据，配合人脸、主体识别和神经网络判断场景。",
   "Multi-zone / matrix / evaluative metering remains the default on every camera and phone; what changed is where it runs: mirrorless cameras and phones use statistics from the image sensor itself, combined with face and subject detection and neural-network scene analysis."
  ],
  "replaced": [
   "矩阵测光本身没有被淘汰；被淘汰的是单反里独立的分区 SPD / RGB 测光元件，随无反取代单反、改由图像传感器测光而逐渐消失。",
   "Matrix metering itself has not been replaced; what is disappearing is the DSLR's separate segmented SPD / RGB metering element, made redundant as mirrorless cameras meter from the image sensor."
  ],
  "refs": [
   {
    "t": "Nikon: Part 14 \"Nikon FA\" and \"Nikon FE2\"",
    "u": "https://imaging.nikon.com/imaging/information/chronicle/cousins14-e/index.html"
   },
   {
    "t": "Wikipedia: Nikon FA",
    "u": "https://en.wikipedia.org/wiki/Nikon_FA"
   },
   {
    "t": "Canon AE Light Metering Sensor Evolution",
    "u": "https://exclusivearchitecture.com/03-technical-articles-LMSE-01-overview.html"
   },
   {
    "t": "Wikipedia: Nikon F90",
    "u": "https://en.wikipedia.org/wiki/Nikon_F90"
   },
   {
    "t": "Wikipedia: Minolta 9xi",
    "u": "https://en.wikipedia.org/wiki/Minolta_9xi"
   },
   {
    "t": "Nikon: Debut of Nikon F5",
    "u": "https://imaging.nikon.com/imaging/information/chronicle/history-f5/index.html"
   },
   {
    "t": "Nikon USA press: D800 (Feb 2012)",
    "u": "https://www.nikonusa.com/press-room/expectations-surpassed-the-36"
   },
   {
    "t": "Imaging Resource: Panasonic DMC-G1 specifications",
    "u": "https://www.imaging-resource.com/PRODS/DMCG1/DMCG1DAT.HTM"
   }
  ]
 },
 "aeb": {
  "stages": [
   [
    1856,
    "idea",
    "法国摄影师 Gustave Le Gray 拍海景时，天空和海面亮度差太大，于是分别用不同曝光拍两张底片，再把天空和海合印到一张纸上；这是「多张不同曝光取长补短」的最早实践之一，1856 年 12 月在伦敦 Photographic Society 展出。",
    "Photographing seascapes, Gustave Le Gray faced too great a gap between sky and sea, so he exposed separate negatives for each and combined them on one print; first exhibited at the Photographic Society in London in Dec 1856, it is one of the earliest uses of multiple exposures to cover a scene.",
    [
     0
    ]
   ],
   [
    1985,
    "mass",
    "1985 年 Minolta 9000（世界第一台专业 AF 单反）推出，配套的 Program Back Super 90（PBS-90）背盖提供自动包围曝光，可连拍最多 9 张不同曝光（约）；不过只能在背盖自己的程序模式下使用。",
    "The Minolta 9000 (1985), the first professional AF SLR, offered auto bracketing through its Program Back Super 90 (PBS-90), which could bracket up to nine frames (approx.); it only worked in the back's own program mode.",
    [
     1
    ]
   ],
   [
    1987,
    "ver",
    "1987 年 5 月 Canon EOS 620 把自动包围曝光做进机身：最多 ±5 级、1/2 级步进，不再需要额外背盖，是较早的机身内置 AEB 之一。",
    "The Canon EOS 620 (May 1987) built auto exposure bracketing into the body, up to ±5 stops in 1/2-stop steps with no accessory back, one of the earliest in-body AEB implementations.",
    [
     2
    ]
   ],
   [
    1988,
    "ver",
    "Nikon F-801 可配 MF-21 Multi-Control Back 实现自动包围曝光；此后各家旗舰陆续把 AEB 做成机身菜单项。",
    "The Nikon F-801 offered automatic exposure bracketing via the MF-21 Multi-Control Back; afterwards AEB became a standard in-body menu item across makers.",
    [
     3
    ]
   ],
   [
    1995,
    "paper",
    "MIT Media Lab 的 Steve Mann 与 Rosalind Picard 在 IS&T 第 48 届年会发表《Being 'Undigital' with Digital Cameras》，提出把同一构图、不同曝光的几张数码照片合成为一张高动态范围图像，包围曝光从「挑一张」变成「合成素材」。",
    "Steve Mann and Rosalind Picard of the MIT Media Lab presented \"Being 'Undigital' with Digital Cameras\" at IS&T's 48th Annual Conference, proposing that identically framed shots at different exposures be combined into one extended-dynamic-range image; bracketing went from 'pick the best' to 'raw material for merging'.",
    [
     4
    ]
   ],
   [
    1997,
    "paper",
    "UC Berkeley 的 Paul Debevec 与 Jitendra Malik 在 SIGGRAPH 97 发表《Recovering High Dynamic Range Radiance Maps from Photographs》，从一组包围曝光反推相机响应曲线并恢复辐射图，成为 HDR 合成的经典方法。",
    "Paul Debevec and Jitendra Malik (UC Berkeley) published \"Recovering High Dynamic Range Radiance Maps from Photographs\" at SIGGRAPH 97, recovering the camera response curve and a radiance map from a bracketed set; it became the classic HDR merging method.",
    [
     5
    ]
   ],
   [
    2010,
    "ver",
    "2010 年 9 月 iOS 4.1 给 iPhone 4 加入 HDR 拍照：按一次快门连拍 3 张不同曝光并自动合成，可选同时保留正常曝光原片；包围曝光从此进入大众手机。",
    "iOS 4.1 (Sept 2010) gave the iPhone 4 HDR photos: one shutter press captured three different exposures and merged them automatically, optionally keeping the normal shot; bracketing reached mass-market phones.",
    [
     6
    ]
   ],
   [
    2014,
    "rival",
    "Google 的 HDR+（约 2014 年随 Google Camera 推出）反其道而行：不做包围曝光，而是连拍一串同样刻意欠曝的短曝光帧，对齐降噪后再提亮阴影；同曝光帧更容易对齐，避免了包围合成的鬼影。",
    "Google's HDR+ (launched with Google Camera around 2014) took the opposite route: instead of bracketing it captured a burst of identical, deliberately underexposed short frames, aligned and merged them, then lifted shadows; equal exposures align more robustly and avoid bracketing ghosts.",
    [
     7
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 10 月 Pixel 5 和 Pixel 4a 5G 推出 HDR+ with Bracketing：快门前 5 张短曝光加快门后 1 张长曝光（Night Sight 为 12 短 + 3 长），根据场景动态范围和运动自动选择；包围曝光以算法化的形式回归手机。",
    "In Oct 2020 the Pixel 5 and Pixel 4a 5G introduced HDR+ with Bracketing: five short exposures before the shutter press and one long exposure after (12 short + 3 long in Night Sight), chosen automatically from scene dynamic range and motion; bracketing returned to phones in algorithmic form.",
    [
     7
    ]
   ]
  ],
  "now": [
   "相机上 AEB 仍是标准功能，常用于手动 HDR、全景和难判断的光线；手机上则隐藏在 HDR / 夜景算法里，按场景自动决定拍几张、各用多少曝光。",
   "On cameras AEB remains a standard feature for manual HDR, panoramas and tricky light; on phones it is hidden inside HDR and night algorithms that decide automatically how many frames to take and at what exposures."
  ],
  "replaced": [
   "「挑一张最准的」这个原始用途已被准确测光、RAW 宽容度和即时回放取代；作为 HDR 素材，它部分被同曝光连拍合成（HDR+）以及传感器内多重曝光 / DOL-HDR 等单帧 HDR 方案取代。",
   "Its original purpose, picking the best-exposed frame, has been displaced by accurate metering, RAW latitude and instant review; as HDR raw material it is partly replaced by equal-exposure burst merging (HDR+) and in-sensor single-frame HDR schemes."
  ],
  "refs": [
   {
    "t": "Getty: Gustave Le Gray, technique",
    "u": "https://www.getty.edu/art/exhibitions/le_gray/technique.html"
   },
   {
    "t": "Wikipedia: Minolta Maxxum 9000",
    "u": "https://en.wikipedia.org/wiki/Minolta_Maxxum_9000"
   },
   {
    "t": "Canon Camera Museum: EOS 620",
    "u": "https://global.canon/en/c-museum/product/film123.html"
   },
   {
    "t": "Wikipedia: Nikon F-801",
    "u": "https://en.wikipedia.org/wiki/Nikon_F-801"
   },
   {
    "t": "Mann & Picard, MIT Media Lab TR-323",
    "u": "https://vismod.media.mit.edu/pub/tech-reports/TR-323-ABSTRACT.html"
   },
   {
    "t": "Debevec & Malik, SIGGRAPH 97",
    "u": "https://pauldebevec.com/Research/HDR/abstract.html"
   },
   {
    "t": "The Next Web: iOS 4.1 hands on, HDR",
    "u": "https://web.archive.org/web/20220119030936/https://thenextweb.com/news/ios-4-1-hands-on-is-hdr-really-that-good"
   },
   {
    "t": "Google Research: HDR+ with Bracketing on Pixel Phones",
    "u": "https://research.google/blog/hdr-with-bracketing-on-pixel-phones/"
   }
  ]
 },
 "scene": {
  "stages": [
   [
    1996,
    "mass",
    "Nikon F5 的 3D Color Matrix 用 1005 像素 CCD 并首次给测光传感器加 RGB 滤色片，相机第一次能「看见」画面颜色分布，为后来按内容判断场景打下基础。",
    "The Nikon F5's 3D Color Matrix used a 1,005-pixel CCD with the first RGB filters on a metering sensor, letting the camera 'see' colour distribution for the first time and laying the ground for content-based scene judgement.",
    [
     0
    ]
   ],
   [
    2001,
    "paper",
    "Paul Viola 与 Michael Jones 提出 boosted cascade 人脸检测框架，在 700 MHz Pentium III 上以 15 fps 检测 384×288 图像中的人脸，让实时人脸检测进入嵌入式设备成为可能。",
    "Paul Viola and Michael Jones proposed the boosted-cascade face-detection framework, detecting faces in 384×288 images at 15 fps on a 700 MHz Pentium III, making real-time face detection feasible for embedded devices.",
    [
     1
    ]
   ],
   [
    2006,
    "mass",
    "2006 年 7 月 Fujifilm FinePix S6000fd 推出硬件人脸检测（约 0.05 秒），并与 i-Flash 联动按主体距离调整闪光曝光。",
    "In July 2006 the Fujifilm FinePix S6000fd introduced hardware face detection (about 0.05 s) tied to i-Flash, which set flash exposure from the subject's distance.",
    [
     2
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 7 月 Panasonic 在 Lumix FX55、FX33、FZ18 上推出 Intelligent Auto（iA）：人脸检测加 Intelligent Scene Selector，自动在人像、风景、微距、夜景、夜景人像之间切换并调整曝光。",
    "In July 2007 Panasonic launched Intelligent Auto (iA) on the Lumix FX55, FX33 and FZ18: face detection plus an Intelligent Scene Selector that switched automatically among portrait, scenery, macro, night scenery and night portrait and adjusted exposure accordingly.",
    [
     3
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 8 月 Nikon D300（与 D3 同期）推出 Scene Recognition System：用 1005 像素 RGB 测光传感器识别主体形状和位置，结果同时用于曝光、按颜色追踪对焦和自动白平衡。",
    "The Nikon D300 (Aug 2007, alongside the D3) introduced the Scene Recognition System: the 1,005-pixel RGB metering sensor recognised subject shape and position, feeding exposure, colour-based AF tracking and auto white balance.",
    [
     4
    ]
   ],
   [
    2009,
    "ver",
    "Canon EOS 7D 推出 iFCL 测光，63 区双层传感器同时分析亮度与颜色，并结合对焦点信息判断主体。",
    "The Canon EOS 7D introduced iFCL metering, a 63-zone dual-layer sensor analysing luminance and colour together with focus-point data to identify the subject.",
    [
     5
    ]
   ],
   [
    2012,
    "ver",
    "Canon EOS-1D X 用 10 万像素 RGB 测光阵列，加入 iSA（intelligent Subject Analysis）和 iTR 追踪，测光传感器开始兼做人脸 / 主体识别。",
    "The Canon EOS-1D X used a 100,000-pixel RGB metering array with iSA (intelligent Subject Analysis) and iTR tracking; the metering sensor began doubling as a face and subject recognizer.",
    [
     5
    ]
   ],
   [
    2017,
    "ver",
    "Huawei Mate 10 / Mate 10 Pro 的 Kirin 970 集成专用 NPU，相机用神经网络做实时场景与物体识别，再据此调整对焦、亮度、反差和色彩，是第一批带专用神经处理器的手机。",
    "The Kirin 970 in the Huawei Mate 10 / Mate 10 Pro integrated a dedicated NPU; the camera ran neural-network real-time scene and object recognition and adjusted focus, brightness, contrast and colour accordingly, among the first phones with a dedicated neural processor.",
    [
     6
    ]
   ],
   [
    2019,
    "ver",
    "iPhone 11 Pro 的新一代 Smart HDR 用机器学习识别画面中的人物等主体并分别「重新打光」，场景识别从「整张图选一个模式」进化到按区域分别处理曝光与色调。",
    "Next-generation Smart HDR on the iPhone 11 Pro used machine learning to recognise subjects in the frame and relight them individually; scene recognition moved from choosing one mode per photo to region-by-region exposure and tone.",
    [
     7
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III 用 40 万像素 RGB+IR 测光传感器，并用深度学习辅助人脸检测。",
    "The Canon EOS-1D X Mark III used a 400,000-pixel RGB+IR metering sensor with deep-learning-assisted face detection.",
    [
     5
    ]
   ]
  ],
  "now": [
   "手机和无反相机普遍用图像传感器数据加神经网络做人脸、主体与语义分割，按区域分别决定曝光和色调映射；「AI 场景模式」标签本身逐渐淡化，变成后台默认流程。",
   "Phones and mirrorless cameras now routinely use image-sensor data and neural networks for face, subject and semantic segmentation, deciding exposure and tone mapping region by region; the visible 'AI scene mode' label is fading into a default background pipeline."
  ],
  "replaced": [
   "单反独立 RGB 测光传感器随无反普及而退场；整图分类式的「场景模式」正被语义分割、按区域处理的计算摄影取代。",
   "The DSLR's separate RGB metering sensor is fading with the shift to mirrorless; whole-image 'scene mode' classification is being superseded by semantic segmentation and per-region computational photography."
  ],
  "refs": [
   {
    "t": "Nikon: Debut of Nikon F5",
    "u": "https://imaging.nikon.com/imaging/information/chronicle/history-f5/index.html"
   },
   {
    "t": "Wikipedia: Viola–Jones object detection framework",
    "u": "https://en.wikipedia.org/wiki/Viola%E2%80%93Jones_object_detection_framework"
   },
   {
    "t": "CreativePro: FinePix S6000fd debuts Fujifilm face detection",
    "u": "https://creativepro.com/new-finepix-s6000fd-digital-camera-marks-debut-of-fujifilm-s-face-detection-technology/"
   },
   {
    "t": "Reviewed: Panasonic introduces face detection on FX55 and FX33",
    "u": "https://reviewed.com/cameras/news/panasonic-introduces-face-detection-on-fx55-and-fx33-13993"
   },
   {
    "t": "DPReview: Nikon D300 review",
    "u": "https://www.dpreview.com/reviews/nikond300"
   },
   {
    "t": "Canon AE Light Metering Sensor Evolution",
    "u": "https://exclusivearchitecture.com/03-technical-articles-LMSE-01-overview.html"
   },
   {
    "t": "AnandTech: Huawei Mate 10 Pro hands-on, Kirin 970",
    "u": "https://www.anandtech.com/show/11935/huawei-mate-10-pro-hands-on-with-kirin-970/3"
   },
   {
    "t": "Apple Newsroom: iPhone 11 Pro (Sept 2019)",
    "u": "https://www.apple.com/newsroom/2019/09/iphone-11-pro-and-iphone-11-pro-max-the-most-powerful-and-advanced-smartphones/"
   }
  ]
 },
 "histogram": {
  "stages": [
   [
    1891,
    "idea",
    "英国统计学家 Karl Pearson 在 1891 年的 Gresham 讲座中开始使用「histogram」一词，原意是用于历史的「时间图」，后来泛指按区间统计频数的柱状图（约，也有资料记为 1895 年）。",
    "British statistician Karl Pearson began using the word 'histogram' in his 1891 Gresham lectures, originally for a 'time-diagram' for historical purposes; it later came to mean any bar chart of frequencies by interval (approx.; some sources give 1895).",
    [
     0
    ]
   ],
   [
    1998,
    "mass",
    "Kodak DCS 520（1998）是最早带彩色背屏的单反之一，回放时按 SELECT 即显示亮度直方图及快门、光圈、ISO 等信息，DPReview 称直方图是检查曝光的利器（约，按评测推断）。",
    "The Kodak DCS 520 (1998), one of the first SLRs with a colour rear LCD, showed a luminance histogram plus shutter, aperture and ISO when SELECT was pressed in review; DPReview called it invaluable for checking exposure (approx., inferred from the review).",
    [
     1
    ]
   ],
   [
    1999,
    "ver",
    "1999 年 6 月 Nikon D1 发布，2 英寸 12 万点 LCD 支持直方图显示；D1 的低价让数码单反和回放直方图迅速普及到新闻摄影。",
    "The Nikon D1 (announced June 1999) had a 2-inch 120,000-dot LCD with histogram display; its lower price quickly spread DSLRs, and review histograms, through photojournalism.",
    [
     2
    ]
   ],
   [
    2002,
    "ver",
    "Fujifilm FinePix S2 Pro（2002）回放直方图除了总亮度，还分别画出 R、G、B 三通道，可以看出单个颜色通道是否溢出。",
    "The Fujifilm FinePix S2 Pro (2002) review histogram showed separate R, G and B channels in addition to overall brightness, revealing clipping in individual colour channels.",
    [
     3
    ]
   ],
   [
    2002,
    "ver",
    "Minolta DiMAGE 7i（2002）加入叠加在取景画面上的实时直方图（live histogram），拍之前就能看亮度分布；同年 6 月 Minolta 发布固件升级，把实时直方图带给初代 DiMAGE 7（约）。",
    "The Minolta DiMAGE 7i (2002) added a real-time histogram overlaid on the live view, showing the tonal distribution before capture; in June 2002 Minolta announced a firmware upgrade bringing it to the original DiMAGE 7 (approx.).",
    [
     4
    ]
   ],
   [
    2003,
    "idea",
    "2003 年 Michael Reichmann 在与 Photoshop / Camera Raw 作者 Thomas Knoll 讨论后，在 Luminous Landscape 提出「向右曝光」ETTR：把直方图尽量推到右边而不溢出，以提升阴影信噪比，直方图从检查工具变成曝光策略。",
    "In 2003, after a discussion with Thomas Knoll (author of Photoshop and Camera Raw), Michael Reichmann proposed 'expose to the right' (ETTR) on Luminous Landscape: push the histogram right without clipping to improve shadow signal-to-noise, turning the histogram from a check into an exposure strategy.",
    [
     5
    ]
   ],
   [
    2003,
    "rival",
    "ETTR 很快暴露了问题：相机直方图大多基于按机内白平衡和风格处理过的 JPEG 预览，而不是 RAW 数据，往往比真实溢出提前报警；于是出现 UniWB、RawDigger、FastRawViewer 等变通办法（约）。",
    "ETTR soon exposed a flaw: most camera histograms are computed from the processed JPEG preview, not the RAW data, so they warn of clipping before the raw file actually clips; workarounds such as UniWB, RawDigger and FastRawViewer followed (approx.).",
    [
     5
    ]
   ],
   [
    2012,
    "ver",
    "Leica M Monochrom（2012）先显示 JPEG 直方图，片刻后换成基于 DNG 原始数据的真实 RAW 直方图，并按档位分区，被认为可能是业界首个机内 RAW 直方图；后来的 M10 Monochrom 又改回 JPEG 直方图。",
    "The Leica M Monochrom (2012) first showed a JPEG histogram, then replaced it with a true histogram of the DNG raw data divided into stops, likely an industry first for an in-camera raw histogram; the later M10 Monochrom went back to a JPEG-based one.",
    [
     6
    ]
   ],
   [
    2015,
    "ver",
    "LG G4（2015）原生相机的手动模式可开启直方图，同时手动调 ISO、快门、白平衡和对焦，直方图进入手机原生相机。",
    "The LG G4 (2015) offered a histogram in its native camera's manual mode alongside manual ISO, shutter, white balance and focus, bringing the histogram into a phone's stock camera.",
    [
     7
    ]
   ]
  ],
  "now": [
   "直方图是所有相机和多数手机专业模式的标配，无反可在取景器里实时显示亮度 / RGB 直方图；视频领域则常与斑马纹、波形图、伪色一起使用。多数机型仍基于 JPEG 预览而非 RAW。",
   "The histogram is standard on every camera and most phone pro modes, and mirrorless cameras show live luminance/RGB histograms in the viewfinder; in video it is used alongside zebras, waveforms and false colour. Most cameras still compute it from the JPEG preview rather than RAW."
  ],
  "replaced": [
   "没有被替代；在视频和专业场景中，波形图、伪色和斑马纹能告诉你「哪里」过曝，补足了直方图只讲「多少」的不足。",
   "Not replaced; in video and professional work, waveforms, false colour and zebras show where clipping is, complementing the histogram, which only shows how much."
  ],
  "refs": [
   {
    "t": "USU: History of descriptive statistics (Pearson, histogram)",
    "u": "https://www.usu.edu/math/schneit/StatsHistory/StatisticsTopics/DescriptiveStatistics.html"
   },
   {
    "t": "DPReview: Kodak Pro DCS 520 Review",
    "u": "https://www.dpreview.com/reviews/6147688085/kodakdcs520/"
   },
   {
    "t": "DPReview: Nikon D1 Review",
    "u": "https://www.dpreview.com/articles/nikond1"
   },
   {
    "t": "DPReview: Fujifilm FinePix S2 Pro Review",
    "u": "https://www.dpreview.com/reviews/fujis2pro/7"
   },
   {
    "t": "DPReview: Minolta announce DiMAGE 7 upgrade",
    "u": "https://www.dpreview.com/articles/5329488369/dimage7upgrade"
   },
   {
    "t": "Wikipedia: Exposing to the right",
    "u": "https://en.wikipedia.org/wiki/Exposing_to_the_right"
   },
   {
    "t": "Luminous Landscape: Leica M9 Monochrom",
    "u": "https://luminous-landscape.com/leica-m9-monochrom/"
   },
   {
    "t": "Android Central: Manual mode on the LG G4 camera",
    "u": "https://androidcentral.com/how-and-when-use-manual-mode-lg-g4-camera"
   }
  ]
 },
 "vnd": {
  "stages": [
   [
    1968,
    "paper",
    "RCA 的 George Heilmeier 与 Louis Zanoni 在 Applied Physics Letters 13 卷发表《Guest-host interactions in nematic liquid crystals》：把二色性染料溶进向列相液晶，通电改变分子取向即可改变吸光量，这是液晶调光的基础原理之一。",
    "George Heilmeier and Louis Zanoni of RCA published \"Guest-host interactions in nematic liquid crystals\" in Applied Physics Letters vol. 13: dichroic dye dissolved in a nematic liquid crystal changes its absorption when an applied field reorients the molecules, one of the basic principles of liquid-crystal light control.",
    [
     0
    ]
   ],
   [
    2011,
    "proto",
    "Tessive 在 Cine Gear Expo 2011 推出 Time Filter：放在镜头前、与帧同步的液晶快门，主要用来塑造曝光时间形状、减少时间混叠，同时兼具可变 ND 功能；首发价 14,000 美元，后降到 2,000 美元以下。",
    "Tessive unveiled the Time Filter at Cine Gear Expo 2011: a liquid-crystal shutter in front of the lens, synchronized to frame capture, mainly to shape exposure in time and reduce temporal aliasing, and also usable as a variable ND; launched at $14,000, later under $2,000.",
    [
     1
    ]
   ],
   [
    2013,
    "corp",
    "RED 在 NAB 2013 发布 Motion Mount 卡口：把 Tessive 技术集成进 EPIC / SCARLET 的镜头卡口，液晶快门之外提供电子可调 ND，计划当年出货，售价 4,500 美元；Tessive 的独立 Time Filter 随即停售。",
    "At NAB 2013 RED announced the Motion Mount, integrating Tessive's technology into the EPIC/SCARLET lens mount, providing electronically adjustable ND alongside the liquid-crystal shutter, priced at $4,500 for shipment later that year; Tessive's standalone Time Filter was withdrawn.",
    [
     1
    ]
   ],
   [
    2014,
    "mass",
    "2014 年 6 月 Sony 发布 XDCAM 手持机 PXW-X180 / X160（三片 1/3 英寸 Exmor CMOS），号称世界首个机身内置电子可变 ND：1/4ND 到 1/128ND，可按传统档位或用拨轮线性连续调节。",
    "In June 2014 Sony announced the PXW-X180/X160 XDCAM handhelds (three 1/3-inch Exmor CMOS), billed as the world's first built-in electronic variable ND: 1/4ND to 1/128ND, selectable in fixed steps or continuously with a dial.",
    [
     2
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 9 月 Sony PXW-FS5 发布，成为首台内置电子可变 ND 的 Super35 摄影机：约 7 档（ND 2.1），1/4 到 1/128 线性调节，并有 Auto ND 自动保持曝光。",
    "The Sony PXW-FS5 (Sept 2015) became the first Super35 camcorder with a built-in electronic variable ND: about 7 stops (ND 2.1), linear from 1/4 to 1/128, with Auto ND to hold exposure automatically.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "Sony FS7 II（约 2016 年）把电子可变 ND 带进 FS7 系列；此后 FS5 II、PXW-Z190 / Z280 等也陆续配备（约）。",
    "The Sony FS7 II (around 2016) brought the electronic variable ND to the FS7 line; the FS5 II and PXW-Z190/Z280 followed (approx.).",
    [
     6
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 9 月 IBC 上 Sony 发布 PXW-FX9（6K 全画幅），Sony 称业界首次做出兼容全画幅的电子可变 ND，7 档、1/4 到 1/128，可自动或手动。",
    "At IBC in Sept 2019 Sony announced the PXW-FX9 (6K full frame), which Sony called the industry's first electronic variable ND compatible with full-frame capture: 7 stops, 1/4 to 1/128, auto or manual.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "Sony FX6（约 2020 年）把全画幅电子可变 ND 带到更小的 Cinema Line 机身（约）。",
    "The Sony FX6 (around 2020) brought full-frame electronic variable ND to a smaller Cinema Line body (approx.).",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 9 月 Sony Burano 发布：电子可变 ND 0.6–2.1，ND 结构做得更薄，首次与机身内光学防抖装进同一机身，也是首台带 IBIS 的 PL 卡口数字电影机。",
    "The Sony Burano (Sept 2023) carried an electronic variable ND of 0.6–2.1 in a thinner structure, for the first time combined with in-body optical stabilization, and was the first PL-mount digital cinema camera with IBIS.",
    [
     5
    ]
   ],
   [
    2025,
    "rival",
    "Benro 约 2025 年底公布 NE1 原型：装在镜头前的电子可变 ND 滤镜，用单层 DLC 液晶膜，ND3–ND64（约 1.5–6 档），可用机身按键、蓝牙遥控或光线传感器自动调节，避免传统偏振式可变 ND 的 X 形暗斑；2026 年 2 月众筹。",
    "Around late 2025 Benro unveiled the NE1 prototype, a lens-front electronic variable ND using a single-layer DLC liquid-crystal film, ND3–ND64 (about 1.5–6 stops), controlled by buttons, a Bluetooth remote or an automatic light sensor, avoiding the X-pattern of polarizer-based variable NDs; crowdfunding from Feb 2026.",
    [
     7
    ]
   ]
  ],
  "now": [
   "电子可变 ND 是 Sony 专业摄像机和 Cinema Line（FS5、FX9、FX6、Burano 等）的招牌功能，配合 Auto ND 可在光线变化时保持光圈和快门不动；手机和普通照相机尚未内置，镜头前的电子 ND 滤镜刚起步。",
   "Electronic variable ND is a signature feature of Sony's professional camcorders and Cinema Line (FS5, FX9, FX6, Burano and others); with Auto ND it holds aperture and shutter fixed as light changes. Phones and stills cameras have not adopted it internally, and lens-front electronic ND filters are just emerging."
  ],
  "replaced": [
   "尚未被替代；它取代的是机身内的机械 ND 转盘和镜头前的偏振式可变 ND，但 ARRI、Canon 等多数厂商仍用玻璃 ND 转盘。",
   "Not replaced; it is itself replacing mechanical in-body ND wheels and lens-front polarizer variable NDs, though most other makers, such as ARRI and Canon, still use glass ND wheels."
  ],
  "refs": [
   {
    "t": "Heilmeier & Zanoni, Guest-host interactions in nematic liquid crystals (APL 1968)",
    "u": "https://scilit.net/publications/c56b519ea68afb890765d2e35c00cf8b"
   },
   {
    "t": "RedShark News: RED's two most significant NAB announcements",
    "u": "https://redsharknews.com/technology-computing/item/662-red-s-two-most-significant-nab-announcements-got-the-least-hype"
   },
   {
    "t": "No Film School: Sony PXW-X180 & X160 world's first electronic variable ND",
    "u": "https://nofilmschool.com/2014/06/prodder-sony-pxwx180-pxwx160-electronic-nd-filter"
   },
   {
    "t": "No Film School: Sony PXW-FS5 with electronic variable ND",
    "u": "https://nofilmschool.com/2015/09/sony-pxw-fs5-4k-cinema-camera-e-mount-electronic-variable-nd"
   },
   {
    "t": "Newsshooter: Sony announces the FX9",
    "u": "https://www.newsshooter.com/2019/09/13/sony-announces-the-fx9-camera-with-6k-full-frame-sensor/"
   },
   {
    "t": "Sony Pro press: BURANO",
    "u": "https://pro.sony/en_GB/press/burano"
   },
   {
    "t": "Sony Pro: Electronic Variable ND Filter technology",
    "u": "https://pro.sony/ue_US/technology/variable-auto-nd-filter-technology"
   },
   {
    "t": "Digital Camera World: Benro NE1 electronic variable ND",
    "u": "https://www.digitalcameraworld.com/cameras/lens-filters/benro-wants-to-make-the-worlds-most-impressive-variable-nd-filter"
   }
  ]
 },
 "wdr": {
  "stages": [
   [
    1995,
    "paper",
    "MIT Media Lab 的 Steve Mann 与 Rosalind Picard 在 IS&T 第 48 届年会（1995 年 5 月）发表《Being 'Undigital' with Digital Cameras》：多张只差曝光的照片合起来能覆盖远大于单张的动态范围，且不需要预先标定相机响应。",
    "Steve Mann and Rosalind Picard (MIT Media Lab) presented \"Being 'Undigital' with Digital Cameras\" at IS&T's 48th conference (May 1995): differently exposed shots of one scene jointly cover far more dynamic range, without prior camera calibration.",
    [
     0,
     11
    ]
   ],
   [
    1997,
    "paper",
    "Paul Debevec 与 Jitendra Malik 在 SIGGRAPH 97 发表《Recovering High Dynamic Range Radiance Maps from Photographs》，从包围曝光中求出相机响应曲线，合成真实场景辐射亮度的 HDR 图。",
    "Paul Debevec and Jitendra Malik's SIGGRAPH 97 paper recovered the camera response curve from bracketed exposures and merged them into a radiance map of true scene luminance.",
    [
     2
    ]
   ],
   [
    1997,
    "mass",
    "Panasonic 在监控摄像机上推出第一代 Super Dynamic 宽动态技术，用长短两次曝光 + DSP 合成，让逆光门口等场景同时看清亮部和暗部（约）。",
    "Panasonic launched first-generation Super Dynamic WDR in security cameras, merging a long and a short exposure in a DSP so backlit doorways show both highlights and shadows (approx.).",
    [
     3
    ]
   ],
   [
    1998,
    "paper",
    "Steve Mann 的美国专利 US5828793（1998 年 10 月 27 日授权）描述按“确定性函数”加权融合多张不同曝光的图像，并自动配准。",
    "Steve Mann's US patent 5,828,793 (granted Oct 27, 1998) covers registering differently exposed images and blending them with certainty-function weights.",
    [
     1
    ]
   ],
   [
    2005,
    "ver",
    "Panasonic Super Dynamic III（2005 年 3 月发布）用新设计的 CCD 加 DSP，把动态范围做到普通摄像机的 128 倍，首批机型是 WV-CS954 球机和 WV-CP480 枪机。",
    "Panasonic Super Dynamic III (March 2005) combined a new CCD and DSP to reach 128x the dynamic range of conventional cameras, debuting in the WV-CS954 dome and WV-CP480 fixed cameras.",
    [
     3
    ]
   ],
   [
    2009,
    "mass",
    "Pentax K-7（2009 年 5 月 20 日发布）是首批带机内 HDR 的单反：连拍三张不同曝光自动合成一张 JPEG。",
    "The Pentax K-7 (announced May 20, 2009) was among the first DSLRs with in-camera HDR, merging three differently exposed frames into one JPEG.",
    [
     4
    ]
   ],
   [
    2009,
    "ver",
    "Sony α550（2009 年 8 月 27 日发布）的 Auto HDR 连拍两帧、曝光差 1–3 EV，并在机内自动对齐手持造成的错位，免去三脚架。",
    "Sony α550 (announced Aug 27, 2009) Auto HDR shot two frames 1–3 EV apart and corrected handheld misalignment in-camera, removing the need for a tripod.",
    [
     5
    ]
   ],
   [
    2010,
    "ver",
    "iOS 4.1（2010 年 9 月）给 iPhone 4 加入 HDR 拍照：欠曝、正常、过曝三张合成，每张处理约 7–10 秒，可选择同时保留原图。",
    "iOS 4.1 (Sept 2010) brought HDR to iPhone 4: under, normal and over exposures merged in about 7–10 s, optionally keeping the original.",
    [
     6
    ]
   ],
   [
    2014,
    "ver",
    "Google 的 HDR+（2014 年 10 月，Nexus 5/6）改变思路：不做包围曝光，而是连拍一串同样偏暗的短曝光帧，对齐后平均降噪，既保住高光又把暗部噪声压下去。",
    "Google's HDR+ (Oct 2014, Nexus 5/6) dropped bracketing: it shot a burst of identically underexposed short frames, aligned and averaged them, keeping highlights while cleaning shadow noise.",
    [
     7
    ]
   ],
   [
    2014,
    "rival",
    "传感器端的 Sony DOL-HDR（Digital Overlap）把长短 2–3 次曝光在同一帧时间内按行交错读出，用于 IMX224、IMX290 等监控传感器；缺点是运动物体会有重影（约）。",
    "On the sensor side, Sony's DOL-HDR (Digital Overlap) reads 2–3 exposures line-interleaved within one frame time in surveillance sensors such as IMX224 and IMX290; moving objects can ghost (approx.).",
    [
     9
    ]
   ],
   [
    2018,
    "rival",
    "车载要求无重影和抗 LED 频闪，Sony IMX490 用大小两种子像素、各自再分高低转换增益，一次曝光得到 4 路 12 bit 数据，在片上合成 24 bit、约 120 dB 的图像（约）。",
    "Automotive needs ghost-free, flicker-free HDR: Sony's IMX490 uses large and small sub-pixels, each read at high and low conversion gain, giving four 12-bit channels per exposure merged on-chip into 24-bit, ~120 dB output (approx.).",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "Snapdragon 888 的 Spectra 580 ISP（2020 年 12 月发布）专门支持 staggered HDR 交错曝光传感器，2021 年机型可以对 4K 视频的每一帧做计算 HDR。",
    "Snapdragon 888's Spectra 580 ISP (announced Dec 2020) was built for staggered-HDR sensors, letting 2021 phones apply computational HDR to every frame of 4K video.",
    [
     10
    ]
   ],
   [
    2022,
    "end",
    "单次曝光双增益正在取代多次曝光：Sony STARVIS 2（IMX675/676/678）的 Clear HDR 同时读出 HCG 与 LCG 两路，运动场景零重影；多帧 DOL 只在静态、极暗场景里仍有优势（约）。",
    "Single-exposure dual gain is displacing multi-exposure: Clear HDR in Sony STARVIS 2 (IMX675/676/678) reads HCG and LCG simultaneously with no motion ghosting, while multi-frame DOL keeps an edge only in static, very dark scenes (approx.).",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年宽动态已是所有相机的基础功能：手机用连拍多帧合成（HDR+ 一类）加交错曝光视频 HDR，安防与车载转向单次曝光的双转换增益、分离像素和 LOFIC 方案，例子有 Sony STARVIS 2 IMX678、车载 IMX490 一类传感器和 Snapdragon 平台的计算 HDR 视频。",
   "In 2026 WDR is a baseline feature everywhere: phones use multi-frame burst merging (HDR+ style) plus staggered-exposure HDR video, while security and automotive move to single-exposure dual conversion gain, split pixels and LOFIC, e.g. Sony STARVIS 2 IMX678, IMX490-class automotive sensors and Snapdragon computational HDR video."
  ],
  "replaced": [
   "早期“两次曝光 + DSP 拼接”的 WDR 正被单次曝光的传感器内 HDR（双增益、分离像素、LOFIC）取代，因为后者没有运动重影、也能抗 LED 频闪；计算侧则走向连拍对齐合成和神经网络色调映射。",
   "Early two-exposure DSP-stitched WDR is being replaced by single-exposure on-sensor HDR (dual gain, split pixels, LOFIC), which avoids motion ghosting and LED flicker; on the compute side the trend is aligned burst merging and neural tone mapping."
  ],
  "refs": [
   {
    "t": "TR-323: Being 'Undigital' with Digital Cameras (Mann & Picard, MIT Media Lab 1995)",
    "u": "https://vismod.media.mit.edu/pub/tech-reports/TR-323-ABSTRACT.html"
   },
   {
    "t": "US5828793A: Method and apparatus for producing digital images having extended dynamic ranges (Google Patents)",
    "u": "https://patents.google.com/patent/US5828793"
   },
   {
    "t": "Recovering High Dynamic Range Radiance Maps from Photographs (Debevec & Malik, SIGGRAPH 1997)",
    "u": "https://history.siggraph.org/?p=117286"
   },
   {
    "t": "Panasonic Super Dynamic III (SecurityInfoWatch, 2005)",
    "u": "https://www.securityinfowatch.com/video-surveillance/article/10609400/video-surveillance"
   },
   {
    "t": "Pentax K-7 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_K-7"
   },
   {
    "t": "Sony unveils DSLR-A550 and DSLR-A500 (DPReview)",
    "u": "https://www.dpreview.com/?p=316586"
   },
   {
    "t": "iOS 4.1 hands-on: Is HDR really that good? (The Next Web)",
    "u": "https://web.archive.org/web/20220119030936/https://thenextweb.com/news/ios-4-1-hands-on-is-hdr-really-that-good"
   },
   {
    "t": "HDR+: Low Light and High Dynamic Range photography in the Google Camera App (Google Research Blog)",
    "u": "https://research.google/blog/hdr-low-light-and-high-dynamic-range-photography-in-the-google-camera-app/"
   },
   {
    "t": "Sony IMX490 HDR Sensor and Flicker Mitigation (LUCID Vision Labs)",
    "u": "https://thinklucid.com/tech-briefs/sony-imx490-hdr-sensor-and-flicker-mitigation/"
   },
   {
    "t": "Clear HDR vs DOL HDR (e-con Systems)",
    "u": "https://www.e-consystems.com/blog/camera/technology/clear-hdr-vs-dol-hdr-which-hdr-technology-is-right-for-your-application/"
   },
   {
    "t": "Inside the Snapdragon 888 (PCWorld)",
    "u": "https://www.pcworld.com/article/393754/inside-the-snapdragon-888-the-features-youll-find-in-2021s-premium-phones.html"
   },
   {
    "t": "High-dynamic-range imaging - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/High-dynamic-range_imaging"
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
 "hdr": {
  "stages": [
   [
    1850,
    "idea",
    "1850 年代法国摄影师 Gustave Le Gray 已用两张不同曝光的底片分别记录天空和海面再合印，是用多次曝光表现超大亮度范围的最早实践（约）。",
    "In the 1850s the French photographer Gustave Le Gray printed sky and sea from two differently exposed negatives, the earliest practice of using several exposures to render an extreme luminance range (approx.).",
    [
     0
    ]
   ],
   [
    1995,
    "paper",
    "MIT Media Lab 的 Steve Mann 于 1993 年提出、1995 年与 Rosalind Picard 发表《Being 'undigital' with digital cameras》，给出同一场景不同曝光照片合成扩展动态范围图像的数学理论。",
    "Steve Mann at the MIT Media Lab introduced the idea in 1993 and in 1995 published with Rosalind Picard \"Being 'undigital' with digital cameras\", a mathematical theory for combining differently exposed photos of a scene into an extended-range image.",
    [
     0
    ]
   ],
   [
    1997,
    "paper",
    "UC Berkeley 的 Paul Debevec 与 Jitendra Malik 在 SIGGRAPH 97 发表《Recovering High Dynamic Range Radiance Maps from Photographs》：先从包围曝光中恢复相机响应曲线，再合成与真实辐亮度成正比的 HDR 辐射图，成为此后 HDR 合成的标准方法。",
    "Paul Debevec and Jitendra Malik at UC Berkeley published \"Recovering High Dynamic Range Radiance Maps from Photographs\" at SIGGRAPH 97: recover the camera response curve from bracketed exposures, then merge them into a radiance map proportional to true scene radiance, the standard HDR merge method thereafter.",
    [
     1
    ]
   ],
   [
    2003,
    "mass",
    "HDRsoft 于 2003 年 2 月推出 Photomatix，自称第一款面向摄影师的 HDR 合成与色调映射软件，带动了 2000 年代中期的 HDR 摄影潮流。",
    "HDRsoft launched Photomatix in Feb 2003, billed as the first HDR merging and tone-mapping application for photographers, fuelling the mid-2000s HDR photography boom.",
    [
     2
    ]
   ],
   [
    2005,
    "ver",
    "Adobe Photoshop CS2（2005 年 4 月）加入 Merge to HDR、32 位浮点图像和 HDR 色调映射，HDR 合成进入主流修图软件。",
    "Adobe Photoshop CS2 (Apr 2005) added Merge to HDR, 32-bit floating-point images and HDR tone mapping, bringing HDR merging into mainstream editing software.",
    [
     0
    ]
   ],
   [
    2009,
    "mass",
    "Ricoh CX1（2009 年 2 月 19 日发布）的 Dynamic Range Double Shot 模式高速连拍两张不同曝光并机内合成，动态范围最高约 12 EV，是较早的机内多曝光合成卡片机。",
    "The Ricoh CX1 (announced 19 Feb 2009) had a Dynamic Range Double Shot mode that fired two differently exposed frames at high speed and merged them in camera for up to about 12 EV, an early compact with in-camera multi-exposure merging.",
    [
     3
    ]
   ],
   [
    2009,
    "ver",
    "Pentax K-7（2009 年 5 月 20 日发布）成为第一台带机内 HDR 的单反：三张不同曝光合成一张 JPEG，但只能用于 JPEG 输出、需三脚架。",
    "The Pentax K-7 (announced 20 May 2009) became the first DSLR with in-camera HDR, merging three exposures into one JPEG, JPEG-only and best on a tripod.",
    [
     4
    ]
   ],
   [
    2010,
    "mass",
    "Apple 在 2010 年 9 月的 iOS 4.1 给 iPhone 4 加入 HDR 开关：快速连拍正常、过曝、欠曝三张并自动合成，HDR 从此成为手机相机的常见功能。",
    "Apple's iOS 4.1 (Sept 2010) added an HDR toggle to the iPhone 4 that shot normal, over- and under-exposed frames in quick succession and merged them, making HDR a common phone camera feature.",
    [
     5
    ]
   ],
   [
    2013,
    "ver",
    "Google 的 HDR+ 随 Nexus 5 推出：不再做包围曝光，而是连拍一串同样偏短曝光的 RAW 帧，对齐后合并降噪再色调映射，避免重影；Hasinoff、Levoy 等人于 SIGGRAPH Asia 2016 发表完整论文。",
    "Google's HDR+ launched with the Nexus 5: instead of bracketing, it bursts equally short-exposed RAW frames, aligns and merges them for denoising and tone maps the result, avoiding ghosting; Hasinoff, Levoy et al. published the full paper at SIGGRAPH Asia 2016.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Qualcomm 发布 Snapdragon 888，可在手机上做 4K 的计算多曝光 HDR 视频，多帧 HDR 从照片扩展到视频。",
    "Qualcomm announced the Snapdragon 888, capable of computational multi-exposure HDR video at 4K on a phone, extending multi-frame HDR from stills to video.",
    [
     0
    ]
   ],
   [
    2023,
    "ver",
    "Android 14 加入 Ultra HDR（JPEG_R）：在兼容 SDR 的 JPEG 里附带 gain map，HDR 屏幕可显示合成后的高光；之后统一到 ISO 21496-1，Android 15 同时写入两种格式以兼容 Apple 设备。",
    "Android 14 added Ultra HDR (JPEG_R): an SDR-compatible JPEG carries a gain map so HDR screens can show the merged highlights; it later converged on ISO 21496-1, with Android 15 writing both formats for compatibility with Apple devices.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年多帧 HDR 已是手机每次拍照的默认流程（HDR+、Smart HDR 一类连拍对齐合成，常混合长短曝光），相机提供机内 HDR 和 HDR HEIF 输出，照片通过 gain map（Ultra HDR / ISO 21496-1）在 HDR 屏幕上显示真实高光。",
   "In 2026 multi-frame HDR is the default pipeline for every phone shot (HDR+ / Smart HDR style aligned bursts, often mixing short and long exposures), cameras offer in-camera HDR and HDR HEIF output, and photos use gain maps (Ultra HDR / ISO 21496-1) to show real highlights on HDR screens."
  ],
  "replaced": [
   "经典的“三张包围 + 色调映射”HDR 已被连拍对齐合成取代，因为后者重影少、噪声低；在传感器侧，单次曝光的双转换增益、分离像素和 LOFIC 正在接管视频与安防车载的 HDR，色调映射则越来越多由神经网络完成。",
   "Classic three-frame bracket-and-tone-map HDR has been replaced by aligned burst merging, which ghosts less and is cleaner; on the sensor side, single-exposure dual conversion gain, split pixels and LOFIC are taking over HDR for video, security and automotive, while tone mapping increasingly uses neural networks."
  ],
  "refs": [
   {
    "t": "Multi-exposure HDR capture - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Multi-exposure_HDR_capture"
   },
   {
    "t": "Debevec & Malik, Recovering High Dynamic Range Radiance Maps from Photographs (SIGGRAPH 97)",
    "u": "https://pauldebevec.com/Research/HDR/"
   },
   {
    "t": "About HDRsoft",
    "u": "https://www.hdrsoft.com/about.html"
   },
   {
    "t": "Ricoh unveils CX1 CMOS-sensor zoom compact (DPReview)",
    "u": "https://www.dpreview.com/articles/7093252137/ricohcx1"
   },
   {
    "t": "The Pentax K-7: the era of in-camera HDR imaging has arrived (Adorama)",
    "u": "https://www.adorama.com/alc/the-pentax-k-7-the-era-of-in-camera-high-dynamic-range-imaging-has-arrived"
   },
   {
    "t": "First look: Taking HDR photos with Apple's iOS 4.1 (AppleInsider)",
    "u": "https://appleinsider.com/articles/10/09/02/first_look_taking_hdr_photos_with_apples_ios_4_1"
   },
   {
    "t": "Burst photography for high dynamic range and low-light imaging on mobile cameras (Google Research)",
    "u": "https://research.google/pubs/burst-photography-for-high-dynamic-range-and-low-light-imaging-on-mobile-cameras/"
   },
   {
    "t": "Ultra HDR Image Format v1.1 (Android Developers)",
    "u": "https://developer.android.com/media/platform/hdr-image-format"
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
 "flicker": {
  "stages": [
   [
    2014,
    "mass",
    "Canon EOS 7D Mark II 是首台带频闪检测的 EOS：测光传感器检测光源闪烁频率，开启 anti-flicker 后把快门释放时刻对准亮度峰值，减少体育馆钠灯、汞灯下连拍的曝光和偏色跳动；关闭时只在取景器里闪烁警告。",
    "The Canon EOS 7D Mark II was the first EOS with flicker detection: its metering sensor measures the light's flicker frequency and, with anti-flicker on, times the shutter release to the brightness peak, reducing exposure and colour swings under sodium and mercury-vapour arena lights; with it off, the viewfinder only flashes a warning.",
    [
     0
    ]
   ],
   [
    2016,
    "rival",
    "Nikon D5 / D500 加入 Flicker reduction：取景器拍摄时检测 100/120 Hz（对应 50/60 Hz 市电）闪烁并调整拍摄时机，代价是连拍速度可能下降，暗背景或装饰灯下可能检测不到。",
    "The Nikon D5 / D500 added Flicker reduction: for viewfinder shooting it detects 100/120 Hz flicker (from 50/60 Hz mains) and adjusts shot timing, at the cost of a possibly lower frame rate and missed detection against dark backgrounds or decorative lighting.",
    [
     1
    ]
   ],
   [
    2019,
    "corp",
    "2019 年 2 月 19 日 STMicroelectronics 发布 VD6281 多光谱环境光传感器，面向手机相机，可检测 50 Hz–2 kHz 闪烁（精度优于 3%），同时用于白平衡校正。",
    "On 19 February 2019 STMicroelectronics announced the VD6281 multispectral ambient light sensor for phone cameras, detecting flicker from 50 Hz to 2 kHz with better than 3% accuracy and also aiding white balance.",
    [
     2
    ]
   ],
   [
    2019,
    "corp",
    "约 2019 年初 ams 推出 TCS3707：RGB + 接近 + 50/60 Hz 闪烁检测的组合传感器，面向手机，目标是消除卷帘快门相机在人工光下的条纹（banding）。",
    "Around early 2019 ams introduced the TCS3707, combining RGB, proximity and 50/60 Hz flicker detection for phones, aimed at removing banding from rolling-shutter cameras under artificial light (approx.).",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 10 月 28 日 ams 发布 TCS3408：闪烁灵敏度是 TCS3707 的三倍，片上 flicker 引擎检测 50/60 Hz，还可把采样序列存入内部缓存，识别最高约 2 kHz 的 PWM LED 闪烁。",
    "On 28 October 2019 ams announced the TCS3408, with three times the flicker sensitivity of the TCS3707; its on-chip engine detects 50/60 Hz and can buffer sample sequences to identify PWM LED flicker up to about 2 kHz.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 4 月 Sony α9 II 固件 2.00 加入高频闪烁对策（Hi Frequency flicker）：用户边看屏幕上的条纹边微调快门速度，应对 LED 屏幕等高于 100/120 Hz 的闪烁。",
    "In April 2020 Sony α9 II firmware 2.00 added high-frequency flicker reduction: the user fine-tunes shutter speed while watching the banding on screen, to handle LED displays and other flicker above 100/120 Hz.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Sony α1 把两种功能并列：Anti-flicker Shoot 只针对 100/120 Hz、只用于静态照片，可配合电子或机械快门自动择时；Variable Shutter 手动微调快门速度，覆盖 LED 等更高频闪烁，照片和视频都能用。",
    "The Sony α1 offered two functions side by side: Anti-flicker Shoot handles only 100/120 Hz for stills and times shots automatically with either electronic or mechanical shutter; Variable Shutter fine-tunes shutter speed manually for higher-frequency flicker such as LEDs, for both stills and movies.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "Canon EOS R6 Mark II 的高频防闪烁（High-Frequency Anti-Flicker）可自动检测 50.0–2011.2 Hz 的光源，并给出能避开条纹的快门速度，把 LED 高频闪烁从纯手动微调变成自动检测。",
    "The Canon EOS R6 Mark II's High-Frequency Anti-Flicker automatically detects light sources from 50.0 to 2011.2 Hz and suggests a shutter speed that avoids banding, turning high-frequency LED flicker from manual tuning into automatic detection.",
    [
     6
    ]
   ],
   [
    2025,
    "ver",
    "Honor Magic8 Pro 采用 ams OSRAM 的 HDR flicker 传感器，采样率最高 20,000 Hz（芯片本身支持 35 kHz、10 kHz 时 14 bit 动态范围），可实时测出灯光和屏幕的闪烁频率与深度。",
    "The Honor Magic8 Pro uses an ams OSRAM HDR flicker sensor sampling at up to 20,000 Hz (the chip supports 35 kHz and 14-bit dynamic range at 10 kHz), measuring the flicker frequency and depth of lights and displays in real time.",
    [
     7
    ]
   ]
  ],
  "now": [
   "相机端：主流无反都有 100/120 Hz 择时拍摄和高频 LED 微调/自动检测；手机端：独立 flicker 传感器已是旗舰标配，采样率从约 2 kHz 提到数十 kHz，结果喂给 ISP 选曝光时间和防条纹。",
   "On cameras, mainstream mirrorless bodies offer 100/120 Hz timed capture plus manual or automatic handling of high-frequency LED flicker. On phones, a dedicated flicker sensor is standard on flagships, with sampling rising from about 2 kHz to tens of kHz, feeding the ISP to pick exposure times and avoid banding."
  ],
  "replaced": [
   "没有被替代；LED 照明普及反而让它更重要。长远看，全局快门和更快读出能减轻条纹，但无法消除帧与帧之间的亮度跳动，仍需频闪检测。",
   "Not replaced; the spread of LED lighting has made it more important. Global shutters and faster readout reduce banding, but cannot remove frame-to-frame brightness swings, so flicker detection is still needed."
  ],
  "refs": [
   {
    "t": "Reducing Flicker (EOS 7D Mark II) - Canon Hong Kong",
    "u": "https://hk.canon/en/support/8202218700"
   },
   {
    "t": "Flicker reduction - Nikon D500 User Manual",
    "u": "https://www.manualsdir.com/manuals/849181/nikon-d500.html?page=260"
   },
   {
    "t": "STMicroelectronics' New Full-Color Ambient Light Sensor with Flicker Detect - Edge AI and Vision Alliance",
    "u": "https://www.edge-ai-vision.com/2019/02/stmicroelectronics-new-full-color-ambient-light-sensor-with-flicker-detect-boosts-camera-performance-in-smartphone-and-iot-devices/"
   },
   {
    "t": "ams high sensitivity optical sensor eliminates flicker artifacts - EEJournal",
    "u": "https://www.eejournal.com/industry_news/ams-high-sensitivity-optical-sensor-eliminates-flicker-artifacts-to-deliver-vibrant-and-distortion-free-smartphone-camera-images-and-videos/"
   },
   {
    "t": "Sony Firmware Update Allows Shutter To Close While Changing Lenses - Shutter Muse",
    "u": "https://shuttermuse.com/sony-firmware-update-allows-shutter-to-close-while-changing-lenses"
   },
   {
    "t": "Differences between the [Anti-flicker Shoot.] and [Variable Shutter] functions - Sony ILCE-1 Help Guide",
    "u": "https://helpguide.sony.net/ilc/2040/v1/en/contents/TP1000426660.html"
   },
   {
    "t": "High-Frequency Anti-Flicker Shooting - Canon EOS R6 Mark II Advanced User Guide",
    "u": "https://cam.start.canon/id/C012/manual/html/UG-04_Shooting-1_0160.html"
   },
   {
    "t": "Honor Magic8 Pro: With integrated flicker scanner from Osram - Notebookcheck",
    "u": "https://www.notebookcheck.net/Honor-Magic8-Pro-With-integrated-flicker-scanner-from-Osram.1204111.0.html"
   }
  ]
 }
};
