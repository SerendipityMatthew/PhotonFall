/* 对焦技术首发时间线的数据：第 3 步抽屉小图和 af-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品。
   自动对焦、片上相位对焦、全像素双核、激光对焦、液体镜头、人脸 / 眼部对焦和镜头 / CMOS / ISP 时间线一致；
   主体识别首发 Olympus E-M1X（2019）、触控对焦首发 Panasonic FX500（2008）是这次调研新查到、比原先认为的更早的产品。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。车载摄像头基本是定焦，所以没有车载行。 */
TIMELINES.af = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '工业 / 机器视觉 / 其他', en: 'Industrial / Machine vision / Other'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1977, "cam", "自动对焦相机 · Konica C35 AF（Honeywell Visitronic）", "Autofocus camera · Konica C35 AF (Honeywell Visitronic)", 1, "af"],
    [1978, "cam", "超声波测距对焦 · Polaroid SX-70 Sonar OneStep", "Ultrasonic sonar AF · Polaroid SX-70 Sonar OneStep", 1, "sonar"],
    [1979, "cam", "主动红外对焦 · Canon AF35M（Autoboy）", "Active infrared AF · Canon AF35M (Autoboy / Sure Shot)", 1, "iraf"],
    [1980, "ind", "超声波测距对焦 · Polaroid Ultrasonic Ranging 开发套件（机器人测距）", "Ultrasonic sonar AF · Polaroid Ultrasonic Ranging Designer's Kit (robotics)", 0, "sonar"],
    [1981, "cam", "TTL 反差对焦 · Pentax ME F", "TTL contrast-detect AF · Pentax ME F", 1, "cdaf"],
    [1981, "cam", "镜内对焦马达 · SMC Pentax AF 35–70mm（配 ME F）", "In-lens focus motor · SMC Pentax AF 35-70mm (for ME F)", 1, "motor"],
    [1985, "cam", "机身集成 TTL 相位检测 · Minolta α-7000（Maxxum 7000）", "Body-integrated TTL phase-detect AF · Minolta α-7000 (Maxxum 7000)", 1, "ttlpd"],
    [1985, "cam", "主动红外对焦 · Sony CCD-V8AF 摄像机", "Active infrared AF · Sony CCD-V8AF camcorder", 2, "iraf"],
    [1987, "cam", "环形超声波马达 · Canon EF USM", "Ring ultrasonic motor · Canon EF USM", 2, "motor"],
    [1988, "cam", "预测追焦 · Minolta α-7000i", "Predictive focus tracking · Minolta α-7000i", 1, "predict"],
    [1989, "cam", "十字型对焦点 · Canon EOS-1", "Cross-type AF sensor · Canon EOS-1", 1, "cross"],
    [1995, "ind", "反差对焦 · Sony EVI-D30 云台视频会议摄像机（约）", "Contrast-detect AF · Sony EVI-D30 PTZ conferencing camera (approx.)", 0, "cdaf"],
    [2003, "phone", "反差对焦 · NTT DoCoMo P505iS", "Contrast-detect AF · NTT DoCoMo P505iS", 0, "cdaf"],
    [2005, "cam", "人脸检测对焦 · Nikon Coolpix 7900 / 5900", "Face-detection AF · Nikon Coolpix 7900 / 5900", 1, "face"],
    [2006, "ind", "液体镜头 · Varioptic Arctic 320", "Liquid lens · Varioptic Arctic 320", 1, "liquid"],
    [2007, "cam", "3D 色彩追踪 · Nikon D3 / D300", "3D color tracking · Nikon D3 / D300", 2, "predict"],
    [2008, "cam", "触摸对焦 · Panasonic Lumix FX500", "Touch AF · Panasonic Lumix FX500", 1, "touch"],
    [2008, "phone", "人脸检测对焦 · Sony Ericsson C902", "Face-detection AF · Sony Ericsson C902", 0, "face"],
    [2009, "auto", "反差对焦 · Axis Q1755 高清网络摄像机", "Contrast-detect AF · Axis Q1755 HDTV network camera", 0, "cdaf"],
    [2009, "phone", "触摸对焦 · iPhone 3GS", "Touch AF · iPhone 3GS (tap to focus)", 0, "touch"],
    [2009, "ind", "液体镜头 · Cognex DataMan 200 读码器", "Liquid lens · Cognex DataMan 200 code reader", 2, "liquid"],
    [2010, "cam", "相位检测像素 · Fujifilm F300EXR", "On-sensor phase-detect pixels · Fujifilm F300EXR", 1, "pdpix"],
    [2012, "cam", "步进马达 STM · Canon EF 40mm STM", "Stepping motor STM · Canon EF 40mm STM", 2, "motor"],
    [2012, "cam", "线性马达 · Fujifilm XF 18-55mm LM", "Linear motor · Fujifilm XF 18-55mm LM", 2, "motor"],
    [2012, "cam", "混合对焦 · Sony NEX-5R Fast Hybrid AF", "Hybrid AF · Sony NEX-5R Fast Hybrid AF", 2, "pdpix"],
    [2013, "cam", "全像素双核对焦 · Canon EOS 70D", "Dual Pixel AF · Canon EOS 70D", 1, "dpaf"],
    [2013, "cam", "眼部对焦 · Sony α7 / α7R", "Eye AF · Sony α7 / α7R", 1, "eye"],
    [2014, "cam", "DFD 离焦测距 · Panasonic GH4", "Depth From Defocus · Panasonic GH4", 1, "dfd"],
    [2014, "phone", "SPAD ToF 激光对焦 · LG G3（ST FlightSense）", "SPAD ToF laser AF · LG G3 (ST FlightSense)", 1, "tof"],
    [2014, "phone", "相位检测像素 · Galaxy S5、iPhone 6（Focus Pixels）", "On-sensor phase-detect pixels · Galaxy S5, iPhone 6 (Focus Pixels)", 0, "pdpix"],
    [2016, "phone", "全像素双核对焦 · Samsung Galaxy S7", "Dual Pixel AF · Samsung Galaxy S7", 0, "dpaf"],
    [2018, "cam", "XD 线性马达 · Sony FE 400mm GM", "XD linear motor · Sony FE 400mm GM", 2, "motor"],
    [2019, "cam", "智能主体识别 · Olympus E-M1X（车辆 / 飞机 / 火车）", "Intelligent subject detection · Olympus E-M1X (vehicles, planes, trains)", 1, "subj"],
    [2019, "phone", "眼部对焦 · Sony Xperia 1", "Eye AF · Sony Xperia 1", 0, "eye"],
    [2019, "cam", "实时眼部对焦 · Sony α6400", "Real-time Eye AF · Sony α6400", 2, "eye"],
    [2020, "phone", "LiDAR 辅助对焦 · iPhone 12 Pro", "LiDAR-assisted AF · iPhone 12 Pro", 2, "tof"],
    [2021, "cam", "呼吸补偿 · Sony α7 IV", "Focus breathing compensation · Sony α7 IV", 1, "breath"],
    [2021, "phone", "液体镜头 · Xiaomi Mi MIX Fold", "Liquid lens · Xiaomi Mi MIX Fold", 0, "liquid"],
    [2021, "cam", "LiDAR 测距对焦 · DJI Ronin 4D", "LiDAR focusing · DJI Ronin 4D", 0, "tof"],
    [2021, "cam", "车辆识别对焦 · Canon EOS R3", "Vehicle detection AF · Canon EOS R3", 2, "subj"],
    [2022, "cam", "AI 主体识别 · Sony α7R V", "AI subject recognition · Sony α7R V", 2, "subj"],
  ],
  desc: {
      "af": [
          "相机自己判断距离并驱动镜头：C35 AF 用 Honeywell Visitronic 双窗口比对两路影像，电子版的双影重合测距。",
          "The camera judges distance and drives the lens itself; the C35 AF's Visitronic module compares two side-by-side views like an electronic rangefinder."
      ],
      "sonar": [
          "发出超声波脉冲、计时回波求距离再驱动对焦，暗处也能用，但会被玻璃挡住；同一传感器后来成了机器人测距件。",
          "Times an ultrasonic echo to get distance and set focus, works in the dark but stops at glass; the same transducer became a robotics ranger."
      ],
      "iraf": [
          "机身发射近红外光束，用光电二极管看反射点位置三角测距，不依赖环境光，是傻瓜相机的主流对焦方式。",
          "Projects a near-infrared beam and triangulates the reflected spot with a photodiode, independent of ambient light; the compact-camera workhorse."
      ],
      "cdaf": [
          "边移动镜片边看画面反差，反差最高处即合焦（爬山法）；准但要来回搜索，手机和监控长期依赖它。",
          "Moves the lens while watching image contrast and stops at the peak (hill-climbing); accurate but has to hunt, long the default in phones and CCTV."
      ],
      "motor": [
          "把对焦马达装进镜头：从直流马达到环形超声波、步进 STM、线性马达，越来越快、越来越静，适合视频。",
          "Puts the focus motor in the lens: from DC motors to ring ultrasonic, stepping STM and linear motors, each faster and quieter, suited to video."
      ],
      "ttlpd": [
          "反光镜后分出一束光送到独立 AF 模块，比较两半瞳孔成像的错位，一次算出离焦方向和距离，不用搜索。",
          "Splits light behind the mirror to a separate AF module that compares images from two halves of the pupil, giving direction and amount of defocus at once."
      ],
      "predict": [
          "连续测量运动主体的距离变化，预测快门释放瞬间的位置提前驱动镜头；后来再加入色彩信息跨点追踪。",
          "Measures how a moving subject's distance changes and predicts where it will be at exposure; later added colour to track across points."
      ],
      "cross": [
          "对焦点同时有横向和纵向两条线阵，横线竖线都能检测，提升低反差和任意方向纹理的对焦可靠性。",
          "An AF point with both horizontal and vertical line sensors, so it reads detail in either orientation and focuses more reliably."
      ],
      "face": [
          "在实时画面里找出人脸并把对焦和测光放在脸上，第一次让相机知道“拍的是谁”而不只是“哪里有反差”。",
          "Finds faces in the live image and places focus and exposure on them, the first time the camera knew who rather than just where contrast was."
      ],
      "liquid": [
          "电润湿让油水界面改变曲率来变焦距，没有机械运动件，毫秒级、寿命长，适合读码器和小型模组。",
          "Electrowetting bends an oil-water interface to change focal power with no moving parts; millisecond-fast and long-lived, suited to code readers and small modules."
      ],
      "touch": [
          "在屏幕上点哪里就对焦哪里，把选对焦点从拨轮操作变成直觉触控，并可继续追踪被点中的主体。",
          "Focus wherever you tap on the screen, turning AF-point selection from a dial chore into a touch and often tracking the tapped subject."
      ],
      "pdpix": [
          "在图像传感器上做出半遮挡的相位检测像素，无需反光镜也能像单反那样一次算出离焦量，常与反差对焦混合。",
          "Half-masked phase-detect pixels on the image sensor give SLR-style defocus measurement without a mirror, usually blended with contrast AF."
      ],
      "dpaf": [
          "每个像素拆成左右两个光电二极管，全画面几乎每个像素都能做相位检测，视频对焦平滑不拉风箱。",
          "Each pixel is split into two photodiodes so nearly the whole frame does phase detection, giving smooth, hunt-free video focus."
      ],
      "eye": [
          "在人脸里再定位眼睛并对准眼睛合焦，大光圈人像的焦点不再落到鼻尖或睫毛上；后来可实时追踪。",
          "Locates the eye within the face and focuses on it so wide-aperture portraits land on the eye; later tracked in real time."
      ],
      "tof": [
          "发射激光脉冲、用 SPAD 计飞行时间直接测距，暗光和低反差下也能瞬间给出距离，再由相机微调。",
          "Fires laser pulses and times their flight with SPADs to measure distance directly, instant even in dim, low-contrast scenes, then fine-tuned by the camera."
      ],
      "dfd": [
          "用两张焦点不同的图像比较模糊程度，结合镜头的散焦特性数据，直接推算该往哪边走多远。",
          "Compares blur between two differently focused frames against lens defocus profiles to compute direction and distance in one step."
      ],
      "subj": [
          "用深度学习识别动物、车辆、飞机等主体及其关键部位，自动决定对哪里、并在画面中持续追踪。",
          "Deep-learning models recognise animals, vehicles, aircraft and their key parts, deciding what to focus on and tracking it across the frame."
      ],
      "breath": [
          "机身按镜头的对焦呼吸数据实时微调裁切，让拉焦时视角保持不变，弥补视频里画面忽大忽小。",
          "The body crops in real time from the lens's breathing profile so the field of view stays constant during focus pulls in video."
      ]
  },
  refs: [
      {
          "t": "Konica C35 AF（维基）",
          "u": "https://en.wikipedia.org/wiki/Konica_C35_AF"
      },
      {
          "t": "Polaroid SX-70（维基）",
          "u": "https://en.wikipedia.org/wiki/Polaroid_SX-70"
      },
      {
          "t": "Polaroid 超声波测距开发套件",
          "u": "https://micromint.com/app_notes/ti01_data.htm"
      },
      {
          "t": "Canon AF35M（佳能博物馆）",
          "u": "https://global.canon/en/c-museum/product/film102.html"
      },
      {
          "t": "Sony CCD-V8AF 红外对焦摄像机",
          "u": "https://radiomuseum.org/r/sony_video_camera_recorder_ccd_v8af_e.html"
      },
      {
          "t": "Pentax ME F（维基）",
          "u": "https://en.wikipedia.org/wiki/Pentax_ME_F"
      },
      {
          "t": "Sony EVI-D30 规格",
          "u": "https://www.vision-systems.com/cameras-accessories/article/16735947/ccd-camera-features-pan-tilt-and-zoom"
      },
      {
          "t": "Axis Q1755 发布",
          "u": "https://www.securityinfowatch.com/video-surveillance/press-release/10498569/axis-communications-axis-debuts-hdtv-network-camera"
      },
      {
          "t": "Minolta Maxxum 7000（维基）",
          "u": "https://en.wikipedia.org/wiki/Minolta_Maxxum_7000"
      },
      {
          "t": "Minolta 7000i 预测对焦",
          "u": "https://vintagecameradigest.com/minolta-maxxum-dynax-7000i/"
      },
      {
          "t": "Nikon F4 对焦追踪",
          "u": "https://imaging.nikon.com/history/chronicle/history-f4/index.htm"
      },
      {
          "t": "Canon EOS-1 十字对焦",
          "u": "https://global.canon/en/c-museum/product/film132.html"
      },
      {
          "t": "Nikon D300 3D 追踪评测",
          "u": "https://www.dpreview.com/reviews/nikond300"
      },
      {
          "t": "Canon EF 40mm STM（佳能博物馆）",
          "u": "https://global.canon/en/c-museum/product/ef418.html"
      },
      {
          "t": "Fujifilm XF 18-55mm 线性马达",
          "u": "https://www.cameralabs.com/fujifilm-xf-18-55mm-f2-8-4-r-lm-ois-review/"
      },
      {
          "t": "Sony FE 400mm GM XD 线性马达",
          "u": "https://petapixel.com/2018/06/27/sony-unveils-the-400mm-f-2-8-lens-a-12000-sports-and-wildlife-monster"
      },
      {
          "t": "Varioptic Arctic 320",
          "u": "https://optics.org/article/24590"
      },
      {
          "t": "Cognex DataMan 液体镜头",
          "u": "https://www.automate.org/vision/news/liquid-lens-optics-adds-autofocus-to-dataman-300-reader"
      },
      {
          "t": "Panasonic FX500 触摸对焦",
          "u": "https://www.dpreview.com/articles/7441474943/panasonicfx500"
      },
      {
          "t": "iPhone 3GS 发布",
          "u": "https://www.apple.com/newsroom/2009/06/08Apple-Announces-the-New-iPhone-3GS-The-Fastest-Most-Powerful-iPhone-Yet/"
      },
      {
          "t": "Sony NEX-5R Fast Hybrid AF",
          "u": "https://sony.mediaroom.com/2012-08-29-New-Sony-NEX-5R-Camera-Delivers-Professional-Imaging-Power-and-Wi-Fi-Convenience-in-Lightweight-Stylish-Package"
      },
      {
          "t": "Galaxy S5 相位检测像素",
          "u": "https://www.imaging-resource.com/news/2014/04/04/samsung-galaxy-s5-isocell-sensor-has-worlds-smallest-phase-detection-pixels"
      },
      {
          "t": "Sony Ericsson C902 人脸检测",
          "u": "https://www.gsmarena.com/sony_ericsson_c902-review-223p3.php"
      },
      {
          "t": "Sony Xperia 1 眼部对焦",
          "u": "https://www.engadget.com/2019-02-25-sony-xperia-1-4k-hdr-oled-display.html"
      },
      {
          "t": "iPhone 12 Pro LiDAR",
          "u": "https://optics.org/news/11/10/5"
      },
      {
          "t": "DJI Ronin 4D LiDAR 对焦",
          "u": "https://www.dji.com/media-center/announcements/dji-ronin-4d"
      },
      {
          "t": "Panasonic DFD 技术",
          "u": "https://www.panasonic.com/global/consumer/lumix/20th/history/2014_02.html"
      },
      {
          "t": "Olympus E-M1X 主体识别",
          "u": "https://learnandsupport.getolympus.com/ca-en/learn-center/photography-tips/settings/e-m1x-intelligent-subject-detection-af"
      },
      {
          "t": "Sony α7 IV 呼吸补偿",
          "u": "https://petapixel.com/2021/10/21/sony-launches-the-alpha-7-iv-a-33mp-true-hybrid-full-frame-camera"
      }
  ],
  el: 'aftl', page: 'af-timeline.html',
  step: {n: 3, zh: '第 3 步：对焦', en: 'Step 3: Focus'},
  text: {
    zh: {title: '对焦技术时间线', eyebrow: 'Focus & Autofocus · 1977–2022', h1: '让画面变清楚，谁先自动做到？',
         sub: '被动自动对焦、声呐对焦、红外对焦、对比度对焦、镜头内对焦马达、机身相位对焦、预测追焦、十字对焦点、人脸识别、液体镜头、触控对焦、片上相位对焦、全像素双核、眼部对焦、激光对焦、DFD、主体识别、呼吸补偿……每项对焦技术最先出现在相机、手机、工业还是安防里，又是怎么流到其他行业的。',
         panelCap: '每项对焦技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品，不是专利年份。和镜头 / CMOS / ISP 时间线重合的条目年份一致；只找到间接来源的年份标了「约」。车载摄像头基本是定焦，没有车载条目。'},
    en: {title: 'Focus Technology Timeline', eyebrow: 'Focus & Autofocus · 1977–2022', h1: 'Getting it sharp automatically: who did it first?',
         sub: 'Passive AF, sonar AF, infrared AF, contrast-detect AF, in-lens focus motors, body-integrated phase detection, predictive tracking, cross-type points, face detection, liquid lenses, touch AF, on-sensor PDAF, Dual Pixel AF, Eye AF, laser AF, DFD, subject detection, breathing compensation: did each ship first in cameras, phones, industry or security, and how did it spread?',
         panelCap: 'Which industry shipped each focus technology first.',
         foot: '"First" means first in a commercial product, not the patent year. Items overlapping the lens / CMOS / ISP timelines match their years; years backed only by indirect sources are marked "approx." Automotive cameras are essentially fixed-focus, so there are no automotive rows.'},
  },
};
renderTlPanel('af');
