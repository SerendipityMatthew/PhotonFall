/* 白平衡技术首发时间线的数据：第 26 步抽屉小图和 wb-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品。
   自动白平衡、原彩显示、RAW、肤色还原和人眼与色彩 / ISP 时间线一致；独立色温传感器首发是 2003 年 Nikon D2H（人眼与色彩时间线已同步）。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」，「单反首发」表示更早的摄像机可能已有类似功能。 */
TIMELINES.wb = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '广播 / 显示器 / 软件', en: 'Broadcast / Displays / Software'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1973, "ind", "一键白平衡（对白卡测定） · RCA TK-45A 广播摄像机", "One-push white balance (white card) · RCA TK-45A broadcast camera", 1, "onepush"],
    [1982, "cam", "自动白平衡 AWB（约） · JVC KY-1900", "Automatic white balance (AWB, approx.) · JVC KY-1900", 1, "awb"],
    [1986, "cam", "外置 AWB 色温传感器 · Panasonic NV-M5 摄像机（约）", "External AWB color sensor · Panasonic NV-M5 camcorder (approx.)", 1, "ctsensor"],
    [1990, "auto", "彩色 CCTV 自动白平衡（约） · 三星（今 Hanwha）彩色 CCTV", "AWB in colour CCTV (approx.) · Samsung (now Hanwha) colour CCTV camera", 0, "awb"],
    [1995, "cam", "白平衡预设（白炽灯/荧光灯/晴天/阴天/阴影） · Nikon E2 / Fujix DS-505", "WB presets (incandescent / fluorescent / sun / cloud / shade) · Nikon E2 / Fujix DS-505", 1, "presets"],
    [1996, "ind", "显示器色温预设 9300K/6500K/5000K（约） · IBM P70 等 CRT 显示器", "Monitor colour-temperature presets 9300K/6500K/5000K (approx.) · IBM P70 and other CRT monitors", 1, "dispct"],
    [1996, "ind", "摄像头自动白平衡（Auto Hue） · Connectix Color QuickCam", "Webcam auto white balance (Auto Hue) · Connectix Color QuickCam", 0, "awb"],
    [1998, "cam", "白平衡预设（日光/钨丝灯/荧光灯/闪光灯） · Kodak DCS 520", "White-balance presets (daylight/tungsten/fluorescent/flash) · Kodak DCS 520", 2, "presets"],
    [1998, "cam", "灰卡自定义白平衡 · Kodak DCS 520", "Gray-card custom white balance · Kodak DCS 520", 1, "custom"],
    [1998, "cam", "RAW 后期改白平衡 · Kodak DCS 520 + TWAIN 驱动", "Change white balance after shooting via RAW · Kodak DCS 520 + TWAIN driver", 1, "raw"],
    [1999, "cam", "白卡自定义白平衡 Preset WB · Nikon D1", "White-card custom WB (Preset WB) · Nikon D1", 2, "custom"],
    [1999, "cam", "NEF + Nikon Capture · Nikon D1", "NEF + Nikon Capture · Nikon D1", 2, "raw"],
    [2000, "phone", "自动白平衡 AWB（约） · Sharp J-SH04", "Automatic white balance (approx.) · Sharp J-SH04", 0, "awb"],
    [2001, "cam", "开尔文色温直设（2800–10000K） · Canon EOS-1D", "Direct Kelvin setting (2800–10000K) · Canon EOS-1D", 1, "kelvin"],
    [2001, "cam", "白平衡包围 · Nikon Coolpix 995", "White-balance bracketing · Nikon Coolpix 995", 1, "wbbkt"],
    [2002, "phone", "白平衡预设（4 档） · Sony Ericsson P800", "White-balance presets (4 settings) · Sony Ericsson P800", 0, "presets"],
    [2003, "cam", "外置环境光色温传感器 · Nikon D2H", "External ambient colour sensor · Nikon D2H", 2, "ctsensor"],
    [2003, "ind", "RAW 转换器色温/色调滑块 · Adobe Camera Raw", "RAW converter temperature/tint sliders · Adobe Camera Raw", 0, "raw"],
    [2003, "ind", "开尔文色温滑块 · Adobe Camera Raw", "Kelvin temperature slider · Adobe Camera Raw", 0, "kelvin"],
    [2004, "cam", "二维白平衡偏移（蓝-琥珀/品红-绿） · Canon EOS-1D Mark II", "2-D white-balance shift (blue-amber / magenta-green) · Canon EOS-1D Mark II", 1, "wbshift"],
    [2004, "cam", "白平衡偏移下放中端机 · Canon EOS 20D", "WB shift reaches mid-range · Canon EOS 20D", 2, "wbshift"],
    [2004, "cam", "环境光传感器 + 1005 像素 RGB 测光混合 AWB · Nikon D2X", "Hybrid AWB with ambient sensor + 1005-pixel RGB meter · Nikon D2X", 2, "ctsensor"],
    [2005, "cam", "DNG 机内直出 · Hasselblad H2D / Ricoh GR Digital", "In-camera DNG · Hasselblad H2D / Ricoh GR Digital", 2, "raw"],
    [2006, "cam", "水下白平衡预设 · Canon PowerShot G7 / A640", "Underwater white-balance preset · Canon PowerShot G7 / A640", 1, "underwater"],
    [2010, "cam", "AWB 保留暖色灯光 · Nikon D7000", "AWB keep warm lighting colors · Nikon D7000", 1, "awbpri"],
    [2012, "auto", "RCCB 车载传感器（约） · Aptina AR0132AT", "RCCB automotive sensor (approx.) · Aptina AR0132AT", 1, "rccb"],
    [2013, "phone", "双色温闪光灯 True Tone Flash · iPhone 5s", "Dual-colour True Tone flash · iPhone 5s", 1, "ttflash"],
    [2013, "phone", "屏幕色温滑块 · Nokia Lumia 925 / 1020 颜色配置", "Display colour-temperature slider · Nokia Lumia 925 / 1020 colour profile", 0, "dispct"],
    [2013, "phone", "手机 DNG RAW · Nokia Lumia 1520", "Phone DNG RAW · Nokia Lumia 1520", 0, "raw"],
    [2014, "phone", "灰卡白平衡 API · iOS 8 AVFoundation（第三方 App）", "Gray-world WB API · iOS 8 AVFoundation (third-party apps)", 0, "custom"],
    [2014, "phone", "色温 / 色调白平衡 API · iOS 8 AVFoundation（第三方 App）", "Temperature / tint WB API · iOS 8 AVFoundation (third-party apps)", 0, "kelvin"],
    [2015, "cam", "AWB 白优先 / 氛围优先 · Canon EOS 5DS", "AWB white priority / ambience priority · Canon EOS 5DS", 2, "awbpri"],
    [2015, "phone", "原生相机开尔文白平衡（2400–7400K） · LG G4", "Native-camera Kelvin WB (2400–7400K) · LG G4", 2, "kelvin"],
    [2016, "ind", "True Tone 环境自适应显示 · iPad Pro 9.7", "True Tone ambient-adaptive display · iPad Pro 9.7", 1, "truetone"],
    [2016, "phone", "四 LED True Tone 闪光灯 · iPhone 7", "Quad-LED True Tone flash · iPhone 7", 2, "ttflash"],
    [2016, "cam", "AWB 优先设置 · Sony α6500", "Priority Set in AWB · Sony α6500", 2, "awbpri"],
    [2017, "auto", "RCCB 滤色阵列色彩重建 · Tesla Autopilot HW2.5", "RCCB color reconstruction · Tesla Autopilot HW2.5", 2, "rccb"],
    [2017, "phone", "True Tone 环境自适应显示 · iPhone 8 / X", "True Tone ambient-adaptive display · iPhone 8 / X", 0, "truetone"],
    [2017, "cam", "按水深自动色彩校正（DCC） · Paralenz Dive Camera", "Depth-based auto color correction (DCC) · Paralenz Dive Camera", 2, "underwater"],
    [2018, "phone", "色温传感器 · Huawei P20 Pro", "Color-temperature sensor · Huawei P20 Pro", 0, "ctsensor"],
    [2018, "phone", "学习式 AWB · Google Pixel 3 Night Sight", "Learning-based AWB · Google Pixel 3 Night Sight", 2, "awb"],
    [2018, "ind", "True Tone 进入笔记本 · MacBook Pro", "True Tone reaches laptops · MacBook Pro", 2, "truetone"],
    [2020, "phone", "原生相机灰卡自定义白平衡 · Sony Xperia 1 II Photography Pro", "Native-camera gray-card custom WB · Sony Xperia 1 II Photography Pro", 2, "custom"],
    [2020, "phone", "白平衡偏移网格 · Sony Xperia 1 II Photography Pro", "White-balance shift grid · Sony Xperia 1 II Photography Pro", 0, "wbshift"],
    [2020, "phone", "Apple ProRAW · iPhone 12 Pro", "Apple ProRAW · iPhone 12 Pro", 2, "raw"],
    [2020, "phone", "8 通道多光谱色温传感器 · Huawei P40 Pro", "8-channel multispectral colour sensor · Huawei P40 Pro", 2, "ctsensor"],
    [2021, "phone", "肤色感知 AWB Real Tone · Google Pixel 6", "Skin-tone-aware AWB (Real Tone) · Google Pixel 6", 1, "skin"],
    [2022, "ind", "电视按环境光调色调 EyeComfort · Samsung 2022 电视", "TV tone follows ambient light (EyeComfort) · Samsung 2022 TVs", 2, "truetone"],
    [2024, "cam", "深度学习辅助 AWB · Canon EOS R1 / R5 Mark II", "Deep-learning-assisted AWB · Canon EOS R1 / R5 Mark II", 2, "awb"],
  ],
  desc: {
      "onepush": [
          "把镜头对准白卡按一下，电路把 R、B 增益调到白卡呈中性，然后锁定这组增益。",
          "Point at a white card and press a button; the circuit sets R and B gains so the card reads neutral, then holds them."
      ],
      "awb": [
          "相机根据画面统计（如灰世界、亮白点）估计光源颜色，自动调整 R/G/B 增益把它抵消。",
          "The camera estimates the illuminant from scene statistics (grey-world, bright whites) and sets R/G/B gains to cancel it."
      ],
      "dispct": [
          "显示器提供 9300K、6500K 等白点预设，用户手动选择与环境或标准（D65）匹配的白色。",
          "Displays offer white-point presets such as 9300K and 6500K so users can pick a white matching the room or the D65 standard."
      ],
      "presets": [
          "为日光、钨丝灯、荧光灯等典型光源预存增益，用户按现场光源选一档即可校正色偏。",
          "Stored gains for typical sources (daylight, tungsten, fluorescent) let users pick the one matching the scene's light."
      ],
      "custom": [
          "拍一张白卡或灰卡，相机把这块区域的平均颜色当作中性，反推出当前光源的增益并保存。",
          "Shoot a white or grey card; the camera treats its average colour as neutral and stores the gains that make it so."
      ],
      "raw": [
          "RAW 保存未做白平衡的传感器数据，白平衡只作为元数据，后期可无损重新选择色温。",
          "RAW keeps sensor data before white balance, storing WB only as metadata, so it can be re-chosen losslessly later."
      ],
      "kelvin": [
          "用户直接输入光源的开尔文色温，相机按黑体轨迹换算成 R/B 增益来抵消色偏。",
          "Users type the illuminant's Kelvin value and the camera converts it along the blackbody locus into R/B gains."
      ],
      "wbbkt": [
          "按一次快门生成偏红、正常、偏蓝几张不同白平衡的图，供事后挑出最中性的一张。",
          "One shot yields several frames at warmer, normal and cooler white balance, so the most neutral can be chosen later."
      ],
      "wbshift": [
          "在蓝-琥珀和品红-绿两个轴上微调白平衡，能纠正荧光灯等色温轴之外的绿/品红偏色。",
          "Fine-tunes WB on blue-amber and magenta-green axes, fixing green/magenta casts that lie off the colour-temperature line."
      ],
      "ctsensor": [
          "独立的环境光颜色传感器直接测量光源光谱或色温，不被画面中大片有色物体误导。",
          "A separate ambient colour sensor measures the light source directly, so large coloured objects in frame do not fool AWB."
      ],
      "underwater": [
          "水会先吸收红光，相机用专门的水下预设或按深度加大红色增益，把蓝绿色偏拉回中性。",
          "Water absorbs red first, so a dedicated underwater preset or depth-based gain boosts red to pull the blue-green cast back."
      ],
      "ttflash": [
          "冷白与琥珀两种 LED 按预闪测得的环境色温混光，让闪光与环境光同色，避免主体和背景色偏不一。",
          "Cool and amber LEDs are mixed to match the ambient colour measured in a pre-flash, so flash and room light share one white."
      ],
      "awbpri": [
          "自动白平衡提供两种取向：白优先把钨丝灯下也校正为纯白，氛围优先刻意保留一些暖色。",
          "AWB offers two intents: white priority neutralises even tungsten fully, ambience priority keeps some warmth on purpose."
      ],
      "truetone": [
          "环境光颜色传感器测出房间光色，屏幕随之调整白点，使白色看起来像纸一样与环境一致。",
          "An ambient colour sensor reads the room light and the screen shifts its white point so white looks like paper in that light."
      ],
      "rccb": [
          "RCCB 用透明像素替代绿色以提高夜间感度，ISP 需从 R、C、B 重建绿色并另做白平衡与色彩校正。",
          "RCCB swaps green for clear pixels for night sensitivity; the ISP must rebuild green and apply its own WB and colour correction."
      ],
      "skin": [
          "检测人脸并用多样肤色数据训练的 AWB 模型，避免光源校正把深色或浅色皮肤推向错误色调。",
          "Face detection plus AWB models trained on diverse skin tones keep illuminant correction from shifting skin to the wrong hue."
      ]
  },
  refs: [
      {
          "t": "JVC KY-1900 回顾",
          "u": "https://www.hdwarrior.co.uk/2012/01/22/jvc-ky-1900-back-to-the-future-1984/"
      },
      {
          "t": "便携彩色摄像机简史（RCA TK-45）",
          "u": "https://eyesofageneration.com/a-brief-history-of-portable-color-camerasyou-would-think-rca-lead-the-way-in-t/"
      },
      {
          "t": "ENG 历史第三部分",
          "u": "https://tvtechnology.com/features/the-history-of-eng-part-3-camera-advances-push-eng-into-the-modern-era"
      },
      {
          "t": "Hanwha 彩色 CCTV 历史",
          "u": "https://www.hanwhavision.com/ar/?p=60256"
      },
      {
          "t": "Connectix Color QuickCam 上市",
          "u": "https://tidbits.com/1996/04/22/connectix-ships-color-quickcam/"
      },
      {
          "t": "Nikon D1 评测",
          "u": "https://www.dpreview.com/articles/nikond1"
      },
      {
          "t": "Nikon D1 白平衡",
          "u": "https://imaging-resource.com/PRODS/D1/D1A6.HTM"
      },
      {
          "t": "Canon EOS-1D 色温设定",
          "u": "https://imaging-resource.com/PRODS/EOS1D/1DA7.HTM"
      },
      {
          "t": "Nikon Coolpix 995 评测",
          "u": "https://www.dpreview.com/reviews/nikoncp995"
      },
      {
          "t": "Adobe Camera Raw 插件",
          "u": "https://www.dpreview.com/articles/1460986292/adoberawplugin"
      },
      {
          "t": "Nikon D2H 白平衡",
          "u": "https://www.imaging-resource.com/PRODS/D2H/D2HA6.HTM"
      },
      {
          "t": "Nikon D2X 评测",
          "u": "https://www.dpreview.com/reviews/nikond2x"
      },
      {
          "t": "Canon EOS 20D 白平衡偏移",
          "u": "https://www.dpreview.com/reviews/canoneos20d/8"
      },
      {
          "t": "Canon PowerShot G7 评测",
          "u": "https://www.dpreview.com/reviews/canong7"
      },
      {
          "t": "Paralenz 潜水相机",
          "u": "https://petapixel.com/2017/06/14/paralenz-worlds-first-action-cam-made-specifically-divers/"
      },
      {
          "t": "iPhone 5s True Tone 闪光灯",
          "u": "https://www.anandtech.com/show/7329"
      },
      {
          "t": "Huawei P20 Pro 色温传感器",
          "u": "https://www.gsmarena.com/huawei_p20_pro-review-1747p6.php"
      },
      {
          "t": "Canon 5DS 白平衡",
          "u": "https://hk.canon/en/support/8202603500"
      },
      {
          "t": "Sony AWB 优先设置",
          "u": "https://helpguide.sony.net/ilc/1640/v1/en/contents/TP0001306051.html"
      },
      {
          "t": "LG G4 手动模式",
          "u": "https://www.androidcentral.com/how-and-when-use-manual-mode-lg-g4-camera"
      },
      {
          "t": "Nokia Lumia 颜色配置",
          "u": "https://blogs.windows.com/devices/2013/08/07/whats-your-colour-profile/"
      },
      {
          "t": "Sony Ericsson P800 成像",
          "u": "https://allaboutsymbian.com/devices/p800/imaging.php"
      },
      {
          "t": "Xperia 1 II 评测",
          "u": "https://www.gsmarena.com/sony_xperia_1_ii-review-2115p5.php"
      },
      {
          "t": "Tesla Autopilot 硬件",
          "u": "https://en.wikipedia.org/wiki/Tesla_Autopilot_hardware"
      },
      {
          "t": "Pixel 6 Real Tone",
          "u": "https://blog.google/products/pixel/image-equity-real-tone-pixel-6-photos/"
      },
      {
          "t": "Canon EOS R1 / R5 Mark II 发布",
          "u": "https://web.archive.org/web/20240811182941/https://hk.canon/en/consumer/eos-r1-and-eos-r5-mark-ii-embargo/news"
      },
      {
          "t": "Samsung EyeComfort 模式",
          "u": "https://www.samsung.com/ie/support/tv-audio-video/what-is-eyecomfort-mode/"
      },
      {
          "t": "EIZO 显示器色温基础",
          "u": "https://www.eizo.com/library/basics/color_temperature_on_an_lcd_monitor/"
      },
      {
          "t": "混合光源 AWB 论文",
          "u": "https://arxiv.org/abs/2109.08750v2"
      }
  ],
  el: 'wbtl', page: 'wb-timeline.html', histSrc: 'js/hist-wb.js',
  step: {n: 26, zh: '第 26 步：ISP 把 RAW 变成照片', en: 'Step 26: ISP turns RAW into a photo'},
  text: {
    zh: {title: '白平衡技术时间线', eyebrow: 'White Balance · 1973–2024', h1: '把白色拍成白色，谁先做到？',
         sub: '一键白平衡、自动白平衡、显示器色温预设、白平衡预设、自定义白平衡、RAW 后期调白平衡、开尔文色温、白平衡包围、白平衡偏移、独立色温传感器、水下白平衡、双色温闪光灯、白色优先 / 氛围优先、原彩显示、RCCB 车载滤色片、肤色还原……每项白平衡技术最先出现在相机、手机、广播显示还是安防车载里，又是怎么流到其他行业的。',
         panelCap: '每项白平衡技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品，不是专利年份。和人眼与色彩 / ISP 时间线重合的条目年份一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'White Balance Timeline', eyebrow: 'White Balance · 1973–2024', h1: 'Making white look white: who did it first?',
         sub: 'One-push WB, auto WB, display color-temperature presets, WB presets, custom WB, adjusting WB in RAW, Kelvin settings, WB bracketing, WB shift, separate ambient color sensors, underwater WB, dual-tone flash, white/ambience priority, True Tone, RCCB automotive filters, skin-tone rendering: did each ship first in cameras, phones, broadcast/displays or security/automotive, and how did it spread?',
         panelCap: 'Which industry shipped each white-balance technology first.',
         foot: '"First" means first in a commercial product, not the patent year. Items overlapping the vision & color / ISP timelines match their years; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('wb');
