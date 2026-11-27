/* 计算摄影时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 comp 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：isp:night、isp:bokeh */
TIMELINES.comp.hist = {
 "pano": {
  "stages": [
   [
    1991,
    "idea",
    "Apple Advanced Technology Group 的陈申昌（Shenchang Eric Chen）与 Ian Small 构想用一张拼好的柱面全景图实现“原地环视”的虚拟环境，这就是后来的 QuickTime VR。",
    "At Apple's Advanced Technology Group, Shenchang Eric Chen and Ian Small conceived of navigating a virtual environment by looking around inside a stitched cylindrical panorama, the idea that became QuickTime VR.",
    [
     0
    ]
   ],
   [
    1995,
    "paper",
    "陈申昌在 SIGGRAPH '95 发表《QuickTime VR: an image-based approach to virtual environment navigation》，提出以拼接全景图代替 3D 建模来做环视浏览。",
    "Chen published \"QuickTime VR: an image-based approach to virtual environment navigation\" at SIGGRAPH '95, proposing stitched panoramas instead of 3D models for look-around viewing.",
    [
     0
    ]
   ],
   [
    1995,
    "mass",
    "Apple 随 QuickTime 2 正式推出 QuickTime VR，配套拼接工具把一圈照片合成可拖动浏览的全景，成为第一个大规模普及的全景拼接 / 浏览格式。",
    "Apple shipped QuickTime VR with QuickTime 2, with authoring tools that stitched a ring of photos into a draggable panorama, the first widely adopted panorama stitching and viewing format.",
    [
     0
    ]
   ],
   [
    2003,
    "paper",
    "UBC 的 Matthew Brown 与 David Lowe 在 ICCV 2003 发表《Recognising Panoramas》：用 SIFT 特征自动找出哪些照片属于同一全景并做 bundle adjustment 与多频段融合，无需人工排序，成果做成 AutoStitch 软件。",
    "Matthew Brown and David Lowe at UBC published \"Recognising Panoramas\" at ICCV 2003: SIFT features automatically find which photos belong to a panorama, followed by bundle adjustment and multi-band blending with no manual ordering; it became the AutoStitch software.",
    [
     1
    ]
   ],
   [
    2006,
    "mass",
    "Kodak EasyShare V570（CES 2006 发布的首款双镜头数码相机）用 23mm 超广角镜头拍三张，在机内自动拼成约 180° 全景，是早期的机内拼接。",
    "The Kodak EasyShare V570 (CES 2006, the first dual-lens digital camera) shot three frames with its 23mm ultra-wide lens and stitched them in-camera into a roughly 180° panorama, an early example of in-camera stitching.",
    [
     2
    ]
   ],
   [
    2007,
    "mass",
    "手机开始机内拼接：Samsung SGH-G800（2007 年 10 月发布）的全景模式自动连拍最多 6 张并在机内拼合，同期的 Sony Ericsson K850 用 3 张拼合。",
    "Phones began stitching on-device: the Samsung SGH-G800 (announced Oct 2007) auto-captured up to six frames in panorama mode and stitched them in the phone, while the contemporary Sony Ericsson K850 stitched three.",
    [
     3
    ]
   ],
   [
    2007,
    "mass",
    "Nissan 发布世界首个 Around View Monitor：车身前、后、两侧 4 颗 180° 超广角摄像头的画面实时投影、拼成鸟瞰图，2007 年 10 月底随日本新款 Elgrand 上市，随后用于 Infiniti EX35。",
    "Nissan introduced the world's first Around View Monitor: four 180° ultra-wide cameras on the front, rear and sides are projected and stitched in real time into a bird's-eye view; it debuted on the new Japanese Elgrand at the end of Oct 2007 and then on the Infiniti EX35.",
    [
     4
    ]
   ],
   [
    2009,
    "ver",
    "Sony 在 PMA 2009（3 月）发布 Cyber-shot DSC-HX1，首次加入 Sweep Panorama：按住快门横扫即可高速连拍并自动拼接，最大 224°；同年 8 月的 TX1 / WX1 把它带到卡片机（185° / 256°）。",
    "Sony unveiled the Cyber-shot DSC-HX1 at PMA 2009 (March) with the first Sweep Panorama: hold the shutter and sweep, and the camera bursts and stitches automatically, up to 224°; the TX1 / WX1 in August brought it to compacts (185° / 256°).",
    [
     5
    ]
   ],
   [
    2009,
    "end",
    "QuickTime VR 随 QuickTime 7 停止开发而在 2000 年代末淘汰，网页全景改用等距柱状投影（equirectangular）图片配合 Flash、后来的 WebGL 播放器。",
    "QuickTime VR faded out in the late 2000s when QuickTime 7 development ended; web panoramas moved to equirectangular images played back by Flash and later WebGL viewers.",
    [
     0
    ]
   ],
   [
    2012,
    "ver",
    "iOS 6（2012 年 9 月）给 iPhone 4S / iPhone 5 加入扫摄全景模式；此前 Android 4.0（2011）已内置全景，扫摄全景从此成为手机相机标配。",
    "iOS 6 (Sept 2012) added a sweep panorama mode to the iPhone 4S and iPhone 5, following Android 4.0's built-in panorama (2011); sweep panorama became standard in phone cameras.",
    [
     6
    ]
   ],
   [
    2019,
    "ver",
    "Range Rover Evoque 第二代（2018 年 11 月发布、2019 年上市）配备 ClearSight Ground View：用前格栅和两侧后视镜的 3 颗摄像头加历史帧拼出车头下方 180° 视野，实现“透明引擎盖”，号称世界首创。",
    "The second-generation Range Rover Evoque (revealed Nov 2018, on sale 2019) offered ClearSight Ground View: three cameras in the grille and door mirrors plus buffered frames render a 180° view under the bonnet, a \"transparent bonnet\" billed as a world first.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年全景拼接已是手机相机的基础模式和汽车 360° 环视的标准配置；车上的环视系统进一步做成 3D 环视、透明底盘 / 透明 A 柱，并把拼接结果直接交给泊车和低速自动驾驶算法使用。",
   "In 2026 panorama stitching is a basic phone camera mode and a standard feature of automotive 360° surround view; car systems have moved on to 3D surround view, transparent chassis and A-pillar views, and feed the stitched result to parking and low-speed driving algorithms."
  ],
  "replaced": [
   "拼接本身没有被淘汰，但单张扫摄全景的使用场景被手机超广角镜头和一次成像的 360° 相机分流；QuickTime VR 一类专有浏览格式已被等距柱状投影图片与 WebGL 播放器取代。",
   "Stitching itself is not obsolete, but sweep panoramas are partly displaced by phone ultra-wide lenses and one-shot 360° cameras; proprietary viewing formats like QuickTime VR were replaced by equirectangular images and WebGL viewers."
  ],
  "refs": [
   {
    "t": "QuickTime VR - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/QuickTime_VR"
   },
   {
    "t": "Brown & Lowe, Recognising Panoramas (ICCV 2003)",
    "u": "https://www.cs.ubc.ca/labs/lci/papers/docs2003/brown03.pdf"
   },
   {
    "t": "Kodak Unveils World's First Dual-Lens Digital Camera (phys.org, 2006)",
    "u": "https://phys.org/news/2006-01-kodak-unveils-worlds-dual-lens-digital.html"
   },
   {
    "t": "Samsung G800 review: panorama mode (GSMArena)",
    "u": "https://www.gsmarena.com/samsung_g800-review-197p5.php"
   },
   {
    "t": "Nissan to introduce world's first Around View Monitor (Nissan, 2007)",
    "u": "https://global.nissannews.com/en/releases/071012-01-e"
   },
   {
    "t": "Sony Spotlights Latest Cyber-shot Camera at PMA 2009 (Sony)",
    "u": "https://sony.mediaroom.com/2009-03-02-Sony-Spotlights-Latest-Cyber-shot-Camera-and-Other-New-Digital-Imaging-Products-at-PMA-2009"
   },
   {
    "t": "iOS 6 Brings Panoramic Camera to iPhone 4S (MacRumors)",
    "u": "https://www.macrumors.com/2012/09/19/ios-6-brings-panoramic-camera-to-iphone-4s/"
   },
   {
    "t": "New Range Rover Evoque: the all-seeing SUV (Land Rover Media)",
    "u": "https://media.landrover.com/new-range-rover-evoque-all-seeing-suv"
   }
  ]
 },
 "msr": {
  "stages": [
   [
    1984,
    "paper",
    "R. Y. Tsai 与 T. S. Huang 发表《Multi-frame image restoration and registration》，首次指出多张存在亚像素位移的欠采样图像可以合成出更高分辨率、去除混叠的图像，被视为多帧超分辨率的起点。",
    "R. Y. Tsai and T. S. Huang published \"Multi-frame image restoration and registration\", first showing that several undersampled frames with sub-pixel shifts can be fused into a higher-resolution, alias-free image; it is regarded as the start of multi-frame super-resolution.",
    [
     1
    ]
   ],
   [
    1990,
    "proto",
    "Jenoptik / Kontron 的 ProgRes 3012 显微镜相机用压电致动器移动传感器做 microscanning，多次曝光后拼成高达 4608×3480 的无插值图像，是最早商用的传感器位移高分辨率相机之一（约）。",
    "The Jenoptik / Kontron ProgRes 3012 microscope camera moved its sensor with piezo actuators (microscanning), combining exposures into images up to 4608×3480 without interpolation, one of the first commercial sensor-shift high-resolution cameras (approx.).",
    [
     0
    ]
   ],
   [
    1991,
    "paper",
    "Michal Irani 与 Shmuel Peleg 发表《Improving resolution by image registration》，提出迭代反投影方法，把配准后的多帧低分辨率图像重建为高分辨率图像。",
    "Michal Irani and Shmuel Peleg published \"Improving resolution by image registration\", introducing iterative back-projection to reconstruct a high-resolution image from registered low-resolution frames.",
    [
     1
    ]
   ],
   [
    1996,
    "corp",
    "Jenoptik 与瑞士 Sinar 合作，在 Photokina 1996 推出 Sinarcam 数字相机，把位移多拍带进专业摄影棚。",
    "Jenoptik partnered with Switzerland's Sinar, launching the Sinarcam digital camera at Photokina 1996 and bringing multi-shot capture into professional studios.",
    [
     0
    ]
   ],
   [
    1998,
    "mass",
    "Sinar 推出 multishot 数字后背：传感器每次移动一个像素、共拍 4 张，使每个像素都拿到完整 GRGB 颜色、免去 Bayer 插值和摩尔纹；后续机型加入半像素位移的 16-shot 模式提高分辨率。",
    "Sinar introduced multishot digital backs: the sensor moves one pixel at a time for four exposures so every pixel gets full GRGB colour without Bayer interpolation or moiré; later models added a 16-shot half-pixel mode for more resolution.",
    [
     2
    ]
   ],
   [
    2007,
    "ver",
    "Hasselblad 于 2007 年 10 月发布 H3DII-39MS，把 multi-shot 做进一体式中画幅机身；2011 年的 H4D-200MS 用 6 张偏移拍摄从 50MP 传感器得到 200MP 文件。",
    "Hasselblad announced the H3DII-39MS in Oct 2007, building multi-shot into an integrated medium-format body; the 2011 H4D-200MS used six offset exposures to make 200MP files from a 50MP sensor.",
    [
     3
    ]
   ],
   [
    2014,
    "corp",
    "OPPO Find 7 的 Super Zoom 模式连拍 10 张、挑出最好的 4 张合成 50MP 照片（传感器为 13MP 的 Sony IMX214），把多帧超分辨率带进手机。",
    "The OPPO Find 7's Super Zoom mode shot ten frames, picked the best four and merged them into a 50MP photo from a 13MP Sony IMX214 sensor, bringing multi-frame super-resolution to phones.",
    [
     4
    ]
   ],
   [
    2015,
    "mass",
    "Olympus OM-D E-M5 Mark II（2015 年 2 月）首次在可换镜头机身内做 High Res Shot：机身防抖单元以半像素步进移动传感器拍 8 张，输出 40MP JPEG / 64MP RAW，须上三脚架；同年 Pentax K-3 II 也加入 Pixel Shift Resolution。",
    "The Olympus OM-D E-M5 Mark II (Feb 2015) brought High Res Shot to an interchangeable-lens body: the IBIS unit moves the sensor in half-pixel steps for eight shots, giving 40MP JPEG / 64MP RAW, tripod required; the Pentax K-3 II added Pixel Shift Resolution the same year.",
    [
     5
    ]
   ],
   [
    2018,
    "ver",
    "Pentax K-1 Mark II（2018 年 2 月发布）推出 Dynamic Pixel Shift Resolution：开启防抖、利用手持时的细微晃动拍 4 张并对齐合成，第一次让位移多拍脱离三脚架。",
    "The Pentax K-1 Mark II (announced Feb 2018) introduced Dynamic Pixel Shift Resolution: with stabilisation on, it uses slight handheld movement across four frames and aligns them, the first sensor-shift multi-shot usable without a tripod.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "Google Pixel 3 的 Super Res Zoom 利用自然手抖得到的亚像素错位，从一串 RAW 帧直接合成完整 RGB 图像、替代去马赛克；Wronski、Levoy、Milanfar 等人于 SIGGRAPH 2019 发表《Handheld Multi-Frame Super-Resolution》，它也是 Night Sight 的默认合并方法。",
    "Google Pixel 3's Super Res Zoom uses sub-pixel offsets from natural hand tremor to build a full RGB image straight from a RAW burst, replacing demosaicing; Wronski, Levoy, Milanfar et al. published \"Handheld Multi-Frame Super-Resolution\" at SIGGRAPH 2019, and it is also Night Sight's default merge.",
    [
     7
    ]
   ],
   [
    2019,
    "ver",
    "Olympus OM-D E-M1X（2019 年 1 月）加入手持 High Res Shot：连拍 16 张合成 50MP，三脚架模式 80MP；同年 Sony α7R IV 支持 16 张合成 240MP。",
    "The Olympus OM-D E-M1X (Jan 2019) added handheld High Res Shot, merging 16 frames into 50MP (80MP on a tripod); the same year the Sony α7R IV offered 16-shot 240MP composites.",
    [
     0
    ]
   ],
   [
    2023,
    "ver",
    "Canon EOS R5 加入 High Resolution 模式，传感器位移拍 9 张合成 400MP；Nikon Z8 / Zf 的 Pixel Shift 最多 32 张，位移多拍已成为高端机身的常见功能。",
    "The Canon EOS R5 gained a High Resolution mode shifting the sensor for nine frames to make 400MP; Nikon's Z8 / Zf Pixel Shift uses up to 32 frames, making sensor-shift multi-shot a common high-end feature.",
    [
     0
    ]
   ]
  ],
  "now": [
   "2026 年传感器位移多拍是中高端无反（Olympus / OM System、Panasonic、Sony、Canon、Nikon、Fujifilm GFX、Pentax）的常见功能，大多支持手持模式和运动补偿；手机侧多帧超分辨率已融进每次拍照的默认合成流程和数码变焦。",
   "In 2026 sensor-shift multi-shot is common on mid-to-high-end mirrorless bodies (Olympus / OM System, Panasonic, Sony, Canon, Nikon, Fujifilm GFX, Pentax), most with handheld modes and motion correction; on phones multi-frame super-resolution is built into the default merge and digital zoom of every shot."
  ],
  "replaced": [
   "专用多拍数字后背已基本被高像素单拍传感器和机身内位移多拍取代；手机侧的经典多帧超分辨率正与神经网络单帧 / 多帧超分辨率结合，后者在运动场景中更稳健。",
   "Dedicated multi-shot digital backs have largely given way to high-resolution single-shot sensors and in-body sensor-shift modes; on phones classical multi-frame super-resolution is merging with neural single- and multi-frame super-resolution, which copes better with motion."
  ],
  "refs": [
   {
    "t": "Pixel shift - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pixel_shift"
   },
   {
    "t": "Farsiu, Robinson, Elad, Milanfar: Advances and Challenges in Super-Resolution",
    "u": "https://users.soe.ucsc.edu/~milanfar/publications/journal/SR-challengesIJIST.pdf"
   },
   {
    "t": "Sinar the Multishot Pioneer (PROFIFOTO 2018, Sinar)",
    "u": "https://sinar.swiss/assets/Uploads/5-PROFITOTO-Article-1-2-18-Sinar-Multishot.pdf"
   },
   {
    "t": "Hasselblad announces new H3DII-39MS Multi-Shot DSLR (DCViews)",
    "u": "https://web.archive.org/web/20080411121802/http://www.dcviews.com/press/Hasselblad-H3DII-39MS.htm"
   },
   {
    "t": "Introducing the Oppo Find 7: The World's First Smartphone That Takes 50MP Photos (PetaPixel)",
    "u": "https://petapixel.com/2014/03/20/introducing-oppo-find-7-worlds-first-smartphone-take-50mp-photos"
   },
   {
    "t": "Exploring the E-M5 II's High Resolution mode (Imaging Resource)",
    "u": "https://imaging-resource.com/PRODS/olympus-e-m5-ii/olympus-e-m5-iiTECH2.HTM"
   },
   {
    "t": "Pentax K-1 Mark II Offers ISO 819200 and Handheld Pixel Shift (PetaPixel)",
    "u": "https://petapixel.com/2018/02/21/pentax-k-1-mark-ii-offers-iso-819200-handheld-pixel-shift"
   },
   {
    "t": "Handheld Multi-Frame Super-Resolution (Google Research)",
    "u": "https://research.google/pubs/handheld-multi-frame-super-resolution/"
   }
  ]
 },
 "fstack": {
  "stages": [
   [
    1983,
    "paper",
    "J. Pieper 与 A. Korpel 在 Applied Optics 22 卷 10 期发表《Image processing for extended depth of field》：对一组对焦在不同深度的图像设定清晰度判据、挑出合焦部分合成一张，是景深合成最早的描述之一。",
    "J. Pieper and A. Korpel published \"Image processing for extended depth of field\" in Applied Optics vol. 22 no. 10: a sharpness criterion selects the in-focus segments from images focused at different depths and composites them, one of the earliest descriptions of focus stacking.",
    [
     0
    ]
   ],
   [
    1995,
    "rival",
    "University of Colorado Boulder 的 Edward Dowski 与导师 W. Thomas Cathey 提出 wavefront coding（1995 年论文发表于 Applied Optics）：在光路中加相位板让点扩散函数几乎不随失焦变化，再用数字复原一次曝光得到大景深，是与多张景深合成竞争的单拍路线。",
    "Edward Dowski and his adviser W. Thomas Cathey at the University of Colorado Boulder pioneered wavefront coding (paper in Applied Optics, 1995): a phase mask makes the point-spread function nearly invariant to misfocus, and digital restoration then gives extended depth of field in a single exposure, a single-shot rival to multi-image stacking.",
    [
     3
    ]
   ],
   [
    1997,
    "mass",
    "英国剑桥 Synoptics 集团推出 Windows 显微图像软件 Montage（后为 Syncroscopy Auto-Montage），把在不同高度对焦的显微图像中清晰部分合成一张全清晰图，并配电动 Z 轴步进器自动采集（约）。",
    "Synoptics of Cambridge, UK, released the Windows microscopy package Montage (later Syncroscopy Auto-Montage), compositing the sharp parts of images focused at different heights into one fully focused image, later with a motorised Z-stepper for automatic capture (approx.).",
    [
     1
    ]
   ],
   [
    2003,
    "mass",
    "Helicon Soft 发布 Helicon Focus，面向微距、风光和显微摄影的通用景深合成软件，支持 RAW 与多种合成算法，后来成为最常用的商业工具之一。",
    "Helicon Soft released Helicon Focus, general focus-stacking software for macro, landscape and photomicrography with RAW support and several merge algorithms; it became one of the most widely used commercial tools.",
    [
     2
    ]
   ],
   [
    2005,
    "corp",
    "Cathey、Dowski 与 Merc Mercure 创办的 CDM Optics 于 2005 年被 OmniVision 收购，后者推出基于 wavefront coding 的 TrueFocus 手机传感器，但单拍扩展景深始终没有取代多张合成。",
    "CDM Optics, founded by Cathey, Dowski and Merc Mercure, was acquired by OmniVision in 2005, which released wavefront-coding TrueFocus mobile sensors, though single-shot extended depth never displaced multi-image stacking.",
    [
     3
    ]
   ],
   [
    2015,
    "mass",
    "Olympus Stylus Tough TG-4（2015 年 5 月上市）在显微模式中提供机内 Focus Stacking：自动从近到远移动对焦连拍 8 张并在机内合成，是首台无需电脑即可合成景深的卡片机。",
    "The Olympus Stylus Tough TG-4 (on sale May 2015) offered in-camera Focus Stacking in its microscope mode, shifting focus near-to-far over eight shots and merging them in the camera, the first compact to stack without a computer.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "Olympus OM-D E-M1 固件 4.0（2015 年 11 月 26 日）加入 Focus Bracketing 和 Focus Stacking，连拍 8 张自动合成 JPEG，把机内景深合成带到可换镜头相机。",
    "Olympus OM-D E-M1 firmware 4.0 (26 Nov 2015) added Focus Bracketing and Focus Stacking, merging eight frames into a JPEG automatically and bringing in-camera stacking to an interchangeable-lens camera.",
    [
     5
    ]
   ],
   [
    2015,
    "rival",
    "Panasonic 同期以固件推出 Post Focus（2015 年 11 月，G7 / GX8 / FZ330）：用 4K Photo 连拍记录每个对焦距离，拍后再选焦点；2016 年 9 月 GX85 固件 1.1 在此基础上加入机内 Focus Stacking。",
    "Panasonic took a parallel route with Post Focus firmware (Nov 2015, G7 / GX8 / FZ330): 4K Photo bursts record every focus distance so focus is chosen afterwards; GX85 firmware 1.1 (Sept 2016) built in-camera Focus Stacking on top of it.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "Canon EOS R7 / R10 在 Focus Bracketing 菜单中加入 Depth composite，机内合成 JPEG / HEIF 并保留原始帧，可自动裁边；机内景深合成成为主流品牌的常见功能。",
    "The Canon EOS R7 / R10 added Depth composite to the Focus Bracketing menu, producing JPEG / HEIF composites in camera while keeping source frames, with automatic cropping; in-camera stacking became common across major brands.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年景深合成在微距和显微摄影中仍是标准做法：桌面端有 Helicon Focus、Zerene Stacker 和 Photoshop，相机端 OM System、Panasonic、Canon、Nikon、Fujifilm 等提供焦点包围或机内合成，显微镜厂商则把自动 Z 轴扫描和 EDF 合成做进采集软件。",
   "In 2026 focus stacking is still standard practice in macro and microscopy: Helicon Focus, Zerene Stacker and Photoshop on the desktop; focus bracketing or in-camera stacking from OM System, Panasonic, Canon, Nikon, Fujifilm and others; and automatic Z-scanning with EDF merging built into microscope capture software."
  ],
  "replaced": [
   "景深合成没有被取代；单次曝光扩展景深的方案（Dowski 与 Cathey 1995 年提出的 wavefront coding、光场相机）因牺牲分辨率或画质只用在特定场合，手机上的“全清晰”主要靠小传感器本身的大景深和人像模式的反向虚化。",
   "Focus stacking has not been replaced; single-shot extended-depth approaches (wavefront coding, proposed by Dowski and Cathey in 1995, and light-field cameras) trade away resolution or quality and stay niche, while phones get near-total sharpness mainly from small sensors' inherent depth of field."
  ],
  "refs": [
   {
    "t": "Pieper & Korpel, Image processing for extended depth of field, Applied Optics 22(10), 1983 (DOI)",
    "u": "https://www.doi.org/10.1364/AO.22.001449"
   },
   {
    "t": "Software fixes depth of field (Vision Systems Design, 1997)",
    "u": "https://www.vision-systems.com/home/article/16737258/software-fixes-depth-of-field-a-windowsbased-imageprocessing-package-is-designed-to-overcome-the"
   },
   {
    "t": "Helicon Focus - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Helicon_Focus"
   },
   {
    "t": "Wavefront coding - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Wavefront_coding"
   },
   {
    "t": "Olympus Stylus Tough TG-4 (Photography Blog)",
    "u": "https://www.photographyblog.com/news/olympus_stylus_tough_tg_4"
   },
   {
    "t": "Olympus E-M1 in-camera focus stacking via firmware v4.0 (Imaging Resource)",
    "u": "https://www.imaging-resource.com/news/2015/12/05/rejoice-om-d-e-m1-shooters-for-focus-stacking-is-here-via-new-firmware-v4.0"
   },
   {
    "t": "Panasonic Announce 'Post Focus' Firmware Update (Photography Blog)",
    "u": "https://www.photographyblog.com/news/panasonic_announce_post_focus_firmware_update"
   },
   {
    "t": "A beginner's guide to focus stacking (Canon)",
    "u": "https://www.canon.co.uk/get-inspired/tips-and-techniques/focus-stacking-beginners/"
   }
  ]
 },
 "hdr": {
  "stages": [
   [
    1850,
    "idea",
    "1850 年代法国摄影师 Gustave Le Gray 已用两张不同曝光的底片分别记录天空和海面再合印，是用多次曝光表现超大亮度范围的最早实践（约）。",
    "In the 1850s the French photographer Gustave Le Gray printed sky and sea from two differently exposed negatives, the earliest practice of using several exposures to render an extreme luminance range (approx.).",
    [
     0
    ]
   ],
   [
    1995,
    "paper",
    "MIT Media Lab 的 Steve Mann 于 1993 年提出、1995 年与 Rosalind Picard 发表《Being 'undigital' with digital cameras》，给出同一场景不同曝光照片合成扩展动态范围图像的数学理论。",
    "Steve Mann at the MIT Media Lab introduced the idea in 1993 and in 1995 published with Rosalind Picard \"Being 'undigital' with digital cameras\", a mathematical theory for combining differently exposed photos of a scene into an extended-range image.",
    [
     0
    ]
   ],
   [
    1997,
    "paper",
    "UC Berkeley 的 Paul Debevec 与 Jitendra Malik 在 SIGGRAPH 97 发表《Recovering High Dynamic Range Radiance Maps from Photographs》：先从包围曝光中恢复相机响应曲线，再合成与真实辐亮度成正比的 HDR 辐射图，成为此后 HDR 合成的标准方法。",
    "Paul Debevec and Jitendra Malik at UC Berkeley published \"Recovering High Dynamic Range Radiance Maps from Photographs\" at SIGGRAPH 97: recover the camera response curve from bracketed exposures, then merge them into a radiance map proportional to true scene radiance, the standard HDR merge method thereafter.",
    [
     1
    ]
   ],
   [
    2003,
    "mass",
    "HDRsoft 于 2003 年 2 月推出 Photomatix，自称第一款面向摄影师的 HDR 合成与色调映射软件，带动了 2000 年代中期的 HDR 摄影潮流。",
    "HDRsoft launched Photomatix in Feb 2003, billed as the first HDR merging and tone-mapping application for photographers, fuelling the mid-2000s HDR photography boom.",
    [
     2
    ]
   ],
   [
    2005,
    "ver",
    "Adobe Photoshop CS2（2005 年 4 月）加入 Merge to HDR、32 位浮点图像和 HDR 色调映射，HDR 合成进入主流修图软件。",
    "Adobe Photoshop CS2 (Apr 2005) added Merge to HDR, 32-bit floating-point images and HDR tone mapping, bringing HDR merging into mainstream editing software.",
    [
     0
    ]
   ],
   [
    2009,
    "mass",
    "Ricoh CX1（2009 年 2 月 19 日发布）的 Dynamic Range Double Shot 模式高速连拍两张不同曝光并机内合成，动态范围最高约 12 EV，是较早的机内多曝光合成卡片机。",
    "The Ricoh CX1 (announced 19 Feb 2009) had a Dynamic Range Double Shot mode that fired two differently exposed frames at high speed and merged them in camera for up to about 12 EV, an early compact with in-camera multi-exposure merging.",
    [
     3
    ]
   ],
   [
    2009,
    "ver",
    "Pentax K-7（2009 年 5 月 20 日发布）成为第一台带机内 HDR 的单反：三张不同曝光合成一张 JPEG，但只能用于 JPEG 输出、需三脚架。",
    "The Pentax K-7 (announced 20 May 2009) became the first DSLR with in-camera HDR, merging three exposures into one JPEG, JPEG-only and best on a tripod.",
    [
     4
    ]
   ],
   [
    2010,
    "mass",
    "Apple 在 2010 年 9 月的 iOS 4.1 给 iPhone 4 加入 HDR 开关：快速连拍正常、过曝、欠曝三张并自动合成，HDR 从此成为手机相机的常见功能。",
    "Apple's iOS 4.1 (Sept 2010) added an HDR toggle to the iPhone 4 that shot normal, over- and under-exposed frames in quick succession and merged them, making HDR a common phone camera feature.",
    [
     5
    ]
   ],
   [
    2013,
    "ver",
    "Google 的 HDR+ 随 Nexus 5 推出：不再做包围曝光，而是连拍一串同样偏短曝光的 RAW 帧，对齐后合并降噪再色调映射，避免重影；Hasinoff、Levoy 等人于 SIGGRAPH Asia 2016 发表完整论文。",
    "Google's HDR+ launched with the Nexus 5: instead of bracketing, it bursts equally short-exposed RAW frames, aligns and merges them for denoising and tone maps the result, avoiding ghosting; Hasinoff, Levoy et al. published the full paper at SIGGRAPH Asia 2016.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Qualcomm 发布 Snapdragon 888，可在手机上做 4K 的计算多曝光 HDR 视频，多帧 HDR 从照片扩展到视频。",
    "Qualcomm announced the Snapdragon 888, capable of computational multi-exposure HDR video at 4K on a phone, extending multi-frame HDR from stills to video.",
    [
     0
    ]
   ],
   [
    2023,
    "ver",
    "Android 14 加入 Ultra HDR（JPEG_R）：在兼容 SDR 的 JPEG 里附带 gain map，HDR 屏幕可显示合成后的高光；之后统一到 ISO 21496-1，Android 15 同时写入两种格式以兼容 Apple 设备。",
    "Android 14 added Ultra HDR (JPEG_R): an SDR-compatible JPEG carries a gain map so HDR screens can show the merged highlights; it later converged on ISO 21496-1, with Android 15 writing both formats for compatibility with Apple devices.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年多帧 HDR 已是手机每次拍照的默认流程（HDR+、Smart HDR 一类连拍对齐合成，常混合长短曝光），相机提供机内 HDR 和 HDR HEIF 输出，照片通过 gain map（Ultra HDR / ISO 21496-1）在 HDR 屏幕上显示真实高光。",
   "In 2026 multi-frame HDR is the default pipeline for every phone shot (HDR+ / Smart HDR style aligned bursts, often mixing short and long exposures), cameras offer in-camera HDR and HDR HEIF output, and photos use gain maps (Ultra HDR / ISO 21496-1) to show real highlights on HDR screens."
  ],
  "replaced": [
   "经典的“三张包围 + 色调映射”HDR 已被连拍对齐合成取代，因为后者重影少、噪声低；在传感器侧，单次曝光的双转换增益、分离像素和 LOFIC 正在接管视频与安防车载的 HDR，色调映射则越来越多由神经网络完成。",
   "Classic three-frame bracket-and-tone-map HDR has been replaced by aligned burst merging, which ghosts less and is cleaner; on the sensor side, single-exposure dual conversion gain, split pixels and LOFIC are taking over HDR for video, security and automotive, while tone mapping increasingly uses neural networks."
  ],
  "refs": [
   {
    "t": "Multi-exposure HDR capture - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Multi-exposure_HDR_capture"
   },
   {
    "t": "Debevec & Malik, Recovering High Dynamic Range Radiance Maps from Photographs (SIGGRAPH 97)",
    "u": "https://pauldebevec.com/Research/HDR/"
   },
   {
    "t": "About HDRsoft",
    "u": "https://www.hdrsoft.com/about.html"
   },
   {
    "t": "Ricoh unveils CX1 CMOS-sensor zoom compact (DPReview)",
    "u": "https://www.dpreview.com/articles/7093252137/ricohcx1"
   },
   {
    "t": "The Pentax K-7: the era of in-camera HDR imaging has arrived (Adorama)",
    "u": "https://www.adorama.com/alc/the-pentax-k-7-the-era-of-in-camera-high-dynamic-range-imaging-has-arrived"
   },
   {
    "t": "First look: Taking HDR photos with Apple's iOS 4.1 (AppleInsider)",
    "u": "https://appleinsider.com/articles/10/09/02/first_look_taking_hdr_photos_with_apples_ios_4_1"
   },
   {
    "t": "Burst photography for high dynamic range and low-light imaging on mobile cameras (Google Research)",
    "u": "https://research.google/pubs/burst-photography-for-high-dynamic-range-and-low-light-imaging-on-mobile-cameras/"
   },
   {
    "t": "Ultra HDR Image Format v1.1 (Android Developers)",
    "u": "https://developer.android.com/media/platform/hdr-image-format"
   }
  ]
 },
 "sph": {
  "stages": [
   [
    1995,
    "proto",
    "1994 年成立（James Cameron 为联合创始人）的加拿大 Immersive Media 在 SIGGRAPH 1995 展示世界首部全动态、全沉浸式视频（一场篮球赛），此后十年专注于球形视频研发。",
    "Immersive Media, founded in Canada in 1994 with James Cameron as co-founder, showed the world's first full-motion, fully immersive video (a basketball game) at SIGGRAPH 1995, then spent a decade on spherical video R&D.",
    [
     0
    ]
   ],
   [
    1997,
    "paper",
    "Columbia 大学的 Shree Nayar 在 CVPR 1997 发表《Catadioptric Omnidirectional Camera》：用曲面反射镜加单镜头得到单一视点的半球视野，两台背靠背即可覆盖全向，是多镜头拼接之外的另一条路线。",
    "Shree Nayar at Columbia published \"Catadioptric Omnidirectional Camera\" at CVPR 1997: a curved mirror plus one lens gives a single-viewpoint hemispherical view, and two back-to-back cover all directions, an alternative to multi-lens stitching.",
    [
     1
    ]
   ],
   [
    2004,
    "mass",
    "Immersive Media 推出 Dodeca 系统：11 个镜头排成十二面体，被称为第一台全数字的球形相机，用于同步拍摄并拼接 360° 视频。",
    "Immersive Media launched the Dodeca system, eleven lenses arranged on a dodecahedron, described as the first all-digital spherical camera, capturing synchronised frames stitched into 360° video.",
    [
     0
    ]
   ],
   [
    2005,
    "ver",
    "Point Grey Research 推出 Ladybug2（约）：6 颗 1024×768 摄像头紧凑排布以减小视差，可输出 3500×1750、30fps 的球形全景视频并直接串流到 PC，主要用于测绘和机器人。",
    "Point Grey Research released the Ladybug2 (approx.): six 1024×768 cameras packed tightly to reduce parallax, delivering 3500×1750 spherical video at 30fps streamed to a PC, mainly for mapping and robotics.",
    [
     2
    ]
   ],
   [
    2006,
    "mass",
    "Arecont Vision 在 2006 年 5 月 IFSEC 发布 AV8360：4 颗 2MP 传感器拼成 8MP、360° 全景的网络摄像机，售价约 995 美元；同年 9 月推出 180° 的 AV8180，多传感器全景监控由此普及。",
    "Arecont Vision unveiled the AV8360 at IFSEC in May 2006: four 2MP sensors forming an 8MP 360° panoramic IP camera for about $995; the 180° AV8180 followed in September, popularising multi-sensor panoramic surveillance.",
    [
     3
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 5 月 Google Street View 上线，首批 35 个城市的街景由 Immersive Media 用装在车顶的 Dodeca 相机拍摄，球形拼接图像进入大众视野。",
    "Google Street View launched in May 2007 with imagery of its first 35 cities shot by Immersive Media using roof-mounted Dodeca cameras, bringing stitched spherical imagery to a mass audience.",
    [
     0
    ]
   ],
   [
    2008,
    "ver",
    "Ladybug3 把每颗摄像头提升到 1600×1200，球形分辨率约 5400×2700、最高 16fps，并整合为单根 FireWire 800 连接的一体机（约）。",
    "The Ladybug3 raised each camera to 1600×1200 for about 5400×2700 spherical resolution at up to 16fps, integrated into one unit on a single FireWire 800 link (approx.).",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "Ricoh 在 IFA 2013（9 月 5 日）发布 RICOH THETA：两颗背对背 180° 鱼眼加专有折叠光学，一按快门得到完整球面图像，号称首款量产的一键球形成像设备，售价 399.95 美元。",
    "Ricoh announced the RICOH THETA at IFA 2013 (5 Sept): two back-to-back 180° fisheyes with proprietary folded optics capture a full sphere in one press, billed as the first mass-produced one-shot spherical imaging device, at $399.95.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "Nokia 于 2015 年 7 月发布专业 VR 相机 OZO：8 颗同步传感器和 8 个麦克风，拍摄立体 3D 360° 视频，11 月上市，售价 6 万美元。",
    "Nokia announced the professional VR camera OZO in July 2015: eight synchronised sensors and eight microphones recording stereoscopic 3D 360° video; it shipped in November at $60,000.",
    [
     5
    ]
   ],
   [
    2016,
    "rival",
    "Facebook 于 2016 年 4 月发布 Surround 360：17 颗相机组成的 3D-360 拍摄系统，7 月把硬件设计和基于光流的拼接软件全部开源，挑战专有 VR 相机。",
    "Facebook announced Surround 360 in April 2016, a 17-camera 3D-360 capture rig, and in July open-sourced the hardware design and optical-flow stitching software, challenging proprietary VR cameras.",
    [
     6
    ]
   ],
   [
    2017,
    "end",
    "VR 市场增长不及预期，Nokia 于 2017 年 10 月 10 日宣布停止 OZO 的生产和开发，专业多镜头 VR 相机热潮退去。",
    "With the VR market growing more slowly than expected, Nokia announced on 10 Oct 2017 that it would stop OZO production and development, as the professional multi-lens VR camera boom faded.",
    [
     5
    ]
   ],
   [
    2025,
    "ver",
    "Insta360 X5（2025 年 4 月 22 日开售）：双 1/1.28 英寸传感器、8K30 的 360° 视频、可更换镜片和 AI 弱光模式，消费级双鱼眼 360° 相机已以“先全拍、后取景”为主要用法。",
    "The Insta360 X5 (on sale 22 Apr 2025): dual 1/1.28-inch sensors, 8K30 360° video, replaceable lenses and an AI low-light mode; consumer dual-fisheye 360° cameras are now used mainly for shoot-everything-then-reframe.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年球形拼接相机分成几类：消费级双鱼眼机（Insta360、Ricoh THETA）主打拍后重新取景和隐形自拍杆效果，测绘和街景仍用 Ladybug 一类多镜头相机，安防领域多传感器全景摄像机已很常见。",
   "In 2026 spherical stitching cameras fall into a few groups: consumer dual-fisheye models (Insta360, Ricoh THETA) focused on reframing after capture and the invisible-selfie-stick effect, multi-lens rigs like the Ladybug for mapping and street view, and multi-sensor panoramic cameras that are now common in security."
  ],
  "replaced": [
   "面向 VR 影视的多镜头立体 360° 相机（Nokia OZO、Facebook Surround 360、Jaunt 一类）随 VR 内容市场降温而退场；消费端由双鱼眼一体机取代多镜头装置，“360° 拍摄、平面输出”的重新取景成为主要用途。",
   "Multi-lens stereoscopic 360° cameras for VR filmmaking (Nokia OZO, Facebook Surround 360, Jaunt and others) retreated as the VR content market cooled; on the consumer side, dual-fisheye all-in-one cameras replaced multi-lens rigs, and reframing 360° footage into flat video became the main use."
  ],
  "refs": [
   {
    "t": "Immersive Media Company - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Immersive_Media_Company"
   },
   {
    "t": "Catadioptric Cameras for 360 Degree Imaging (Columbia CAVE)",
    "u": "https://www1.cs.columbia.edu/CAVE/projects/cat_cam_360/index.php"
   },
   {
    "t": "Dome video capture using the LadyBug cameras (Paul Bourke)",
    "u": "https://paulbourke.net/dome/ladybug"
   },
   {
    "t": "Arecont Vision Introduces the World's First Eight Megapixel 360° SurroundVideo IP Camera System",
    "u": "https://arecontvision.com/news/arecont-vision-introduces-the-world-s-first-eight-megapixel-360-surroundvideo-r-ip-camera-system"
   },
   {
    "t": "RICOH THETA news release (Ricoh, 2013-09-05)",
    "u": "https://ricoh.com/release/2013/0905_2"
   },
   {
    "t": "Nokia OZO - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nokia_OZO"
   },
   {
    "t": "Introducing Facebook Surround 360 (Engineering at Meta)",
    "u": "https://engineering.fb.com/2016/04/12/video-engineering/introducing-facebook-surround-360-an-open-high-quality-3d-360-video-capture-system/"
   },
   {
    "t": "Insta360 launches X5 360 action cam (Insta360)",
    "u": "https://www.insta360.com/blog/news/insta360-launches-x5-360-action-cam.html"
   }
  ]
 },
 "astro": {
  "stages": [
   [
    1978,
    "paper",
    "David L. Fried 在 JOSA 68 卷 12 期发表《Probability of getting a lucky short-exposure image through turbulence》，首次定量算出透过大气湍流拍到「幸运」清晰短曝光的概率，奠定了「拍很多张、挑好的再叠加」的理论基础。",
    "David L. Fried published \"Probability of getting a lucky short-exposure image through turbulence\" in JOSA vol. 68 no. 12, the first quantitative estimate of how often a short exposure through turbulence comes out sharp, laying the theoretical basis for shooting many frames, selecting the good ones and stacking them.",
    [
     0
    ]
   ],
   [
    2001,
    "proto",
    "剑桥大学 John E. Baldwin 小组在 2.56 m 北欧光学望远镜（NOT）上用 Strehl 比挑帧再叠加，于 800 nm 拍出接近衍射极限的图像，证明 lucky imaging 在专业望远镜上可行。",
    "John E. Baldwin's Cambridge group used Strehl-ratio frame selection and stacking on the 2.56 m Nordic Optical Telescope to reach near diffraction-limited images at 800 nm, proving lucky imaging on a professional telescope.",
    [
     0
    ]
   ],
   [
    2002,
    "mass",
    "荷兰业余天文爱好者 Cor Berrevoets 约 2001 年开始开发的 Registax 于 2002 年 5 月 19 日发布 v1.0.0，提供帧对齐、按质量评分挑帧、叠加与小波锐化，配合摄像头让业余行星摄影普及。",
    "Registax, begun around 2001 by Dutch amateur Cor Berrevoets, released v1.0.0 on 19 May 2002 with frame alignment, quality grading and selection, stacking and wavelet sharpening; paired with webcams it brought planetary imaging to amateurs.",
    [
     1
    ]
   ],
   [
    2005,
    "rival",
    "Siril 于 2005 年 2 月 6 日首发，本是 Christian Buil 的 Windows 软件 IRIS 的 Linux 克隆（名字即 IRIS for Linux 倒写），提供校准、配准与叠加；2007 年起停滞。",
    "Siril first appeared on 6 February 2005 as a Linux clone of Christian Buil's Windows program IRIS (the name reads as IRIS for Linux), offering calibration, registration and stacking; development stalled from 2007.",
    [
     2
    ]
   ],
   [
    2006,
    "mass",
    "法国开发者 Luc Coiffier 发布免费软件 DeepSkyStacker（DSS），面向深空长曝光：自动识别星点配准，套用暗场 / 平场 / 偏置校准后叠加几十上百张短曝光，成为入门深空摄影最常用的叠加工具。",
    "Luc Coiffier released the freeware DeepSkyStacker (DSS) for deep-sky imaging: it detects stars to register frames, applies dark / flat / bias calibration and stacks dozens to hundreds of sub-exposures, becoming the go-to stacker for beginners.",
    [
     3
    ]
   ],
   [
    2015,
    "ver",
    "2012 年新团队接手 Siril，2015 年 10 月 28 日发布首个稳定版 0.9.0，此后成长为跨平台的开源天文图像处理套件。",
    "A new team took over Siril in 2012 and released the first stable version 0.9.0 on 28 October 2015; it has since grown into a cross-platform open-source astro-imaging suite.",
    [
     2
    ]
   ],
   [
    2018,
    "ver",
    "DeepSkyStacker 在 2018 年开源并由社区接手维护，后续 4.x / 5.x / 6.x 版本扩展到 Windows、Linux 和 macOS。",
    "DeepSkyStacker was open-sourced in 2018 and taken over by community maintainers; later 4.x / 5.x / 6.x releases extended it to Windows, Linux and macOS.",
    [
     3
    ]
   ],
   [
    2018,
    "mass",
    "法国 Vaonis 在 CES 2018 发布智能望远镜 Stellina（获 CES 创新奖），春季上市：自动对星、跟踪，并在机内做「live stacking」实时叠加短曝光，把结果推到手机上。",
    "France's Vaonis unveiled the Stellina smart telescope at CES 2018 (CES Innovation Award) and shipped it that spring: it self-aligns, tracks and live-stacks short exposures in the unit, sending the image to a phone.",
    [
     4
    ]
   ],
   [
    2019,
    "ver",
    "Google Pixel 4 的 Night Sight 加入天文摄影：三脚架上最多拍 15 帧、每帧最长 16 秒，总曝光 4 分钟（Pixel 3/3a 为 1 分钟）；用训练于 10 万多张图的 CNN 分割天空并压暗，逐帧比对去除热像素，并在按快门后拍两张约 1 秒的对焦帧完成暗光对焦。",
    "Pixel 4's Night Sight added astrophotography: on a tripod it takes up to 15 frames of up to 16 s each, 4 minutes total (1 minute on Pixel 3/3a); a CNN trained on 100,000+ images segments and darkens the sky, hot pixels are removed by comparing frames, and two ~1 s post-shutter frames handle focus in the dark.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 10 月 Samsung 为 Galaxy S22 系列（One UI 5）的 Expert RAW 加入 Astrophoto 天文模式，多帧叠加并附带 Sky Guide 星座 / 星云标注。",
    "In October 2022 Samsung added an Astrophoto mode to Expert RAW on the Galaxy S22 series (One UI 5), stacking multiple frames and adding a Sky Guide overlay for constellations and nebulae.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "ZWO 在 2023 年 4 月 NEAF 展上发布 Seestar S50，把望远镜、电调焦、天文相机和 ASIAIR 控制器做成一体机，主打 live stacking；后续推出 S50 Pro 等型号，把叠加式深空摄影推向大众。",
    "ZWO launched the Seestar S50 at NEAF in April 2023, integrating telescope, electronic focuser, astro camera and ASIAIR controller in one unit built around live stacking; later models such as the S50 Pro pushed stacked deep-sky imaging to the mass market.",
    [
     7
    ]
   ]
  ],
  "now": [
   "多帧叠加仍是天文摄影的基础：桌面端 DSS、Siril、PixInsight 等继续迭代；手机旗舰（Pixel、Galaxy）内置天文模式；Stellina、Seestar 等智能望远镜在机内实时叠加，几分钟就能出深空图。",
   "Multi-frame stacking remains the foundation of astrophotography: desktop tools like DSS, Siril and PixInsight keep evolving, flagship phones (Pixel, Galaxy) ship astro modes, and smart telescopes such as Stellina and Seestar live-stack in the unit, producing deep-sky images in minutes."
  ],
  "replaced": [
   "没有被替代。它取代的是胶片时代「赤道仪跟踪 + 单张数十分钟曝光」的做法；现在的变化在于叠加从电脑后期挪到了相机、手机和望远镜内部实时完成，并加入 AI 降噪与天空分割。",
   "Not replaced. It displaced the film-era approach of a single tens-of-minutes exposure on a tracking mount; what is changing is that stacking has moved from desktop post-processing into cameras, phones and telescopes in real time, with AI denoising and sky segmentation added."
  ],
  "refs": [
   {
    "t": "Lucky imaging — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Lucky_imaging"
   },
   {
    "t": "Registax — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Registax"
   },
   {
    "t": "Siril (software) — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Siril_(software)"
   },
   {
    "t": "deepskystacker/DSS — GitHub",
    "u": "https://github.com/deepskystacker/DSS"
   },
   {
    "t": "A sleek, new app-controlled telescope (Vaonis Stellina) — ESA",
    "u": "https://www.esa.int/articles/sleek-telescope-makes-it-in-the-big-apple"
   },
   {
    "t": "Astrophotography with Night Sight on Pixel Phones — Google Research",
    "u": "https://research.google/blog/astrophotography-with-night-sight-on-pixel-phones/"
   },
   {
    "t": "New Galaxy S22 Camera Updates Let You Capture the Stars Like a Pro — Samsung Newsroom",
    "u": "https://news.samsung.com/global/new-galaxy-s22-camera-updates-let-you-capture-the-stars-like-a-pro"
   },
   {
    "t": "Test Report: ZWO Seestar S50 Smart Telescope — Sky & Telescope",
    "u": "https://skyandtelescope.org/astronomy-equipment/choosing-astronomy-equipment/test-report-zwo-seestar-s50-smart-telescope/"
   }
  ]
 },
 "gen": {
  "stages": [
   [
    2000,
    "paper",
    "Marcelo Bertalmio、Guillermo Sapiro、Vicent Caselles、Coloma Ballester 在 SIGGRAPH 2000 发表《Image Inpainting》，模仿文物修复师，让周围信息沿等照度线向选区内扩散，用于修老照片、去字幕、去掉话筒和吊线；「inpainting」一词由此进入图像处理。",
    "Marcelo Bertalmio, Guillermo Sapiro, Vicent Caselles and Coloma Ballester published \"Image Inpainting\" at SIGGRAPH 2000, mimicking art restorers by propagating surrounding information along isophotes into the selected region to restore old photos, remove text, or erase microphones and wires; the term inpainting entered image processing.",
    [
     0
    ]
   ],
   [
    2004,
    "paper",
    "Microsoft Research 的 Antonio Criminisi、Patrick Pérez、Kentaro Toyama 在 IEEE TIP 13 卷 9 期发表基于样本块（exemplar-based）的区域填充与物体移除：按置信度和结构优先级逐块从图中复制相似纹理，同时延续结构线，可以去掉大物体。",
    "Antonio Criminisi, Patrick Pérez and Kentaro Toyama of Microsoft Research published exemplar-based region filling and object removal in IEEE TIP vol. 13 no. 9: patches are copied from elsewhere in the image in a confidence- and structure-driven order, propagating both texture and structure so large objects can be removed.",
    [
     0
    ]
   ],
   [
    2009,
    "paper",
    "Princeton 与 Adobe 的 Connelly Barnes、Eli Shechtman、Adam Finkelstein、Dan B Goldman 在 SIGGRAPH 2009 发表 PatchMatch：用随机搜索 + 邻域传播快速找近似最近邻图块，比以往快 20–100 倍，让补全、重定向、重组能交互式运行。",
    "Connelly Barnes, Eli Shechtman, Adam Finkelstein and Dan B Goldman (Princeton and Adobe) published PatchMatch at SIGGRAPH 2009: random search plus neighbour propagation finds approximate nearest-neighbour patches 20–100x faster than before, making completion, retargeting and reshuffling interactive.",
    [
     1
    ]
   ],
   [
    2010,
    "mass",
    "Adobe Photoshop CS5 推出 Content-Aware Fill（内容识别填充），基于 PatchMatch 一类的图块合成，选中电线、路人后一键用周围纹理补齐，是图像补全首次进入主流商业软件。",
    "Adobe Photoshop CS5 introduced Content-Aware Fill, built on PatchMatch-style patch synthesis: select a wire or passer-by and fill it from surrounding texture in one step, the first time image completion reached mainstream commercial software.",
    [
     1
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 1 月 Samsung Galaxy S21 在相册编辑器的 Samsung Labs 中加入 Object Eraser：点一下自动识别并选中人物或物体，再用类似内容识别填充的方法补背景，是手机上较早的一键 AI 去物功能。",
    "In January 2021 the Galaxy S21 added Object Eraser under Samsung Labs in its gallery editor: one tap detects and selects a person or object and fills the background in a content-aware way, one of the first one-tap AI object removers on a phone.",
    [
     2
    ]
   ],
   [
    2021,
    "paper",
    "Samsung AI Center Moscow 的 Roman Suvorov 等提出 LaMa（arXiv 2021 年 9 月，WACV 2022）：用快速傅里叶卷积（FFC）获得全图感受野、大掩膜训练，只在低分辨率上训练也能补全高分辨率大洞，成为开源去物工具的常用模型。",
    "Roman Suvorov et al. of Samsung AI Center Moscow proposed LaMa (arXiv September 2021, WACV 2022): fast Fourier convolutions give an image-wide receptive field and large-mask training lets a low-resolution-trained model fill big holes at high resolution; it became a common model in open-source object-removal tools.",
    [
     3
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 10 月 28 日 Google Pixel 6 上市，Google Photos 的 Magic Eraser 由 Google Photos 与 Google Research 合作开发，能主动建议去掉背景路人，模型在 Tensor 芯片上本地运行。",
    "With the Pixel 6 launch on 28 October 2021, Google Photos' Magic Eraser, built by Google Photos and Google Research, could proactively suggest removing background photobombers, with models running on-device on Tensor.",
    [
     4
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 5 月 23 日 Adobe 在 Photoshop beta 推出由 Firefly 扩散模型驱动的 Generative Fill，可用文字提示添加、扩展或删除内容（Generative Expand 扩展画布），9 月正式版上线并允许商用，补全从「复制周围纹理」变为「生成新内容」。",
    "On 23 May 2023 Adobe brought Firefly-powered Generative Fill to the Photoshop beta, adding, extending or removing content from text prompts (Generative Expand widens the canvas); it reached the release version with commercial use in September, turning completion from copying nearby texture into generating new content.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 10 月 Google Pixel 8 / 8 Pro 推出 Magic Editor：圈选主体后可移动、缩放，并用生成式 AI 重建背景，10 月 12 日起可用，是手机上较早的生成式照片编辑。",
    "In October 2023 the Pixel 8 / 8 Pro introduced Magic Editor: circle a subject to move or resize it while generative AI rebuilds the background; available from 12 October, it was one of the first generative photo editors on a phone.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 1 月 17 日 Samsung Galaxy S24 发布 Galaxy AI，其中 Generative Edit 基于 Google Imagen 2，能删除、移动物体并补全旋转裁剪后缺失的画面边缘。",
    "On 17 January 2024 the Galaxy S24 launched Galaxy AI; its Generative Edit, built on Google Imagen 2, can erase or move objects and fill in borders left empty after straightening a photo.",
    [
     7
    ]
   ]
  ],
  "now": [
   "生成式补全已成手机与修图软件标配：Photoshop Generative Fill、Pixel Magic Editor、Galaxy AI Generative Edit，以及 2024 年 iOS 18.1 的 Clean Up；同时 C2PA 内容凭证开始标注 AI 改动。",
   "Generative completion is now standard in phones and editors: Photoshop Generative Fill, Pixel Magic Editor, Galaxy AI Generative Edit and, from iOS 18.1 in 2024, Apple's Clean Up; C2PA content credentials are starting to label AI edits."
  ],
  "replaced": [
   "基于图块复制的方法（Content-Aware Fill / PatchMatch）在大面积补全上已被 LaMa 等 CNN 模型和扩散模型取代，但因速度快、不「发明」内容，仍在小面积修补中使用。",
   "Patch-copying methods (Content-Aware Fill / PatchMatch) have been superseded for large holes by CNN models such as LaMa and by diffusion models, but remain in use for small fixes because they are fast and do not invent content."
  ],
  "refs": [
   {
    "t": "Region Filling and Object Removal by Exemplar-Based Image Inpainting — Microsoft Research",
    "u": "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/criminisi_tip2004.pdf"
   },
   {
    "t": "PatchMatch: A Randomized Correspondence Algorithm for Structural Image Editing — Princeton",
    "u": "https://www.cs.princeton.edu/gfx/pubs/Barnes_2009_PAR/"
   },
   {
    "t": "Samsung's Object Eraser Can Automatically Remove People From Photo Backgrounds — PetaPixel",
    "u": "https://petapixel.com/2021/01/14/samsungs-object-eraser-can-automatically-remove-people-from-photo-backgrounds"
   },
   {
    "t": "Resolution-robust Large Mask Inpainting with Fourier Convolutions — arXiv",
    "u": "https://arxiv.org/abs/2109.07161"
   },
   {
    "t": "Photobombs begone with Magic Eraser in Google Photos — Google",
    "u": "https://blog.google/products/photos/magic-eraser/"
   },
   {
    "t": "Adobe Unveils Future of Creative Cloud With Generative AI as a Creative Co-Pilot in Photoshop — Adobe",
    "u": "https://news.adobe.com/news/news-details/2023/Adobe-Unveils-Future-of-Creative-Cloud-with-Generative-AI-as-a-Creative-Co-Pilot-in-Photoshop/default.aspx"
   },
   {
    "t": "Google announces AI-powered photo editing features for new Pixel phones — TechCrunch",
    "u": "https://techcrunch.com/2023/10/04/google-announces-ai-powered-photo-editing-features-for-new-pixel-phones"
   },
   {
    "t": "Samsung and Google Cloud Join Forces To Bring Generative AI to Samsung Galaxy S24 Series — Samsung Newsroom",
    "u": "https://news.samsung.com/global/samsung-and-google-cloud-join-forces-to-bring-generative-ai-to-samsung-galaxy-s24-series"
   }
  ]
 },
 "lf": {
  "stages": [
   [
    1908,
    "idea",
    "Gabriel Lippmann 提出「integral photography」：在底片前放一排微小透镜（玻璃珠），每个小透镜从略不同的方向记录场景，冲洗后可再现立体视差，这是光场相机的最早设想。",
    "Gabriel Lippmann proposed integral photography: an array of tiny lenses (glass beads) in front of the film records the scene from slightly different directions, reproducing parallax on playback; the earliest concept of a light field camera.",
    [
     0
    ]
   ],
   [
    1992,
    "paper",
    "MIT 的 Edward H. Adelson 与 John Y. A. Wang 在 IEEE TPAMI 14 卷 2 期发表《Single Lens Stereo with a Plenoptic Camera》，在单镜头焦平面放微透镜阵列，从主镜头孔径内的连续视点估计深度，提出「plenoptic camera」。",
    "Edward H. Adelson and John Y. A. Wang of MIT published \"Single Lens Stereo with a Plenoptic Camera\" in IEEE TPAMI vol. 14 no. 2, putting a lenticular array at the focal plane of a single lens to infer depth from the continuum of viewpoints within the aperture, naming the plenoptic camera.",
    [
     1
    ]
   ],
   [
    2005,
    "proto",
    "Stanford 的 Ren Ng、Marc Levoy、Mathieu Brédif、Gene Duval、Mark Horowitz、Pat Hanrahan 发表技术报告 CSTR 2005-02《Light Field Photography with a Hand-held Plenoptic Camera》：在 1600 万像素相机的传感器前加约 9 万个微透镜，做出第一台手持光场相机原型，拍后可数字重对焦。",
    "Stanford's Ren Ng, Marc Levoy, Mathieu Brédif, Gene Duval, Mark Horowitz and Pat Hanrahan published tech report CSTR 2005-02, \"Light Field Photography with a Hand-held Plenoptic Camera\": about 90,000 microlenses in front of a 16 MP sensor gave the first hand-held light field prototype, refocusable after capture.",
    [
     2,
     0
    ]
   ],
   [
    2006,
    "corp",
    "Ren Ng 创立 Lytro（最初名 Refocus Imaging），把博士研究的手持光场相机做成消费产品。",
    "Ren Ng founded Lytro (originally Refocus Imaging) to turn his hand-held light field research into a consumer product.",
    [
     4
    ]
   ],
   [
    2009,
    "paper",
    "Adobe 的 Andrew Lumsdaine 与 Todor Georgiev 提出 focused plenoptic camera（plenoptic 2.0）：把微透镜对主镜头像面聚焦，以牺牲部分角度分辨率换取明显更高的空间分辨率。",
    "Andrew Lumsdaine and Todor Georgiev of Adobe described the focused plenoptic camera (plenoptic 2.0): microlenses focused on the main lens image plane trade some angular resolution for much higher spatial resolution.",
    [
     0
    ]
   ],
   [
    2010,
    "mass",
    "德国 Raytrix（Christian Perwass、Lennart Wietzke 创立）推出首批商用光场相机，R11 在传感器上放约 4 万个微透镜、输出 300 万像素图像并附深度图，主攻工业检测与科研。",
    "Germany's Raytrix, founded by Christian Perwass and Lennart Wietzke, brought the first commercial plenoptic cameras to market; the R11 places about 40,000 microlenses on its sensor, outputs 3 MP images with depth, and targets industrial inspection and research.",
    [
     3
    ]
   ],
   [
    2012,
    "mass",
    "2012 年 2 月 29 日 Lytro 第一代相机开始发货：方管造型、f/2 恒定光圈 8 倍变焦镜头，8 GB / 16 GB 两版，宣称记录 1100 万条光线（11 megarays），定价 399 美元起，可在电脑上拍后重对焦。",
    "On 29 February 2012 Lytro began shipping its first camera: a rectangular tube with a constant f/2 8x zoom lens, in 8 GB and 16 GB versions, advertised as capturing 11 megarays, from $399, with refocusing after capture on a computer.",
    [
     4
    ]
   ],
   [
    2013,
    "rival",
    "2013 年 11 月 Nokia 为 Lumia PureView 机型推出 Refocus 应用：连拍 2–8 张不同对焦的 500 万像素照片后对齐合成，模拟光场的「先拍后对焦」，但本质是焦点堆栈而非光场。",
    "In November 2013 Nokia released Refocus for Lumia PureView phones: it shoots 2–8 five-megapixel frames at different focus distances and aligns them, imitating light-field-style refocus, though it is a focus stack rather than a light field.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 4 月 Lytro 发布第二代 Illum，改为单反式机身、大传感器和 30–250 mm 等效 f/2 恒定光圈变焦镜头，面向专业与实验摄影，但销量仍有限。",
    "In April 2014 Lytro announced the second-generation Illum, with an SLR-style body, larger sensor and a constant f/2 30–250 mm-equivalent zoom, aimed at professional and experimental photographers; sales remained limited.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "Lytro 转向 VR 与影视：2015 年 11 月发布 Immerge 光场 VR 拍摄系统，2016 年 4 月发布 Lytro Cinema，7.55 亿像素、最高 300 fps、数据量达 400 GB/s，可在后期改焦点、景深和抠像。",
    "Lytro pivoted to VR and film: Immerge, a light field VR capture rig, was announced in November 2015, and Lytro Cinema in April 2016, at 755 MP, up to 300 fps and 400 GB/s of data, letting focus, depth of field and keying be changed in post.",
    [
     6
    ]
   ],
   [
    2018,
    "end",
    "2018 年 3 月 27 日 Lytro 宣布关闭，大部分员工转入 Google，但并未延续 Lytro 的相机业务；消费级光场相机就此退场。",
    "On 27 March 2018 Lytro announced it was shutting down; a large share of staff moved to Google, which did not continue Lytro's camera work, ending the consumer light field camera.",
    [
     7,
     0
    ]
   ]
  ],
  "now": [
   "消费级光场相机已消失；Raytrix 等仍把光场相机用于工业 3D 检测、显微和科研。「拍后改焦点 / 景深」改由手机双摄、双像素（dual pixel）深度和 AI 人像虚化实现。",
   "Consumer light field cameras are gone; Raytrix and others still use them for industrial 3D inspection, microscopy and research. Post-capture refocus and depth-of-field changes are now done with dual cameras, dual-pixel depth and AI portrait blur on phones."
  ],
  "replaced": [
   "在消费领域被「多摄 / 双像素测深 + 计算虚化」取代：后者不牺牲空间分辨率，成本低得多；微透镜光场的分辨率损失和庞大数据量是其失败主因。",
   "In consumer imaging it was replaced by multi-camera / dual-pixel depth plus computational blur, which costs far less and keeps full spatial resolution; the resolution loss and huge data of microlens light fields were the main reasons it failed."
  ],
  "refs": [
   {
    "t": "Light field camera — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Light_field_camera"
   },
   {
    "t": "Single Lens Stereo with a Plenoptic Camera — MIT",
    "u": "https://web.archive.org/web/20210418231325/http://persci.mit.edu/pub_abstracts/plenoptic_abs.html"
   },
   {
    "t": "Light Field Photography with a Hand-Held Plenoptic Camera — Stanford",
    "u": "https://graphics.stanford.edu/papers/lfcamera/"
   },
   {
    "t": "One Camera With 40,000 Lenses Helps Prevent Blurry Images — Popular Science",
    "u": "https://www.popsci.com/gadgets/article/2011-05/cameras-40000-lenses-help-salvage-blurry-images/"
   },
   {
    "t": "Lytro — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Lytro"
   },
   {
    "t": "Nokia Refocus now available for Nokia Lumia — Windows Blog",
    "u": "https://blogs.windows.com/devices/2013/11/13/nokia-refocus-now-available-nokia-lumia/"
   },
   {
    "t": "Lytro Cinema is giving filmmakers 400 gigabytes per second of creative freedom — TechCrunch",
    "u": "https://techcrunch.com/2016/04/11/lytro-cinema-is-giving-filmmakers-400-gigabytes-per-second-of-creative-freedom"
   },
   {
    "t": "Lytro, a light-field imaging startup, is shutting down — TechCrunch",
    "u": "https://techcrunch.com/2018/03/27/lytro-is-shutting-down"
   }
  ]
 },
 "pgm": {
  "stages": [
   [
    1859,
    "idea",
    "法国军官 Aimé Laussedat 先用 camera lucida、后改用照相机代替平板仪，从照片交会测绘地形，被称为「摄影测量之父」（约 1850 年代）。",
    "French officer Aimé Laussedat replaced the plane table first with a camera lucida and then with a photographic camera, mapping terrain by intersecting rays from photographs; he is called the father of photogrammetry (around the 1850s).",
    [
     0
    ]
   ],
   [
    1867,
    "paper",
    "德国建筑师 Albrecht Meydenbauer 在《Wochenblatt des Architektenvereins zu Berlin》发表文章，首次使用「Photogrammetrie」一词（与地理学家 Otto Kersten 共同构词），并建立普鲁士测量照片档案馆，用照片测绘古建筑。",
    "German architect Albrecht Meydenbauer first used the word Photogrammetrie (coined with geographer Otto Kersten) in an article in the Wochenblatt des Architektenvereins zu Berlin, and went on to build the Prussian Messbildarchiv for measuring historic buildings from photographs.",
    [
     0
    ]
   ],
   [
    1993,
    "mass",
    "加拿大 Eos Systems（1990 年由 Alan Walford 创立）于 1993 年 10 月发布 PhotoModeler 公测版，1994 年 1 月 14 日正式发布 1.0，是第一款商用的全数字近景摄影测量 / 照片建模软件，可在 PC 上从照片量测和建模。",
    "Canada's Eos Systems, founded by Alan Walford in 1990, released a PhotoModeler public beta in October 1993 and version 1 on 14 January 1994, the first commercial all-digital close-range photogrammetry and image-based modelling system, measuring and modelling from photos on a PC.",
    [
     1
    ]
   ],
   [
    2006,
    "paper",
    "华盛顿大学与 Microsoft Research 的 Noah Snavely、Steven M. Seitz、Richard Szeliski 在 SIGGRAPH 2006 发表《Photo Tourism》：对网上大量无序照片自动做特征匹配和 structure-from-motion（SfM），反算每张照片的相机位置并重建稀疏三维点云。",
    "Noah Snavely, Steven M. Seitz and Richard Szeliski (University of Washington and Microsoft Research) presented Photo Tourism at SIGGRAPH 2006: automatic feature matching and structure-from-motion over large unordered internet photo sets recover each photo's camera pose and a sparse 3D point cloud.",
    [
     2
    ]
   ],
   [
    2008,
    "mass",
    "基于 Photo Tourism 的 Microsoft Photosynth 于 2008 年 8 月 20 日向公众开放，用户上传照片即可在线生成可浏览的三维点云和照片场景。",
    "Microsoft Photosynth, built on Photo Tourism, opened to the public on 20 August 2008, letting anyone upload photos and get a browsable 3D point cloud and photo scene online.",
    [
     3
    ]
   ],
   [
    2010,
    "mass",
    "俄罗斯 Agisoft 发布 PhotoScan，把 SfM 与多视图稠密重建（MVS）打包成桌面软件，输出带纹理网格、点云、正射影像和 DEM，广泛用于无人机测绘、考古和游戏资产扫描。",
    "Russia's Agisoft released PhotoScan, packaging SfM and multi-view stereo into desktop software that outputs textured meshes, point clouds, orthomosaics and DEMs, widely used for drone mapping, archaeology and game-asset scanning.",
    [
     4
    ]
   ],
   [
    2012,
    "ver",
    "Autodesk 于 2012 年 5 月推出 iPad 版、9 月推出 iPhone 版 123D Catch：用手机拍最多 40 张照片上传到 Autodesk 云端重建三维模型，可直接送去 3D 打印，是手机照片建模的早期普及产品。",
    "Autodesk released 123D Catch for iPad in May 2012 and iPhone in September 2012: shoot up to 40 photos, upload them to the Autodesk cloud for reconstruction, and send the model to 3D printing, an early mass-market phone photogrammetry app.",
    [
     5
    ]
   ],
   [
    2016,
    "paper",
    "Johannes L. Schönberger 与 Jan-Michael Frahm 在 CVPR 2016 发表《Structure-from-Motion Revisited》并开源 COLMAP，改进增量式 SfM 的稳健性与完整性，成为学术界和 NeRF 等新方法求相机位姿的事实标准。",
    "Johannes L. Schönberger and Jan-Michael Frahm published \"Structure-from-Motion Revisited\" at CVPR 2016 and open-sourced COLMAP, improving the robustness and completeness of incremental SfM; it became the de facto tool for camera poses in research and for newer methods like NeRF.",
    [
     6
    ]
   ],
   [
    2017,
    "end",
    "2017 年 2 月 6 日 Microsoft 关闭 Photosynth 网站与服务，在线照片合成浏览这一路线退场（同年 12 月作为 Pix 应用的一个功能短暂回归）。",
    "Microsoft shut down the Photosynth site and service on 6 February 2017, ending that online photo-synth browsing approach (it briefly returned as a feature of the Pix app that December).",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 1 月 Agisoft 发布 1.5 版并把 PhotoScan 更名为 Metashape，老用户免费升级，强化航测与大规模项目处理。",
    "In January 2019 Agisoft released version 1.5 and renamed PhotoScan to Metashape, a free upgrade for existing users, with stronger aerial survey and large-project processing.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Apple 在 WWDC21 为 macOS Monterey 的 RealityKit 推出 Object Capture API，开发者可在 Mac 上把 iPhone 拍的照片重建为 USDZ 三维模型。",
    "At WWDC21 Apple introduced the Object Capture API in RealityKit on macOS Monterey, letting developers reconstruct iPhone photos into USDZ 3D models on a Mac.",
    [
     7
    ]
   ],
   [
    2023,
    "ver",
    "WWDC 2023 宣布 iOS 17 的 Object Capture：在带 LiDAR 和 A14 及以上芯片的 iPhone / iPad 上引导拍摄并在本机几分钟内完成重建，照片建模首次完全在手机端完成。",
    "At WWDC 2023 Apple brought Object Capture to iOS 17: on iPhones / iPads with LiDAR and A14 or later it guides capture and reconstructs on-device in minutes, the first fully on-phone photogrammetry from Apple.",
    [
     7
    ]
   ]
  ],
  "now": [
   "SfM + MVS 摄影测量是无人机测绘、文保、影视游戏资产扫描的主力（Metashape、RealityCapture、Pix4D、COLMAP 等）；手机端可本地建模。NeRF（2020）与 3D Gaussian Splatting（2023）等神经 / 点元渲染在新视角合成上快速兴起，但仍依赖 SfM 求位姿。",
   "SfM + MVS photogrammetry is the workhorse for drone mapping, heritage, and film / game asset scanning (Metashape, RealityCapture, Pix4D, COLMAP); phones can reconstruct on-device. Neural and splat-based methods such as NeRF (2020) and 3D Gaussian Splatting (2023) are rising fast for novel-view synthesis, but still rely on SfM for camera poses."
  ],
  "replaced": [
   "未被替代。胶片 / 解析测图仪时代的人工立体量测已被全自动数字 SfM 取代；在「好看的新视角」上，NeRF 和 Gaussian Splatting 正在部分取代网格重建，但需要精确几何的测量场景仍用摄影测量。",
   "Not replaced. Manual stereo plotting from the film and analytical-plotter era gave way to fully automatic digital SfM; for photoreal novel views NeRF and Gaussian Splatting are partly replacing mesh reconstruction, but measurement work that needs accurate geometry still uses photogrammetry."
  ],
  "refs": [
   {
    "t": "The Origin of the Term Photogrammetry (Albert Grimm) — ISPRS",
    "u": "https://www.isprs.org/society/history/Grimm-The-Origin-of-the-Term-Photogrammetry.pdf"
   },
   {
    "t": "PhotoModeler — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/PhotoModeler"
   },
   {
    "t": "Photo Tourism: Exploring Photo Collections in 3D — University of Washington",
    "u": "https://phototour.cs.washington.edu/"
   },
   {
    "t": "Photosynth — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Photosynth"
   },
   {
    "t": "Metashape — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Metashape"
   },
   {
    "t": "Autodesk 123D Catch for iPhone Lets Everyone Create 3D Printed Models with Photos — Business Wire",
    "u": "https://www.businesswire.com/news/home/20120906005681/en/Autodesk-123D-Catch-for-iPhone-Lets-Everyone-Create-3D-Printed-Models-with-Photos"
   },
   {
    "t": "Structure-From-Motion Revisited (CVPR 2016) — CVF Open Access",
    "u": "https://openaccess.thecvf.com/content_cvpr_2016/html/Schonberger_Structure-From-Motion_Revisited_CVPR_2016_paper.html"
   },
   {
    "t": "Meet Object Capture for iOS — WWDC23, Apple Developer",
    "u": "https://developer.apple.com/videos/play/wwdc2023/10191"
   }
  ]
 },
 "lexp": {
  "stages": [
   [
    2011,
    "proto",
    "Markus Enzweiler 发布免费软件 StarStaX：把三脚架上连拍的大量短曝光按 Lighten（逐像素取最亮）模式合成星轨，或用 Average 平均模拟长曝光，避免单张长曝光的热噪声和过曝，成为「多帧取最亮」做法的代表工具。",
    "Markus Enzweiler released the free StarStaX: frames shot on a tripod are blended in Lighten mode (keep the brightest pixel) to build star trails, or averaged to simulate a long exposure, avoiding the heat noise and overexposure of one long frame; it became the emblematic tool for max-blend stacking.",
    [
     1
    ]
   ],
   [
    2012,
    "corp",
    "2012 年 2 月发布的 Olympus OM-D E-M5 推出 Live Bulb / Live Time：B 门曝光过程中屏幕定时刷新，让人看着画面逐渐「显影」再决定何时结束；ePHOTOzine 评其为 2012 年最佳新技术。它仍是单张曝光，但为后来的机内实时合成铺路。",
    "The Olympus OM-D E-M5, announced in February 2012, introduced Live Bulb / Live Time: the screen refreshes during a bulb exposure so you can watch the image develop and stop at the right moment; ePHOTOzine named it Best New Technology 2012. Still a single exposure, it paved the way for in-camera live compositing.",
    [
     0
    ]
   ],
   [
    2014,
    "mass",
    "2014 年 1 月发布的 Olympus OM-D E-M10 首次搭载 Live Composite（实时合成）：先拍一张基准曝光，之后按间隔连拍，只把比基准更亮的新光加入画面，屏幕实时显示，星轨、车流、烟花不会整体过曝；同年 E-M1 通过固件 2.0 获得此功能。",
    "The Olympus OM-D E-M10 (January 2014) debuted Live Composite: after a base exposure the camera keeps shooting at intervals and adds only new light brighter than the base, shown live on screen, so star trails, traffic and fireworks build up without overexposing the scene; the E-M1 gained it via firmware 2.0 that year.",
    [
     2
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 Huawei P8 推出「流光快门」（Light Painting），含车流光轨、光绘涂鸦、丝绢流水、绚丽星轨四种模式，用多帧叠加在手机上模拟长曝光，需配合三脚架。",
    "In 2015 the Huawei P8 introduced Light Painting with four modes, car light trails, light graffiti, silky water and star track, simulating long exposures on a phone by stacking frames, used on a tripod.",
    [
     3
    ]
   ],
   [
    2017,
    "ver",
    "Apple 在 WWDC 2017 宣布、秋季随 iOS 11 推出 Live Photos 的 Long Exposure 效果：把实况照片前后约 3 秒的帧对齐平均，手持也能做出流水、光轨的长曝光效果，同批还有 Loop 和 Bounce。",
    "Apple announced at WWDC 2017, and shipped with iOS 11 that autumn, a Long Exposure effect for Live Photos: the roughly 3 s of frames around a Live Photo are aligned and averaged to give handheld silky water and light trails, alongside Loop and Bounce.",
    [
     4
    ]
   ],
   [
    2019,
    "rival",
    "Lux Optics 推出 iPhone 应用 Spectre：用 AI 防抖和场景识别实现最长 9 秒的手持长曝光，并获 Apple 2019 年度 iPhone App。",
    "Lux Optics released Spectre for iPhone, using AI stabilization and scene detection for handheld long exposures of up to 9 seconds; it was Apple's iPhone App of the Year 2019.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 Google Pixel 6 / 6 Pro 推出 Motion Mode（Beta），含 Long Exposure 与 Action Pan：由 Tensor 芯片完成运动估计、帧融合、主体检测、防抖和模糊合成，手持即可拍出长曝光与追焦效果。",
    "In 2021 the Pixel 6 / 6 Pro introduced Motion Mode (beta) with Long Exposure and Action Pan: Tensor handles motion estimation, frame blending, subject detection, stabilization and blur, giving handheld long-exposure and panning effects.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 OM System OM-1 推出 Live ND：机内连拍多帧平均来模拟 ND2–ND64 减光镜，可在取景器里直接预览慢门效果，无需外挂滤镜。",
    "In 2022 the OM System OM-1 introduced Live ND: the camera averages a burst of frames to simulate ND2–ND64 filters, previewing the slow-shutter effect in the viewfinder without a physical filter.",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 1 月发布的 OM-1 Mark II 把 Live ND 扩展到 ND128（7 档），并加入号称全球首创的 Live GND 计算渐变镜（GND2 / 4 / 8，软 / 中 / 硬过渡）。",
    "The OM-1 Mark II, announced in January 2024, extended Live ND to ND128 (7 stops) and added what it called the world's first Live GND, a computational graduated filter (GND2 / 4 / 8 with soft, medium and hard transitions).",
    [
     7
    ]
   ]
  ],
  "now": [
   "计算长曝光已普及：OM System 相机提供 Live Composite / Live ND / Live GND，手机上有 Huawei 流光快门、iPhone 实况照片长曝光、Pixel Motion Mode 等，多数手持即可完成。",
   "Computational long exposure is now common: OM System cameras offer Live Composite / Live ND / Live GND, and phones have Huawei Light Painting, iPhone Live Photo Long Exposure and Pixel Motion Mode, mostly usable handheld."
  ],
  "replaced": [
   "未被替代。它正在部分取代实体 ND / GND 滤镜和单张 B 门长曝光；但多帧合成对快速运动物体会出现断续或伪影，专业风光仍会用实体滤镜。",
   "Not replaced. It is partly displacing physical ND / GND filters and single bulb exposures, but multi-frame compositing can show gaps or artefacts on fast-moving subjects, so landscape professionals still use real filters."
  ],
  "refs": [
   {
    "t": "Here's why we awarded Olympus OM-D E-M5's LiveTime Best New Technology 2012 — ePHOTOzine",
    "u": "https://www.ephotozine.com/article/olympus-livetime---best-new-technology-2012-20754"
   },
   {
    "t": "StarStaX",
    "u": "https://starstax.net/"
   },
   {
    "t": "Olympus E-M10 Review: Shooter's Report Part II — Imaging Resource",
    "u": "https://imaging-resource.com/news/2014/03/27/olympus-e-m10-review-shooters-report-part-ii-sports-birds-and-stars.-oh-my"
   },
   {
    "t": "Huawei P8 light painting images — Android Authority",
    "u": "https://www.androidauthority.com/huawei-p8-light-painting-images-605592"
   },
   {
    "t": "Live Photos get an upgrade in iOS 11 with new effects, editing tools — TechCrunch",
    "u": "https://techcrunch.com/2017/06/05/live-photos-get-an-upgrade-in-ios-11-with-new-effects-editing-tools"
   },
   {
    "t": "Introducing Spectre — Lux",
    "u": "https://lux.camera/introducing-spectre/"
   },
   {
    "t": "Pixel 6's camera combines hardware, software and ML — Google",
    "u": "https://blog.google/products/pixel/pixel-6s-camera-combines-hardware-software-and-ml/"
   },
   {
    "t": "OM System OM-1 Mark II Adds Live Graduated ND, Improved AF, and More — PetaPixel",
    "u": "https://petapixel.com/2024/01/29/om-system-om-1-mark-ii-adds-live-graduated-nd-improved-af-and-more"
   }
  ]
 },
 "fusion": {
  "stages": [
   [
    2005,
    "paper",
    "Stanford 的 Bennett Wilburn、Marc Levoy 等在 SIGGRAPH 2005 发表《High Performance Imaging Using Large Camera Arrays》：用 100 颗廉价视频摄像头组成阵列，经 4 台 PC 同步录盘，合成出更高分辨率、更大动态范围、更高帧率或大合成孔径的“一台虚拟相机”。",
    "Stanford's Bennett Wilburn, Marc Levoy et al. presented \"High Performance Imaging Using Large Camera Arrays\" at SIGGRAPH 2005: an array of 100 inexpensive video cameras streamed to disk by four PCs and was fused into one virtual camera with higher resolution, dynamic range, frame rate or a large synthetic aperture.",
    [
     0
    ]
   ],
   [
    2013,
    "proto",
    "Pelican Imaging 的 Kartik Venkataraman 等在 SIGGRAPH Asia 2013 发表 PiCam：4×4 单片超薄摄像头阵列，靠视差检测与正则化超分辨率重建，把多颗小镜头的画面融合成一张高分辨率照片，目标是塞进手机。",
    "Pelican Imaging's Kartik Venkataraman et al. presented PiCam at SIGGRAPH Asia 2013: an ultra-thin monolithic 4×4 camera array that used parallax detection and regularized super-resolution to fuse many tiny views into one high-resolution photo, aimed at phones.",
    [
     1
    ]
   ],
   [
    2014,
    "corp",
    "2014 年 12 月 Huawei Honor 6 Plus 搭载两颗 8MP 后摄，宣称等效像素尺寸提升到 1.98 µm 以改善暗光，并可事后对焦、模拟 f/0.95–f/16 光圈；但它两颗都是彩色传感器，融合主要服务于景深。",
    "In December 2014 the Huawei Honor 6 Plus shipped two 8MP rear cameras, claiming an effective pixel size of 1.98 µm for better low light, plus after-the-fact refocus and simulated f/0.95–f/16 apertures; both sensors were color, and the pairing mostly served depth effects.",
    [
     2
    ]
   ],
   [
    2015,
    "proto",
    "Light（2013 年由 Dave Grannan 与 Rajiv Laroia 在 Palo Alto 创立）在 2015 年 10 月公布 L16：16 颗 13MP 模组、焦距 28–150 mm，融合成最高 52MP 的照片，并可事后调景深。",
    "Light (founded in Palo Alto in 2013 by Dave Grannan and Rajiv Laroia) announced the L16 in October 2015: sixteen 13MP modules spanning 28–150 mm, fused into photos of up to 52MP with adjustable depth of field after capture.",
    [
     5
    ]
   ],
   [
    2016,
    "mass",
    "2016 年 4 月 6 日 Huawei P9 在伦敦发布，与 Leica 合作：一颗 12MP 彩色 + 一颗 12MP 黑白传感器，都用 Summarit 镜头。黑白模组没有滤色片，宣称进光量多 200%、对比度高 50%，再与彩色图融合补细节。",
    "Launched in London on 6 April 2016 and co-engineered with Leica, the Huawei P9 paired a 12MP color sensor with a 12MP monochrome sensor behind Summarit lenses. The filterless mono module claimed 200% more light and 50% more contrast, and its detail was fused with the color image.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 9 月 iPhone 7 Plus 采用 28 mm 广角 + 56 mm 长焦双摄，变焦时把两颗摄像头的数据融合，做出“平滑变焦”的单一虚拟相机，多焦段融合从此成为主流用法。",
    "In September 2016 the iPhone 7 Plus used a 28 mm wide plus 56 mm telephoto pair and fused data from both while zooming into one smoothly zooming virtual camera; multi-focal-length fusion became the mainstream use from then on.",
    [
     4
    ]
   ],
   [
    2017,
    "mass",
    "Light L16 在 2017 年 7 月开始交付首批量产机，售价近 2,000 美元；评测普遍批评处理速度慢、暗光表现令人失望。",
    "Light shipped the first production L16 units in July 2017 at almost $2,000; reviewers widely criticized its slow processing and disappointing low-light results.",
    [
     5,
     6
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 Light 与 HMD 合作推出 Nokia 9 PureView：后置 5 颗摄像头一起拍摄再融合。这是唯一用上 Light 技术的手机。",
    "In 2019 Light and HMD released the Nokia 9 PureView, whose five rear cameras captured together and were fused into one image; it remains the only phone to use Light's technology.",
    [
     6
    ]
   ],
   [
    2019,
    "end",
    "2019 年 Huawei P30 Pro 不再用黑白模组，改用 40MP RYYB 主摄（宣称进光量多 40%），原来黑白的位置换成 20MP 超广角：黑白 + 彩色融合被更灵敏的单颗传感器取代。",
    "In 2019 the Huawei P30 Pro dropped the mono module for a 40MP RYYB main sensor (claimed 40% more light) and gave the old mono slot to a 20MP ultra-wide; mono-plus-color fusion was displaced by a more sensitive single sensor.",
    [
     7
    ]
   ],
   [
    2020,
    "end",
    "2020 年 Light 确认退出手机业务，转去做车载被动摄像头深度感知平台 Clarity。多镜头阵列融合成一张照片的路线在消费市场就此告终。",
    "In 2020 Light confirmed it had left the smartphone business and pivoted to Clarity, a passive-camera depth perception platform for vehicles, ending the many-lens-array-to-one-photo approach in consumer products.",
    [
     6
    ]
   ]
  ],
  "now": [
   "今天手机仍普遍有 3–4 颗不同焦段的摄像头，但多摄融合主要用在两个焦段之间的中间倍率（主摄 + 长焦共同成像）和景深估计上；专门的黑白融合模组已从旗舰机消失。",
   "Phones still carry three or four cameras of different focal lengths, but fusion is mostly used for intermediate zoom between two lenses (main plus tele) and for depth estimation; dedicated mono fusion modules have disappeared from flagships."
  ],
  "replaced": [
   "黑白 + 彩色融合被 RYYB、更大底的单颗主摄和单摄多帧合成（HDR+、Night Sight 类）取代；Light 式多镜头阵列被放弃，转向车载深度感知。",
   "Mono-plus-color fusion was replaced by RYYB, larger single main sensors and single-camera multi-frame stacking (HDR+/Night Sight style); Light-style lens arrays were abandoned in favor of automotive depth sensing."
  ],
  "refs": [
   {
    "t": "High Performance Imaging Using Large Camera Arrays (Stanford, SIGGRAPH 2005)",
    "u": "https://graphics.stanford.edu/papers/CameraArray"
   },
   {
    "t": "Pelican Imaging publishes full PiCam paper (Image Sensors World)",
    "u": "https://image-sensors-world.blogspot.com/2013/09/pelican-imaging-publishes-full.html"
   },
   {
    "t": "Huawei's dual-lens phone lets you get artsy, shoot in the dark (Engadget, Honor 6 Plus)",
    "u": "https://www.engadget.com/2014/12/16/huawei-honor-6-plus/"
   },
   {
    "t": "Huawei P9 Debuts in London (Huawei)",
    "u": "https://www.huawei.com/en/news/2016/4/Huawei-P9-Debuts-in-London"
   },
   {
    "t": "Two cameras in iPhone 7 Plus allow synthetic zoom, soft-focus backgrounds (Macworld)",
    "u": "https://www.macworld.com/article/228711/two-cameras-in-iphone-7-plus-allow-synthetic-zoom-soft-focus-backgrounds.html"
   },
   {
    "t": "Light Gets Ready to Shine with L16 Camera (Videomaker)",
    "u": "https://www.videomaker.com/videonews/2015/10/light-gets-ready-to-shine-with-l16-camera/"
   },
   {
    "t": "Light, which designed the Nokia 9 PureView camera, leaves the smartphone market (GSMArena)",
    "u": "https://www.gsmarena.com/light_which_designed_the_nokia_9_pureview_camera_leaves_the_smartphone_market-news-43717.php"
   },
   {
    "t": "How the RYYB sensor on the Huawei P30 Pro works (GSMArena)",
    "u": "https://www.gsmarena.com/how_the_ryyb_sensor_on_the_huawei_p30_pro_works-news-37007.php"
   }
  ]
 },
 "aisr": {
  "stages": [
   [
    2014,
    "paper",
    "香港中文大学的 Chao Dong、Chen Change Loy、Xiaoou Tang 与 Microsoft Research 的 Kaiming He 在 ECCV 2014 发表 SRCNN：用一个 3 层卷积网络端到端学习低分辨率到高分辨率的映射，效果超过 bicubic 与稀疏编码方法，开启深度学习超分。",
    "Chao Dong, Chen Change Loy and Xiaoou Tang (CUHK) with Kaiming He (Microsoft Research) presented SRCNN at ECCV 2014: a three-layer CNN learned the low-to-high-resolution mapping end to end and beat bicubic and sparse-coding methods, launching deep-learning super-resolution.",
    [
     0
    ]
   ],
   [
    2016,
    "corp",
    "Google 的 Yaniv Romano、John Isidoro、Peyman Milanfar 提出 RAISR：先做廉价的双线性放大，再按图像块的哈希选用预先学好的滤波器，比当时主流方法快 10–100 倍；2016 年 11 月由 Google Research 公布。",
    "Google's Yaniv Romano, John Isidoro and Peyman Milanfar proposed RAISR: a cheap bilinear upscale refined by pre-learned filters chosen via a patch hash, 10–100× faster than leading methods; Google Research announced it in November 2016.",
    [
     1
    ]
   ],
   [
    2016,
    "paper",
    "Twitter 的 Christian Ledig 等在 2016 年 9 月放出 SRGAN（CVPR 2017）：用对抗损失 + 感知内容损失训练残差网络，可以从大幅缩小的图里“画”出逼真纹理。从这时起，“补出来的细节未必真实”成为 AI 超分的老问题。",
    "Twitter's Christian Ledig et al. released SRGAN in September 2016 (CVPR 2017): a residual network trained with adversarial plus perceptual content loss that recovered photo-realistic textures from heavily downsampled images. Since then, invented detail that may not be real has been AI super-resolution's standing issue.",
    [
     2
    ]
   ],
   [
    2018,
    "mass",
    "2018 年 8 月 Topaz Labs 推出 A.I. Gigapixel，自称第一款用深度学习放大图像的桌面软件，最高放大 600%，并为画面补出自然细节。",
    "In August 2018 Topaz Labs launched A.I. Gigapixel, billed as the first desktop application to enlarge images with deep learning, upscaling up to 600% while adding natural detail.",
    [
     3
    ]
   ],
   [
    2018,
    "ver",
    "同年 9 月发布 V1.1，10 月推出 A.I. Gigapixel V2，处理速度提升 3–5 倍。",
    "V1.1 followed in September and A.I. Gigapixel V2 arrived in October 2018 with 3–5× faster processing.",
    [
     3
    ]
   ],
   [
    2020,
    "mass",
    "2020 年 2 月 Samsung Galaxy S20 Ultra 推出 100 倍 Space Zoom：折叠长焦提供 10 倍 Hybrid Optic Zoom，再用 AI 多帧超分辨率做出另外 10 倍。高倍数码变焦从此靠 AI 重建。",
    "In February 2020 the Samsung Galaxy S20 Ultra introduced 100× Space Zoom: a folded telephoto gave 10× Hybrid Optic Zoom, and AI multi-frame super-resolution supplied another 10×; high digital zoom now relied on AI reconstruction.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 3 月 10 日 Adobe 在 Camera Raw 13.2 中加入 Super Resolution（Eric Chan 撰文介绍），长宽各放大 2 倍、像素数变为 4 倍。模型用数百万对低/高分辨率图块训练，随后进入 Lightroom。",
    "On 10 March 2021 Adobe added Super Resolution to Camera Raw 13.2 (explained by Eric Chan): 2× per side, 4× the pixels, using a model trained on millions of low/high-resolution patch pairs; Lightroom followed.",
    [
     5
    ]
   ],
   [
    2024,
    "mass",
    "2024 年 7 月 17 日 Canon 发布 EOS R5 Mark II（及 EOS R1），机内 In-Camera Upscaling 用深度学习把像素数放大 4 倍（R5 II 45MP→约 179MP），只在回放时对 JPEG/HEIF 处理。AI 放大首次进入相机机身。",
    "On 17 July 2024 Canon announced the EOS R5 Mark II (and EOS R1); In-Camera Upscaling uses deep learning to quadruple pixel count (45MP to about 179MP on the R5 II), applied to JPEG/HEIF in playback, putting AI upscaling inside a camera body for the first time.",
    [
     6
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 8 月 Google Pixel 10 Pro 推出 Pro Res Zoom：超过 30 倍后，在 Tensor G5 上本地运行单步扩散模型，按传感器拍到的像素重建细节，最高 100 倍。这是 Pixel 相机第一次用扩散模型，生成式超分从此进入手机。",
    "In August 2025 the Google Pixel 10 Pro introduced Pro Res Zoom: beyond 30× it runs a single-step diffusion model on-device on Tensor G5 to rebuild detail from the captured pixels, up to 100×. It was the first diffusion model in Pixel Camera, bringing generative super-resolution to phones.",
    [
     7
    ]
   ]
  ],
  "now": [
   "AI 放大已成为 Lightroom/Photoshop、Topaz 等软件的标准功能，也用于手机高倍变焦和部分相机机内处理；模型正从 CNN/GAN 走向扩散生成模型。",
   "AI upscaling is now standard in Lightroom/Photoshop and Topaz software, in phones' high zoom and in some in-camera processing; models are moving from CNN/GAN toward diffusion-based generation."
  ],
  "replaced": [
   "尚未被淘汰。早期基于 CNN、GAN 的超分正被扩散模型取代；争议点仍是生成出来的细节不等于真实拍到的内容。",
   "Not displaced. Early CNN/GAN super-resolution is being superseded by diffusion models, and the open issue remains that generated detail is not captured reality."
  ],
  "refs": [
   {
    "t": "Image Super-Resolution Using Deep Convolutional Networks (SRCNN, CUHK MMLab)",
    "u": "https://mmlab.ie.cuhk.edu.hk/projects/SRCNN.html"
   },
   {
    "t": "Enhance! RAISR Sharp Images with Machine Learning (Google Research)",
    "u": "https://research.google/blog/enhance-raisr-sharp-images-with-machine-learning/"
   },
   {
    "t": "Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network (arXiv)",
    "u": "https://arxiv.org/abs/1609.04802"
   },
   {
    "t": "A.I. Gigapixel – An Inside Story (Topaz Labs)",
    "u": "https://topazlabs.com/a-i-gigapixel-story/"
   },
   {
    "t": "Galaxy S20 Lights a New Path for Photography with Space Zoom Technology (Samsung)",
    "u": "https://samsungmobilepress.com/feature-stories/galaxy-s20-lights-a-new-path-for-photography-with-high-resolution-sensors-and-space-zoom-technology"
   },
   {
    "t": "Pack more megapixels into your photos with Adobe Super Resolution (Adobe Blog)",
    "u": "https://blog.adobe.com/en/publish/2021/03/10/from-the-acr-team-super-resolution"
   },
   {
    "t": "The New Canon EOS R5 Mark II Aims to be Canon's Best Hybrid Camera (PetaPixel)",
    "u": "https://petapixel.com/2024/07/17/the-new-canon-eos-r5-mark-ii-aims-to-be-canons-best-hybrid-camera"
   },
   {
    "t": "See Pixel 10 Pro's new zoom tech in action (Google)",
    "u": "https://blog.google/products/pixel/google-pixel-pro-res-zoom/"
   }
  ]
 },
 "sem": {
  "stages": [
   [
    2012,
    "idea",
    "希伯来大学的 Liad Kaufman、Dani Lischinski、Michael Werman 在 Computer Graphics Forum 31(8) 发表《Content-Aware Automatic Photo Enhancement》：先检测人脸、蓝天和欠曝的显著区域，再对它们分别增强。这是“按内容分区调整”的早期设想。",
    "Liad Kaufman, Dani Lischinski and Michael Werman (Hebrew University) published \"Content-Aware Automatic Photo Enhancement\" in Computer Graphics Forum 31(8): detect faces, blue skies and underexposed salient regions, then enhance each separately, an early form of content-aware regional adjustment.",
    [
     0
    ]
   ],
   [
    2014,
    "paper",
    "UC Berkeley 的 Jonathan Long、Evan Shelhamer、Trevor Darrell 在 2014 年 11 月放出 FCN（CVPR 2015）：第一次端到端训练全卷积网络做逐像素分类，PASCAL VOC 2012 mean IU 达到 62.2%，为后来的天空、人像、皮肤分割打下基础。",
    "UC Berkeley's Jonathan Long, Evan Shelhamer and Trevor Darrell released FCN in November 2014 (CVPR 2015), the first end-to-end fully convolutional network for pixel-wise labeling, reaching 62.2% mean IU on PASCAL VOC 2012 and laying the base for later sky, person and skin segmentation.",
    [
     1
    ]
   ],
   [
    2018,
    "corp",
    "2018 年 1 月 23 日 Adobe Photoshop CC 19.1 加入 Select Subject，用 Adobe Sensei 深度学习一键选出画面主体，AI 语义选区进入主流修图软件。",
    "On 23 January 2018 Adobe Photoshop CC 19.1 added Select Subject, using Adobe Sensei deep learning to select the main subject in one click and bringing AI semantic selection to mainstream editing.",
    [
     2
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 9 月 iPhone 11 Pro 的新一代 Smart HDR 用机器学习识别画面中的人物，并对人物单独重新打光，让照片更自然、细节更多。",
    "In September 2019 the iPhone 11 Pro's next-generation Smart HDR used machine learning to recognize subjects in the frame and relight them separately for more natural images with more detail.",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "同期发布的 Deep Fusion（iOS 13.2 上线）用 A13 Neural Engine 对多帧照片逐像素处理，对画面不同部分分别优化纹理、细节和噪点，相当于把“分区处理”细化到像素级。",
    "Deep Fusion, announced alongside (shipped in iOS 13.2), used the A13 Neural Engine to process multiple frames pixel by pixel, optimizing texture, detail and noise in each part of the photo, taking regional processing down to the pixel level.",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "Google Pixel 4 的 Night Sight 加入天空分割：一个在 10 万多张人工描边图片上训练的手机端 CNN 逐像素判断“是否天空”，再把天空单独压暗、降噪、提对比，单张不到 0.5 秒。方法由 Orly Liba 等在 CVPRW 2020 发表。",
    "Google Pixel 4's Night Sight added sky segmentation: an on-device CNN trained on over 100,000 hand-traced images labels each pixel sky or not, then the sky is separately darkened, denoised and given contrast, in under 0.5 s per image; Orly Liba et al. published it at CVPRW 2020.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 iPhone 12 的 Smart HDR 3 可以把天空单独分割出来处理再融合回去。Apple 的 Jon McCormack 说，背景、前景、眼睛、嘴唇、头发、皮肤、衣服、天空都会“像 Lightroom 局部调整一样”分别处理。",
    "In 2020 the iPhone 12's Smart HDR 3 segmented the sky, processed it independently and blended it back; Apple's Jon McCormack said background, foreground, eyes, lips, hair, skin, clothing and skies are each processed \"like you would in Lightroom with a bunch of local adjustments\".",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 10 月 Apple 机器学习博客介绍机内全景分割（panoptic segmentation），一个模型同时分出天空、人、头发、皮肤、牙齿、眼镜，用于 Smart HDR 4、Photographic Styles、人像模式，以及低纹理区域的降噪和锐化（iPhone 13 一代）。",
    "In October 2021 Apple's machine learning blog described on-device panoptic segmentation, one model predicting sky, person, hair, skin, teeth and glasses, used for Smart HDR 4, Photographic Styles, Portrait mode and low-texture denoising and sharpening (the iPhone 13 generation).",
    [
     6
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 10 月 26 日 Adobe MAX 上，Lightroom 重做蒙版面板，加入 AI 的 Select Subject 和 Select Sky，一键生成主体/天空蒙版再做局部调整。",
    "At Adobe MAX on 26 October 2021, Lightroom got a redesigned Masking panel with AI Select Subject and Select Sky, creating subject and sky masks in one click for local edits.",
    [
     7
    ]
   ]
  ],
  "now": [
   "语义分割已成为手机 ISP 的标配：人脸、皮肤、天空、头发等区域分别做色调、降噪和锐化；修图软件里 AI 主体/天空/人物蒙版也已是基础功能。",
   "Semantic segmentation is now standard in phone ISPs, with faces, skin, sky and hair each getting their own tone, noise reduction and sharpening; AI subject, sky and people masks are basic features in editing software."
  ],
  "replaced": [
   "尚未被替代；它正被并入更大的端到端神经网络处理流程，分割结果作为中间步骤保留在里面。",
   "Not replaced; it is being absorbed into larger end-to-end neural pipelines, where segmentation remains an intermediate step."
  ],
  "refs": [
   {
    "t": "Content-Aware Automatic Photo Enhancement (Hebrew University, CGF 2012)",
    "u": "https://pages.cs.huji.ac.il/danix-lab/cglab/projects/cape"
   },
   {
    "t": "Fully Convolutional Networks for Semantic Segmentation (arXiv)",
    "u": "https://arxiv.org/abs/1411.4038"
   },
   {
    "t": "Select Subject is Here: Photoshop Now Has AI-Powered One-Click Selections (PetaPixel)",
    "u": "https://petapixel.com/2018/01/23/select-subject-photoshop-now-ai-powered-one-click-selections"
   },
   {
    "t": "iPhone 11 Pro and iPhone 11 Pro Max (Apple Newsroom)",
    "u": "https://www.apple.com/newsroom/2019/09/iphone-11-pro-and-iphone-11-pro-max-the-most-powerful-and-advanced-smartphones/"
   },
   {
    "t": "Sky Optimization: Semantically Aware Image Processing of Skies in Low-Light Photography (CVPRW 2020)",
    "u": "https://openaccess.thecvf.com/content_CVPRW_2020/papers/w31/Liba_Sky_Optimization_Semantically_Aware_Image_Processing_of_Skies_in_Low-Light_CVPRW_2020_paper.pdf"
   },
   {
    "t": "Apple Executives Discuss iPhone 12 and Apple's Approach to Camera Design (MacRumors)",
    "u": "https://www.macrumors.com/2020/11/09/apple-executives-discuss-iphone-12-camera-design"
   },
   {
    "t": "On-device Panoptic Segmentation for Camera Using Transformers (Apple Machine Learning Research)",
    "u": "https://machinelearning.apple.com/research/panoptic-segmentation"
   },
   {
    "t": "MAX 2021 Photography Releases (Adobe Blog)",
    "u": "https://blog.adobe.com/en/publish/2021/10/26/max-2021-photography-releases"
   }
  ]
 },
 "aidn": {
  "stages": [
   [
    2012,
    "paper",
    "Max Planck 研究所（Tübingen）的 Harold Burger、Christian Schuler、Stefan Harmeling 在 CVPR 2012 发表《Image denoising: Can plain Neural Networks compete with BM3D?》：用大图库训练普通多层感知机处理图像块，降噪效果首次追平经典的 BM3D。",
    "Harold Burger, Christian Schuler and Stefan Harmeling (Max Planck Institute, Tübingen) asked at CVPR 2012 \"Can plain Neural Networks compete with BM3D?\": a plain MLP trained on large image databases and applied to patches matched the classic BM3D denoiser for the first time.",
    [
     0
    ]
   ],
   [
    2016,
    "paper",
    "MIT 与 Adobe 的 Michaël Gharbi、Gaurav Chaurasia、Sylvain Paris、Frédo Durand 在 SIGGRAPH Asia 2016 发表《Deep Joint Demosaicking and Denoising》：一个网络同时做去马赛克和降噪，并从社区照片里挖出难处理的图块来训练，速度比之前最好的方法快一个数量级。",
    "Michaël Gharbi, Gaurav Chaurasia, Sylvain Paris and Frédo Durand (MIT/Adobe) presented \"Deep Joint Demosaicking and Denoising\" at SIGGRAPH Asia 2016: one network does both, trained on hard patches mined from community photos, an order of magnitude faster than the previous best.",
    [
     1
    ]
   ],
   [
    2017,
    "paper",
    "Kai Zhang、Wangmeng Zuo、Yunjin Chen、Deyu Meng、Lei Zhang 在 IEEE TIP 26(7) 发表 DnCNN：用残差学习 + batch normalization，一个模型就能处理未知强度的高斯噪声（盲降噪），成为深度降噪的基准。",
    "Kai Zhang, Wangmeng Zuo, Yunjin Chen, Deyu Meng and Lei Zhang published DnCNN in IEEE TIP 26(7): residual learning plus batch normalization let one model handle Gaussian noise of unknown level (blind denoising), becoming the deep-denoising baseline.",
    [
     2
    ]
   ],
   [
    2018,
    "paper",
    "Chen Chen、Qifeng Chen、Jia Xu、Vladlen Koltun（UIUC / Intel Labs）在 CVPR 2018 发表《Learning to See in the Dark》：建立极暗短曝光 RAW 与长曝光参考图的配对数据集，用全卷积网络直接把 RAW 处理成干净的 RGB。",
    "Chen Chen, Qifeng Chen, Jia Xu and Vladlen Koltun (UIUC / Intel Labs) presented \"Learning to See in the Dark\" at CVPR 2018: a dataset of very dark short-exposure RAWs paired with long-exposure references, and a fully convolutional network that turns the RAW straight into clean RGB.",
    [
     3
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 Topaz Labs 推出 DeNoise AI，取代 DeNoise 6 和 AI Clear，售价 79.99 美元，可单独运行，也可作为 Photoshop/Lightroom 插件。",
    "In 2019 Topaz Labs released DeNoise AI, replacing DeNoise 6 and AI Clear, priced at $79.99 and offered standalone or as a Photoshop/Lightroom plug-in.",
    [
     4
    ]
   ],
   [
    2020,
    "mass",
    "2020 年 10 月 DxO PhotoLab 4 推出 DeepPRIME：用一个卷积神经网络在 RAW 上同时完成降噪和去马赛克（首版只支持 Bayer），DxO 称这是第一个商用的同类方案。",
    "In October 2020 DxO PhotoLab 4 introduced DeepPRIME, one convolutional network doing denoising and demosaicing jointly on RAW (Bayer only at first), which DxO calls the first commercially available one.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 DxO PureRAW 2 让 DeepPRIME 支持 Fujifilm X-Trans；PhotoLab 6 推出更重视细节的 DeepPRIME XD（Bayer），2023 年 PureRAW 3 让 XD 也支持 X-Trans。",
    "In 2022 DxO PureRAW 2 extended DeepPRIME to Fujifilm X-Trans and PhotoLab 6 added the detail-focused DeepPRIME XD (Bayer); PureRAW 3 brought XD to X-Trans in 2023.",
    [
     5
    ]
   ],
   [
    2023,
    "mass",
    "2023 年 4 月 Adobe 在 Camera Raw 15.3 和 Lightroom 6.3 推出 AI Denoise，支持 Bayer 和 X-Trans RAW。模型由 Michaël Gharbi 和 Bo Sun 开发，训练用的人工噪声按真实相机的噪声特性生成。",
    "In April 2023 Adobe shipped AI Denoise in Camera Raw 15.3 and Lightroom 6.3 for Bayer and X-Trans RAWs; the models were developed by Michaël Gharbi and Bo Sun and trained on synthetic noise modeled on real camera noise profiles.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 DxO PureRAW 4 推出 DeepPRIME XD2，渲染更自然；PhotoLab 8 推出 DeepPRIME XD2s，按机型细化噪声校准。",
    "In 2024 DxO PureRAW 4 brought DeepPRIME XD2 with more natural rendering, and PhotoLab 8 added DeepPRIME XD2s with refined per-camera noise calibration.",
    [
     5
    ]
   ],
   [
    2024,
    "mass",
    "2024 年 7 月 17 日 Canon 发布 EOS R1 与 EOS R5 Mark II，机内 Neural Network Noise Reduction 在回放的机内 RAW 转换里对高 ISO RAW 做深度学习降噪，约改善 2 档，此前这类处理要靠电脑或云端。",
    "On 17 July 2024 Canon announced the EOS R1 and EOS R5 Mark II, whose in-camera Neural Network Noise Reduction applies deep-learning denoising to high-ISO RAWs during in-camera RAW conversion in playback, about two stops better, work that previously needed a computer or the cloud.",
    [
     7
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 DxO PureRAW 5 的 DeepPRIME 3 把色差校正也并入同一次处理（降噪 + 去马赛克 + 色差三合一）；PhotoLab 9 推出两阶段训练的 DeepPRIME XD3（先支持 X-Trans），2026 年 PureRAW 6 让 XD3 支持 Bayer。",
    "In 2025 DxO PureRAW 5's DeepPRIME 3 folded chromatic aberration correction into the same pass (denoise, demosaic and CA in one), and PhotoLab 9 introduced two-stage-trained DeepPRIME XD3 (X-Trans first); PureRAW 6 brought XD3 to Bayer in 2026.",
    [
     5
    ]
   ]
  ],
  "now": [
   "RAW 深度学习降噪已是 DxO、Adobe、Topaz 等后期软件的标配，并进入 Canon 等相机机身；方向是把去马赛克、降噪、色差校正等多个步骤合成一个网络。",
   "Deep-learning RAW denoising is standard in DxO, Adobe and Topaz software and has entered camera bodies such as Canon's; the trend is to merge demosaicing, denoising and aberration correction into one network."
  ],
  "replaced": [
   "尚未被替代；它取代的是传统的 BM3D、小波等手工设计的降噪滤波器。",
   "Not replaced; it is what displaced hand-designed denoisers such as BM3D and wavelet filters."
  ],
  "refs": [
   {
    "t": "Image denoising: Can plain Neural Networks compete with BM3D? (MPI Tübingen)",
    "u": "https://people.tuebingen.mpg.de/burger/neural_denoising/cvpr2012.html"
   },
   {
    "t": "Deep Joint Demosaicking and Denoising (MIT CSAIL)",
    "u": "https://groups.csail.mit.edu/graphics/demosaicnet"
   },
   {
    "t": "Beyond a Gaussian Denoiser: Residual Learning of Deep CNN for Image Denoising (arXiv)",
    "u": "https://arxiv.org/abs/1608.03981"
   },
   {
    "t": "Learning to See in the Dark (project page)",
    "u": "https://cchen156.github.io/SID.html"
   },
   {
    "t": "The Story Behind DeNoise AI (Topaz Labs)",
    "u": "https://topazlabs.com/the-story-behind-denoise-ai/"
   },
   {
    "t": "DeepPRIME XD3: the fourth generation (DxO)",
    "u": "https://www.dxo.com/news/deepprime-xd3-fourth-generation/"
   },
   {
    "t": "Denoise demystified (Adobe Blog)",
    "u": "https://blog.adobe.com/en/publish/2023/04/18/denoise-demystified"
   },
   {
    "t": "EOS R1: Be One with Mastery (Canon Asia)",
    "u": "https://web.archive.org/web/20240805115749/https://asia.canon/en/consumer/eos-r1-be-one-with-mastery/news"
   }
  ]
 },
 "c2pa": {
  "stages": [
   [
    1993,
    "idea",
    "NASA JPL 的 Gary Friedman 在 IEEE Transactions on Consumer Electronics 39(4) 发表《The Trustworthy Digital Camera》，提出在相机处理器里内置专属私钥、拍摄时给图像文件做数字签名；同年 11 月申请专利，1996 年获批 US 5,499,294。",
    "Gary Friedman of NASA JPL published \"The Trustworthy Digital Camera\" in IEEE Transactions on Consumer Electronics 39(4), proposing a camera-unique private key embedded in the processor to digitally sign each image file; the patent was filed in November 1993 and granted in 1996 as US 5,499,294.",
    [
     0
    ]
   ],
   [
    2011,
    "rival",
    "Canon（Original Decision Data）和 Nikon（Image Authentication，D2Xs、D3X、D700 等）早就推出过各自私有的机内签名。ElcomSoft 约 2010 年底先攻破 Canon，2011 年 4 月又从 Nikon 机身里提取出签名私钥，伪造的照片能通过官方验证：封闭的私有方案就此失去信誉。",
    "Canon (Original Decision Data) and Nikon (Image Authentication, on the D2Xs, D3X, D700 and others) had their own proprietary in-camera signing. ElcomSoft broke Canon's around late 2010, then in April 2011 extracted Nikon's signing key from a camera so forged images passed official validation, discrediting closed proprietary schemes.",
    [
     1
    ]
   ],
   [
    2019,
    "corp",
    "2019 年 11 月 Adobe 与 The New York Times、Twitter 发起 Content Authenticity Initiative（CAI）；Microsoft 与 BBC 等则推动 Project Origin，针对新闻内容来源。",
    "In November 2019 Adobe, The New York Times and Twitter founded the Content Authenticity Initiative (CAI), while Microsoft and the BBC led Project Origin for news provenance.",
    [
     2,
     3
    ]
   ],
   [
    2020,
    "proto",
    "2020 年 10 月 20 日 Adobe MAX 上，CAI 在 Photoshop 测试版和 Behance 中预览内容归属工具，记录作者、编辑过程和素材来源。2021 年 Photoshop 把它改名为 Content Credentials（Beta）。",
    "At Adobe MAX on 20 October 2020, the CAI previewed a content attribution tool in the Photoshop beta and Behance, recording creator, edit activity and assets; Photoshop renamed it Content Credentials (Beta) in 2021.",
    [
     3
    ]
   ],
   [
    2021,
    "corp",
    "2021 年 2 月 22 日 Adobe、Arm、BBC、Intel、Microsoft、Truepic 在 Linux Foundation 旗下成立 C2PA（Coalition for Content Provenance and Authenticity），把 CAI 和 Project Origin 的技术规范合并成一套开放标准。",
    "On 22 February 2021 Adobe, Arm, BBC, Intel, Microsoft and Truepic formed the C2PA (Coalition for Content Provenance and Authenticity) under the Linux Foundation, unifying the CAI and Project Origin specifications into one open standard.",
    [
     2
    ]
   ],
   [
    2022,
    "paper",
    "2022 年 1 月 26 日 C2PA 发布规范 1.0：用加密签名的 manifest 记录谁创建、谁修改、怎么修改，覆盖图片、视频、音频和文档，任何篡改都能被发现。",
    "On 26 January 2022 C2PA released specification 1.0: cryptographically signed manifests record who created or changed content and how, for images, video, audio and documents, making tampering evident.",
    [
     4
    ]
   ],
   [
    2023,
    "mass",
    "2023 年 10 月 26 日 Leica M11-P 成为第一台内置 Content Credentials 的相机：专用芯片里存放德国联邦印刷局（Bundesdruckerei）签发的证书，把机身、镜头、时间、地点等写入签名的 C2PA manifest。",
    "On 26 October 2023 the Leica M11-P became the first camera with Content Credentials built in: a dedicated chipset stores certificates from Germany's Bundesdruckerei and writes camera, lens, time and location into a signed C2PA manifest.",
    [
     5
    ]
   ],
   [
    2025,
    "rival",
    "Nikon 在 2025 年 8 月 27 日的 Z6III 固件 2.00 加入 C2PA（Nikon Authenticity Service），9 月被发现能给不是这台相机拍的图片签出有效凭证，Nikon 随即暂停服务并吊销全部已签发证书。可见硬件签名的安全仍取决于实现。",
    "Nikon added C2PA (Nikon Authenticity Service) in Z6III firmware 2.00 on 27 August 2025; in September it was found able to sign images the camera never took with valid credentials, so Nikon suspended the service and revoked every certificate it had issued, showing hardware signing is only as safe as its implementation.",
    [
     6
    ]
   ],
   [
    2025,
    "mass",
    "2025 年 8 月 Google Pixel 10 系列成为第一款给每张 Pixel Camera 照片都写入 Content Credentials 的手机，签名密钥由 Titan M2 安全芯片的 Android StrongBox 生成和保存，通过 C2PA Conformance Program 的 Assurance Level 2。",
    "In August 2025 the Google Pixel 10 series became the first phones to add Content Credentials to every Pixel Camera photo, with signing keys generated and stored in Android StrongBox on the Titan M2 chip, earning Assurance Level 2 in the C2PA Conformance Program.",
    [
     7
    ]
   ]
  ],
  "now": [
   "C2PA 已成为业界主流的来源标准：Leica、Sony、Nikon、Canon 等相机，Pixel、Galaxy 手机，以及 Adobe 等软件都在支持；难点在于社交平台转发时常常剥掉元数据，各家硬件实现的安全性也参差不齐。",
   "C2PA is the industry's main provenance standard, supported by Leica, Sony, Nikon and Canon cameras, Pixel and Galaxy phones and Adobe software; the hard parts are platforms stripping metadata on upload and uneven security in hardware implementations."
  ],
  "replaced": [
   "尚未被替代；它取代的是 Canon、Nikon 各自封闭的机内签名方案，目前正与隐形水印配合使用，以弥补元数据被剥离的问题。",
   "Not replaced; it superseded Canon's and Nikon's closed in-camera signing schemes and is now paired with invisible watermarks to cover metadata stripping."
  ],
  "refs": [
   {
    "t": "US5499294A – Digital camera with apparatus for authentication of images (Google Patents)",
    "u": "https://patents.google.com/patent/US5499294A"
   },
   {
    "t": "Nikon Image Authentication System: Compromised (ElcomSoft)",
    "u": "https://blog.elcomsoft.com/2011/04/nikon-image-authentication-system-compromised/"
   },
   {
    "t": "Technology and media entities join forces to create standards group (Microsoft)",
    "u": "https://news.microsoft.com/source/2021/02/22/technology-and-media-entities-join-forces-to-create-standards-group-aimed-at-building-trust-in-online-content/"
   },
   {
    "t": "The Content Authenticity Initiative unveils content attribution tool within Photoshop and Behance (Adobe Blog)",
    "u": "https://blog.adobe.com/en/publish/2020/10/20/content-authenticity-initiative-unveils-content-attribution-tool-within-photoshop-behance"
   },
   {
    "t": "C2PA Releases Specification of World's First Industry Standard for Content Provenance",
    "u": "https://c2pa.org/c2pa-releases-specification-of-worlds-first-industry-standard-for-content-provenance/"
   },
   {
    "t": "Leica Launches World's First Camera with Content Credentials (CAI)",
    "u": "https://contentauthenticity.org/blog/leica-launches-worlds-first-camera-with-content-credentials"
   },
   {
    "t": "Nikon Suspends C2PA Functionality on the Z6 III (PetaPixel)",
    "u": "https://petapixel.com/2025/09/05/nikon-suspends-c2pa-functionality-on-the-z6-iii-due-to-authentication-issue"
   },
   {
    "t": "Pixel and Android: trusted images with C2PA Content Credentials (Google Security Blog)",
    "u": "https://security.googleblog.com/2025/09/pixel-android-trusted-images-c2pa-content-credentials.html"
   }
  ]
 },
 "night": {
  "stages": [
   [
    2009,
    "mass",
    "Sony 在 Cyber-shot DSC-HX1（2009 年初）推出“Hand-held Twilight（手持夜景）”模式，8 月的 TX1/WX1 用 Exmor R 背照式传感器延续：不到 1 秒连拍 6 张，由 BIONZ 处理器叠加降噪，不用闪光灯和三脚架，是相机端最早量产的手持多帧夜景。",
    "Sony introduced Hand-held Twilight on the Cyber-shot DSC-HX1 (early 2009), carried to the TX1/WX1 with Exmor R BSI sensors in August: six shots in under a second merged by the BIONZ processor for low noise without flash or tripod, the earliest mass-market handheld multi-frame night mode in cameras.",
    [
     0
    ]
   ],
   [
    2014,
    "corp",
    "Google（Marc Levoy 团队，源自 Google X 的 Gcam 项目）在 Nexus 5/6 的 Google Camera 推出 HDR+：连拍多张短曝光照片，对齐后逐像素平均降噪，并借用天文“lucky imaging”挑最清晰的一张做参考帧。",
    "Google (Marc Levoy's team, from the Google X Gcam project) shipped HDR+ in the Google Camera app on the Nexus 5/6: a burst of short exposures aligned and averaged per pixel to cut noise, borrowing astronomy's 'lucky imaging' to pick the sharpest frame as reference.",
    [
     1
    ]
   ],
   [
    2016,
    "paper",
    "Hasinoff、Sharlet、Geiss、Adams、Barron、Kainz、Chen、Levoy 在 SIGGRAPH Asia 2016 发表 HDR+ 论文：恒定曝光 RAW 连拍、FFT 对齐、2D/3D 混合 Wiener 滤波合并，12MP 在手机上约 4 秒完成。",
    "Hasinoff, Sharlet, Geiss, Adams, Barron, Kainz, Chen and Levoy published the HDR+ paper at SIGGRAPH Asia 2016: constant-exposure raw bursts, FFT-based alignment and hybrid 2D/3D Wiener merging, about 4 s on-phone for 12MP.",
    [
     2
    ]
   ],
   [
    2018,
    "mass",
    "Huawei P20 Pro（2018 年 3 月 27 日发布）推出手持“夜景模式”：借助 AI 防抖（AIS）和 Kirin 970 NPU，几秒内连续曝光多张再对齐合成，手持拍出接近三脚架的夜景，是第一款主打多秒手持夜景的手机。",
    "The Huawei P20 Pro (unveiled 27 March 2018) launched a handheld Night mode: AI image stabilization and the Kirin 970 NPU merge several exposures over a few seconds, giving tripod-like night shots handheld, the first phone built around a multi-second handheld night mode.",
    [
     3
    ]
   ],
   [
    2018,
    "rival",
    "Chen Chen、Qifeng Chen、Jia Xu、Vladlen Koltun 在 CVPR 2018 发表 Learning to See in the Dark：用短曝光 RAW 与长曝光参考图的配对数据集训练端到端 CNN，代表单帧深度学习路线。",
    "Chen Chen, Qifeng Chen, Jia Xu and Vladlen Koltun published Learning to See in the Dark at CVPR 2018: an end-to-end CNN trained on paired short-exposure raw and long-exposure reference images, representing the single-frame deep-learning route.",
    [
     4
    ]
   ],
   [
    2018,
    "ver",
    "Google 于 2018 年 11 月推出 Night Sight（夜视），覆盖三代 Pixel：按手抖和场景运动“motion metering”在 15 张 × 1/15 秒到 6 张 × 1 秒之间自动选择，加学习式白平衡，适用约 3–0.3 lux。",
    "Google launched Night Sight in November 2018 on all three Pixel generations: motion metering picks between 15 frames of 1/15 s and 6 frames of 1 s based on shake and scene motion, with learning-based white balance, for roughly 3 to 0.3 lux.",
    [
     5
    ]
   ],
   [
    2019,
    "ver",
    "Apple iPhone 11（2019 年 9 月）加入 Night mode，依靠新的 100% Focus Pixels 广角传感器和多帧合成，低光照片更亮、噪点更少、颜色更自然。",
    "Apple's iPhone 11 (September 2019) added Night mode, using a new wide sensor with 100% Focus Pixels plus multi-frame fusion for brighter, cleaner, more natural low-light photos.",
    [
     6
    ]
   ],
   [
    2019,
    "paper",
    "Liba、Murthy 等 13 位 Google 作者在 ACM TOG 第 38 卷第 6 期（SIGGRAPH Asia 2019）发表 Handheld Mobile Photography in Very Low Light，系统阐述 Night Sight 在 0.3 lux 下的 motion metering、对齐合并和色调映射。",
    "Liba, Murthy and 11 other Google authors published Handheld Mobile Photography in Very Low Light in ACM TOG 38(6) (SIGGRAPH Asia 2019), detailing Night Sight's motion metering, merging and tone mapping down to 0.3 lux.",
    [
     7
    ]
   ],
   [
    2019,
    "ver",
    "Pixel 4（2019 年）加入星空摄影模式：总曝光最长 4 分钟，拆成每帧不超过 16 秒（约 15 帧）以免星星拉线，再对齐平均；Pixel 3/3a 最长 1 分钟。",
    "The Pixel 4 (2019) added astrophotography: up to 4 minutes total, split into frames of at most 16 s (about 15 frames) so stars stay points, then aligned and averaged; Pixel 3/3a allowed up to 1 minute.",
    [
     8
    ]
   ],
   [
    2022,
    "ver",
    "Snapdragon 8 Gen 2（2022 年 11 月）把多帧夜景做进 ISP 硬件：Mega Multi-Frame Engine 最多合并 30 张，夜景效果号称提升 5 倍。",
    "The Snapdragon 8 Gen 2 (November 2022) moved multi-frame night capture into ISP hardware: its Mega Multi-Frame Engine merges up to 30 frames, claiming 5x better night shots.",
    [
     9
    ]
   ],
   [
    2023,
    "ver",
    "Pixel 8 Pro 的 Video Boost（2023 年底上线（约））把 HDR+ 与 Night Sight 扩展到视频：Tensor G3 先处理，再上传云端逐帧降噪调色，成为 Pixel 首个 Night Sight 视频。",
    "The Pixel 8 Pro's Video Boost (rolled out late 2023 (approx.)) extended HDR+ and Night Sight to video: Tensor G3 does initial processing, then the cloud denoises and grades each frame, giving Pixel its first Night Sight video.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年手持夜景已是所有手机的默认能力，多数机型在光线不足时自动进入：iPhone Night mode、Pixel Night Sight 与星空模式、Huawei/Xiaomi/vivo 夜景；SoC ISP 硬件直接做多帧合并，夜景视频也已普及。",
   "In 2026 handheld night capture is a default feature on every phone and often triggers automatically: iPhone Night mode, Pixel Night Sight and astrophotography, Huawei/Xiaomi/vivo night modes; SoC ISPs merge frames in hardware and night video is common."
  ],
  "replaced": [
   "没有被取代，而是被并入常规拍照流水线（零快门延迟的多帧 HDR+ 默认开启）；下一步是 AI RAW 降噪与生成式模型，加上更大底、双转换增益（DCG）、LOFIC 等单帧高动态传感器，减少对长时间连拍的依赖。",
   "It has not been replaced but folded into the normal capture pipeline (zero-shutter-lag multi-frame HDR+ is always on); next come AI raw denoising and generative models, plus larger sensors and single-exposure high-DR sensors (dual conversion gain, LOFIC) that reduce reliance on long bursts."
  ],
  "refs": [
   {
    "t": "Cyber-shot TX1's Twilight Mode (Gizmodo, 2009)",
    "u": "https://gizmodo.com/cyber-shot-tx1s-twilight-mode-not-for-vampires-but-its-5331123"
   },
   {
    "t": "HDR+: Low Light and High Dynamic Range photography in the Google Camera App (Google Research, 2014)",
    "u": "https://research.google/blog/hdr-low-light-and-high-dynamic-range-photography-in-the-google-camera-app/"
   },
   {
    "t": "Hasinoff et al.: Burst photography for high dynamic range and low-light imaging on mobile cameras (SIGGRAPH Asia 2016)",
    "u": "https://research.google/pubs/burst-photography-for-high-dynamic-range-and-low-light-imaging-on-mobile-cameras/"
   },
   {
    "t": "Huawei's P20 Pro rivals the best smartphone cameras out there (Engadget, 2018)",
    "u": "https://www.engadget.com/2018-03-31-huawei-p20-pro-camera-test.html"
   },
   {
    "t": "Chen et al.: Learning to See in the Dark (CVPR 2018, arXiv)",
    "u": "https://arxiv.org/abs/1805.01934"
   },
   {
    "t": "Night Sight: Seeing in the Dark on Pixel Phones (Google Research, 2018)",
    "u": "https://research.google/blog/night-sight-seeing-in-the-dark-on-pixel-phones/"
   },
   {
    "t": "Apple introduces dual-camera iPhone 11 (Apple Newsroom, 2019)",
    "u": "https://www.apple.com/newsroom/2019/09/apple-introduces-dual-camera-iphone-11/"
   },
   {
    "t": "Liba et al.: Handheld Mobile Photography in Very Low Light (ACM TOG 2019, arXiv)",
    "u": "https://arxiv.org/abs/1910.11336"
   },
   {
    "t": "Astrophotography with Night Sight on Pixel Phones (Google Research, 2019)",
    "u": "https://research.google/blog/astrophotography-with-night-sight-on-pixel-phones/"
   },
   {
    "t": "Snapdragon 8 Gen 2 brings Cognitive ISP to video and photo (ProVideo Coalition)",
    "u": "https://www.provideocoalition.com/snapdragon-8-gen-2-brings-cognitive-isp-to-video-and-photo/"
   },
   {
    "t": "4 tips on getting the most out of Pixel 8 Pro's Video Boost (Google blog)",
    "u": "https://blog.google/products/pixel/how-to-use-video-boost-pixel-8-pro/"
   }
  ]
 },
 "bokeh": {
  "stages": [
   [
    1981,
    "idea",
    "Potmesil 与 Chakravarty 在 SIGGRAPH 1981 提出 lens and aperture camera model：按每个像素的深度把采样点画成大小不同的弥散圆，在合成图像里模拟景深和对焦面。“有了深度就能算出虚化”的思路由此而来。",
    "Potmesil and Chakravarty's SIGGRAPH 1981 lens-and-aperture camera model turned samples into depth-dependent circles of confusion to simulate depth of field and focus planes in synthetic images, the origin of rendering blur from depth.",
    [
     0
    ]
   ],
   [
    2012,
    "rival",
    "Ren Ng 2006 年创立的 Lytro 于 2012 年推出光场相机（11 megaray），拍完可以改对焦点和景深；2014 年推出 Illum（40 megaray），走的是光学路线。",
    "Lytro, founded by Ren Ng in 2006, launched its light-field camera in 2012 (11 megaray), allowing focus and depth of field to be changed after capture, followed by the Illum in 2014 (40 megaray), an optical route.",
    [
     1
    ]
   ],
   [
    2014,
    "mass",
    "HTC One M8（2014 年 3 月）的 Duo Camera 用第二颗摄像头当深度传感器，每张照片都存深度图，UFocus 可事后选对焦点并人工虚化。同期 Samsung S5 Selective Focus、Sony Xperia Z2、Nokia Refocus 则走多张不同焦点合成的路线。",
    "The HTC One M8's Duo Camera (Mar 2014) used a second camera as a depth sensor, storing a depth map with every photo so UFocus could refocus and add synthetic blur later; Samsung's S5 Selective Focus, Sony's Xperia Z2 and Nokia Refocus instead merged multiple focus-bracketed shots.",
    [
     2
    ]
   ],
   [
    2014,
    "ver",
    "Google Camera 的 Lens Blur（2014 年 4 月）只用单摄：用户把手机向上扫一下，用 Structure-from-Motion、bundle adjustment 和 Multi-View Stereo 算出深度，再按深度渲染虚化，拍后可改焦点和光圈。",
    "Google Camera's Lens Blur (Apr 2014) used one camera: the user sweeps the phone upward, depth comes from Structure-from-Motion, bundle adjustment and Multi-View Stereo, and blur is rendered by depth, with focus and aperture adjustable afterward.",
    [
     3
    ]
   ],
   [
    2014,
    "ver",
    "Huawei Honor 6 Plus（2014 年 12 月）用两颗同规格 8 MP 摄像头做双目视差，可在拍后模拟 f/0.95 到 f/16 的光圈并重新对焦。",
    "Huawei's Honor 6 Plus (Dec 2014) used two identical 8 MP cameras for stereo disparity, letting users refocus and simulate f/0.95 to f/16 after capture.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "iPhone 7 Plus 的 Portrait mode 随 iOS 10.1 于 2016 年 10 月 24 日推出（beta），用两颗 12 MP 摄像头加 machine learning 生成景深效果，把计算虚化带进主流。",
    "iPhone 7 Plus Portrait mode arrived with iOS 10.1 on Oct 24, 2016 (beta), using dual 12 MP cameras plus machine learning for the depth effect and taking computational bokeh mainstream.",
    [
     5
    ]
   ],
   [
    2017,
    "paper",
    "Google Pixel 2 用单摄做人像模式：人像分割网络加 dual-pixel 对焦像素提供的视差深度，5.4 MP 约 4 秒出图；Wadhwa、Levoy 等把它发表为 SIGGRAPH 2018 论文。双摄不再是必需。",
    "Google's Pixel 2 did Portrait mode with one camera: a person-segmentation network plus depth from dual-pixel AF disparity, about 4 s per 5.4 MP image; Wadhwa, Levoy et al. published it at SIGGRAPH 2018. Dual cameras were no longer required.",
    [
     6
    ]
   ],
   [
    2018,
    "end",
    "Lytro 于 2018 年 3 月停业，员工转去 Google：光场相机这条“拍后重对焦”路线输给了手机上的深度估计加计算虚化。",
    "Lytro shut down in Mar 2018 and staff moved to Google; the light-field route to after-the-fact refocus lost to depth estimation plus computational blur on phones.",
    [
     1
    ]
   ],
   [
    2021,
    "ver",
    "iPhone 13 系列的 Cinematic mode（A15 Bionic 加 machine learning）把计算虚化做到视频里：自动在人、宠物、物体之间 rack focus，录完还能改焦点和景深，并以 Dolby Vision HDR 记录。",
    "The iPhone 13 line's Cinematic mode (A15 Bionic plus machine learning) brought computational bokeh to video: automatic rack focus between people, pets and objects, focus and depth editable after recording, captured in Dolby Vision HDR.",
    [
     7
    ]
   ],
   [
    2023,
    "ver",
    "iPhone 15 的 next-generation portraits：画面里有人、狗、猫或用户点按对焦时自动记录深度，不必切到 Portrait mode，之后可在 Photos 里转成人像并改对焦点。",
    "iPhone 15's next-generation portraits automatically capture depth when a person, dog or cat is in frame or the user taps to focus, with no need to switch to Portrait mode; photos can become portraits later in Photos with the focus point changed.",
    [
     8
    ]
   ],
   [
    2024,
    "rival",
    "光学路线回潮：Xiaomi 14 Ultra 用 1 英寸传感器加 f/1.63–f/4.0 无级可变光圈，靠更大的传感器和真实光圈获得光学浅景深和曝光控制，与纯算法虚化互补。",
    "The optical route returned: the Xiaomi 14 Ultra paired a 1-inch sensor with a stepless f/1.63–f/4.0 variable aperture, getting real optical shallow depth of field and exposure control that complement algorithmic bokeh.",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年计算虚化已是所有手机的标配：拍照可自动记录深度、事后改焦点（iPhone 15 及以后），视频有 Cinematic mode 一类的实时虚化；深度来自双摄视差、dual-pixel、LiDAR 和单目深度网络的融合。",
   "In 2026 computational bokeh is standard on every phone: depth is auto-captured for after-the-fact refocus (iPhone 15 onward), video has Cinematic-mode-style real-time blur, and depth fuses stereo disparity, dual-pixel, LiDAR and monocular depth networks."
  ],
  "replaced": [
   "没有被取代，而是从“双摄硬件特性”演变为通用的深度网络加渲染。另一边，1 英寸大底和可变光圈让手机重新获得部分光学虚化，两者正在融合。下一步是更真实的镜头光学模拟（焦外形状、像差）。",
   "Not replaced; it evolved from a dual-camera hardware feature into general depth networks plus rendering. Meanwhile 1-inch sensors and variable apertures give phones some real optical blur, and the two are converging. Next comes more faithful lens simulation (bokeh shape, aberrations)."
  ],
  "refs": [
   {
    "t": "A Lens and Aperture Camera Model for Synthetic Image Generation (SIGGRAPH 1981) - ACM SIGGRAPH History Archives",
    "u": "https://history.siggraph.org/?p=106416"
   },
   {
    "t": "Lytro - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Lytro"
   },
   {
    "t": "Blurring the background: Understanding focus, defocus, refocus and Ufocus - Android Central",
    "u": "https://www.androidcentral.com/blurring-background-understanding-focus-defocus-refocus-and-ufocus"
   },
   {
    "t": "Lens Blur in the new Google Camera app - Google Research Blog",
    "u": "https://www.research.google/blog/lens-blur-in-the-new-google-camera-app/"
   },
   {
    "t": "Huawei's dual-lens phone lets you get artsy, shoot in the dark - Engadget (Honor 6 Plus)",
    "u": "https://www.engadget.com/2014/12/16/huawei-honor-6-plus/"
   },
   {
    "t": "Portrait mode now available on iPhone 7 Plus with iOS 10.1 - Apple Newsroom",
    "u": "https://www.apple.com/newsroom/2016/10/portrait-mode-now-available-on-iphone-7-plus-with-ios-101/"
   },
   {
    "t": "Synthetic Depth-of-Field with a Single-Camera Mobile Phone - arXiv",
    "u": "https://arxiv.org/abs/1806.04171"
   },
   {
    "t": "Apple unveils iPhone 13 Pro and iPhone 13 Pro Max - Apple Newsroom",
    "u": "https://www.apple.com/newsroom/2021/09/apple-unveils-iphone-13-pro-and-iphone-13-pro-max-more-pro-than-ever-before/"
   },
   {
    "t": "Apple debuts iPhone 15 and iPhone 15 Plus - Apple Newsroom",
    "u": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/"
   },
   {
    "t": "Forget the 1-inch sensor, the Xiaomi 14 Ultra's variable aperture is the true headline feature - Notebookcheck",
    "u": "https://www.notebookcheck.net/Forget-the-1-inch-sensor-the-Xiaomi-14-Ultra-s-variable-aperture-is-the-true-headline-feature.807929.0.html"
   }
  ]
 }
};
