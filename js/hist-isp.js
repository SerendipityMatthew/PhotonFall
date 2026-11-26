/* ISP时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 isp 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：cmos:lfm、cmos:ai>onsensor */
TIMELINES.isp.hist = {
 "eis": {
  "stages": [
   [
    1988,
    "idea",
    "Panasonic（Matsushita）的 Mitsuaki Oshima 团队研究检测并抵消手抖，1988 年推出世界首台带防抖的摄像机 PV-460；它用振动陀螺仪 + 摆动镜头单元，属于光学路线。",
    "A Panasonic (Matsushita) team led by Mitsuaki Oshima set out to detect and cancel hand shake; the 1988 PV-460 was the first camcorder with stabilization, using a vibration gyro sensor and a swinging lens unit (an optical approach).",
    [
     0
    ]
   ],
   [
    1989,
    "paper",
    "Oshima、Hayashi 等在 IEEE Transactions on Consumer Electronics 35 卷 4 期发表《VHS camcorder with electronic image stabilizer》，并申请了一批防抖专利。",
    "Oshima, Hayashi et al. published \"VHS camcorder with electronic image stabilizer\" in IEEE Transactions on Consumer Electronics vol. 35 no. 4 (Nov 1989), alongside a family of stabilization patents.",
    [
     0
    ]
   ],
   [
    1990,
    "mass",
    "Panasonic NV-S1（“Brenby”）改用电子防抖 EIS：在传感器上读出比成片略小的区域并逐帧平移，机身因此大幅缩小；代价是不能防静态照片、画质有些损失。",
    "The Panasonic NV-S1 (\"Brenby\") switched to electronic stabilization: it read out a slightly smaller window and shifted it frame by frame, allowing a much smaller body, at the cost of no help for stills and some quality loss.",
    [
     0,
     1
    ]
   ],
   [
    1995,
    "rival",
    "光学防抖（镜片或后来的传感器位移）一直是对手：它能在单帧曝光期间抵消抖动，而 EIS 只能对齐帧与帧，无法消除帧内的运动模糊，所以 1990 年代 EIS 主要留在低价摄像机里（约）。",
    "Optical stabilization (lens shift, later sensor shift) remained the rival: it can cancel motion during a single exposure, while EIS only aligns frames and cannot remove intra-frame motion blur, so through the 1990s EIS mostly stayed in cheaper camcorders (approx.).",
    [
     0,
     1
    ]
   ],
   [
    2011,
    "ver",
    "iPhone 4S（2011 年 10 月）以 1080p 视频加“video image stabilization”为卖点，EIS 从此成为智能手机标配。",
    "The iPhone 4S (Oct 2011) advertised 1080p video with \"video image stabilization\", making EIS a standard smartphone feature.",
    [
     2
    ]
   ],
   [
    2011,
    "paper",
    "Stanford 的 Karpenko、Jacobs、Baek、Levoy 发表 CSTR 2011-03：用手机自带陀螺仪实时估计相机旋转，同时做防抖和卷帘快门校正，并在手机 GPU 上实时运行，这是陀螺仪 EIS 的基础方法。",
    "Karpenko, Jacobs, Baek and Levoy (Stanford CSTR 2011-03) used the phone's own gyroscope to estimate rotation and correct both shake and rolling-shutter wobble in real time on the phone GPU, the basis of modern gyro EIS.",
    [
     3
    ]
   ],
   [
    2011,
    "rival",
    "另一条路线是纯图像后处理：Grundmann、Kwatra、Essa 在 CVPR 2011 提出 L1 最优相机路径（分段常速/匀加速，模仿摄影师运镜），被做进 YouTube Video Editor 的上传后防抖。",
    "A rival line was image-only post-processing: Grundmann, Kwatra and Essa (CVPR 2011) computed L1-optimal camera paths made of constant, linear and parabolic segments; it shipped as YouTube Video Editor's post-upload stabilizer.",
    [
     4
    ]
   ],
   [
    2014,
    "paper",
    "Microsoft Research 的 Kopf、Cohen、Szeliski 在 SIGGRAPH 2014 发表 First-person Hyperlapse：重建 3D 相机轨迹和逐帧代理几何，再渲染一条全新的平滑路径，解决快进时抖动被放大的问题。",
    "Kopf, Cohen and Szeliski (Microsoft Research, SIGGRAPH 2014) reconstructed the 3D camera path and per-frame proxy geometry, then rendered a new smooth path, fixing the shake amplification of sped-up first-person video.",
    [
     5
    ]
   ],
   [
    2015,
    "ver",
    "安防摄像机也用上 EIS：Axis Q1941-E 热成像网络摄像机（384×288）提供电子防抖，抵消风和车流引起的立杆振动，代价是轻微裁切，好处是码率还会降低（约）。",
    "Security cameras adopted EIS: the Axis Q1941-E thermal network camera (384×288) offers EIS against pole vibration from wind and traffic, cropping slightly but also lowering bitrate (approx.).",
    [
     8
    ]
   ],
   [
    2017,
    "ver",
    "Google Pixel 2 的 Fused Video Stabilization 同时开 OIS 和 EIS：200 Hz 陀螺仪逐行建模卷帘快门，用 lookahead 滤波预读未来帧的运动来判断用户意图，再对网格分块非刚性变形。",
    "Pixel 2's Fused Video Stabilization ran OIS and EIS together: a 200 Hz gyro modelled rolling shutter per scanline, a lookahead filter used future motion to infer intent, and frames were warped per mesh cell.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "GoPro HERO7 Black（2018 年 9 月）推出 HyperSmooth，最高 4K60 下实现“类云台”的电子防抖，内存从 1 GB 加到 2 GB 以缓存更多帧，GoPro 称可以不买 Karma Grip 稳定器。",
    "GoPro HERO7 Black (Sept 2018) introduced HyperSmooth, \"gimbal-like\" EIS up to 4K60, with RAM doubled to 2 GB to buffer frames; GoPro said users would no longer need its Karma Grip gimbal.",
    [
     7
    ]
   ],
   [
    2021,
    "rival",
    "Gyroflow（Elvin Chen 的 Python 原型，Adrian Eddy 用 Rust 重写，2021 年 11 月建库）把防抖挪到后期：读取 GoPro、Sony、DJI、Insta360 等机内记录的陀螺仪数据和镜头配置文件，在电脑上做带卷帘校正的稳像。",
    "Gyroflow (Elvin Chen's Python prototype, rewritten in Rust by Adrian Eddy, repo created Nov 2021) moved stabilization to post: it reads gyro logs recorded by GoPro, Sony, DJI and Insta360 cameras plus lens profiles and stabilizes with rolling-shutter correction on a computer.",
    [
     9
    ]
   ],
   [
    2024,
    "ver",
    "GoPro HERO13 Black 的 HyperSmooth 6.0 加入 AutoBoost（按需加大裁切）和 360° Horizon Lock，相机整圈翻转时地平线仍保持水平，分析速度比 5.0 快 4 倍。",
    "GoPro HERO13 Black's HyperSmooth 6.0 added AutoBoost (cropping only as much as needed) and 360° Horizon Lock that keeps the horizon level through full rotation, analysing 4x faster than 5.0.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年陀螺仪驱动的 EIS 已是手机、运动相机、无人机和安防摄像机的标配，通常与 OIS 或传感器位移叠加（hybrid）；例子有 GoPro HERO13 Black 的 HyperSmooth 6.0、Pixel 系列的 Fused Video Stabilization，以及 Gyroflow 这类基于陀螺仪日志的后期稳像。",
   "In 2026 gyro-driven EIS is standard in phones, action cameras, drones and security cameras, usually stacked with OIS or sensor shift (hybrid); examples include GoPro HERO13 Black's HyperSmooth 6.0, Pixel's Fused Video Stabilization, and gyro-log post stabilization such as Gyroflow."
  ],
  "replaced": [
   "EIS 没有被取代，而是被吸收进混合防抖：它仍无法消除单帧内的运动模糊，所以弱光下要靠 OIS / 传感器位移补足；下一步是更多利用前视帧缓存、360° 全景重构图和 AI 运动估计，并把一部分稳像挪到后期。",
   "EIS has not been replaced but absorbed into hybrid stabilization: it still cannot remove intra-frame motion blur, so OIS or sensor shift covers low light; next steps are deeper lookahead buffers, 360° reframing and AI motion estimation, with some stabilization moved to post."
  ],
  "refs": [
   {
    "t": "IEEE Milestone: Camcorder with Image Stabilization, 1988 (ETHW)",
    "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
   },
   {
    "t": "Image stabilization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Image_stabilization"
   },
   {
    "t": "Apple Launches iPhone 4S, iOS 5 & iCloud (Apple Newsroom, Oct 2011)",
    "u": "https://www.apple.com/uk/newsroom/2011/10/04Apple-Launches-iPhone-4S-iOS-5-iCloud/"
   },
   {
    "t": "Digital Video Stabilization and Rolling Shutter Correction using Gyroscopes (Karpenko et al., Stanford 2011)",
    "u": "https://graphics.stanford.edu/papers/stabilization/"
   },
   {
    "t": "Auto-Directed Video Stabilization with Robust L1 Optimal Camera Paths (Grundmann et al., CVPR 2011)",
    "u": "https://research.google/pubs/auto-directed-video-stabilization-with-robust-l1-optimal-camera-paths/"
   },
   {
    "t": "First-person Hyperlapse Videos (Kopf, Cohen, Szeliski, SIGGRAPH 2014)",
    "u": "https://www.microsoft.com/en-us/research/publication/first-person-hyperlapse-videos/"
   },
   {
    "t": "Fused Video Stabilization on the Pixel 2 and Pixel 2 XL (Google Research Blog)",
    "u": "https://research.google/blog/fused-video-stabilization-on-the-pixel-2-and-pixel-2-xl/"
   },
   {
    "t": "Review: With the Hero7 Black, GoPro looks towards stability (TechCrunch)",
    "u": "https://techcrunch.com/2018/09/20/review-with-the-hero7-black-gopro-looks-towards-stability/"
   },
   {
    "t": "AXIS Q1941-E Thermal Network Camera (Axis)",
    "u": "https://www.axis.com/products/axis-q1941-e"
   },
   {
    "t": "Gyroflow (GitHub)",
    "u": "https://github.com/gyroflow/gyroflow"
   },
   {
    "t": "GoPro HERO 13 Black (Newsshooter)",
    "u": "https://www.newsshooter.com/2024/09/04/gopro-hero-13-black/"
   }
  ]
 },
 "wdr": {
  "stages": [
   [
    1995,
    "paper",
    "MIT Media Lab 的 Steve Mann 与 Rosalind Picard 在 IS&T 第 48 届年会（1995 年 5 月）发表《Being 'Undigital' with Digital Cameras》：多张只差曝光的照片合起来能覆盖远大于单张的动态范围，且不需要预先标定相机响应。",
    "Steve Mann and Rosalind Picard (MIT Media Lab) presented \"Being 'Undigital' with Digital Cameras\" at IS&T's 48th conference (May 1995): differently exposed shots of one scene jointly cover far more dynamic range, without prior camera calibration.",
    [
     0,
     11
    ]
   ],
   [
    1997,
    "paper",
    "Paul Debevec 与 Jitendra Malik 在 SIGGRAPH 97 发表《Recovering High Dynamic Range Radiance Maps from Photographs》，从包围曝光中求出相机响应曲线，合成真实场景辐射亮度的 HDR 图。",
    "Paul Debevec and Jitendra Malik's SIGGRAPH 97 paper recovered the camera response curve from bracketed exposures and merged them into a radiance map of true scene luminance.",
    [
     2
    ]
   ],
   [
    1997,
    "mass",
    "Panasonic 在监控摄像机上推出第一代 Super Dynamic 宽动态技术，用长短两次曝光 + DSP 合成，让逆光门口等场景同时看清亮部和暗部（约）。",
    "Panasonic launched first-generation Super Dynamic WDR in security cameras, merging a long and a short exposure in a DSP so backlit doorways show both highlights and shadows (approx.).",
    [
     3
    ]
   ],
   [
    1998,
    "paper",
    "Steve Mann 的美国专利 US5828793（1998 年 10 月 27 日授权）描述按“确定性函数”加权融合多张不同曝光的图像，并自动配准。",
    "Steve Mann's US patent 5,828,793 (granted Oct 27, 1998) covers registering differently exposed images and blending them with certainty-function weights.",
    [
     1
    ]
   ],
   [
    2005,
    "ver",
    "Panasonic Super Dynamic III（2005 年 3 月发布）用新设计的 CCD 加 DSP，把动态范围做到普通摄像机的 128 倍，首批机型是 WV-CS954 球机和 WV-CP480 枪机。",
    "Panasonic Super Dynamic III (March 2005) combined a new CCD and DSP to reach 128x the dynamic range of conventional cameras, debuting in the WV-CS954 dome and WV-CP480 fixed cameras.",
    [
     3
    ]
   ],
   [
    2009,
    "mass",
    "Pentax K-7（2009 年 5 月 20 日发布）是首批带机内 HDR 的单反：连拍三张不同曝光自动合成一张 JPEG。",
    "The Pentax K-7 (announced May 20, 2009) was among the first DSLRs with in-camera HDR, merging three differently exposed frames into one JPEG.",
    [
     4
    ]
   ],
   [
    2009,
    "ver",
    "Sony α550（2009 年 8 月 27 日发布）的 Auto HDR 连拍两帧、曝光差 1–3 EV，并在机内自动对齐手持造成的错位，免去三脚架。",
    "Sony α550 (announced Aug 27, 2009) Auto HDR shot two frames 1–3 EV apart and corrected handheld misalignment in-camera, removing the need for a tripod.",
    [
     5
    ]
   ],
   [
    2010,
    "ver",
    "iOS 4.1（2010 年 9 月）给 iPhone 4 加入 HDR 拍照：欠曝、正常、过曝三张合成，每张处理约 7–10 秒，可选择同时保留原图。",
    "iOS 4.1 (Sept 2010) brought HDR to iPhone 4: under, normal and over exposures merged in about 7–10 s, optionally keeping the original.",
    [
     6
    ]
   ],
   [
    2014,
    "ver",
    "Google 的 HDR+（2014 年 10 月，Nexus 5/6）改变思路：不做包围曝光，而是连拍一串同样偏暗的短曝光帧，对齐后平均降噪，既保住高光又把暗部噪声压下去。",
    "Google's HDR+ (Oct 2014, Nexus 5/6) dropped bracketing: it shot a burst of identically underexposed short frames, aligned and averaged them, keeping highlights while cleaning shadow noise.",
    [
     7
    ]
   ],
   [
    2014,
    "rival",
    "传感器端的 Sony DOL-HDR（Digital Overlap）把长短 2–3 次曝光在同一帧时间内按行交错读出，用于 IMX224、IMX290 等监控传感器；缺点是运动物体会有重影（约）。",
    "On the sensor side, Sony's DOL-HDR (Digital Overlap) reads 2–3 exposures line-interleaved within one frame time in surveillance sensors such as IMX224 and IMX290; moving objects can ghost (approx.).",
    [
     9
    ]
   ],
   [
    2018,
    "rival",
    "车载要求无重影和抗 LED 频闪，Sony IMX490 用大小两种子像素、各自再分高低转换增益，一次曝光得到 4 路 12 bit 数据，在片上合成 24 bit、约 120 dB 的图像（约）。",
    "Automotive needs ghost-free, flicker-free HDR: Sony's IMX490 uses large and small sub-pixels, each read at high and low conversion gain, giving four 12-bit channels per exposure merged on-chip into 24-bit, ~120 dB output (approx.).",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "Snapdragon 888 的 Spectra 580 ISP（2020 年 12 月发布）专门支持 staggered HDR 交错曝光传感器，2021 年机型可以对 4K 视频的每一帧做计算 HDR。",
    "Snapdragon 888's Spectra 580 ISP (announced Dec 2020) was built for staggered-HDR sensors, letting 2021 phones apply computational HDR to every frame of 4K video.",
    [
     10
    ]
   ],
   [
    2022,
    "end",
    "单次曝光双增益正在取代多次曝光：Sony STARVIS 2（IMX675/676/678）的 Clear HDR 同时读出 HCG 与 LCG 两路，运动场景零重影；多帧 DOL 只在静态、极暗场景里仍有优势（约）。",
    "Single-exposure dual gain is displacing multi-exposure: Clear HDR in Sony STARVIS 2 (IMX675/676/678) reads HCG and LCG simultaneously with no motion ghosting, while multi-frame DOL keeps an edge only in static, very dark scenes (approx.).",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年宽动态已是所有相机的基础功能：手机用连拍多帧合成（HDR+ 一类）加交错曝光视频 HDR，安防与车载转向单次曝光的双转换增益、分离像素和 LOFIC 方案，例子有 Sony STARVIS 2 IMX678、车载 IMX490 一类传感器和 Snapdragon 平台的计算 HDR 视频。",
   "In 2026 WDR is a baseline feature everywhere: phones use multi-frame burst merging (HDR+ style) plus staggered-exposure HDR video, while security and automotive move to single-exposure dual conversion gain, split pixels and LOFIC, e.g. Sony STARVIS 2 IMX678, IMX490-class automotive sensors and Snapdragon computational HDR video."
  ],
  "replaced": [
   "早期“两次曝光 + DSP 拼接”的 WDR 正被单次曝光的传感器内 HDR（双增益、分离像素、LOFIC）取代，因为后者没有运动重影、也能抗 LED 频闪；计算侧则走向连拍对齐合成和神经网络色调映射。",
   "Early two-exposure DSP-stitched WDR is being replaced by single-exposure on-sensor HDR (dual gain, split pixels, LOFIC), which avoids motion ghosting and LED flicker; on the compute side the trend is aligned burst merging and neural tone mapping."
  ],
  "refs": [
   {
    "t": "TR-323: Being 'Undigital' with Digital Cameras (Mann & Picard, MIT Media Lab 1995)",
    "u": "https://vismod.media.mit.edu/pub/tech-reports/TR-323-ABSTRACT.html"
   },
   {
    "t": "US5828793A: Method and apparatus for producing digital images having extended dynamic ranges (Google Patents)",
    "u": "https://patents.google.com/patent/US5828793"
   },
   {
    "t": "Recovering High Dynamic Range Radiance Maps from Photographs (Debevec & Malik, SIGGRAPH 1997)",
    "u": "https://history.siggraph.org/?p=117286"
   },
   {
    "t": "Panasonic Super Dynamic III (SecurityInfoWatch, 2005)",
    "u": "https://www.securityinfowatch.com/video-surveillance/article/10609400/video-surveillance"
   },
   {
    "t": "Pentax K-7 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_K-7"
   },
   {
    "t": "Sony unveils DSLR-A550 and DSLR-A500 (DPReview)",
    "u": "https://www.dpreview.com/?p=316586"
   },
   {
    "t": "iOS 4.1 hands-on: Is HDR really that good? (The Next Web)",
    "u": "https://thenextweb.com/news/ios-4-1-hands-on-is-hdr-really-that-good"
   },
   {
    "t": "HDR+: Low Light and High Dynamic Range photography in the Google Camera App (Google Research Blog)",
    "u": "https://research.google/blog/hdr-low-light-and-high-dynamic-range-photography-in-the-google-camera-app/"
   },
   {
    "t": "Sony IMX490 HDR Sensor and Flicker Mitigation (LUCID Vision Labs)",
    "u": "https://thinklucid.com/tech-briefs/sony-imx490-hdr-sensor-and-flicker-mitigation/"
   },
   {
    "t": "Clear HDR vs DOL HDR (e-con Systems)",
    "u": "https://www.e-consystems.com/blog/camera/technology/clear-hdr-vs-dol-hdr-which-hdr-technology-is-right-for-your-application/"
   },
   {
    "t": "Inside the Snapdragon 888 (PCWorld)",
    "u": "https://www.pcworld.com/article/393754/inside-the-snapdragon-888-the-features-youll-find-in-2021s-premium-phones.html"
   },
   {
    "t": "High-dynamic-range imaging - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/High-dynamic-range_imaging"
   }
  ]
 },
 "face": {
  "stages": [
   [
    1998,
    "paper",
    "CMU 的 Henry Rowley、Shumeet Baluja、Takeo Kanade 在 IEEE PAMI 发表《Neural Network-Based Face Detection》：用神经网络扫描小窗口判断是否为正脸，并用 bootstrap 收集负样本。",
    "Henry Rowley, Shumeet Baluja and Takeo Kanade (CMU) published \"Neural Network-Based Face Detection\" in IEEE PAMI (Jan 1998): a neural net scans small windows for upright frontal faces, trained with bootstrapped negatives.",
    [
     0
    ]
   ],
   [
    2001,
    "paper",
    "Paul Viola 与 Michael Jones 在 CVPR 2001 提出积分图 + AdaBoost + 级联分类器，在 700 MHz Pentium III 上对 384×288 视频做到 15 fps，第一次让人脸检测能实时跑在弱处理器上，成为相机里人脸检测十年的主流算法。",
    "Paul Viola and Michael Jones (CVPR 2001) combined integral images, AdaBoost and a classifier cascade to detect faces at 15 fps on 384×288 video on a 700 MHz Pentium III, making real-time detection feasible on weak processors and dominating in-camera detection for a decade.",
    [
     1
    ]
   ],
   [
    2005,
    "mass",
    "Nikon 于 2005 年 2 月 16 日推出业界首个 Face-priority AF，搭载在 Coolpix 7900、5900、7600 上：人像模式下自动找脸并对焦，技术来自 Identix 的 FaceIt。",
    "On Feb 16, 2005 Nikon introduced the industry-first Face-priority AF on the Coolpix 7900, 5900 and 7600: in portrait mode the camera finds a face and focuses on it, using Identix's FaceIt technology.",
    [
     2
    ]
   ],
   [
    2006,
    "ver",
    "Fujifilm 把人脸检测做进 Real Photo Processor II 硬件（先在 S6000fd/S6500fd，9 月又下放到口袋机 F31fd）：0.05 秒内找到最多 10 张脸并据此对焦和测光。",
    "Fujifilm put face detection into Real Photo Processor II hardware (first S6000fd/S6500fd, then the pocket F31fd in September): up to 10 faces found within 0.05 s to drive focus and exposure.",
    [
     3
    ]
   ],
   [
    2006,
    "ver",
    "Lexus GS 450h 在日本首次搭载驾驶员监测系统：转向柱上的 CCD 摄像头配红外 LED 判断驾驶员脸朝向，走神时提前触发预碰撞警报；同年 2 月 Toyota 在日内瓦公布 LS 460 的同类系统。",
    "The Lexus GS 450h in Japan was first with a Driver Monitoring System: a steering-column CCD camera with infrared LEDs tracks face direction and brings forward pre-crash warnings; in Feb 2006 Toyota showed the same for the LS 460 at Geneva.",
    [
     4,
     5
    ]
   ],
   [
    2007,
    "ver",
    "Sony Cyber-shot T200/T70（2007 年 8 月 21 日发布）在人脸检测基础上加入 Smile Shutter，检测到笑容自动按快门，人脸检测从“找脸”走向“读表情”。",
    "Sony's Cyber-shot T200/T70 (announced Aug 21, 2007) added Smile Shutter on top of face detection, firing automatically on a smile and moving from finding faces to reading expressions.",
    [
     6
    ]
   ],
   [
    2008,
    "ver",
    "Sony Ericsson C902 Cyber-shot（2008 年 2 月 10 日发布，5 MP）把人脸检测对焦带进手机。同年 Toyota Crown Hybrid 的驾驶员监测增加了眼睑闭合检测疲劳。",
    "The Sony Ericsson C902 Cyber-shot (announced Feb 10, 2008, 5 MP) brought face-detection AF to phones; the same year Toyota's Crown Hybrid added eyelid-based drowsiness detection to driver monitoring.",
    [
     7,
     4
    ]
   ],
   [
    2018,
    "ver",
    "Dahua 于 2018 年 7 月 12 日发布 deepsense 深度学习人脸检测/识别网络摄像机（如 DH-IPC-HFW8242E-Z4FR），机内库可存 10,000 张人脸，并分析性别、年龄、表情、眼镜、口罩、胡须 6 种属性。",
    "On July 12, 2018 Dahua launched deepsense deep-learning face detection/recognition IP cameras (e.g. DH-IPC-HFW8242E-Z4FR) with an on-camera 10,000-face database and six attributes: gender, age, expression, glasses, mask and beard.",
    [
     8
    ]
   ],
   [
    2019,
    "ver",
    "Sony α6400（2019 年 1 月）用基于 AI 物体识别的 Real-time Eye AF 实时追踪眼睛，6 月固件又加入猫狗等动物眼部对焦。",
    "The Sony α6400 (Jan 2019) used AI-based object recognition for Real-time Eye AF, and a June firmware added eye AF for cats, dogs and similar animals.",
    [
     9
    ]
   ],
   [
    2019,
    "ver",
    "欧盟法规 (EU) 2019/2144 把驾驶员注意力监测纳入新车安全要求，并规定系统不得持续录像或向第三方共享数据，车内人脸监测从高端选配变成法规配置。",
    "EU Regulation 2019/2144 made driver attention monitoring part of new-car safety requirements, while forbidding continuous recording or third-party data sharing, turning in-cabin face monitoring from a luxury option into a mandated feature.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III（2020 年 1 月 6 日发布）的 191 点光学取景器 AF 用 Deep Learning 追踪头部和面部，实时取景下支持脸、头、眼检测。",
    "Canon's EOS-1D X Mark III (announced Jan 6, 2020) used Deep Learning in its 191-point viewfinder AF to track heads and faces, with face, head and eye detection in Live View.",
    [
     10
    ]
   ],
   [
    2022,
    "end",
    "Sony α7R V（2022 年 10 月）的独立 AI 处理单元用人体姿态估计识别主体，背对镜头也能对焦，并扩展到动物、鸟、昆虫、车辆和飞机；单纯的“人脸检测”被通用的深度学习主体识别取代。",
    "Sony's α7R V (Oct 2022) used a dedicated AI processing unit with human pose estimation to keep focus even on subjects facing away, extending recognition to animals, birds, insects, vehicles and aircraft; plain face detection gave way to general deep-learning subject recognition.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年人脸检测已融进更广的主体识别：相机用深度学习识别人体姿态、眼睛和多类动物与车辆（如 Sony α7R V、Canon EOS-1D X Mark III 之后的 EOS R 机型），手机做人像分割和美颜，汽车按欧盟法规标配红外驾驶员监测，安防摄像机机内做人脸比对。",
   "In 2026 face detection is folded into broader subject recognition: cameras use deep learning for body pose, eyes, animals and vehicles (Sony α7R V, Canon's EOS R line after the 1D X Mark III), phones do portrait segmentation and retouching, cars ship infrared driver monitoring under EU rules, and security cameras match faces on-device."
  ],
  "replaced": [
   "Viola-Jones 一类手工特征级联检测器已被 CNN 等深度学习模型取代，“人脸检测”本身也被扩展成全身姿态、眼部和多类别主体识别，运行在独立 AI 单元或 NPU 上。",
   "Hand-crafted cascade detectors like Viola-Jones were replaced by CNN-based deep learning, and face detection itself has widened into body-pose, eye and multi-class subject recognition running on dedicated AI units or NPUs."
  ],
  "refs": [
   {
    "t": "Neural Network-Based Face Detection (Rowley, Baluja, Kanade, IEEE PAMI 1998)",
    "u": "https://publications.ri.cmu.edu/neural-network-based-face-detection-3"
   },
   {
    "t": "Rapid Object Detection Using a Boosted Cascade of Simple Features (Viola & Jones, CVPR 2001)",
    "u": "https://mlanthology.org/cvpr/2001/viola2001cvpr-rapid"
   },
   {
    "t": "Nikon Face-Priority AF (DPReview, Feb 2005)",
    "u": "https://www.dpreview.com/articles/1009928338/nikonfaceaf"
   },
   {
    "t": "Fujifilm FinePix F31fd (DPReview, Sept 2006)",
    "u": "https://www.dpreview.com/articles/0915232969/fujif31fd"
   },
   {
    "t": "Driver monitoring system - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Driver_monitoring_system"
   },
   {
    "t": "Lexus pre-crash safety with driver monitoring for new LS (Toyota, Feb 28, 2006)",
    "u": "https://global.toyota/detail/270877"
   },
   {
    "t": "Latest Sony Cyber-shot T-series Cameras Bring New Focus and Smiles (Sony, Aug 2007)",
    "u": "https://sony.mediaroom.com/2007-08-21-Latest-Sony-Cyber-shot-T-series-Cameras-Bring-New-Focus-And-Smiles-To-Point-And-Shoot-Users"
   },
   {
    "t": "Sony Ericsson C902 Cyber-shot and C702 Cyber-shot (Photography Blog, Feb 2008)",
    "u": "https://www.photographyblog.com/news/sony_ericsson_c902_cyber_shot_and_c702_cyber_shot"
   },
   {
    "t": "Dahua Unveils deepsense Face Detection/Face Recognition Network Cameras (PR Newswire, July 2018)",
    "u": "https://www.prnewswire.co.uk/news-releases/dahua-unveils-deepsense-face-detectionface-recognition-network-cameras-687995891.html"
   },
   {
    "t": "Firmware Friday: Sony A6400 gets Real-time Animal Eye AF (Imaging Resource, June 2019)",
    "u": "https://imaging-resource.com/news/2019/06/14/firmware-friday-sony-a6400-gets-real-time-animal-eye-af-and-more"
   },
   {
    "t": "Canon announces the EOS-1D X Mark III (Canon Canada, Jan 6, 2020)",
    "u": "https://www.canon.ca/en/About-Canon/News/Press-Releases/2020/2020-JAN-06-1D-X-MARK-III"
   },
   {
    "t": "Sony's New Alpha 7R V (Rangefinder, Oct 2022)",
    "u": "https://rangefinderonline.com/gear/sony-new-alpha-7r-v/"
   }
  ]
 },
 "raw": {
  "stages": [
   [
    1997,
    "corp",
    "早期数码相机厂商各自定义私有 RAW 格式且不公开；Dave Coffin 在 1997 年 2 月 23 日买了 Canon PowerShot 600 后开始写 dcraw，靠逆向工程解码数百款相机的 RAW，它的源码一度是很多格式唯一的公开文档。",
    "Early camera makers each used undocumented proprietary raw formats; Dave Coffin began dcraw on Feb 23, 1997 after buying a Canon PowerShot 600, reverse-engineering raw from hundreds of cameras, and its source became the only public documentation of many formats.",
    [
     1,
     0
    ]
   ],
   [
    2001,
    "paper",
    "ISO 12234-2（TIFF/EP）在 2001 年发布，为保存传感器原始数据和元数据提供了标准框架，后来成为 DNG 的基础。",
    "ISO 12234-2 (TIFF/EP) was published in 2001 as a standard framework for storing raw sensor data and metadata, later the basis of DNG.",
    [
     0
    ]
   ],
   [
    2004,
    "paper",
    "Adobe 在 2004 年 9 月 27 日发布基于 TIFF/EP 的公开格式 Digital Negative（DNG）和免费 DNG Converter，想统一各家碎片化的 RAW。",
    "On Sept 27, 2004 Adobe released Digital Negative (DNG), an open TIFF/EP-based format, plus a free DNG Converter, to unify fragmented raw formats.",
    [
     2
    ]
   ],
   [
    2005,
    "mass",
    "2005 年 3 月 Leica 和 Hasselblad 宣布支持 DNG；6 月 Leica Digital-Modul-R 数码后背成为首个原生写 DNG 的设备，7 月 Hasselblad H2D 成为首台原生 DNG 的单反。",
    "In March 2005 Leica and Hasselblad committed to DNG; in June the Leica Digital-Modul-R back became the first device writing DNG natively, and in July the Hasselblad H2D became the first DSLR to do so.",
    [
     3,
     2
    ]
   ],
   [
    2005,
    "ver",
    "Ricoh GR Digital（2005 年 9 月 13 日发布，10 月上市）成为首台原生 DNG 的卡片机，可同时保存未压缩 RAW 和 JPEG。",
    "The Ricoh GR Digital (announced Sept 13, 2005, on sale in October) became the first compact camera with native DNG, saving uncompressed raw plus JPEG.",
    [
     4,
     2
    ]
   ],
   [
    2005,
    "rival",
    "大厂没有跟进：Canon 同年推出 CR2、Sony 推出 SRF，Nikon 坚持 NEF；2006 年起 Pentax K10D 让用户在私有 PEF 和 DNG 间二选一，私有格式与 DNG 并存至今。",
    "Major makers did not follow: in 2005 Canon introduced CR2 and Sony SRF while Nikon kept NEF; from 2006 the Pentax K10D let users choose PEF or DNG, and proprietary formats coexist with DNG to this day.",
    [
     0,
     2
    ]
   ],
   [
    2013,
    "mass",
    "Nokia 在 2013 年 10 月 29 日给 Lumia 1520 推送 DNG RAW（Lumia 1020 随 2014 年初的 Lumia Black 更新获得），每个 DNG 超过 40 MB；Adobe 称 Nokia 是首家把 RAW 带进智能手机的厂商。",
    "On Oct 29, 2013 Nokia enabled DNG raw on the Lumia 1520 (the Lumia 1020 followed with the early-2014 Lumia Black update), each DNG over 40 MB; Adobe called Nokia the first to bring raw to smartphones.",
    [
     5
    ]
   ],
   [
    2014,
    "ver",
    "Android 5.0 Lollipop 的 Camera2 API（API level 21）加入 DngCreator，任何支持的手机都能把 RAW 缓冲存成 DNG，Nexus 5 首先可用。",
    "Android 5.0 Lollipop's Camera2 API (API level 21) added DngCreator so any capable phone can save raw buffers as DNG, first on the Nexus 5.",
    [
     6
    ]
   ],
   [
    2016,
    "ver",
    "iOS 10（2016 年 9 月）用 AVCapturePhotoOutput 开放 Bayer RAW 拍摄，iPhone 6s/SE/7 可存 DNG，Adobe Lightroom 同时支持在手机上拍和修 DNG。",
    "iOS 10 (Sept 2016) opened Bayer RAW capture through AVCapturePhotoOutput, letting iPhone 6s/SE/7 save DNG, with Adobe Lightroom supporting on-phone DNG capture and editing.",
    [
     7
    ]
   ],
   [
    2018,
    "ver",
    "RAW 扩展到视频：Apple 在 2018 年 4 月 NAB 期间推出 ProRes RAW（Final Cut Pro 10.4.1），首批支持 Atomos Shogun Inferno、Sumo 19 和 DJI Zenmuse X7；同年 Canon 改用基于 ISO 基础媒体文件格式的 CR3。",
    "Raw spread to video: at NAB in April 2018 Apple introduced ProRes RAW (Final Cut Pro 10.4.1), first recorded by Atomos Shogun Inferno, Sumo 19 and DJI Zenmuse X7; the same year Canon moved stills to CR3 in an ISO base media container.",
    [
     8,
     0
    ]
   ],
   [
    2020,
    "ver",
    "iPhone 12 Pro 在 iOS 14.3（2020 年 12 月 14 日）获得 ProRAW：12 bit 线性 DNG，已含多帧合成、Smart HDR 和 Deep Fusion 的结果，又保留调白平衡和曝光的余地，被称为“计算 RAW”。",
    "iPhone 12 Pro got ProRAW in iOS 14.3 (Dec 14, 2020): a 12-bit linear DNG that already includes multi-frame merging, Smart HDR and Deep Fusion while keeping white-balance and exposure latitude, a \"computational raw\".",
    [
     9,
     2
    ]
   ],
   [
    2023,
    "ver",
    "DNG 1.7（2023 年 6 月）加入 JPEG XL 压缩，大幅缩小手机计算 RAW 的体积；2026 年 DNG 正式成为 ISO 12234-4:2026 国际标准。",
    "DNG 1.7 (June 2023) added JPEG XL compression, shrinking computational raw files from phones; in 2026 DNG was formally standardized as ISO 12234-4:2026.",
    [
     2
    ]
   ]
  ],
  "now": [
   "2026 年 RAW 分成两类：相机厂商的私有 RAW（CR3、NEF、ARW）与开放的 DNG 并存，而手机主推“计算 RAW”——多帧合成后的线性 DNG，如 iPhone 的 ProRAW、Samsung Expert RAW 的 16 bit 线性 DNG；DNG 已成为 ISO 12234-4:2026 标准，视频端有 ProRes RAW 和 Blackmagic RAW。",
   "In 2026 raw splits two ways: proprietary camera raws (CR3, NEF, ARW) coexist with open DNG, while phones push \"computational raw\" — multi-frame-merged linear DNG such as iPhone ProRAW and Samsung Expert RAW's 16-bit linear DNG; DNG is now ISO 12234-4:2026, and video has ProRes RAW and Blackmagic RAW."
  ],
  "replaced": [
   "单帧 Bayer RAW 在手机上正被多帧合成的线性 DNG（计算 RAW）取代，因为单帧小传感器噪声太大；相机上私有 RAW 仍是主流，但 DNG 的 ISO 标准化和 JPEG XL 压缩让开放格式更有吸引力。",
   "On phones single-frame Bayer raw is being replaced by multi-frame-merged linear DNG (computational raw), since one frame from a tiny sensor is too noisy; on cameras proprietary raw still dominates, though DNG's ISO standardization and JPEG XL compression make the open format more attractive."
  ],
  "refs": [
   {
    "t": "Raw image format - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Raw_image_format"
   },
   {
    "t": "dcraw - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Dcraw"
   },
   {
    "t": "Digital Negative - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Digital_Negative"
   },
   {
    "t": "Leica and Hasselblad to Support Adobe DNG Format (Photography Blog, Mar 2005)",
    "u": "https://www.photographyblog.com/news/leica_and_hasselblad_to_support_adobe_dng_format"
   },
   {
    "t": "Ricoh GR Digital (DPReview, Sept 2005)",
    "u": "https://www.dpreview.com/articles/0830223089/ricoh-gr"
   },
   {
    "t": "Another Nokia first: Digital negatives (RAW DNG) on Lumia (Windows Blog, Oct 2013)",
    "u": "https://blogs.windows.com/devices/2013/10/29/another-nokia-first-digital-negatives-raw-dng-lumia/"
   },
   {
    "t": "Android L Feature Spotlight: Camera API supports DNG capture (Android Police, June 2014)",
    "u": "https://www.androidpolice.com/2014/06/26/android-l-feature-spotlight-android-camera-api-supports-dng-image-capture-photographers-everywhere-cheer/"
   },
   {
    "t": "As iOS 10 lands, Adobe adds DNG raw capture to Lightroom (Imaging Resource, Sept 2016)",
    "u": "https://www.imaging-resource.com/news/2016/09/14/as-apples-ios-10-lands-adobe-adds-dng-raw-capture-support-to-lightroom-for"
   },
   {
    "t": "Final Cut Pro X update introduces ProRes RAW (Apple Newsroom, Apr 2018)",
    "u": "https://www.apple.com/newsroom/2018/04/final-cut-pro-x-update-introduces-prores-raw-and-advanced-closed-captioning/"
   },
   {
    "t": "ProRAW arrives in iOS 14.3 beta for iPhone 12 Pro (9to5Mac, Nov 2020)",
    "u": "https://9to5mac.com/2020/11/12/proraw-ios-14-3-iphone-12-pro/"
   }
  ]
 },
 "lens": {
  "stages": [
   [
    1966,
    "idea",
    "Duane C. Brown 在 Photogrammetric Engineering 32 卷 3 期（1966）发表《Decentering Distortion of Lenses》，在 Conrady（1919）基础上给出径向和偏心畸变的多项式模型，至今仍是相机标定和畸变校正的标准模型。",
    "Duane C. Brown's \"Decentering Distortion of Lenses\" (Photogrammetric Engineering 32(3), 1966), building on Conrady (1919), gave the polynomial radial and decentering distortion model that remains the standard for calibration and distortion correction.",
    [
     0
    ]
   ],
   [
    2004,
    "corp",
    "DO Labs（后来的 DxO）2004 年 2 月发布 DxO Optics Pro，按“机身 + 镜头”实测模块自动校正畸变、色差、暗角和模糊，5 月开售；这是电脑端的软件校正，为机内校正铺路。",
    "DO Labs (later DxO) announced DxO Optics Pro in Feb 2004 (on sale in May), automatically correcting distortion, chromatic aberration, vignetting and blur from measured body-plus-lens modules; desktop software that paved the way for in-camera correction.",
    [
     1
    ]
   ],
   [
    2007,
    "mass",
    "Nikon D3 和 D300（2007 年 8 月 23 日发布）用 EXPEED 处理器在机内校正横向色差，JPEG 直出即生效，RAW 可在 Capture NX 里套用，无需预先分析镜头。",
    "The Nikon D3 and D300 (announced Aug 23, 2007) used the EXPEED processor to correct lateral chromatic aberration in-camera for JPEGs, with the same correction available for raw in Capture NX, without prior lens analysis.",
    [
     2
    ]
   ],
   [
    2008,
    "ver",
    "Canon EOS 50D 和 5D Mark II（2008 年）加入 Peripheral Illumination Correction 暗角校正，50D 内置 26 支镜头的配置文件并留 14 个空位，可用 EOS Utility 添加。",
    "Canon's EOS 50D and 5D Mark II (2008) added Peripheral Illumination Correction; the 50D held profiles for 26 lenses with 14 spare slots that EOS Utility could fill.",
    [
     3
    ]
   ],
   [
    2008,
    "ver",
    "Panasonic Lumix G1（photokina 2008 首展，11 月上市）开启 Micro Four Thirds：镜头把畸变（Panasonic 镜头还有色差）数据传给机身，由软件自动校正 JPEG 和 RAW，镜头设计从此有意依赖数字校正来做小做便宜。",
    "The Panasonic Lumix G1 (shown at photokina 2008, on sale in November) launched Micro Four Thirds: lenses pass distortion (and for Panasonic, CA) data to the body, which corrects JPEG and raw in software, so lens designs began relying on digital correction to be smaller and cheaper.",
    [
     5,
     4
    ]
   ],
   [
    2009,
    "ver",
    "高端卡片机跟进：Panasonic LX3 和 Canon PowerShot S90 等在输出前自动校正广角端的桶形畸变（约）。",
    "Enthusiast compacts followed: the Panasonic LX3 and Canon PowerShot S90 applied automatic barrel-distortion correction to their output (approx.).",
    [
     4
    ]
   ],
   [
    2011,
    "rival",
    "代价引发争议：DPReview 测得 Olympus M.Zuiko 14-42mm 原始畸变 4.5%，校正后约 1.8%，而纯光学校正的单反版本只有 1.38%；拉伸边角会损失锐度，光学派认为应在镜片上解决。",
    "The trade-off drew debate: DPReview measured the Olympus M.Zuiko 14-42mm at 4.5% raw distortion, about 1.8% after correction, versus 1.38% for the optically corrected DSLR version; stretching the corners costs sharpness, and optical purists argued for fixing it in glass.",
    [
     4
    ]
   ],
   [
    2013,
    "ver",
    "Fujifilm X100S（2013 年 1 月）的 EXR Processor II 加入 Lens Modulation Optimizer，按镜头数据补偿衍射和边缘像差，让 f/16 等小光圈也保持锐度。",
    "The Fujifilm X100S (Jan 2013) added Lens Modulation Optimizer in EXR Processor II, compensating diffraction and peripheral aberrations from lens data so small apertures like f/16 stay sharp.",
    [
     6
    ]
   ],
   [
    2013,
    "paper",
    "Felix Heide 等在 ACM TOG / SIGGRAPH 2013 发表《High-Quality Computational Imaging Through Simple Lenses》：估计逐通道 PSF 再去卷积，用单片透镜在 12 MP 单反上拍出接近 f/4.5 常规镜头的画质。",
    "Felix Heide et al. (ACM TOG / SIGGRAPH 2013) estimated per-channel PSFs and deconvolved them, getting near-conventional f/4.5 quality from single-element lenses on a 12 MP DSLR.",
    [
     7
    ]
   ],
   [
    2016,
    "ver",
    "Canon EOS-1D X Mark II 在机内加入衍射校正，EOS 5D Mark IV（2016 年 9 月）把过去只能在 DPP 电脑软件里用的 Digital Lens Optimizer 搬进机内，可校正畸变和衍射。",
    "Canon's EOS-1D X Mark II added in-camera diffraction correction, and the EOS 5D Mark IV (Sept 2016) moved Digital Lens Optimizer, previously desktop-only in DPP, into the camera to correct distortion and diffraction.",
    [
     8
    ]
   ],
   [
    2020,
    "ver",
    "手机超广角严重依赖数字校正：iOS 14 在 iPhone 12 上提供 Lens Correction 开关，默认对前置和超广角照片做畸变校正，让人物边缘不变形。",
    "Phone ultra-wides depend heavily on digital correction: iOS 14 gave iPhone 12 a Lens Correction setting, on by default, that corrects front and Ultra Wide photos so people at the edges are not stretched.",
    [
     9
    ]
   ],
   [
    2023,
    "end",
    "查表式校正开始被学习式校正接替：IEEE TPAMI 2023 的《Computational Optics for Mobile Terminals in Mass Production》用生产样本建“代理相机”训练 CNN，同时补偿像差和量产公差。",
    "Profile-based correction is giving way to learned correction: \"Computational Optics for Mobile Terminals in Mass Production\" (IEEE TPAMI 2023) trains CNNs on \"proxy cameras\" built from production samples to correct both aberrations and manufacturing variation.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年机内镜头校正是所有可换镜头相机和手机的默认步骤：镜头把畸变、色差、暗角、衍射数据传给机身实时校正（Micro Four Thirds、Canon RF、Nikon Z、Sony E 等），手机超广角和前摄依赖强力畸变校正，并开始用神经网络补偿像差。",
   "In 2026 in-camera lens correction is a default step for every interchangeable-lens camera and phone: lenses pass distortion, CA, vignetting and diffraction data to the body for real-time correction (Micro Four Thirds, Canon RF, Nikon Z, Sony E), phone ultra-wides and front cameras depend on strong distortion correction, and neural networks are starting to compensate aberrations."
  ],
  "replaced": [
   "没有被取代，而是从“可选修补”变成“镜头设计的一部分”；下一步是用逐个镜头标定和深度学习去卷积取代固定配置文件，甚至让极简光学（单片、超表面）靠计算成像出图。",
   "Not replaced but promoted from optional fix to part of lens design; the next step is per-unit calibration and deep-learning deconvolution in place of fixed profiles, even letting minimal optics (single elements, metasurfaces) rely on computational imaging."
  ],
  "refs": [
   {
    "t": "Decentering Distortion of Lenses (Brown, 1966) - BibBase",
    "u": "https://bibbase.org/network/publication/brown-decenteringdistortionoflenses-1966"
   },
   {
    "t": "DO Labs DxO Optics Pro (DPReview, Feb 2004)",
    "u": "https://www.dpreview.com/articles/6465377266/dxoopticspro"
   },
   {
    "t": "Nikon D3 and D300 announcement (Imaging Resource, Aug 2007)",
    "u": "https://imaging-resource.com/NEWS/1187901361.html"
   },
   {
    "t": "Canon EOS 50D Review (DPReview)",
    "u": "https://www.dpreview.com/reviews/canoneos50d/2"
   },
   {
    "t": "A distorted view? In-camera distortion correction (DPReview, 2011)",
    "u": "https://www.dpreview.com/articles/5653763779/a-distorted-view-in-camera-distortion-correction"
   },
   {
    "t": "Panasonic Lumix DMC-G1 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-G1"
   },
   {
    "t": "Fujifilm X100S Review (DPReview)",
    "u": "https://www.dpreview.com/previews/fujifilm-x100s/4"
   },
   {
    "t": "High-Quality Computational Imaging Through Simple Lenses (Heide et al., 2013)",
    "u": "https://www.cs.ubc.ca/labs/imager/tr/2013/SimpleLensImaging"
   },
   {
    "t": "EOS 5D Mark IV (Canon Camera Museum)",
    "u": "https://global.canon/en/c-museum/product/dslr849.html"
   },
   {
    "t": "Change advanced camera settings on iPhone, iOS 14 (Apple Support)",
    "u": "https://support.apple.com/en-kg/guide/iphone/change-advanced-camera-settings-iphb362b394e/14.0/ios"
   },
   {
    "t": "Computational Optics for Mobile Terminals in Mass Production (arXiv / IEEE TPAMI 2023)",
    "u": "https://arxiv.org/abs/2305.05886v1"
   }
  ]
 },
 "ai": {
  "stages": [
   [
    1989,
    "idea",
    "Yann LeCun 等在 AT&T Bell Labs 用反向传播训练卷积神经网络 LeNet 识别美国邮政手写邮编（Neural Computation, 1989），之后与 NCR 合作把它装进 AT&T DSP-32C，每秒识别 30 个数字，是“专用芯片跑神经网络看图”的起点。",
    "Yann LeCun's team at AT&T Bell Labs trained the convolutional network LeNet by backpropagation to read USPS zip codes (Neural Computation, 1989), then with NCR ran it on an AT&T DSP-32C at 30 digits per second, the start of neural vision on dedicated chips.",
    [
     0
    ]
   ],
   [
    1999,
    "corp",
    "Hebrew University 的 Amnon Shashua 于 1999 年 5 月 13 日创立 Mobileye，把只用单目摄像头和软件检测车辆的研究做成产品，并自研视觉芯片 EyeQ。",
    "Hebrew University professor Amnon Shashua founded Mobileye on May 13, 1999 to turn camera-only vehicle detection research into products, developing its own EyeQ vision chip.",
    [
     1
    ]
   ],
   [
    2007,
    "mass",
    "Mobileye EyeQ1 视觉 SoC 进入量产车：2007 年为 BMW 5/6 系和 Cadillac STS/DTS 提供车道偏离预警，2008 款 Volvo S80/V70/XC70 用 EyeQ 加 Delphi 77 GHz 雷达实现带自动刹车的碰撞预警；2008 年 BMW 7 系用一颗 EyeQ1 同时跑限速识别、远光辅助和车道偏离三项功能。",
    "Mobileye's EyeQ1 vision SoC entered production cars: lane departure warning for BMW 5/6 Series and Cadillac STS/DTS in 2007, EyeQ plus Delphi 77 GHz radar for collision warning with auto-brake in the 2008 Volvo S80/V70/XC70, and in 2008 a single EyeQ1 in the BMW 7 Series ran speed-limit, high-beam and lane-departure functions together.",
    [
     2,
     3,
     1
    ]
   ],
   [
    2016,
    "ver",
    "Movidius Myriad 2 视觉处理器（VPU）进入 DJI Phantom 4（2016 年 3 月），实时做立体深度和前方避障，号称消费无人机首次把视觉导航做成标配。",
    "The Movidius Myriad 2 VPU went into the DJI Phantom 4 (March 2016), running real-time stereo depth and forward obstacle avoidance, billed as the first consumer drone with vision guidance as standard.",
    [
     4
    ]
   ],
   [
    2017,
    "mass",
    "2017 年手机 NPU 登场：Apple A11 Bionic 的双核 Neural Engine 每秒 6000 亿次运算（9 月）；Huawei Kirin 970 带首个手机专用 NPU，Mate 10（10 月 16 日）用它做实时场景和物体识别，自动调整拍照参数，AI 任务比 4 个 Cortex-A73 快 25 倍、能效高 50 倍。",
    "Phone NPUs arrived in 2017: Apple's A11 Bionic dual-core Neural Engine ran 600 billion ops/s (September), and Huawei's Kirin 970 carried the first dedicated phone NPU, which the Mate 10 (Oct 16) used for real-time scene and object recognition to set camera parameters, 25x faster and 50x more efficient than four Cortex-A73 cores.",
    [
     5,
     6
    ]
   ],
   [
    2017,
    "ver",
    "Google 在 Pixel 2 里藏了自研 Pixel Visual Core：8 核 IPU，每核 512 个 ALU，超过 3 TOPS，HDR+ 速度是主处理器的 5 倍、能耗不到 1/10，用 Halide 和 TensorFlow 编程。",
    "Google hid its own Pixel Visual Core in the Pixel 2: an 8-core IPU with 512 ALUs per core and over 3 TOPS, running HDR+ 5x faster at under one-tenth the energy of the main processor, programmed in Halide and TensorFlow.",
    [
     7
    ]
   ],
   [
    2017,
    "ver",
    "Hikvision 在 2017 年 10 月推出 DeepinView 深度学习网络摄像机，机内 GPU 跑人体检测、人脸识别、人数统计和车牌识别，大幅减少传统 VCA 的误报。",
    "In Oct 2017 Hikvision launched DeepinView deep-learning IP cameras, with on-camera GPU processing for human detection, face recognition, people counting and ANPR, cutting conventional VCA false alarms.",
    [
     8
    ]
   ],
   [
    2019,
    "rival",
    "车厂开始自研芯片取代供应商方案：Tesla 2014 年起用 Mobileye EyeQ3，2019 年 4 月发布自研 FSD 计算机（三星 14 nm，双芯片共约 144 TOPS，约 100 W），取代 Nvidia 方案。",
    "Automakers began building their own chips instead of suppliers': Tesla used Mobileye EyeQ3 from 2014, then in April 2019 unveiled its in-house FSD computer (Samsung 14 nm, about 144 TOPS across two chips at ~100 W), replacing Nvidia hardware.",
    [
     1,
     9
    ]
   ],
   [
    2019,
    "ver",
    "iPhone 11 系列（2019 年 9 月）的 Deep Fusion 由 A13 Bionic 的 Neural Engine 驱动，用机器学习逐像素优化纹理、细节和噪声，神经网络从“识别场景”进到“直接合成像素”。",
    "The iPhone 11 line's Deep Fusion (Sept 2019) ran on the A13 Bionic Neural Engine, using machine learning to optimize texture, detail and noise pixel by pixel, moving neural nets from recognizing scenes to synthesizing pixels.",
    [
     10
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III（2020 年 1 月 6 日发布）在 DIGIC X 上用 Deep Learning 追踪头部和面部，Dual Pixel CMOS AF 处理性能是上代的 380 倍。",
    "The Canon EOS-1D X Mark III (announced Jan 6, 2020) used Deep Learning on DIGIC X to track heads and faces, with 380x the Dual Pixel CMOS AF processing of its predecessor.",
    [
     11
    ]
   ],
   [
    2022,
    "ver",
    "Sony α7R V（2022 年 10 月）加入独立 AI 处理单元，用人体姿态估计识别主体并改善自动白平衡；同年 11 月 Snapdragon 8 Gen 2 的 Cognitive ISP 通过 Hexagon Direct Link 把 AI 引擎接进 ISP，实时做语义分割。",
    "Sony's α7R V (Oct 2022) added a dedicated AI processing unit using human pose estimation for subject recognition and better auto white balance; in Nov 2022 Snapdragon 8 Gen 2's Cognitive ISP wired the AI engine into the ISP via Hexagon Direct Link for real-time semantic segmentation.",
    [
     12,
     14
    ]
   ],
   [
    2024,
    "ver",
    "Canon EOS R1（2024）用 DIGIC X 加新的 DIGIC Accelerator，以深度学习实现 Action Priority 自动锁定做动作的球员，并在机内做神经网络降噪。",
    "The Canon EOS R1 (2024) paired DIGIC X with a new DIGIC Accelerator, using deep learning for Action Priority subject selection and in-camera neural-network noise reduction.",
    [
     13
    ]
   ]
  ],
  "now": [
   "2026 年几乎所有新相机都带 NPU 或 AI 单元：手机 SoC 的 NPU 和 Cognitive ISP 做逐像素合成与语义分割，相机用独立 AI 单元做主体识别（Sony α7R V、Canon EOS R1），车载有 Mobileye EyeQ 系列和 Tesla FSD 等自研芯片，安防摄像机机内跑深度学习分析。",
   "In 2026 nearly every new camera carries an NPU or AI unit: phone SoC NPUs and cognitive ISPs do per-pixel merging and semantic segmentation, cameras use dedicated AI units for subject recognition (Sony α7R V, Canon EOS R1), cars run Mobileye EyeQ or in-house chips like Tesla FSD, and security cameras run deep-learning analytics on-device."
  ],
  "replaced": [
   "独立视觉芯片正被融合进 SoC 和 ISP：AI 引擎直接接入 ISP 流水线（Cognitive ISP），部分推理甚至下沉到传感器里；车载领域则从供应商黑盒视觉芯片转向车厂自研的集中式 AI 计算平台。",
   "Separate vision chips are being folded into SoCs and ISPs: AI engines plug straight into the ISP pipeline (cognitive ISP) and some inference moves onto the sensor itself; in cars the shift is from supplier black-box vision chips to automakers' own centralized AI compute."
  ],
  "refs": [
   {
    "t": "LeNet - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/LeNet"
   },
   {
    "t": "Mobileye - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Mobileye"
   },
   {
    "t": "Mobileye advanced technologies power Volvo Cars' world-first collision warning with auto brake (Automotive Fleet, Nov 2007)",
    "u": "https://www.automotive-fleet.com/news/mobileye-advanced-technologies-power-volvo-car39s-world-first-collision-warning-with-auto-brake-system"
   },
   {
    "t": "Mobileye EyeQ1 SoC powers Continental camera for BMW 7 Series (Electronic Design, Sept 2008)",
    "u": "https://www.electronicdesign.com/automotive/mobileye-eyeq1-soc-powers-continental-camera-bmw-7-series"
   },
   {
    "t": "Movidius and DJI Bring Vision-Based Autonomy to DJI Phantom 4 (Edge AI and Vision Alliance, Mar 2016)",
    "u": "https://www.edge-ai-vision.com/2016/03/movidius-and-dji-bring-vision-based-autonomy-to-dji-phantom-4/"
   },
   {
    "t": "The future is here: iPhone X (Apple Newsroom, Sept 2017)",
    "u": "https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/"
   },
   {
    "t": "Huawei Mate 10 series now official: first smartphones with dedicated neural processors (Notebookcheck)",
    "u": "https://www.notebookcheck.net/Huawei-Mate-10-series-now-official-first-smartphones-with-dedicated-neural-processors.258336.0.html"
   },
   {
    "t": "Pixel Visual Core: image processing and machine learning on Pixel 2 (Google Blog, Oct 2017)",
    "u": "https://blog.google/products/pixel/pixel-visual-core-image-processing-and-machine-learning-pixel-2/"
   },
   {
    "t": "Hikvision boosts video surveillance system performance with new DeepinView camera series (PR Newswire, Oct 2017)",
    "u": "https://www.prnewswire.com/in/news-releases/hikvision-boosts-video-surveillance-system-performance-with-new-deepinview-camera-series-654224073.html"
   },
   {
    "t": "Tesla vaunts creation of 'the best chip in the world' for self-driving (TechCrunch, Apr 2019)",
    "u": "https://techcrunch.com/2019/04/22/tesla-vaunts-creation-of-the-best-chip-in-the-world-for-self-driving/"
   },
   {
    "t": "iPhone 11 Pro and iPhone 11 Pro Max (Apple Newsroom, Sept 2019)",
    "u": "https://www.apple.com/newsroom/2019/09/iphone-11-pro-and-iphone-11-pro-max-the-most-powerful-and-advanced-smartphones/"
   },
   {
    "t": "Canon announces the EOS-1D X Mark III (Canon Canada, Jan 2020)",
    "u": "https://www.canon.ca/en/About-Canon/News/Press-Releases/2020/2020-JAN-06-1D-X-MARK-III"
   },
   {
    "t": "Sony's New Alpha 7R V (Rangefinder, Oct 2022)",
    "u": "https://rangefinderonline.com/gear/sony-new-alpha-7r-v/"
   },
   {
    "t": "Canon develops EOS R1 as first flagship model for EOS R System (Canon Global, May 2024)",
    "u": "https://global.canon/en/news/2024/20240515.html"
   },
   {
    "t": "New Snapdragon 8 Gen 2: 8 extraordinary mobile experiences, unveiled (Qualcomm OnQ, Nov 2022)",
    "u": "https://www.qualcomm.com/news/onq/2022/11/new-snapdragon-8-gen-2-8-extraordinary-mobile-experiences-unveiled"
   }
  ]
 },
 "log": {
  "stages": [
   [
    1992,
    "idea",
    "Kodak 的 Cineon 系统（总架构师 Glenn Kennel）把胶片扫描成 10-bit log 文件，码值对应底片的 printing density；1992 年 9 月首版交付 Cinesite，“log 编码保留宽宽容度、后期再调色”的思路由此成形。",
    "Kodak's Cineon system (chief architect Glenn Kennel) stored scanned film as 10-bit log files whose code values track negative printing density; first delivered to Cinesite in Sept 1992, it established the idea of log-encoding wide latitude and grading later.",
    [
     0
    ]
   ],
   [
    1997,
    "ver",
    "Cineon 软件 1997 年停售，但 Cineon 文件格式成为 VFX 行业事实标准，并演变为 SMPTE 标准化的 DPX 格式；后来几乎所有相机 Log 曲线都以 Cineon 为参照。",
    "Cineon software was withdrawn from sale by 1997, but its file format became the de facto VFX standard and the basis of SMPTE's DPX; later camera log curves are nearly all modeled on Cineon.",
    [
     0,
     11
    ]
   ],
   [
    2002,
    "proto",
    "Thomson（Grass Valley）发布 Viper FilmStream 数字电影机：12-bit 线性 A/D 映射为 10-bit log，经双链路 HD-SDI 输出 RGB 4:4:4，被 Michael Mann《Collateral》和 David Fincher《Zodiac》采用——这是摄影机直接输出 log 信号的早期实例。",
    "Thomson (Grass Valley) announced the Viper FilmStream camera: 12-bit linear A/D mapped to 10-bit log RGB 4:4:4 over dual-link HD-SDI, used on Michael Mann's Collateral and David Fincher's Zodiac, an early camera that output a log signal directly.",
    [
     2
    ]
   ],
   [
    2005,
    "corp",
    "ARRI 的 Arriflex D-20 通过 HD-SDI 输出原始 Log-C 伽马，Log 曲线开始在电影机行业流行。",
    "ARRI's Arriflex D-20 output an original Log-C gamma over HD-SDI, the point from which log profiles began spreading through the cinema-camera industry.",
    [
     1
    ]
   ],
   [
    2008,
    "mass",
    "Sony CineAlta F35（及 F23）在 HDCAM-SR 上记录 S-Log，并于 2008 年 12 月发布 S-Log 白皮书；S-Log 以 Cineon 为蓝本，把 12 档以上动态范围塞进 Rec.709 的视频码流。",
    "Sony's CineAlta F35 (and F23) recorded S-Log to HDCAM-SR, with an S-Log white paper published in Dec 2008; based on Cineon, S-Log squeezes 12+ stops into a Rec.709 video signal.",
    [
     1,
     3
    ]
   ],
   [
    2010,
    "rival",
    "ARRI Alexa 推出 Log C，把约 14 档动态范围压进 10-bit 信号，成为电影行业最常用的 log 编码之一，与 Sony S-Log 竞争。",
    "ARRI's Alexa introduced Log C, packing about 14 stops into a 10-bit signal; it became one of the most widely used log encodings in cinema, competing with Sony S-Log.",
    [
     11,
     1
    ]
   ],
   [
    2011,
    "ver",
    "S-Log 下放：Sony PMW-F3 的 CBK-RGB01 付费升级（2011 年 6 月，约 3,500 美元）开启 S-Log、双链路 RGB 4:4:4 和 LUT，动态范围升到 800%；同年 11 月 Canon EOS C300 推出 Canon Log。",
    "S-Log moved down-market: Sony's CBK-RGB01 paid upgrade for the PMW-F3 (June 2011, about $3,500) unlocked S-Log, dual-link RGB 4:4:4 and LUTs, raising dynamic range to 800%; in Nov 2011 Canon's EOS C300 introduced Canon Log.",
    [
     4,
     1
    ]
   ],
   [
    2014,
    "ver",
    "Sony F5/F55 v3.0 固件加入 S-Log3 与 S-Gamut3.Cine，S-Log3 曲线更接近 Cineon、便于电影院调色；同年 α7S 首次把专业 S-Log2 放进消费级相机。",
    "Sony's F5/F55 firmware v3.0 added S-Log3 and S-Gamut3.Cine, with S-Log3 closer to Cineon for cinema grading; the same year the α7S put professional S-Log2 into a consumer camera for the first time.",
    [
     6,
     5
    ]
   ],
   [
    2017,
    "ver",
    "Log 普及到 DSLR / 无反与手机：Canon 5D Mark IV 付费加 C-Log、Panasonic GH5 用 V-Log L（10 档扩到 12 档）；LG V30（2017 年 8 月发布）的 LG-Cine Log 是第一款带 log 视频的手机。",
    "Log spread to DSLRs, mirrorless and phones: Canon's 5D Mark IV got paid C-Log, Panasonic's GH5 used V-Log L (10 to 12 stops), and the LG V30 (announced Aug 2017) with LG-Cine Log was the first phone with log video.",
    [
     12,
     7,
     8
    ]
   ],
   [
    2023,
    "ver",
    "iPhone 15 Pro 推出 Apple Log 搭配 ProRes，并支持 ACES，可经 USB-C 以 4K60 直录外接 SSD，手机 log 进入专业多机位流程。",
    "iPhone 15 Pro introduced Apple Log with ProRes and ACES support, recording 4K60 to external SSDs over USB-C and bringing phone log into professional multi-camera workflows.",
    [
     9
    ]
   ],
   [
    2025,
    "end",
    "iPhone 17 Pro 推出更宽色域的 Apple Log 2，并成为首款可拍 ProRes RAW 的手机：RAW 视频开始在高端设备上取代“log 烘焙进码流”的做法。",
    "iPhone 17 Pro added Apple Log 2 with a wider gamut and became the first smartphone to capture ProRes RAW; RAW video is starting to replace baked-in log on high-end devices.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年 Log 已是电影机、无反和旗舰手机的标配：Sony S-Log3、Canon Log、Panasonic V-Log、ARRI Log C 继续用在专业机上，iPhone 17 Pro 有 Apple Log 2，Android 旗舰也普遍提供 log 视频。",
   "In 2026 log is standard on cinema cameras, mirrorless bodies and flagship phones: Sony S-Log3, Canon Log, Panasonic V-Log and ARRI Log C on pro cameras, Apple Log 2 on iPhone 17 Pro, and log video on most Android flagships."
  ],
  "replaced": [
   "高端端正被 RAW 视频（ProRes RAW 等）部分取代，因为 RAW 把曲线和白平衡都留到后期；同时直接拍 HDR（HLG / PQ）在减少对 log 的需求。log 仍是 RAW 解码和调色流程中的中间编码，没有消失。",
   "At the high end, RAW video (e.g. ProRes RAW) is partly replacing it by deferring curve and white balance to post, and direct HDR capture (HLG/PQ) reduces the need for log. Log survives as the intermediate encoding inside RAW-decode and grading pipelines."
  ],
  "refs": [
   {
    "t": "Cineon - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Cineon"
   },
   {
    "t": "Log profile - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Log_profile"
   },
   {
    "t": "Thomson Viper FilmStream Camera - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Thomson_Viper_FilmStream_Camera"
   },
   {
    "t": "The not so technical guide to S-Log and log gamma curves - ProVideo Coalition",
    "u": "https://www.provideocoalition.com/the-not-so-technical-guide-to-s-log-and-log-gamma-curves/"
   },
   {
    "t": "New Sony F3 firmware released - Newsshooter (2011)",
    "u": "https://www.newsshooter.com/2011/06/05/new-sony-f3-firmware-released/"
   },
   {
    "t": "Sony Alpha 7S Review - DPReview",
    "u": "https://www.dpreview.com/reviews/sony-alpha-7-s"
   },
   {
    "t": "Firmware 3.0 takes the F5/F55 to another level - RedShark News",
    "u": "https://www.redsharknews.com/technology/item/1364-firmware-3-0-takes-the-f5-f55-to-another-level"
   },
   {
    "t": "LG V30 charts new mobile frontier with premium cinematography capabilities - LG Newsroom",
    "u": "https://www.lg.com/global/newsroom/news/corporate/lg-v30-charts-new-mobile-frontier-with-premium-cinematography-capabilities/"
   },
   {
    "t": "LG's V30 smartphone: 10-bit color, LG Cine-Log video in a phone? - CineD",
    "u": "https://www.cined.com/lgs-v30-smartphone-10-bit-color-lg-cine-log-video-in-a-phone/"
   },
   {
    "t": "iPhone 15's new LOG recording and why it matters - 9to5Mac",
    "u": "https://9to5mac.com/2023/09/15/iphone-15s-new-log-recording-and-why-it-matters-video/"
   },
   {
    "t": "Apple announces Final Cut Camera 2.0 - Apple Newsroom (2025)",
    "u": "https://www.apple.com/newsroom/2025/09/apple-announces-final-cut-camera-2-0/"
   },
   {
    "t": "Camera log signals in production: basics - Pomfort",
    "u": "https://pomfort.com/article/camera-log-signals-production-basics/"
   },
   {
    "t": "Understanding camera log - Lensrentals Blog",
    "u": "https://www.lensrentals.com/blog/2017/09/understanding-camera-log-how-it-can-improve-video-workflows/"
   }
  ]
 },
 "mfnr": {
  "stages": [
   [
    1966,
    "idea",
    "天文学先有了“多张短曝光对齐后叠加”：David L. Fried 1966 年奠定 speckle imaging 基础，此后的 shift-and-add 把多帧对齐平均，信噪比随帧数 N 按 √N 提升。这就是多帧降噪的统计原理。",
    "Astronomy came first with aligning and stacking short exposures: David L. Fried laid the foundations of speckle imaging in 1966, and the later shift-and-add method averaged aligned frames, improving SNR by √N. This is the statistical basis of multi-frame noise reduction.",
    [
     0
    ]
   ],
   [
    2009,
    "mass",
    "Sony Cyber-shot DSC-HX1（PMA 2009 发布，4 月上市）用高速 Exmor CMOS 推出 Hand-held Twilight：连拍 6 张、机内对齐合成一张，手持夜景不用三脚架、也不用单张高 ISO 硬拍。",
    "Sony's Cyber-shot DSC-HX1 (announced at PMA 2009, shipped April) used its fast Exmor CMOS for Hand-held Twilight: six shots in a burst, aligned and merged in-camera, so handheld night shots no longer needed a tripod or a single high-ISO frame.",
    [
     1
    ]
   ],
   [
    2011,
    "corp",
    "Google X 的 Marc Levoy 团队 2011 年开始为 Google Glass 研发连拍融合（后来的 Gcam / HDR+），目标是让小镜头、小像素在暗光下也能出干净的照片。",
    "At Google X, Marc Levoy's team began developing burst fusion for Google Glass in 2011 (later Gcam/HDR+), aiming for clean images from tiny lenses and pixels in low light.",
    [
     6
    ]
   ],
   [
    2013,
    "ver",
    "HDR+ 于 2013 年 12 月随 Android 4.4.1 来到 Nexus 5，之后上 Nexus 6：所有帧用同一个短曝光，避免高光过曝，靠多帧合并压低噪声，并避开包围曝光的鬼影问题。",
    "HDR+ reached the Nexus 5 with Android 4.4.1 in Dec 2013, then the Nexus 6: every frame uses the same short exposure to protect highlights, and merging frames lowers noise without the ghosting of bracketed exposures.",
    [
     4,
     3
    ]
   ],
   [
    2014,
    "paper",
    "微软亚洲研究院 Ziwei Liu、Lu Yuan、Jian Sun 等发表 Fast Burst Images Denoising（SIGGRAPH Asia 2014），用 homography flow 加速对齐，按像素挑选一致的像素做时域融合以避免鬼影，并在手机原型上运行。",
    "Ziwei Liu, Lu Yuan, Jian Sun et al. (Microsoft Research) published Fast Burst Images Denoising at SIGGRAPH Asia 2014, using homography flow for fast alignment and per-pixel consistency selection for ghost-free temporal fusion, demonstrated on a phone prototype.",
    [
     2
    ]
   ],
   [
    2016,
    "paper",
    "Hasinoff、Levoy 等发表 HDR+ 论文（SIGGRAPH Asia 2016）：直接处理 RAW Bayer 帧、绕过硬件 ISP，用 FFT 对齐和 2D/3D 混合 Wiener 滤波合并，12 MP 处理约 4 秒，已在多款量产手机上出货。",
    "Hasinoff, Levoy et al. published the HDR+ paper (SIGGRAPH Asia 2016): it merges raw Bayer frames, bypassing the hardware ISP, with FFT alignment and a hybrid 2D/3D Wiener filter, about 4 s per 12 MP image, already shipping on several mass-market phones.",
    [
     5
    ]
   ],
   [
    2018,
    "paper",
    "Mildenhall、Barron 等（UC Berkeley 与 Google）发表 Burst Denoising with Kernel Prediction Networks（CVPR 2018），用 CNN 预测逐像素卷积核，同时完成对齐和降噪：多帧降噪开始转向神经网络。",
    "Mildenhall, Barron et al. (UC Berkeley and Google) published Burst Denoising with Kernel Prediction Networks (CVPR 2018): a CNN predicts per-pixel kernels that align and denoise at once, starting the shift of burst denoising to neural networks.",
    [
     7
    ]
   ],
   [
    2018,
    "ver",
    "手机夜景模式之争：Huawei P20 Pro（2018 年 3 月）的夜景模式靠 AI 防抖撑住最长约 4 秒的手持曝光；同年 11 月 Pixel 3 的 Night Sight 拍 6–15 帧、每帧最长 333 ms，用 motion metering 适配 3–0.3 lux。",
    "The phone night-mode race: Huawei's P20 Pro (Mar 2018) Night mode used AI stabilization to hold handheld exposures of up to about 4 s; in Nov 2018 the Pixel 3's Night Sight captured 6–15 frames of up to 333 ms each, with motion metering, for 3–0.3 lux scenes.",
    [
     9,
     8
    ]
   ],
   [
    2019,
    "ver",
    "Apple Deep Fusion 随 iPhone 11 推出（需 A13）：一次短曝光、3 张 EV0 和一张长曝光，由 4 个神经网络逐像素合成 12 MP；Pixel 4 的天文模式则把多张 16 秒曝光叠加。",
    "Apple's Deep Fusion launched with iPhone 11 (A13 required): a short frame, three EV0 frames and a long frame merged pixel by pixel into 12 MP by four neural networks; the Pixel 4's astrophotography mode stacked multiple 16-second exposures.",
    [
     10,
     6
    ]
   ],
   [
    2021,
    "rival",
    "Google 2021 年 4 月给 HDR+ 加入包围曝光（HDR+ with Bracketing），在恒定短曝光帧之外加入长曝光帧以改善暗部细节和噪声。纯“等曝光多帧平均”让位于混合曝光融合。",
    "In Apr 2021 Google added bracketing to HDR+, mixing long-exposure frames in with the constant short frames to improve shadow detail and noise. Pure equal-exposure averaging gave way to mixed-exposure fusion.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "Pixel 8 Pro 的 Video Boost（2023 年 12 月功能更新）把视频上传到 Google 数据中心，用 HDR+ 与 Night Sight 模型处理，带来 Night Sight Video：多帧降噪从照片扩展到视频，并开始借助云端算力。",
    "The Pixel 8 Pro's Video Boost (Dec 2023 Feature Drop) uploads video to Google data centers for HDR+ and Night Sight processing, enabling Night Sight Video: multi-frame denoising moved from stills to video and into the cloud.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年多帧降噪已是每台手机默认的拍照流程：Pixel 的 HDR+ / Night Sight、iPhone 的 Deep Fusion、Huawei 等的夜景模式都在 RAW 域做连拍对齐融合，并越来越多地用神经网络完成对齐和合并；相机端也有 Sony 等的手持夜景 / 多帧 NR 模式。",
   "In 2026 multi-frame denoising is the default capture path on every phone: Pixel HDR+/Night Sight, iPhone Deep Fusion and Huawei-style night modes all align and merge raw bursts, increasingly with neural networks; cameras keep handheld-twilight and multi-frame NR modes."
  ],
  "replaced": [
   "没有被取代，而是被吸收进整条计算摄影 pipeline：等曝光平均变成混合曝光包围融合加神经网络降噪，视频端还有云端处理。下一步是传感器侧的单帧高动态（DCG / LOFIC）与 AI 降噪配合，减少对多帧的依赖。",
   "Not replaced but absorbed into the computational pipeline: equal-exposure averaging became bracketed fusion with neural denoising, plus cloud processing for video. Next, sensor-side single-shot HDR (DCG/LOFIC) combined with AI denoising reduces reliance on many frames."
  ],
  "refs": [
   {
    "t": "Shift-and-add - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Shift-and-add"
   },
   {
    "t": "Sony DSC-HX1 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/sonydschx1"
   },
   {
    "t": "Fast Burst Images Denoising (SIGGRAPH Asia 2014) - project page",
    "u": "https://liuziwei7.github.io/projects/BurstDenoising.html"
   },
   {
    "t": "HDR+: Low Light and High Dynamic Range photography in the Google Camera App - Google Research Blog",
    "u": "https://research.google/blog/hdr-low-light-and-high-dynamic-range-photography-in-the-google-camera-app/"
   },
   {
    "t": "Nexus 5 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nexus_5"
   },
   {
    "t": "Burst photography for high dynamic range and low-light imaging on mobile cameras - Google Research",
    "u": "https://research.google/pubs/burst-photography-for-high-dynamic-range-and-low-light-imaging-on-mobile-cameras/"
   },
   {
    "t": "Pixel Camera - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pixel_Camera"
   },
   {
    "t": "Burst Denoising with Kernel Prediction Networks (CVPR 2018) - project page",
    "u": "https://bmild.github.io/kpn/index.html"
   },
   {
    "t": "Night Sight: Seeing in the Dark on Pixel Phones - Google Research Blog",
    "u": "https://research.google/blog/night-sight-seeing-in-the-dark-on-pixel-phones/"
   },
   {
    "t": "Huawei P20 Pro camera review - MobileSyrup",
    "u": "https://mobilesyrup.com/2018/06/02/huawei-p20-pro-camera-review/"
   },
   {
    "t": "Apple launches Deep Fusion feature in beta on iPhone 11 and iPhone 11 Pro - TechCrunch",
    "u": "https://techcrunch.com/2019/10/01/apple-launches-deep-fusion-feature-in-beta-on-iphone-11-and-iphone-11-pro"
   },
   {
    "t": "4 tips on getting the most out of Pixel 8 Pro's Video Boost - Google Blog",
    "u": "https://blog.google/products/pixel/how-to-use-video-boost-pixel-8-pro/"
   }
  ]
 },
 "defog": {
  "stages": [
   [
    1924,
    "idea",
    "Koschmieder 1924 年提出视程公式 x_V = 3.912 / b_ext，把能见度和大气消光系数联系起来。“衰减 + airlight 叠加”的大气散射模型就是后来所有去雾算法的物理基础。",
    "Koschmieder's 1924 visual-range law x_V = 3.912/b_ext tied visibility to the atmospheric extinction coefficient; the attenuation-plus-airlight scattering model is the physical basis of every later dehazing algorithm.",
    [
     0
    ]
   ],
   [
    2000,
    "paper",
    "CMU / Columbia 的 Narasimhan、Nayar 与 Schechner（1999–2003）用衰减和 airlight 模型，从不同天气下拍的多张图恢复对比度和深度，并提出偏振去雾；CVPR 2000 论文获最佳论文提名。",
    "Narasimhan, Nayar and Schechner (CMU/Columbia, 1999–2003) used the attenuation and airlight models to restore contrast and depth from multiple images taken in different weather, and proposed polarization dehazing; their CVPR 2000 paper won a best-paper honorable mention.",
    [
     1
    ]
   ],
   [
    2009,
    "paper",
    "Kaiming He、Jian Sun、Xiaoou Tang 发表 dark channel prior（CVPR 2009 最佳论文，TPAMI 2011）：无雾户外图像的局部块里总有某个通道接近 0，借此从单张图估计透射率和雾浓度。单图去雾自此走向实用。",
    "Kaiming He, Jian Sun and Xiaoou Tang published the dark channel prior (CVPR 2009 Best Paper, TPAMI 2011): haze-free outdoor patches almost always have one near-zero channel, which lets a single image yield transmission and haze density, making single-image dehazing practical.",
    [
     2
    ]
   ],
   [
    2012,
    "mass",
    "数字透雾进入安防 IP 摄像机 ISP（约）：以 Surveon HD 网络摄像机等为代表，ISP 拉伸雾天压缩的对比度和色彩，成本低于光学透雾；Hikvision 等大厂随后都把 Digital Defog 做成标配。",
    "Digital defog entered security IP-camera ISPs (approx.): with Surveon HD network cameras among the early examples, the ISP stretches the contrast and color that fog compresses, cheaper than optical defog; Hikvision and other major vendors soon made Digital Defog standard.",
    [
     4,
     9
    ]
   ],
   [
    2013,
    "ver",
    "He 等用 guided filter（TPAMI 2013）替代耗时的 soft matting 来细化透射率图，大幅提速。暗通道 + 导向滤波成为很多嵌入式 ISP 透雾的算法基础。",
    "He et al. replaced slow soft matting with the guided filter (TPAMI 2013) to refine transmission maps much faster; dark channel plus guided filter became the basis of many embedded ISP defog implementations.",
    [
     2
    ]
   ],
   [
    2014,
    "rival",
    "光学透雾路线（约）：镜头加 visible-light-cut 滤镜，只让穿透力更强的近红外光成像，如 Fujinon D60x16.7SR4、FH32x15.6SR4A-CV1 长焦镜头。效果更好但成本高，常与数字透雾叠加使用。",
    "The optical-defog route (approx.): lenses with a visible-light-cut filter image only the more penetrating near-infrared light, e.g. Fujinon D60x16.7SR4 and FH32x15.6SR4A-CV1 long zooms; better results but costly, and often combined with digital defog.",
    [
     3,
     4
    ]
   ],
   [
    2014,
    "ver",
    "透雾进入高端快球与城市监控：VIVOTEK SD8364E（2014 年 8 月）是 1080p、30x 快球，新增 image defog，并配 WDR Pro 与 EIS；Axis Q1635（2014 年 12 月发布）在 Q1615 基础上加入 defog。",
    "Defog reached high-end PTZ and city surveillance: VIVOTEK's SD8364E (Aug 2014), a 1080p 30x speed dome, added image defog alongside WDR Pro and EIS; Axis's Q1635 (announced Dec 2014) added defog to the Q1615 platform.",
    [
     5,
     6
    ]
   ],
   [
    2015,
    "ver",
    "去雾进入摄影后期：Adobe Lightroom 与 Camera Raw 于 2015 年 6 月加入 Dehaze 滑块，可去雾也可加雾，算法从安防 ISP 扩展到大众修图。",
    "Dehazing reached photo editing: Adobe added a Dehaze slider to Lightroom and Camera Raw in June 2015, able to remove or add haze, taking the algorithm from security ISPs to mainstream editing.",
    [
     7
    ]
   ],
   [
    2016,
    "paper",
    "Bolun Cai、Dacheng Tao 等提出 DehazeNet（IEEE TIP 2016），用端到端 CNN 估计透射率（Maxout 特征加 BReLU 激活），开启深度学习去雾，逐步替代手工先验。",
    "Bolun Cai, Dacheng Tao et al. proposed DehazeNet (IEEE TIP 2016), an end-to-end CNN (Maxout features, BReLU activation) estimating transmission; it opened deep-learning dehazing, gradually replacing hand-crafted priors.",
    [
     8
    ]
   ]
  ],
  "now": [
   "2026 年 Digital Defog 已是几乎所有安防摄像机的基本选项（Hikvision、Axis、VIVOTEK 等），长焦和城市、港口监控常把它与近红外光学透雾镜头叠加；学术和 AI-ISP 方向则用 CNN / Transformer 做去雾。",
   "In 2026 Digital Defog is a basic option on almost every security camera (Hikvision, Axis, VIVOTEK and others); long-range, city and port surveillance stacks it with NIR optical-defog lenses, while research and AI ISPs use CNN/Transformer dehazing."
  ],
  "replaced": [
   "仍在使用，没有被淘汰。基于先验的对比度增强正逐步被神经网络 AI-ISP 去雾取代；在浓雾里，近红外 / 热成像等多光谱方案正在接管纯可见光透雾做不到的部分。",
   "Still in use. Prior-based contrast enhancement is gradually being replaced by neural AI-ISP dehazing, and in dense fog, NIR and thermal multispectral approaches take over where visible-light defog fails."
  ],
  "refs": [
   {
    "t": "Visibility - Wikipedia (Koschmieder equation)",
    "u": "https://en.wikipedia.org/wiki/Visibility"
   },
   {
    "t": "Vision through Fog and Haze - CMU ILIM project page",
    "u": "https://www.cs.cmu.edu/~ILIM/projects/LT/vision-fog/vision_fog.html"
   },
   {
    "t": "Single Image Haze Removal Using Dark Channel Prior - Kaiming He project page",
    "u": "https://people.csail.mit.edu/kaiming/cvpr09/index.html"
   },
   {
    "t": "Fujifilm CCTV zoom lenses (visible light cut filter)",
    "u": "https://www.fujifilm.com/ch/en/business/optical-devices/cctv/zoom"
   },
   {
    "t": "Digital Defog Technology white paper - Hikvision",
    "u": "https://info.hikvision.com/digital-defog-technology-whitepaper"
   },
   {
    "t": "VIVOTEK launches upgraded speed dome network camera SD8364E - Security Solutions Media",
    "u": "https://www.securitysolutionsmedia.com/vivotek-launches-upgraded-speed-dome-network-camera-sd8364e/"
   },
   {
    "t": "AXIS Q1635 1080p HDTV network camera - SecurityInfoWatch",
    "u": "https://www.securityinfowatch.com/video-surveillance/cameras/ip-network-surveillance-cameras/product/12053243/axis-communications-axis-q1635-1080p-hdtv-network-camera"
   },
   {
    "t": "What's New for Photography in Adobe Creative Cloud 2015 - PetaPixel",
    "u": "https://petapixel.com/2015/06/16/whats-new-for-photography-in-adobe-creative-cloud-2015/"
   },
   {
    "t": "DehazeNet: An End-to-End System for Single Image Haze Removal - arXiv",
    "u": "https://arxiv.org/abs/1601.07661"
   },
   {
    "t": "What is Digital Defog - Infiniti Optics",
    "u": "https://www.infinitioptics.com/node/496"
   }
  ]
 },
 "eyeaf": {
  "stages": [
   [
    2001,
    "paper",
    "Paul Viola 与 Michael Jones 发表 boosted cascade 检测器（CVPR 2001）：integral image、AdaBoost 选特征、级联快速剔除背景，实时 15 fps 检测人脸。消费相机人脸对焦的算法基础由此而来。",
    "Paul Viola and Michael Jones published the boosted-cascade detector (CVPR 2001): integral images, AdaBoost feature selection and a cascade that quickly rejects background, detecting faces in real time at 15 fps, the algorithmic basis of consumer face-detect AF.",
    [
     0
    ]
   ],
   [
    2005,
    "mass",
    "Nikon 于 2005 年 3 月在 Coolpix 7900 / 5900 / 7600 / 4600 / S1 上推出 Face-priority AF：最多识别 3 张脸，框出并跟踪，对焦最近的人脸。“识别主体再对焦”首次量产。",
    "In Mar 2005 Nikon launched Face-priority AF on the Coolpix 7900/5900/7600/4600/S1: up to three faces detected, framed and tracked, focusing on the nearest, the first mass-market detect-then-focus system.",
    [
     1
    ]
   ],
   [
    2012,
    "proto",
    "Olympus OM-D E-M5（2012）的 Face & Eye Priority AF 已能在人脸里找到瞳孔并对焦，可选左眼、右眼或最近的眼，比 Sony 的 Eye AF 早一年。",
    "Olympus's OM-D E-M5 (2012) Face & Eye Priority AF could already find and focus on the pupil within a face, with left-eye, right-eye or nearest-eye choice, a year before Sony's Eye AF.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "Sony α7 / α7R 推出命名为 Eye AF 的功能：按住自定义键即对焦人眼，找不到眼睛时退回人脸；评测认为这是大光圈人像对焦的突破。",
    "Sony's α7/α7R introduced the function named Eye AF: hold a custom button to focus on the eye, falling back to face detection; reviewers called it a breakthrough for wide-aperture portraits.",
    [
     3,
     4
    ]
   ],
   [
    2019,
    "ver",
    "Sony α6400（2019 年 1 月）推出 Real-time Eye AF 与 Real-time Tracking，用 AI 物体识别、半按快门即持续追眼；α9 v5.0 固件（3 月）跟进，v6.0（夏季）加入动物眼。",
    "Sony's α6400 (Jan 2019) introduced Real-time Eye AF and Real-time Tracking, using AI object recognition to track eyes on a half-press; the α9 got it in firmware v5.0 (March) and animal eye AF in v6.0 (summer).",
    [
     5
    ]
   ],
   [
    2019,
    "ver",
    "Eye AF 上手机：Sony Xperia 1（2019 年 2 月 MWC 发布）把 α 系列的 Eye AF 移植过来，是第一款带眼部对焦的手机。",
    "Eye AF reached phones: the Sony Xperia 1 (announced at MWC, Feb 2019) brought over Eye AF from the α line, the first phone with eye-detect autofocus.",
    [
     6
    ]
   ],
   [
    2019,
    "rival",
    "Olympus OM-D E-M1X（2019 年 1 月）推出 Intelligent Subject Detection AF：每类主体用数万张标注图做 deep learning 训练，识别赛车 / 摩托、火车、飞机并对准头盔或机身。“识别对象”从人脸扩展到交通工具。",
    "Olympus's OM-D E-M1X (Jan 2019) introduced Intelligent Subject Detection AF, trained with deep learning on tens of thousands of labeled images per class, to detect race cars/motorcycles, trains and airplanes and focus on helmet or body, extending detection from faces to vehicles.",
    [
     7
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III（2020 年 1 月）首次用 deep learning 训练头部检测，学习了大量体育机构照片，戴头盔、护目镜、侧脸也能追。EOS R5 / R6 随后加入动物识别。",
    "Canon's EOS-1D X Mark III (Jan 2020) was its first deep-learning head detection, trained on sports-agency photo libraries, so helmets, goggles and turned heads can be tracked; the EOS R5/R6 then added animal detection.",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "Canon EOS R3 加入 deep learning 车辆识别（方程式、GT、拉力车和摩托车，可选优先车或车手），并配 Eye Control AF；Nikon Z9（2021 年 10 月）可识别 9 类主体，包括人、猫狗、鸟、自行车、摩托、汽车、火车和飞机。",
    "Canon's EOS R3 added deep-learning vehicle detection (formula, GT, rally cars and motorcycles, with vehicle or driver priority) plus Eye Control AF; Nikon's Z9 (Oct 2021) detected nine subject types: people, dogs, cats, birds, bicycles, motorcycles, cars, trains and airplanes.",
    [
     9,
     10
    ]
   ],
   [
    2022,
    "ver",
    "Sony α7R V（2022 年 10 月）加入独立 AI processing unit，用 human pose estimation 追踪人体约 20 个关键点，背身、戴口罩也能对焦，并新增昆虫、汽车、火车、飞机识别。",
    "Sony's α7R V (Oct 2022) added a dedicated AI processing unit with human pose estimation tracking about 20 body points, so subjects turned away or masked can be focused, and added insect, car, train and airplane recognition.",
    [
     11
    ]
   ]
  ],
  "now": [
   "2026 年 deep learning 主体识别对焦已是 Sony、Canon、Nikon、OM System 无反的标配：人、动物、鸟、昆虫、车辆、飞机都能自动识别，并用姿态估计在看不到眼睛时继续追焦；手机人像 / 视频也在用眼部和主体追焦。",
   "In 2026 deep-learning subject-detect AF is standard on Sony, Canon, Nikon and OM System mirrorless cameras, auto-recognizing people, animals, birds, insects, vehicles and aircraft and using pose estimation to keep tracking when the eye is hidden; phones use eye and subject tracking for portraits and video."
  ],
  "replaced": [
   "“Eye AF”这个单一功能已被吸收进更通用的 AI 主体识别与姿态估计。下一步是理解场景和动作，预判主体会做什么，而不只是认出它是什么。",
   "Eye AF as a single feature has been absorbed into general AI subject recognition and pose estimation. The next step is understanding scenes and actions, predicting what the subject will do rather than only recognizing what it is."
  ],
  "refs": [
   {
    "t": "Rapid Object Detection Using a Boosted Cascade of Simple Features (CVPR 2001) - ML Anthology",
    "u": "https://mlanthology.org/cvpr/2001/viola2001cvpr-rapid"
   },
   {
    "t": "The New Face of Photography: Nikon Face-Priority AF - Nikon USA press release (2005)",
    "u": "https://www.nikonusa.com/press-room/the-new-face-of-photography-n"
   },
   {
    "t": "Olympus OM-D E-M5 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/olympusem5/4"
   },
   {
    "t": "Eye AF - ILCE-7/ILCE-7R Help Guide - Sony",
    "u": "https://helpguide.sony.net/gbmig/44840601/v1/eng/contents/TP0000241596.html"
   },
   {
    "t": "Eye Detection in Sony A7R: It's About Time - diglloyd (2013)",
    "u": "https://www.diglloyd.com/blog/2013/20131022_3-SonyA7r-eye-detection.html"
   },
   {
    "t": "Sony announces α9 camera upgrade through major firmware updates - Alpha Universe",
    "u": "https://alphauniverse.com/stories/sony-announces--9-camera-upgrade-through-major-firmware-updates/"
   },
   {
    "t": "Sony's Xperia 1 has a triple-cam and eye-AF - Australian Photography",
    "u": "https://www.australianphotography.com/gear/sony-s-xperia-1-has-a-triple-cam-and-eye-af"
   },
   {
    "t": "Olympus E-M1X Q&A: a closer look at the tech - Imaging Resource",
    "u": "https://imaging-resource.com/news/2019/01/24/olympus-e-m1x-closer-look-amazing-tech-underlying-new-OM-D-series-flagship"
   },
   {
    "t": "What is Deep Learning AF: how does Canon's AI-powered autofocus work? - Digital Camera World",
    "u": "https://www.digitalcameraworld.com/features/what-is-deep-learning-af-how-does-canons-ai-powered-autofocus-work"
   },
   {
    "t": "Canon's new AI autofocus system will let the EOS R3 track race cars - Engadget",
    "u": "https://www.engadget.com/canon-eos-r3-race-car-tracking-125059799.html"
   },
   {
    "t": "Nikon releases the Z 9 full-frame mirrorless camera - Nikon (2021)",
    "u": "https://www.nikon.com/news/2021/1028_mirrorless_01.htm"
   },
   {
    "t": "Sony's high-resolution A7R V mirrorless camera - Engadget",
    "u": "https://www.engadget.com/sony-a7r-5-mirrorless-camera-61-megapixels-8k-video-152052459.html"
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
 },
 "multiisp": {
  "stages": [
   [
    2011,
    "idea",
    "LG Optimus 3D（2011 年 7 月上市）用 TI OMAP4430 驱动两颗 5MP 立体摄像头同时拍 3D 照片和 720p 3D 视频，手机 SoC 第一次需要同时处理两路摄像头数据。",
    "The LG Optimus 3D (on sale July 2011) used a TI OMAP4430 to drive two 5MP stereo cameras at once for 3D photos and 720p 3D video, one of the first times a phone SoC had to process two camera streams simultaneously.",
    [
     0
    ]
   ],
   [
    2013,
    "corp",
    "Qualcomm 在 CES 2013 发布 Snapdragon 800，明确写入 Dual ISP（双图像信号处理器），支持多达 4 颗摄像头、3D 拍摄和多图合成等计算摄影功能。",
    "At CES 2013 Qualcomm announced the Snapdragon 800 with dual image signal processors, supporting up to four cameras plus 3D capture and photo merging for computational photography.",
    [
     1
    ]
   ],
   [
    2013,
    "mass",
    "Snapdragon 800 机型在 2013 年年中至下半年上市（约），双 ISP 首次进入量产手机，但当时多数手机仍只有一颗后摄，第二条 ISP 多用于前摄或 3D。",
    "Snapdragon 800 phones shipped from mid-to-late 2013 (approx.), putting dual ISPs into mass-produced phones, though most still had a single rear camera and the second ISP mostly served the front or 3D camera.",
    [
     1
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 8 月 Qualcomm 公布 Snapdragon 820 的 Spectra ISP：14-bit 双 ISP，最多 3 颗摄像头同时工作（1 前 2 后），单颗 25MP@30fps 零快门延迟，或两颗 12MP 做深度。",
    "In August 2015 Qualcomm detailed the Snapdragon 820's Spectra ISP: a 14-bit dual ISP handling up to three simultaneous cameras (one front, two rear), 25MP at 30 fps with zero shutter lag, or two 12MP sensors for depth.",
    [
     2
    ]
   ],
   [
    2016,
    "mass",
    "Snapdragon 820 机型 2016 年上半年上市，双摄手机兴起，两条 ISP 并行让广角 + 超广角、彩色 + 黑白等双摄组合可以同时取景合成。",
    "Snapdragon 820 phones arrived in the first half of 2016 as dual-camera phones took off; two parallel ISPs let pairs like wide + ultra-wide or color + mono be captured and fused at the same time.",
    [
     2
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 12 月 Snapdragon 888 发布，Spectra 580 号称全球首个三 ISP：2.7 Gpixel/s（比上代快 35%），可同时处理 3 路 4K HDR 或 3 颗 28MP，实现主摄、超广角、长焦之间无缝切换。",
    "In December 2020 the Snapdragon 888's Spectra 580 was billed as the world's first triple ISP: 2.7 Gpixel/s (35% faster), three concurrent 4K HDR streams or 3x 28MP, enabling seamless switching between main, ultra-wide and telephoto.",
    [
     3
    ]
   ],
   [
    2021,
    "rival",
    "Google 在 Pixel 6（2021 年 10 月）改用自研 Tensor，把 Live HDR+ 和机器学习直接做进 ISP；Face Unblur 让主摄和超广角同时拍一亮一暗两张再融合，是另一条“自研 ISP + ML”路线。",
    "Google's Pixel 6 (October 2021) switched to its own Tensor chip with Live HDR+ and machine learning built into the ISP; Face Unblur captures the main and ultra-wide cameras simultaneously and fuses them, a rival in-house ISP + ML approach.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "MediaTek Dimensity 9000（2021 年底发布）的 Imagiq 790 采用三 ISP、18-bit HDR 流水线，9 Gpixel/s，支持 32+32+32MP 三摄并发和 3 路 4K HDR 录像，首个支持 320MP 传感器。",
    "MediaTek's Dimensity 9000 (announced late 2021) brought the Imagiq 790: triple 18-bit HDR ISPs at 9 Gpixel/s, 32+32+32MP concurrent capture and three 4K HDR video streams, and the first support for 320MP sensors.",
    [
     4
    ]
   ],
   [
    2022,
    "ver",
    "Snapdragon 8 Gen 2（2022 年 11 月）升级为 18-bit 三 ISP，3.2 Gpixel/s，并加入 Cognitive ISP，用神经网络实时语义分割人脸、头发、天空等最多 8 层分别处理。",
    "The Snapdragon 8 Gen 2 (November 2022) moved to an 18-bit triple ISP at 3.2 Gpixel/s and added a Cognitive ISP that uses a neural network for real-time semantic segmentation (faces, hair, sky, up to 8 layers).",
    [
     5
    ]
   ],
   [
    2022,
    "corp",
    "车载领域：Ambarella 在 CES 2022 发布 CV3 域控 SoC，集成新一代 ISP，单芯片可同时接 12 路物理或 20 路虚拟摄像头，覆盖 L2+ 车辆约 10 颗摄像头的全套感知。",
    "In automotive, Ambarella announced the CV3 domain-controller SoC at CES 2022 with a next-generation ISP that handles up to 12 physical or 20 virtual cameras on one chip, covering the roughly 10 cameras of an L2+ car.",
    [
     8
    ]
   ],
   [
    2024,
    "ver",
    "Snapdragon 8 Elite（2024 年 10 月）把 ISP 改称 AI ISP，吞吐 4.3 Gpixel/s，支持 48+48+48MP 三摄并发和 108MP@30fps，静态最高 320MP，ISP 与 Hexagon NPU 直接共享 RAW 数据。",
    "The Snapdragon 8 Elite (October 2024) rebranded its ISP as an AI ISP: 4.3 Gpixel/s, 48+48+48MP triple concurrency, 108MP at 30 fps, stills up to 320MP, with the ISP sharing raw data directly with the Hexagon NPU.",
    [
     6
    ]
   ]
  ],
  "now": [
   "2026 年旗舰手机 SoC（Snapdragon 8 Elite 系列、Dimensity 9000 之后各代、Google Tensor、Apple A 系列）都标配三路并行 ISP，18-bit 流水线与 NPU 深度耦合；车载域控单芯片可同时处理 10 路以上摄像头。",
   "In 2026 flagship phone SoCs (Snapdragon 8 Elite series, MediaTek Dimensity 9000 successors, Google Tensor, Apple A-series) all ship triple parallel ISPs with 18-bit pipelines tightly coupled to the NPU; automotive domain controllers process 10+ cameras on one chip."
  ],
  "replaced": [
   "多 ISP 并行本身没有被取代，而是被吸收进“AI ISP”：固定功能流水线与 NPU 融合，语义分割、降噪、HDR 合成越来越多由神经网络完成；车载方向则走向中央计算平台统一处理全部摄像头。",
   "Parallel ISPs have not been replaced but absorbed into the AI ISP: fixed-function pipelines merge with the NPU, and segmentation, denoising and HDR fusion are increasingly done by neural networks; in cars the trend is a central compute platform processing every camera."
  ],
  "refs": [
   {
    "t": "LG Optimus 3D - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/LG_Optimus_3D"
   },
   {
    "t": "Qualcomm outs Snapdragon 800 and 600 (Engadget, 2013)",
    "u": "https://www.engadget.com/2013/01/07/qualcomm-snapdragon-800-and-600-chips"
   },
   {
    "t": "Qualcomm Snapdragon 820 Features Brand New ISP (Image Sensors World, 2015)",
    "u": "https://image-sensors-world.blogspot.com/2015/08/qualcomm-snapdragon-820-features-brand.html"
   },
   {
    "t": "Qualcomm Snapdragon 888 5G deep dive (Notebookcheck, 2020)",
    "u": "https://www.notebookcheck.net/Qualcomm-Snapdragon-888-5G-deep-dive-New-flagship-SoC-promises-significant-improvements-in-camera-gaming-and-AI.506886.0.html"
   },
   {
    "t": "MediaTek Dimensity 9000 specs and features (FoneArena, 2021)",
    "u": "https://www.fonearena.com/blog/352242/mediatek-dimensity-9000-specs-features.html/amp"
   },
   {
    "t": "Snapdragon 8 Gen 2 brings Cognitive ISP to video and photo (ProVideo Coalition)",
    "u": "https://www.provideocoalition.com/snapdragon-8-gen-2-brings-cognitive-isp-to-video-and-photo/"
   },
   {
    "t": "Qualcomm Snapdragon 8 Elite (The Register, 2024)",
    "u": "https://www.theregister.com/2024/10/22/qualcomm_snapdragon_8_elite/"
   },
   {
    "t": "Pixel 6's camera combines hardware, software and ML (Google blog)",
    "u": "https://blog.google/products/pixel/pixel-6s-camera-combines-hardware-software-and-ml/"
   },
   {
    "t": "Ambarella CV3 SoC integrates high-res image and radar processing (eeNews Europe, 2022)",
    "u": "https://www.eenewseurope.com/en/soc-integrates-high-res-image-and-radar-processing-delivers-500-etops/"
   }
  ]
 },
 "heif": {
  "stages": [
   [
    2013,
    "idea",
    "MPEG 在 2013 年定义静态图像和图像序列编码的需求，打算用 HEVC 帧内编码配合 ISO 基础媒体文件格式（ISOBMFF）取代 JPEG；2014 年 1 月第 107 次 MPEG 会议提交委员会草案。",
    "In 2013 MPEG defined requirements for coding still images and image sequences with HEVC intra coding inside the ISO Base Media File Format (ISOBMFF) as a JPEG successor; a committee draft followed at the 107th MPEG meeting in January 2014.",
    [
     0,
     1
    ]
   ],
   [
    2015,
    "paper",
    "HEIF（ISO/IEC 23008-12，MPEG-H Part 12）于 2015 年 6 月技术定稿；Nokia 的 Miska Hannuksela、Jani Lainema、Vinod Malamal Vadakital 在 IEEE Signal Processing Magazine 第 32 卷第 4 期发表标准综述。",
    "HEIF (ISO/IEC 23008-12, MPEG-H Part 12) was declared technically complete in June 2015; Nokia's Miska Hannuksela, Jani Lainema and Vinod Malamal Vadakital summarised it in IEEE Signal Processing Magazine vol. 32 no. 4.",
    [
     1,
     3
    ]
   ],
   [
    2015,
    "proto",
    "Nokia Technologies 发布开源 HEIF reader/writer 参考库和示例网站，用来演示连拍、动图、多图和缩略图等 JPEG 做不到的封装能力。",
    "Nokia Technologies released an open-source HEIF reader/writer reference library and demo site, showing bursts, animations, image collections and thumbnails that JPEG cannot hold.",
    [
     2
    ]
   ],
   [
    2017,
    "mass",
    "Apple 在 WWDC 2017 宣布 iOS 11 和 macOS High Sierra 默认用 HEIC（HEVC 编码的 HEIF）存照片，“高效”模式号称省一半空间，实测 2MB JPEG 对应约 1.2MB HEIC；支持机型限于 A9/A10 及以后芯片（来源说法不一）。",
    "At WWDC 2017 Apple made HEIC (HEVC-coded HEIF) the default photo format in iOS 11 and macOS High Sierra, claiming up to 50% savings (a 2MB JPEG became about 1.2MB); support was limited to A9/A10 or newer chips (sources differ).",
    [
     4,
     0
    ]
   ],
   [
    2017,
    "ver",
    "ISO/IEC 23008-12 第一版于 2017 年底正式出版，2020 年发布勘误；Nokia 也推出基于 HEIF 的 MIAF 应用格式规范实现。",
    "The first edition of ISO/IEC 23008-12 was formally published in late 2017, with a corrigendum in 2020; Nokia also implemented the HEIF-based MIAF application format.",
    [
     1,
     2
    ]
   ],
   [
    2018,
    "corp",
    "Android 8（2017）加入 HEIF 解码，Snapdragon 855（2018 年底）让 Android 手机可以拍 HEIF，Android 10（2019）加入 HEIC 编码；Windows 10 1803 以付费扩展支持 HEIF。",
    "Android 8 (2017) added HEIF decoding, the Snapdragon 855 (late 2018) enabled HEIF capture on Android, and Android 10 (2019) added HEIC encoding; Windows 10 1803 supported HEIF through a paid extension.",
    [
     0,
     1
    ]
   ],
   [
    2019,
    "rival",
    "Alliance for Open Media 于 2019 年 2 月 19 日发布 AVIF 1.0.0：沿用 HEIF 容器，但改用免版税的 AV1 编码，绕开 HEVC 专利池，成为 Web 端主要竞争者。",
    "The Alliance for Open Media released AVIF 1.0.0 on 19 February 2019: it keeps the HEIF container but uses royalty-free AV1 instead of HEVC, sidestepping HEVC patent pools and becoming the main web-side rival.",
    [
     8
    ]
   ],
   [
    2019,
    "ver",
    "Samsung 在 Galaxy S10（2019）加入 HEIF 拍照选项，HEIF 从 iPhone 扩展到主流 Android 旗舰。",
    "Samsung added a HEIF capture option on the Galaxy S10 (2019), spreading HEIF from the iPhone to mainstream Android flagships.",
    [
     1
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS-1D X Mark III（2020 年 1 月 6 日发布）首次把 HEIF 用于相机：HDR PQ 静态照片，Rec. 2100（PQ、Rec. 2020 原色）、10-bit、4:2:2，文件扩展名 .HIF。",
    "The Canon EOS-1D X Mark III (announced 6 January 2020) brought HEIF to cameras: HDR PQ stills in Rec. 2100 (PQ transfer, Rec. 2020 primaries), 10-bit, 4:2:2, saved as .HIF.",
    [
     5,
     6
    ]
   ],
   [
    2020,
    "ver",
    "Sony α7S III（2020 年 7 月 28 日发布）是 Sony 第一台支持 HEIF 的相机，10-bit 平滑渐变并可经 HDMI 在 Sony HDR 电视上显示；此后 Sony α1、α7 IV 支持 10-bit HLG HEIF。",
    "The Sony α7S III (announced 28 July 2020) was Sony's first camera with HEIF, offering smooth 10-bit gradation viewable on Sony HDR TVs via HDMI; the α1 and α7 IV later added 10-bit HLG HEIF.",
    [
     7,
     0
    ]
   ],
   [
    2023,
    "rival",
    "Google 随 Android 14 推出 Ultra HDR：在普通 JPEG 里附加对数增益图（gain map），旧软件看到 SDR，新屏幕还原 HDR；Android 15 起同时写入 ISO 21496-1 增益图元数据，HDR 照片不再必须换成 HEIF。",
    "Google introduced Ultra HDR with Android 14: a JPEG carrying a logarithmic gain map, so old readers see SDR while HDR screens reconstruct HDR; from Android 15 it also writes ISO 21496-1 gain-map metadata, so HDR stills no longer require HEIF.",
    [
     9
    ]
   ],
   [
    2024,
    "rival",
    "iPhone 16 Pro（2024 年 9 月）加入 JPEG XL 拍摄，ProRAW 可选 JPEG-XL 无损或有损压缩；JPEG XL 同时支持有损和无损，而 HEIC 仍作为默认格式并存。",
    "The iPhone 16 Pro (September 2024) added JPEG XL capture, with ProRAW selectable as JPEG-XL lossless or lossy; JPEG XL supports both modes, while HEIC remains the default alongside it.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年 HEIC 仍是 iPhone 默认照片格式，Android 旗舰普遍支持 HEIF 拍摄；Canon（EOS R5/R6/R8）、Sony（α1、α7 IV）、Nikon Z、Fujifilm 相机都能存 10-bit HEIF；Windows 11 22H2 起内置支持。",
   "In 2026 HEIC is still the iPhone's default photo format and Android flagships widely capture HEIF; Canon (EOS R5/R6/R8), Sony (α1, α7 IV), Nikon Z and Fujifilm cameras save 10-bit HEIF; Windows 11 22H2 supports it natively."
  ],
  "replaced": [
   "拍摄端尚未被取代，但 HEIF 容器正被 AVIF（AV1）和 JPEG XL 分流：Web 端以 AVIF 为主，Apple 在 ProRAW 用 JPEG XL；HDR 静态照片则转向增益图方案（Ultra HDR JPEG、ISO 21496-1），可嵌入 JPEG、HEIC、AVIF。",
   "On capture HEIF has not been replaced, but AVIF (AV1) and JPEG XL are eroding it: AVIF dominates the web and Apple uses JPEG XL for ProRAW; HDR stills are moving to gain-map schemes (Ultra HDR JPEG, ISO 21496-1) that can live in JPEG, HEIC or AVIF."
  ],
  "refs": [
   {
    "t": "High Efficiency Image File Format - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format"
   },
   {
    "t": "HEIF format description (Library of Congress, Sustainability of Digital Formats)",
    "u": "https://loc.gov/preservation/digital/formats/fdd/fdd000525.shtml"
   },
   {
    "t": "Nokia HEIF technical information and library",
    "u": "https://nokiatech.github.io/heif/"
   },
   {
    "t": "Hannuksela, Lainema, Malamal Vadakital: The High Efficiency Image File Format Standard (IEEE SPM 2015) record",
    "u": "https://search.isc.ac/inventory/49/1762906.htm"
   },
   {
    "t": "iOS 11's new HEIF/HEVC camera formats will save you 50% on storage (9to5Mac)",
    "u": "https://9to5mac.com/2017/06/08/ios-11s-new-heifhevc-camera-formats-will-save-you-50-on-storage/"
   },
   {
    "t": "Canon EOS-1D X Mark III press release (Canon Canada, 2020)",
    "u": "https://www.canon.ca/en/About-Canon/News/Press-Releases/2020/2020-JAN-06-1D-X-MARK-III"
   },
   {
    "t": "Canon EOS-1D X Mark III - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS-1D_X_Mark_III"
   },
   {
    "t": "Sony Alpha 7S III press release (Sony Europe, 2020)",
    "u": "https://www.mynewsdesk.com/uk/sony-europe/pressreleases/highly-anticipated-sony-alpha-7s-iii-combines-supreme-imaging-performance-with-classic-s-series-sensitivity-3023641"
   },
   {
    "t": "AVIF - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/AVIF"
   },
   {
    "t": "Ultra HDR Image Format v1.1 (Android Developers)",
    "u": "https://developer.android.com/media/platform/hdr-image-format"
   },
   {
    "t": "iPhone 16 Pro Supports JPEG-XL Format (MacRumors, 2024)",
    "u": "https://www.macrumors.com/2024/09/09/iphone-16-pro-supports-jpeg-xl-format/"
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
 "superres": {
  "stages": [
   [
    1984,
    "idea",
    "R. Y. Tsai 与 T. S. Huang 在《Advances in Computer Vision and Image Processing》第 1 卷发表 Multiframe image restoration and registration，首次提出多帧超分：多张欠采样图像之间若有亚像素位移，可在频域消除混叠、恢复高频。",
    "R. Y. Tsai and T. S. Huang's 'Multiframe image restoration and registration' (Advances in Computer Vision and Image Processing, vol. 1) first proposed multi-frame super-resolution: sub-pixel shifts between undersampled frames let aliasing be undone in the frequency domain to recover high frequencies.",
    [
     1,
     0
    ]
   ],
   [
    1991,
    "paper",
    "Michal Irani 与 Shmuel Peleg 在 CVGIP: Graphical Models and Image Processing 发表 Improving resolution by image registration，提出空域迭代反投影（IBP），成为后续多帧超分的经典基线。",
    "Michal Irani and Shmuel Peleg published 'Improving resolution by image registration' in CVGIP: Graphical Models and Image Processing, introducing spatial-domain iterative back-projection, a classic baseline for later multi-frame SR.",
    [
     0
    ]
   ],
   [
    2002,
    "paper",
    "STScI 与 ST-ECF 的 Fruchter 和 Hook 在 PASP 第 114 卷发表 Drizzle（可变像素线性重建），原为合并 Hubble Deep Field 的抖动（dither）曝光，天文界由此普及亚像素多帧合成。",
    "Fruchter and Hook (STScI and ST-ECF) published Drizzle, variable-pixel linear reconstruction, in PASP vol. 114; built to combine dithered Hubble Deep Field exposures, it made sub-pixel multi-frame combining standard in astronomy.",
    [
     2
    ]
   ],
   [
    2004,
    "paper",
    "Farsiu、Robinson、Elad、Milanfar 在 IEEE TIP 第 13 卷第 10 期发表 Fast and Robust Multiframe Super Resolution，用 L1 范数和双边全变分先验，对运动估计误差更稳健；Milanfar 后来领导 Google 的 Super Res Zoom。",
    "Farsiu, Robinson, Elad and Milanfar published 'Fast and Robust Multiframe Super Resolution' in IEEE TIP 13(10), using an L1 norm and bilateral-TV prior that tolerates motion-estimation errors; Milanfar later led Google's Super Res Zoom work.",
    [
     3
    ]
   ],
   [
    2014,
    "mass",
    "Oppo Find 7（2014 年 3 月）推出 50MP“Super Zoom”模式：13MP Sony IMX214 极速连拍 10 张，自动挑 4 张合成 8160×6120 照片，是较早量产的手机多帧超分（需尽量保持稳定）。",
    "The Oppo Find 7 (March 2014) introduced a 50MP 'Super Zoom' mode: its 13MP Sony IMX214 fires 10 shots, picks the best four and merges them into an 8160x6120 image, an early mass-market phone multi-frame SR (best kept steady).",
    [
     4
    ]
   ],
   [
    2015,
    "rival",
    "Olympus OM-D E-M5 Mark II（2015 年 2 月）用机身防抖推动传感器按 0.5 像素步进连拍 8 张，16MP 合成 40MP JPEG / 64MP RAW，但需三脚架；Pentax、Sony、Panasonic 随后跟进像素位移多拍。",
    "The Olympus OM-D E-M5 Mark II (February 2015) used its IBIS to shift the sensor in 0.5-pixel steps over 8 shots, turning 16MP into 40MP JPEG / 64MP RAW, but required a tripod; Pentax, Sony and Panasonic followed with pixel-shift modes.",
    [
     5
    ]
   ],
   [
    2018,
    "ver",
    "Google Pixel 3（2018 年 10 月）推出 Super Res Zoom（Bartlomiej Wronski、Peyman Milanfar）：利用 OIS 无法完全消除的手抖获得亚像素位移，多帧直接合并到更高分辨率网格并取代去马赛克，1.2× 以上启用，2× 时接近光学变焦。",
    "Google's Pixel 3 (October 2018) launched Super Res Zoom (Bartlomiej Wronski, Peyman Milanfar): residual hand tremor that OIS cannot remove supplies sub-pixel shifts, frames merge straight onto a higher-res grid replacing demosaicing, active above 1.2x and near 2x-optical quality.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "同一合并算法在 Pixel 3 上被用作 Night Sight 的默认多帧合并，多帧超分从变焦扩展到低光降噪。",
    "On the Pixel 3 the same merge algorithm became the default frame merging for Night Sight, extending multi-frame SR from zoom to low-light denoising.",
    [
     11
    ]
   ],
   [
    2019,
    "paper",
    "Wronski、Garcia-Dorado、Ernst、Kelly、Krainin、Liang、Levoy、Milanfar 在 SIGGRAPH 2019 发表 Handheld Multi-Frame Super-Resolution：直接从 CFA RAW 连拍生成全彩 RGB，12MP 在手机上约 100 ms，并能处理局部运动和遮挡。",
    "Wronski, Garcia-Dorado, Ernst, Kelly, Krainin, Liang, Levoy and Milanfar presented Handheld Multi-Frame Super-Resolution at SIGGRAPH 2019: full RGB directly from a CFA raw burst, about 100 ms for 12MP on a phone, robust to local motion and occlusion.",
    [
     7
    ]
   ],
   [
    2019,
    "ver",
    "Olympus OM-D E-M1X（2019 年 1 月发布）加入手持高像素模式，利用手抖和传感器位移合成 50MP，相机端也摆脱了三脚架。",
    "The Olympus OM-D E-M1X (announced January 2019) added Handheld High Res Shot, using hand shake plus sensor shift to produce 50MP, freeing cameras from the tripod too.",
    [
     8
    ]
   ],
   [
    2020,
    "rival",
    "Samsung Galaxy S20 Ultra（2020 年 2 月）的 Space Zoom 把 10× 混合光学变焦与“AI 多帧处理”超分结合，宣称 100× 数码变焦，多帧超分开始与 AI 放大混用。",
    "The Samsung Galaxy S20 Ultra's Space Zoom (February 2020) combined 10x hybrid optical zoom with 'AI multi-frame processing' super-resolution for a claimed 100x zoom, mixing multi-frame SR with AI upscaling.",
    [
     9
    ]
   ],
   [
    2025,
    "end",
    "Pixel 10 Pro（2025 年）推出 Pro Res Zoom：在 Tensor G5 上本地运行单步扩散模型，把变焦扩展到 100×（Pixel 9 Pro 的 Super Res Zoom 为 30×），用生成式 AI 补出传感器没拍到的细节，超长焦从多帧重建走向生成式重建。",
    "The Pixel 10 Pro (2025) introduced Pro Res Zoom: a single-step diffusion model running on-device on Tensor G5 extends zoom to 100x (Pixel 9 Pro's Super Res Zoom reached 30x), using generative AI to fill in detail the sensor never captured, moving extreme zoom from multi-frame reconstruction to generative reconstruction.",
    [
     10
    ]
   ]
  ],
  "now": [
   "2026 年多帧超分是手机变焦与 RAW 合并的标准环节：Pixel Super Res Zoom 仍负责中低倍率，Samsung、Apple、Xiaomi 等也用多帧合并做数码变焦；相机端 Olympus/OM System、Panasonic、Sony 提供手持或三脚架像素位移高像素模式。",
   "In 2026 multi-frame SR is a standard step in phone zoom and raw merging: Pixel's Super Res Zoom still covers low-to-mid zoom, and Samsung, Apple, Xiaomi and others merge bursts for digital zoom; OM System, Panasonic and Sony cameras offer handheld or tripod pixel-shift high-res modes."
  ],
  "replaced": [
   "中低倍率仍在用；高倍率正被单图深度学习超分和生成式扩散模型（如 Pixel 10 Pro 的 Pro Res Zoom）接替，代价是可能“幻觉”出不存在的细节；同时 200MP 传感器裁切和潜望长焦减少了对算法放大的依赖。",
   "It remains in use at low-to-mid zoom; at high zoom it is being succeeded by single-image deep-learning SR and generative diffusion models (e.g., Pixel 10 Pro's Pro Res Zoom), at the risk of hallucinated detail, while 200MP sensor cropping and periscope telephotos reduce the need for algorithmic upscaling."
  ],
  "refs": [
   {
    "t": "Farsiu, Robinson, Elad, Milanfar: Fast and Robust Multiframe Super Resolution (IEEE TIP 2004, PDF; cites Tsai & Huang 1984 and Irani & Peleg 1991)",
    "u": "https://people.duke.edu/~sf59/SRfinal.pdf"
   },
   {
    "t": "Vandewalle et al.: Subspace-based methods for image registration and super-resolution (EPFL)",
    "u": "https://infoscience.epfl.ch/record/128876/files/VandewalleBDV08.pdf"
   },
   {
    "t": "Drizzle (image processing) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Drizzle_(image_processing)"
   },
   {
    "t": "Fast and Robust Multiframe Super Resolution (Duke Scholars record)",
    "u": "https://scholars.duke.edu/publication/723784"
   },
   {
    "t": "Oppo Find 7 is the world's first phone that can take 50MP photos (Engadget, 2014)",
    "u": "https://www.engadget.com/2014-03-19-oppo-find-7-50mp-camera.html"
   },
   {
    "t": "Olympus OM-D E-M5 Mark II - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Olympus_OM-D_E-M5_Mark_II"
   },
   {
    "t": "See Better and Further with Super Res Zoom on the Pixel 3 (Google Research, 2018)",
    "u": "https://research.google/blog/see-better-and-further-with-super-res-zoom-on-the-pixel-3/"
   },
   {
    "t": "Wronski et al.: Handheld Multi-Frame Super-Resolution (SIGGRAPH 2019, arXiv)",
    "u": "https://arxiv.org/abs/1905.03277"
   },
   {
    "t": "Olympus OM-D E-M1X - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Olympus_OM-D_E-M1X"
   },
   {
    "t": "Galaxy S20 Lights a New Path for Photography with Space Zoom (Samsung Mobile Press)",
    "u": "https://samsungmobilepress.com/feature-stories/galaxy-s20-lights-a-new-path-for-photography-with-high-resolution-sensors-and-space-zoom-technology"
   },
   {
    "t": "See Pixel 10 Pro's new zoom tech in action (Google blog)",
    "u": "https://blog.google/products/pixel/google-pixel-pro-res-zoom/"
   },
   {
    "t": "Night Sight: Seeing in the Dark on Pixel Phones (Google Research, 2018)",
    "u": "https://research.google/blog/night-sight-seeing-in-the-dark-on-pixel-phones/"
   }
  ]
 },
 "dv": {
  "stages": [
   [
    2004,
    "idea",
    "BrightSide Technologies（前身 Sunnybrook Technologies）2004 年从 University of British Columbia 结构表面物理实验室分拆，Helge Seetzen 任 CTO，用逐区调制 LED 背光 + LCD（IMLED-LCD）做出超高对比 HDR 显示器，2005 年起公开演示。",
    "BrightSide Technologies (formerly Sunnybrook Technologies) spun out of the University of British Columbia's Structured Surface Physics Lab in 2004, with Helge Seetzen as CTO, building ultra-high-contrast HDR displays from individually modulated LED backlights behind LCDs (IMLED-LCD), demoed from 2005.",
    [
     0,
     1
    ]
   ],
   [
    2007,
    "corp",
    "Dolby 于 2007 年 2 月 27 日宣布以 2800 万美元现金收购 BrightSide，4 月 25 日完成；这套 HDR 技术后来更名为 Dolby Vision。",
    "Dolby announced on 27 February 2007 that it would buy BrightSide for US$28 million in cash, closing on 25 April; the HDR technology was later renamed Dolby Vision.",
    [
     0,
     1
    ]
   ],
   [
    2013,
    "paper",
    "Dolby 的 Scott Miller、Mahdi Nezamabadi、Scott Daly 在 SMPTE Motion Imaging Journal（2013 年 5 月，第 122 卷第 4 期）发表 Perceptual Signal Coding for More Efficient Usage of Bit Codes，提出基于人眼的 PQ 曲线，后标准化为 SMPTE ST 2084。",
    "Dolby's Scott Miller, Mahdi Nezamabadi and Scott Daly published 'Perceptual Signal Coding for More Efficient Usage of Bit Codes' in the SMPTE Motion Imaging Journal (May 2013, vol. 122 no. 4), proposing the vision-based PQ curve later standardised as SMPTE ST 2084.",
    [
     2,
     5
    ]
   ],
   [
    2014,
    "corp",
    "Dolby 在 CES 2014（1 月 6 日）正式发布 Dolby Vision：最高 12-bit、10,000 nits，带逐场景/逐帧动态元数据（后为 SMPTE ST 2094-10）；Sharp、TCL 展示原型，Netflix、Amazon、VUDU、Xbox Video 宣布支持。",
    "Dolby unveiled Dolby Vision at CES 2014 (6 January): up to 12-bit and 10,000 nits with scene/frame dynamic metadata (later SMPTE ST 2094-10); Sharp and TCL showed prototypes and Netflix, Amazon, VUDU and Xbox Video signed on.",
    [
     3,
     5
    ]
   ],
   [
    2015,
    "mass",
    "首批 Dolby Vision 电视 Vizio Reference Series（65 寸与 120 寸 4K）于 2015 年 4 月在美国上市，VUDU 提供 The Lego Movie 等 Dolby Vision 片源，但当时只有播放端。",
    "The first Dolby Vision TVs, Vizio's Reference Series (65-inch and 120-inch 4K), went on sale in the US in April 2015 with Dolby Vision titles such as The Lego Movie on VUDU, but only on the playback side.",
    [
     4
    ]
   ],
   [
    2015,
    "rival",
    "BBC 与 NHK 于 2015 年 5 月合作开发 HLG（Hybrid Log-Gamma），同年成为 ARIB STD-B67，2016 年写入 ITU-R BT.2100：无需元数据、兼容 SDR，适合直播。",
    "BBC and NHK began jointly developing HLG (Hybrid Log-Gamma) in May 2015; it became ARIB STD-B67 that year and part of ITU-R BT.2100 in 2016, needing no metadata and staying SDR-compatible for live broadcast.",
    [
     6
    ]
   ],
   [
    2017,
    "rival",
    "Samsung 与 Amazon Video 于 2017 年 4 月 20 日发布 HDR10+，以 SMPTE ST 2094-40 动态元数据对标 Dolby Vision，且免授权费。",
    "Samsung and Amazon Video announced HDR10+ on 20 April 2017, using SMPTE ST 2094-40 dynamic metadata to rival Dolby Vision without licence fees.",
    [
     7
    ]
   ],
   [
    2019,
    "rival",
    "Samsung Galaxy S10（2019）支持 HDR10+ 视频录制，手机录制时实时生成 HDR10+ 动态元数据，比 Dolby Vision 录制早一年（约）进入手机。",
    "The Samsung Galaxy S10 (2019) supported HDR10+ video recording, generating HDR10+ dynamic metadata in real time, reaching phones about a year before Dolby Vision recording (approx.).",
    [
     7
    ]
   ],
   [
    2020,
    "mass",
    "iPhone 12 系列（2020 年 10 月）成为首批实时录制 Dolby Vision 的设备：新 ISP 同时处理两次曝光生成元数据，iPhone 12 为 4K30，12 Pro 为 4K60；格式为基于 HLG 的 Profile 8.4，可在 Photos、iMovie 中编辑。",
    "The iPhone 12 line (October 2020) became the first devices to record Dolby Vision in real time: a new ISP processes two exposures to generate metadata, 4K30 on iPhone 12 and 4K60 on 12 Pro; the format is HLG-based Profile 8.4, editable in Photos and iMovie.",
    [
     8,
     9,
     6
    ]
   ],
   [
    2022,
    "ver",
    "Xiaomi 12S Ultra（2022 年 7 月，中国市场）成为首款支持 Dolby Vision HDR 录制和播放的 Android 手机，此后 realme 等品牌跟进。",
    "The Xiaomi 12S Ultra (July 2022, China) became the first Android phone to record and play back Dolby Vision HDR video, followed by realme and other brands.",
    [
     10,
     5
    ]
   ],
   [
    2025,
    "ver",
    "Dolby Vision 录制扩展到更多 Android 机型，例如 Motorola razr ultra 折叠屏把 Dolby Vision Capture 与 Dolby Atmos 一起作为卖点。",
    "Dolby Vision recording spread across more Android models; for example the Motorola razr ultra foldable markets Dolby Vision Capture together with Dolby Atmos.",
    [
     11
    ]
   ],
   [
    2025,
    "ver",
    "Dolby 于 2025 年 9 月 2 日（IFA）发布 Dolby Vision 2 与 Dolby Vision 2 Max：新图像引擎、Content Intelligence（Precision Black、Light Sense 环境光感知）、双向色调映射和 Authentic Motion，Hisense 首发。",
    "On 2 September 2025 (IFA) Dolby announced Dolby Vision 2 and Dolby Vision 2 Max: a new image engine, Content Intelligence (Precision Black, Light Sense ambient sensing), bi-directional tone mapping and Authentic Motion, launching first with Hisense.",
    [
     12
    ]
   ]
  ],
  "now": [
   "2026 年 iPhone 自 12 起全系默认用 Dolby Vision 录 HDR 视频，Xiaomi、vivo、realme、Motorola 等 Android 旗舰也支持；Samsung Galaxy 则主推 HDR10+ 录制。电视端 Dolby Vision 与 HDR10+、HLG 并存，Dolby Vision 2 开始上市。",
   "In 2026 every iPhone since the 12 records HDR video in Dolby Vision by default, and Android flagships from Xiaomi, vivo, realme and Motorola support it, while Samsung Galaxy phones favour HDR10+ recording. On TVs Dolby Vision coexists with HDR10+ and HLG, and Dolby Vision 2 is reaching the market."
  ],
  "replaced": [
   "尚未被取代：手机端与 HDR10+、HLG 竞争共存；专业用户更多录 Log（如 iPhone 15 Pro 起的 Apple Log）后期调色再输出 HDR。下一步是 Dolby Vision 2 在显示端加 AI 内容感知，静态 HDR 照片则走增益图（ISO 21496-1）路线。",
   "Not replaced: on phones it competes and coexists with HDR10+ and HLG, and professionals increasingly shoot Log (e.g., Apple Log since iPhone 15 Pro) and grade to HDR later. Next is Dolby Vision 2 adding AI content awareness on displays, while HDR stills follow the gain-map (ISO 21496-1) route."
  ],
  "refs": [
   {
    "t": "BrightSide Technologies - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/BrightSide_Technologies"
   },
   {
    "t": "Dolby to buy BrightSide HDR technology for $28 mill (Engadget, 2007)",
    "u": "https://www.engadget.com/2007-02-27-dolby-to-buy-brightside-hdr-technology-for-28-mill.html"
   },
   {
    "t": "Miller, Nezamabadi, Daly: Perceptual Signal Coding for More Efficient Usage of Bit Codes (SMPTE Motion Imaging Journal, 2013)",
    "u": "https://journal.smpte.org/periodicals/SMPTE%20Motion%20Imaging%20Journal/122/4/13/"
   },
   {
    "t": "New Dolby Vision Technology press release (Sports Video Group, 6 Jan 2014)",
    "u": "https://www.sportsvideo.org/2014/01/06/new-dolby-vision-technology-helps-content-creators-and-tv-manufacturers-deliver-images-with-true-to-life-brightness-colors-and-contrast/"
   },
   {
    "t": "First Dolby Vision TVs revealed by Vizio (What Hi-Fi)",
    "u": "https://www.whathifi.com/news/first-dolby-vision-tvs-revealed-vizio"
   },
   {
    "t": "Dolby Vision - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Dolby_Vision"
   },
   {
    "t": "Hybrid log-gamma - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Hybrid_log%E2%80%93gamma"
   },
   {
    "t": "HDR10+ - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/HDR10%2B"
   },
   {
    "t": "Apple introduces iPhone 12 Pro and iPhone 12 Pro Max with 5G (Apple Newsroom, 2020)",
    "u": "https://www.apple.com/newsroom/2020/10/apple-introduces-iphone-12-pro-and-iphone-12-pro-max-with-5g/"
   },
   {
    "t": "iPhone 12 Lineup Features HDR Video Recording With Dolby Vision (MacRumors, 2020)",
    "u": "https://www.macrumors.com/2020/10/14/iphone-12-dolby-vision-hdr-video-recording/"
   },
   {
    "t": "Xiaomi's 12S Ultra shoots beautiful HDR videos (Videomaker)",
    "u": "https://www.videomaker.com/news/xiaomis-12s-ultra-shoots-beautiful-hdr-videos/"
   },
   {
    "t": "Capture your world in Dolby Vision (Dolby)",
    "u": "https://www.dolby.com/technologies/dolby-vision/dolby-vision-capture/"
   },
   {
    "t": "Dolby announces Dolby Vision 2 (Engadget, 2025)",
    "u": "https://www.engadget.com/home/home-theater/dolby-announces-dolby-vision-2-expanding-picture-quality-beyond-hdr-123019504.html"
   }
  ]
 },
 "lfm": {
  "stages": [
   [
    2003,
    "idea",
    "Fujifilm SuperCCD SR 在每个感光点放一大一小两个光电二极管（S 像素高灵敏、R 像素低灵敏），动态范围约为前代 4 倍，是后来分裂像素 HDR 的思路源头。",
    "Fujifilm's SuperCCD SR put a large and a small photodiode in each site (high-sensitivity S and low-sensitivity R pixels) for about 4x the dynamic range, the conceptual ancestor of split-pixel HDR.",
    [
     0
    ]
   ],
   [
    2015,
    "paper",
    "OmniVision 的 Willassen 等在 IISW 2015 发表 4.2 µm 分裂二极管 BSI HDR 传感器：长短两路可以重叠曝光，减轻运动和脉冲光源（LED）带来的伪影。",
    "OmniVision's Willassen et al. presented at IISW 2015 a 4.2 µm split-diode BSI HDR sensor whose large and small diodes expose concurrently, reducing artifacts from motion and pulsed light sources such as LEDs.",
    [
     1
    ]
   ],
   [
    2017,
    "mass",
    "Sony 2017 年 4 月发布车载 IMX390：245 万像素，业界首个同时支持 LED 防闪烁和 HDR，单独 HDR 120 dB、两者同时开启 110 dB；5 月送样，2018 年 3 月量产出货。",
    "Sony announced the automotive IMX390 in April 2017: 2.45 MP, the industry's first to run LED flicker mitigation and HDR together, 120 dB HDR or 110 dB with LFM on; samples in May 2017 and volume shipments from March 2018.",
    [
     2
    ]
   ],
   [
    2017,
    "rival",
    "同年 5 月 OmniVision 推出 OX01A10 / OX02A10，用 4.2 µm 分裂像素做 HDR 与 LED 防闪烁；另一些厂商用多次短曝光切片（chopping）来覆盖 LED 脉冲。",
    "In May 2017 OmniVision launched the OX01A10 / OX02A10 with 4.2 µm split pixels for HDR and LFM; others used chopped multiple short exposures to cover LED pulses.",
    [
     3
    ]
   ],
   [
    2018,
    "paper",
    "Sony 的 Iida 等在 IEDM 2018 发表子像素结构 CMOS 传感器：随机噪声 0.68 e-rms、动态范围 121 dB，同时具备 LED 防闪烁（约）。",
    "Sony's Iida et al. presented at IEDM 2018 a sub-pixel CMOS sensor with 0.68 e-rms noise, 121 dB dynamic range and LED flicker mitigation (approx.).",
    []
   ],
   [
    2019,
    "paper",
    "OmniVision 在 IISW 2019 发表 2.8 µm 分裂像素加 DCG，三路采样同时做 HDR 和 LED 防闪烁，是当时最小的分裂二极管像素。",
    "OmniVision presented at IISW 2019 a 2.8 µm split pixel with DCG, three captures for HDR plus LFM, the smallest split-diode pixel reported then.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "OmniVision OX03C10：3.0 µm 分裂像素、四路采样，140 dB HDR，号称当时 LED 防闪烁最好的车载环视传感器。",
    "OmniVision's OX03C10: 3.0 µm split pixel with four captures, 140 dB HDR, billed as the best LFM viewing-camera sensor at the time.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Samsung 首款车载传感器 ISOCELL Auto 4AC 用 CornerPixel：3.0 µm 大像素角上放一个 1.0 µm 小像素，120 dB HDR 并支持 LED 防闪烁。",
    "Samsung's first automotive sensor, the ISOCELL Auto 4AC, used CornerPixel: a 1.0 µm small pixel at the corner of a 3.0 µm large one, 120 dB HDR with LFM.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "OmniVision OX08D10 用 TheiaCel：LOFIC 加分裂二极管，800 万像素 2.1 µm，单次曝光完成 HDR 和 LED 防闪烁，可看清约 200 米外。",
    "OmniVision's OX08D10 used TheiaCel, LOFIC plus split diode, 8 MP at 2.1 µm, doing HDR and LFM in a single exposure out to about 200 m.",
    [
     7
    ]
   ],
   [
    2023,
    "ver",
    "Sony IMX735：1742 万像素车载传感器，HDR 与 LED 防闪烁同开时 106 dB，动态范围优先模式 130 dB。",
    "Sony's IMX735: a 17.42 MP automotive sensor, 106 dB with HDR and LFM together, 130 dB in dynamic-range-priority mode.",
    [
     8
    ]
   ],
   [
    2025,
    "ver",
    "Sony IMX828：1/1.7 英寸 800 万像素，内置 MIPI A-PHY，LED 防闪烁下 120 dB、动态范围优先 150 dB，2025 年 11 月送样。",
    "Sony's IMX828: 1/1.7-inch, 8 MP with built-in MIPI A-PHY, 120 dB with LFM or 150 dB in range-priority mode, sampling from November 2025.",
    [
     9
    ]
   ]
  ],
  "now": [
   "车载标配：前视、环视和电子后视镜传感器基本都带 LED 防闪烁，代表有 IMX390、OX03C10、OX08D10、IMX735。",
   "Standard in automotive: front, surround and mirror-replacement sensors almost all have LFM, e.g. IMX390, OX03C10, OX08D10, IMX735."
  ],
  "replaced": [
   "实现方式正从分裂像素和多次切片曝光转向 LOFIC 单次曝光（TheiaCel 一类），像素可以更小、满阱更大。",
   "The implementation is shifting from split pixels and chopped exposures to LOFIC single exposure (TheiaCel style), allowing smaller pixels with larger full well."
  ],
  "refs": [
   {
    "t": "Fujifilm FinePix F700 与 SuperCCD SR（DPReview）",
    "u": "https://www.dpreview.com/articles/5614787510/finepixf700"
   },
   {
    "t": "Willassen 等 IISW 2015 分裂二极管 HDR",
    "u": "https://imagesensors.org/Past%20Workshops/2015%20Workshop/2015%20Papers/13-01_Willassen.pdf"
   },
   {
    "t": "Sony IMX390 发布（2017-04-12）",
    "u": "https://sony.mediaroom.com/2017-04-12-Sony-Commercializes-the-Industrys-First-1-Automotive-2MP-High-Sensitivity-CMOS-Image-Sensor-with-LED-Flicker-mitigation-and-HDR"
   },
   {
    "t": "OmniVision 车载 LED 防闪烁技术说明",
    "u": "https://www.ovt.com/led-flicker-mitigation-automotive-applications"
   },
   {
    "t": "Solhusvik 等 IISW 2019 DCG 加分裂像素",
    "u": "https://imagesensors.org/Past%20Workshops/2019%20Workshop/2019%20Papers/R32.pdf"
   },
   {
    "t": "OmniVision OX03C10 140 dB 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-launches-worlds-first-image-sensor-for-automotive-viewing-cameras-with-140-db-hdr-and-top-led-flicker-mitigation-performance"
   },
   {
    "t": "Samsung ISOCELL Auto 4AC 发布",
    "u": "https://news.samsung.com/global/samsung-introduces-its-first-isocell-image-sensor-tailored-for-automotive-applications"
   },
   {
    "t": "OmniVision TheiaCel 与 OX08D10 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-technology-and-automotive-image-sensor-for-led-flicker-free-exterior-cameras/"
   },
   {
    "t": "Sony IMX735 发布（2023-09-12）",
    "u": "https://sony.mediaroom.com/2023-09-12-Sony-Semiconductor-Solutions-to-Release-CMOS-Image-Sensor-for-Automotive-Cameras-with-Industry-Leading-17-42-Effective-Megapixels"
   },
   {
    "t": "Sony IMX828 发布（2025-10-27）",
    "u": "https://sony.mediaroom.com/2025-10-27-Sony-Semiconductor-Solutions-to-Release-Industrys-First-CMOS-Image-Sensor-for-Automotive-Applications-with-Built-in-MIPI-A-PHY-Interface"
   }
  ]
 },
 "onsensor": {
  "stages": [
   [
    1991,
    "idea",
    "Mahowald 与 Carver Mead 的“硅视网膜”把感光与模拟计算放在同一芯片，提出传感器端就近处理的视觉芯片思路（约）。",
    "Mahowald and Carver Mead's silicon retina put sensing and analog computation on one chip, the idea of processing vision at the sensor (approx.).",
    [
     0
    ]
   ],
   [
    2010,
    "rival",
    "焦平面处理器（如 Manchester 的 SCAMP 像素并行处理阵列）在每个像素旁做模拟或数字运算，是片上视觉的学术路线（约）。",
    "Focal-plane processors such as Manchester's SCAMP pixel-parallel array computed beside each pixel, an academic route to on-sensor vision (approx.).",
    [
     1
    ]
   ],
   [
    2017,
    "corp",
    "Sony 量产带 DRAM 的三层堆栈 CMOS，证明可以在像素层下面堆叠额外功能层，为放入 AI 逻辑铺路（约）。",
    "Sony mass-produced a three-layer stacked CMOS with DRAM, showing extra functional layers could be stacked under the pixel layer and paving the way for AI logic (approx.).",
    [
     2
    ]
   ],
   [
    2020,
    "mass",
    "Sony 于 2020 年 5 月发布 IMX500（裸片）与 IMX501（封装），1/2.3 英寸 12.3MP 背照式像素层叠在含 DSP 与 SRAM 的逻辑层上，可直接输出识别元数据，IMX500 4 月起送样。",
    "In May 2020 Sony announced IMX500 (bare chip) and IMX501 (packaged): a 1/2.3-inch 12.3 MP back-illuminated pixel chip stacked on a logic chip with DSP and SRAM, outputting inference metadata directly; IMX500 samples began in April.",
    [
     3,
     4
    ]
   ],
   [
    2020,
    "corp",
    "Sony 同期与 Microsoft 合作，把 IMX500 的边缘 AI 与 Azure 云服务结合，面向零售和工业视觉。",
    "Sony partnered with Microsoft at the same time to pair IMX500 edge AI with Azure cloud services for retail and industrial vision.",
    [
     5
    ]
   ],
   [
    2021,
    "paper",
    "Sony 在 ISSCC 2021（论文 9.6）发表 1/2.3 英寸 12.3MP 堆栈式传感器，22nm 逻辑层 CNN 处理器能效 4.97 TOPS/W，读图与推理并行可达 120fps。",
    "Sony presented at ISSCC 2021 (paper 9.6) the 1/2.3-inch 12.3 MP stacked sensor with a 22 nm logic-layer CNN processor at 4.97 TOPS/W, running readout and inference in parallel at up to 120 fps.",
    [
     6
    ]
   ],
   [
    2021,
    "ver",
    "Sony 推出 AITRIOS 边缘 AI 平台，为 IMX500 提供模型部署和设备管理（约）。",
    "Sony launched the AITRIOS edge AI platform to deploy models and manage IMX500 devices (approx.).",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "Raspberry Pi 与 Sony 于 2024 年 9 月 30 日推出 Raspberry Pi AI Camera，基于 IMX500，售价 70 美元，把片上 AI 带进创客市场。",
    "Raspberry Pi and Sony released the Raspberry Pi AI Camera on 30 September 2024, built on IMX500 and priced at 70 USD, bringing on-sensor AI to makers.",
    [
     8
    ]
   ],
   [
    2024,
    "rival",
    "竞争路线是低功耗常开传感器加外部 NPU（如手机 SoC 的常开视觉模块）以及事件相机，把 AI 放在传感器旁而不是传感器里（约）。",
    "Rivals are low-power always-on sensors paired with an external NPU (such as always-on vision blocks in phone SoCs) and event cameras, placing AI beside the sensor rather than inside it (approx.).",
    [
     9
    ]
   ]
  ],
  "now": [
   "小众但在增长：IMX500 用于零售、智慧城市、工业检测和 Raspberry Pi AI Camera，尚未进入消费手机主摄。",
   "Niche but growing: IMX500 is used in retail, smart city, industrial inspection and the Raspberry Pi AI Camera, but not yet in consumer phone main cameras."
  ],
  "replaced": [
   "仍在发展期，接班方向是算力更高的多层堆栈、存内计算和与事件传感器结合的片上 AI。",
   "Still developing; successors point to higher-performance multi-layer stacks, compute-in-memory and on-sensor AI combined with event sensing."
  ],
  "refs": [
   {
    "t": "Mahowald 与 Mead 硅视网膜（维基百科 Neuromorphic engineering）",
    "u": "https://en.wikipedia.org/wiki/Neuromorphic_engineering"
   },
   {
    "t": "SCAMP 视觉芯片（Manchester）",
    "u": "https://personalpages.manchester.ac.uk/staff/p.dudek/scamp/"
   },
   {
    "t": "Sony 三层堆栈 DRAM 传感器新闻稿",
    "u": "https://www.sony.com/en/SonyInfo/News/Press/201702/17-013E/"
   },
   {
    "t": "Sony IMX500/IMX501 新闻稿",
    "u": "https://sony.mediaroom.com/2020-05-14-Sony-to-Release-Worlds-First-Intelligent-Vision-Sensors-with-AI-Processing-Functionality"
   },
   {
    "t": "Sony Europe：IMX500 发布",
    "u": "https://www.sony.eu/presscentre/sony-to-release-worlds-first-intelligent-vision-sensors-with-ai-processing-functionality"
   },
   {
    "t": "Engadget：Sony 片上 AI 传感器",
    "u": "https://engadget.com/sony-image-sensor-ai-smart-cameras-070036055.html"
   },
   {
    "t": "ISSCC 2021 论文 9.6 讲座页",
    "u": "https://underline.io/lecture/13564-9-6-a-1dash2-3inch-12-3mpixel-with-on-chip-4-97topsdashw-cnn-processor-back-illuminated-stacked-cmos-image-sensor"
   },
   {
    "t": "Sony AITRIOS 平台",
    "u": "https://www.aitrios.sony-semicon.com/"
   },
   {
    "t": "Sony Europe：Raspberry Pi AI Camera",
    "u": "https://www.sony.eu/presscentre/sony-semiconductor-solutions-and-raspberry-pi-launch-raspberry-pi-ai-camera"
   },
   {
    "t": "事件相机（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Event_camera"
   }
  ]
 }
};
