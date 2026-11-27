/* 曝光技术首发时间线的数据：第 9 步抽屉小图和 exposure-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品。
   宽动态 / HDR、双转换增益、LED 防闪烁、防频闪、人脸优先和 ISP / 噪声 / 快门时间线一致；这里把单台摄像机的宽动态（wdr）和多张合成的 HDR（hdr）分成两项。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.ae = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '广播 / 工业 / 测光表', en: 'Broadcast / Industrial / Meters'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1931, "ind", "光电测光表 · Rhamstine Electrophot", "Photoelectric meter · Rhamstine Electrophot", 1, "meter"],
    [1932, "ind", "无电池硒光电测光表 · Weston 617", "Battery-free selenium meter · Weston 617", 2, "meter"],
    [1935, "cam", "机内测光表 · Zeiss Ikon Contaflex 双反", "Built-in exposure meter · Zeiss Ikon Contaflex TLR", 0, "meter"],
    [1936, "cam", "机内硒光电测光表 · Zeiss Ikon Contax III", "Built-in selenium meter · Zeiss Ikon Contax III", 2, "meter"],
    [1938, "cam", "自动曝光 · Kodak Super Six-20", "Automatic exposure · Kodak Super Six-20", 1, "ae"],
    [1947, "ind", "点测光表 · SEI Exposure Photometer", "Spot meter · SEI Exposure Photometer", 1, "spot"],
    [1953, "ind", "电视波形监视器 · Tektronix 524", "TV waveform monitor · Tektronix 524", 1, "waveform"],
    [1955, "ind", "首台命名为 Waveform Monitor · Tektronix 525", "First product named Waveform Monitor · Tektronix 525", 2, "waveform"],
    [1959, "cam", "程序自动曝光 · Agfa Optima", "Programmed auto exposure · Agfa Optima", 1, "program"],
    [1963, "cam", "TTL 镜后测光 · Topcon RE Super", "TTL metering · Topcon RE Super", 1, "ttl"],
    [1964, "cam", "TTL 平均测光普及 · Asahi Pentax Spotmatic", "TTL averaging goes mainstream · Asahi Pentax Spotmatic", 2, "ttl"],
    [1965, "cam", "焦平面快门 SLR 快门优先自动曝光 · Konica Auto-Reflex", "Shutter-priority AE in a focal-plane SLR · Konica Auto-Reflex", 2, "ae"],
    [1965, "cam", "机内中央局部测光 · Canon Pellix", "In-camera central partial metering · Canon Pellix", 0, "spot"],
    [1965, "cam", "光圈优先自动曝光 · Yashica Electro 35", "Aperture-priority AE · Yashica Electro 35", 1, "av"],
    [1968, "cam", "点测 / 平均可切换 · Mamiya/Sekor DTL", "Switchable spot / average · Mamiya/Sekor DTL", 2, "spot"],
    [1971, "cam", "首台光圈优先 SLR · Asahi Pentax Electro Spotmatic", "First aperture-priority SLR · Asahi Pentax Electro Spotmatic", 2, "av"],
    [1975, "cam", "OTF 闪光灯 TTL 测光 · Olympus OM-2 + Quick Auto 310", "OTF TTL flash metering · Olympus OM-2 + Quick Auto 310", 1, "ttlflash"],
    [1975, "auto", "CCTV 自动光圈镜头（约） · 监控摄像机镜头", "CCTV auto-iris lens (approx.) · surveillance camera lenses", 0, "ae"],
    [1976, "cam", "逆光补偿按钮 · Canon AE-1", "Backlight compensation button · Canon AE-1", 1, "blc"],
    [1978, "cam", "PASM 全模式与电子程序曝光 · Canon A-1", "Full PASM with electronic program AE · Canon A-1", 2, "program"],
    [1980, "ind", "斑马纹曝光指示（约） · 广播 ENG 摄像机寻像器", "Zebra exposure indicator (approx.) · broadcast ENG camera viewfinders", 1, "zebra"],
    [1983, "cam", "多区矩阵测光 AMP · Nikon FA", "Multi-segment matrix metering AMP · Nikon FA", 1, "matrix"],
    [1983, "cam", "多点测光平均 · Olympus OM-4", "Multi-spot averaging · Olympus OM-4", 2, "spot"],
    [1985, "cam", "自动包围曝光 · Minolta 9000 + Program Back Super 90", "Auto exposure bracketing · Minolta 9000 + Program Back Super 90", 1, "aeb"],
    [1987, "cam", "机身内置自动包围曝光 · Canon EOS 620", "Built-in auto exposure bracketing · Canon EOS 620", 2, "aeb"],
    [1990, "auto", "背光补偿 BLC（约） · CCD 监控摄像机", "Backlight compensation BLC (approx.) · CCD CCTV cameras", 0, "blc"],
    [1995, "cam", "准专业 / 消费级斑马纹 · Sony DCR-VX1000", "Prosumer zebra · Sony DCR-VX1000", 0, "zebra"],
    [1995, "cam", "预闪评价 E-TTL · Canon EOS 50", "Pre-flash evaluative E-TTL · Canon EOS 50", 2, "ttlflash"],
    [1996, "cam", "RGB 测光传感器 3D 彩色矩阵 · Nikon F5", "RGB metering sensor, 3D Color Matrix · Nikon F5", 1, "scene"],
    [1997, "auto", "宽动态 WDR · Panasonic Super Dynamic", "Wide dynamic range WDR · Panasonic Super Dynamic", 1, "wdr"],
    [1998, "cam", "直方图 · Kodak DCS 520", "Histogram · Kodak DCS 520", 1, "histogram"],
    [1999, "cam", "直方图 · Nikon D1", "Histogram · Nikon D1", 2, "histogram"],
    [1999, "phone", "手机摄像头自动曝光（约） · Kyocera VP-210", "Camera-phone auto exposure (approx.) · Kyocera VP-210", 0, "ae"],
    [1999, "cam", "预闪 D-TTL（数码上 OTF 失效） · Nikon D1", "Pre-flash D-TTL (OTF fails on digital) · Nikon D1", 2, "ttlflash"],
    [2005, "cam", "人脸检测优先曝光 · Nikon Coolpix", "Face-priority exposure · Nikon Coolpix", 1, "face"],
    [2007, "cam", "场景识别系统 · Nikon D300", "Scene Recognition System · Nikon D300", 2, "scene"],
    [2008, "phone", "人脸识别优先 · Sony Ericsson C902", "Face-priority capture · Sony Ericsson C902", 0, "face"],
    [2008, "cam", "机内波形监视 · Panasonic AG-HMC150", "In-camera waveform · Panasonic AG-HMC150", 0, "waveform"],
    [2009, "cam", "机内 HDR 合成 · Ricoh CX1 / Pentax K-7（首台单反）", "In-camera HDR merge · Ricoh CX1 / Pentax K-7 (first DSLR)", 1, "hdr"],
    [2009, "phone", "触屏点按测光 · iPhone 3GS", "Tap-to-meter on touchscreen · iPhone 3GS", 0, "spot"],
    [2010, "auto", "双转换增益 · Aptina DR-Pix", "Dual conversion gain · Aptina DR-Pix", 1, "dcg"],
    [2010, "phone", "HDR 拍照 · iPhone 4", "HDR photo · iPhone 4", 0, "hdr"],
    [2011, "cam", "双转换增益 · Nikon 1 V1 / J1", "Dual conversion gain · Nikon 1 V1 / J1", 0, "dcg"],
    [2013, "phone", "传感器级 HDR 视频 · Sony Xperia Z（IMX135）", "Sensor-level HDR video · Sony Xperia Z (IMX135)", 0, "wdr"],
    [2013, "phone", "多帧连拍合成 HDR+ · Nexus 5", "Burst-merge HDR+ · Nexus 5", 2, "hdr"],
    [2013, "phone", "场景识别自动模式 · Sony Xperia Z Superior Auto", "Scene-recognition auto · Sony Xperia Z Superior Auto", 0, "scene"],
    [2014, "cam", "防频闪拍摄 · Canon EOS 7D Mark II", "Anti-flicker shooting · Canon EOS 7D Mark II", 1, "flicker"],
    [2014, "cam", "双原生 ISO · Panasonic VariCam 35", "Dual native ISO · Panasonic VariCam 35", 2, "dcg"],
    [2014, "cam", "电子可变 ND · Sony PXW-X180", "Electronic variable ND · Sony PXW-X180", 1, "vnd"],
    [2015, "cam", "首台 Super35 电子可变 ND · Sony PXW-FS5", "First Super35 electronic variable ND · Sony PXW-FS5", 2, "vnd"],
    [2015, "phone", "原生相机直方图 · LG G4 手动模式", "Native camera histogram · LG G4 manual mode", 0, "histogram"],
    [2017, "auto", "LED 频闪抑制 LFM · Sony IMX390", "LED flicker mitigation LFM · Sony IMX390", 1, "lfm"],
    [2017, "phone", "NPU AI 场景识别 · Huawei Mate 10", "NPU AI scene recognition · Huawei Mate 10", 2, "scene"],
    [2018, "cam", "无反双原生 ISO · Panasonic GH5S", "Dual native ISO in mirrorless · Panasonic GH5S", 2, "dcg"],
    [2019, "auto", "HDR 与 LFM 同时 140dB · OmniVision OX08B", "HDR plus LFM at 140 dB · OmniVision OX08B", 2, "lfm"],
    [2019, "phone", "手机双转换增益 Smart-ISO · Samsung ISOCELL GW1（Redmi Note 8 Pro）", "Phone dual conversion gain Smart-ISO · Samsung ISOCELL GW1 (Redmi Note 8 Pro)", 0, "dcg"],
    [2019, "cam", "全画幅电子可变 ND · Sony PXW-FX9", "Full-frame electronic variable ND · Sony PXW-FX9", 2, "vnd"],
    [2021, "phone", "同帧双转换增益 · Samsung ISOCELL GN2（Xiaomi Mi 11 Ultra）", "Same-frame dual conversion gain · Samsung ISOCELL GN2 (Xiaomi Mi 11 Ultra)", 2, "dcg"],
    [2021, "phone", "频闪传感器（约） · Google Pixel 6 Pro", "Flicker sensor (approx.) · Google Pixel 6 Pro", 0, "flicker"],
  ],
  desc: {
      "meter": [
          "用光电池把场景亮度变成指针读数，再换算成光圈快门组合，让人不再靠经验猜曝光。",
          "A photocell turns scene brightness into a needle reading that converts to aperture and shutter, ending exposure by guesswork."
      ],
      "ae": [
          "测光元件直接驱动光圈或快门，人只管构图按快门，相机自己把曝光定到中灰附近。",
          "The meter drives the aperture or shutter directly, so the camera sets exposure near mid-grey while the user just frames and shoots."
      ],
      "program": [
          "相机按程序曲线同时决定光圈和快门，全自动给出合适曝光，适合抓拍和新手。",
          "The camera picks both aperture and shutter from a program line, giving a sensible exposure fully automatically."
      ],
      "ttl": [
          "测光元件放在镜头之后，测的是真正进入镜头的光，换镜头、加滤镜都不用再手算补偿。",
          "Metering behind the lens reads the light that actually enters it, so lenses and filters need no manual correction."
      ],
      "av": [
          "人定光圈控制景深，相机自动配快门速度，兼顾创作控制和曝光准确。",
          "The user sets aperture for depth of field and the camera picks the shutter speed, keeping control and accurate exposure."
      ],
      "spot": [
          "只测画面中很小一块区域的亮度，让人按主体而不是整体平均来定曝光，适合逆光和舞台。",
          "Metering a tiny area lets you expose for the subject rather than the frame average, ideal for backlight and stage scenes."
      ],
      "ttlflash": [
          "闪光时实时测量胶片或传感器上的反射光，够亮就切断闪光，闪光曝光不再靠导数计算。",
          "Flash light reflected off the film is measured during exposure and the flash is quenched when enough, no guide-number maths."
      ],
      "blc": [
          "检测到强烈背光时整体提高曝光，避免主体变成黑剪影，代价是背景可能过曝。",
          "When strong backlight is detected exposure is raised overall so the subject is not a silhouette, at the cost of a brighter background."
      ],
      "matrix": [
          "把画面分成多个区域分别测光，再按算法或数据库判断场景，比单点或平均测光更不容易被亮暗区带偏。",
          "Several zones are metered separately and judged by an algorithm or database, so bright or dark areas mislead it less than averaging."
      ],
      "aeb": [
          "一次按快门自动连拍几张不同曝光的照片，事后挑最准的一张，也是后来 HDR 合成的素材。",
          "One press shoots several frames at different exposures so you can pick the best, and later feed them into HDR merging."
      ],
      "scene": [
          "用彩色测光传感器或神经网络识别画面内容，比如人脸、天空、夜景，再据此调整曝光目标。",
          "A colour metering sensor or neural network recognises content such as faces, sky or night, then shifts the exposure target accordingly."
      ],
      "waveform": [
          "把每行画面亮度画成波形，横向看位置纵向看电平，摄影师能精确看出哪里过曝或欠曝。",
          "Brightness of every line is plotted as a waveform, showing exactly where the image clips or falls into shadow."
      ],
      "zebra": [
          "在寻像器里给超过设定亮度的区域叠上斜纹，摄影师一眼就知道高光快要溢出。",
          "Areas above a set brightness get diagonal stripes in the viewfinder, warning at a glance that highlights are about to clip."
      ],
      "histogram": [
          "统计整张图从暗到亮各级像素的数量，堆在左边是欠曝、顶到右边是过曝，比看屏幕可靠。",
          "Counts pixels at each brightness level; piled left means underexposed, clipped right means overexposed, more reliable than the screen."
      ],
      "face": [
          "先检测画面里的人脸，再优先按人脸亮度测光，逆光人像也能把脸拍亮。",
          "Faces are detected first and metered with priority, so backlit portraits still get a properly lit face."
      ],
      "wdr": [
          "传感器一帧内用长短两种曝光或多种增益拼合，亮处不过曝、暗处有细节，适合门口逆光监控。",
          "Long and short exposures within one frame are combined so highlights hold and shadows keep detail, ideal for backlit doorways."
      ],
      "hdr": [
          "连拍多张不同曝光或相同短曝光的照片再对齐合成，扩展动态范围并压低噪声。",
          "Several bracketed or short frames are aligned and merged to extend dynamic range and reduce noise."
      ],
      "dcg": [
          "像素里有高低两种转换增益可切换：暗光用高增益压读出噪声，亮光用低增益保满阱，扩展可用 ISO 和动态范围。",
          "Each pixel switches between high gain for low read noise in dim light and low gain for full-well capacity, widening usable ISO and DR."
      ],
      "flicker": [
          "检测灯光随交流电闪烁的频率，把快门时机对准灯光最亮的时刻，避免连拍忽明忽暗和色偏。",
          "The lamp flicker frequency is detected and the shutter is timed to the brightest point, avoiding uneven exposure and colour shifts."
      ],
      "lfm": [
          "用长曝光或分离像素覆盖 LED 的 PWM 周期，车灯和交通信号灯在视频里不再闪烁或消失。",
          "Long exposures or split pixels cover the LED PWM cycle so car lights and traffic signals never blink out on video."
      ],
      "vnd": [
          "用液晶层通电改变透光率，在镜头后连续调节减光量，光圈快门不动也能把曝光拉回来。",
          "A liquid-crystal layer changes transmission with voltage, dimming light continuously so exposure can be fixed without touching aperture or shutter."
      ]
  },
  refs: [
      {
          "t": "Weston 617 测光表",
          "u": "https://westonmeter.org.uk/617.htm"
      },
      {
          "t": "Contax III 与 Contaflex",
          "u": "https://en.wikipedia.org/wiki/Contax"
      },
      {
          "t": "Super Kodak Six-20",
          "u": "https://www.eastman.org/blog/75-years-super-kodak-six-20"
      },
      {
          "t": "Agfa Optima",
          "u": "https://camerapedia.fandom.com/wiki/Agfa_Optima"
      },
      {
          "t": "Topcon RE Super",
          "u": "https://en.wikipedia.org/wiki/Topcon_RE_Super"
      },
      {
          "t": "Konica Autoreflex",
          "u": "https://en.wikipedia.org/wiki/Konica_Autoreflex"
      },
      {
          "t": "Pentax ES 光圈优先",
          "u": "https://www.digitalcameraworld.com/cameras/film-cameras/the-slr-revolution-you-forgot-how-auto-exposure-changed-film-photography-forever"
      },
      {
          "t": "Olympus OM-2 OTF",
          "u": "https://en.wikipedia.org/wiki/Olympus_OM-2"
      },
      {
          "t": "Canon AE-1",
          "u": "https://en.wikipedia.org/wiki/Canon_AE-1"
      },
      {
          "t": "Canon A-1",
          "u": "https://en.wikipedia.org/wiki/Canon_A-1"
      },
      {
          "t": "Nikon FA 矩阵测光",
          "u": "https://imaging.nikon.com/history/chronicle/cousins14-e/"
      },
      {
          "t": "Nikon F5 RGB 测光",
          "u": "https://imaging.nikon.com/history/chronicle/history-f5/"
      },
      {
          "t": "SEI 点测光表",
          "u": "https://collection.sciencemuseumgroup.org.uk/objects/co509957/sei-exposure-photometer"
      },
      {
          "t": "机内点测光讨论",
          "u": "https://www.photrio.com/forum/threads/camera-built-in-spot-meter.209377/"
      },
      {
          "t": "Minolta 9000",
          "u": "https://en.wikipedia.org/wiki/Minolta_Maxxum_9000"
      },
      {
          "t": "Tektronix 524",
          "u": "https://w140.com/tekwiki/wiki/524"
      },
      {
          "t": "斑马纹",
          "u": "https://en.wikipedia.org/wiki/Zebra_patterning"
      },
      {
          "t": "Sony DCR-VX1000",
          "u": "https://en.wikipedia.org/wiki/Sony_DCR-VX1000"
      },
      {
          "t": "Panasonic AG-HMC150 波形",
          "u": "https://streaminglearningcenter.com/articles/shoot-review-panasonic-ag-hmc150.html"
      },
      {
          "t": "Nikon D1 评测",
          "u": "https://www.dpreview.com/reviews/nikond1/4"
      },
      {
          "t": "LG G4 手动模式",
          "u": "https://www.digitaltrends.com/phones/how-to-use-lg-g4-manual-mode/"
      },
      {
          "t": "Panasonic Super Dynamic",
          "u": "https://www.securityworldmarket.com/uk/Newsarchive/panasonic-sd-cameras-hits-2-million-sales-milestone"
      },
      {
          "t": "Sony Xperia Z HDR 视频",
          "u": "https://www.engadget.com/2013/01/07/sony-xperia-z-announced-ces-2013/"
      },
      {
          "t": "Aptina DR-Pix",
          "u": "https://image-sensors-world.blogspot.com/2010/11/aptina-announces-12mp-115db-hdr.html"
      },
      {
          "t": "Sony FS5 电子 ND",
          "u": "https://nofilmschool.com/2015/09/sony-pxw-fs5-4k-cinema-camera-e-mount-electronic-variable-nd"
      },
      {
          "t": "Huawei Mate 10 AI",
          "u": "https://www.huawei.com/en/news/2017/10/HUAWEI-Mate10-Mate10Pro"
      },
      {
          "t": "Pixel 6 Pro 频闪传感器",
          "u": "https://www.xda-developers.com/google-pixel-6-camera-features-revealed"
      },
      {
          "t": "Sony Ericsson C902 人脸",
          "u": "https://www.theregister.co.uk/2008/06/26/review_sony_ericsson_c902/?page=4"
      },
      {
          "t": "Computar CCTV 镜头",
          "u": "https://www.123securityproducts.com/computar-info"
      },
      {
          "t": "CCTV BLC 原理",
          "u": "https://www.cctvcameraworld.com/blc-hlc-wdr-in-camera-image-sensors/"
      }
  ],
  el: 'aetl', page: 'exposure-timeline.html', histSrc: 'js/hist-ae.js',
  step: {n: 9, zh: '第 9 步：快门、ISO 与拍照', en: 'Step 9: Shutter, ISO & taking the shot'},
  text: {
    zh: {title: '曝光技术时间线', eyebrow: 'Exposure · 1931–2021', h1: '照片该多亮，谁先自动算出来？',
         sub: '测光表、自动曝光、程序曝光、TTL 测光、光圈优先、点测光、闪光灯 TTL、背光补偿、矩阵测光、包围曝光、场景识别、波形图、斑马纹、直方图、人脸优先曝光、宽动态、多帧 HDR、双转换增益、防频闪、LED 防闪烁、电子可变 ND……每项曝光技术最先出现在相机、手机、广播工业还是安防车载里，又是怎么流到其他行业的。',
         panelCap: '每项曝光技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品，不是专利年份。和 ISP / 噪声 / 快门时间线重合的条目年份一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'Exposure Technology Timeline', eyebrow: 'Exposure · 1931–2021', h1: 'How bright should it be: who automated it first?',
         sub: 'Light meters, auto exposure, program AE, TTL metering, aperture priority, spot metering, TTL flash, backlight compensation, matrix metering, bracketing, scene recognition, waveforms, zebras, histograms, face-priority AE, WDR, multi-frame HDR, dual conversion gain, anti-flicker, LED flicker mitigation, electronic variable ND: did each ship first in cameras, phones, broadcast/industry or security/automotive, and how did it spread?',
         panelCap: 'Which industry shipped each exposure technology first.',
         foot: '"First" means first in a commercial product, not the patent year. Items overlapping the ISP / noise / shutter timelines match their years; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('ae');
