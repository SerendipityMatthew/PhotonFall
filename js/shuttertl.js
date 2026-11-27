/* 快门技术首发时间线的数据：第 27 步抽屉小图和 shutter-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品。
   全局快门、LED 防闪烁、堆栈式快速读出和 CMOS 时间线一致。资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.shutter = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '工业 / 广播 / 科研', en: 'Industrial / Broadcast / Science'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1890, "cam", "焦平面快门 · Goerz 相机采用 Anschütz 帘幕快门", "Focal-plane shutter · Goerz cameras with Anschütz shutter", 1, "fp"],
    [1891, "cam", "镜间快门 · Bausch & Lomb Iris Diaphragm Shutter", "Leaf shutter · Bausch & Lomb Iris Diaphragm Shutter", 1, "leaf"],
    [1912, "cam", "钟表式镜间快门 · Deckel Compur", "Clockwork leaf shutter · Deckel Compur", 2, "leaf"],
    [1925, "cam", "布帘焦平面快门普及 · Leica I", "Cloth focal-plane shutter goes mainstream · Leica I", 2, "fp"],
    [1932, "cam", "纵走金属帘快门 · Zeiss Ikon Contax I", "Vertical metal focal-plane shutter · Zeiss Ikon Contax I", 1, "vfp"],
    [1937, "cam", "旋转反光镜快门 · Arriflex 35", "Rotating mirror reflex shutter · Arriflex 35", 1, "mirror"],
    [1951, "cam", "镜间快门闪光同步 · Synchro-Compur", "Leaf-shutter flash sync · Synchro-Compur", 2, "leaf"],
    [1960, "cam", "纵走金属叶片快门首达 1/2000 · Konica F", "Vertical metal-blade shutter reaches 1/2000 · Konica F", 2, "vfp"],
    [1963, "cam", "晶体管电子控时快门 · Polaroid Automatic 100", "Transistorized electronically timed shutter · Polaroid Automatic 100", 1, "etimed"],
    [1965, "cam", "电子快门旁轴普及 · Yashica Electro 35", "Electronic shutter rangefinders go mainstream · Yashica Electro 35", 2, "etimed"],
    [1982, "cam", "机械快门 1/4000 · Nikon FM2", "Mechanical shutter at 1/4000 · Nikon FM2", 2, "vfp"],
    [1986, "cam", "焦平面全速闪光同步（FP） · Olympus OM-4T + F280", "Full-speed focal-plane flash sync (FP) · Olympus OM-4T + F280", 1, "hss"],
    [1987, "cam", "摄录机高速电子快门 1/4000 · Sony CCD-V90 Handycam Pro", "Camcorder high-speed electronic shutter 1/4000 · Sony CCD-V90 Handycam Pro", 1, "ccdshut"],
    [1988, "cam", "快门 1/8000 · Nikon F-801", "1/8000 shutter speed · Nikon F-801", 2, "vfp"],
    [1988, "ind", "CCD 电子快门 · Sony BVP-50 广播摄像机", "CCD electronic shutter · Sony BVP-50 broadcast camera", 0, "ccdshut"],
    [1991, "ind", "预触发循环缓存（约） · Kodak 专利 / Ektapro EM 高速摄像机", "Pre-trigger ring buffer (approx.) · Kodak patent / Ektapro EM high-speed camera", 1, "precap"],
    [1996, "ind", "CMOS 卷帘电子快门 · VLSI Vision / Vivitar 彩色 CMOS 摄像头", "CMOS rolling electronic shutter · VLSI Vision / Vivitar color CMOS camera", 1, "cmosrs"],
    [1999, "phone", "手机 CMOS 卷帘快门 · Kyocera VP-210", "CMOS rolling shutter in a phone · Kyocera VP-210", 0, "cmosrs"],
    [2005, "auto", "CMOS 全局快门 · Micron MT9V022 (TrueSNAP)", "Global-shutter CMOS · Micron MT9V022 (TrueSNAP)", 1, "global"],
    [2005, "cam", "CMOS 摄录机 · Sony DCR-PC1000", "CMOS camcorder · Sony DCR-PC1000", 0, "cmosrs"],
    [2005, "cam", "数字电影机保留旋转镜快门 · ARRI D-20", "Digital cinema camera keeps the mirror shutter · ARRI D-20", 2, "mirror"],
    [2007, "cam", "电子前帘快门 · Canon EOS 40D", "Electronic first-curtain shutter · Canon EOS 40D", 1, "efcs"],
    [2007, "cam", "卷帘 CMOS 数字电影机 · RED One", "Rolling-shutter CMOS digital cinema camera · RED One", 2, "cmosrs"],
    [2008, "cam", "半按预录连拍 · Casio EX-F1", "Half-press pre-record burst · Casio EX-F1", 0, "precap"],
    [2009, "phone", "手机机械快门 · Nokia N86 8MP", "Mechanical shutter in a phone · Nokia N86 8MP", 0, "leaf"],
    [2011, "cam", "首款纯电子快门可换镜头相机 1/16000 · Nikon 1 J1", "First pure-electronic-shutter ILC, 1/16000 · Nikon 1 J1", 1, "esilent"],
    [2011, "cam", "无反电子前帘 · Sony NEX-5N / NEX-7 / A77", "Mirrorless EFCS · Sony NEX-5N / NEX-7 / A77", 2, "efcs"],
    [2011, "cam", "可换镜头无机械快门 · Nikon 1 J1", "Interchangeable-lens camera without a mechanical shutter · Nikon 1 J1", 1, "nomech"],
    [2012, "phone", "大底手机机械快门 + ND · Nokia 808 PureView", "Mechanical shutter with ND on large-sensor phone · Nokia 808 PureView", 2, "leaf"],
    [2013, "phone", "堆栈式高速读出 · Sony Xperia Z", "Stacked fast readout · Sony Xperia Z", 1, "stacked"],
    [2013, "ind", "工业全局快门 CMOS · Sony Pregius", "Industrial global-shutter CMOS · Sony Pregius", 0, "global"],
    [2013, "phone", "按快门前开始录 · HTC One Zoe", "Recording starts before the press · HTC One Zoe", 0, "precap"],
    [2014, "cam", "频闪检测、峰值时刻曝光 · Canon EOS 7D Mark II", "Flicker detection, fire at light peak · Canon EOS 7D Mark II", 1, "flicker"],
    [2014, "cam", "固件 3.00 加入电子快门 1/32000 · Fujifilm X-T1", "Firmware 3.00 adds 1/32000 electronic shutter · Fujifilm X-T1", 2, "esilent"],
    [2015, "cam", "堆栈防畸变快门 1/32000 · Sony RX100 IV", "Stacked anti-distortion shutter 1/32000 · Sony RX100 IV", 0, "stacked"],
    [2015, "phone", "按快门前后 1.5 秒 · iPhone 6s Live Photos", "1.5 s before and after the press · iPhone 6s Live Photos", 2, "precap"],
    [2016, "cam", "数码中画幅镜间快门全速同步 · Hasselblad X1D", "Leaf-shutter digital medium format with full flash sync · Hasselblad X1D", 2, "leaf"],
    [2016, "cam", "Pro Capture 预拍 · Olympus E-M1 Mark II", "Pro Capture pre-burst · Olympus E-M1 Mark II", 2, "precap"],
    [2017, "auto", "LED 频闪抑制 LFM · Sony IMX390", "LED flicker mitigation (LFM) · Sony IMX390", 1, "lfm"],
    [2017, "cam", "全画幅堆栈无黑屏连拍 · Sony α9", "Full-frame stacked blackout-free burst · Sony α9", 2, "stacked"],
    [2018, "cam", "关机闭合快门护传感器 · Canon EOS R", "Shutter closes at power-off to shield sensor · Canon EOS R", 1, "shutclose"],
    [2018, "auto", "车载堆栈式传感器 · Sony IMX490", "Automotive stacked sensor · Sony IMX490", 0, "stacked"],
    [2018, "phone", "独立 flicker 传感器 · ST VD6281 首批手机", "Dedicated flicker sensor · first phones with ST VD6281", 0, "flicker"],
    [2019, "cam", "全画幅无机械快门 · Sigma fp", "Full frame without a mechanical shutter · Sigma fp", 2, "nomech"],
    [2020, "cam", "电影机全局快门 · RED Komodo 6K", "Global shutter in cinema camera · RED Komodo 6K", 0, "global"],
    [2020, "ind", "工业相机 LFM · LUCID Triton (IMX490)", "LFM in industrial camera · LUCID Triton (IMX490)", 0, "lfm"],
    [2020, "ind", "背照全局快门 · Sony Pregius S", "Back-illuminated global shutter · Sony Pregius S", 2, "global"],
    [2020, "cam", "固件加入关机闭帘 · Sony α9 II（固件 2.00）", "Firmware adds close-shutter-at-power-off · Sony α9 II (firmware 2.00)", 2, "shutclose"],
    [2021, "cam", "首台无机械快门全画幅旗舰 · Nikon Z9", "First full-frame flagship without a mechanical shutter · Nikon Z9", 2, "nomech"],
    [2023, "cam", "全画幅全局快门、闪光同步 1/80000 · Sony α9 III", "Full-frame global shutter, flash sync to 1/80000 · Sony α9 III", 2, "global"],
    [2023, "cam", "无机械快门下放 · Nikon Z8", "No-mechanical-shutter design trickles down · Nikon Z8", 2, "nomech"],
    [2025, "phone", "高采样 HDR 频闪扫描 · Honor Magic8 Pro", "High-rate HDR flicker scanning · Honor Magic8 Pro", 2, "flicker"],
  ],
  desc: {
      "fp": [
          "快门帘幕紧贴胶片/传感器前移动，用一道缝扫过画面，实现高速且与镜头无关的曝光。",
          "Curtains just in front of the film or sensor sweep a slit across the frame, giving fast exposures independent of the lens."
      ],
      "leaf": [
          "叶片装在镜头中间、由中心向外开合，整幅同时曝光，任何速度都能闪光同步。",
          "Blades inside the lens open from the center so the whole frame is exposed at once, allowing flash sync at any speed."
      ],
      "mirror": [
          "电影机里旋转的反光镜叶片兼作快门，开角决定曝光时间，闭合时把光反射进取景器。",
          "In cine cameras a spinning mirrored blade is the shutter: its open angle sets exposure and it reflects light to the viewfinder when closed."
      ],
      "vfp": [
          "金属叶片沿短边纵向行走，行程短、速度快，把最高快门和闪光同步速度大幅提高。",
          "Metal blades travelling along the short side shorten the run, raising top shutter speed and flash sync speed."
      ],
      "etimed": [
          "用电路和电容计时代替机械齿轮，由测光结果直接决定快门时间，实现自动曝光。",
          "An RC timing circuit replaces gear trains, letting metered light directly set the exposure time for auto exposure."
      ],
      "hss": [
          "闪光灯在快门缝扫过全程中高频连续发光，突破同步速度，让高速快门也能补光。",
          "The flash pulses continuously while the slit crosses the frame, enabling flash above the normal sync speed."
      ],
      "ccdshut": [
          "CCD 先把电荷倒掉、只在设定的短时间内积累，无需机械部件就能实现高速快门。",
          "The CCD dumps charge and integrates only for a set short time, giving fast shutter speeds with no moving parts."
      ],
      "cmosrs": [
          "CMOS 逐行复位、逐行读出，每行曝光时刻错开，省掉机械快门但带来果冻效应。",
          "CMOS resets and reads row by row, so each row is exposed at a different time: no mechanical shutter, but jello skew."
      ],
      "efcs": [
          "由传感器逐行复位代替机械前帘开始曝光，只留后帘结束曝光，减少震动和噪音。",
          "Row-by-row sensor reset starts the exposure in place of the front curtain, with the rear curtain ending it, cutting shock and noise."
      ],
      "esilent": [
          "可换镜头相机完全用传感器控制曝光起止，静音、无震动、速度可达数万分之一秒。",
          "Interchangeable-lens cameras control exposure start and end entirely on the sensor: silent, vibration-free and up to tens of thousandths of a second."
      ],
      "stacked": [
          "像素层与电路层（甚至 DRAM）堆叠，读出速度大增，缩短卷帘扫描时间、减小畸变。",
          "Stacking the pixel layer on logic (and even DRAM) speeds readout, shortening the rolling scan and its distortion."
      ],
      "global": [
          "所有像素同时开始和结束曝光，彻底消除卷帘畸变，适合高速运动与闪光同步。",
          "All pixels start and stop exposure together, removing rolling-shutter skew for fast motion and flash sync."
      ],
      "lfm": [
          "在一帧内拉长或分段曝光，避免把 PWM 调光的 LED 灯拍成熄灭或闪烁。",
          "Extended or split exposure within a frame so PWM-dimmed LEDs are not captured as off or flickering."
      ],
      "flicker": [
          "检测灯光的 100/120 Hz 频闪，把曝光时刻对准亮度峰值或调整曝光，避免明暗条纹和偏色。",
          "Detects 100/120 Hz lamp flicker and times or adjusts exposure to its peak, avoiding banding and color shifts."
      ],
      "precap": [
          "按下快门前就持续写入循环缓存，触发时保留之前的画面，抓住反应不及的瞬间。",
          "Frames stream into a ring buffer before the trigger, so moments before the press are kept."
      ],
      "shutclose": [
          "关机或换镜头时让机械快门闭合，挡住灰尘和强光，保护外露的无反传感器。",
          "The mechanical shutter closes at power-off or lens change, shielding a mirrorless sensor from dust and sunlight."
      ],
      "nomech": [
          "传感器读出足够快后干脆取消机械快门，没有快门寿命和震动问题，全靠电子快门。",
          "Once readout is fast enough the mechanical shutter is dropped entirely, removing wear and vibration."
      ]
  },
  refs: [
      {
          "t": "Anschütz 焦平面快门与 Goerz",
          "u": "https://www.xs4all.nl/~lommen9/goerz/index.html"
      },
      {
          "t": "Compur 快门（Deckel）",
          "u": "https://en.wikipedia.org/wiki/Friedrich_Deckel"
      },
      {
          "t": "Arriflex 35 旋转镜快门",
          "u": "https://en.wikipedia.org/wiki/Arriflex_35"
      },
      {
          "t": "Konica F 纵走金属快门",
          "u": "https://en.wikipedia.org/wiki/Konica_F"
      },
      {
          "t": "Nikon F-801 首个 1/8000",
          "u": "https://en.wikipedia.org/wiki/Nikon_F-801"
      },
      {
          "t": "Polaroid Automatic 100 电子快门",
          "u": "https://camerapedia.fandom.com/wiki/Polaroid_Land_Model_100"
      },
      {
          "t": "Olympus OM-4 与 F280 全速同步",
          "u": "https://en.wikipedia.com/wiki/Olympus_OM-4"
      },
      {
          "t": "Nokia N86 机械快门",
          "u": "https://www.wikipedia.com/wiki/N86_8MP"
      },
      {
          "t": "Nokia 808 PureView",
          "u": "https://Www.wikipedia.org/wiki/808_PureView"
      },
      {
          "t": "1988 电子快门与高清电视",
          "u": "https://siliconchip.com.au/Issue/1988/September/From+the+electronic+shutter+to+high-definition+TV"
      },
      {
          "t": "Kyocera VP-210 首部拍照手机",
          "u": "https://collection.sciencemuseumgroup.org.uk/objects/co523555/kyocera-visualphone-vp210-mobile-video-phone-1999"
      },
      {
          "t": "Sony HDR-HC1 与 DCR-PC1000",
          "u": "https://en.wikipedia.org/wiki/Sony_HDR-HC1"
      },
      {
          "t": "EOS 40D 电子前帘白皮书",
          "u": "https://content.abt.com/documents/27983/EOS_40D_WhitePaper.pdf"
      },
      {
          "t": "Nikon 1 J1 电子快门",
          "u": "https://wikipedia.com/wiki/Nikon_J1"
      },
      {
          "t": "X-T1 固件 3.00 电子快门",
          "u": "https://petapixel.com/2014/12/18/fujifilm-firmware-updates-add-big-new-features-x-t1-x-e2-x-e1-x-pro1"
      },
      {
          "t": "RX100 IV 防畸变快门",
          "u": "https://www.sony-asia.com/microsite/discover-rx/technology-article1.html"
      },
      {
          "t": "Sony α9 III 全局快门",
          "u": "https://en.wikipedia.org/wiki/Sony_%CE%B19_III"
      },
      {
          "t": "EOS 7D Mark II 防频闪",
          "u": "https://www.the-digital-picture.com/News/News-Post.aspx?News=13866"
      },
      {
          "t": "ams 手机 flicker 传感器",
          "u": "https://ams-osram.com/news/press-releases/ams-high-sensitivity-optical-sensor-eliminates-flicker-artifacts-to-deliver-vibrant-and-distortion-free-smartphone-camera-images-and-videos"
      },
      {
          "t": "Honor Magic8 Pro 频闪扫描",
          "u": "https://www.notebookcheck.net/Honor-Magic8-Pro-With-integrated-flicker-scanner-from-Osram.1204111.0.html"
      },
      {
          "t": "Casio EX-F1 预录连拍",
          "u": "https://www.dpreview.com/articles/6924593847/casiof1"
      },
      {
          "t": "Kodak 高速摄像机预触发",
          "u": "https://www.engr.colostate.edu/~dga/high_speed_video/camera/"
      }
  ],
  el: 'shuttertl', page: 'shutter-timeline.html', histSrc: 'js/hist-shutter.js',
  step: {n: 27, zh: '第 27 步：机械快门与同步速度', en: 'Step 27: Mechanical shutter & sync speed'},
  text: {
    zh: {title: '快门技术时间线', eyebrow: 'Shutters · 1890–2025', h1: '光什么时候进来，谁先管住？',
         sub: '焦平面快门、镜间快门、旋转反光镜快门、纵走金属快门、电子控制快门、全速闪光同步、CCD 电子快门、CMOS 卷帘快门、电子前帘、全电子静音快门、堆栈式快速读出、全局快门、LED 防闪烁、防频闪拍摄、预拍、关机闭合快门、取消机械快门……每项快门技术最先出现在相机、手机、安防车载还是工业广播里，又是怎么流到其他行业的。',
         panelCap: '每项快门技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品，不是专利年份。全局快门、LED 防闪烁、堆栈式读出和 CMOS 时间线一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'Shutter Technology Timeline', eyebrow: 'Shutters · 1890–2025', h1: 'Controlling when light gets in: who did it first?',
         sub: 'Focal-plane and leaf shutters, rotating mirror shutters, vertical metal shutters, electronic timing, full-speed flash sync, CCD electronic shutters, CMOS rolling shutters, electronic first curtain, silent shutters, stacked fast readout, global shutter, LED flicker mitigation, anti-flicker shooting, pre-capture, shutter closing at power-off, no mechanical shutter: did each ship first in cameras, phones, security/automotive or industry/broadcast, and how did it spread?',
         panelCap: 'Which industry shipped each shutter technology first.',
         foot: '"First" means first in a commercial product, not the patent year. Global shutter, LED flicker mitigation and stacked readout match the CMOS timeline; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('shutter');
