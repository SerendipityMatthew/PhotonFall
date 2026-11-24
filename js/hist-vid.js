/* 视频时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 vid 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 */
TIMELINES.vid.hist = {
 "mjpeg": {
  "stages": [
   [
    1986,
    "idea",
    "ISO 与 CCITT 联合成立 JPEG（Joint Photographic Experts Group），为连续色调静止图像制定基于 DCT 的压缩标准；把它逐帧套到视频上，就是后来的 Motion JPEG。",
    "ISO and CCITT jointly formed JPEG (Joint Photographic Experts Group) to standardize DCT-based compression of continuous-tone still images; applying it frame by frame to video later became Motion JPEG.",
    [
     7
    ]
   ],
   [
    1990,
    "proto",
    "1988 年在 Milpitas 创立的 C-Cube Microsystems 于 1990 年 7 月推出 CL550，第一颗实现 JPEG 标准的单芯片编解码器，约 10:1 压缩无明显劣化，速度足以实时压缩视频。",
    "C-Cube Microsystems, founded in Milpitas in 1988, introduced the CL550 in July 1990, the first single-chip implementation of the JPEG standard, compressing about 10:1 with no visible degradation and fast enough for real-time video.",
    [
     1,
     2
    ]
   ],
   [
    1991,
    "mass",
    "Avid Technology 等厂商宣布采用 CL550 的产品，Avid Media Composer 用 C-Cube JPEG 压缩板把视频以接近 VHS 的画质存进硬盘，开启了非线性离线剪辑。",
    "Avid Technology and others announced products using the CL550; Avid Media Composer used a C-Cube JPEG board to store near-VHS-quality video on disk, launching non-linear offline editing.",
    [
     1,
     2
    ]
   ],
   [
    1992,
    "paper",
    "JPEG 正式成为 ITU-T T.81（1992 年）/ ISO/IEC 10918-1 标准。由于它只规定静止图像，Motion JPEG 一直没有统一的视频标准，各家板卡和软件的码流互不兼容。",
    "JPEG became ITU-T T.81 (1992) / ISO/IEC 10918-1. Because it covers only still images, Motion JPEG never had one unified video standard, and vendors' boards and software were mutually incompatible.",
    [
     7,
     0
    ]
   ],
   [
    1995,
    "ver",
    "Apple 在 QuickTime 里定义 MJPEG-A 与 MJPEG-B 两种编码类型并提供软件实现，Motion JPEG 走进普通 PC 多媒体（约 1990 年代中期）。",
    "Apple defined the MJPEG-A and MJPEG-B coding types in QuickTime with a software implementation, bringing Motion JPEG to ordinary PC multimedia (approx. mid-1990s).",
    [
     0
    ]
   ],
   [
    1996,
    "corp",
    "Axis Communications 推出世界第一台网络摄像机 AXIS Neteye 200，用 JPEG 通过网络传图像，开创了 IP 监控。",
    "Axis Communications launched the world's first network camera, the AXIS Neteye 200, sending JPEG images over the network and starting IP surveillance.",
    [
     3
    ]
   ],
   [
    1998,
    "ver",
    "IETF 发布 RFC 2435（1998 年 10 月，作者 L. Berc、W. Fenner、R. Frederick、S. McCanne、P. Stewart，取代 1996 年的 RFC 2035），规定了 JPEG 视频的 RTP 封装，网络摄像机的 MJPEG 流有了标准传输格式。",
    "The IETF published RFC 2435 (Oct 1998, by L. Berc, W. Fenner, R. Frederick, S. McCanne and P. Stewart, obsoleting RFC 2035 of 1996), defining RTP packetization of JPEG video and giving network-camera MJPEG streams a standard transport.",
    [
     4
    ]
   ],
   [
    1999,
    "mass",
    "1999 年 11 月 Comdex 上 Axis 发布 AXIS 2100：基于自研 ARTPEC-1 芯片和嵌入式 Linux，最高 10 fps 传输 JPEG 视频，是第一款量产的嵌入式 Linux 产品，MJPEG 成为网络摄像机通用格式。",
    "At Comdex in November 1999 Axis released the AXIS 2100: built on its own ARTPEC-1 chip and embedded Linux, it streamed JPEG video at up to 10 fps and was the first mass-produced embedded-Linux product, making MJPEG the common network-camera format.",
    [
     3
    ]
   ],
   [
    2002,
    "rival",
    "Motion JPEG 2000 由 ISO/IEC 15444-3 定义（2001 年 11 月成文，2002 年单独出版），改用小波变换；2004 年 DCI 选择 JPEG 2000 作为数字影院发行格式，2005 年 7 月发布 DCI 规范。",
    "Motion JPEG 2000 was defined by ISO/IEC 15444-3 (drafted Nov 2001, published standalone in 2002) using wavelets; in 2004 DCI chose JPEG 2000 for digital-cinema distribution and published its specification in July 2005.",
    [
     5
    ]
   ],
   [
    2003,
    "ver",
    "USB-IF 于 2003 年 9 月发布 USB Video Class 1.0；UVC 支持未压缩、MJPEG、DV 等帧式格式，MJPEG 从此成为 USB 摄像头在有限带宽下传高分辨率画面的通用格式。",
    "The USB-IF released USB Video Class 1.0 in September 2003; UVC supports frame-based formats including uncompressed, MJPEG and DV, and MJPEG became the usual way USB webcams carry high resolutions over limited bandwidth.",
    [
     6
    ]
   ],
   [
    2008,
    "ver",
    "2008 年 8 月 Nikon D90 成为第一台能录视频的单反，用 M-JPEG 录 1280×720；2009 年 Pentax K-7 以最高约 74 Mbit/s 的 M-JPEG 录像。",
    "In August 2008 the Nikon D90 became the first DSLR to record video, using M-JPEG at 1280×720; in 2009 the Pentax K-7 recorded M-JPEG at up to about 74 Mbit/s.",
    [
     0
    ]
   ],
   [
    2008,
    "end",
    "Axis 在 2008 年推出基于 ARTPEC-3 的首批 H.264 网络摄像机，监控行业的主码流从 MJPEG / MPEG-4 转向 H.264，MJPEG 退为备用流。",
    "In 2008 Axis launched its first H.264 network cameras on the ARTPEC-3 chip; surveillance main streams moved from MJPEG / MPEG-4 to H.264, leaving MJPEG as a fallback stream.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 8 月 Canon 5D Mark IV 仍用 M-JPEG 录 4K，码率约 500 Mbit/s，体现了帧内编码剪辑方便、但文件巨大的取舍。",
    "In August 2016 the Canon 5D Mark IV still recorded 4K as M-JPEG at about 500 Mbit/s, showing the intra-frame trade-off: easy editing but huge files.",
    [
     0
    ]
   ]
  ],
  "now": [
   "MJPEG 仍广泛存在于 UVC USB 摄像头、网络摄像机的兼容码流、工业相机和一些嵌入式设备里，因为编解码简单、延迟低、每帧可独立解码。",
   "MJPEG is still common in UVC USB webcams, compatibility streams of network cameras, industrial cameras and embedded devices, because it is simple, low-latency and every frame decodes independently."
  ],
  "replaced": [
   "录制和传输上被 H.264 / H.265 等帧间编码取代；专业剪辑的帧内格式被 ProRes、DNxHD 等取代；数字影院用的是 JPEG 2000。",
   "For recording and streaming it was replaced by inter-frame codecs such as H.264 / H.265; for professional intra-frame editing by ProRes and DNxHD; digital cinema uses JPEG 2000 instead."
  ],
  "refs": [
   {
    "t": "Motion JPEG - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Motion_JPEG"
   },
   {
    "t": "C-Cube Microsystems Inc. company history",
    "u": "https://company-histories.com/CCube-Microsystems-Inc-Company-History.html"
   },
   {
    "t": "C-Cube Microsystems Inc. - Encyclopedia.com",
    "u": "https://www.encyclopedia.com/books/politics-and-business-magazines/c-cube-microsystems-inc"
   },
   {
    "t": "Axis history",
    "u": "https://www.axis.com/about-axis/history"
   },
   {
    "t": "RFC 2435: RTP Payload Format for JPEG-compressed Video",
    "u": "https://www.rfc-editor.org/rfc/rfc2435"
   },
   {
    "t": "Motion JPEG 2000 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Motion_JPEG_2000"
   },
   {
    "t": "USB video device class - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/USB_video_device_class"
   },
   {
    "t": "JPEG - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/JPEG"
   }
  ]
 },
 "mpeg1": {
  "stages": [
   [
    1988,
    "idea",
    "1988 年 1 月，NTT 的 Hiroshi Yasuda 与 CSELT 的 Leonardo Chiariglione 发起成立 MPEG；5 月在 Ottawa 召开第一次会议，29 名专家出席，目标是在约 1.5 Mbit/s 下把视频音频放进 CD。",
    "In January 1988 Hiroshi Yasuda (NTT) and Leonardo Chiariglione (CSELT) initiated MPEG; its first meeting was in Ottawa that May with 29 experts, aiming to fit audio and video onto a CD at about 1.5 Mbit/s.",
    [
     0,
     1
    ]
   ],
   [
    1988,
    "paper",
    "CCITT 的 H.261 视频会议编码确立了「运动补偿 + DCT」的混合编码结构，MPEG-1 在它的基础上发展。",
    "CCITT's H.261 videoconferencing codec established the motion-compensated DCT hybrid structure on which MPEG-1 was built.",
    [
     0
    ]
   ],
   [
    1989,
    "proto",
    "1989 年 10 月在 JVC 提供的 Kurihama 设施进行主观测试，约 100 名代表出席；结果表明从运动补偿的前一帧做预测、再用 DCT 编残差的方案最好，此后两年数百名专家完善 MPEG-1 Video。",
    "In October 1989 subjective tests were run at JVC's Kurihama facility with about 100 delegates; motion-compensated prediction from the previous picture plus DCT coding of the residual came out best, and hundreds of experts refined MPEG-1 Video over the next two years.",
    [
     2
    ]
   ],
   [
    1990,
    "ver",
    "1990 年 9 月草案已基本完成，后续只有小改动；码流引入 I、P、B 帧，B 帧双向预测是相对 H.261 的关键改进。",
    "By September 1990 the draft was essentially complete with only minor later changes; the bitstream used I, P and B frames, and bidirectional B frames were the key advance over H.261.",
    [
     0
    ]
   ],
   [
    1991,
    "paper",
    "1991 年 12 月 6 日委员会草案 ISO CD 11172 公开；同年 Didier Le Gall 在 Communications of the ACM 发表《MPEG: a video compression standard for multimedia applications》介绍该标准。",
    "Committee Draft ISO CD 11172 became public on 6 December 1991; that year Didier Le Gall described the standard in Communications of the ACM, \"MPEG: a video compression standard for multimedia applications\".",
    [
     0
    ]
   ],
   [
    1992,
    "corp",
    "1992 年 C-Cube 与 Philips 合作推出 CL450，号称第一颗单芯片 MPEG 解码器；同年 11 月标准第 1–3 部分获批，Berkeley Plateau Multimedia Research Group 发布了软件解码器。",
    "In 1992 C-Cube, working with Philips, introduced the CL450, billed as the first single-chip MPEG decoder; in November that year Parts 1–3 were approved and the Berkeley Plateau Multimedia Research Group released a software decoder.",
    [
     4,
     0
    ]
   ],
   [
    1993,
    "ver",
    "1993 年 8 月 ISO/IEC 11172 第 1–3 部分（Systems、Video、Audio）正式出版；常用 SIF 分辨率 352×240 / 352×288，约束参数码流在 1.5 Mbit/s 以下。",
    "Parts 1–3 of ISO/IEC 11172 (Systems, Video, Audio) were published in August 1993; typical SIF resolution was 352×240 / 352×288 with constrained-parameter bitstreams under 1.5 Mbit/s.",
    [
     0
    ]
   ],
   [
    1993,
    "mass",
    "1993 年 9 月 16 日 Sony、Philips、Matsushita、JVC 发布 Video CD「White Book」：MPEG-1 视频 1150 kbit/s，一张 CD 约 74 分钟；Philips CD-i 也用 MPEG-1 播放全屏视频。",
    "On 16 September 1993 Sony, Philips, Matsushita and JVC released the Video CD \"White Book\": MPEG-1 video at 1150 kbit/s, about 74 minutes per CD; Philips CD-i also used MPEG-1 for full-screen video.",
    [
     3,
     0
    ]
   ],
   [
    1994,
    "corp",
    "C-Cube 推出 VCD 播放机用的 CL480V/CD 解码芯片，VCD 机成本大降。",
    "C-Cube introduced the CL480V/CD decoder chip for Video CD players, sharply cutting player cost.",
    [
     4
    ]
   ],
   [
    1995,
    "ver",
    "Video CD 2.0 规范发布（1995），之后又有 VCD-Internet（1997）和改用 MPEG-2 的 SVCD（1998）。",
    "Video CD 2.0 was published in 1995, followed by VCD-Internet (1997) and the MPEG-2-based SVCD (1998).",
    [
     3
    ]
   ],
   [
    1997,
    "mass",
    "1997 年 2 月 Hitachi MP-EG1 发售，是世界第一台录 MPEG 视频的数码相机，用自研 MPEG-1 编解码 LSI 写进 260 MB PC 卡硬盘，约 20 分钟；同年中国卖出 800 万台 VCD 机。",
    "In February 1997 Hitachi's MP-EG1 went on sale, the world's first digital camera recording MPEG video, using an in-house MPEG-1 codec LSI and a 260 MB PC Card hard disk for about 20 minutes; China sold 8 million VCD players that year.",
    [
     5,
     3
    ]
   ],
   [
    1999,
    "end",
    "DVD 与 MPEG-2 普及后 VCD 迅速衰落：香港 VCD 工厂从 1999 年的 98 家减到 2012 年的 26 家。",
    "As DVD and MPEG-2 spread, VCD declined fast: Hong Kong's VCD factories fell from 98 in 1999 to 26 in 2012.",
    [
     3
    ]
   ],
   [
    2017,
    "end",
    "MPEG-1 已不再受任何必要专利约束，相关 MP3 专利也于 2017 年 12 月 30 日全部到期，可免费使用。",
    "MPEG-1 is no longer covered by any essential patents, and the related MP3 patents all expired on 30 December 2017, so it is royalty-free.",
    [
     0
    ]
   ]
  ],
  "now": [
   "MPEG-1 视频基本只在旧 VCD 和兼容场景里出现；它的音频层 Layer III（MP3）仍是最通用的音频格式之一。",
   "MPEG-1 video now survives mainly in legacy VCDs and compatibility uses; its Audio Layer III (MP3) remains one of the most common audio formats."
  ],
  "replaced": [
   "被支持隔行和更高码率的 MPEG-2（DVD、数字电视）取代，之后又被 MPEG-4 / H.264 取代。",
   "Replaced by MPEG-2 (DVD, digital TV), which added interlace and higher bitrates, and later by MPEG-4 / H.264."
  ],
  "refs": [
   {
    "t": "MPEG-1 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/MPEG-1"
   },
   {
    "t": "The true history of MPEG's first steps (Chiariglione)",
    "u": "https://blog.chiariglione.org/the-true-history-of-mpegs-first-steps"
   },
   {
    "t": "MPEG-1 development – Video (Riding the Media Bits)",
    "u": "https://ride.chiariglione.org/mpeg-1-development-video/"
   },
   {
    "t": "Video CD - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Video_CD"
   },
   {
    "t": "C-Cube Microsystems Inc. company history",
    "u": "https://company-histories.com/CCube-Microsystems-Inc-Company-History.html"
   },
   {
    "t": "Hitachi announces MPEG camera (1997-01-27)",
    "u": "https://www.hitachi.com/New/cnews/E/1997/970127B.html"
   }
  ]
 },
 "dv": {
  "stages": [
   [
    1993,
    "corp",
    "HD Digital VCR Conference 上 50 多家公司就家用数字录像机规格达成一致，1993 年 9 月最终批准，即 DV 的「Blue Book」，后来成为 IEC 61834 系列标准。",
    "At the HD Digital VCR Conference more than 50 companies agreed a home digital VCR specification, finally approved in September 1993; this \"Blue Book\" later became the IEC 61834 family of standards.",
    [
     0
    ]
   ],
   [
    1994,
    "ver",
    "1994 年 4 月 HD Digital VCR Association 已有 55 家公司参与制定规格：帧内 DCT 压缩约 5:1、视频 25 Mbit/s、16-bit PCM 音频、6.35 mm（1/4 英寸）宽磁带。",
    "By April 1994 55 companies took part in the HD Digital VCR Association: intra-frame DCT at about 5:1, 25 Mbit/s video, 16-bit PCM audio, 6.35 mm (1/4-inch) tape.",
    [
     0,
     2
    ]
   ],
   [
    1995,
    "mass",
    "1995 年 9 月 Sony 和 Panasonic 在日本推出第一批 DV 摄像机，售价 23.5 万–35 万日元；Panasonic 的 PV-DV1000 初版没有数字输出。",
    "In September 1995 Sony and Panasonic released the first DV camcorders in Japan at ¥235,000–350,000; Panasonic's first PV-DV1000 had no digital output.",
    [
     2
    ]
   ],
   [
    1995,
    "ver",
    "Sony DCR-VX1000 是第一台三 CCD（3 × 1/3 英寸、41 万像素）MiniDV 摄像机，也是第一台带 IEEE 1394（i.LINK / FireWire）的摄像机，能把数字视频直接拷进电脑，约 3,500 美元。",
    "The Sony DCR-VX1000 was the first three-CCD (3 × 1/3-inch, 410,000-pixel) MiniDV camcorder and the first camcorder with IEEE 1394 (i.LINK / FireWire), letting video be copied straight into a computer; about US$3,500.",
    [
     1,
     3
    ]
   ],
   [
    1995,
    "corp",
    "Panasonic 推出面向电子新闻采集的专业版 DVCPRO（1995），磁迹更宽、更耐用。",
    "Panasonic introduced DVCPRO (1995), a professional variant for electronic news gathering with wider, more robust tracks.",
    [
     0
    ]
   ],
   [
    1996,
    "rival",
    "Sony 以专业版 DVCAM（1996）回应；DVCAM 与 DVCPRO 同源但互不兼容。",
    "Sony answered with the professional DVCAM (1996); it shares DV's codec with DVCPRO but the two are mutually incompatible.",
    [
     0,
     4
    ]
   ],
   [
    1997,
    "ver",
    "Panasonic DVCPRO50（1997）把视频码率翻倍到 50 Mbit/s，面向更高质量的广播制作。",
    "Panasonic's DVCPRO50 (1997) doubled the video data rate to 50 Mbit/s for higher-quality broadcast production.",
    [
     0
    ]
   ],
   [
    1998,
    "ver",
    "Sony 从 1998 年 6 月起给带 i.LINK 的 VAIO 电脑配 DV 协议驱动和 DVgate 软件；此前 1997 年 Adaptec 的采集卡已能以原生 DV 码流采集。",
    "From June 1998 Sony shipped DV protocol drivers and DVgate software on i.LINK-equipped VAIO PCs; earlier, in 1997, an Adaptec card could already capture DV in native form.",
    [
     5
    ]
   ],
   [
    1999,
    "mass",
    "1999 年 10 月 5 日 Apple 发布 iMac DV：两个 400 Mbit/s FireWire 口加预装 iMovie，DV 摄像机 + 电脑剪辑进入普通家庭。",
    "On 5 October 1999 Apple introduced the iMac DV with two 400 Mbit/s FireWire ports and iMovie preinstalled, bringing DV-camcorder editing into ordinary homes.",
    [
     6
    ]
   ],
   [
    2000,
    "ver",
    "DVCPRO HD（2000）把 DV 系编码扩展到高清，约 100 Mbit/s。",
    "DVCPRO HD (2000) extended the DV family of codecs to high definition at about 100 Mbit/s.",
    [
     0
    ]
   ],
   [
    2003,
    "end",
    "HDV（2003）沿用同样的 MiniDV 磁带，但把编码换成 MPEG-2 帧间压缩录高清，DV 编码开始退场。",
    "HDV (2003) kept the same MiniDV tapes but switched to MPEG-2 inter-frame coding for HD, beginning DV's exit.",
    [
     0
    ]
   ],
   [
    2010,
    "end",
    "2010 年代存储卡和固态录制成为主流、厂商转向逐行扫描，DV 迅速过时（约）。",
    "In the 2010s memory-card and solid-state recording took over and makers moved to progressive scan, so DV quickly became obsolete (approx.).",
    [
     0
    ]
   ],
   [
    2025,
    "end",
    "Sony 宣布 2025 年 2 月停产 MiniDV 磁带（与可录 BD、MD 一起），且无后继型号。",
    "Sony announced it would end MiniDV cassette production (along with recordable BD and MD) in February 2025, with no successor.",
    [
     7
    ]
   ]
  ],
  "now": [
   "DV 已停产，只在档案数字化、老设备和复古拍摄中使用；DV 编码本身仍被 FFmpeg 等软件支持。",
   "DV is discontinued and lives on in archive digitization, legacy gear and retro shooting; the DV codec is still supported by software such as FFmpeg."
  ],
  "replaced": [
   "被 HDV（MPEG-2）取代，之后被 AVCHD / H.264 存储卡录制以及 XAVC 等文件式格式取代。",
   "Replaced by HDV (MPEG-2), then by AVCHD / H.264 card recording and file-based formats such as XAVC."
  ],
  "refs": [
   {
    "t": "DV (video format) - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/DV_(video_format)"
   },
   {
    "t": "The Consumer Electronics Hall of Fame: Sony DCR-VX1000 (IEEE Spectrum)",
    "u": "https://spectrum.ieee.org/the-consumer-electronics-hall-of-fame-sony-dcrvx1000"
   },
   {
    "t": "The DVC Format: Just Another Acronym? (Videomaker)",
    "u": "https://www.videomaker.com/article/f10/1942-the-dvc-format-just-another-acronym/"
   },
   {
    "t": "Sony DCR-VX1000 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_DCR-VX1000"
   },
   {
    "t": "This is how the first DV cameras changed video production forever (RedShark)",
    "u": "https://www.redsharknews.com/production/item/5847-this-is-how-the-first-dv-cameras-changed-video-production-forever"
   },
   {
    "t": "Sony and Microsoft Collaborate on Advanced IEEE 1394 Support",
    "u": "https://news.microsoft.com/source/2000/01/07/sony-and-microsoft-collaborate-on-advanced-ieee-1394-support-for-windows-based-pcs/"
   },
   {
    "t": "Apple Unveils All-New Family of iMacs Featuring Desktop Video",
    "u": "https://tech-insider.org/mac/research/1999/1005.html"
   },
   {
    "t": "Sony is halting production of recordable Blu-ray, MiniDiscs and MiniDV cassettes (Engadget)",
    "u": "https://www.engadget.com/home/home-theater/sony-is-halting-production-of-recordable-blu-ray-minidiscs-and-minidv-cassettes-140030225.html"
   }
  ]
 },
 "mpeg2": {
  "stages": [
   [
    1990,
    "idea",
    "1990 年 7 月 MPEG 在 Porto 开第一次 MPEG-2 会议，目标是比 MPEG-1 更高的码率（上限从 5 Mbit/s 提到 10 Mbit/s）和广播级隔行视频；9 月 Santa Clara 会议选 NTT 的 Sakae Okubo 主持需求组。",
    "In July 1990 MPEG held its first MPEG-2 session in Porto, targeting higher bitrates than MPEG-1 (limit raised from 5 to 10 Mbit/s) and broadcast interlaced video; in September at Santa Clara NTT's Sakae Okubo was chosen to chair the Requirements group.",
    [
     1
    ]
   ],
   [
    1991,
    "proto",
    "1991 年 11 月第二次 Kurihama 会议（JVC 承办）测试了 32 份视频提案，结果揭示了隔行图像编码的关键做法。",
    "At the second Kurihama meeting (hosted by JVC) in November 1991, 32 video proposals were tested, revealing key techniques for coding interlaced pictures.",
    [
     1
    ]
   ],
   [
    1992,
    "ver",
    "1992 年 7 月 Angra dos Reis 会议取消原本面向 HDTV 的 MPEG-3，把高清并入 MPEG-2 的范围。",
    "In July 1992 the Angra dos Reis meeting dropped the HDTV-oriented MPEG-3 and folded HD into MPEG-2's scope.",
    [
     1
    ]
   ],
   [
    1993,
    "ver",
    "1993 年 9 月 Brussels 会议确定 profile / level 体系：Simple、Main、SNR Scalable、Spatial Scalable、High 等 profile，Low（SIF）到 High（HDTV）多个 level；11 月 Seoul 会议通过委员会草案。",
    "In September 1993 the Brussels meeting adopted the profile/level scheme: Simple, Main, SNR Scalable, Spatial Scalable and High profiles, with levels from Low (SIF) to High (HDTV); the Committee Draft was approved in Seoul that November.",
    [
     1,
     0
    ]
   ],
   [
    1994,
    "paper",
    "1994 年 11 月 MPEG-2 获批，视频部分与 ITU-T 联合制定，同时是 H.262（Okubo 任 ITU-T 协调人），1996 年以 ISO/IEC 13818 正式出版；6 Mbit/s 下可达演播室复合电视画质。",
    "MPEG-2 was approved in November 1994; the video part was developed jointly with ITU-T as H.262 (with Okubo as ITU-T coordinator) and published as ISO/IEC 13818 in 1996; at 6 Mbit/s it matched studio composite-TV quality.",
    [
     0,
     1
    ]
   ],
   [
    1994,
    "mass",
    "1994 年 6 月 17 日 DirecTV / USSB 开播，是第一个全数字电视服务，也是第一个采用 MPEG-2 视频的消费产品，压缩技术由 Thomson 参与开发。",
    "DirecTV / USSB launched on 17 June 1994, the first all-digital TV service and the first consumer product to use MPEG-2 video, with compression developed with Thomson.",
    [
     2
    ]
   ],
   [
    1994,
    "corp",
    "C-Cube 推出多模式视频解码芯片 CL9100（1994），1997 年又推出号称第一颗单芯片 MPEG-2 编解码器 DVx。",
    "C-Cube introduced the multimode CL9100 video decoder (1994) and in 1997 the DVx, billed as the first single-chip MPEG-2 codec.",
    [
     6
    ]
   ],
   [
    1996,
    "mass",
    "1996 年 11 月 1 日 Toshiba SD-3000 在日本发售（77,000 日元），DVD-Video 用 MPEG-2 视频进入家庭；美国 1997 年 3 月上市。DVB、ATSC 数字电视也都以 MPEG-2 为标准。",
    "The Toshiba SD-3000 went on sale in Japan on 1 November 1996 (¥77,000), bringing MPEG-2 DVD-Video home; US sales followed in March 1997. DVB and ATSC digital TV also standardized on MPEG-2.",
    [
     3,
     0
    ]
   ],
   [
    2000,
    "ver",
    "2000 年 8 月 25 日 Hitachi DZ-MV100 在日本发售，第一台 DVD-RAM 摄像机，用 DSP6 做 MPEG-2 压缩，写入 8 cm 双面 DVD-RAM（每面 1.46 GB）。",
    "Hitachi's DZ-MV100 went on sale in Japan on 25 August 2000, the first DVD-RAM camcorder, using a DSP6 for MPEG-2 compression onto 8 cm double-sided DVD-RAM (1.46 GB per side).",
    [
     4
    ]
   ],
   [
    2003,
    "ver",
    "JVC GR-HD1 是第一台消费级高清摄像机，用 MPEG-2 在 MiniDV 带上录 1280×720/30p；2003 年 9 月 JVC、Sony、Canon、Sharp 组成 HDV 联盟。",
    "The JVC GR-HD1 was the first consumer HD camcorder, recording 1280×720/30p MPEG-2 on MiniDV tape; in September 2003 JVC, Sony, Canon and Sharp formed the HDV consortium.",
    [
     5
    ]
   ],
   [
    2003,
    "rival",
    "H.264 / AVC（2003）在同等画质下码率约为 MPEG-2 的一半，之后又有 H.265 / HEVC，逐步取代 MPEG-2（约）。",
    "H.264 / AVC (2003) needs roughly half MPEG-2's bitrate for the same quality, followed by H.265 / HEVC, gradually displacing MPEG-2 (approx.).",
    [
     0
    ]
   ],
   [
    2018,
    "end",
    "MPEG LA 专利池约 640 项专利；最后一项美国 MPEG-2 专利于 2018 年 2 月 23 日到期。",
    "MPEG LA's pool held about 640 patents; the last US MPEG-2 patent expired on 23 February 2018.",
    [
     0
    ]
   ]
  ],
  "now": [
   "MPEG-2 仍在 DVD、部分地面 / 卫星数字电视和广播基础设施中大量使用，并已基本免专利费。",
   "MPEG-2 remains widely used in DVD, some terrestrial / satellite digital TV and broadcast infrastructure, and is now essentially royalty-free."
  ],
  "replaced": [
   "新录制、流媒体和新一代广播被 H.264 / AVC、H.265 / HEVC 取代；摄像机上 HDV 被 AVCHD 取代。",
   "For new recording, streaming and next-generation broadcast it was replaced by H.264 / AVC and H.265 / HEVC; in camcorders HDV gave way to AVCHD."
  ],
  "refs": [
   {
    "t": "MPEG-2 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/MPEG-2"
   },
   {
    "t": "MPEG-2 development (Riding the Media Bits, Chiariglione)",
    "u": "https://ride.chiariglione.org/?p=145"
   },
   {
    "t": "25 Years Ago Today: DirecTV Is Born (Sound & Vision)",
    "u": "https://www.soundandvision.com/content/25-years-ago-today-directv-born"
   },
   {
    "t": "Toshiba Introduces its First DVD-Video Player in Japan (1996)",
    "u": "https://tech-insider.org/digital-video/research/1996/0926-a.html"
   },
   {
    "t": "Hitachi DVD-RAM camcorder press release (2000-06-08)",
    "u": "https://www.hitachi.com/New/cnews/E/2000/000608B.html"
   },
   {
    "t": "HDV - Adam Wilt",
    "u": "https://adamwilt.com/HDV/"
   },
   {
    "t": "C-Cube Microsystems Inc. company history",
    "u": "https://company-histories.com/CCube-Microsystems-Inc-Company-History.html"
   }
  ]
 },
 "mpeg4": {
  "stages": [
   [
    1993,
    "idea",
    "1992 年 11 月有人提出「Very low bitrate audio-visual coding」新项目，1993 年 7 月获 JTC1 批准，这就是 MPEG-4，最初瞄准极低码率的移动和网络视频。",
    "A new project, \"Very low bitrate audio-visual coding\", was proposed in November 1992 and approved by JTC1 in July 1993; this became MPEG-4, initially aimed at very low bitrate mobile and network video.",
    [
     1
    ]
   ],
   [
    1995,
    "proto",
    "1995 年 7 月发出第一次 MPEG-4 提案征集，11 月在洛杉矶 Hughes Aircraft 做视频主观测试。",
    "The first MPEG-4 call for proposals went out in July 1995, and video subjective tests were held at Hughes Aircraft in Los Angeles that November.",
    [
     1
    ]
   ],
   [
    1996,
    "ver",
    "1996 年 1 月确定第一个 Verification Model，引入基于对象的编码（VOP、形状编码）。",
    "The first Verification Model was defined in January 1996, introducing object-based coding (VOPs and shape coding).",
    [
     1,
     0
    ]
   ],
   [
    1996,
    "rival",
    "ITU-T VCEG 的 H.263 于 1996 年 3 月 20 日发布，面向低码率视频电话；MPEG-4 Part 2 部分以它为基础，能正确解码基本 H.263 码流，二者在手机上长期并存。",
    "ITU-T VCEG's H.263 was published on 20 March 1996 for low-bitrate videotelephony; MPEG-4 Part 2 is partly based on it and decodes baseline H.263 bitstreams, and the two coexisted on phones for years.",
    [
     2,
     0
    ]
   ],
   [
    1998,
    "paper",
    "MPEG-4 Version 1 于 1998 年 12 月成为国际标准，视觉部分为 ISO/IEC 14496-2（第一版 1999 年出版）。",
    "MPEG-4 Version 1 became an International Standard in December 1998; its visual part is ISO/IEC 14496-2 (first edition published 1999).",
    [
     1,
     0
    ]
   ],
   [
    1999,
    "mass",
    "1999 年 4 月 27 日 Sharp 发布 VN-EZ1「Internet ViewCam」，世界第一台采用 MPEG-4 的数码相机，在 SmartMedia 卡上录 160×120 / 320×240 视频，679 美元。",
    "On 27 April 1999 Sharp announced the VN-EZ1 \"Internet ViewCam\", the first digital camera to adopt MPEG-4, recording 160×120 / 320×240 video to SmartMedia; US$679.",
    [
     3
    ]
   ],
   [
    1999,
    "corp",
    "法国的 Jérôme Rota（Gej）破解 Microsoft MPEG-4 v3 编码器做成 DivX ;-) 3.11，在网上流行；2000 年他与 Jordan Greenhall 创立 DivXNetworks，从头开发 MPEG-4 编码器。",
    "In France Jérôme Rota (Gej) hacked Microsoft's MPEG-4 v3 codec into DivX ;-) 3.11, which spread online; in 2000 he and Jordan Greenhall founded DivXNetworks to write an MPEG-4 encoder from scratch.",
    [
     4
    ]
   ],
   [
    2001,
    "ver",
    "2001 年 1 月 Project Mayo 开源 OpenDivX，7 月推出 DivX 4.0，其他开发者另起 Xvid；同年第二版标准包含 Advanced Simple Profile，加入 B 帧、四分之一像素运动补偿、全局运动补偿和隔行支持。",
    "Project Mayo open-sourced OpenDivX in January 2001 and DivX 4.0 followed in July, while other developers started Xvid; the 2001 second edition included the Advanced Simple Profile with B-frames, quarter-pixel and global motion compensation and interlace support.",
    [
     4,
     0
    ]
   ],
   [
    2001,
    "mass",
    "2001 年 10 月 1 日 NTT DoCoMo FOMA 3G 开通，Panasonic 制造的 P2101V 支持视频电话，可用 ASF（MPEG-4）格式录像。",
    "NTT DoCoMo's FOMA 3G launched on 1 October 2001; the Panasonic-made P2101V supported video calls and recorded video as ASF (MPEG-4).",
    [
     5
    ]
   ],
   [
    2003,
    "ver",
    "2003 年 11 月 7 日 Sanyo Xacti DMX-C1 发售，以 MPEG-4 在 SD 卡上录 640×480 / 30 fps，1 GB 约 1 小时，75,000 日元。",
    "The Sanyo Xacti DMX-C1 went on sale on 7 November 2003, recording 640×480 / 30 fps MPEG-4 to SD, about 1 hour per GB; ¥75,000.",
    [
     6
    ]
   ],
   [
    2004,
    "mass",
    "2004 年 6 月基于 ARTPEC-2 的 AXIS 210 上市，可同时输出 MPEG-4 与 Motion JPEG；12 月 Axis 宣布所有专业网络视频产品都支持双码流。",
    "The ARTPEC-2-based AXIS 210 shipped in June 2004 with simultaneous MPEG-4 and Motion JPEG streams; in December Axis announced dual-format streaming across all its professional network video products.",
    [
     7
    ]
   ],
   [
    2008,
    "end",
    "H.264 / MPEG-4 Part 10 (AVC) 吸收并改进了四分之一像素运动补偿等技术并加入环内去块滤波，2008 年起网络摄像机和手机纷纷转向 H.264（约）。",
    "H.264 / MPEG-4 Part 10 (AVC) refined techniques such as quarter-pixel motion compensation and added an in-loop deblocking filter; from 2008 network cameras and phones moved to H.264 (approx.).",
    [
     0
    ]
   ],
   [
    2023,
    "end",
    "MPEG-4 Part 2 的最后一项美国专利于 2023 年 11 月 14 日到期。",
    "The last US MPEG-4 Part 2 patent expired on 14 November 2023.",
    [
     0
    ]
   ]
  ],
  "now": [
   "MPEG-4 Part 2（DivX / Xvid、3GP 中的 MPEG-4 SP）已基本只存在于旧文件和兼容场景，专利基本到期。",
   "MPEG-4 Part 2 (DivX / Xvid, MPEG-4 SP in 3GP) now survives mainly in old files and compatibility uses, with its patents essentially expired."
  ],
  "replaced": [
   "被 H.264 / AVC（MPEG-4 Part 10）取代，之后又有 H.265 / HEVC 和 AV1。",
   "Replaced by H.264 / AVC (MPEG-4 Part 10), and later H.265 / HEVC and AV1."
  ],
  "refs": [
   {
    "t": "MPEG-4 Part 2 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/MPEG-4_Part_2"
   },
   {
    "t": "The MPEG-4 Book: 1.5 MPEG-4 Schedule (O'Reilly)",
    "u": "https://www.oreilly.com/library/view/mpeg-4-book-the/0130616214/0130616214_ch01lev1sec5.html"
   },
   {
    "t": "H.263 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/H.263"
   },
   {
    "t": "Sharp VN-EZ1 (1999) - Digitalkameramuseum",
    "u": "https://www.digitalkameramuseum.de/en/cameras/item/sharp-vn-ez1"
   },
   {
    "t": "DivX - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/DivX"
   },
   {
    "t": "P2101V (ケータイ Watch)",
    "u": "https://k-tai.watch.impress.co.jp/cda/article/showcase_top/6206.html"
   },
   {
    "t": "Sanyo Xacti DMX-C1 (AV Watch 2003-10-01)",
    "u": "https://av.watch.impress.co.jp/docs/20031001/sanyo.htm"
   },
   {
    "t": "Simultaneous MPEG-4 and M-JPEG (Security Magazine)",
    "u": "https://www.securitymagazine.com/articles/print/76832-simultaneous-mpeg-4-and-m-jpeg-1"
   }
  ]
 },
 "h264": {
  "stages": [
   [
    1998,
    "idea",
    "ITU-T VCEG（主席 Gary Sullivan）在 1998 年初立项 H.26L，目标是比当时已有标准把编码效率提高一倍。",
    "In early 1998 ITU-T VCEG (chaired by Gary Sullivan) started the H.26L project, aiming to double coding efficiency over existing standards.",
    [
     0
    ]
   ],
   [
    1999,
    "proto",
    "1999 年 8 月 VCEG 采纳了 H.26L 的第一版设计草案（测试模型），此后在其上不断加入工具；2000 年 Thomas Wiegand 出任 VCEG 联合主席。",
    "In August 1999 VCEG adopted the first draft design (test model) for H.26L and kept adding tools to it; Thomas Wiegand became VCEG co-chair in 2000.",
    [
     0
    ]
   ],
   [
    2001,
    "corp",
    "2001 年 12 月 VCEG 与 ISO/IEC MPEG 组成 Joint Video Team（JVT），由 Sullivan、Wiegand 和 Motorola 的 Ajay Luthra 主持，把 H.26L 定稿为两组织共同标准。",
    "In December 2001 VCEG and ISO/IEC MPEG formed the Joint Video Team (JVT), chaired by Sullivan, Wiegand and Motorola's Ajay Luthra, to finalize H.26L as a joint standard.",
    [
     0
    ]
   ],
   [
    2003,
    "paper",
    "规范 2003 年 3 月获正式批准，以 ITU-T H.264 和 MPEG-4 Part 10（AVC）发布；同年 7 月 Wiegand、Sullivan、Bjøntegaard、Luthra 在 IEEE TCSVT 13 卷 7 期发表《Overview of the H.264/AVC Video Coding Standard》，介绍可变块运动补偿、多参考帧、整数变换、CABAC 等工具。",
    "The specification was formally approved in March 2003 and published as ITU-T H.264 and MPEG-4 Part 10 (AVC); in July 2003 Wiegand, Sullivan, Bjøntegaard and Luthra published \"Overview of the H.264/AVC Video Coding Standard\" in IEEE TCSVT vol. 13 no. 7, covering variable block-size motion compensation, multiple reference frames, the integer transform and CABAC.",
    [
     0,
     1
    ]
   ],
   [
    2004,
    "ver",
    "2004 年 7 月完成 Fidelity Range Extensions（FRExt），加入 High 系列 profile：8×8 变换、更高位深和 4:2:2 / 4:4:4 色度，使 H.264 能用于高清广播、蓝光和专业制作。",
    "The Fidelity Range Extensions (FRExt) were finalized in July 2004, adding the High family of profiles: an 8x8 transform, higher bit depths and 4:2:2 / 4:4:4 chroma, making H.264 fit for HD broadcast, Blu-ray and professional work.",
    [
     0
    ]
   ],
   [
    2004,
    "mass",
    "Sony PlayStation Portable 于 2004 年 12 月 12 日在日本发售，UMD 影片用 H.264/AVC Main Profile Level 3 编码，是最早大规模出货的 H.264 消费设备之一。",
    "Sony's PlayStation Portable went on sale in Japan on 12 December 2004; its UMD movies were encoded in H.264/AVC Main Profile Level 3, making it one of the first mass-shipped H.264 consumer devices.",
    [
     2
    ]
   ],
   [
    2005,
    "mass",
    "2005 年 10 月 Apple 第五代 iPod 加入视频播放，片源为 H.264（320×240），配合 iTunes 视频商店，把 H.264 带进便携播放器主流。",
    "In October 2005 Apple's fifth-generation iPod added video playback using H.264 (320x240) content from the iTunes Store, bringing H.264 into mainstream portable players.",
    [
     3
    ]
   ],
   [
    2006,
    "mass",
    "Sony 与 Panasonic 2006 年推出基于 H.264 的 AVCHD 摄像机格式，首批机型 Sony HDR-UX1、Panasonic HDC-SD1 当年上市；同年 Blu-ray 播放机上市，H.264 是其三种强制视频编码之一。",
    "Sony and Panasonic introduced the H.264-based AVCHD camcorder format in 2006, with the Sony HDR-UX1 and Panasonic HDC-SD1 shipping that year; Blu-ray players launched the same year with H.264 as one of three mandatory video codecs.",
    [
     4,
     0
    ]
   ],
   [
    2007,
    "ver",
    "2007 年 11 月完成可伸缩扩展 SVC（时间、空间、质量分层），后来用于视频会议。",
    "The Scalable Video Coding (SVC) extension, with temporal, spatial and quality layers, was completed in November 2007 and later used in video conferencing.",
    [
     0
    ]
   ],
   [
    2009,
    "ver",
    "2009 年 11 月完成多视点扩展 MVC，成为 Blu-ray 3D 的立体编码。",
    "The Multiview Video Coding (MVC) extension was completed in November 2009 and became the stereo coding of Blu-ray 3D.",
    [
     0
    ]
   ],
   [
    2013,
    "end",
    "继任者 HEVC/H.265 于 2013 年 4 月获 ITU-T 批准，同画质再省约一半码率，逐步接管 4K 电视、监控和手机录像。",
    "Its successor HEVC/H.265 was approved by ITU-T in April 2013, saving roughly another half of the bitrate at equal quality and gradually taking over 4K TV, surveillance and phone recording.",
    [
     5
    ]
   ],
   [
    2018,
    "rival",
    "2018 年 3 月 Alliance for Open Media 发布免版税的 AV1，与 H.264/HEVC 竞争网络视频；H.264 专利池由 Via Licensing Alliance（原 MPEG LA）管理。",
    "In March 2018 the Alliance for Open Media finalized the royalty-free AV1 to compete with H.264/HEVC for web video; H.264 patents are pooled by Via Licensing Alliance (formerly MPEG LA).",
    [
     5,
     0
    ]
   ]
  ],
  "now": [
   "H.264 仍是兼容性最好的视频编码，几乎所有浏览器、手机、相机和监控设备都支持，大量网络视频和直播仍以它为保底格式。",
   "H.264 remains the most compatible video codec, supported by virtually every browser, phone, camera and surveillance device, and is still the fallback format for much web video and live streaming."
  ],
  "replaced": [
   "在高分辨率与高码率场景被 HEVC/H.265、AV1 以及 VVC/H.266 逐步替代，但凭兼容性尚未被淘汰。",
   "Being displaced by HEVC/H.265, AV1 and VVC/H.266 for high-resolution and high-bitrate uses, but not retired thanks to its compatibility."
  ],
  "refs": [
   {
    "t": "Advanced Video Coding - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Advanced_Video_Coding"
   },
   {
    "t": "Wiegand et al., Overview of the H.264/AVC Video Coding Standard (IEEE TCSVT 2003)",
    "u": "https://iphome.hhi.de/wiegand/assets/pdfs/csvt_overview_0305.pdf"
   },
   {
    "t": "Universal Media Disc - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Universal_Media_Disc"
   },
   {
    "t": "iPod Classic - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/IPod_Classic"
   },
   {
    "t": "AVCHD - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/AVCHD"
   },
   {
    "t": "High Efficiency Video Coding - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding"
   }
  ]
 },
 "prores": {
  "stages": [
   [
    2004,
    "rival",
    "Avid 的 DNxHD 2004 年 9 月首先用于 Avid DS Nitris，2008 年 2 月被 SMPTE 认定符合 VC-3 标准，一直是 ProRes 在剪辑中间编码上的主要对手。",
    "Avid's DNxHD first appeared in Avid DS Nitris in September 2004 and was confirmed compliant with SMPTE VC-3 in February 2008; it has been ProRes's main rival as an editing intermediate.",
    [
     1
    ]
   ],
   [
    2005,
    "idea",
    "ProRes 之前 Apple 用 Apple Intermediate Codec 把 HDV 长 GOP 素材转成便于剪辑的帧内格式；ProRes 是它的继任者（约）。",
    "Before ProRes, Apple used the Apple Intermediate Codec to turn long-GOP HDV footage into an edit-friendly intra-frame format; ProRes succeeded it (approx.).",
    [
     0
    ]
   ],
   [
    2007,
    "mass",
    "2007 年 4 月 NAB 上 Apple 随 Final Cut Studio 2 推出 ProRes 422 与 ProRes 422 HQ：基于 DCT 的帧内压缩、10-bit 4:2:2，1080p 约 147 / 220 Mbps，号称视觉无损且解码负担轻。",
    "At NAB in April 2007 Apple introduced ProRes 422 and ProRes 422 HQ with Final Cut Studio 2: DCT-based intra-frame compression, 10-bit 4:2:2, about 147 / 220 Mbps at 1080p, perceptually lossless and light to decode.",
    [
     0,
     2
    ]
   ],
   [
    2009,
    "ver",
    "2009 年 Final Cut Studio（3）加入 ProRes 4444（支持 alpha 通道）以及更低码率的 ProRes 422 LT（约 102 Mbps）和 422 Proxy（约 45 Mbps）。",
    "Final Cut Studio (2009) added ProRes 4444 (with an alpha channel) plus the lower-rate ProRes 422 LT (about 102 Mbps) and 422 Proxy (about 45 Mbps).",
    [
     3,
     2
    ]
   ],
   [
    2009,
    "mass",
    "AJA 在 NAB 2009 发布 Ki Pro 便携录机，2009 年开始出货，售价 3995 美元，是首个能直接从摄影机信号录成 10-bit ProRes 422 的硬件。",
    "AJA unveiled the Ki Pro portable recorder at NAB 2009 and shipped it later that year at US$3,995; it was the first hardware to record 10-bit ProRes 422 directly from a camera feed.",
    [
     4
    ]
   ],
   [
    2010,
    "mass",
    "ARRI Alexa 2010 年上市，可在机内直接录 ProRes 到 SxS 卡，ProRes 由此从剪辑格式变成拍摄格式，此后 Panasonic、Sony、Blackmagic、Atomos 等陆续支持。",
    "ARRI's Alexa launched in 2010 with in-camera ProRes recording to SxS cards, turning ProRes from an editing format into an acquisition format; Panasonic, Sony, Blackmagic, Atomos and others followed.",
    [
     0
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 6 月 Final Cut Pro X 10.1.2 加入 ProRes 4444 XQ（1080p 约 500 Mbps），面向高动态范围素材，ARRI Alexa 是首台支持它的摄影机。",
    "In June 2014 Final Cut Pro X 10.1.2 added ProRes 4444 XQ (about 500 Mbps at 1080p) for high-dynamic-range material, with the ARRI Alexa the first camera to support it.",
    [
     5,
     2
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 4 月 NAB 推出 ProRes RAW / RAW HQ，把 ProRes 的高效压缩用在传感器原始拜耳数据上，首批由 Atomos 录机与 DJI Zenmuse X7 支持。",
    "At NAB in April 2018 Apple introduced ProRes RAW / RAW HQ, applying ProRes-style efficient compression to raw Bayer sensor data, first supported by Atomos recorders and the DJI Zenmuse X7.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "ProRes 获 2020 年 Engineering Emmy 技术成就奖。",
    "ProRes received an Engineering Emmy Award for Outstanding Achievement in Technology in 2020.",
    [
     0
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 Apple M1 Pro / M1 Max 芯片加入 ProRes 硬件编解码引擎；同年 iPhone 13 Pro 成为首批能录 ProRes 的手机（iOS 15.1 起，最高 4K30）。",
    "In 2021 Apple's M1 Pro / M1 Max chips added hardware ProRes encode/decode engines, and the iPhone 13 Pro became the first phone line to record ProRes (from iOS 15.1, up to 4K30).",
    [
     0,
     7
    ]
   ],
   [
    2023,
    "ver",
    "iPhone 15 Pro 加入 ProRes Log（Apple Log），并可经 USB-C 直接录到外接 SSD，4K60 ProRes 不再受机内存储限制。",
    "The iPhone 15 Pro added ProRes Log (Apple Log) and direct recording to external SSDs over USB-C, freeing 4K60 ProRes from internal storage limits.",
    [
     8
    ]
   ],
   [
    2025,
    "ver",
    "Final Cut Camera 2.0 让 iPhone 17 Pro 录 ProRes RAW 并支持 Apple Log 2 与 genlock 同步，ProRes 家族在手机上补齐 RAW。",
    "Final Cut Camera 2.0 lets the iPhone 17 Pro record ProRes RAW with Apple Log 2 and genlock sync, completing the ProRes family on the phone.",
    [
     9
    ]
   ]
  ],
  "now": [
   "ProRes 是影视后期事实上的中间编码与交付格式之一，覆盖 Proxy 到 4444 XQ 和 RAW，从电影机、外录机到 iPhone、Mac 硬件都支持。",
   "ProRes is a de facto intermediate and delivery format in post-production, spanning Proxy to 4444 XQ and RAW, supported from cinema cameras and external recorders to iPhones and Mac hardware."
  ],
  "replaced": [
   "尚未被替代；主要竞争者是 Avid DNxHD/DNxHR，以及 Blackmagic RAW、REDCODE 等 RAW 格式。",
   "Not replaced; its main competitors are Avid DNxHD/DNxHR and raw formats such as Blackmagic RAW and REDCODE."
  ],
  "refs": [
   {
    "t": "Apple ProRes - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Apple_ProRes"
   },
   {
    "t": "Avid DNxHD - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Avid_DNxHD"
   },
   {
    "t": "About Apple ProRes - Apple Support",
    "u": "https://support.apple.com/en-us/102207"
   },
   {
    "t": "Apple ProRes White Paper (2009)",
    "u": "https://www.apple.com/euro/final-cut-pro/f/generic/docs/Apple_ProRes_White_Paper.pdf"
   },
   {
    "t": "AJA Ki Pro is now shipping (ProVideo Coalition)",
    "u": "https://www.provideocoalition.com/aja_ki_pro_is_now_shipping/"
   },
   {
    "t": "Apple Introduces New ProRes 4444 XQ Codec (No Film School)",
    "u": "https://nofilmschool.com/2014/06/apple-new-prores-4444-xq-codec-final-cut-x-10-1-2"
   },
   {
    "t": "ProRes RAW is here (Newsshooter)",
    "u": "https://www.newsshooter.com/2018/04/06/prores-raw-is-here/"
   },
   {
    "t": "Apple unveils iPhone 13 Pro and iPhone 13 Pro Max (Apple Newsroom)",
    "u": "https://www.apple.com/newsroom/2021/09/apple-unveils-iphone-13-pro-and-iphone-13-pro-max-more-pro-than-ever-before/"
   },
   {
    "t": "Apple unveils iPhone 15 Pro and iPhone 15 Pro Max (Apple Newsroom)",
    "u": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/"
   },
   {
    "t": "Apple announces Final Cut Camera 2.0 (Apple Newsroom)",
    "u": "https://www.apple.com/newsroom/2025/09/apple-announces-final-cut-camera-2-0/"
   }
  ]
 },
 "raw": {
  "stages": [
   [
    2003,
    "proto",
    "Dalsa 在 NAB 2003 展出 Origin 原型：4096×2048 帧传输 CCD，输出未压缩 16-bit RAW（每帧约 16.7 MB），通常录到 Codex 录机，是最早的 4K RAW 电影机。",
    "Dalsa showed the Origin prototype at NAB 2003: a 4096x2048 frame-transfer CCD outputting uncompressed 16-bit raw (about 16.7 MB per frame), usually recorded to a Codex recorder; it was the first 4K raw cinema camera.",
    [
     0
    ]
   ],
   [
    2006,
    "mass",
    "Dalsa Origin 约 2006 年起可广泛租用；未压缩 RAW 数据量极大，只适合高预算电影。",
    "The Dalsa Origin became widely available around 2006; its uncompressed raw data volume limited it to big-budget films.",
    [
     0
    ]
   ],
   [
    2006,
    "corp",
    "Oakley 创始人 Jim Jannard 2005 年创立 RED，2006 年 NAB 发布 RED ONE 并接受预订，主打把 4K RAW 压缩到可用码率。",
    "Oakley founder Jim Jannard founded RED in 2005 and announced the RED ONE with pre-orders at NAB 2006, promising 4K raw compressed to a practical data rate.",
    [
     1
    ]
   ],
   [
    2007,
    "mass",
    "Silicon Imaging 2006 年 11 月发布 SI-2K，约 2007 年 4 月出货，用 CineForm RAW 编码把 2K 拜耳数据压缩后直接录盘，是最早出货的压缩 RAW 电影机之一，后来拍了《Slumdog Millionaire》。",
    "Silicon Imaging announced the SI-2K in November 2006 and shipped it around April 2007, recording 2K Bayer data direct to disk with the CineForm RAW codec; one of the first compressed-raw cinema cameras to ship, it later shot Slumdog Millionaire.",
    [
     2
    ]
   ],
   [
    2007,
    "mass",
    "RED ONE 2007 年 8 月开始交付，4K Mysterium 传感器配 REDCODE RAW 小波压缩，以低价把压缩 RAW 带进主流电影与独立制作。",
    "The RED ONE began shipping in August 2007, pairing the 4K Mysterium sensor with REDCODE RAW wavelet compression and bringing compressed raw to mainstream and indie filmmaking at a low price.",
    [
     1
    ]
   ],
   [
    2008,
    "ver",
    "Adobe 在 NAB 2008 发起 CinemaDNG，用基于 DNG 的开放、免授权格式交换电影 RAW 帧序列，后被 Blackmagic 等厂商采用。",
    "Adobe launched the CinemaDNG initiative at NAB 2008, an open, license-free DNG-based format for exchanging cinema raw frame sequences, later adopted by Blackmagic and others.",
    [
     3
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 4 月 Apple 推出 ProRes RAW / RAW HQ，Atomos Shogun Inferno、Sumo 19 固件更新即可外录，次月 DJI Inspire 2 / Zenmuse X7 也支持。",
    "In April 2018 Apple introduced ProRes RAW / RAW HQ; Atomos Shogun Inferno and Sumo 19 recorders gained it via firmware, followed the next month by the DJI Inspire 2 / Zenmuse X7.",
    [
     4
    ]
   ],
   [
    2018,
    "rival",
    "Blackmagic 在 IBC 2018 发布 Blackmagic RAW（BRAW），随后从自家相机移除 CinemaDNG；Grant Petty 称原因之一是有公司对 CinemaDNG 提出专利侵权主张。",
    "Blackmagic announced Blackmagic RAW (BRAW) at IBC 2018 and then dropped CinemaDNG from its cameras; Grant Petty cited, among other reasons, a patent infringement claim made against CinemaDNG.",
    [
     5
    ]
   ],
   [
    2019,
    "rival",
    "Apple 向 PTAB 申请复审 RED 的机内压缩 RAW 专利（US 9,245,314），2019 年 11 月 8 日被驳回，RED 的专利继续限制其他厂商的机内压缩 RAW。",
    "Apple petitioned the PTAB to review RED's in-camera compressed-raw patent (US 9,245,314); the petition was denied on 8 November 2019, leaving RED's patent to constrain other makers' in-camera compressed raw.",
    [
     6
    ]
   ],
   [
    2024,
    "corp",
    "Nikon 于 2024 年 4 月完成收购 RED（约 8700 万美元），连同 REDCODE 专利并入 Nikon。",
    "Nikon completed its acquisition of RED in April 2024 for about US$87 million, bringing REDCODE patents in-house.",
    [
     1
    ]
   ],
   [
    2025,
    "mass",
    "iPhone 17 Pro / Pro Max 通过 Final Cut Camera 2.0 录 ProRes RAW，是首批能拍 ProRes RAW 的智能手机。",
    "Through Final Cut Camera 2.0, the iPhone 17 Pro / Pro Max became the first smartphones able to capture ProRes RAW.",
    [
     7
    ]
   ]
  ],
  "now": [
   "RAW 视频已是电影机标配，主流格式包括 REDCODE RAW、ARRIRAW、Blackmagic RAW、ProRes RAW、Canon Cinema RAW 与 Nikon N-RAW，并已进入无反和手机。",
   "Raw video is standard on cinema cameras, with REDCODE RAW, ARRIRAW, Blackmagic RAW, ProRes RAW, Canon Cinema RAW and Nikon N-RAW as main formats, and it has reached mirrorless cameras and phones."
  ],
  "replaced": [
   "未被替代；未压缩 RAW 和开放的 CinemaDNG 已基本被各家专有的压缩 RAW 格式取代。",
   "Not replaced; uncompressed raw and the open CinemaDNG have largely given way to vendors' proprietary compressed raw formats."
  ],
  "refs": [
   {
    "t": "Dalsa Origin - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Dalsa_Origin"
   },
   {
    "t": "RED Digital Cinema - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/RED_Digital_Cinema"
   },
   {
    "t": "Silicon Imaging - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Silicon_Imaging"
   },
   {
    "t": "CinemaDNG - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/CinemaDNG"
   },
   {
    "t": "ProRes RAW is here (Newsshooter)",
    "u": "https://www.newsshooter.com/2018/04/06/prores-raw-is-here/"
   },
   {
    "t": "The Obsolescence of CinemaDNG (Y.M.Cinema)",
    "u": "https://ymcinema.com/2019/03/19/the-obsolescence-of-cinemadng-from-digital-negative-to-blackmagic-raw"
   },
   {
    "t": "Apple tried and failed to break RED's stranglehold on RAW video (Engadget)",
    "u": "https://www.engadget.com/2019/11/11/apple-prores-raw-red-patent-dispute/"
   },
   {
    "t": "Apple announces Final Cut Camera 2.0 (Apple Newsroom)",
    "u": "https://www.apple.com/newsroom/2025/09/apple-announces-final-cut-camera-2-0/"
   }
  ]
 },
 "uhd4k": {
  "stages": [
   [
    2000,
    "proto",
    "JVC 推出首台 4K 数字电影放映机，4K 最早出现在电影院放映端。",
    "JVC introduced the first 4K digital cinema projector, so 4K first appeared on the cinema projection side.",
    [
     0
    ]
   ],
   [
    2003,
    "proto",
    "Dalsa 在 NAB 2003 展出 Origin 原型，4096×2048，被视为首台商用 4K 电影摄影机，约 2006 年起广泛可租。",
    "Dalsa showed the Origin prototype at NAB 2003 at 4096x2048, regarded as the first commercially available 4K cinema camera; it became widely available around 2006.",
    [
     1,
     0
    ]
   ],
   [
    2004,
    "corp",
    "Sony 2004 年开始提供 4K 数字电影放映机（SXRD），4K 放映在之后几年逐步替代胶片放映。",
    "Sony began offering 4K digital cinema projectors (SXRD) in 2004, and 4K projection gradually replaced film projection over the following years.",
    [
     0
    ]
   ],
   [
    2005,
    "ver",
    "Digital Cinema Initiatives（DCI）2005 年发布数字电影规范，定义 4K 为 4096×2160。",
    "Digital Cinema Initiatives (DCI) published its specification in 2005, defining 4K as 4096x2160.",
    [
     0
    ]
   ],
   [
    2007,
    "mass",
    "RED ONE 2007 年 8 月交付，以 4K Mysterium 传感器和 REDCODE RAW 让 4K 拍摄进入中低预算制作；同年 SMPTE 发布 UHDTV 标准。",
    "The RED ONE shipped in August 2007, its 4K Mysterium sensor and REDCODE RAW bringing 4K capture to mid- and low-budget production; SMPTE published UHDTV standards the same year.",
    [
     2,
     0
    ]
   ],
   [
    2010,
    "ver",
    "YouTube 2010 年开始支持 4K 上传，网络 4K 内容开始出现。",
    "YouTube began accepting 4K uploads in 2010, the start of 4K content online.",
    [
     0
    ]
   ],
   [
    2011,
    "mass",
    "Toshiba Regza 55X3 于 2011 年 12 月上市，是首台商用 4K 电视；2012 年 LG、Sony 也推出 4K 电视。",
    "The Toshiba Regza 55X3, released in December 2011, was the first commercial 4K television; LG and Sony followed with 4K TVs in 2012.",
    [
     0
    ]
   ],
   [
    2012,
    "ver",
    "2012 年 ITU-R 发布 BT.2020（3840×2160 / 7680×4320、宽色域），10 月 CEA 宣布消费市场名称「Ultra HD」。",
    "In 2012 ITU-R published BT.2020 (3840x2160 / 7680x4320 with wide color gamut), and in October CEA announced the consumer name \"Ultra High-Definition\".",
    [
     0
    ]
   ],
   [
    2013,
    "mass",
    "Acer 在 IFA 2013（9 月 2 日）发布 Liquid S2，宣称首部能录 4K（3840×2160 24fps）的手机；随后 Samsung Galaxy Note 3 以 2160p30 录制出货。同年 LG LA9700 4K 电视内置 HEVC 解码器。",
    "Acer announced the Liquid S2 at IFA 2013 (2 September), billed as the first phone to record 4K (3840x2160 at 24fps); the Samsung Galaxy Note 3 then shipped with 2160p30. That year LG's LA9700 4K TVs built in an HEVC decoder.",
    [
     3,
     0,
     4
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 Netflix 开始用 HEVC 播放 4K 流媒体，OnePlus One、LG G3 等手机普及 4K 录像。",
    "In 2014 Netflix began 4K streaming using HEVC, and phones such as the OnePlus One and LG G3 made 4K recording common.",
    [
     0
    ]
   ]
  ],
  "now": [
   "4K 已是电视、流媒体、手机和监控摄像机的主流分辨率，手机普遍能录 4K60，HDR 4K 成为高端内容常态。",
   "4K is the mainstream resolution for TVs, streaming, phones and surveillance cameras; phones commonly record 4K60 and HDR 4K is the norm for premium content."
  ],
  "replaced": [
   "尚未被替代；8K 已有摄影机、电视和日本 NHK 的 8K 广播，但内容与带宽有限，普及度远不及 4K。",
   "Not replaced; 8K exists in cameras, TVs and NHK's 8K broadcasts in Japan, but limited content and bandwidth keep it far behind 4K."
  ],
  "refs": [
   {
    "t": "4K resolution - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/4K_resolution"
   },
   {
    "t": "Dalsa Origin - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Dalsa_Origin"
   },
   {
    "t": "RED Digital Cinema - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/RED_Digital_Cinema"
   },
   {
    "t": "Acer announces 6-inch Liquid S2, 'first 4K-recording smartphone' (Engadget)",
    "u": "https://www.engadget.com/2013/09/02/acer-6-inch-liquid-s2-smartphone/"
   },
   {
    "t": "LG expands Ultra HD TV lineup with global introduction of two new models (LG)",
    "u": "https://www.lg.com/global/newsroom/news/media-entertainment-solution/lg-expands-ultra-hd-tv-lineup-with-global-introduction-of-two-new-models/"
   }
  ]
 },
 "hevc": {
  "stages": [
   [
    2004,
    "idea",
    "ITU-T VCEG 2004 年开始研究超越 H.264 的新压缩技术，2005 年设立 Key Technical Areas（KTA）软件平台收集候选工具。",
    "ITU-T VCEG began studying compression advances beyond H.264 in 2004 and set up the Key Technical Areas (KTA) software platform in 2005 to collect candidate tools.",
    [
     0
    ]
   ],
   [
    2007,
    "corp",
    "ISO/IEC MPEG 2007 年启动类似的「High-performance Video Coding」项目；2009 年实验显示比 AVC 省约 20% 码率，促成与 VCEG 合作。",
    "ISO/IEC MPEG launched a similar \"High-performance Video Coding\" project in 2007; 2009 experiments showing about 20% bitrate savings over AVC led to joint work with VCEG.",
    [
     0
    ]
   ],
   [
    2010,
    "proto",
    "2010 年 1 月两组织发布联合征集提案，收到 27 份；4 月 JCT-VC 在 Dresden 首次开会，定名 High Efficiency Video Coding，10 月出第一版工作草案。",
    "In January 2010 the two groups issued a joint Call for Proposals and received 27 responses; JCT-VC first met in Dresden in April, adopted the name High Efficiency Video Coding and produced the first working draft in October.",
    [
     0
    ]
   ],
   [
    2012,
    "paper",
    "Sullivan、Ohm、Han、Wiegand 在 IEEE TCSVT 22 卷 12 期（2012 年 12 月）发表《Overview of the High Efficiency Video Coding (HEVC) Standard》，介绍 CTU 四叉树、35 种帧内预测、SAO 等，目标同画质省约 50% 码率；同年 2 月 Qualcomm 演示 HEVC 解码。",
    "Sullivan, Ohm, Han and Wiegand published \"Overview of the High Efficiency Video Coding (HEVC) Standard\" in IEEE TCSVT vol. 22 no. 12 (Dec 2012), describing CTU quadtrees, 35 intra modes, SAO and more, targeting about 50% bitrate savings at equal quality; Qualcomm had demonstrated HEVC decoding that February.",
    [
     1,
     0
    ]
   ],
   [
    2013,
    "ver",
    "2013 年 1 月 25 日完成第一阶段批准，4 月 13 日 ITU-T 批准为 H.265，同时是 ISO/IEC 23008-2（MPEG-H Part 2），11 月 ISO/IEC 发布。",
    "First-stage approval came on 25 January 2013; ITU-T approved it as H.265 on 13 April 2013, also published as ISO/IEC 23008-2 (MPEG-H Part 2) in November.",
    [
     0
    ]
   ],
   [
    2013,
    "mass",
    "LG 2013 年 7 月推出内置 HEVC 解码器的 LA9700 4K 电视；同年 9 月 LG G2 手机借 VisualOn 软件解码支持 HEVC 播放；MulticoreWare 7 月发布开源 x265 编码器。",
    "In July 2013 LG launched the LA9700 4K TVs with a built-in HEVC decoder; in September the LG G2 phone gained HEVC playback via VisualOn's software decoder; MulticoreWare released the open-source x265 encoder that July.",
    [
     2,
     3,
     0
    ]
   ],
   [
    2014,
    "mass",
    "2014 年 9 月 iPhone 6 用 HEVC 做蜂窝网络 FaceTime；Samsung NX1 成为首台机内用 H.265 录 4K 的相机；Netflix 用 HEVC 推 4K 流媒体。",
    "In September 2014 the iPhone 6 used HEVC for FaceTime over cellular; the Samsung NX1 became the first camera to record 4K in H.265; Netflix used HEVC for 4K streaming.",
    [
     4,
     5,
     0
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 10 月第 2 版加入范围扩展 RExt、可伸缩 SHVC 与多视点 MV-HEVC；2015 年第 3 版加入 3D-HEVC，2016 年第 4 版加入屏幕内容编码 SCC。",
    "Version 2 (October 2014) added range extensions (RExt), scalable SHVC and multiview MV-HEVC; version 3 (2015) added 3D-HEVC and version 4 (2016) screen content coding (SCC).",
    [
     0
    ]
   ],
   [
    2015,
    "rival",
    "MPEG LA 2014 年 9 月推出 HEVC 专利池，HEVC Advance 2015 年 3 月另立更贵的专利池，Velos Media 2017 年再加一个；授权混乱让许多公司转向免版税方案。",
    "MPEG LA launched an HEVC pool in September 2014, HEVC Advance formed a separate, costlier pool in March 2015, and Velos Media added a third in 2017; the licensing tangle pushed many companies toward royalty-free alternatives.",
    [
     0
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 9 月 iOS 11 在 iPhone 上启用 HEVC 编码，iPhone 8 / iPhone X 起默认用 HEVC 录像和 HEIF 存照片，HEVC 真正进入手机日常录像。",
    "In September 2017 iOS 11 enabled HEVC encoding on iPhones, with the iPhone 8 / iPhone X recording video in HEVC (and photos in HEIF) by default, making HEVC the everyday phone recording codec.",
    [
     0
    ]
   ],
   [
    2018,
    "rival",
    "2018 年 3 月 Alliance for Open Media（Amazon、Apple、Google、Intel、Microsoft、Netflix 等）发布免版税的 AV1，部分动机就是 HEVC 的高昂授权费。",
    "In March 2018 the Alliance for Open Media (Amazon, Apple, Google, Intel, Microsoft, Netflix and others) finalized the royalty-free AV1, partly motivated by HEVC's high licensing costs.",
    [
     0
    ]
   ],
   [
    2020,
    "end",
    "继任者 VVC/H.266 于 2020 年 7 月定稿，同画质再省约一半码率；2022 年 10 月 Chrome 107 才加入 HEVC 硬件解码，浏览器支持一直滞后。",
    "Its successor VVC/H.266 was finalized in July 2020, saving roughly another half of the bitrate; Chrome only added HEVC hardware decoding in version 107 (October 2022), as browser support long lagged.",
    [
     6,
     0
    ]
   ]
  ],
  "now": [
   "HEVC 是 4K/HDR 电视、蓝光 UHD、监控存储与手机录像的主力编码，硬件编解码几乎无处不在。",
   "HEVC is the workhorse codec for 4K/HDR TV, UHD Blu-ray, surveillance storage and phone recording, with hardware encode/decode nearly everywhere."
  ],
  "replaced": [
   "网络视频端正被 AV1 分流，新一代 VVC/H.266 尚在起步，HEVC 在设备录像和广播端仍未被替代。",
   "AV1 is taking share in web video and next-generation VVC/H.266 is just starting, but HEVC is not yet displaced in device recording and broadcast."
  ],
  "refs": [
   {
    "t": "High Efficiency Video Coding - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding"
   },
   {
    "t": "Sullivan et al., Overview of the HEVC Standard (IEEE TCSVT 2012, PDF)",
    "u": "https://www.csd.uoc.gr/~hy474/bibliography/HEVC-Overview.pdf"
   },
   {
    "t": "LG expands Ultra HD TV lineup with global introduction of two new models (LG)",
    "u": "https://www.lg.com/global/newsroom/news/media-entertainment-solution/lg-expands-ultra-hd-tv-lineup-with-global-introduction-of-two-new-models/"
   },
   {
    "t": "VisualOn integrates HEVC with LG G2 smartphones (PR Newswire)",
    "u": "https://prnewswire.com/news-releases/visualon-integrates-high-efficiency-video-coding-hevc-with-lg-g2-smartphones-to-deliver-new-standard-for-mobile-hd-video-223398771.html"
   },
   {
    "t": "Apple's iPhone 6 use H.265 codec for FaceTime over cellular (AppleInsider)",
    "u": "https://appleinsider.com/articles/14/09/12/apples-iphone-6-iphone-6-plus-use-h265-codec-for-facetime-over-cellular"
   },
   {
    "t": "Samsung's NX1: first 4K camera to record in H.265 (RedShark News)",
    "u": "https://www.redsharknews.com/business/item/2036-samsungs-nx1-first-4k-camera-to-record-in-h265"
   },
   {
    "t": "Versatile Video Coding - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Versatile_Video_Coding"
   }
  ]
 },
 "vp9": {
  "stages": [
   [
    2010,
    "corp",
    "Google 以约 1.3 亿美元收购 On2 Technologies，拿到 TrueMotion / VPx 系列编码；同年开源 VP8 并发起 WebM 项目，为后续免专利费编码打底。",
    "Google bought On2 Technologies (about $130M), gaining the TrueMotion/VPx codec line; the same year it open-sourced VP8 and started the WebM project, laying the base for royalty-free codecs.",
    [
     0
    ]
   ],
   [
    2011,
    "corp",
    "2011 年下半年 Google 内部开始研发下一代编码，代号 NGOV（Next Gen Open Video）/ VP-Next，目标是比 VP8 省 50% 码率并超越 HEVC。",
    "In the second half of 2011 Google began work on a next-generation codec, code-named NGOV (Next Gen Open Video) / VP-Next, aiming for 50% lower bitrate than VP8 and better efficiency than HEVC.",
    [
     0
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 6 月 VP9 Profile 0 比特流冻结；约两个月后 Chrome 正式支持 VP9 播放（WebM），YouTube 随后开始用 VP9 + Opus 通过 DASH 串流。",
    "The VP9 Profile 0 bitstream was frozen in June 2013; about two months later Chrome shipped VP9 playback (WebM), and YouTube began streaming VP9 + Opus over DASH.",
    [
     0
    ]
   ],
   [
    2013,
    "paper",
    "Google 的 Debargha Mukherjee、Jingning Han、Jim Bankoski、Ronald Bultje、Adrian Grange、John Koleszar、Paul Wilkins、Yaowu Xu 在 SMPTE 年会与 PCS 2013 发表 VP9 技术综述，给出与 H.264、HEVC 的对比；Adrian Grange 等同时向 IETF 提交比特流草案。",
    "Google's Debargha Mukherjee, Jingning Han, Jim Bankoski, Ronald Bultje, Adrian Grange, John Koleszar, Paul Wilkins and Yaowu Xu published the VP9 technical overview at the SMPTE conference and PCS 2013, comparing it with H.264 and HEVC; Adrian Grange et al. also submitted a bitstream draft to the IETF.",
    [
     2,
     3
    ]
   ],
   [
    2013,
    "ver",
    "Android 4.4 KitKat 起系统支持 VP9 软件解码，手机端先靠 CPU 解 VP9。",
    "From Android 4.4 KitKat the OS supported VP9 software decoding, so phones first decoded VP9 on the CPU.",
    [
     0
    ]
   ],
   [
    2014,
    "corp",
    "CES 2014 前 Google 宣布 ARM、Broadcom、Intel、LG、Marvell、MediaTek、Nvidia、Panasonic、Qualcomm、Realtek、Samsung、Sharp、Sony、Toshiba 等支持 VP9，LG/Panasonic/Sony 演示 4K YouTube；Ittiam 同期在 ARM Cortex 上演示高效 VP9 解码。",
    "Ahead of CES 2014 Google announced VP9 backing from ARM, Broadcom, Intel, LG, Marvell, MediaTek, Nvidia, Panasonic, Qualcomm, Realtek, Samsung, Sharp, Sony, Toshiba and others, with LG/Panasonic/Sony demoing 4K YouTube; Ittiam showed efficient VP9 decoding on ARM Cortex at the same time.",
    [
     1,
     5
    ]
   ],
   [
    2014,
    "ver",
    "Firefox 28（2014 年 3 月）加入 VP9；同年 Google 增加 Profile 2 / 3，支持 10 / 12-bit 高位深，为 HDR 铺路。",
    "Firefox 28 (March 2014) added VP9; that year Google also added Profiles 2 and 3 for 10/12-bit depth, paving the way for HDR.",
    [
     0
    ]
   ],
   [
    2015,
    "mass",
    "硬件解码落地：Nvidia Tegra X1、VeriSilicon Hantro G2v2（支持 Profile 2）在 2015 年初宣布 VP9 支持，Samsung Galaxy S6 的 Exynos 7420 也能解 VP9；电视和机顶盒芯片随后普及。",
    "Hardware decode arrived: Nvidia Tegra X1 and VeriSilicon Hantro G2v2 (with Profile 2) announced VP9 support in early 2015, and the Exynos 7420 in the Samsung Galaxy S6 could decode VP9; TV and set-top chips followed.",
    [
     0
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 Intel Kaby Lake 首次加入 VP9 硬件编码；11 月 7 日 YouTube 上线 HDR 视频，采用 VP9 Profile 2；12 月 Netflix 也开始用 VP9 编码部分内容。",
    "In 2016 Intel Kaby Lake first added VP9 hardware encoding; on 7 November YouTube launched HDR video using VP9 Profile 2; in December Netflix began encoding some content in VP9.",
    [
     0,
     4
    ]
   ],
   [
    2016,
    "end",
    "Google 宣布不再发布 VP10，把其技术并入开放媒体联盟 AOMedia 的 AV1（2018 年发布 1.0），VP9 成为 VPx 系列最后一代。",
    "Google said it would not release VP10, folding its tools into AOMedia's AV1 (1.0 in 2018), which made VP9 the last VPx codec.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "Safari 14（iOS / iPadOS / tvOS 14、macOS Big Sur）加入 VP9，Apple 设备终于能看 YouTube 4K。",
    "Safari 14 (iOS/iPadOS/tvOS 14, macOS Big Sur) added VP9, letting Apple devices play 4K YouTube.",
    [
     0
    ]
   ]
  ],
  "now": [
   "VP9 硬解在 2016 年后的 GPU / SoC 上几乎全覆盖，仍是 YouTube、浏览器和 WebRTC 的主力编码之一，但新内容逐步转向 AV1。",
   "VP9 hardware decode is nearly universal on GPUs/SoCs after 2016 and it remains a workhorse for YouTube, browsers and WebRTC, but new content is gradually moving to AV1."
  ],
  "replaced": [
   "被 AOMedia 的 AV1 接替；Google 停止 VPx 新版本，VP9 进入维护期。",
   "Succeeded by AOMedia's AV1; Google stopped new VPx versions and VP9 is in maintenance mode."
  ],
  "refs": [
   {
    "t": "VP9 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/VP9"
   },
   {
    "t": "Google's VP9 Video Codec Gets Backing from ARM, Nvidia, Sony And Others (TechCrunch, 2014)",
    "u": "https://techcrunch.com/2014/01/02/googles-vp9-video-codec-gets-backing-from-arm-nvidia-sony-and-others-gives-4k-video-streaming-a-fighting-chance"
   },
   {
    "t": "The latest open-source video codec VP9 - An overview and preliminary results (Google Research)",
    "u": "https://research.google/pubs/the-latest-open-source-video-codec-vp9-an-overview-and-preliminary-results-2/"
   },
   {
    "t": "VP9 Bitstream Overview (IETF draft-grange-vp9-bitstream)",
    "u": "https://datatracker.ietf.org/doc/html/draft-grange-vp9-bitstream"
   },
   {
    "t": "YouTube is now streaming HDR video (Engadget, 2016)",
    "u": "https://www.engadget.com/2016/11/07/youtube-hdr"
   },
   {
    "t": "Ittiam and ARM are the first to efficiently bring Google's VP9 to mobile devices (ARM)",
    "u": "https://developer.arm.com/community/arm-community-blogs/b/mobile-graphics-and-gaming-blog/posts/ittiam-and-arm-are-the-first-to-efficiently-bring-google-s-vp9-to-mobile-devices"
   }
  ]
 },
 "xavc": {
  "stages": [
   [
    2012,
    "corp",
    "2012 年 10 月 30 日 Sony 发布 XAVC 格式，与 CineAlta PMW-F55 / F5 同时公布：基于 H.264/MPEG-4 AVC Level 5.2，MXF 封装，最高 4K 60p、10-bit 4:2:2；F55 的 4K 60p 码率 600 Mbps，F5 可录 2K 120p。Sony 将其作为开放格式授权，宣布 14 家厂商支持。",
    "On 30 Oct 2012 Sony unveiled XAVC alongside the CineAlta PMW-F55/F5: H.264/MPEG-4 AVC Level 5.2 in MXF, up to 4K 60p, 10-bit 4:2:2; the F55 recorded 4K 60p at 600 Mbps and the F5 2K at 120 fps. Sony licensed it as an open format, with 14 manufacturers announced.",
    [
     0,
     1
    ]
   ],
   [
    2013,
    "mass",
    "PMW-F55 / F5 在 2013 年交付，先录 HD/2K XAVC，4K/QFHD 内录通过 2013 年的固件升级逐步开放（约）。",
    "The PMW-F55/F5 shipped in 2013, first recording HD/2K XAVC, with 4K/QFHD internal recording opened up through 2013 firmware updates (approx.).",
    [
     0,
     1
    ]
   ],
   [
    2013,
    "ver",
    "2013 年 9 月 Sony 推出 FDR-AX1 4K Handycam，首次使用消费版 XAVC S：改用 MP4 封装，4K 150 Mbps，写入 XQD 卡。",
    "In September 2013 Sony launched the FDR-AX1 4K Handycam, the first to use the consumer XAVC S variant: MP4 container, 4K at 150 Mbps, recorded to XQD cards.",
    [
     2
    ]
   ],
   [
    2014,
    "mass",
    "CES 2014 发布 1,999 美元的 FDR-AX100，4K 30p XAVC S 码率 60 Mbps，体积比 AX1 小 74%；同年 HDR-AS100V 运动相机、α 系列也开始录 XAVC S。",
    "At CES 2014 Sony launched the $1,999 FDR-AX100 with 4K 30p XAVC S at 60 Mbps, 74% smaller than the AX1; the HDR-AS100V action cam and Alpha cameras also adopted XAVC S that year.",
    [
     0,
     3
    ]
   ],
   [
    2015,
    "ver",
    "FDR-AX33 等 2015 年机型把 XAVC S 4K 码率提到 100 Mbps。",
    "2015 models such as the FDR-AX33 raised XAVC S 4K bitrate to 100 Mbps.",
    [
     0
    ]
   ],
   [
    2015,
    "rival",
    "Canon 推出 XF-AVC、Panasonic 有 AVC-Ultra，Apple ProRes 也是剪辑首选，同为 H.264 帧内/长 GOP 的厂商私有封装路线（约）。",
    "Canon's XF-AVC, Panasonic's AVC-Ultra and Apple ProRes competed as vendor-specific intra/long-GOP recording formats (approx.).",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "Sony α7S III 首次引入 XAVC HS（H.265/HEVC，压缩效率约翻倍）和 XAVC S-I（H.264 全帧内，最高 600 Mbps），这是 α 机身首次有全帧内录制。",
    "The Sony a7S III introduced XAVC HS (H.265/HEVC, roughly double efficiency) and XAVC S-I (H.264 All-Intra up to 600 Mbps), the first All-Intra recording in an Alpha body.",
    [
     4
    ]
   ],
   [
    2021,
    "ver",
    "Sony α1 用 XAVC HS 录 8K 30p 10-bit 4:2:0（8.6K 超采样），4K 下 XAVC HS / S / S-I 最高 600 Mbps。",
    "The Sony Alpha 1 recorded 8K 30p 10-bit 4:2:0 in XAVC HS (8.6K oversampled), with 4K XAVC HS/S/S-I up to 600 Mbps.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "电影机 BURANO 以 XAVC H（HEVC）录 8K，并通过 2025 年的 V2.0 固件继续扩充录制格式与高帧率。",
    "The BURANO cinema camera records 8K in XAVC H (HEVC), with the 2025 V2.0 firmware adding more recording formats and high frame rates.",
    [
     6
    ]
   ]
  ],
  "now": [
   "XAVC 家族（XAVC、XAVC S、XAVC S-I、XAVC HS、XAVC H）仍是 Sony 从 FX 电影机到 α 微单的默认录制格式，H.264 与 HEVC 并行。",
   "The XAVC family (XAVC, XAVC S, XAVC S-I, XAVC HS, XAVC H) remains the default recording format from Sony's FX cinema cameras to Alpha bodies, with H.264 and HEVC in parallel."
  ],
  "replaced": [
   "H.264 版本正被同一品牌下的 HEVC 版（XAVC HS / XAVC H）逐步取代；高端则让位于 X-OCN、RAW 等。",
   "The H.264 flavours are being replaced by the HEVC ones (XAVC HS / XAVC H) within the family; at the high end X-OCN and RAW take over."
  ],
  "refs": [
   {
    "t": "XAVC - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/XAVC"
   },
   {
    "t": "Sony goes Red-hunting with PMW-F55 and PMW-F5 (Engadget, 2012)",
    "u": "https://www.engadget.com/2012/10/30/sony-goes-red-hunting-with-pmw-f55-and-pmw-f5-pro-cinealta-4k/"
   },
   {
    "t": "Sony's $4,500 FDR-AX1 Handycam puts 4K recording in the grasp of prosumers (Engadget, 2013)",
    "u": "https://www.engadget.com/2013/09/04/sony-FDR-AX1-4k-handycam/"
   },
   {
    "t": "Sony's new 4K consumer cams unveiled (Newsshooter, 2014)",
    "u": "https://www.newsshooter.com/2014/01/07/sonys-new-4k-consumer-cams-unveiled/"
   },
   {
    "t": "Sony releases the highly anticipated a7S III (Videomaker)",
    "u": "https://www.videomaker.com/news/sony-releases-the-highly-anticipated-a7s-iii/"
   },
   {
    "t": "Sony a1 review (DPReview)",
    "u": "https://www.dpreview.com/reviews/sony-a1-review"
   },
   {
    "t": "Sony adds more features to the upcoming BURANO Version 2.0 firmware update",
    "u": "https://www.sony.eu/presscentre/sony-adds-more-features-to-the-upcoming-burano-version-20-firmware-update"
   }
  ]
 },
 "smart": {
  "stages": [
   [
    2013,
    "paper",
    "北京大学高文、黄铁军团队主导的 IEEE 1857（2013）为监控视频加入基于背景建模的编码：固定机位长期拍同一场景，可以用背景参考帧大幅降低码率。",
    "IEEE 1857 (2013), led by Wen Gao and Tiejun Huang's team at Peking University, added background-model-based coding for surveillance: fixed cameras watch the same scene, so a background reference frame can cut bitrate sharply.",
    [
     3
    ]
   ],
   [
    2014,
    "paper",
    "Xianguo Zhang、黄铁军、田永鸿、高文在 IEEE Transactions on Image Processing 发表《Background-Modeling-Based Adaptive Prediction for Surveillance Video Coding》，系统论证背景建模预测的收益。",
    "Xianguo Zhang, Tiejun Huang, Yonghong Tian and Wen Gao published \"Background-Modeling-Based Adaptive Prediction for Surveillance Video Coding\" in IEEE Transactions on Image Processing, quantifying the gain of background-model prediction.",
    [
     3
    ]
   ],
   [
    2015,
    "mass",
    "2015 年 3 月 Axis 发布 Zipstream：在标准 H.264 编码器上做动态 ROI（只给运动和细节区域高码率）与动态 GOP（静止时少发 I 帧），平均省 50% 以上带宽 / 存储，完全兼容现有解码器和 VMS，多数 Axis 相机固件升级即可。",
    "In March 2015 Axis launched Zipstream: dynamic ROI (bits only where there is motion and detail) and dynamic GOP (fewer I-frames when static) on a standard H.264 encoder, cutting bandwidth/storage by 50% or more on average, fully compatible with existing decoders and VMS, and available to most Axis cameras by firmware update.",
    [
     0,
     1
    ]
   ],
   [
    2015,
    "rival",
    "Hikvision 同年推出 H.264+（Smart Codec），用背景预测编码、增强降噪和优化码率控制，宣称比标准 H.264 省 50%；12 月随 Value Plus 产品线普及。",
    "Hikvision launched H.264+ (Smart Codec) the same year, using background-based predictive encoding, enhanced noise suppression and optimised rate control, claiming 50% savings over plain H.264; it spread with the Value Plus line in December.",
    [
     2
    ]
   ],
   [
    2016,
    "ver",
    "Zipstream 2016 年扩展到 PTZ 相机，并加入动态 FPS：相机仍全帧率分析，但静止时少输出帧。",
    "In 2016 Zipstream was extended to PTZ cameras and gained dynamic FPS: the camera still analyses at full frame rate but outputs fewer frames when nothing moves.",
    [
     0
    ]
   ],
   [
    2016,
    "rival",
    "Hanwha Techwin 是最早大规模采用 H.265 的监控厂商之一，把自家 WiseStream 动态码控叠加在 H.265 / H.264 上，让 4K Wisenet 相机用接近 1080p H.264 的带宽。",
    "Hanwha Techwin, one of the first surveillance makers to adopt H.265 at scale, layered its WiseStream dynamic rate control on H.265/H.264 so 4K Wisenet cameras used about the bandwidth of 1080p H.264.",
    [
     7
    ]
   ],
   [
    2016,
    "rival",
    "10 月 Uniview 推出带 U-Code 的 2MP / 4MP H.265 摄像机，宣称最多省 95% 带宽。",
    "In October Uniview released 2MP/4MP H.265 cameras with U-Code, claiming up to 95% bandwidth savings.",
    [
     4
    ]
   ],
   [
    2017,
    "rival",
    "Hikvision 推广 H.265+，在 HEVC 上做同样的背景建模与码率控制，把 4K 监控存储降到接近 1080p 水平；Dahua 也推出 Smart H.265+（约）。",
    "Hikvision promoted H.265+, applying the same background modelling and rate control on HEVC to bring 4K surveillance storage close to 1080p levels; Dahua also launched Smart H.265+ (approx.).",
    [
     5
    ]
   ],
   [
    2024,
    "ver",
    "11 月 Axis 发布 ARTPEC-9 SoC，业界首个支持 AV1 的监控芯片，Zipstream 同时作用于 H.264 / H.265 / AV1；首款相机 AXIS Q1728 2025 年一季度供货。",
    "In November Axis announced the ARTPEC-9 SoC, the first surveillance chip with AV1, with Zipstream working across H.264/H.265/AV1; the first camera, AXIS Q1728, shipped in Q1 2025.",
    [
     0,
     6
    ]
   ]
  ],
  "now": [
   "各大监控厂商的智能编码（Zipstream、H.264+/H.265+、Smart H.265+、WiseStream、U-Code）已成默认开启的标配，并开始叠加 AI 目标检测做 ROI。",
   "Smart codecs from every major surveillance vendor (Zipstream, H.264+/H.265+, Smart H.265+, WiseStream, U-Code) are now on by default, increasingly using AI object detection for ROI."
  ],
  "replaced": [
   "尚未被替代：它们是标准编码器之上的码控策略，随底层编码从 H.264 升到 H.265、AV1 一起迁移。",
   "Not replaced: they are rate-control strategies on top of standard encoders and migrate as the base codec moves from H.264 to H.265 and AV1."
  ],
  "refs": [
   {
    "t": "Axis Zipstream technology (Axis white paper)",
    "u": "https://whitepapers.axis.com/en-us/axis-zipstream-technology"
   },
   {
    "t": "Axis introduces 'Zipstream' technology that lowers bandwidth, storage requirements (SecurityInfoWatch)",
    "u": "https://www.securityinfowatch.com/video-surveillance/news/12057110/axis-introduces-zipstream-technology-that-lowers-bandwidth-storage-requirements"
   },
   {
    "t": "Hikvision Introduces Value Plus Video Surveillance Products (2015)",
    "u": "https://www.hikvision.com/us-en/newsroom/latest-news/2015/Hikvision-Introduces-Value-Plus-Video-Surveillance-Products"
   },
   {
    "t": "IEEE 1857 Standard Empowering Smart Video Surveillance (2013)",
    "u": "https://www.lri.fr/~gcharpia/VisionSeminar/papers/2013_IEEE_1857_Standard_Empowering_Smart_Video_Surveillance.pdf"
   },
   {
    "t": "Uniview 2MP/4MP Cameras are Enabled with H.265 & U-code",
    "u": "https://global.uniview.com/News/News/doclist140505p22.htm"
   },
   {
    "t": "H.265+ Takes Video Surveillance to the 4K Era (Hikvision, 2017)",
    "u": "https://www.hikvision.com/hk/newsroom/latest-news/2017/h-265--takes-video-surveillance-to-the-4k-era"
   },
   {
    "t": "Axis ARTPEC-9 SoC press release",
    "u": "https://newsroom.axis.com/press-release/artpec-soc"
   },
   {
    "t": "Hanwha Techwin America takes HD compression to higher levels with H.265 and WiseStream (SecurityInfoWatch)",
    "u": "https://www.securityinfowatch.com/video-surveillance/press-release/12289781/hanwha-vision-hanwha-techwin-america-takes-hd-compression-to-higher-levels-with-the-unique-combination-of-h265-and-wisestream-technology"
   }
  ]
 },
 "dovi": {
  "stages": [
   [
    2004,
    "proto",
    "UBC 的 Lorne Whitehead、Helge Seetzen 等创办的 BrightSide（前身 Sunnybrook）在 SIGGRAPH 2004 发表 HDR 显示系统：LED 分区背光 + LCD 双重调制，做出 DR37-P 等原型（约）。",
    "BrightSide (formerly Sunnybrook), founded by UBC's Lorne Whitehead, Helge Seetzen and others, presented HDR display systems at SIGGRAPH 2004: dual modulation with a locally dimmed LED backlight behind an LCD, built into prototypes such as the DR37-P (approx.).",
    [
     1
    ]
   ],
   [
    2007,
    "corp",
    "Dolby 以 2,800 万美元收购 BrightSide Technologies，此后把这套 HDR 技术更名为 Dolby Vision，并从显示扩展到采集、分发全链路。",
    "Dolby bought BrightSide Technologies for $28M and later renamed its HDR technology Dolby Vision, extending it from displays to capture and distribution.",
    [
     1
    ]
   ],
   [
    2013,
    "paper",
    "Dolby 的 Scott Miller、Mahdi Nezamabadi、Scott Daly 在 SMPTE Motion Imaging Journal 发表《Perceptual Signal Coding for More Efficient Usage of Bit Codes》，提出按人眼对比度敏感度设计的 PQ 曲线（2012 年 SMPTE 年会首发）。",
    "Dolby's Scott Miller, Mahdi Nezamabadi and Scott Daly published \"Perceptual Signal Coding for More Efficient Usage of Bit Codes\" in the SMPTE Motion Imaging Journal, proposing the PQ curve based on human contrast sensitivity (first presented at the 2012 SMPTE conference).",
    [
     2
    ]
   ],
   [
    2014,
    "ver",
    "CES 2014 发布 Dolby Vision，成为首个面向家用的 HDR 格式；同年 PQ 被标准化为 SMPTE ST 2084，静态元数据为 ST 2086，Dolby 的动态元数据后来成为 ST 2094-10，最高支持 12-bit。",
    "Dolby Vision was announced at CES 2014 as the first consumer HDR format; that year PQ became SMPTE ST 2084, with static metadata in ST 2086, and Dolby's dynamic metadata later became ST 2094-10, supporting up to 12-bit.",
    [
     0,
     2
    ]
   ],
   [
    2015,
    "mass",
    "10 月 Vizio Reference Series 上市，是首款完整支持 Dolby Vision 的家用电视：65 寸 R65 售 5,999 美元、120 寸 RS120 售 129,999 美元，800 nit 全阵列背光 384 分区，片源来自 Vudu 和 Netflix《Marco Polo》。",
    "In October the Vizio Reference Series went on sale as the first complete Dolby Vision TV: the 65-inch R65 at $5,999 and the 120-inch RS120 at $129,999, with 800-nit full-array backlights and 384 zones, fed by Vudu and Netflix's Marco Polo.",
    [
     3
    ]
   ],
   [
    2017,
    "mass",
    "LG G6 成为首款支持 Dolby Vision 显示的手机，Dolby Vision 开始进入移动端播放。",
    "The LG G6 became the first phone with Dolby Vision display support, bringing Dolby Vision playback to mobile.",
    [
     0
    ]
   ],
   [
    2017,
    "rival",
    "Samsung 与 Amazon 推出 HDR10+，同样用动态元数据但免授权费，成为 Dolby Vision 的主要对手。",
    "Samsung and Amazon launched HDR10+, also with dynamic metadata but royalty-free, as Dolby Vision's main rival.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "CES 2020 发布 Dolby Vision IQ，结合电视的环境光传感器与动态元数据自动调画面，首批为 LG Gallery OLED 和 Panasonic HZ2000。",
    "Dolby Vision IQ launched at CES 2020, combining the TV's ambient light sensor with dynamic metadata to adjust the picture, first on LG Gallery OLEDs and the Panasonic HZ2000.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "iPhone 12 系列成为首批能实时录制 Dolby Vision 的设备：10-bit HDR，iPhone 12 最高 4K 30p，Pro 最高 4K 60p，可直接在机内剪辑。",
    "The iPhone 12 line became the first devices to record Dolby Vision in real time: 10-bit HDR, up to 4K 30p on iPhone 12 and 4K 60p on the Pro, editable on the phone.",
    [
     4
    ]
   ],
   [
    2022,
    "ver",
    "小米 12S Ultra（Snapdragon 8+ Gen 1、Sony IMX989）成为首款支持 Dolby Vision 录制的 Android 手机，10-bit Rec.2020 H.265，最高 4K 60p。",
    "The Xiaomi 12S Ultra (Snapdragon 8+ Gen 1, Sony IMX989) became the first Android phone to record Dolby Vision, in 10-bit Rec.2020 H.265 up to 4K 60p.",
    [
     7
    ]
   ],
   [
    2025,
    "ver",
    "9 月 2 日 Dolby 发布 Dolby Vision 2，以 Content Intelligence 为基础按内容与环境优化；Hisense 是首个电视品牌，MediaTek Pentonic 800 是首颗集成芯片。",
    "On 2 September Dolby announced Dolby Vision 2, built on Content Intelligence to optimise per content and room; Hisense is the first TV brand and MediaTek's Pentonic 800 the first chip.",
    [
     5
    ]
   ]
  ],
  "now": [
   "Dolby Vision 覆盖电视、流媒体、UHD Blu-ray 和主流旗舰手机的拍摄与播放，Dolby Vision 2 正进入 2026 年电视。",
   "Dolby Vision covers TVs, streaming, UHD Blu-ray and capture/playback on flagship phones, with Dolby Vision 2 entering 2026 TVs."
  ],
  "replaced": [
   "尚未被替代；与 HDR10+、HLG 并存，Samsung 电视至今不支持 Dolby Vision。",
   "Not replaced; it coexists with HDR10+ and HLG, and Samsung TVs still do not support Dolby Vision."
  ],
  "refs": [
   {
    "t": "Dolby Vision - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Dolby_Vision"
   },
   {
    "t": "BrightSide Technologies - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/BrightSide_Technologies"
   },
   {
    "t": "Perceptual Signal Coding for More Efficient Usage of Bit Codes (SMPTE MIJ)",
    "u": "https://journal.smpte.org/periodicals/SMPTE%20Motion%20Imaging%20Journal/122/4/13/"
   },
   {
    "t": "VIZIO announces pricing and availability for Reference Series with Dolby Vision (2015)",
    "u": "https://www.vizio.com/en/press/2015/oct/vizio-announces-pricing-and-availability-for-highly-anticipated-reference-series-collection-featuring-dolby-vision-high-dynamic-range-support"
   },
   {
    "t": "iPhone 12 Lineup Features HDR Video Recording With Dolby Vision (MacRumors)",
    "u": "https://www.macrumors.com/2020/10/14/iphone-12-dolby-vision-hdr-video-recording/"
   },
   {
    "t": "Dolby Unveils Dolby Vision 2",
    "u": "https://news.dolby.com/en-WW/253671-dolby-unveils-dolby-vision-2-a-new-era-for-tv-picture-quality/"
   },
   {
    "t": "Dolby Vision IQ Revealed at CES 2020 (TV Tech)",
    "u": "https://tvtechnology.com/equipment/dolby-vision-iq-revealed-at-ces-2020"
   },
   {
    "t": "Xiaomi's 12S Ultra shoots beautiful HDR videos (Videomaker)",
    "u": "https://www.videomaker.com/news/xiaomis-12s-ultra-shoots-beautiful-hdr-videos/"
   }
  ]
 },
 "uhd8k": {
  "stages": [
   [
    1995,
    "idea",
    "NHK 放送技术研究所 1995 年开始研究 4320p 的 Super Hi-Vision（超高清电视），目标是让观众有身临其境的感觉。",
    "NHK's Science & Technology Research Laboratories began researching 4320p Super Hi-Vision in 1995, aiming for an immersive viewing experience.",
    [
     0
    ]
   ],
   [
    2002,
    "proto",
    "NHK 做出首台 Super Hi-Vision 摄像机，用四片约 800 万像素传感器（双绿拼接）合成 8K，机身约 80 kg；2003 年 1 月与 JVC、Ikegami 公开演示。",
    "NHK built the first Super Hi-Vision camera, combining four ~8MP sensors (dual-green) into 8K, weighing about 80 kg; it was demonstrated with JVC and Ikegami in January 2003.",
    [
     0,
     6
    ]
   ],
   [
    2007,
    "proto",
    "NHK 与 Micron 开发 3,300 万像素 8K 图像传感器；同年 SMPTE 把 7680×4320 标准化。",
    "NHK and Micron developed a 33-megapixel 8K image sensor; SMPTE standardised 7680×4320 the same year.",
    [
     0
    ]
   ],
   [
    2011,
    "proto",
    "NHK 展示单片 3,300 万像素彩色 CMOS 的 8K 摄像机，机头仅约 4 kg，摆脱了四片拼接。",
    "NHK showed an 8K camera with a single 33MP colour CMOS sensor and a head of only about 4 kg, dropping the four-sensor design.",
    [
     2
    ]
   ],
   [
    2012,
    "ver",
    "ITU-R BT.2020 把 7680×4320 列为 UHDTV 格式；Sharp 在 CES 2012 展出首台 8K 电视原型；伦敦奥运会进行 8K 公众观看试验。",
    "ITU-R BT.2020 listed 7680×4320 as a UHDTV format; Sharp showed the first 8K TV prototype at CES 2012; the London Olympics hosted 8K public viewing trials.",
    [
     0
    ]
   ],
   [
    2013,
    "corp",
    "Astrodesign 发布 AH-4800 8K 摄像机，8K 开始从 NHK 实验室走向商用设备。",
    "Astrodesign announced the AH-4800 8K camera, moving 8K from NHK's labs into commercial equipment.",
    [
     0
    ]
   ],
   [
    2016,
    "mass",
    "RED 推出 Helium 8K S35 传感器的 Weapon 8K 与 Epic-W，3,540 万像素、8K 最高 60 fps，是首批量产交付的 8K 电影机；8 月 1 日 NHK 在 BS17 开始 4K/8K 试验播出。",
    "RED shipped the Weapon 8K and Epic-W with the 35.4MP Helium 8K S35 sensor, up to 8K 60 fps, among the first production 8K cinema cameras; on 1 August NHK began 4K/8K test broadcasts on BS17.",
    [
     3,
     6
    ]
   ],
   [
    2018,
    "mass",
    "12 月 1 日 NHK BS8K 正式开播，全球首个 8K 卫星频道，每天约 12 小时；RED 同年交付全画幅 Monstro 8K VV。",
    "On 1 December NHK BS8K launched as the world's first 8K satellite channel, about 12 hours a day; RED delivered the full-frame Monstro 8K VV that year.",
    [
     1,
     3
    ]
   ],
   [
    2019,
    "mass",
    "Nubia Red Magic 3（Snapdragon 855）成为首款能录 8K 的手机，但只有 15 fps。",
    "The Nubia Red Magic 3 (Snapdragon 855) became the first phone to record 8K, though only at 15 fps.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "Samsung Galaxy S20 把手机 8K 提到 24 fps；7 月 Canon EOS R5 成为首台机内录 8K RAW（最高 29.97p）的全画幅微单。",
    "The Samsung Galaxy S20 brought phone 8K to 24 fps; in July the Canon EOS R5 became the first full-frame mirrorless to record 8K RAW internally (up to 29.97p).",
    [
     0,
     7
    ]
   ],
   [
    2021,
    "ver",
    "东京奥运会制作约 200 小时 8K 素材；8K 录制扩展到 Sony α1、Nikon Z9 等旗舰机身。",
    "The Tokyo Olympics produced about 200 hours of 8K material; 8K recording spread to flagship bodies such as the Sony Alpha 1 and Nikon Z9.",
    [
     0
    ]
   ],
   [
    2025,
    "end",
    "8K 电视退潮：TCL 2023 年退出，Sony 2025 年停产 Z9K，LG 在 2025 年底停产 8K OLED / LCD，Samsung 几乎成唯一主要品牌。",
    "8K TVs retreated: TCL quit in 2023, Sony discontinued the Z9K in 2025 and LG stopped 8K OLED/LCD at the end of 2025, leaving Samsung as almost the only major brand.",
    [
     5
    ]
   ]
  ],
  "now": [
   "8K 在拍摄端仍是旗舰相机、电影机和手机的卖点（用于裁切、超采样 4K），但在显示和播出端基本停滞，NHK BS8K 仍在播。",
   "8K remains a selling point for flagship cameras, cinema cameras and phones (for cropping and oversampled 4K), but display and broadcast have stalled; NHK BS8K is still on air."
  ],
  "replaced": [
   "在消费显示端事实上被 4K HDR 挤出，内容和带宽不足；拍摄端仍在发展，未被替代。",
   "On consumer displays it has effectively lost to 4K HDR for lack of content and bandwidth; on the capture side it is still developing and not replaced."
  ],
  "refs": [
   {
    "t": "8K resolution - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/8K_resolution"
   },
   {
    "t": "NHK BS8K - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/NHK_BS8K"
   },
   {
    "t": "Video: NHK's Super Hi-Vision Camera With 33-Megapixel Sensor (TechCrunch, 2011)",
    "u": "https://techcrunch.com/2011/06/01/video-nhks-super-hi-vision-camera-with-33-megapixel-sensor/"
   },
   {
    "t": "Introducing Epic-W and Weapon 8K (RED)",
    "u": "https://www.red.com/news/introducing-epic-w-and-weapon-8k"
   },
   {
    "t": "nubia Red Magic 3 arrives with 8K video recording (GSMArena)",
    "u": "https://www.gsmarena.com/nubia_red_magic_3_official_8k_video_recording_monster_specs-news-36799.php"
   },
   {
    "t": "LG ends 8K TV production (TechSpot)",
    "u": "https://www.techspot.com/news/111153-lg-ends-8k-tv-production-content-demand-never.html"
   },
   {
    "t": "NHK begins 4K, 8K high-definition test broadcasting (Japan Times, 2016)",
    "u": "https://www.japantimes.co.jp/news/2016/08/01/business/tech/nhk-begins-4k-8k-high-definition-test-broadcasting/"
   },
   {
    "t": "Canon unveils EOS R5 with 8K RAW video recording (GSMArena)",
    "u": "https://m.gsmarena.com/canon_unveils_eos_r5_with_45mp_fullframe_sensor_and_8k_raw_video_recording-news-44194.php"
   }
  ]
 },
 "hlg": {
  "stages": [
   [
    2014,
    "paper",
    "BBC R&D 的 Tim Borer 发表白皮书 WHP 283《Non-linear Opto-Electrical Transfer Functions for High Dynamic Range Television》，提出一条低亮度段沿用传统 gamma、高亮度段改用对数的新 OETF，并作为提案提交 ITU。",
    "Tim Borer of BBC R&D published White Paper WHP 283, \"Non-linear Opto-Electrical Transfer Functions for High Dynamic Range Television\", proposing a new OETF that keeps a conventional gamma for low light and switches to a logarithmic curve for highlights; it was submitted to the ITU as a contribution.",
    [
     0
    ]
   ],
   [
    2014,
    "rival",
    "同期 Dolby 提出的 PQ（Perceptual Quantizer，后成为 SMPTE ST 2084）走的是绝对亮度 + 元数据路线，是 HLG 的主要竞争方案；HLG 则主打相对亮度、无需元数据、能直接在 SDR 电视上显示（约）。",
    "At the same time Dolby's PQ (Perceptual Quantizer, later SMPTE ST 2084) took the absolute-luminance-plus-metadata route and became HLG's main rival; HLG instead targeted relative luminance, no metadata, and direct viewing on SDR TVs (approx.).",
    [
     2
    ]
   ],
   [
    2015,
    "corp",
    "2015 年 5 月 BBC 宣布与 NHK 合作，把两家的 HDR 方案合并成 Hybrid Log-Gamma 提交 ITU；6 月 HLG 被提交给 JCT-VC，并写入 HEVC 扩展草案。",
    "In May 2015 the BBC announced it was working with NHK to merge their HDR proposals into Hybrid Log-Gamma for the ITU; in June HLG was proposed to JCT-VC and added to the draft HEVC extensions.",
    [
     2
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 7 月 3 日，日本 ARIB 批准 STD-B67，这是 HLG 的第一份正式标准。",
    "On 3 July 2015 Japan's ARIB approved STD-B67, the first formal standard for HLG.",
    [
     2
    ]
   ],
   [
    2015,
    "paper",
    "Borer 与 Andrew Cotton 在 IBC 2015 发表 WHP 309《A Display Independent High Dynamic Range Television System》，系统阐述 HLG「与显示器无关、无需 mastering 元数据、兼容 SDR」，获 IBC 最佳论文奖。",
    "Borer and Andrew Cotton presented WHP 309, \"A Display Independent High Dynamic Range Television System\", at IBC 2015, setting out HLG as display-independent, free of mastering metadata and SDR-compatible; it won the IBC best paper award.",
    [
     1
    ]
   ],
   [
    2015,
    "proto",
    "2015 年 10 月 Sony 在 SMPTE 年会上用改装的 HDR 显示器演示 HLG；11 月 LG 宣布其 2015 款 4K OLED 电视同时支持 HLG 与 PQ。",
    "In October 2015 Sony demonstrated HLG on a modified HDR display at the SMPTE conference; in November LG announced that its 2015 4K OLED TVs would support both HLG and PQ.",
    [
     2
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 7 月 ITU-R 发布 BT.2100，把 HLG 与 PQ 并列为 HDR 电视的两种传输函数；同年 11 月 DVB 的 UHD-1 Phase 2 也纳入 HLG，2017 年 5 月 ATSC 3.0 跟进。",
    "In July 2016 ITU-R published BT.2100, listing HLG and PQ side by side as the two HDR-TV transfer functions; DVB's UHD-1 Phase 2 added HLG that November, and ATSC 3.0 followed in May 2017.",
    [
     2,
     5
    ]
   ],
   [
    2016,
    "mass",
    "2016 年 10 月 4 日 SKY Perfect JSAT 开播全球首个用 HLG 的 4K HDR 广播；11 月 YouTube 宣布 HDR 流媒体支持 HLG 与 PQ；12 月 BBC 在 iPlayer 上放出《Planet Earth II》的 HLG 测试片段。",
    "On 4 October 2016 SKY Perfect JSAT started the world's first 4K HDR broadcasts using HLG; in November YouTube announced HDR streaming with HLG or PQ; in December the BBC put an HLG test clip of Planet Earth II on iPlayer.",
    [
     2
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 7 月 Sony PXW-FS5 V4.0 与 PXW-Z150 固件以新 Picture Profile 加入 HLG（HLG / HLG1–3）+ BT.2020，实现机内直出「Instant HDR」；同年 9 月 Sony 又发布原生支持 HLG 的 FDR-AX700、PXW-Z90、HXR-NX80，Panasonic GH5 固件 2.0 也加入 HLG 录制。",
    "In July 2017 firmware V4.0 for the Sony PXW-FS5, along with new PXW-Z150 firmware, added HLG (HLG and HLG1–3) with BT.2020 as a picture profile, giving in-camera \"Instant HDR\"; in September Sony announced the FDR-AX700, PXW-Z90 and HXR-NX80 with native HLG, and Panasonic's GH5 firmware 2.0 also added HLG recording.",
    [
     2,
     3,
     6
    ]
   ],
   [
    2017,
    "mass",
    "2017 年 12 月 BBC 在 iPlayer 以 4K HLG 上线《Blue Planet II》全集，DirecTV 也开始在 4K 频道播出 HLG。",
    "In December 2017 the BBC released Blue Planet II in 4K HLG on iPlayer, and DirecTV began broadcasting HLG on its 4K channels.",
    [
     2
    ]
   ],
   [
    2018,
    "mass",
    "2018 年 2 月 Sony Xperia XZ2 / XZ2 Compact 成为首款能录 4K HDR 视频的手机，格式是 10-bit HLG BT.2020；12 月 1 日 NHK BS4K / BS8K 开播，采用 HLG HDR。",
    "In February 2018 the Sony Xperia XZ2 / XZ2 Compact became the first phones to record 4K HDR video, in 10-bit HLG BT.2020; on 1 December NHK BS4K / BS8K launched using HLG HDR.",
    [
     4,
     7
    ]
   ],
   [
    2020,
    "mass",
    "2020 年 iPhone 12 系列用 Dolby Vision Profile 8.4 录制 HDR 视频，其基础层就是 HLG，让 HLG 成为手机录像最常见的 HDR 格式。",
    "In 2020 the iPhone 12 series recorded HDR video in Dolby Vision Profile 8.4, whose base layer is HLG, making HLG the most common HDR format for phone video.",
    [
     2
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 10 月 ITU 因 BT.2100（HLG 与 PQ）获颁 Engineering Emmy，BBC、NHK 等贡献者一同受表彰。",
    "In October 2023 the ITU received an Engineering Emmy for BT.2100 (HLG and PQ), honouring contributors including the BBC and NHK.",
    [
     5
    ]
   ]
  ],
  "now": [
   "HLG 是直播电视（BBC、NHK、DVB、ATSC 3.0）和相机 / 手机机内直出 HDR 的主力格式，免版税、无需元数据，几乎所有 HDR 电视都支持。",
   "HLG is the main HDR format for live broadcasting (BBC, NHK, DVB, ATSC 3.0) and for in-camera / in-phone HDR output; it is royalty-free, needs no metadata, and is supported by nearly every HDR TV."
  ],
  "replaced": [
   "没有被替代，而是与 PQ 系（HDR10、HDR10+、Dolby Vision）分工并存：PQ 统治流媒体与蓝光的后期调色内容，HLG 守住直播与即拍即播。",
   "Not replaced; it coexists with the PQ family (HDR10, HDR10+, Dolby Vision): PQ dominates graded streaming and disc content, while HLG holds live and shoot-and-share workflows."
  ],
  "refs": [
   {
    "t": "BBC WHP 283: Non-linear Opto-Electrical Transfer Functions for HDR Television (2014)",
    "u": "https://displaydaily.com/wp-content/uploads/2015/05/WHP283.pdf"
   },
   {
    "t": "BBC WHP 309: A Display Independent High Dynamic Range Television System (2015)",
    "u": "https://displaydaily.com/wp-content/uploads/2016/09/WHP309.pdf"
   },
   {
    "t": "Wikipedia: Hybrid log–gamma",
    "u": "https://en.wikipedia.org/wiki/Hybrid_log%E2%80%93gamma"
   },
   {
    "t": "Newsshooter: Sony expanded HDR workflows, new firmware for FS5 and PXW-Z150",
    "u": "https://www.newsshooter.com/2017/03/23/sony-announce-expanded-hdr-workflows-new-firmware-for-fs5-and-pxw-z150/"
   },
   {
    "t": "Sony support: Xperia XZ2 HDR (HLG) video recording",
    "u": "https://www.sony.co.uk/electronics/support/articles/SX636701"
   },
   {
    "t": "ITU receives Emmy Award for HDR-TV (BT.2100)",
    "u": "https://itu.int/hub/?p=28469"
   },
   {
    "t": "Sony: PXW-Z90, HXR-NX80, FDR-AX700 4K HDR (HLG) camcorders",
    "u": "https://pro.sony/en_HK/press/1237495212198"
   },
   {
    "t": "Wikipedia: NHK BS8K",
    "u": "https://en.wikipedia.org/wiki/NHK_BS8K"
   }
  ]
 },
 "av1": {
  "stages": [
   [
    2014,
    "idea",
    "AV1 的前身是三条实验路线：Xiph / Mozilla 自 2010 年开发的 Daala、Google 2014 年 9 月 12 日公布的 VP10（VP9 后继），以及 Cisco 2015 年 8 月公开的 Thor。",
    "AV1 grew out of three experimental lines: Daala from Xiph / Mozilla (since 2010), Google's VP10 (VP9's successor) announced on 12 September 2014, and Cisco's Thor published in August 2015.",
    [
     0
    ]
   ],
   [
    2015,
    "corp",
    "2015 年 9 月 1 日 Amazon、Cisco、Google、Intel、Microsoft、Mozilla、Netflix 七家成立 Alliance for Open Media（AOMedia），起因是 HEVC 专利费高昂、授权混乱，目标是一套免版税的下一代编码。",
    "On 1 September 2015 Amazon, Cisco, Google, Intel, Microsoft, Mozilla and Netflix founded the Alliance for Open Media (AOMedia), driven by HEVC's high and confusing licensing costs, to build a royalty-free next-generation codec.",
    [
     0
    ]
   ],
   [
    2016,
    "proto",
    "2016 年 4 月 7 日 AOMedia 发布参考编解码器 libaom 0.1.0，以 VP10 为基础合并 Daala、Thor 的工具；2017 年 10 月进入特性冻结。",
    "On 7 April 2016 AOMedia released reference codec libaom 0.1.0, built on VP10 with tools merged from Daala and Thor; a feature freeze followed in October 2017.",
    [
     0
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 3 月 28 日 AV1 码流规范正式发布，6 月 25 日推出经验证的 1.0.0；2019 年 1 月发布含 Errata 1 的修订版。",
    "The AV1 bitstream specification was released on 28 March 2018, validated version 1.0.0 followed on 25 June, and a revision with Errata 1 came in January 2019.",
    [
     0
    ]
   ],
   [
    2018,
    "paper",
    "Google 的 Yue Chen、Debargha Mukherjee 等在 Picture Coding Symposium 2018 发表《An Overview of Core Coding Tools in the AV1 Video Codec》，介绍超级块划分、扩展帧内方向预测、CfL、复合预测、多种变换和环路滤波，并给出相对 VP9 / HEVC 的初步对比。",
    "Yue Chen, Debargha Mukherjee and colleagues at Google presented \"An Overview of Core Coding Tools in the AV1 Video Codec\" at the Picture Coding Symposium 2018, covering superblock partitioning, extended intra directions, CfL, compound prediction, multiple transforms and loop filters, with early comparisons against VP9 and HEVC.",
    [
     1
    ]
   ],
   [
    2018,
    "mass",
    "2018 年 9 月 YouTube 推出 AV1 Beta 播放列表，10 月 Chrome 70 支持 AV1 软解，AV1 首次到达普通用户；2019 年 5 月 Firefox 67 改用 VideoLAN 的 dav1d 解码器。",
    "In September 2018 YouTube launched an AV1 beta playlist and in October Chrome 70 added software AV1 decoding, bringing AV1 to ordinary users for the first time; Firefox 67 switched to VideoLAN's dav1d decoder in May 2019.",
    [
     0
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 11 月 26 日 MediaTek 发布 Dimensity 1000，是首款集成 AV1 硬件解码（最高 4K60）的手机 SoC；同年 10 月 Chips&Media 推出 WAVE510A AV1 解码 IP。",
    "On 26 November 2019 MediaTek announced the Dimensity 1000, the first smartphone SoC with a hardware AV1 decoder (up to 4K60); in October that year Chips&Media launched its WAVE510A AV1 decoder IP.",
    [
     2
    ]
   ],
   [
    2020,
    "mass",
    "2020 年 2 月 5 日 Netflix 在 Android 上开始推送 AV1，比 VP9 省约 20%；之后 Samsung Galaxy S21、Pixel 6（2021）、iPhone 15 Pro（A17 Pro，2023）陆续加入硬解。",
    "On 5 February 2020 Netflix began streaming AV1 on Android, about 20% more efficient than VP9; hardware decoding then arrived in the Samsung Galaxy S21, Pixel 6 (2021) and iPhone 15 Pro (A17 Pro, 2023).",
    [
     0
    ]
   ],
   [
    2022,
    "mass",
    "2022 年 Intel Arc Alchemist 成为首款带 AV1 硬件编码的 GPU，此前 AV1 编码只能靠软件；同年底 NVIDIA RTX 40 与 AMD RDNA 3 跟进。",
    "In 2022 Intel Arc Alchemist became the first GPU with hardware AV1 encoding, which until then had been software-only; NVIDIA RTX 40 and AMD RDNA 3 followed late that year.",
    [
     3,
     0
    ]
   ],
   [
    2023,
    "corp",
    "2023 年 Google Tensor G3（Pixel 8）的 BigWave 视频模块成为首个支持 AV1 硬件编码的手机 SoC，但 Pixel Camera 并未开放 AV1 录像。",
    "In 2023 the BigWave video block in Google's Tensor G3 (Pixel 8) became the first smartphone SoC with hardware AV1 encoding, though the Pixel Camera app did not expose AV1 recording.",
    [
     4
    ]
   ],
   [
    2024,
    "mass",
    "2024 年 Axis 发布 ARTPEC-9 SoC，是网络摄像机行业首次支持 AV1 编码，在 H.264 基础上再降约 20% 码率；首款搭载的 AXIS Q1728 在 ISC East 亮相，2025 年起扩大到更多机型。",
    "In 2024 Axis released the ARTPEC-9 SoC, the network-camera industry's first with AV1 encoding, cutting bitrate by roughly another 20% beyond H.264; the first camera using it, the AXIS Q1728, debuted at ISC East, with more models from 2025.",
    [
     6
    ]
   ],
   [
    2025,
    "mass",
    "2025 年 Pixel 10 的 Tensor G5 改用 Chips&Media WAVE677DV 编解码模块，相机 App 可直接录 AV1（或 VP9），号称同画质比 H.265 小约 30%。",
    "In 2025 the Pixel 10's Tensor G5 switched to the Chips&Media WAVE677DV codec block, and its camera app can record AV1 (or VP9) directly, claiming files about 30% smaller than H.265 at the same quality.",
    [
     5
    ]
   ],
   [
    2026,
    "end",
    "2026 年 5 月 28 日 AOMedia 定稿 AV2 1.0（6 月 9 日公布），比 AV1 再省 28–33% 码率，并加强 AR/VR 支持；AV1 开始进入被 AV2 接替的周期。",
    "On 28 May 2026 AOMedia finalised AV2 1.0 (announced 9 June), saving a further 28–33% bitrate over AV1 and adding AR/VR features; AV1 entered the cycle of being succeeded by AV2.",
    [
     7,
     0
    ]
   ]
  ],
  "now": [
   "AV1 已是 YouTube、Netflix 等流媒体的主力编码，主流手机、电视、GPU 都有硬解，GPU、部分手机和监控摄像机已能硬件编码；Sisvel 仍在推 AV1 专利池，免版税的说法存在争议。",
   "AV1 is now a main codec for YouTube, Netflix and other streamers, with hardware decoding in mainstream phones, TVs and GPUs, and hardware encoding in GPUs, some phones and surveillance cameras; Sisvel still runs an AV1 patent pool, so the royalty-free claim is contested."
  ],
  "replaced": [
   "正被 2026 年发布的 AV2 接替，但硬件普及需要数年，AV1 仍会长期服役；在广播领域则与 VVC 竞争。",
   "It is being succeeded by AV2 (released 2026), but hardware rollout will take years so AV1 will stay in service for a long time; in broadcasting it competes with VVC."
  ],
  "refs": [
   {
    "t": "Wikipedia: AV1",
    "u": "https://en.wikipedia.org/wiki/AV1"
   },
   {
    "t": "Google Research: An Overview of Core Coding Tools in the AV1 Video Codec (PCS 2018)",
    "u": "https://research.google/pubs/an-overview-of-core-coding-tools-in-the-av1-video-codec/"
   },
   {
    "t": "Notebookcheck: Dimensity 1000 is the first mobile SoC with hardware AV1 decoder",
    "u": "https://www.notebookcheck.net/The-MediaTek-Dimensity-1000-is-the-first-mobile-SoC-to-have-a-hardware-based-AV1-video-decoder.463314.0.html"
   },
   {
    "t": "Tom's Hardware: Intel Arc AV1 encoder",
    "u": "https://www.tomshardware.com/news/intel-arc-av1-encoder-dominates-nvenc"
   },
   {
    "t": "Notebookcheck: Tensor G3 first smartphone SoC with AV1 encoding",
    "u": "https://www.notebookcheck.net/Source-code-confirms-Google-Tensor-G3-as-the-first-smartphone-SoC-to-have-hardware-accelerated-AV1-encoding-support.806980.0.html"
   },
   {
    "t": "Android Authority: Pixel 10 can record in AV1 and VP9",
    "u": "https://www.androidauthority.com/pixel-10-video-recording-av1-vp9-3586429"
   },
   {
    "t": "Axis: ARTPEC-9 SoC with AV1 encoding",
    "u": "https://newsroom.axis.com/press-release/artpec-soc"
   },
   {
    "t": "AOMedia: Alliance for Open Media Releases AV2 Codec",
    "u": "https://aomedia.org/press%20releases/Alliance-for-Open-Media-Releases-AV2-Codec/"
   }
  ]
 },
 "vvc": {
  "stages": [
   [
    2015,
    "idea",
    "2015 年 10 月 ITU-T VCEG 与 ISO/IEC MPEG 成立 Joint Video Exploration Team（JVET），在 HEVC 参考软件 HM 上搭出探索模型 JEM，评估超越 HEVC 的压缩工具。",
    "In October 2015 ITU-T VCEG and ISO/IEC MPEG formed the Joint Video Exploration Team (JVET), building the exploration model JEM on top of the HEVC reference software HM to evaluate tools beyond HEVC.",
    [
     0
    ]
   ],
   [
    2017,
    "corp",
    "2017 年 10 月 JVET 发出正式 Call for Proposals，标准化工作启动，Qualcomm、Huawei、Fraunhofer HHI、Samsung 等多家企业提交方案。",
    "In October 2017 JVET issued the formal Call for Proposals, launching standardisation; companies such as Qualcomm, Huawei, Fraunhofer HHI and Samsung submitted proposals (approx.).",
    [
     0
    ]
   ],
   [
    2018,
    "proto",
    "2018 年 4 月评估提案后产出 Working Draft 1，参考软件改为 VVC Test Model（VTM），新标准定名 Versatile Video Coding；IBC 2018 的演示显示比 HEVC 高效约 40%。",
    "After evaluating the proposals in April 2018, Working Draft 1 was produced, the reference software became the VVC Test Model (VTM) and the standard was named Versatile Video Coding; demos at IBC 2018 showed about 40% better efficiency than HEVC.",
    [
     0
    ]
   ],
   [
    2018,
    "rival",
    "同年 AOMedia 发布免版税的 AV1，成为 VVC 在流媒体领域的直接对手；VVC 则延续 HEVC 的专利池授权模式。",
    "The same year AOMedia released royalty-free AV1, VVC's direct rival in streaming; VVC kept HEVC's patent-pool licensing model.",
    [
     0
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 7 月发出 Committee Draft 投票，10 月发出 Draft International Standard 投票。",
    "The Committee Draft ballot went out in July 2019 and the Draft International Standard ballot in October 2019.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 7 月 6 日 JVET 完成 VVC 第一版，8 月作为 ITU-T H.266 获批，同时是 ISO/IEC 23090-3（MPEG-I Part 3）；同画质下比 HEVC 省约 50% 码率，并针对 8K、HDR、360 度、屏幕内容优化。",
    "On 6 July 2020 JVET completed VVC version 1, approved as ITU-T H.266 in August and also as ISO/IEC 23090-3 (MPEG-I Part 3); it saves about 50% bitrate over HEVC at equal quality and targets 8K, HDR, 360-degree and screen content.",
    [
     0,
     1,
     3
    ]
   ],
   [
    2020,
    "proto",
    "2020 年 9 月 Fraunhofer HHI（Detlev Marpe、Benjamin Bross 等所在的 VCA 部门）在 GitHub 开源 VVenC 编码器与 VVdeC 解码器，后者可实时解码到 4Kp60。",
    "In September 2020 Fraunhofer HHI's VCA department (home of Detlev Marpe, Benjamin Bross and others) open-sourced the VVenC encoder and VVdeC decoder on GitHub, the latter able to decode live up to 4Kp60.",
    [
     3,
     4
    ]
   ],
   [
    2021,
    "paper",
    "Benjamin Bross、Ye-Kui Wang、Yan Ye、Shan Liu、Jianle Chen、Gary J. Sullivan、Jens-Rainer Ohm 在 IEEE TCSVT 31 卷 10 期发表《Overview of the Versatile Video Coding (VVC) Standard and its Applications》，总结 VVC 比 HEVC 省约 50%、比 AVC 省约 75%。",
    "Benjamin Bross, Ye-Kui Wang, Yan Ye, Shan Liu, Jianle Chen, Gary J. Sullivan and Jens-Rainer Ohm published \"Overview of the Versatile Video Coding (VVC) Standard and its Applications\" in IEEE TCSVT vol. 31 no. 10, reporting about 50% savings over HEVC and 75% over AVC.",
    [
     2
    ]
   ],
   [
    2021,
    "mass",
    "2021 年 11 月 19 日 MediaTek 发布 Pentonic 2000，是首款支持 VVC 解码的商用电视芯片（7nm、8K 120Hz）；2022 年 8 月 Realtek RTD1319D 机顶盒芯片也加入 4K60 VVC 解码。",
    "On 19 November 2021 MediaTek announced the Pentonic 2000, the first commercial TV chip with VVC decoding (7nm, 8K 120Hz); in August 2022 Realtek's RTD1319D set-top-box chip added 4K60 VVC decoding.",
    [
     5,
     0
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 2 月 DVB 把 VVC 纳入欧洲广播工具箱；4 月 H.266 第二版加入高比特深度等扩展，2023 年 9 月发布第三版。",
    "In February 2022 DVB added VVC to its European broadcasting toolbox; in April the second edition of H.266 added high bit-depth extensions, and a third edition followed in September 2023.",
    [
     0,
     1
    ]
   ],
   [
    2024,
    "mass",
    "2024 年 Intel Lunar Lake（Core Ultra 200V）的 Xe2 核显成为首个支持 VVC 硬解的 PC GPU，AMD、NVIDIA 尚未跟进；FFmpeg 7.0 同年加入实验性 VVC 解码，7.1 转为正式。",
    "In 2024 the Xe2 integrated GPU in Intel Lunar Lake (Core Ultra 200V) became the first PC GPU with VVC hardware decoding, ahead of AMD and NVIDIA; FFmpeg 7.0 added experimental VVC decoding that year, made official in 7.1.",
    [
     6,
     0
    ]
   ],
   [
    2025,
    "mass",
    "2025 年 8 月巴西 TV 3.0 启用，以 VVC 搭配 MPEG-5 LCEVC 用于广播和宽带传输；同年 12 月 Access Advance 收购 Via LA 的专利池，但仍有大量专利持有者不在池内。",
    "In August 2025 Brazil's TV 3.0 launched using VVC with MPEG-5 LCEVC for broadcast and broadband; that December Access Advance acquired Via LA's patent pools, though many patent holders remain outside any pool.",
    [
     0
    ]
   ],
   [
    2026,
    "mass",
    "2026 年 1 月 H.266 第四版生效；9 月 MediaTek Dimensity 9600 Pro 发布，是首款带 VVC 硬件解码（8K60 10-bit）的手机 SoC，首发于 vivo X500 Pro、OPPO Find X10 Pro Max。",
    "The fourth edition of H.266 took effect in January 2026; in September MediaTek launched the Dimensity 9600 Pro, the first smartphone SoC with VVC hardware decoding (8K60 10-bit), debuting in the vivo X500 Pro and OPPO Find X10 Pro Max.",
    [
     1,
     7
    ]
   ]
  ],
  "now": [
   "VVC 已在电视芯片、机顶盒、巴西 TV 3.0、Intel 笔记本和 2026 年旗舰手机芯片里落地，但流媒体平台和浏览器大多仍选 AV1 / HEVC，专利授权分散是普及的最大障碍。",
   "VVC has shipped in TV chips, set-top boxes, Brazil's TV 3.0, Intel laptops and 2026 flagship phone chips, but most streaming platforms and browsers still choose AV1 / HEVC; fragmented patent licensing is the biggest barrier."
  ],
  "replaced": [
   "尚未被替代；JVET 已在探索下一代（超越 VVC）的编码，同时免版税的 AV2 在流媒体领域与它竞争。",
   "Not yet replaced; JVET is already exploring beyond-VVC coding, while royalty-free AV2 competes with it in streaming."
  ],
  "refs": [
   {
    "t": "Wikipedia: Versatile Video Coding",
    "u": "https://en.wikipedia.org/wiki/Versatile_Video_Coding"
   },
   {
    "t": "ITU-T Recommendation H.266 (all editions)",
    "u": "https://www.itu.int/rec/T-REC-H.266"
   },
   {
    "t": "Bross et al., Overview of the VVC Standard and its Applications (IEEE TCSVT 2021)",
    "u": "https://www.microsoft.com/en-us/research/?p=798226"
   },
   {
    "t": "Fraunhofer HHI: H.266 / VVC",
    "u": "https://www.hhi.fraunhofer.de/en/departments/vca/technologies-and-solutions/h266-vvc.html"
   },
   {
    "t": "GitHub: fraunhoferhhi/vvenc",
    "u": "https://github.com/fraunhoferhhi/vvenc"
   },
   {
    "t": "MediaTek: Pentonic 2000 for flagship 8K 120Hz TVs",
    "u": "https://www.mediatek.com/press-room/mediatek-announces-new-pentonic-smart-tv-family-with-new-pentonic-2000-for-flagship-8k-120hz-tvs"
   },
   {
    "t": "Neowin: Intel beats AMD and Nvidia to support H.266 (VVC) decoding",
    "u": "https://www.neowin.net/news/just-like-with-av1-intel-beats-amd-and-nvidia-to-support-h266-vvc-decoding/"
   },
   {
    "t": "MediaTek Dimensity 9600 Pro",
    "u": "https://www.mediatek.com/products/smartphones/mediatek-dimensity-9600-pro"
   }
  ]
 },
 "apv": {
  "stages": [
   [
    2021,
    "rival",
    "2021 年 iPhone 13 Pro 开始在手机上录 Apple ProRes，之后 iPhone 15 Pro 加入 ProRes Log；ProRes 是 Apple 私有格式，Android 阵营缺少对等的专业中间编码，这正是 APV 要补的空位。",
    "From 2021 the iPhone 13 Pro recorded Apple ProRes on a phone, and the iPhone 15 Pro added ProRes Log; ProRes is Apple-proprietary and Android lacked an equivalent professional intermediate codec, the gap APV set out to fill.",
    [
     0
    ]
   ],
   [
    2023,
    "corp",
    "Samsung 自 2023 年 10 月起独立开发 APV（Advanced Professional Video），并在 2023 年 Samsung Developer Conference 上首次公开，号称感知无损且比现有格式省约 20% 存储；之后与 Qualcomm 合作做硬件落地。",
    "Samsung began developing APV (Advanced Professional Video) independently in October 2023 and unveiled it at the 2023 Samsung Developer Conference, claiming perceptually lossless quality with about 20% less storage than existing formats; it then worked with Qualcomm on hardware.",
    [
     0,
     1
    ]
   ],
   [
    2024,
    "paper",
    "2024 年 3 月 Samsung 的 Youngkwon Lim、Minwoo Park、Madhukar Budagavi、Rajan Joshi、Kwang Pyo Choi 向 IETF 提交 draft-lim-apv-00，公开码流与解码过程：仅帧内编码、无像素域预测、tile 并行。",
    "In March 2024 Samsung's Youngkwon Lim, Minwoo Park, Madhukar Budagavi, Rajan Joshi and Kwang Pyo Choi submitted draft-lim-apv-00 to the IETF, publishing the bitstream and decoding process: intra-only, no pixel-domain prediction, tile-parallel.",
    [
     2
    ]
   ],
   [
    2024,
    "proto",
    "2024 年 10 月 31 日 Academy Software Foundation 接纳 Samsung 主导的 OpenAPV 为 sandbox 项目，提供免版税的开源参考实现，Samsung 同时成为 ASWF Premier 会员。",
    "On 31 October 2024 the Academy Software Foundation adopted Samsung-led OpenAPV as a sandbox project offering a royalty-free open-source reference implementation, with Samsung joining as a Premier member.",
    [
     1
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 1 月 Android 16 Beta 1 宣布原生支持 APV 的 422-10 Profile（YUV 4:2:2、10-bit、码率最高约 2Gbps），6 月 Android 16 正式版发布。",
    "In January 2025 Android 16 Beta 1 announced native support for APV's 422-10 profile (YUV 4:2:2, 10-bit, up to about 2 Gbps), and Android 16 shipped in June.",
    [
     4
    ]
   ],
   [
    2025,
    "ver",
    "2025 年 8 月 22 日 FFmpeg 8.0 加入原生 APV 解码、经 libopenapv 的编码以及 MP4 / ISOBMFF 封装；9 月 DaVinci Resolve 20.2 支持 APV。",
    "On 22 August 2025 FFmpeg 8.0 added native APV decoding, encoding via libopenapv, and MP4 / ISOBMFF muxing; in September DaVinci Resolve 20.2 added APV support.",
    [
     5,
     6
    ]
   ],
   [
    2025,
    "corp",
    "2025 年 9 月 24 日 Qualcomm 发布 Snapdragon 8 Elite Gen 5，其 Spectra ISP 是首个能录 APV 的移动平台；Samsung Exynos 2600 随后也支持。",
    "On 24 September 2025 Qualcomm announced the Snapdragon 8 Elite Gen 5, whose Spectra ISP was the first mobile platform able to record APV; Samsung's Exynos 2600 followed.",
    [
     7,
     0
    ]
   ],
   [
    2026,
    "ver",
    "2026 年 2 月 APV 以 RFC 9924（Informational，独立提交流）发布：8×8 DCT、zig-zag 扫描、轻量熵编码，支持 4:0:0 到 4:4:4:4、10–16 bit，码率可到数 Gbps。",
    "In February 2026 APV was published as RFC 9924 (Informational, independent stream): 8×8 DCT, zig-zag scan and lightweight entropy coding, supporting 4:0:0 to 4:4:4:4 at 10–16 bits and bitrates of several Gbps.",
    [
     3
    ]
   ],
   [
    2026,
    "mass",
    "2026 年 2 月 Galaxy S26 Ultra 成为首款能录 APV 的手机：APV 422 HQ / LQ 两档，最高 8K30，可选 HDR 或 Log，可直录 USB 外接盘；HQ 档 4K30 约 796Mbps、8K30 约 3184Mbps。",
    "In February 2026 the Galaxy S26 Ultra became the first phone to record APV: APV 422 HQ / LQ, up to 8K30, HDR or Log, with direct recording to USB storage; HQ runs about 796 Mbps at 4K30 and 3,184 Mbps at 8K30.",
    [
     6,
     0
    ]
   ],
   [
    2026,
    "ver",
    "2026 年 10 月 OpenAPV 更新到 1.1.3.0，持续完善参考实现。",
    "In October 2026 OpenAPV reached version 1.1.3.0, continuing to refine the reference implementation.",
    [
     0
    ]
   ]
  ],
  "now": [
   "APV 已有 Android 16 系统支持、Snapdragon 8 Elite Gen 5 / Exynos 2600 硬件、FFmpeg 与 DaVinci Resolve 等后期软件，但目前能录 APV 的手机基本只有 Galaxy S26 Ultra，生态仍在起步。",
   "APV now has system support in Android 16, hardware in the Snapdragon 8 Elite Gen 5 / Exynos 2600 and post tools such as FFmpeg and DaVinci Resolve, but the Galaxy S26 Ultra is essentially the only phone that records it; the ecosystem is just starting."
  ],
  "replaced": [
   "尚未被替代；它要挑战的是 Apple ProRes 在手机专业录像中的地位。",
   "Not replaced; it is the challenger aiming at Apple ProRes's position in professional phone video."
  ],
  "refs": [
   {
    "t": "Wikipedia: Advanced Professional Video",
    "u": "https://en.wikipedia.org/wiki/Advanced_Professional_Video"
   },
   {
    "t": "ASWF adopts OpenAPV as a hosted project led by Samsung",
    "u": "https://www.aswf.io/news/academy-software-foundation-adopts-openapv-as-a-hosted-project-led-by-new-premier-member-samsung-electronics/"
   },
   {
    "t": "IETF draft-lim-apv-00 (March 2024)",
    "u": "https://datatracker.ietf.org/doc/html/draft-lim-apv-00"
   },
   {
    "t": "RFC 9924: Advanced Professional Video",
    "u": "https://datatracker.ietf.org/doc/rfc9924/"
   },
   {
    "t": "Android Developers Blog: First beta of Android 16",
    "u": "https://android-developers.googleblog.com/2025/01/first-beta-android16.html"
   },
   {
    "t": "FFmpeg 8.0 released with APV & ProRes RAW decoder",
    "u": "https://ubuntuhandbook.org/index.php/2025/08/ffmpeg-8-0-released-apv-prores-raw-decoder/"
   },
   {
    "t": "Samsung Developer: APV",
    "u": "https://developer.samsung.com/mobile/apv.html"
   },
   {
    "t": "Qualcomm: Snapdragon 8 Elite Gen 5 announcement",
    "u": "https://www.qualcomm.com/news/releases/2025/09/snapdragon-8-elite-gen-5--the-world-s-fastest-mobile-system-on-a"
   }
  ]
 }
};
