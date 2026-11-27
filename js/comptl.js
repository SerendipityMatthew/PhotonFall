/* 计算摄影技术首发时间线的数据：第 35 步抽屉小图和 comp-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品（含电脑软件）。
   和 ISP 时间线重合的条目（多帧降噪 / 夜景、人像虚化、多帧超分）年份保持一致；这里的 HDR 指多张曝光合成，ISP 时间线里的宽动态指单台摄像机的宽动态。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.comp = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '电脑软件 / 工业 / 其他', en: 'PC software / Industrial / Other'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1994, "ind", "近景摄影测量软件 · Eos Systems PhotoModeler", "Close-range photogrammetry software · Eos Systems PhotoModeler", 1, "pgm"],
    [1995, "ind", "全景拼接浏览 · Apple QuickTime VR", "Panorama stitching viewer · Apple QuickTime VR", 1, "pano"],
    [1997, "ind", "景深合成软件 · Synoptics Montage / Auto-Montage", "Focus-stacking software · Synoptics Montage / Auto-Montage", 1, "fstack"],
    [1998, "cam", "传感器位移多拍 · Sinar Multishot 数字后背", "Sensor-shift multi-shot · Sinar Multishot digital back", 1, "msr"],
    [2001, "ind", "多曝光 HDR 合成 · USC ICT HDRShop", "Multi-exposure HDR merge · USC ICT HDRShop", 1, "hdr"],
    [2002, "ind", "星空叠加 · Registax", "Astro stacking · Registax", 1, "astro"],
    [2003, "ind", "景深合成软件 · Helicon Focus", "Focus-stacking software · Helicon Focus", 2, "fstack"],
    [2003, "ind", "多曝光 HDR 合成 · HDRsoft Photomatix", "Multi-exposure HDR merge · HDRsoft Photomatix", 2, "hdr"],
    [2004, "ind", "多镜头球形拼接相机 · Immersive Media Dodeca 2360", "Multi-lens spherical camera · Immersive Media Dodeca 2360", 1, "sph"],
    [2005, "ind", "多镜头球形拼接相机 · Point Grey Ladybug2", "Multi-lens spherical camera · Point Grey Ladybug2", 2, "sph"],
    [2006, "ind", "深空叠加 · DeepSkyStacker", "Deep-sky stacking · DeepSkyStacker", 2, "astro"],
    [2006, "auto", "多传感器拼接全景监控 · Arecont Vision SurroundVideo", "Multi-sensor panoramic surveillance · Arecont Vision SurroundVideo", 0, "sph"],
    [2006, "cam", "机内全景拼接 · Kodak EasyShare V570", "In-camera panorama stitching · Kodak EasyShare V570", 0, "pano"],
    [2007, "auto", "360° 环视鸟瞰 · Nissan Elgrand Around View Monitor", "360° bird's-eye surround view · Nissan Elgrand Around View Monitor", 0, "pano"],
    [2007, "phone", "机内全景拼接 · Samsung SGH-G800 / Sony Ericsson K850", "In-phone panorama stitching · Samsung SGH-G800 / Sony Ericsson K850", 0, "pano"],
    [2009, "cam", "多帧降噪夜景 · Sony DSC-HX1 Handheld Twilight", "Multi-frame night shot · Sony DSC-HX1 Handheld Twilight", 1, "night"],
    [2009, "cam", "机内 HDR 合成 · Ricoh CX1 / Pentax K-7（首台单反）", "In-camera HDR merge · Ricoh CX1 / Pentax K-7 (first DSLR)", 0, "hdr"],
    [2009, "cam", "扫摄全景 · Sony Cyber-shot DSC-HX1", "Sweep Panorama · Sony Cyber-shot DSC-HX1", 2, "pano"],
    [2010, "ind", "内容识别填充 · Adobe Photoshop CS5 Content-Aware Fill", "Content-Aware Fill · Adobe Photoshop CS5", 1, "gen"],
    [2010, "ind", "光场相机 · Raytrix R11", "Plenoptic light-field camera · Raytrix R11", 1, "lf"],
    [2010, "ind", "照片三维重建 · Agisoft PhotoScan", "Photo-based 3D reconstruction · Agisoft PhotoScan", 2, "pgm"],
    [2010, "phone", "手机 HDR 模式 · iPhone 4（iOS 4.1）", "Phone HDR mode · iPhone 4 (iOS 4.1)", 0, "hdr"],
    [2012, "cam", "消费级光场相机 · Lytro", "Consumer light-field camera · Lytro", 0, "lf"],
    [2012, "phone", "手机照片建模（云端） · Autodesk 123D Catch", "Phone photo modeling (cloud) · Autodesk 123D Catch", 0, "pgm"],
    [2013, "cam", "双鱼眼一键 360° 相机 · Ricoh Theta", "Dual-fisheye one-shot 360° camera · Ricoh Theta", 0, "sph"],
    [2013, "phone", "连拍对齐 HDR+ · Google Nexus 5", "Burst-aligned HDR+ · Google Nexus 5", 2, "hdr"],
    [2014, "phone", "双摄深度虚化 · HTC One M8 Duo Camera", "Dual-camera depth bokeh · HTC One M8 Duo Camera", 1, "bokeh"],
    [2014, "cam", "实时合成曝光 · Olympus OM-D E-M10 Live Composite", "Live composite exposure · Olympus OM-D E-M10 Live Composite", 1, "lexp"],
    [2014, "cam", "光场相机二代 · Lytro Illum", "Second-gen light-field camera · Lytro Illum", 2, "lf"],
    [2014, "phone", "多帧超分辨率 · OPPO Find 7 Super Zoom", "Multi-frame super-resolution · OPPO Find 7 Super Zoom", 0, "msr"],
    [2014, "phone", "双摄融合低光 · Huawei Honor 6 Plus", "Dual-camera low-light fusion · Huawei Honor 6 Plus", 1, "fusion"],
    [2015, "cam", "机内景深合成 · Olympus Stylus Tough TG-4", "In-camera focus stacking · Olympus Stylus Tough TG-4", 0, "fstack"],
    [2015, "phone", "流光快门 · Huawei P8 Light Painting", "Light painting mode · Huawei P8 Light Painting", 0, "lexp"],
    [2015, "cam", "机身高像素合成 · Olympus OM-D E-M5 Mark II High Res Shot", "In-body sensor-shift high-res · Olympus OM-D E-M5 Mark II High Res Shot", 2, "msr"],
    [2016, "phone", "黑白 + 彩色双摄融合 · Huawei P9", "Mono + color dual-camera fusion · Huawei P9", 2, "fusion"],
    [2016, "phone", "人像模式 · iPhone 7 Plus Portrait", "Portrait mode · iPhone 7 Plus Portrait", 2, "bokeh"],
    [2017, "cam", "16 镜头阵列融合相机 · Light L16", "16-lens array fusion camera · Light L16", 0, "fusion"],
    [2017, "phone", "实况照片长曝光 · iPhone（iOS 11）Long Exposure", "Live Photo long exposure · iPhone (iOS 11) Long Exposure", 2, "lexp"],
    [2018, "ind", "AI 放大 · Topaz Gigapixel AI", "AI upscaling · Topaz Gigapixel AI", 1, "aisr"],
    [2018, "phone", "手抖多帧超分辨率 · Google Pixel 3 Super Res Zoom", "Hand-shake multi-frame super-res · Google Pixel 3 Super Res Zoom", 2, "msr"],
    [2018, "phone", "手持超级夜景 · Huawei P20 Pro", "Handheld night mode · Huawei P20 Pro", 0, "night"],
    [2018, "phone", "Night Sight 夜视 · Google Pixel", "Night Sight · Google Pixel", 2, "night"],
    [2018, "ind", "语义分割主体选区 · Adobe Photoshop Select Subject", "Semantic subject selection · Adobe Photoshop Select Subject", 1, "sem"],
    [2019, "phone", "手机天文摄影模式 · Google Pixel 4", "Astrophotography mode · Google Pixel 4", 0, "astro"],
    [2019, "cam", "手持高像素合成 · Olympus OM-D E-M1X", "Handheld high-res shot · Olympus OM-D E-M1X", 2, "msr"],
    [2019, "auto", "透明引擎盖 · Range Rover Evoque ClearSight Ground View", "Transparent bonnet · Range Rover Evoque ClearSight Ground View", 2, "pano"],
    [2019, "phone", "语义识别局部处理 · iPhone 11 Pro Smart HDR / Pixel 4 天空分割", "Semantic regional processing · iPhone 11 Pro Smart HDR / Pixel 4 sky segmentation", 0, "sem"],
    [2019, "ind", "AI 降噪 · Topaz DeNoise AI", "AI denoise · Topaz DeNoise AI", 1, "aidn"],
    [2020, "ind", "RAW 联合去马赛克 + 降噪 · DxO PhotoLab 4 DeepPRIME", "Joint RAW demosaic + denoise · DxO PhotoLab 4 DeepPRIME", 2, "aidn"],
    [2020, "ind", "内容归属预览（CAI） · Adobe Photoshop beta / Behance", "Content attribution preview (CAI) · Adobe Photoshop beta / Behance", 1, "c2pa"],
    [2021, "phone", "物体橡皮擦 · Samsung Galaxy S21 Object Eraser", "Object Eraser · Samsung Galaxy S21", 0, "gen"],
    [2021, "ind", "AI 主体/天空蒙版 · Adobe Lightroom 蒙版", "AI subject / sky masks · Adobe Lightroom masking", 2, "sem"],
    [2021, "ind", "超分辨率 · Adobe Camera Raw Super Resolution", "Super Resolution · Adobe Camera Raw", 2, "aisr"],
    [2021, "phone", "视频虚化 · iPhone 13 Cinematic mode", "Video bokeh · iPhone 13 Cinematic mode", 2, "bokeh"],
    [2022, "cam", "计算减光镜 · OM System OM-1 Live ND", "Computational ND filter · OM System OM-1 Live ND", 2, "lexp"],
    [2023, "cam", "机内 C2PA 签名 · Leica M11-P", "In-camera C2PA signing · Leica M11-P", 0, "c2pa"],
    [2023, "phone", "手机端本地照片建模 · iPhone（iOS 17）Object Capture", "On-device photo modeling · iPhone (iOS 17) Object Capture", 2, "pgm"],
    [2023, "ind", "AI 降噪 · Adobe Lightroom Denoise", "AI Denoise · Adobe Lightroom", 2, "aidn"],
    [2023, "ind", "生成式填充 · Adobe Photoshop Generative Fill", "Generative Fill · Adobe Photoshop", 2, "gen"],
    [2023, "phone", "生成式编辑 · Google Pixel 8 Magic Editor", "Generative editing · Google Pixel 8 Magic Editor", 2, "gen"],
    [2024, "cam", "机内神经网络降噪 · Canon EOS R1 / R5 Mark II", "In-camera neural-network noise reduction · Canon EOS R1 / R5 Mark II", 0, "aidn"],
    [2024, "cam", "机内 AI 放大 · Canon EOS R5 Mark II In-camera Upscaling", "In-camera AI upscaling · Canon EOS R5 Mark II", 0, "aisr"],
    [2025, "phone", "扩散模型 100 倍变焦 · Google Pixel 10 Pro Pro Res Zoom", "Diffusion-model 100x zoom · Google Pixel 10 Pro Pro Res Zoom", 0, "aisr"],
    [2025, "phone", "相机原生 C2PA 凭证 · Google Pixel 10", "Native-camera C2PA credentials · Google Pixel 10", 0, "c2pa"],
  ],
  desc: {
      "hdr": [
          "把多张不同曝光的照片对齐合并成一张，同时保留高光和暗部细节，突破单次曝光的动态范围限制。",
          "Merges several differently exposed frames into one image to exceed the dynamic range of a single exposure."
      ],
      "night": [
          "连拍多张短曝光再对齐平均，手持也能在暗处拍出低噪点、不糊的照片，不必依赖三脚架。",
          "Aligns and averages a burst of short exposures so handheld low-light shots come out clean and sharp without a tripod."
      ],
      "astro": [
          "把几十上百张星空曝光按星点对齐后叠加，压低噪声、拉出暗弱星云，手机也能拍银河。",
          "Registers and stacks dozens of sky exposures on the stars to suppress noise and reveal faint nebulae and the Milky Way."
      ],
      "pano": [
          "把多张或多路相机画面做配准、投影和融合，拼成一张超广视野图像，从全景照片到车辆鸟瞰环视。",
          "Registers, warps and blends multiple frames or cameras into one ultra-wide view, from panoramas to car bird's-eye surround view."
      ],
      "sph": [
          "用多颗镜头同时拍摄并实时拼接，一次得到覆盖整个球面的 360° 图像或视频，免去转动相机。",
          "Captures with several lenses at once and stitches them into a full 360° sphere in one shot, no rotating camera needed."
      ],
      "msr": [
          "利用传感器位移或手抖在亚像素级错位拍多张，再合成出每像素完整颜色、更高分辨率的图像。",
          "Shoots several frames offset by sub-pixel sensor shifts or hand shake and merges them into a higher-resolution, full-color image."
      ],
      "fstack": [
          "连续拍下对焦在不同距离的多张照片，挑出每处最清晰的部分合成，得到超大景深，微距常用。",
          "Captures frames focused at different distances and keeps the sharpest parts of each, giving extreme depth of field for macro work."
      ],
      "lf": [
          "用微透镜阵列同时记录光线的位置和方向，拍完后还能重新对焦、改景深或估计深度。",
          "Records both position and direction of light with a microlens array, so focus and depth of field can be changed after capture."
      ],
      "bokeh": [
          "用双摄视差或深度估计算出景深图，再按距离模拟大光圈虚化，小传感器也能拍出背景模糊。",
          "Estimates a depth map from dual-camera parallax or AI, then simulates wide-aperture blur by distance on small sensors."
      ],
      "fusion": [
          "同时用多颗不同特性的摄像头拍摄并融合，例如黑白模组补细节、彩色模组补颜色，或多焦段拼接变焦。",
          "Fuses several dissimilar cameras at once, e.g. a mono module for detail with a color one, or multiple focal lengths for zoom."
      ],
      "lexp": [
          "连续拍摄并逐帧累加最亮像素或做平均，实时模拟长曝光、星轨、光绘或减光镜效果，不会过曝。",
          "Accumulates a stream of frames by brightest-pixel or averaging to simulate long exposures, star trails or ND filters without overexposure."
      ],
      "sem": [
          "先用神经网络把画面分成人脸、天空、皮肤等区域，再分别做色调、降噪和锐化，而非全图一刀切。",
          "Uses neural networks to segment faces, sky, skin and more, then tunes tone, noise and sharpening per region instead of globally."
      ],
      "gen": [
          "根据周围内容或生成模型自动补全被删去的区域，可去掉路人、电线等干扰物，甚至扩展画面。",
          "Fills removed regions from surrounding content or a generative model, erasing distractions or even extending the frame."
      ],
      "aidn": [
          "用训练好的神经网络直接在 RAW 上去马赛克和降噪，高 ISO 照片的噪点大减而细节保留更多。",
          "Applies a trained neural network to demosaic and denoise RAW data, cutting high-ISO noise while keeping more detail."
      ],
      "aisr": [
          "用深度学习从单张图像推测并补出细节，把像素数放大数倍，或在高倍数码变焦时重建画面。",
          "Uses deep learning to infer missing detail and enlarge a single image several times, or rebuild high-ratio digital zoom."
      ],
      "pgm": [
          "从多角度拍摄的大量照片中匹配特征点、反算相机位置，重建出带纹理的三维模型或地图。",
          "Matches features across many photos from different angles, solves camera poses and reconstructs textured 3D models or maps."
      ],
      "c2pa": [
          "在拍摄或编辑时把来源、编辑与 AI 使用记录以加密签名写入文件，便于查验照片真伪。",
          "Cryptographically signs provenance, edit history and AI use into the file at capture or edit time so authenticity can be checked."
      ]
  },
  refs: [
      {
          "t": "Nissan 世界首个 Around View Monitor（2007）",
          "u": "https://global.nissannews.com/en/releases/071012-01-e"
      },
      {
          "t": "Photomatix 发布历史（HDRsoft）",
          "u": "https://www.hdrsoft.com/about.html"
      },
      {
          "t": "Olympus E-M1 固件 4.0 机内景深合成",
          "u": "https://www.imaging-resource.com/news/2015/12/05/rejoice-om-d-e-m1-shooters-for-focus-stacking-is-here-via-new-firmware-v4.0"
      },
      {
          "t": "Raytrix 首款商用光场相机（2010）",
          "u": "https://petapixel.com/2010/09/23/the-first-plenoptic-camera-on-the-market/"
      },
      {
          "t": "Sinar Multishot 介绍（PROFIFOTO）",
          "u": "https://sinar.swiss/assets/Uploads/5-PROFITOTO-Article-1-2-18-Sinar-Multishot.pdf"
      },
      {
          "t": "Olympus E-M1 固件 2.0 加入 Live Composite（源自 E-M10）",
          "u": "https://imaging-resource.com/news/2014/09/16/olympus-e-m1-gets-handsome-new-body-color-new-firmware-features-including-t"
      },
      {
          "t": "Huawei P8 流光快门",
          "u": "https://androidauthority.com/huawei-p8-light-painting-images-605592"
      },
      {
          "t": "DeepSkyStacker 源码与历史",
          "u": "https://github.com/deepskystacker/DSS"
      },
      {
          "t": "Helicon Focus（Wikipedia）",
          "u": "https://en.wikipedia.org/wiki/Helicon_Focus"
      },
      {
          "t": "Canon EOS R5 Mark II 机内 AI 放大与降噪",
          "u": "https://www.techradar.com/cameras/mirrorless-cameras/400-bigger-images-canons-new-in-camera-ai-could-put-to-bed-the-megapixel-race"
      },
      {
          "t": "Photoshop Content Credentials 测试版（2021）",
          "u": "https://petapixel.com/2021/10/26/photoshops-content-credentials-embeds-attribution-data-into-photos"
      },
      {
          "t": "Pixel 10 相机功能（Pro Res Zoom、C2PA）",
          "u": "https://blog.google/products/pixel/pixel-10-camera-features"
      },
      {
          "t": "Pixel 与 Android 的 C2PA 内容凭证",
          "u": "https://security.googleblog.com/2025/09/pixel-android-trusted-images-c2pa-content-credentials.html"
      },
      {
          "t": "Range Rover Evoque ClearSight Ground View",
          "u": "https://media.landrover.com/new-range-rover-evoque-all-seeing-suv"
      },
      {
          "t": "Arecont 2006 年推出 SurroundVideo 多传感器全景",
          "u": "https://www.securityinformed.com/news/7013.html"
      },
      {
          "t": "Point Grey Ladybug 球形相机白皮书",
          "u": "https://cdn.shopify.com/s/files/1/1750/5061/files/Ladybug-Spherical-Cameras-WhitePaper.pdf"
      },
      {
          "t": "iOS 17 Object Capture（WWDC23）",
          "u": "https://developer.apple.com/wwdc23/10191/"
      },
      {
          "t": "Surround-view system（Wikipedia）",
          "u": "https://en.wikipedia.org/wiki/Surround-view_system"
      },
      {
          "t": "Light field camera（Wikipedia）",
          "u": "https://en.wikipedia.org/wiki/Light_field_camera"
      }
  ],
  el: 'comptl', page: 'comp-timeline.html', histSrc: 'js/hist-comp.js',
  step: {n: 35, zh: '第 35 步：计算摄影 · 多帧融合', en: 'Step 35: Computational photography · multi-frame fusion'},
  text: {
    zh: {title: '计算摄影技术时间线', eyebrow: 'Computational Photography · 1994–2025', h1: '一张照片拍多次，谁先这么做？',
         sub: '多帧 HDR、夜景、星空、全景、360° 拼接、像素位移、景深合成、光场重对焦、人像虚化、多摄融合、长曝光模拟、语义调色、AI 消除、AI 降噪、AI 放大、照片三维重建、内容来源凭证……每项计算摄影技术最先出现在电脑软件、相机、手机还是车载安防里，又是怎么流到其他行业的。',
         panelCap: '每项计算摄影技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品（含电脑软件），不是第一次发表论文。与 ISP 时间线重合的条目年份一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'Computational Photography Timeline', eyebrow: 'Computational Photography · 1994–2025', h1: 'A photo is more than one exposure: who did it first?',
         sub: 'Multi-frame HDR, night mode, astro, panoramas, 360° stitching, pixel shift, focus stacking, light-field refocus, portrait bokeh, multi-camera fusion, simulated long exposure, semantic tone mapping, AI removal, AI denoise, AI upscaling, photogrammetry, content credentials: did each technique ship first in PC software, cameras, phones or cars/security, and how did it spread?',
         panelCap: 'Which industry shipped each computational-photography technique first.',
         foot: '"First" means first in a commercial product (including PC software), not first paper. Overlapping items match the ISP timeline; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('comp');
