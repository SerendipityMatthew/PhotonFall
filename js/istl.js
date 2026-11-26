/* 防抖技术首发时间线的数据：第 10 步抽屉小图和 stabilization-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品。
   光学防抖、机身防抖、电子防抖和镜头 / ISP 时间线一致；这里的像素位移只算借用防抖马达的多拍（计算摄影时间线的多拍高像素范围更大）。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.is = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '配件 / 无人机 / 广播 / 其他', en: 'Accessories / Drones / Broadcast / Other'},
    {k: 'cam', zh: '相机 / 摄像机 / 运动相机', en: 'Cameras / Camcorders / Action cams'},
  ],
  rows: [
    [1969, "ind", "陀螺稳定航拍吊舱 · Westinghouse WESSCAM", "Gyro-stabilized aerial mount · Westinghouse WESSCAM", 1, "gyromount"],
    [1969, "ind", "液体可变角棱镜稳像 · Dynasciences Dynalens", "Liquid variable-angle prism · Dynasciences Dynalens", 1, "vap"],
    [1976, "ind", "斯坦尼康稳定器 · Steadicam（《Bound for Glory》）", "Steadicam stabilizer · Steadicam (Bound for Glory)", 1, "steadicam"],
    [1980, "ind", "陀螺稳定望远镜 · Fujinon Stabiscope", "Gyro-stabilized binoculars · Fujinon Stabiscope", 2, "gyromount"],
    [1988, "cam", "光学防抖 OIS · Panasonic PV-460", "Optical image stabilization · Panasonic PV-460", 1, "ois"],
    [1990, "cam", "电子防抖 EIS · Panasonic NV-S1", "Electronic image stabilization · Panasonic NV-S1", 1, "eis"],
    [1992, "cam", "可变角棱镜 VAP · Sony CCD-TR900", "Variable-angle prism (VAP) · Sony CCD-TR900", 0, "vap"],
    [1994, "cam", "首台防抖静物相机 · Nikon Zoom-Touch 105 VR", "First stabilized still camera · Nikon Zoom-Touch 105 VR", 2, "ois"],
    [1995, "ind", "防抖双筒望远镜 · Canon 12x36 IS", "Stabilized binoculars · Canon 12x36 IS", 2, "vap"],
    [1995, "cam", "首支防抖可换镜头 · Canon EF 75-300mm IS", "First stabilized interchangeable lens · Canon EF 75-300mm IS", 2, "ois"],
    [1998, "auto", "陀螺稳定红外吊舱 · FLIR Star SAFIRE", "Gyro-stabilized infrared turret · FLIR Star SAFIRE", 0, "gyromount"],
    [2003, "cam", "传感器位移防抖 IBIS · Konica Minolta DiMAGE A1", "Sensor-shift IBIS · Konica Minolta DiMAGE A1", 1, "ibis"],
    [2010, "ind", "广播镜头内置防抖 · Canon HJ15ex8.5B IS", "Broadcast lens with built-in IS · Canon HJ15ex8.5B", 2, "vap"],
    [2010, "ind", "手机用斯坦尼康 · Steadicam Smoothee（iPhone 3GS）", "Phone Steadicam · Steadicam Smoothee (iPhone 3GS)", 2, "steadicam"],
    [2010, "cam", "OIS+EIS 混合防抖 · Sony HDR-CX550V Active Mode", "OIS+EIS hybrid stabilization · Sony HDR-CX550V Active Mode", 1, "hybrid"],
    [2011, "cam", "OIS+EIS 混合防抖 · Panasonic HDC-SD90 Hybrid O.I.S.", "OIS+EIS hybrid stabilization · Panasonic HDC-SD90 Hybrid O.I.S.", 2, "hybrid"],
    [2011, "cam", "GPS + IBIS 星空追踪 · Pentax O-GPS1 AstroTracer", "GPS + IBIS star tracking · Pentax O-GPS1 AstroTracer", 1, "astro"],
    [2011, "phone", "电子防抖进手机 · iPhone 4S", "EIS reaches phones · iPhone 4S", 0, "eis"],
    [2012, "cam", "五轴机身防抖 · Olympus OM-D E-M5", "5-axis IBIS · Olympus OM-D E-M5", 1, "ibis5"],
    [2012, "cam", "整体模组浮动防抖 · Sony HDR-PJ760V Balanced Optical SteadyShot", "Floating lens-sensor module · Sony HDR-PJ760V Balanced Optical SteadyShot", 1, "module"],
    [2012, "ind", "无刷电机三轴航拍云台 · DJI Zenmuse Z15", "Brushless 3-axis aerial gimbal · DJI Zenmuse Z15", 1, "dronegim"],
    [2012, "phone", "光学防抖进手机 · Nokia Lumia 920", "OIS reaches phones · Nokia Lumia 920", 0, "ois"],
    [2012, "phone", "整体光学组件浮动防抖 · Nokia Lumia 920", "Floating optical-assembly stabilization · Nokia Lumia 920", 0, "module"],
    [2013, "ind", "手持三轴无刷稳定器 · Freefly MōVI M10", "Handheld 3-axis brushless gimbal · Freefly MōVI M10", 1, "gimbal"],
    [2013, "phone", "陀螺仪视频防抖 Cinema · Instagram", "Gyro video stabilization (Cinema) · Instagram", 1, "gyropost"],
    [2014, "phone", "陀螺仪数据后期防抖 · Instagram Hyperlapse", "Gyro-data post stabilization · Instagram Hyperlapse", 2, "gyropost"],
    [2014, "ind", "平价手持云台 · DJI Ronin", "Affordable handheld gimbal · DJI Ronin", 2, "gimbal"],
    [2014, "ind", "一体化三轴云台航拍机 · DJI Phantom 2 Vision+", "Integrated 3-axis gimbal drone · DJI Phantom 2 Vision+", 2, "dronegim"],
    [2014, "cam", "全画幅五轴防抖 · Sony α7 II", "Full-frame 5-axis IBIS · Sony α7 II", 2, "ibis5"],
    [2014, "cam", "镜头 + 机身分轴防抖 · Sony α7 II", "Split-axis lens + body stabilization · Sony α7 II", 1, "dualis"],
    [2014, "phone", "陀螺仪地平线锁定 App · Horizon", "Gyro horizon-lock app · Horizon", 1, "horizon"],
    [2015, "cam", "IBIS 像素位移多帧合成 · Olympus OM-D E-M5 Mark II", "IBIS pixel-shift multi-shot · Olympus OM-D E-M5 Mark II", 1, "pixshift"],
    [2015, "cam", "镜头 + 机身同时防抖 · Panasonic Lumix GX8 Dual I.S.", "Lens + body working together · Panasonic Lumix GX8 Dual I.S.", 2, "dualis"],
    [2015, "auto", "电子防抖进安防 · Axis Q1941-E", "EIS reaches security · Axis Q1941-E", 0, "eis"],
    [2015, "cam", "一体化手持云台相机 · DJI Osmo", "Integrated handheld gimbal camera · DJI Osmo", 0, "gimbal"],
    [2015, "cam", "四帧全色像素位移 · Pentax K-3 II Pixel Shift Resolution", "4-shot full-colour pixel shift · Pentax K-3 II Pixel Shift Resolution", 2, "pixshift"],
    [2015, "cam", "内置 GPS 星空追踪 · Pentax K-3 II", "Built-in GPS star tracking · Pentax K-3 II", 2, "astro"],
    [2015, "ind", "手机三轴稳定器 · Zhiyun Z1-Smooth", "Phone 3-axis gimbal · Zhiyun Z1-Smooth", 2, "gimbal"],
    [2015, "cam", "360° 视频天顶校正 · Ricoh THETA S", "360° video zenith correction · Ricoh THETA S", 0, "horizon"],
    [2016, "cam", "同步防抖 Sync IS · Olympus M.Zuiko 300mm F4 IS PRO + E-M5 II", "Sync IS · Olympus M.Zuiko 300mm F4 IS PRO + E-M5 II", 2, "dualis"],
    [2017, "phone", "OIS+EIS 融合防抖 · Google Pixel 2 Fused Video Stabilization", "Fused OIS+EIS · Google Pixel 2 Fused Video Stabilization", 0, "hybrid"],
    [2018, "phone", "手抖多帧超分辨率 · Google Pixel 3 Super Res Zoom", "Hand-shake multi-frame super-resolution · Google Pixel 3 Super Res Zoom", 0, "pixshift"],
    [2018, "cam", "运动相机强力电子防抖 · GoPro HERO7 Black HyperSmooth", "Action-cam EIS · GoPro HERO7 Black HyperSmooth", 2, "eis"],
    [2018, "cam", "全景 FlowState 防抖 · Insta360 ONE X", "360° FlowState stabilization · Insta360 ONE X", 2, "horizon"],
    [2018, "cam", "口袋云台相机 · DJI Osmo Pocket", "Pocket gimbal camera · DJI Osmo Pocket", 2, "gimbal"],
    [2019, "cam", "陀螺仪后期防抖 · ReelSteady GO", "Gyro-based post stabilization · ReelSteady GO", 0, "gyropost"],
    [2019, "cam", "机内 360° 地平线校正 · GoPro MAX", "In-camera 360° horizon leveling · GoPro MAX", 2, "horizon"],
    [2019, "cam", "手持高像素合成 · Olympus OM-D E-M1X", "Handheld high-res shot · Olympus OM-D E-M1X", 2, "pixshift"],
    [2020, "phone", "传感器位移进手机 · iPhone 12 Pro Max", "Sensor-shift reaches phones · iPhone 12 Pro Max", 0, "ibis"],
    [2020, "phone", "双滚珠微云台（±3°） · vivo X50 Pro", "Dual-ball micro-gimbal (±3°) · vivo X50 Pro", 2, "module"],
    [2020, "auto", "行车记录仪电子防抖 · Nextbase 622GW", "Dash-cam EIS · Nextbase 622GW", 2, "eis"],
    [2020, "cam", "单镜头机内地平线校正 · GoPro HERO9 Black", "Single-lens in-camera horizon leveling · GoPro HERO9 Black", 2, "horizon"],
    [2021, "cam", "开源陀螺仪防抖 · Gyroflow", "Open-source gyro stabilization · Gyroflow", 2, "gyropost"],
    [2022, "phone", "运动模式 · iPhone 14 Action mode", "Action mode · iPhone 14", 2, "eis"],
    [2023, "phone", "手机 360° 地平线锁定 · Motorola Edge+ Horizon Lock", "360° horizon lock on phones · Motorola Edge+ Horizon Lock", 0, "horizon"],
  ],
  desc: {
      "ois": [
          "镜头内一组浮动镜片由陀螺仪驱动反向平移，让光路偏折抵消手抖，成像前就把画面稳住。",
          "A floating lens group, driven by gyro signals, shifts opposite to the shake so the image stays put on the sensor."
      ],
      "vap": [
          "两块玻璃间夹透明液体的可变角棱镜，电机改变夹角使光线偏折，抵消镜头的角度抖动。",
          "A liquid-filled prism between two glass plates changes its wedge angle to bend light and cancel angular shake."
      ],
      "ibis": [
          "把图像传感器装在电磁驱动平台上，按陀螺仪测得的抖动反向移动传感器，任何镜头都能防抖。",
          "The sensor sits on a magnetically driven stage and moves against measured shake, stabilizing any lens."
      ],
      "ibis5": [
          "传感器平台同时补偿俯仰、偏航、横滚和上下左右平移五个方向，近摄和视频抖动也能压住。",
          "The sensor stage corrects pitch, yaw, roll and X/Y translation, handling close-up and walking shake."
      ],
      "eis": [
          "多读出一圈像素作余量，按陀螺仪或画面运动逐帧平移裁切，用算法把抖动裁掉。",
          "Reads extra margin pixels and shifts the crop frame-by-frame using gyro or motion data to cancel shake."
      ],
      "hybrid": [
          "光学防抖负责小幅高频抖动，电子防抖再裁切处理大幅低频晃动和旋转，两者叠加。",
          "OIS handles small fast shake while EIS crops away larger slow motion and roll, combining both."
      ],
      "dualis": [
          "镜头防抖管俯仰偏航，机身传感器防抖管平移和横滚，二者实时通信分工补偿。",
          "Lens IS corrects pitch/yaw while body IBIS handles shift and roll, coordinated in real time."
      ],
      "module": [
          "镜头与传感器整体装在微型云台上随抖动反向转动，补偿角度比镜片位移更大。",
          "The whole lens-plus-sensor module rides a tiny gimbal and rotates against shake for larger correction angles."
      ],
      "pixshift": [
          "借用防抖平台把传感器精确移动一个或半个像素连拍多张，合成全色或更高分辨率图像。",
          "Uses the stabilizer to move the sensor by one or half a pixel between shots, merging them for full colour or more resolution."
      ],
      "astro": [
          "根据 GPS 位置、方位和陀螺仪数据，让防抖平台跟着地球自转移动传感器，长曝光星点不拖线。",
          "Uses GPS, compass and gyro data to move the stabilized sensor with Earth's rotation so stars don't trail."
      ],
      "steadicam": [
          "相机装在带配重的平衡杆上，通过等弹力臂和背心连到人身上，靠惯性和弹簧隔离步伐颠簸。",
          "Mounts the camera on a balanced sled and spring arm worn on a vest, isolating the operator's steps by inertia."
      ],
      "gyromount": [
          "在吊舱或望远镜内用高速陀螺仪的定轴性或伺服电机保持视轴稳定，隔离直升机和船舶振动。",
          "Spinning gyros or servo motors hold the line of sight steady inside a pod or binocular, isolating vehicle vibration."
      ],
      "gimbal": [
          "三个无刷电机在俯仰、横滚、航向轴上按 IMU 数据实时反向转动，把相机姿态锁定。",
          "Three brushless motors on tilt, roll and pan counter-rotate from IMU data to hold the camera's attitude."
      ],
      "dronegim": [
          "装在无人机机腹的无刷三轴云台，隔离机身倾斜和电机振动，让航拍画面保持水平平稳。",
          "A brushless 3-axis gimbal under the drone isolates airframe tilt and motor vibration for level aerial footage."
      ],
      "horizon": [
          "用陀螺仪和重力方向算出机身横滚角，旋转并裁切画面，让地平线无论机身怎么转都保持水平。",
          "Computes roll from gyro and gravity data, then rotates and crops the frame so the horizon stays level."
      ],
      "gyropost": [
          "拍摄时同步记录陀螺仪数据，后期据此重建相机运动并平滑，再逐帧反向变换去抖。",
          "Logs gyro data during capture, then reconstructs and smooths the camera path to warp each frame in post."
      ]
  },
  refs: [
      {
          "t": "IEEE 里程碑：1988 防抖摄像机",
          "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
      },
      {
          "t": "佳能 EF 75-300 IS 1995 新闻稿",
          "u": "https://www.bobatkins.com/photography/eosfaq/75-300IS.HTM"
      },
      {
          "t": "TV Technology：镜头防抖技术",
          "u": "https://www.tvtechnology.com/news/camera-lens-image-stabilization-part-2"
      },
      {
          "t": "佳能 IS 双筒望远镜",
          "u": "https://www.castlecameras.co.uk/article/262-is-binoculars-8211-how-canon-re-invented-binoculars"
      },
      {
          "t": "佳能首支防抖 HD 广播镜头",
          "u": "https://www.sportsvideo.org/2010/03/05/nab-preview-canon-to-present-worlds-first-hd-portable-zoom-lens-with-built-in-optical-image-stabilizer/"
      },
      {
          "t": "Fujinon Stabiscope",
          "u": "https://www.fujifilm.com/us/en/consumer/binoculars/stabiscope"
      },
      {
          "t": "Wescam 维基百科",
          "u": "https://en.wikipedia.org/wiki/Wescam"
      },
      {
          "t": "Steadicam 维基百科",
          "u": "https://en.wikipedia.org/wiki/Steadicam"
      },
      {
          "t": "Olympus E-M5 五轴防抖",
          "u": "https://www.engadget.com/2012/02/08/olympus-om-d-e-m5-five-axis-sensor-shift-image-stabilization-han/"
      },
      {
          "t": "Sony α7 II 全画幅五轴防抖",
          "u": "https://sony.mediaroom.com/2014-11-26-Sony-Introduces-the-a7II-the-Worlds-First-Full-Frame-Camera-with-5-Axis-Image-Stabilization"
      },
      {
          "t": "Pentax O-GPS1 AstroTracer",
          "u": "https://www.ricoh-imaging.co.jp/english/news/2011/201107.html"
      },
      {
          "t": "Pentax K-3 II 像素位移",
          "u": "https://petapixel.com/2015/04/23/the-pentax-k-3-ii-features-pixel-shift-tech-for-higher-resolution-at-24-mp"
      },
      {
          "t": "Olympus E-M1X 手持高像素",
          "u": "https://photographylife.com/olympus-om-d-e-m1x-hand-held-hi-res"
      },
      {
          "t": "Panasonic GX8 Dual I.S.",
          "u": "https://panasonic.com/global/consumer/lumix/20th/history/2015.html"
      },
      {
          "t": "Sony Balanced Optical SteadyShot",
          "u": "https://www.engadget.com/2012-01-09-sony-unveils-new-family-of-handycams-hdr-cx760v-b-steadies-you.html"
      },
      {
          "t": "Panasonic HDC-SD90 Hybrid O.I.S.",
          "u": "https://www.imaging-resource.com/NEWS/1294980800.html"
      },
      {
          "t": "Pixel 2 融合防抖",
          "u": "https://research.google/blog/fused-video-stabilization-on-the-pixel-2-and-pixel-2-xl/"
      },
      {
          "t": "Pixel 3 Super Res Zoom",
          "u": "https://research.google/blog/see-better-and-further-with-super-res-zoom-on-the-pixel-3/"
      },
      {
          "t": "DJI Zenmuse Z15 云台技术",
          "u": "https://viewpoints.dji.com/blog/the-chase-gimbal-technology-and-the-endless-push-for-innovation"
      },
      {
          "t": "Freefly MōVI M10 开始发货",
          "u": "https://digitalcinemareport.com/news/m%C5%8Dvi-m10-handheld-stabilizer-now-shipping"
      },
      {
          "t": "DJI Ronin 维基百科",
          "u": "https://en.wikipedia.org/wiki/DJI_Ronin"
      },
      {
          "t": "DJI Osmo 发布",
          "u": "https://www.prnewswire.com/news-releases/dji-introduces-the-worlds-first-fully-integrated-stabilized-handheld-4k-camera-300156737.html"
      },
      {
          "t": "DJI Osmo Mobile 发布",
          "u": "https://www.dji.com/media-center/announcements/dji-makes-your-smartphone-smarter-with-the-new-osmo-mobile"
      },
      {
          "t": "Insta360 ONE X 发布",
          "u": "https://petapixel.com/2018/10/10/insta360-one-x-is-a-5-7k-360-action-cam-with-impossible-stabilization/"
      },
      {
          "t": "GoPro HERO8 Black 评测",
          "u": "https://www.engadget.com/2019/10/01/gopro-hero-8-black-review/"
      },
      {
          "t": "Motorola Horizon Lock",
          "u": "https://www.androidcentral.com/phones/motorolas-horizon-lock-is-the-coolest-camera-feature-ive-seen-in-years"
      },
      {
          "t": "Instagram Hyperlapse 原理",
          "u": "https://techcrunch.com/2014/08/27/instagram-pulls-back-the-curtain-on-the-engineering-magic-behind-hyperlapse/amp/"
      },
      {
          "t": "GoPro 收购 ReelSteady",
          "u": "https://www.redsharknews.com/production/item/7069-gopro-acquires-software-stabilisation-specialists-reelsteady"
      },
      {
          "t": "Gyroflow GitHub",
          "u": "https://github.com/gyroflow/gyroflow/"
      },
      {
          "t": "Nextbase 622GW 电子防抖",
          "u": "https://digitalcameraworld.com/news/nextbase-622gw-dash-cam-eliminates-shaky-footage-with-in-built-stabilizer"
      },
      {
          "t": "Axis 防抖白皮书",
          "u": "https://whitepapers.axis.com/image-stabilization"
      }
  ],
  el: 'istl', page: 'stabilization-timeline.html', histSrc: 'js/hist-is.js',
  step: {n: 10, zh: '第 10 步：防抖', en: 'Step 10: Stabilization'},
  text: {
    zh: {title: '防抖技术时间线', eyebrow: 'Image Stabilization · 1969–2023', h1: '手抖了画面不抖，谁先做到？',
         sub: '陀螺稳定吊舱、斯坦尼康、光学防抖、电子防抖、可变角棱镜、机身防抖、五轴防抖、混合防抖、双重防抖、整体模组防抖、像素位移、星空追踪、手持电子稳定器、无人机云台、地平线锁定、陀螺仪后期防抖……每项防抖技术最先出现在相机、手机、配件无人机还是安防车载里，又是怎么流到其他行业的。',
         panelCap: '每项防抖技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品，不是专利年份。光学 / 机身 / 电子防抖和镜头、ISP 时间线一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'Image Stabilization Timeline', eyebrow: 'Image Stabilization · 1969–2023', h1: 'Shaky hands, steady picture: who did it first?',
         sub: 'Gyro-stabilized mounts, Steadicam, optical and electronic stabilization, vari-angle prisms, IBIS, 5-axis IBIS, hybrid and dual IS, floating modules, pixel shift, star tracking, handheld gimbals, drone gimbals, horizon lock, gyro-based post stabilization: did each ship first in cameras, phones, accessories/drones or security/automotive, and how did it spread?',
         panelCap: 'Which industry shipped each stabilization technology first.',
         foot: '"First" means first in a commercial product, not the patent year. Optical / sensor-shift / electronic stabilization match the lens and ISP timelines; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('is');
