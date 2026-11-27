/* 白平衡时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 wb 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：color:awb、color:cct>ctsensor、color:tone>truetone、color:skin */
TIMELINES.wb.hist = {
 "onepush": {
  "stages": [
   [
    1953,
    "idea",
    "RCA 在 1953 年底推出 TK-40 彩色电视摄像机（1954 年 3 月 TK-40A）。三路 R/G/B 信号的色彩平衡全靠视频工程师在控制台上手调，开机要一个多小时，而且不稳定，要频繁重调才能保持白色中性。",
    "RCA introduced the TK-40 colour TV camera in late 1953 (TK-40A in March 1954). Balance between the R/G/B channels was set by hand by video engineers at the console; set-up took more than an hour and was unstable, needing frequent readjustment to keep white neutral.",
    [
     0
    ]
   ],
   [
    1969,
    "corp",
    "RCA 推出 TK-44A 三管 Plumbicon 彩色摄像机，1971 年升级为 TK-44B（加 bias light 减拖影、RGB coring 降噪）。这一代仍要工程师手动 paint，RCA 同时开始研究把调白自动化。",
    "RCA launched the TK-44A three-tube Plumbicon colour camera, upgraded in 1971 to the TK-44B (bias light against lag, RGB coring against noise). Cameras were still painted by hand, and RCA began work on automating set-up.",
    [
     1
    ]
   ],
   [
    1972,
    "paper",
    "RCA 的 Lucas J. Bazin 申请专利《Apparatus for automatic color balancing of television camera signals》（优先权日 1972 年 6 月 19 日，加拿大专利 CA987402 于 1976 年公布），提出用电路自动调整各色通道，使白色参考呈中性。",
    "RCA's Lucas J. Bazin filed 'Apparatus for automatic color balancing of television camera signals' (priority 19 June 1972; Canadian patent CA987402 published 1976): circuitry that adjusts the colour channels automatically so a white reference comes out neutral.",
    [
     2
    ]
   ],
   [
    1972,
    "proto",
    "据 RCA 1973 年的回顾，RCA 在 NAB 展会上首次演示 TK-44 系列的自动化设计（约 1972 年），为后续一键调白的量产机型铺路。",
    "According to RCA's own 1973 retrospective, the company first demonstrated its camera automation designs for the TK-44 series at NAB (c. 1972), paving the way for a production one-push model.",
    [
     1
    ]
   ],
   [
    1973,
    "mass",
    "RCA TK-45A 发布（Broadcast News 1973 年 11 月号）：把镜头对准场景里的白色区域或白卡，按一下按钮即设定白电平；盖上镜头盖时自动设定黑电平，并配自动光圈。新电路放进重新设计的 CCU，是一键白平衡在广播摄像机上的首次商品化。",
    "RCA announced the TK-45A (Broadcast News, Nov 1973): aim at a white area of the scene or a white reference card and push a button to set white level; black level sets automatically whenever the lens is capped, plus automatic iris. The new circuitry sat in a redesigned CCU — the first commercial one-push white balance on a broadcast camera.",
    [
     1
    ]
   ],
   [
    1978,
    "rival",
    "Marconi 发布 Mark IX 彩色摄像机系统（演播室与便携两款），自动黑平衡、自动白平衡和自动光圈作为选件，并可选 diascope 自动配准（SMPTE Journal 1978 年 9 月新品栏目）。一键调白成为高端广播机的竞争标配。",
    "Marconi announced the Mark IX colour camera system (studio and portable models), offering automatic black balance, automatic white balance and auto iris as options, plus diascope auto-registration (SMPTE Journal new-products column, Sept 1978). One-push white became a competitive feature of high-end broadcast cameras.",
    [
     3
    ]
   ],
   [
    1981,
    "mass",
    "家用彩色摄像机普及：Hitachi VK-C800（1981）只有可调白平衡和一个「outdoor」开关两项调节，RCA CC010 也提供可调白平衡，用户对着白色物体手动把颜色调正。",
    "Consumer colour cameras spread: the Hitachi VK-C800 (1981) offered only adjustable white balance and an 'outdoor' switch, and the RCA CC010 also had adjustable white balance, set by the user against a white subject.",
    [
     4
    ]
   ],
   [
    1984,
    "ver",
    "Panasonic PK-958 家用摄像机的白平衡调整键会在传感器前插入一块扩散片，把进来的光平均后作为白参考，相当于不用白卡的一键白平衡。",
    "On the Panasonic PK-958 home video camera, the white-balance key inserted a diffuser in front of the sensor to average the incoming light as the white reference — one-push white balance without a white card.",
    [
     4
    ]
   ],
   [
    1996,
    "ver",
    "Sony EVI-D30 PTZ 摄像机（1996）通过 VISCA 指令提供 ATW、One Push、Indoor、Outdoor 等白平衡模式，可经 RS-232C 远程触发一键白平衡；会议与监控 PTZ 机从此沿用「One Push WB」这一叫法。",
    "The Sony EVI-D30 PTZ camera (1996) exposed ATW, One Push, Indoor and Outdoor white-balance modes over VISCA, so one-push WB could be triggered remotely via RS-232C; conferencing and surveillance PTZ cameras have kept the 'One Push WB' name ever since.",
    [
     5
    ]
   ],
   [
    2024,
    "ver",
    "Sony PXW-Z200 / HXR-NX800 摄录机仍保留完整的一键白平衡体系：WHT BAL 开关选 A/B 记忆或 PRESET，对白纸按 WB SET 即测定并写入记忆；One-Push AWB 结果可存入当前记忆，或用来临时加速 ATW 收敛。",
    "The Sony PXW-Z200 / HXR-NX800 camcorders keep the full one-push system: the WHT BAL switch selects memory A/B or PRESET; pressing WB SET on white paper measures and stores to memory, and One-Push AWB can either save to the selected memory or temporarily speed up ATW.",
    [
     6
    ]
   ]
  ],
  "now": [
   "广播、ENG 摄录机、电影机和 PTZ 摄像机仍把一键白平衡（对白卡测定后锁定，存入 A/B 记忆）作为标准操作，因为它在光源固定时比连续自动更稳定、不会随画面内容漂移。",
   "Broadcast, ENG, cinema and PTZ cameras still treat one-push white balance (measure a white card, lock, store to memory A/B) as standard practice, because under fixed lighting it is steadier than continuous auto and does not drift with scene content."
  ],
  "replaced": [
   "在家用摄像机和手机上，它已被连续工作的 ATW / AWB（自动跟踪白平衡）取代，用户不再需要白卡；在照相机上，同一原理演变为「自定义白平衡（Preset / Custom WB）」。",
   "On consumer camcorders and phones it has been replaced by continuous ATW/AWB (auto-tracing white balance) that needs no white card; on still cameras the same principle lives on as custom (Preset) white balance."
  ],
  "refs": [
   {
    "t": "RCA TK-40/41 — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/RCA_TK-40/41"
   },
   {
    "t": "RCA Broadcast News No. 151 (Nov 1973), 'The Automatic Color Camera'",
    "u": "https://www.worldradiohistory.com/ARCHIVE-RCA/RCA-Broadcast-News/RCA-151.pdf"
   },
   {
    "t": "CA987402A Apparatus for automatic color balancing of television camera signals",
    "u": "https://patents.google.com/patent/CA987402A/GUID-C5D7CC26-194C-43D0-91A1-9AE8C70A9BFF.html"
   },
   {
    "t": "SMPTE Journal Vol. 87 No. 9 (1978), New Products",
    "u": "https://journal.smpte.org/periodicals/SMPTE%20Journal/87/9/25/07241435.pdf"
   },
   {
    "t": "gekk.info — camera collection",
    "u": "https://gekk.info/articles/camera_collection.html"
   },
   {
    "t": "CCD camera features pan, tilt, and zoom (Vision Systems Design, 1996)",
    "u": "https://www.vision-systems.com/cameras-accessories/article/16735947/ccd-camera-features-pan-tilt-and-zoom"
   },
   {
    "t": "Sony PXW-Z200 / HXR-NX800 Help Guide: Adjusting the White Balance Manually",
    "u": "https://helpguide.sony.net/pro/z200nx800/v1/en/contents/wb_manual.html"
   }
  ]
 },
 "dispct": {
  "stages": [
   [
    1964,
    "paper",
    "Deane B. Judd、David MacAdam、Günter Wyszecki 分析加拿大、纽约、英国测得的 622 条日光光谱，发表日光色度的统一模型；1967 年 CIE 正式定义 D 系列标准光源，D65（约 6504K）后来成为电视和 sRGB 的白点。",
    "Deane B. Judd, David MacAdam and Günter Wyszecki analysed 622 daylight spectra measured in Canada, New York and England and published a unified daylight model in 1964; CIE formalised the D-series illuminants in 1967, and D65 (~6504 K) later became the white point of television and sRGB.",
    [
     0
    ]
   ],
   [
    1996,
    "mass",
    "数控 CRT 显示器开始在 OSD 里提供可选色温：如 IBM P70 17 英寸 Trinitron（约 1996）有 3 档色温可选。常见档位 9300K 对应日本 NTSC-J 电视白点，6500K 对应美国 NTSC 与后来的 sRGB。",
    "Digitally controlled CRTs began offering selectable colour temperature in the OSD: the IBM P70 17-inch Trinitron (c. 1996), for example, had three presets. The common 9300 K setting matches the Japanese NTSC-J TV white point, while 6500 K matches US NTSC and later sRGB.",
    [
     1,
     8
    ]
   ],
   [
    1996,
    "paper",
    "HP 的 Michael Stokes、Ricardo Motta 与 Microsoft 的 Matthew Anderson、Srinivasan Chandrasekar 于 1996 年 11 月 5 日提出 sRGB：白点 D65（x=0.3127, y=0.3291），参考亮度 80 cd/m²、环境 64 lux。从此 PC 显示器的「正确」白点是 6500K，而不是当时常见的 9300K 默认。",
    "On 5 Nov 1996 Michael Stokes and Ricardo Motta (HP) with Matthew Anderson and Srinivasan Chandrasekar (Microsoft) proposed sRGB: D65 white (x=0.3127, y=0.3291), 80 cd/m² reference luminance, 64 lux ambient. From then on the 'correct' PC white point was 6500 K rather than the common 9300 K default.",
    [
     2
    ]
   ],
   [
    1998,
    "corp",
    "VESA 于 1998 年 9 月 11 日发布 Monitor Control Command Set（MCCS）第 1 版，通过 DDC/CI 让电脑软件读写显示器设置；其中 VCP 代码 0x14「Select color preset」用来切换 6500K 等色温预设。",
    "VESA released Monitor Control Command Set (MCCS) version 1 on 11 Sept 1998, letting software read and write monitor settings over DDC/CI; VCP code 0x14 'Select color preset' switches colour-temperature presets such as 6500 K.",
    [
     3
    ]
   ],
   [
    1999,
    "ver",
    "sRGB 经 IEC 标准化为 IEC 61966-2-1，修正了原提案中的一处舍入误差并澄清观看条件；6500K/sRGB 模式随之成为显示器 OSD 的标准选项。",
    "sRGB was standardised as IEC 61966-2-1, correcting a rounding error in the proposal and clarifying viewing conditions; a 6500 K/sRGB mode then became a standard monitor OSD option.",
    [
     2
    ]
   ],
   [
    2007,
    "ver",
    "Windows Vista 加入 High-Level Monitor Configuration API，SetMonitorColorTemperature 等函数通过 VESA MCCS（I²C）改变显示器白点，操作系统层面可以切换色温预设。",
    "Windows Vista added the High-Level Monitor Configuration API; functions such as SetMonitorColorTemperature change the monitor white point via VESA MCCS over I²C, so the OS itself can switch colour-temperature presets.",
    [
     4
    ]
   ],
   [
    2009,
    "rival",
    "Michael Herf 与 Lorna Herf 于 2009 年 2 月发布 f.lux，按当地日出日落时间自动把屏幕色温调暖，不需要用户手动选档，开启了「按时间自动调色温」这条路线。",
    "Michael and Lorna Herf released f.lux in Feb 2009, automatically warming the screen according to local sunrise and sunset with no manual preset selection — the start of time-based automatic display colour temperature.",
    [
     5
    ]
   ],
   [
    2013,
    "mass",
    "Nokia 在 Lumia 925 和 Lumia 1020 上推出「颜色配置」：色温（cool–neutral–warm）和饱和度（natural–enhanced–vivid）两个滑块，各 10 级并带示例图预览，随 Lumia Amber 更新推送给其他 Windows Phone 8 Lumia。",
    "Nokia introduced a colour profile setting on the Lumia 925 and 1020: colour temperature (cool–neutral–warm) and saturation (natural–enhanced–vivid) sliders, 10 steps each with a preview carousel, rolled out to other Windows Phone 8 Lumias in the Lumia Amber update.",
    [
     6
    ]
   ],
   [
    2016,
    "rival",
    "Apple 在 iOS 9.3 加入 Night Shift；2016 年 3 月 21 日发布的 9.7 英寸 iPad Pro 引入 True Tone，用四通道环境光传感器实时调整屏幕白平衡以匹配周围光线，手动色温档位开始让位给自动适配。",
    "Apple added Night Shift in iOS 9.3, and the 9.7-inch iPad Pro announced on 21 March 2016 introduced True Tone, using four-channel ambient sensors to adjust the display's white balance to the surrounding light in real time — manual presets began giving way to automatic adaptation.",
    [
     5,
     7
    ]
   ]
  ],
  "now": [
   "显示器 OSD 仍提供 5000K（D50，桌面出版）、6500K（sRGB、日常 PC）、9300K（NTSC-J）等色温预设，EIZO 机型可在 4000–10000K 间按 500K 一档细调；手机和笔记本则多用环境光传感器自动调白点，手动滑块退居设置深处。",
   "Monitor OSDs still offer presets such as 5000 K (D50, desktop publishing), 6500 K (sRGB, everyday PC) and 9300 K (NTSC-J), with EIZO models adjustable from 4000 to 10000 K in 500 K steps; phones and laptops mostly adjust the white point automatically from ambient-light sensors, leaving manual sliders buried in settings."
  ],
  "replaced": [
   "在移动设备上，手动选色温逐渐被 True Tone 等环境自适应白点和 Night Shift / Night light 等定时调色取代；在专业领域则被硬件校准 + ICC 色彩管理取代。",
   "On mobile devices manual presets are being replaced by ambient-adaptive white points (True Tone) and scheduled warming (Night Shift / Night light); in professional work, by hardware calibration plus ICC colour management."
  ],
  "refs": [
   {
    "t": "Illuminant D65 — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Illuminant_D65"
   },
   {
    "t": "VOGONS forum thread on CRT colour temperature (IBM P70)",
    "u": "https://www.vogons.org/viewtopic.php?p=1312295"
   },
   {
    "t": "A Standard Default Color Space for the Internet - sRGB (W3C)",
    "u": "https://www.w3.org/Graphics/Color/sRGB.html"
   },
   {
    "t": "Monitor Control Command Set — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Monitor_Control_Command_Set"
   },
   {
    "t": "SetMonitorColorTemperature function — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/windows/win32/api/highlevelmonitorconfigurationapi/nf-highlevelmonitorconfigurationapi-setmonitorcolortemperature"
   },
   {
    "t": "f.lux — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/F.lux"
   },
   {
    "t": "What's your colour profile? (Windows Blogs, 2013)",
    "u": "https://blogs.windows.com/devices/2013/08/07/whats-your-colour-profile/"
   },
   {
    "t": "Apple Introduces 9.7-inch iPad Pro (Apple Newsroom, 2016)",
    "u": "https://www.apple.com/newsroom/2016/03/21Apple-Introduces-9-7-inch-iPad-Pro/"
   },
   {
    "t": "EIZO: Color temperature on an LCD monitor",
    "u": "https://www.eizo.com/library/basics/color_temperature_on_an_LCD_monitor/"
   }
  ]
 },
 "presets": {
  "stages": [
   [
    1912,
    "idea",
    "Frederick Wratten 与 C. E. K. Mees 把公司卖给 Eastman Kodak，Kodak 开始生产 Wratten 滤镜。胶片时代的「白平衡预设」就是选日光片或灯光片，再配 80A（3200K→约 5500K）或 85B（5500K→3200K）转换滤镜。",
    "Frederick Wratten and C. E. K. Mees sold their firm to Eastman Kodak, which began making Wratten filters. In the film era, a 'white-balance preset' meant choosing daylight or tungsten film plus an 80A (3200 K→~5500 K) or 85B (5500 K→3200 K) conversion filter.",
    [
     0
    ]
   ],
   [
    1995,
    "mass",
    "Nikon 与 Fujix 合作的 Nikon E2（1995，同款为 Fujix DS-505）提供自动加 5 种手动白平衡：白炽灯 3000K、荧光灯（日光型 6700K / 白色 5000K / 冷白 4200K）、晴天 5300K、阴天 6500K、阴影 8000K，按住 W.Bal 键转拨盘切换。",
    "The Nikon E2 (1995, co-developed with Fujix and sold as the Fujix DS-505) offered auto plus five manual white balances — incandescent 3000 K, fluorescent (daylight 6700 K / white 5000 K / cool white 4200 K), fine 5300 K, cloudy 6500 K, shade 8000 K — selected by holding W.Bal and turning the command dial.",
    [
     1
    ]
   ],
   [
    1998,
    "ver",
    "Kodak Professional DCS 520 的 W.BAL 菜单提供 AUTO、日光、钨丝灯、荧光灯、闪光灯 5 种模式，另可拍灰卡做自定义白平衡；配套 TWAIN 驱动还能在拍摄后改白平衡。",
    "The Kodak Professional DCS 520's W.BAL menu offered AUTO, Daylight, Tungsten, Fluorescent and Flash, plus custom balance from a grey-card shot; its TWAIN driver also allowed changing white balance after capture.",
    [
     2
    ]
   ],
   [
    1999,
    "ver",
    "Nikon D1 的预设各标注名义色温：白炽灯约 3000K、荧光灯约 4200K、直射日光约 5200K、闪光灯约 5400K、阴天约 6000K、阴影约 7000K，另有 PRE 白卡测定；此后单反沿用这一套档位名称。",
    "The Nikon D1 labelled each preset with a nominal temperature — incandescent ~3000 K, fluorescent ~4200 K, direct sun ~5200 K, flash ~5400 K, overcast ~6000 K, shade ~7000 K — plus PRE measurement from a white object; DSLRs have kept this set of names ever since.",
    [
     3
    ]
   ],
   [
    2001,
    "ver",
    "Canon EOS-1D 加入「色温」模式，可在 2800K–10000K 之间按 100K 一档直接输入 K 值，预设从几个固定档位扩展为连续可调。",
    "The Canon EOS-1D added a colour-temperature mode: enter a Kelvin value directly from 2800 to 10000 K in 100 K steps, turning fixed presets into a continuous dial.",
    [
     4
    ]
   ],
   [
    2009,
    "mass",
    "Android 2.0（API level 5）的 Camera.Parameters 标准化了手机白平衡预设：AUTO、INCANDESCENT、FLUORESCENT、WARM_FLUORESCENT、DAYLIGHT、CLOUDY_DAYLIGHT、TWILIGHT、SHADE 八档，由 setWhiteBalance() 选择。",
    "Android 2.0 (API level 5) standardised phone white-balance presets in Camera.Parameters: AUTO, INCANDESCENT, FLUORESCENT, WARM_FLUORESCENT, DAYLIGHT, CLOUDY_DAYLIGHT, TWILIGHT and SHADE, selected with setWhiteBalance().",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "iOS 8 向开发者开放手动白平衡：AVCaptureWhiteBalanceTemperatureAndTintValues 用色温（K）与 tint（绿–品红偏移）描述预设，并可与 RGB 增益互相换算，第三方相机 App 由此能做任意色温档位。",
    "iOS 8 opened manual white balance to developers: AVCaptureWhiteBalanceTemperatureAndTintValues expresses a setting as temperature (K) and tint (green–magenta offset), convertible to and from RGB gains, letting third-party camera apps offer any preset.",
    [
     6
    ]
   ],
   [
    2014,
    "ver",
    "Android 5.0（API 21）废弃 Camera.Parameters 的 setWhiteBalance()，改由 camera2 API 管理白平衡，应用可在预设之外直接控制白平衡增益。",
    "Android 5.0 (API 21) deprecated Camera.Parameters.setWhiteBalance() in favour of the camera2 API, which lets apps go beyond presets to control white-balance gains directly.",
    [
     5
    ]
   ],
   [
    2024,
    "ver",
    "专业摄录机仍以预设为基础：Sony PXW-Z200 / HXR-NX800 在 Custom 模式提供 3200K、4300K、5600K、6300K，Log 模式提供 3200K、4300K、5500K，并可按 100K 微调。",
    "Pro camcorders still build on presets: the Sony PXW-Z200 / HXR-NX800 offer 3200, 4300, 5600 and 6300 K in Custom mode and 3200, 4300 and 5500 K in Log mode, each adjustable in 100 K steps.",
    [
     7
    ]
   ]
  ],
  "now": [
   "相机、摄录机和手机 Pro 模式都保留日光 / 阴天 / 阴影 / 钨丝灯 / 荧光灯 / 闪光灯预设，并普遍加上 K 值直输和 A–B、G–M 微调。",
   "Cameras, camcorders and phone Pro modes all keep daylight / cloudy / shade / tungsten / fluorescent / flash presets, now generally alongside direct Kelvin entry and A–B / G–M fine-tuning."
  ],
  "replaced": [
   "日常拍摄中预设已基本让位给 AWB（手机原生相机多数不再显示预设）；需要精确时被 K 值直输、自定义白平衡和 RAW 后期取代，固定档位成为快捷入口。",
   "For everyday shooting presets have largely given way to AWB (most stock phone camera apps no longer show them); where precision matters they are superseded by Kelvin entry, custom white balance and RAW editing, leaving the fixed presets as shortcuts."
  ],
  "refs": [
   {
    "t": "Wratten number — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Wratten_number"
   },
   {
    "t": "Nikon E2/E2s User Manual — white balance modes",
    "u": "https://www.manualsdir.com/manuals/632959/nikon-e2-e2s.html?page=39"
   },
   {
    "t": "Kodak Pro DCS 520 Review — DPReview",
    "u": "https://www.dpreview.com/reviews/kodakdcs520/5"
   },
   {
    "t": "Nikon D1 manual — White Balance",
    "u": "https://www.manualslib.com/manual/299410/Nikon-D1.html?page=44"
   },
   {
    "t": "Canon EOS-1D review — Imaging Resource",
    "u": "https://imaging-resource.com/PRODS/EOS1D/1DA7.HTM"
   },
   {
    "t": "Camera.Parameters — Android Developers",
    "u": "https://developer.android.com/reference/android/hardware/Camera.Parameters"
   },
   {
    "t": "Manual Camera Controls in Xamarin.iOS — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-gb/xamarin/ios/user-interface/controls/intro-to-manual-camera-controls"
   },
   {
    "t": "Sony PXW-Z200 / HXR-NX800 Help Guide: Adjusting the White Balance Manually",
    "u": "https://helpguide.sony.net/pro/z200nx800/v1/en/contents/wb_manual.html"
   }
  ]
 },
 "custom": {
  "stages": [
   [
    1973,
    "idea",
    "原理来自广播摄像机：RCA TK-45A 对准场景白色区域或白卡按一下按钮即设定白电平，把「对中性参考测增益并锁定」做成了标准操作。",
    "The idea came from broadcast cameras: on the RCA TK-45A you aimed at a white area or white card and pushed a button to set white level, making 'measure gains on a neutral reference and lock them' a standard operation.",
    [
     0
    ]
   ],
   [
    1998,
    "mass",
    "Kodak Professional DCS 520 在机身上提供自定义白平衡：拍一张充满画面的灰卡或白墙（不能过曝），在菜单中把这张图设为后续拍摄的白参考。",
    "The Kodak Professional DCS 520 offered on-camera custom white balance: shoot a frame-filling grey card or white wall (not overexposed) and set that image as the white reference for subsequent shots in the menu.",
    [
     1
    ]
   ],
   [
    1998,
    "rival",
    "同一台 DCS 520 的 TWAIN 驱动允许拍后改白平衡，并带取色器从已拍图像中点选中性区域提取白平衡——这是后来 RAW 后期吸管白平衡这条竞争路线的雏形。",
    "The same DCS 520's TWAIN driver allowed white balance to be changed after capture, with a picker to extract it from a neutral area of a captured image — an early form of the RAW eyedropper workflow that later competed with in-camera custom WB.",
    [
     1
    ]
   ],
   [
    1999,
    "ver",
    "Nikon D1 的 PRE（Preset white balance）模式以白色物体为参考测定白平衡，与 6 种光源预设并列，此后 Nikon 一直沿用「PRE」名称。",
    "The Nikon D1's PRE (preset white balance) mode measured white balance from a white object, alongside six light-source presets; Nikon has used the 'PRE' name ever since.",
    [
     2
    ]
   ],
   [
    2000,
    "ver",
    "Canon EOS D30 的自定义白平衡改用存储卡上已拍的白卡照片：在菜单中选一张作为白参考，可在卡上存多个参考随时切换，还能把同一参考图拷给同场其他摄影师。",
    "The Canon EOS D30's custom white balance used a white-card photo already on the card: pick one in the menu as the reference, keep several on the card to switch between, and even share the same reference image with other photographers at the event.",
    [
     3
    ]
   ],
   [
    2004,
    "ver",
    "Nikon D2X 可存 5 组预设白平衡 d-0 至 d-4：d-0 保存最近一次测定值，可复制到 d-1–d-4，也可从卡上照片复制白平衡并附注释。",
    "The Nikon D2X stored five preset white balances, d-0 to d-4: d-0 holds the latest measurement and can be copied to d-1–d-4, which can also take white balance (and a comment) copied from a photo on the card.",
    [
     4
    ]
   ],
   [
    2014,
    "ver",
    "iOS 8 在 AVFoundation 中加入 Gray World 支持：App 提示用户把灰卡放到画面中央至少 50%，读取 grayWorldDeviceWhiteBalanceGains 等其稳定后，用 setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains 锁定，第三方相机 App 由此实现手机灰卡白平衡。",
    "iOS 8 added Gray World support to AVFoundation: an app has the user fill at least 50% of the centre with a grey card, waits for grayWorldDeviceWhiteBalanceGains to settle, then locks them with setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains — bringing grey-card white balance to third-party phone camera apps.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "Android 5.0（API 21）的 camera2 加入 COLOR_CORRECTION_GAINS 与 COLOR_CORRECTION_MODE：关闭 AWB 后可直接写入 RGGB 四通道白平衡增益，Android 第三方相机 App 也能实现灰卡测定后锁定增益。",
    "Android 5.0 (API 21) camera2 added COLOR_CORRECTION_GAINS and COLOR_CORRECTION_MODE: with AWB off, apps can write the RGGB white-balance gains directly, so third-party Android camera apps can also measure a grey card and lock the gains.",
    [
     7
    ]
   ],
   [
    2020,
    "mass",
    "Sony Xperia 1 II 的 Photography Pro 把灰卡自定义白平衡做进原生相机：对准灰卡按 Set 测定，提供 Custom 1/2/3 三组记忆，并可在 A–B / G–M 网格上微调；Cinema Pro 也加入灰卡设白。",
    "Sony's Xperia 1 II built grey-card custom white balance into the stock camera via Photography Pro: aim at a grey card and press Set, store to three memories (Custom 1/2/3), and fine-tune on an A–B / G–M grid; Cinema Pro gained grey-card white setting too.",
    [
     6
    ]
   ]
  ],
  "now": [
   "相机、电影机和部分手机 Pro 模式都提供多组自定义白平衡记忆；拍摄现场仍常用灰卡或白卡测定。",
   "Cameras, cinema cameras and some phone Pro modes offer several custom white-balance memories; on set, grey or white cards are still used to measure."
  ],
  "replaced": [
   "在 RAW 工作流中，现场自定义白平衡部分被「拍一张灰卡、后期用吸管统一校正」取代；日常拍摄则多由 AWB 完成，自定义白平衡只在混合光、商品或翻拍等需要精确色彩时使用。",
   "In RAW workflows on-site custom white balance is partly replaced by shooting a grey card and correcting with an eyedropper in post; everyday shooting is handled by AWB, leaving custom WB for mixed light, product and reproduction work where colour must be exact."
  ],
  "refs": [
   {
    "t": "RCA Broadcast News No. 151 (Nov 1973), 'The Automatic Color Camera'",
    "u": "https://www.worldradiohistory.com/ARCHIVE-RCA/RCA-Broadcast-News/RCA-151.pdf"
   },
   {
    "t": "Kodak Pro DCS 520 Review — DPReview",
    "u": "https://www.dpreview.com/reviews/kodakdcs520/5"
   },
   {
    "t": "Nikon D1 manual — White Balance",
    "u": "https://www.manualslib.com/manual/299410/Nikon-D1.html?page=44"
   },
   {
    "t": "Canon EOS D30 review — Imaging Resource",
    "u": "https://www.imaging-resource.com/PRODS/D30/D30A10.HTM"
   },
   {
    "t": "Nikon D2X manual — Copying White Balance from d-0 to Presets d-1 – d-4",
    "u": "https://www.manualslib.com/manual/327477/Nikon-D2x.html?page=80"
   },
   {
    "t": "Manual Camera Controls in Xamarin.iOS — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-gb/xamarin/ios/user-interface/controls/intro-to-manual-camera-controls"
   },
   {
    "t": "Sony Xperia 1 II review — GSMArena",
    "u": "https://www.gsmarena.com/sony_xperia_1_ii-review-2115p5.php"
   },
   {
    "t": "CaptureRequest (COLOR_CORRECTION_GAINS) — Android Developers",
    "u": "https://developer.android.com/reference/android/hardware/camera2/CaptureRequest"
   }
  ]
 },
 "raw": {
  "stages": [
   [
    1991,
    "mass",
    "Kodak 推出首台商用数码单反 DCS（DCS 100，Nikon F3 机身 + 1.3MP KAF-1300 CCD + 肩挂存储单元）；DCS 系列把未插值的传感器数据存成私有 raw 格式（后称 DCR, Digital Camera Raw），要在电脑上用 Kodak 软件转换成图。",
    "Kodak launched the first commercial DSLR, the DCS (DCS 100: a Nikon F3 body, a 1.3MP KAF-1300 CCD and a shoulder-slung storage unit). The DCS line stored un-interpolated sensor data in a proprietary raw format (later called DCR, Digital Camera Raw) that had to be converted on a computer with Kodak software.",
    [
     0
    ]
   ],
   [
    1998,
    "mass",
    "Kodak DCS 520（与 Canon EOS-D2000 同机）的 TWAIN 驱动可以在拍完后重新设定白平衡，还能用吸管在图里点取中性灰得到自定义白平衡，DPReview 称之为“极其有用的功能”。",
    "The TWAIN driver of the Kodak DCS 520 (twin of the Canon EOS-D2000) let users change white balance after the shot and pick a neutral with an eyedropper for a custom white balance; DPReview called it an amazingly useful feature.",
    [
     1
    ]
   ],
   [
    1999,
    "mass",
    "Nikon D1（1999 年 6 月发布）提供 RAW（NEF）记录，配合选购的 Nikon Capture 软件可在电脑上改 RAW 的白平衡；它以远低于 Kodak 的价格让专业用户普及了 RAW 工作流。",
    "The Nikon D1 (announced June 1999) recorded RAW (NEF) files whose white balance could be changed on a computer with the optional Nikon Capture software; priced far below Kodak, it brought the RAW workflow to the professional mainstream.",
    [
     2
    ]
   ],
   [
    2001,
    "paper",
    "ISO 12234-2（TIFF/EP）被批准为 raw 图像的标准格式框架，但各厂商仍沿用各自私有 raw。",
    "ISO 12234-2 (TIFF/EP) was ratified as a standard framework for raw images, though camera makers kept their own proprietary raw formats.",
    [
     4
    ]
   ],
   [
    2003,
    "ver",
    "2003 年 2 月 19 日 Adobe 发布 Thomas Knoll 开发的 Camera Raw 1.0（Photoshop 7.0.1 插件，与 JPEG 2000 插件合售 99 美元），可调白平衡、色温（temperature）、色调（tint）等，支持 Canon、Fujifilm、Minolta、Nikon、Olympus 的 raw。",
    "On 19 February 2003 Adobe released Camera Raw 1.0, written by Thomas Knoll (a Photoshop 7.0.1 plug-in sold with the JPEG 2000 plug-in for $99). It adjusted white balance, temperature and tint among others, and read raw files from Canon, Fujifilm, Minolta, Nikon and Olympus.",
    [
     3
    ]
   ],
   [
    2004,
    "corp",
    "2004 年 9 月 27 日 Adobe 公布 DNG（Digital Negative）1.0.0.0 规范：兼容 TIFF/EP 的公开 raw 格式，想解决私有 raw 的长期可读性问题；1.1（2005）修正了首版缺陷。",
    "On 27 September 2004 Adobe published the DNG (Digital Negative) 1.0.0.0 specification, an open raw format compatible with TIFF/EP meant to fix the long-term readability problem of proprietary raws; version 1.1 (2005) corrected flaws in the first release.",
    [
     4
    ]
   ],
   [
    2005,
    "mass",
    "首批机内直接写 DNG 的设备：Leica DMR 数码后背（2005 年 6 月）、Hasselblad H2D（7 月，第一台真正的单反）、Ricoh GR Digital（10 月，第一台卡片机）；2006 年 Pentax K10D、Leica M8 跟进。",
    "The first devices to write DNG natively: the Leica DMR digital back (June 2005), the Hasselblad H2D (July, the first true DSLR) and the Ricoh GR Digital (October, the first compact); the Pentax K10D and Leica M8 followed in 2006.",
    [
     4
    ]
   ],
   [
    2009,
    "ver",
    "DNG 1.3 加入 Opcode，可把镜头畸变、暗角等算法处理写进文件让转换器执行；此前 1.2（2008）已加入 Camera Profile 描述相机色彩。",
    "DNG 1.3 added opcodes, letting algorithmic processing such as lens distortion and vignetting correction be stored in the file for the converter to apply; version 1.2 (2008) had already added camera profiles for colour description.",
    [
     4
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 11 月 Nokia Camera 更新让 Lumia 1520 能同时存 JPEG 和 DNG raw，Lumia 1020 随 2014 年初 Lumia Black 更新获得同样功能，这是智能手机首次输出 DNG。",
    "In November 2013 a Nokia Camera update let the Lumia 1520 save DNG raw alongside JPEG, and the Lumia 1020 gained it with the Lumia Black update in early 2014: the first smartphones to output DNG.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "Android 5.0 Lollipop（API level 21）的 Camera2 API 开放 RAW_SENSOR 输出，并提供 DngCreator 类把 raw 缓冲写成 DNG，首批支持的是 Nexus 5 / Nexus 6。",
    "The Camera2 API in Android 5.0 Lollipop (API level 21) exposed RAW_SENSOR output and added the DngCreator class to save raw buffers as DNG, first supported on the Nexus 5 and Nexus 6.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 12 月 iOS 14.3 为 iPhone 12 Pro / Pro Max 带来 Apple ProRAW：把 Smart HDR、Deep Fusion、夜间模式等多帧计算结果存成 DNG，单张约 25MB，白平衡等仍可后期重设。",
    "In December 2020 iOS 14.3 brought Apple ProRAW to the iPhone 12 Pro / Pro Max, saving the multi-frame output of Smart HDR, Deep Fusion and Night mode as a DNG of about 25MB, with white balance still adjustable afterwards.",
    [
     7
    ]
   ],
   [
    2023,
    "ver",
    "DNG 1.7 加入 JPEG XL 压缩，在保持 raw 可编辑性的同时大幅缩小文件；1.6（2021）已加入 64 位 BigTIFF 与语义蒙版。",
    "DNG 1.7 added JPEG XL compression, shrinking files greatly while keeping them editable as raw; version 1.6 (2021) had added 64-bit BigTIFF and semantic masks.",
    [
     4
    ]
   ],
   [
    2026,
    "ver",
    "DNG 以 ISO 12234-4:2026《Digital negative format》发布为国际标准，成为 raw 的正式公开标准。",
    "DNG was published as the international standard ISO 12234-4:2026 (Digital negative format), making it the official open standard for raw.",
    [
     4
    ]
   ]
  ],
  "now": [
   "RAW 已是相机和旗舰手机的标配：白平衡只作为元数据记录，后期可随意重选色温/色调；手机端以 ProRAW 等“计算 raw”为主，DNG 在 2026 年成为 ISO 标准，但 Canon、Nikon、Sony 等仍主要用私有 raw。",
   "RAW is standard on cameras and flagship phones: white balance is stored only as metadata, so temperature and tint can be re-chosen freely afterwards. Phones mainly use computational raws such as ProRAW; DNG became an ISO standard in 2026, though Canon, Nikon, Sony and others still mainly use proprietary raws."
  ],
  "replaced": [
   "没有被替代。变化在于手机的“raw”越来越多是多帧合成后的线性数据（ProRAW），而不是单帧传感器原始值，但白平衡仍可后改。",
   "Not replaced. The change is that phone 'raw' is increasingly multi-frame merged linear data (ProRAW) rather than single-frame sensor values, but white balance remains adjustable afterwards."
  ],
  "refs": [
   {
    "t": "Kodak DCS - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Kodak_DCS"
   },
   {
    "t": "Kodak Pro DCS 520 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/kodakdcs520/5"
   },
   {
    "t": "Nikon D1 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/nikond1/"
   },
   {
    "t": "Adobe Camera RAW & JPEG 2000 plugins - DPReview",
    "u": "https://www.dpreview.com/articles/1460986292/adoberawplugin"
   },
   {
    "t": "Digital Negative - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Digital_Negative"
   },
   {
    "t": "Nokia Camera RAW DNG support available now - Windows Blog",
    "u": "https://blogs.windows.com/devices/2013/11/20/nokia-camera-raw-dng-support-available-now/"
   },
   {
    "t": "DngCreator - Android Developers",
    "u": "https://developer.android.com/reference/android/hardware/camera2/DngCreator"
   },
   {
    "t": "Apple's Highly-Anticipated ProRAW is Now Available - PetaPixel",
    "u": "https://petapixel.com/2020/12/14/apples-highly-anticipated-proraw-is-now-available"
   }
  ]
 },
 "kelvin": {
  "stages": [
   [
    1931,
    "paper",
    "Raymond Davis 发表第一篇专论“相关色温”（CCT）的论文，用 Planck 黑体轨迹给非黑体光源定义等效色温；同期 Deane B. Judd 研究均匀色度图来估算 CCT。",
    "Raymond Davis published the first paper devoted to correlated colour temperature (CCT), defining an equivalent temperature on the Planckian locus for non-blackbody sources; Deane B. Judd meanwhile worked on uniform chromaticity diagrams to estimate CCT.",
    [
     1
    ]
   ],
   [
    1932,
    "idea",
    "Irwin G. Priest 发现两光源的可察觉差异与色温倒数之差成正比，提出 mired（微倒度）；摄影的色温转换滤镜、灯光色纸（CTB/CTA）从此按 mired 计算。",
    "Irwin G. Priest observed that the just-noticeable difference between illuminants tracks the difference of reciprocal temperatures, giving rise to the mired; photographic conversion filters and CTB/CTA gels have been rated in mireds ever since.",
    [
     0
    ]
   ],
   [
    1968,
    "paper",
    "Alan Robertson 提出查表 + 等温线 mired 线性插值求 CCT 的方法，在计算机普及前就能实用计算。",
    "Alan Robertson introduced a lookup-table method interpolating isotherm mired values to compute CCT, practical even before computers were common.",
    [
     1
    ]
   ],
   [
    1992,
    "paper",
    "Calvin McCamy 给出 CCT 的三次多项式近似公式，日光范围误差小于 2K，后来常被相机与软件用来在色温与色度之间换算。",
    "Calvin McCamy published a cubic approximation for CCT with under 2K error for daylight, later widely used by cameras and software to convert between temperature and chromaticity.",
    [
     1
    ]
   ],
   [
    2001,
    "mass",
    "Canon EOS-1D（2001 年 11 月上市）的白平衡菜单里有“色温 K”一项，可直接输入开尔文值，另有外置白平衡传感器和 PC-1~3 个人白平衡（约，是否为数码相机首个开尔文直设未找到直接来源）。",
    "The Canon EOS-1D (on sale November 2001) offered a 'colour temperature K' white balance setting for entering a Kelvin value directly, plus an external WB sensor and PC-1 to PC-3 personal WB presets (approx.; no direct source confirms it was the first digital camera with Kelvin entry).",
    [
     2
    ]
   ],
   [
    2003,
    "ver",
    "Nikon D2H（2003 年 7 月）加入“选择色温”：在 2500–10000K 间 31 档预设值中选择，每档约 10 mired，按感知均匀而不是按开尔文等距分档。",
    "The Nikon D2H (July 2003) added 'choose colour temperature': 31 preset values from 2500 to 10000K, roughly 10 mired apart, spaced perceptually rather than evenly in Kelvin.",
    [
     3
    ]
   ],
   [
    2003,
    "rival",
    "同年 2 月 Adobe Camera Raw 1.0 把 temperature（K）与 tint 两个滑块用在 raw 后期上，色温从拍摄参数变成可以事后任意改的数值。",
    "That February Adobe Camera Raw 1.0 put temperature (K) and tint sliders on raw processing, turning colour temperature from a shooting parameter into a value that can be changed freely later.",
    [
     4
    ]
   ],
   [
    2010,
    "ver",
    "ARRI ALEXA 数字电影机（约 2010 年）白平衡可在 2000–11000K 间以 100K 步进设定，另用 CC 值单独补偿绿/品红，影视机普遍采用“开尔文 + CC/tint”双参数。",
    "The ARRI ALEXA digital cinema camera (approx. 2010) set white balance from 2000 to 11000K in 100K steps, with a separate CC value for green/magenta; cinema cameras widely adopted the 'Kelvin plus CC/tint' pair.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "iOS 8 的 AVFoundation 开放手动白平衡，并提供 temperatureAndTintValues / deviceWhiteBalanceGains 在设备 R/G/B 增益与色温、色调之间换算，第三方 App 首次能在 iPhone 上按开尔文设白平衡。",
    "iOS 8's AVFoundation opened manual white balance and added temperatureAndTintValues / deviceWhiteBalanceGains to convert between device R/G/B gains and temperature/tint, letting third-party apps set iPhone white balance in Kelvin for the first time.",
    [
     6
    ]
   ],
   [
    2015,
    "mass",
    "LG G4（2015 年 4 月）系统相机的手动模式提供 2400–7400K 开尔文白平衡滑块，并配有测量环境光的 Color Spectrum Sensor，开尔文直设进入手机原生相机。",
    "The LG G4 (April 2015) offered a 2400–7400K Kelvin white balance slider in its stock camera's manual mode, aided by a Color Spectrum Sensor measuring ambient light, bringing Kelvin entry to a phone's native camera.",
    [
     7
    ]
   ]
  ],
  "now": [
   "开尔文直设是相机、电影机和手机专业模式的标准功能，常见范围约 2500–10000K；影视拍摄常与 CC/tint 搭配，RAW 后期软件也统一用色温 + 色调两个参数描述白平衡。",
   "Kelvin entry is standard on cameras, cinema cameras and phone pro modes, typically about 2500–10000K; film work pairs it with CC/tint, and raw software describes white balance with the same temperature-plus-tint pair."
  ],
  "replaced": [
   "没有被替代。日常拍摄大多交给自动白平衡，RAW 让拍摄时设错也能后改，开尔文直设主要用于需要多机一致或刻意定调的场合。",
   "Not replaced. Everyday shooting mostly relies on auto white balance and RAW makes mistakes fixable later, so Kelvin entry is mainly used where multiple cameras must match or a deliberate colour is wanted."
  ],
  "refs": [
   {
    "t": "Mired - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Mired"
   },
   {
    "t": "Correlated color temperature - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Correlated_color_temperature"
   },
   {
    "t": "Canon EOS-1D Review - DPReview",
    "u": "https://www.dpreview.com/reviews/canoneos1d/"
   },
   {
    "t": "Nikon D2H Review - DPReview",
    "u": "https://www.dpreview.com/reviews/nikond2h"
   },
   {
    "t": "Adobe Camera RAW & JPEG 2000 plugins - DPReview",
    "u": "https://www.dpreview.com/articles/1460986292/adoberawplugin"
   },
   {
    "t": "ARRI ALEXA manual - white balance",
    "u": "https://www.manualslib.com/manual/962533/Arri-Alexa.html?page=50"
   },
   {
    "t": "temperatureAndTintValues(for:) - Apple Developer",
    "u": "https://developer.apple.com/documentation/avfoundation/avcapturedevice/temperatureandtintvalues(for:)"
   },
   {
    "t": "How (and when) to use manual mode on the LG G4 camera - Android Central",
    "u": "https://androidcentral.com/how-and-when-use-manual-mode-lg-g4-camera"
   }
  ]
 },
 "wbbkt": {
  "stages": [
   [
    1989,
    "paper",
    "日本特开平 1-221994 号专利公开提出“白平衡包围”：用多组白平衡校正值处理同一画面并记录多张，从中挑出白平衡最好的一张（约，年份按平成元年公开号推断，内容见 Canon 后续专利引用）。",
    "Japanese laid-open patent H1-221994 proposed white balance bracketing: processing one image with several white balance correction values and recording multiple images to pick the best (approx.; year inferred from the Heisei-1 publication number, content as cited in a later Canon patent).",
    [
     0
    ]
   ],
   [
    2001,
    "mass",
    "Nikon Coolpix 995（2001 年 4 月发布）首次把白平衡包围做进量产相机：按一次快门在卡上存三张，依次为设定白平衡、偏红、偏蓝；前代 Coolpix 990 没有此功能。",
    "The Nikon Coolpix 995 (announced April 2001) put white balance bracketing into a production camera: one press saved three images to the card, at the set white balance, redder and bluer; the earlier Coolpix 990 lacked it.",
    [
     1,
     2
    ]
   ],
   [
    2001,
    "ver",
    "Coolpix 995 的限制：只能在 M-REC 模式用，曝光包围和白平衡包围二选一，三张都要写卡所以处理更慢。",
    "Limits on the Coolpix 995: it worked only in M-REC mode, exposure and white balance bracketing were mutually exclusive, and writing three files made it slower.",
    [
     2
    ]
   ],
   [
    2001,
    "ver",
    "Canon EOS-1D（2001 年 11 月）把白平衡包围带到专业单反：一次曝光记录标准、偏蓝、偏红三张，最多 ±3 级，每级相当于 5 mired。",
    "The Canon EOS-1D (November 2001) brought white balance bracketing to pro DSLRs: one exposure recorded standard, bluer and redder versions, up to ±3 steps of 5 mired each.",
    [
     3
    ]
   ],
   [
    2001,
    "corp",
    "Canon 同年 10 月申请专利（US7110032），规定白平衡包围与 AE、ISO 包围互斥并用图标闪烁提示，解决多种包围叠加时张数爆炸的问题。",
    "Canon filed a patent that October (US7110032) making white balance bracketing mutually exclusive with AE and ISO bracketing, with flashing icons as warnings, to avoid combinatorial bursts.",
    [
     0
    ]
   ],
   [
    2003,
    "rival",
    "2003 年 Adobe Camera Raw 1.0 等 raw 转换器让一个 RAW 文件就能事后渲染任意白平衡，包围的必要性开始下降。",
    "From 2003 raw converters such as Adobe Camera Raw 1.0 let a single RAW file be rendered at any white balance afterwards, so the need for bracketing began to fade.",
    [
     4
    ]
   ],
   [
    2004,
    "ver",
    "Canon EOS-1D Mark II（2004 年 1 月 28 日发布）的白平衡包围可选蓝/琥珀或品红/绿两个方向，±3 级整级步进，不再只沿色温轴。",
    "The Canon EOS-1D Mark II (announced 28 January 2004) could bracket white balance along blue/amber or magenta/green, ±3 full steps, no longer only along the temperature axis.",
    [
     5
    ]
   ],
   [
    2004,
    "ver",
    "同年 Canon EOS 20D 把双方向包围（±3 级，B/A 或 M/G）下放到中端机，配合二维白平衡偏移网格。",
    "The same year the Canon EOS 20D brought two-direction bracketing (±3 steps, B/A or M/G) down to the midrange, paired with a 2D white balance shift grid.",
    [
     6
    ]
   ],
   [
    2021,
    "end",
    "Nikon Z9 等新机仍保留白平衡包围，但只在琥珀-蓝轴上变化，且选了 NEF（RAW）或 RAW+JPEG 就不可用：有 RAW 时它已失去意义。",
    "New bodies such as the Nikon Z9 keep white balance bracketing, but only along the amber-blue axis, and it is unavailable with NEF (RAW) or RAW+JPEG: with RAW it no longer matters.",
    [
     7
    ]
   ]
  ],
  "now": [
   "仍是多数相机的菜单项（Nikon、Canon、Fujifilm 等），但只对 JPEG/HEIF 有效，属于小众功能；手机上基本没有。",
   "Still a menu item on most cameras (Nikon, Canon, Fujifilm and others), but it only applies to JPEG/HEIF and is a niche feature; phones essentially lack it."
  ],
  "replaced": [
   "被 RAW 取代：一个 RAW 文件就能在后期渲染出任意白平衡，比按快门时生成三张 JPEG 更灵活，所以多家相机在 RAW 模式下直接禁用白平衡包围。",
   "Replaced by RAW: one RAW file can be rendered at any white balance later, more flexible than three JPEGs at capture, so several makers disable white balance bracketing in RAW modes."
  ],
  "refs": [
   {
    "t": "US7110032B2 - Setting control of bracketing image sensing operation (Canon)",
    "u": "https://patents.google.com/patent/US7110032B2/en"
   },
   {
    "t": "Nikon Coolpix 995 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/nikoncp995/11"
   },
   {
    "t": "Coolpix 995 White Balance Bracketing - Michigan Tech DigiCam guide",
    "u": "https://pages.mtu.edu/~shene/DigiCam/User-Guide/white-balance/995-wb-bracketing.html"
   },
   {
    "t": "Canon EOS-1D Review - DPReview",
    "u": "https://www.dpreview.com/reviews/canoneos1d/"
   },
   {
    "t": "Adobe Camera RAW & JPEG 2000 plugins - DPReview",
    "u": "https://www.dpreview.com/articles/1460986292/adoberawplugin"
   },
   {
    "t": "Canon EOS-1D Mark II announcement - Imaging Resource",
    "u": "https://old.imaging-resource.com/NEWS/1075348818.html"
   },
   {
    "t": "Canon EOS 20D Review - DPReview",
    "u": "https://www.dpreview.com/reviews/canoneos20d/2"
   },
   {
    "t": "WB bracketing unavailable - Nikon FAQ",
    "u": "https://onlinemanual.nikonimglib.com/faq/en/shooting_issues/wb_bracketing_unavailable.html"
   }
  ]
 },
 "wbshift": {
  "stages": [
   [
    1932,
    "idea",
    "Irwin G. Priest 提出 mired；胶片时代用色温转换滤镜（蓝/琥珀）沿色温轴校正，荧光灯的绿色偏差则要另加 CC 色彩补偿滤镜（品红/绿），这就是后来二维偏移的两个轴。",
    "Irwin G. Priest introduced the mired; in the film era conversion filters (blue/amber) corrected along the temperature axis while fluorescent green casts needed separate CC (magenta/green) filters: the two axes of later 2D shift.",
    [
     0,
     6
    ]
   ],
   [
    1999,
    "ver",
    "Nikon D1 已有白平衡微调 ±3 级，但只沿一个轴（正值偏蓝、负值偏红），无法纠正绿/品红偏色。",
    "The Nikon D1 already offered ±3-step white balance fine-tuning, but along a single axis (plus toward blue, minus toward red), unable to fix green/magenta casts.",
    [
     1
    ]
   ],
   [
    2003,
    "rival",
    "Adobe Camera Raw 1.0 在色温滑块之外加了 tint（绿-品红）滑块，后期软件率先实现两轴白平衡。",
    "Adobe Camera Raw 1.0 added a tint (green-magenta) slider next to temperature, so raw software reached two-axis white balance first.",
    [
     2
    ]
   ],
   [
    2004,
    "mass",
    "Canon EOS-1D Mark II（2004 年 1 月 28 日发布）新增用户白平衡补偿：可在琥珀-蓝、品红-绿两个方向各 ±9 级调整并可组合，是相机内二维白平衡偏移的首个量产实现。",
    "The Canon EOS-1D Mark II (announced 28 January 2004) added user white balance compensation in amber-blue and magenta-green, ±9 levels each and combinable: the first production in-camera 2D white balance shift.",
    [
     3
    ]
   ],
   [
    2004,
    "ver",
    "1D Mark II 的白平衡包围也可沿蓝/琥珀或品红/绿方向 ±3 级进行，偏移与包围共用同一套两轴坐标。",
    "The 1D Mark II's white balance bracketing could run ±3 steps along blue/amber or magenta/green, sharing the same two-axis coordinates as the shift.",
    [
     3
    ]
   ],
   [
    2004,
    "ver",
    "同年 8 月 Canon EOS 20D 把它做成屏幕上的二维光标网格（B9–A9、M9–G9），上下移动偏绿/品红，左右偏琥珀/蓝，下放到中端机。",
    "That August the Canon EOS 20D turned it into an on-screen 2D cursor grid (B9–A9, M9–G9), up/down for green/magenta and left/right for amber/blue, bringing it to the midrange.",
    [
     4
    ]
   ],
   [
    2007,
    "ver",
    "Nikon D3 把白平衡微调扩展到琥珀-蓝与绿-品红两轴：横轴每格约 5 mired 对应色温，纵轴效果相当于 CC 滤镜，此后成为 Nikon 标准。",
    "The Nikon D3 extended fine-tuning to amber-blue and green-magenta axes: each horizontal step is about 5 mired of colour temperature, the vertical axis acts like CC filters, and this became Nikon's standard.",
    [
     5
    ]
   ],
   [
    2010,
    "ver",
    "ARRI ALEXA 电影机（约 2010 年）在 2000–11000K 色温之外用 CC 值补偿绿/品红，可纠正荧光灯光谱尖峰造成的偏色，影视机普遍采用。",
    "The ARRI ALEXA cinema camera (approx. 2010) added a CC value for green/magenta on top of 2000–11000K temperature, correcting casts from fluorescent spectral spikes; cinema cameras widely followed.",
    [
     6
    ]
   ],
   [
    2020,
    "mass",
    "Sony Xperia 1 II 的 Photography Pro 把 Alpha 相机的 AB/GM 白平衡网格搬进手机原生相机，可沿绿-品红与琥珀-蓝两轴微调，并有三组自定义白平衡。",
    "Sony's Photography Pro on the Xperia 1 II brought the Alpha cameras' AB/GM white balance grid to a phone's native camera, fine-tuning along green-magenta and amber-blue with three custom WB banks.",
    [
     7
    ]
   ]
  ],
  "now": [
   "二维白平衡偏移已是可换镜头相机的标配（Canon、Nikon、Sony、Fujifilm 都有 AB/GM 网格），影视机用 CC/tint，手机多见于 Sony 等专业模式；RAW 后期里对应色温 + 色调两个滑块。",
   "2D white balance shift is standard on interchangeable-lens cameras (Canon, Nikon, Sony and Fujifilm all have AB/GM grids); cinema cameras use CC/tint, phones offer it mainly in pro modes such as Sony's; in raw software it maps to the temperature and tint sliders."
  ],
  "replaced": [
   "没有被替代。RAW 让偏移可以事后再做，但直出 JPEG 和视频仍依赖机内偏移来校正荧光灯、LED 的绿/品红偏差。",
   "Not replaced. RAW lets the shift be done afterwards, but straight JPEG and video still rely on in-camera shift to correct green/magenta casts from fluorescent and LED light."
  ],
  "refs": [
   {
    "t": "Mired - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Mired"
   },
   {
    "t": "Nikon D1 Review: Rear of Camera Controls - DPReview",
    "u": "https://www.dpreview.com/reviews/nikond1/8"
   },
   {
    "t": "Adobe Camera RAW & JPEG 2000 plugins - DPReview",
    "u": "https://www.dpreview.com/articles/1460986292/adoberawplugin"
   },
   {
    "t": "Canon EOS-1D Mark II announcement - Imaging Resource",
    "u": "https://old.imaging-resource.com/NEWS/1075348818.html"
   },
   {
    "t": "Canon EOS 20D Review - DPReview",
    "u": "https://www.dpreview.com/reviews/canoneos20d/2"
   },
   {
    "t": "Nikon D3 User Manual p.174",
    "u": "https://www.manualsdir.com/manuals/431350/nikon-d3.html?page=174"
   },
   {
    "t": "ARRI ALEXA manual - white balance",
    "u": "https://www.manualslib.com/manual/962533/Arri-Alexa.html?page=50"
   },
   {
    "t": "Sony Xperia 1 II review: Camera - GSMArena",
    "u": "https://www.gsmarena.com/sony_xperia_1_ii-review-2115p5.php"
   }
  ]
 },
 "underwater": {
  "stages": [
   [
    1975,
    "paper",
    "Scripps 海洋研究所 Visibility Laboratory 的 B. L. McGlamery 发表报告 SIO Ref. 75-2《Computer analysis and simulation of underwater camera system performance》，用计算机模拟水下成像：直射分量随距离按波长指数衰减、前向散射与后向散射叠加，奠定了“水先吃掉红光”的定量模型。",
    "B. L. McGlamery of the Scripps Visibility Laboratory published SIO Ref. 75-2, \"Computer analysis and simulation of underwater camera system performance\", simulating underwater image formation: a direct component that decays exponentially with range per wavelength plus forward and backscatter, the first quantitative model of how water strips red light.",
    [
     0
    ]
   ],
   [
    1990,
    "paper",
    "Scripps 的 Jules S. Jaffe 在 IEEE Journal of Oceanic Engineering 15 卷 2 期发表《Computer modeling and the design of optimal underwater imaging systems》，在 McGlamery 模型上形成后来通称的 Jaffe-McGlamery 模型，成为水下色彩恢复算法的标准物理基础。",
    "Jules S. Jaffe at Scripps published \"Computer modeling and the design of optimal underwater imaging systems\" in IEEE Journal of Oceanic Engineering vol. 15 no. 2, extending McGlamery's work into what became known as the Jaffe-McGlamery model, the standard physical basis for later underwater colour-restoration algorithms.",
    [
     1
    ]
   ],
   [
    2005,
    "rival",
    "英国水下摄影师 Alex Mustard 把三片色片叠在一起贴在鱼眼镜头后面，做成 Magic Filter，2005 年 8 月在 Peter Rowlands 出资下开卖；它不追求光学上补偿海水，而是给相机的手动白平衡一个更好调的光谱，配合 RAW 在浅水阳光下还原红色。",
    "British underwater photographer Alex Mustard sandwiched three gels behind a fisheye lens to create the Magic Filter, sold from August 2005 with backing from Peter Rowlands; rather than optically cancelling the water, it gives the camera's manual white balance a spectrum it can correct, restoring reds in shallow sunlit water.",
    [
     2
    ]
   ],
   [
    2006,
    "mass",
    "2006 年 8–9 月 Photokina 前，Canon PowerShot A640 / A630 和 G7 把 Underwater 加进白平衡预设，说明书写明配合 WP-DC11 等防水壳使用、压低偏蓝色调；G7 另有 Underwater 和 Aquarium 场景模式。",
    "Ahead of Photokina in August-September 2006, the Canon PowerShot A640 / A630 and G7 added Underwater to the white balance presets, documented for use with housings such as the WP-DC11 to cut the blue cast; the G7 also had Underwater and Aquarium scene modes.",
    [
     3
    ]
   ],
   [
    2016,
    "corp",
    "丹麦公司 Paralenz 的潜水专用运动相机最初叫 Octospot，2016 年 7 月在 Kickstarter 众筹。",
    "Danish company Paralenz's diver-specific action camera, originally called Octospot, was crowdfunded on Kickstarter in July 2016.",
    [
     4
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 6 月 Paralenz Dive Camera 正式发布（599 美元，标称 200 m），内置压力传感器测深，DCC（Depth Controlled Color correction）按当前深度逐秒调整颜色校正，可选蓝水/绿水；2017 年末开始在市场销售。",
    "The Paralenz Dive Camera was announced in June 2017 ($599, rated to 200 m initially). A built-in pressure sensor reads depth and DCC (Depth Controlled Color correction) adjusts the colour correction second by second, with blue- or green-water settings; it reached the market in late 2017.",
    [
     5,
     4
    ]
   ],
   [
    2019,
    "paper",
    "Derya Akkaynak 与海法大学 Tali Treibitz 在 CVPR 2019 发表 Sea-thru：指出衰减系数随距离与反射率变化、与后向散射系数不同，利用 RGBD 图像先估后向散射、再估空间变化的光源，物理上“去掉水”，而非整幅统一的白平衡。",
    "Derya Akkaynak and Tali Treibitz (University of Haifa) presented Sea-thru at CVPR 2019, showing that attenuation depends on range and reflectance and differs from the backscatter coefficient; using RGBD images it estimates backscatter, then a spatially varying illuminant, physically removing the water instead of applying one global white balance.",
    [
     6
    ]
   ],
   [
    2019,
    "ver",
    "Olympus 2019 年 5 月发布 Tough TG-6，把 TG-5 的单一水下白平衡扩展为浅水、中深、深水三档：浅水档补红、深水档处理蓝，中档对应 TG-5 原有设定。",
    "Olympus's Tough TG-6 (May 2019) expanded the TG-5's single underwater white balance into shallow, mid and deep presets: the shallow one restores reds, the deep one handles blues, and the mid one matches the TG-5's original setting.",
    [
     7
    ]
   ],
   [
    2022,
    "end",
    "Paralenz 在 2022 年 8 月推出 Vaquita 2nd Gen 两个月后，于 2022 年 10 月 18 日申请破产，按深度自动调色的专用潜水相机路线一度中断。",
    "Two months after launching the Vaquita 2nd Gen in August 2022, Paralenz filed for bankruptcy on 18 October 2022, interrupting the dedicated depth-driven colour-correction dive camera.",
    [
     4
    ]
   ]
  ],
  "now": [
   "水下白平衡预设仍是防水卡片机和微单的标配（如 OM System TG-7 的多档水下白平衡），运动相机则多走 AI 后期调色；专业水下摄影仍以人工白平衡 + 色片或闪光灯补光为主。",
   "Underwater white balance presets remain standard on waterproof compacts and mirrorless bodies (e.g. the multi-level underwater WB of the OM System TG-7), action cameras lean on AI colour correction in post, and serious underwater shooters still rely on manual WB with filters or strobes."
  ],
  "replaced": [
   "固定的水下预设只能对应一个大致深度，正被按深度或按场景的自动校正（Paralenz DCC、AI 后期如 AquaVision）和基于物理模型的 Sea-thru 类算法取代；超过约 10 m 后仍要靠闪光灯补回红光。",
   "A fixed underwater preset fits only one rough depth, so it is giving way to depth- or scene-adaptive correction (Paralenz DCC, AI post-processing such as AquaVision) and physics-based Sea-thru-style algorithms; beyond roughly 10 m, strobes are still needed to bring red back."
  ],
  "refs": [
   {
    "t": "McGlamery, Computer analysis and simulation of underwater camera system performance (SIO Ref. 75-2)",
    "u": "https://misclab.umeoce.maine.edu/education/VisibilityLab/reports/SIO_75-2.pdf"
   },
   {
    "t": "Jaffe 1990, Computer modeling and the design of optimal underwater imaging systems",
    "u": "https://scilit.com/publications/004399a81576ede26741fe4f98ca478b"
   },
   {
    "t": "Filter photography by Alex Mustard",
    "u": "https://birdsheadseascape.com/photography/filter-photography-by-alex-mustard/"
   },
   {
    "t": "dpreview: Canon PowerShot A640 Review",
    "u": "https://www.dpreview.com/reviews/canona640/"
   },
   {
    "t": "DIVE Magazine: Paralenz files for bankruptcy",
    "u": "https://divemagazine.com/scuba-diving-news/paralenz-files-for-bankruptcy"
   },
   {
    "t": "PetaPixel: Paralenz, the world's first action cam made specifically for divers",
    "u": "https://petapixel.com/2017/06/14/paralenz-worlds-first-action-cam-made-specifically-divers/"
   },
   {
    "t": "Akkaynak & Treibitz, Sea-Thru (CVPR 2019)",
    "u": "https://openaccess.thecvf.com/content_CVPR_2019/html/Akkaynak_Sea-Thru_A_Method_for_Removing_Water_From_Underwater_Images_CVPR_2019_paper.html"
   },
   {
    "t": "Digital Camera World: Olympus Tough TG-6 arrives with new underwater modes",
    "u": "https://www.digitalcameraworld.com/news/olympus-tough-tg-6-arrives-with-new-underwater-modes-and-accessories"
   }
  ]
 },
 "ttflash": {
  "stages": [
   [
    2008,
    "rival",
    "Nikon 2008 年 7 月发布 Speedlight SB-900，随附钨丝灯 / 荧光灯色片并能自动识别装上的色片，通知 D3、D700、D300s、D90 等机身切换白平衡；这是“让闪光与环境光同色”的胶片时代思路（闪光灯加 CTO 色片）的电子化版本。",
    "Nikon's Speedlight SB-900 (July 2008) shipped with incandescent and fluorescent gels and detected which one was fitted, telling bodies such as the D3, D700, D300s and D90 to switch white balance: an electronic version of the old practice of gelling a flash to match ambient light.",
    [
     0
    ]
   ],
   [
    2012,
    "rival",
    "Canon 2012 年的 Speedlite 600EX-RT 随附色片，闪光头下方有传感器读取装上的色片，并把信息传给 2012 年后的 EOS 机身，使 Auto 白平衡也能配合色片工作。",
    "Canon's 2012 Speedlite 600EX-RT came with colour filters; a sensor under the flash head reads the fitted filter and passes it to EOS bodies released since 2012, so Auto white balance works with gelled flash.",
    [
     1
    ]
   ],
   [
    2013,
    "mass",
    "Apple 2013 年 9 月 10 日发布 iPhone 5s，搭载 True Tone 闪光灯：一颗冷白 LED + 一颗琥珀色 LED，拍摄时先评估场景色温，再按比例调节两颗 LED 的亮度，号称可组合出 1000 多种色温/强度，Apple 称之为“任何相机的首创”。",
    "Apple announced the iPhone 5s on 10 September 2013 with the True Tone flash: one cool-white and one amber LED. The camera assesses the scene's colour temperature and blends the two LEDs' intensities, giving over 1,000 combinations; Apple called it a world first for any camera.",
    [
     2
    ]
   ],
   [
    2014,
    "rival",
    "HTC 2014 年 3 月 25 日发布 One (M8)，带“dual-LED dual tone”闪光灯（HTC 称 Smart Flash），按测光结果在冷暖两颗 LED 间选出 500 多种色温组合（HTC 宣传数据）。",
    "HTC unveiled the One (M8) on 25 March 2014 with a dual-LED dual-tone flash (HTC's Smart Flash) that picks one of 500+ colour-temperature mixes of a cool and a warm LED (HTC's figure).",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "Apple 2016 年 3 月 21 日发布 9.7 英寸 iPad Pro，首次把 True Tone 闪光灯带到 iPad，配 12 MP iSight 摄像头，用于弱光拍摄和文档扫描；同机还首发会按环境光调整屏幕白平衡的 True Tone 显示屏。",
    "Apple's 9.7-inch iPad Pro (21 March 2016) brought the True Tone flash to the iPad for the first time, with a 12 MP iSight camera, for low-light shots and document scanning; it also debuted the True Tone display that adapts screen white balance to ambient light.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 9 月 iPhone 7 / 7 Plus 改为四 LED（Quad-LED）True Tone 闪光灯，比 iPhone 6s 亮 50%，并加入能检测室内灯光频闪、在照片和视频中补偿的 flicker sensor。",
    "The iPhone 7 / 7 Plus (September 2016) moved to a quad-LED True Tone flash, 50 percent brighter than the iPhone 6s, adding a flicker sensor that detects mains flicker from indoor lights and compensates for it in photos and video.",
    [
     5
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 9 月 iPhone 11 Pro / Pro Max 的新 True Tone 闪光灯亮度提升 30% 以上。",
    "The iPhone 11 Pro / Pro Max (September 2019) brought a True Tone flash over 30 percent brighter.",
    [
     6
    ]
   ],
   [
    2019,
    "rival",
    "同一代 iPhone 11 / 11 Pro 引入 Night mode：靠新传感器与多帧算法在弱光下得到亮且颜色自然的照片，弱光拍摄越来越不需要开闪光灯，闪光灯的色温匹配问题也随之被绕开。",
    "The same iPhone 11 / 11 Pro generation introduced Night mode, using the new sensor and multi-frame processing for bright, natural-coloured low-light photos, so low-light shots increasingly need no flash and its colour-matching problem is sidestepped.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 9 月 iPhone 14 Pro / Pro Max 的 Adaptive True Tone 闪光灯完全重新设计：九颗 LED 组成 3×3 阵列，可单独控制，按所选焦段改变发光图案——长焦时集中、超广角时铺开，最高亮度约为前代两倍。",
    "The iPhone 14 Pro / Pro Max (September 2022) completely redesigned the flash as the Adaptive True Tone flash: a 3x3 array of nine individually controlled LEDs whose pattern changes with the chosen focal length, concentrated for telephoto and spread for wide, up to about twice as bright as before.",
    [
     7
    ]
   ]
  ],
  "now": [
   "冷暖双色（及多 LED）混光闪光灯是 iPhone 和多数中高端手机的标配，Apple 在 Pro 机型上继续用 Adaptive True Tone 阵列；但手机实际用闪光灯的场景已被夜景模式大幅压缩。",
   "Cool/warm dual-tone (and multi-LED) flashes are standard on iPhones and most mid-to-high-end phones, with Apple keeping the Adaptive True Tone array on Pro models; but night modes have greatly shrunk how often phone flash is used."
  ],
  "replaced": [
   "没有被另一种闪光方案取代，而是被多帧夜景模式（Night mode 等）从“弱光必开闪光”的位置上替代；闪光灯如今主要用于近距离补光和手电筒。",
   "It has not been displaced by another flash design so much as sidelined by multi-frame night modes (Night mode and similar) for low-light shots; the flash now mainly serves close-range fill and as a torch."
  ],
  "refs": [
   {
    "t": "Nikon: Speedlight SB-900 (2008)",
    "u": "https://www.nikon.com/news/2008/0701_sb900_02.htm"
   },
   {
    "t": "Canon SNAPSHOT: 3 Speedlite features you might not know",
    "u": "https://snapshot.asia.canon/en/article/3-speedlite-features-you-might-not-know"
   },
   {
    "t": "Apple: Apple Announces iPhone 5s (2013)",
    "u": "https://www.apple.com/newsroom/2013/09/10Apple-Announces-iPhone-5s-The-Most-Forward-Thinking-Smartphone-in-the-World/"
   },
   {
    "t": "Wikipedia: HTC One (M8)",
    "u": "https://en.wikipedia.org/wiki/HTC_One_(M8)"
   },
   {
    "t": "Apple: Apple Introduces 9.7-inch iPad Pro (2016)",
    "u": "https://www.apple.com/newsroom/2016/03/21Apple-Introduces-9-7-inch-iPad-Pro/"
   },
   {
    "t": "Apple: Apple Introduces iPhone 7 & iPhone 7 Plus (2016)",
    "u": "https://www.apple.com/hk/en/newsroom/2016/09/07Apple-Introduces-iPhone-7-iPhone-7-Plus-The-Best-Most-Advanced-iPhone-Ever"
   },
   {
    "t": "Apple: iPhone 11 Pro and iPhone 11 Pro Max (2019)",
    "u": "https://www.apple.com/newsroom/2019/09/iphone-11-pro-and-iphone-11-pro-max-the-most-powerful-and-advanced-smartphones/"
   },
   {
    "t": "Apple: Apple debuts iPhone 14 Pro and iPhone 14 Pro Max (2022)",
    "u": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/"
   }
  ]
 },
 "awbpri": {
  "stages": [
   [
    2002,
    "paper",
    "CIE 发布色貌模型 CIECAM02，用适应度因子 D 描述人眼对光源的“不完全色适应”：在暖色低照度灯光下人眼并不会把白完全看成白，这就是相机 AWB 有意保留暖色的理论依据。",
    "The CIE published the CIECAM02 colour appearance model, whose degree-of-adaptation factor D describes incomplete chromatic adaptation: under dim warm light the eye does not fully render white as white, the theoretical basis for an AWB that deliberately keeps some warmth.",
    [
     0
    ]
   ],
   [
    2010,
    "mass",
    "约 2010 年，Nikon D7000 的 Auto 白平衡分成 Normal 与 Keep warm lighting colors（保留暖色灯光）两项，后者保留钨丝灯的暖调；2009 年的 D3S 说明书中 Auto 还只有一种。这是查到的较早量产实现，比 Canon 早约 5 年。",
    "Around 2010 the Nikon D7000 split Auto white balance into Normal and Keep warm lighting colors, the latter preserving tungsten warmth, whereas the 2009 D3S manual still lists a single Auto. This is the earliest production implementation found, about five years ahead of Canon.",
    [
     1
    ]
   ],
   [
    2012,
    "ver",
    "Olympus 2012 年的 OM-D E-M5 在 AUTO 白平衡下加入 Keep Warm Color 开关：Off 压掉钨丝灯暖调，On 保留暖调（约）。",
    "Olympus's 2012 OM-D E-M5 added a Keep Warm Color switch under AUTO white balance: Off suppresses tungsten warmth, On preserves it (approximate).",
    [
     2
    ]
   ],
   [
    2014,
    "ver",
    "Nikon 2014 年的 D4S 调整了 AUTO1 Normal：在昏暗室内灯光下会自动把偏红的白色物体校正为白；后来 D5 / D500 的 AUTO0 就沿用了与 D4S AUTO1 相近的处理。",
    "Nikon's 2014 D4S tuned AUTO1 Normal to automatically whiten white objects that took a red cast under dim interior lighting; the later D5 / D500 AUTO0 uses processing similar to the D4S's AUTO1.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "Canon 2015 年 2 月发布 EOS 5DS / 5DS R，AWB 菜单新增 Auto（Ambience priority，氛围优先，即原 AWB）和 Auto（White priority，白优先）：白优先会去除钨丝灯等光源色，把白拍成白。此后 Canon EOS 机身普遍提供 AWB / AWBW。",
    "Canon's EOS 5DS / 5DS R (February 2015) added Auto (Ambience priority, the previous AWB) and Auto (White priority) to the AWB menu; White priority removes the colour of light sources such as tungsten so white renders as white. Later Canon EOS bodies generally offer AWB / AWBW.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "Nikon 2016 年的 D5 / D500 新增 AUTO0 Keep white（reduce warm colors），在 AUTO1 Normal、AUTO2 Keep warm lighting colors 之外再加一个“保持白色”档，Nikon 举例用于餐厅白盘食物、婚纱。",
    "Nikon's 2016 D5 / D500 added AUTO0 Keep white (reduce warm colors) alongside AUTO1 Normal and AUTO2 Keep warm lighting colors; Nikon cites food on white plates in restaurants and wedding dresses as uses.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "Sony 约 2016 年在 α6500 等机型加入 Priority Set in AWB：Standard / Ambience / White 三档；2017 年的 α9 等全画幅机延续。",
    "Around 2016 Sony added Priority Set in AWB with Standard / Ambience / White on models such as the α6500; full-frame bodies like the 2017 α9 continued it.",
    [
     5
    ]
   ],
   [
    2017,
    "ver",
    "Panasonic 2017 年的 Lumix GH5 在 AWB 之外提供 AWBc（压低钨丝灯下的偏红），后续 S1、G9II 等机型再加 AWBw（保留偏红暖调），形成冷/标准/暖三档。",
    "Panasonic's 2017 Lumix GH5 offered AWBc (reducing the reddish cast under tungsten) besides AWB; later models such as the S1 and G9II added AWBw (keeping the warm cast), giving cool / standard / warm options.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Fujifilm 2020 年在 X-T4 与 X-S10 上新增 Auto White Priority 与 Auto Ambience Priority，分别在白炽灯下给出更白或更暖的结果。",
    "In 2020 Fujifilm added Auto White Priority and Auto Ambience Priority on the X-T4 and X-S10, giving whiter or warmer results under incandescent light.",
    [
     7
    ]
   ]
  ],
  "now": [
   "Canon、Nikon、Sony、Panasonic、Fujifilm、OM System 的现役机身基本都提供“白优先 / 标准 / 氛围优先”式的 AWB 取向选项，只是命名不同。",
   "Current bodies from Canon, Nikon, Sony, Panasonic, Fujifilm and OM System essentially all offer white / standard / ambience style AWB biases, under different names."
  ],
  "replaced": [
   "仍在使用，未被取代；手机端则更多由场景识别和学习型 AWB 自动决定保留多少暖色，而不是交给用户选。",
   "Still in use and not replaced; on phones, scene recognition and learned AWB decide automatically how much warmth to keep instead of exposing a user choice."
  ],
  "refs": [
   {
    "t": "Wikipedia: CIECAM02",
    "u": "https://en.wikipedia.org/wiki/CIECAM02"
   },
   {
    "t": "Nikon D7000 manual: White balance",
    "u": "https://www.manualsdir.com/manuals/431226/nikon-d7000.html?page=138"
   },
   {
    "t": "Olympus E-M5 manual: Adjusting color (white balance)",
    "u": "https://www.manualsdir.com/manuals/205877/olympus-e-m5.html?page=50"
   },
   {
    "t": "Canon SNAPSHOT: EOS 5DS enhancements seen from the product specs",
    "u": "https://snapshot.asia.canon/en/article/part-2-enhancements-seen-from-the-product-specs"
   },
   {
    "t": "Nikon: Auto white balance AUTO0/1/2 (D500)",
    "u": "https://imaging.nikon.com/support/digitutor/d500/functions/whitebalance_auto012.html"
   },
   {
    "t": "Sony α6500 Help Guide: Priority Set in AWB",
    "u": "https://helpguide.sony.net/ilc/1640/v1/en/contents/TP0001306051.html"
   },
   {
    "t": "Panasonic Lumix GH5 manual: Adjusting the white balance",
    "u": "https://www.manualsdir.com/manuals/849403/panasonic-lumix-gh5.html?page=40"
   },
   {
    "t": "Fuji X Weekly: New Auto White Balance Options",
    "u": "https://fujixweekly.com/2020/12/02/new-auto-white-balance-options-white-priority-ambience-priority/"
   }
  ]
 },
 "rccb": {
  "stages": [
   [
    2007,
    "idea",
    "Kodak 科学家 John Compton 与 John Hamilton 2007 年 6 月发表加入全色（panchromatic，透明）像素的滤色阵列，灵敏度比 Bayer 高 2–4 倍——用透明像素换灵敏度、再用算法重建颜色的思路由此得到大厂推动。",
    "In June 2007 Kodak scientists John Compton and John Hamilton unveiled a colour filter array adding panchromatic (clear) pixels, 2-4x more sensitive than Bayer: the idea of trading filtered pixels for clear ones and rebuilding colour in software gained a major vendor's backing.",
    [
     0
    ]
   ],
   [
    2008,
    "mass",
    "约 2008 年，Micron / Aptina 的 VGA 传感器 MT9V024 提供单色、RGB Bayer 和 RCCC 三种滤色版本；RCCC 面向前视 ADAS，只留一个红色像素用于识别尾灯和红灯，其余透明像素保证灵敏度。",
    "Around 2008 the Micron / Aptina MT9V024 VGA sensor was offered in monochrome, RGB Bayer and RCCC versions; RCCC targets forward ADAS, keeping one red pixel for tail lights and red signals while clear pixels keep sensitivity.",
    [
     1
    ]
   ],
   [
    2012,
    "mass",
    "Aptina 约 2012 年推出 1.2 MP 车规 HDR 传感器 AR0132AT（3.75 µm 像素，>115 dB），订货型号除 Bayer/单色外还有 RCCB 和 RGBC 版本。",
    "Around 2012 Aptina launched the 1.2 MP automotive HDR sensor AR0132AT (3.75 um pixels, >115 dB), orderable in RCCB and RGBC versions besides Bayer and mono.",
    [
     2
    ]
   ],
   [
    2013,
    "rival",
    "Aptina 2013 年 2 月为手机发布 Clarity+：2×2 的 RCCB 式阵列（两个绿位换成透明），号称灵敏度翻倍，首款为 12 MP、1.1 µm 的 AR1231CP，并改了透明像素结构防止它先于红蓝饱和；但手机市场最终没有普及。",
    "In February 2013 Aptina announced Clarity+ for phones: a 2x2 RCCB-style array with clear pixels in the green sites, claimed to double sensitivity, first on the 12 MP 1.1 um AR1231CP, with a modified clear pixel so it would not saturate before red and blue; it never caught on in phones.",
    [
     3
    ]
   ],
   [
    2016,
    "corp",
    "Tesla 2016 年 10 月起的 Autopilot Hardware 2.0 装 8 颗摄像头，前向/侧向摄像头使用 RCCC 滤色阵列，主要服务于机器视觉，色彩信息很少。",
    "Tesla's Autopilot Hardware 2.0 (from October 2016) used eight cameras, with RCCC colour filter arrays on the forward and side cameras, serving machine vision with very little colour information.",
    [
     4
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 8 月的 Tesla Hardware 2.5 起，前向/侧向摄像头改为 RCCB：没有绿色滤片以提高夜间感度，ISP 从 C − R − B 推算绿色，从而仍能输出彩色画面。",
    "From Tesla Hardware 2.5 (August 2017) the forward and side cameras switched to RCCB: no green filter, for night sensitivity, with the ISP estimating green from C - R - B so colour images can still be produced.",
    [
     4,
     6
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 4 月起的 Tesla Hardware 3 八颗摄像头统一用 onsemi AR0136A（1280×960，1.2 MP，3.75 µm 像素），仍为 RCCB。",
    "Tesla Hardware 3 (from April 2019) used the onsemi AR0136A (1280x960, 1.2 MP, 3.75 um pixels) in all eight cameras, still RCCB.",
    [
     4,
     5
    ]
   ],
   [
    2022,
    "paper",
    "约 2022 年 Imatest 的技术文章指出 RCCB 的代价是辨色能力下降：绿色只能由 G = C − R − B 推算，为模仿标准 RGB 的 CCM 可能引起饱和，红通道一饱和红灯与黄灯就分不清，并提出基于 R、C、B 的红/黄/绿灯判别式（未经同行评审）。",
    "An Imatest technical note explains RCCB's cost is weaker colour discrimination: green must be derived as G = C - R - B, a CCM mimicking standard RGB can cause saturation, and once the red channel saturates red and yellow lights become indistinguishable; it proposes R/C/B-based red/yellow/green detection formulas (not peer-reviewed).",
    [
     6
    ]
   ],
   [
    2022,
    "rival",
    "onsemi 2022 年的文章称车载非 Bayer 阵列已越来越多取代 Bayer，其产品线同时提供 RGGB、RCCB、RCCG 和 RYYCy，RYYCy 用黄、青滤色代替透明像素。",
    "A 2022 onsemi article says non-Bayer CFAs have increasingly replaced Bayer in automotive, with its lineup offering RGGB, RCCB, RCCG and RYYCy; RYYCy uses yellow and cyan filters instead of clear pixels.",
    [
     7
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 1 月起的 Tesla Hardware 4 换用 Sony IMX963 5 MP 传感器（2896×1876）；其滤色阵列各来源说法不一（Wikipedia 写 RCCB，Electrek 写 RGGB），尚无官方说明。",
    "Tesla Hardware 4 (from January 2023) moved to the Sony IMX963 5 MP sensor (2896x1876); sources disagree on its colour filter array (Wikipedia says RCCB, Electrek says RGGB), and there is no official statement.",
    [
     4,
     5
    ]
   ]
  ],
  "now": [
   "RCCB 仍是车载 ADAS 感知摄像头的主流选项之一，onsemi 等供应商与 RCCC、RCCG、RYYCy、RGGB 并列提供；同时需要“给人看”的环视与记录画面时，ISP 要从 R、C、B 重建绿色并单独做白平衡与 CCM。",
   "RCCB remains one of the main options for automotive ADAS sensing cameras, offered by vendors such as onsemi alongside RCCC, RCCG, RYYCy and RGGB; when the same camera must also produce human-viewable surround or recording images, the ISP reconstructs green from R, C and B and does its own white balance and CCM."
  ],
  "replaced": [
   "尚未被淘汰；在需要更好色彩还原的场合正与 RYYCy、RCCG 以及高动态范围 RGGB 竞争，新一代车载传感器往往同一型号提供多种 CFA 由车厂选择。",
   "Not obsolete; where better colour is needed it competes with RYYCy, RCCG and high-dynamic-range RGGB, and new automotive sensors often offer several CFAs on one part for the carmaker to choose."
  ],
  "refs": [
   {
    "t": "Photonics.com: Kodak sensor sees in dim light (2007)",
    "u": "https://www.photonics.com/Article.aspx?AID=29935"
   },
   {
    "t": "Aptina MT9V024 datasheet",
    "u": "https://nonprod.docs.rs-online.com/a709/0900766b80d2f14d.pdf"
   },
   {
    "t": "onsemi AR0132AT datasheet",
    "u": "https://www.mouser.com/datasheet/2/308/AR0132AT-D-888230.pdf"
   },
   {
    "t": "Image Sensors World: Aptina announces Clarity+ technology (2013)",
    "u": "https://image-sensors-world.blogspot.com/2013/02/aptina-announces-clarity-technology.html"
   },
   {
    "t": "Wikipedia: Tesla Autopilot hardware",
    "u": "https://en.wikipedia.org/wiki/Tesla_Autopilot_hardware"
   },
   {
    "t": "Electrek: Tesla new camera upgrade (2025)",
    "u": "https://electrek.co/2025/12/02/tesla-new-camera-upgrade-casting-more-doubt-full-self-driving-promises/"
   },
   {
    "t": "Imatest: Detecting traffic lights with RCCB sensors",
    "u": "https://docs.imatest.com/kb/detecting-traffic-lights-with-rccb-sensors"
   },
   {
    "t": "onsemi / Embedded Computing: Challenges of advancing automotive imaging (2022)",
    "u": "https://embeddedcomputing.com/application/automotive/adas-autonomous-drive/challenges-of-advancing-automotive-imaging"
   }
  ]
 },
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
 "ctsensor": {
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
    "u": "https://web.archive.org/web/20200803160016/https://consumer.huawei.com/en/campaign/p40/sophisticated-camera-system/"
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
 "truetone": {
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
 }
};
