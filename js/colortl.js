/* 人眼与色彩技术首发时间线的数据：第 30 步抽屉小图和 color-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一款实现它的商用产品，不是标准或论文发表的年份。
   HDR / HLG / PQ / P3 的年份和显示、视频编码时间线一致；色温传感器首发和白平衡时间线一致，是 2003 年 Nikon D2H 的独立环境光传感器。资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.color = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '电视 / 电脑 / 影院 / 印刷', en: 'TV / PC / Cinema / Print'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1982, "cam", "自动白平衡 · JVC KY-1900（约）", "Auto white balance · JVC KY-1900 (approx.)", 1, "awb"],
    [1986, "cam", "全自动白平衡 · Canon VM-E1N", "Fully automatic white balance · Canon VM-E1N", 2, "awb"],
    [1986, "cam", "外置 AWB 色温传感器 · Panasonic NV-M5 摄像机（约）", "External AWB color sensor · Panasonic NV-M5 camcorder (approx.)", 1, "cct"],
    [1992, "cam", "Bayer 彩色滤镜阵列 · Kodak DCS 200", "Bayer color filter array · Kodak DCS 200", 1, "cfa"],
    [1993, "ind", "系统级色彩管理 · Apple ColorSync 1.0", "System-level color management · Apple ColorSync 1.0", 1, "cms"],
    [1995, "ind", "ICM 1.0 色彩管理 · Windows 95", "ICM 1.0 color management · Windows 95", 2, "cms"],
    [1998, "cam", "红外夜摄 NightShot · Sony DCR-TRV9", "Infrared NightShot · Sony DCR-TRV9", 1, "dn"],
    [1998, "ind", "sRGB 默认色彩空间 · Windows 98 ICM 2.0", "sRGB as default color space · Windows 98 ICM 2.0", 1, "srgb"],
    [1998, "ind", "Adobe RGB (1998) · Photoshop 5.0", "Adobe RGB (1998) · Photoshop 5.0", 1, "argb"],
    [1998, "cam", "DCF 默认 sRGB · Exif 2.1 / DCF 数码相机", "DCF default sRGB · Exif 2.1 / DCF cameras", 0, "srgb"],
    [1999, "phone", "彩色摄像头 · Kyocera VP-210", "Color camera · Kyocera VP-210", 0, "cfa"],
    [1999, "ind", "sRGB 正式标准 · IEC 61966-2-1", "sRGB formal standard · IEC 61966-2-1", 2, "srgb"],
    [2000, "phone", "自动白平衡 · Sharp J-SH04（约）", "Auto white balance · Sharp J-SH04 (approx.)", 0, "awb"],
    [2001, "cam", "Adobe RGB 可选色彩空间 · Nikon D1X", "Selectable Adobe RGB · Nikon D1X", 0, "argb"],
    [2003, "cam", "独立色温传感器 · Nikon D2H", "Separate color-temperature sensor · Nikon D2H", 2, "cct"],
    [2004, "ind", "近 100% Adobe RGB 显示器 · Eizo ColorEdge CG220", "Near-100% Adobe RGB monitor · Eizo ColorEdge CG220", 2, "argb"],
    [2004, "cam", "Film Simulation 胶片模拟 · Fujifilm FinePix S3 Pro", "Film Simulation · Fujifilm FinePix S3 Pro", 1, "film"],
    [2005, "ind", "DCI-P3 色域 · DCI 数字影院规范 v1.0", "DCI-P3 gamut · DCI Digital Cinema System Spec v1.0", 1, "p3"],
    [2006, "auto", "日夜切换（可移除 IR-cut） · Honeywell HCD484E", "Day/night (removable IR-cut) · Honeywell HCD484E", 0, "dn"],
    [2008, "cam", "Provia / Velvia / Astia 命名 · Fujifilm FinePix S100FS", "Provia / Velvia / Astia names · Fujifilm FinePix S100FS", 2, "film"],
    [2008, "cam", "S-Log 监看 MLUT · Sony F35", "S-Log monitoring MLUT · Sony F35", 1, "lut"],
    [2009, "ind", "夜间自动暖色温 · f.lux", "Automatic warm night color · f.lux", 1, "night"],
    [2010, "cam", "监看 LUT（Log C 转 Rec.709） · ARRI ALEXA", "Monitoring LUT (Log C to Rec.709) · ARRI ALEXA", 2, "lut"],
    [2011, "cam", "Film Simulation 进入 X 系列 · Fujifilm X100", "Film Simulation joins the X series · Fujifilm X100", 2, "film"],
    [2013, "phone", "Adobe RGB 屏幕模式 · Samsung Galaxy S4", "Adobe RGB screen mode · Samsung Galaxy S4", 0, "argb"],
    [2013, "phone", "色彩调整 · Samsung Galaxy Note 3", "Color adjustment · Samsung Galaxy Note 3", 1, "cvd"],
    [2014, "phone", "色盲色彩校正 · Android 5.0 Lollipop", "Color correction for color blindness · Android 5.0 Lollipop", 2, "cvd"],
    [2015, "ind", "PQ 感知量化 · Vizio Reference Series（Dolby Vision）", "PQ perceptual quantizer · Vizio Reference Series (Dolby Vision)", 1, "pq"],
    [2015, "cam", "DCI-P3 / BT.2020 记录色域 · Canon EOS C300 Mark II", "DCI-P3 / BT.2020 recording gamut · Canon EOS C300 Mark II", 0, "p3"],
    [2015, "ind", "Display P3 广色域 · iMac 5K（2015 年末）", "Display P3 wide gamut · iMac 5K (late 2015)", 2, "p3"],
    [2016, "ind", "环境色温自适应 True Tone · iPad Pro 9.7", "Ambient-adaptive True Tone · iPad Pro 9.7", 1, "tone"],
    [2016, "phone", "Night Shift · iOS 9.3", "Night Shift · iOS 9.3", 0, "night"],
    [2016, "phone", "Display P3 拍摄与显示 · iPhone 7", "Display P3 capture and display · iPhone 7", 0, "p3"],
    [2016, "phone", "系统级色彩管理 · iOS 9.3 ColorSync / iPhone 7 P3", "System-level color management · iOS 9.3 ColorSync / iPhone 7 P3", 0, "cms"],
    [2016, "phone", "PQ / HDR10 · Samsung Galaxy Note7", "PQ / HDR10 · Samsung Galaxy Note7", 0, "pq"],
    [2016, "phone", "Night Light · Google Pixel（Android 7.1）", "Night Light · Google Pixel (Android 7.1)", 2, "night"],
    [2016, "phone", "色彩滤镜 · iOS 10", "Color Filters · iOS 10", 2, "cvd"],
    [2016, "ind", "HLG · SKY Perfect JSAT 4K HDR 广播", "HLG · SKY Perfect JSAT 4K HDR broadcast", 1, "hlg"],
    [2016, "phone", "Leica 胶片模式 · Huawei P9", "Leica film modes · Huawei P9", 0, "film"],
    [2017, "cam", "HLG · Sony PXW-FS5 / Z150 固件", "HLG · Sony PXW-FS5 / Z150 firmware", 0, "hlg"],
    [2017, "phone", "True Tone · iPhone 8 / iPhone X", "True Tone · iPhone 8 / iPhone X", 0, "tone"],
    [2017, "ind", "颜色滤镜 · Windows 10 Fall Creators Update", "Color filters · Windows 10 Fall Creators Update", 0, "cvd"],
    [2017, "phone", "色彩管理 · Android 8.0 / 8.1 Oreo", "Color management · Android 8.0 / 8.1 Oreo", 2, "cms"],
    [2017, "ind", "夜间模式 Night light · Windows 10 Creators Update", "Night light · Windows 10 Creators Update", 2, "night"],
    [2018, "phone", "色温传感器 · Huawei P20 Pro", "Color-temperature sensor · Huawei P20 Pro", 0, "cct"],
    [2018, "ind", "HLG 广播 · NHK BS4K / 8K", "HLG broadcast · NHK BS4K / 8K", 2, "hlg"],
    [2018, "ind", "True Tone · MacBook Pro 2018", "True Tone · MacBook Pro 2018", 2, "tone"],
    [2018, "phone", "学习型白平衡 · Google Pixel 3 Night Sight", "Learning-based AWB · Google Pixel 3 Night Sight", 2, "awb"],
    [2018, "auto", "全彩夜视 ColorVu · Hikvision", "Full-color night vision ColorVu · Hikvision", 2, "dn"],
    [2020, "phone", "HDR 增益图照片 · iPhone 12（iOS 14.1）", "HDR gain-map photos · iPhone 12 (iOS 14.1)", 1, "gain"],
    [2020, "phone", "HLG Dolby Vision 录制 · iPhone 12", "HLG-based Dolby Vision recording · iPhone 12", 0, "hlg"],
    [2020, "cam", "HDR PQ 10-bit HEIF · Canon EOS-1D X Mark III", "HDR PQ 10-bit HEIF · Canon EOS-1D X Mark III", 0, "pq"],
    [2020, "phone", "8 通道多光谱色温传感器 · Huawei P40 Pro", "8-channel multispectral color sensor · Huawei P40 Pro", 2, "cct"],
    [2021, "phone", "Real Tone 肤色公平 · Google Pixel 6", "Real Tone fair skin rendering · Google Pixel 6", 1, "skin"],
    [2021, "phone", "摄影风格 · iPhone 13 Photographic Styles", "Photographic Styles · iPhone 13", 2, "film"],
    [2022, "ind", "系统级自动色彩管理 ACM · Windows 11 22H2", "System-wide Auto Color Management · Windows 11 22H2", 2, "cms"],
    [2023, "ind", "Ultra HDR 增益图显示 · Google Chrome 116", "Ultra HDR gain-map display · Google Chrome 116", 0, "gain"],
    [2023, "phone", "导入 .cube LUT 拍摄 · FiLMiC Pro 7.4（第三方 App）", "Imported .cube LUTs while shooting · FiLMiC Pro 7.4 (third-party app)", 0, "lut"],
    [2023, "phone", "Ultra HDR JPEG · Google Pixel 8（Android 14）", "Ultra HDR JPEG · Google Pixel 8 (Android 14)", 2, "gain"],
    [2024, "phone", "多光谱成像 红枫原色摄像头 · Huawei Mate 70", "Multispectral imaging camera · Huawei Mate 70", 2, "cct"],
    [2025, "ind", "增益图国际标准 · ISO 21496-1", "Gain-map international standard · ISO 21496-1", 2, "gain"],
  ],
  desc: {
      "cfa": [
          "在每个像素上盖红、绿、蓝滤色片，绿色占一半，模仿人眼对绿光最敏感的特点，再插值还原全彩。",
          "A red-green-blue mosaic over the pixels, half of them green to match the eye's peak sensitivity, interpolated into full color."
      ],
      "awb": [
          "自动估计场景光源色温并校正，让白纸在钨丝灯和日光下都显白，模拟人眼的色彩恒常性。",
          "Estimates the scene illuminant and corrects for it so white looks white under any light, mimicking the eye's color constancy."
      ],
      "cms": [
          "操作系统用 ICC 描述文件在相机、屏幕、打印机之间换算颜色，让同一张图在不同设备上看起来一致。",
          "The OS converts colors between cameras, screens and printers via ICC profiles so an image looks the same to the eye everywhere."
      ],
      "srgb": [
          "以典型 CRT 显示器和办公室观看环境定义的标准色彩空间，成为网页、照片和屏幕的默认颜色约定。",
          "A standard color space defined around a typical CRT and office viewing, which became the default color contract for web, photos and screens."
      ],
      "argb": [
          "比 sRGB 更宽、尤其青绿色更多的色彩空间，覆盖印刷 CMYK 能印出的大部分颜色，面向摄影和印前。",
          "A wider-than-sRGB space, especially in cyan-green, covering most printable CMYK colors for photography and prepress."
      ],
      "p3": [
          "源自数字影院放映机的广色域，红绿更饱和，覆盖人眼可见色比 sRGB 多约四分之一，后来进入电脑和手机。",
          "A wide gamut born in digital cinema projectors, with richer reds and greens, about a quarter larger than sRGB, later adopted by computers and phones."
      ],
      "pq": [
          "按人眼对比敏感度分配码值的 HDR 曲线，10-bit 就能覆盖 0 到 10000 nit 而不出现色带。",
          "An HDR transfer function that spends code values according to the eye's contrast sensitivity, spanning 0 to 10,000 nits in 10 bits without visible banding."
      ],
      "hlg": [
          "暗部用伽马、亮部用对数的混合曲线，同一信号在 SDR 电视上能看、在 HDR 电视上更亮，适合直播。",
          "A hybrid gamma-plus-log curve whose single signal looks right on SDR sets and brighter on HDR sets, ideal for live broadcast."
      ],
      "lut": [
          "用查找表把灰平的 Log 画面实时映射成符合人眼观感的 Rec.709 画面或创意风格，拍摄时就能看到成片效果。",
          "A lookup table maps flat Log footage to eye-pleasing Rec.709 or a creative look in real time, previewing the final image while shooting."
      ],
      "film": [
          "把胶片的色彩、反差和肤色偏好做成机内色彩配方，直接输出符合人眼审美的 JPEG，而非中性数据。",
          "Bakes the color, contrast and skin-tone preferences of film stocks into in-camera recipes, outputting JPEGs tuned for human taste rather than neutral data."
      ],
      "cct": [
          "在摄像头旁加独立多通道光谱传感器，直接测环境光色温，帮白平衡算法在混合光和大面积纯色场景下不偏色。",
          "A separate multichannel spectral sensor measures ambient color temperature so white balance stays correct under mixed light or large single-color scenes."
      ],
      "tone": [
          "用环境光传感器测周围光的色温，实时调整屏幕白点，让屏幕像纸一样随环境光变色，符合人眼的色适应。",
          "An ambient light sensor measures room color temperature and shifts the screen's white point to match, like paper, following the eye's chromatic adaptation."
      ],
      "night": [
          "夜间把屏幕色温调暖、减少蓝光，因为人眼的感光视网膜神经节细胞对蓝光最敏感，会影响褪黑素和睡眠。",
          "Warms the screen and cuts blue light at night, since the eye's melanopsin cells are most sensitive to blue and affect melatonin and sleep."
      ],
      "cvd": [
          "针对红绿或蓝黄色弱，把屏幕颜色重新映射到色盲用户仍能区分的方向，属于系统级无障碍功能。",
          "Remaps screen colors for red-green or blue-yellow color vision deficiency so colorblind users can tell hues apart, as a system accessibility feature."
      ],
      "skin": [
          "用更多样的肤色数据调校曝光、白平衡和人脸检测，让深色皮肤被如实呈现，而不是被提亮或偏色。",
          "Tunes exposure, white balance and face detection on far more diverse skin-tone data so darker skin is rendered faithfully, not washed out or tinted."
      ],
      "gain": [
          "在普通 SDR 照片里附带一张亮度增益图，HDR 屏幕据此还原高光，SDR 屏幕照常显示，兼顾两种观看条件。",
          "Embeds a luminance gain map in an ordinary SDR photo so HDR screens restore highlights while SDR screens show it normally."
      ],
      "dn": [
          "夜间移开红外截止滤光片、借近红外光成像，换来人眼看不到的暗光画面；后来又发展到夜间保留真彩色。",
          "At night the IR-cut filter moves aside to image with near-infrared light the eye cannot see; later designs keep true color at night."
      ]
  },
  refs: [
      {
          "t": "Kodak DCS 100 维基百科",
          "u": "https://en.wikipedia.org/wiki/Kodak_DCS_100"
      },
      {
          "t": "JVC KY-1900 介绍",
          "u": "https://www.hdwarrior.co.uk/2012/01/22/jvc-ky-1900-back-to-the-future-1984/"
      },
      {
          "t": "ColorSync 简史",
          "u": "https://eclecticlight.co/2025/02/08/a-brief-history-of-colorsync/"
      },
      {
          "t": "Windows ICM 2.0 与 sRGB",
          "u": "https://learn.microsoft.com/windows/win32/wcs/srgb--a-standard-color-space"
      },
      {
          "t": "sRGB 历史",
          "u": "https://ninedegreesbelow.com/photography/srgb-history.html"
      },
      {
          "t": "Nikon D1X 评测（Adobe RGB）",
          "u": "https://www.dpreview.com/reviews/nikond1x"
      },
      {
          "t": "Eizo ColorEdge CG220 发布",
          "u": "https://creativepro.com/eizo-introduces-coloredge-cg220-lcd-monitor-to-photo-market/"
      },
      {
          "t": "DisplayMate Galaxy S4 色域",
          "u": "https://www.displaymate.com/Gamut_12.html"
      },
      {
          "t": "TI 数字影院起源",
          "u": "https://ti.com/about-ti/newsroom/company-blog/the-inception-of-digital-cinema-and-the-journey-ahead.html"
      },
      {
          "t": "Canon C300 Mark II 广色域",
          "u": "https://cinemaeos.canon.ca/resources/eos-c300-mark-ii-looking-forward-wide-color-spaces/"
      },
      {
          "t": "Android 8.0 色彩管理",
          "u": "https://medium.com/google-design/android-color-management-what-developers-and-designers-need-to-know-4fdd8054557e"
      },
      {
          "t": "iPad Pro 9.7 True Tone 发布",
          "u": "https://www.apple.com/newsroom/2016/03/21Apple-Introduces-9-7-inch-iPad-Pro/"
      },
      {
          "t": "f.lux 维基百科",
          "u": "https://en.wikipedia.org/wiki/F.lux"
      },
      {
          "t": "Android 5.0 色彩校正",
          "u": "https://www.androidcentral.com/accessibility-features-android-50-lollipop"
      },
      {
          "t": "Windows 10 颜色滤镜",
          "u": "https://www.windowscentral.com/how-enable-color-filters-windows-10-fall-creators-update"
      },
      {
          "t": "Fujifilm 胶片模拟指南",
          "u": "https://www.bhphotovideo.com/explora/photography/tips-and-solutions/your-guide-fujifilm-film-simulations"
      },
      {
          "t": "ARRI 色彩 FAQ",
          "u": "https://arri.com/en/learn-help/learn-help-camera-system/image-science/color-faq"
      },
      {
          "t": "FiLMiC Pro 7.4 支持 LUT",
          "u": "https://www.newsshooter.com/2023/05/08/filmic-pro-v7-4-now-offers-full-lut-support/"
      },
      {
          "t": "Huawei P20 色温传感器",
          "u": "https://www.cnx-software.com/2018/03/29/huawei-p20-pro-smartphone-comes-with-three-rear-cameras-main-monochrome-and-telephoto/"
      },
      {
          "t": "Huawei P40 多光谱色温传感器",
          "u": "https://www.huaweiupdate.com/in-depth-analysis-of-huawei-p40-series-cameras/"
      },
      {
          "t": "Pixel 3 Night Sight 学习型白平衡",
          "u": "https://research.google/blog/night-sight-seeing-in-the-dark-on-pixel-phones/"
      },
      {
          "t": "Pixel 6 Real Tone",
          "u": "https://blog.google/products/pixel/image-equity-real-tone-pixel-6-photos/"
      },
      {
          "t": "Android 14 Ultra HDR",
          "u": "https://source.android.com/docs/core/camera/ultra-hdr"
      },
      {
          "t": "Apple HDR 增益图",
          "u": "https://developer.apple.com/documentation/appkit/applying-apple-hdr-effect-to-your-photos"
      },
      {
          "t": "Sony NightShot 1998",
          "u": "https://money.cnn.com/1998/08/14/technology/camera_pkg/"
      },
      {
          "t": "可移除 IR 滤光片摄像机",
          "u": "https://professionalsecurity.co.uk/news/news-archive/ir-removable-filter/"
      },
      {
          "t": "Hikvision ColorVu 2018",
          "u": "https://www.hikvision.com/en/newsroom/latest-news/2018/hikvision-colorvu-cameras---capture-vivid-chromatic-images-in-darkness/"
      },
      {
          "t": "Sharp J-SH04 维基百科",
          "u": "https://en.wikipedia.org/wiki/J-SH04"
      }
  ],
  el: 'colortl', page: 'color-timeline.html', histSrc: 'js/hist-color.js',
  step: {n: 30, zh: '第 30 步：颜色空间、色深与色彩管理', en: 'Step 30: Color spaces, bit depth & color management'},
  text: {
    zh: {title: '人眼与色彩技术时间线', eyebrow: 'Vision & Color · 1982–2025', h1: '让颜色对得上人眼，谁先做到？',
         sub: '拜耳滤色片、自动白平衡、色彩管理、sRGB、Adobe RGB、P3、胶片模拟、昼夜切换、护眼模式、色盲辅助、PQ / HLG、原彩显示、色温传感器、HDR 增益图、肤色还原……每项围绕人眼的色彩技术最先出现在相机、手机、电视电脑还是安防车载里，又是怎么流到其他行业的。',
         panelCap: '每项围绕人眼的色彩技术最先在哪个行业量产。',
         foot: '「首发」指第一款实现它的商用产品，不是标准或论文发表的年份。HDR / HLG / PQ / P3 的年份和其他时间线一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'Vision & Color Timeline', eyebrow: 'Vision & Color · 1982–2025', h1: 'Matching color to the human eye: who did it first?',
         sub: 'Bayer filters, auto white balance, color management, sRGB, Adobe RGB, P3, film simulation, day/night switching, blue-light reduction, color-blindness filters, PQ / HLG, True Tone, color-temperature sensors, HDR gain maps, skin-tone rendering: did each human-vision color technology ship first in cameras, phones, TVs/PCs or security/automotive, and how did it spread?',
         panelCap: 'Which industry shipped each human-vision color technology first.',
         foot: '"First" means the first commercial product implementing it, not the year a standard or paper appeared. HDR / HLG / PQ / P3 years match the other timelines; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('color');
