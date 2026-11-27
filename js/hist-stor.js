/* 存储时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 stor 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 */
TIMELINES.stor.hist = {
 "ssd": {
  "stages": [
   [
    1978,
    "idea",
    "StorageTek 推出 STC 4305：用带电池备份的 RAM 芯片模拟磁盘，45MB 售价约 400,000 美元，是“固态盘”概念的最早商用形态。",
    "StorageTek's STC 4305 emulated a disk with battery-backed RAM chips: 45 MB for about $400,000, the earliest commercial form of the solid-state disk idea.",
    [
     0,
     1
    ]
   ],
   [
    1984,
    "paper",
    "Toshiba 的 Fujio Masuoka 在 IEEE IEDM 发表 NOR flash（1980 年与 Iizuka 申请浮栅专利），1987 年 IEDM 再发表 NAND flash，为非易失、无运动部件的大容量存储奠定基础。",
    "Toshiba's Fujio Masuoka presented NOR flash at IEEE IEDM 1984 (floating-gate patent filed with Iizuka in 1980) and NAND flash at IEDM 1987, the basis for non-volatile storage with no moving parts.",
    [
     2,
     0
    ]
   ],
   [
    1991,
    "proto",
    "Eli Harari 于 1988 年创办的 SunDisk（后改名 SanDisk）为 IBM 做出闪存 + 智能控制器的 SSD 模块：20MB、2.5 英寸外形，OEM 价约 1,000 美元，用于 ThinkPad。",
    "SunDisk (later SanDisk), founded by Eli Harari in 1988, built a flash-plus-controller SSD module for IBM: 20 MB in a 2.5-inch form factor, about $1,000 OEM, used in a ThinkPad.",
    [
     0,
     1
    ]
   ],
   [
    1995,
    "corp",
    "以色列 M-Systems（Dov Moran 1989 年创办）推出 DiskOnChip 嵌入式闪存盘，靠 TrueFFS 把闪存模拟成磁盘；军工、工控和嵌入式领域开始用闪存 SSD。",
    "Israel's M-Systems (founded 1989 by Dov Moran) launched the DiskOnChip embedded flash disk, using TrueFFS to present flash as a disk; military, industrial and embedded users adopted flash SSDs.",
    [
     3
    ]
   ],
   [
    2006,
    "mass",
    "Samsung 推出全球首批内置 32GB NAND SSD 的 PC：Q1 UMPC 与 Q30 笔记本，2006 年 6 月在韩国开售，售价约 2,430 和 3,700 美元。",
    "Samsung shipped the first PCs with a 32 GB NAND SSD, the Q1 UMPC and Q30 notebook, on sale in Korea from June 2006 at about $2,430 and $3,700.",
    [
     4,
     0
    ]
   ],
   [
    2008,
    "ver",
    "Intel X25-E 等 SATA SSD 进入企业市场：32GB，顺序读 250MB/s，4KB 随机读 35,000 IOPS，约为硬盘的 100 倍；SATA 接口让 SSD 可直接替换 2.5 英寸硬盘。",
    "SATA SSDs such as Intel's X25-E entered the enterprise: 32 GB, 250 MB/s sequential read and 35,000 4 KB random-read IOPS, about 100x a hard disk; SATA let SSDs drop into 2.5-inch HDD bays.",
    [
     5
    ]
   ],
   [
    2010,
    "corp",
    "RED EPIC 于 2010 年 12 月首批交付，配套 REDMAG 1.8 英寸 SSD 模块（48GB–512GB）录制 REDCODE RAW，电影机开始依赖专有 SSD 承接高码率。",
    "RED EPIC first shipped in December 2010 with REDMAG 1.8-inch SSD modules (48 GB to 512 GB) recording REDCODE RAW, making proprietary SSDs the high-bitrate medium for cinema cameras.",
    [
     6,
     7
    ]
   ],
   [
    2011,
    "ver",
    "NVM Express 1.0 规范于 2011 年 3 月发布（Intel 的 Amber Huffman 主持，90 多家公司参与），绕开 SATA/AHCI，直接走 PCIe；2013 年 Samsung XS1715 成首款商用 NVMe SSD，读速约 3GB/s。",
    "NVM Express 1.0 was released in March 2011 (chaired by Intel's Amber Huffman, 90+ companies), bypassing SATA/AHCI to run directly on PCIe; Samsung's XS1715 (2013) was the first commercial NVMe SSD at about 3 GB/s read.",
    [
     8
    ]
   ],
   [
    2012,
    "mass",
    "Blackmagic Cinema Camera（2012 年 NAB 发布、7 月上市、2,995 美元）内置 SSD 录制器，把 2.5K 12-bit CinemaDNG RAW、ProRes、DNxHD 直接写到普通 2.5 英寸 SATA SSD 上，不再需要专有存储。",
    "The Blackmagic Cinema Camera (NAB 2012, shipped July, $2,995) had a built-in SSD recorder writing 2.5K 12-bit CinemaDNG RAW, ProRes and DNxHD to ordinary 2.5-inch SATA SSDs, with no proprietary media.",
    [
     9
    ]
   ],
   [
    2017,
    "rival",
    "CFexpress 1.0（2017）把 PCIe/NVMe 塞进 XQD 尺寸的卡里，2019 年 2.0 规定 Type A/B/C（1/2/4 GB/s）；相机内部的“SSD”变成可插拔的 NVMe 卡。",
    "CFexpress 1.0 (2017) put PCIe/NVMe into an XQD-sized card; version 2.0 (2019) defined Type A/B/C at 1/2/4 GB/s, turning the in-camera SSD into a removable NVMe card.",
    [
     11
    ]
   ],
   [
    2023,
    "ver",
    "iPhone 15 Pro 换用 USB‑C，支持 USB 3 10Gb/s，可把 ProRes 直接录到外接 SSD，最高 4K60 并支持 Log；手机拍摄也开始外挂 SSD。",
    "iPhone 15 Pro switched to USB-C with USB 3 at 10 Gb/s and can record ProRes, up to 4K60 with Log, directly to an external SSD, bringing external SSDs to phone shooting.",
    [
     10
    ]
   ],
   [
    2026,
    "ver",
    "SSD 进入 PCIe Gen6：Micron 9650 是首款 Gen6 SSD，顺序读约 28GB/s；单盘容量已到数百 TB 级（约）。",
    "SSDs reached PCIe Gen6: the Micron 9650 is the first Gen6 SSD at about 28 GB/s sequential read, and single-drive capacities reach hundreds of TB (approx.).",
    [
     1
    ]
   ]
  ],
  "now": [
   "SSD 已是 PC、服务器和影视录制的主流存储：电影机用 1.8/2.5 英寸或 M.2 NVMe 模块录 RAW，手机经 USB‑C 外接 Samsung T7/T9 等便携 SSD 录 ProRes；数据中心盘已到 PCIe Gen6、约 28GB/s。",
   "SSDs are the mainstream storage for PCs, servers and production recording: cinema cameras record RAW to 1.8/2.5-inch or M.2 NVMe modules, phones record ProRes over USB-C to portable SSDs like Samsung T7/T9, and data-center drives have reached PCIe Gen6 at about 28 GB/s."
  ],
  "replaced": [
   "SSD 本身取代了机械硬盘，目前没有被取代；接口从 SATA 演进到 NVMe，在相机里则以 CFexpress 卡的形式继续存在，下一步是 PCIe Gen6/Gen7 和更高层数的 3D NAND。",
   "SSDs replaced hard disks and have not themselves been replaced; the interface moved from SATA to NVMe, inside cameras they live on as CFexpress cards, and next come PCIe Gen6/Gen7 and higher-layer 3D NAND."
  ],
  "refs": [
   {
    "t": "Computer History Museum: 1991 Solid State Drive module demonstrated",
    "u": "https://www.computerhistory.org/storageengine/solid-state-drive-module-demonstrated/"
   },
   {
    "t": "Wikipedia: Solid-state drive",
    "u": "https://en.wikipedia.org/wiki/Solid-state_drive"
   },
   {
    "t": "Wikipedia: Fujio Masuoka",
    "u": "https://en.wikipedia.org/wiki/Fujio_Masuoka"
   },
   {
    "t": "Wikipedia: M-Systems",
    "u": "https://en.wikipedia.org/wiki/M-Systems"
   },
   {
    "t": "Phys.org: Samsung Launches World's First PCs with NAND Flash-based SSD (2006)",
    "u": "https://phys.org/news/2006-05-samsung-world-pcs-nand-flash-based.html"
   },
   {
    "t": "Intel press release: X25-E Extreme SATA SSD (2008)",
    "u": "https://www.intel.com/pressroom/archive/releases/2008/20081015comp.htm"
   },
   {
    "t": "Photography Bay: RED EPIC has shipped (2010)",
    "u": "https://photographybay.com/2010/12/21/red-epic-has-shipped"
   },
   {
    "t": "RED Media Operation Guide: REDMAG 1.8\" SSD",
    "u": "https://docs.red.com/955-0047/MediaOperationGuide/Content/3_REDMAG_System_Media/REDMAG_1.8_SSD_SYSTEM.htm"
   },
   {
    "t": "Wikipedia: NVM Express",
    "u": "https://en.wikipedia.org/wiki/NVM_Express"
   },
   {
    "t": "Engadget: Blackmagic Cinema Camera (2012)",
    "u": "https://www.engadget.com/2012-04-16-blackmagic-cinema-camera-packs-feature-film-2-5k-quality-touc.html"
   },
   {
    "t": "Apple Newsroom: Apple unveils iPhone 15 Pro and iPhone 15 Pro Max (2023)",
    "u": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/"
   },
   {
    "t": "Wikipedia: CFexpress",
    "u": "https://en.wikipedia.org/wiki/CFexpress"
   }
  ]
 },
 "cf": {
  "stages": [
   [
    1988,
    "idea",
    "Eli Harari 创办 SunDisk（后来的 SanDisk），设想把 flash EEPROM 加上控制器当作“磁盘”用；其专利 US 5,095,344（1992 授权）覆盖高密度 flash EEPROM 器件。",
    "Eli Harari founded SunDisk (later SanDisk) to use flash EEPROM plus a controller as a 'disk'; his patent US 5,095,344 (granted 1992) covers high-density flash EEPROM devices.",
    [
     1
    ]
   ],
   [
    1991,
    "proto",
    "SunDisk 为 IBM 做出 20MB 闪存 SSD 模块，证明“闪存 + ATA 控制器”可以替代磁盘，CF 卡后来沿用这一架构。",
    "SunDisk built a 20 MB flash SSD module for IBM, proving that flash plus an ATA controller could stand in for a disk, the architecture CF later reused.",
    [
     1
    ]
   ],
   [
    1994,
    "mass",
    "SanDisk 制定并量产 CompactFlash：43×36×3.3mm，用缩小版 16-bit PCMCIA 接口，可工作在 PC Card 或 IDE/ATA 模式，首批容量 2–10MB，经无源适配器即可插进笔记本 PC Card 槽。",
    "SanDisk specified and first manufactured CompactFlash: 43×36×3.3 mm with a miniaturized 16-bit PCMCIA interface working in PC Card or IDE/ATA mode, initially 2 to 10 MB, usable in a laptop PC Card slot through a passive adapter.",
    [
     0,
     2
    ]
   ],
   [
    1995,
    "corp",
    "Canon、SanDisk 等成立 CompactFlash Association（CFA），发布 CF Revision 1.0（8.3MB/s）；CF 成为开放标准，多家厂商生产。",
    "Canon, SanDisk and others founded the CompactFlash Association (CFA) and published CF Revision 1.0 (8.3 MB/s), making CF an open standard made by many vendors.",
    [
     3,
     0
    ]
   ],
   [
    1996,
    "corp",
    "Kodak DC25（1996 年 9 月 17 日发布，0.27MP，2MB 内存，595 美元）是第一台用 CF 卡的数码相机；同年 CF 容量到 64MB。",
    "The Kodak DC25 (announced 17 September 1996, 0.27 MP, 2 MB internal memory, $595) was the first digital camera to take CF cards; CF capacity reached 64 MB that year.",
    [
     4,
     0
    ]
   ],
   [
    1999,
    "ver",
    "Nikon D1（1999 年 6 月，2.7MP，5,500 美元）用 CF Type I/II 卡；Type II（5mm 厚）还能插 IBM Microdrive。此后约 15 年 CF 是专业单反的主力卡，1999 年容量到 256MB。",
    "The Nikon D1 (June 1999, 2.7 MP, $5,500) used CF Type I/II; the 5 mm Type II slot also took IBM Microdrives. CF stayed the pro DSLR card for about 15 years, reaching 256 MB in 1999.",
    [
     5,
     6,
     0
    ]
   ],
   [
    2006,
    "ver",
    "CF 4.0 引入 UDMA 133（133MB/s）；此前 2.0（2003，16.6MB/s）和 3.0（2004，UDMA 66）逐步提速，接口本质仍是并行 ATA。",
    "CF 4.0 added UDMA 133 (133 MB/s), after 2.0 (2003, 16.6 MB/s) and 3.0 (2004, UDMA 66); the interface was still parallel ATA at heart.",
    [
     0
    ]
   ],
   [
    2010,
    "ver",
    "CF 5.0 加入 48-bit 寻址（理论 128PB），同年 11 月 CF 6.0 定义 UDMA 7（167MB/s），这是并行 ATA 的终点。",
    "CF 5.0 added 48-bit addressing (128 PB theoretical), and CF 6.0 in November 2010 defined UDMA 7 (167 MB/s), the end of the line for parallel ATA.",
    [
     0
    ]
   ],
   [
    2012,
    "rival",
    "CFA 发布 CFast 2.0（SATA-3，约 600MB/s），同期 Sony/Nikon 推的 XQD 于 2011 年 12 月被 CFA 采纳；CF 的并行接口已跟不上 4K 视频和高速连拍。",
    "The CFA announced CFast 2.0 (SATA-3, about 600 MB/s), while the Sony/Nikon-backed XQD had been adopted by the CFA in December 2011; CF's parallel bus could no longer keep up with 4K and fast bursts.",
    [
     7,
     0
    ]
   ],
   [
    2013,
    "ver",
    "SanDisk 推出 256GB Extreme PRO CF（UDMA 7，最高约 160MB/s，VPG-65 保证 65MB/s 持续写入），CF 实际产品容量最终到 512GB。",
    "SanDisk released a 256 GB Extreme PRO CF (UDMA 7, up to about 160 MB/s, VPG-65 sustained 65 MB/s writes); shipped CF capacity eventually reached 512 GB.",
    [
     8,
     0
    ]
   ],
   [
    2019,
    "end",
    "CFexpress 2.0（PCIe 3.0/NVMe，Type B 2GB/s）发布，Nikon Z6/Z7 固件 2.20 在 2019 年 12 月开放 CFexpress；Canon EOS R5、Nikon Z9 等新旗舰改用 CFexpress，不再设 CF 槽。",
    "CFexpress 2.0 (PCIe 3.0/NVMe, Type B at 2 GB/s) arrived; Nikon Z6/Z7 firmware 2.20 enabled it in December 2019, and new flagships such as the Canon EOS R5 and Nikon Z9 use CFexpress with no CF slot.",
    [
     9,
     0
    ]
   ]
  ],
  "now": [
   "CF 已退出新相机，但 SanDisk Extreme PRO 等 CF 卡仍在零售渠道销售，供 Canon/Nikon 老单反、复古数码和工控设备使用；工业 CF 仍用于嵌入式系统。",
   "CF has left new cameras, but cards like the SanDisk Extreme PRO CF are still sold at retail for older Canon/Nikon DSLRs, vintage digital gear and industrial equipment, where industrial CF remains in embedded systems."
  ],
  "replaced": [
   "专业相机先由 CFast（SATA）和 XQD 接替，再统一到 CFexpress（PCIe/NVMe，4.0 版 Type B 约 4GB/s）；消费相机则改用更小的 SD 卡。",
   "In pro cameras CF was succeeded first by CFast (SATA) and XQD, then by CFexpress (PCIe/NVMe, about 4 GB/s for Type B in 4.0); consumer cameras moved to the smaller SD card."
  ],
  "refs": [
   {
    "t": "Wikipedia: CompactFlash",
    "u": "https://en.wikipedia.org/wiki/CompactFlash"
   },
   {
    "t": "Computer History Museum: 1991 Solid State Drive module demonstrated",
    "u": "https://www.computerhistory.org/storageengine/solid-state-drive-module-demonstrated/"
   },
   {
    "t": "EE Times Japan: 小型フラッシュメモリカード「CompactFlash」の登場(1993年〜1995年)",
    "u": "https://eetimes.itmedia.co.jp/ee/spv/2208/22/news050.html"
   },
   {
    "t": "CompactFlash Association Celebrates 30 Years",
    "u": "https://compactflash.org/?p=8336"
   },
   {
    "t": "Digitalkameramuseum: Kodak DC25 (1996)",
    "u": "https://www.digitalkameramuseum.de/en/cameras/item/kodak-dc25"
   },
   {
    "t": "Wikipedia: Nikon D1",
    "u": "https://en.wikipedia.org/wiki/Nikon_D1"
   },
   {
    "t": "Wikipedia: Microdrive",
    "u": "https://en.wikipedia.org/wiki/Microdrive"
   },
   {
    "t": "Engadget: CFA announces 600MB/sec CFast2.0 spec (2012)",
    "u": "https://www.engadget.com/2012/09/19/compactflash-association-announces-600mb-sec-cfast2-0-spec-sand/"
   },
   {
    "t": "Tom's Hardware: SanDisk 256GB CF card, VPG-65, UDMA 7",
    "u": "https://www.tomshardware.com/news/sandisk-compactflash-256gb-vpg-65-udma-7,24256.html"
   },
   {
    "t": "Wikipedia: CFexpress",
    "u": "https://en.wikipedia.org/wiki/CFexpress"
   }
  ]
 },
 "mhdd": {
  "stages": [
   [
    1992,
    "idea",
    "IBM Almaden 研究中心的 Tim Reiley 与 Tom Albrecht 提出把硬盘缩到 1 英寸、塞进 CF Type II 卡的构想，由 Fujisawa 工厂的 Hideya Ino 团队负责开发。",
    "At IBM's Almaden Research Center, Tim Reiley and Tom Albrecht conceived a hard disk shrunk to 1 inch to fit a CF Type II card; Hideya Ino's team at the Fujisawa plant developed it.",
    [
     0,
     1
    ]
   ],
   [
    1998,
    "proto",
    "IBM 于 1998 年 9 月发布 Microdrive：1 英寸盘片、20 克、4,500 rpm，符合 CF Type II 规格，容量是当时相机闪存卡的 5 倍以上。",
    "IBM announced the Microdrive in September 1998: a 1-inch platter, 20 g, 4,500 rpm, CF Type II compliant, with more than five times the capacity of camera flash cards of the day.",
    [
     0,
     2
    ]
   ],
   [
    1999,
    "mass",
    "第一代 Microdrive 于 1999 年 6 月上市，170MB 和 340MB 两档（约 499 美元），首先用于带 CF Type II 槽的数码相机和 PDA。",
    "The first-generation Microdrive shipped in June 1999 in 170 MB and 340 MB versions (about $499), first used in digital cameras and PDAs with CF Type II slots.",
    [
     0,
     2
    ]
   ],
   [
    2000,
    "ver",
    "IBM 推出 512MB 和 1GB Microdrive（399/499 美元），Kodak、Fujifilm、HP、Minolta、Nikon 等承诺支持；1GB 可存约 1,000 张高分辨率照片。",
    "IBM released 512 MB and 1 GB Microdrives ($399/$499) with Kodak, Fujifilm, HP, Minolta and Nikon pledging support; 1 GB held about 1,000 high-resolution photos.",
    [
     3
    ]
   ],
   [
    2003,
    "corp",
    "IBM 硬盘业务并入 Hitachi GST，Microdrive 继续发展到 2GB、4GB、6GB；Seagate、Cornice、Toshiba、Western Digital、Samsung、GS Magicstor 也做微型硬盘。",
    "IBM's disk business became Hitachi GST, which grew the Microdrive to 2, 4 and 6 GB; Seagate, Cornice, Toshiba, Western Digital, Samsung and GS Magicstor also built tiny drives.",
    [
     0
    ]
   ],
   [
    2004,
    "ver",
    "iPod mini（2004 年 1 月发布，249 美元）用 Hitachi/Seagate 的 1 英寸 4GB 硬盘，可存 1,000 首歌，是 Microdrive 出货量最大的产品；同年 Toshiba 推出 0.85 英寸硬盘（2GB/4GB），为史上最小量产硬盘。",
    "The iPod mini (January 2004, $249) used a 1-inch 4 GB Hitachi/Seagate drive holding 1,000 songs, the Microdrive's biggest seller; the same year Toshiba shipped a 0.85-inch drive (2 GB/4 GB), the smallest HDD ever sold.",
    [
     4,
     1,
     0
    ]
   ],
   [
    2004,
    "ver",
    "Samsung SPH-V5400（2004 年 9 月，韩国，约 800 美元）是首款内置硬盘的手机，1.5GB；JVC Everio GZ-MC200/MC100（2004 年 10 月）用随机附带的 4GB Microdrive 录 MPEG-2，约 1 小时。",
    "The Samsung SPH-V5400 (September 2004, Korea, about $800) was the first phone with a built-in hard disk, 1.5 GB; JVC's Everio GZ-MC200/MC100 (October 2004) recorded about an hour of MPEG-2 to a bundled 4 GB Microdrive.",
    [
     5,
     6
    ]
   ],
   [
    2005,
    "ver",
    "Nokia 于 2005 年 4 月发布带 4GB 硬盘的 N91（可存 3,000 首歌），但一再延期到 2006 年 4 月才上市；2006 年又发布 8GB 版。",
    "Nokia announced the N91 with a 4 GB hard disk (3,000 songs) in April 2005, but repeated delays pushed its launch to April 2006; an 8 GB version followed in 2006.",
    [
     7,
     8
    ]
   ],
   [
    2005,
    "rival",
    "iPod nano（2005 年 9 月）用 2GB/4GB 闪存直接取代 iPod mini：同容量、同价 249 美元、更薄更抗摔，闪存在 GB 级容量上追平微型硬盘。",
    "The iPod nano (September 2005) replaced the iPod mini with 2/4 GB of flash at the same $249, thinner and shock-proof, as flash caught up with tiny hard disks at GB capacities.",
    [
     9
    ]
   ],
   [
    2007,
    "end",
    "Microdrive 销量和利润下滑，Hitachi 约 2007 年停产，计划中的 8GB 型号未上市（约）；Cornice 因专利诉讼退出，CF、SD 卡在速度、容量、耐用性和价格上全面超过微型硬盘。",
    "As Microdrive sales and profits fell, Hitachi stopped production around 2007 and a planned 8 GB model never shipped (approx.); Cornice folded after patent suits, and CF and SD cards beat tiny HDDs on speed, capacity, durability and price.",
    [
     0,
     1
    ]
   ]
  ],
  "now": [
   "微型硬盘已停产近二十年，只在复古玩家手里出现：iPod mini、老 CF 相机常把 Microdrive 换成 CF 转 SD 或 CF 闪存卡继续使用。",
   "Tiny hard disks have been out of production for nearly two decades and survive only with retro users, who often swap the Microdrive in an iPod mini or old CF camera for a CF-to-SD adapter or a CF flash card."
  ],
  "replaced": [
   "被 NAND 闪存全面取代：播放器和手机改用内置闪存（后来是 eMMC/UFS），相机和摄像机改用 CF、SD 和 microSD 卡。",
   "Fully replaced by NAND flash: players and phones moved to built-in flash (later eMMC/UFS), and cameras and camcorders moved to CF, SD and microSD cards."
  ],
  "refs": [
   {
    "t": "Wikipedia: Microdrive",
    "u": "https://en.wikipedia.org/wiki/Microdrive"
   },
   {
    "t": "StorageNewsletter: History (1999): IBM Microdrive",
    "u": "https://www.storagenewsletter.com/2018/06/28/history-1999-ibm-microdrive/"
   },
   {
    "t": "Route Fifty: IBM's Microdrive, world's smallest drive, stores up to 340M (1999)",
    "u": "https://www.route-fifty.com/digital-government/1999/02/ibms-microdrive-worlds-smallest-drive-stores-up-to-340m-of-data/309650/"
   },
   {
    "t": "DPReview: IBM Microdrive 1GB official (2000)",
    "u": "https://www.dpreview.com/articles/4869383797/microdrive1gb-official"
   },
   {
    "t": "Apple Newsroom: Apple Introduces iPod mini (2004)",
    "u": "https://www.apple.com/newsroom/2004/01/06Apple-Introduces-iPod-mini/"
   },
   {
    "t": "InfoWorld: Samsung shows cell phone with hard-disk drive (2004)",
    "u": "https://www.infoworld.com/article/2204946/samsung-shows-cell-phone-with-hard-disk-drive.html"
   },
   {
    "t": "AV Watch: ビクター、HDD/SDカード記録のMPEG-2カメラ Everio (2004)",
    "u": "https://av.watch.impress.co.jp/docs/20040914/victor.htm"
   },
   {
    "t": "Phys.org: Nokia N91 smartphone features 4GB hard drive (2005)",
    "u": "https://phys.org/news/2005-04-nokia-n91-smartphone-features-gb.html"
   },
   {
    "t": "Wikipedia: Nokia N91",
    "u": "https://en.wikipedia.org/wiki/Nokia_N91"
   },
   {
    "t": "Apple Newsroom: Apple Introduces iPod nano (2005)",
    "u": "https://www.apple.com/newsroom/2005/09/07Apple-Introduces-iPod-nano/"
   }
  ]
 },
 "ms": {
  "stages": [
   [
    1997,
    "idea",
    "Sony 于 1997 年 7 月公布 Memory Stick 构想：50×21.5×2.8mm 口香糖形卡，10 针串行接口，想用一种卡打通相机、摄像机、音乐播放器和 PC（约）。",
    "Sony unveiled the Memory Stick concept in July 1997: a 50×21.5×2.8 mm gum-stick card with a 10-pin serial interface, meant to link cameras, camcorders, music players and PCs with one card (approx.).",
    [
     1,
     0
    ]
   ],
   [
    1998,
    "mass",
    "Memory Stick 于 1998 年秋（9–10 月）上市，容量 4MB 起、后来到 128MB；紫色为普通版，白色为带 MagicGate 版权保护的版本。",
    "Memory Stick launched in autumn 1998 (September to October), from 4 MB up to 128 MB later; purple cards were standard and white ones carried MagicGate copy protection.",
    [
     0,
     1
    ]
   ],
   [
    1999,
    "corp",
    "Cyber-shot DSC-F55（1999 年 1 月发布，2.1MP，Carl Zeiss 镜头）是第一台只用 Memory Stick 的 Sony 数码相机，16MB 卡可存约 40 张 1600×1200 JPEG。",
    "The Cyber-shot DSC-F55 (announced January 1999, 2.1 MP, Carl Zeiss lens) was the first Sony digital camera to use only Memory Stick; a 16 MB card held about 40 1600×1200 JPEGs.",
    [
     2
    ]
   ],
   [
    1999,
    "ver",
    "Sony 推出 64MB MagicGate Memory Stick（1999 年 12 月上市，20,000 日元）和 Memory Stick Walkman NW-MS7，用 ATRAC3 加密音乐；同年向 Fujitsu、Aiwa、Sanyo、Sharp、Pioneer、Kenwood 授权。",
    "Sony released the 64 MB MagicGate Memory Stick (December 1999, ¥20,000) and the NW-MS7 Memory Stick Walkman with ATRAC3-protected music, and licensed the format to Fujitsu, Aiwa, Sanyo, Sharp, Pioneer and Kenwood that year.",
    [
     3,
     0
    ]
   ],
   [
    2000,
    "rival",
    "同期的 SD 卡（Panasonic、SanDisk、Toshiba 1999 年发布）更小、开放授权，并被手机、PC 和其他相机厂广泛采用，成为 Memory Stick 的主要对手。",
    "The SD card (announced 1999 by Panasonic, SanDisk and Toshiba) was smaller, openly licensed and widely adopted by phones, PCs and other camera makers, becoming Memory Stick's main rival.",
    [
     6,
     0
    ]
   ],
   [
    2002,
    "ver",
    "Memory Stick Duo（2002 年 7 月）缩小到约一半尺寸；Sony Ericsson P800（2002 年 9 月）随机附带 16MB MS Duo，是首批用 Memory Stick 的手机，P900（2003）延续 MS Duo 槽。",
    "Memory Stick Duo (July 2002) shrank the card to about half size; the Sony Ericsson P800 (September 2002) shipped with a 16 MB MS Duo, among the first phones to use Memory Stick, and the P900 (2003) kept the MS Duo slot.",
    [
     0,
     4,
     5
    ]
   ],
   [
    2003,
    "ver",
    "Sony 与 SanDisk 合作推出 Memory Stick PRO（2003 年 1 月 CES），理论容量 32GB、并行接口更快；2004 年 PRO Duo 接替容量有限的 Duo。",
    "Sony and SanDisk launched Memory Stick PRO (CES, January 2003) with 32 GB theoretical capacity and a faster parallel interface; PRO Duo (2004) replaced the capacity-limited Duo.",
    [
     0
    ]
   ],
   [
    2006,
    "ver",
    "Memory Stick Micro（M2，2006 年 2 月，与 SanDisk 合作，15×12.5×1.2mm）面向手机；PRO-HG Duo（2006 年 12 月）用 8-bit 并行接口，理论 60MB/s。",
    "Memory Stick Micro (M2, February 2006, with SanDisk, 15×12.5×1.2 mm) targeted phones; PRO-HG Duo (December 2006) used an 8-bit parallel interface for 60 MB/s theoretical.",
    [
     0
    ]
   ],
   [
    2009,
    "ver",
    "Memory Stick XC（2009 年 1 月，与 SanDisk 合作）用 exFAT，理论容量 2TB，但实际产品容量远低于此（约）。",
    "Memory Stick XC (January 2009, with SanDisk) moved to exFAT with a 2 TB theoretical limit, though shipped cards stayed far below that (approx.).",
    [
     0
    ]
   ],
   [
    2010,
    "end",
    "Sony 从 2010 年起在新设备上同时支持 SD/SDHC，格式战基本结束；2019 年 α7R IV 改为双 SDXC 槽，不再兼容 Memory Stick。",
    "From 2010 Sony added SD/SDHC to new devices alongside Memory Stick, effectively ending the format war; the α7R IV (2019) dropped Memory Stick for dual SDXC slots.",
    [
     0
    ]
   ]
  ],
  "now": [
   "Memory Stick 已基本停用，新款 Sony 相机和手机都不支持；只剩老 Cyber-shot、PSP 和 VAIO 用户在二手市场买 PRO Duo 卡，或用 microSD 转 MS PRO Duo 适配器。",
   "Memory Stick is essentially retired, with no support in new Sony cameras or phones; only owners of old Cyber-shots, PSPs and VAIOs still buy used PRO Duo cards or use microSD-to-MS PRO Duo adapters."
  ],
  "replaced": [
   "被 SD/microSD 取代，Sony 高端机型则改用 CFexpress Type A 和 SD 双格式槽。",
   "Replaced by SD/microSD; Sony's high-end bodies moved to dual-format CFexpress Type A and SD slots."
  ],
  "refs": [
   {
    "t": "Wikipedia: Memory Stick",
    "u": "https://en.wikipedia.org/wiki/Memory_Stick"
   },
   {
    "t": "EE Times Japan: 大競争時代が続く切手大の小型フラッシュカード(1997年〜2000年)",
    "u": "https://eetimes.itmedia.co.jp/ee/spv/2209/28/news042_2.html"
   },
   {
    "t": "Digitalkameramuseum: Sony DSC-F55 (1999)",
    "u": "https://www.digitalkameramuseum.de/en/cameras/item/sony-dsc-f55"
   },
   {
    "t": "Sony Japan press release 1999-09-22: MagicGate Memory Stick",
    "u": "https://www.sony.jp/CorporateCruise/Press/199909/99-0922B/"
   },
   {
    "t": "Wikipedia: Sony Ericsson P800",
    "u": "https://en.wikipedia.org/wiki/Sony_Ericsson_P800"
   },
   {
    "t": "Wikipedia: Sony Ericsson P900",
    "u": "https://en.wikipedia.org/wiki/Sony_Ericsson_P900"
   },
   {
    "t": "Wikipedia: SD card",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   }
  ]
 },
 "sd": {
  "stages": [
   [
    1997,
    "idea",
    "SanDisk 与 Siemens、Nokia 推出 MultiMediaCard（MMC）：32×24×1.4mm、7 触点串行接口，是 SD 的直接前身；SD 卡可插 MMC 槽，反之不行。",
    "SanDisk, Siemens and Nokia introduced the MultiMediaCard (MMC): 32×24×1.4 mm with a 7-contact serial interface, the direct ancestor of SD; SD cards fit MMC slots but not the reverse.",
    [
     1,
     2
    ]
   ],
   [
    1999,
    "paper",
    "Panasonic、SanDisk、Toshiba 于 1999 年 8 月联合发布 Secure Digital：在 MMC 基础上加 4-bit 数据总线、写保护开关、防反插缺口和 CPRM 版权保护。",
    "Panasonic, SanDisk and Toshiba jointly announced Secure Digital in August 1999, adding a 4-bit data bus, write-protect switch, keyed notch and CPRM copy protection to MMC.",
    [
     0,
     2
    ]
   ],
   [
    2000,
    "corp",
    "三家在 2000 年 1 月 CES 成立 SD Association（SDA），以开放授权推广格式；初期卡 8–64MB，2000 年 8 月 64MB 约 200 美元。",
    "The three founded the SD Association (SDA) at CES in January 2000 to license the format openly; early cards ran 8 to 64 MB, with 64 MB at about $200 by August 2000.",
    [
     0,
     2
    ]
   ],
   [
    2000,
    "mass",
    "Panasonic 首批 SD 产品于 2000 年 6 月 30 日上市：32/64MB 卡（传输 2MB/s）和 SV-SD70 音乐播放器（AAC，49,800 日元）；10 月 25 日松下寿的 PV-DC3000J 成为业界首台 SD 卡数码相机。",
    "Panasonic's first SD products went on sale on 30 June 2000: 32/64 MB cards (2 MB/s) and the SV-SD70 music player (AAC, ¥49,800); on 25 October Matsushita Kotobuki's PV-DC3000J became the industry's first SD-card digital camera.",
    [
     3,
     4
    ]
   ],
   [
    2002,
    "ver",
    "Sharp 为 J-Phone 做的 J-SH51（2001 年 11 月发布、2002 年初上市）是首款带 SD 卡槽的手机，可存照片、Java 和 MP3；此前 Siemens SL45（2000）用的是 MMC。",
    "Sharp's J-SH51 for J-Phone (announced November 2001, on sale early 2002) was the first phone with an SD slot, storing photos, Java apps and MP3s; the earlier Siemens SL45 (2000) used MMC.",
    [
     5,
     6
    ]
   ],
   [
    2002,
    "rival",
    "对手格式林立：Sony Memory Stick（1998）、Olympus/Fujifilm 的 xD-Picture Card（2002，16MB–2GB）、CompactFlash；xD 在 2009 年被两家放弃，转向 SD。",
    "Rival formats abounded: Sony's Memory Stick (1998), Olympus/Fujifilm's xD-Picture Card (2002, 16 MB to 2 GB) and CompactFlash; both makers dropped xD for SD in 2009.",
    [
     8,
     0
    ]
   ],
   [
    2004,
    "ver",
    "miniSD（2003）之后，SanDisk 与 Motorola 的 TransFlash 于 2004 年出现，2005 年被 SDA 采纳为 microSD（15×11×1mm），成为手机扩展存储的通用卡。",
    "After miniSD (2003), SanDisk and Motorola's TransFlash appeared in 2004 and was adopted by the SDA in 2005 as microSD (15×11×1 mm), the universal phone expansion card.",
    [
     0
    ]
   ],
   [
    2006,
    "ver",
    "SD 2.0（2006 年 6 月）定义 SDHC，容量上限从 2GB 提到 32GB，并加入 Class 2/4/6 速度等级；Panasonic HDC-SD1（2006 年 12 月日本上市）是首台把 1080i AVCHD 录到 SD/SDHC 卡的摄像机，4GB 约 1 小时。",
    "SD 2.0 (June 2006) defined SDHC, raising the cap from 2 GB to 32 GB and adding Class 2/4/6 speed classes; Panasonic's HDC-SD1 (Japan, December 2006) was the first camcorder recording 1080i AVCHD to SD/SDHC, about an hour on 4 GB.",
    [
     0,
     7
    ]
   ],
   [
    2009,
    "ver",
    "SD 3.0 推出 SDXC（最高 2TB，exFAT）和 UHS-I 总线（104MB/s）；2011 年 UHS-II 加第二排触点到 312MB/s，2017 年 UHS-III 到 624MB/s。",
    "SD 3.0 introduced SDXC (up to 2 TB, exFAT) and the UHS-I bus (104 MB/s); UHS-II (2011) added a second contact row for 312 MB/s, and UHS-III (2017) reached 624 MB/s.",
    [
     0
    ]
   ],
   [
    2018,
    "ver",
    "SD 7.0（2018 年 6 月）加入 SD Express，用 PCIe/NVMe 达 985MB/s，并定义 SDUC（最高 128TB）；SD 8.0（2020）支持 PCIe 4.0，最高约 3,938MB/s。",
    "SD 7.0 (June 2018) added SD Express, using PCIe/NVMe for 985 MB/s, and defined SDUC (up to 128 TB); SD 8.0 (2020) added PCIe 4.0 for up to about 3,938 MB/s.",
    [
     0
    ]
   ],
   [
    2024,
    "ver",
    "SanDisk 在 NAB 2024 发布首张 4TB SDUC 卡 Extreme PRO（UHS-I，V30），2025 年出货；Nintendo Switch 2（2025 年 6 月）只认 microSD Express，读速约 890MB/s，SD Express 首次大规模普及。",
    "SanDisk unveiled the first 4 TB SDUC card, the Extreme PRO (UHS-I, V30), at NAB 2024 for 2025 shipping; the Nintendo Switch 2 (June 2025) accepts only microSD Express at about 890 MB/s read, SD Express's first mass-market use.",
    [
     9,
     10
    ]
   ]
  ],
  "now": [
   "SD/microSD 仍是相机、无人机、运动相机、游戏机和行车记录仪最常见的卡：主流是 UHS-I/UHS-II V30–V90 卡，SanDisk Extreme PRO SDUC 达 4TB，Switch 2 推动 microSD Express 普及。",
   "SD/microSD is still the most common card in cameras, drones, action cams, game consoles and dashcams: mainstream cards are UHS-I/UHS-II at V30 to V90, SanDisk's Extreme PRO SDUC reaches 4 TB, and the Switch 2 is spreading microSD Express."
  ],
  "replaced": [
   "未被取代，但高端相机的主槽已让给 CFexpress，手机也大多取消 microSD 槽改用内置 UFS；SD 自身正经由 SD Express（PCIe/NVMe）向 SSD 级速度演进。",
   "Not replaced, but CFexpress has taken the primary slot in high-end cameras and most phones dropped microSD for built-in UFS; SD itself is moving toward SSD-class speed through SD Express (PCIe/NVMe)."
  ],
  "refs": [
   {
    "t": "Wikipedia: SD card",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   },
   {
    "t": "Wikipedia: MultiMediaCard",
    "u": "https://en.wikipedia.org/wiki/MultiMediaCard"
   },
   {
    "t": "EE Times Japan: 大競争時代が続く切手大の小型フラッシュカード(1997年〜2000年)",
    "u": "https://eetimes.itmedia.co.jp/ee/spv/2209/28/news042_2.html"
   },
   {
    "t": "PC Watch: 松下、SDメモリーカード搭載ポータブルオーディオプレーヤー2機種 (2000)",
    "u": "https://pc.watch.impress.co.jp/docs/article/20000509/pana.htm"
   },
   {
    "t": "Phile-web: 松下寿 SDカード対応デジカメ iPalm PV-DC3000J (2000)",
    "u": "https://www.phileweb.com/sp/news/d-av/200009/19/405.html"
   },
   {
    "t": "ITmedia: J-フォン 新端末 J-SH51 (2001)",
    "u": "https://www.itmedia.co.jp/mobile/news/0111/05/jsh.html"
   },
   {
    "t": "Mobile Phone Museum: J-Phone J-SH51",
    "u": "https://mobilephonemuseum.com/phone-detail/j-sh-51"
   },
   {
    "t": "Videomaker: Panasonic delivers two new AVCHD camcorders (2006)",
    "u": "https://www.videomaker.com/videonews/2006/12/panasonic-delivers-two-new-avchd-camcorders/"
   },
   {
    "t": "Wikipedia: xD-Picture Card",
    "u": "https://en.wikipedia.org/wiki/XD-Picture_Card"
   },
   {
    "t": "PCWorld: SanDisk surfaces a stupendous 4TB SD card (2024)",
    "u": "https://www.pcworld.com/article/2303280/sandisk-surfaces-a-stupendous-4tb-sd-card.html"
   },
   {
    "t": "PetaPixel: PNY unveils microSD Express cards for Switch 2 (2025)",
    "u": "https://petapixel.com/2025/05/24/pny-unveils-microsd-express-cards-for-switch-2/"
   }
  ]
 },
 "usbflash": {
  "stages": [
   [
    1999,
    "idea",
    "Trek 2000（新加坡）创始人 Henn Tan 设想把 USB 接口、闪存、控制器和固件装进一个塑料外壳——“去掉播放器的音乐播放器”（约）。",
    "Trek 2000 (Singapore) founder Henn Tan conceived of putting USB, flash memory, a controller and firmware in one plastic case: \"a music player without the player\" (approx.).",
    [
     2
    ]
   ],
   [
    1999,
    "paper",
    "M-Systems（以色列）的 Amir Ban、Dov Moran、Oron Ogdan 于 1999-04-05 申请专利《Architecture for a Universal Serial Bus-Based PC Flash Disk》，2000-11-14 授权为 US 6,148,354。",
    "M-Systems (Israel) engineers Amir Ban, Dov Moran and Oron Ogdan filed \"Architecture for a Universal Serial Bus-Based PC Flash Disk\" on 1999-04-05; it was granted as US 6,148,354 on 2000-11-14.",
    [
     1,
     0
    ]
   ],
   [
    1999,
    "corp",
    "中国朗科 Netac 于 1999-11-14 提交专利申请，2002 年获中国专利、2004-12-07 获美国专利，并做出写保护功能；三家公司都自称发明者。",
    "China's Netac filed its patent on 1999-11-14, won a Chinese patent in 2002 and a US patent on 2004-12-07, and added a write-protect switch. All three companies claimed to have invented the drive.",
    [
     0,
     2
    ]
   ],
   [
    2000,
    "proto",
    "Trek 在 2000 年 2 月德国 CeBIT 展出 8MB ThumbDrive，展前一个月刚提交专利申请。",
    "Trek showed the 8 MB ThumbDrive at CeBIT in Germany in February 2000, one month after filing its patent application.",
    [
     2,
     0
    ]
   ],
   [
    2000,
    "mass",
    "Trek 在 2000 年 4–7 月生产了超过 10 万只 ThumbDrive，是最早上市销售的 USB 闪存盘。",
    "Trek built more than 100,000 ThumbDrives between April and July 2000, making it the first USB flash drive on sale.",
    [
     2
    ]
   ],
   [
    2000,
    "corp",
    "2000 年末，IBM 在美国以 DiskOnKey 名义销售 M-Systems 生产的 8MB U 盘，是美国市场第一款 U 盘。",
    "In late 2000 IBM began selling M-Systems' 8 MB drive in the US as the DiskOnKey, the first USB flash drive on the US market.",
    [
     0,
     2
    ]
   ],
   [
    2001,
    "ver",
    "Phison（创始人 Pua Khein-Seng）推出单芯片 SoC 控制器，把 U 盘做得更小更便宜，带动大规模普及。",
    "Phison, founded by Pua Khein-Seng, introduced a single-chip SoC controller that made drives smaller and cheaper, opening up mass adoption.",
    [
     0
    ]
   ],
   [
    2002,
    "ver",
    "USB 2.0 U 盘出现：理论 480 Mbit/s，实际约 35 MB/s；USB 1.1 版本只有 12 Mbit/s（约 1.5 MB/s）。",
    "USB 2.0 drives arrived at 480 Mbit/s theoretical, about 35 MB/s in practice. USB 1.1 drives had topped out at 12 Mbit/s (about 1.5 MB/s).",
    [
     0
    ]
   ],
   [
    2013,
    "ver",
    "2010 年最大容量到 128GB；2013 年 1 月 Kingston 推出 1TB U 盘，2017 年又发布 2TB 型号。",
    "Maximum capacity reached 128 GB in 2010. Kingston released a 1 TB drive in January 2013 and announced a 2 TB model in 2017.",
    [
     0
    ]
   ],
   [
    2015,
    "ver",
    "USB 3.1 Type-C U 盘（2015 年 3 月起）读写约 530 MB/s，已接近 SATA SSD。",
    "USB 3.1 Type-C drives (from March 2015) read and wrote at about 530 MB/s, close to a SATA SSD.",
    [
     0
    ]
   ],
   [
    2018,
    "ver",
    "Tesla 软件 V9.0（2018 年 9–10 月）加入 Dashcam：前置 USB 口插 FAT32 格式、建好 TeslaCam 文件夹的 U 盘，循环录制前向摄像头约 1 小时视频，需 Autopilot 2.5 硬件。",
    "Tesla software V9.0 (Sep–Oct 2018) added Dashcam: a FAT32 USB drive with a TeslaCam folder in a front USB port loops about one hour of forward-camera video. It needs Autopilot 2.5 hardware.",
    [
     3
    ]
   ],
   [
    2024,
    "ver",
    "4TB 成为在产 U 盘的最大容量。",
    "4 TB became the largest USB flash drive capacity in production.",
    [
     0
    ]
   ]
  ],
  "now": [
   "2026 年 U 盘普遍是 USB 3.2 Gen 1/Gen 2、USB-C 与 Type-A 双头，容量 64GB–1TB 为主流，高端如 Kingston DataTraveler Max 读速约 1000 MB/s；汽车里仍用 U 盘或外接 SSD 存 Tesla Dashcam / Sentry Mode 录像。",
   "In 2026 flash drives are mostly USB 3.2 Gen 1/Gen 2, often with both USB-C and Type-A plugs, typically 64 GB to 1 TB. High-end models such as the Kingston DataTraveler Max read at about 1000 MB/s. Cars still record Tesla Dashcam / Sentry Mode video to a USB stick or an external SSD."
  ],
  "replaced": [
   "拷贝照片视频的角色已大多让位给云同步、Wi-Fi/AirDrop 无线传输和便携 NVMe SSD；U 盘仍在系统启动盘、车载录像和离线分发里使用。",
   "For moving photos and video it has largely given way to cloud sync, Wi-Fi/AirDrop transfers and portable NVMe SSDs. It is still used for boot media, in-car recording and offline distribution."
  ],
  "refs": [
   {
    "t": "USB flash drive - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/USB_flash_drive"
   },
   {
    "t": "US6148354A - Architecture for a universal serial bus-based PC flash disk (Google Patents)",
    "u": "https://patents.google.com/patent/US6148354A/en"
   },
   {
    "t": "Who Really Invented the Thumb Drive? - IEEE Spectrum",
    "u": "https://spectrum.ieee.org/thumb-drive"
   },
   {
    "t": "Tesla dashcam feature uses Autopilot camera in Version 9 - Electrek (2018-09-26)",
    "u": "https://electrek.co/2018/09/26/tesla-dashcam-feature-autopilot-camera-version-9/"
   }
  ]
 },
 "microsd": {
  "stages": [
   [
    2003,
    "idea",
    "SD 协会在 2003 年 CeBIT 推出 miniSD，但手机还想要更小的可插拔卡；SanDisk 着手开发只有 SD 四分之一大小的卡。",
    "The SD Association launched miniSD at CeBIT 2003, but phone makers wanted something even smaller, so SanDisk set out to build a card about a quarter the size of SD.",
    [
     0,
     1
    ]
   ],
   [
    2004,
    "proto",
    "SanDisk 与 Motorola 在 2004 年 2 月发布 TransFlash（T-Flash），尺寸 15×11×1 mm，比指甲盖还小，首批搭载于 Motorola 手机（E398、V710 等）。",
    "SanDisk and Motorola launched TransFlash (T-Flash) in February 2004. At 15 x 11 x 1 mm it was fingernail-sized, and it first shipped in Motorola phones (E398, V710 and others).",
    [
     1,
     0
    ]
   ],
   [
    2004,
    "mass",
    "2004 年 10 月 SanDisk 推出 256MB TransFlash，12 月起全球供货，预计 2005 年约 40 款手机支持。",
    "In October 2004 SanDisk released a 256 MB TransFlash card, with worldwide supply from December. About 40 handset models were expected to support it in 2005.",
    [
     1
    ]
   ],
   [
    2005,
    "ver",
    "2005 年 7 月 SD 协会把 TransFlash 采纳为标准并更名 microSD，首批容量为 32/64/128MB，与 TransFlash 互通。",
    "In July 2005 the SD Association adopted TransFlash as a standard and renamed it microSD. The first sizes were 32/64/128 MB, interchangeable with TransFlash.",
    [
     2,
     0
    ]
   ],
   [
    2006,
    "ver",
    "microSDHC（SD 2.0）使用 FAT32，把容量上限提到 32GB。",
    "microSDHC (SD 2.0) used FAT32 and raised the capacity limit to 32 GB.",
    [
     2
    ]
   ],
   [
    2011,
    "ver",
    "microSDXC 改用 exFAT，规格上限 2TB，并引入 UHS 总线；2011 年 9 月 SanDisk 发布 64GB Mobile Ultra microSDXC，速度 30 MB/s。",
    "microSDXC switched to exFAT, allowed up to 2 TB and added the UHS bus. In September 2011 SanDisk released the 64 GB Mobile Ultra microSDXC at 30 MB/s.",
    [
     2,
     3
    ]
   ],
   [
    2016,
    "rival",
    "2016 年 7 月 Samsung 推出首批 JEDEC UFS 存储卡（最大 256GB，读 530 MB/s、写 170 MB/s），约为 microSD 的 5 倍，但触点不兼容，几乎没有设备采用。",
    "In July 2016 Samsung launched the first JEDEC UFS memory cards (up to 256 GB, 530 MB/s read, 170 MB/s write), about five times faster than microSD. Their pins were not compatible, and almost no devices adopted them.",
    [
     6
    ]
   ],
   [
    2018,
    "ver",
    "SD 7.0 加入 SDUC 容量等级（上限 128TB）和 PCIe/NVMe 的 SD Express，microSDUC 也随之定义。",
    "SD 7.0 added the SDUC capacity class (up to 128 TB) and the PCIe/NVMe SD Express interface, and defined microSDUC alongside them.",
    [
     10,
     2
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 2 月 SD 7.1 定义 microSD Express（PCIe 3.1 + NVMe，最高 985 MB/s）；同月 SanDisk 发布 1TB Extreme microSDXC（读 160 / 写 90 MB/s，449.99 美元，4 月上市）。",
    "In February 2019 SD 7.1 defined microSD Express (PCIe 3.1 + NVMe, up to 985 MB/s). The same month SanDisk announced the 1 TB Extreme microSDXC (160 MB/s read, 90 MB/s write, $449.99, on sale in April).",
    [
     5,
     4
    ]
   ],
   [
    2021,
    "end",
    "Samsung Galaxy S21 全系取消 microSD 卡槽，改为 128–512GB 内置存储；旗舰手机基本告别存储卡。",
    "Samsung dropped the microSD slot from every Galaxy S21 model in favour of 128–512 GB of built-in storage. Flagship phones had largely abandoned memory cards.",
    [
     8
    ]
   ],
   [
    2024,
    "ver",
    "SanDisk Extreme Pro 2TB microSD 于 2024 年 11 月上市（读 250 / 写 150 MB/s，约 320 欧元），达到 microSDXC 的容量上限。",
    "The SanDisk Extreme Pro 2 TB microSD went on sale in November 2024 (250 MB/s read, 150 MB/s write, about EUR 320), hitting the microSDXC capacity ceiling.",
    [
     7,
     0
    ]
   ],
   [
    2025,
    "ver",
    "Nintendo Switch 2 只认 microSD Express 卡（最大 2TB），旧 microSDXC 卡不能存游戏，microSD Express 借此进入大众市场。",
    "The Nintendo Switch 2 accepts only microSD Express cards (up to 2 TB) and will not store games on older microSDXC cards, which brought microSD Express to the mass market.",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年 microSD 仍是运动相机（GoPro、DJI Osmo）、无人机、行车记录仪、监控摄像头和掌机的标准存储；主流为 UHS-I V30/A2，容量到 2TB，Switch 2 推动 microSD Express 普及。",
   "In 2026 microSD is still the standard storage for action cameras (GoPro, DJI Osmo), drones, dashcams, security cameras and handheld consoles. Mainstream cards are UHS-I V30/A2 at up to 2 TB, and the Switch 2 is pushing microSD Express."
  ],
  "replaced": [
   "在手机里它被 eMMC/UFS 内置存储和云相册取代；在卡本身上，microSD Express（PCIe/NVMe）和 microSDUC 正在接替 UHS-I。",
   "In phones it was replaced by built-in eMMC/UFS storage and cloud photo libraries. As a card format, microSD Express (PCIe/NVMe) and microSDUC are taking over from UHS-I."
  ],
  "refs": [
   {
    "t": "SD card - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   },
   {
    "t": "SanDisk 256MB TransFlash card - DPReview (2004)",
    "u": "https://www.dpreview.com/articles/2887322869/sandisk-transflash"
   },
   {
    "t": "Celebrating 20 Years of microSD - SD Association",
    "u": "https://www.sdcard.org/press/thoughtleadership/celebrating-20-years-of-microsd"
   },
   {
    "t": "SanDisk outs Extreme Pro SDXC, Mobile Ultra microSDXC - Engadget (2011)",
    "u": "https://www.engadget.com/2011-09-14-sandisk-outs-extreme-pro-64gb-sdxc-mobile-ultra-microsdxc-new.html"
   },
   {
    "t": "Western Digital Unveils World's Fastest 1TB UHS-I microSD Card (2019-02-25)",
    "u": "https://www.westerndigital.com/company/newsroom/press-releases/2019/2019-02-25-western-digital-unveils-worlds-fastest-1tb-uhs-i-microsd-card"
   },
   {
    "t": "microSD Express cards are removable SSD cards - CNX Software (2019-02-26)",
    "u": "https://www.cnx-software.com/2019/02/26/microsd-express-cards-removable-ssd-cards/"
   },
   {
    "t": "Samsung's world-first UFS memory cards - Engadget (2016-07-06)",
    "u": "https://www.engadget.com/2016/07/06/samsung-ufs-removable-storage/"
   },
   {
    "t": "The first MicroSD memory card with 2 TByte is on sale - heise",
    "u": "https://heise.de/-9978772"
   },
   {
    "t": "Samsung removes microSD support from Galaxy S21 - 9to5Google (2021-01-14)",
    "u": "https://9to5google.com/2021/01/14/samsung-microsd-card-support-galaxy-s21/"
   },
   {
    "t": "microSD Express Card FAQ - Nintendo Support",
    "u": "https://en-americas-support.nintendo.com/app/answers/detail/a_id/68218/~/microsd-express-card-faq"
   },
   {
    "t": "SDUC Express Memory Cards to Allow 128TB Storage and 985MB/s Speed - PetaPixel (2018-06-27)",
    "u": "https://petapixel.com/2018/06/27/sduc-express-memory-cards-to-allow-128tb-storage-and-985mb-s-speed/"
   }
  ]
 },
 "wifi": {
  "stages": [
   [
    2003,
    "proto",
    "Nikon 在 2003 年 7 月随 D2H 发布 WT-1 无线发射器，用 IEEE 802.11b 把照片经 FTP 传到电脑，被称为首个相机 Wi-Fi 发射器，但它是挂在机身下的外置附件。",
    "Nikon announced the WT-1 wireless transmitter with the D2H in July 2003. It sent photos over IEEE 802.11b to a computer by FTP and is called the first camera Wi-Fi transmitter, but it was an external unit mounted under the body.",
    [
     2
    ]
   ],
   [
    2005,
    "corp",
    "Kodak 在 CES 2005（1 月 5 日）发布 EasyShare-One：400 万像素、3 英寸屏，Wi-Fi 靠另购 99 美元的 Kodak Wi-Fi SD 卡，可直接上传到 EasyShare Gallery。",
    "Kodak unveiled the EasyShare-One at CES 2005 (January 5): 4 MP and a 3-inch screen, with Wi-Fi from a separate $99 Kodak Wi-Fi SD card. It uploaded straight to EasyShare Gallery.",
    [
     1
    ]
   ],
   [
    2005,
    "mass",
    "Nikon 在 2005-09-01 发布 Coolpix P1（800 万像素，549.95 美元）和 P2，号称首批内置 802.11b/g Wi-Fi 的数码相机，9 月中旬上市，支持拍完即传和无线打印。",
    "Nikon announced the Coolpix P1 (8 MP, $549.95) and P2 on 2005-09-01, billed as the first digital cameras with built-in 802.11b/g Wi-Fi. They shipped in mid-September and could send each shot as it was taken or print wirelessly.",
    [
     0
    ]
   ],
   [
    2005,
    "corp",
    "Yuval Koren、Ziv Gillat、Eugene Feinberg、Berend Ozceri 在 Mountain View 创立 Eye-Fi，要把 Wi-Fi 塞进普通 SD 卡。",
    "Yuval Koren, Ziv Gillat, Eugene Feinberg and Berend Ozceri founded Eye-Fi in Mountain View to put Wi-Fi inside an ordinary SD card.",
    [
     4
    ]
   ],
   [
    2007,
    "mass",
    "2007-10-30 Eye-Fi 卡上市：2GB、802.11g、99 美元，任何用 SD 卡的相机都能自动上传到电脑或 17 个网络相册之一。",
    "The Eye-Fi card shipped on 2007-10-30: 2 GB, 802.11g, $99. Any SD camera could upload automatically to a PC or to one of 17 photo sites.",
    [
     3,
     4
    ]
   ],
   [
    2009,
    "ver",
    "Eye-Fi 在 2009 年加入地理标签，后续推出 Pro X2（支持 RAW）和 Mobi 系列，容量 2–32GB。",
    "Eye-Fi added geotagging in 2009, then released the Pro X2 (with RAW support) and the Mobi line in 2–32 GB sizes.",
    [
     4
    ]
   ],
   [
    2011,
    "rival",
    "Toshiba 在 2011-09-01 发布 FlashAir：8GB SDHC、802.11b/g/n，自称首张符合 SD 标准的内嵌无线 LAN 卡，可让手机直接连卡取图，2012 年 2 月开卖。",
    "Toshiba announced FlashAir on 2011-09-01: an 8 GB 802.11b/g/n SDHC card billed as the first SD-standard card with embedded wireless LAN. Phones could connect to the card directly, and sales began in February 2012.",
    [
     5
    ]
   ],
   [
    2016,
    "ver",
    "Nikon 在 CES 2016 发布 SnapBridge，首发于 D500：用 Bluetooth Low Energy 保持常连，拍完自动把图同步到手机，需要时再切到 Wi-Fi 传大文件。",
    "Nikon unveiled SnapBridge at CES 2016, first in the D500. Bluetooth Low Energy keeps an always-on link, photos sync to the phone automatically, and the camera switches to Wi-Fi for large files.",
    [
     6
    ]
   ],
   [
    2016,
    "end",
    "Eye-Fi 在 2016-09-16 停止支持 X2 及更早的卡（安全问题）；云服务卖给 Ricoh 旗下改名 Keenai，2018-12-01 关闭。Wi-Fi SD 卡退场。",
    "Eye-Fi ended support for X2 and older cards on 2016-09-16, citing security problems. Its cloud service went to a Ricoh subsidiary as Keenai and closed on 2018-12-01. The Wi-Fi SD card was finished.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Adobe Frame.io 在 2021 年 2 月推出 Camera to Cloud（C2C），通过 Teradek、Sound Devices 等外接硬件把代理视频实时上传到云端。",
    "Adobe's Frame.io launched Camera to Cloud (C2C) in February 2021, uploading proxy video to the cloud in real time through external hardware from Teradek, Sound Devices and others.",
    [
     7
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 10 月 RED V-Raptor 原生支持 C2C 直传 8K REDCODE RAW；Fujifilm X-H2S（配 FT-XH）成为首台原生接入 C2C 的照相机，固件于 2023 年春推送。",
    "In October 2022 the RED V-Raptor gained native C2C, uploading 8K REDCODE RAW directly. The Fujifilm X-H2S with the FT-XH grip became the first stills camera with native C2C, with firmware in spring 2023.",
    [
     7
    ]
   ]
  ],
  "now": [
   "2026 年几乎所有相机都内置 2.4/5GHz Wi-Fi + Bluetooth LE，通过 Nikon SnapBridge、Canon Camera Connect、Fujifilm XApp 等 App 自动传图，专业机还能原生走 Frame.io Camera to Cloud 直传云端。",
   "In 2026 nearly every camera has built-in 2.4/5 GHz Wi-Fi plus Bluetooth LE and transfers photos automatically through apps such as Nikon SnapBridge, Canon Camera Connect and Fujifilm XApp. Pro bodies can also upload straight to the cloud with native Frame.io Camera to Cloud."
  ],
  "replaced": [
   "Wi-Fi SD 卡（Eye-Fi、FlashAir）已被相机内置 Wi-Fi/BLE 取代；下一步是相机通过 Wi-Fi、有线网或 5G 直传云端（Camera to Cloud）。",
   "Wi-Fi SD cards (Eye-Fi, FlashAir) were replaced by Wi-Fi/BLE built into the camera. Next is the camera uploading straight to the cloud over Wi-Fi, Ethernet or 5G (Camera to Cloud)."
  ],
  "refs": [
   {
    "t": "Nikon announces two P-series digicams - Imaging Resource (2005-09-01)",
    "u": "https://www.imaging-resource.com/NEWS/1125554464.html"
   },
   {
    "t": "Kodak EasyShare One - DPReview (2005)",
    "u": "https://www.dpreview.com/articles/9829905388/kodakeasyshareone/"
   },
   {
    "t": "Nikon Remote Control & Transmitters (WT-1 history)",
    "u": "https://nicovandijk.net/transmitter.htm"
   },
   {
    "t": "Eye-Fi WiFi-enabled SD card finally shipping - Engadget (2007-10-30)",
    "u": "https://www.engadget.com/2007-10-30-eye-fi-wifi-enabled-sd-card-finally-shipping.html"
   },
   {
    "t": "Eye-Fi - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Eye-Fi"
   },
   {
    "t": "Toshiba to launch FlashAir SDHC memory card with embedded wireless LAN - Kioxia (2011-09-01)",
    "u": "https://www.kioxia.com/en-jp/about/news/2011/20110901-1.html"
   },
   {
    "t": "Nikon SnapBridge connectivity announcement (2016-01-06)",
    "u": "https://www.nikon.com/company/news/2016/0106_snapbridge_04/"
   },
   {
    "t": "Announcing New In-Camera Integrations with RED and Fujifilm - Frame.io (2022-10-18)",
    "u": "https://blog.frame.io/2022/10/18/red-fujifilm-c2c/"
   }
  ]
 },
 "cfast": {
  "stages": [
   [
    1994,
    "idea",
    "SanDisk 1994 年推出的 CompactFlash 用并行 ATA（PATA）接口，上限约 133 MB/s，速度成为 CF 的天花板。",
    "SanDisk's 1994 CompactFlash used parallel ATA (PATA), which capped it at about 133 MB/s and became the format's speed ceiling.",
    [
     0,
     1
    ]
   ],
   [
    2008,
    "paper",
    "CompactFlash 协会（CFA）在 CES 2008 展示 SATA 接口的 CFast 连接器和外壳，接口速率 3 Gb/s；主席 Shigeto Kanda 把目标定为嵌入式、单板机、数据记录仪以及单反和摄像机。同年发布 CFast 1.0 规范（SATA II，300 MB/s）。",
    "The CompactFlash Association showed the SATA-based CFast connector and package at CES 2008, at 3 Gb/s. Chairman Shigeto Kanda named embedded systems, single-board computers, data recorders, DSLRs and camcorders as targets. The CFast 1.0 spec (SATA II, 300 MB/s) followed that year.",
    [
     1,
     0
    ]
   ],
   [
    2009,
    "proto",
    "Pretec 在 CES 2009 发布 32GB CFast 卡（36×43 mm，最高 160 MB/s，约为当时最快 CF 卡的 3 倍），号称世界最小的 SATA SSD。",
    "Pretec unveiled a 32 GB CFast card at CES 2009 (36 x 43 mm, up to 160 MB/s, about three times the fastest CF card), billed as the world's smallest SATA SSD.",
    [
     2
    ]
   ],
   [
    2009,
    "mass",
    "首批 CFast 卡在 2009 年末上市，主要用于工控电脑和嵌入式设备。",
    "The first CFast cards reached the market in late 2009, mainly for industrial PCs and embedded systems.",
    [
     0,
     2
    ]
   ],
   [
    2012,
    "ver",
    "CFA 在 2012 年 9 月公布 CFast 2.0 草案：改用 SATA III 6 Gb/s，最高 600 MB/s，约为 CF 的 4 倍，加入 DEVSLP 省电模式；SanDisk 开始送样，Phase One 表态支持。",
    "In September 2012 the CFA published the CFast 2.0 draft: SATA III at 6 Gb/s, up to 600 MB/s (about four times CF), plus a DEVSLP low-power mode. SanDisk began sampling cards and Phase One pledged support.",
    [
     3,
     0
    ]
   ],
   [
    2013,
    "corp",
    "IBC 2013 上 SanDisk 发布 Extreme Pro CFast 2.0（60/120GB，读 450 MB/s、写最高 350 MB/s），同时 ARRI 发布首台原生录 CFast 2.0 的 AMIRA。",
    "At IBC 2013 SanDisk launched the Extreme Pro CFast 2.0 (60/120 GB, 450 MB/s read, up to 350 MB/s write) as ARRI unveiled the AMIRA, the first camera to record natively to CFast 2.0.",
    [
     4
    ]
   ],
   [
    2014,
    "mass",
    "ARRI AMIRA（双 CFast 2.0 卡槽录 ProRes）和 Blackmagic URSA 在 2014 年上市，CFast 2.0 进入电影机。",
    "The ARRI AMIRA (dual CFast 2.0 slots, recording ProRes) and the Blackmagic URSA shipped in 2014, bringing CFast 2.0 into cinema cameras.",
    [
     0,
     4
    ]
   ],
   [
    2016,
    "ver",
    "Canon EOS-1D X Mark II（2016-02-01 发布）成为首台用 CFast 2.0 的 EOS 照相机：CFast + CF 双槽，CFast 下 RAW 连拍缓存从 73 张增到 170 张，4K60p 不分段录制。",
    "The Canon EOS-1D X Mark II (announced 2016-02-01) was the first EOS stills camera with CFast 2.0. It had one CFast and one CF slot, and CFast raised the RAW burst from 73 to 170 frames and allowed unsplit 4K60p recording.",
    [
     5
    ]
   ],
   [
    2016,
    "rival",
    "CFA 在 2016 年 9 月宣布基于 PCIe + NVMe 的 CFexpress，1.0 规范于 2017 年 4 月发布，目标就是取代 SATA 上限 600 MB/s 的 CFast。",
    "In September 2016 the CFA announced CFexpress, based on PCIe + NVMe. The 1.0 spec followed in April 2017, aimed squarely at replacing CFast and its 600 MB/s SATA limit.",
    [
     0
    ]
   ],
   [
    2020,
    "end",
    "约 2020–2022 年 Canon、Nikon 旗舰机转向 CFexpress 以支持 8K，CFast 失去照相机新机型（约）。",
    "Around 2020–2022 Canon and Nikon flagships moved to CFexpress for 8K, and CFast stopped appearing in new stills cameras (approx.).",
    [
     0
    ]
   ],
   [
    2024,
    "end",
    "Blackmagic 新机 PYXIS 6K 改用双 CFexpress Type B 卡槽加 USB-C 外录，称 CFexpress 比旧介质更快、更耐用；CFast 只留在存量电影机里。",
    "Blackmagic's PYXIS 6K switched to dual CFexpress Type B slots plus USB-C external recording, calling CFexpress faster and more durable than older media. CFast survives only in cinema cameras already in use.",
    [
     6
    ]
   ]
  ],
  "now": [
   "2026 年 CFast 2.0 仍用于已有的 ARRI AMIRA / ALEXA Mini、Canon EOS C300 Mark II、Blackmagic URSA Mini Pro 等机型和工控设备，卡商（如 Angelbird、SanDisk、Delkin）仍在供货，但新相机已基本不再采用。",
   "In 2026 CFast 2.0 is still used in existing ARRI AMIRA / ALEXA Mini, Canon EOS C300 Mark II and Blackmagic URSA Mini Pro bodies and in industrial equipment. Card makers such as Angelbird, SanDisk and Delkin still supply it, but new cameras have essentially stopped using it."
  ],
  "replaced": [
   "被 PCIe/NVMe 的 CFexpress（Type B / Type A）取代，电影机还转向专有 SSD 模块和 USB-C 外接 SSD。",
   "Replaced by PCIe/NVMe CFexpress (Type B / Type A). Cinema cameras are also moving to proprietary SSD modules and external USB-C SSDs."
  ],
  "refs": [
   {
    "t": "CompactFlash - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/CompactFlash"
   },
   {
    "t": "CompactFlash Association showing off CF card with SATA interface - Engadget (2008-01-04)",
    "u": "https://www.engadget.com/2008-01-04-compactflash-association-showing-off-cf-card-with-sata-interface.html"
   },
   {
    "t": "Pretec releases CFast card with SATA interface - DPReview (2009)",
    "u": "https://www.dpreview.com/?p=316922"
   },
   {
    "t": "CompactFlash Association announces 600MB/sec CFast2.0 spec - Engadget (2012-09-19)",
    "u": "https://www.engadget.com/2012/09/19/compactflash-association-announces-600mb-sec-cfast2-0-spec-sand/"
   },
   {
    "t": "SanDisk's CFast 2.0 card is the world's fastest memory card - Engadget (2013-09-14)",
    "u": "https://www.engadget.com/2013-09-14-sandisks-cfast-2-0-fastest-memory-card-ever.html"
   },
   {
    "t": "Canon Announces the EOS-1D X Mark II ... and CFast 2.0 - Fstoppers (2016-02-01)",
    "u": "https://fstoppers.com/gear/canon-announces-eos-1d-x-mark-ii-20mp-4k60p-video-iso-409600-and-cfast-20-112306"
   },
   {
    "t": "Blackmagic PYXIS 6K - Blackmagic Design",
    "u": "https://www.blackmagicdesign.com/products/blackmagicpyxis"
   }
  ]
 },
 "sdxc": {
  "stages": [
   [
    2006,
    "idea",
    "SDHC（SD 2.0）用 FAT32，容量封顶 32GB；高清摄像机长时间录制很快撞上这个上限。",
    "SDHC (SD 2.0) used FAT32 and stopped at 32 GB, a limit that long HD camcorder recordings soon hit.",
    [
     5
    ]
   ],
   [
    2009,
    "paper",
    "SD 协会在 CES 2009（1 月 7 日）发布 SDXC 规范（SD 3.0）：容量上限 2TB，改用 Microsoft exFAT，总线速度年内达 104 MB/s，远期目标 300 MB/s。",
    "The SD Association announced the SDXC spec (SD 3.0) at CES 2009 (January 7): up to 2 TB, Microsoft exFAT, a 104 MB/s bus within the year and 300 MB/s as a later target.",
    [
     0
    ]
   ],
   [
    2009,
    "proto",
    "Toshiba 在 2009-08-04 宣布首张 SDXC 卡：64GB，读 60 / 写 35 MB/s，支持 UHS104 总线，11 月送样、2010 年春量产。",
    "Toshiba announced the first SDXC card on 2009-08-04: 64 GB, 60 MB/s read, 35 MB/s write, UHS104 bus, samples in November and mass production in spring 2010.",
    [
     1
    ]
   ],
   [
    2010,
    "mass",
    "Panasonic 在 CES 2010 发布 48GB / 64GB SDXC 卡（Class 10、22 MB/s，449.95 / 599.95 美元），2010 年 2 月出货，是首批卖给消费者的 SDXC 卡。",
    "Panasonic announced 48 GB and 64 GB SDXC cards at CES 2010 (Class 10, 22 MB/s, $449.95 / $599.95). They shipped in February 2010 as the first SDXC cards sold to consumers.",
    [
     2
    ]
   ],
   [
    2010,
    "corp",
    "Panasonic 同期发布 HDC-HS60 / TM55 / SD60 摄像机，以及首批 1080/60p 摄像机 HDC-TM700 / HS700，都支持 SDXC，64GB 卡可在 TM55 上录约 8.5 小时最高画质视频。",
    "At the same time Panasonic announced the HDC-HS60, TM55 and SD60 camcorders and the HDC-TM700 / HS700, the first 1080/60p camcorders, all supporting SDXC. A 64 GB card held about 8.5 hours of top-quality video on the TM55.",
    [
     3,
     4,
     2
    ]
   ],
   [
    2010,
    "ver",
    "SD 3.01 正式引入 UHS-I 总线，最高 104 MB/s。",
    "SD 3.01 formally introduced the UHS-I bus at up to 104 MB/s.",
    [
     5
    ]
   ],
   [
    2011,
    "ver",
    "2011 年 9 月 SanDisk 发布 Extreme Pro 64GB SDXC（读 95 / 写 90 MB/s）和 64GB microSDXC，SDXC 开始从摄像机扩展到单反和手机。",
    "In September 2011 SanDisk released the Extreme Pro 64 GB SDXC (95 MB/s read, 90 MB/s write) and a 64 GB microSDXC, and SDXC spread from camcorders to DSLRs and phones.",
    [
     6
    ]
   ],
   [
    2011,
    "ver",
    "SD 4.0 / 4.10 加入第二排触点的 UHS-II 总线，最高 312 MB/s（约 2011–2013 年），SDXC 卡由此分为 UHS-I 与 UHS-II 两档。",
    "SD 4.0 / 4.10 added the UHS-II bus on a second row of pins, up to 312 MB/s (approx. 2011–2013), splitting SDXC cards into UHS-I and UHS-II tiers.",
    [
     5
    ]
   ],
   [
    2016,
    "ver",
    "SD 5.0 定义 Video Speed Class（V6–V90），保证 4K/8K 录像的最低持续写入；同年 SanDisk 在 Photokina 展示 1TB SDXC 原型。",
    "SD 5.0 defined the Video Speed Class (V6–V90), guaranteeing minimum sustained writes for 4K/8K recording. The same year SanDisk showed a 1 TB SDXC prototype at Photokina.",
    [
     5,
     7
    ]
   ],
   [
    2018,
    "end",
    "SD 7.0（2018 年 6 月）推出 SDUC（上限 128TB，为 SDXC 的 64 倍）和 PCIe/NVMe 的 SD Express（985 MB/s），定义了 SDXC 之后的下一档。",
    "SD 7.0 (June 2018) introduced SDUC (up to 128 TB, 64 times SDXC) and the PCIe/NVMe SD Express interface (985 MB/s), defining the tier after SDXC.",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 10 月 SanDisk Extreme PRO 2TB SDXC UHS-I 开卖（读 250 / 写 150 MB/s，299 美元），容量终于到了 SDXC 规范 2TB 的上限。",
    "In October 2024 the SanDisk Extreme PRO 2 TB SDXC UHS-I went on sale (250 MB/s read, 150 MB/s write, $299), finally reaching the 2 TB limit of the SDXC spec.",
    [
     8
    ]
   ],
   [
    2026,
    "rival",
    "SanDisk 在 NAB 2024 展示的 4TB SDUC 卡到 2026 年 2 月仍未在零售渠道出现；SD 协会称 SDUC 主要先供工业和专业用途。",
    "The 4 TB SDUC card SanDisk showed at NAB 2024 had still not reached retail by February 2026. The SD Association says SDUC is shipping first to industrial and specialist users.",
    [
     9
    ]
   ]
  ],
  "now": [
   "2026 年 SDXC（含 microSDXC）是绝大多数相机、摄像机、无人机和手机扩展卡的主流格式：UHS-I / UHS-II、V30–V90，容量 64GB–2TB，例如 SanDisk Extreme PRO 2TB、各家 UHS-II V90 卡。",
   "In 2026 SDXC (including microSDXC) is the mainstream format for most cameras, camcorders, drones and phone expansion: UHS-I / UHS-II, V30–V90, 64 GB to 2 TB, for example the SanDisk Extreme PRO 2 TB and the various makers' UHS-II V90 cards."
  ],
  "replaced": [
   "容量上由 SDUC（>2TB，最高 128TB）接班，速度上由 SD Express（PCIe/NVMe）接班；高端视频机则早已转向 CFexpress。",
   "SDUC (over 2 TB, up to 128 TB) takes over on capacity and SD Express (PCIe/NVMe) on speed. High-end video cameras moved to CFexpress long ago."
  ],
  "refs": [
   {
    "t": "SDXC expands SD into Terabyte territory - DPReview (2009-01-07)",
    "u": "https://www.dpreview.com/articles/3126043346/sdxc"
   },
   {
    "t": "Toshiba to launch world's first SDXC memory card - Imaging Resource (2009-08-04)",
    "u": "https://www.imaging-resource.com/NEWS/1249674081.html"
   },
   {
    "t": "Panasonic shipping first SDXC cards next month - Engadget (2010-01-06)",
    "u": "https://www.engadget.com/2010-01-06-panasonic-shipping-first-sdxc-cards-next-month-for-ungodly-amoun.html"
   },
   {
    "t": "Panasonic 2010 HD camcorders HDC-HS60/TM55/SD60 - Imaging Resource (2010)",
    "u": "https://www.imaging-resource.com/NEWS/1263420667.html"
   },
   {
    "t": "Panasonic announces world's first 1080/60p camcorders - TechCrunch (2010-02-10)",
    "u": "https://techcrunch.com/2010/02/10/panasonic-announces-world’s-first-108060p-camcorders"
   },
   {
    "t": "SD card - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   },
   {
    "t": "SanDisk outs Extreme Pro SDXC, Mobile Ultra microSDXC - Engadget (2011-09-14)",
    "u": "https://www.engadget.com/2011-09-14-sandisk-outs-extreme-pro-64gb-sdxc-mobile-ultra-microsdxc-new.html"
   },
   {
    "t": "SDUC Express Memory Cards to Allow 128TB Storage and 985MB/s Speed - PetaPixel (2018-06-27)",
    "u": "https://petapixel.com/2018/06/27/sduc-express-memory-cards-to-allow-128tb-storage-and-985mb-s-speed/"
   },
   {
    "t": "SanDisk quietly puts 2TB SD card on sale - TechRadar (2024-10-25)",
    "u": "https://www.techradar.com/pro/sandisk-quietly-puts-2tb-sd-card-on-sale-extreme-pro-is-as-fast-as-a-hard-drive-has-a-lifetime-warranty-and-is-actually-cheaper-than-id-expect"
   },
   {
    "t": "SDUC cards in multi-terabyte capacities are already shipping, but where are SanDisk's 4TB/8TB cards? - TechRadar (2026-02-11)",
    "u": "https://www.techradar.com/pro/sduc-cards-in-multi-terabyte-capacities-are-already-shipping-but-where-are-these-removable-memory-cards-with-4tb-or-8tb-capacities-that-sandisk-launched-almost-two-years-ago"
   }
  ]
 },
 "xqd": {
  "stages": [
   [
    2010,
    "idea",
    "2010 年 11 月 30 日 SanDisk、Sony、Nikon 联合向 CompactFlash Association 提议新一代存储卡格式：用 PCI Express 串行接口取代 CF 的 PATA，理论 500 MB/s、容量上限超 2 TB。",
    "On 30 Nov 2010 SanDisk, Sony and Nikon jointly proposed a next-generation card format to the CompactFlash Association: a PCI Express serial interface replacing CF's PATA, 500 MB/s theoretical and over 2 TB capacity.",
    [
     1,
     0
    ]
   ],
   [
    2011,
    "paper",
    "CFA 于 2011 年 12 月发布 XQD 1.0 规范，命名为 XQD，速率 1–5 Gbit/s，卡体 38.5×29.6×3.8 mm。",
    "The CFA released the XQD 1.0 specification in December 2011, rated 1–5 Gbit/s, in a 38.5×29.6×3.8 mm card body.",
    [
     0,
     4
    ]
   ],
   [
    2012,
    "mass",
    "2012 年 1 月 6 日 Sony 发布全球首批 XQD 卡 QD-H16 / QD-H32（16/32 GB，读写 125 MB/s，售价 129.99 / 229.99 美元），2 月上市。",
    "On 6 Jan 2012 Sony announced the first XQD cards, QD-H16 / QD-H32 (16/32 GB, 125 MB/s read/write, $129.99 / $229.99), shipping in February.",
    [
     2,
     0
    ]
   ],
   [
    2012,
    "corp",
    "同日 Nikon D4 发布，成为首台 XQD 相机：CF（UDMA 7）+ XQD 双卡槽，用 XQD 可 10 fps 连拍约 100 张 RAW。",
    "The Nikon D4, announced the same day, became the first XQD camera: dual CF (UDMA 7) + XQD slots, about 100 RAW frames at 10 fps with XQD.",
    [
     3,
     0
    ]
   ],
   [
    2012,
    "ver",
    "2012 年 7 月 CFA 宣布 XQD 2.0：支持 PCIe 3.0，最高 8 Gbps（1 GB/s），加入 VPG 视频性能保证，兼容 1.0 接口。",
    "In July 2012 the CFA announced XQD 2.0: PCIe 3.0 support up to 8 Gbps (1 GB/s), a Video Performance Guarantee, and backward-compatible connectors.",
    [
     4,
     0
    ]
   ],
   [
    2013,
    "corp",
    "2013 年 9 月 Sony PXW-Z100 4K 手持摄像机发布（6,500 美元），双 XQD 卡槽录 XAVC 4K 4:2:2 10-bit，最高 600 Mbps；Sony XDCAM 系列也开始用 XQD。",
    "Sony's PXW-Z100 4K handheld camcorder ($6,500, Sept 2013) recorded XAVC 4K 4:2:2 10-bit at up to 600 Mbps to dual XQD slots; Sony XDCAM gear also adopted XQD.",
    [
     5,
     0
    ]
   ],
   [
    2016,
    "rival",
    "2016 年 9 月 CFA 宣布 CFexpress 作为 XQD 继任者：同尺寸（Type B），协议换成 NVMe；2017 年 4 月 CFexpress 1.0 发布，PCIe 3.0 x2 约 2 GB/s。",
    "In Sept 2016 the CFA announced CFexpress as XQD's successor: same Type B size but NVMe protocol; CFexpress 1.0 (April 2017) used PCIe 3.0 x2 for about 2 GB/s.",
    [
     6,
     0
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 8 月 Nikon Z 7 / Z 6 发布，只有一个 XQD 卡槽并承诺后续固件支持 CFexpress；Nikon 同时推出自家 XQD 卡（读 440 MB/s、写 400 MB/s）。",
    "In Aug 2018 the Nikon Z 7 / Z 6 launched with a single XQD slot, promised future CFexpress support via firmware; Nikon also introduced its own XQD cards (440 MB/s read, 400 MB/s write).",
    [
     7
    ]
   ],
   [
    2018,
    "end",
    "2018 年 10 月 Lexar 宣布停止生产 XQD，称格式受包括 Sony（持有 XQD 知识产权和授权）在内的多方阻碍，转投 CFexpress；ProGrade 等也放弃 XQD。",
    "In Oct 2018 Lexar stopped making XQD cards, blaming multiple parties including Sony (the IP and licensing holder), and moved to CFexpress; ProGrade also skipped XQD.",
    [
     8,
     0
    ]
   ],
   [
    2019,
    "end",
    "2019 年 12 月 16 日 Nikon Z 7 / Z 6 固件 2.20 让 XQD 卡槽兼容 CFexpress Type B（初期仅 Sony 卡），XQD 机身陆续转为 CFexpress 机身。",
    "Nikon firmware 2.20 (16 Dec 2019) let the Z 7 / Z 6 XQD slot accept CFexpress Type B (initially Sony cards only), turning XQD bodies into CFexpress bodies.",
    [
     9,
     6
    ]
   ],
   [
    2023,
    "end",
    "2023 年 8 月 CFexpress 4.0 引入 PCIe 4.0，Type C 最高 8 GB/s；XQD 停留在 PCIe 2.0/3.0 时代的约 440 MB/s 实际速度，彻底退居遗留格式。",
    "CFexpress 4.0 (Aug 2023) moved to PCIe 4.0, up to 8 GB/s for Type C, while XQD stayed at about 440 MB/s real-world speed and became a legacy format.",
    [
     6
    ]
   ]
  ],
  "now": [
   "XQD 已是遗留格式：Nikon D4/D4S/D5/D500/D850 和早期 Z 6/Z 7 等机身仍在使用，Sony XQD G 系列（约 440 MB/s）存量供应（约）；新机全部转向 CFexpress Type B/A。",
   "XQD is a legacy format: Nikon D4/D4S/D5/D500/D850 and early Z 6/Z 7 bodies still use it and Sony XQD G-series cards (about 440 MB/s) remain in limited supply (approx.); all new cameras use CFexpress Type B/A instead."
  ],
  "replaced": [
   "被同尺寸的 CFexpress Type B 取代：协议从 XQD 的 PCIe/AHCI 类方案换成 NVMe，速度从约 440 MB/s 升到 CFexpress 2.0 的约 1.7 GB/s、4.0 的约 3.5 GB/s（约），多数 XQD 机身可通过固件直接用 CFexpress 卡。",
   "Replaced by the same-size CFexpress Type B, which switched to NVMe and raised speed from about 440 MB/s to about 1.7 GB/s (CFexpress 2.0) and about 3.5 GB/s (4.0) (approx.); most XQD bodies accept CFexpress via firmware."
  ],
  "refs": [
   {
    "t": "XQD card — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/XQD_card"
   },
   {
    "t": "SanDisk, Sony and Nikon proposed Industry Standards for Next-Generation High-Speed Memory Card Format (Nikon, 2010)",
    "u": "https://www.nikon.com/news/2010/1130_MC-Format_01.htm"
   },
   {
    "t": "Sony flashes new XQD memory cards (Engadget, 2012)",
    "u": "https://www.engadget.com/2012-01-06-sony-xqd-memory-card-official.html"
   },
   {
    "t": "Digital SLR camera Nikon D4 (Nikon, 2012)",
    "u": "https://www.nikon.com/news/2012/0106_flagship_01.htm"
   },
   {
    "t": "CompactFlash Association develops XQD 2.0 spec (Engadget, 2012)",
    "u": "https://www.engadget.com/2012/07/25/compactflash-association-develops-xqd-2-0/"
   },
   {
    "t": "Sony offers pro 4K camcorder PXW-Z100 (Engadget, 2013)",
    "u": "https://www.engadget.com/2013-09-06-sony-announces-6-500-pxw-z100-4k-camcorder.html"
   },
   {
    "t": "CFexpress — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/CFexpress"
   },
   {
    "t": "Nikon Unveils Its Own XQD Memory Cards (PetaPixel, 2018)",
    "u": "https://petapixel.com/2018/08/23/nikon-unveils-its-own-xqd-memory-cards/"
   },
   {
    "t": "Lexar Quits XQD Cards, Accuses Sony of Preventing Progress (PetaPixel, 2018)",
    "u": "https://petapixel.com/2018/10/25/lexar-quits-xqd-cards-accuses-sony-of-preventing-progress/"
   },
   {
    "t": "Nikon Z Series Evolves With Firmware Update (Nikon USA, 2019)",
    "u": "https://www.nikonusa.com/press-room/nikon-z-series-evolves-firmware-update"
   }
  ]
 },
 "nand3d": {
  "stages": [
   [
    2007,
    "idea",
    "Toshiba 在 2007 年首次公布 3D NAND 构想 BiCS（Bit Cost Scalable）：不再缩小单元，而是把存储单元沿垂直方向堆叠，基于 2002 年由 AMD / Fujitsu 商用的 charge trap flash。",
    "In 2007 Toshiba first announced its 3D NAND concept BiCS (Bit Cost Scalable): stack cells vertically instead of shrinking them, building on charge trap flash commercialized by AMD / Fujitsu in 2002.",
    [
     0
    ]
   ],
   [
    2007,
    "paper",
    "H. Tanaka 等（Toshiba）在 2007 VLSI Technology 研讨会发表 BiCS 论文：用 punch-and-plug 工艺一次打穿整叠电极再填充，关键光刻步数与层数无关，用 SONOS 型单元。",
    "H. Tanaka et al. (Toshiba) presented BiCS at the 2007 Symposium on VLSI Technology: a punch-and-plug process drills through the whole electrode stack, keeping critical lithography steps constant regardless of layer count, with SONOS-type cells.",
    [
     1
    ]
   ],
   [
    2009,
    "paper",
    "Samsung 存储研发中心 Jang 等在 2009 VLSI 研讨会提出 TCAT（Terabit Cell Array Transistor）垂直 NAND：gate replacement 工艺做出金属栅 SONOS 单元，可常规体擦除，成为 V-NAND 的基础结构。",
    "Jang et al. of Samsung's Memory R&D Center presented TCAT (Terabit Cell Array Transistor) vertical NAND at VLSI 2009: a gate-replacement process giving metal-gate SONOS cells with conventional bulk erase, the basis of V-NAND.",
    [
     2
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 8 月 Samsung 宣布全球首家量产 3D V-NAND：最多 24 层、单颗 128 Gb，3D Charge Trap Flash；称研发近 10 年、300 多项专利，写入速度为 10nm 级平面 NAND 两倍、可靠性高 2–10 倍。",
    "In Aug 2013 Samsung began the first mass production of 3D V-NAND: up to 24 layers, 128 Gb per chip, 3D Charge Trap Flash, after nearly 10 years of R&D and 300+ patents; claimed 2× write speed and 2–10× reliability vs 10nm-class planar NAND.",
    [
     3,
     0
    ]
   ],
   [
    2013,
    "corp",
    "同月 Flash Memory Summit 上 Samsung 发布首款 V-NAND SSD，面向企业服务器和数据中心，480 GB / 960 GB，SATA 6 Gb/s。",
    "The same month at Flash Memory Summit Samsung unveiled the first V-NAND SSD, for enterprise servers and data centers, 480 GB / 960 GB on SATA 6 Gb/s.",
    [
     4
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 7 月 1 日 Samsung 850 PRO 把 32 层 V-NAND 带进消费级 SSD：128 GB–1 TB，SATA III，顺序读 550 MB/s、写 520 MB/s，在 53 个市场上市。",
    "On 1 July 2014 the Samsung 850 PRO brought 32-layer V-NAND to consumer SSDs: 128 GB–1 TB, SATA III, 550 MB/s read and 520 MB/s write, sold in 53 markets.",
    [
     5
    ]
   ],
   [
    2015,
    "rival",
    "2015 年 3 月 Intel 与 Micron 发布 32 层 3D NAND，首次在 3D NAND 中用 floating gate 而非 charge trap，单 die 256 Gb MLC / 384 Gb TLC，2015 年 Q4 量产。",
    "In March 2015 Intel and Micron unveiled 32-layer 3D NAND, the first to use floating-gate cells instead of charge trap, with 256 Gb MLC / 384 Gb TLC dies, in production by Q4 2015.",
    [
     6
    ]
   ],
   [
    2016,
    "corp",
    "3D NAND 开始进入手机存储（约）：iPhone 7 拆解显示闪存由 SK hynix 与 Toshiba 双供应，同期各家把 48 层 3D TLC 用于 UFS / NVMe 手机存储（约）。",
    "3D NAND began entering phone storage (approx.): iPhone 7 teardowns found flash dual-sourced from SK hynix and Toshiba, as vendors moved 48-layer 3D TLC into UFS / NVMe phone storage (approx.).",
    [
     7
    ]
   ],
   [
    2018,
    "rival",
    "长江存储（YMTC）在 2018 Flash Memory Summit 发布 Xtacking：存储阵列和外围 CMOS 分别在两片晶圆上制造再键合；2019 年 9 月量产 64 层 TLC，后续 128 层、232 层改用 hybrid bonding。",
    "YMTC unveiled Xtacking at Flash Memory Summit 2018: the cell array and peripheral CMOS are built on separate wafers and bonded; it mass-produced 64-layer TLC in Sept 2019, later moving to hybrid bonding for 128 and 232 layers.",
    [
     11
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 7 月 Micron 出货全球首款 232 层 NAND，I/O 2.4 GB/s，比 176 层快 50%；同年 8 月 YMTC 也发布 232 层 X3-9070。",
    "In July 2022 Micron shipped the first 232-layer NAND with 2.4 GB/s I/O, 50% faster than its 176-layer part; YMTC unveiled its 232-layer X3-9070 in Aug 2022.",
    [
     12,
     11
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 11 月 SK hynix 量产 321 层 1 Tb TLC，用 three-plugs 工艺把三段约 100 层叠在一起，传输快 12%、读取快 13%，2025 年上半年供货。",
    "In Nov 2024 SK hynix began mass-producing 321-layer 1 Tb TLC, stacking three ~100-layer decks with its three-plugs process, 12% faster transfer and 13% faster reads, shipping in 1H 2025.",
    [
     8
    ]
   ],
   [
    2026,
    "ver",
    "2026 年 7 月 Kioxia 送样第 10 代 BiCS FLASH：332 层 1 Tb TLC，接口 4.8 Gb/s，位密度提升 59%；Samsung V10 BV-NAND 超过 400 条 word line，用晶圆键合，I/O 超过 4.8 Gbps。",
    "In July 2026 Kioxia sampled 10th-gen BiCS FLASH: 332 layers, 1 Tb TLC, 4.8 Gb/s interface, 59% higher bit density; Samsung's V10 BV-NAND exceeds 400 word lines using wafer bonding with over 4.8 Gbps I/O.",
    [
     9,
     10
    ]
   ]
  ],
  "now": [
   "3D NAND 已是所有闪存的默认形态：主流 200–330 层 TLC/QLC，晶圆键合（CMOS bonded array）普及；例子有 Crucial T705（Micron 232 层）、SK hynix 321 层、Kioxia BiCS10 332 层、Samsung V10 400+ 层，手机 UFS、相机存储卡和数据中心 SSD 全部基于 3D NAND。",
   "3D NAND is the default form of all flash: mainstream parts are 200–330-layer TLC/QLC with wafer bonding (CMOS bonded array) widespread; examples include Crucial T705 (Micron 232-layer), SK hynix 321-layer, Kioxia BiCS10 332-layer and Samsung V10 400+ layers, used in phone UFS, camera cards and data-center SSDs."
  ],
  "replaced": [
   "它取代了平面（2D）NAND，本身尚未被取代；存储级内存（如 3D XPoint / Optane）曾试图补位但已停产。下一步是继续堆层（目标 500–1000 层）、多 deck 堆叠、晶圆键合和 PLC（5 bit/cell）。",
   "It replaced planar (2D) NAND and has not itself been replaced; storage-class memory such as 3D XPoint / Optane tried to fill a gap but was discontinued. Next steps are more layers (targets of 500–1000), multi-deck stacking, wafer bonding and PLC (5 bits/cell)."
  ],
  "refs": [
   {
    "t": "Flash memory — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Flash_memory"
   },
   {
    "t": "Bit Cost Scalable Technology with Punch and Plug Process for Ultra High Density Flash Memory (VLSI 2007, Session 2-2)",
    "u": "https://archive.vlsisymposium.org/07web/technology/tec_abstract/2-2.htm"
   },
   {
    "t": "Vertical Cell Array using TCAT Technology for Ultra High Density NAND Flash Memory (VLSI 2009, Session 10A-4)",
    "u": "https://archive.vlsisymposium.org/09web/technology/tec_abstract/10A-4.htm"
   },
   {
    "t": "Samsung ships first 3D vertical NAND flash (Engadget, 2013)",
    "u": "https://www.engadget.com/2013-08-05-samsung-ships-first-3d-vertical-nand-flash.html"
   },
   {
    "t": "Samsung Intros First 3D V-NAND-based SSD, Up to 960GB (Tom's Hardware, 2013)",
    "u": "https://www.tomshardware.com/news/samsung-ssd-3d-v-nand-960gb,23877.html"
   },
   {
    "t": "Samsung introduces new branded SSD powered by 3D V-NAND (Phys.org, 2014)",
    "u": "https://phys.org/news/2014-07-samsung-branded-ssd-powered-3d.html"
   },
   {
    "t": "Micron and Intel Unveil New 3D NAND Flash Memory (Intel, 2015)",
    "u": "https://www.intc.com/news-events/press-releases/detail/349/micron-and-intel-unveil-new-3d-nand-flash-memory"
   },
   {
    "t": "iPhone 7 Teardown Reveals A10 Chip, Intel Modem (MacRumors, 2016)",
    "u": "https://www.macrumors.com/2016/09/16/iphone-7-chipworks-teardown"
   },
   {
    "t": "SK hynix begins mass production of 321-layer 3D NAND (Blocks & Files, 2024)",
    "u": "https://www.blocksandfiles.com/ai-ml/2024/11/21/sk-hynix-begins-mass-production-of-321-layer-3d-nand/1605947"
   },
   {
    "t": "Kioxia 10th-generation BiCS FLASH sample shipment (Kioxia, 2026)",
    "u": "https://www.kioxia.com/en-jp/about/news/2026/20260703-1.html"
   },
   {
    "t": "FMS 2026 3D NAND Innovation Award: V10 BV-NAND (Samsung Semiconductor)",
    "u": "https://semiconductor.samsung.com/news-events/tech-blog/fms-2026-3d-nand-innovation-award-v10-bv-nand-pushing-the-boundaries-of-ai-storage-beyond-400-layers/"
   },
   {
    "t": "Yangtze Memory Technologies — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Yangtze_Memory_Technologies"
   },
   {
    "t": "Micron 232-layer NAND Now Shipping (StorageReview, 2022)",
    "u": "https://www.storagereview.com/news/micron-232-layer-nand-now-shipping"
   }
  ]
 },
 "nvme": {
  "stages": [
   [
    2007,
    "idea",
    "2007 年 Intel Developer Forum 上提出 NVMHCI（Non-Volatile Memory Host Controller Interface），由 Intel 牵头的工作组在 2008 年 4 月完成 NVMHCI 1.0，目标是为闪存设计一套不同于 AHCI 的主机接口。",
    "NVMHCI (Non-Volatile Memory Host Controller Interface) emerged at Intel Developer Forum 2007; an Intel-led working group finished NVMHCI 1.0 in April 2008, aiming for a flash-native host interface instead of AHCI.",
    [
     0
    ]
   ],
   [
    2009,
    "corp",
    "2009 年底 NVM Express Workgroup 开始技术工作，90 多家公司参与，Intel 的 Amber Huffman 任主席；2014 年 3 月改组为 NVM Express, Inc.。",
    "Technical work began in late 2009 in the NVM Express Workgroup of 90+ companies chaired by Intel's Amber Huffman; it incorporated as NVM Express, Inc. in March 2014.",
    [
     0
    ]
   ],
   [
    2011,
    "paper",
    "2011 年 3 月 1 日 NVMe 1.0 规范发布：最多 65,535 个 I/O 队列、每队列 65,536 条命令，而 AHCI 只有 1 个 32 命令队列，充分利用 SSD 并行度。",
    "NVMe 1.0 was released on 1 March 2011: up to 65,535 I/O queues of 65,536 commands each, versus AHCI's single 32-command queue, to exploit SSD parallelism.",
    [
     0
    ]
   ],
   [
    2012,
    "proto",
    "2012 年 8 月 IDT 推出首批 NVMe 控制器芯片 89HF16P04AG3 / 89HF32P08AG3；同年 10 月 NVMe 1.1 发布。",
    "In Aug 2012 IDT released the first NVMe controller chips, 89HF16P04AG3 / 89HF32P08AG3; NVMe 1.1 followed in Oct 2012.",
    [
     0
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 7 月 Samsung 发布 XS1715：业界首款 2.5 英寸 NVMe SSD（SFF-8639），400 GB–1.6 TB，顺序读 3,000 MB/s、随机读 740K IOPS，为当时企业级 SSD 的 6 倍。",
    "In July 2013 Samsung announced the XS1715, the first 2.5-inch NVMe SSD (SFF-8639), 400 GB–1.6 TB, 3,000 MB/s sequential and 740K IOPS random reads, six times its prior enterprise SSDs.",
    [
     1,
     0
    ]
   ],
   [
    2013,
    "rival",
    "竞争方案有 SATA Express（仍可走 AHCI）和 SCSI Express；AHCI 是为机械硬盘设计的，延迟和队列深度成为瓶颈，最终 NVMe 胜出，SATA Express 基本没有落地。",
    "Rivals included SATA Express (which could still run AHCI) and SCSI Express; AHCI was designed for spinning disks and its latency and queue depth became bottlenecks, so NVMe won and SATA Express barely shipped.",
    [
     0
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 4 月 Intel SSD 750 成为首款消费级 NVMe SSD：400 GB / 1.2 TB，PCIe 3.0 x4 扩展卡或 2.5 英寸，读约 2.4–2.7 GB/s，但启动需支持 NVMe 的 BIOS。",
    "In April 2015 the Intel SSD 750 became the first consumer NVMe SSD: 400 GB / 1.2 TB, PCIe 3.0 x4 add-in card or 2.5-inch, about 2.4–2.7 GB/s reads, but booting needed an NVMe-aware BIOS.",
    [
     2
    ]
   ],
   [
    2015,
    "corp",
    "2015 年 9 月 iPhone 6s 成为首款用 NVMe 存储的手机：Apple 把 MacBook 的 NVMe 控制器搬进手机，配 TLC NAND，测得读取约 1.6–2.0 GB/s（约）；Android 阵营则走 UFS。",
    "In Sept 2015 the iPhone 6s became the first phone with NVMe storage: Apple adapted its MacBook NVMe controller with TLC NAND, with measured reads around 1.6–2.0 GB/s (approx.); Android went with UFS instead.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 6 月 NVMe over Fabrics 1.0 发布，把 NVMe 扩展到 RDMA（RoCE、InfiniBand、iWARP）和 Fibre Channel 网络；同年 9 月 CFexpress 宣布用 NVMe 做相机存储卡协议。",
    "NVMe over Fabrics 1.0 (June 2016) extended NVMe over RDMA (RoCE, InfiniBand, iWARP) and Fibre Channel; in Sept 2016 CFexpress adopted NVMe as its camera-card protocol.",
    [
     4,
     6
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 6 月 SD 7.0 推出 SD Express：在 SD 卡上跑 PCIe 3.0 + NVMe，最高 985 MB/s，主机用标准 NVMe 驱动识别。",
    "SD 7.0 (June 2018) introduced SD Express: PCIe 3.0 + NVMe on an SD card, up to 985 MB/s, recognized by hosts with standard NVMe drivers.",
    [
     9
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 6 月 7 日 NVMe 2.0 重构为多文档规范库，加入 Zoned Namespaces（ZNS）、Key-Value 命令集，并支持机械硬盘；2024 年 8 月 NVMe 2.1 加入 Live Migration 等。",
    "NVMe 2.0 (7 June 2021) was refactored into a library of specs, adding Zoned Namespaces (ZNS), a Key-Value command set and HDD support; NVMe 2.1 (Aug 2024) added Live Migration and more.",
    [
     5,
     0
    ]
   ],
   [
    2024,
    "ver",
    "2024 年 2 月 Crucial T705 把消费级 NVMe 推到 PCIe 5.0 x4 极限：顺序读 14,500 MB/s、写 12,700 MB/s，Phison E26 主控 + Micron 232 层 TLC。",
    "In Feb 2024 the Crucial T705 pushed consumer NVMe to the PCIe 5.0 x4 limit: 14,500 MB/s read, 12,700 MB/s write, Phison E26 controller with Micron 232-layer TLC.",
    [
     7
    ]
   ],
   [
    2026,
    "ver",
    "2026 年 2 月 Micron 9650 成为首款量产 PCIe 6.0 NVMe SSD：顺序读 28 GB/s、随机读 5.5M IOPS，E1.S / E3.S，最高 30.72 TB，面向 AI 数据中心。",
    "In Feb 2026 the Micron 9650 became the first mass-produced PCIe 6.0 NVMe SSD: 28 GB/s sequential and 5.5M IOPS random reads, E1.S / E3.S, up to 30.72 TB, aimed at AI data centers.",
    [
     8
    ]
   ]
  ],
  "now": [
   "NVMe 是 2026 年 SSD 的主流协议：PC 用 PCIe 5.0 M.2（如 Crucial T705），数据中心开始用 PCIe 6.0（Micron 9650），NVMe 2.x 规范持续更新；相机端 CFexpress 4.0，游戏机端 microSD Express（Nintendo Switch 2）也都跑 NVMe。",
   "NVMe is the mainstream SSD protocol in 2026: PCs use PCIe 5.0 M.2 (e.g. Crucial T705), data centers are moving to PCIe 6.0 (Micron 9650), and NVMe 2.x keeps evolving; CFexpress 4.0 camera cards and microSD Express (Nintendo Switch 2) also run NVMe."
  ],
  "replaced": [
   "NVMe 取代了 AHCI/SATA 和 SAS 成为闪存接口，本身仍是现行标准；手机端 Android 用 UFS 与之并存。下一步是 PCIe 7.0、更多 NVMe over Fabrics 部署，以及与 CXL 内存语义存储的分工。",
   "NVMe replaced AHCI/SATA and SAS as the flash interface and is still current; Android phones use UFS alongside it. Next come PCIe 7.0, wider NVMe over Fabrics deployment, and a division of labor with CXL memory-semantic storage."
  ],
  "refs": [
   {
    "t": "NVM Express — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/NVM_Express"
   },
   {
    "t": "Samsung Announces Industry's First 2.5-inch NVMe SSD (StorageReview, 2013)",
    "u": "https://www.storagereview.com/news/samsung-announces-industrys-first-2-5-inch-nvme-ssd"
   },
   {
    "t": "Intel 750 Series SSD review (PCWorld, 2015)",
    "u": "https://www.pcworld.com/article/426697/intel-750-series-ssd-review-storage-so-fast-only-the-highest-end-pcs-can-keep-up.html"
   },
   {
    "t": "iPhone 6S's NVMe Controller and Speed Dictated by Device Capacity (The SSD Review, 2015)",
    "u": "https://www.thessdreview.com/daily-news/latest-buzz/iphone-6ss-nvme-controller-and-speed-dictated-by-device-capacity/"
   },
   {
    "t": "NVM Express over Fabrics Specification Released (Design & Reuse, 2016)",
    "u": "https://www.design-reuse.com/news/40004/nvm-express-over-fabrics-specification.html"
   },
   {
    "t": "NVM Express 2.0 Library of Specifications (Design & Reuse, 2021)",
    "u": "https://www.design-reuse.com/news/50101/nvm-express-2-0-library-of-specifications.html"
   },
   {
    "t": "CFexpress — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/CFexpress"
   },
   {
    "t": "Crucial T705 Review (StorageReview, 2024)",
    "u": "https://www.storagereview.com/review/crucial-t705-review"
   },
   {
    "t": "Micron 9650 NVMe SSD Enters Mass Production as First PCIe Gen6 Enterprise SSD (StorageReview, 2026)",
    "u": "https://www.storagereview.com/news/micron-9650-nvme-ssd-enters-mass-production-as-first-pcie-gen6-enterprise-ssd"
   },
   {
    "t": "SD cards add PCIe and NVMe, hit 985 MB/sec and 128TB (The Register, 2018)",
    "u": "https://www.theregister.com/2018/06/29/ssd_7_express_ultra_capacity_standards/"
   }
  ]
 },
 "survhdd": {
  "stages": [
   [
    2003,
    "idea",
    "2003 年 10 月 Seagate 推出面向 DVR 等消费电子的硬盘（DB35 系列），实现 ATA/7 Streaming（AV）命令集：优先保证连续视频流、可由厂商设定纠错时限以避免卡顿，并降低启动峰值电流。",
    "In Oct 2003 Seagate shipped consumer-electronics drives for DVRs (the DB35 line) implementing the ATA/7 Streaming (AV) command set: prioritizing continuous video streams, with vendor-set error-recovery limits to avoid stutter and lower startup current.",
    [
     12
    ]
   ],
   [
    2006,
    "mass",
    "2006 年 4 月 Seagate 发布 SV35 系列，自称业界首款专为视频安防设计的硬盘：单盘可连续录像约 23 天，针对监控 DVR 优化功耗与可靠性。",
    "In April 2006 Seagate released the SV35 series, billed as the industry's first hard drive purpose-built for video security: about 23 days of continuous recording per drive, with power and reliability tuned for surveillance DVRs.",
    [
     0
    ]
   ],
   [
    2006,
    "ver",
    "2006 年 9 月 SV35.2 改用垂直磁记录（PMR），新增 320 GB / 750 GB，启动电流约 2.0 A，10 月出货；Seagate 称是唯一专注安防市场的硬盘厂。",
    "In Sept 2006 the SV35.2 moved to perpendicular recording, adding 320 GB / 750 GB, with about 2.0 A startup current, shipping in October; Seagate called itself the only drive maker dedicated to security.",
    [
     1
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 Seagate 把 SV35 扩到 1 TB（约 32 天高清录像），并推出面向户外 / 车载等恶劣环境的 EE25 和面向多盘网络系统的 Barracuda ES 监控组合。",
    "In 2007 Seagate expanded SV35 to 1 TB (about 32 days of HD video) and added the rugged EE25 for outdoor / mobile surveillance and Barracuda ES for multi-drive networked systems.",
    [
     2
    ]
   ],
   [
    2009,
    "ver",
    "2009 年 4 月 SV35.5：250 GB–1 TB，持续 140 MB/s，ATA-7 流命令，可同时写 47 路 D1 视频，5 年质保。",
    "SV35.5 (April 2009): 250 GB–1 TB, 140 MB/s sustained, ATA-7 streaming commands, 47 simultaneous D1 streams, 5-year warranty.",
    [
     3
    ]
   ],
   [
    2014,
    "corp",
    "2014 年 2 月 25 日 WD 推出 WD Purple 监控盘：1–4 TB（89.99–199.99 美元），AllFrame 缓存策略减少丢帧，支持最多 8 盘位、32 路高清摄像头，3 年质保。",
    "On 25 Feb 2014 WD launched WD Purple surveillance drives: 1–4 TB ($89.99–199.99), AllFrame caching to reduce dropped frames, up to 8 bays and 32 HD cameras, 3-year warranty.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 Seagate 把监控盘更名为 SkyHawk（时值做监控盘 10 年）：1–10 TB，ImagePerfect 固件，年负载 180 TB（桌面盘 3 倍），支持 64 路高清，90% 写 / 10% 读负载优化。",
    "In 2016 Seagate rebranded its surveillance drives as SkyHawk, ten years into the category: 1–10 TB, ImagePerfect firmware, 180 TB/year workload (3× desktop), 64 HD cameras, tuned for 90% write / 10% read.",
    [
     5,
     11
    ]
   ],
   [
    2017,
    "ver",
    "2017 年 Seagate SkyHawk AI 推出（8 / 10 TB，349.99 / 449.99 美元），号称首款面向 AI 视频分析 NVR 的硬盘，ImagePerfect AI 固件在录像同时承担分析读负载，5 年质保。",
    "Seagate's SkyHawk AI (2017; 8 / 10 TB at $349.99 / $449.99) was billed as the first drive for AI-analytics NVRs, with ImagePerfect AI firmware handling analytics reads while recording, and a 5-year warranty.",
    [
     6
    ]
   ],
   [
    2018,
    "rival",
    "2018 年 4 月 Toshiba 推出 S300 监控盘：4–10 TB，支持 64 路高清，与 Seagate、WD 形成三家格局。",
    "In April 2018 Toshiba launched the S300 surveillance drive: 4–10 TB, 64 HD streams, making it a three-vendor market with Seagate and WD.",
    [
     7
    ]
   ],
   [
    2019,
    "rival",
    "2019 年 11 月 Micron i300 工业级 microSD（最高 1 TB，96 层 QLC）宣称可在摄像头端存三个月以上录像，让 VSaaS 部署不再需要本地 NVR / DVR。",
    "In Nov 2019 Micron's i300 industrial microSD (up to 1 TB, 96-layer QLC) promised over three months of on-camera video, letting VSaaS deployments drop local NVRs / DVRs.",
    [
     10
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 4 月 WD Purple Pro 26 TB：CMR + OptiNAND，年负载 550 TB，支持 64 路高清或 32 路 AI 流，AllFrame AI，MTBF 250 万小时，5 年质保。",
    "WD Purple Pro 26 TB (April 2025): CMR with OptiNAND, 550 TB/year workload, 64 HD cameras or 32 AI streams, AllFrame AI, 2.5M-hour MTBF, 5-year warranty.",
    [
     8
    ]
   ],
   [
    2026,
    "ver",
    "2026 年 1 月 Seagate SkyHawk AI 32 TB 上市：CMR，面向带 GPU 分析的 AI NVR，负载为普通监控盘 3 倍。",
    "In Jan 2026 Seagate's SkyHawk AI 32 TB became available: CMR, for AI NVRs with GPU analytics, rated at 3× the workload of standard surveillance drives.",
    [
     9
    ]
   ]
  ],
  "now": [
   "监控级硬盘仍是 NVR / DVR 的主力：Seagate SkyHawk（最高 8 TB）/ SkyHawk AI（最高 32 TB）、WD Purple / Purple Pro（最高 26 TB）、Toshiba S300 系列；卖点从「不丢帧」转向「录像 + AI 分析并发」，年负载 180–550 TB。",
   "Surveillance HDDs remain the workhorse of NVRs / DVRs: Seagate SkyHawk (up to 8 TB) / SkyHawk AI (up to 32 TB), WD Purple / Purple Pro (up to 26 TB) and Toshiba S300; the pitch has shifted from 'no dropped frames' to concurrent recording plus AI analytics, at 180–550 TB/year workloads."
  ],
  "replaced": [
   "尚未被取代，但小型系统正被摄像头端的高耐久 microSD 边缘存储和云端 VSaaS 蚕食；大型系统继续用更大容量 CMR / HAMR 硬盘，SSD 只用于缓存和分析热数据。",
   "Not replaced yet, but small systems are being eroded by high-endurance on-camera microSD edge storage and cloud VSaaS; large systems keep moving to bigger CMR / HAMR drives, with SSDs used only for caching and hot analytics data."
  ],
  "refs": [
   {
    "t": "Seagate Releases Hard Drive Designed Specifically for Digital Video (SecurityInfoWatch, 2006)",
    "u": "https://www.securityinfowatch.com/video-surveillance/press-release/10557283/seagate-seagate-releases-hard-drive-designed-specifically-for-digital-video"
   },
   {
    "t": "Seagate unveils 750GB hard drive specifically for digital video security (Phys.org, 2006)",
    "u": "https://phys.org/news/2006-09-seagate-unveils-750gb-hard-specifically.html"
   },
   {
    "t": "Seagate Unveils a New Broad Portfolio of Specialized Hard Disk Drives for Digital Video Surveillance Systems (SecurityInfoWatch, 2007)",
    "u": "https://www.securityinfowatch.com/video-surveillance/press-release/10551431/seagate-unveils-a-new-broad-portfolio-of-specialized-hard-disk-drives-for-digitial-video-surveillance-systems"
   },
   {
    "t": "Seagate delivers Next-Generation Hard Drives for Digital Video Surveillance Systems (Seagate, 2009)",
    "u": "https://investors.seagate.com/news/news-details/2009/Seagate-delivers-Next-Generation-Hard-Drives-for-Digital-Video-Surveillance-Systems/default.aspx"
   },
   {
    "t": "Western Digital launches surveillance-oriented WD Purple series (PC Perspective, 2014)",
    "u": "https://web.archive.org/web/20191210053536/https://pcper.com/2014/02/western-digital-launches-surveillance-oriented-wd-purple-series-of-3-5-hdds/"
   },
   {
    "t": "Seagate SkyHawk Surveillance HDD 10TB Review (StorageReview, 2016)",
    "u": "https://www.storagereview.com/review/seagate-skyhawk-surveillance-hdd-10tb-review"
   },
   {
    "t": "Seagate SkyHawk AI 3.5-Inch HDD for AI-Enabled Surveillance (StorageNewsletter, 2017)",
    "u": "https://www.storagenewsletter.com/?p=183094"
   },
   {
    "t": "Toshiba Announces New Surveillance & Video HDDs (StorageReview, 2018)",
    "u": "https://www.storagereview.com/news/toshiba-announces-new-surveillance-video-hdds"
   },
   {
    "t": "WD Purple Pro 26TB (StorageReview, 2025)",
    "u": "https://www.storagereview.com/?p=144096"
   },
   {
    "t": "Capacity leadership for the AI era: 32TB across Exos, SkyHawk AI and IronWolf Pro (Seagate, 2026)",
    "u": "https://www.seagate.com/blog/capacity-leadership-for-the-ai-era-32tb-across-exos-skyhawk-ai-and-ironwolf-pro/"
   },
   {
    "t": "Micron microSD card stores 3+ months of video on the camera (FMLink, 2019)",
    "u": "https://www.fmlink.com/micron-microsd-card-security-video-camera/"
   },
   {
    "t": "SkyHawk Video Hard Drives (Seagate)",
    "u": "https://www.seagate.com/products/video-analytics/skyhawk-hard-drive/"
   },
   {
    "t": "Seagate ships first electronics hard drives using new standard (domain-b, 2003)",
    "u": "https://domain-b.com/companies/companies_s/seagate_technology/20031029_hard_drives.htm"
   }
  ]
 },
 "uhs2": {
  "stages": [
   [
    2010,
    "idea",
    "SD Association 在 2010 年 6 月发布 UHS-I（104 MB/s）后，9 月即公开计划：给 SD 卡加第二排触点，2011 年 Q1 完成规范、速度接近 300 MB/s。",
    "After announcing UHS-I (104 MB/s) in June 2010, the SD Association said in Sept 2010 it would add a second row of contacts to reach about 300 MB/s, with the spec due in Q1 2011.",
    [
     1,
     0
    ]
   ],
   [
    2011,
    "paper",
    "2011 年 1 月 5 日 CES 上 SDA 发布 SD 4.00 的 UHS-II：第二排触点走 LVDS 差分信号，全双工 FD156（156 MB/s）/ 半双工 HD312（312 MB/s），全尺寸卡共 17 个触点，向下兼容，仅限 SDHC/SDXC。",
    "At CES on 5 Jan 2011 the SDA announced UHS-II in SD 4.00: LVDS differential signaling on a second row of pins, FD156 full duplex (156 MB/s) / HD312 half duplex (312 MB/s), 17 contacts on full-size cards, backward compatible, SDHC/SDXC only.",
    [
     0,
     10,
     5
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 7 月 Toshiba 发布 EXCERIA PRO UHS-II SD 卡：读 260 MB/s、写 240 MB/s（当时全球最快写入），10 月在日本上市，是首批量产 UHS-II 卡。",
    "In July 2013 Toshiba announced EXCERIA PRO UHS-II SD cards: 260 MB/s read, 240 MB/s write (then the world's fastest write), on sale in Japan from October, among the first mass-produced UHS-II cards.",
    [
     2
    ]
   ],
   [
    2014,
    "corp",
    "2014 年 1 月 Fujifilm X-T1 发布，成为首台支持 UHS-II 卡的可换镜头无反相机。",
    "The Fujifilm X-T1, announced in Jan 2014, became the first interchangeable-lens mirrorless camera to support UHS-II cards.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 SD 5.0 引入 Video Speed Class（V6/V10/V30/V60/V90，保证最低持续写入 6–90 MB/s），V60/V90 面向 4K/8K 和 360° 视频，通常需要 UHS-II 才能达到（约）。",
    "SD 5.0 (2016) introduced Video Speed Class (V6/V10/V30/V60/V90, guaranteeing 6–90 MB/s minimum sustained write); V60/V90 target 4K/8K and 360° video and in practice need UHS-II (approx.).",
    [
     5
    ]
   ],
   [
    2017,
    "ver",
    "2017 年 Panasonic GH5 的 4K 400 Mbps All-Intra 模式要求至少 V60 卡，推荐 UHS-II V90 卡，使 UHS-II V90 成为视频机的标配。",
    "The Panasonic GH5's 4K 400 Mbps All-Intra mode (2017) required at least a V60 card with UHS-II V90 recommended, making UHS-II V90 the standard for video cameras.",
    [
     6
    ]
   ],
   [
    2017,
    "rival",
    "2017 年 2 月 SD 6.0 定义 UHS-III（312–624 MB/s），同样基于第二排触点，但几乎没有卡和相机采用（约）。",
    "SD 6.0 (Feb 2017) defined UHS-III (312–624 MB/s) on the same second row of pins, but almost no cards or cameras adopted it (approx.).",
    [
     4
    ]
   ],
   [
    2018,
    "rival",
    "2018 年 6 月 SD 7.0 推出 SD Express（PCIe 3.0 x1 + NVMe，985 MB/s）和最高 128 TB 的 SDUC；2020 年 SD 8.0 用 PCIe 4.0 把上限提到 3,940 MB/s。",
    "SD 7.0 (June 2018) introduced SD Express (PCIe 3.0 x1 + NVMe, 985 MB/s) and SDUC up to 128 TB; SD 8.0 (2020) raised it to 3,940 MB/s with PCIe 4.0.",
    [
     7,
     4
    ]
   ],
   [
    2020,
    "rival",
    "高端机转向 CFexpress：CFexpress 2.0 增加 Type A（1 lane）和 Type C；Canon EOS R5 等采用 CFexpress + UHS-II 双槽，8K RAW 只能录到 CFexpress。",
    "High-end cameras moved to CFexpress: CFexpress 2.0 added Type A (1 lane) and Type C; bodies like the Canon EOS R5 paired CFexpress with a UHS-II slot, with 8K RAW limited to CFexpress.",
    [
     8
    ]
   ],
   [
    2025,
    "ver",
    "截至 2025 年约有 100 款相机（多为中高端）支持 UHS-II；同年 Nintendo Switch 2 只认 microSD Express，SD 的 PCIe 路线首次在大众设备上普及。",
    "As of 2025 about 100 cameras, mostly high-end, support UHS-II; that year the Nintendo Switch 2 accepted only microSD Express, the first mass-market push for SD's PCIe path.",
    [
     5,
     9
    ]
   ]
  ],
  "now": [
   "UHS-II V60/V90 仍是中高端相机 SD 卡槽的主流（实际速度约 250–300 MB/s），常与 CFexpress Type A/B 组成双槽；代表卡有 Sony SF-G Tough、SanDisk Extreme PRO UHS-II 等（约）。",
   "UHS-II V60/V90 is still the mainstream SD slot in mid- to high-end cameras (about 250–300 MB/s real-world), often paired with a CFexpress Type A/B slot; typical cards include Sony SF-G Tough and SanDisk Extreme PRO UHS-II (approx.)."
  ],
  "replaced": [
   "在高端相机上正被 CFexpress Type A/B（NVMe over PCIe）取代；SD 自己的继任者是 SD Express / microSD Express（PCIe + NVMe，985–3,940 MB/s），已进入 Switch 2，但相机端尚未普及。UHS-III 则基本没有落地。",
   "In high-end cameras it is being replaced by CFexpress Type A/B (NVMe over PCIe); SD's own successor is SD Express / microSD Express (PCIe + NVMe, 985–3,940 MB/s), now in the Switch 2 but not yet common in cameras. UHS-III essentially never shipped."
  ],
  "refs": [
   {
    "t": "SD Association Triples Speeds with UHS-II and Introduces New eBook Specification (SD Association, 2011)",
    "u": "https://www.sdcard.org/cms/wp-content/uploads/2020/11/SD_Association_Announces_UHS-II_eBOOK_Jan_5_2011_ENGLISH.pdf"
   },
   {
    "t": "SD Card Association: flash card speeds to triple by 2012 (Engadget, 2010)",
    "u": "https://www.engadget.com/2010/09/03/sd-card-association-flash-card-speeds-to-triple-by-2012/"
   },
   {
    "t": "Toshiba unveils EXCERIA PRO and EXCERIA UHS-II SD memory cards (Kioxia/Toshiba, 2013)",
    "u": "https://www.kioxia.com/en-jp/about/news/2013/20130716-1.html"
   },
   {
    "t": "Fuji X-T1: a speed demon with weather sealing (Imaging Resource, 2014)",
    "u": "https://www.imaging-resource.com/news/2014/01/28/slr-like-fuji-x-t1-boasts-weather-sealing-awesome-viewfinder-super-fast-sto"
   },
   {
    "t": "Bus Speed (Default Speed/High Speed/UHS/SD Express) (SD Association)",
    "u": "https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/"
   },
   {
    "t": "SD card — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   },
   {
    "t": "GH5 All-I 400Mbps: which SD cards (Newsshooter, 2017)",
    "u": "https://www.newsshooter.com/2017/05/22/gh5-all-i-400mbps/"
   },
   {
    "t": "SD cards add PCIe and NVMe, hit 985 MB/sec and 128TB (The Register, 2018)",
    "u": "https://www.theregister.com/2018/06/29/ssd_7_express_ultra_capacity_standards/"
   },
   {
    "t": "CFexpress — Wikipedia",
    "u": "https://en.wikipedia.org/wiki/CFexpress"
   },
   {
    "t": "microSD Express Card FAQ (Nintendo)",
    "u": "https://www.nintendo.com/au/support/articles/microsd-express-card-faq/"
   },
   {
    "t": "SD Association triples SDHC and SDXC speeds with UHS-II standard (Engadget, 2011)",
    "u": "https://www.engadget.com/2011-01-05-sd-association-triples-sdhc-and-sdxc-speeds-with-uhs-ii-standard.html"
   }
  ]
 },
 "endur": {
  "stages": [
   [
    1991,
    "idea",
    "SanDisk 工程师 Lofgren、Norman、Thelin、Gupta 提出 flash EEPROM 的 wear leveling 专利（优先权日 1991-09-13，US6081447A）：在块头记录擦写次数，超阈值后把逻辑地址换到少用的物理 bank，均摊磨损。",
    "SanDisk engineers Lofgren, Norman, Thelin and Gupta filed the wear-leveling patent for flash EEPROM (priority 1991-09-13, US6081447A): erase-cycle counts in block headers let the controller remap heavily used logical areas onto lightly used physical banks.",
    [
     0
    ]
   ],
   [
    2015,
    "mass",
    "2015 年 3 月 SanDisk 推出 High Endurance Video Monitoring microSDHC/microSDXC，称是首款专为行车记录仪与家用监控设计的存储卡：32GB 可循环写 5,000 小时、64GB 10,000 小时 Full HD 录像。",
    "In March 2015 SanDisk launched High Endurance Video Monitoring microSDHC/microSDXC, billed as the first cards designed for dash cams and home monitoring: 5,000 hours (32GB) and 10,000 hours (64GB) of Full HD rewrite recording.",
    [
     2
    ]
   ],
   [
    2016,
    "corp",
    "2016 年 2 月 Transcend 发布 High Endurance microSD，用 MLC NAND，标称可录 24,000 小时 Full HD，Class 10、最高 21MB/s。",
    "In February 2016 Transcend released High Endurance microSD cards built on MLC NAND, rated for 24,000 hours of Full HD recording, Class 10, up to 21MB/s.",
    [
     1
    ]
   ],
   [
    2016,
    "ver",
    "SD 5.0 规格引入 Video Speed Class（V6/V10/V30/V60/V90，最低持续写入 6–90MB/s），让监控与记录仪可以按持续写入而非峰值速度选卡。（约）",
    "The SD 5.0 spec introduced Video Speed Class (V6/V10/V30/V60/V90, minimum sustained write 6–90MB/s), letting monitoring devices choose cards by sustained rather than peak speed. (approx.)",
    [
     9
    ]
   ],
   [
    2018,
    "corp",
    "2018 年 5 月 Samsung 推出 PRO Endurance microSD，128GB 可连续录 43,800 小时（5 年），称耐久是普通卡的 25 倍，防水、耐温、防磁、防 X 光。",
    "In May 2018 Samsung introduced PRO Endurance microSD: 43,800 hours (5 years) of continuous recording on 128GB, claimed 25x the endurance of speed-focused cards, water/temperature/magnet/X-ray proof.",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 Western Digital 推出 WD Purple SC QD312 Extreme Endurance microSD，首次给监控卡加入 card health monitoring（可读剩余寿命）；同年 QD101 用 96 层 3D NAND，容量到 512GB。",
    "In 2019 Western Digital launched WD Purple SC QD312 Extreme Endurance microSD with card health monitoring to report remaining life; the later QD101 used 96-layer 3D NAND up to 512GB.",
    [
     5,
     10
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 3 月 SanDisk MAX Endurance microSD：256GB 标称 120,000 小时（约 13 年）连续录像，读 100MB/s、写 40MB/s，15 年有限保修。",
    "In March 2020 SanDisk MAX Endurance microSD: 120,000 hours (~13 years) of continuous recording on 256GB, 100MB/s read, 40MB/s write, 15-year limited warranty.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 Samsung 新一代 PRO Endurance 容量提升到 256GB，标称 140,160 小时（16 年）连续录像，相当于 33 张普通卡的寿命。",
    "In 2022 Samsung's new PRO Endurance reached 256GB with 140,160 hours (16 years) of continuous recording, equal to about 33 speed-focused cards.",
    [
     4
    ]
   ],
   [
    2026,
    "ver",
    "2026 年 10 月 Sandisk 推出 Guardian 系列（Dash Cam Card、Security Cam Card），32GB–512GB、支持 4K UHD 录像，512GB Dash Cam Card 实测可录 40,000 小时，32GB 起售 $28.99。",
    "In October 2026 Sandisk launched the Guardian series (Dash Cam Card and Security Cam Card), 32GB–512GB, 4K UHD recording; the 512GB Dash Cam Card is tested to 40,000 hours, from $28.99.",
    [
     7,
     8
    ]
   ]
  ],
  "now": [
   "2026 年高耐久 microSD 是行车记录仪和家用摄像头的标配：Sandisk Guardian 系列、MAX Endurance，Samsung PRO Endurance（最高 256GB/16 年），WD Purple 面向专业监控并带 health monitoring；容量到 512GB，靠 3D TLC + 更强 wear leveling 与 pSLC 缓存。",
   "In 2026 high-endurance microSD is standard for dash cams and home cameras: Sandisk Guardian and MAX Endurance, Samsung PRO Endurance (up to 256GB/16 years), and WD Purple with health monitoring for pro surveillance; up to 512GB, using 3D TLC with stronger wear leveling and pSLC caching."
  ],
  "replaced": [
   "还没有被替代；部分高端记录仪和车载 ADAS 改用内置 eMMC/UFS（约），云存储也分走一部分监控录像，但可更换的高耐久卡仍是主流。",
   "Not replaced; some high-end dash cams and in-car ADAS recorders move to built-in eMMC/UFS (approx.) and cloud storage takes some surveillance footage, but replaceable high-endurance cards remain mainstream."
  ],
  "refs": [
   {
    "t": "US6081447A - Wear leveling techniques for flash EEPROM systems",
    "u": "https://patents.google.com/patent/US6081447A"
   },
   {
    "t": "Transcend High Endurance microSDHC/SDXC Memory Cards (StorageNewsletter, 2016)",
    "u": "https://storagenewsletter.com/2016/02/11/transcend-high-endurance-microsdhcsdxc-memory-cards"
   },
   {
    "t": "SanDisk Intros First Memory Cards Designed for Dashcams (TechPowerUp, 2015)",
    "u": "https://techpowerup.com/210291/sandisk-intros-first-memory-cards-designed-for-dashcams"
   },
   {
    "t": "Samsung Electronics Redefines High Endurance Memory Card Market with New PRO Endurance Card (2018)",
    "u": "https://news.samsung.com/uk/samsung-electronics-redefines-high-endurance-memory-card-market-with-new-pro-endurance-card"
   },
   {
    "t": "Samsung Unveils New PRO Endurance Memory Card Optimized for Surveillance and Dashboard Cameras (2022)",
    "u": "https://news.samsung.com/global/samsung-unveils-new-pro-endurance-memory-card-optimized-for-surveillance-and-dashboard-cameras"
   },
   {
    "t": "Western Digital Introduces Surveillance-Class Storage with Extreme Endurance (2019)",
    "u": "https://www.westerndigital.com/company/newsroom/press-releases/2019/2019-04-10-western-digital-introduces-surveillance-class-storage-with-extreme-endurance-for-ai-enabled-security-smart-video-and-advanced-edge-devices"
   },
   {
    "t": "SanDisk's microSD card offers 13 years of continuous usage (KitGuru, 2020)",
    "u": "https://www.kitguru.net/tech-news/featured-tech-news/christopher-nohall/sandisks-microsd-card-offers-13-years-of-continuous-usage/"
   },
   {
    "t": "Sandisk Introduces SANDISK Guardian Series (2026)",
    "u": "https://www.sandisk.com/company/newsroom/press-releases/2026/2026-10-13-sandisk-introduces-sandisk-guardian-series-high-endurance-storage-for-dash-cams-and-home-security-cameras"
   },
   {
    "t": "Sandisk Guardian series offers high-endurance storage for 24/7 camera recording (AndroidGuys)",
    "u": "https://androidguys.com/news/sandisk-guardian-series-offers-high-endurance-storage-to-24-7-camera-recording/"
   },
   {
    "t": "SD card - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   },
   {
    "t": "Western Digital Introduces Storage Optimized for Public Safety, AI and Smart City Deployments (2019)",
    "u": "https://www.westerndigital.com/company/newsroom/press-releases/2019/2019-10-29-western-digital-introduces-storage-optimized-for-public-safety-ai-and-smart-city-deployments"
   }
  ]
 },
 "ufs": {
  "stages": [
   [
    2007,
    "idea",
    "2007 年 9 月 Micron、Nokia、Samsung、Sony Ericsson、Spansion、STMicroelectronics、TI 联合支持 JEDEC 制定 Universal Flash Storage，目标统一嵌入式闪存与存储卡接口。",
    "In September 2007 Micron, Nokia, Samsung, Sony Ericsson, Spansion, STMicroelectronics and TI backed JEDEC's new Universal Flash Storage spec to unify embedded flash and memory card interfaces.",
    [
     1
    ]
   ],
   [
    2011,
    "paper",
    "2011 年 2 月 JEDEC 发布 UFS 1.0：物理层用 MIPI M-PHY、链路层用 UniPro、命令集借 SCSI，全双工串行，每 lane 300MB/s；2012 年 6 月 UFS 1.1。",
    "In February 2011 JEDEC published UFS 1.0: MIPI M-PHY physical layer, UniPro link layer and a SCSI-based command set, full-duplex serial at 300MB/s per lane; UFS 1.1 followed in June 2012.",
    [
     0
    ]
   ],
   [
    2013,
    "proto",
    "2013 年 2 月 Toshiba 出样业界首款 UFS 器件：64GB、符合 UFS 1.1，供主控芯片和 OS 厂商评估。",
    "In February 2013 Toshiba sampled the industry's first UFS device: 64GB, UFS 1.1 compliant, for host chipset and OS vendors to evaluate.",
    [
     2
    ]
   ],
   [
    2013,
    "ver",
    "2013 年 9 月 UFS 2.0 标准：M-PHY 3.0 HS-G3，每 lane 600MB/s、两 lane 共 1.2GB/s，加入安全与省电功能。",
    "September 2013 UFS 2.0: M-PHY 3.0 HS-G3, 600MB/s per lane, 1.2GB/s over two lanes, plus security and power-saving features.",
    [
     0
    ]
   ],
   [
    2015,
    "mass",
    "2015 年 2 月 Samsung 量产业界首款 128GB UFS 2.0 嵌入式存储（另有 32/64GB），随即用于 Galaxy S6/S6 edge，成为首款量产 UFS 手机，带 Command Queue。",
    "In February 2015 Samsung began mass-producing the first 128GB UFS 2.0 embedded storage (also 32/64GB), used in the Galaxy S6/S6 edge, the first shipping UFS phones, with command queuing.",
    [
     3,
     4
    ]
   ],
   [
    2015,
    "rival",
    "同年 iPhone 6s 绕开 eMMC 和 UFS，改用基于 PCIe 的 NVMe 存储（沿用 MacBook SSD 主控），成为 UFS 在手机上的主要对手路线。",
    "The same year the iPhone 6s skipped eMMC and UFS for PCIe-based NVMe storage derived from Apple's MacBook SSD controller, the main rival approach to UFS in phones.",
    [
     5
    ]
   ],
   [
    2017,
    "corp",
    "2017 年 9 月 Samsung 量产首款车规 eUFS（UFS 2.1，64/128GB），128GB 读取 850MB/s，约为 eMMC 5.0 的 3.4 倍，面向 infotainment、ADAS 和仪表。",
    "In September 2017 Samsung began producing the first automotive eUFS (UFS 2.1, 64/128GB) reading at 850MB/s, about 3.4x eMMC 5.0, for infotainment, ADAS and dashboards.",
    [
     6
    ]
   ],
   [
    2019,
    "ver",
    "UFS 3.0（2018 年 1 月）用 M-PHY 4.1 HS-G4，每 lane 1450MB/s；Samsung 2019 年 2 月量产 512GB eUFS 3.0（读 2,100MB/s），OnePlus 7 Pro 于 2019 年 5 月成为首款上市的 UFS 3.0 手机。",
    "UFS 3.0 (January 2018) used M-PHY 4.1 HS-G4 at 1450MB/s per lane; Samsung mass-produced 512GB eUFS 3.0 (2,100MB/s read) in February 2019, and the OnePlus 7 Pro became the first UFS 3.0 phone on sale in May 2019.",
    [
     0,
     7,
     8
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 1 月 UFS 3.1 速度不变，加入 WriteBooster（SLC 写缓存）、Deep Sleep、Host Performance Booster，改善持续写入与随机读。",
    "January 2020 UFS 3.1 kept 3.0 speeds but added WriteBooster (SLC write cache), Deep Sleep and Host Performance Booster for better sustained writes and random reads.",
    [
     0
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 8 月 UFS 4.0：M-PHY 5.0 HS-G5，每 lane 23.2Gbps；Samsung 产品读 4,200MB/s、写 2,800MB/s，功耗降 46%。vivo X90 Pro/Pro+（2022 年 11 月）首发，Galaxy S23（2023）跟进。",
    "August 2022 UFS 4.0: M-PHY 5.0 HS-G5 at 23.2Gbps per lane; Samsung's part read 4,200MB/s and wrote 2,800MB/s with 46% lower power. The vivo X90 Pro/Pro+ (November 2022) shipped first, with the Galaxy S23 (2023) following.",
    [
     0,
     9,
     10
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 1 月 UFS 4.1 速度同 4.0，加入 Zoned Storage 等功能，面向手机端侧 AI 大模型加载。",
    "January 2025 UFS 4.1 kept 4.0 speeds and added Zoned Storage among other features, aimed at loading on-device AI models.",
    [
     0
    ]
   ],
   [
    2026,
    "ver",
    "JEDEC UFS 5.0（M-PHY 6.0、UniPro 3.0，每 lane 5.4GB/s）发布（约 2025 年底至 2026 年初）；Samsung 2026 年 6 月发布 UFS 5.0，读 10.8GB/s、写 9.5GB/s，计划 2026 年第四季度量产，最高 1TB。",
    "JEDEC UFS 5.0 (M-PHY 6.0, UniPro 3.0, 5.4GB/s per lane) was published (approx. late 2025 to early 2026); Samsung unveiled UFS 5.0 in June 2026 with 10.8GB/s read and 9.5GB/s write, mass production planned for Q4 2026 up to 1TB.",
    [
     0,
     11
    ]
   ]
  ],
  "now": [
   "2026 年 UFS 4.0/4.1 是 Android 旗舰和中高端手机标配（如 Galaxy S25 系列、Xiaomi、vivo 旗舰），车规 UFS 3.1 用于座舱与 ADAS；UFS 5.0 将随 2027 年初旗舰（如 Snapdragon 8 Elite Gen 6 机型）登场。",
   "In 2026 UFS 4.0/4.1 is standard in Android flagships and upper mid-range phones (e.g. Galaxy S25, Xiaomi and vivo flagships), automotive UFS 3.1 serves cockpits and ADAS, and UFS 5.0 is due in early-2027 flagships such as Snapdragon 8 Elite Gen 6 devices."
  ],
  "replaced": [
   "UFS 取代了 eMMC，本身仍是 Android 手机主流；Apple 一直用自研 NVMe 路线，可插拔 UFS Card 没能普及。下一步是 UFS 5.0，车载中央计算平台则逐步转向 PCIe NVMe SSD。",
   "UFS replaced eMMC and remains the Android mainstream; Apple stays on its own NVMe path and removable UFS Card never caught on. Next comes UFS 5.0, while automotive central computers move toward PCIe NVMe SSDs."
  ],
  "refs": [
   {
    "t": "Universal Flash Storage - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Universal_Flash_Storage"
   },
   {
    "t": "Nokia, others back mobile memory standard (Computerworld, 2007)",
    "u": "https://www.computerworld.com/article/1469731/nokia-others-back-mobile-memory-standard.html"
   },
   {
    "t": "Toshiba Ships Samples of Industry's First Universal Flash Storage Devices (2013)",
    "u": "https://news.toshiba.com/press-releases/press-release-details/2013/Toshiba-Ships-Samples-of-Industrys-First-Universal-Flash-Storage-Devices/default.aspx"
   },
   {
    "t": "Samsung Electronics Introduces Industry's First 128-Gigabyte Universal Flash Storage for Smartphones (2015)",
    "u": "https://news.samsung.com/global/samsung-electronics-introduces-industrys-first-128-gigabyte-universal-flash-storage-for-smartphones"
   },
   {
    "t": "The Samsung Galaxy S6 and S6 edge Review: NAND Performance, The First UFS Phone (AnandTech)",
    "u": "https://www.anandtech.com/show/9146/the-samsung-galaxy-s6-and-s6-edge-review/7"
   },
   {
    "t": "The Apple iPhone 6s and iPhone 6s Plus Review (AnandTech)",
    "u": "https://www.anandtech.com/show/9686/the-apple-iphone-6s-and-iphone-6s-plus-review/7"
   },
   {
    "t": "Samsung Starts Producing Industry's First Universal Flash Storage for Next-Generation Automotive Applications (2017)",
    "u": "https://news.samsung.com/uk/samsung-starts-producing-industrys-first-universal-flash-storage-for-next-generation-automotive-applications"
   },
   {
    "t": "Samsung Begins Mass Production of First 512GB eUFS 3.0 (2019)",
    "u": "https://news.samsung.com/global/samsung-electronics-doubling-current-smartphone-storage-speed-as-it-begins-mass-production-of-first-512gb-eufs-3-0"
   },
   {
    "t": "OnePlus 7 Pro confirmed with UFS 3.0 storage (9to5Google, 2019)",
    "u": "https://9to5google.com/2019/05/06/oneplus-7-pro-ufs-30-storage/"
   },
   {
    "t": "Samsung UFS 4.0 storage: 4,200 MB/s read speeds, 1TB capacity (CNX Software, 2022)",
    "u": "https://www.cnx-software.com/2022/05/04/samsung-ufs-4-0-storage-4200-mb-s-read-speeds-1tb-capacity/"
   },
   {
    "t": "vivo X90 Pro+ is the first phone on the market with Snapdragon 8 Gen 2 (Android Police)",
    "u": "https://www.androidpolice.com/vivo-first-market-snapdragon-8-gen-2-phone/"
   },
   {
    "t": "Samsung Unveils Industry's Fastest UFS 5.0 Solution (2026)",
    "u": "https://news.samsung.com/global/samsung-unveils-industrys-fastest-ufs-5-0-solution-for-next-gen-on-device-ai-applications"
   }
  ]
 },
 "prraw": {
  "stages": [
   [
    2007,
    "idea",
    "Apple 2007 年随 Final Cut Studio 2 推出 ProRes 中间编码，2009 年加入 ProRes 4444；思路是用帧内压缩换取流畅剪辑，为后来的 RAW 版本打底。",
    "Apple introduced the ProRes intermediate codec with Final Cut Studio 2 in 2007 and added ProRes 4444 in 2009: intra-frame compression tuned for smooth editing, the base the RAW version later built on.",
    [
     1
    ]
   ],
   [
    2018,
    "mass",
    "2018 年 4 月 Apple 发布 ProRes RAW 与 ProRes RAW HQ，Final Cut Pro 10.4.1（4 月 9 日）支持：压缩未去马赛克的 Bayer 数据，文件比 ProRes 4444 还小，4K 可在 MacBook Pro 实时播放；Atomos Shogun Inferno、Sumo 19 免费升级即可录制。",
    "In April 2018 Apple launched ProRes RAW and ProRes RAW HQ with Final Cut Pro 10.4.1 (April 9): compressed un-debayered Bayer data, files smaller than ProRes 4444, real-time 4K playback on MacBook Pro; Atomos Shogun Inferno and Sumo 19 recorders gained it as a free update.",
    [
     2,
     0
    ]
   ],
   [
    2018,
    "corp",
    "Atomos 在 NAB 2018 同时发布 Ninja V（5 英寸 HDMI 录机），后续固件支持 ProRes RAW（约）；DJI Zenmuse X7 于 2018 年 5 月起凭 CinemaDNG license 可机内录 14-bit ProRes RAW / RAW HQ，是首款支持的航拍相机。",
    "Atomos also announced the Ninja V 5-inch HDMI recorder at NAB 2018, which gained ProRes RAW through later firmware (approx.); from May 2018 the DJI Zenmuse X7 recorded 14-bit ProRes RAW / RAW HQ internally with a CinemaDNG license, the first aerial camera to do so.",
    [
     3,
     0
    ]
   ],
   [
    2018,
    "rival",
    "2018 年 9 月 Blackmagic Design 在 IBC 发布 Blackmagic RAW，把部分去马赛克放到相机里，开放、跨平台、免费，成为 ProRes RAW 的主要对手；此前还有 REDCODE RAW、CinemaDNG、ARRIRAW。",
    "In September 2018 Blackmagic Design unveiled Blackmagic RAW at IBC, moving part of demosaicing into the camera; open, cross-platform and free, it became ProRes RAW's main rival alongside REDCODE RAW, CinemaDNG and ARRIRAW.",
    [
     4
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 12 月 Nikon Z 6 / Z 7 固件 2.20 加入付费 RAW 视频输出（$199），经 HDMI 把 12-bit 4K UHD RAW 送到 Atomos Ninja V 录成 ProRes RAW，是无反相机经 HDMI 输出 ProRes RAW 的代表。",
    "In December 2019 Nikon Z 6 / Z 7 firmware 2.20 added a paid ($199) RAW video output sending 12-bit 4K UHD RAW over HDMI to the Atomos Ninja V for ProRes RAW recording, the landmark of mirrorless cameras feeding ProRes RAW over HDMI.",
    [
     5
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 3 月 Apple 发布 ProRes RAW for Windows 测试版解码器；同年 5 月 Adobe Premiere Pro、After Effects 等加入 ProRes RAW 支持，格式走出 Final Cut Pro。",
    "In March 2020 Apple released a beta ProRes RAW for Windows decoder; in May 2020 Adobe Premiere Pro, After Effects and others added ProRes RAW, taking the format beyond Final Cut Pro.",
    [
     6,
     7
    ]
   ],
   [
    2021,
    "ver",
    "2021 年 4 月 Ninja V AtomOS 10.63 把 ProRes RAW 扩展到 Sony α1（4.3K60p）、FX3（4.2K60p）、Panasonic BGH1、SIGMA fp L 等机型。",
    "In April 2021 Ninja V AtomOS 10.63 extended ProRes RAW to the Sony α1 (4.3K60p), FX3 (4.2K60p), Panasonic BGH1 and SIGMA fp L among others.",
    [
     11
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 4 月 Nikon Z 9 固件 2.00 实现机内 ProRes RAW HQ（FX 4.1K/60p），同时推出自家 N-RAW（文件约为 ProRes RAW HQ 一半，支持 8.3K/60p），无需外接录机。",
    "In April 2022 Nikon Z 9 firmware 2.00 enabled internal ProRes RAW HQ (FX 4.1K/60p) alongside Nikon's own N-RAW (about half the file size, up to 8.3K/60p), no external recorder needed.",
    [
     8
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 4 月 DJI Inspire 3 的 Zenmuse X9-8K Air 可机内录全画幅 8K/75fps ProRes RAW、4K/120fps 不裁切（需 license）。",
    "In April 2023 the DJI Inspire 3's Zenmuse X9-8K Air recorded full-frame 8K/75fps ProRes RAW internally, and 4K/120fps uncropped (license required).",
    [
     9
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 9 月 iPhone 17 Pro / Pro Max 成为首批能录 ProRes RAW 的手机，配合 Final Cut Camera 2.0、Apple Log 2、genlock 与 open gate；DaVinci Resolve 20.2 也原生支持 ProRes RAW。",
    "In September 2025 the iPhone 17 Pro / Pro Max became the first smartphones to record ProRes RAW, with Final Cut Camera 2.0, Apple Log 2, genlock and open gate; DaVinci Resolve 20.2 also added native ProRes RAW.",
    [
     10,
     0
    ]
   ]
  ],
  "now": [
   "2026 年 ProRes RAW 可在 iPhone 17 Pro、Nikon Z 9 / Z 8 / Z6III、DJI Inspire 3、Ronin 等机内录制，或经 Atomos Ninja / Shogun 从 Sony、Panasonic LUMIX、Canon 等相机外录；Final Cut Pro、Premiere Pro、DaVinci Resolve 都能原生剪辑。",
   "In 2026 ProRes RAW is recorded internally on the iPhone 17 Pro, Nikon Z 9 / Z 8 / Z6III, DJI Inspire 3 and Ronin, or externally via Atomos Ninja / Shogun from Sony, Panasonic LUMIX, Canon and other cameras; Final Cut Pro, Premiere Pro and DaVinci Resolve all edit it natively."
  ],
  "replaced": [
   "没有被替代，仍是主流 RAW 视频格式之一；它与 Blackmagic RAW、REDCODE RAW、Nikon N-RAW、Canon Cinema RAW Light 等相机厂自有压缩 RAW 并存竞争，手机端可能由更多 Android 厂商的 RAW 视频方案跟进。",
   "Not replaced; it remains a mainstream RAW video format, competing with Blackmagic RAW, REDCODE RAW, Nikon N-RAW and Canon Cinema RAW Light; on phones, other makers may follow with their own RAW video options."
  ],
  "refs": [
   {
    "t": "ProRes RAW - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/ProRes_RAW"
   },
   {
    "t": "Apple ProRes - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Apple_ProRes"
   },
   {
    "t": "Final Cut Pro X update introduces ProRes RAW and advanced closed captioning (Apple Newsroom, 2018)",
    "u": "https://www.apple.com/newsroom/2018/04/final-cut-pro-x-update-introduces-prores-raw-and-advanced-closed-captioning/"
   },
   {
    "t": "DJI is First To Adopt ProRes RAW (No Film School, 2018)",
    "u": "https://nofilmschool.com/2018/04/dji-nab-prores-raw"
   },
   {
    "t": "Blackmagic Design Announces Advanced New Blackmagic RAW Codec (2018)",
    "u": "https://www.blackmagicdesign.com/media/partial/release/20180914-01"
   },
   {
    "t": "Nikon Releases CFexpress Update and $200 ProRes RAW Upgrade for the Nikon Z6 and Z7 (PetaPixel, 2019)",
    "u": "https://petapixel.com/2019/12/16/nikon-releases-cfexpress-update-and-200-prores-raw-upgrade-for-the-nikon-z6-and-z7"
   },
   {
    "t": "Apple brings ProRes RAW support to Windows video editors (Engadget, 2020)",
    "u": "https://www.engadget.com/2020-03-30-apple-prores-raw-support-windows.html"
   },
   {
    "t": "Adobe Creative Cloud Video Apps Updates - ProRes RAW Support and More (CineD, 2020)",
    "u": "https://www.cined.com/adobe-creative-cloud-video-apps-updates-prores-raw-support-and-more/"
   },
   {
    "t": "Firmware version 2.00 for the Nikon Z 9 (Nikon, 2022)",
    "u": "https://www.nikon.com/news/2022/0414_mirrorless_01.htm"
   },
   {
    "t": "DJI's New Inspire 3 Is The World's Ultimate Cinema Drone (DJI, 2023)",
    "u": "https://www.mynewsdesk.com/uk/dji/pressreleases/djis-new-inspire-3-is-the-worlds-ultimate-cinema-drone-3245502"
   },
   {
    "t": "Apple announces Final Cut Camera 2.0 (Apple Newsroom, 2025)",
    "u": "https://www.apple.com/newsroom/2025/09/apple-announces-final-cut-camera-2-0/"
   },
   {
    "t": "Ninja V firmware released enabling ProRes RAW recording from compatible cameras (RedShark News, 2021)",
    "u": "https://www.redsharknews.com/ninja-v-firmware-released-enabling-prores-raw-recording-from-compatible-cameras?hs_amp=true"
   }
  ]
 },
 "cfeb": {
  "stages": [
   [
    2010,
    "idea",
    "2010 年 11 月 SanDisk、Sony、Nikon 联合提出基于 PCIe 的 XQD 存储卡格式，目标 500MB/s 以上、2TB 以上容量，是 CFexpress Type B 的前身。",
    "In November 2010 SanDisk, Sony and Nikon jointly proposed XQD, a PCIe-based card targeting over 500MB/s and over 2TB, the forerunner of CFexpress Type B.",
    [
     1
    ]
   ],
   [
    2011,
    "paper",
    "2011 年 12 月 CompactFlash Association（CFA）正式采纳 XQD 规格，目标写入 125MB/s 起。",
    "In December 2011 the CompactFlash Association (CFA) formally adopted the XQD spec, targeting writes from 125MB/s.",
    [
     1
    ]
   ],
   [
    2012,
    "proto",
    "2012 年 Sony 推出首批 XQD 卡，Nikon D4 成为首款 XQD 相机；同年 XQD 2.0 升到 PCIe 3.0，理论 1GB/s。",
    "In 2012 Sony shipped the first XQD cards and the Nikon D4 became the first XQD camera; XQD 2.0 moved to PCIe 3.0 for a theoretical 1GB/s that year.",
    [
     1
    ]
   ],
   [
    2016,
    "corp",
    "2016 年 9 月 7 日 CFA 宣布 CFexpress 作为 XQD 继任：改用 NVMe 协议，Type B 沿用 XQD 外形（38.5×29.8×3.8mm）但用两条 PCIe lane；2018 年 Lexar 放弃 XQD 转向 CFexpress。",
    "On September 7, 2016 the CFA announced CFexpress as XQD's successor: NVMe protocol, with Type B keeping XQD's 38.5×29.8×3.8mm shape but using two PCIe lanes; Lexar dropped XQD for CFexpress in 2018.",
    [
     0,
     1
    ]
   ],
   [
    2017,
    "paper",
    "2017 年 4 月 CFexpress 1.0：PCIe 3.0 x2、NVMe 1.2，理论 2GB/s；2017 年 6 月 Delkin 推出首批 CFexpress 卡。",
    "April 2017 CFexpress 1.0: PCIe 3.0 x2 with NVMe 1.2 for a theoretical 2GB/s; Delkin introduced the first CFexpress cards in June 2017.",
    [
     0
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 2 月 CFexpress 2.0 定义三种尺寸：Type A（20×28mm，PCIe 3.0 x1，1GB/s）、Type B（x2，2GB/s）、Type C（54×74mm，x4，4GB/s），协议升到 NVMe 1.3。",
    "February 2019 CFexpress 2.0 defined three sizes: Type A (20×28mm, PCIe 3.0 x1, 1GB/s), Type B (x2, 2GB/s) and Type C (54×74mm, x4, 4GB/s), with NVMe 1.3.",
    [
     3,
     0
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 12 月 16 日 Nikon Z 6 / Z 7 固件 2.20 让原 XQD 卡槽兼容 CFexpress Type B，成为首批支持 CFexpress 的相机。",
    "On December 16, 2019 Nikon Z 6 / Z 7 firmware 2.20 let the XQD slot accept CFexpress Type B, making them the first cameras to support CFexpress.",
    [
     0,
     4
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 1 月 Canon EOS-1D X Mark III 发布，原生双 CFexpress Type B 卡槽，取代上一代的 CF + CFast 2.0（SATA）组合，RAW+JPEG 缓存 1000 张以上。",
    "In January 2020 Canon announced the EOS-1D X Mark III with native dual CFexpress Type B slots, replacing the previous CF + CFast 2.0 (SATA) pair, buffering 1,000+ RAW+JPEG frames.",
    [
     5
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 7 月 28 日 Sony 发布首款 CFexpress Type A 卡 CEA-G80T/G160T（读 800MB/s、写 700MB/s），同日 α7S III 用 Type A / SD 双用卡槽。",
    "On July 28, 2020 Sony launched the first CFexpress Type A cards, CEA-G80T/G160T (800MB/s read, 700MB/s write), alongside the α7S III with combo Type A / SD slots.",
    [
     6
    ]
   ],
   [
    2020,
    "rival",
    "竞争路线：CFast 2.0（SATA，约 600MB/s 上限）被 CFexpress 淘汰；SD UHS-II（约 300MB/s）因便宜仍在中端机型并存，Sony 用 Type A + SD 二合一卡槽兼顾。",
    "Rivals: CFast 2.0 (SATA, about 600MB/s ceiling) was displaced by CFexpress; SD UHS-II (about 300MB/s) stays in mid-range bodies for cost, and Sony's combo Type A + SD slots serve both.",
    [
     5,
     6
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 8 月 CFexpress 4.0：PCIe 4.0、每 lane 2GB/s、NVMe 1.4c，Type A/B/C 理论 2/4/8GB/s，向下兼容。",
    "August 2023 CFexpress 4.0: PCIe 4.0 at 2GB/s per lane with NVMe 1.4c, theoretical 2/4/8GB/s for Type A/B/C, backward compatible.",
    [
     2
    ]
   ],
   [
    2025,
    "ver",
    "4.0 卡陆续上市：Lexar Professional Diamond CFexpress 4.0 Type B（2024 年 10 月，读 3,700MB/s、写 3,400MB/s）；Sony 2025 年 7 月推出 CFexpress 4.0 Type A（读 1,800MB/s、写 1,700MB/s，最高 1,920GB）。",
    "4.0 cards arrived: Lexar Professional Diamond CFexpress 4.0 Type B (October 2024, 3,700MB/s read, 3,400MB/s write) and Sony's CFexpress 4.0 Type A in July 2025 (1,800MB/s read, 1,700MB/s write, up to 1,920GB).",
    [
     7,
     8
    ]
   ]
  ],
  "now": [
   "2026 年 CFexpress Type B 是 Nikon Z 9 / Z 8、Canon EOS R1 / R5 Mark II、Panasonic S1H 系列等高端机的主力卡，Type A 用于 Sony α1 II、α7S III、FX 系列；4.0 卡把 8K RAW 视频写入推到 3GB/s 以上，Type C 仍几乎没有产品。",
   "In 2026 CFexpress Type B is the main card in high-end bodies such as the Nikon Z 9 / Z 8 and Canon EOS R1 / R5 Mark II, while Type A serves the Sony α1 II, α7S III and FX line; 4.0 cards push 8K RAW video writes past 3GB/s, and Type C still has almost no products."
  ],
  "replaced": [
   "仍是当前专业相机标准，下一步是 CFexpress 4.0 普及；潜在挑战来自 SD Express（同样 PCIe/NVMe、但卡更便宜）和经 USB-C 直录外置 SSD 的做法（如 iPhone 17 Pro、Blackmagic 相机）。",
   "Still the current pro-camera standard, with CFexpress 4.0 spreading next; possible challengers are SD Express (also PCIe/NVMe, but cheaper cards) and direct recording to external SSDs over USB-C (iPhone 17 Pro, Blackmagic cameras)."
  ],
  "refs": [
   {
    "t": "CFexpress - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/CFexpress"
   },
   {
    "t": "XQD card - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/XQD_card"
   },
   {
    "t": "CompactFlash Association Announces CFexpress 4.0 Logical and Physical Specifications (2023)",
    "u": "https://compactflash.org/compactflash-association-announces-cfexpress-4-0-logical-and-physical-specifications/"
   },
   {
    "t": "CompactFlash Association Announces CFexpress 2.0 Specification (The Broadcast Bridge, 2019)",
    "u": "https://www.thebroadcastbridge.com/content/entry/12999/compactflash-association-announces-cfexpress-2.0-specification"
   },
   {
    "t": "Nikon Releases CFExpress Update and $200 ProRes RAW Upgrade for the Nikon Z6 and Z7 (PetaPixel, 2019)",
    "u": "https://petapixel.com/2019/12/16/nikon-releases-cfexpress-update-and-200-prores-raw-upgrade-for-the-nikon-z6-and-z7"
   },
   {
    "t": "Canon Announces The EOS-1D X Mark III Camera (Canon U.S.A., 2020)",
    "u": "https://www.usa.canon.com/newsroom/2020/20200106-1dxmkiii"
   },
   {
    "t": "Sony Announces World's First CFexpress Type A Memory Card (Sony, 2020)",
    "u": "https://sony.mediaroom.com/2020-07-28-Sony-Announces-Worlds-First-CFexpress-Type-A-Memory-Card-with-High-speed-Performance-and-Tough-Durability"
   },
   {
    "t": "Lexar's New $1,000 CFexpress 4.0 Type B Diamond Card Is Its Fastest Yet (PetaPixel, 2024)",
    "u": "https://petapixel.com/2024/10/21/lexars-new-1000-cfexpress-4-0-type-b-diamond-card-is-its-fastest-yet"
   },
   {
    "t": "Sony Finally Upgrades Its CFexpress Cards, Doubling Their Peak Speeds (PetaPixel, 2025)",
    "u": "https://petapixel.com/2025/07/09/sony-finally-upgrades-its-cfexpress-cards-doubling-their-peak-speeds"
   }
  ]
 },
 "sdexp": {
  "stages": [
   [
    2011,
    "idea",
    "SD 4.0（2011）引入 UHS-II，在卡背加第二排触点实现差分串行高速通道（最高 312MB/s），这排触点后来被 SD Express 复用来走 PCIe。",
    "SD 4.0 (2011) introduced UHS-II, adding a second row of contacts for a differential serial link (up to 312MB/s); SD Express later reused that row for PCIe.",
    [
     0,
     2
    ]
   ],
   [
    2016,
    "rival",
    "2016 年 3 月 JEDEC 发布 UFS Card 1.0（单 lane 600MB/s），Samsung 推出 UFS 存储卡，试图以 UFS 取代 microSD，但主机支持稀少，未能普及。",
    "In March 2016 JEDEC published UFS Card 1.0 (single lane, 600MB/s) and Samsung shipped UFS cards to displace microSD, but host support stayed scarce and it never caught on.",
    [
     10
    ]
   ],
   [
    2018,
    "paper",
    "2018 年 6 月 27 日 SD Association 发布 SD 7.0：SD Express 在 UHS-II 触点上跑 PCIe 3.0 x1 + NVMe 1.3，最高 985MB/s，同时定义 SDUC（最高 128TB），保持对旧 SD 接口的向下兼容。",
    "On June 27, 2018 the SD Association released SD 7.0: SD Express runs PCIe 3.0 x1 + NVMe 1.3 over the UHS-II contacts for up to 985MB/s, plus SDUC up to 128TB, while staying backward compatible with legacy SD.",
    [
     1,
     2
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 2 月 SD 7.1 推出 microSD Express 及新标识，把 PCIe/NVMe 通道带到 microSD 尺寸。",
    "In February 2019 SD 7.1 introduced microSD Express and new logos, bringing the PCIe/NVMe lane to the microSD size.",
    [
     0
    ]
   ],
   [
    2019,
    "proto",
    "Computex 2019 上 Realtek 展示 RTS5261 SD Express 读卡器控制器（PCIe 3.0 主机接口），Western Digital/SanDisk 展示 SD Express 与 microSD Express 原型卡。",
    "At Computex 2019 Realtek showed its RTS5261 SD Express reader controller (PCIe 3.0 host link), and Western Digital/SanDisk showed SD Express and microSD Express prototype cards.",
    [
     3
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 5 月 19 日 SD 8.0 加入 PCIe 4.0 和双 lane（全尺寸卡加第三排触点）：PCIe 3.0 x2 或 4.0 x1 约 2GB/s，PCIe 4.0 x2 最高 3,940MB/s。",
    "On May 19, 2020 SD 8.0 added PCIe 4.0 and dual lanes (a third contact row on full-size cards): about 2GB/s with PCIe 3.0 x2 or 4.0 x1, up to 3,940MB/s with PCIe 4.0 x2.",
    [
     4
    ]
   ],
   [
    2021,
    "proto",
    "Silicon Motion 用 SM2708 控制器做出 SD Express 工程样卡，实测约 900MB/s，但发热明显（约）。",
    "Silicon Motion built SD Express engineering sample cards on its SM2708 controller, benchmarked near 900MB/s but running hot (approx.).",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 10 月 SD 9.1 让 microSD Express 支持 PCIe 4.0（最高约 2GB/s），定义 SD Express Speed Class 150/300/450/600，并加入最多 8 路 multi-stream、功耗与热管理。",
    "In October 2023 SD 9.1 allowed PCIe 4.0 on microSD Express (up to about 2GB/s), defined SD Express Speed Classes 150/300/450/600, and added up to 8-stream multi-stream access plus power and thermal management.",
    [
     6
    ]
   ],
   [
    2024,
    "corp",
    "2024 年 2 月 Samsung 出样业界首款 256GB microSD Express，顺序读 800MB/s，约为 UHS-I 卡的 4 倍。",
    "In February 2024 Samsung sampled the industry's first 256GB microSD Express card at 800MB/s sequential read, about 4x UHS-I.",
    [
     7
    ]
   ],
   [
    2025,
    "mass",
    "2025 年 6 月 Nintendo Switch 2 上市，扩展卡只认 microSD Express（最高 2TB），把这种卡第一次带进大众市场；Lexar PLAY PRO（256GB–1TB，读 900MB/s、写 600MB/s）、SanDisk 等卡随之量产。",
    "The Nintendo Switch 2 launched in June 2025 accepting only microSD Express for expansion (up to 2TB), bringing the format to the mass market for the first time; Lexar PLAY PRO (256GB–1TB, 900MB/s read, 600MB/s write), SanDisk and others followed into volume.",
    [
     8,
     9
    ]
   ],
   [
    2025,
    "ver",
    "到 2025 年中市售的只有单 lane PCIe 3.x SD Express 卡，SD 8.0/9.1 定义的 PCIe 4.0 与双 lane 卡还没有零售产品。",
    "As of mid-2025 only single-lane PCIe 3.x SD Express cards are on sale; no PCIe 4.0 or dual-lane cards defined in SD 8.0/9.1 have reached retail.",
    [
     0
    ]
   ]
  ],
  "now": [
   "2026 年 microSD Express 主要靠 Switch 2 带动：Lexar PLAY PRO、SanDisk、Samsung、PNY 等卡读速约 800–900MB/s；读卡器和少数 PC 跟进，相机尚未采用，全尺寸 SD Express 卡很少。",
   "In 2026 microSD Express is driven mainly by the Switch 2: Lexar PLAY PRO, SanDisk, Samsung and PNY cards read at about 800–900MB/s; readers and a few PCs support it, cameras have not adopted it, and full-size SD Express cards are rare."
  ],
  "replaced": [
   "仍在普及早期，没有被替代；下一步是 PCIe 4.0 / 双 lane 卡。相机领域它要和 CFexpress Type A/B 竞争，散热和成本是主要障碍。",
   "Still in early adoption and not replaced; next come PCIe 4.0 / dual-lane cards. In cameras it competes with CFexpress Type A/B, with heat and cost as the main hurdles."
  ],
  "refs": [
   {
    "t": "SD card - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/SD_card"
   },
   {
    "t": "SD Association Announces SD 7.0 Spec & SD Express Interface (AnandTech, 2018)",
    "u": "https://www.anandtech.com/show/13028"
   },
   {
    "t": "SD Express Cards with PCIe and NVMe Interfaces White Paper (SD Association)",
    "u": "https://www.sdcard.org/cms/wp-content/uploads/2020/11/SD_Express_Cards_with_PCIe_and_NVMe_Interfaces_White_Paper.pdf"
   },
   {
    "t": "Realtek Showcases RTS5261 SD Express Controller (AnandTech, 2019)",
    "u": "https://www.anandtech.com/show/14552"
   },
   {
    "t": "SD Association Delivers Gigabyte Speed Leap with New SD Express 8.0",
    "u": "https://www.sdcard.org/press/thoughtleadership/sd-association-delivers-gigabyte-speed-leap-with-new-sd-express-8-0/"
   },
   {
    "t": "Next Gen NVMe SD Card Review: The SM2708 Controller (AnandTech)",
    "u": "https://www.anandtech.com/show/16938"
   },
   {
    "t": "SD 9.1 Specification Introduces New Speed Classes and Next Level Performance Features (SD Association, 2023)",
    "u": "https://www.sdcard.org/press/thoughtleadership/sd-9-1-specification-introduces-new-speed-classes-and-next-level-performance-features-2/"
   },
   {
    "t": "Samsung's New microSD Cards Bring High Performance and Capacity (Samsung, 2024)",
    "u": "https://news.samsung.com/global/samsungs-new-microsd-cards-bring-high-performance-and-capacity-for-the-new-era-in-mobile-computing-and-on-device-ai"
   },
   {
    "t": "Lexar Ships the World's First 1TB microSD Express Card for use with Nintendo Switch 2 (2025)",
    "u": "https://americas.lexar.com/news/lexar-ships-the-worlds-first-1tb-microsd-express-card-for-use-with-nintendo-switch-2/"
   },
   {
    "t": "microSD Express Card FAQ (Nintendo)",
    "u": "https://en-americas-support.nintendo.com/app/answers/detail/a_id/68218/~/microsd-express-card-faq"
   },
   {
    "t": "Universal Flash Storage - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Universal_Flash_Storage"
   }
  ]
 }
};
