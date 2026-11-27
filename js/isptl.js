/* ISP / 计算摄影技术首发时间线的数据：第 26 步抽屉小图和 isp-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入量产 / 商用产品。
   资料由子代理联网核对后整理（来源见 refs）；宽动态 1997、电子防抖 1990 只找到间接来源，标了「约」；镜头校正 2007 是单反首发，卡片机可能更早。 */
TIMELINES.isp = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '工业 / 其他', en: 'Industrial / Other'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1990, "cam", "电子防抖 EIS · Panasonic NV-S1 摄像机", "Electronic image stabilization · Panasonic NV-S1 camcorder", 1, "eis"],
    [1997, "auto", "宽动态 WDR · Panasonic Super Dynamic 监控摄像机", "Wide dynamic range · Panasonic Super Dynamic CCTV", 1, "wdr"],
    [2002, "cam", "10-bit 对数输出 FilmStream · Thomson Viper 电影机", "10-bit log output FilmStream · Thomson Viper cinema camera", 1, "log"],
    [2005, "cam", "人脸检测对焦 · Nikon Coolpix 7900 / 5900", "Face-priority AF · Nikon Coolpix 7900 / 5900", 1, "face"],
    [2005, "cam", "原生 DNG RAW · Leica DMR 数码后背 / Hasselblad H2D", "Native DNG RAW · Leica DMR digital back / Hasselblad H2D", 1, "raw"],
    [2005, "auto", "128 倍宽动态 · Panasonic Super Dynamic III", "128x dynamic range · Panasonic Super Dynamic III", 2, "wdr"],
    [2005, "cam", "卡片机 DNG · Ricoh GR Digital", "Compact-camera DNG · Ricoh GR Digital", 2, "raw"],
    [2006, "auto", "驾驶员面部监测 · Lexus GS 450h", "Driver face monitoring · Lexus GS 450h", 0, "face"],
    [2007, "cam", "机内横向色差校正（单反） · Nikon D3 / D300", "In-camera lateral CA correction (DSLR) · Nikon D3 / D300", 1, "lens"],
    [2007, "auto", "专用视觉处理芯片 · Mobileye EyeQ1 量产车", "Dedicated vision processor · Mobileye EyeQ1 production cars", 1, "ai"],
    [2008, "cam", "S-Log 对数伽马 · Sony F35 电影机", "S-Log gamma · Sony F35 cinema camera", 2, "log"],
    [2008, "phone", "人脸检测 · Sony Ericsson C902 Cyber-shot", "Face detection · Sony Ericsson C902 Cyber-shot", 0, "face"],
    [2008, "cam", "镜头畸变数字校正成为系统设计 · Panasonic Lumix G1（M4/3）", "Digital distortion correction by design · Panasonic Lumix G1 (M4/3)", 2, "lens"],
    [2009, "cam", "多帧叠加降噪 · Sony DSC-HX1 手持夜景", "Multi-frame noise reduction · Sony DSC-HX1 Handheld Twilight", 1, "mfnr"],
    [2009, "cam", "机内 HDR 合成 · Pentax K-7", "In-camera HDR merge · Pentax K-7", 0, "wdr"],
    [2009, "cam", "手持自动 HDR · Sony α550", "Handheld Auto HDR · Sony α550", 2, "wdr"],
    [2010, "phone", "HDR 拍照 · iPhone 4（iOS 4.1）", "HDR photo · iPhone 4 (iOS 4.1)", 0, "wdr"],
    [2010, "auto", "数字透雾 · PENTAX PAIR 监控镜头", "Digital defog · PENTAX PAIR surveillance lenses", 1, "defog"],
    [2011, "phone", "视频电子防抖 · iPhone 4S", "Video EIS · iPhone 4S", 0, "eis"],
    [2011, "cam", "S-Log 下放准专业机 · Sony PMW-F3 固件", "S-Log for prosumer · Sony PMW-F3 firmware", 2, "log"],
    [2012, "cam", "人脸与眼部优先对焦 · Olympus OM-D E-M5", "Face & Eye Priority AF · Olympus OM-D E-M5", 1, "eyeaf"],
    [2013, "cam", "命名为 Eye AF 的眼部对焦 · Sony α7 / α7R", "Eye AF by name · Sony α7 / α7R", 2, "eyeaf"],
    [2013, "phone", "HDR+ 连拍合成 · Nexus 5", "HDR+ burst merge · Nexus 5", 0, "mfnr"],
    [2013, "phone", "手机 DNG RAW · Nokia Lumia 1520", "Phone DNG RAW · Nokia Lumia 1520", 0, "raw"],
    [2013, "phone", "双 ISP 并行处理 · Snapdragon 800", "Dual ISP · Snapdragon 800", 1, "multiisp"],
    [2014, "phone", "双摄景深虚化 · HTC One M8", "Dual-camera depth bokeh · HTC One M8", 1, "bokeh"],
    [2014, "auto", "透雾快球 · VIVOTEK SD8364E", "Defog speed dome · VIVOTEK SD8364E", 2, "defog"],
    [2014, "phone", "多帧合成 50MP 超清 · Oppo Find 7", "Multi-frame 50MP Super Zoom · Oppo Find 7", 1, "superres"],
    [2015, "auto", "电子防抖 · Axis Q1941-E 热成像网络摄像机", "EIS · Axis Q1941-E thermal network camera", 0, "eis"],
    [2016, "phone", "14-bit 双 ISP Spectra · Snapdragon 820", "14-bit dual ISP Spectra · Snapdragon 820", 2, "multiisp"],
    [2016, "phone", "人像模式 · iPhone 7 Plus", "Portrait mode · iPhone 7 Plus", 2, "bokeh"],
    [2017, "phone", "手机 Log 视频 Cine Log · LG V30", "Phone log video Cine Log · LG V30", 0, "log"],
    [2017, "auto", "LED 防闪烁 LFM + HDR · Sony IMX390 车载传感器", "LED flicker mitigation + HDR · Sony IMX390 automotive sensor", 1, "lfm"],
    [2017, "phone", "HEIF / HEVC 照片 · iPhone（iOS 11）", "HEIF / HEVC photos · iPhone (iOS 11)", 1, "heif"],
    [2017, "auto", "深度学习摄像机 · Hikvision DeepinView", "Deep-learning camera · Hikvision DeepinView", 2, "ai"],
    [2017, "phone", "NPU 场景识别 · Huawei Mate 10（Kirin 970）", "NPU scene recognition · Huawei Mate 10 (Kirin 970)", 0, "ai"],
    [2018, "phone", "手持超级夜景 · Huawei P20 Pro", "Handheld night mode · Huawei P20 Pro", 1, "night"],
    [2018, "phone", "手抖亚像素超分变焦 · Google Pixel 3 Super Res Zoom", "Hand-tremor sub-pixel super-res zoom · Google Pixel 3", 2, "superres"],
    [2018, "cam", "HyperSmooth 防抖 · GoPro HERO7 Black", "HyperSmooth EIS · GoPro HERO7 Black", 2, "eis"],
    [2018, "auto", "深度学习人脸识别摄像机 · Dahua 网络摄像机", "Deep-learning face recognition · Dahua network camera", 2, "face"],
    [2018, "phone", "Night Sight 夜视 · Google Pixel", "Night Sight · Google Pixel", 2, "night"],
    [2019, "cam", "实时眼部对焦与动物眼 · Sony α6400", "Real-time Eye AF and animal eye · Sony α6400", 2, "eyeaf"],
    [2019, "phone", "Deep Fusion 神经网络合成 · iPhone 11", "Deep Fusion neural merge · iPhone 11", 2, "ai"],
    [2020, "ind", "片上 AI 传感器 · Sony IMX500 / IMX501", "On-sensor AI · Sony IMX500 / IMX501", 1, "onsensor"],
    [2020, "phone", "Dolby Vision HDR 视频录制 · iPhone 12", "Dolby Vision HDR video recording · iPhone 12", 1, "dv"],
    [2020, "ind", "HDR + LFM 机器视觉相机 · LUCID Triton（IMX490）", "HDR + LFM machine-vision camera · LUCID Triton (IMX490)", 0, "lfm"],
    [2020, "cam", "深度学习对焦 · Canon EOS-1D X Mark III", "Deep-learning AF · Canon EOS-1D X Mark III", 0, "ai"],
    [2020, "phone", "计算 RAW ProRAW · iPhone 12 Pro", "Computational RAW, ProRAW · iPhone 12 Pro", 2, "raw"],
    [2020, "cam", "10-bit HEIF HDR PQ · Canon EOS-1D X Mark III", "10-bit HEIF HDR PQ · Canon EOS-1D X Mark III", 0, "heif"],
    [2020, "cam", "10-bit HEIF · Sony α7S III", "10-bit HEIF · Sony α7S III", 2, "heif"],
    [2021, "phone", "Staggered HDR 交错曝光 · Snapdragon 888 机型", "Staggered HDR · Snapdragon 888 phones", 2, "wdr"],
    [2021, "cam", "车辆识别对焦 · Canon EOS R3", "Vehicle detection AF · Canon EOS R3", 2, "eyeaf"],
    [2021, "phone", "视频实时虚化电影效果模式 · iPhone 13", "Real-time video bokeh, Cinematic mode · iPhone 13", 2, "bokeh"],
    [2021, "phone", "三 ISP 三摄同时处理 · Snapdragon 888（Spectra 580）", "Triple ISP, three cameras at once · Snapdragon 888 (Spectra 580)", 2, "multiisp"],
    [2022, "cam", "独立 AI 处理单元 · Sony α7R V", "Dedicated AI processing unit · Sony α7R V", 2, "ai"],
    [2023, "phone", "Apple Log ProRes · iPhone 15 Pro", "Apple Log ProRes · iPhone 15 Pro", 0, "log"],
    [2024, "ind", "片上 AI 相机模组 · Raspberry Pi AI Camera", "On-sensor AI camera module · Raspberry Pi AI Camera", 2, "onsensor"],
  ],
  desc: {
      "eis": [
          "电子防抖：用运动检测或陀螺仪估计抖动，裁切并平移画面来抵消手抖，不需要移动镜片或传感器。",
          "Electronic stabilization estimates shake from motion or a gyro and crops and shifts the frame to cancel it, with no moving optics."
      ],
      "wdr": [
          "宽动态 / HDR：用多次曝光或双增益把亮部和暗部合进一张图，解决逆光下要么过曝要么死黑的问题。",
          "Wide dynamic range / HDR merges several exposures or gains into one image so both highlights and shadows survive backlight."
      ],
      "lfm": [
          "LED 防闪烁：让曝光覆盖 LED 的 PWM 周期，避免红绿灯、车灯在画面里忽明忽暗或整帧消失。",
          "LED flicker mitigation keeps exposure across the LED PWM cycle so traffic lights and signs do not blink or vanish on camera."
      ],
      "face": [
          "人脸检测：ISP 在取景时实时找出人脸，用来对焦、测光和美颜，后来扩展到驾驶员监测与安防识别。",
          "Face detection finds faces in real time to drive focus, exposure and retouching, later used for driver monitoring and security."
      ],
      "eyeaf": [
          "眼部 / 主体识别对焦：识别眼睛、动物、车辆等主体并持续追焦，让浅景深和高速运动也能对准焦点。",
          "Eye and subject detection AF recognizes eyes, animals or vehicles and keeps tracking focus on them."
      ],
      "lens": [
          "镜头像差数字校正：按镜头数据在机内修正畸变、色差和暗角，让镜头可以做得更小更便宜。",
          "Digital lens correction fixes distortion, chromatic aberration and vignetting in camera from lens data, allowing smaller lenses."
      ],
      "mfnr": [
          "多帧降噪：连拍多张对齐后平均，随机噪声被压低，暗光下不用高 ISO 单张硬拍。",
          "Multi-frame noise reduction aligns and averages a burst so random noise drops without a single high-ISO shot."
      ],
      "night": [
          "手持夜景：几秒内连拍多张并靠算法对齐合成，手持就能拍出原本需要三脚架的夜景。",
          "Handheld night mode captures and aligns frames over seconds so night scenes work without a tripod."
      ],
      "bokeh": [
          "计算景深虚化：用双摄视差或深度网络估计距离，再人为模糊背景，小传感器也能拍出浅景深。",
          "Computational bokeh estimates depth from stereo or neural nets and blurs the background to fake shallow depth of field."
      ],
      "superres": [
          "多帧超分：利用手抖带来的亚像素位移合并多帧，数码变焦也能恢复真实细节。",
          "Multi-frame super-resolution uses sub-pixel hand-shake offsets across a burst to recover real detail when zooming."
      ],
      "ai": [
          "视觉 / AI 处理器：相机里加专用的视觉或神经网络芯片，实时识别场景和目标，再反过来指导成像。",
          "Vision and AI processors add dedicated chips that recognize scenes and objects in real time and steer the imaging pipeline."
      ],
      "onsensor": [
          "片上 AI：把神经网络推理放进传感器的逻辑层，只输出识别结果，省掉外部处理器、带宽和隐私风险。",
          "On-sensor AI runs inference in the sensor logic layer and outputs results only, saving processors, bandwidth and privacy."
      ],
      "raw": [
          "RAW / DNG：保存未经去马赛克和色调处理的传感器原始数据，后期能重新调白平衡和曝光。",
          "RAW and DNG keep undemosaiced sensor data so white balance and exposure can be redone in post."
      ],
      "heif": [
          "HEIF：用 HEVC 编码静态照片，同画质下文件约为 JPEG 一半，并支持 10-bit 和 HDR。",
          "HEIF stores stills with HEVC coding, about half the size of JPEG at equal quality, with 10-bit and HDR support."
      ],
      "log": [
          "Log 曲线：用对数伽马把宽动态范围压进视频码流，画面灰平但保留调色空间。",
          "Log profiles squeeze wide dynamic range into video with a logarithmic curve, flat-looking but gradeable."
      ],
      "dv": [
          "Dolby Vision 录制：拍摄时就生成 HDR 视频和逐帧动态元数据，在不同屏幕上都能正确映射亮度。",
          "Dolby Vision capture records HDR video with per-frame dynamic metadata so it tone-maps correctly on any screen."
      ],
      "defog": [
          "数字透雾：ISP 估计雾霾的散射分量并恢复对比度，让雾天、霾天的远处目标重新可辨。",
          "Digital defog estimates haze scattering and restores contrast so distant objects in fog become readable."
      ],
      "multiisp": [
          "多 ISP 并行：SoC 内放两到三条 ISP 流水线，多颗摄像头可同时处理，实现无缝变焦和多摄合成。",
          "Multiple ISPs in one SoC process several cameras at once, enabling seamless zoom and multi-camera fusion."
      ]
  },
  refs: [
      {
          "t": "IEEE 里程碑：带防抖的摄像机",
          "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
      },
      {
          "t": "i-PRO 宽动态技术",
          "u": "https://i-pro.com/products_and_solutions/en/node/2486"
      },
      {
          "t": "Panasonic SDIII 新闻稿",
          "u": "https://www.securityinfowatch.com/video-surveillance/press-release/10609424/i-pro-americas-inc-panasonic-introduces-new-sdiii-intelligent-technology"
      },
      {
          "t": "Pentax K-7 机内 HDR",
          "u": "https://www.adorama.com/alc/the-pentax-k-7-the-era-of-in-camera-high-dynamic-range-imaging-has-arrived"
      },
      {
          "t": "Sony α550 自动 HDR",
          "u": "https://www.dpreview.com/?p=316586"
      },
      {
          "t": "Sony IMX390 LED 防闪烁",
          "u": "https://sony.mediaroom.com/2017-04-12-Sony-Commercializes-the-Industrys-First-1-Automotive-2MP-High-Sensitivity-CMOS-Image-Sensor-with-LED-Flicker-mitigation-and-HDR"
      },
      {
          "t": "LUCID Triton IMX490",
          "u": "https://www.automate.org/vision/news/new-5-4-mp-triton-camera-with-sony-imx490-cmos-image-sensor-delivers-simultaneous-hdr-imaging-and-led-flicker-mitigation"
      },
      {
          "t": "Nikon 人脸优先对焦",
          "u": "https://www.dpreview.com/articles/1009928338/nikonfaceaf"
      },
      {
          "t": "驾驶员监测系统",
          "u": "https://en.wikipedia.org/wiki/Driver_monitoring_system"
      },
      {
          "t": "Sony Ericsson C902 人脸检测",
          "u": "https://www.photographyblog.com/news/sony_ericsson_c902_cyber_shot_and_c702_cyber_shot"
      },
      {
          "t": "Canon EOS R3 车辆识别",
          "u": "https://www.canon.co.uk/press-centre/press-releases/2021/06/af-tracking-for-racing-cars-and-motorbikes-more-details-of-canons-eos-r3-revealed-a-high-speed-high-performance-mirrorless/"
      },
      {
          "t": "Sony α7R V AI 处理单元",
          "u": "https://www.sony.eu/presscentre/sonys-new-alpha-7rv-camera-offers-next-generation-autofocus-technologies-using-an-advanced-ai-processing-unit"
      },
      {
          "t": "机内畸变校正",
          "u": "https://www.dpreview.com/articles/5653763779/a-distorted-view-in-camera-distortion-correction"
      },
      {
          "t": "Sony DSC-HX1 手持夜景",
          "u": "https://www.dpreview.com/?p=316839"
      },
      {
          "t": "Google HDR+",
          "u": "https://research.google/blog/hdr-low-light-and-high-dynamic-range-photography-in-the-google-camera-app/"
      },
      {
          "t": "Huawei P20 夜景模式",
          "u": "https://androidauthority.com/huawei-p20-camera-night-mode-859705"
      },
      {
          "t": "Google Night Sight",
          "u": "https://research.google/blog/night-sight-seeing-in-the-dark-on-pixel-phones/"
      },
      {
          "t": "HTC One M8 双摄",
          "u": "https://www.anandtech.com/show/7893/the-htc-one-m8-review/2"
      },
      {
          "t": "Pixel 3 Super Res Zoom",
          "u": "https://research.google/blog/see-better-and-further-with-super-res-zoom-on-the-pixel-3/"
      },
      {
          "t": "iPhone 13 电影效果模式",
          "u": "https://techcrunch.com/2021/09/23/how-apple-built-the-iphone-13-pros-cinematic-mode/"
      },
      {
          "t": "Mobileye 历史",
          "u": "https://www.mobileye.com/about/"
      },
      {
          "t": "Huawei Mate 10 NPU",
          "u": "https://www.huawei.com/en/news/2017/10/huawei-mate10-mate10pro"
      },
      {
          "t": "Sony IMX500 发布",
          "u": "https://sony.mediaroom.com/2020-05-14-Sony-to-Release-Worlds-First-Intelligent-Vision-Sensors-with-AI-Processing-Functionality"
      },
      {
          "t": "Raspberry Pi AI Camera",
          "u": "https://www.raspberrypi.com/products/ai-camera/"
      },
      {
          "t": "DNG 格式",
          "u": "https://en.wikipedia.org/wiki/Digital_Negative"
      },
      {
          "t": "Nokia Lumia DNG",
          "u": "https://blogs.windows.com/devices/2013/10/29/another-nokia-first-digital-negatives-raw-dng-lumia/"
      },
      {
          "t": "Canon EOS-1D X Mark III",
          "u": "https://www.usa.canon.com/newsroom/2020/20200106-1dxmkiii"
      },
      {
          "t": "Sony F35 S-Log",
          "u": "https://web.archive.org/web/20200205101454/https://www.studiodaily.com/2008/02/sony-expands-line-of-high-end-digital-cinematography-systems/"
      },
      {
          "t": "iPhone 15 Pro Log",
          "u": "https://support.apple.com/109041"
      },
      {
          "t": "iPhone 12 Dolby Vision",
          "u": "https://www.macrumors.com/2020/10/14/iphone-12-dolby-vision-hdr-video-recording/"
      },
      {
          "t": "Surveon 透雾摄像机",
          "u": "https://www.securityworldmarket.com/uk/Newsarchive/surveon-hd-cameras-with-advanced-image-functionality"
      },
      {
          "t": "Snapdragon 820 Spectra ISP",
          "u": "https://www.qualcomm.com/news/onq/2015/10/snapdragon-820-sneak-peek-advanced-imaging-experiences-qualcomm-spectra-camera"
      },
      {
          "t": "Snapdragon 888 相机",
          "u": "https://www.qualcomm.com/news/onq/2020/12/triple-down-future-photography-qualcomm-snapdragon-888"
      },
      {
          "t": "Axis 防抖白皮书",
          "u": "https://whitepapers.axis.com/download/wp_image_stabilization_t10195391_2501.pdf"
      },
      {
          "t": "GoPro HERO7 HyperSmooth",
          "u": "https://techcrunch.com/2018/09/20/review-with-the-hero7-black-gopro-looks-towards-stability/"
      }
  ],
  el: 'isptl', page: 'isp-timeline.html', histSrc: 'js/hist-isp.js',
  step: {n: 26, zh: '第 26 步：ISP 把 RAW 变成照片', en: 'Step 26: ISP turns RAW into a photo'},
  text: {
    zh: {title: 'ISP 技术时间线', eyebrow: 'Image Signal Processing · 1990–2024', h1: '照片里的算法，谁先用上？',
         sub: '宽动态、防抖、人脸 / 主体识别、多帧降噪、夜景、人像虚化、AI 处理器、HEIF、Log……每项 ISP 和计算摄影技术最先出现在相机、手机、安防车载还是工业里，又是怎么流到其他行业的。',
         panelCap: '每项 ISP / 计算摄影技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入量产或商用产品，不是第一次发表论文或专利。只找到间接来源的年份标了「约」。'},
    en: {title: 'ISP Technology Timeline', eyebrow: 'Image Signal Processing · 1990–2024', h1: 'Who shipped each imaging algorithm first?',
         sub: 'Wide dynamic range, stabilization, face and subject detection, multi-frame noise reduction, night mode, portrait bokeh, AI processors, HEIF, log: did each ISP and computational-photography technology ship first in cameras, phones, security/automotive or industry, and how did it spread?',
         panelCap: 'Which industry shipped each ISP / computational-photography technology first.',
         foot: '"First" means first in a shipping or commercial product, not first paper or patent. Years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('isp');
