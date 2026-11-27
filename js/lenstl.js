/* 镜头 / 光学技术首发时间线的数据：第 7 步抽屉小图和 lens-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入量产 / 商用产品。
   资料由子代理联网核对后整理（来源见 refs）；1988 Panasonic PV-460 光学防抖、超构透镜归入手机两处是人工复核后改的。 */
TIMELINES.lens = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '工业 / 科研', en: 'Industrial / Science'},
    {k: 'cam', zh: '相机 / 电影', en: 'Cameras / Cinema'},
  ],
  rows: [
    [1858, "cam", "虹膜式可变光圈（约） · C.C. Harrison 镜头（Harrison & Schnitzer 专利）", "Iris diaphragm (approx.) · C.C. Harrison lenses (Harrison & Schnitzer patent)", 1, "iris"],
    [1886, "ind", "复消色差物镜（萤石/特种玻璃） · 蔡司 Abbe Apochromat 显微镜物镜", "Apochromatic objective (fluorite/special glass) · Zeiss Abbe Apochromat microscope objective", 1, "lowd"],
    [1923, "ind", "180 度鱼眼 · Hill Sky Lens 云层相机", "180-degree fisheye · Hill Sky Lens cloud camera", 1, "fish"],
    [1932, "cam", "电影变焦镜头 · Bell & Howell Cooke Varo 40-120mm", "Cine zoom lens · Bell & Howell Cooke Varo 40-120mm", 1, "zoom"],
    [1938, "ind", "单层增透镀膜 · 蔡司 T 镀膜军用光学", "Single-layer AR coating · Zeiss T-coated military optics", 1, "coat"],
    [1940, "cam", "单层增透镀膜 · 蔡司 Biotar / Sonnar 镀膜镜头公开上市", "Single-layer AR coating · Zeiss coated Biotar / Sonnar lenses on public market", 0, "coat"],
    [1956, "cam", "量产非球面镜片 · Elgeet Golden Navitar 12mm f/1.2（16mm 电影镜头）", "Mass-produced aspherical element · Elgeet Golden Navitar 12mm f/1.2 (16mm cine)", 1, "asph"],
    [1959, "cam", "35mm 静态相机变焦 · Voigtländer Zoomar 36-82mm", "35mm still-camera zoom · Voigtländer Zoomar 36-82mm", 2, "zoom"],
    [1962, "cam", "35mm 量产鱼眼 · Fisheye-Nikkor 8mm f/8", "Mass-produced 35mm fisheye · Fisheye-Nikkor 8mm f/8", 0, "fish"],
    [1966, "cam", "35mm 量产非球面 · Leica Noctilux 50mm f/1.2", "First 35mm still lens with aspherics · Leica Noctilux 50mm f/1.2", 2, "asph"],
    [1969, "cam", "合成萤石镜片 · Canon FL-F 300mm f/5.6", "Synthetic fluorite elements · Canon FL-F 300mm f/5.6", 0, "lowd"],
    [1971, "cam", "多层镀膜 · Pentax SMC Takumar", "Multi-layer coating · Pentax Super-Multi-Coated Takumar", 2, "coat"],
    [1972, "cam", "ED 超低色散玻璃 · Nikkor-H 300mm f/2.8", "ED extra-low-dispersion glass · Nikkor-H 300mm f/2.8", 2, "lowd"],
    [1977, "cam", "被动式自动对焦 · Konica C35 AF", "Passive autofocus · Konica C35 AF", 1, "af"],
    [1982, "ind", "衍射光栅三光束拾音头 · Sony CDP-101 CD 机", "Diffraction-grating three-beam pickup · Sony CDP-101 CD player", 1, "diff"],
    [1982, "cam", "模压玻璃非球面 · Kodak Disc 相机", "Molded glass aspheric · Kodak Disc camera", 2, "asph"],
    [1987, "cam", "环形超声波对焦马达 · Canon EF 300mm f/2.8L USM", "Ring-type ultrasonic AF motor · Canon EF 300mm f/2.8L USM", 2, "af"],
    [1988, "cam", "光学防抖 · Panasonic PV-460 摄像机", "Optical image stabilization · Panasonic PV-460 camcorder", 1, "ois"],
    [1994, "cam", "镜片位移光学防抖 · Nikon Zoom-Touch 105 VR", "Lens-shift optical stabilization · Nikon Zoom-Touch 105 VR", 2, "ois"],
    [1995, "cam", "可换镜头光学防抖 · Canon EF 75-300mm IS USM", "Interchangeable-lens stabilizer · Canon EF 75-300mm IS USM", 2, "ois"],
    [1999, "cam", "切趾滤镜 STF · Minolta STF 135mm f/2.8 T4.5", "Apodization filter (STF) · Minolta STF 135mm f/2.8 T4.5", 1, "apod"],
    [2001, "cam", "多层衍射光学元件 DO · Canon EF 400mm f/4 DO IS", "Multi-layer diffractive optic · Canon EF 400mm f/4 DO IS", 0, "diff"],
    [2002, "cam", "潜望式折叠变焦 · Minolta DiMAGE X", "Periscope folded zoom · Minolta DiMAGE X", 1, "fold"],
    [2003, "cam", "传感器位移防抖 · Minolta DiMAGE A1", "Sensor-shift stabilization · Minolta DiMAGE A1", 1, "ibis"],
    [2003, "phone", "手机自动对焦 · NTT DoCoMo P505iS", "Autofocus camera phone · NTT DoCoMo P505iS", 0, "af"],
    [2004, "phone", "手机光学变焦 · Sharp V602SH", "Optical zoom in a phone · Sharp V602SH", 0, "zoom"],
    [2005, "cam", "纳米结晶镀膜 · AF-S VR Nikkor 300mm f/2.8G", "Nano Crystal Coat · AF-S VR Nikkor 300mm f/2.8G", 1, "nano"],
    [2006, "ind", "电润湿液体镜头 · Varioptic Arctic 320", "Electrowetting liquid lens · Varioptic Arctic 320", 1, "liquid"],
    [2007, "auto", "四路超广角环视 · Nissan Around View Monitor", "Four ultra-wide surround cameras · Nissan Around View Monitor", 0, "fish"],
    [2008, "cam", "亚波长结构镀膜 SWC · Canon EF 24mm f/1.4L II", "Subwavelength Structure Coating · Canon EF 24mm f/1.4L II", 2, "nano"],
    [2008, "phone", "手机可变光圈 · Motorola ZN5", "Variable aperture in a phone · Motorola ZN5", 0, "iris"],
    [2008, "auto", "360 度半球监控 · Mobotix Q22", "360-degree hemispheric surveillance · Mobotix Q22", 2, "fish"],
    [2009, "phone", "晶圆级光学模组 · OmniVision CameraCube", "Wafer-level optics module · OmniVision CameraCube", 1, "wlo"],
    [2009, "ind", "纳米结晶镀膜 · Nikon Lambda S 显微镜物镜", "Nano Crystal Coat · Nikon Lambda S microscope objectives", 0, "nano"],
    [2011, "phone", "五片式塑料非球面镜组 · iPhone 4S", "Five-element plastic aspheric lens · iPhone 4S", 0, "asph"],
    [2012, "phone", "手机光学防抖 · Nokia Lumia 920", "Optical stabilization in a phone · Nokia Lumia 920", 0, "ois"],
    [2014, "cam", "切趾滤镜 APD · Fujifilm XF56mm F1.2 R APD", "Apodization filter (APD) · Fujifilm XF56mm F1.2 R APD", 2, "apod"],
    [2015, "cam", "相位菲涅尔镜片 PF · Nikon 300mm f/4E PF ED VR", "Phase Fresnel element · Nikon 300mm f/4E PF ED VR", 2, "diff"],
    [2016, "phone", "潜望式 3 倍光学变焦 · ASUS ZenFone Zoom", "Periscope 3x optical zoom · ASUS ZenFone Zoom", 0, "fold"],
    [2016, "ind", "液体镜头自动对焦读码器 · Microscan MicroHAWK", "Liquid-lens autofocus barcode reader · Microscan MicroHAWK", 2, "liquid"],
    [2016, "phone", "135 度超广角副摄 · LG G5", "135-degree ultra-wide camera · LG G5", 0, "fish"],
    [2017, "phone", "衍射点阵投射 DOE · iPhone X Face ID", "Diffractive dot projector · iPhone X Face ID", 0, "diff"],
    [2017, "cam", "全画幅自动对焦切趾镜头 · Sony FE 100mm F2.8 STF GM", "Full-frame autofocus apodization lens · Sony FE 100mm F2.8 STF GM", 2, "apod"],
    [2018, "phone", "双光圈 f/1.5 与 f/2.4 · Samsung Galaxy S9", "Dual aperture f/1.5 and f/2.4 · Samsung Galaxy S9", 2, "iris"],
    [2019, "phone", "潜望式 5 倍长焦 · Huawei P30 Pro", "Periscope 5x telephoto · Huawei P30 Pro", 2, "fold"],
    [2019, "ind", "晶圆级医用微型相机 · OmniVision OVM6948", "Wafer-level medical micro camera · OmniVision OVM6948", 0, "wlo"],
    [2020, "phone", "微云台防抖 · vivo X50 Pro", "Micro-gimbal stabilization · vivo X50 Pro", 2, "ois"],
    [2020, "phone", "传感器位移防抖 · iPhone 12 Pro Max", "Sensor-shift stabilization · iPhone 12 Pro Max", 0, "ibis"],
    [2020, "auto", "车规晶圆级相机 · OmniVision OVM9284 驾驶员监测", "Automotive wafer-level camera · OmniVision OVM9284 driver monitoring", 0, "wlo"],
    [2021, "phone", "手机液体镜头 · Xiaomi Mi MIX Fold", "Liquid lens in a phone · Xiaomi Mi MIX Fold", 0, "liquid"],
    [2022, "phone", "超表面平面光学 · ST VL53L8 ToF 传感器（Metalenz）", "Metasurface flat optics · ST VL53L8 ToF sensor (Metalenz)", 1, "meta"],
    [2022, "phone", "ALD 原子层沉积增透膜 · Xiaomi 12S Ultra", "ALD anti-reflection coating · Xiaomi 12S Ultra", 0, "coat"],
    [2022, "phone", "连续光学变焦长焦 · Sony Xperia 1 IV", "Continuous optical zoom telephoto · Sony Xperia 1 IV", 2, "zoom"],
    [2023, "phone", "四重反射棱镜长焦 · iPhone 15 Pro Max", "Tetraprism telephoto · iPhone 15 Pro Max", 2, "fold"],
    [2024, "phone", "无级可变光圈 · Xiaomi 14 Ultra", "Stepless variable aperture · Xiaomi 14 Ultra", 2, "iris"],
  ],
  desc: {
      "lowd": [
          "用萤石或超低色散玻璃把不同颜色的光聚到同一点，消除长焦与高倍镜下的彩边。",
          "Fluorite or extra-low-dispersion glass brings all colours to one focus, removing colour fringing in telephotos and microscopes."
      ],
      "coat": [
          "在镜片表面镀上干涉薄膜，减少反射、提高透光，压低眩光和鬼影。",
          "Thin interference films on lens surfaces cut reflections, raise transmission and suppress flare and ghosts."
      ],
      "nano": [
          "用比光波长更小的纳米颗粒或楔形结构做渐变折射率层，大角度入射光也几乎不反射。",
          "Nanoparticles or wedge structures smaller than a wavelength form a graded-index layer that barely reflects even steep-angle light."
      ],
      "asph": [
          "非球面曲面一片就能校正球差和畸变，让镜头更少片、更大光圈、更小巧。",
          "An aspherical surface corrects spherical aberration and distortion in one element, enabling fewer, faster, smaller lenses."
      ],
      "zoom": [
          "前后移动多组镜片改变焦距、同时保持合焦，一支镜头就能覆盖从广角到长焦的取景范围。",
          "Moving lens groups change focal length while holding focus, so one lens spans wide to tele."
      ],
      "af": [
          "测距后由马达驱动镜组自动合焦，从被动测距发展到超声波马达和手机音圈马达。",
          "Distance sensing plus a motor moves the focus group automatically, from passive rangefinding to ultrasonic and voice-coil motors."
      ],
      "ois": [
          "陀螺仪检测抖动，驱动镜组反向平移抵消手抖，让慢门和长焦也能手持清晰。",
          "Gyros detect shake and shift a lens group to cancel it, keeping slow shutters and telephotos sharp handheld."
      ],
      "ibis": [
          "不动镜片而让传感器本身浮动补偿抖动，任何镜头都能获得防抖。",
          "The sensor itself floats to cancel shake instead of a lens group, stabilizing any lens."
      ],
      "diff": [
          "用微结构衍射而非折射偏折光线，色散方向与玻璃相反，可大幅缩短长焦或分束投射。",
          "Microstructures bend light by diffraction with dispersion opposite to glass, shortening telephotos or splitting beams."
      ],
      "fold": [
          "用棱镜把光路转 90 度横放镜组，让长焦和变焦塞进很薄的机身。",
          "A prism turns the light path 90 degrees so long or zoom optics lie flat inside a thin body."
      ],
      "iris": [
          "多叶片光圈可调进光孔径，控制曝光与景深，手机也逐步引入机械可变光圈。",
          "A multi-blade iris adjusts the aperture to control exposure and depth of field, now arriving in phones as mechanical apertures."
      ],
      "liquid": [
          "靠电压或马达改变液体界面曲率来变焦对焦，无需移动镜组，响应快、寿命长。",
          "Voltage or a motor reshapes a liquid interface to change focus with no moving lens group, fast and durable."
      ],
      "meta": [
          "在平面上刻出亚波长纳米柱阵列来操控光的相位，一片平板替代多片曲面镜。",
          "Subwavelength nanopillar arrays on a flat surface control phase, replacing several curved elements with one flat chip."
      ],
      "apod": [
          "在光圈附近加一片中心透明、边缘渐暗的滤镜，让焦外虚化边缘柔和如奶油。",
          "A filter clear at centre and darker toward the edge sits near the aperture, giving soft, creamy out-of-focus rendering."
      ],
      "fish": [
          "用强桶形畸变把 180 度甚至更大视场压进画面，从天空观测走向车载环视和监控。",
          "Strong barrel distortion squeezes 180 degrees or more into the frame, from sky survey to car surround view and surveillance."
      ],
      "wlo": [
          "像做芯片一样在整片晶圆上批量复制微透镜再切割堆叠，成本低、体积极小。",
          "Micro-lenses are replicated across a whole wafer then diced and stacked like chips, making tiny, cheap cameras."
      ]
  },
  refs: [
      {
          "t": "蔡司显微镜历史",
          "u": "https://www.zeiss.com/corporate/en/about-us/past/history/technological-milestones/microscopy.html"
      },
      {
          "t": "佳能萤石镜头",
          "u": "https://global.canon/en/c-museum/special/exhibition2.html"
      },
      {
          "t": "尼克尔千夜一夜 ED",
          "u": "https://imaging.nikon.com/history/story/0011/index.htm"
      },
      {
          "t": "Smakula 与增透膜",
          "u": "https://en.wikipedia.org/wiki/Alexander_Smakula"
      },
      {
          "t": "Pentax SMC",
          "u": "https://en.wikipedia.org/wiki/Pentax_(lens)"
      },
      {
          "t": "小米 ALD 镀膜",
          "u": "https://beneq.com/en/markets/optical-coatings/camera-lens-coating/"
      },
      {
          "t": "尼康纳米结晶镀膜",
          "u": "https://www.nikon.com/about/technology/stories/2002_nanocrystalcoat/"
      },
      {
          "t": "尼康 300mm VR 新闻稿",
          "u": "https://www.nikonusa.com/press-room/nikon-steadies-the-action-with"
      },
      {
          "t": "佳能 SWC 新闻稿",
          "u": "https://global.canon/en/news/2008/sep17e.html"
      },
      {
          "t": "尼康显微物镜 NCC",
          "u": "https://www.microscope.healthcare.nikon.com/about/news/nikon-instruments-introduces-new-high-performance-objectives-with-nano-crystal-coat-technology"
      },
      {
          "t": "Leica Noctilux 50 周年",
          "u": "https://leica-camera.com/en-US/Company/Press-Centre/Press-Releases/Press-Releases-2016/Press-Release-Leica-Noctilux-the-%E2%80%98Light-Giants%E2%80%99-have-turned-50-%E2%80%93-and-are-as-young-as-ever-before"
      },
      {
          "t": "Kodak Disc",
          "u": "https://en.wikipedia.org/wiki/Disc_film"
      },
      {
          "t": "iPhone 4S 新闻稿",
          "u": "https://www.apple.com/newsroom/2011/10/04Apple-Launches-iPhone-4S-iOS-5-iCloud/"
      },
      {
          "t": "Cooke Varo 变焦史",
          "u": "https://www.fdtimes.com/2023/03/15/cooke-varotal-zoom-lens-history/"
      },
      {
          "t": "Zoomar 镜头",
          "u": "https://en.wikipedia.org/wiki/Zoomar_lens"
      },
      {
          "t": "首部光学变焦手机",
          "u": "https://www.gsmarena.com/the_first_optical_zoom_camera_phone-news-43.php"
      },
      {
          "t": "Xperia 1 IV 连续变焦",
          "u": "https://www.sony.eu/presscentre/sonys-new-xperia-1-iv-is-a-powerhouse-in-content-creation-with-the-worlds-first-true-optical-zoom-lens-and-more"
      },
      {
          "t": "Konica C35 AF",
          "u": "https://en.wikipedia.org/wiki/Konica_C35_AF"
      },
      {
          "t": "佳能环形 USM",
          "u": "https://global.canon/en/c-museum/product/ef270.html"
      },
      {
          "t": "P505iS 新闻稿",
          "u": "https://www.docomo.ne.jp/english/info/media_center/pr/2003/001119.html"
      },
      {
          "t": "尼康 1990 年代产品史",
          "u": "https://imaging.nikon.com/imaging/information/products_history/1990/"
      },
      {
          "t": "佳能 EF 75-300 IS",
          "u": "https://global.canon/en/c-museum/product/ef330.html"
      },
      {
          "t": "Lumia 920 PureView",
          "u": "https://blogs.windows.com/devices/2012/09/05/taking-pureview-to-the-next-level/"
      },
      {
          "t": "vivo X50 Pro 微云台",
          "u": "https://www.gsmarena.com/vivo_explains_x50_pros_gimbal_camera_stabilization_system_shows_off_results-news-43338.php"
      },
      {
          "t": "DiMAGE A1 防抖",
          "u": "https://www.dpreview.com/articles/0039274904/dimagea1"
      },
      {
          "t": "iPhone 12 Pro Max 位移防抖",
          "u": "https://www.gsmarena.com/iphone_12_pro_max_video_teardown_shows_what_sensor_shift_image_stabilization_is_all_about-news-46365.php"
      },
      {
          "t": "光学拾音头原理",
          "u": "https://repairfaq.org/sam/opickup.htm"
      },
      {
          "t": "Sony CDP-101",
          "u": "https://en.wikipedia.org/wiki/Sony_CDP-101"
      },
      {
          "t": "佳能 EF 400 DO",
          "u": "https://global.canon/en/c-museum/product/ef366.html"
      },
      {
          "t": "尼康 300mm PF",
          "u": "https://www.nikon.com/news/2015/0106_lens_02.htm"
      },
      {
          "t": "iPhone X 点阵投射器",
          "u": "https://www.yolegroup.com/product/report/apple-iphone-x-infrared-dot-projector/"
      },
      {
          "t": "DiMAGE X 折叠光学",
          "u": "https://www.dpreview.com/reviews/minoltadimagex"
      },
      {
          "t": "ZenFone Zoom 上市",
          "u": "https://press.asus.com/news/press-releases/69"
      },
      {
          "t": "P30 Pro 折叠光学",
          "u": "https://laserfocusworld.com/optics/article/16566812/huawei-launches-5x-zoom-on-p30-smartphone-using-folded-optics"
      },
      {
          "t": "iPhone 15 Pro Max 四重棱镜",
          "u": "https://engadget.com/apple-used-tetraprisms-to-cram-a-120mm-lens-into-the-iphone-15-pro-max-195545915.html"
      },
      {
          "t": "光圈历史",
          "u": "https://en.wikipedia.org/wiki/Diaphragm_(optics)"
      },
      {
          "t": "Motorola ZN5",
          "u": "https://en.wikipedia.org/wiki/Motorola_Zine_ZN5"
      },
      {
          "t": "Galaxy S9 双光圈",
          "u": "https://petapixel.com/2018/02/26/samsung-galaxy-s9-s9-boast-first-dual-aperture-lens/"
      },
      {
          "t": "小米 14 Ultra 无级光圈",
          "u": "https://www.digitalcameraworld.com/news/xiaomi-14-ultra-launched-globally-with-leica-quad-camera-and-a-stepless-variable-aperture"
      },
      {
          "t": "Varioptic 首款液体镜头",
          "u": "https://optics.org/article/31500"
      },
      {
          "t": "Microscan 液体镜头读码器",
          "u": "https://www.vision-systems.com/cameras-accessories/article/16742333/microscan-barcode-readers-now-feature-liquid-lens-from-varioptic"
      },
      {
          "t": "Mi MIX Fold 液体镜头",
          "u": "https://petapixel.com/2021/03/30/the-first-smartphone-to-use-a-liquid-lens-is-the-xiaomi-mi-mix-fold"
      },
      {
          "t": "ST 与 Metalenz 超表面",
          "u": "https://www.optica-opn.org/home/industry/2022/june/metasurfaces_come_to_the_market/"
      },
      {
          "t": "Minolta STF 135mm",
          "u": "https://en.wikipedia.org/wiki/Minolta_STF_135mm_f/2.8_T4.5"
      },
      {
          "t": "Smooth Trans Focus",
          "u": "https://en.wikipedia.org/wiki/Smooth_Trans_Focus"
      },
      {
          "t": "鱼眼镜头",
          "u": "https://en.wikipedia.org/wiki/Fisheye_lens"
      },
      {
          "t": "尼克尔千夜一夜 鱼眼",
          "u": "https://imaging.nikon.com/history/story/0006/index.htm"
      },
      {
          "t": "日产环视影像",
          "u": "https://global.nissannews.com/en/releases/071012-01-e"
      },
      {
          "t": "Mobotix Q22",
          "u": "https://www.engadget.com/2008-07-29-mobotix-q22-security-camera-offers-360-degrees-of-vision.html"
      },
      {
          "t": "LG G5 广角",
          "u": "https://www.anandtech.com/show/10217/the-lg-g5-review/5"
      },
      {
          "t": "CameraCube 发布",
          "u": "https://image-sensors-world.blogspot.com/2009/02/omnivision-delivers-cameracube.html"
      },
      {
          "t": "OVM6948 世界纪录",
          "u": "https://www.ovt.com/press-releases/omnivision-announces-guinness-world-record-for-smallest-image-sensor-and-new-miniature-camera-module-for-disposable-medical-applications"
      },
      {
          "t": "OVM9284 车规晶圆级",
          "u": "https://www.ovt.com/press-releases/omnivision-unveils-worlds-first-automotive-wafer-level-camera-module-enabling-better-driver-monitoring-systems-in-more-vehicles/"
      },
      {
          "t": "IEEE 里程碑：1988 年首台带防抖的摄像机（Panasonic PV-460）",
          "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
      }
  ],
  el: 'lenstl', page: 'lens-timeline.html', histSrc: 'js/hist-lens.js',
  step: {n: 7, zh: '第 7 步：镜头里的每片镜片', en: 'Step 7: Every element in the lens'},
  text: {
    zh: {title: '镜头技术时间线', eyebrow: 'Lens & Optics · 1858–2024', h1: '镜头里的技术，谁先用上？',
         sub: '超低色散玻璃、非球面、镀膜、自动对焦、防抖、潜望、液体镜头、超构透镜……每项镜头技术最先出现在相机、手机、安防车载还是工业科研里，又是怎么流到其他行业的。',
         panelCap: '每项镜头 / 光学技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入量产或商用产品，不是第一次发表论文或专利。早期年份（如光圈叶片、镀膜）只能确定大致年代，标了「约」。'},
    en: {title: 'Lens Technology Timeline', eyebrow: 'Lens & Optics · 1858–2024', h1: 'Who used each lens technology first?',
         sub: 'Low-dispersion glass, aspherics, coatings, autofocus, stabilization, periscopes, liquid lenses, metalenses: did each one ship first in cameras, phones, security/automotive or industry/science, and how did it spread?',
         panelCap: 'Which industry shipped each lens / optics technology first.',
         foot: '"First" means first in a shipping or commercial product, not first paper or patent. Early dates (iris diaphragm, coating) are only known approximately and are marked "approx."'},
  },
};
renderTlPanel('lens');
