/* 显示技术首发时间线的数据：第 31 步抽屉小图和 display-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入量产 / 商用产品。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。HUD 只算民用车载（飞机 HUD 更早，不在这四个行业里）。 */
TIMELINES.disp = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '电视 / 电脑 / 其他', en: 'TV / PC / Other'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1983, "ind", "触摸屏 · HP-150 红外触控电脑", "Touchscreen · HP-150 infrared-touch PC", 1, "touch"],
    [1984, "ind", "TFT 彩色液晶 · Epson ET-10 口袋彩电", "TFT color LCD · Epson ET-10 pocket TV", 1, "tft"],
    [1986, "auto", "触摸屏 · Buick Riviera 图形控制中心", "Touchscreen · Buick Riviera Graphic Control Center", 0, "touch"],
    [1988, "auto", "抬头显示 HUD · Oldsmobile Cutlass Supreme 纪念版", "Head-up display · Oldsmobile Cutlass Supreme pace-car edition", 1, "hud"],
    [1992, "cam", "TFT 彩色液晶 · Sharp ViewCam VL-HL1 4 英寸取景屏", "TFT color LCD · Sharp ViewCam VL-HL1 4-inch monitor", 0, "tft"],
    [1994, "auto", "TFT 彩色液晶 · Mazda Sentia 车载导航屏（约）", "TFT color LCD · Mazda Sentia navigation screen (approx.)", 0, "tft"],
    [1994, "phone", "触摸屏 · IBM Simon", "Touchscreen · IBM Simon", 0, "touch"],
    [1995, "cam", "TFT 彩色液晶 · Casio QV-10 首款带背屏数码相机", "TFT color LCD · Casio QV-10, first digital camera with rear LCD", 2, "tft"],
    [1996, "ind", "IPS 广视角 · Hitachi 13.3 英寸 Super TFT 显示器", "IPS wide viewing angle · Hitachi 13.3-inch Super TFT monitor", 1, "ips"],
    [1997, "auto", "OLED · Pioneer 车载 FM 文字广播接收机", "OLED · Pioneer in-car FM teletext receiver", 1, "oled"],
    [2000, "phone", "TFT 彩色液晶 · Sharp J-SH05 6.5 万色手机", "TFT color LCD · Sharp J-SH05 65k-color phone", 0, "tft"],
    [2002, "phone", "OLED 外屏 · Fujitsu F504i（约）", "OLED sub-display · Fujitsu F504i (approx.)", 0, "oled"],
    [2003, "cam", "AMOLED · Kodak EasyShare LS633", "AMOLED · Kodak EasyShare LS633", 0, "oled"],
    [2004, "ind", "E Ink 电子纸 · Sony LIBRIé EBR-1000", "E Ink e-paper · Sony LIBRIé EBR-1000", 1, "epaper"],
    [2004, "ind", "AMOLED · Sony CLIÉ PEG-VZ90 掌上电脑", "AMOLED · Sony CLIÉ PEG-VZ90 PDA", 0, "oled"],
    [2005, "ind", "硅基 OLED 微显示 · eMagin Z800 3DVisor 头显", "OLED-on-silicon microdisplay · eMagin Z800 3DVisor headset", 1, "microoled"],
    [2005, "cam", "触摸屏 · Sony Cyber-shot DSC-N1", "Touchscreen · Sony Cyber-shot DSC-N1", 0, "touch"],
    [2006, "phone", "E Ink 电子纸 · Motorola MOTOFONE F3", "E Ink e-paper · Motorola MOTOFONE F3", 0, "epaper"],
    [2007, "phone", "电容多点触控 · iPhone", "Capacitive multi-touch · iPhone", 1, "mtouch"],
    [2007, "ind", "电容多点触控 · iPod touch", "Capacitive multi-touch · iPod touch", 0, "mtouch"],
    [2007, "ind", "E Ink 电子纸 · Amazon Kindle", "E Ink e-paper · Amazon Kindle", 2, "epaper"],
    [2009, "ind", "120 Hz 高刷 · Samsung SyncMaster 2233RZ 显示器", "120 Hz refresh · Samsung SyncMaster 2233RZ monitor", 1, "hrr"],
    [2010, "phone", "高 PPI Retina · iPhone 4（326 ppi）", "High-PPI Retina · iPhone 4 (326 ppi)", 1, "retina"],
    [2010, "phone", "IPS 广视角 · iPhone 4", "IPS wide viewing angle · iPhone 4", 0, "ips"],
    [2010, "phone", "Super AMOLED 主屏 · Samsung Galaxy S", "Super AMOLED main screen · Samsung Galaxy S", 2, "oled"],
    [2011, "cam", "OLED EVF · Sony α77 XGA Tru-Finder", "OLED EVF · Sony α77 XGA Tru-Finder", 0, "microoled"],
    [2012, "ind", "高 PPI Retina · iPad（第三代）", "High-PPI Retina · iPad (3rd gen)", 0, "retina"],
    [2012, "auto", "电容触控大屏 · Tesla Model S 17 英寸中控", "Capacitive touch display · Tesla Model S 17-inch center screen", 0, "mtouch"],
    [2012, "cam", "电容多点触控 · Canon EOS 650D", "Capacitive multi-touch · Canon EOS 650D", 0, "mtouch"],
    [2013, "ind", "量子点 · Sony BRAVIA Triluminos 电视", "Quantum dot · Sony BRAVIA Triluminos TV", 1, "qd"],
    [2013, "phone", "柔性 OLED · Samsung Galaxy Round", "Flexible OLED · Samsung Galaxy Round", 1, "flex"],
    [2014, "ind", "柔性 OLED · Samsung Gear Fit 手环", "Flexible OLED · Samsung Gear Fit band", 0, "flex"],
    [2015, "ind", "DCI-P3 广色域 · iMac 5K（2015 年末）", "DCI-P3 wide gamut · iMac 5K (late 2015)", 1, "p3"],
    [2015, "ind", "HDR 显示 · Vizio Reference Series（Dolby Vision）", "HDR display · Vizio Reference Series (Dolby Vision)", 1, "hdr"],
    [2015, "phone", "120 Hz 高刷 · Sharp AQUOS ZETA SH-01H", "120 Hz refresh · Sharp AQUOS ZETA SH-01H", 0, "hrr"],
    [2016, "phone", "DCI-P3 广色域 · iPhone 7", "DCI-P3 wide gamut · iPhone 7", 0, "p3"],
    [2016, "phone", "HDR10 · Samsung Galaxy Note7", "HDR10 · Samsung Galaxy Note7", 0, "hdr"],
    [2016, "cam", "120 fps EVF · Olympus OM-D E-M1 Mark II", "120 fps EVF · Olympus OM-D E-M1 Mark II", 0, "hrr"],
    [2017, "phone", "Dolby Vision · LG G6", "Dolby Vision · LG G6", 2, "hdr"],
    [2018, "ind", "LTPO · Apple Watch Series 4", "LTPO · Apple Watch Series 4", 1, "ltpo"],
    [2018, "ind", "MicroLED · Samsung The Wall", "MicroLED · Samsung The Wall", 1, "microled"],
    [2018, "cam", "HDR 监视器 · Atomos Ninja V 1000 nit", "HDR monitor · Atomos Ninja V 1000 nit", 0, "hdr"],
    [2018, "phone", "可折叠 OLED · Royole FlexPai 柔派", "Foldable OLED · Royole FlexPai", 2, "flex"],
    [2019, "ind", "Mini LED 背光 · TCL 8-Series 电视", "Mini LED backlight · TCL 8-Series TV", 1, "miniled"],
    [2020, "phone", "屏下摄像头 · ZTE Axon 20 5G", "Under-display camera · ZTE Axon 20 5G", 1, "udc"],
    [2020, "phone", "LTPO 可变刷新 · Samsung Galaxy Note20 Ultra", "LTPO variable refresh · Samsung Galaxy Note20 Ultra", 0, "ltpo"],
    [2020, "auto", "AR-HUD · Mercedes-Benz S 级", "AR-HUD · Mercedes-Benz S-Class", 2, "hud"],
    [2021, "auto", "曲面 P-OLED · Cadillac Escalade 38 英寸座舱", "Curved P-OLED · Cadillac Escalade 38-inch cockpit", 0, "flex"],
    [2021, "phone", "LTPO ProMotion · iPhone 13 Pro", "LTPO ProMotion · iPhone 13 Pro", 2, "ltpo"],
    [2021, "ind", "Mini LED 背光 · iPad Pro 12.9 英寸", "Mini LED backlight · iPad Pro 12.9-inch", 2, "miniled"],
    [2022, "ind", "QD-OLED · Alienware AW3423DW 显示器", "QD-OLED · Alienware AW3423DW monitor", 2, "qd"],
    [2024, "auto", "Mini LED 背光 · Xiaomi SU7 16.1 英寸中控", "Mini LED backlight · Xiaomi SU7 16.1-inch center display", 0, "miniled"],
    [2024, "auto", "量子点膜 Mini LED · Zeekr 7X 座舱屏", "QD-film Mini LED · Zeekr 7X cockpit display", 0, "qd"],
    [2024, "ind", "硅基 OLED 微显示 · Apple Vision Pro", "OLED-on-silicon microdisplay · Apple Vision Pro", 2, "microoled"],
  ],
  desc: {
      "tft": [
          "每个像素配一个薄膜晶体管开关的有源矩阵液晶，解决了无源屏拖影、对比低的问题，让彩色小屏能放视频。",
          "Active-matrix LCD with a thin-film transistor per pixel, ending passive-matrix smearing and low contrast so small color screens could show video."
      ],
      "oled": [
          "有机发光二极管自发光、无需背光，黑色纯、对比无限、可做得更薄，先用在小尺寸单色屏上。",
          "Organic LEDs emit their own light with no backlight, giving true blacks, huge contrast and thinner panels; it first shipped as small monochrome screens."
      ],
      "microoled": [
          "把 OLED 直接做在硅芯片上，几毫米见方就有百万级像素，是 EVF 和头显的核心微显示器。",
          "OLED built directly on a silicon chip, packing millions of pixels into a few millimetres; the microdisplay behind EVFs and headsets."
      ],
      "ips": [
          "液晶分子在平行于屏幕的平面内转动，解决 TN 屏斜看偏色、视角窄的问题。",
          "Liquid crystals rotate in the plane of the panel, fixing the colour shift and narrow viewing angles of TN LCDs."
      ],
      "retina": [
          "像素密度高到正常观看距离下肉眼分辨不出单个像素，文字和照片边缘不再有锯齿。",
          "Pixel density high enough that individual pixels vanish at normal viewing distance, so text and photo edges look smooth."
      ],
      "touch": [
          "在屏幕上直接点选代替按键和光标，最早用红外、电阻等方案，只能单点操作。",
          "Pointing directly on the screen instead of keys or a cursor; early versions used infrared or resistive sensing with a single touch point."
      ],
      "mtouch": [
          "玻璃下的电容传感阵列同时追踪多根手指，支持缩放、滑动等手势，取代需要按压的电阻屏。",
          "A capacitive sensor grid under glass tracks several fingers at once for pinch and swipe gestures, replacing press-to-register resistive screens."
      ],
      "p3": [
          "色域比 sRGB 大约 25%，能显示更饱和的红绿色，让屏幕看到相机和影院级的颜色。",
          "A colour gamut about 25% wider than sRGB, showing more saturated reds and greens so screens can reproduce camera and cinema colour."
      ],
      "hdr": [
          "更高峰值亮度配合 PQ 等传输曲线和元数据，让高光和暗部同时保留层次。",
          "Higher peak brightness plus PQ-style transfer curves and metadata keep detail in both highlights and shadows."
      ],
      "hrr": [
          "把刷新率从 60 Hz 提到 120 Hz 以上，滚动、跟拍和取景时运动更顺、拖影更少。",
          "Raising refresh from 60 Hz to 120 Hz or more makes scrolling, panning and viewfinder motion smoother with less blur."
      ],
      "ltpo": [
          "在 OLED 背板中混用 LTPS 与氧化物晶体管，刷新率可降到 1 Hz，省电并支持常亮显示。",
          "Mixing LTPS and oxide transistors in the OLED backplane lets refresh drop to 1 Hz, saving power and enabling always-on displays."
      ],
      "miniled": [
          "用成千上万颗微小 LED 做背光、分区独立调光，让液晶屏接近 OLED 的黑位与对比。",
          "Thousands of tiny LEDs form a locally dimmed backlight, bringing LCD blacks and contrast close to OLED."
      ],
      "qd": [
          "纳米量子点把蓝光转成纯净的红光和绿光，大幅扩宽液晶或 OLED 的色域。",
          "Nanoscale quantum dots convert blue light into pure red and green, greatly widening the colour gamut of LCD or OLED."
      ],
      "flex": [
          "把 OLED 做在塑料基板上，屏幕可弯曲、可折叠，带来曲面屏和折叠形态。",
          "Building OLED on a plastic substrate lets screens bend and fold, enabling curved and foldable designs."
      ],
      "hud": [
          "把车速、导航等信息投射到驾驶员视线前方，不用低头看仪表。",
          "Projects speed, navigation and other data into the driver's line of sight so they need not look down at the gauges."
      ],
      "udc": [
          "把前置摄像头藏在像素稀疏的屏幕区域下，去掉刘海和挖孔，实现真全面屏。",
          "Hides the selfie camera beneath a sparse-pixel area of the screen, removing notches and punch holes for a full-screen front."
      ],
      "epaper": [
          "电泳微胶囊靠反射环境光显示，阳光下清晰、断电保持画面，几乎只在翻页时耗电。",
          "Electrophoretic microcapsules reflect ambient light, stay readable in sunlight, hold the image unpowered and draw power only on refresh."
      ],
      "microled": [
          "每个像素是独立的微米级无机 LED，自发光、亮度高、寿命长，可拼接成任意尺寸。",
          "Each pixel is its own micron-scale inorganic LED: self-emissive, very bright, long-lived and tileable to any size."
      ]
  },
  refs: [
      {
          "t": "Epson ET-10 首款液晶彩电",
          "u": "https://corporate-origin.epson.biz/en/about/history/milestone-products/1984-8-et10.html"
      },
      {
          "t": "Sharp 液晶 ViewCam",
          "u": "https://global.sharp/corporate/info/his/only_one/item/t28.html"
      },
      {
          "t": "汽车导航 TFT 显示单元（SAE）",
          "u": "https://saemobilus.sae.org/papers/development-a-display-unit-automobile-navigation-system-940515"
      },
      {
          "t": "Sharp J-SH05 彩色 TFT 手机",
          "u": "https://k-tai.watch.impress.co.jp/cda/article/showcase_top/3911.html"
      },
      {
          "t": "Pioneer OLED 历史",
          "u": "https://www.oled-info.com/pioneer-soar-oled-company-spotlight-history-and-future"
      },
      {
          "t": "手机 OLED 简史（GSMArena）",
          "u": "https://www.gsmarena.com/flashback_the_story_of_oled_displays_on_mobile_phones-news-51518.php"
      },
      {
          "t": "Kodak LS633 首款 OLED 相机",
          "u": "https://www.dpreview.com/articles/0923133050/kodakls633"
      },
      {
          "t": "Sony CLIÉ PEG-VZ90",
          "u": "https://en.wikipedia.org/wiki/Sony_CLI%C3%89_PEG-VZ90"
      },
      {
          "t": "eMagin Z800 3DVisor",
          "u": "https://en.wikipedia.org/wiki/EMagin"
      },
      {
          "t": "Sony α77 OLED 取景器",
          "u": "https://www.dpreview.com/articles/9266553875/sonyslta77preview/"
      },
      {
          "t": "Hitachi Super TFT（1996）",
          "u": "https://www.hitachi.com/New/cnews/E/1996/960418A.html"
      },
      {
          "t": "HP-150 触摸屏电脑",
          "u": "https://en.wikipedia.org/wiki/HP-150"
      },
      {
          "t": "1986 Buick Riviera 触摸屏",
          "u": "https://news.gm.com/home.detail.html/Pages/topic/us/en/2025/mar/0319-retrorides.html"
      },
      {
          "t": "Sony DSC-N1 触摸屏相机",
          "u": "https://www.dpreview.com/articles/1864763096/sonydscn1"
      },
      {
          "t": "Canon 650D 电容触摸屏",
          "u": "https://www.imaging-resource.com/news/touchscreen-canon-t4i-slr-two-new-lenses-unveiled-previewed/"
      },
      {
          "t": "iPhone 7 Wide Color（P3）",
          "u": "https://appleinsider.com/articles/16/09/09/apples-wide-color-screen-on-the-iphone-7-will-lead-to-more-faithful-color-reproduction"
      },
      {
          "t": "Vizio Reference Dolby Vision 上市",
          "u": "https://www.vizio.com/en/press/2015/oct/vizio-announces-pricing-and-availability-for-highly-anticipated-reference-series-collection-featuring-dolby-vision-high-dynamic-range-support"
      },
      {
          "t": "Galaxy Note7 首款 HDR10 手机",
          "u": "https://www.phonearena.com/news/The-Note-7-is-the-first-smartphone-with-HDR10-compliant-display-and-this-is-why-you-should-care_id83772"
      },
      {
          "t": "Atomos Ninja V",
          "u": "https://www.videomaker.com/atomos-ninja-v-review-a-powerful-monitor-and-recorder-in-a-small-package/"
      },
      {
          "t": "Samsung 2233RZ 120 Hz",
          "u": "https://tftcentral.co.uk/reviews/samsung_2233rz.htm"
      },
      {
          "t": "Sharp AQUOS ZETA 120 Hz",
          "u": "https://gigazine.net/gsc_news/en/20150930-aquos-zeta-dcm2015w"
      },
      {
          "t": "Olympus E-M1 II 120 fps EVF",
          "u": "https://www.techradar.com/reviews/olympus-om-d-e-m1-mark-ii/3"
      },
      {
          "t": "Apple Watch LTPO",
          "u": "https://www.ifixit.com/News/32943/apple-watch-ltpo-always-on-display"
      },
      {
          "t": "Note20 Ultra LTPO",
          "u": "https://sammobile.com/news/samsung-galaxy-note-20-ultra-first-phone-variable-refresh-rate-super-amoled-display"
      },
      {
          "t": "TCL 8-Series Mini LED",
          "u": "https://www.engadget.com/2019-10-08-tcl-8-series-tv-pre-orders-4k-qled-mini-led.html"
      },
      {
          "t": "车载 Mini LED / 量子点（Omdia）",
          "u": "https://omdia.tech.informa.com/om137898/display-dynamics-july-the-zeekr-x-is-the-first-vehicle-to-feature-a-qd-film-mini-led-backlit-lcd"
      },
      {
          "t": "Xiaomi SU7 显示屏供应商",
          "u": "https://www.trendforce.com/news/2024/03/29/news-xiaomi-car-sales-soar-suppliers-revealed/"
      },
      {
          "t": "Sony Triluminos 量子点",
          "u": "https://venturebeat.com/technology/quantum-dots-make-first-commercial-appearance-in-sony-tvs"
      },
      {
          "t": "Galaxy Round 首款柔性 OLED",
          "u": "https://www.oled-info.com/samsung-galaxy-round"
      },
      {
          "t": "Samsung Gear Fit",
          "u": "https://en.wikipedia.org/wiki/Samsung_Gear_Fit"
      },
      {
          "t": "Escalade 曲面 P-OLED",
          "u": "https://www.lg.com/global/newsroom/news/vehicle-solutions/worlds-first-in-vehicle-p-oled-cockpit-from-lg-debuts-in-new-2021-cadillac-escalade/"
      },
      {
          "t": "汽车抬头显示",
          "u": "https://en.wikipedia.org/wiki/Automotive_head-up_display"
      },
      {
          "t": "AR-HUD 从豪华车到紧凑车（VW）",
          "u": "https://www.volkswagen-newsroom.com/en/press-releases/from-the-luxury-class-to-the-compact-segment-the-augmented-reality-head-up-display-6730"
      },
      {
          "t": "ZTE Axon 20 5G 屏下摄像头",
          "u": "https://www.zte.com.cn/global/about/news/20200901e2.html"
      },
      {
          "t": "Sony LIBRIé",
          "u": "https://wiki.mobileread.com/wiki/Sony_Librie"
      },
      {
          "t": "Motorola MOTOFONE",
          "u": "https://www.wikipedia.org/wiki/Motorola_Fone"
      },
      {
          "t": "Samsung The Wall 上市",
          "u": "https://www.sammobile.com/2018/06/06/samsung-now-taking-orders-for-its-the-wall-microled-display/"
      }
  ],
  el: 'disptl', page: 'display-timeline.html',
  step: {n: 31, zh: '第 31 步：显示端', en: 'Step 31: The display end'},
  text: {
    zh: {title: '显示技术时间线', eyebrow: 'Displays · 1983–2024', h1: '照片显示在哪，谁先用上？',
         sub: 'TFT LCD、OLED、IPS、高 PPI、触控、广色域、HDR、高刷、LTPO、Mini-LED、量子点、柔性屏、微型 OLED 取景器、HUD、电子纸……每项显示技术最先出现在手机、车载、电视电脑还是相机里，又是怎么流到其他行业的。',
         panelCap: '每项显示技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入量产或商用产品，不是第一次展出原型。只找到间接来源的年份标了「约」；车型类的传入行是代表车型，不一定是最早一款。'},
    en: {title: 'Display Technology Timeline', eyebrow: 'Displays · 1983–2024', h1: 'Where are photos shown, and who used it first?',
         sub: 'TFT LCD, OLED, IPS, high PPI, touch, wide gamut, HDR, high refresh, LTPO, Mini-LED, quantum dots, flexible OLED, micro-OLED viewfinders, HUD, e-paper: did each display technology ship first in phones, cars, TVs/PCs or cameras, and how did it spread?',
         panelCap: 'Which industry shipped each display technology first.',
         foot: '"First" means first in a shipping or commercial product, not first prototype shown. Years backed only by indirect sources are marked "approx."; car rows in later lanes are representative models, not necessarily the very first.'},
  },
};
renderTlPanel('disp');
