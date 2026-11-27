/* 存储 / 传输技术首发时间线的数据：第 34 步抽屉小图和 storage-timeline.html 共用，渲染在 js/tl-core.js / js/tl-page.js。
   行：[年份, 行业, 中文, English, 1 首发 / 0 传入 / 2 同行业里程碑, 技术编号]。「首发」= 第一次进入量产 / 商用产品。
   资料由子代理联网核对后整理（来源见 refs）；只找到间接来源的年份标了「约」。 */
TIMELINES.stor = {
  lanes: [
    {k: 'phone', zh: '手机', en: 'Phones'},
    {k: 'auto', zh: '安防 / 车载', en: 'Security / Auto'},
    {k: 'ind', zh: '电脑 / 工业 / 其他', en: 'PC / Industrial / Other'},
    {k: 'cam', zh: '相机 / 摄像机', en: 'Cameras / Camcorders'},
  ],
  rows: [
    [1991, "ind", "闪存 SSD · SanDisk 20MB 固态盘（约）", "Flash SSD · SanDisk 20MB solid-state disk (approx.)", 1, "ssd"],
    [1994, "ind", "CompactFlash · SanDisk CF 卡", "CompactFlash · SanDisk CF card", 1, "cf"],
    [1996, "cam", "CompactFlash · Kodak DC25", "CompactFlash · Kodak DC25", 0, "cf"],
    [1999, "cam", "Microdrive 微型硬盘 · IBM 340MB 用于 CF II 相机", "Microdrive · IBM 340MB in CF Type II cameras", 1, "mhdd"],
    [1999, "cam", "Memory Stick · Sony DSC-F55", "Memory Stick · Sony DSC-F55", 1, "ms"],
    [1999, "ind", "Memory Stick · Sony NW-MS7 Walkman", "Memory Stick · Sony NW-MS7 Walkman", 0, "ms"],
    [1999, "cam", "CompactFlash · Nikon D1", "CompactFlash · Nikon D1", 2, "cf"],
    [2000, "ind", "SD 卡 · Panasonic SV-SD70 音乐播放器", "SD card · Panasonic SV-SD70 audio player", 1, "sd"],
    [2000, "ind", "USB 闪存盘 · Trek ThumbDrive / IBM DiskOnKey", "USB flash drive · Trek ThumbDrive / IBM DiskOnKey", 1, "usbflash"],
    [2000, "cam", "SD 卡 · Panasonic PV-DC3000 数码相机", "SD card · Panasonic PV-DC3000 digital camera", 0, "sd"],
    [2002, "phone", "SD 卡槽 · Sharp J-SH51", "SD card slot · Sharp J-SH51", 0, "sd"],
    [2002, "phone", "Memory Stick Duo · Sony Ericsson P800", "Memory Stick Duo · Sony Ericsson P800", 0, "ms"],
    [2004, "phone", "TransFlash / microSD · Motorola E398", "TransFlash / microSD · Motorola E398", 1, "microsd"],
    [2004, "ind", "1 英寸硬盘 · Apple iPod mini", "1-inch hard drive · Apple iPod mini", 0, "mhdd"],
    [2004, "phone", "内置硬盘 · Samsung SPH-V5400", "Built-in hard drive · Samsung SPH-V5400", 0, "mhdd"],
    [2004, "cam", "Microdrive 摄像机 · JVC Everio GZ-MC200", "Microdrive camcorder · JVC Everio GZ-MC200", 2, "mhdd"],
    [2005, "cam", "内置 Wi-Fi 传图 · Nikon Coolpix P1", "Built-in Wi-Fi transfer · Nikon Coolpix P1", 1, "wifi"],
    [2006, "auto", "监控级硬盘 · Seagate SV35", "Surveillance-class HDD · Seagate SV35", 1, "survhdd"],
    [2006, "phone", "4GB 硬盘 · Nokia N91", "4GB hard drive · Nokia N91", 2, "mhdd"],
    [2006, "cam", "SDHC 卡 · Panasonic HDC-SD1", "SDHC card · Panasonic HDC-SD1", 2, "sd"],
    [2007, "cam", "Wi-Fi SD 卡 · Eye-Fi", "Wi-Fi SD card · Eye-Fi", 2, "wifi"],
    [2009, "ind", "CFast · Pretec CFast 卡（工业 SATA）", "CFast · Pretec CFast card (industrial SATA)", 1, "cfast"],
    [2010, "cam", "SDXC · Panasonic HDC-HS60 摄像机", "SDXC · Panasonic HDC-HS60 camcorder", 1, "sdxc"],
    [2010, "cam", "SSD 录制 · RED EPIC REDMAG", "SSD recording · RED EPIC REDMAG", 0, "ssd"],
    [2012, "cam", "XQD · Nikon D4", "XQD · Nikon D4", 1, "xqd"],
    [2012, "cam", "microSD · GoPro HERO3", "microSD · GoPro HERO3", 0, "microsd"],
    [2012, "cam", "通用 SSD 录制 · Blackmagic Cinema Camera", "Off-the-shelf SSD recording · Blackmagic Cinema Camera", 2, "ssd"],
    [2013, "ind", "3D NAND · Samsung V-NAND 数据中心 SSD", "3D NAND · Samsung V-NAND datacenter SSD", 1, "nand3d"],
    [2013, "ind", "NVMe · Samsung XS1715 企业级 SSD", "NVMe · Samsung XS1715 enterprise SSD", 1, "nvme"],
    [2013, "phone", "microSDXC · Samsung Galaxy S4", "microSDXC · Samsung Galaxy S4", 0, "sdxc"],
    [2013, "cam", "XQD · Sony PXW-Z100", "XQD · Sony PXW-Z100", 2, "xqd"],
    [2014, "auto", "监控级硬盘 · WD Purple", "Surveillance-class HDD · WD Purple", 2, "survhdd"],
    [2014, "cam", "UHS-II · Fujifilm X-T1", "UHS-II · Fujifilm X-T1", 1, "uhs2"],
    [2014, "cam", "CFast 2.0 · ARRI AMIRA", "CFast 2.0 · ARRI AMIRA", 0, "cfast"],
    [2014, "ind", "3D NAND · Samsung 850 Pro", "3D NAND · Samsung 850 Pro", 2, "nand3d"],
    [2015, "auto", "高耐久 microSD · SanDisk High Endurance", "High-endurance microSD · SanDisk High Endurance", 1, "endur"],
    [2015, "phone", "UFS 2.0 · Samsung Galaxy S6", "UFS 2.0 · Samsung Galaxy S6", 1, "ufs"],
    [2015, "phone", "NVMe · iPhone 6s", "NVMe · iPhone 6s", 0, "nvme"],
    [2016, "phone", "3D NAND · iPhone 7（Toshiba 48 层 BiCS）", "3D NAND · iPhone 7 (Toshiba 48-layer BiCS)", 0, "nand3d"],
    [2016, "cam", "CFast 2.0 · Canon EOS-1D X Mark II", "CFast 2.0 · Canon EOS-1D X Mark II", 2, "cfast"],
    [2017, "ind", "microSDXC · Nintendo Switch", "microSDXC · Nintendo Switch", 0, "microsd"],
    [2017, "auto", "车规 UFS · Samsung 车载 eUFS", "Automotive UFS · Samsung automotive eUFS", 0, "ufs"],
    [2017, "cam", "UHS-II V90 · Panasonic GH5", "UHS-II V90 · Panasonic GH5", 2, "uhs2"],
    [2018, "cam", "ProRes RAW · Atomos Shogun Inferno / Sumo 19", "ProRes RAW · Atomos Shogun Inferno / Sumo 19", 1, "prraw"],
    [2018, "auto", "U 盘录像 · Tesla 行车记录 Dashcam", "USB drive recording · Tesla Dashcam", 0, "usbflash"],
    [2018, "cam", "XQD · Nikon Z 7", "XQD · Nikon Z 7", 2, "xqd"],
    [2019, "cam", "CFexpress Type B · Nikon Z 6 / Z 7 固件 2.20", "CFexpress Type B · Nikon Z 6 / Z 7 firmware 2.20", 1, "cfeb"],
    [2019, "cam", "ProRes RAW 输出 · Nikon Z 6 / Z 7", "ProRes RAW output · Nikon Z 6 / Z 7", 2, "prraw"],
    [2019, "phone", "UFS 3.0 · OnePlus 7 Pro", "UFS 3.0 · OnePlus 7 Pro", 2, "ufs"],
    [2020, "cam", "CFexpress Type B · Canon EOS-1D X Mark III", "CFexpress Type B · Canon EOS-1D X Mark III", 2, "cfeb"],
    [2020, "cam", "CFexpress Type A · Sony α7S III", "CFexpress Type A · Sony α7S III", 2, "cfeb"],
    [2022, "phone", "UFS 4.0 · vivo X90 Pro", "UFS 4.0 · vivo X90 Pro", 2, "ufs"],
    [2023, "phone", "外接 SSD 录 ProRes · iPhone 15 Pro", "External SSD ProRes recording · iPhone 15 Pro", 0, "ssd"],
    [2025, "ind", "microSD Express · Nintendo Switch 2", "microSD Express · Nintendo Switch 2", 1, "sdexp"],
    [2025, "phone", "ProRes RAW · iPhone 17 Pro", "ProRes RAW · iPhone 17 Pro", 0, "prraw"],
    [2026, "auto", "高耐久 microSD · Sandisk Guardian 系列", "High-endurance microSD · Sandisk Guardian Series", 2, "endur"],
  ],
  desc: {
      "cf": [
          "SanDisk 的 CF 卡把闪存做成火柴盒大小、兼容 PC Card 接口，是早期数码相机和单反的主力存储。",
          "SanDisk's CompactFlash put flash memory in a matchbox-sized PC Card-compatible card and became the workhorse storage of early digital cameras and pro DSLRs."
      ],
      "ms": [
          "Sony 自家的口香糖形闪存卡，让照片在 Cyber-shot、Walkman、VAIO 和手机之间通用。",
          "Sony's stick-of-gum flash card format, meant to move photos and data across Cyber-shot cameras, Walkman players, VAIO PCs and Sony Ericsson phones."
      ],
      "mhdd": [
          "1 英寸微型硬盘（Microdrive 等），在闪存还很贵的年代用机械盘给相机、播放器和手机提供 GB 级容量。",
          "One-inch micro hard drives such as the Microdrive gave cameras, music players and phones gigabyte capacity while flash was still expensive."
      ],
      "sd": [
          "Panasonic、SanDisk、Toshiba 联合推出的 SD 卡比 CF 更小，后来成为相机和各类设备的通用卡。",
          "The SD card from Panasonic, SanDisk and Toshiba was smaller than CF with a write-protect switch, and became the universal card for cameras and devices."
      ],
      "usbflash": [
          "U 盘把闪存和 USB 控制器封进钥匙大小的外壳，即插即用拷贝照片视频，后来被汽车直接拿来存行车录像。",
          "The USB flash drive packed flash and a USB controller into a keychain stick for plug-and-play file copying, later used by cars to store driving footage."
      ],
      "microsd": [
          "指甲盖大小的 microSD（原名 TransFlash）为手机扩容而生，后来普及到运动相机、游戏机和行车记录仪。",
          "The fingernail-sized microSD, first called TransFlash, was made to expand phone storage and later spread to action cams, drones, consoles and dashcams."
      ],
      "wifi": [
          "把 Wi-Fi 塞进相机或存储卡，拍完不用拔卡接线就能把照片无线传到电脑、手机或网络相册。",
          "Putting Wi-Fi inside the camera or the memory card let photos go wirelessly to a PC, phone or online album without pulling the card or using a cable."
      ],
      "cfast": [
          "CFast 沿用 CF 外形但改用 SATA 接口，先用于工控嵌入式设备，后来因为高速写入被电影机和旗舰单反采用。",
          "CFast kept the CF shape but switched to a SATA interface, started in industrial embedded systems and was later adopted by cinema cameras and flagship DSLRs for its speed."
      ],
      "ssd": [
          "固态硬盘用闪存代替机械盘，没有运动部件；电影机用它承接 RAW 级高码率，手机也开始外接 SSD 直录。",
          "Solid-state drives replace spinning disks with flash; cinema cameras use them for RAW-class bitrates, and phones now record straight to external SSDs."
      ],
      "sdxc": [
          "SDXC 把 SD 卡容量上限从 32GB 提到 2TB 并改用 exFAT，满足高清视频长时间录制需求。",
          "SDXC raised the SD capacity ceiling from 32GB to 2TB and moved to exFAT, meeting the needs of long HD video recording."
      ],
      "xqd": [
          "Sony 主导的 XQD 卡走 PCIe 接口，写入远快于 CF，服务高速连拍和 4K，是 CFexpress 前身。",
          "The Sony-led XQD card used a PCIe interface to give burst shooting and 4K video far faster writes than CF, and paved the way for CFexpress."
      ],
      "nvme": [
          "NVMe 是专为闪存设计的 PCIe 存储协议，队列深、延迟低，从数据中心 SSD 一路走进手机和相机存储卡。",
          "NVMe is a PCIe storage protocol built for flash with deep queues and low latency, spreading from datacenter SSDs into phones and camera cards."
      ],
      "nand3d": [
          "3D NAND 把存储单元垂直堆叠几十上百层，在不缩小单元的前提下提升容量、降低每 GB 成本。",
          "3D NAND stacks memory cells vertically in dozens to hundreds of layers, raising capacity and cutting cost per gigabyte without shrinking cells."
      ],
      "uhs2": [
          "UHS-II 给 SD 卡加了第二排触点和高速差分总线，配合 V90 等视频速度等级保障 4K 高码率不掉帧。",
          "UHS-II added a second row of pins and a fast differential bus to SD cards, and with video speed classes like V90 keeps 4K high-bitrate recording from dropping frames."
      ],
      "survhdd": [
          "监控级硬盘针对 NVR / DVR 全天候多路写入优化固件和可靠性，减少录像丢帧。",
          "Surveillance-class hard drives tune firmware and reliability for round-the-clock multi-stream writes in NVRs and DVRs, reducing dropped video frames."
      ],
      "endur": [
          "高耐久存储卡针对行车记录仪和家用监控的循环覆盖写入设计，标称可承受上万小时录像。",
          "High-endurance cards are built for the constant loop overwriting of dashcams and home security cameras, rated for thousands of hours of recording."
      ],
      "ufs": [
          "UFS 用串行 MIPI M-PHY 全双工接口取代 eMMC，大幅提升手机存储读写速度，后来也进入车载系统。",
          "UFS replaced eMMC with a full-duplex serial MIPI M-PHY interface, sharply speeding up phone storage, and later moved into in-car systems."
      ],
      "prraw": [
          "Apple 的 ProRes RAW 把传感器 RAW 数据压缩成易剪辑的格式，先靠外接录机实现，后来手机也能直接录。",
          "Apple's ProRes RAW compresses sensor RAW data into an edit-friendly format, first via external recorders and later recorded directly on phones."
      ],
      "cfeb": [
          "CFexpress 基于 PCIe 和 NVMe，Type B 沿用 XQD 外形、Type A 更小，满足 8K 和 RAW 视频。",
          "CFexpress runs on PCIe and NVMe; Type B reuses the XQD shape and Type A is smaller, giving GB/s-class speed for 8K and RAW video."
      ],
      "sdexp": [
          "SD Express 在 SD 卡里加入 PCIe / NVMe 通道，让小卡也有接近 SSD 的速度。",
          "SD Express adds a PCIe and NVMe lane to the SD card so small cards can reach near-SSD speeds."
      ]
  },
  refs: [
      {
          "t": "SanDisk：SD 卡 25 周年",
          "u": "https://www.sandisk.com/company/newsroom/blogs/2025/an-enduring-legacy-the-the-sd-card-at-25"
      },
      {
          "t": "Kodak DC25 首款 CF 卡相机",
          "u": "https://www.digitalkameramuseum.de/en/cameras/item/kodak-dc25"
      },
      {
          "t": "Sony DSC-F55 Memory Stick 相机",
          "u": "https://www.digitalkameramuseum.de/en/cameras/item/sony-dsc-f55"
      },
      {
          "t": "Memory Stick 词条",
          "u": "https://en.wikipedia.org/wiki/Memory_Stick"
      },
      {
          "t": "Sony Ericsson P900",
          "u": "https://en.wikipedia.org/wiki/Sony_Ericsson_P900"
      },
      {
          "t": "IBM Microdrive 历史",
          "u": "https://www.storagenewsletter.com/2018/06/28/history-1999-ibm-microdrive/"
      },
      {
          "t": "Samsung SPH-V5400 首款硬盘手机",
          "u": "https://www.engadget.com/2004-09-06-finally-the-samsung-sph-v5400-worlds-first-cellphone-with-a.html"
      },
      {
          "t": "Nokia N91",
          "u": "https://en.wikipedia.org/wiki/Nokia_N91"
      },
      {
          "t": "JVC Everio 硬盘摄像机",
          "u": "https://phys.org/news/2005-07-jvc-hard-disk-camcorders.html"
      },
      {
          "t": "Panasonic 2000 年 SD 产品",
          "u": "https://www.phileweb.com/sp/news/d-av/200009/19/405.html"
      },
      {
          "t": "Panasonic HDC-SD1 SDHC 摄像机",
          "u": "https://cdrinfo.com/d7/content/panasonic-debuts-first-sd-memory-card-hd-video-camera-supporting-avchd-format"
      },
      {
          "t": "手机存储卡简史（J-SH51）",
          "u": "https://www.gsmarena.com/counterclockwise_short_history_of_the_memory_card-news-34263.php"
      },
      {
          "t": "microSD 兴衰（Motorola E398）",
          "u": "https://www.gsmarena.com/flashback_the_rise_and_fall_of_the_microsd_card-news-56723.php"
      },
      {
          "t": "USB 闪存盘历史",
          "u": "https://www.storagenewsletter.com/2018/10/19/history-2000-usb-flash-drive/"
      },
      {
          "t": "Tesla 录像 U 盘要求",
          "u": "https://www.tesla.com/ownersmanual/model3/en_nz/GUID-F311BBCA-2532-4D04-B88C-DBA784ADEE21.html"
      },
      {
          "t": "Nikon Coolpix P1 首款内置 Wi-Fi 相机",
          "u": "https://phys.org/news/2005-09-world-built-in-wi-fi-enabled-digital.html"
      },
      {
          "t": "Eye-Fi 无线 SD 卡上市",
          "u": "https://www.engadget.com/2007-10-30-eye-fi-wifi-enabled-sd-card-finally-shipping.html"
      },
      {
          "t": "Pretec 首款 CFast 卡",
          "u": "https://www.engadget.com/2009/01/09/pretec-debuts-cfast-storage-card-proclaims-it-worlds-smallest/"
      },
      {
          "t": "ARRI AMIRA 首用 CFast 2.0",
          "u": "https://www.provideocoalition.com/arri-amira-unveiled/"
      },
      {
          "t": "RED EPIC 开始交付",
          "u": "https://web.archive.org/web/20151013111239/http://www.studiodaily.com/2010/12/reds-epic-ships/"
      },
      {
          "t": "Panasonic 首批 SDXC 卡",
          "u": "https://www.engadget.com/2010-01-06-panasonic-shipping-first-sdxc-cards-next-month-for-ungodly-amoun.html"
      },
      {
          "t": "Panasonic SDXC 摄像机",
          "u": "https://hothardware.com/news/panasonic-brings-sdxc-support-to-new-hd-camcorders"
      },
      {
          "t": "Nikon D4 首款 XQD 相机",
          "u": "https://www.techradar.com/news/photography-video-capture/cameras/nikon-d4-first-camera-to-use-xqd-memory-format-1052054"
      },
      {
          "t": "Samsung XS1715 首款 NVMe SSD",
          "u": "https://www.storagereview.com/news/samsung-announces-industrys-first-2-5-inch-nvme-ssd"
      },
      {
          "t": "AnandTech：iPhone 6s NVMe 存储",
          "u": "https://www.anandtech.com/show/9686/the-apple-iphone-6s-and-iphone-6s-plus-review/7"
      },
      {
          "t": "Samsung 850 Pro V-NAND SSD",
          "u": "https://www.anandtech.com/show/8216"
      },
      {
          "t": "Fujifilm X-T1 首款 UHS-II 相机",
          "u": "https://news.softpedia.com/news/Fujfilm-X-T1-Supports-UHS-II-SD-cards-8fps-Burst-Shooting-with-AF-Tracking-416961.shtml"
      },
      {
          "t": "WD Purple 监控硬盘发布",
          "u": "https://www.anandtech.com/show/7771"
      },
      {
          "t": "SanDisk 高耐久监控卡",
          "u": "https://www.businesswire.com/news/home/20150301005076/en/3435161/SanDisk-Introduces-Memory-Cards-Engineered-Specifically-Dashboard"
      },
      {
          "t": "Sandisk Guardian 系列",
          "u": "https://www.sandisk.com/company/newsroom/press-releases/2026/2026-10-13-sandisk-introduces-sandisk-guardian-series-high-endurance-storage-for-dash-cams-and-home-security-cameras"
      },
      {
          "t": "Galaxy S6 首发 UFS 2.0",
          "u": "https://www.anandtech.com/show/9146/the-samsung-galaxy-s6-and-s6-edge-review/7"
      },
      {
          "t": "Samsung 车规 UFS",
          "u": "https://news.samsung.com/uk/samsung-starts-producing-industrys-first-universal-flash-storage-for-next-generation-automotive-applications"
      },
      {
          "t": "OnePlus 7 Pro 首发 UFS 3.0",
          "u": "https://9to5google.com/2019/05/06/oneplus-7-pro-ufs-30-storage/"
      },
      {
          "t": "Atomos Ninja V 与 ProRes RAW",
          "u": "https://wexphotovideo.com/blog-old/pro-video/apple-reveals-prores-raw-and-atomos-announces-the-ninja-v--nab-2018"
      },
      {
          "t": "Nikon Z 6 / Z 7 固件 2.20",
          "u": "https://petapixel.com/2019/12/16/nikon-releases-cfexpress-update-and-200-prores-raw-upgrade-for-the-nikon-z6-and-z7"
      },
      {
          "t": "Sony α7S III 与 CFexpress Type A",
          "u": "https://compactflash.org/highly-anticipated-sony-alpha-7s-iii-combines-supreme-imaging-performance-with-classic-s-series-sensitivity/"
      },
      {
          "t": "iPhone 15 Pro 外接存储录 ProRes",
          "u": "https://www.macrumors.com/2023/09/13/iphone-15-pro-external-storage-prores"
      },
      {
          "t": "iPhone 17 Pro ProRes RAW",
          "u": "https://www.macrumors.com/how-to/iphone-17-pro-prores-raw-format/"
      },
      {
          "t": "Switch 2 采用 microSD Express",
          "u": "https://www.engadget.com/gaming/nintendo/the-nintendo-switch-2-promises-major-storage-upgrades-but-itll-cost-you-193758964.html"
      }
  ],
  el: 'stortl', page: 'storage-timeline.html', histSrc: 'js/hist-stor.js',
  step: {n: 34, zh: '第 34 步：存储卡、总线与传输', en: 'Step 34: Storage cards, buses & transfer'},
  text: {
    zh: {title: '存储技术时间线', eyebrow: 'Storage & Transfer · 1991–2026', h1: '照片存在哪，谁先用上？',
         sub: 'CF、SD、microSD、XQD、CFexpress、UFS、NVMe、3D NAND、微型硬盘、SSD 录制、无线传输……每项存储和传输技术最先出现在相机、手机、安防车载还是电脑等其他设备里，又是怎么流到其他行业的。',
         panelCap: '每项存储 / 传输技术最先在哪个行业量产。',
         foot: '「首发」指第一次进入量产或商用产品，不是规范发布日期。只找到间接来源的年份标了「约」。'},
    en: {title: 'Storage Technology Timeline', eyebrow: 'Storage & Transfer · 1991–2026', h1: 'Where do photos live, and who used it first?',
         sub: 'CF, SD, microSD, XQD, CFexpress, UFS, NVMe, 3D NAND, microdrives, SSD recording, wireless transfer: did each storage and transfer technology ship first in cameras, phones, security/automotive or PCs and other devices, and how did it spread?',
         panelCap: 'Which industry shipped each storage / transfer technology first.',
         foot: '"First" means first in a shipping or commercial product, not the spec release date. Years backed only by indirect sources are marked "approx."'},
  },
};
renderTlPanel('stor');
