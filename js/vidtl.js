/* 视频编码技术首发时间线的数据：第 33 步抽屉小图和 video-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一款能录制 / 编码或播放它的商用产品，不是标准发布日期。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.vid = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '广播 / 电视 / 电脑', en: 'Broadcast / TV / PC'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1991, "ind", "Motion JPEG · Avid Media Composer（JPEG 压缩板）", "Motion JPEG · Avid Media Composer (JPEG board)", 1, "mjpeg"],
    [1993, "ind", "MPEG-1 · Video CD", "MPEG-1 · Video CD", 1, "mpeg1"],
    [1994, "ind", "MPEG-2 · DirecTV 卫星数字电视", "MPEG-2 · DirecTV satellite digital TV", 1, "mpeg2"],
    [1995, "cam", "DV · Sony DCR-VX1000 / Panasonic PV-DV1000", "DV · Sony DCR-VX1000 / Panasonic PV-DV1000", 1, "dv"],
    [1996, "ind", "MPEG-2 · DVD 播放机 Toshiba SD-3000（日本首发）", "MPEG-2 · DVD player Toshiba SD-3000 (Japan launch)", 2, "mpeg2"],
    [1997, "cam", "MPEG-1 · Hitachi MP-EG1", "MPEG-1 · Hitachi MP-EG1", 0, "mpeg1"],
    [1998, "ind", "DV · Sony VAIO i.LINK + DVgate", "DV · Sony VAIO i.LINK + DVgate", 0, "dv"],
    [1999, "auto", "Motion JPEG · Axis 2100 网络摄像机", "Motion JPEG · Axis 2100 network camera", 0, "mjpeg"],
    [1999, "ind", "DV · iMac DV + iMovie（FireWire 剪辑）", "DV · iMac DV + iMovie (FireWire editing)", 2, "dv"],
    [1999, "cam", "MPEG-4 · Sharp VN-EZ1 Internet ViewCam", "MPEG-4 · Sharp VN-EZ1 Internet ViewCam", 1, "mpeg4"],
    [2000, "cam", "MPEG-2 · Hitachi DZ-MV100 DVD 摄像机", "MPEG-2 · Hitachi DZ-MV100 DVD camcorder", 0, "mpeg2"],
    [2001, "phone", "MPEG-4 · NTT DoCoMo FOMA P2101V 视频电话", "MPEG-4 · NTT DoCoMo FOMA P2101V videophone", 0, "mpeg4"],
    [2003, "cam", "MPEG-4 VGA/30fps · Sanyo Xacti DMX-C1", "MPEG-4 VGA/30fps · Sanyo Xacti DMX-C1", 2, "mpeg4"],
    [2003, "cam", "MPEG-2 HDV · JVC GR-HD1", "MPEG-2 HDV · JVC GR-HD1", 2, "mpeg2"],
    [2004, "auto", "MPEG-4 · AXIS 210 双码流（MPEG-4 + MJPEG）", "MPEG-4 · AXIS 210 dual stream (MPEG-4 + MJPEG)", 0, "mpeg4"],
    [2004, "ind", "H.264 · Sony PSP（UMD 影片）", "H.264 · Sony PSP (UMD movies)", 1, "h264"],
    [2005, "ind", "H.264 · iPod 第五代视频播放", "H.264 · fifth-generation iPod video", 2, "h264"],
    [2006, "cam", "H.264 AVCHD · Sony HDR-UX1 / Panasonic HDC-SD1", "H.264 AVCHD · Sony HDR-UX1 / Panasonic HDC-SD1", 0, "h264"],
    [2006, "ind", "H.264 · Blu-ray 播放机", "H.264 · Blu-ray players", 2, "h264"],
    [2006, "cam", "RAW 视频 · Dalsa Origin", "RAW video · Dalsa Origin", 1, "raw"],
    [2006, "cam", "4K 录制 · Dalsa Origin", "4K recording · Dalsa Origin", 1, "uhd4k"],
    [2007, "ind", "ProRes 422 · Final Cut Studio 2", "ProRes 422 · Final Cut Studio 2", 1, "prores"],
    [2007, "cam", "压缩 RAW 普及 · RED ONE（REDCODE RAW）", "Compressed RAW goes mainstream · RED ONE (REDCODE RAW)", 2, "raw"],
    [2007, "cam", "4K 普及 · RED ONE", "4K goes mainstream · RED ONE", 2, "uhd4k"],
    [2008, "auto", "H.264 · 首批 H.264 网络摄像机", "H.264 · first H.264 IP cameras", 0, "h264"],
    [2009, "phone", "H.264 · iPhone 3GS 录像", "H.264 · iPhone 3GS recording", 0, "h264"],
    [2009, "cam", "ProRes · AJA Ki Pro 外录机", "ProRes · AJA Ki Pro recorder", 0, "prores"],
    [2010, "cam", "ProRes · ARRI Alexa 机内录制", "ProRes · ARRI Alexa in-camera recording", 2, "prores"],
    [2011, "ind", "4K 电视 · Toshiba Regza 55X3", "4K TV · Toshiba Regza 55X3", 0, "uhd4k"],
    [2013, "ind", "H.265 · LG LA9700 4K 电视解码", "H.265 · LG LA9700 4K TV decoder", 1, "hevc"],
    [2013, "ind", "VP9 · Chrome 浏览器解码", "VP9 · Chrome browser decode", 1, "vp9"],
    [2013, "cam", "XAVC · Sony F55 / F5", "XAVC · Sony F55 / F5", 1, "xavc"],
    [2013, "phone", "4K 录制 · Acer Liquid S2 / Galaxy Note 3", "4K recording · Acer Liquid S2 / Galaxy Note 3", 0, "uhd4k"],
    [2013, "phone", "H.265 解码 · LG G2（软件）", "H.265 decode · LG G2 (software)", 0, "hevc"],
    [2013, "phone", "VP9 · Android 4.4 软件解码", "VP9 · Android 4.4 software decode", 0, "vp9"],
    [2013, "cam", "XAVC S · Sony FDR-AX1", "XAVC S · Sony FDR-AX1", 2, "xavc"],
    [2014, "auto", "H.265 · ZNV 7200 网络摄像机", "H.265 · ZNV 7200 IP camera", 0, "hevc"],
    [2014, "phone", "H.265 · iPhone 6 FaceTime 编码", "H.265 · iPhone 6 FaceTime encoding", 2, "hevc"],
    [2014, "cam", "H.265 · Samsung NX1 4K 录制", "H.265 · Samsung NX1 4K recording", 0, "hevc"],
    [2014, "ind", "4K 流媒体 · Netflix 4K（HEVC）", "4K streaming · Netflix 4K (HEVC)", 2, "uhd4k"],
    [2014, "auto", "4K 监控 · Axis P1428-E", "4K surveillance · Axis P1428-E", 0, "uhd4k"],
    [2015, "auto", "智能编码 · Axis Zipstream", "Smart codec · Axis Zipstream", 1, "smart"],
    [2015, "ind", "Dolby Vision · Vizio Reference 电视", "Dolby Vision · Vizio Reference TV", 1, "dovi"],
    [2015, "phone", "VP9 硬解 · Galaxy S6 / Exynos 7420", "VP9 hardware decode · Galaxy S6 / Exynos 7420", 2, "vp9"],
    [2016, "cam", "8K 录制 · RED Weapon 8K（Helium）", "8K recording · RED Weapon 8K (Helium)", 1, "uhd8k"],
    [2016, "ind", "8K 试验广播 · NHK BS17", "8K test broadcast · NHK BS17", 0, "uhd8k"],
    [2016, "ind", "HLG · SKY Perfect JSAT 4K HDR 广播", "HLG · SKY Perfect JSAT 4K HDR broadcast", 1, "hlg"],
    [2017, "cam", "HLG · Sony PXW-FS5 / Z150 固件", "HLG · Sony PXW-FS5 / Z150 firmware", 0, "hlg"],
    [2017, "phone", "Dolby Vision · LG G6 播放", "Dolby Vision · LG G6 playback", 0, "dovi"],
    [2017, "cam", "H.264 10-bit 4:2:2 · Panasonic GH5", "H.264 10-bit 4:2:2 · Panasonic GH5", 2, "h264"],
    [2017, "phone", "H.265 · iPhone 8 / iPhone X 默认录像", "H.265 · iPhone 8 / iPhone X default recording", 2, "hevc"],
    [2018, "ind", "AV1 · Chrome 70 / YouTube", "AV1 · Chrome 70 / YouTube", 1, "av1"],
    [2018, "ind", "8K 广播 · NHK BS8K", "8K broadcast · NHK BS8K", 2, "uhd8k"],
    [2018, "ind", "HLG · NHK BS4K / 8K 广播", "HLG · NHK BS4K / 8K broadcast", 2, "hlg"],
    [2018, "cam", "ProRes RAW · Atomos 录机 / DJI Zenmuse X7", "ProRes RAW · Atomos recorders / DJI Zenmuse X7", 2, "raw"],
    [2018, "phone", "HLG · Sony Xperia XZ2 4K HDR 录像", "HLG · Sony Xperia XZ2 4K HDR recording", 0, "hlg"],
    [2019, "phone", "AV1 · MediaTek Dimensity 1000 硬解手机", "AV1 · MediaTek Dimensity 1000 hardware-decode phones", 0, "av1"],
    [2019, "phone", "8K 录制 · Nubia Red Magic 3（15fps）", "8K recording · Nubia Red Magic 3 (15 fps)", 0, "uhd8k"],
    [2020, "phone", "8K 24fps · Samsung Galaxy S20", "8K 24 fps · Samsung Galaxy S20", 2, "uhd8k"],
    [2020, "cam", "8K 录制 · Canon EOS R5", "8K recording · Canon EOS R5", 2, "uhd8k"],
    [2020, "phone", "Dolby Vision 录制 · iPhone 12", "Dolby Vision recording · iPhone 12", 2, "dovi"],
    [2021, "phone", "ProRes · iPhone 13 Pro", "ProRes · iPhone 13 Pro", 0, "prores"],
    [2021, "ind", "H.266 · MediaTek Pentonic 2000 电视芯片", "H.266 · MediaTek Pentonic 2000 TV chip", 1, "vvc"],
    [2024, "ind", "H.266 · Intel Lunar Lake 首款 PC GPU 硬解", "H.266 · Intel Lunar Lake, first PC GPU decode", 2, "vvc"],
    [2024, "auto", "AV1 · Axis ARTPEC-9 / Q1728 摄像机", "AV1 · Axis ARTPEC-9 / Q1728 camera", 0, "av1"],
    [2025, "phone", "ProRes RAW · iPhone 17 Pro", "ProRes RAW · iPhone 17 Pro", 0, "raw"],
    [2025, "phone", "AV1 · Google Pixel 10 相机首次直录", "AV1 · Google Pixel 10, first camera AV1 recording", 2, "av1"],
    [2026, "phone", "APV · Samsung Galaxy S26 Ultra", "APV · Samsung Galaxy S26 Ultra", 1, "apv"],
    [2026, "phone", "H.266 · MediaTek Dimensity 9600 Pro 手机", "H.266 · MediaTek Dimensity 9600 Pro phones", 0, "vvc"],
  ],
  desc: {
      "mjpeg": [
          "每帧独立做 JPEG 压缩的视频，编码简单、随机剪辑方便，但码率高，是早期剪辑和网络摄像机的通用格式。",
          "Video where every frame is a separate JPEG; simple and easy to edit, but bitrate-hungry, used by early NLEs and IP cameras."
      ],
      "mpeg1": [
          "第一代 MPEG 帧间压缩标准，约 1.5 Mbps 装下 VHS 画质，让一张 CD 能放 74 分钟视频。",
          "The first MPEG inter-frame codec, squeezing VHS-like video into about 1.5 Mbps so a CD could hold 74 minutes."
      ],
      "mpeg2": [
          "支持隔行和更高码率的 MPEG 标准，撑起 DVD、数字电视广播，后来又被 HDV 摄像机用来录高清。",
          "An MPEG standard with interlace and higher bitrates that powered DVD and digital TV, later reused by HDV camcorders for HD."
      ],
      "dv": [
          "帧内 DCT 压缩、25 Mbps 的数字磁带格式，让家用摄像机第一次直接输出可无损拷贝的数字视频。",
          "A 25 Mbps intra-frame DCT tape format that gave consumer camcorders lossless-copy digital video for the first time."
      ],
      "mpeg4": [
          "MPEG-4 Part 2 / H.263 一族的低码率编码，配合 3GP 容器，让手机能在极低带宽下录制和传送视频。",
          "MPEG-4 Part 2 and H.263-class low-bitrate coding with the 3GP container, letting phones record and send video over tiny bandwidth."
      ],
      "h264": [
          "H.264/AVC 在同画质下比 MPEG-2 省约一半码率，成为高清录制、流媒体、监控和手机的通用编码。",
          "H.264/AVC halves MPEG-2 bitrate at equal quality and became the universal codec for HD recording, streaming, surveillance and phones."
      ],
      "hevc": [
          "H.265/HEVC 再比 H.264 省约一半码率，是 4K 电视、监控存储和手机录像节省空间的主力。",
          "H.265/HEVC cuts H.264 bitrate roughly in half again, the workhorse for 4K TV, surveillance storage and phone recording."
      ],
      "smart": [
          "监控专用的智能编码：按画面动静动态调 GOP 和码率，静止场景大幅省存储，仍兼容标准 H.264/H.265 解码。",
          "Surveillance smart codecs that adapt GOP and bitrate to scene motion, slashing storage while staying standard H.264/H.265 decodable."
      ],
      "vp9": [
          "Google 的免专利费编码，效率接近 HEVC，主要用于 YouTube 和浏览器流媒体。",
          "Google's royalty-free codec with HEVC-like efficiency, used mainly for YouTube and browser streaming."
      ],
      "av1": [
          "AOMedia 的免专利费编码，比 VP9 / HEVC 再省约三成码率，先用于流媒体，后进入手机和监控编码。",
          "AOMedia's royalty-free codec, about 30% more efficient than VP9/HEVC, first for streaming, then phone and surveillance encoding."
      ],
      "vvc": [
          "H.266/VVC 是 HEVC 的继任者，同画质再省约一半码率，面向 8K、360 度视频，硬件支持刚起步。",
          "H.266/VVC succeeds HEVC with roughly half the bitrate again, aimed at 8K and 360-degree video; hardware support is just starting."
      ],
      "prores": [
          "Apple 的帧内中间编码，画质高、解码轻，便于剪辑调色，从剪辑软件走进电影机和手机。",
          "Apple's intra-frame mezzanine codec, high quality and light to decode for editing, spreading from NLEs to cinema cameras and phones."
      ],
      "raw": [
          "直接压缩保存传感器原始拜耳数据的视频，后期可改白平衡、ISO，换来更大调色空间。",
          "Video that stores compressed raw Bayer sensor data, so white balance and ISO can be changed in post for maximum grading latitude."
      ],
      "xavc": [
          "Sony 基于 H.264 高 Profile 的录制格式，支持 4K、10-bit；XAVC S 是消费版。",
          "Sony's recording format built on high H.264 profiles with 4K and 10-bit 4:2:2; XAVC S is the consumer variant."
      ],
      "uhd4k": [
          "约 3840 或 4096 像素宽的视频录制和传输，像素量是 1080p 的四倍，带动更高效编码的需求。",
          "Recording and delivering video about 3840 or 4096 pixels wide, four times 1080p, driving demand for more efficient codecs."
      ],
      "uhd8k": [
          "7680×4320 级别视频，像素是 4K 的四倍，对传感器读出速度、编码器和存储都是极限考验。",
          "7680x4320-class video, four times 4K, pushing sensor readout, encoders and storage to their limits."
      ],
      "dovi": [
          "Dolby 的动态元数据 HDR 格式，逐场景告诉显示器如何映射亮度，从电视播放走到手机拍摄。",
          "Dolby's HDR format with dynamic per-scene metadata guiding display tone mapping, moving from TV playback to phone capture."
      ],
      "hlg": [
          "BBC 与 NHK 提出的混合对数伽马 HDR，无需元数据、兼容 SDR 显示，适合直播与机内直出。",
          "Hybrid Log-Gamma HDR from BBC and NHK: metadata-free and SDR-compatible, suited to live broadcast and in-camera delivery."
      ],
      "apv": [
          "Samsung 与 Qualcomm 推动的专业中间编码，对标 ProRes，让手机录出便于后期的高码率素材。",
          "Advanced Professional Video, a ProRes-style mezzanine codec pushed by Samsung and Qualcomm for high-bitrate phone post-production."
      ]
  },
  refs: [
      {
          "t": "Axis 2100 发布（Linux Today）",
          "u": "https://www.linuxtoday.com/infrastructure/prnewswire-new-axis-2100-network-camera-delivers-low-cost-jpeg-images-over-the-internet"
      },
      {
          "t": "Avid Media Composer",
          "u": "https://en.wikipedia.org/wiki/Media_Composer"
      },
      {
          "t": "Sony MVC-FD81 MPEG 短片",
          "u": "https://www.digitalkameramuseum.de/en/cameras/item/sony-mvc-fd81"
      },
      {
          "t": "Hitachi DZ-MV100 DVD 摄像机",
          "u": "https://www.hitachi.com/New/cnews/E/2000/000608B.html"
      },
      {
          "t": "Nokia 3650 录像（Hantro）",
          "u": "https://www.design-reuse.com/news/3888/hantro-brings-video-recording-nokia-3650-phone.html"
      },
      {
          "t": "FOMA 视频电话（ITU）",
          "u": "https://itu.int/itudoc/itu-t/workshop/rio/s4p1.pdf"
      },
      {
          "t": "Sanyo Xacti C1",
          "u": "https://imaging-resource.com/NEWS/1065112899.html"
      },
      {
          "t": "IP 视频里程碑（H.264 2008）",
          "u": "https://www.securityinfowatch.com/video-surveillance/cameras/ip-network-surveillance-cameras/article/10795950/the-major-milestones-of-ip-video"
      },
      {
          "t": "LG 首批 HEVC 4K 电视",
          "u": "https://stg.digitaltveurope.com/2013/07/12/lg-steps-up-4k-efforts"
      },
      {
          "t": "ZNV 首款 H.265 网络摄像机",
          "u": "https://www.prnewswire.com/news-releases/znv-launches-the-worlds-first-h265-high-definition-ip-camera-275106341.html"
      },
      {
          "t": "iPhone 6 FaceTime H.265",
          "u": "https://www.phonearena.com/news/New-Apple-iPhone-models-use-half-the-bandwidth-for-FaceTime-thanks-to-H.265-codec_id60665"
      },
      {
          "t": "Samsung NX1 H.265",
          "u": "https://www.redsharknews.com/business/item/2036-samsungs-nx1-first-4k-camera-to-record-in-h265"
      },
      {
          "t": "iPhone 8 HEVC 录像",
          "u": "https://www.phonearena.com/news/Heres-how-much-space-Apples-new-HEVC-video-format-saves-on-an-iPhone-8_id98212"
      },
      {
          "t": "Axis Zipstream 发布",
          "u": "https://businesswire.com/news/home/20150319005336/en/Axis-Announces-Zipstream-Technology-Reducing-Storage-Requirements-by-50-Percent-or-More-in-Video-Surveillance-Applications"
      },
      {
          "t": "Hikvision Smart H.264/H.265",
          "u": "https://ipvm.com/reports/2914"
      },
      {
          "t": "VP9 进入 Chromium",
          "u": "https://thenextweb.com/news/google-finishes-defining-its-vp9-video-codec-adds-it-to-chromium-ahead-of-chrome-and-youtube-rollout"
      },
      {
          "t": "Dimensity 1000 AV1 硬解",
          "u": "https://www.xda-developers.com/mediatek-dimensity-1000-is-the-first-smartphone-soc-to-support-av1-hardware-decoding/"
      },
      {
          "t": "Axis ARTPEC-9 AV1",
          "u": "https://newsroom.axis.com/article/soc-av1-video-encoding-artpec"
      },
      {
          "t": "Pixel 10 AV1 录像",
          "u": "https://www.androidauthority.com/pixel-10-video-recording-av1-vp9-3586429"
      },
      {
          "t": "Lunar Lake VVC 硬解",
          "u": "https://www.neowin.net/news/just-like-with-av1-intel-beats-amd-and-nvidia-to-support-h266-vvc-decoding/"
      },
      {
          "t": "Dimensity 9600 Pro H.266",
          "u": "https://www.mediatek.com/products/smartphones/mediatek-dimensity-9600-pro"
      },
      {
          "t": "ProRes RAW 发布（Apple）",
          "u": "https://www.apple.com/uk/newsroom/2018/04/final-cut-pro-x-update-introduces-prores-raw-and-advanced-closed-captioning/"
      },
      {
          "t": "iPhone 17 Pro ProRes RAW",
          "u": "https://www.macrumors.com/how-to/iphone-17-pro-prores-raw-format/"
      },
      {
          "t": "XAVC",
          "u": "https://en.wikipedia.org/wiki/XAVC"
      },
      {
          "t": "Acer Liquid S2 4K",
          "u": "https://www.gsmarena.com/acer_launches_first_4krecording_smartphone__liquid_s2-news-6697.php"
      },
      {
          "t": "Axis 首款 4K 摄像机",
          "u": "https://securitytoday.com/Articles/2014/04/03/Axis-Intros.aspx?p=1"
      },
      {
          "t": "RED 8K Helium 出货",
          "u": "https://www.newsshooter.com/2016/10/12/red-starts-shipping-the-red-epic-w-and-the-weapon-8k-s35/"
      },
      {
          "t": "Galaxy S20 8K",
          "u": "https://www.androidcentral.com/how-shoot-and-edit-8k-video-galaxy-s20"
      },
      {
          "t": "Vizio Reference Dolby Vision",
          "u": "https://www.vizio.com/en/press/2015/oct/vizio-announces-pricing-and-availability-for-highly-anticipated-reference-series-collection-featuring-dolby-vision-high-dynamic-range-support"
      },
      {
          "t": "Sony FS5 HLG 固件",
          "u": "https://nofilmschool.com/2017/03/sony-hdr-firmware-update-pxw-fs5"
      },
      {
          "t": "Galaxy S26 Ultra APV",
          "u": "https://news.samsung.com/uk/for-creators-by-creators-samsungs-pro-grade-apv-codec-supported-on-galaxy-s26-ultra"
      }
  ],
  el: 'vidtl', page: 'video-timeline.html', histSrc: 'js/hist-vid.js',
  step: {n: 33, zh: '第 33 步：视频编码', en: 'Step 33: Video coding'},
  text: {
    zh: {title: '视频编码技术时间线', eyebrow: 'Video Coding · 1991–2026', h1: '视频怎么压缩，谁先用上？',
         sub: 'Motion JPEG、MPEG-1/2、DV、MPEG-4、H.264、H.265、VP9、AV1、H.266、ProRes、RAW 视频、XAVC、4K / 8K、Dolby Vision、HLG、APV……每项视频编码技术最先出现在相机、手机、安防车载还是广播电视电脑里，又是怎么流到其他行业的。',
         panelCap: '每项视频编码技术最先在哪个行业量产。',
         foot: '「首发」指第一款能录制、编码或播放它的商用产品，不是标准发布的日期。只找到间接来源的年份标了「约」。'},
    en: {title: 'Video Coding Timeline', eyebrow: 'Video Coding · 1991–2026', h1: 'Who shipped each video codec first?',
         sub: 'Motion JPEG, MPEG-1/2, DV, MPEG-4, H.264, H.265, VP9, AV1, H.266, ProRes, RAW video, XAVC, 4K / 8K, Dolby Vision, HLG, APV: did each video technology ship first in cameras, phones, security/automotive or broadcast/TV/PC, and how did it spread?',
         panelCap: 'Which industry shipped each video-coding technology first.',
         foot: '"First" means the first commercial product that records, encodes or plays it, not the date the standard was published. Years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('vid');
