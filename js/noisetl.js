/* 噪声与信噪比技术首发时间线的数据：第 22 步抽屉小图和 noise-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入商用产品。
   和 CMOS / ISP / 计算摄影时间线重合的条目（双转换增益、背照、多帧降噪、AI 降噪、四合一、DTI、SPAD、LOFIC）年份保持一致。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.noise = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '工业 / 科研 / 软件', en: 'Industrial / Science / Software'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1987, "cam", "钉扎光电二极管（HAD） · Sony CCD-V90 摄录机", "Pinned photodiode (HAD) · Sony CCD-V90 camcorder", 1, "ppd"],
    [1989, "cam", "片上微透镜 · Sony CCD-TR55 Handycam", "On-chip microlenses · Sony CCD-TR55 Handycam", 1, "mlens"],
    [1989, "ind", "半导体制冷 CCD 自动导星器 · SBIG ST-4", "Thermoelectrically cooled CCD autoguider · SBIG ST-4", 1, "cool"],
    [2000, "cam", "CMOS 片上固定图样噪声消除 · Canon EOS D30", "On-chip CMOS fixed-pattern noise cancelling · Canon EOS D30", 1, "fpn"],
    [2000, "ind", "电子倍增 CCD（EMCCD） · Marconi CCD65 / Andor 首批相机", "Electron-multiplying CCD (EMCCD) · Marconi CCD65 / first Andor cameras", 1, "emccd"],
    [2000, "cam", "长曝光暗场扣除降噪 · Canon EOS D30", "Long-exposure dark-frame subtraction · Canon EOS D30", 1, "lenr"],
    [2001, "cam", "长曝光暗场扣除降噪 · Nikon Coolpix 995", "Long-exposure dark-frame subtraction · Nikon Coolpix 995", 0, "lenr"],
    [2002, "ind", "背照式 EMCCD · Andor iXon", "Back-illuminated EMCCD · Andor iXon", 2, "emccd"],
    [2004, "cam", "可调高 ISO 降噪 · Nikon D2X", "Adjustable High ISO NR · Nikon D2X", 2, "lenr"],
    [2007, "cam", "列并行 ADC · Sony DSLR-A700（Exmor）", "Column-parallel ADC · Sony DSLR-A700 (Exmor)", 1, "coladc"],
    [2008, "auto", "3D 数字降噪 · Samsung Techwin W-IV / SV-IV DSP", "3D digital noise filtering · Samsung Techwin W-IV / SV-IV DSP", 1, "tnr"],
    [2009, "cam", "背照式 BSI · Sony HDR-XR520V", "Back-illuminated BSI · Sony HDR-XR520V", 1, "bsi"],
    [2009, "cam", "多帧合成降噪 · Sony DSC-HX1 手持夜景", "Multi-frame noise reduction · Sony DSC-HX1 Handheld Twilight", 1, "mfnr"],
    [2009, "auto", "3D 时域降噪（3D-DNR） · Panasonic Super Dynamic 5", "3D temporal NR (3D-DNR) · Panasonic Super Dynamic 5", 2, "tnr"],
    [2009, "phone", "列并行 ADC · Sony Ericsson Satio（Exmor IMX060PQ）", "Column-parallel ADC · Sony Ericsson Satio (Exmor IMX060PQ)", 0, "coladc"],
    [2010, "auto", "双转换增益 DCG（约） · Aptina DR-Pix MT9M033", "Dual conversion gain DCG (approx.) · Aptina DR-Pix MT9M033", 1, "dcg"],
    [2010, "ind", "科学级 CMOS（sCMOS） · Andor Neo / PCO pco.edge", "Scientific CMOS (sCMOS) · Andor Neo / PCO pco.edge", 1, "scmos"],
    [2010, "auto", "EMCCD 低照度监控 · FLIR ChromaNox", "EMCCD low-light surveillance · FLIR ChromaNox", 0, "emccd"],
    [2010, "phone", "背照式 BSI · iPhone 4", "Back-illuminated BSI · iPhone 4", 0, "bsi"],
    [2010, "auto", "2D/3D 自适应降噪 · Sony IPELA XDNR", "2D/3D adaptive NR · Sony IPELA XDNR", 2, "tnr"],
    [2011, "cam", "双转换增益 DCG · Nikon 1 V1 / J1", "Dual conversion gain DCG · Nikon 1 V1 / J1", 0, "dcg"],
    [2011, "ind", "sCMOS 普及 · Hamamatsu ORCA-Flash4.0", "sCMOS goes mainstream · Hamamatsu ORCA-Flash4.0", 2, "scmos"],
    [2013, "phone", "深沟槽隔离 DTI · Samsung ISOCELL", "Deep trench isolation DTI · Samsung ISOCELL", 1, "dti"],
    [2013, "phone", "多帧合成降噪 · Google HDR+", "Multi-frame noise reduction · Google HDR+", 0, "mfnr"],
    [2014, "phone", "SPAD 光子计数 · LG G3 激光对焦", "SPAD photon counting · LG G3 laser AF", 1, "spad"],
    [2014, "cam", "双原生 ISO · Panasonic VariCam 35", "Dual native ISO · Panasonic VariCam 35", 2, "dcg"],
    [2015, "auto", "背照式 BSI 安防 · Sony STARVIS IMX291", "BSI for security · Sony STARVIS IMX291", 0, "bsi"],
    [2016, "phone", "黑白 + 彩色融合 · Huawei P9", "Mono + color fusion · Huawei P9", 1, "mono"],
    [2016, "ind", "背照式 sCMOS · Photometrics Prime 95B", "Back-illuminated sCMOS · Photometrics Prime 95B", 0, "bsi"],
    [2016, "ind", "制冷 CMOS 天文相机 · ZWO ASI1600MM-Cool", "Cooled CMOS astro camera · ZWO ASI1600MM-Cool", 2, "cool"],
    [2017, "auto", "双传感器彩色夜视融合 · Hikvision DarkFighterX", "Dual-sensor color night fusion · Hikvision DarkFighterX", 0, "mono"],
    [2017, "auto", "四合一 Quad Bayer · Sony IMX294 安防传感器", "Quad Bayer · Sony IMX294 security sensor", 1, "bin"],
    [2018, "phone", "四合一像素合并 · Huawei P20 Pro", "Quad-pixel binning · Huawei P20 Pro", 0, "bin"],
    [2018, "phone", "多帧夜景 · Google Night Sight", "Multi-frame night mode · Google Night Sight", 2, "mfnr"],
    [2018, "cam", "双原生 ISO · Panasonic GH5S", "Dual native ISO · Panasonic GH5S", 2, "dcg"],
    [2018, "phone", "改进隔离墙 · Samsung ISOCELL Plus", "Improved isolation wall · Samsung ISOCELL Plus", 2, "dti"],
    [2019, "phone", "双转换增益 Smart-ISO · Samsung ISOCELL GW1（Redmi Note 8 Pro）", "Dual conversion gain Smart-ISO · Samsung ISOCELL GW1 (Redmi Note 8 Pro)", 0, "dcg"],
    [2020, "ind", "AI RAW 降噪 · DxO DeepPRIME", "AI RAW denoise · DxO DeepPRIME", 1, "airaw"],
    [2020, "ind", "四合一像素合并无人机（约） · DJI Mavic Air 2", "Quad-pixel binning drone (approx.) · DJI Mavic Air 2", 0, "bin"],
    [2020, "phone", "SPAD 阵列 LiDAR · iPhone 12 Pro", "SPAD array LiDAR · iPhone 12 Pro", 2, "spad"],
    [2021, "ind", "光子数分辨 qCMOS · Hamamatsu ORCA-Quest", "Photon-number-resolving qCMOS · Hamamatsu ORCA-Quest", 1, "pnr"],
    [2021, "phone", "同帧双转换增益 Smart ISO Pro · Samsung GN2", "Same-frame DCG Smart ISO Pro · Samsung GN2", 2, "dcg"],
    [2021, "ind", "量子图像传感器 QIS · Gigajot GJ01611", "Quanta image sensor QIS · Gigajot GJ01611", 2, "pnr"],
    [2023, "auto", "横向溢出电容 LOFIC · OmniVision OX08D10", "Lateral overflow capacitor LOFIC · OmniVision OX08D10", 1, "lofic"],
    [2023, "auto", "SPAD 成像监控 · Canon MS-500", "SPAD imaging surveillance · Canon MS-500", 0, "spad"],
    [2023, "ind", "AI RAW 降噪 · Adobe Lightroom Denoise", "AI RAW denoise · Adobe Lightroom Denoise", 2, "airaw"],
    [2024, "cam", "机内 AI 降噪 · Canon EOS R1 / R5 Mark II", "In-camera AI denoise · Canon EOS R1 / R5 Mark II", 0, "airaw"],
    [2024, "phone", "横向溢出电容 LOFIC · OmniVision OV50K40（Honor Magic6 Ultimate）", "Lateral overflow capacitor LOFIC · OmniVision OV50K40 (Honor Magic6 Ultimate)", 0, "lofic"],
  ],
  desc: {
      "ppd": [
          "光电二极管表面加 p+ 钉扎层，把界面态隔开，暗电流和残像大幅下降，还能完整转移电荷实现 CDS。",
          "A p+ pinning layer isolates the photodiode from surface states, slashing dark current and lag and enabling full charge transfer for CDS."
      ],
      "mlens": [
          "每个像素顶上一颗微透镜，把落到布线和隔离区的光汇聚进光电二极管，信号变大、信噪比随之提高。",
          "A tiny lens over each pixel funnels light that would hit wiring into the photodiode, raising signal and thus SNR."
      ],
      "cool": [
          "用 Peltier 半导体制冷把传感器降到零下数十度，热激发暗电流按温度指数下降，长曝光热噪声大减。",
          "Peltier cooling drops the sensor tens of degrees below zero, cutting thermally generated dark current exponentially for long exposures."
      ],
      "fpn": [
          "CMOS 每列放大器不一致会产生固定图样噪声，片上电路先读噪声再读信号相减，像 CDS 一样消掉它。",
          "Mismatched CMOS column amplifiers create fixed-pattern noise; on-chip circuits read noise then signal and subtract, CDS-style."
      ],
      "emccd": [
          "在读出前加一串倍增寄存器把电子放大上千倍，让读出噪声相对可忽略，实现单光子级成像。",
          "A gain register multiplies electrons hundreds to thousands of times before readout, making read noise negligible for single-photon imaging."
      ],
      "lenr": [
          "长曝光后关快门再拍一张暗帧，把热像素和暗电流图样减掉；高 ISO 降噪则在机内做空间滤波。",
          "After a long exposure the camera shoots a closed-shutter dark frame and subtracts hot pixels and dark-current pattern; high-ISO NR adds spatial filtering."
      ],
      "coladc": [
          "每列一个 ADC，在片上就把模拟信号数字化，模拟走线变短、带宽变低，读出噪声和干扰随之降低。",
          "One ADC per column digitizes on-chip, shortening analog paths and lowering bandwidth, which cuts read noise and interference."
      ],
      "bsi": [
          "把晶圆翻过来让光从背面直接进光电二极管，布线不再挡光，量子效率提高，同样曝光下信噪比更高。",
          "Flipping the wafer so light enters from the back removes wiring from the light path, raising quantum efficiency and SNR."
      ],
      "mfnr": [
          "连拍多帧对齐后平均，随机噪声按根号 N 下降，相当于用时间换来更多光子。",
          "Aligning and averaging a burst of frames cuts random noise by the square root of N, trading time for photons."
      ],
      "tnr": [
          "视频里把相邻帧的静止区域做时域平均，压低随机噪点和码流，运动区域退回空间降噪避免拖影。",
          "Video temporal NR averages static regions across frames to suppress random noise and bitrate, falling back to spatial NR on motion."
      ],
      "dcg": [
          "像素里加一个增益开关：暗处用高转换增益压低读出噪声，亮处用低增益保满阱，双原生 ISO 即此原理。",
          "A pixel gain switch uses high conversion gain for low read noise in the dark and low gain for full-well capacity in bright scenes; dual native ISO is the same idea."
      ],
      "scmos": [
          "专为科研设计的 CMOS，双列 ADC 加低噪放大，读出噪声约 1 e-，同时保持高帧率和大幅面。",
          "Purpose-built scientific CMOS with dual column ADCs and low-noise amplifiers reaches about 1 e- read noise at high frame rates."
      ],
      "dti": [
          "在像素之间刻深沟槽并填充隔离材料，挡住光和电荷串到邻像素，减少串扰带来的色噪和信号损失。",
          "Deep trenches between pixels block light and charge leaking to neighbours, cutting crosstalk-induced color noise and signal loss."
      ],
      "spad": [
          "单光子雪崩二极管把一个光子放大成可数的脉冲，数字计数没有读出噪声，弱光下也能成像或测距。",
          "Single-photon avalanche diodes turn each photon into a countable pulse, eliminating read noise for imaging or ranging in near darkness."
      ],
      "mono": [
          "黑白传感器去掉滤色片多收约两到三倍光，再与彩色图融合，用亮度通道的高信噪比压低暗光噪声。",
          "A filterless mono sensor gathers roughly two to three times more light; fusing it with color uses its clean luma to cut low-light noise."
      ],
      "bin": [
          "四个同色小像素在暗光下合成一个大像素读出，信号叠加而读出次数减少，信噪比明显提高。",
          "Four same-color small pixels combine into one large pixel in low light, summing signal while reducing reads to raise SNR."
      ],
      "airaw": [
          "用训练过的神经网络在 RAW 去马赛克阶段同时去噪，比传统滤波更能区分噪声与细节。",
          "A trained neural network denoises during RAW demosaicing, separating noise from detail better than classic filters."
      ],
      "pnr": [
          "把读出噪声压到 0.3 e- 以下的深亚电子级，能分辨每个像素到底收到几个光子，彻底摆脱读出噪声限制。",
          "Deep sub-electron read noise below 0.3 e- lets each pixel resolve how many photons arrived, escaping the read-noise floor."
      ],
      "lofic": [
          "像素旁加横向溢出电容，强光溢出的电荷存进电容，单次曝光同时得到低噪暗部与不饱和亮部。",
          "A lateral overflow capacitor stores charge that spills in bright light, giving low-noise shadows and unclipped highlights in one exposure."
      ]
  },
  refs: [
      {
          "t": "Sony HAD 钉扎光电二极管（日本半导体历史馆）",
          "u": "https://www.shmj.or.jp/english/pdf/dis/exhibi1005E.pdf"
      },
      {
          "t": "HAD CCD 词条",
          "u": "https://en.wikipedia.org/wiki/HAD_CCD"
      },
      {
          "t": "Sony 片上微透镜 CCD",
          "u": "https://www.shmj.or.jp/english/pdf/dis/exhibi335E.pdf"
      },
      {
          "t": "SBIG ST-4 制冷自动导星相机",
          "u": "https://company7.com/sbig/products/st4.html"
      },
      {
          "t": "ZWO ASI1600 相机演进史",
          "u": "https://zwoastro.com/2017/10/24/evolution-history-of-asi1600-cameras"
      },
      {
          "t": "Canon EOS D30 CMOS 片上降噪（EE Times）",
          "u": "https://www.dpreview.com/articles/0178792700/canoncmos-eetimes"
      },
      {
          "t": "Andor EMCCD 简介",
          "u": "https://andor.oxinst.com/learning/view/article/electron-multiplying-ccd-cameras"
      },
      {
          "t": "EMCCD 低照度安防相机",
          "u": "https://laserfocusworld.com/detectors-imaging/article/16567805/flir-systems-lowlight-security-cameras-feature-imageprocessing-algorithms"
      },
      {
          "t": "Nikon Coolpix 995 暗场降噪评测",
          "u": "https://www.dpreview.com/reviews/nikoncp995"
      },
      {
          "t": "Nikon D2X 评测",
          "u": "https://www.dpreview.com/reviews/nikond2x"
      },
      {
          "t": "Sony DSLR-A700 Exmor 预览",
          "u": "https://www.dpreview.com/previews/SonyDSLRA700/"
      },
      {
          "t": "Sony STARVIS 安防 BSI",
          "u": "https://petapixel.com/2015/10/26/sony-shows-off-a-new-ultra-sensitive-cmos-sensor-called-starvis"
      },
      {
          "t": "Panasonic Super Dynamic 5",
          "u": "https://git-sicherheit.de/en/topstories/panasonic-new-super-dynamic-5-technology"
      },
      {
          "t": "Aptina 发布 DR-Pix 技术（2010）",
          "u": "https://image-sensors-world.blogspot.com/2010/09/aptina-enters-dslr-world-with-16mp-aps.html"
      },
      {
          "t": "Aptina MT9M033 监控传感器",
          "u": "https://www.designnews.com/industry/aptina-imaging-corp-s-mt9m033"
      },
      {
          "t": "Nikon 1 V1 / J1 发布",
          "u": "https://www.dpreview.com/articles/7500206226/nikonlaunch"
      },
      {
          "t": "Panasonic VariCam 35 出货",
          "u": "https://www.sportsvideo.org/2014/11/21/panasonic-now-shipping-varicam35-varicam-hs-camerarecorders/"
      },
      {
          "t": "Samsung ISOCELL GN2 发布",
          "u": "https://news.samsung.com/us/samsung-introduces-isocell-gn2-faster-true-to-life-auto-focusing/"
      },
      {
          "t": "sCMOS 相机发展史（Andor）",
          "u": "https://andor.oxinst.com/learning/view/article/history-of-scmos-cameras"
      },
      {
          "t": "Hikvision DarkFighterX 发布",
          "u": "https://www.hikvision.com/en/newsroom/latest-news/2017/hikvision-unveils-the-next-level-of-surveillance---darkfighterx"
      },
      {
          "t": "Hamamatsu ORCA-Quest 发布",
          "u": "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/01_HQ/01_news/01_news_2021/2021_05_10_en.pdf"
      },
      {
          "t": "Gigajot QIS41 相机",
          "u": "https://www.electrooptics.com/article/qis41-provides-high-resolution-and-low-light-performance-scientific-and-industrial-imaging"
      },
      {
          "t": "ISOCELL 词条",
          "u": "https://en.wikipedia.org/wiki/ISOCELL"
      }
  ],
  el: 'noisetl', page: 'noise-timeline.html', histSrc: 'js/hist-noise.js',
  step: {n: 22, zh: '第 22 步：噪声与信噪比', en: 'Step 22: Noise & SNR'},
  text: {
    zh: {title: '噪声与信噪比技术时间线', eyebrow: 'Noise & SNR · 1987–2024', h1: '把噪声压下去，谁先做到？',
         sub: '钉扎光电二极管、片上微透镜、制冷 CCD、片上降噪电路、EMCCD、长曝光降噪、列并行 ADC、背照、多帧降噪、3D 降噪、双转换增益、sCMOS、深沟槽隔离、单光子计数、黑白彩色融合、四合一、AI 降噪、亚电子读出噪声、LOFIC……每项压噪声、提信噪比的技术最先出现在相机、手机、安防车载还是工业科研里，又是怎么流到其他行业的。',
         panelCap: '每项压噪声 / 提信噪比的技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入商用产品，不是第一次发表论文。与 CMOS / ISP / 计算摄影时间线重合的条目年份一致；只找到间接来源的年份标了「约」。'},
    en: {title: 'Noise & SNR Timeline', eyebrow: 'Noise & SNR · 1987–2024', h1: 'Pushing noise down: who did it first?',
         sub: 'Pinned photodiodes, on-chip microlenses, cooled CCDs, on-chip noise cancelling, EMCCD, long-exposure NR, column-parallel ADC, BSI, multi-frame NR, 3D NR, dual conversion gain, sCMOS, deep trench isolation, single-photon counting, mono+color fusion, pixel binning, AI denoise, sub-electron read noise, LOFIC: did each noise/SNR technology ship first in cameras, phones, security/automotive or industry/science, and how did it spread?',
         panelCap: 'Which industry shipped each noise / SNR technology first.',
         foot: '"First" means first in a commercial product, not first paper. Items overlapping the CMOS / ISP / computational timelines match their years; years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('noise');
