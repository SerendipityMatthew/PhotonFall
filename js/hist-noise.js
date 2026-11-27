/* 噪声时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 noise 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：cmos:bsi、cmos:dcg、cmos:dti、cmos:spad、cmos:lofic、cmos:quad>bin、isp:mfnr、comp:aidn>airaw */
TIMELINES.noise.hist = {
 "ppd": {
  "stages": [
   [
    1975,
    "idea",
    "Sony 的萩原良昭（Yoshiaki Hagiwara）申请日本专利 JP1975-134985，提出用 PNP 结构做光电探测器、在受光面做 P+ 层，去掉覆盖光电二极管的电极，是表面 P+ 钉扎结构的雏形；Sony 后来把它称为 HAD（Hole Accumulation Diode）。",
    "Sony's Yoshiaki Hagiwara filed Japanese patent JP1975-134985, proposing a PNP structure as the photodetector with a P+ layer on the light-receiving surface, removing the electrode over the photodiode. It was the seed of the surface-P+ pinned structure, later branded HAD (Hole Accumulation Diode) by Sony.",
    [
     0
    ]
   ],
   [
    1977,
    "corp",
    "Hitachi 的小池、竹本提出把高浓度表面 P+ 层接到 P 型衬底（阱）、钉在衬底电位，以增大电荷容量和动态范围；同年 Toshiba 的铃木提出让 N 型存储层完全耗尽，以减少残像、提高灵敏度。",
    "Hitachi's Koike and Takemoto proposed tying the heavily doped surface P+ layer to the P-type substrate (well) to pin it at substrate potential, raising charge capacity and dynamic range. The same year Toshiba's Suzuki proposed fully depleting the N storage layer to cut image lag and raise sensitivity.",
    [
     0
    ]
   ],
   [
    1978,
    "proto",
    "Sony 在 SSDM 1978 发表采用同类 P+ 表面光电二极管的 FT-CCD；1981 年用这项技术做出 2/3 英寸 28 万像素 FT-CCD 的一体化彩色摄录机原型。",
    "Sony presented a frame-transfer CCD using the same P+-surface photodiode at SSDM 1978, and in 1981 built a VTR-integrated colour camera prototype around a 2/3-inch 280,000-pixel FT-CCD using it.",
    [
     0
    ]
   ],
   [
    1980,
    "corp",
    "NEC 的寺西信一（Nobukazu Teranishi）、石原保雄、白木广光详细分析了 P 层钉在衬底电位时 N 层与转移栅的电位关系：只要耗尽 N 层电位比转移栅沟道电位高出足够余量，信号电荷就能完全转移、无残像。专利 JP1980-138062，对应美国专利 US4484210。",
    "At NEC, Nobukazu Teranishi, Yasuo Ishihara and Hiromitsu Shiraki analysed the potential relationship between the N layer and the transfer gate with the P layer pinned to substrate potential: keeping the depleted N layer sufficiently above the gate channel potential gives complete charge transfer with no image lag. Patent JP1980-138062 (US4484210).",
    [
     0,
     1
    ]
   ],
   [
    1982,
    "paper",
    "寺西等在 IEDM 1982 发表《No image lag photodiode structure in the interline CCD image sensor》，这是钉扎光电二极管在 IT-CCD 上的标志性论文。",
    "Teranishi et al. presented \"No image lag photodiode structure in the interline CCD image sensor\" at IEDM 1982, the landmark paper for the pinned photodiode in interline CCDs.",
    [
     0,
     1
    ]
   ],
   [
    1984,
    "paper",
    "Kodak 的 Burkey 等在 IEDM 1984 发表《The pinned photodiode for an interline-transfer CCD image sensor》，因受光面 P+ 层被钉在衬底电位，首次把这种结构命名为 pinned photodiode。",
    "Kodak's Burkey et al. presented \"The pinned photodiode for an interline-transfer CCD image sensor\" at IEDM 1984, coining the name pinned photodiode because the surface P+ layer is pinned to substrate potential.",
    [
     0,
     2
    ]
   ],
   [
    1987,
    "mass",
    "Sony 推出 2/3 英寸 38 万像素 IT-CCD，采用钉扎光电二极管（Sony 称 HAD），装进 8mm 一体化摄录机 CCD-V90；暗电流小、无残像、没有白点。",
    "Sony released a 2/3-inch 380,000-pixel interline CCD with a pinned photodiode (branded HAD) and put it in the CCD-V90 8 mm camcorder, with low dark current, no lag and no white blemishes.",
    [
     0
    ]
   ],
   [
    1991,
    "ver",
    "约 1990 年代初，护照尺寸摄录机要求 1/2 英寸以下、40 万像素以上的小型 CCD，各家厂商普遍改用钉扎光电二极管（例如 1991 年的 1/3 英寸 36 万像素 IT-CCD）。",
    "Around the early 1990s, passport-size camcorders demanded CCDs of 1/2 inch or smaller with 400k+ pixels, and makers broadly adopted the pinned photodiode (e.g. a 1/3-inch 360k-pixel IT-CCD reported in 1991).",
    [
     0
    ]
   ],
   [
    1995,
    "corp",
    "Kodak 的 Paul P. Lee、Robert M. Guidash、Teh-Hsuang Lee、Eric G. Stevens 于 1995-04-13 申请专利 US5625210《Active pixel sensor integrated with a pinned photodiode》，把钉扎光电二极管与 n-well CMOS 有源像素结合（与 JPL 合作），改善蓝光响应、暗电流和残像，成为 4T 像素的起点。",
    "Kodak's Paul P. Lee, Robert M. Guidash, Teh-Hsuang Lee and Eric G. Stevens filed US5625210, \"Active pixel sensor integrated with a pinned photodiode\", on 13 April 1995, combining the pinned photodiode with an n-well CMOS active pixel (with JPL), improving blue response, dark current and lag; the start of the 4T pixel.",
    [
     0,
     3
    ]
   ],
   [
    2013,
    "rival",
    "Panasonic 与 Fujifilm 发布有机 CMOS 图像传感器：用有机光电导膜（OPF）替代硅光电二极管做受光部，动态范围 88 dB、灵敏度约 1.2 倍。",
    "Panasonic and Fujifilm announced an organic CMOS image sensor that replaces the silicon photodiode with an organic photoconductive film (OPF), claiming 88 dB dynamic range and about 1.2x sensitivity.",
    [
     4
    ]
   ],
   [
    2014,
    "paper",
    "Dartmouth 的 Eric R. Fossum 与 Donald B. Hondongwa 在 IEEE JEDS 发表综述《A Review of the Pinned Photodiode for CCD and CMOS Image Sensors》，指出它已是绝大多数 CCD 与 CMOS 图像传感器的主要光电结构。",
    "Eric R. Fossum and Donald B. Hondongwa (Dartmouth) published \"A Review of the Pinned Photodiode for CCD and CMOS Image Sensors\" in IEEE JEDS, stating it is the primary photodetector in most CCD and CMOS image sensors.",
    [
     2
    ]
   ],
   [
    2017,
    "ver",
    "寺西信一与 Fossum、George Smith、Michael Tompsett 共同获得伊丽莎白女王工程奖（QEPrize），表彰其对数字成像传感器的贡献。",
    "Teranishi shared the 2017 Queen Elizabeth Prize for Engineering with Fossum, George Smith and Michael Tompsett for contributions to digital image sensors.",
    [
     1
    ]
   ]
  ],
  "now": [
   "钉扎光电二极管加转移栅（4T 像素）仍是手机、相机、车载、安防几乎所有 CCD/CMOS 传感器的标准像素，背照式、堆栈式、深槽隔离等都是在它上面演进。",
   "The pinned photodiode with a transfer gate (the 4T pixel) remains the standard pixel in virtually all phone, camera, automotive and security CCD/CMOS sensors; BSI, stacking and deep-trench isolation all build on it."
  ],
  "replaced": [
   "尚未被替代。有机光电导膜（Panasonic/Fujifilm OPF）、量子点薄膜等替代硅光电二极管的方案在少数场景出现，但主流仍是钉扎光电二极管。",
   "Not replaced. Alternatives to the silicon photodiode such as organic photoconductive film (Panasonic/Fujifilm OPF) or quantum-dot films appear in niches, but the pinned photodiode remains mainstream."
  ],
  "refs": [
   {
    "t": "Semiconductor History Museum of Japan: Improvement of photodiode for image sensor",
    "u": "https://www.shmj.or.jp/english/pdf/dis/exhibi1005E.pdf"
   },
   {
    "t": "Nobukazu Teranishi - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nobukazu_Teranishi"
   },
   {
    "t": "Fossum & Hondongwa: A Review of the Pinned Photodiode for CCD and CMOS Image Sensors (2014)",
    "u": "https://digitalcommons.dartmouth.edu/facoa/2423"
   },
   {
    "t": "US5625210A - Active pixel sensor integrated with a pinned photodiode",
    "u": "https://patents.google.com/patent/US5625210"
   },
   {
    "t": "Panasonic: Organic CMOS image sensor technology (2013)",
    "u": "https://web.archive.org/web/20230323111238/https://news.panasonic.com/global/press/en130611-7"
   }
  ]
 },
 "mlens": {
  "stages": [
   [
    1983,
    "paper",
    "NEC 的石原保雄（Y. Ishihara）与谷垣（K. Tanigaki）在 IEDM 1983 发表《A high photosensitivity IL-CCD image sensor with monolithic resin lens array》：在 2/3 英寸 768×490 像素 IL-CCD 上用树脂热流法做出与光电二极管列对齐的竖条半圆柱透镜阵列，有效开口率从 40% 提到 80%。",
    "At IEDM 1983, NEC's Y. Ishihara and K. Tanigaki presented \"A high photosensitivity IL-CCD image sensor with monolithic resin lens array\": a resin thermal-flow stripe array of semi-cylindrical lenses on a 2/3-inch 768x490 IL-CCD raised the effective aperture from 40% to 80%.",
    [
     0
    ]
   ],
   [
    1989,
    "mass",
    "Sony 第一代片上微透镜（On-Chip Lens）量产：1989 年 6 月的护照尺寸 Handycam CCD-TR55 用 1/2 英寸 25 万像素 CCD，集成片上微透镜，大卖后带动 Sony CCD 业务全面展开。Sony 称自己是第一个把它用于 CCD 的厂商。",
    "Sony's first-generation On-Chip Lens went into production: the June 1989 passport-size Handycam CCD-TR55 used a 1/2-inch 250k-pixel CCD with on-chip microlenses, a hit that launched Sony's CCD business. Sony says it was the first to adopt microlenses on CCDs.",
    [
     1,
     2
    ]
   ],
   [
    1992,
    "ver",
    "Sony 推出 Super HAD CCD，改进片上微透镜，进一步提高灵敏度。",
    "Sony introduced the Super HAD CCD, with improved on-chip microlenses for higher sensitivity.",
    [
     2
    ]
   ],
   [
    1998,
    "ver",
    "Sony 推出 EXview HAD CCD，用于 Handycam，进一步提高聚光效率和近红外灵敏度。",
    "Sony introduced the EXview HAD CCD in Handycams, further raising light collection and near-infrared sensitivity.",
    [
     2
    ]
   ],
   [
    2006,
    "ver",
    "Leica M8 用 Kodak KAF-10500（27×18 mm，1030 万像素）CCD，画面边缘的微透镜逐渐偏移，以接住旁轴广角镜头的大入射角光线、减轻暗角。",
    "The Leica M8 used Kodak's KAF-10500 CCD (27x18 mm, 10.3 MP) with microlenses progressively offset toward the frame edges to catch steep rays from rangefinder wide-angles and reduce vignetting.",
    [
     3
    ]
   ],
   [
    2008,
    "ver",
    "Canon EOS 50D 的 1510 万像素 APS-C CMOS 采用新设计的无缝隙（gapless）微透镜，降低噪声，感光度扩展到 ISO 12800。",
    "Canon's EOS 50D 15.1 MP APS-C CMOS used newly designed gapless microlenses to cut noise and extend sensitivity to ISO 12800.",
    [
     4
    ]
   ],
   [
    2008,
    "rival",
    "Sony 于 2008-06-11 发布背照式 Exmor R CMOS：把金属布线移到光电二极管下方，光不再穿过布线层，灵敏度约为传统 CMOS 的两倍以上，削弱了微透镜「绕开布线」的作用。",
    "On 11 June 2008 Sony announced the back-illuminated Exmor R CMOS, moving wiring beneath the photodiode so light no longer passes through it, for more than twice the sensitivity of conventional CMOS, reducing the microlens's job of steering light past wiring.",
    [
     5
    ]
   ],
   [
    2010,
    "ver",
    "Sony 公布双层微透镜：在 1/2.3 英寸 1420 万像素 CCD ICX681SQW 的原有微透镜下方再加一层凸透镜，用于 Cyber-shot H55 与 W 系列，以在当时最小的像素上维持成像性能。",
    "Sony disclosed double-layer microlenses: an extra convex lens beneath the existing microlens on the 1/2.3-inch 14.2 MP ICX681SQW CCD, used in the Cyber-shot H55 and W series, to keep performance at the smallest pixel size of the day.",
    [
     6
    ]
   ],
   [
    2017,
    "idea",
    "Samsung 提出 Meta-Photonics 源技术，设想用纳米结构引导光线，后来发展为 Nanoprism。",
    "Samsung first proposed its Meta-Photonics source technology, using nanostructures to steer light, which later became Nanoprism.",
    [
     7
    ]
   ],
   [
    2025,
    "end",
    "Samsung ISOCELL JNP 成为首款量产 Nanoprism 传感器：用折射率纳米结构替代传统微透镜，把光分到对应颜色的像素，灵敏度比同规格 ISOCELL JN5 提高约 25%，已用于智能手机。",
    "Samsung's ISOCELL JNP became the first mass-produced Nanoprism sensor: a refractive-index nanostructure replaces the conventional microlens and routes light to the matching colour pixel, giving about 25% higher sensitivity than the same-spec ISOCELL JN5; it ships in smartphones.",
    [
     7
    ]
   ]
  ],
  "now": [
   "片上微透镜仍是几乎所有图像传感器的标配；背照式之后它依旧负责把光汇入小像素、减少串扰，并按主光线角做边缘偏移。",
   "On-chip microlenses remain standard on virtually every image sensor; even after BSI they focus light into small pixels, limit crosstalk and are offset at the edges to match chief-ray angle."
  ],
  "replaced": [
   "开始被纳米结构/超表面部分取代（2025 年 Samsung Nanoprism 量产），但传统聚合物微透镜仍是主流。",
   "Starting to be partly replaced by nanostructures/metasurfaces (Samsung Nanoprism in production from 2025), but conventional polymer microlenses remain mainstream."
  ],
  "refs": [
   {
    "t": "A high photosensitive IL-CCD image sensor with monolithic resin lens array (IEDM 1983)",
    "u": "https://scilit.com/publications/6248d43e18aabef1e7e698ab31f95a97"
   },
   {
    "t": "Semiconductor History Museum of Japan: Development of a commercial 110,000-pixel CCD image sensor (Sony)",
    "u": "https://shmj.or.jp/english/pdf/dis/exhibi334E.pdf"
   },
   {
    "t": "Sony Handycam History",
    "u": "https://www.sony.jp/handycam/history/"
   },
   {
    "t": "Kodak KAF-10500 CCD debuts in Leica M8",
    "u": "https://reviewed.com/cameras/news/kodak-kaf-10500-ccd-debuts-in-leica-m8"
   },
   {
    "t": "Canon EOS 50D Digital SLR Camera Press Release",
    "u": "https://www.the-digital-picture.com/Press-Release/Canon-EOS-50D-Digital-SLR-Camera-Press-Release.aspx"
   },
   {
    "t": "Sony unveils 'Exmor R' back-illuminated CMOS technology (dpreview)",
    "u": "https://www.dpreview.com/articles/4281372431/sonycmos"
   },
   {
    "t": "Sony gives details of double-layered microlenses (dpreview)",
    "u": "https://www.dpreview.com/?p=323762"
   },
   {
    "t": "Samsung: Nanoprism - optical innovation in the era of pixel miniaturization",
    "u": "https://semiconductor.samsung.com/news-events/tech-blog/nanoprism-optical-innovation-in-the-era-of-pixel-miniaturization/"
   }
  ]
 },
 "cool": {
  "stages": [
   [
    1834,
    "idea",
    "法国物理学家 Jean Charles Athanase Peltier 发现电流流过两种不同导体的结点时会吸热或放热（Peltier 效应），这是半导体制冷的物理基础。",
    "French physicist Jean Charles Athanase Peltier found that current through a junction of two dissimilar conductors heats or cools it (the Peltier effect), the physical basis of thermoelectric cooling.",
    [
     0
    ]
   ],
   [
    1954,
    "paper",
    "英国的 H. Julian Goldsmid 用 Bi₂Te₃ 热电元件演示了降到 0°C 的制冷，并率先用热电品质因子指导选材，打开了实用半导体制冷器的大门。",
    "H. Julian Goldsmid in the UK demonstrated cooling to 0°C with Bi2Te3 thermoelements and pioneered using a thermoelectric quality factor to choose materials, opening the way to practical thermoelectric coolers.",
    [
     0
    ]
   ],
   [
    1960,
    "mass",
    "约 1960 年代起，Bi₂Te₃ 合金因室温 ZT 接近 1，一直是商用 Peltier（TEC）模块的主流材料。",
    "From around the 1960s, Bi2Te3 alloys, with room-temperature ZT near 1, have dominated commercial Peltier (TEC) modules.",
    [
     0
    ]
   ],
   [
    1978,
    "corp",
    "Photometrics 在美国 Tucson 成立，早期业务就是 CCD 制冷技术，后来做科研级制冷相机。",
    "Photometrics was founded in Tucson, Arizona, working initially on CCD cooling technology and later on scientific cooled cameras.",
    [
     1
    ]
   ],
   [
    1989,
    "mass",
    "Santa Barbara Instrument Group（SBIG）推出 ST-4，第一台商用自动导星器：192×164 像素 CCD 由单级 TEC 冷到比环境低约 30°C（约 -30°C），像素约 5 分钟才饱和，无需电脑独立工作。",
    "SBIG released the ST-4, the first commercial autoguider: a 192x164-pixel CCD cooled by a single-stage TEC to about 30°C below ambient (around -30°C), saturating only after about five minutes and running without a computer.",
    [
     2,
     3
    ]
   ],
   [
    2001,
    "ver",
    "Andor 推出 iXon EMCCD 平台，主打「最深制冷、最低噪声」；EMCCD 会把单个热电子也放大，因此对深度 TE 制冷格外依赖。",
    "Andor launched the iXon EMCCD platform, billed as having the deepest cooling and lowest noise; because EMCCD gain amplifies even single thermal electrons, it depends heavily on deep TE cooling.",
    [
     4
    ]
   ],
   [
    2012,
    "ver",
    "Andor iXon Ultra 897 用 UltraVac 永久真空封装加增强型 Peltier 设计，TE 制冷到 -100°C，同时 512×512 达到 56 fps。",
    "Andor's iXon Ultra 897 combined UltraVac permanent vacuum sealing with an enhanced Peltier design for TE cooling to -100°C, at 56 fps for 512x512.",
    [
     4
    ]
   ],
   [
    2013,
    "rival",
    "ZWO ASI120MM/MC（2012 年在中国推出、AR0130CS 传感器）进入国际市场；行星摄影用短曝光、无需制冷的 CMOS 相机全面取代了 CCD 行星相机。",
    "ZWO's ASI120MM/MC (launched in China in 2012 with the AR0130CS sensor) went international; uncooled short-exposure CMOS cameras completely replaced CCD planetary cameras.",
    [
     5
    ]
   ],
   [
    2016,
    "mass",
    "ZWO 推出 ASI1600MM-Cool：Panasonic MN34230 4/3 英寸 1600 万像素 CMOS（4656×3520，3.8 µm），稳压二级 TEC 比环境低 35–40°C，2016–2017 年连续升级三版，把制冷 CMOS 带进业余深空摄影。",
    "ZWO released the ASI1600MM-Cool: a Panasonic MN34230 4/3-inch 16 MP CMOS (4656x3520, 3.8 µm) with regulated two-stage TEC 35-40°C below ambient, upgraded three times in 2016-2017, bringing cooled CMOS to amateur deep-sky imaging.",
    [
     5,
     6
    ]
   ],
   [
    2017,
    "ver",
    "ASI1600MM Pro 加入 256 MB DDR3 缓存，解决 USB 2.0 慢速读出时的 amp glow 问题。",
    "The ASI1600MM Pro added a 256 MB DDR3 buffer, eliminating the amp glow caused by slow readout over USB 2.0.",
    [
     6
    ]
   ]
  ],
  "now": [
   "科研 CCD/EMCCD/sCMOS 与天文 CMOS 相机普遍用多级 TEC（科研机型可达 -100°C）；暗电流大约每降 6–7°C 减半，长曝光仍离不开制冷。",
   "Scientific CCD/EMCCD/sCMOS and astronomy CMOS cameras routinely use multi-stage TECs (down to -100°C on scientific models); dark current roughly halves every 6-7°C, so long exposures still need cooling."
  ],
  "replaced": [
   "没有被替代。现代 CMOS 暗电流大幅降低（如 Retiga E 系列 <0.001 e⁻/像素/秒），短曝光应用已不必制冷，但长曝光天文、科研仍依赖 TEC 制冷。",
   "Not replaced. Modern CMOS dark current has fallen sharply (e.g. Retiga E at <0.001 e-/pixel/s) and short-exposure uses no longer need cooling, but long-exposure astronomy and science still rely on TEC cooling."
  ],
  "refs": [
   {
    "t": "Thermoelectrics history - Northwestern Materials Science",
    "u": "https://thermoelectrics.matsci.northwestern.edu/thermoelectrics/history.html"
   },
   {
    "t": "About Teledyne Photometrics",
    "u": "https://www.photometrics.com/company/about"
   },
   {
    "t": "Autoguider - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Autoguider"
   },
   {
    "t": "SBIG ST-4 (Company Seven)",
    "u": "https://company7.com/sbig/products/st4.html"
   },
   {
    "t": "Andor iXon EMCCD Brochure",
    "u": "https://andor.oxinst.com/assets/uploads/products/andor/documents/iXon-EMCCD-Brochure.pdf"
   },
   {
    "t": "ZWO: ASI120 finally retired, recalling six years of good times",
    "u": "https://www.zwoastro.com/2019/01/11/asi120-finally-retired-recalling-six-years-of-good-times"
   },
   {
    "t": "ZWO: Evolution history of ASI1600 cameras",
    "u": "https://zwoastro.com/2017/10/24/evolution-history-of-asi1600-cameras"
   },
   {
    "t": "Teledyne Vision Solutions: Dark Current",
    "u": "https://www.teledynevisionsolutions.com/learn/learning-center/imaging-fundamentals/dark-current/"
   }
  ]
 },
 "fpn": {
  "stages": [
   [
    1974,
    "paper",
    "Westinghouse 的 Marvin H. White、Donald R. Lampe、Franklyn C. Blaha、Ingham A. Mack 在 IEEE JSSC SC-9 发表《Characterization of Surface Channel CCD Image Arrays at Low Light Levels》，提出相关双采样（CDS）：同一像素先采复位电平再采信号电平相减。",
    "Westinghouse's Marvin H. White, Donald R. Lampe, Franklyn C. Blaha and Ingham A. Mack published \"Characterization of Surface Channel CCD Image Arrays at Low Light Levels\" in IEEE JSSC SC-9, introducing correlated double sampling (CDS): sample the reset level and the signal level of the same pixel and subtract.",
    [
     0
    ]
   ],
   [
    1982,
    "paper",
    "Hitachi 的野田、增田、鍋山发表单芯片 MOS 彩色摄像机信号处理电路：集成积分电路把 MOS 传感器的固定图样噪声压到约 1/10，配合 AGC、伽马电路和补色滤镜，做成已上市的全固态彩色摄像机。",
    "Hitachi's Noda, Masuda and Nabeyama described signal processing for a single-chip MOS colour camera: an integrated integrating circuit cut the MOS sensor's fixed-pattern noise to about one tenth, which with AGC, gamma circuits and complementary filters enabled a commercial all-solid-state colour camera.",
    [
     1
    ]
   ],
   [
    1993,
    "paper",
    "JPL 的 Sunetra Mendis、Sabrina Kemeny、Eric Fossum 在 IEDM 1993 发表 128×128 CMOS 有源像素传感器（APS），把采样保持等读出电路放进传感器芯片。",
    "JPL's Sunetra Mendis, Sabrina Kemeny and Eric Fossum presented a 128x128 CMOS active pixel sensor at IEDM 1993, putting sample-and-hold readout circuitry on the sensor chip.",
    [
     2
    ]
   ],
   [
    1995,
    "corp",
    "Kodak 申请 US5625210，把钉扎光电二极管做进 CMOS 有源像素（4T），像素内可以真正做到电荷完全转移后的 CDS；同年 Fossum、Kemeny 等五人创办 Photobit，独家授权 JPL 的 CMOS-APS 技术。",
    "Kodak filed US5625210, putting a pinned photodiode into the CMOS active pixel (4T) so true CDS after complete charge transfer became possible; the same year Fossum, Kemeny and three others founded Photobit with an exclusive licence to JPL's CMOS-APS.",
    [
     3,
     2
    ]
   ],
   [
    1996,
    "paper",
    "Nixon、Kemeny、Pain、Staller、Fossum 发表 256×256 CMOS APS「camera-on-a-chip」：用 CDS 抑制像素 FPN，用 delta double sampling（DDS）抑制列 FPN，读出噪声 13 e⁻ rms，功耗约 5 mW。",
    "Nixon, Kemeny, Pain, Staller and Fossum published a 256x256 CMOS APS camera-on-a-chip that used CDS against pixel FPN and delta double sampling (DDS) against column FPN, with 13 e- rms read noise at about 5 mW.",
    [
     4
    ]
   ],
   [
    1999,
    "mass",
    "Photobit PB-100（约 10 万像素，352×288）量产，用于 Intel Easy PC Camera、Logitech QuickCam 等摄像头，CMOS APS 进入大众市场。",
    "Photobit's PB-100 (about 100k pixels, 352x288) went into volume production for webcams such as the Intel Easy PC Camera and Logitech QuickCam, bringing CMOS APS to the mass market.",
    [
     5
    ]
   ],
   [
    2000,
    "mass",
    "Canon EOS D30 首发自研 325 万像素 APS 尺寸 CMOS（22.7×15.1 mm，0.35 µm 工艺）：片上降噪电路先用 10 ms 读出「信号+噪声」、再用 10 ms 读出纯噪声并相减，配合电荷完全转移和片上可编程增益放大（12 MHz）。",
    "Canon's EOS D30 debuted its in-house 3.25 MP APS-size CMOS (22.7x15.1 mm, 0.35 µm): an on-chip noise-reduction circuit read signal-plus-noise in 10 ms, then pure noise in another 10 ms and subtracted, together with complete charge transfer and on-chip programmable gain (12 MHz).",
    [
     6
    ]
   ],
   [
    2003,
    "ver",
    "约 1997–2003 年间 CMOS 读出与像素结构持续改进，性能追平 CCD；Micron 于 2001 年底收购 Photobit。",
    "Between about 1997 and 2003, CMOS readout and pixel refinements brought performance to parity with CCDs; Micron acquired Photobit in late 2001.",
    [
     2
    ]
   ],
   [
    2007,
    "ver",
    "Sony 发布 Exmor IMX021（1247 万像素，28×22.3 mm）：每列一个 ADC 的列并行 A/D 转换，加上模拟与数字两级的「双重降噪」，全像素 12 bit 10.39 fps。",
    "Sony announced the Exmor IMX021 (12.47 MP, 28x22.3 mm): column-parallel A/D with one ADC per column plus analog-and-digital dual noise cancelling, 10.39 fps at 12 bits full resolution.",
    [
     7
    ]
   ]
  ],
  "now": [
   "CDS 加列级（模拟+数字）噪声消除已是所有 CMOS 传感器读出链的固定部分，列并行 ADC 在数字域做 CDS；剩余的行/列条纹再由 ISP 黑电平校正处理。",
   "CDS plus column-level analog and digital noise cancellation is now a fixed part of every CMOS readout chain, with column-parallel ADCs doing CDS digitally; residual row/column banding is handled by ISP black-level correction."
  ],
  "replaced": [
   "没有被替代，而是从片外电路逐步并入像素和列 ADC，成为 CMOS 的基础功能。",
   "Not replaced; it moved from off-chip circuits into the pixel and column ADC and became a basic CMOS function."
  ],
  "refs": [
   {
    "t": "White et al., Characterization of Surface Channel CCD Image Arrays at Low Light Levels (1974)",
    "u": "https://web.eecs.utk.edu/~dbouldin/protected/white-feb74.pdf"
   },
   {
    "t": "Signal Processing Circuit for Single-Chip MOS Color Camera (ITE Japan, 1982)",
    "u": "https://www.jstage.jst.go.jp/article/itej1978/36/11/36_11_1003/_article/-char/en"
   },
   {
    "t": "Eric Fossum - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Eric_Fossum"
   },
   {
    "t": "US5625210A - Active pixel sensor integrated with a pinned photodiode",
    "u": "https://patents.google.com/patent/US5625210"
   },
   {
    "t": "256x256 CMOS active pixel sensor camera-on-a-chip (1996)",
    "u": "https://scilit.com/publications/850f281aa1c9e7c81fbc27f41c963ceb"
   },
   {
    "t": "Chip Hall of Fame: Photobit PB-100 (IEEE Spectrum)",
    "u": "https://spectrum.ieee.org/tech-history/silicon-revolution/chip-hall-of-fame-photobit-pb100"
   },
   {
    "t": "Canon CMOS sensor details (EE Times via dpreview, 2000)",
    "u": "https://www.dpreview.com/articles/0178792700/canoncmos-eetimes"
   },
   {
    "t": "Sony 12.5 MP APS-C CMOS sensor, 10 fps (dpreview, 2007)",
    "u": "https://www.dpreview.com/articles/2138577646/sony12mpcmos"
   }
  ]
 },
 "emccd": {
  "stages": [
   [
    1991,
    "idea",
    "Texas Instruments 的 Jaroslav Hynecek 于 1991-07-11 申请「Charge Multiplying Detector」专利（US5337340，1994 年授权）：在 CCD 单元里设置足够强的电场，让电荷转移时发生碰撞电离而倍增。",
    "Texas Instruments' Jaroslav Hynecek filed the \"Charge Multiplying Detector\" patent on 11 July 1991 (US5337340, granted 1994): a strong-field region in a CCD cell multiplies charge by impact ionization during transfer.",
    [
     0
    ]
   ],
   [
    1992,
    "paper",
    "Hynecek 在 IEEE Transactions on Electron Devices 39 卷发表《CCM - A New Low-Noise Charge Carrier Multiplier Suitable for Detection of Charge in Small Pixel CCD Image Sensors》，指出单载流子碰撞电离倍增几乎不增加噪声。",
    "Hynecek published \"CCM - A New Low-Noise Charge Carrier Multiplier Suitable for Detection of Charge in Small Pixel CCD Image Sensors\" in IEEE Transactions on Electron Devices vol. 39, showing single-carrier impact-ionization multiplication is almost noiseless.",
    [
     0
    ]
   ],
   [
    2000,
    "proto",
    "Marconi Applied Technologies（英国 Chelmsford，后来的 E2V）的 Paul Jerram 等在 SPIE 2000 发布 L3CCD 技术：在输出放大器前加一段约 40 V 时钟的倍增寄存器，每级约 1–2% 概率倍增，数百级后增益达数百倍；首款商用器件 CCD65（576×288，20×30 µm）在 50 Hz 帧率下读出噪声低于 1 e⁻ rms。",
    "Paul Jerram et al. at Marconi Applied Technologies (Chelmsford, UK, later E2V) unveiled L3CCD at SPIE 2000: a multiplication register clocked at about 40 V before the output amplifier, each stage multiplying with 1-2% probability for gains of hundreds over hundreds of stages. The first commercial device, the CCD65 (576x288, 20x30 µm), gave under 1 e- rms read noise at 50 Hz.",
    [
     1,
     3
    ]
   ],
   [
    2000,
    "mass",
    "Andor 交付第一批 EMCCD 科研相机，获 Photonics Circle of Excellence 奖，并提出「Electron Multiplying CCD（EMCCD）」这个名称，后来成为行业通用叫法。",
    "Andor shipped its first EMCCD scientific cameras, won a Photonics Circle of Excellence award and coined the name \"Electron Multiplying CCD (EMCCD)\", later adopted industry-wide.",
    [
     4
    ]
   ],
   [
    2001,
    "paper",
    "Jerram 等在 SPIE 4306 发表《The LLLCCD: low light imaging without the need for an intensifier》；同年 Hynecek 在 IEEE TED 发表《Impactron - a new solid state image intensifier》，TI 以 Impactron 品牌推出 TC253（656×496）等器件。",
    "Jerram et al. published \"The LLLCCD: low light imaging without the need for an intensifier\" in SPIE 4306; the same year Hynecek published \"Impactron - a new solid state image intensifier\" in IEEE TED, and TI marketed devices such as the TC253 (656x496) under the Impactron name.",
    [
     2,
     3
    ]
   ],
   [
    2001,
    "ver",
    "Andor 推出旗舰 iXon EMCCD 平台；Photometrics 也称自己在 2001 年做出全球首台科研级 EMCCD 相机（采用 TI 的片上倍增技术）。",
    "Andor launched its flagship iXon EMCCD platform; Photometrics likewise claims the world's first scientific-grade EMCCD camera in 2001 (using TI's on-chip multiplication).",
    [
     4,
     7
    ]
   ],
   [
    2002,
    "ver",
    "2002 年 1 月 Andor 推出首款背照式 EMCCD 相机，用 E2V 512×512、16 µm 的背照 CCD97，同时推出 Baseline Clamp 改善定量稳定性。",
    "In January 2002 Andor introduced the first back-illuminated EMCCD cameras, using E2V's 512x512, 16 µm back-illuminated CCD97, along with Baseline Clamp for quantitative stability.",
    [
     4,
     3
    ]
   ],
   [
    2006,
    "ver",
    "Andor iXon+ 推出全球首款百万像素背照 EMCCD（888 型，E2V CCD201，1024×1024，13 µm），并加入 EMCAL、RealGain 增益校准。",
    "Andor's iXon+ brought the world's first megapixel back-illuminated EMCCD (model 888, E2V CCD201, 1024x1024, 13 µm), adding EMCAL and RealGain calibration.",
    [
     4,
     3
    ]
   ],
   [
    2010,
    "mass",
    "FLIR 于 2010 年 5 月推出 ChromaNox EMCCD 低照度安防相机：ChromaNox 6（640×480）与 ChromaNox 12（1280×1024），彩色/黑白，响应延伸到 1000 nm 以上，工作温度 -40~71°C。",
    "In May 2010 FLIR launched ChromaNox EMCCD low-light security cameras: ChromaNox 6 (640x480) and ChromaNox 12 (1280x1024), colour or mono, responsive past 1000 nm, operating from -40 to 71°C.",
    [
     5
    ]
   ],
   [
    2012,
    "ver",
    "Andor iXon Ultra 897 把 512×512 帧率提到 56 fps（快 60% 以上），改 USB 即插即用，TE 制冷到 -100°C；2014 年 iXon Ultra 888 成为首款 USB 3.0 EMCCD，1024×1024 达 26 fps。",
    "Andor's iXon Ultra 897 raised 512x512 to 56 fps (over 60% faster) with USB plug-and-play and TE cooling to -100°C; in 2014 the iXon Ultra 888 became the first USB 3.0 EMCCD, 26 fps at 1024x1024.",
    [
     4
    ]
   ],
   [
    2016,
    "rival",
    "Photometrics 推出全球首台背照式 sCMOS 相机（Prime 95B），读出噪声约 1 e⁻ 级、无倍增过剩噪声，开始在荧光显微领域取代 EMCCD。",
    "Photometrics launched the world's first back-illuminated sCMOS camera (Prime 95B), with read noise near 1 e- and no multiplication excess noise, starting to displace EMCCDs in fluorescence microscopy.",
    [
     7,
     6
    ]
   ],
   [
    2021,
    "end",
    "Hamamatsu ORCA-Quest 首次搭载 qCMOS：940 万像素、读出噪声 0.27 e⁻ rms，可分辨光电子数，光子数分辨成像约 47 Mpx/s，约为最快 EMCCD（约 27 Mpx/s）的两倍；TI 已停产 TC253、TC285。",
    "Hamamatsu's ORCA-Quest debuted qCMOS: 9.4 MP, 0.27 e- rms read noise, photon-number resolving at about 47 Mpx/s, nearly twice the fastest EMCCD (about 27 Mpx/s); TI had already discontinued the TC253 and TC285.",
    [
     6,
     3
    ]
   ]
  ],
  "now": [
   "EMCCD 仍由 Teledyne e2v 供货，Andor iXon 等相机继续用于单光子计数、天文 lucky imaging 和量子光学；在显微成像中已大多让位于背照 sCMOS 和 qCMOS。",
   "EMCCDs are still supplied by Teledyne e2v and used in cameras such as Andor's iXon for photon counting, astronomical lucky imaging and quantum optics; in microscopy they have largely given way to BSI sCMOS and qCMOS."
  ],
  "replaced": [
   "正被亚电子读出噪声的背照 sCMOS（2016 年起）和 qCMOS（2021 年起）替代：它们没有 EM 倍增带来的约 1.4 倍过剩噪声，像素更多、更便宜。",
   "Being replaced by sub-electron-noise BSI sCMOS (from 2016) and qCMOS (from 2021), which avoid the ~1.4x excess noise of EM multiplication and offer more pixels at lower cost."
  ],
  "refs": [
   {
    "t": "US5337340 - Charge multiplying detector (CMD) suitable for small pixel CCD image sensors",
    "u": "https://uspto.report/patent/grant/5337340"
   },
   {
    "t": "Low-light CCD needs no intensification (Vision Systems Design, 2000)",
    "u": "https://www.vision-systems.com/factory/manufacturing/article/16738703/low-light-ccd-needs-no-intensification"
   },
   {
    "t": "Jerram et al., The LLLCCD: low light imaging without the need for an intensifier (SPIE 4306)",
    "u": "https://www.arcetri.inaf.it/irlab/fasti/l3ccd/4306a_20.pdf"
   },
   {
    "t": "Institute of Astronomy, Cambridge: L3CCD technology",
    "u": "https://people.ast.cam.ac.uk/~cdm/lucky/d6-www.ast.private.cam.ac.uk/research/instrumentation.surveys.and.projects/lucky.imaging/l3ccd.html"
   },
   {
    "t": "Andor iXon EMCCD Brochure",
    "u": "https://andor.oxinst.com/assets/uploads/products/andor/documents/iXon-EMCCD-Brochure.pdf"
   },
   {
    "t": "FLIR Systems low-light security cameras (Laser Focus World, 2010)",
    "u": "https://www.laserfocusworld.com/detectors-imaging/article/16567805/flir-systems-low-light-security-cameras-feature-image-processing-algorithms"
   },
   {
    "t": "Hamamatsu introduces the world's first photon number resolving scientific camera (2021)",
    "u": "https://www.photonicsonline.com/doc/hamamatsu-introduces-the-world-s-first-photon-number-resolving-scientific-camera-with-incredibly-low-noise-and-megapixels-0001"
   },
   {
    "t": "About Teledyne Photometrics",
    "u": "https://www.photometrics.com/company/about"
   }
  ]
 },
 "lenr": {
  "stages": [
   [
    2000,
    "mass",
    "Canon EOS D30（2000 年发售）在自定义功能 C.Fn-01 提供「长曝光降噪」：1 秒以上曝光后快门关闭再拍一张同样长的暗帧，从图像中减去热像素和暗电流图样。",
    "Canon's EOS D30 (2000) offered Long Exposure Noise Reduction as custom function C.Fn-01: after exposures of 1 s or longer it shot an equally long dark frame with the shutter closed and subtracted hot pixels and dark-current patterns.",
    [
     0
    ]
   ],
   [
    2001,
    "ver",
    "Nikon Coolpix 995（2001-04-25 发布）加入低光照降噪设置，做暗帧相减，评测称非常有效，ISO 800 下 8 秒曝光、甚至 30 秒都可用；这项功能来自 Nikon 高端数码单反。",
    "The Nikon Coolpix 995 (announced 25 April 2001) added a low-light noise-reduction setting using dark-frame subtraction; reviewers found it very effective, usable to 8 s at ISO 800 and even 30 s, a feature borrowed from Nikon's high-end DSLRs.",
    [
     1
    ]
   ],
   [
    2003,
    "ver",
    "Olympus E-1 区分「Noise Removal」（暗帧相减去热像素）和「Noise Filter」（空间降噪）两项设置。",
    "The Olympus E-1 separated \"Noise Removal\" (dark-frame subtraction for hot pixels) from \"Noise Filter\" (spatial noise reduction).",
    [
     2
    ]
   ],
   [
    2004,
    "ver",
    "Nikon D2X 提供可调「高 ISO 降噪」：Normal（默认）/ High / Off，ISO 400 以上启用空间降噪，HI-1、HI-2 始终额外降噪；评测指出 ISO 400 起开始牺牲细节。",
    "The Nikon D2X offered adjustable High ISO NR: Normal (default), High or Off, applied from ISO 400 and always extra at HI-1/HI-2; reviewers noted detail loss starting at ISO 400.",
    [
     3
    ]
   ],
   [
    2010,
    "ver",
    "Sony α55（2010 年 8 月）等机型提供「多帧降噪」（Multi Frame Noise Reduction）：一次按快门高速连拍 6 张，在机内叠加平均成一张以压低随机噪声。",
    "Sony models such as the α55 (August 2010) offered Multi Frame Noise Reduction: one shutter press fires a six-frame burst that is stacked and averaged in-camera to suppress random noise.",
    [
     7
    ]
   ],
   [
    2012,
    "ver",
    "Canon EOS 650D（T4i）等 2012 年机型加入「多张拍摄降噪」（Multi Shot Noise Reduction）：快速连拍 4 张在机内合成一张低噪声图像，可手动设 ISO，ISO 400 起见效，高感约有 1–2 档收益，但只适合静止场景。",
    "Canon models from 2012 such as the EOS 650D (T4i) added Multi Shot Noise Reduction: a fast four-shot burst merged in-camera into one low-noise image, with manual ISO; benefits start at ISO 400 and reach about 1-2 stops at high ISO, for static scenes only.",
    [
     3
    ]
   ],
   [
    2020,
    "rival",
    "DxO 于 2020-10-21 发布 PhotoLab 4 与 DeepPRIME：用海量图像训练的深度学习网络同时做去马赛克和降噪。",
    "On 21 October 2020 DxO released PhotoLab 4 with DeepPRIME, a deep-learning network trained on millions of images that demosaics and denoises together.",
    [
     5
    ]
   ],
   [
    2023,
    "rival",
    "Adobe 于 2023-04-18 在 Lightroom / Camera Raw 加入 AI Denoise，对 Bayer 与 X-Trans RAW 直接降噪并输出新 DNG，目标是让 2000 万像素相机 ISO 51200 也可用。",
    "On 18 April 2023 Adobe added AI Denoise to Lightroom and Camera Raw, denoising Bayer and X-Trans raw files into a new DNG, aiming to make ISO 51200 on a 20 MP camera usable.",
    [
     6
    ]
   ]
  ],
  "now": [
   "相机仍保留暗帧长曝光降噪（会让等待时间翻倍）和高 ISO 空间降噪；天文用户多改用单独拍摄的暗帧库后期扣除；高 ISO 降噪越来越多由 RAW 后期的 AI 降噪完成。",
   "Cameras still keep dark-frame long-exposure NR (which doubles the wait) and high-ISO spatial NR; astrophotographers mostly subtract separately shot dark-frame libraries in post, and high-ISO noise is increasingly handled by AI raw denoising."
  ],
  "replaced": [
   "机内高 ISO 空间降噪正被 AI 降噪（DxO DeepPRIME、Lightroom Denoise）和多帧合成取代；暗帧扣除本身仍在用，但更多移到后期用暗帧库完成。",
   "In-camera high-ISO spatial NR is being replaced by AI denoising (DxO DeepPRIME, Lightroom Denoise) and multi-frame merging; dark-frame subtraction remains, but increasingly done in post with dark libraries."
  ],
  "refs": [
   {
    "t": "Canon EOS D30 manual: Custom function settings",
    "u": "https://www.manualsdir.com/manuals/31454/canon-eos-d30.html?page=124"
   },
   {
    "t": "Nikon CoolPix 995 review (Imaging Resource, 2001)",
    "u": "https://www.imaging-resource.com/PRODS/C995/C9XA.HTM"
   },
   {
    "t": "Olympus E-1 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Olympus_E-1"
   },
   {
    "t": "Nikon D2X Review (dpreview)",
    "u": "https://www.dpreview.com/reviews/nikond2x"
   },
   {
    "t": "Canon EOS Rebel T4i / 650D review (Cameralabs)",
    "u": "https://www.cameralabs.com/canon_eos_rebel_t4i_650d/2"
   },
   {
    "t": "DxO Announces PhotoLab 4 Powered By Its DeepPRIME AI Processing (PetaPixel)",
    "u": "https://petapixel.com/2020/10/21/dxo-announces-photolab-4-powered-by-its-deepprime-ai-processing"
   },
   {
    "t": "Denoise demystified (Adobe Blog, 2023)",
    "u": "https://blog.adobe.com/en/publish/2023/04/18/denoise-demystified"
   },
   {
    "t": "Sony SLT Alpha A55 In-depth Review (dpreview)",
    "u": "https://www.dpreview.com/reviews/sonyslta55"
   }
  ]
 },
 "coladc": {
  "stages": [
   [
    1997,
    "paper",
    "JPL 的 Zhimin Zhou、Bedabrata Pain、Eric Fossum 在 IEEE Transactions on Electron Devices 44 卷 10 期（1997 年 10 月）报告了第一颗集成列并行 ADC 的 CMOS 有源像素传感器：64×64 像素、24 µm 像素间距、1.2 µm 工艺，每列一个 8 bit 逐次逼近 ADC，功耗极低。",
    "Zhimin Zhou, Bedabrata Pain and Eric Fossum of JPL reported the first CMOS active pixel sensor with on-chip column-parallel ADCs in IEEE Transactions on Electron Devices vol. 44 no. 10 (Oct 1997): a 64×64 array at 24 µm pitch in a 1.2 µm process with one 8-bit successive-approximation ADC per column at very low power.",
    [
     0
    ]
   ],
   [
    1998,
    "proto",
    "Fossum 在 IEEE Micro 撰文介绍「片上数字相机」：JPL 与其创立的 Photobit 开发了每列（或每几列）一个 ADC 的架构，展示过 10 µm 像素间距、集成 1024 个 ADC 的传感器；难点是又高又窄的列电路必须彼此高度匹配，否则会出现列固定图样噪声 FPN。",
    "In IEEE Micro, Fossum described the \"digital camera on a chip\": JPL and his spin-off Photobit had developed an architecture with one ADC per column (or per group of columns), showing a 10 µm-pitch sensor with 1,024 on-chip ADCs; the catch was that the tall, thin column circuits had to match closely or column fixed-pattern noise (FPN) would appear.",
    [
     1
    ]
   ],
   [
    2007,
    "mass",
    "2007 年 8 月 20 日 Sony 发布 APS-C 尺寸的 IMX021：1247 万有效像素、5.49 µm 像素、12 bit 列并行 ADC，全像素 10.39 帧/秒，并在每列放置模拟 CDS + 数字 CDS 的「双重降噪」，样品价 4 万日元，由熊本工厂生产；同年 9 月发布的 DSLR-A700 首先用上这一 Exmor 传感器。",
    "On 20 Aug 2007 Sony announced the APS-C IMX021: 12.47 MP, 5.49 µm pixels, 12-bit column-parallel ADCs, 10.39 fps full readout, and dual noise cancellation with analog plus digital CDS in every column; samples cost ¥40,000 and it was built at Kumamoto. The DSLR-A700, announced that September, was the first camera to use this Exmor sensor.",
    [
     2
    ]
   ],
   [
    2008,
    "ver",
    "2008 年 6 月 11 日 Sony 发布 Exmor R，号称世界首个量产的背照式（BSI）传感器，灵敏度约为前照式的两倍，读出部分仍沿用列并行 ADC。",
    "On 11 Jun 2008 Sony announced Exmor R, billed as the first mass-produced back-illuminated (BSI) sensor with roughly twice the sensitivity of front-illuminated parts, while keeping column-parallel ADC readout.",
    [
     3
    ]
   ],
   [
    2008,
    "mass",
    "2008 年 11 月 Sony 把列并行 ADC 带进手机传感器：1/3.2 英寸 810 万像素 IMX046PQ 当月出货（15 帧/秒），1/2.5 英寸 1225 万像素、1.4 µm 像素的 IMX060PQ 计划 2009 年 3 月出货（10 帧/秒）。",
    "In Nov 2008 Sony brought column-parallel ADCs to phone sensors: the 1/3.2-inch 8.11 MP IMX046PQ shipped that month (15 fps), and the 1/2.5-inch 12.25 MP, 1.4 µm IMX060PQ was slated for March 2009 (10 fps).",
    [
     4
    ]
   ],
   [
    2009,
    "mass",
    "Sony Ericsson Satio（Idou）作为第一款 1200 万像素拍照手机于 2009 年上市，采用 Exmor IMX060PQ，这是可查到的较早用上列并行 ADC 传感器的手机。",
    "The Sony Ericsson Satio (Idou), the first 12 MP camera phone, launched in 2009 with the Exmor IMX060PQ, one of the earliest documented phones with a column-parallel-ADC sensor.",
    [
     4,
     5
    ]
   ],
   [
    2012,
    "ver",
    "2012 年 8 月 20 日 Sony 发布 Exmor RS 堆栈式 CMOS：像素层叠在逻辑层之上，列 ADC 等电路移到下层芯片，可以用更先进的逻辑工艺，后来又加入 DRAM 做成三层堆栈。",
    "On 20 Aug 2012 Sony unveiled Exmor RS, the first stacked CMOS sensor: the pixel layer sits on a logic die that holds the column ADCs and other circuits, built in a more advanced logic process; a DRAM layer later made it three-layer.",
    [
     3
    ]
   ],
   [
    2016,
    "rival",
    "Canon 长期在传感器外做 A/D 转换，低 ISO 动态范围落后于 Exmor；2016 年的 EOS 80D 改为片上列 ADC，RAW 动态范围明显提升，Canon 也转向列并行 ADC。",
    "Canon long did A/D conversion off the sensor and trailed Exmor in low-ISO dynamic range; the 2016 EOS 80D moved to on-chip column ADCs with clearly better RAW dynamic range, bringing Canon onto column-parallel ADC too.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 2 月 ISSCC 上 Sony 展示像素并行 ADC：用 2016 年 1 月首次量产的 Cu-Cu 连接把每个像素直接接到下层的 ADC，146 万像素、6.9 µm、66 帧/秒，实现全局快门，是列并行之后的下一步。",
    "At ISSCC in Feb 2018 Sony showed pixel-parallel ADCs: Cu-Cu bonding (first mass-produced in Jan 2016) links every pixel to its own ADC on the lower die, giving a 1.46 MP, 6.9 µm, 66 fps global-shutter sensor, the step after column-parallel.",
    [
     7
    ]
   ]
  ],
  "now": [
   "列并行 ADC（多为单斜率 single-slope 加数字 CDS）几乎是所有手机、相机、安防和车载 CMOS 的默认读出架构；在堆栈式传感器里它放在下层逻辑芯片上，还衍生出双增益、多次采样等降噪做法。",
   "Column-parallel ADC (usually single-slope with digital CDS) is the default readout in almost every phone, camera, security and automotive CMOS sensor; in stacked sensors it lives on the logic die and has spawned dual-gain and multiple-sampling noise reduction schemes."
  ],
  "replaced": [
   "尚未被替代；像素级 ADC 已在全局快门、事件相机等细分场景出现，但成本与像素尺寸限制让列并行仍是主流。",
   "Not replaced; pixel-level ADCs have appeared for global shutter and event sensors, but cost and pixel-size limits keep column-parallel mainstream."
  ],
  "refs": [
   {
    "t": "Zhou, Pain, Fossum: CMOS active pixel sensor with on-chip successive approximation ADC (IEEE TED 1997)",
    "u": "https://search.isc.ac/inventory/49/1275280.htm"
   },
   {
    "t": "Fossum: Digital camera system on a chip (IEEE Micro)",
    "u": "https://www.csd.uoc.gr/~hy371/bibliography/DigitalCamera_on_a_chip.pdf"
   },
   {
    "t": "デジカメWatch: ソニー、APS-CサイズCMOSセンサー IMX021",
    "u": "https://dc.watch.impress.co.jp/cda/other/2007/08/20/6851.html"
   },
   {
    "t": "Wikipedia: Exmor",
    "u": "https://en.wikipedia.org/wiki/Exmor"
   },
   {
    "t": "Imaging Resource: Sony Exmor sensors for mobile phones (2008)",
    "u": "https://www.imaging-resource.com/NEWS/1226699865.html"
   },
   {
    "t": "GSMArena: Sony Ericsson Satio (Idou) preview",
    "u": "https://www.gsmarena.com/sony_ericsson_satio_idou-review-358p5.php"
   },
   {
    "t": "Canon Watch: EOS 80D greatly improved RAW dynamic range",
    "u": "https://www.canonwatch.com/canon-eos-80d-greatly-improved-raw-dynamic-range/"
   },
   {
    "t": "Photo Rumors: Sony BSI CMOS with pixel-parallel A/D converter (2018)",
    "u": "https://photorumors.com/2018/02/17/sony-develops-a-back-illuminated-cmos-sensor-with-pixel-parallel-a-d-converter-that-enables-global-shutter-function/"
   }
  ]
 },
 "tnr": {
  "stages": [
   [
    1978,
    "paper",
    "R. H. McMann、S. Kreinik、J. K. Moore、A. Kaiser、J. Rossi 在 SMPTE Journal 87 卷 3 期发表《A Digital Noise Reducer for Encoded NTSC Signals》：用数字帧存储器做自适应递归滤波，由运动检测器控制，静止区降噪约 15 dB，用于 ENG 素材、多代录像带、卫星接收和胶转磁去颗粒。",
    "R. H. McMann, S. Kreinik, J. K. Moore, A. Kaiser and J. Rossi published \"A Digital Noise Reducer for Encoded NTSC Signals\" in SMPTE Journal vol. 87 no. 3: a digital frame store acting as an adaptive recursive filter under a motion detector, giving about 15 dB of noise reduction for ENG footage, multi-generation tape, satellite feeds and telecine grain.",
    [
     0
    ]
   ],
   [
    1984,
    "paper",
    "Eric Dubois 与 Shaker Sabri 在 IEEE Transactions on Communications 32 卷 7 期提出运动补偿时域滤波：先估计运动再沿运动轨迹做非线性时域平均，并给出 NTSC 复合信号实现，成为 MCTF 的经典起点。",
    "Eric Dubois and Shaker Sabri proposed motion-compensated temporal filtering in IEEE Transactions on Communications vol. 32 no. 7: estimate motion, then average nonlinearly along motion trajectories, with an NTSC composite implementation; it became the classic starting point for MCTF.",
    [
     1
    ]
   ],
   [
    2007,
    "paper",
    "Kostadin Dabov、Alessandro Foi、Vladimir Katkovnik、Karen Egiazarian 在 EUSIPCO 2007 提出 VBM3D：在相邻帧里搜索相似块组成三维组，做变换域协同滤波，把非局部方法引入视频降噪。",
    "Kostadin Dabov, Alessandro Foi, Vladimir Katkovnik and Karen Egiazarian presented VBM3D at EUSIPCO 2007: similar blocks found across neighboring frames are stacked into 3-D groups and filtered collaboratively in a transform domain, bringing nonlocal methods to video denoising.",
    [
     2
    ]
   ],
   [
    2008,
    "mass",
    "2008 年 9 月 ASIS 展会上 Samsung Techwin 推出 W-IV / SV-IV DSP 摄像机，宣传「业内唯一的 3D 数字降噪」，信噪比 52 dB，并能把带宽和存储需求降低最多 70%。",
    "At ASIS in Sept 2008 Samsung Techwin launched cameras on its W-IV / SV-IV DSPs, touting \"the industry's only 3D digital noise filtering\", 52 dB S/N and up to 70% less bandwidth and storage.",
    [
     3
    ]
   ],
   [
    2009,
    "mass",
    "Panasonic 在 IFSEC 2009 推出 Super Dynamic 5 技术与 WV-CP500 等摄像机，自适应降噪把 2D-DNR 和 3D-DNR 结合，暗处 0.3 lux 仍有彩色画面；WV-CP500 获 IFSEC 2010 年度 CCTV 摄像机奖。",
    "Panasonic launched Super Dynamic 5 and cameras such as the WV-CP500 at IFSEC 2009, with adaptive noise reduction combining 2D-DNR and 3D-DNR and color down to 0.3 lux; the WV-CP500 won CCTV Camera of the Year at IFSEC 2010.",
    [
     4
    ]
   ],
   [
    2010,
    "ver",
    "2010 年 2 月 Sony 发布 SNC-CH140、SNC-DH140、SNC-RH124、SNC-RH164 等 HD 网络摄像机，采用 XDNR（Excellent Dynamic Noise Reduction）在低照度下压噪又避免运动拖影。",
    "In Feb 2010 Sony introduced HD network cameras including the SNC-CH140, SNC-DH140, SNC-RH124 and SNC-RH164, using XDNR (Excellent Dynamic Noise Reduction) to cut noise in low light without motion blur.",
    [
     5
    ]
   ],
   [
    2012,
    "paper",
    "Matteo Maggioni、Giacomo Boracchi、Alessandro Foi、Karen Egiazarian 在 IEEE TIP 21 卷 9 期发表 V-BM4D：沿运动轨迹把时空体块分组做四维非局部变换，同时完成降噪、去块和增强。",
    "Matteo Maggioni, Giacomo Boracchi, Alessandro Foi and Karen Egiazarian published V-BM4D in IEEE TIP vol. 21 no. 9: spatiotemporal volumes along motion trajectories are grouped and filtered with separable 4-D nonlocal transforms for denoising, deblocking and enhancement.",
    [
     2
    ]
   ],
   [
    2017,
    "ver",
    "2017 年 8 月 Qualcomm 公布第二代 Spectra ISP（用于 Snapdragon 845）：视频录制支持硬件 MCTF，与硬件电子防抖配合，手机视频时域降噪进入 SoC 硬件流水线。",
    "In Aug 2017 Qualcomm announced the second-generation Spectra ISP for the Snapdragon 845, with hardware MCTF for video alongside hardware EIS, putting temporal video denoising into the phone SoC pipeline.",
    [
     6
    ]
   ],
   [
    2019,
    "rival",
    "Matias Tassano、Julie Delon、Thomas Veit 的 FastDVDnet（2019 年 arXiv，CVPR 2020 口头报告）用级联 CNN 直接处理相邻帧，不需要显式光流就能达到或超过传统方法，代表深度学习视频降噪开始挑战手工 TNR。",
    "FastDVDnet by Matias Tassano, Julie Delon and Thomas Veit (arXiv 2019, CVPR 2020 oral) feeds neighboring frames to cascaded CNNs without explicit optical flow and matches or beats classic methods, showing deep video denoising challenging hand-tuned TNR.",
    [
     7
    ]
   ]
  ],
  "now": [
   "时域降噪已是手机 ISP、安防 SoC、车载和广播设备的标配，通常是运动检测或运动补偿的递归滤波加空间降噪兜底；神经网络视频降噪正在逐步进入 NPU 加速的 ISP 流水线。",
   "Temporal noise reduction is standard in phone ISPs, security SoCs, automotive and broadcast gear, usually a motion-detected or motion-compensated recursive filter with spatial fallback; neural video denoisers are gradually entering NPU-accelerated ISP pipelines."
  ],
  "replaced": [
   "没有被淘汰；手工设计的 3D-DNR 正在被深度学习时空降噪补充或部分替代，但递归时域滤波因算力低仍广泛使用。",
   "Not obsolete; hand-tuned 3D-DNR is being supplemented or partly replaced by learned spatiotemporal denoisers, but cheap recursive temporal filtering remains widespread."
  ],
  "refs": [
   {
    "t": "McMann et al.: A Digital Noise Reducer for Encoded NTSC Signals (SMPTE Journal 1978)",
    "u": "https://journal.smpte.org/periodicals/SMPTE%20Journal/87/3/4/"
   },
   {
    "t": "Dubois, Sabri: Noise Reduction in Image Sequences Using Motion-Compensated Temporal Filtering (1984)",
    "u": "https://scilit.com/publications/466050523a2864b65704804002223504"
   },
   {
    "t": "Foi: Image and video denoising by sparse 3D transform-domain collaborative filtering (BM3D / VBM3D / V-BM4D)",
    "u": "https://webpages.tuni.fi/foi/GCF-BM3D"
   },
   {
    "t": "Security Today: Samsung Techwin America Expands DVR, Camera Lines (2008)",
    "u": "https://securitytoday.com/articles/2008/09/24/samsung-techwin-america.aspx"
   },
   {
    "t": "GIT Sicherheit: Panasonic new Super Dynamic 5 Technology",
    "u": "https://git-sicherheit.de/en/topstories/panasonic-new-super-dynamic-5-technology"
   },
   {
    "t": "THE Journal: Sony Introduces High-Def IP Cameras (2010)",
    "u": "https://thejournal.com/articles/2010/02/09/sony-introduces-high-def-ip-cameras.aspx"
   },
   {
    "t": "ComputerBase: Qualcomm 2nd gen Spectra ISP (2017)",
    "u": "https://www.computerbase.de/2017-08/qualcomm-2nd-gen-spectra-isp/"
   },
   {
    "t": "Tassano et al.: FastDVDnet (CVPR 2020)",
    "u": "https://openaccess.thecvf.com/content_CVPR_2020/html/Tassano_FastDVDnet_Towards_Real-Time_Deep_Video_Denoising_Without_Flow_Estimation_CVPR_2020_paper.html"
   }
  ]
 },
 "scmos": {
  "stages": [
   [
    2008,
    "corp",
    "北爱尔兰的 Andor、德国的 PCO 与美国 Fairchild Imaging（属 BAE）2008 年组成联盟，联合开发面向科研的 CMOS 架构，目标是同时拿下低噪声、高帧率、大动态范围和大视场。",
    "Andor (Northern Ireland), PCO (Germany) and Fairchild Imaging (USA, part of BAE) formed a consortium in 2008 to co-develop a CMOS architecture for science, aiming at low noise, high speed, wide dynamic range and large field of view at once.",
    [
     0
    ]
   ],
   [
    2009,
    "paper",
    "2009 年 6 月慕尼黑 Laser World of Photonics 上三家发布 sCMOS 白皮书：550 万像素（2560×2160）、6.5 µm 像素，30 帧/秒读出噪声 <2 e-、100 帧/秒 <3 e-，动态范围 >16000:1，QE 最高 60%，可选卷帘或全局快门。",
    "At Laser World of Photonics in Munich in June 2009 the three firms released the sCMOS white paper: 5.5 MP (2560×2160), 6.5 µm pixels, read noise <2 e- at 30 fps and <3 e- at 100 fps, >16,000:1 dynamic range, up to 60% QE, and selectable rolling or global shutter.",
    [
     1
    ]
   ],
   [
    2009,
    "proto",
    "Fairchild 负责传感器 CIS2521（约 2009 年首版）：5T 像素，每列两个 ADC 通道，一个为弱光优化的高增益、一个为强光优化的低增益，单帧合成高动态范围；这一「双放大器」架构成为 sCMOS 的标志。",
    "Fairchild built the sensor, the CIS2521 (first version around 2009): 5T pixels and two ADC channels per column, one high-gain for low light and one low-gain for bright light, merged into one high-dynamic-range frame; this dual-amplifier design became the hallmark of sCMOS.",
    [
     1,
     2
    ]
   ],
   [
    2010,
    "mass",
    "2010 年 8 月 PCO（经美国 Cooke Corp.）推出 pco.edge，是首批上市的 sCMOS 相机之一，读出噪声 <2 e-。",
    "In Aug 2010 PCO (via Cooke Corp. in the US) introduced the pco.edge, one of the first sCMOS cameras on the market, with <2 e- read noise.",
    [
     3
    ]
   ],
   [
    2010,
    "mass",
    "2010 年 11 月 29 日 Andor 发布 Neo：550 万像素、6.5 µm，30 帧/秒读出噪声 1 e-、100 帧/秒 1.4 e-，真空制冷到 -40°C，双放大器 16 bit 动态范围 30000:1，机内 4 GB 内存。",
    "On 29 Nov 2010 Andor launched the Neo: 5.5 MP at 6.5 µm, 1 e- read noise at 30 fps and 1.4 e- at 100 fps, vacuum cooling to -40°C, dual-amplifier 16-bit range of 30,000:1, and 4 GB onboard memory.",
    [
     4
    ]
   ],
   [
    2011,
    "ver",
    "Hamamatsu 2011 年 11 月发布 ORCA-Flash4.0：第二代 sCMOS，400 万像素（2048×2048）、6.5 µm，100 帧/秒下读出噪声 1.3 e-，600 nm QE >70%，宣称弱光快速荧光成像信噪比超过 EM-CCD 与第一代 sCMOS，成为显微镜领域的爆款。",
    "Hamamatsu announced the ORCA-Flash4.0 in Nov 2011: a second-generation sCMOS with 4 MP (2048×2048) at 6.5 µm, 1.3 e- at 100 fps and >70% QE at 600 nm, claiming better SNR than EM-CCDs and first-gen sCMOS for fast low-light fluorescence; it became a microscopy best-seller.",
    [
     5
    ]
   ],
   [
    2012,
    "ver",
    "Andor 推出 Zyla：550 万像素前照式，200 MHz 下读出噪声 0.9 e-，QE 64%，把 sCMOS 读出噪声压到 1 e- 以下。",
    "Andor released the Zyla: 5.5 MP front-illuminated, 0.9 e- read noise at 200 MHz and 64% QE, pushing sCMOS read noise below 1 e-.",
    [
     0
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 6 月 13 日 Photometrics 发布 Prime 95B：首款背照式 sCMOS，传感器为 Gpixel GSENSE400BSI，11 µm 大像素、144 万像素，QE 95%，读出噪声 1.6 e-（中位值），灵敏度约为当时 sCMOS 的三倍。",
    "On 13 Jun 2016 Photometrics announced the Prime 95B, the first back-illuminated sCMOS camera, using the Gpixel GSENSE400BSI: 11 µm pixels, 1.44 MP, 95% QE and 1.6 e- median read noise, about three times as sensitive as the sCMOS of the day.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "Andor 推出背照式 Marana（420 万像素、1.6 e-、QE 95%），之后的 Sona、Balor 等型号把背照、大靶面推向天文与生命科学。",
    "Andor launched the back-illuminated Marana (4.2 MP, 1.6 e-, 95% QE), followed by models like Sona and Balor that took BSI and large formats into astronomy and life science.",
    [
     0
    ]
   ],
   [
    2021,
    "end",
    "2021 年 5 月 Hamamatsu 推出 qCMOS 相机 ORCA-Quest，读出噪声降到 0.27 e-，首次实现二维光子数分辨；在最弱光的量子与单分子应用中，sCMOS 开始被这种深亚电子级 CMOS 接替。",
    "In May 2021 Hamamatsu launched the qCMOS ORCA-Quest with 0.27 e- read noise, the first 2-D photon-number-resolving camera; for the faintest quantum and single-molecule work, sCMOS began handing over to such deep sub-electron CMOS.",
    [
     7
    ]
   ]
  ],
  "now": [
   "sCMOS 已取代 CCD 和大部分 EM-CCD，成为荧光显微、光片、超分辨和天文巡天的主流相机，背照式型号 QE 达 95%、读出噪声约 1 e- 甚至更低。",
   "sCMOS has displaced CCDs and most EM-CCDs as the mainstream camera for fluorescence, light-sheet, super-resolution and survey astronomy, with BSI models reaching 95% QE and around 1 e- read noise or lower."
  ],
  "replaced": [
   "在极弱光、需要数清光子的场合正被 qCMOS / QIS 等光子数分辨 CMOS 接替，常规科研成像仍以 sCMOS 为主。",
   "For the faintest photon-counting work it is giving way to photon-number-resolving CMOS such as qCMOS and QIS, while routine scientific imaging stays on sCMOS."
  ],
  "refs": [
   {
    "t": "Andor (Oxford Instruments): History of sCMOS cameras",
    "u": "https://andor.oxinst.com/learning/view/article/history-of-scmos-cameras"
   },
   {
    "t": "Laser Focus World: Commercial cooperation produces scientific CMOS imaging advance (2009)",
    "u": "https://www.laserfocusworld.com/biooptics/bioimaging/microscopy/article/14194007/commercial-cooperation-produces-scientific-cmos-imaging-advance"
   },
   {
    "t": "Fairchild Imaging: CIS2521 product brief",
    "u": "https://fairchildimaging.com/hubfs/Product%20Briefs/CIS2521_NOV2024_VF.pdf"
   },
   {
    "t": "Photonics.com: pco.edge camera system (2010)",
    "u": "https://www.photonics.com/Product.aspx?PRID=44272"
   },
   {
    "t": "BioSpace: Andor Technology launches Neo camera featuring sCMOS technology",
    "u": "https://www.biospace.com/andor-technology-launches-revolutionary-neo-camera-featuring-breakthrough-scmos-technology"
   },
   {
    "t": "Technology Networks: Hamamatsu introduces the ORCA-Flash4.0 sCMOS camera",
    "u": "https://www.technologynetworks.com/applied-sciences/product-news/hamamatsu-introduces-the-orcaflash40-scmos-camera-218502"
   },
   {
    "t": "Photonics Online: Photometrics launches next generation sCMOS camera with 95% QE (2016)",
    "u": "https://www.photonicsonline.com/doc/photometrics-launches-generation-scientific-camera-percent-quantum-efficiency-0001"
   },
   {
    "t": "Photonics Online: Hamamatsu introduces the world's first photon number resolving scientific camera (2021)",
    "u": "https://www.photonicsonline.com/doc/hamamatsu-introduces-the-world-s-first-photon-number-resolving-scientific-camera-with-incredibly-low-noise-and-megapixels-0001"
   }
  ]
 },
 "mono": {
  "stages": [
   [
    1996,
    "idea",
    "1996 年底到 1997 年初，英国的 Robert Dalby 与日本的岡野邦彦（Kunihiko Okano）各自发明 LRGB 合成：用高分辨率黑白（亮度）曝光加上低分辨率彩色数据，在天文 CCD 摄影中得到高信噪比的彩色图，这正是黑白 + 彩色融合的原理。",
    "In late 1996 to early 1997 Robert Dalby (UK) and Kunihiko Okano (Japan) independently invented LRGB compositing: a high-resolution monochrome luminance exposure plus lower-resolution color data gives high-SNR color images in CCD astrophotography, the very principle of mono + color fusion.",
    [
     0
    ]
   ],
   [
    1997,
    "corp",
    "Richard Berry 也在研究类似方法，1997 年 12 月推出第一款专门做 LRGB 合成的商业 CCD 软件 Q-Color；「L」最终被定为 Luminance。",
    "Richard Berry, working along similar lines, released Q-Color in Dec 1997, the first commercial CCD program for LRGB composites; the \"L\" was eventually standardized as Luminance.",
    [
     0
    ]
   ],
   [
    2016,
    "paper",
    "KAIST 的 Hae-Gon Jeon、Joon-Young Lee、In So Kweon 等在 CVPR 2016 发表彩色 + 黑白双摄弱光立体匹配：补偿两路的辐射差异、利用互补信息，为手机黑白彩色融合提供了算法基础。",
    "Hae-Gon Jeon, Joon-Young Lee, In So Kweon et al. (KAIST) presented stereo matching for color + monochrome camera pairs in low light at CVPR 2016, compensating radiometric differences and exploiting complementary data, an algorithmic basis for phone mono-color fusion.",
    [
     1
    ]
   ],
   [
    2016,
    "mass",
    "2016 年 4 月 6 日 Huawei 发布与 Leica 合作的 P9：两颗 1200 万像素、1.25 µm 传感器，一颗彩色一颗去掉 Bayer 滤色片的黑白，黑白负责细节、动态范围和低噪声，再与彩色图融合。",
    "On 6 Apr 2016 Huawei launched the Leica-co-engineered P9: two 12 MP, 1.25 µm sensors, one color and one monochrome without a Bayer filter; the mono sensor supplies detail, dynamic range and low noise, fused with the color image.",
    [
     2
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 9 月 14 日 Qualcomm 发布 Clear Sight：基于 Snapdragon 820/821 的 Spectra ISP，把彩色（类比视锥）+ 黑白（类比视杆）双摄融合做成参考方案，让更多厂商可以直接采用。",
    "On 14 Sept 2016 Qualcomm announced Clear Sight, a reference color (cone-like) + monochrome (rod-like) dual-camera fusion on the Spectra ISP of the Snapdragon 820/821, letting more OEMs adopt it directly.",
    [
     3
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 Hikvision 推出 DarkFighterX：双 1/2.8 英寸传感器，一颗收红外负责亮度、一颗收可见光负责色彩，双光谱融合后在 0.001 lux 下输出彩色画面，配 25 倍光学变焦。",
    "In 2017 Hikvision launched DarkFighterX: two 1/2.8-inch sensors, one capturing IR for brightness and one visible light for color, fused bi-spectrally to give color at 0.001 lux with 25× optical zoom.",
    [
     4
    ]
   ],
   [
    2018,
    "ver",
    "Huawei P20 Pro（2018）仍配 2000 万像素真黑白传感器，与 4000 万像素主摄、800 万长焦组成三摄，是黑白融合在手机上的高峰。",
    "The Huawei P20 Pro (2018) still carried a true 20 MP monochrome sensor alongside a 40 MP main and 8 MP telephoto, the peak of mono fusion in phones.",
    [
     5
    ]
   ],
   [
    2018,
    "end",
    "同年 10 月的 Mate 20 Pro 去掉黑白镜头换成 2000 万像素超广角，Huawei 表示用户更想要广角，黑白效果可以靠软件实现，黑白模式变成 Leica 滤镜。",
    "That October the Mate 20 Pro dropped the mono camera for a 20 MP ultra-wide; Huawei said users wanted wide-angle and mono could be done in software, so mono became a Leica filter.",
    [
     5
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 2 月 MWC 上 HMD 发布 Nokia 9 PureView：与 Zeiss、Light 合作的 5 颗 1200 万像素摄像头，2 颗 RGB + 3 颗黑白同时拍摄合成，号称动态范围 12.4 档，是多黑白融合的最后一次大尝试。",
    "At MWC in Feb 2019 HMD unveiled the Nokia 9 PureView: five 12 MP cameras co-designed with Zeiss and Light, two RGB plus three monochrome firing together for up to 12.4 stops of dynamic range, the last big bet on multi-mono fusion.",
    [
     6
    ]
   ],
   [
    2019,
    "rival",
    "2019 年 Huawei P30 Pro 改用 RYYB SuperSpectrum 传感器，把绿色滤光换成黄色，进光量提升约 40%，单颗传感器就拿回大部分黑白融合的弱光优势。",
    "The 2019 Huawei P30 Pro switched to the RYYB SuperSpectrum sensor, swapping green filters for yellow for about 40% more light, recovering most of the mono-fusion low-light gain with a single sensor.",
    [
     7
    ]
   ]
  ],
  "now": [
   "手机上的独立黑白摄像头基本消失，弱光改靠大底、RYYB / 四合一像素和多帧夜景算法；安防领域的红外黑白 + 可见光彩色双光谱融合仍在发展，天文摄影 LRGB 仍是标准流程。",
   "Dedicated mono cameras have essentially vanished from phones, replaced by large sensors, RYYB / quad-pixel binning and multi-frame night modes; IR-mono + visible-color bi-spectral fusion lives on in security, and LRGB remains standard in astrophotography."
  ],
  "replaced": [
   "在手机上被超广角模组、RYYB 等高透光滤色阵列和多帧降噪替代。",
   "In phones it was replaced by ultra-wide modules, higher-transmission CFAs such as RYYB, and multi-frame noise reduction."
  ],
  "refs": [
   {
    "t": "Wikipedia: LRGB",
    "u": "https://en.wikipedia.org/wiki/LRGB"
   },
   {
    "t": "Jeon et al.: Stereo Matching With Color and Monochrome Cameras in Low-Light Conditions (CVPR 2016)",
    "u": "https://openaccess.thecvf.com/content_cvpr_2016/html/Jeon_Stereo_Matching_With_CVPR_2016_paper.html"
   },
   {
    "t": "Engadget: Huawei's P9 flagship phone has a Leica-endorsed dual camera",
    "u": "https://www.engadget.com/2016-04-06-huawei-p9.html"
   },
   {
    "t": "Qualcomm: Take amazing photos with Qualcomm Clear Sight dual camera tech",
    "u": "https://www.qualcomm.com/news/onq/2016/09/take-amazing-photos-qualcomm-clear-sight-dual-camera-tech"
   },
   {
    "t": "Hikvision: Hikvision unveils the next level of surveillance - DarkFighterX (2017)",
    "u": "https://www.hikvision.com/en/newsroom/latest-news/2017/hikvision-unveils-the-next-level-of-surveillance---darkfighterx"
   },
   {
    "t": "Digital Trends: Huawei Mate 20 monochrome lens replaced by filter",
    "u": "https://www.digitaltrends.com/mobile/huawei-mate-20-monochrome-lens-replaced-by-filter/"
   },
   {
    "t": "GSMArena: Nokia 9 PureView goes official",
    "u": "https://www.gsmarena.com/nokia_9_pureview_goes_official_see_the_first_fivecamera_setup-news-35683.php"
   },
   {
    "t": "GSMArena: How the RYYB sensor on the Huawei P30 Pro works",
    "u": "https://www.gsmarena.com/how_the_ryyb_sensor_on_the_huawei_p30_pro_works-news-37007.php"
   }
  ]
 },
 "pnr": {
  "stages": [
   [
    2001,
    "rival",
    "Andor 2001 年推出 iXon，把 e2v 与 Texas Instruments（Hynecek 的 Impactron）的电子倍增 CCD（EMCCD）带进科研成像：靠片上雪崩增益把读出噪声等效压到亚电子，可做光子计数，但有倍增噪声因子，需深度制冷。",
    "Andor's iXon (2001) brought electron-multiplying CCDs from e2v and Texas Instruments (Hynecek's Impactron) to scientific imaging: on-chip avalanche gain makes read noise effectively sub-electron for photon counting, at the cost of an excess noise factor and deep cooling.",
    [
     0
    ]
   ],
   [
    2005,
    "idea",
    "Eric Fossum 在日本轻井泽 IEEE CCD 与先进图像传感器研讨会上发表《What to do with sub-diffraction-limit pixels?》，提出由海量亚衍射极限「jot」组成、模仿银盐胶片的十亿像素数字胶片传感器，即后来的量子图像传感器 QIS（构想于 2004 年）。",
    "At the IEEE Workshop on CCDs and Advanced Image Sensors in Karuizawa, Eric Fossum presented \"What to do with sub-diffraction-limit pixels?\", proposing a gigapixel digital film sensor of tiny binary \"jots\" emulating silver-halide film, later named the Quanta Image Sensor (QIS; conceived in 2004).",
    [
     1
    ]
   ],
   [
    2015,
    "paper",
    "静冈大学的 Min-Woong Seo、川人祥二（Shoji Kawahito）等在 IEEE Electron Device Letters 发表无复位栅 CMOS 传感器：0.11 µm CIS 工艺、转换增益 220 µV/e-，配合相关多次采样，读出噪声 0.27 e- rms，可做光电子计数级成像。",
    "Min-Woong Seo, Shoji Kawahito et al. at Shizuoka University reported a reset-gate-less CMOS sensor in IEEE Electron Device Letters: 0.11 µm CIS process, 220 µV/e- conversion gain and correlated multiple sampling for 0.27 e- rms read noise, enough for photoelectron-counting imaging.",
    [
     2
    ]
   ],
   [
    2017,
    "proto",
    "Dartmouth 的 Jiaju Ma、Saleh Masoodian、Dakota Starkey、Eric Fossum 在 Optica 发表室温、无雪崩增益的百万像素光子数分辨传感器：1.1 µm jot，平均读出噪声 <0.3 e-，1040 帧/秒。",
    "Jiaju Ma, Saleh Masoodian, Dakota Starkey and Eric Fossum at Dartmouth published in Optica a room-temperature megapixel photon-number-resolving sensor without avalanche gain: 1.1 µm jots, average read noise <0.3 e-, 1040 fps.",
    [
     3
    ]
   ],
   [
    2017,
    "corp",
    "Masoodian、Ma 与 Fossum 共同创立 Gigajot Technology，把 QIS 推向商用。",
    "Masoodian, Ma and Fossum co-founded Gigajot Technology to commercialize the QIS.",
    [
     3
    ]
   ],
   [
    2020,
    "rival",
    "2020 年 6 月 Canon 宣布世界首个 100 万像素 SPAD 传感器，用雪崩二极管逐个数光子；2021 年 12 月又发布 320 万像素 SPAD，2022 年下半年量产，是另一条光子计数路线。",
    "In Jun 2020 Canon announced the first 1 MP SPAD sensor, counting photons with avalanche diodes; in Dec 2021 it followed with a 3.2 MP SPAD entering production in the second half of 2022, a rival photon-counting route.",
    [
     4
    ]
   ],
   [
    2021,
    "mass",
    "Hamamatsu 2021 年 5 月 10 日发布 qCMOS 相机 ORCA-Quest（C15550-20UP），5 月 20 日开售：自研背照 CMOS，0.27 e- rms，940 万像素（4096×2304）、4.6 µm，号称世界首台二维光子数分辨相机，面向离子阱、中性原子量子计算与天文。",
    "Hamamatsu announced the qCMOS ORCA-Quest (C15550-20UP) on 10 May 2021, on sale 20 May: an in-house BSI CMOS with 0.27 e- rms, 9.4 MP (4096×2304) at 4.6 µm, billed as the first 2-D photon-number-resolving camera, aimed at trapped-ion and neutral-atom quantum computing and astronomy.",
    [
     5
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 5 月 18 日 Gigajot 推出号称首批商用的 QIS 传感器：1600 万像素、1.1 µm 的 GJ01611 读出噪声 0.19 e-，400 万像素、2.2 µm 的 GJ00422 读出噪声 0.27 e-、单次曝光动态范围 100 dB，均在室温工作。",
    "On 18 May 2021 Gigajot unveiled what it called the first commercial QIS sensors: the 16 MP, 1.1 µm GJ01611 at 0.19 e- read noise and the 4 MP, 2.2 µm GJ00422 at 0.27 e- with 100 dB single-exposure dynamic range, both at room temperature.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 4 月 Gigajot 发布 4100 万像素 QIS 传感器 GJ041222 及 QIS41 相机：2.2 µm 像素、读出噪声 0.35 e-、单次曝光动态范围 95 dB，室温下光子计数与光子数分辨，号称分辨率最高的光子计数传感器，2022 年第四季度交付。",
    "In Apr 2022 Gigajot announced the 41 MP GJ041222 QIS sensor and QIS41 camera: 2.2 µm pixels, 0.35 e- read noise and 95 dB single-exposure dynamic range for room-temperature photon counting and number resolving, billed as the highest-resolution photon-counting sensor, shipping Q4 2022.",
    [
     7
    ]
   ]
  ],
  "now": [
   "深亚电子 CMOS 已商用：Hamamatsu 2024 年的 ORCA-Quest 2 在 0.30 e- 下全幅 25 帧/秒光子数分辨，Gigajot 提供多款 QIS 传感器与相机，主要用于量子计算读出、天文、单分子和弱光工业检测。",
   "Deep sub-electron CMOS is commercial: Hamamatsu's 2024 ORCA-Quest 2 resolves photon numbers at 0.30 e- and 25 fps full frame, and Gigajot sells several QIS sensors and cameras, mainly for quantum-computing readout, astronomy, single-molecule and low-light inspection."
  ],
  "replaced": [
   "尚未被替代；它正在取代 EM-CCD，并与 SPAD 阵列竞争：SPAD 时间分辨率高但像素大、填充率低，QIS/qCMOS 像素小、噪声低但帧率受限。",
   "Not replaced; it is displacing EM-CCDs and competes with SPAD arrays: SPADs offer timing resolution but larger pixels and lower fill factor, while QIS/qCMOS give small, low-noise pixels at limited frame rates."
  ],
  "refs": [
   {
    "t": "Andor: 10 things you did not know about EMCCD cameras",
    "u": "https://andor.oxinst.com/learning/view/article/10-things-you-did-not-know-about-emccd-cameras"
   },
   {
    "t": "Fossum: What to do with sub-diffraction-limit (SDL) pixels? (2005)",
    "u": "https://www.ericfossum.com/Publications/Papers/What%20To%20Do%20With%20SubDiffractionLimit%20Pixels.pdf"
   },
   {
    "t": "Image Sensors World: 0.27e- rms read noise sensor paper (2015)",
    "u": "https://image-sensors-world.blogspot.com/2015/11/027e-rms-read-noise-sensor-paper.html"
   },
   {
    "t": "Dartmouth Engineering: Dartmouth engineers produce breakthrough imaging sensor (2017)",
    "u": "https://engineering.dartmouth.edu/news/dartmouth-engineers-produce-breakthrough-imaging-sensor"
   },
   {
    "t": "Canon: world's first 1-megapixel SPAD image sensor (2020)",
    "u": "https://global.canon/en/news/2020/20200624.html"
   },
   {
    "t": "Hamamatsu news release: ORCA-Quest qCMOS camera (2021-05-10)",
    "u": "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/01_HQ/01_news/01_news_2021/2021_05_10_en.pdf"
   },
   {
    "t": "PR Newswire: Gigajot unveils world's first commercially available Quanta Image Sensors (2021)",
    "u": "https://prnewswire.com/news-releases/gigajot-unveils-worlds-first-commercially-available-quanta-image-sensors-301293648.html"
   },
   {
    "t": "PR Newswire: Gigajot announces the world's highest resolution photon counting sensor (2022)",
    "u": "https://prnewswire.com/news-releases/gigajot-announces-the-worlds-highest-resolution-photon-counting-sensor-301516410.html"
   }
  ]
 },
 "bsi": {
  "stages": [
   [
    1974,
    "idea",
    "Texas Instruments 的 Shortes 等人在 Applied Physics Letters 发表减薄背照 CCD：把 500×1 线阵 CCD 磨到 30 µm 以下，光从背面进、绕开多晶硅栅极。",
    "Shortes et al. at Texas Instruments reported thinned back-illuminated CCD imagers in Applied Physics Letters: a 500x1 CCD thinned below 30 um, lit from the back to avoid the poly gates.",
    [
     0
    ]
   ],
   [
    1990,
    "ver",
    "（约）1990 年代起，SITe / Tektronix、e2v 等的减薄背照 CCD 成为天文和科学相机标配，量子效率可达 90% 左右，代价是工艺难、良率低、价格高。",
    "(approx.) From the 1990s thinned back-illuminated CCDs from SITe/Tektronix, e2v and others became standard in astronomy and scientific cameras, reaching around 90% QE at the cost of hard processing, low yield and high price.",
    [
     0
    ]
   ],
   [
    2005,
    "proto",
    "MIT Lincoln Laboratory 在 ISSCC 2005 展示 1024×1024、8 µm 像素的 3D 集成背照成像器：全填充因子光电二极管层键合到 SOI CMOS 读出层。",
    "MIT Lincoln Laboratory showed a 1024x1024, 8 um pixel 3D-integrated back-illuminated imager at ISSCC 2005, bonding a 100% fill-factor photodiode tier to an SOI CMOS readout tier.",
    [
     1
    ]
   ],
   [
    2006,
    "paper",
    "Sony 的 Iwabuchi 等人在 ISSCC 2006 发表《A back-illuminated high-sensitivity small-pixel color CMOS image sensor with flexible layout of metal wiring》，把背照搬到彩色小像素 CMOS 上。",
    "Iwabuchi et al. (Sony) presented a back-illuminated high-sensitivity small-pixel color CMOS image sensor with flexible metal wiring layout at ISSCC 2006, bringing BSI to small-pixel color CMOS.",
    [
     2
    ]
   ],
   [
    2008,
    "corp",
    "2008 年 5 月 OmniVision 联合 TSMC 发布 OmniBSI 架构，9 月推出 1/3 英寸 8 MP、1.4 µm 的 OV8810；6 月 Sony 发布 Exmor R 技术，样片为 5 MP、1.75 µm、60 fps。",
    "In May 2008 OmniVision, with TSMC, launched the OmniBSI architecture and in September the 1/3-inch 8 MP 1.4 um OV8810; in June 2008 Sony unveiled Exmor R with a 5 MP 1.75 um 60 fps prototype.",
    [
     3,
     4,
     5
    ]
   ],
   [
    2009,
    "mass",
    "Sony 把 Exmor R 背照 CMOS 首先装进 2009 年的 Handycam 摄像机（HDR-XR520V / CX520V 等），同年进入 Cyber-shot 卡片机，成为首个量产消费级背照 CMOS。",
    "Sony first shipped Exmor R BSI CMOS in its 2009 Handycam camcorders (HDR-XR520V / CX520V etc.) and Cyber-shot compacts the same year, the first mass-produced consumer BSI CMOS.",
    [
     5,
     6
    ]
   ],
   [
    2010,
    "ver",
    "背照进入手机：iPhone 4 主摄采用 OmniVision 5 MP 背照传感器（OV5650，约），之后 1.4 µm 及以下手机像素几乎全部转向 BSI。",
    "BSI reached phones: the iPhone 4 main camera used a 5 MP OmniVision BSI sensor (OV5650, approx.), and soon nearly all phone pixels at 1.4 um and below moved to BSI.",
    [
     3
    ]
   ],
   [
    2010,
    "rival",
    "当时的竞争方案是前照式 FSI 加光导管（light pipe）和更薄金属层，大像素（如 APS-C / 全画幅）仍坚持 FSI 多年，因为大像素背照收益小、成本高。",
    "The competing approach was front-side illumination with light pipes and thinner metal stacks; large-pixel APS-C and full-frame sensors stayed FSI for years because BSI gave little gain there at higher cost.",
    [
     2
    ]
   ],
   [
    2013,
    "ver",
    "背照成为堆栈式的前提：Sony Exmor RS 把背照像素晶圆直接键合到逻辑晶圆上，背照从工艺选项变成标准底座。",
    "BSI became the foundation for stacking: Sony Exmor RS bonded the BSI pixel wafer directly onto a logic wafer, turning BSI from an option into the default base.",
    [
     7
    ]
   ],
   [
    2015,
    "ver",
    "Sony α7R II 搭载全球首款背照 35 mm 全画幅传感器（42.4 MP），同年 STARVIS（IMX290 / 291）把背照带进安防监控。",
    "The Sony a7R II carried the first back-illuminated 35 mm full-frame sensor (42.4 MP), and the same year STARVIS (IMX290/291) brought BSI to security cameras.",
    [
     8
    ]
   ],
   [
    2021,
    "ver",
    "背照与堆栈、Cu-Cu、DTI 叠加成为手机、相机、车载、工业传感器的通用结构；Sony 2-Layer Transistor Pixel 进一步把光电二极管与像素晶体管分层。",
    "BSI combined with stacking, Cu-Cu and DTI became the universal structure for phone, camera, auto and industrial sensors; Sony's 2-Layer Transistor Pixel further split photodiodes from pixel transistors.",
    [
     9
    ]
   ]
  ],
  "now": [
   "绝对主流：几乎所有手机、无反相机、安防和车载 CMOS 都是背照，例如 Sony IMX / LYTIA、Samsung ISOCELL、OmniVision OmniBSI 系列。",
   "Dominant: almost every phone, mirrorless, security and automotive CMOS is back-illuminated, e.g. Sony IMX/LYTIA, Samsung ISOCELL and OmniVision OmniBSI families."
  ],
  "replaced": [
   "没有被替代，而是被吸收进堆栈式结构；后续演进方向是多层像素（2-Layer Transistor Pixel）和背面光学结构（DTI、超构表面）。",
   "Not replaced but absorbed into stacked sensors; next steps are multi-layer pixels (2-Layer Transistor Pixel) and back-side optics (DTI, metasurfaces)."
  ],
  "refs": [
   {
    "t": "Shortes 1974 背照 CCD（APL）",
    "u": "https://ui.adsabs.harvard.edu/abs/1974ApPhL..24..565S/abstract"
   },
   {
    "t": "MIT LL ISSCC 2005 3D 集成成像器",
    "u": "https://www.ll.mit.edu/r-d/publications/megapixel-cmos-image-sensor-fabricated-three-dimensional-integrated-circuit"
   },
   {
    "t": "Iwabuchi ISSCC 2006（dblp）",
    "u": "https://dblp1.uni-trier.de/rec/conf/isscc/IwabuchiMOMKH06.html"
   },
   {
    "t": "OmniVision OmniBSI 发布新闻稿",
    "u": "https://www.ovt.com/press-releases/omnivision-turns-digital-imaging-world-upside-down/"
   },
   {
    "t": "OmniVision OV8810 新闻稿",
    "u": "https://www.ovt.com/press-releases/omnivision-premieres-worlds-first-1-3-inch-8-megapixel-camerachip-sensor-with-1-4-micron-omnibsi-technology/"
   },
   {
    "t": "Sony Exmor R 2008 发布（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2008/06/sony-announced-175um-bsi-pixel.html"
   },
   {
    "t": "Sony 2009 背照卡片机（phys.org）",
    "u": "https://phys.org/news/2009-08-sony-debuts-digital-camera-back-illuminated.pdf"
   },
   {
    "t": "Sukegawa ISSCC 2013 堆栈式（ITE 报告）",
    "u": "https://www.jstage.jst.go.jp/article/itetr/37.19/0/37.19_31/_article/-char/en"
   },
   {
    "t": "Sony α7R II 新闻稿",
    "u": "https://sony.mediaroom.com/2015-06-10-Sonys-New-a7R-II-Camera-Delivers-Innovative-Imaging-Experience-with-Worlds-First-Back-Illuminated-35mm-Full-Frame-Sensor"
   },
   {
    "t": "Sony 2-Layer Transistor Pixel 新闻稿",
    "u": "https://www.sony.eu/presscentre/sony-develops-worlds-first-stacked-cmos-image-sensor-technology-with-2-layer-transistor-pixel"
   }
  ]
 },
 "dcg": {
  "stages": [
   [
    2003,
    "idea",
    "Micron 的 Howard Rhodes 与 Sungkwon Hong 申请双转换增益专利：浮动扩散节点上用晶体管接入一个电容，在高、低两档转换增益间切换（2006 年授权，后归 Aptina）。",
    "Micron's Howard Rhodes and Sungkwon Hong filed the dual-conversion-gain patent: a transistor switches a capacitor onto the floating diffusion to toggle between high and low conversion gain (granted 2006, later assigned to Aptina).",
    [
     0
    ]
   ],
   [
    2009,
    "corp",
    "Aptina 发布安防用 MT9M033 高清传感器，宣传采用其专利双转换增益技术（约）。",
    "Aptina announced the MT9M033 HD sensor for surveillance, marketed with its patented dual conversion gain (approx.).",
    [
     1
    ]
   ],
   [
    2010,
    "mass",
    "Aptina 推出 DR-Pix：同一像素在 LCG 模式下大满阱、HCG 模式下低读出噪声；车载 MT9M024（120 万像素、HDR 超过 115 dB）2010 年 11 月发布，2011 年第三季度量产。",
    "Aptina launched DR-Pix: LCG mode for large charge capacity and HCG mode for low read noise in the same pixel; the automotive MT9M024 (1.2 MP, over 115 dB HDR) was announced in November 2010 for production in Q3 2011.",
    [
     2,
     3
    ]
   ],
   [
    2010,
    "rival",
    "同期另一条路是列级双增益读出，例如 ARRI Alexa 的双增益架构，把同一信号用两个放大器读两遍，不改像素（约）。",
    "A parallel route was column-level dual-gain readout, such as ARRI Alexa's dual gain architecture, reading the same signal through two amplifiers without changing the pixel (approx.).",
    []
   ],
   [
    2014,
    "ver",
    "Panasonic VariCam 35 把 DCG 做成电影机的双原生 ISO 800 / 5000，每个像素内置 ISO 切换电路，此后成为电影机和无反相机的常见卖点。",
    "Panasonic's VariCam 35 turned DCG into dual native ISO 800 / 5000 for cinema, with an ISO switch in every pixel; it then became a common selling point for cinema and mirrorless cameras.",
    [
     4
    ]
   ],
   [
    2019,
    "ver",
    "Samsung ISOCELL Bright GW1（6400 万像素）带 Smart-ISO 双转换增益，按场景亮度在两档原生 ISO 间切换，下半年用于 Redmi Note 8 Pro 等手机（场景间切换，不是同帧 HDR）。",
    "Samsung's 64 MP ISOCELL Bright GW1 shipped Smart-ISO dual conversion gain, switching between two native ISOs by scene brightness, in phones such as the Redmi Note 8 Pro in 2H 2019 (inter-scene, not same-frame HDR).",
    [
     5
    ]
   ],
   [
    2019,
    "paper",
    "OmniVision 的 Solhusvik 等在 IISW 2019 发表首个把分裂二极管与 DCG 读出合在一起的 2.8 µm 像素：大光电二极管分别以 HCG、LCG 读出，加小光电二极管，共三路采样，噪声底 0.8 e-，同时做 HDR 和 LED 防闪烁。",
    "OmniVision's Solhusvik et al. presented at IISW 2019 the first 2.8 µm pixel combining split diode with DCG readout: the large photodiode read at both HCG and LCG plus the small photodiode, three captures, 0.8 e- noise floor, giving HDR with LED flicker mitigation.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "OmniVision OX03C10 把 Deep Well、DCG 与分裂像素合在 3.0 µm 像素上，四路采样实现 140 dB HDR 和 LED 防闪烁，用于车载环视。",
    "OmniVision's OX03C10 combined Deep Well, DCG and split pixel in a 3.0 µm pixel, with four captures for 140 dB HDR and LED flicker mitigation in automotive viewing cameras.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "Samsung ISOCELL GN2（5000 万像素、1.4 µm）带 Smart ISO Pro，即同帧双转换增益 iDCG：一次曝光同时读出高、低两档增益合成 HDR。",
    "Samsung's ISOCELL GN2 (50 MP, 1.4 µm) introduced Smart ISO Pro, an intra-scene DCG that reads high and low gain from the same exposure and merges them into HDR.",
    [
     8
    ]
   ],
   [
    2023,
    "rival",
    "LOFIC 开始量产：OmniVision TheiaCel 在 DCG 之上再加横向溢出电容，单次曝光动态范围超过单纯 DCG，二者多为叠加而非替代。",
    "LOFIC entered production: OmniVision's TheiaCel adds a lateral overflow capacitor on top of DCG, reaching wider single-exposure range than DCG alone; the two are mostly stacked rather than substituted.",
    [
     9
    ]
   ],
   [
    2026,
    "ver",
    "Sony LYTIA L910 采用三档转换增益 TCG-HDR，配合 LOFIC 单次曝光 100 dB，DCG 从两档扩展到三档。",
    "Sony's LYTIA L910 uses triple-conversion-gain TCG-HDR with LOFIC for 100 dB single exposure, extending DCG from two steps to three.",
    [
     10
    ]
   ]
  ],
  "now": [
   "主流：几乎所有新款手机、车载、安防和相机传感器都内置 DCG，代表有 ISOCELL GN2、OX03C10 和各类双原生 ISO 相机。",
   "Mainstream: almost every new phone, automotive, security and camera sensor has DCG, e.g. ISOCELL GN2, OX03C10 and dual-native-ISO cameras."
  ],
  "replaced": [
   "不会被单独替代，而是被叠加：三档转换增益 TCG 和 LOFIC 在它之上继续扩展动态范围。",
   "Not replaced so much as built upon: triple conversion gain and LOFIC extend dynamic range on top of it."
  ],
  "refs": [
   {
    "t": "Micron 双转换增益专利 US7075049",
    "u": "https://patents.google.com/patent/US7075049"
   },
   {
    "t": "Aptina MT9M033（Design News）",
    "u": "https://www.designnews.com/industry/aptina-imaging-corp-s-mt9m033"
   },
   {
    "t": "Aptina DR-Pix 白皮书",
    "u": "https://www.photonstophotos.net/Aptina/DR-Pix_WhitePaper.pdf"
   },
   {
    "t": "Aptina 车载 115 dB HDR 传感器发布（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2010/11/aptina-announces-12mp-115db-hdr.html"
   },
   {
    "t": "VariCam 35 双原生 ISO 原理（Newsshooter）",
    "u": "https://www.newsshooter.com/2014/11/28/panasonic-varicam-native-iso-of-800-and-5000-how-do-they-do-it/"
   },
   {
    "t": "Samsung ISOCELL Bright GW1 发布",
    "u": "https://news.samsung.com/global/samsung-to-bring-industrys-highest-resolution-for-mobile-cameras-with-new-64mp-isocell-image-sensor"
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
    "t": "Samsung ISOCELL GN2 发布",
    "u": "https://news.samsung.com/us/samsung-introduces-isocell-gn2-faster-true-to-life-auto-focusing/"
   },
   {
    "t": "OmniVision TheiaCel 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-technology-and-automotive-image-sensor-for-led-flicker-free-exterior-cameras/"
   },
   {
    "t": "Sony LYTIA L910 TCG-HDR（PetaPixel）",
    "u": "https://petapixel.com/2026/06/22/sonys-first-lofic-image-sensor-promises-nearly-17-stops-of-dynamic-range/"
   }
  ]
 },
 "dti": {
  "stages": [
   [
    1985,
    "idea",
    "（约）深沟槽隔离（trench isolation）最早来自 1980 年代的 DRAM 沟槽电容与双极 / CMOS 器件隔离，后被借用到像素间做电学和光学隔离。",
    "(approx.) Deep trench isolation originated in 1980s DRAM trench capacitors and bipolar/CMOS device isolation, later borrowed to isolate pixels electrically and optically.",
    [
     0
    ]
   ],
   [
    2010,
    "proto",
    "TechInsights 报告最早在 STMicroelectronics 的 5 MP、1.4 µm 背照芯片中发现 DTI，采用 SOI 晶圆上从正面挖的 F-DTI（TechInsights 文中年份与所称产品有出入，为约）。",
    "TechInsights reports the first DTI in back-illuminated CIS in a STMicroelectronics 5 MP 1.4 um chip, a front-side F-DTI on SOI wafers (the year and product named in that text conflict, approx.).",
    [
     1
    ]
   ],
   [
    2011,
    "paper",
    "STMicroelectronics 的 Tournier 等人在 IISW 2011 发表《Pixel-to-pixel isolation by deep trench technology: application to CMOS image sensor》。",
    "Tournier et al. (STMicroelectronics) presented Pixel-to-pixel isolation by deep trench technology: application to CMOS image sensor at IISW 2011.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 9 月 Samsung 发布 ISOCELL 像素技术，在像素间加物理隔离墙，首款 S5K4H5YB（8 MP、1.12 µm、1/4 英寸）计划 2013 年第四季度量产。",
    "In September 2013 Samsung announced ISOCELL pixel technology with physical barriers between pixels; the first chip S5K4H5YB (8 MP, 1.12 um, 1/4-inch) was slated for Q4 2013 mass production.",
    [
     3,
     4
    ]
   ],
   [
    2013,
    "rival",
    "同年 Sony 在 Cyber-shot HX300 的 IMX147（20 MP、1.2 µm）里用了浅的 B-DTI：从背面挖约 0.3 µm、填钨；另一条路线是靠离子注入隔离和背面金属格栅防串色。",
    "The same year Sony used a shallow B-DTI in the IMX147 (20 MP, 1.2 um) of the Cyber-shot HX300, about 0.3 um deep from the back and tungsten-filled; the other route relied on implant isolation and back-side metal grids.",
    [
     1
    ]
   ],
   [
    2015,
    "ver",
    "Sony 改用更深、介质填充的 B-DTI；Samsung 1.12 µm 芯片出现 1.3 µm 深的 B-DTI（硅厚 2.6 µm）；Galaxy S7 的 IMX260 B-DTI 约 1.9 µm 深。",
    "Sony moved to deeper dielectric-filled B-DTI; Samsung 1.12 um chips showed 1.3 um deep B-DTI in 2.6 um silicon; the IMX260 in the Galaxy S7 had about 1.9 um deep B-DTI.",
    [
     1
    ]
   ],
   [
    2016,
    "ver",
    "Samsung 在 1.0 µm 像素（如 Galaxy A8 的 S5K3P3SX）采用全深度 F-DTI；OmniVision PureCel Plus-S（OV16880，TSMC 代工）用 0.45 µm 深、填钨的局部 B-DTI。",
    "Samsung used full-depth F-DTI for 1.0 um pixels (e.g. S5K3P3SX in the Galaxy A8); OmniVision PureCel Plus-S (OV16880, made by TSMC) used a 0.45 um deep tungsten-filled partial B-DTI.",
    [
     1
    ]
   ],
   [
    2017,
    "ver",
    "OmniVision Nyxel（首款 OS05A20）把 DTI 与厚硅结合，提高 850 / 940 nm 近红外量子效率，面向安防和车载夜视。",
    "OmniVision Nyxel (first chip OS05A20) combined DTI with thick silicon to raise 850/940 nm near-infrared QE for security and automotive night vision.",
    [
     5
    ]
   ],
   [
    2018,
    "ver",
    "Samsung ISOCELL Plus 用 Fujifilm 开发的新材料取代像素间的金属隔离墙，减少光学损耗与反射，感光度提升约 15%。",
    "Samsung ISOCELL Plus replaced the metal barrier between pixels with a new Fujifilm-developed material, cutting optical loss and reflection for about 15% more sensitivity.",
    [
     6
    ]
   ],
   [
    2021,
    "ver",
    "（约）0.7 µm 以下像素普遍采用全深度 F-DTI 加多晶硅填充与偏置，Samsung ISOCELL 2.0 和 0.56 µm 像素、Sony / OmniVision 小像素都依赖它。",
    "(approx.) Sub-0.7 um pixels widely use full-depth F-DTI with poly fill and bias; Samsung ISOCELL 2.0, 0.56 um pixels and Sony/OmniVision small pixels all depend on it.",
    [
     7
    ]
   ]
  ],
  "now": [
   "主流：1.4 µm 以下手机像素和近红外安防 / 车载传感器几乎都用 DTI（B-DTI 或全深度 F-DTI），代表有 Samsung ISOCELL、OmniVision Nyxel。",
   "Mainstream: nearly all phone pixels below 1.4 um and NIR security/automotive sensors use DTI (B-DTI or full-depth F-DTI), e.g. Samsung ISOCELL and OmniVision Nyxel."
  ],
  "replaced": [
   "仍是缩像素的必要条件；演进方向是更深更窄的全深度 DTI、像素内分隔（双像素 / 四像素 PDAF）以及配合超构表面的光学隔离。",
   "Still essential for pixel shrink; it is evolving toward deeper and narrower full-depth DTI, in-pixel isolation for dual/quad PDAF, and optical isolation combined with metasurfaces."
  ],
  "refs": [
   {
    "t": "深沟槽隔离像素专利示例",
    "u": "https://patents.google.com/patent/US7534691"
   },
   {
    "t": "TechInsights 手机成像技术综述 第 3 部分（像素）",
    "u": "https://www.techinsights.com/blog/survey-enabling-technologies-successful-consumer-digital-imaging-products-part-3-pixel"
   },
   {
    "t": "IISW 2011 会议程序",
    "u": "https://imagesensors.org/Past%20Workshops/2011%20Workshop/2011%20IISW%20Final%20Program.pdf"
   },
   {
    "t": "Samsung ISOCELL 发布新闻稿",
    "u": "https://news.samsung.com/global/samsung-launches-isocell-innovative-image-sensor-technology-for-premium-mobile-devices"
   },
   {
    "t": "Samsung 公布 ISOCELL 像素（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2013/09/samsung-announces-isocell-pixel.html"
   },
   {
    "t": "OmniVision Nyxel 技术页",
    "u": "https://www.ovt.com/technologies/nyxel-technology/"
   },
   {
    "t": "Samsung ISOCELL Plus 新闻稿",
    "u": "https://news.samsung.com/global/samsung-brings-enhanced-color-accuracy-and-sharpness-to-mobile-photos-with-new-isocell-plus-technology"
   },
   {
    "t": "手机 CIS 工艺综述（arXiv 2306.05339）",
    "u": "https://arxiv.org/pdf/2306.05339"
   }
  ]
 },
 "spad": {
  "stages": [
   [
    1980,
    "idea",
    "（约）1960 至 1980 年代，Haitz、McIntyre 等研究盖革模式雪崩二极管，Politecnico di Milano 的 Cova 团队发展主动淬灭电路，奠定 SPAD 单光子计数原理。",
    "(approx.) From the 1960s to 1980s Haitz, McIntyre and others studied Geiger-mode avalanche diodes, and Cova's group at Politecnico di Milano developed active quenching, establishing SPAD photon counting.",
    [
     0
    ]
   ],
   [
    2003,
    "proto",
    "EPFL 的 Rochas 等在工业 CMOS 高压工艺里做出 SPAD，并集成 4×8 SPAD 阵列，证明 SPAD 可以和标准 CMOS 电路同片。",
    "Rochas et al. at EPFL built SPADs in an industrial high-voltage CMOS process and integrated a 4x8 array, showing SPADs can share a die with standard CMOS circuits.",
    [
     1
    ]
   ],
   [
    2005,
    "paper",
    "Niclass、Charbon 等在 JSSC 发表基于 SPAD 的 CMOS 3D 图像传感器（32×32 阵列，约），开启 SPAD 飞行时间成像研究。",
    "Niclass, Charbon et al. published a SPAD-based CMOS 3D image sensor in JSSC (32x32 array, approx.), launching SPAD time-of-flight imaging research.",
    [
     1,
     2
    ]
   ],
   [
    2013,
    "corp",
    "ST 推出 FlightSense VL6180X：SPAD 阵列 + VCSEL + 环境光传感器一体，称首个 ToF 接近传感器。",
    "ST launched the FlightSense VL6180X, integrating a SPAD array, VCSEL emitter and ambient light sensor, billed as the first ToF proximity sensor.",
    [
     3
    ]
   ],
   [
    2014,
    "mass",
    "LG G3 用 ST FlightSense 做激光对焦，SPAD 测距首次进入量产手机。",
    "The LG G3 used ST FlightSense for laser AF, the first mass-market phone with SPAD ranging.",
    [
     3
    ]
   ],
   [
    2020,
    "proto",
    "EPFL 与 Canon 发表 1 MP SPAD 相机 MegaX；Canon 同年宣布首个百万像素 SPAD 图像传感器。",
    "EPFL and Canon presented MegaX, a 1 MP SPAD camera; Canon announced the first megapixel SPAD image sensor the same year.",
    [
     4
    ]
   ],
   [
    2020,
    "mass",
    "iPad Pro 与 iPhone 12 Pro 的 LiDAR 用 Sony 首款背照堆栈 SPAD 阵列 dToF 传感器，TechInsights 拆解确认。",
    "The LiDAR in iPad Pro and iPhone 12 Pro used Sony's first back-illuminated stacked SPAD-array dToF sensor, confirmed by TechInsights teardown.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Canon 在 IEDM 2021 发表 3.2 MP 3D 堆栈电荷聚焦 SPAD，940 nm PDE 24.4%，时间抖动低于 100 ps。",
    "Canon presented a 3.2 MP 3D-stacked charge-focusing SPAD at IEDM 2021, with 24.4% PDE at 940 nm and sub-100 ps jitter.",
    [
     6
    ]
   ],
   [
    2022,
    "mass",
    "Sony IMX459 车载 SPAD 开始出样（2021 年 9 月发布，2022 年 3 月样品）：10 μm 像素、约 10 万像素、905 nm PDE 24%、最远 300 m、15 cm 分辨率。",
    "Sony IMX459 automotive SPAD sampled (announced Sept 2021, samples Mar 2022): 10 um pixels, about 100k pixels, 24% PDE at 905 nm, up to 300 m at 15 cm resolution.",
    [
     7
    ]
   ],
   [
    2023,
    "mass",
    "Canon MS-500 发售：1 英寸 3.2 MP SPAD 可换镜监控相机，用于港口、边境等极暗环境的彩色成像。",
    "Canon MS-500 launched: an interchangeable-lens surveillance camera with a 1-inch 3.2 MP SPAD sensor for color imaging in very dark ports and borders.",
    [
     8
    ]
   ],
   [
    2023,
    "rival",
    "（约）对手包括 iToF（Sony DepthSense、Infineon REAL3）、SiPM 与 APD 线阵 LiDAR、FMCW 相干 LiDAR；成像方面则是大像素 CMOS 和 EMCCD。",
    "(approx.) Rivals include iToF (Sony DepthSense, Infineon REAL3), SiPM and APD LiDAR, FMCW coherent LiDAR, and for imaging large-pixel CMOS and EMCCD.",
    [
     0
    ]
   ]
  ],
  "now": [
   "测距方面已主流（手机接近与激光对焦、iPhone LiDAR、车载 LiDAR）；作为成像传感器仍属小众（Canon MS-500）。",
   "Mainstream for ranging (phone proximity and laser AF, iPhone LiDAR, automotive LiDAR); still niche as an imaging sensor (Canon MS-500)."
  ],
  "replaced": [
   "仍在上升期；车载方向与 FMCW LiDAR 竞争，成像方向可能与 QIS 等超低噪声 CMOS 争夺弱光市场。",
   "Still rising; in automotive it competes with FMCW LiDAR, and in imaging it may vie with QIS and other deep-sub-electron-noise CMOS for low light."
  ],
  "refs": [
   {
    "t": "SPAD 原理与历史（维基）",
    "u": "https://en.wikipedia.org/wiki/Single-photon_avalanche_diode"
   },
   {
    "t": "CMOS 集成 SPAD 阵列（SPIE）",
    "u": "https://spie.org/news/3182-cmos-integration-enables-massively-parallel-single-photon-detection"
   },
   {
    "t": "Niclass ISSCC 2004 论文（EPFL）",
    "u": "https://infoscience.epfl.ch/record/82270/files/ISSCC%2704.pdf?version=1"
   },
   {
    "t": "ST VL6180 FlightSense",
    "u": "https://www.st.com/en/imaging-and-photonics-solutions/vl6180.html"
   },
   {
    "t": "Canon 百万像素 SPAD（Canon）",
    "u": "https://global.canon/en/news/2020/20200624.html"
   },
   {
    "t": "Apple LiDAR 用 Sony SPAD（edge-ai-vision）",
    "u": "https://www.edge-ai-vision.com/?p=25828"
   },
   {
    "t": "Canon 3.2 MP SPAD（Canon 新闻稿）",
    "u": "https://global.canon/en/news/2021/20211215.html"
   },
   {
    "t": "Sony IMX459 发布（Sony）",
    "u": "https://www.sony.eu/presscentre/sony-to-release-a-stacked-spad-depth-sensor-for-automotive-lidar-applications-an-industry-first"
   },
   {
    "t": "Canon MS-500 发布（Canon USA）",
    "u": "https://www.usa.canon.com/newsroom/2023/20230801-ms500"
   }
  ]
 },
 "lofic": {
  "stages": [
   [
    2005,
    "idea",
    "东北大学 Sugawa 组在 ISSCC 2005 提出 LOFIC：光电二极管饱和后溢出的电荷存进像素内横向电容，1/3 英寸 VGA、7.5 µm 像素、0.35 µm 工艺，单次曝光 100 dB 且无残影。",
    "Sugawa's group at Tohoku University proposed LOFIC at ISSCC 2005: overflow charge from a saturated photodiode is stored in an in-pixel lateral capacitor; a 1/3-inch VGA, 7.5 µm-pixel, 0.35 µm chip reached 100 dB in one exposure with no lag.",
    [
     0
    ]
   ],
   [
    2006,
    "paper",
    "Akahane、Sugawa 等在 IEEE JSSC 发表改进版，改善未饱和信号灵敏度和溢出信号线性度，仍为 100 dB VGA。",
    "Akahane, Sugawa et al. published an improved version in IEEE JSSC, raising sensitivity of the non-saturated signal and linearity of the overflow signal, still a 100 dB VGA chip.",
    [
     1
    ]
   ],
   [
    2006,
    "paper",
    "同组在 ISSCC 2006 把 LOFIC 与电压、电流混合读出结合，演示约 200 dB 的免光圈传感器（约）。",
    "The same group showed at ISSCC 2006 an iris-less sensor combining LOFIC with hybrid voltage and current readout, about 200 dB (approx.).",
    [
     2
    ]
   ],
   [
    2019,
    "proto",
    "东北大学做出 2.8 µm 背照式 LOFIC 像素：满阱 120 ke-、转换增益 160 µV/e-，纯单次曝光超过 100 dB，证明 LOFIC 能缩到 BSI 小像素。",
    "Tohoku built a 2.8 µm BSI LOFIC pixel with 120 ke- full well and 160 µV/e- conversion gain, exceeding 100 dB in pure single exposure and showing LOFIC can shrink to small BSI pixels.",
    [
     3
    ]
   ],
   [
    2020,
    "proto",
    "Fujihara、Sugawa 等做出两级 LOFIC 原型，满阱 11.4 Me-，单次曝光线性响应超过 120 dB，各切换点 SNR 都高于 35 dB（EI 2020，IEEE TED 2021）。",
    "Fujihara, Sugawa et al. built a two-stage LOFIC prototype with 11.4 Me- full well, over 120 dB linear single-exposure range and SNR above 35 dB at every switch point (EI 2020, IEEE TED 2021).",
    [
     4
    ]
   ],
   [
    2023,
    "paper",
    "Samsung 在 IISW 2023 发表 2.1 µm 全深 DTI 车载传感器：大光电二极管高转换增益加小光电二极管溢出到像素内存储电容，85 °C 下单次曝光 120 dB，溢出容量 210 ke-。",
    "Samsung presented at IISW 2023 a 2.1 µm full-depth-DTI automotive sensor: high-CG large photodiode plus a small photodiode overflowing into in-pixel storage capacitors, 120 dB single exposure at 85 °C with 210 ke- overflow capacity.",
    [
     5
    ]
   ],
   [
    2023,
    "mass",
    "OmniVision 于 2023 年 9 月 AutoSens 发布 TheiaCel 与 OX08D10：800 万像素、2.1 µm，LOFIC 结合 DCG 与分裂二极管，单次曝光 HDR 并消除 LED 闪烁；当时已送样，量产定在 2024 年下半年。",
    "OmniVision unveiled TheiaCel and the OX08D10 at AutoSens in September 2023: 8 MP, 2.1 µm, LOFIC combined with DCG and split diode for single-exposure HDR without LED flicker; samples were available then and mass production was slated for 2H 2024.",
    [
     6,
     7
    ]
   ],
   [
    2024,
    "ver",
    "LOFIC 首次进入手机：OmniVision 1 英寸 OV50K40 用于 Honor Magic6 至臻版 / RSR（Magic6 Pro 用的是 OV50H），主打高光不溢出（约）。",
    "LOFIC reached phones: OmniVision's 1-inch OV50K40 shipped in the Honor Magic6 Ultimate / RSR (the Magic6 Pro used the OV50H), aimed at keeping highlights from clipping (approx.).",
    [
     8
    ]
   ],
   [
    2024,
    "rival",
    "同期主流对手仍是多帧或交错曝光 HDR（DOL / staggered）和分裂像素 HDR；前者有运动伪影，后者小像素满阱吃亏，这正是 LOFIC 的卖点。",
    "Rivals were still multi-frame or staggered-exposure HDR and split-pixel HDR; the first suffers motion artifacts and the second loses full well at small pitch, which is LOFIC's selling point.",
    [
     6
    ]
   ],
   [
    2026,
    "ver",
    "Sony 2026 年 3 月发布安防用 IMX908：1/2.8 英寸 840 万像素，1.45 µm LOFIC 像素，单次曝光 96 dB，饱和电荷约为前代 IMX778 的 20 倍。",
    "In March 2026 Sony announced the IMX908 for security: 1/2.8-inch, 8.4 MP, 1.45 µm LOFIC pixels, 96 dB single exposure and about 20x the saturation charge of the earlier IMX778.",
    [
     9
    ]
   ],
   [
    2026,
    "ver",
    "Sony 2026 年 6 月发布首款手机 LOFIC 传感器 LYTIA L910：1/1.28 英寸 5000 万像素，单次曝光 100 dB（约 16.6 档），配合三档转换增益 TCG-HDR，夏季量产，首批用于 vivo X500 与 OPPO Find X10（约）。",
    "In June 2026 Sony announced its first phone LOFIC sensor, the LYTIA L910: 1/1.28-inch, 50 MP, 100 dB single exposure (about 16.6 stops) with triple-conversion-gain TCG-HDR, mass production in summer, first in the vivo X500 and OPPO Find X10 (approx.).",
    [
     10,
     11
    ]
   ]
  ],
  "now": [
   "正在快速变成主流：车载 OX08D10 / OX03H10、安防 IMX908、手机 OV50K40 与 LYTIA L910 都已采用。",
   "Fast becoming mainstream: automotive OX08D10 / OX03H10, security IMX908 and phone OV50K40 and LYTIA L910 all use it."
  ],
  "replaced": [
   "仍在上升期；可能的接班是 LOFIC 与多档转换增益、像素级堆叠电容（把大电容放到下层晶圆）的组合。",
   "Still rising; likely successors combine LOFIC with multi-step conversion gain and pixel-level stacked capacitors placed on a lower wafer."
  ],
  "refs": [
   {
    "t": "Sugawa 等 ISSCC 2005 LOFIC 论文条目",
    "u": "https://search.isc.ac/inventory/49/1672147.htm"
   },
   {
    "t": "Akahane 等 JSSC 2006 论文条目",
    "u": "https://search.isc.ac/Inventory/49/880368.htm"
   },
   {
    "t": "Akahane 等 ISSCC 2006（dblp）",
    "u": "https://dblp.uni-trier.de/rec/conf/isscc/AkahaneRAMS06.html"
   },
   {
    "t": "2.8 µm BSI LOFIC 像素（Sensors 2019）",
    "u": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6960954/"
   },
   {
    "t": "两级 LOFIC 120 dB（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2020/12/2-stage-lofic-sensor-with-120db-dr.html"
   },
   {
    "t": "Samsung IISW 2023 车载 120 dB 单次曝光",
    "u": "https://imagesensors.org/Past%20Workshops/2023%20Workshop/2023%20Papers/R43.pdf"
   },
   {
    "t": "OmniVision TheiaCel 与 OX08D10 发布",
    "u": "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-technology-and-automotive-image-sensor-for-led-flicker-free-exterior-cameras/"
   },
   {
    "t": "OmniVision TheiaCel 白皮书",
    "u": "https://www.ovt.com/wp-content/uploads/2023/09/A-New-Era-for-Single-Exposure-HDR-TheiaCel.pdf"
   },
   {
    "t": "Honor Magic6 至臻版 / RSR 用 OV50K（GSMArena）",
    "u": "https://m.gsmarena.com/newscomm-61966p2.php"
   },
   {
    "t": "Sony IMX908 1.45 µm LOFIC 安防传感器",
    "u": "https://www.prnewswire.com/news-releases/sony-semiconductor-solutions-to-release-4k-image-sensor-for-security-cameras-with-the-industrys-smallest-1-45-m-lofic-pixels-302712065.html"
   },
   {
    "t": "Sony LYTIA L910（PetaPixel）",
    "u": "https://petapixel.com/2026/06/22/sonys-first-lofic-image-sensor-promises-nearly-17-stops-of-dynamic-range/"
   },
   {
    "t": "LYTIA L910 首发机型（GSMArena）",
    "u": "https://www.gsmarena.com/newsdetail.php3?idNews=73318"
   }
  ]
 },
 "bin": {
  "stages": [
   [
    2008,
    "idea",
    "Fujifilm Super CCD EXR 把同色像素成对相邻排列，暗处两两合并提高灵敏度，亮处可做双灵敏度宽容度，是同色小像素合并思路的早期例子（约）。",
    "Fujifilm's Super CCD EXR placed same-color pixels in adjacent pairs, binning them in low light or using them for dual sensitivity, an early example of same-color pixel binning (approx.).",
    [
     0
    ]
   ],
   [
    2017,
    "corp",
    "Sony 安防用 IMX294CJK（4/3 英寸、1071 万像素）采用 Quad Bayer 排列，并用 Quad Bayer Coding HDR 在同一帧里让 2 × 2 同色像素用不同曝光，减少运动伪影。",
    "Sony's security IMX294CJK (4/3-inch, 10.71 MP) used a Quad Bayer layout with Quad Bayer Coding HDR, giving 2 x 2 same-color pixels different exposures in one frame to reduce motion artifacts.",
    [
     1
    ]
   ],
   [
    2017,
    "rival",
    "Samsung 2017 年 10 月发布 ISOCELL Slim 2X7：2400 万像素、首个低于 1 µm 的 0.9 µm 像素，用 Tetracell 四合一；TechInsights 在 Vivo V7+ 前置摄像头里发现了它。",
    "In October 2017 Samsung announced the ISOCELL Slim 2X7: 24 MP with the first sub-1 µm (0.9 µm) pixels and Tetracell 4-in-1 binning; TechInsights found it in the Vivo V7+ front camera.",
    [
     2,
     3
    ]
   ],
   [
    2018,
    "mass",
    "Huawei P20 Pro（2018 年 3 月）主摄 1/1.7 英寸 4000 万像素 Quad Bayer（Sony IMX600），默认 2 × 2 合并输出 1000 万像素，是首个用于主摄的四合一传感器。",
    "The Huawei P20 Pro (March 2018) used a 1/1.7-inch 40 MP Quad Bayer main sensor (Sony IMX600), binning 2 x 2 to 10 MP by default, the first 4-in-1 sensor used as a main camera.",
    [
     4
    ]
   ],
   [
    2018,
    "ver",
    "Sony 2018 年 7 月发布 IMX586：4800 万像素、0.8 µm 像素，合并后相当于 1.6 µm 的 1200 万像素，2019 年铺满中高端手机。",
    "Sony announced the IMX586 in July 2018: 48 MP with 0.8 µm pixels, equivalent to a 1.6 µm 12 MP sensor when binned; it spread across mid- and high-end phones in 2019.",
    [
     5
    ]
   ],
   [
    2019,
    "paper",
    "Sony 的 Okawa 等在 IEDM 2019 发表 1/2 英寸 4800 万像素 Quad Bayer Coding 加 2 × 2 共用微透镜（2 × 2 OCL），实现全像素相位对焦，最低对焦照度 1 lux。",
    "Sony's Okawa et al. presented at IEDM 2019 a 1/2-inch 48 MP Quad Bayer Coding sensor with 2 x 2 on-chip lenses (2 x 2 OCL) giving all-pixel PDAF down to 1 lux.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Samsung ISOCELL Bright HM1（2020 年 2 月，Galaxy S20 Ultra）：1/1.33 英寸 1.08 亿像素、0.8 µm，Nonacell 九合一，等效 2.4 µm 大像素。",
    "Samsung's ISOCELL Bright HM1 (February 2020, Galaxy S20 Ultra): 1/1.33-inch, 108 MP at 0.8 µm, Nonacell 9-in-1 binning equivalent to 2.4 µm pixels.",
    [
     7
    ]
   ],
   [
    2021,
    "ver",
    "Samsung 2021 年 9 月发布 ISOCELL HP1：2 亿像素、0.64 µm，ChameleonCell 可在 2 × 2、4 × 4 和全像素之间切换，2022 年随 Moto X30 Pro / Edge 30 Ultra 上市。",
    "In September 2021 Samsung announced the ISOCELL HP1: 200 MP at 0.64 µm, ChameleonCell switching among 2 x 2, 4 x 4 and full resolution; it shipped in 2022 in the Moto X30 Pro / Edge 30 Ultra.",
    [
     8
    ]
   ],
   [
    2022,
    "ver",
    "Samsung ISOCELL HP3 把像素缩到 0.56 µm，可四合一出 5000 万像素或十六合一出 1250 万像素；同年 DJI Mini 3 Pro 用 1/1.3 英寸 4800 万四合一传感器合并成 1200 万，四合一进入无人机。",
    "Samsung's ISOCELL HP3 shrank pixels to 0.56 µm, binning 4-in-1 to 50 MP or 16-in-1 to 12.5 MP; the same year the DJI Mini 3 Pro brought a 1/1.3-inch 48 MP quad sensor binned to 12 MP to drones.",
    [
     9,
     10
    ]
   ],
   [
    2025,
    "ver",
    "Sony 发布首款 2 亿像素 LYTIA 901：1/1.12 英寸、0.7 µm，采用 Quad-Quad Bayer Coding（QQBC，4 × 4 同色），2026 年首发于 vivo 旗舰。",
    "Sony launched its first 200 MP sensor, the LYTIA 901: 1/1.12-inch, 0.7 µm, with Quad-Quad Bayer Coding (QQBC, 4 x 4 same color), debuting in vivo's 2026 flagships.",
    [
     11
    ]
   ],
   [
    2025,
    "end",
    "在相机和全画幅领域四合一基本没有扩散，大底传感器仍用标准 Bayer 加更大的单像素；手机上大像素 5000 万主摄（如 LYTIA 系列）也回到 2 × 2 OCL 或标准四合一而非继续加像素（约）。",
    "4-in-1 never spread to large-sensor cameras, which still use standard Bayer with bigger pixels; on phones, large-pixel 50 MP main sensors stopped at 2 x 2 OCL or plain quad binning instead of chasing pixel count (approx.).",
    []
   ]
  ],
  "now": [
   "手机、无人机、运动相机等小底设备的主流；2 亿像素十六合一（ISOCELL HP 系列、LYTIA 901）是当前顶点。",
   "Mainstream in small-sensor devices such as phones, drones and action cameras; 200 MP 16-in-1 (ISOCELL HP series, LYTIA 901) is the current peak."
  ],
  "replaced": [
   "仍是主流；接班方向是 2 × 2 OCL 全像素对焦、AI 重马赛克，以及 LOFIC 单次曝光 HDR 与之结合，而不是继续堆像素数。",
   "Still mainstream; the next steps are 2 x 2 OCL all-pixel AF, AI remosaicing and pairing with LOFIC single-exposure HDR rather than adding more pixels."
  ],
  "refs": [
   {
    "t": "Super CCD（维基百科）",
    "u": "https://en.wikipedia.org/wiki/Super_CCD"
   },
   {
    "t": "Sony IMX294 4/3 英寸 Quad Bayer 安防传感器",
    "u": "https://www.fierceelectronics.com/components/sony-launches-4-3-cmos-sensor-for-4k-surveillance"
   },
   {
    "t": "Samsung ISOCELL Slim 2X7 Tetracell 发布",
    "u": "https://news.samsung.com/us/samsungs-new-image-sensors-bring-fast-slim-attributes-mobile-iot-applications"
   },
   {
    "t": "TechInsights 在 Vivo V7+ 发现 2X7",
    "u": "https://techinsights.com/blog/samsung-s5k2x7sp-09-mm-image-sensor"
   },
   {
    "t": "P20 Pro 三摄技术解析（GSMArena）",
    "u": "https://m.gsmarena.com/explaining_huawei_p20_pros_triple_camera-amp-30497.php"
   },
   {
    "t": "Sony IMX586 发布（GSMArena）",
    "u": "https://www.gsmarena.com/sony_introduces_imx586_sensor_with_48_mp-news-32367.php"
   },
   {
    "t": "Okawa 等 IEDM 2019 2x2 OCL（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2019/12/iedm-2019-sony-48mp-all-pixel-pdaf.html"
   },
   {
    "t": "Samsung ISOCELL Bright HM1 发布",
    "u": "https://news.samsung.com/global/samsungs-108mp-isocell-bright-hm1-delivers-brighter-ultra-high-res-images-with-industry-first-nonacell-technology"
   },
   {
    "t": "Samsung ISOCELL HP1 发布（GSMArena）",
    "u": "https://www.gsmarena.com/samsung_unveils_flagship_200mp_isocell_hp1_50mp_isocell_gn5_-news-50775.php"
   },
   {
    "t": "Samsung ISOCELL HP3 0.56 µm（GSMArena）",
    "u": "https://www.gsmarena.com/samsung_introduces_new_200_mp_sensor__isocell_hp3_with_smallest_ever_pixels-news-54776.php"
   },
   {
    "t": "DJI Mini 3 Pro 发布",
    "u": "https://www.mynewsdesk.com/uk/dji/pressreleases/dji-mini-3-pro-redefines-what-a-sub-249g-camera-drone-can-do-3181137"
   },
   {
    "t": "Sony LYTIA 901 2 亿像素（TechInsights）",
    "u": "https://www.techinsights.com/blog/sony-launches-first-200mp-smartphone-sensor-lytia-901"
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
 "airaw": {
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
 }
};
