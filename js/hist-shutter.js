/* 快门时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 shutter 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：cmos:gs>global、cmos:stack>stacked、cmos:lfm */
TIMELINES.shutter.hist = {
 "fp": {
  "stages": [
   [
    1861,
    "proto",
    "英国摄影师 William England 的一台单件相机在焦平面处装了带可调狭缝的落板式机构，被视为焦平面快门最早的雏形，但没有量产。",
    "A one-off camera by William England (UK) in 1861 placed a drop-shutter-like mechanism with an adjustable slit at the focal plane, regarded as the earliest focal-plane shutter, though never produced.",
    [
     0
    ]
   ],
   [
    1882,
    "proto",
    "德国摄影师 Ottomar Anschütz 做出第一只实用的焦平面快门：帘幕紧贴底片前方，用于他的便携相机，速度可达 1/1000 s，用来拍飞鸟和动物运动。",
    "German photographer Ottomar Anschütz built the first usable focal-plane shutter, a blind running just in front of the plate in his portable camera, reaching 1/1000 s for birds and animals in motion.",
    [
     1
    ]
   ],
   [
    1888,
    "paper",
    "Anschütz 于 1888 年 11 月 11 日以「Brennebenen-Verschluß」获得德国专利（Wikipedia 焦平面快门条目另记 1883 年已申请内置卷帘机构的专利）。",
    "Anschütz was granted a German patent on 11 November 1888 for the 'Brennebenen-Verschluß' (the Wikipedia focal-plane shutter article dates his roller-blind camera patent to 1883).",
    [
     1,
     0
    ]
   ],
   [
    1890,
    "mass",
    "柏林 C. P. Goerz 推出 Anschütz Camera，成为第一款量产的焦平面快门相机；Goerz 此后以 Anschütz 设计销售近 30 年，1896 年起有折叠式 Goerz-Anschütz。",
    "C. P. Goerz of Berlin launched the Anschütz Camera, the first production focal-plane-shutter camera; Goerz sold Anschütz designs for almost 30 years, including the folding Goerz-Anschütz from 1896.",
    [
     0,
     1
    ]
   ],
   [
    1905,
    "ver",
    "美国 Folmer & Schwing 的 Graflex 单反与 Graphic 新闻相机采用单帘焦平面快门，四档缝宽（1½ 到 1/8 英寸）配合弹簧张力，速度 1/10–1/1000 s，一直生产到 1973 年。",
    "Folmer & Schwing's Graflex SLRs and Graphic press cameras (US) used a single-curtain focal-plane shutter with four slit widths (1½ to 1/8 inch) and spring tension, 1/10–1/1000 s, made until 1973.",
    [
     0
    ]
   ],
   [
    1914,
    "proto",
    "Ernst Leitz 的开发主管 Oskar Barnack 造出 35mm 原型机 Ur-Leica，为小型相机用上了焦平面快门。",
    "Oskar Barnack, head of development at Ernst Leitz, built the 35mm prototype Ur-Leica with a focal-plane shutter.",
    [
     2
    ]
   ],
   [
    1925,
    "mass",
    "Leica I 在莱比锡春季博览会发布，采用双帘、横走、橡胶布帘焦平面快门，1/20–1/500 s；这种 Leica 式布帘快门成为此后几十年 35mm 相机的标准。",
    "The Leica I debuted at the 1925 Leipzig Spring Fair with a twin rubberised-cloth, horizontally travelling focal-plane shutter (1/20–1/500 s); the Leica-type cloth shutter became the 35mm standard for decades.",
    [
     2,
     0
    ]
   ],
   [
    1932,
    "rival",
    "Zeiss Ikon Contax I 改用纵走的黑化黄铜叶条快门，最高 1/1250 s，挑战 Leica 布帘；可靠性不佳，1936 年 Contax II 重新设计。",
    "The Zeiss Ikon Contax I countered Leica with a vertically travelling shutter of blackened brass slats reaching 1/1250 s; it was unreliable and redesigned for the 1936 Contax II.",
    [
     7
    ]
   ],
   [
    1959,
    "ver",
    "Nikon F 采用钛箔帘幕的横走焦平面快门，避免布帘被阳光经镜头烧穿。",
    "The Nikon F used titanium-foil curtains in its horizontal focal-plane shutter, avoiding the burn-through that cloth curtains suffered from focused sunlight.",
    [
     3
    ]
   ],
   [
    1999,
    "ver",
    "Nikon D1 数码单反把焦平面快门最高速推到 1/16000 s、X 同步 1/500 s，此后机型多稳定在 1/8000 s。",
    "The Nikon D1 DSLR pushed focal-plane top speed to 1/16,000 s with 1/500 s X-sync; later cameras settled at 1/8000 s.",
    [
     0
    ]
   ],
   [
    2007,
    "ver",
    "Canon EOS-1D Mark III 与 EOS 40D 在实时取景下用 CMOS 逐行复位充当电子前帘，机械快门只保留后帘，实现静音拍摄；电子前帘此后普及。",
    "The Canon EOS-1D Mark III and EOS 40D used CMOS row reset as an electronic first curtain in Live View, keeping only the mechanical second curtain for silent shooting; EFCS then spread widely.",
    [
     4
    ]
   ],
   [
    2021,
    "end",
    "Nikon Z9 成为第一款取消机械快门的专业旗舰，完全依靠堆栈式传感器的高速电子快门。",
    "The Nikon Z9 became the first pro flagship to drop the mechanical shutter entirely, relying on the fast electronic shutter of its stacked sensor.",
    [
     5
    ]
   ],
   [
    2023,
    "end",
    "Sony α9 III 用全画幅全局快门传感器，整幅同时曝光，没有滚动快门畸变，不再需要焦平面机械快门。",
    "The Sony α9 III used a full-frame global-shutter sensor exposing the whole frame at once, with no rolling distortion and no need for a focal-plane mechanical shutter.",
    [
     6
    ]
   ]
  ],
  "now": [
   "焦平面快门仍是大多数可换镜头相机的标配，常与电子前帘或纯电子快门并存；高端机正逐步用堆栈式或全局快门传感器取代它。",
   "Focal-plane shutters remain standard on most interchangeable-lens cameras, usually alongside EFCS or a full electronic shutter; high-end bodies are replacing them with stacked or global-shutter sensors."
  ],
  "replaced": [
   "正被传感器电子快门（堆栈式高速读出、全局快门）取代，Nikon Z9、Sony α9 III 已完全去掉机械快门。",
   "Being replaced by sensor electronic shutters (fast stacked readout, global shutter); the Nikon Z9 and Sony α9 III have dropped the mechanical shutter."
  ],
  "refs": [
   {
    "t": "Focal-plane shutter - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Focal-plane_shutter"
   },
   {
    "t": "Ottomar Anschütz - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Ottomar_Ansch%C3%BCtz"
   },
   {
    "t": "Leica Camera - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Leica_Camera"
   },
   {
    "t": "Nikon: Special titanium Nikon cameras and NASA cameras",
    "u": "https://imaging.nikon.com/history/chronicle/rhnc12ti-e/index.htm"
   },
   {
    "t": "Canon EOS 40D White Paper",
    "u": "https://content.abt.com/documents/27983/EOS_40D_WhitePaper.pdf"
   },
   {
    "t": "Nikon Z9 review - Digital Camera World",
    "u": "https://www.digitalcameraworld.com/reviews/nikon-z9-review"
   },
   {
    "t": "Sony a9 III First Impressions - PetaPixel",
    "u": "https://petapixel.com/2023/11/07/sony-a9-iii-first-impressions-the-global-shutter-era-has-arrived"
   },
   {
    "t": "Contax I - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Contax_I"
   }
  ]
 },
 "leaf": {
  "stages": [
   [
    1891,
    "corp",
    "Bausch & Lomb 推出 Iris Diaphragm Shutter，由 Edward Bausch 与快门车间领班 Andrew Wollensak 开发，叶片装在镜头组之间、靠近光圈。",
    "Bausch & Lomb introduced the Iris Diaphragm Shutter, developed by Edward Bausch with shutter-shop foreman Andrew Wollensak, with blades between the lens elements near the aperture.",
    [
     1,
     2
    ]
   ],
   [
    1897,
    "mass",
    "Bausch & Lomb Unicum 镜间快门（1893 年型为前身）量产，用气动阻尼控制慢速，广泛装在折叠胶卷与干板相机上，一直用到 20 世纪初期。",
    "The Bausch & Lomb Unicum leaf shutter (preceded by an 1893 model), with pneumatic retard for slow speeds, was fitted to many folding roll-film and plate cameras into the 20th century.",
    [
     1
    ]
   ],
   [
    1905,
    "corp",
    "慕尼黑 Bruns & Deckel 的 Christian Bruns 设计 Compound 镜间快门，用活塞气缸式气动擒纵控制慢速（他 1899 年已为 Steinheil 设计过第一只镜间快门）。",
    "Christian Bruns of Bruns & Deckel, Munich, designed the Compound leaf shutter with a piston-and-cylinder pneumatic escapement (he had designed Steinheil's first leaf shutter in 1899).",
    [
     0
    ]
   ],
   [
    1909,
    "rival",
    "美国 Wollensak 推出 Optimo 镜间快门，成为 Eastman Kodak 相机的主要供应，直到 1920 年 Kodak 转向自制。",
    "Wollensak (US) introduced the Optimo leaf shutter, a major supplier to Eastman Kodak cameras until Kodak turned to in-house shutters in 1920.",
    [
     2
    ]
   ],
   [
    1912,
    "mass",
    "Compur 上市（名字取 Compound + Uhrwerk），用齿轮钟表擒纵代替气动；专利由 Zeiss、Bausch & Lomb 与 Gauthier 合组的 AGC 持有，Deckel 1911 年起授权生产。",
    "The Compur (Compound + Uhrwerk) appeared with a geared clockwork escapement instead of pneumatics; its patent was held by AGC (Zeiss, Bausch & Lomb, Gauthier), and Deckel built it under licence from 1911.",
    [
     0
    ]
   ],
   [
    1927,
    "ver",
    "Compur 由表盘式（dial-set）改为外圈调速（rim-set），1928 年加入自拍机构；1935 年 Compur-Rapid 把最高速提到 1/400–1/500 s，同年 AGC 推出竞品 Prontor。",
    "Compur moved from dial-set to rim-set in 1927 and added a self-timer in 1928; the 1935 Compur-Rapid raised top speed to 1/400–1/500 s, and AGC launched the rival Prontor the same year.",
    [
     0
    ]
   ],
   [
    1951,
    "ver",
    "Synchro-Compur 加入 PC 闪光同步端子，镜间快门可在任何速度下与闪光同步，成为中画幅与大画幅镜头的标准快门。",
    "The Synchro-Compur added a PC flash terminal, letting the leaf shutter sync flash at every speed; it became the standard shutter for medium- and large-format lenses.",
    [
     0
    ]
   ],
   [
    1976,
    "end",
    "约 1970 年代初出现电子控时的 Compur-electronic；慕尼黑的 Compur 于 1976 年停产，镜间快门生产在合并后的公司延续到 2002 年。",
    "Electronically timed Compur-electronic shutters arrived in the early 1970s; Compur production in Munich stopped in 1976, and leaf-shutter production by the merged company ended in 2002.",
    [
     0
    ]
   ],
   [
    2009,
    "mass",
    "Nokia N86 8MP 在手机镜头模组里装入机械快门，最高 1/1000 s，配合可变光圈，避免滚动快门带来的果冻效应。",
    "The Nokia N86 8MP put a mechanical shutter into a phone camera module, up to 1/1000 s, with variable aperture, avoiding rolling-shutter artefacts.",
    [
     3
    ]
   ],
   [
    2012,
    "ver",
    "Nokia 808 PureView（41MP、大底）保留机械快门并加入 ND8（3 档）滤镜；2013 年 Lumia 1020 去掉 ND，机械快门最高 1/16000 s。",
    "The Nokia 808 PureView (41MP large sensor) kept a mechanical shutter and added an ND8 (3-stop) filter; the 2013 Lumia 1020 dropped the ND and reached 1/16,000 s.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "Hasselblad X1D-50c 无反中画幅的 XCD 镜头内置镜间快门，60 分钟–1/2000 s，全速闪光同步。",
    "The Hasselblad X1D-50c medium-format mirrorless used leaf shutters in its XCD lenses, 60 min–1/2000 s with flash sync at every speed.",
    [
     5
    ]
   ],
   [
    2024,
    "ver",
    "Hasselblad XCD 2,5/25V 的新一代镜间快门把最高速与全速闪光同步提到 1/4000 s。",
    "Hasselblad's XCD 2,5/25V brought a new-generation leaf shutter with top speed and full flash sync of 1/4000 s.",
    [
     6
    ]
   ],
   [
    2025,
    "ver",
    "Sony RX1R III 全画幅定焦便携机延续镜间快门，f/2 全开时最高 1/2000 s 并全速同步，另有电子快门。",
    "The full-frame fixed-lens Sony RX1R III kept a leaf shutter, 1/2000 s at f/2 with full flash sync, plus an electronic shutter.",
    [
     7
    ]
   ]
  ],
  "now": [
   "镜间快门仍用于 Hasselblad X/XCD、Fujifilm X100 系列、Sony RX1R III 等，主要卖点是全速闪光同步；手机早已不再使用。",
   "Leaf shutters live on in Hasselblad XCD lenses, the Fujifilm X100 series and the Sony RX1R III, valued for full-speed flash sync; phones abandoned them long ago."
  ],
  "replaced": [
   "在手机和普通便携相机里被传感器电子快门取代；在相机中也面临全局快门传感器（同样整幅同时曝光、可全速闪光同步）的竞争。",
   "Replaced in phones and ordinary compacts by sensor electronic shutters; in cameras it now competes with global-shutter sensors that also expose the whole frame at once and sync flash at any speed."
  ],
  "refs": [
   {
    "t": "Friedrich Deckel (Compur) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Compur"
   },
   {
    "t": "Bausch & Lomb 'Unicum' Eyelid Shutter - History of Science Museum, Oxford",
    "u": "https://www.mhs.ox.ac.uk/cameras/item135.html"
   },
   {
    "t": "Wollensak Timeline",
    "u": "https://alphaxbetax.com/wollensak-timeline/"
   },
   {
    "t": "Nokia N86 - The Register",
    "u": "https://www.theregister.com/2009/06/11/nokia_n86/"
   },
   {
    "t": "Nokia Lumia 1020 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nokia_Lumia_1020"
   },
   {
    "t": "Hasselblad Announces the X1D - Fstoppers",
    "u": "https://fstoppers.com/gear/hasselblad-announces-x1d-135931"
   },
   {
    "t": "Hasselblad unveils XCD 2.5/25V - Notebookcheck",
    "u": "https://www.notebookcheck.net/Hasselblad-unveils-XCD-2-5-25V-medium-format-lens-with-fast-central-shutter.835179.0.html"
   },
   {
    "t": "Sony RX1R III - Ken Rockwell",
    "u": "https://kenrockwell.com/sony/rx1r-iii.htm"
   }
  ]
 },
 "mirror": {
  "stages": [
   [
    1931,
    "proto",
    "ARRI 总工程师 Erich Kästner 发明电影机的旋转反光镜快门：与光轴成 45° 的双叶「蝴蝶」反光镜，转开时让片门曝光，挡住时把像反射进取景器。",
    "ARRI chief engineer Erich Kästner invented the spinning reflex mirror shutter: a twin-bladed 'butterfly' mirror at 45° to the lens axis that exposes the gate when open and reflects the image to the viewfinder when closed.",
    [
     0
    ]
   ],
   [
    1937,
    "mass",
    "Arriflex 35 在莱比锡博览会作为手持新闻摄影机发布，是第一款量产的 35mm 反光取景电影机；标准机型最大开角实际为 165°。",
    "The Arriflex 35 launched at the Leipzig Fair as a handheld newsreel camera, the first production 35mm reflex motion-picture camera; standard models actually open to 165°.",
    [
     0,
     1
    ]
   ],
   [
    1953,
    "ver",
    "Arriflex 35 IIA 改进凸轮设计，开角做到 180°；1958 年 35 IIB 又回到 165°。",
    "The Arriflex 35 IIA reached a 180° shutter through a revised cam; the 1958 35 IIB went back to 165°.",
    [
     0
    ]
   ],
   [
    1967,
    "rival",
    "Mitchell 把好莱坞片场标准机 BNC 改成反光取景的 BNCR，加入旋转反光镜，补上 BNC 唯一的缺点。",
    "Mitchell reflexed its Hollywood studio standard, the BNC, into the BNCR with a rotating mirror, fixing the BNC's one shortcoming.",
    [
     2
    ]
   ],
   [
    1972,
    "rival",
    "Al Mayer Sr. 领导的 Panavision 团队推出 Panaflex，第一款自带隔音、可手持的 35mm 片场反光机；旋转反光镜可换成固定的半透 pellicle 镜。",
    "Panavision's team under Al Mayer Sr. unveiled the Panaflex, the first self-blimped hand-holdable 35mm studio reflex camera; its rotating mirror could be swapped for a fixed pellicle.",
    [
     3
    ]
   ],
   [
    1979,
    "ver",
    "Arriflex 35 III 加入可调开角的反光镜快门，曝光时间不再只由帧率决定。",
    "The Arriflex 35 III added an adjustable-angle mirror shutter, so exposure time no longer depended on frame rate alone.",
    [
     0
    ]
   ],
   [
    1982,
    "ver",
    "August Arnold 与 Erich Kästner 因第一款可用的 35mm 手持旋转反光镜电影机获奥斯卡科学技术奖（Academy Award of Merit）。",
    "August Arnold and Erich Kästner received an Academy Award of Merit for the first operational 35mm handheld spinning-mirror reflex motion-picture camera.",
    [
     1
    ]
   ],
   [
    2000,
    "ver",
    "Arricam ST/LT（Fritz Gabriel Bauer、Walter Trauninger 设计）采用电子控制的反光镜快门，待机时 0°–180° 可调、运行中 11.2°–180° 斜变，步进 0.1°。",
    "The Arricam ST/LT, designed by Fritz Gabriel Bauer and Walter Trauninger, used an electronically controlled mirror shutter adjustable 0°–180° at standby and rampable 11.2°–180° while running, in 0.1° steps.",
    [
     4
    ]
   ],
   [
    2005,
    "ver",
    "Arriflex D-20 数字电影机保留机械反光镜快门（11.2°–180°）与光学取景器，把胶片机的操作方式带到 CMOS 传感器上。",
    "The Arriflex D-20 digital cinema camera kept a mechanical mirror shutter (11.2°–180°) and optical viewfinder, carrying film-camera operation over to a CMOS sensor.",
    [
     5
    ]
   ],
   [
    2011,
    "ver",
    "ARRI 发布 ALEXA Studio：4:3 传感器加旋转反光镜快门与光学取景器，镜片挡光时传感器读出，减轻滚动快门伪影；10 月在美国首展，2012 年交付。",
    "ARRI introduced the ALEXA Studio: a 4:3 sensor with a rotating mirror shutter and optical viewfinder, the mirror covering the sensor during readout to reduce rolling-shutter artefacts; US debut in October, deliveries in 2012.",
    [
     6
    ]
   ],
   [
    2011,
    "end",
    "ARRI、Panavision、Aaton 相继停止生产胶片电影机（ARRI 自 2009 年起只按订单生产），旋转镜快门的主战场随之消失。",
    "ARRI, Panavision and Aaton stopped making film cameras (ARRI had built them only to order since 2009), removing the main home of the mirror shutter.",
    [
     7
    ]
   ]
  ],
  "now": [
   "旋转反光镜快门仍存在于租赁市场的胶片电影机和 ALEXA Studio 系列中，新一代数字电影机基本只用电子快门加电子取景器。",
   "Mirror shutters survive in rental film cameras and ALEXA Studio bodies; current digital cinema cameras rely on electronic shutters and electronic viewfinders."
  ],
  "replaced": [
   "被 CMOS 传感器的电子快门（开角由读出控制）和电子取景器取代。",
   "Replaced by CMOS electronic shutters (shutter angle set by readout timing) and electronic viewfinders."
  ],
  "refs": [
   {
    "t": "Arriflex 35 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Arriflex_35"
   },
   {
    "t": "Arri - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Arri"
   },
   {
    "t": "Reflexing the BNC Camera - Journal of the SMPTE",
    "u": "https://journal.smpte.org/periodicals/Journal%20of%20the%20SMPTE/76/6/12/"
   },
   {
    "t": "Panavision - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Panavision"
   },
   {
    "t": "Arricam - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Arricam"
   },
   {
    "t": "Arriflex D-20 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Arriflex_D-20"
   },
   {
    "t": "ARRI Alexa Studio USA Debut - Film and Digital Times",
    "u": "https://www.fdtimes.com/2011/10/08/arri-alexa-studio-usa-debut/"
   },
   {
    "t": "ARRI, Panavision, and Aaton Cease Production of Film Cameras - Collider",
    "u": "https://collider.com/film-camera-production-ended-arri-panavision-aaton/"
   }
  ]
 },
 "vfp": {
  "stages": [
   [
    1932,
    "proto",
    "Zeiss Ikon Contax I 已用纵走金属快门（黑化黄铜叶条组成的卷帘），最高 1/1250 s，但可靠性差，1936 年 Contax II 重新设计。",
    "The Zeiss Ikon Contax I already used a vertically travelling metal shutter (a roller of blackened brass slats), up to 1/1250 s, but it was unreliable and redesigned in the 1936 Contax II.",
    [
     0
    ]
   ],
   [
    1953,
    "corp",
    "Konishiroku（小西六，后 Konica）约从 1953 年起研发 Hi-Synchro 纵走多叶金属快门，1959 年以原型机 Koniflex 在日本展会展出。",
    "Konishiroku (later Konica) developed the Hi-Synchro vertically running multi-blade metal shutter from about 1953, showing it in the Koniflex prototype at a Japanese fair in 1959.",
    [
     1,
     2
    ]
   ],
   [
    1960,
    "mass",
    "Konica F 于 1960 年 2 月上市，Hi-Synchro 快门实现 35mm 单反首个 1/2000 s 和 1/125 s 闪光同步；只产约 600–1500 台。",
    "The Konica F went on sale in February 1960; its Hi-Synchro shutter gave the first 1/2000 s and 1/125 s flash sync on a 35mm SLR; only about 600–1,500 were made.",
    [
     1
    ]
   ],
   [
    1961,
    "mass",
    "Konica 与 Mamiya 向 Copal 开放各自设计，Copal 完成 Copal Square Type I 通用快门单元，最初只供 Mamiya、Konica、Pentax 使用。",
    "Konica and Mamiya shared their designs with Copal, which completed the Copal Square Type I shutter unit, initially available only to Mamiya, Konica and Pentax.",
    [
     2
    ]
   ],
   [
    1962,
    "ver",
    "Nikkorex F 成为第一款用纵走分段钢片快门（Copal Square）的 Nikon 相机，1965 年 Nikomat FT/FS 跟进。",
    "The Nikkorex F became the first Nikon with a vertical-travel sectional steel-blade shutter (Copal Square), followed by the Nikomat FT/FS in 1965.",
    [
     3
    ]
   ],
   [
    1965,
    "ver",
    "改进的 Copal Square S 推出，24 mm 片门约 7 ms 走完，1/1000 s、1/125 s 同步，被 Konica Auto-Reflex、Nikkormat 等大量机型采用。",
    "The improved Copal Square S crossed the 24 mm gate in about 7 ms (1/1000 s, 1/125 s sync) and was used by the Konica Auto-Reflex, Nikkormat and many others.",
    [
     2,
     4
    ]
   ],
   [
    1982,
    "ver",
    "Nikon FM2 用蚀刻蜂窝纹的钛合金叶片（铝合金耐久性不够），帘幕走时约 3.6 ms，实现 1/4000 s 与 1/200 s 同步；1984 年 New FM2/FM2N 提高到 1/250 s。",
    "The Nikon FM2 used honeycomb-etched titanium blades (aluminium was not durable enough), about 3.6 ms travel, for 1/4000 s and 1/200 s sync; the 1984 New FM2/FM2N raised sync to 1/250 s.",
    [
     5,
     4
    ]
   ],
   [
    1988,
    "ver",
    "Nikon F-801 于 1988 年 6 月上市，全球首个 1/8000 s 快门与 1/250 s 同步；同年 Nikon F4 成为第一款用纵走快门的 F 系旗舰，叶片用碳纤维增强环氧材料，同步 1/250 s。",
    "The Nikon F-801 (June 1988) was the world's first camera with 1/8000 s and 1/250 s sync; the same year the Nikon F4 became the first F-series flagship with a vertical shutter, using carbon-fibre-reinforced epoxy blades and 1/250 s sync.",
    [
     6,
     3
    ]
   ],
   [
    1992,
    "ver",
    "Minolta Maxxum/Dynax 9xi 用碳纤维叶片，帘幕走时 1.8 ms，最高 1/12000 s、同步 1/300 s，是胶片相机的最快快门。",
    "The Minolta Maxxum/Dynax 9xi used carbon-fibre blades with 1.8 ms travel for 1/12,000 s and 1/300 s sync, the fastest film-camera shutter.",
    [
     4
    ]
   ],
   [
    1999,
    "ver",
    "Nikon D1 数码单反把焦平面快门最高速推到 1/16000 s、同步 1/500 s，之后数码机型多回落到 1/8000 s 以兼顾寿命。",
    "The Nikon D1 DSLR peaked at 1/16,000 s with 1/500 s sync; later digital bodies mostly settled at 1/8000 s for durability.",
    [
     4
    ]
   ],
   [
    2021,
    "end",
    "Nikon Z9 取消机械快门，用堆栈式传感器电子快门；2023 年 Sony α9 III 用全局快门传感器，纵走金属快门开始退出旗舰机。",
    "The Nikon Z9 dropped the mechanical shutter for a stacked-sensor electronic shutter; in 2023 the Sony α9 III used a global-shutter sensor, and vertical metal shutters began leaving flagships.",
    [
     7
    ]
   ]
  ],
  "now": [
   "纵走金属焦平面快门（多由 Nidec Copal 等供应）仍是单反与大多数无反相机的标准，通常 1/8000 s、同步 1/200–1/250 s，常配合电子前帘。",
   "Vertical metal focal-plane shutters (many supplied by Nidec Copal) remain standard on DSLRs and most mirrorless cameras, typically 1/8000 s with 1/200–1/250 s sync, often with EFCS."
  ],
  "replaced": [
   "正被堆栈式高速读出与全局快门传感器取代，Nikon Z9/Z8、Sony α9 III 已不用机械快门。",
   "Being replaced by fast stacked readout and global-shutter sensors; the Nikon Z9/Z8 and Sony α9 III no longer use a mechanical shutter."
  ],
  "refs": [
   {
    "t": "Contax I - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Contax_I"
   },
   {
    "t": "Konica F - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Konica_F"
   },
   {
    "t": "Konica F - Camera-wiki",
    "u": "https://camera-wiki.org/wiki/Konica_F"
   },
   {
    "t": "Nikon: History of the Nikon cameras and shutter mechanisms (Part II)",
    "u": "https://imaging.nikon.com/imaging/information/chronicle/rhnc11shut2-e/index.html"
   },
   {
    "t": "Focal-plane shutter - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Focal-plane_shutter"
   },
   {
    "t": "Nikon: Part 13 Nikon FM2",
    "u": "https://imaging.nikon.com/history/chronicle/cousins13-e/index.htm"
   },
   {
    "t": "Nikon F-801 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nikon_F-801"
   },
   {
    "t": "Sony A9 III vs Nikon Z9 - Photography Blog",
    "u": "https://photographyblog.com/articles/sony_a9_iii_vs_nikon_z9_which_is_better"
   }
  ]
 },
 "etimed": {
  "stages": [
   [
    1963,
    "corp",
    "Polaroid 工程师 Richard R. Wareham 主导设计 Automatic 100，相关专利 US 3,165,043 于 1963 年申请、1965 年公布；快门用 Clairex 光敏电阻作「光阀」，由晶体管电路按亮度计时。",
    "Polaroid engineer Richard R. Wareham led the Automatic 100 design (US patent 3,165,043, filed 1963, issued 1965); a Clairex photoconductive cell acted as the 'light valve' for a transistor timing circuit.",
    [
     0,
     2
    ]
   ],
   [
    1963,
    "mass",
    "Polaroid Automatic 100 上市，是第一款量产的晶体管电子快门相机，10 s–1/1200 s 自动曝光，也是第一款用 pack film 的 Polaroid。",
    "The Polaroid Automatic 100 was the first mass-produced camera with a transistorised electronic shutter, auto-exposing 10 s–1/1200 s, and Polaroid's first pack-film camera.",
    [
     1,
     2
    ]
   ],
   [
    1964,
    "rival",
    "Nikon Auto 35 于 1964 年 9 月推出，是第一款内置 AE 的单反，但仍是机械式镜间快门方案。",
    "The Nikon Auto 35 (September 1964) was the first SLR with built-in AE, but still a mechanical lens-shutter design.",
    [
     3
    ]
   ],
   [
    1965,
    "mass",
    "Yashica 于 1965 年 12 月推出 Electro 35：Copal 无级电子镜间快门加 CdS 测光的光圈优先，约 30 s–1/500 s，全系累计售出约 800 万台。",
    "Yashica launched the Electro 35 in December 1965: a stepless Copal electronic leaf shutter with CdS aperture-priority metering, about 30 s–1/500 s; the family sold some 8 million units.",
    [
     4
    ]
   ],
   [
    1968,
    "ver",
    "Copal 推出电子控时的 Copal Square SE 焦平面快门单元，后被 Canon、Yashica、Nikon 采用；同年 Electro 35 改用电磁控制的 Copal-Electro 快门。",
    "Copal introduced the electronically timed Copal Square SE focal-plane unit, later used by Canon, Yashica and Nikon; the same year the Electro 35 moved to the electromagnetic Copal-Electro shutter.",
    [
     5,
     4
    ]
   ],
   [
    1971,
    "ver",
    "Asahi Pentax Electro Spotmatic（1972 年改名 ES）把电子控时焦平面快门与测光联动，成为第一款电子光圈优先自动曝光单反。",
    "The Asahi Pentax Electro Spotmatic (renamed ES in 1972) tied its electronically timed focal-plane shutter to its meter, the first SLR with electronic aperture-priority AE.",
    [
     6
    ]
   ],
   [
    1972,
    "ver",
    "Nikon 1969 年完成原型、1972 年底推出 Nikomat EL，用电子控时的纵走 Copal 快门实现光圈优先自动曝光。",
    "Nikon finished a prototype in 1969 and launched the Nikomat EL at the end of 1972, using an electronically timed vertical Copal shutter for aperture-priority AE.",
    [
     3
    ]
   ],
   [
    1976,
    "ver",
    "Canon AE-1 成为第一款用微处理器（CPU）控制曝光的相机，电子控时布帘快门 2 s–1/1000 s，省掉约 300 个零件。",
    "The Canon AE-1 became the first camera to control exposure with a microprocessor, with an electronically timed cloth shutter of 2 s–1/1000 s, removing about 300 parts.",
    [
     7
    ]
   ],
   [
    1979,
    "ver",
    "Yashica Contax 139 Quartz 用石英晶振数字电路给整个曝光流程（含纵走焦平面快门）计时。",
    "The Yashica Contax 139 Quartz used quartz-oscillator digital circuits to time its whole exposure cycle, including the vertical focal-plane shutter.",
    [
     6
    ]
   ]
  ],
  "now": [
   "电子控时已是所有现存机械快门的标准做法；在纯电子快门里，计时直接由传感器的复位与读出完成。",
   "Electronic timing is standard for every mechanical shutter still made; in fully electronic shutters timing is done directly by sensor reset and readout."
  ],
  "replaced": [
   "本身没被淘汰，而是融入了传感器电子快门：曝光时间由 CMOS 复位到读出的间隔决定，不再需要机械帘幕。",
   "Not displaced so much as absorbed into the sensor electronic shutter: exposure is the interval between CMOS reset and readout, with no mechanical blades needed."
  ],
  "refs": [
   {
    "t": "Polaroid Automatic 100 - Collection Appareils",
    "u": "https://collection-appareils.fr/x/html/camera-10253-Polaroid_Automatic%20100.html"
   },
   {
    "t": "Polaroid Land Model 100 - instantphoto.eu",
    "u": "https://instantphoto.eu/pola/pola_100.htm"
   },
   {
    "t": "Journal of the SMPTE, Sept 1963 (Polaroid Automatic 100)",
    "u": "https://journal.smpte.org/periodicals/Journal%20of%20the%20SMPTE/72/9/33/07264476.pdf"
   },
   {
    "t": "Nikon: Part 7 Nikomat EL",
    "u": "https://imaging.nikon.com/history/chronicle/cousins07-e/index.htm"
   },
   {
    "t": "Yashica Electro 35 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Yashica_Electro_35"
   },
   {
    "t": "Nidec Copal Corporation - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nidec_Copal_Corporation"
   },
   {
    "t": "Focal-plane shutter - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Focal-plane_shutter"
   },
   {
    "t": "Canon AE-1 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Canon_AE-1"
   }
  ]
 },
 "ccdshut": {
  "stages": [
   [
    1969,
    "idea",
    "Bell Labs 的 Willard Boyle 与 George Smith 发明 CCD。CCD 的感光单元在一帧（场）时间里一直积累电荷，要缩短曝光，要么加机械快门，要么在积累开始前把电荷倒掉——后者就是电子快门的原理。",
    "Willard Boyle and George Smith invented the CCD at Bell Labs. A CCD pixel integrates charge for the whole frame (field) period, so shortening the exposure needs either a mechanical shutter or dumping the charge before integration starts — the latter is the principle of the electronic shutter.",
    [
     0
    ]
   ],
   [
    1980,
    "paper",
    "NEC 的 Nobukazu Teranishi、Hiromitsu Shiraki、Yasuo Ishihara 发明 pinned photodiode（埋入式光电二极管），电荷能被完全转移或排空、几乎无残留，为后来用纵向溢出漏极（VOD）一次性清空像素、实现可变速电子快门打下基础。",
    "At NEC, Nobukazu Teranishi, Hiromitsu Shiraki and Yasuo Ishihara invented the pinned photodiode, whose charge can be transferred or drained completely with almost no lag — the groundwork for later clearing pixels through a vertical overflow drain (VOD) to get a variable-speed electronic shutter.",
    [
     1
    ]
   ],
   [
    1983,
    "mass",
    "Sony 根据 Yoshiaki Hagiwara 1981 年的原型推出 CCD-G5，是第一台量产的消费级 CCD 摄像机；Hagiwara 提出的 HAD（Hole Accumulation Diode）结构后来成为 Sony 隔行转移 CCD 电子快门的基础。",
    "Based on Yoshiaki Hagiwara's 1981 prototype, Sony released the CCD-G5, the first mass-produced consumer CCD video camera; Hagiwara's HAD (Hole Accumulation Diode) structure later underpinned the electronic shutter in Sony's interline-transfer CCDs.",
    [
     0
    ]
   ],
   [
    1984,
    "mass",
    "RCA 在 NAB 1984 推出 CCD-1，号称第一台商用全固态广播摄像机，使用 David Sarnoff Research Center 的帧转移 CCD，没有显像管的拖尾和残像，1985 年获艾美奖；资料提到有可选的高速快门版本（是否为纯电子快门资料未说明）。",
    "RCA introduced the CCD-1 at NAB 1984, billed as the first commercial all-solid-state broadcast camera, using frame-transfer CCDs from the David Sarnoff Research Center with none of the comet-tailing or lag of tubes; it won an Emmy in 1985. An optional fast-shutter version is mentioned (sources do not say whether it was purely electronic).",
    [
     2
    ]
   ],
   [
    1987,
    "mass",
    "Sony 8mm Handycam 高端机型（如约 1987–88 年的 CCD-V90）提供最高 1/4000 秒的电子高速快门：每场 20 ms 里 CCD 只积累最后约 250 µs 的电荷，其余时间的电荷被排掉，拍运动不再拖影。",
    "Higher-end Sony 8mm Handycams (such as the CCD-V90, c. 1987–88) offered an electronic high-speed shutter up to 1/4000 s: within each 20 ms field the CCD kept only the last ~250 µs of charge and drained the rest, freezing motion.",
    [
     3
    ]
   ],
   [
    1988,
    "ver",
    "Silicon Chip 报道最新 CCD 已能做到 64 µs（1/15,625 秒）快门。同年 Sony 的 Larry Thorpe、E. Tamura、T. Iwasaki 在 SMPTE Journal 介绍 FIT（帧行间转移）CCD：把帧转移叠加到隔行转移上，消除竖向拖影，同时能集成电子快门，用于广播摄像机。",
    "Silicon Chip reported that the latest CCDs could shutter at 64 µs (1/15,625 s). The same year Sony's Larry Thorpe, E. Tamura and T. Iwasaki described the FIT (frame-interline-transfer) CCD in the SMPTE Journal: adding frame transfer to interline transfer removed vertical smear and allowed an integrated electronic shutter for broadcast cameras.",
    [
     3,
     4
    ]
   ],
   [
    1990,
    "ver",
    "1988–1990 年 Sony、Toshiba、Matsushita 先后做出约 200 万像素（1920×1036）的 FIT CCD，满足 HDTV 规格；Sony 用 HAD 结构抑制暗电流，1992 年推出用三片这种 CCD 的 HD 彩色摄像机。",
    "Between 1988 and 1990 Sony, Toshiba and Matsushita built ~2-megapixel (1920×1036) FIT CCDs for HDTV; Sony used its HAD structure to suppress dark current and in 1992 released an HD color camera with three of these CCDs.",
    [
     5
    ]
   ],
   [
    2004,
    "ver",
    "Nikon D70 用 6MP CCD 搭配“机械 + CCD 电子”混合快门：机械帘幕只开到较慢速度，更高速度由 CCD 电子快门截止，最高 1/8000 秒、官方闪光同步 1/500 秒，实际还能更高速同步。",
    "The Nikon D70 paired a 6MP CCD with a hybrid mechanical + CCD electronic shutter: the mechanical curtains handled slower speeds and the CCD's electronic shutter cut off faster ones, reaching 1/8000 s with an official flash sync of 1/500 s (and higher in practice).",
    [
     6
    ]
   ],
   [
    2007,
    "rival",
    "CMOS 成为竞争方案：Sony 2007 年量产带列并行 A/D 的 CMOS、2009 年推出背照式（BSI）CMOS、2012 年推出堆栈式 CMOS，速度、功耗、成本全面超过 CCD。",
    "CMOS became the rival: Sony commercialized CMOS with column-parallel A/D in 2007, back-illuminated (BSI) CMOS in 2009 and stacked CMOS in 2012, overtaking CCD on speed, power and cost.",
    [
     1
    ]
   ],
   [
    2015,
    "end",
    "Sony 宣布停产 CCD：2015 年 8 月最后订货、2017 年 3 月停止晶圆生产、2020 年 3 月停止出货，转向 CMOS；CCD 电子快门随之退出主流。",
    "Sony announced the end of its CCDs: last-time buy in August 2015, wafer production ending March 2017 and shipments ending March 2020, shifting to CMOS; the CCD electronic shutter left the mainstream with it.",
    [
     7
    ]
   ]
  ],
  "now": [
   "只在存量工业、科研 CCD 相机里还在用。隔行转移 CCD 的电子快门本质上是全局快门（所有像素同时开始、同时结束），这个思路被 Sony Pregius 等全局快门 CMOS 继承。",
   "Survives only in legacy industrial and scientific CCD cameras. The interline CCD's electronic shutter is inherently global (all pixels start and stop together), an idea carried on by global-shutter CMOS such as Sony Pregius."
  ],
  "replaced": [
   "被 CMOS 的卷帘电子快门和后来的全局快门 CMOS 取代。",
   "Replaced by CMOS rolling electronic shutters and, later, global-shutter CMOS."
  ],
  "refs": [
   {
    "t": "Charge-coupled device — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Charge-coupled_device"
   },
   {
    "t": "Active-pixel sensor — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Active-pixel_sensor"
   },
   {
    "t": "SRI: RCA CCD-1, first all-solid-state broadcast camera",
    "u": "https://sri.com/?p=5311"
   },
   {
    "t": "Silicon Chip (Sep 1988): From the electronic shutter to high-definition TV",
    "u": "https://siliconchip.com.au/Issue/1988/September/From+the+electronic+shutter+to+high-definition+TV"
   },
   {
    "t": "Thorpe, Tamura, Iwasaki: New Advances in CCD Imaging (SMPTE Journal 1988)",
    "u": "https://journal.smpte.org/periodicals/SMPTE%20Journal/97/5/17/"
   },
   {
    "t": "Semiconductor History Museum of Japan: first 2-megapixel HDTV CCD (1990)",
    "u": "https://www.shmj.or.jp/english/pdf/dis/exhibi335E.pdf"
   },
   {
    "t": "DPReview: Nikon D70 Review",
    "u": "https://www.dpreview.com/reviews/nikond70"
   },
   {
    "t": "PetaPixel: Sony to Stop Producing CCD Image Sensors (2015)",
    "u": "https://petapixel.com/2015/03/01/sony-to-stop-producing-ccd-image-sensors-to-focus-on-cmos-growth"
   }
  ]
 },
 "hss": {
  "stages": [
   [
    1939,
    "mass",
    "约 1939 年起 GE No.6 等焦平面闪光泡（FP bulb，Sylvania 对应型号 FP-26）上市：特制箔丝让亮度在约 15–30 ms 内保持平稳，帘幕缝扫过整个画面时都被均匀照亮，可在任意快门速度同步。",
    "From about 1939, focal-plane (FP) flashbulbs such as the GE No.6 (Sylvania FP-26) appeared: special foil kept output flat for roughly 15–30 ms, so the shutter slit was evenly lit across the frame at any shutter speed.",
    [
     1
    ]
   ],
   [
    1985,
    "corp",
    "Olympus 约在 1985–86 年随 OM-77AF 推出 F280 “Full Synchro”闪光灯，用电子方式模仿 FP 闪光泡：把一次闪光拆成持续约 40 ms 的高频脉冲。",
    "Around 1985–86 Olympus introduced the F280 \"Full Synchro\" flash with the OM-77AF, electronically mimicking the FP bulb by turning one flash into high-frequency pulses lasting about 40 ms.",
    [
     0
    ]
   ],
   [
    1986,
    "mass",
    "Olympus OM-4Ti（美国称 OM-4T）加入高速闪光同步：配 F280 时连续发光覆盖帘缝扫过的全程，最高可在 1/2000 秒同步；代价是有效闪光距离大幅缩短。",
    "The Olympus OM-4Ti (OM-4T in the US) added high-speed flash sync: with the F280 the pulsed light covered the slit's whole travel, syncing up to 1/2000 s, at the cost of much shorter flash range.",
    [
     0
    ]
   ],
   [
    1992,
    "ver",
    "Nikon F90（N90）与 SB-25 闪光灯推出 “FP High-Speed Sync”：闪光以极快频率连续发光，帘幕始终只开一条缝，同步速度提高到 1/4000 秒；1994 年的 SB-26 和 F5 延续这一功能。",
    "The Nikon F90 (N90) and SB-25 introduced \"FP High-Speed Sync\": the flash fired at a very rapid rate while the curtains exposed only a slit, raising sync to 1/4000 s; the SB-26 and F5 continued it.",
    [
     2
    ]
   ],
   [
    1993,
    "ver",
    "Minolta 约在 1993 年推出 Program 5400HS 闪光灯，在兼容机身上做 HSS，最高可到 1/12000 秒（配合 Dynax/Maxxum 9xi 等高速快门机身）。",
    "Minolta launched the Program 5400HS around 1993, providing HSS on compatible bodies up to 1/12000 s (with fast-shutter bodies such as the Dynax/Maxxum 9xi).",
    [
     3
    ]
   ],
   [
    1995,
    "ver",
    "Canon 在 EOS 50（Elan II）上推出 E-TTL，并配首款 E-TTL 闪光灯 Speedlite 380EX；其 FP 闪光模式支持 1/180–1/4000 秒高速同步。",
    "Canon introduced E-TTL with the EOS 50 (Elan II) and its first E-TTL flash, the Speedlite 380EX, whose FP flash mode allowed high-speed sync from 1/180 to 1/4000 s.",
    [
     4
    ]
   ],
   [
    2009,
    "rival",
    "PocketWizard 在 2009 年 5 月为 MiniTT1/FlexTT5 推出固件 4.250，按快门速度精确控制 Canon 闪光灯 HSS 时长，效率提升可达 60%；同期的 HyperSync 走另一条路：不用脉冲，而是提前触发单次闪光，用它较长的余辉尾巴覆盖帘缝。",
    "In May 2009 PocketWizard released firmware 4.250 for the MiniTT1/FlexTT5, matching Canon Speedlite HSS duration to the shutter speed for up to 60% better efficiency; its HyperSync took another route: no pulsing, but an early-timed single pop whose long tail covers the slit.",
    [
     5
    ]
   ],
   [
    2013,
    "ver",
    "Profoto 在 2013 年 11 月发布电池供电的 500 Ws 影室灯 B1，支持 TTL；约在 2014 年起通过免费固件加入 HSS，最高可到 1/8000 秒，把高速同步从机顶闪光带到了大功率外拍灯。",
    "In November 2013 Profoto announced the B1, a battery-powered 500 Ws studio head with TTL; from about 2014 a free firmware update added HSS up to 1/8000 s, bringing high-speed sync from speedlights to high-power location strobes.",
    [
     6
    ]
   ],
   [
    2023,
    "end",
    "Sony α9 III（2023 年 11 月发布）用全局快门传感器，所有像素同时曝光，闪光可在任意快门速度（最高 1/80000 秒）同步，不再需要 HSS 的脉冲发光。",
    "The Sony α9 III (announced November 2023) used a global-shutter sensor exposing all pixels at once, so flash can sync at any shutter speed (up to 1/80000 s) without HSS pulsing.",
    [
     7
    ]
   ]
  ],
  "now": [
   "几乎所有系统闪光灯、无线引闪器和电池外拍灯都支持 HSS，常用于日光下大光圈补光；但脉冲发光要损失 1–2 档以上的有效功率。",
   "HSS is supported by almost every system flash, radio trigger and battery strobe, and is routinely used for wide-aperture fill flash in daylight, though pulsing costs one to two or more stops of effective power."
  ],
  "replaced": [
   "全局快门传感器（如 Sony α9 III）和镜间快门能在任意速度直接同步，正在部分取代 HSS；卷帘/焦平面快门仍占主流，所以 HSS 还没被淘汰。",
   "Global-shutter sensors (such as the Sony α9 III) and leaf shutters sync directly at any speed and are partly displacing HSS; since rolling/focal-plane shutters still dominate, HSS is not yet obsolete."
  ],
  "refs": [
   {
    "t": "Olympus OM-4 — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Olympus_OM-4"
   },
   {
    "t": "Camerapedia: Flashbulbs",
    "u": "https://camerapedia.fandom.com/wiki/Flashbulbs"
   },
   {
    "t": "Nikon SB-25 Instruction Manual: FP High-Speed Sync Flash",
    "u": "https://www.manualslib.com/manual/299484/Nikon-Sb-25.html?page=50"
   },
   {
    "t": "Minolta 9xi — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Minolta_9xi"
   },
   {
    "t": "Bob Atkins EOS FAQ: Canon 380EX",
    "u": "https://bobatkins.com/photography/eosfaq/380EX.HTM"
   },
   {
    "t": "Imaging Resource: PocketWizard firmware upgrade for MiniTT1/FlexTT5 (2009)",
    "u": "https://www.imaging-resource.com/NEWS/1241430919.html"
   },
   {
    "t": "Imaging Resource: Profoto announces B1 off-camera flash with TTL (2013)",
    "u": "https://www.imaging-resource.com/news/2013/11/06/profoto-announces-b1-off-camera-flash-with-ttl"
   },
   {
    "t": "PetaPixel: Sony Announces a9 III, World's First Global Sensor Full-Frame Camera",
    "u": "https://petapixel.com/2023/11/07/sony-announces-a9-iii-worlds-first-global-sensor-full-frame-camera"
   }
  ]
 },
 "precap": {
  "stages": [
   [
    1989,
    "corp",
    "Eastman Kodak 的 Kurt V. Blessinger 于 1989 年 11 月申请专利 US5140436：固态高速帧记录器用环形存储连续写入，存满后新帧覆盖最旧帧；外部触发加可编程延迟，就能同时保留事件前后的画面，1–1000 fps。",
    "In November 1989 Eastman Kodak's Kurt V. Blessinger filed US patent 5,140,436: a solid-state fast frame recorder writes continuously into circular memory, the newest frame overwriting the oldest; an external trigger with programmable delay keeps frames both before and after the event, at 1–1000 fps.",
    [
     0
    ]
   ],
   [
    1992,
    "mass",
    "专利于 1992 年 8 月授权；约同期 Kodak 的 EKTAPRO EM Motion Analyzer（Model 1012）等固态高速摄像机以触发模式工作，用于碰撞测试、机械故障分析，取代磁带记录（后转给 Redlake）。",
    "The patent was granted in August 1992; around then Kodak's EKTAPRO EM Motion Analyzer (Model 1012) and similar solid-state high-speed cameras ran in trigger modes for crash tests and machinery diagnosis, replacing tape (the line later passed to Redlake).",
    [
     0
    ]
   ],
   [
    2008,
    "mass",
    "Casio 在 CES 2008 发布 EXILIM Pro EX-F1（同年 3 月上市，999 美元）：6MP CMOS 60 fps 连拍，半按快门即开始缓存，按下时连同之前的画面一起保存；后续固件又加入预录视频。",
    "Casio unveiled the EXILIM Pro EX-F1 at CES 2008 (on sale March, $999): 6MP CMOS bursts at 60 fps, buffering from the half-press and saving the earlier frames on full press; a later firmware added pre-record movies.",
    [
     1
    ]
   ],
   [
    2013,
    "ver",
    "HTC One 的 Zoe 模式把预拍带进手机：按快门前约 1 秒起录 3 秒视频并连拍最多 20 张全分辨率照片，再从中挑最好的一张。",
    "The HTC One's Zoe mode brought pre-capture to phones: a 3-second clip starting about a second before the press plus up to 20 full-resolution shots to pick from.",
    [
     2
    ]
   ],
   [
    2015,
    "ver",
    "Apple iPhone 6s 推出 Live Photos：12MP 照片附带按快门前后各约 1.5 秒的画面，预缓存成为手机相机的默认行为。",
    "Apple's iPhone 6s introduced Live Photos: a 12MP photo plus roughly 1.5 seconds before and after the press, making pre-buffering a default phone-camera behavior.",
    [
     3
    ]
   ],
   [
    2015,
    "ver",
    "Panasonic LUMIX G7 推出 4K PHOTO，其中 “4K Pre-burst” 以 30 fps、8MP 记录按快门前后各 1 秒共 60 帧。",
    "The Panasonic LUMIX G7 introduced 4K PHOTO, whose \"4K Pre-burst\" recorded 60 frames at 30 fps and 8MP covering a second before and after the press.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "Olympus OM-D E-M1 Mark II 推出 Pro Capture：半按时以电子快门持续缓存 20MP RAW/JPEG，全按时保存之前最多 14 帧，最高 60 fps，把全分辨率预拍带进专业机。",
    "The Olympus OM-D E-M1 Mark II introduced Pro Capture: while half-pressed it buffers 20MP RAW/JPEG with the electronic shutter, saving up to 14 earlier frames on full press at up to 60 fps — full-resolution pre-capture in a pro body.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "Nikon 于 2022 年 4 月为 Z9 推出固件 2.0，在 11MP 120 fps 模式中加入 Pre-Release Capture，最多保留按下前 1 秒，是全画幅首个此类功能。",
    "Nikon's Z9 firmware 2.0 (April 2022) added Pre-Release Capture in the 11MP 120 fps mode, keeping up to one second before the press — the first such feature on full frame.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "Sony α9 III 的 Pre-Capture 半按或按 AF-ON 即缓存，最多保留 1 秒，可在任意文件格式、最高 120 fps 下使用并保持 AF/AE 追踪；预拍成为各家旗舰标配。",
    "The Sony α9 III's Pre-Capture buffers from a half-press or AF-ON, keeping up to one second in any file format at up to 120 fps with full AF/AE tracking; pre-capture became standard on flagships.",
    [
     7
    ]
   ]
  ],
  "now": [
   "Canon、Nikon、Sony、Fujifilm、OM System、Panasonic 的中高端机和手机（Live Photos、动态照片、零延迟快门）都在用，受电子快门读出速度、缓存和发热限制。",
   "Used across mid-to-high-end Canon, Nikon, Sony, Fujifilm, OM System and Panasonic bodies and in phones (Live Photos, motion photos, zero-shutter-lag), limited by electronic-shutter readout, buffer and heat."
  ],
  "replaced": [
   "尚未被替代；高帧率 8K 视频抽帧与手机零延迟快门是同一思路的延伸。",
   "Not replaced; high-frame-rate 8K frame grabs and phone zero-shutter-lag are extensions of the same idea."
  ],
  "refs": [
   {
    "t": "US5140436A: Pre-event/post-event recording in a solid state fast frame recorder (Kodak)",
    "u": "https://patents.google.com/patent/US5140436"
   },
   {
    "t": "DPReview: Casio EXILIM Pro EX-F1: 60fps",
    "u": "https://www.dpreview.com/articles/6924593847/casiof1"
   },
   {
    "t": "AnandTech: The HTC One Review (camera / Zoe)",
    "u": "https://www.anandtech.com/show/6747/htc-one-review/9"
   },
   {
    "t": "Apple Newsroom: Apple Introduces iPhone 6s & iPhone 6s Plus (2015)",
    "u": "https://www.apple.com/newsroom/2015/09/09Apple-Introduces-iPhone-6s-iPhone-6s-Plus/"
   },
   {
    "t": "Digital Trends: Panasonic Lumix G7 adds new 4K modes",
    "u": "https://www.digitaltrends.com/photography/panasonic-lumix-g7-adds-new-4k-modes-for-never-missing-that-shot/"
   },
   {
    "t": "Photography Blog: Olympus OM-D E-M1 Mark II Pro Capture Mode",
    "u": "https://www.photographyblog.com/news/olympus_om_d_e_m1_mark_ii_pro_capture_mode"
   },
   {
    "t": "Nikon: Firmware version 2.0 for the Z 9 (April 2022)",
    "u": "https://www.nikon.com/news/2022/0414_mirrorless_01.htm"
   },
   {
    "t": "Alpha Universe: How to get the shot with Pre-Capture",
    "u": "https://alphauniverse.com/stories/how-to-get-the-shot-with-pre-capture/"
   }
  ]
 },
 "cmosrs": {
  "stages": [
   [
    1967,
    "idea",
    "Peter J. W. Noble 提出带像素内选择晶体管的图像传感器，1968 年 G. Weckler 提出光电二极管阵列：MOS 传感器按行列地址逐行选通读出，逐行复位、逐行读出的卷帘方式由此而来。",
    "Peter J. W. Noble proposed image sensor elements with in-pixel selection transistors and G. Weckler proposed photodiode arrays in 1968: MOS sensors address and read row by row, the origin of row-wise reset and readout — the rolling shutter.",
    [
     0
    ]
   ],
   [
    1985,
    "proto",
    "Olympus 的 Tsutomu Nakamura 团队做出第一个 MOS 有源像素传感器 CMD（Charge Modulation Device），并提出 active pixel sensor 这一名称。",
    "Tsutomu Nakamura's team at Olympus built the first MOS active pixel sensor, the Charge Modulation Device (CMD), and coined the term active pixel sensor.",
    [
     0
    ]
   ],
   [
    1989,
    "proto",
    "Edinburgh 大学 Peter Denyer 与 David Renshaw、Lu Mingying、Wang Guoyu 完成世界首个单芯片 CMOS 视频摄像头并发表论文。",
    "At the University of Edinburgh, Peter Denyer with David Renshaw, Lu Mingying and Wang Guoyu completed and published the world's first single-chip CMOS video camera.",
    [
     1
    ]
   ],
   [
    1990,
    "corp",
    "Denyer 与 Renshaw 在大学和风投支持下创办 VLSI Vision Ltd（VVL），最初面向安防，把 CMOS 摄像芯片商业化。",
    "Denyer and Renshaw founded VLSI Vision Ltd (VVL) with university and venture backing to commercialize CMOS camera chips, initially for security.",
    [
     1
    ]
   ],
   [
    1993,
    "paper",
    "NASA JPL 的 Eric Fossum、Sunetra Mendis、Sabrina Kemeny 做出带像素内电荷转移的 CMOS APS；Fossum 在 SPIE 1900 卷发表《Active Pixel Sensors: Are CCD's Dinosaurs?》，重新定义并推广 APS。",
    "At NASA JPL, Eric Fossum, Sunetra Mendis and Sabrina Kemeny built a CMOS APS with intra-pixel charge transfer; Fossum's SPIE vol. 1900 paper \"Active Pixel Sensors: Are CCD's Dinosaurs?\" redefined and popularized the APS.",
    [
     0
    ]
   ],
   [
    1994,
    "mass",
    "VVL 推出 PC Card Camera：320×240、256 级灰度、电子快门，经 PCMCIA 直接把画面送进笔记本，售价 599 美元，号称第一台可直连便携电脑的微型摄像机（来源未写明传感器类型，约）。",
    "VVL launched the PC Card Camera: 320×240, 256 gray levels, electronic shutter, feeding a laptop directly over PCMCIA for $599, billed as the first miniature camera to connect straight to a portable PC (the source does not state the sensor type).",
    [
     2
    ]
   ],
   [
    1997,
    "ver",
    "VVL 当年出货 100 万个摄像头并获 Queen's Award，1998–99 年被 STMicroelectronics 以 2320 万英镑收购，成为其成像部门，后来成为手机摄像芯片大厂。",
    "VVL shipped a million cameras that year and won a Queen's Award; in 1998–99 STMicroelectronics bought it for £23.2M, making it its imaging division and later a major phone camera-chip supplier.",
    [
     1
    ]
   ],
   [
    1999,
    "mass",
    "Kyocera VP-210（1999 年 5 月，日本 PHS）配 11 万像素 CMOS 前置摄像头，是首款量产拍照手机；同年 Fossum 与 Kemeny 1995 年创办的 Photobit 推出 352×288 的 PB-100，用于 Intel Easy PC Camera 和 Logitech QuickCam。",
    "The Kyocera VP-210 (May 1999, Japanese PHS) carried a 110,000-pixel CMOS front camera, the first mass-market camera phone; that year Photobit, founded by Fossum and Kemeny in 1995, shipped the 352×288 PB-100 used in the Intel Easy PC Camera and Logitech QuickCam.",
    [
     4,
     3
    ]
   ],
   [
    2007,
    "ver",
    "Sony 量产带列并行 A/D 的 CMOS（Exmor），逐行读出更快；同年 RED One 用 4.9K 的 Mysterium CMOS 进入数字电影，但卷帘带来的斜切（skew）和闪光灯半帧曝光成为常见批评。",
    "Sony commercialized CMOS with column-parallel A/D (Exmor), speeding row readout; the same year the RED One brought the 4.9K Mysterium CMOS to digital cinema, though rolling-shutter skew and half-frame flash exposure drew criticism.",
    [
     0,
     5
    ]
   ],
   [
    2012,
    "ver",
    "Sony 2009 年推出背照式 CMOS、2012 年推出堆栈式 CMOS：逻辑电路移到下层，为后来的高速读出（缩短卷帘时间差）铺路。",
    "Sony introduced back-illuminated CMOS in 2009 and stacked CMOS in 2012, moving logic to a lower layer and paving the way for fast readout that shrinks the rolling-shutter time skew.",
    [
     0
    ]
   ],
   [
    2021,
    "ver",
    "Nikon Z9 用 45.7MP 堆栈式 CMOS，扫描速度约为 Z7 II 的 12 倍、卷帘变形约为其 1/12，干脆取消机械快门。",
    "The Nikon Z9 used a 45.7MP stacked CMOS scanning about 12× faster than the Z7 II, with about 1/12 the rolling distortion, and dropped the mechanical shutter entirely.",
    [
     6
    ]
   ],
   [
    2023,
    "end",
    "Sony α9 III 用 24.6MP 全局快门 CMOS，所有像素同时曝光，120 fps 下也没有卷帘变形，开始从相机端替代卷帘电子快门。",
    "The Sony α9 III used a 24.6MP global-shutter CMOS exposing all pixels at once, with no rolling distortion even at 120 fps, starting to replace the rolling electronic shutter in cameras.",
    [
     7
    ]
   ]
  ],
  "now": [
   "仍是手机和绝大多数相机的主流读出方式；堆栈式传感器把整帧读出时间压到几毫秒，果冻效应大幅减轻。",
   "Still the mainstream readout in phones and most cameras; stacked sensors cut full-frame readout to a few milliseconds, greatly reducing jello."
  ],
  "replaced": [
   "正被全局快门 CMOS 逐步替代（工业领域 Sony Pregius 2013 年起，消费相机 Sony α9 III 2023 年起），但全局快门在噪声和动态范围上仍有代价，尚未全面取代。",
   "Being gradually replaced by global-shutter CMOS (industrial Sony Pregius from 2013, consumer Sony α9 III from 2023), but global shutters still cost noise and dynamic range, so replacement is not complete."
  ],
  "refs": [
   {
    "t": "Active-pixel sensor — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Active-pixel_sensor"
   },
   {
    "t": "Peter B. Denyer — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Peter_B._Denyer"
   },
   {
    "t": "Digitalkamera-Museum: VLSI Vision PC Card Camera (1994)",
    "u": "https://www.digitalkameramuseum.de/en/cameras/item/vlsi-pc-card-camera"
   },
   {
    "t": "IEEE Spectrum Chip Hall of Fame: Photobit PB-100",
    "u": "https://spectrum.ieee.org/chip-hall-of-fame-photobit-pb100"
   },
   {
    "t": "Science Museum Group: Kyocera Visualphone VP210 (1999)",
    "u": "https://collection.sciencemuseumgroup.org.uk/objects/co523555/kyocera-visualphone-vp210-mobile-video-phone-1999"
   },
   {
    "t": "Red Digital Cinema — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Red_Digital_Cinema"
   },
   {
    "t": "PetaPixel: Nikon Unveils the Z9: 45.7MP, 120FPS, 8K, and No Mechanical Shutter",
    "u": "https://petapixel.com/2021/10/28/nikon-unveils-the-z9-45-7mp-120fps-8k-and-no-mechanical-shutter"
   },
   {
    "t": "PetaPixel: Sony Announces a9 III, World's First Global Sensor Full-Frame Camera",
    "u": "https://petapixel.com/2023/11/07/sony-announces-a9-iii-worlds-first-global-sensor-full-frame-camera"
   }
  ]
 },
 "efcs": {
  "stages": [
   [
    2007,
    "mass",
    "Canon EOS 40D（2007 年 8 月发布）的 CMOS 支持电子前帘：实时取景静音拍摄时机械快门保持全开，由传感器逐行复位开始曝光、机械后帘结束曝光，减少快门延迟与上弦噪音；白皮书说明 CMOS 难以做电子后帘，所以只有前帘是电子的。",
    "The Canon EOS 40D (announced August 2007) supported an electronic first curtain: in Live View silent shooting the mechanical shutter stays open, row-by-row sensor reset starts exposure and the mechanical rear curtain ends it, cutting lag and cocking noise; Canon's white paper notes an electronic second curtain is hard on CMOS, so only the first curtain is electronic.",
    [
     0
    ]
   ],
   [
    2011,
    "ver",
    "Sony 2011 年 8 月发布 SLT-A77、A65、NEX-7、NEX-5N，是其首批带电子前帘的相机；NEX-5N 释放延迟约 20 ms，号称当时可换镜头相机最快。",
    "In August 2011 Sony announced the SLT-A77, A65, NEX-7 and NEX-5N, its first cameras with an electronic front curtain; the NEX-5N's release lag was about 20 ms, claimed as the fastest of any interchangeable-lens camera.",
    [
     1,
     2
    ]
   ],
   [
    2013,
    "rival",
    "Sony A7R 没有电子前帘，机械快门的震动在某些快门速度下明显降低 36MP 画面的锐度（shutter shock），让电子前帘的价值被广泛讨论。",
    "The Sony A7R lacked an electronic front curtain, and its mechanical shutter's vibration visibly softened 36MP images at certain speeds (shutter shock), making EFCS's value widely discussed.",
    [
     3,
     4
    ]
   ],
   [
    2014,
    "ver",
    "Nikon D810 加入电子前帘，但只在反光镜预升模式下启用；高于约 1/2000 秒时不工作，并有人发现高速 + 大光圈下电子前帘会让焦外光斑被截切、曝光不均——因为传感器复位面和机械后帘不在同一平面。",
    "The Nikon D810 added an electronic front curtain, but only in mirror-up mode; it does not work above about 1/2000 s, and users found it can clip out-of-focus highlights and expose unevenly at fast speeds with wide apertures, because the sensor reset plane and the mechanical rear curtain are not coplanar.",
    [
     3,
     1
    ]
   ],
   [
    2015,
    "ver",
    "Canon EOS 5DS/5DS R（2015 年 2 月发布）在实时取景静音模式 1/2 下使用电子前帘（Chuck Westfall 确认），以免 50MP 画面被快门震动拖累。",
    "The Canon EOS 5DS/5DS R (announced February 2015) used the electronic first curtain in Live View silent modes 1/2 (confirmed by Chuck Westfall) to keep shutter vibration from blurring 50MP images.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "Sony A7R II 加入电子前帘，并延续到之后的 Sony 全画幅机型，A7R 时代的 shutter shock 基本不再是问题。",
    "The Sony A7R II added an electronic front curtain, carried into later Sony full-frame bodies, making the A7R-era shutter shock essentially a non-issue.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "Fujifilm X-T2（2016 年 7 月发布）提供电子前帘模式，最高 1/4000 秒，与机械快门、全电子快门三选一；电子前帘逐渐成为无反默认快门方式。",
    "The Fujifilm X-T2 (announced July 2016) offered an electronic front curtain mode up to 1/4000 s alongside mechanical and fully electronic shutters; EFCS gradually became the default in mirrorless cameras.",
    [
     5
    ]
   ],
   [
    2021,
    "end",
    "Nikon Z9 用堆栈式传感器高速读出，完全取消机械快门，前后帘都由电子完成，电子前帘这一过渡方案在旗舰机上不再需要。",
    "The Nikon Z9 used fast stacked-sensor readout to drop the mechanical shutter entirely, doing both curtains electronically, so the transitional EFCS was no longer needed on the flagship.",
    [
     6
    ]
   ],
   [
    2023,
    "end",
    "Sony α9 III 的全局快门所有像素同时开始和结束曝光，既无快门震动也无卷帘变形，连机械后帘的理由也消失。",
    "The Sony α9 III's global shutter starts and ends exposure for all pixels at once, with neither shutter vibration nor rolling distortion, removing the reason for even a mechanical rear curtain.",
    [
     7
    ]
   ]
  ],
  "now": [
   "仍是多数无反和单反实时取景的默认快门方式：兼顾低震动、短延迟，以及机械后帘带来的闪光同步和低卷帘变形；高速大光圈时相机常自动切回全机械。",
   "Still the default shutter in most mirrorless cameras and DSLR live view, balancing low vibration and short lag with the flash sync and low rolling distortion of a mechanical rear curtain; cameras often auto-switch to full mechanical at fast speeds with wide apertures."
  ],
  "replaced": [
   "在旗舰机上正被全电子快门（堆栈式高速读出，如 Nikon Z9）和全局快门（Sony α9 III）取代。",
   "On flagships it is being replaced by fully electronic shutters (fast stacked readout, e.g. Nikon Z9) and global shutters (Sony α9 III)."
  ],
  "refs": [
   {
    "t": "Canon EOS 40D White Paper",
    "u": "https://content.abt.com/documents/27983/EOS_40D_WhitePaper.pdf"
   },
   {
    "t": "mhohner.de: Electronic Front Curtain Shutters",
    "u": "https://mhohner.de/newsitem2/efcs"
   },
   {
    "t": "DPReview: Sony NEX-5N Review",
    "u": "https://www.dpreview.com/reviews/sonynex5n/2"
   },
   {
    "t": "Photography Life: What is Electronic Front Curtain Shutter?",
    "u": "https://photographylife.com/what-is-electronic-front-curtain-shutter"
   },
   {
    "t": "diglloyd: Canon EOS 5DS/R has Electronic First Curtain Shutter (2015)",
    "u": "https://diglloyd.com/blog/2015/20150206_0904-Canon5DS-EFC-shutter.html"
   },
   {
    "t": "Fujifilm X-T2 — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Fujifilm_X-T2"
   },
   {
    "t": "TechRadar: Nikon explains why the Z9 ditches the mechanical shutter",
    "u": "https://www.techradar.com/news/nikon-explains-why-the-z9-ditches-the-mechanical-shutter-and-why-its-a-big-deal"
   },
   {
    "t": "PetaPixel: Sony Announces a9 III, World's First Global Sensor Full-Frame Camera",
    "u": "https://petapixel.com/2023/11/07/sony-announces-a9-iii-worlds-first-global-sensor-full-frame-camera"
   }
  ]
 },
 "esilent": {
  "stages": [
   [
    1999,
    "corp",
    "Nikon D1 用 CCD 的电子快门配合机械快门，把最高快门做到 1/16000 s：机械帘幕负责大部分曝光控制，超高速段靠 CCD 电荷清空与转移完成。这是可换镜头机身里电子快门的早期形态，但还是混合式。",
    "The Nikon D1 combined the CCD's electronic shutter with a mechanical shutter to reach 1/16000 s: the curtains handled most exposure control, while the fastest speeds relied on clearing and transferring charge on the CCD. It was an early, still hybrid, form of the electronic shutter in an interchangeable-lens body.",
    [
     0
    ]
   ],
   [
    2011,
    "mass",
    "2011 年 6 月 Pentax Q 上市：镜头内有叶片快门（最高 1/2000 s），另可切换到电子快门，范围 2 s–1/8000 s，此时 B 门等功能不可用。它比 Nikon 1 J1 早三个月就在可换镜头相机上提供了电子快门选项。",
    "The Pentax Q (June 2011) had a leaf shutter in its lenses (up to 1/2000 s) plus a selectable electronic shutter covering 2 s to 1/8000 s, with Bulb and some other functions unavailable. It offered an electronic-shutter option in an interchangeable-lens camera three months before the Nikon 1 J1.",
    [
     1
    ]
   ],
   [
    2011,
    "mass",
    "2011 年 9 月 Nikon 1 J1 发布：1 英寸 CMOS，只有电子快门，最高 1/16000 s，是首批完全靠传感器控制曝光起止的可换镜头相机之一。代价是闪光同步只有 1/60 s，高速时可能出现传感器伪影。",
    "The Nikon 1 J1 (September 2011) had a 1-inch CMOS sensor and only an electronic shutter, topping out at 1/16000 s; it was among the first interchangeable-lens cameras to start and end every exposure on the sensor. The costs were a 1/60 s flash sync and possible sensor artifacts at high speeds.",
    [
     2
    ]
   ],
   [
    2011,
    "rival",
    "同时发布的 Nikon 1 V1 保留机械 + 电子双快门：机械快门让闪光同步达到 1/250 s。可见早期电子快门因逐行读出慢，在闪光和快速运动下仍需机械快门兜底。",
    "The Nikon 1 V1, launched alongside, kept both mechanical and electronic shutters; the mechanical one allowed 1/250 s flash sync. Early electronic shutters read out line by line too slowly for flash and fast motion, so a mechanical fallback was still needed.",
    [
     2
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 12 月 18 日 Fujifilm 给 X-T1 推送固件 3.00，加入电子快门，最高 1/32000 s（机械快门只有 1/4000 s），当时是无反和单反里最快的快门速度。",
    "On 18 December 2014 Fujifilm released firmware 3.00 for the X-T1, adding an electronic shutter with a top speed of 1/32000 s (the mechanical shutter stopped at 1/4000 s), then the fastest shutter speed on any mirrorless camera or DSLR.",
    [
     3
    ]
   ],
   [
    2017,
    "ver",
    "Sony α9 用全球首款全画幅堆栈式 CMOS（24.2MP，集成 DRAM），电子快门最高 1/32000 s，可无黑屏 20 fps 连拍，Sony 称之为抑制果冻效应的 anti-distortion shutter。这是电子快门第一次成为专业体育机的主力快门。",
    "The Sony α9 used the first full-frame stacked CMOS (24.2MP with integrated DRAM); its electronic shutter reached 1/32000 s and shot blackout-free at 20 fps, which Sony called an anti-distortion shutter. It was the first time the electronic shutter became the main shutter of a pro sports camera.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Sony α1 的 50MP 堆栈传感器读出约 1/260 s，电子快门下可以 1/200 s 闪光同步（APS-C 裁切 1/250 s），追平不少机械快门。",
    "The Sony α1's 50MP stacked sensor reads out in about 1/260 s, so its electronic shutter syncs flash at 1/200 s (1/250 s in APS-C crop), matching many mechanical shutters.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "Canon EOS R3 用 Canon 首款全画幅堆栈式背照 CMOS，电子快门最高 1/64000 s，30 fps 连拍果冻效应很小；电子快门闪光同步 1/180 s，是 Canon 首次。",
    "The Canon EOS R3 used Canon's first stacked back-illuminated full-frame CMOS; its electronic shutter reaches 1/64000 s and shoots 30 fps with little rolling distortion, and it syncs flash at 1/180 s on the electronic shutter, a first for Canon.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "Sony α9 III 是首款全局快门（global shutter）全画幅相机：24.6MP 堆栈 CMOS 所有像素同时曝光，最高 1/80000 s（连拍时 1/16000 s），120 fps 无果冻、无黑屏，任意快门速度都能闪光同步。",
    "The Sony α9 III became the first full-frame camera with a global shutter: its 24.6MP stacked CMOS exposes all pixels at once, reaching 1/80000 s (1/16000 s in bursts) and 120 fps with no rolling distortion or blackout, and flash syncs at any shutter speed.",
    [
     7
    ]
   ]
  ],
  "now": [
   "电子快门已是无反中高端机型的标配：堆栈式传感器把卷帘读出压到 1/200–1/270 s 左右，旗舰普遍 1/32000–1/64000 s，全局快门把上限推到 1/80000 s。入门机读出仍慢，电子快门下的果冻效应、闪光受限和频闪条纹依旧明显。",
   "The electronic shutter is now standard on mid- and high-end mirrorless cameras: stacked sensors cut rolling readout to roughly 1/200–1/270 s, flagships reach 1/32000–1/64000 s, and the global shutter pushes the limit to 1/80000 s. Entry-level bodies still read out slowly, so rolling distortion, flash limits and flicker banding remain noticeable there."
  ],
  "replaced": [
   "没有被替代，反而在替代机械快门；卷帘式电子快门本身正被更快的堆栈读出和全局快门逐步取代。",
   "Not replaced; it is replacing the mechanical shutter. The rolling electronic shutter itself is gradually giving way to faster stacked readout and global shutters."
  ],
  "refs": [
   {
    "t": "Nikon D1 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Nikon_D1"
   },
   {
    "t": "PENTAX Q Specifications - Ricoh Imaging",
    "u": "https://www.ricoh-imaging.co.jp/english/products/q/spec.html"
   },
   {
    "t": "Nikon 1 V1 / J1 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/nikonv1j1/2"
   },
   {
    "t": "Fujifilm Firmware Updates Add Big New Features to the X-T1, X-E2, X-E1, and X-Pro1 - PetaPixel",
    "u": "https://petapixel.com/2014/12/18/fujifilm-firmware-updates-add-big-new-features-x-t1-x-e2-x-e1-x-pro1"
   },
   {
    "t": "Sony Alpha a9 review - Camera Labs",
    "u": "https://www.cameralabs.com/sony-alpha-a9-review/"
   },
   {
    "t": "Sony a1 review - DPReview",
    "u": "https://www.dpreview.com/reviews/sony-a1-review"
   },
   {
    "t": "Canon EOS R3 review - Camera Labs",
    "u": "https://www.cameralabs.com/canon-eos-r3-review/"
   },
   {
    "t": "Sony α9 III - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_%CE%B19_III"
   }
  ]
 },
 "flicker": {
  "stages": [
   [
    2014,
    "mass",
    "Canon EOS 7D Mark II 是首台带频闪检测的 EOS：测光传感器检测光源闪烁频率，开启 anti-flicker 后把快门释放时刻对准亮度峰值，减少体育馆钠灯、汞灯下连拍的曝光和偏色跳动；关闭时只在取景器里闪烁警告。",
    "The Canon EOS 7D Mark II was the first EOS with flicker detection: its metering sensor measures the light's flicker frequency and, with anti-flicker on, times the shutter release to the brightness peak, reducing exposure and colour swings under sodium and mercury-vapour arena lights; with it off, the viewfinder only flashes a warning.",
    [
     0
    ]
   ],
   [
    2016,
    "rival",
    "Nikon D5 / D500 加入 Flicker reduction：取景器拍摄时检测 100/120 Hz（对应 50/60 Hz 市电）闪烁并调整拍摄时机，代价是连拍速度可能下降，暗背景或装饰灯下可能检测不到。",
    "The Nikon D5 / D500 added Flicker reduction: for viewfinder shooting it detects 100/120 Hz flicker (from 50/60 Hz mains) and adjusts shot timing, at the cost of a possibly lower frame rate and missed detection against dark backgrounds or decorative lighting.",
    [
     1
    ]
   ],
   [
    2019,
    "corp",
    "2019 年 2 月 19 日 STMicroelectronics 发布 VD6281 多光谱环境光传感器，面向手机相机，可检测 50 Hz–2 kHz 闪烁（精度优于 3%），同时用于白平衡校正。",
    "On 19 February 2019 STMicroelectronics announced the VD6281 multispectral ambient light sensor for phone cameras, detecting flicker from 50 Hz to 2 kHz with better than 3% accuracy and also aiding white balance.",
    [
     2
    ]
   ],
   [
    2019,
    "corp",
    "约 2019 年初 ams 推出 TCS3707：RGB + 接近 + 50/60 Hz 闪烁检测的组合传感器，面向手机，目标是消除卷帘快门相机在人工光下的条纹（banding）。",
    "Around early 2019 ams introduced the TCS3707, combining RGB, proximity and 50/60 Hz flicker detection for phones, aimed at removing banding from rolling-shutter cameras under artificial light (approx.).",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 10 月 28 日 ams 发布 TCS3408：闪烁灵敏度是 TCS3707 的三倍，片上 flicker 引擎检测 50/60 Hz，还可把采样序列存入内部缓存，识别最高约 2 kHz 的 PWM LED 闪烁。",
    "On 28 October 2019 ams announced the TCS3408, with three times the flicker sensitivity of the TCS3707; its on-chip engine detects 50/60 Hz and can buffer sample sequences to identify PWM LED flicker up to about 2 kHz.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 4 月 Sony α9 II 固件 2.00 加入高频闪烁对策（Hi Frequency flicker）：用户边看屏幕上的条纹边微调快门速度，应对 LED 屏幕等高于 100/120 Hz 的闪烁。",
    "In April 2020 Sony α9 II firmware 2.00 added high-frequency flicker reduction: the user fine-tunes shutter speed while watching the banding on screen, to handle LED displays and other flicker above 100/120 Hz.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Sony α1 把两种功能并列：Anti-flicker Shoot 只针对 100/120 Hz、只用于静态照片，可配合电子或机械快门自动择时；Variable Shutter 手动微调快门速度，覆盖 LED 等更高频闪烁，照片和视频都能用。",
    "The Sony α1 offered two functions side by side: Anti-flicker Shoot handles only 100/120 Hz for stills and times shots automatically with either electronic or mechanical shutter; Variable Shutter fine-tunes shutter speed manually for higher-frequency flicker such as LEDs, for both stills and movies.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "Canon EOS R6 Mark II 的高频防闪烁（High-Frequency Anti-Flicker）可自动检测 50.0–2011.2 Hz 的光源，并给出能避开条纹的快门速度，把 LED 高频闪烁从纯手动微调变成自动检测。",
    "The Canon EOS R6 Mark II's High-Frequency Anti-Flicker automatically detects light sources from 50.0 to 2011.2 Hz and suggests a shutter speed that avoids banding, turning high-frequency LED flicker from manual tuning into automatic detection.",
    [
     6
    ]
   ],
   [
    2025,
    "ver",
    "Honor Magic8 Pro 采用 ams OSRAM 的 HDR flicker 传感器，采样率最高 20,000 Hz（芯片本身支持 35 kHz、10 kHz 时 14 bit 动态范围），可实时测出灯光和屏幕的闪烁频率与深度。",
    "The Honor Magic8 Pro uses an ams OSRAM HDR flicker sensor sampling at up to 20,000 Hz (the chip supports 35 kHz and 14-bit dynamic range at 10 kHz), measuring the flicker frequency and depth of lights and displays in real time.",
    [
     7
    ]
   ]
  ],
  "now": [
   "相机端：主流无反都有 100/120 Hz 择时拍摄和高频 LED 微调/自动检测；手机端：独立 flicker 传感器已是旗舰标配，采样率从约 2 kHz 提到数十 kHz，结果喂给 ISP 选曝光时间和防条纹。",
   "On cameras, mainstream mirrorless bodies offer 100/120 Hz timed capture plus manual or automatic handling of high-frequency LED flicker. On phones, a dedicated flicker sensor is standard on flagships, with sampling rising from about 2 kHz to tens of kHz, feeding the ISP to pick exposure times and avoid banding."
  ],
  "replaced": [
   "没有被替代；LED 照明普及反而让它更重要。长远看，全局快门和更快读出能减轻条纹，但无法消除帧与帧之间的亮度跳动，仍需频闪检测。",
   "Not replaced; the spread of LED lighting has made it more important. Global shutters and faster readout reduce banding, but cannot remove frame-to-frame brightness swings, so flicker detection is still needed."
  ],
  "refs": [
   {
    "t": "Reducing Flicker (EOS 7D Mark II) - Canon Hong Kong",
    "u": "https://hk.canon/en/support/8202218700"
   },
   {
    "t": "Flicker reduction - Nikon D500 User Manual",
    "u": "https://www.manualsdir.com/manuals/849181/nikon-d500.html?page=260"
   },
   {
    "t": "STMicroelectronics' New Full-Color Ambient Light Sensor with Flicker Detect - Edge AI and Vision Alliance",
    "u": "https://www.edge-ai-vision.com/2019/02/stmicroelectronics-new-full-color-ambient-light-sensor-with-flicker-detect-boosts-camera-performance-in-smartphone-and-iot-devices/"
   },
   {
    "t": "ams high sensitivity optical sensor eliminates flicker artifacts - EEJournal",
    "u": "https://www.eejournal.com/industry_news/ams-high-sensitivity-optical-sensor-eliminates-flicker-artifacts-to-deliver-vibrant-and-distortion-free-smartphone-camera-images-and-videos/"
   },
   {
    "t": "Sony Firmware Update Allows Shutter To Close While Changing Lenses - Shutter Muse",
    "u": "https://shuttermuse.com/sony-firmware-update-allows-shutter-to-close-while-changing-lenses"
   },
   {
    "t": "Differences between the [Anti-flicker Shoot.] and [Variable Shutter] functions - Sony ILCE-1 Help Guide",
    "u": "https://helpguide.sony.net/ilc/2040/v1/en/contents/TP1000426660.html"
   },
   {
    "t": "High-Frequency Anti-Flicker Shooting - Canon EOS R6 Mark II Advanced User Guide",
    "u": "https://cam.start.canon/id/C012/manual/html/UG-04_Shooting-1_0160.html"
   },
   {
    "t": "Honor Magic8 Pro: With integrated flicker scanner from Osram - Notebookcheck",
    "u": "https://www.notebookcheck.net/Honor-Magic8-Pro-With-integrated-flicker-scanner-from-Osram.1204111.0.html"
   }
  ]
 },
 "shutclose": {
  "stages": [
   [
    2008,
    "idea",
    "单反不拍摄时反光镜放下、快门帘闭合，换镜头时传感器基本被挡住；约 2008 年起无反相机为了实时取景让快门常开，关机后也保持开启，传感器直接暴露在卡口后面，落灰和阳光聚焦灼伤的风险由此出现（约）。",
    "On a DSLR the mirror is down and the shutter closed when not shooting, so the sensor is largely shielded during lens changes; from about 2008 mirrorless cameras kept the shutter open for live view and left it open when off, exposing the sensor right behind the mount to dust and focused sunlight (approx.).",
    [
     1
    ]
   ],
   [
    2018,
    "mass",
    "2018 年 10 月 Canon EOS R 上市，关机时机械快门默认闭合，挡住灰尘并降低阳光直射烧伤传感器的风险；当时 Nikon、Sony 的无反关机都保持快门开启。",
    "The Canon EOS R (October 2018) closed its mechanical shutter by default when powered off, keeping out dust and reducing the risk of direct sunlight damaging the sensor; Nikon and Sony mirrorless bodies of the time left the shutter open.",
    [
     0
    ]
   ],
   [
    2019,
    "paper",
    "约 2019 年公开的 Canon 专利（2019-234718）提出另一种思路：卡口后方加一块无需电机的被动挡板，拧下镜头时联动关闭、装上镜头后收起，让换镜头时不依赖快门帘。",
    "A Canon patent published around 2019 (2019-234718) proposed another approach: a passive, motorless barrier behind the mount that closes as the lens is twisted off and retracts once a lens is locked, so lens changes no longer rely on the shutter curtain (approx.).",
    [
     1
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 4 月 9 日 Sony α9 II 固件 2.00 新增关机闭合快门选项，这是 Sony 首次提供；Sony 此前迟迟不加，是担心闭合的快门帘被手指或气吹碰坏，而更换快门很贵。",
    "On 9 April 2020 Sony α9 II firmware 2.00 added an option to close the shutter at power-off, Sony's first; Sony had held back because a closed curtain can be damaged by fingers or blowers, and shutter replacement is expensive.",
    [
     2
    ]
   ],
   [
    2021,
    "ver",
    "Sony α1 出厂即带 Anti-dust Function → Shutter When Pwr OFF；说明书提醒开启后要盖镜头盖保存，否则聚焦的阳光可能导致机内冒烟起火，且省电自动关机或电池耗尽时快门不会闭合。",
    "The Sony α1 shipped with Anti-dust Function → Shutter When Pwr OFF; the manual warns to fit a lens cap when storing with it on, since focused sunlight could cause smoke or fire, and the shutter does not close on auto power-off or battery exhaustion.",
    [
     3
    ]
   ],
   [
    2021,
    "rival",
    "Nikon Z9 取消了机械快门，改用独立的传感器遮板（sensor shield），可设为关机时闭合，Nikon 称其为业内首创的防尘措施之一；但该选项默认不开启，需要在设置菜单里手动打开。",
    "The Nikon Z9 dropped the mechanical shutter and used a separate sensor shield that can close at power-off, which Nikon presented as an industry-first dust measure; the option is off by default and must be enabled in the setup menu.",
    [
     4
    ]
   ],
   [
    2023,
    "ver",
    "Nikon Z8 沿用 Z9 的传感器遮板设计，同样在设置菜单「Sensor shield behavior at power off」中选择关机是否闭合。",
    "The Nikon Z8 kept the Z9's sensor shield, again letting the user choose in \"Sensor shield behavior at power off\" whether it closes when the camera is turned off.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "Sony α9 III 没有机械快门，改用遮光帘（shading curtain）：开启后关机自动闭合，配合每秒 70,000 次以上的超声波除尘滤镜。",
    "The Sony α9 III has no mechanical shutter and uses a shading curtain instead, which closes automatically at power-off when enabled, alongside an ultrasonic dust filter vibrating over 70,000 times per second.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "Canon EOS R1 菜单「Shutter at Shutdown」默认 Closed，也可选 Open 让开关机更安静；无论设置如何，自动关机时快门都保持原状。",
    "The Canon EOS R1's \"Shutter at Shutdown\" menu defaults to Closed, with Open available for quieter power cycling; regardless of the setting, the shutter stays as it is on auto power-off.",
    [
     7
    ]
   ]
  ],
  "now": [
   "中高端无反普遍提供关机闭合快门或独立遮板：Canon 中高端机型默认闭合，Sony、Nikon 需手动开启；部分入门机（如 Canon RP、R50、R10 等）仍做不到。自动关机、电池耗尽时一般不会闭合，闭合后的帘幕也怕手碰和强光聚焦。",
   "Most mid- and high-end mirrorless bodies can close the shutter or a dedicated shield at power-off: Canon's higher models do it by default, Sony and Nikon require enabling it, and some entry models (e.g. Canon RP, R50, R10) cannot. It usually does not happen on auto power-off or battery exhaustion, and a closed curtain is still vulnerable to fingers and focused light."
  ],
  "replaced": [
   "正在从「借用机械快门帘」转向专门的传感器遮板 / 遮光帘：取消机械快门的 Nikon Z9、Z8 和 Sony α9 III 都单独保留了一块挡板。",
   "It is shifting from borrowing the mechanical shutter curtain to a dedicated sensor shield or shading curtain: the Nikon Z9 and Z8 and the Sony α9 III, which have no mechanical shutter, each keep a separate shield."
  ],
  "refs": [
   {
    "t": "Canon EOS R - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_R"
   },
   {
    "t": "Canon patent shows a shutter-like mechanical barrier to protect your mirrorless sensor - DIY Photography",
    "u": "https://www.diyphotography.net/canon-patent-shows-a-shutter-like-mechanical-barrier-to-protect-your-mirrorless-sensor/"
   },
   {
    "t": "Sony Firmware Update Allows Shutter To Close While Changing Lenses - Shutter Muse",
    "u": "https://shuttermuse.com/sony-firmware-update-allows-shutter-to-close-while-changing-lenses"
   },
   {
    "t": "Anti-dust Function - Sony ILCE-1 Help Guide",
    "u": "https://helpguide.sony.net/ilc/2040/v1/en/contents/TP1000426612.html"
   },
   {
    "t": "Sensor shield behavior at power off - Nikon Z9 Online Manual",
    "u": "https://onlinemanual.nikonimglib.com/z9/en/sum_sensor_shield_behavior_at_power_off_295.html"
   },
   {
    "t": "Sensor shield behavior at power off - Nikon Z8 Online Manual",
    "u": "https://onlinemanual.nikonimglib.com/z8/en/sum_sensor_shield_behavior_at_power_off_325.html"
   },
   {
    "t": "Alpha 9 III features - Sony UK",
    "u": "https://www.sony.co.uk/interchangeable-lens-cameras/products/ilce-9m3/feature7"
   },
   {
    "t": "Shutter at Shutdown - Canon EOS R1 Advanced User Guide",
    "u": "https://cam.start.canon/en/C018/manual/html/UG-07_Set-up_0250.html"
   }
  ]
 },
 "nomech": {
  "stages": [
   [
    2011,
    "mass",
    "2011 年 9 月 Nikon 1 J1 只装电子快门、完全没有机械快门，最高 1/16000 s，是最早的无机械快门可换镜头相机之一；代价是闪光同步只有 1/60 s。",
    "The Nikon 1 J1 (September 2011) had only an electronic shutter and no mechanical shutter at all, reaching 1/16000 s, making it one of the first interchangeable-lens cameras without one; the cost was a 1/60 s flash sync.",
    [
     0
    ]
   ],
   [
    2011,
    "rival",
    "同年 ARRI 推出 Alexa Studio，反其道而行，给数字电影机加回旋转反光镜快门和光学取景器：镜子一半时间反光到取景器、一半时间让光落到传感器，运动质感更接近 35mm 胶片，但 16:9 下最高 60 fps，电子快门可到 120 fps。",
    "The same year ARRI went the other way with the Alexa Studio, adding a spinning mirror shutter and optical finder to a digital cinema camera: the mirror sends light to the finder half the time and to the sensor the other half, giving motion closer to 35mm film, but only up to 60 fps in 16:9 versus 120 fps with the electronic shutter.",
    [
     1
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 10 月上市的 Sigma fp（24.6MP，370 g）是首批取消机械快门的全画幅无反之一，只用电子快门（30 s–1/8000 s）换取更小的机身和静音拍摄。",
    "The Sigma fp (24.6MP, 370 g), launched in October 2019, was among the first full-frame mirrorless cameras without a mechanical shutter, using only an electronic shutter (30 s–1/8000 s) for a smaller body and silent shooting.",
    [
     2
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 3 月 Sigma fp L（61MP 背照 CMOS）继续纯电子快门；但它的读出不快，闪光同步只有 1/15 s，说明普通传感器取消机械快门要付出代价。",
    "The Sigma fp L (March 2021, 61MP BSI CMOS) kept the electronic-only design, but its slow readout limited flash sync to 1/15 s, showing the cost of dropping the mechanical shutter on a conventional sensor.",
    [
     3
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 10 月 28 日 Nikon Z9 发布，成为首台没有机械快门的全画幅旗舰：45.7MP 堆栈 CMOS，Nikon 称当时无反中扫描最快、卷帘畸变最小，最高 1/32000 s，取消机械快门后不用担心快门磨损。",
    "The Nikon Z9, announced on 28 October 2021, became the first full-frame flagship without a mechanical shutter: a 45.7MP stacked CMOS that Nikon claimed had the fastest scan and least rolling distortion among mirrorless cameras of the time, up to 1/32000 s, with no shutter wear to worry about.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Z9 用一块独立的传感器遮板（sensor shield）承担防尘，替代机械快门原本附带的保护作用，并支持 120 fps（约 11MP）高速连拍。",
    "The Z9 used a separate sensor shield for dust protection, taking over the protective role a mechanical shutter used to play, and offered 120 fps capture at about 11MP.",
    [
     4
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 Sony ZV-E1（12MP 全画幅 vlog 机）同样没有机械快门，只靠电子快门。",
    "In 2023 the Sony ZV-E1, a 12MP full-frame vlogging camera, likewise had no mechanical shutter and relied solely on its electronic shutter.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 Nikon Z8 把 Z9 的无机械快门设计下放到更小的机身，同样保留传感器遮板。",
    "In 2023 the Nikon Z8 brought the Z9's no-mechanical-shutter design to a smaller body, again keeping the sensor shield.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "Sony α9 III 用全局快门（global shutter）全画幅传感器取消了机械快门，所有像素同时曝光，任意速度都能闪光同步；防尘改由遮光帘（shading curtain）负责。",
    "The Sony α9 III dropped the mechanical shutter using a global-shutter full-frame sensor that exposes every pixel at once and syncs flash at any speed; dust protection moved to a shading curtain.",
    [
     7
    ]
   ]
  ],
  "now": [
   "只有读出足够快的堆栈式或全局快门机身（Nikon Z9/Z8、Sony α9 III）和对闪光要求低的机型（Sigma fp、Sony ZV-E1）取消了机械快门；多数中端机仍保留机械快门，用来闪光同步和避开卷帘畸变、频闪条纹。",
   "Only bodies with fast stacked or global-shutter readout (Nikon Z9/Z8, Sony α9 III) or models with modest flash needs (Sigma fp, Sony ZV-E1) have dropped the mechanical shutter; most mid-range cameras keep one for flash sync and to avoid rolling distortion and flicker banding."
  ],
  "replaced": [
   "这一项本身是在淘汰机械快门；随着全局快门和更快读出普及，机械快门预计会逐步退出，防尘职能交给独立遮板。",
   "This trend is itself retiring the mechanical shutter; as global shutters and faster readout spread, the mechanical shutter is expected to fade out, with dust protection handed to dedicated shields."
  ],
  "refs": [
   {
    "t": "Nikon 1 V1 / J1 Review - DPReview",
    "u": "https://www.dpreview.com/reviews/nikonv1j1/2"
   },
   {
    "t": "ALEXA Studio Electronic and Mirror Shutter White Paper - ARRI",
    "u": "https://www.arri.com/resource/blob/186770/ad23969317dafff402f0902d47bb4ab7/alexa-studio-electronic-and-mirror-shutter-white-paper-data.pdf"
   },
   {
    "t": "Sigma announces the Sigma fp - Sigma press",
    "u": "https://press.sigmaphoto.com/product/07/sigma-announces-the-sigma-fp-the-worlds-smallest-and-lightest-mirrorless-digital-camera-with-a-full-frame-image-sensor/"
   },
   {
    "t": "Sigma fp L initial review - DPReview",
    "u": "https://www.dpreview.com/reviews/sigma-fp-l-initial-review"
   },
   {
    "t": "Nikon releases the Z 9 full-frame mirrorless camera - Nikon",
    "u": "https://www.nikon.com/news/2021/1028_mirrorless_01.htm"
   },
   {
    "t": "Sony ZV-E1 preview - DPReview",
    "u": "https://www.dpreview.com/reviews/sony-zv-e1-preview"
   },
   {
    "t": "My Nikon Z8's sensor is filthy - I had no idea it had a sensor shield - Digital Camera World",
    "u": "https://www.digitalcameraworld.com/uk/cameras/mirrorless-cameras/my-nikon-z8s-sensor-is-filthy-i-had-no-idea-it-had-a-sensor-shield-heres-how-to-make-sure-yours-is-switched-on"
   },
   {
    "t": "Sony α9 III - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_%CE%B19_III"
   }
  ]
 },
 "global": {
  "stages": [
   [
    1969,
    "idea",
    "（约）CCD 发明后不久，interline transfer CCD 用遮光的垂直移位寄存器把整帧电荷同时转走，成为最早的“全局快门”传感器形态，后来 CMOS 全局快门就是要在像素里复刻这种存储节点。",
    "(approx.) Soon after the CCD's invention, interline-transfer CCDs moved the whole frame's charge at once into shielded vertical registers, the original global shutter that CMOS later had to replicate with in-pixel storage.",
    [
     0
    ]
   ],
   [
    1995,
    "paper",
    "（约）1990 年代 JPL 的 Fossum 团队把 CMOS APS 做成像素内电荷转移结构，随后学界提出在像素里加采样保持电容或存储节点实现 snapshot 曝光；具体首篇论文未能确认，属笼统描述。",
    "(approx.) In the 1990s Fossum's JPL team built CMOS APS with intra-pixel charge transfer, and in-pixel sample-and-hold or storage-node snapshot pixels followed; the very first paper could not be confirmed, so this is generic.",
    [
     0,
     1
    ]
   ],
   [
    2005,
    "mass",
    "Micron 推出 MT9V022：1/3 英寸 752×480、6.0 μm 像素、60 fps，采用自家 TrueSNAP（Shutter Node Active Pixel）全局快门，专为车道偏离、驾驶员疲劳检测等车载应用设计。",
    "Micron launched the MT9V022: 1/3-inch 752x480, 6.0 um pixels, 60 fps, using its TrueSNAP (Shutter Node Active Pixel) global shutter, aimed at automotive lane-departure and driver-drowsiness systems.",
    [
     2
    ]
   ],
   [
    2008,
    "rival",
    "（约）同一时期机器视觉主流仍是 interline CCD（Sony ICX 系列等），CMOS 全局快门的存储节点漏光（PLS）和噪声比 CCD 差，多数相机厂还在观望。",
    "(approx.) Machine vision at the time still relied mostly on interline CCDs such as Sony's ICX line; CMOS global-shutter storage nodes suffered from parasitic light sensitivity and noise worse than CCD.",
    [
     3
    ]
   ],
   [
    2013,
    "ver",
    "Sony 推出 Pregius 第一代，代表型号 IMX174：2.4 MP、1/1.2 英寸、5.86 μm 像素，前照式全局快门，噪声和 PLS 接近 CCD，成为工业相机从 CCD 转 CMOS 的转折点。",
    "Sony introduced first-generation Pregius, e.g. IMX174: 2.4 MP, 1/1.2-inch, 5.86 um pixels, front-illuminated global shutter with CCD-like noise and PLS, the turning point for industrial cameras leaving CCD.",
    [
     3,
     4
    ]
   ],
   [
    2015,
    "end",
    "（约）Sony 宣布逐步停产 CCD，Pregius 系列接替其在机器视觉中的位置，全局快门 CMOS 成为工业相机主流。",
    "(approx.) Sony announced the wind-down of its CCD production, and Pregius took over CCD's role, making global-shutter CMOS the machine-vision mainstream.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "Sony Pregius S（如 IMX530，24 MP、2.74 μm）把背照式和堆栈结构用到全局快门上，QE 约 71.5%，像素间距从 3.45 μm 缩到 2.74 μm。",
    "Sony Pregius S (e.g. IMX530, 24 MP, 2.74 um) brought back-illumination and stacking to global shutter, with about 71.5% QE and pitch shrinking from 3.45 to 2.74 um.",
    [
     4
    ]
   ],
   [
    2020,
    "corp",
    "RED Komodo 6K 采用 19.9 MP Super 35 全局快门 CMOS，6K 40 fps，把全局快门带进商用电影机。",
    "The RED Komodo 6K used a 19.9 MP Super 35 global-shutter CMOS (6K at 40 fps), bringing global shutter into commercial cinema cameras.",
    [
     5
    ]
   ],
   [
    2021,
    "rival",
    "（约）高速堆栈式卷帘快门（如 Sony α1、Nikon Z9 的读出约 1/250 s 级）把果冻效应压到很小，成为全局快门在消费相机上的主要对手，且动态范围更高。",
    "(approx.) Fast stacked rolling shutters (e.g. Sony a1, Nikon Z9, readout around 1/250 s class) shrank skew greatly and offered higher dynamic range, the main rival to global shutter in consumer cameras.",
    [
     6
    ]
   ],
   [
    2023,
    "mass",
    "Sony α9 III 发布：24.6 MP 全画幅堆栈全局快门，120 fps 无黑屏连拍、全速闪光同步、最高 1/80000 s，是首台全画幅全局快门可换镜相机。",
    "Sony a9 III: 24.6 MP full-frame stacked global shutter, 120 fps blackout-free bursts, flash sync at all speeds up to 1/80,000 s, the first full-frame global-shutter interchangeable-lens camera.",
    [
     6
    ]
   ]
  ],
  "now": [
   "工业、车载 DMS 和 AR/VR 追踪里已是主流（Sony Pregius S、onsemi 等），消费相机里仍属小众旗舰（α9 III）。",
   "Mainstream in industrial, automotive DMS and AR/VR tracking (Sony Pregius S, onsemi etc.); still a niche flagship feature in consumer cameras (a9 III)."
  ],
  "replaced": [
   "尚未被替代；可能的接班是像素级 ADC 的数字全局快门和更快的堆栈卷帘快门，二者在消费相机上竞争。",
   "Not replaced; likely successors are digital global shutter with pixel-level ADCs, competing with ever-faster stacked rolling shutters in consumer cameras."
  ],
  "refs": [
   {
    "t": "CCD 与全局快门（维基）",
    "u": "https://en.wikipedia.org/wiki/Charge-coupled_device"
   },
   {
    "t": "Eric Fossum 与 CMOS APS（维基）",
    "u": "https://en.wikipedia.org/wiki/Eric_Fossum"
   },
   {
    "t": "MT9V022 数据手册（onsemi）",
    "u": "https://www.onsemi.com/pdf/datasheet/mt9v022-d.pdf"
   },
   {
    "t": "Sony Pregius 全局快门（Teledyne）",
    "u": "https://www.teledynevisionsolutions.com/learn/learning-center/machine-vision/sony-pregius-global-shutter-cmos/"
   },
   {
    "t": "Sony Pregius S 传感器（Basler）",
    "u": "https://www.baslerweb.com/en/learning/sony-pregius-s-sensors/"
   },
   {
    "t": "RED Komodo 6K 发布（Newsshooter）",
    "u": "https://www.newsshooter.com/2020/10/14/red-komodo-officially-released/"
   },
   {
    "t": "Sony α9 III 全局快门（PetaPixel）",
    "u": "https://petapixel.com/2023/11/07/sony-a9-iii-first-impressions-the-global-shutter-era-has-arrived"
   }
  ]
 },
 "stacked": {
  "stages": [
   [
    2005,
    "idea",
    "MIT Lincoln Laboratory 在 ISSCC 2005 发表 3D 集成百万像素成像器：氧化物键合加每像素 2 µm 3D via，证明像素层与读出层可以分晶圆制造再叠起来。",
    "MIT Lincoln Laboratory's ISSCC 2005 megapixel imager used oxide bonding and a 2 um 3D via per pixel, showing pixel and readout tiers could be built on separate wafers and stacked.",
    [
     0
    ]
   ],
   [
    2012,
    "corp",
    "2012 年 1 月 Sony 宣布开发出堆栈式 CMOS：背照像素芯片叠在 65 nm 逻辑芯片上，用 TSV 连接，命名 Exmor RS。",
    "In January 2012 Sony announced a stacked CMOS: a BSI pixel chip on a 65 nm logic chip connected by TSVs, branded Exmor RS.",
    [
     1
    ]
   ],
   [
    2013,
    "paper",
    "Sony 的 Sukegawa 等人在 ISSCC 2013 发表 1/4 英寸 8 MP、1.12 µm 背照堆栈 CMOS：芯片面积比 90 nm 单片缩小 30%，逻辑规模从 50 万门增到 240 万门。",
    "Sukegawa et al. (Sony) presented a 1/4-inch 8 MP 1.12 um back-illuminated stacked CMOS at ISSCC 2013: 30% smaller than the 90 nm monolithic chip, logic rising from 500k to 2.4M gates.",
    [
     2,
     3
    ]
   ],
   [
    2013,
    "mass",
    "首批量产堆栈式传感器 IMX135（13 MP）随 Sony Xperia Z 于 2013 年初上市，同期 ISX014（8 MP、1.12 µm）也已出货。",
    "The first mass-produced stacked sensor IMX135 (13 MP) shipped in the Sony Xperia Z in early 2013, alongside the 8 MP 1.12 um ISX014.",
    [
     1,
     4
    ]
   ],
   [
    2013,
    "rival",
    "Olympus 在 ISSCC 2013 展示用微凸点（micro-bump）逐像素连接的 3D 堆栈全局快门传感器（约），代表另一条路线：凸点而非 TSV。",
    "Olympus showed a 3D-stacked global-shutter sensor with per-pixel micro-bumps at ISSCC 2013 (approx.), an alternative route using bumps instead of TSVs.",
    [
     5
    ]
   ],
   [
    2015,
    "rival",
    "OmniVision / TSMC 的 PureCel-S（如 OV23850）和 Samsung 堆栈 ISOCELL（如 S5K3M2）在 2015 年进入手机，堆栈不再是 Sony 独有。",
    "OmniVision/TSMC PureCel-S (e.g. OV23850) and Samsung stacked ISOCELL (e.g. S5K3M2) entered phones in 2015, ending Sony's exclusivity.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "堆栈式进相机：RX100 IV / RX10 II 的 1 英寸 20 MP 堆栈传感器（带 DRAM）上市。",
    "Stacking reached cameras: the 1-inch 20 MP stacked sensor (with DRAM) in the RX100 IV and RX10 II.",
    [
     6
    ]
   ],
   [
    2016,
    "ver",
    "连接方式从 TSV 换成 Cu-Cu 混合键合：Galaxy S7 里的 Sony IMX260 首次用 DBI 把像素芯片面对面键合到 ISP 芯片。",
    "The interconnect moved from TSVs to Cu-Cu hybrid bonding: the Sony IMX260 in the Galaxy S7 was the first to bond the pixel die face to face to the ISP die using DBI.",
    [
     7
    ]
   ],
   [
    2017,
    "ver",
    "Sony α9 搭载 24.2 MP 全画幅堆栈传感器（带集成内存），实现 20 fps 无黑屏连拍，堆栈进入全画幅。",
    "The Sony a9 used a 24.2 MP full-frame stacked sensor with integral memory for 20 fps blackout-free shooting, bringing stacking to full frame.",
    [
     8
    ]
   ],
   [
    2018,
    "ver",
    "Sony IMX490 车载传感器（5.4 MP、120 dB HDR、LED 闪烁抑制）采用堆栈结构，2020 年 Pregius S 把背照堆栈带进工业全局快门。",
    "Sony's automotive IMX490 (5.4 MP, 120 dB HDR, LED flicker mitigation) used a stacked design, and Pregius S in 2020 brought BSI stacking to industrial global-shutter sensors.",
    [
     9,
     10
    ]
   ],
   [
    2021,
    "ver",
    "Sony 在 IEDM 2021 发布 2-Layer Transistor Pixel：光电二极管和像素晶体管再分两层，饱和信号约翻倍，2023 年随 Xperia 1 V 量产。",
    "At IEDM 2021 Sony unveiled the 2-Layer Transistor Pixel, splitting photodiodes and pixel transistors onto separate layers for about double the saturation signal; it shipped in the Xperia 1 V in 2023.",
    [
     11
    ]
   ]
  ],
  "now": [
   "主流：中高端手机、旗舰无反（Sony α1 / α9 系列等）、车载和工业传感器普遍采用背照堆栈。",
   "Mainstream: mid- to high-end phones, flagship mirrorless (Sony a1/a9 series etc.), automotive and industrial sensors widely use BSI stacking."
  ],
  "replaced": [
   "没有被替代，而是向更多层演进：三层（DRAM、像素晶体管层）和像素级 Cu-Cu 连接是接班方向。",
   "Not replaced but extended to more layers: three-layer stacks (DRAM or pixel-transistor tiers) and pixel-level Cu-Cu links are the successors."
  ],
  "refs": [
   {
    "t": "MIT LL ISSCC 2005 3D 集成成像器",
    "u": "https://www.ll.mit.edu/r-d/publications/megapixel-cmos-image-sensor-fabricated-three-dimensional-integrated-circuit"
   },
   {
    "t": "Sony 公布 TSV 堆栈 CMOS（radiolocman）",
    "u": "https://www.radiolocman.com/news/new.html?di=148107"
   },
   {
    "t": "Sukegawa ISSCC 2013（ITE 报告）",
    "u": "https://www.jstage.jst.go.jp/article/itetr/37.19/0/37.19_31/_article/-char/en"
   },
   {
    "t": "ISSCC 2013 图像传感器论文（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2012/11/image-sensors-at-isscc-2013.html"
   },
   {
    "t": "TechInsights 手机成像技术综述 第 3 部分",
    "u": "https://www.techinsights.com/blog/survey-enabling-technologies-successful-consumer-digital-imaging-products-part-3-pixel"
   },
   {
    "t": "ISSCC 2013 论文列表（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2012/11/image-sensors-at-isscc-2013.html?m=1"
   },
   {
    "t": "RX100 IV 三层堆栈传感器（Digital Trends）",
    "u": "https://digitaltrends.com/photography/sony-rx100-iv-rx10-ii-news-specs"
   },
   {
    "t": "Sony IMX260 在 Galaxy S7（Image Sensors World）",
    "u": "https://image-sensors-world.blogspot.com/2016/03/sony-imx260-in-samsung-galaxy-s7.html"
   },
   {
    "t": "Sony α9 发布（Sony 新闻）",
    "u": "https://sony.mediaroom.com/"
   },
   {
    "t": "Sony 半导体 车载传感器产品页",
    "u": "https://www.sony-semicon.com/en/products/is/automotive/automotive.html"
   },
   {
    "t": "Sony Pregius S 技术页",
    "u": "https://www.sony-semicon.com/en/technology/industry/pregius-s.html"
   },
   {
    "t": "Sony 2-Layer Transistor Pixel 新闻稿",
    "u": "https://www.sony.eu/presscentre/sony-develops-worlds-first-stacked-cmos-image-sensor-technology-with-2-layer-transistor-pixel"
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
 }
};
