/* 防抖时间线每项技术的发展史（点卡片「发展史 →」打开）。由 js/tl-page.js 在 is 时间线页按需加载，主站不加载。
   stages: [年份, 阶段 idea 设想 / paper 论文 / proto 原型 / corp 企业研发 / mass 量产 / ver 迭代 / rival 竞争方案 / end 替代淘汰, 中文, English, [来源序号]]。
   资料由子代理联网核对后整理；只找到间接来源的标了「约」。 与其他主题同名的技术直接复用：lens:ois、lens:ibis、isp:eis、comp:msr>pixshift */
TIMELINES.is.hist = {
 "gyromount": {
  "stages": [
   [
    1960,
    "idea",
    "Westinghouse Canada 电子部先进工程经理 J. Noxon Leavitt 提出陀螺稳定摄影云台的设想；该部门为加拿大国防研究机构（Defence Research Establishment）研制的稳定云台命名为 WESSCAM（Westinghouse Steered Stabilized Camera Mount），Wikipedia 把立项记在 1959 年。",
    "J. Noxon Leavitt, manager of advanced engineering in Westinghouse Canada's electronics division, conceived the gyro-stabilized camera mount; the division's stabilized mount for Canada's Defence Research Establishment was named WESSCAM (Westinghouse Steered Stabilized Camera Mount), a project Wikipedia dates to 1959.",
    [
     0,
     1
    ]
   ],
   [
    1962,
    "rival",
    "Roger Monteran 为《The Longest Day》做出第一套直升机稳定摄影架，不用陀螺，而是用与直升机振动频率匹配的弹簧把摄影机「悬浮」起来做纯机械隔振。",
    "Roger Monteran built the first stabilized helicopter camera mount for 'The Longest Day', using no gyros: springs tuned to the helicopter's vibration made the camera effectively weightless and mechanically isolated.",
    [
     2
    ]
   ],
   [
    1965,
    "proto",
    "Nelson Tyler 的 Tyler mount 原型首次用于电影《The Satan Bug》：三轴手动操作、机械隔振，摄影师绑在直升机舱外操作，后来在云台上加装 Kenyon 陀螺增稳；同年 Leavitt 向加拿大国家电影局（NFB）演示 WESSCAM，可装在 35 英尺伸缩杆上或挂在 600 英尺高的直升机上。",
    "Nelson Tyler's prototype Tyler mount debuted on 'The Satan Bug': three-axis, manually operated and mechanically isolated, with the operator strapped in outside the helicopter; Kenyon gyros were later added. The same year Leavitt demonstrated WESSCAM to the National Film Board of Canada on a 35-ft telescoping pole and on a helicopter at up to 600 ft.",
    [
     2,
     1
    ]
   ],
   [
    1967,
    "corp",
    "加拿大军方停止资助 WESSCAM 项目，技术留在 Westinghouse Canada 内部，转向民用拍摄寻找出路。",
    "Canadian military funding for WESSCAM ended, leaving the technology inside Westinghouse Canada to look for civilian filming work.",
    [
     1
    ]
   ],
   [
    1969,
    "mass",
    "1969 年 4 月 Flight International 刊登装在 Bell 206A JetRanger 直升机上的 WESSCAM 照片：遥控、隔振、陀螺稳定，摄影机装在机身外的球形吊舱里；National Helicopter 运营了第一台民用 Wescam 多年。",
    "In April 1969 Flight International published photos of the remote-controlled, vibration-isolated, gyro-stabilized WESSCAM ball mounted on a Bell 206A JetRanger; National Helicopter operated the first civilian Wescam for many years.",
    [
     0,
     2
    ]
   ],
   [
    1974,
    "corp",
    "1974 年 3 月 1 日 Leavitt 从 Westinghouse Canada 买下专利、实验设备和商业权，创立 Istec Ltd.（Isolation Stabilization Technologies），17 名员工、年收入约 100 万美元，继续开发更名后的 Wescam 系统。",
    "On 1 March 1974 Leavitt bought the patents, lab equipment and commercial rights from Westinghouse Canada and founded Istec Ltd. (Isolation Stabilization Technologies) with 17 employees and about $1M revenue, developing the renamed Wescam system.",
    [
     0,
     1
    ]
   ],
   [
    1980,
    "ver",
    "Fujinon 推出 Stabiscope 陀螺稳定双筒望远镜，用高速飞轮的定轴性吸收车辆、直升机、船舶上最高 ±5° 的振动，把吊舱的原理缩到手持望远镜里；现行型号为 S1240 / S1640。",
    "Fujinon introduced the Stabiscope gyro-stabilized binocular, whose flywheel absorbs up to ±5° of vibration on vehicles, helicopters and boats, shrinking the pod principle into a hand-held instrument; current models are the S1240 and S1640.",
    [
     3
    ]
   ],
   [
    1990,
    "ver",
    "Wescam 从 1983 年 Fiesta Bowl 起进入体育直播航拍，约 1990 年 Leavitt 获美国电影艺术与科学学院技术奖；1994 年 Istec 改名 Wescam，1995 年在多伦多证交所上市，90 年代中期成为大型体育赛事航拍标配。",
    "Wescam entered live sports aerials with the 1983 Fiesta Bowl; around 1990 Leavitt received an Academy technical award. Istec was renamed Wescam in 1994, listed on the Toronto Stock Exchange in 1995, and by the mid-1990s was standard for major sporting events.",
    [
     1,
     0
    ]
   ],
   [
    1998,
    "rival",
    "FLIR Systems 在 Asian Aerospace '98 发布 Star SAFIRE：在 90 年代 SAFIRE 基础上改用第三代 3–5 μm 中波红外，三档视场，可选激光测距/指示器，此后成为警用、海巡与军用直升机的主流光电吊舱。",
    "FLIR Systems debuted Star SAFIRE at Asian Aerospace '98, an upgrade of its 1990s SAFIRE with third-generation 3–5 μm mid-wave IR, three fields of view and optional laser rangefinder/designator; it became a mainstream EO/IR turret for police, coast-guard and military helicopters.",
    [
     4
    ]
   ],
   [
    2007,
    "corp",
    "Axsys Technologies 以 2700 万美元现金收购加州 Grass Valley 的 Cineflex LLC（创始人 John Coyle，约 25 人）；Cineflex 多轴陀螺稳定航拍系统因 BBC/Discovery 高清纪录片《Planet Earth》远距离追拍动物而闻名，之后并入 General Dynamics，2017 年由 GSS 接手其商标与 IP。",
    "Axsys Technologies bought Cineflex LLC of Grass Valley, California (founder John Coyle, ~25 staff) for $27M cash; Cineflex's multi-axis gyro-stabilized aerial systems were famous from BBC/Discovery HD 'Planet Earth'. The line later passed to General Dynamics, and GSS bought the trademark and IP in 2017.",
    [
     5,
     6
    ]
   ],
   [
    2009,
    "ver",
    "Wescam（2002 年起属 L-3）推出 MX-10：17 kg，最多六种传感器，内置惯性测量单元；同系列 MX-15（45 kg）、MX-20（90 kg，20 km 以上远距）覆盖直升机到固定翼。",
    "Wescam (part of L-3 since 2002) launched the 17 kg MX-10 carrying up to six sensors with an integrated IMU, alongside the 45 kg MX-15 and 90 kg long-range (20+ km) MX-20 for helicopters and fixed-wing aircraft.",
    [
     0
    ]
   ],
   [
    2012,
    "end",
    "DJI 发布 Zenmuse Z15 无刷三轴云台（配 Sony NEX-5n，3500 美元），与 S800 六旋翼配套；多旋翼无人机加无刷电机直驱云台以极低成本替代了大量原本要租直升机加陀螺吊舱的航拍镜头。",
    "DJI released the Zenmuse Z15 brushless 3-axis gimbal (for Sony NEX-5n, $3,500) to pair with the S800 hexacopter; multirotor drones with direct-drive brushless gimbals replaced many shots that once needed a helicopter and a gyro pod, at a fraction of the cost.",
    [
     7
    ]
   ],
   [
    2013,
    "ver",
    "Shotover 发布 F1：碳纤维六轴陀螺稳定吊舱，可换装 ARRI Alexa M、RED Epic/Dragon、Sony F55、Phantom Flex、Canon C500 等，影视级直升机航拍延续到今天；Wescam 2019 年随 L3 与 Harris 合并成为 L3Harris Wescam。",
    "Shotover launched the F1, a carbon-fibre 6-axis gyro-stabilized gimbal taking ARRI Alexa M, RED Epic/Dragon, Sony F55, Phantom Flex or Canon C500, keeping high-end helicopter aerials alive; Wescam became L3Harris Wescam after the 2019 L3–Harris merger.",
    [
     6,
     0
    ]
   ]
  ],
  "now": [
   "大型陀螺稳定吊舱仍是警用、军用、海巡直升机和固定翼的标配（L3Harris Wescam MX 系列、Teledyne FLIR Star SAFIRE 380 系列），影视高端航拍用 Shotover、GSS Cineflex；陀螺稳定双筒望远镜（Fujinon Stabiscope）仍在售。",
   "Large gyro-stabilized turrets remain standard on police, military and coast-guard aircraft (L3Harris Wescam MX, Teledyne FLIR Star SAFIRE 380) and high-end film aerials use Shotover and GSS Cineflex; gyro binoculars such as Fujinon Stabiscope are still sold."
  ],
  "replaced": [
   "机械飞轮陀螺已被 MEMS/光纤陀螺加伺服电机的主动稳定取代；中低端航拍则大量被无人机无刷云台替代，大型吊舱退守远距、长航时和夜视任务。",
   "Mechanical flywheel gyros gave way to MEMS/fibre-optic gyros driving servo motors; low- and mid-range aerials largely moved to drone brushless gimbals, leaving big turrets for long-range, long-endurance and night missions."
  ],
  "refs": [
   {
    "t": "Wescam - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Wescam"
   },
   {
    "t": "DAIRHub: National Film Board of Canada and Nox Leavitt's Wescam",
    "u": "https://www.dairhub.com/?p=19281"
   },
   {
    "t": "ProVideo Coalition: Cameras in the Sky",
    "u": "https://www.provideocoalition.com/cameras-in-the-sky/"
   },
   {
    "t": "FUJIFILM: STABISCOPE Series",
    "u": "https://www.fujifilm.com/us/en/consumer/binoculars/stabiscope"
   },
   {
    "t": "Flight International: New thermal imaging system makes debut (1998)",
    "u": "https://flightglobal.com/new-thermal-imaging-system-makes-debut/19746.article"
   },
   {
    "t": "Axsys Technologies Acquires Cineflex Camera Systems",
    "u": "https://www.einpresswire.com/article/56319376/axsys-technologies-acquires-cineflex-camera-systems"
   },
   {
    "t": "Helihub: Shotover launches F1 (2013)",
    "u": "https://www.helihub.com/?p=82396"
   },
   {
    "t": "DJI Innovations Announces Availability of Zenmuse and S800",
    "u": "https://dji.com/newsroom/news/dji-innovations-announces-availability-of-zenmuse-and-s800"
   }
  ]
 },
 "steadicam": {
  "stages": [
   [
    1969,
    "idea",
    "费城摄影师 Garrett Brown 在 1969–1970 年开始实验，想让手持摄影机像在轨道车上一样平稳地移动。",
    "Philadelphia cinematographer Garrett Brown began experimenting in 1969–1970 to make a hand-held camera move as smoothly as on a dolly.",
    [
     0
    ]
   ],
   [
    1973,
    "proto",
    "Brown 做出第一台原型「Brown's Stabilizer」：摄影机装在带配重的平衡杆上，重心落在万向节处，通过等弹力臂连到操作员身上的背心。",
    "Brown built the first prototype, 'Brown's Stabilizer': the camera on a counterweighted sled balanced at a gimbal, attached through an isoelastic arm to a vest on the operator.",
    [
     0,
     1
    ]
   ],
   [
    1974,
    "proto",
    "Brown 拍出演示片，包括在费城艺术博物馆台阶上跑上跑下的镜头，这卷片子让好莱坞注意到这个装置。",
    "Brown shot a demo reel, including runs up and down the Philadelphia Museum of Art steps, which caught Hollywood's attention.",
    [
     1
    ]
   ],
   [
    1975,
    "corp",
    "最终设计在 1975 年定型，由 Cinema Products Corporation 获得授权并以 Steadicam 品牌推出。",
    "The final design was completed in 1975 and introduced under the Steadicam brand by Cinema Products Corporation.",
    [
     1,
     0
    ]
   ],
   [
    1976,
    "mass",
    "Steadicam 首次用于院线长片《Bound for Glory》，同年用于《Marathon Man》的纽约追逐戏和《Rocky》的费城街道及艺术博物馆台阶场景，均由 Brown 本人掌机。",
    "Steadicam made its feature debut in 'Bound for Glory' and the same year shot the New York chases of 'Marathon Man' and the Philadelphia streets and Art Museum steps of 'Rocky', all operated by Brown himself.",
    [
     1,
     0
    ]
   ],
   [
    1978,
    "ver",
    "Garrett Brown 与 Cinema Products 因发明和发展 Steadicam 获奥斯卡科学技术奖（Academy Award of Merit）。",
    "Garrett Brown and Cinema Products received an Academy Award of Merit for the invention and development of Steadicam.",
    [
     1
    ]
   ],
   [
    1980,
    "ver",
    "Stanley Kubrick 的《The Shining》促成「low mode」低机位模式，镜头能贴近地面跟拍；该片大幅推高了需求。1983 年《Return of the Jedi》还在 Steadicam 上加陀螺拍摄飞行摩托背景。",
    "Kubrick's 'The Shining' led to 'low mode', letting the camera shoot from barely above the floor and boosting demand; 'Return of the Jedi' (1983) added gyros to a Steadicam for the speeder-bike plates.",
    [
     1,
     0
    ]
   ],
   [
    1990,
    "ver",
    "80 年代后期 Cinema Products 推出适配 20–25 磅 Betacam 等摄录机的 EFP 版；约 1990 年推出面向家用摄像机的 Steadicam JR（约 2 磅、600 美元），把平衡杆原理带进消费市场。",
    "In the late 1980s Cinema Products released the EFP model for 20–25 lb camcorders such as Betacam; around 1990 the Steadicam JR (about 2 lb, $600) brought the sled principle to consumer camcorders.",
    [
     0
    ]
   ],
   [
    2000,
    "corp",
    "Tiffen 收购 Steadicam 品牌，此后推出 Merlin 等轻型手持型号，以及 Ultra2（2008 年获奥斯卡技术成就奖）、M-1 等专业系统。",
    "Tiffen acquired the Steadicam brand in 2000, later releasing light hand-held models such as the Merlin and professional systems such as the Ultra2 (2008 Academy Technical Achievement Award) and M-1.",
    [
     1
    ]
   ],
   [
    2010,
    "ver",
    "Tiffen 在 CES 2010 发布 iPhone 3GS 用 Steadicam Smoothee，获 CES 创新奖；2011 年 1–2 月出货 iPhone 3GS / iPhone 4 版，NAB 2011 加 Flip MinoHD、iPod touch 版。",
    "Tiffen unveiled the Steadicam Smoothee for iPhone 3GS at CES 2010, a CES award winner; iPhone 3GS and iPhone 4 versions shipped in January–February 2011, with Flip MinoHD and iPod touch versions announced at NAB 2011.",
    [
     2
    ]
   ],
   [
    2013,
    "rival",
    "Freefly Systems 的 MōVI M10 在 2013 年 4 月由 Vincent Laforet 博客首发、NAB 2013 展出：三轴无刷电机加 IMU 的手持电子云台，重 3.4 磅，不需要背心和弹簧臂；DJI Ronin 等随后把电子稳定器推向大众，手机稳定器也取代了 Smoothee 类机械产品。",
    "Freefly's MōVI M10, unveiled on Vincent Laforet's blog in April 2013 and shown at NAB 2013, was a 3.4 lb hand-held 3-axis brushless gimbal with IMU and no vest or arm; DJI Ronin and others then took motorized gimbals mainstream, and phone gimbals displaced Smoothee-style mechanical rigs.",
    [
     3
    ]
   ],
   [
    2018,
    "ver",
    "Tiffen 的 Jerry Holway 在 NAB 2018 发布 Steadicam M-1 Volt：在传统 Steadicam 万向节上加电机，只做地平线保持和抑制摆动，操作仍靠人；Volt 系列 2024 年获 Engineering Emmy。",
    "At NAB 2018 Tiffen's Jerry Holway introduced the Steadicam M-1 Volt, a motorized assist on the classic gimbal that only holds the horizon and damps pendulum motion while the operator still flies the rig; the Volt won an Engineering Emmy in 2024.",
    [
     4,
     5
    ]
   ]
  ],
  "now": [
   "专业 Steadicam 仍是电影、剧集和体育直播中承载重型摄影机长时间运动拍摄的主力，并与 Volt 电子辅助结合；轻型和手机市场已基本让位给电子云台。",
   "Professional Steadicam remains the workhorse for long moving shots with heavy cameras in film, TV drama and live sports, now combined with Volt electronic assist; the light and phone segments have largely gone to motorized gimbals."
  ],
  "replaced": [
   "消费级与轻型机械稳定器（Steadicam JR、Merlin、Smoothee）被三轴无刷电子云台（MōVI、DJI Ronin、手机稳定器）以及机身 OIS/EIS 替代；重型专业机位则是电子云台与 Steadicam 臂结合而不是替代。",
   "Consumer and light mechanical stabilizers (Steadicam JR, Merlin, Smoothee) were replaced by 3-axis brushless gimbals (MōVI, DJI Ronin, phone gimbals) and in-camera OIS/EIS; for heavy professional rigs gimbals are combined with the Steadicam arm rather than replacing it."
  ],
  "refs": [
   {
    "t": "Museum of Broadcast Communications: Steadicam",
    "u": "https://www.museum.tv/tv-encyclopedia-16/steadicam"
   },
   {
    "t": "Steadicam - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Steadicam"
   },
   {
    "t": "Cult of Mac: CES - Tiffen releases Steadicam Smoothee for iPhone 3GS",
    "u": "https://www.cultofmac.com/news/ces-tiffen-releases-steadicam-smoothee-for-iphone-3gs"
   },
   {
    "t": "ProVideo Coalition: MōVI - a new chapter in camera stabilization",
    "u": "https://www.provideocoalition.com/movi-a-new-chapter-in-camera-stabilization/"
   },
   {
    "t": "AbelCine: NAB 2018 Steadicam M-1 Volt",
    "u": "https://www.abelcine.com/articles/blog-and-knowledge/tech-news/nab-2018-steadicam-m-1-volt"
   },
   {
    "t": "Tiffen: Steadicam Volt Honored with 2024 Emmy Award",
    "u": "https://tiffen.com/Volt-Wins-Emmy"
   }
  ]
 },
 "vap": {
  "stages": [
   [
    1962,
    "paper",
    "Dynasciences Corporation（费城）创始人 Juan de la Cierva 申请专利 US3212420「Image Motion Compensator」（1965 年授权）：在航拍相机物镜前放一块两片玻璃夹液体的可变角楔形棱镜，由速率陀螺和伺服系统改变夹角，补偿飞机俯仰和横滚。",
    "Juan de la Cierva, founder of Dynasciences Corporation (Philadelphia), filed US3212420 'Image Motion Compensator' (granted 1965): a fluid-filled variable-angle wedge of two glass plates in front of an aerial camera lens, tilted by rate gyros and servos to cancel aircraft pitch and roll.",
    [
     0,
     2
    ]
   ],
   [
    1967,
    "paper",
    "de la Cierva 再申请 US3514192「Achromatic variable-angle fluid prism」（1970 年授权），针对单一液体棱镜的色散问题做消色差设计。",
    "de la Cierva filed US3514192 'Achromatic variable-angle fluid prism' (granted 1970) to correct the dispersion of a single fluid prism.",
    [
     1
    ]
   ],
   [
    1969,
    "mass",
    "Dynalens 投入实用：套在镜头前的几磅重的环形组件，内有两只小陀螺驱动电机倾斜玻璃板。1969 年 2 月 Time 报道它用于越南的侦察航拍、尼克松就职典礼直播和警用直升机监控，好莱坞用于《Tora! Tora! Tora!》等片的空中长焦镜头。",
    "The Dynalens went into use: a collar of a few pounds around the lens, with two small gyros driving motors that tilt the glass plates. Time (Feb 1969) reported it in Vietnam reconnaissance, the TV coverage of Nixon's inauguration and police helicopters, and Hollywood used it for aerial telephoto shots including 'Tora! Tora! Tora!'.",
    [
     2
    ]
   ],
   [
    1970,
    "ver",
    "第 42 届奥斯卡（1969 年度）把科学技术奖授予 Juan de la Cierva 和 Dynasciences，表彰 Dynalens 光学像移补偿器的设计与研制。",
    "The 42nd Academy Awards (for 1969) gave a Sci-Tech plaque to Juan de la Cierva and Dynasciences for the design and development of the Dynalens optical image motion compensator.",
    [
     2
    ]
   ],
   [
    1985,
    "corp",
    "约 80 年代中期 Canon 同时开展两条镜内光学防抖路线：可变角棱镜 VAP-IS 和移动镜组 Shift-IS；VAP 的密封波纹管、高折射率液体和灌封工艺花了多年攻关，要在 -27°F 到 +176°F、数千万次动作下保持可靠。",
    "From the mid-1980s Canon pursued two in-lens approaches: the Vari-Angle Prism (VAP-IS) and the shift lens group (Shift-IS); the sealed bellows, high-index liquid and filling process took years to make reliable from -27°F to +176°F over tens of millions of cycles.",
    [
     2
    ]
   ],
   [
    1992,
    "mass",
    "Sony 推出 CCD-TR900，采用可变角棱镜光学防抖；但单片棱镜带来色差，Sony 后来放弃该方案。Canon 同年也完成摄像机用 VAP 光学防抖系统。",
    "Sony launched the CCD-TR900 with Vari-Angle Prism OIS, but the single-prism design suffered chromatic aberration and Sony later dropped it; Canon completed its own camcorder VAP OIS system the same year.",
    [
     3
    ]
   ],
   [
    1994,
    "ver",
    "Canon 1994 年 10 月推出 ES750（UC600）和 ES800 等 8mm 摄像机，把 VAP 光学防抖带到普通家用机型；1997 年的 ES980 配 22 倍变焦仍用 VAP。",
    "In October 1994 Canon launched 8mm camcorders such as the ES750 (UC600) and ES800, bringing VAP OIS to mainstream family models; the 22x-zoom ES980 of 1997 still used VAP.",
    [
     4
    ]
   ],
   [
    1995,
    "ver",
    "Canon 推出首款防抖双筒望远镜 12×36 IS（12.5 万日元），按住按钮时 VAP 工作，补偿角约 ±0.8°；1997 年 9 月推出更小更便宜的 10×30 IS。",
    "Canon launched its first image-stabilized binocular, the 12×36 IS (¥125,000), with VAP active while a button is held (about ±0.8° correction); the smaller, cheaper 10×30 IS followed in September 1997.",
    [
     5
    ]
   ],
   [
    1996,
    "ver",
    "约 90 年代中期 Canon 推出首批标清广播便携镜头 VAP-IS，用模拟反馈控制环；VAP 放在整个镜头最前端，可获得很大的补偿角，适合肩扛 ENG。",
    "Around the mid-1990s Canon introduced the first SD broadcast portable lenses with VAP-IS using an analog feedback loop; placing the prism at the very front gives a large correction angle suited to shoulder-mounted ENG.",
    [
     6,
     2
    ]
   ],
   [
    1998,
    "rival",
    "移动镜组方案胜出：Canon 1995 年在 EF75-300mm F4-5.6 IS USM 首用 Shift-IS，1998 年 FV1 成为首款采用移动镜组防抖的消费级 DV 摄像机；Shift-IS 不损失光圈、长焦端更好做，消费机型逐步不再用 VAP。",
    "The shift-lens approach won out: Canon first used Shift-IS in the 1995 EF75-300mm F4-5.6 IS USM, and the 1998 FV1 was the first consumer DV camcorder with shift-type OIS; Shift-IS costs no aperture and scales to long focal lengths, so consumer models gradually abandoned VAP.",
    [
     2,
     3
    ]
   ],
   [
    2010,
    "ver",
    "Canon 发布 HJ15ex8.5B，首款内置光学防抖的 HDTV 2/3 英寸便携变焦镜头，VAP-IS 改为全数字控制环，速度提高 20 倍，在约 1.5–10 Hz 抖动下实现 100:1 抑制；代价是最大光圈从 F1.8 降到 F2.5。",
    "Canon released the HJ15ex8.5B, the first HDTV 2/3-inch portable zoom with built-in OIS; VAP-IS moved to an all-digital loop 20x faster, giving 100:1 shake reduction over roughly 1.5–10 Hz, at the cost of max aperture dropping from F1.8 to F2.5.",
    [
     2,
     6
    ]
   ],
   [
    2019,
    "ver",
    "Canon 在 NAB 2019 发布 4K UHD 便携镜头 CJ15ex8.5B（8.5–128 mm，F2.5），继续采用可变角棱镜防抖，面向车载、直升机、摩托跟拍。",
    "Canon announced the 4K UHD portable lens CJ15ex8.5B (8.5–128 mm, F2.5) at NAB 2019, still using Vari-Angle Prism stabilization for vehicle, helicopter and motorcycle work.",
    [
     7
    ]
   ]
  ],
  "now": [
   "VAP 只在 Canon 广播级便携镜头（HJ15ex8.5B、CJ15ex8.5B）和部分防抖双筒望远镜里保留，靠大补偿角服务肩扛和车载拍摄。",
   "VAP survives only in Canon broadcast portable lenses (HJ15ex8.5B, CJ15ex8.5B) and some IS binoculars, where its large correction angle serves shoulder and vehicle shooting."
  ],
  "replaced": [
   "在相机、消费摄像机和手机里被移动镜组 Shift-IS、传感器位移 IBIS 和电子防抖取代：VAP 体积大、损失光圈、长焦难做，单片棱镜还有色差；Canon 2018 年起的 32 mm 口径防抖双筒也改用移动镜组。",
   "In cameras, consumer camcorders and phones it was replaced by shift-lens IS, sensor-shift IBIS and EIS: VAP is bulky, costs aperture, struggles at long focal lengths, and a single prism adds chromatic aberration; Canon's 32 mm IS binoculars from about 2018 also use a shift lens."
  ],
  "refs": [
   {
    "t": "US3212420A - Image motion compensator (Google Patents)",
    "u": "https://patents.google.com/patent/US3212420"
   },
   {
    "t": "US3514192A - Achromatic variable-angle fluid prism (Google Patents)",
    "u": "https://patents.google.com/patent/US3514192A"
   },
   {
    "t": "Film and Digital Times: Laurence Thorpe, Image Stabilization (Oct 2010)",
    "u": "https://www.fdtimes.com/pdfs/articles/canon/FDTimes_Thorpe_Image_Stabilization200.pdf"
   },
   {
    "t": "ETHW Milestones: Camcorder with Image Stabilization, 1988",
    "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
   },
   {
    "t": "Canon Camera Museum: ES750",
    "u": "https://global.canon/en/c-museum/product/8mmvc375.html"
   },
   {
    "t": "サライ.jp: キヤノンの防振双眼鏡",
    "u": "https://serai.jp/item/1124082"
   },
   {
    "t": "TV Technology: Camera lens image stabilization, Part 2",
    "u": "https://www.tvtechnology.com/news/camera-lens-image-stabilization-part-2"
   },
   {
    "t": "Canon USA: Two New UHDgc 2/3-Inch Portable Zoom Lenses (2019)",
    "u": "https://www.usa.canon.com/newsroom/2019/20190402-lens"
   }
  ]
 },
 "hybrid": {
  "stages": [
   [
    1997,
    "corp",
    "Canon XL1 的 SuperRange Optical Image Stabilizer 在陀螺之外再分析 CCD 输出的画面，检测陀螺难以感知的低频晃动，并用来加快、修正可变角棱镜的动作，是「光学执行 + 图像分析」混合的早期形态（约 1997 年）。",
    "The Canon XL1's SuperRange Optical Image Stabilizer analysed the CCD image in addition to the gyro, catching low-frequency shake the gyro missed and using it to speed and refine the vari-angle prism: an early optics-plus-image-analysis hybrid (c. 1997).",
    [
     0
    ]
   ],
   [
    2010,
    "mass",
    "Sony 2010 年初发布 HDR-CX550V / XR550V，光学式手ブレ補正「Active Mode」把光学防抖、电子防抖和旋转补偿三种方式叠加，广角端防抖范围大幅扩大，是消费级摄像机上较早的 OIS+EIS 混合。",
    "Sony's HDR-CX550V / XR550V of early 2010 introduced Optical SteadyShot Active Mode with three-way shake cancelling (optical, electronic and rotational), greatly widening correction at the wide end, an early consumer OIS+EIS hybrid.",
    [
     1
    ]
   ],
   [
    2011,
    "ver",
    "Panasonic 在 CES 2011 发布 HDC-SD90/TM90 和 3MOS 的 HDC-TM900/HS900/SD800，打出 Hybrid O.I.S. 名号：光学防抖处理高频小抖动，电子防抖补偿大幅晃动，共四轴。",
    "At CES 2011 Panasonic launched the HDC-SD90/TM90 and the 3MOS HDC-TM900/HS900/SD800 under the Hybrid O.I.S. name: optical correction for small high-frequency shake, electronic for large motion, four axes in all.",
    [
     2
    ]
   ],
   [
    2011,
    "paper",
    "Stanford 的 Alexandre Karpenko、David Jacobs、Jongmin Baek、Marc Levoy 发表技术报告 CSTR 2011-03，用手机陀螺仪加 GPU 实时做数字防抖和卷帘快门校正，并能从单段视频自动标定陀螺与相机，为后来手机 OIS+EIS 融合打下算法基础。",
    "Stanford's Alexandre Karpenko, David Jacobs, Jongmin Baek and Marc Levoy published tech report CSTR 2011-03, using a phone gyroscope and GPU for real-time digital stabilization and rolling-shutter correction with automatic gyro–camera calibration from a single clip, laying algorithmic groundwork for later phone OIS+EIS fusion.",
    [
     3
    ]
   ],
   [
    2012,
    "ver",
    "Panasonic HC-X900/X800 升级为 Hybrid O.I.S.+，从四轴增加到五轴，第五轴专门补偿走路时的横滚（rolling）。",
    "The Panasonic HC-X900/X800 upgraded to Hybrid O.I.S.+, going from four to five axes, the fifth correcting the roll caused by walking.",
    [
     4
    ]
   ],
   [
    2017,
    "ver",
    "Google 的 Chia-Kai Liang、Fuhao Shi 为 Pixel 2 / Pixel 2 XL 开发 Fused Video Stabilization：OIS 与 EIS 同时开启，结合陀螺和 OIS 镜组位置数据、机器学习和前瞻滤波（lookahead）区分有意运镜，同时校正卷帘与对焦呼吸，可在 4K 和 60fps 下运行。",
    "Google's Chia-Kai Liang and Fuhao Shi built Fused Video Stabilization for the Pixel 2 / Pixel 2 XL: OIS and EIS run together, fusing gyro and OIS lens-position data with machine learning and a lookahead filter that recognises intended motion, also correcting rolling shutter and focus breathing, in all modes including 4K and 60fps.",
    [
     5
    ]
   ],
   [
    2018,
    "rival",
    "GoPro HERO7 Black 推出 HyperSmooth：不用光学防抖，靠 GP1 处理器的预测算法加画面裁切做纯电子防抖，号称达到云台级效果，运动相机路线证明大裁切 EIS 可以单独胜任。",
    "GoPro's HERO7 Black introduced HyperSmooth: no optical stabilization, just predictive EIS on the GP1 processor with cropping, marketed as gimbal-like, showing that heavy-crop EIS alone can do the job on action cameras.",
    [
     6
    ]
   ],
   [
    2020,
    "proto",
    "vivo 在 2020 年 2 月的 APEX 2020 概念机上展示「微云台」结构：用音圈驱动的磁性框架加双滚珠轴承悬挂整个镜头模组，大幅扩大光学补偿角。",
    "In February 2020 vivo's APEX 2020 concept phone showed a 'micro-gimbal': a voice-coil-driven magnetic frame suspended on double ball bearings carrying the whole camera module for a much larger optical correction angle.",
    [
     7
    ]
   ],
   [
    2020,
    "mass",
    "vivo X50 Pro 2020 年 6 月 1 日发布，成为首款量产内置微云台的手机：两轴微云台光学防抖加三轴电子防抖协同；此后手机厂商普遍用大角度 OIS 或传感器位移 OIS 加 EIS 组合。",
    "The vivo X50 Pro, launched on 1 June 2020, was the first production phone with a built-in micro-gimbal, pairing 2-axis gimbal OIS with 3-axis EIS; phone makers since commonly combine large-angle or sensor-shift OIS with EIS.",
    [
     7
    ]
   ]
  ],
  "now": [
   "OIS（镜组或传感器位移）加陀螺驱动 EIS 已是旗舰手机主摄视频的标配，相机也普遍提供 IBIS/镜头防抖加电子裁切的增强模式（如 Sony Active Mode）。",
   "OIS (lens- or sensor-shift) plus gyro-driven EIS is standard for flagship phone main-camera video, and cameras commonly offer an enhanced IBIS/lens-IS plus electronic-crop mode (e.g. Sony Active Mode)."
  ],
  "replaced": [
   "尚未被替代；在运动相机和超广角镜头上，高分辨率传感器加大裁切的纯 EIS（GoPro HyperSmooth、地平线锁定）已能单独完成，混合方案主要保留在需要夜景长曝光和长焦的主摄上。",
   "Not replaced; on action cameras and ultra-wides, pure EIS with high-res sensors and heavy crop (GoPro HyperSmooth, horizon lock) works alone, so hybrids mainly stay on main and telephoto cameras that need low-light exposure."
  ],
  "refs": [
   {
    "t": "Canon XL1 / XL1 S brochure: SuperRange Optical Image Stabilizer (ManualsLib)",
    "u": "https://www.manualslib.com/manual/24521/Canon-Xl1-Xl1-S.html?page=7"
   },
   {
    "t": "Sony HDR-CX550V 手ブレ補正（sony.jp）",
    "u": "https://www.sony.jp/handycam/products/archive/HDR-CX550V/feature_4.html"
   },
   {
    "t": "Engadget: Panasonic's CES 2011 camcorder launch",
    "u": "https://www.engadget.com/2011/01/05/panasonics-ces-2011-camcorder-launch-3d-hd-3mos-and-1mos-all/"
   },
   {
    "t": "Stanford: Digital Video Stabilization and Rolling Shutter Correction using Gyroscopes",
    "u": "https://graphics.stanford.edu/papers/stabilization/"
   },
   {
    "t": "Expert Reviews: Panasonic announces 2012 camcorder range",
    "u": "https://www.expertreviews.co.uk/?p=24729"
   },
   {
    "t": "Google Research: Fused Video Stabilization on the Pixel 2 and Pixel 2 XL",
    "u": "https://research.google/blog/fused-video-stabilization-on-the-pixel-2-and-pixel-2-xl/"
   },
   {
    "t": "GSMArena: Three GoPro Hero7 cams announced, Black has HyperSmooth",
    "u": "https://www.gsmarena.com/three_gopro_hero7_cams_announced_the_black_model_has_hypersmooth_stabilization-news-33365.php"
   },
   {
    "t": "GSMArena: vivo explains X50 Pro's gimbal camera stabilization system",
    "u": "https://www.gsmarena.com/vivo_explains_x50_pros_gimbal_camera_stabilization_system_shows_off_results-news-43338.php"
   }
  ]
 },
 "astro": {
  "stages": [
   [
    1975,
    "idea",
    "苏格兰格拉斯哥的 George Haig 在 Sky & Telescope 1975 年 4 月号发表「Scotch Mount」（后称 barn door tracker / Haig mount）：两块木板加铰链和手摇螺杆，让相机绕平行于地轴的轴转动，用 50mm 镜头跟踪约 30 分钟星点不拖线。这就是「让相机跟着地球自转反向转」的平民方案。",
    "George Haig of Glasgow published the \"Scotch Mount\" (later called the barn door tracker or Haig mount) in the April 1975 Sky & Telescope: two boards, a hinge and a hand-turned screw rotate the camera about an axis parallel to Earth's, tracking stars for about 30 minutes with a 50mm lens. It was the do-it-yourself way to counter-rotate a camera against Earth's spin.",
    [
     0
    ]
   ],
   [
    2011,
    "mass",
    "Pentax（Ricoh Imaging）2011 年 6 月发布热靴 GPS 单元 O-GPS1，并加入 ASTROTRACER：用 GPS 纬度和机身磁力计、加速度计测得的方位与仰角，算出星空移动，再驱动机身 SR（Shake Reduction）防抖平台带着 CMOS 平移旋转跟星；首批支持 K-5、K-r，官方样片曝光长达 300 秒。",
    "In June 2011 Pentax (Ricoh Imaging) released the O-GPS1 hot-shoe GPS unit with ASTROTRACER: from GPS latitude plus the azimuth and elevation measured by the body's magnetometer and accelerometer, it calculates sky motion and drives the in-body SR (Shake Reduction) platform to shift and rotate the CMOS with the stars; the K-5 and K-r were supported first, and official samples reach 300-second exposures.",
    [
     1,
     3
    ]
   ],
   [
    2011,
    "ver",
    "使用前要做精密校准（calibration），让机身电子罗盘消除磁场误差；之后的固件陆续让 K-01、K-30、K-50、K-3、K-S1、K-S2、K-70、KP 等机型支持 O-GPS1 的 ASTROTRACER（中画幅 645D/645Z 不支持）。",
    "Users had to run a precision calibration so the electronic compass could cancel magnetic errors; later bodies such as the K-01, K-30, K-50, K-3, K-S1, K-S2, K-70 and KP gained O-GPS1 ASTROTRACER support (the 645D/645Z medium-format bodies did not).",
    [
     1
    ]
   ],
   [
    2012,
    "rival",
    "Vixen 2012 年 5 月推出约 740g 的便携赤道仪 Polarie Star Tracker，任何相机都能装，推荐 100mm 以内焦距；此后 iOptron SkyTracker、Sky-Watcher Star Adventurer 等电动星野赤道仪成为主流竞争方案，跟踪时间不受防抖平台行程限制。",
    "In May 2012 Vixen launched the roughly 740g Polarie Star Tracker, a portable equatorial mount for any camera, recommended for focal lengths up to 100mm; motorized star trackers such as the iOptron SkyTracker and Sky-Watcher Star Adventurer then became the mainstream rival, since their tracking time is not limited by a stabilizer's travel.",
    [
     2
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 4 月 Pentax K-3 II 成为首台内置 GPS 的 Pentax 单反，不再需要 O-GPS1 就能用 ASTROTRACER，还能记录电子罗盘方向；代价是取消了内置闪光灯。",
    "In April 2015 the Pentax K-3 II became the first Pentax DSLR with built-in GPS, running ASTROTRACER without the O-GPS1 and recording compass heading too; the trade-off was losing the pop-up flash.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "全画幅 Pentax K-1（2016）及后继 K-1 Mark II（2018）也内置 GPS 和 ASTROTRACER，把星空追踪带到 36×24mm 画幅。",
    "The full-frame Pentax K-1 (2016) and its successor the K-1 Mark II (2018) also built in GPS and ASTROTRACER, bringing star tracking to a 36×24mm sensor.",
    [
     3
    ]
   ],
   [
    2019,
    "rival",
    "Google 2019 年 11 月公开 Pixel 4 的 Night Sight 星空模式：手机放三脚架上连拍最多 15 帧、每帧最长 16 秒，总共 4 分钟，靠对齐叠加和算法压噪得到点状星空，不需要移动传感器。计算摄影成为手机端的替代路线。",
    "In November 2019 Google detailed Pixel 4's Night Sight astrophotography mode: on a tripod the phone shoots up to 15 frames of at most 16 seconds each, up to 4 minutes total, and aligns and merges them to get pinpoint stars with no sensor movement. Computational stacking became the phone-side alternative.",
    [
     4
    ]
   ],
   [
    2021,
    "corp",
    "Ricoh Imaging 2021 年 5 月预告第二代 GPS 单元 O-GPS2，作为 O-GPS1 的继任。",
    "In May 2021 Ricoh Imaging pre-announced a second-generation GPS unit, the O-GPS2, as successor to the O-GPS1.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 3 月 K-3 Mark III 固件 1.41 加入 ASTROTRACER Type 3：不用 GPS、方位数据和精密校准，先拍一张预备片，根据星点的实际移动算出跟踪量，曝光最长 10 分钟，在磁场干扰区也能用；官方提示广角仍建议用 O-GPS1。",
    "In March 2022 K-3 Mark III firmware 1.41 added ASTROTRACER Type 3: without GPS, heading data or precision calibration, the camera takes a preliminary shot and derives tracking from how the stars actually moved, with exposures up to 10 minutes, usable even near magnetic interference; Ricoh still recommends the O-GPS1 for wide-angle lenses.",
    [
     6
    ]
   ],
   [
    2022,
    "mass",
    "O-GPS2 于 2022 年 6 月正式发布，兼容 K-3 Mark III、KP、K-70、K-5 等机型；在 K-3 Mark III 上新增 ASTROTRACER Type 2，让传感器以 Type 1 一半的速度跟星，地景和星空都不至于太糊，适合星空加前景的构图。",
    "The O-GPS2 officially launched in June 2022, compatible with the K-3 Mark III, KP, K-70, K-5 and others; on the K-3 Mark III it added ASTROTRACER Type 2, which moves the sensor at half the Type 1 speed so both foreground and stars stay reasonably sharp in landscape-plus-sky compositions.",
    [
     5
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 12 月 Ricoh 把 Type 3 通过固件移植到 K-1 和 K-1 Mark II，全画幅机型也能免 GPS 星空追踪。",
    "In December 2023 Ricoh ported Type 3 to the K-1 and K-1 Mark II via firmware, giving the full-frame bodies GPS-free star tracking too.",
    [
     7
    ]
   ]
  ],
  "now": [
   "IBIS 星空追踪至今基本是 Pentax 独有：K-3 Mark III、K-1 Mark II 等仍在售，可选 O-GPS1/O-GPS2 或免 GPS 的 Type 3；受防抖平台行程限制，长焦或长时间曝光仍要靠赤道仪。",
   "IBIS star tracking remains essentially Pentax-only: the K-3 Mark III, K-1 Mark II and others still offer it via the O-GPS1/O-GPS2 or GPS-free Type 3; limited by the stabilizer's travel, long lenses and very long exposures still need an equatorial mount."
  ],
  "replaced": [
   "尚未被淘汰，但被两条路线挤压：一是越来越便宜的电动星野赤道仪，二是手机上多帧对齐叠加的计算摄影星空模式；Pentax 自己也用 Type 3 摆脱了对 GPS 和电子罗盘的依赖。",
   "Not obsolete, but squeezed from two sides: ever cheaper motorized star trackers, and computational multi-frame stacking modes on phones; Pentax itself used Type 3 to drop the dependence on GPS and an electronic compass."
  ],
  "refs": [
   {
    "t": "Barn door tracker - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Barn_door_tracker"
   },
   {
    "t": "ASTROTRACER: GPS Unit O-GPS1 (Ricoh Imaging)",
    "u": "https://www.ricoh-imaging.co.jp/english/products/o-gps1/astrotracer.html"
   },
   {
    "t": "Astronomy tests Vixen's compact astroimaging mount",
    "u": "https://astronomy.com/observing/astronomy-tests-vixens-compact-astroimaging-mount"
   },
   {
    "t": "PENTAX: The choice for astrophotography (Ricoh Imaging)",
    "u": "https://www.ricoh-imaging.co.jp/english/explore/astro/"
   },
   {
    "t": "Astrophotography with Night Sight on Pixel Phones (Google Research)",
    "u": "https://research.google/blog/astrophotography-with-night-sight-on-pixel-phones/"
   },
   {
    "t": "New Pentax GPS Unit Makes Astrophotography Easier and More Accurate (PetaPixel)",
    "u": "https://petapixel.com/2022/06/08/new-pentax-gps-unit-makes-it-easier-to-photograph-the-night-sky"
   },
   {
    "t": "Astrotracer Type 3 for the PENTAX K-3 Mark III (Ricoh PDF)",
    "u": "https://www.ricoh-imaging.co.jp/english/support/digital/pdf/astrotracer-type3.pdf"
   },
   {
    "t": "Pentax Gives the K-1 II the GPS-Free Astrotracer (PetaPixel)",
    "u": "https://petapixel.com/2023/12/07/pentax-gives-the-k-1-ii-the-gps-free-astrotracer-the-k-3-iii-got-last-year"
   }
  ]
 },
 "ibis5": {
  "stages": [
   [
    2003,
    "corp",
    "Minolta 2003 年 7 月发布 DiMAGE A1，首次把防抖做到传感器上（Anti-Shake）：CCD 装在由 X、Y 两个执行器驱动的平台上，按机身陀螺仪信号反向移动。只补偿两个方向，但奠定了机身防抖 IBIS 路线。",
    "Minolta's DiMAGE A1 (July 2003) put stabilization on the sensor for the first time (Anti-Shake): the CCD sat on a platform driven by X and Y actuators, moving against the body's gyro signals. It corrected only two directions, but founded the in-body stabilization (IBIS) approach.",
    [
     0
    ]
   ],
   [
    2012,
    "mass",
    "Olympus 2012 年 2 月发布、3 月上市的 OM-D E-M5 搭载世界首个五轴防抖：用音圈电机 VCM 让传感器平台悬浮，除了俯仰、偏航两个角抖动，还补偿横滚旋转和上下、左右平移，平移对微距和走动拍视频尤其有用。",
    "Olympus's OM-D E-M5, announced in February and shipped in March 2012, had the world's first 5-axis stabilization: voice coil motors (VCM) float the sensor platform, correcting not just pitch and yaw but roll and vertical/horizontal translation, which matters most for macro and walking video.",
    [
     1
    ]
   ],
   [
    2014,
    "ver",
    "Sony 2014 年 11 月发布 α7 II，世界首台全画幅五轴机身防抖相机，对没有 OSS 的 E 卡口镜头和转接镜头同样有效。全画幅传感器更大更重，平台设计难度更高。",
    "Sony's α7 II (November 2014) was the first full-frame camera with 5-axis IBIS, working even with non-OSS E-mount and adapted lenses. A larger, heavier full-frame sensor made the platform much harder to design.",
    [
     0
    ]
   ],
   [
    2016,
    "ver",
    "Olympus 2016 年 9 月发布 E-M1 Mark II：机身五轴 5.5 级；配同时发布的 M.ZUIKO 12-100mm F4 IS PRO，机身与镜头防抖协同（5-Axis Sync IS）达 6.5 级。",
    "Olympus's E-M1 Mark II (September 2016): 5.5 stops in body, and 6.5 stops with 5-Axis Sync IS when paired with the simultaneously announced M.ZUIKO 12-100mm F4 IS PRO, coordinating body and lens stabilization.",
    [
     2
    ]
   ],
   [
    2018,
    "ver",
    "Nikon 2018 年 8 月发布 Z 7 / Z 6，首次加入机身五轴 VR，约 5 级，Nikon 也转向机身防抖。",
    "Nikon's Z 7 / Z 6 (August 2018) introduced its first in-body 5-axis VR, about 5 stops, joining the move to IBIS.",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "Olympus 2019 年 1 月发布 E-M1X，换用新陀螺仪，宣称世界最强的 7.5 级防抖（配 Sync IS 镜头）；Olympus 早先称约 6.5 级是受地球自转影响的理论极限。",
    "Olympus's E-M1X (January 2019) used a new gyro sensor and claimed the world's best 7.5 stops (with Sync IS lenses); Olympus had earlier described about 6.5 stops as a theoretical limit due to Earth's rotation.",
    [
     4
    ]
   ],
   [
    2020,
    "ver",
    "Canon 2020 年 EOS R5 / R6 首次采用传感器位移式机身防抖，与 RF 镜头光学防抖协同控制，最高 8 级；无防抖但像场大的 RF 50mm F1.2L 等单靠 IBIS 也能达 8 级。",
    "Canon's EOS R5 / R6 (2020) were its first cameras with sensor-shift IBIS, coordinated with RF lens OIS for up to 8 stops; unstabilized large-image-circle lenses like the RF 50mm F1.2L reach 8 stops from IBIS alone.",
    [
     5
    ]
   ],
   [
    2020,
    "rival",
    "Apple iPhone 12 Pro Max（2020 年 10 月）把传感器位移防抖（Sensor-Shift OIS）带进手机主摄，但只是简化的平移方案；手机端主流仍是镜片 OIS 加 EIS 组合。",
    "Apple's iPhone 12 Pro Max (October 2020) brought sensor-shift OIS to a phone's main camera, but as a simplified shift system; phones largely stayed with lens OIS plus EIS.",
    [
     6
    ]
   ],
   [
    2024,
    "ver",
    "OM System（原 Olympus 影像部门）2024 年 OM-1 Mark II 只靠算法更新，把五轴机身防抖提升到 CIPA 8.5 级，比前代高 1.5 级，为当时最高纪录。",
    "OM System (Olympus's former imaging division) raised 5-axis IBIS to a CIPA 8.5 stops in the 2024 OM-1 Mark II through algorithm updates alone, 1.5 stops above its predecessor and a record at the time.",
    [
     7
    ]
   ]
  ],
  "now": [
   "五轴机身防抖已是可换镜头无反相机标配，Sony、Canon、Nikon、Panasonic、Fujifilm、OM System 主力机型都有，并普遍与镜头 OIS 协同，标称 7–8.5 级。",
   "5-axis IBIS is now standard on interchangeable-lens mirrorless cameras from Sony, Canon, Nikon, Panasonic, Fujifilm and OM System, usually coordinated with lens OIS for rated 7–8.5 stops."
  ],
  "replaced": [
   "未被替代。它取代了单纯两轴的传感器位移防抖，并与镜头 OIS 互补；手机端由于空间限制，主要用镜片 OIS、简化传感器位移加 EIS 代替。",
   "Not replaced. It superseded simple two-axis sensor shift and complements lens OIS; phones, constrained by space, use lens OIS, simplified sensor shift and EIS instead."
  ],
  "refs": [
   {
    "t": "Image stabilization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Image_stabilization"
   },
   {
    "t": "OM-D E-M5 product history (OM Digital Solutions)",
    "u": "https://www.om-digitalsolutions.com/en/product-history/om-d_e-m5/"
   },
   {
    "t": "Olympus News Live from Photokina 2016 (Imaging Resource)",
    "u": "https://www.imaging-resource.com/news/2016/09/19/olympus-news-live-from-photokina-2016"
   },
   {
    "t": "Nikon introduces the Z mount system (Nikon)",
    "u": "https://www.nikon.com/news/2018/0823_mirrorless_01.htm"
   },
   {
    "t": "Olympus OM-D E-M1X launch (Engadget)",
    "u": "https://www.engadget.com/2019/01/24/olympus-om-d-e-m1x-launch/"
   },
   {
    "t": "Canon Technology: EOS R5 (2020)",
    "u": "https://global.canon/en/technology/r5-2020.html"
   },
   {
    "t": "Apple's iPhone 12 Pro camera upgrades (TechCrunch)",
    "u": "https://techcrunch.com/2020/10/13/apples-iphone-12-pro-camera-upgrades-sharpen-focus-on-serious-photographers"
   },
   {
    "t": "OM System OM-1 Mark II initial review (DPReview)",
    "u": "https://www.dpreview.com/reviews/1905334598/1"
   }
  ]
 },
 "module": {
  "stages": [
   [
    2012,
    "mass",
    "Sony 在 CES 2012（1 月 9 日）发布 Handycam HDR-CX760V / PJ760V 等机型，首推 Balanced Optical SteadyShot（BOSS）：镜头组连同 CMOS 作为一个整体浮动单元随抖动反向转动，而不是只移动其中一片镜片，Sony 称稳定性最高是前代的 13 倍，且广角到长焦都有效。",
    "At CES 2012 (January 9) Sony launched Handycams including the HDR-CX760V / PJ760V with Balanced Optical SteadyShot (BOSS): the lens group and CMOS float as one unit that counter-rotates against shake instead of moving a single element; Sony claimed up to 13× the stability of its predecessor across the zoom range.",
    [
     0
    ]
   ],
   [
    2012,
    "mass",
    "Nokia 2012 年 9 月发布的 Lumia 920 PureView 用「浮动镜头」防抖：Kevin Shields 团队把整个光学组件用弹簧悬起来整体移动，而非移动单片镜片，被视为手机上第一套真正的光学防抖。",
    "Nokia's Lumia 920 PureView (September 2012) used \"floating lens\" stabilization: Kevin Shields's team suspended the entire optical assembly on springs and moved it as a whole rather than shifting one element, widely seen as the first true optical stabilization in a phone.",
    [
     1,
     2
    ]
   ],
   [
    2016,
    "ver",
    "Sony 2016 年 9 月 FDR-X3000 运动相机首次在 Action Cam 上用 BOSS，整个镜头和后方传感器一起移动，对 4K 视频提供光学防抖。",
    "Sony's FDR-X3000 (September 2016) was the first Action Cam with BOSS, moving the whole lens and sensor together to optically stabilize 4K video.",
    [
     3
    ]
   ],
   [
    2020,
    "proto",
    "vivo 2020 年 2 月底的概念机 APEX 2020 展示了主摄的「类云台结构」，作为量产前的技术验证。",
    "vivo's APEX 2020 concept phone (late February 2020) showed a gimbal-like structure for its main camera as a pre-production demonstration.",
    [
     4
    ]
   ],
   [
    2020,
    "mass",
    "vivo X50 Pro（2020 年 6 月）量产「微云台」：双滚珠悬挂让整个镜头加传感器模组倾转 ±3°，vivo 称补偿角度是传统 OIS 的 3 倍（大 300%），主打视频防抖和夜景。",
    "The vivo X50 Pro (June 2020) brought the \"gimbal camera\" to mass production: a double-ball suspension tilts the whole lens-plus-sensor module by ±3°, which vivo said is three times (300% more than) conventional OIS, aimed at video and night shots.",
    [
     4,
     5
    ]
   ],
   [
    2020,
    "ver",
    "2020 年底发布的 X60 Pro / X60 Pro+ 升级微云台，并开始与 Zeiss 合作，加入像素位移超清和 f/1.48 大光圈（进光量多 16%）。",
    "The X60 Pro / X60 Pro+ (late 2020) upgraded the gimbal and began the Zeiss partnership, adding pixel-shift ultra-HD and an f/1.48 aperture (16% more light).",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "X70 系列把微云台小型化后装进 X70 / X70 Pro 主摄，X70 Pro+ 则用在 48MP 超广角上，并成为首款四颗后摄都有 OIS 的手机。",
    "The X70 series miniaturized the gimbal into the X70 / X70 Pro main cameras, while the X70 Pro+ put it on a 48MP ultra-wide and became the first phone with OIS on all four rear cameras.",
    [
     5,
     6
    ]
   ],
   [
    2022,
    "ver",
    "X80 Pro（2022）把微云台移到 50mm 人像镜头上，用于人像跟拍和运镜。",
    "The X80 Pro (2022) moved the gimbal to its 50mm portrait camera for subject tracking and camera moves.",
    [
     5
    ]
   ],
   [
    2022,
    "end",
    "2022 年底的 X90 Pro 不再用微云台，改用 1 英寸大底主摄加 vivo 自研 OIS（称防抖能力是普通 OIS 两倍）；此后旗舰转向大底、潜望长焦和传感器位移 OIS + EIS，整体模组倾转在手机上淡出。",
    "The X90 Pro (late 2022) dropped the gimbal for a 1-inch main sensor with vivo's own OIS (claimed twice standard OIS); flagships then shifted to large sensors, periscope telephotos and sensor-shift OIS plus EIS, and whole-module tilt faded from phones.",
    [
     7
    ]
   ]
  ],
  "now": [
   "Sony 摄像机 / 运动相机线仍有 BOSS 机型；手机端自 2022 年 vivo X90 Pro 起，整体模组云台已基本不再出现在旗舰上。",
   "Sony camcorder / action-cam lines still include BOSS models; on phones, whole-module gimbals have essentially disappeared from flagships since the vivo X90 Pro in 2022."
  ],
  "replaced": [
   "在手机上被大底主摄配合大行程镜片 OIS 或传感器位移 OIS、再叠加 EIS 和地平线锁定算法取代——整体模组倾转要占较大的模组高度，与越来越大的传感器冲突。",
   "On phones it was replaced by large main sensors with long-stroke lens or sensor-shift OIS plus EIS and horizon-lock algorithms, since whole-module tilt costs module height that clashes with ever larger sensors."
  ],
  "refs": [
   {
    "t": "Sony unveils new family of Handycams: HDR CX760V/B (Engadget)",
    "u": "https://www.engadget.com/2012-01-09-sony-unveils-new-family-of-handycams-hdr-cx760v-b-steadies-you.html"
   },
   {
    "t": "The Engadget Interview: Nokia's Kevin Shields on PureView, floating sensors",
    "u": "https://www.engadget.com/2012/09/07/nokia-kevin-shields-on-pureview/"
   },
   {
    "t": "The amazing science behind the Nokia Lumia 920 camera (GSMArena)",
    "u": "https://blog.gsmarena.com/the-amazing-science-behind-the-nokia-lumia-920-camera-the-second-phase-of-pureview"
   },
   {
    "t": "Sony Announces new Flagship 4K and HD Action Cams with Superior Image Stabilization",
    "u": "https://sony.mediaroom.com/2016-09-09-Sony-Announces-new-Flagship-4K-and-HD-Action-Cams-with-Superior-Image-Stabilization"
   },
   {
    "t": "vivo details X50 Pro's gimbal camera stabilization system (GSMArena)",
    "u": "https://www.gsmarena.com/vivo_explains_x50_pros_gimbal_camera_stabilization_system_shows_off_results-news-43338.php"
   },
   {
    "t": "vivo Design Innovation: Gimbal",
    "u": "https://www.vivo.com/en/activity/design-innovation?id=Gimbal"
   },
   {
    "t": "Vivo's X70 Pro+ does optical stabilization on all four rear cameras (Engadget)",
    "u": "https://www.engadget.com/vivo-x70-pro-plus-zeiss-030033856.html"
   },
   {
    "t": "vivo X90 Pro review (GSMArena)",
    "u": "https://www.gsmarena.com/vivo_x90_pro-review-2530.php"
   }
  ]
 },
 "dronegim": {
  "stages": [
   [
    2012,
    "mass",
    "DJI 2012 年 7 月 26 日发布 Zenmuse Z15：世界首个由无刷电机直驱、陀螺仪闭环稳定的消费级高精度云台，控制精度 ±0.05°，Z15-N 配 Sony NEX-5N/5R/7、Z15-G 配 Panasonic GH2，重约 1.25–1.3kg。DJI 称当时业内多认为无刷直驱的控制精度要求太高、难以实现。",
    "On 26 July 2012 DJI launched the Zenmuse Z15: the world's first consumer high-precision gimbal directly driven by brushless motors and stabilized in closed loop by gyros, with ±0.05° accuracy; the Z15-N carried Sony NEX-5N/5R/7 and the Z15-G a Panasonic GH2, at about 1.25–1.3kg. DJI says most of the industry then thought brushless direct drive needed impossible control precision.",
    [
     0,
     1
    ]
   ],
   [
    2012,
    "rival",
    "同期 DIY 社区出现 Aleksey Moskalenko（Alexmos）的 SimpleBGC 等开源/低价无刷云台控制板，让改装无刷云台在航模圈迅速普及。（约）",
    "Around the same time the DIY scene got cheap brushless gimbal controllers such as Aleksey Moskalenko's (Alexmos) SimpleBGC, quickly spreading home-built brushless gimbals among hobbyists. (approx.)",
    [
     2
    ]
   ],
   [
    2013,
    "rival",
    "Freefly Systems（Tabb Firchau）2013 年 4 月发布 MōVI M10 手持三轴无刷云台，由 Vincent Laforet 首发短片，在 NAB 2013 获奖；同一套无刷直驱加 IMU 技术从航拍扩展到地面电影拍摄。",
    "In April 2013 Freefly Systems (Tabb Firchau) unveiled the MōVI M10 handheld 3-axis brushless gimbal, debuted in a short by Vincent Laforet and awarded at NAB 2013; the same brushless-direct-drive-plus-IMU technology spread from aerial to ground cinematography.",
    [
     3
    ]
   ],
   [
    2013,
    "ver",
    "DJI 2013 年秋推出 Phantom 2 Vision，DJI 称其为首款一体化航拍无人机（相机与飞机一体），但相机只有单轴稳定。",
    "In autumn 2013 DJI launched the Phantom 2 Vision, which DJI calls the first integrated aerial-photography drone (camera built in), though its camera had only single-axis stabilization.",
    [
     0,
     4
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 4 月 NAB 上的 Phantom 2 Vision+ 把单轴换成自稳三轴云台，14MP 相机、1080p 视频，消费级一体化三轴云台航拍机由此定型；同年 DJI 还把云台技术带到地面推出 Ronin。",
    "The Phantom 2 Vision+ at NAB in April 2014 replaced the single axis with a self-stabilizing 3-axis gimbal (14MP, 1080p), setting the template for consumer drones with integrated 3-axis gimbals; the same year DJI took gimbals to the ground with Ronin.",
    [
     4,
     0
    ]
   ],
   [
    2016,
    "ver",
    "DJI Mavic Pro（2016）装上当时世界最小的可量产三轴电机云台，工程师要解决散热和对摩擦力极敏感的问题；折叠小飞机从此成为主流形态。",
    "The DJI Mavic Pro (2016) carried what DJI calls the world's smallest mass-producible 3-axis motorized gimbal, overcoming heat dissipation and friction sensitivity; small folding drones became the mainstream form.",
    [
     0
    ]
   ],
   [
    2018,
    "ver",
    "DJI Osmo Pocket（2018）把手持三轴云台做到最小，控制精度达 0.005°，比 Z15 的 ±0.05° 高一个数量级，这代微型电机与控制算法也反哺航拍云台。",
    "The DJI Osmo Pocket (2018) shrank a handheld 3-axis gimbal further with 0.005° precision, an order of magnitude finer than the Z15's ±0.05°; this generation of tiny motors and control also fed back into drone gimbals.",
    [
     0
    ]
   ],
   [
    2022,
    "rival",
    "DJI Avata（2022 年 8 月）这类 FPV 穿越机只保留单轴云台，靠 RockSteady 电子防抖和 HorizonSteady 地平线锁定，在剧烈机动下也能出平稳画面。",
    "FPV drones like the DJI Avata (August 2022) kept only a single-axis gimbal and relied on RockSteady EIS and HorizonSteady horizon lock to deliver smooth footage through aggressive maneuvers.",
    [
     5
    ]
   ],
   [
    2025,
    "rival",
    "Insta360 孵化的 Antigravity 2025 年 8 月发布 A1：249g 的 8K 全景无人机，上下两颗鱼眼镜头，完全没有机械云台，靠软件防抖和拼接让飞机「隐形」，后期再选取任意视角。",
    "Antigravity, incubated by Insta360, unveiled the A1 in August 2025: a 249g 8K 360° drone with top and bottom fisheye lenses and no mechanical gimbal at all, using software stabilization and stitching to make the drone \"invisible\" and letting users pick any view afterwards.",
    [
     6
    ]
   ]
  ],
  "now": [
   "三轴无刷云台仍是 DJI Mavic / Air / Mini 系列及行业机的标配，常再叠加 EIS；FPV 和全景机则减为单轴或干脆取消机械云台。",
   "3-axis brushless gimbals remain standard on DJI's Mavic / Air / Mini lines and industrial drones, often combined with EIS; FPV and 360° drones reduce to a single axis or drop the mechanical gimbal entirely."
  ],
  "replaced": [
   "主流航拍尚未被替代；在 FPV 和全景无人机中，部分被电子防抖、地平线锁定和 360° 拼接取代。它本身取代了舵机驱动云台。",
   "Not yet replaced for mainstream aerial photography; in FPV and 360° drones it is partly replaced by EIS, horizon lock and 360° stitching. It itself replaced servo-driven gimbals."
  ],
  "refs": [
   {
    "t": "The Chase: Gimbal Technology and the Endless Push for Innovation (DJI)",
    "u": "https://viewpoints.dji.com/blog/the-chase-gimbal-technology-and-the-endless-push-for-innovation"
   },
   {
    "t": "Zenmuse Z15 Specs (DJI)",
    "u": "https://www-v1.dji.com/zenmuse-z15/spec.html"
   },
   {
    "t": "SimpleBGC Gimbal (aka AlexMos gimbal) - ArduPilot",
    "u": "https://ardupilot.org/copter/docs/common-simplebgc-gimbal.html"
   },
   {
    "t": "Laforet unveils MoVI handheld stabilizer (Imaging Resource)",
    "u": "https://imaging-resource.com/news/2013/04/05/laforet-unveils-game-changer-device-a-virtually-unshakeable-gyro-based-hand"
   },
   {
    "t": "DJI improves stabilization with Phantom 2 Vision+ (Engadget)",
    "u": "https://www.engadget.com/2014/04/06/dji-phantom-2-vision-plus"
   },
   {
    "t": "DJI unveils DJI Avata (DJI)",
    "u": "https://www.dji.com/media-center/announcements/dji-unveils-dji-avata-the-ultimate-immersive-drone-experience"
   },
   {
    "t": "Antigravity A1 Is the World's First All-in-One 8K 360-Degree Drone (PetaPixel)",
    "u": "https://petapixel.com/2025/08/14/antigravity-a1-is-the-worlds-first-all-in-one-8k-360-degree-drone"
   }
  ]
 },
 "gimbal": {
  "stages": [
   [
    1960,
    "idea",
    "Westinghouse Canada 的工程团队提出陀螺稳定摄像机云台的设想，把电视摄像机挂在小型无人直升机下做试飞，验证用陀螺把镜头姿态从载体运动中隔离出来。",
    "A Westinghouse Canada engineering team conceived a gyro-stabilized camera mount and flight-tested a TV camera slung beneath a small unmanned helicopter, proving that gyros could isolate the camera's attitude from the carrier's motion.",
    [
     0
    ]
   ],
   [
    1969,
    "proto",
    "这套系统定名 WESSCAM（Westinghouse Stabilised and Steered Camera Mount），1969 年 4 月装上 Bell 206A JetRanger 直升机在多伦多上空拍摄，是航拍陀螺稳定吊舱的原型。",
    "Renamed WESSCAM (Westinghouse Stabilised and Steered Camera Mount), it flew on a Bell 206A JetRanger over Toronto in April 1969, the prototype of the gyro-stabilized aerial camera pod.",
    [
     0
    ]
   ],
   [
    1974,
    "corp",
    "Westinghouse 工程师 John Noxon Leavitt 买下专利创办 Istec，继续开发 Wescam 系统；到 1984 年已向苏联、日本、中东、欧美卖出 50 多套，1995 年更名 Wescam Inc. 上市。这一代是机械陀螺 + 伺服的大型吊舱，价格只有电影和军警用户承担得起。",
    "Westinghouse engineer John Noxon Leavitt bought the patents and founded Istec to develop the Wescam system; by 1984 it had sold over 50 mounts to the USSR, Japan, the Middle East, Europe and North America, and in 1995 it became the listed Wescam Inc. These were large mechanical-gyro servo pods affordable only to film, military and police users.",
    [
     0
    ]
   ],
   [
    2012,
    "corp",
    "DJI 一名工程师提出用无刷电机直接驱动云台轴（当时业内普遍认为精度做不到），2012 年 DJI 推出 Zenmuse Z15，官方称是世界首个无刷电机直驱、陀螺稳定的高精度云台，用于把单反挂在多旋翼无人机上航拍。",
    "A DJI engineer proposed driving the gimbal axes directly with brushless motors, an idea most of the industry thought too imprecise; in 2012 DJI launched the Zenmuse Z15, which it calls the first brushless direct-drive, gyro-stabilized high-precision gimbal, built to carry a DSLR on a multirotor drone.",
    [
     1
    ]
   ],
   [
    2013,
    "mass",
    "2011 年由 Tabb Firchau、David Bloomfield、Hugh Bell、Megan Fogel 创办的 Freefly Systems 在 NAB 2013 发布 MōVI M10：三轴直驱无刷电机 + IMU 的手持稳定器，让操作者不必穿 Steadicam 背心和减震臂，获 NAB 多个奖项，摄影师 Vincent Laforet 用它拍了宣传短片。",
    "Freefly Systems, founded in 2011 by Tabb Firchau, David Bloomfield, Hugh Bell and Megan Fogel, unveiled the MōVI M10 at NAB 2013: a handheld three-axis direct-drive brushless stabilizer with an IMU that freed operators from the Steadicam vest and iso-elastic arm. It won several NAB awards, and Vincent Laforet shot its launch film.",
    [
     2
    ]
   ],
   [
    2014,
    "ver",
    "DJI 把 Zenmuse 的算法搬到地面，2014 年 6 月发布手持三轴云台 Ronin，原定价 4,499 美元，7 月正式开卖前降到 2,999 美元，远低于 MōVI M10 的价格，专业手持云台从此普及。",
    "DJI brought its Zenmuse stabilization to the ground with the Ronin handheld three-axis gimbal, announced in June 2014 at US$4,499 and cut to US$2,999 before it shipped in July, far below the MōVI M10, which made professional handheld gimbals widespread.",
    [
     3
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 10 月 8 日 DJI Osmo 发布，官方称是世界首台一体化稳定手持 4K 相机：Zenmuse X3 云台相机（1/2.3 英寸、12MP、4K、94° 视角）直接装在带控制键的手柄上，售价 649 美元，云台从相机配件变成了相机本身。",
    "Announced on 8 October 2015, the DJI Osmo was billed as the first fully integrated stabilized handheld 4K camera: the Zenmuse X3 gimbal camera (1/2.3-inch, 12MP, 4K, 94° FOV) mounted directly on a handle with controls, for US$649. The gimbal stopped being a camera accessory and became the camera.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 9 月 1 日 DJI Osmo Mobile 上市，把三轴云台和 SmoothTrack 跟随算法用在智能手机上，售价 299 美元；之前智云（Zhiyun）的 Z1-Smooth 等手机三轴稳定器已在 2015 年出现。",
    "The DJI Osmo Mobile went on sale on 1 September 2016, bringing three-axis stabilization and SmoothTrack follow to smartphones for US$299; phone gimbals such as Zhiyun's Z1-Smooth had already appeared in 2015.",
    [
     5
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 11 月 28 日 DJI Osmo Pocket 发布：把三轴云台和 1/2.3 英寸 12MP 相机缩进口袋大小的机身，4K60 100Mbps，售价 349 美元，12 月 15 日发货，与 GoPro HERO7 正面竞争。",
    "The DJI Osmo Pocket, announced on 28 November 2018, shrank a three-axis gimbal and a 1/2.3-inch 12MP camera into a pocketable body shooting 4K60 at 100 Mbps, for US$349, shipping 15 December, as a direct rival to the GoPro HERO7.",
    [
     6
    ]
   ],
   [
    2020,
    "rival",
    "vivo 在 APEX 2020 概念机上展示微云台结构，2020 年 6 月 vivo X50 Pro 量产：主摄模组整体装在双轴微云台里，配合三轴电子防抖，把云台思路塞进了手机机身里。",
    "vivo previewed a micro-gimbal structure on its APEX 2020 concept phone, and the X50 Pro shipped in June 2020 with the whole main-camera module on a two-axis micro gimbal plus three-axis EIS, moving the gimbal idea inside the phone body.",
    [
     7
    ]
   ]
  ],
  "now": [
   "手持三轴云台已成熟成大众品类：DJI 有 RS 系列（专业相机）、Osmo Mobile 系列（手机）和 Osmo Pocket 3（1 英寸传感器一体机）；Zhiyun、Feiyu 等国产厂商占了大部分市场。同时航拍、车载、广播吊舱仍在用同样的 IMU + 无刷电机闭环。",
   "Handheld three-axis gimbals are a mature mass category: DJI's RS line for cameras, Osmo Mobile for phones and the 1-inch Osmo Pocket 3, with Zhiyun, Feiyu and other Chinese makers holding much of the market. Aerial, vehicle and broadcast pods still use the same IMU plus brushless-motor loop."
  ],
  "replaced": [
   "没有被整体淘汰，但轻量用途正被机内防抖蚕食：GoPro HyperSmooth、Insta360 FlowState、手机 OIS + EIS 和传感器位移防抖已能给出“类云台”效果，手机云台更多是为了跟拍、构图和横竖切换；云台的优势剩在不裁切、可控运镜和承载大相机。",
   "Not wholesale replaced, but light use is being eaten by in-camera stabilization: GoPro HyperSmooth, Insta360 FlowState, phone OIS + EIS and sensor-shift give 'gimbal-like' results, so phone gimbals are now bought mostly for tracking and framing. Gimbals keep the edge in no-crop output, controlled camera moves and carrying large cameras."
  ],
  "refs": [
   {
    "t": "Wescam - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Wescam"
   },
   {
    "t": "DJI: The Chase - Gimbal Technology and the Endless Push for Innovation",
    "u": "https://content.dji.com/the-chase-gimbal-technology-and-the-endless-push-for-innovation/"
   },
   {
    "t": "Freefly Systems - Wikiwand",
    "u": "https://www.wikiwand.com/en/articles/Freefly_Systems"
   },
   {
    "t": "Newsshooter: Brushless gimbal price shock - DJI Ronin at $2999",
    "u": "https://www.newsshooter.com/2014/07/17/brushless-gimbal-price-shock-bh-photo-price-dji-ronin-at-2999/"
   },
   {
    "t": "DJI Introduces the World's First Fully Integrated, Stabilized Handheld 4K Camera",
    "u": "https://www.prnewswire.com/news-releases/dji-introduces-the-worlds-first-fully-integrated-stabilized-handheld-4k-camera-300156737.html"
   },
   {
    "t": "DJI Makes Your Smartphone Smarter with the New Osmo Mobile",
    "u": "https://www.dji.com/media-center/announcements/dji-makes-your-smartphone-smarter-with-the-new-osmo-mobile"
   },
   {
    "t": "Engadget: DJI's stabilized Osmo Pocket camera costs $349",
    "u": "https://www.engadget.com/2018-11-28-dji-osmo-pocket-camera-costs-349.html"
   },
   {
    "t": "GSMArena: vivo details X50 Pro's gimbal camera stabilization system",
    "u": "https://www.gsmarena.com/vivo_explains_x50_pros_gimbal_camera_stabilization_system_shows_off_results-news-43338.php"
   }
  ]
 },
 "gyropost": {
  "stages": [
   [
    2011,
    "paper",
    "Stanford 的 Alexandre Karpenko、David Jacobs、Jongmin Baek、Marc Levoy 发表技术报告 CSTR 2011-03《Digital Video Stabilization and Rolling Shutter Correction using Gyroscopes》：用陀螺仪数据统一建模相机旋转和卷帘畸变，并能从一段约 10 秒视频自动标定焦距、卷帘时长、陀螺与相机的时间差和漂移，在 iPhone 4 上实时运行。",
    "Stanford's Alexandre Karpenko, David Jacobs, Jongmin Baek and Marc Levoy published tech report CSTR 2011-03, 'Digital Video Stabilization and Rolling Shutter Correction using Gyroscopes': one model for camera rotation and rolling-shutter warp driven by gyro data, with automatic calibration of focal length, readout time, gyro-camera delay and drift from about 10 seconds of video, running in real time on an iPhone 4.",
    [
     0
    ]
   ],
   [
    2012,
    "corp",
    "Karpenko 与兄弟 Alexei、Ivan 创办 Midnox（后改名 Luma，Y Combinator 孵化），把论文方法做成 iOS 视频 App Luma，主打录制时实时防抖，防抖和滤镜在拍后还能开关（约）。",
    "Karpenko and his brothers Alexei and Ivan founded Midnox (later Luma, a Y Combinator company) and turned the paper into the Luma iOS video app, with real-time stabilization and filters that could still be toggled after capture (approx.).",
    [
     1
    ]
   ],
   [
    2013,
    "mass",
    "2013 年 6 月 Instagram 推出视频功能，自带名为 Cinema 的防抖；8 月 Instagram 以首笔收购买下 Luma 团队和技术，Luma 的防抖并入 Instagram，Luma App 下架。",
    "Instagram launched video in June 2013 with built-in stabilization called Cinema; in August it made its first acquisition, buying Luma's team and technology, folding Luma's stabilization into Instagram and pulling the Luma app.",
    [
     1
    ]
   ],
   [
    2014,
    "ver",
    "2014 年 8 月 26 日 Instagram 发布 iOS App Hyperlapse：用 Cinema 算法把陀螺仪采样和视频帧一起算出平滑的虚拟相机轨迹，只为保留下来的帧计算姿态，从而能把长时间手持视频加速成稳定的延时，不需要逐帧做图像分析。",
    "On 26 August 2014 Instagram released the iOS app Hyperlapse: the Cinema algorithm combined gyro samples with frames to solve a smooth synthetic camera path, computing orientation only for the frames kept, so long handheld clips could be sped up into steady timelapses without per-frame image analysis.",
    [
     2
    ]
   ],
   [
    2016,
    "corp",
    "GoPro HERO5 Black 开始在视频文件里写入 GPMF 元数据，其中 GYRO 三轴陀螺仪 400 Hz、ACCL 加速度计 200 Hz，并开源了 gpmf-parser；这让第三方软件第一次能拿到运动相机的原始陀螺数据做后期防抖。",
    "The GoPro HERO5 Black began writing GPMF metadata into its video files, including a 400 Hz three-axis GYRO and a 200 Hz ACCL stream, and GoPro open-sourced gpmf-parser, giving third-party software raw action-camera gyro data for post stabilization for the first time.",
    [
     3
    ]
   ],
   [
    2018,
    "proto",
    "Robert McIntosh 和 Andy Russell 的 ReelSteady 先以 After Effects 插件形式出售（约 399 美元），读取 GoPro 陀螺数据做后期防抖，在 FPV 航拍圈流行（约）。",
    "Robert McIntosh and Andy Russell's ReelSteady was first sold as an After Effects plug-in (approx. US$399) that read GoPro gyro data for post stabilization, and caught on among FPV pilots (approx.).",
    [
     4
    ]
   ],
   [
    2019,
    "mass",
    "2019 年 5 月 ReelSteady GO 独立桌面版发布，售价 99 美元，自动读取 HERO5、HERO6、HERO7（后加 HERO8）的陀螺元数据，一键做出比机内 HyperSmooth 更稳、能大幅裁切的画面。",
    "ReelSteady GO, a standalone US$99 desktop app, launched in May 2019 and automatically read gyro metadata from the HERO5, HERO6 and HERO7 (later HERO8), stabilizing in one click with results steadier than in-camera HyperSmooth at the cost of a larger crop.",
    [
     4
    ]
   ],
   [
    2020,
    "corp",
    "2020 年 3 月 GoPro 收购 ReelSteady，McIntosh 和 Russell 加入 GoPro，计划把陀螺后期防抖整合进 GoPro 软件生态。",
    "In March 2020 GoPro acquired ReelSteady; McIntosh and Russell joined GoPro to fold gyro-based post stabilization into its software.",
    [
     4
    ]
   ],
   [
    2021,
    "proto",
    "Elvin Chen 用 Python 写的开源项目 Gyroflow 在 2020 年 8 月发布 0.1.0-alpha（只有镜头标定和画面拉伸工具），2021 年 2 月 8 日 0.2.0-alpha 才具备完整防抖，支持 Betaflight Blackbox 日志和 GoPro GPMF，让任何相机外挂飞控陀螺也能做后期防抖。",
    "Elvin Chen's open-source Python project Gyroflow posted 0.1.0-alpha in August 2020 (only lens calibration and a stretch tool); 0.2.0-alpha on 8 February 2021 was the first with working stabilization, reading Betaflight Blackbox logs and GoPro GPMF so any camera with a flight-controller gyro strapped on could be stabilized in post.",
    [
     5
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 4 月 GoPro 用 Player + ReelSteady 取代单独的 ReelSteady GO：基础播放免费，100 美元内购解锁 ReelSteady 防抖和镜头校正，可处理包括 HyperSmooth 素材在内的大部分 GoPro 视频。",
    "In April 2022 GoPro replaced the standalone ReelSteady GO with Player + ReelSteady: free for playback, with a US$100 in-app purchase unlocking ReelSteady stabilization and lens correction for most GoPro footage, including HyperSmooth clips.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "AdrianEddy 主导用 Rust 重写的 Gyroflow v1.0.0 于 2022 年 5 月 5 日发布，GPU 加速、跨平台，读取 GoPro、Sony、DJI、Insta360 等机型的陀螺元数据，并出了 DaVinci Resolve / Premiere 插件，成为免费的通用陀螺后期防抖工具。",
    "Gyroflow v1.0.0, rewritten in Rust under AdrianEddy, shipped on 5 May 2022: GPU-accelerated and cross-platform, reading gyro metadata from GoPro, Sony, DJI, Insta360 and others, with DaVinci Resolve and Premiere plug-ins, making it the free general-purpose gyro post stabilizer.",
    [
     7
    ]
   ]
  ],
  "now": [
   "陀螺后期防抖已成标准工作流：Sony（Catalyst Browse，FX9 起）、Blackmagic（DaVinci Resolve 读 BRAW 陀螺数据）、GoPro Player + ReelSteady、Insta360 Studio 都自带，第三方用开源 Gyroflow。FPV、运动相机和电影机都在用，可在后期反复调整平滑度和裁切。",
   "Gyro post stabilization is a standard workflow: Sony (Catalyst Browse, from the FX9), Blackmagic (DaVinci Resolve reading BRAW gyro data), GoPro Player + ReelSteady and Insta360 Studio all have it built in, and everyone else uses open-source Gyroflow. FPV, action cams and cinema cameras use it, with smoothing and crop adjustable after the fact."
  ],
  "replaced": [
   "在消费端，机内实时陀螺电子防抖（GoPro HyperSmooth、Google Pixel 的 fused stabilization、Insta360 FlowState）让大多数人不再需要后期处理；但后期方案仍能看见未来帧、可重新选平滑度和裁切，所以在专业和 FPV 场景没有被取代。",
   "For consumers, real-time in-camera gyro EIS (GoPro HyperSmooth, Google Pixel's fused stabilization, Insta360 FlowState) has removed the need for post processing; but post stabilization can look ahead at future frames and re-choose smoothing and crop, so pros and FPV pilots still rely on it."
  ],
  "refs": [
   {
    "t": "Karpenko et al., Digital Video Stabilization and Rolling Shutter Correction using Gyroscopes (Stanford CSTR 2011-03)",
    "u": "https://graphics.stanford.edu/papers/stabilization/"
   },
   {
    "t": "TechCrunch: Instagram acquires tech and team of video sharing app Luma",
    "u": "https://techcrunch.com/2013/08/23/instagram-acquires-tech-and-team-of-video-sharing-app-luma-which-will-shut-down"
   },
   {
    "t": "TechCrunch: Instagram pulls back the curtain on the engineering behind Hyperlapse",
    "u": "https://techcrunch.com/2014/08/27/instagram-pulls-back-the-curtain-on-the-engineering-magic-behind-hyperlapse/"
   },
   {
    "t": "GoPro gpmf-parser (GPMF metadata format, GYRO/ACCL)",
    "u": "https://github.com/gopro/gpmf-parser"
   },
   {
    "t": "RedShark News: GoPro acquires software stabilisation specialists ReelSteady",
    "u": "https://www.redsharknews.com/production/item/7069-gopro-acquires-software-stabilisation-specialists-reelsteady"
   },
   {
    "t": "Gyroflow legacy (Python) releases - ElvinC/gyroflow",
    "u": "https://github.com/ElvinC/gyroflow/releases"
   },
   {
    "t": "Engadget: GoPro's new Player + ReelSteady app",
    "u": "https://www.engadget.com/go-pros-new-player-reel-steady-app-lets-you-stabilize-any-footage-123514021.html"
   },
   {
    "t": "Gyroflow (Rust) - gyroflow/gyroflow releases",
    "u": "https://github.com/gyroflow/gyroflow/releases"
   }
  ]
 },
 "dualis": {
  "stages": [
   [
    2014,
    "mass",
    "2014 年 11 月 Sony α7 II 发布，是首台带 5 轴机身防抖的全画幅相机（4.5 级）；装 E 卡口 OSS 防抖镜头时机身只校正 3 个方向，俯仰、偏航交给镜头 OIS，这已经是镜头 + 机身按轴分工的协同防抖。",
    "The Sony α7 II, announced in November 2014, was the first full-frame camera with 5-axis in-body stabilization (4.5 stops); with E-mount OSS lenses the body corrected only three directions and left pitch and yaw to the lens OIS, already a lens-plus-body division of axes.",
    [
     0
    ]
   ],
   [
    2014,
    "rival",
    "同一台 α7 II 对不带 OSS 的镜头（转接镜头、老镜头）由机身独自做 5 轴，说明纯机身防抖本身就是协同防抖的对手：不依赖镜头，但长焦端行程不够。",
    "The same α7 II did all five axes in the body for non-OSS lenses (adapted and older glass), showing that body-only IBIS is the rival approach: lens-independent, but short of travel at long focal lengths.",
    [
     0
    ]
   ],
   [
    2015,
    "corp",
    "2015 年 7 月 16 日 Panasonic 发布 Lumix DMC-GX8，推出 Dual I.S.：机身 4 轴防抖和镜头 2 轴 O.I.S. 同时工作，官方称世界首个「6-Control」镜头与机身同时防抖的系统；Panasonic 同步给已有 O.I.S. 镜头推固件支持。",
    "On 16 July 2015 Panasonic announced the Lumix DMC-GX8 with Dual I.S.: 4-axis body stabilization and 2-axis lens O.I.S. working at the same time, billed as the world's first '6-Control' system stabilizing in both body and lens, with firmware updates bringing existing O.I.S. lenses on board.",
    [
     1,
     2
    ]
   ],
   [
    2015,
    "ver",
    "GX8 的分工思路是机身负责大幅抖动、镜头抑制光轴的细小角抖；官方称纠正角度在广角端最多扩大到 3.5 倍、长焦端 1.5 倍。",
    "The GX8 split had the body handle large shakes and the lens suppress small angular shake of the optical axis; Panasonic claimed up to 3.5x (wide) and 1.5x (tele) more correction angle.",
    [
     2
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 1 月 Olympus 发布 M.Zuiko Digital ED 300mm F4 IS PRO，首次支持 5-axis Sync IS：与 OM-D E-M1、E-M5 Mark II 机身防抖联动，最高约 6 级，售价 2,500 美元；其他 Olympus 机身只能二选一。",
    "In January 2016 Olympus released the M.Zuiko Digital ED 300mm F4 IS PRO, the first lens with 5-axis Sync IS: linked with the OM-D E-M1 and E-M5 Mark II body IS for up to about 6 stops, at US$2,500; other Olympus bodies had to pick one system.",
    [
     3
    ]
   ],
   [
    2016,
    "ver",
    "2016 年 9 月 Olympus 发布 OM-D E-M1 Mark II 和 M.Zuiko 12-100mm F4 IS PRO，Sync IS 扩展到 24–200mm 等效的变焦镜头上，11 月上市。",
    "In September 2016 Olympus announced the OM-D E-M1 Mark II with the M.Zuiko 12-100mm F4 IS PRO, extending Sync IS to a 24-200mm-equivalent zoom, shipping in November.",
    [
     4
    ]
   ],
   [
    2016,
    "ver",
    "Panasonic GX85（2016 年 4 月）和 G85（2016 年 10 月出货）升级到 Dual I.S. 2：机身改为 5 轴，与镜头 2 轴 O.I.S. 联动，官方称最高约 5 级。",
    "The Panasonic GX85 (April 2016) and G85 (shipping October 2016) moved to Dual I.S. 2: a 5-axis body linked with 2-axis lens O.I.S., rated at up to about 5 stops.",
    [
     5,
     1
    ]
   ],
   [
    2020,
    "ver",
    "2020 年 7 月 Canon EOS R5 / R6 首次给 RF 系统加入机身防抖，并与 RF 镜头 IS 实时通信做「协同控制 IS」（Coordinated Control IS），最高 8 级，是当时全画幅相机的最高标称值。",
    "In July 2020 the Canon EOS R5 and R6 brought IBIS to the RF system, exchanging data in real time with RF lens IS for 'Coordinated Control IS' rated up to 8 stops, then the highest figure for full frame.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 10 月 Nikon 发布 NIKKOR Z 600mm f/6.3 VR S，配合支持的机身开启 Synchro VR，把机身 VR 和镜头 VR 合并，最高 6.0 级；Nikon 至此也加入协同防抖。",
    "In October 2023 Nikon released the NIKKOR Z 600mm f/6.3 VR S; with a compatible body, Synchro VR merged in-body and lens VR for up to 6.0 stops, bringing Nikon into coordinated stabilization.",
    [
     7
    ]
   ]
  ],
  "now": [
   "四大无反系统都有协同防抖：Sony（OSS 分轴）、Panasonic Dual I.S. 2、OM System Sync IS（OM-1 Mark II 标称 8.5 级）、Canon 协同控制 IS、Nikon Synchro VR。标称值已到 7–8.5 级，主要用在长焦和视频手持。",
   "All major mirrorless systems offer coordinated stabilization: Sony (OSS axis split), Panasonic Dual I.S. 2, OM System Sync IS (8.5 stops claimed on the OM-1 Mark II), Canon Coordinated Control IS and Nikon Synchro VR. Ratings now reach 7-8.5 stops, mostly for telephoto and handheld video."
  ],
  "replaced": [
   "没有被替代，仍是高端相机的标配；限制在于只对同品牌防抖镜头有效，而且级数已逼近地球自转等物理极限，之后的提升转向 Nikon focus-point VR 这类针对画面边缘的改进和视频电子防抖叠加。",
   "Not replaced; it remains standard on high-end cameras. Its limits are that it only works with same-brand stabilized lenses and that ratings are near physical limits such as Earth's rotation, so progress has shifted to edge-of-frame fixes like Nikon's focus-point VR and to stacking video EIS on top."
  ],
  "refs": [
   {
    "t": "Engadget: Sony's new A7 II mirrorless camera stabilizes your shots with any lens",
    "u": "https://www.engadget.com/2014/11/20/sonys-alpha-7-ii-full-frame-mirrorless/"
   },
   {
    "t": "Panasonic Lumix DMC-GX8 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-GX8"
   },
   {
    "t": "Openers: Panasonic's LUMIX GX8 Features a Newly Developed 6-Control Image Stabilization System",
    "u": "https://openers.jp/en/design/design_digital/1314385"
   },
   {
    "t": "TNW: Hands-on - Olympus 300mm f/4 lens has ridiculously good stabilization",
    "u": "https://thenextweb.com/news/hands-on-olympus-300mm-f4-lens-has-ridiculously-good-stabilization"
   },
   {
    "t": "Imaging Resource: New 12-100mm f/4 IS Pro, 25mm f/1.2 Pro (2016-09-19)",
    "u": "https://imaging-resource.com/news/2016/09/19/zuiko-pro-continues-to-grow-new-12-100mm-f-4-is-pro-25mm-f-1.2-pro"
   },
   {
    "t": "Imaging Resource: Panasonic G85 basic specifications",
    "u": "https://www.imaging-resource.com/PRODS/panasonic-g85/panasonic-g85A.HTM"
   },
   {
    "t": "Canon Europe: All about 8-stops of Image Stabilisation",
    "u": "https://www.canon-europe.com/pro/stories/8-stops-image-stabilization/"
   },
   {
    "t": "Nikon releases the NIKKOR Z 600mm f/6.3 VR S",
    "u": "https://www.nikon.com/company/news/2023/1011_lens_01/"
   }
  ]
 },
 "horizon": {
  "stages": [
   [
    2013,
    "corp",
    "Ricoh 2013 年推出 360° 相机 THETA，并申请用加速度（重力）传感器检测机身倾斜、自动把全景照片「天顶校正」到竖直的专利；相机倒放或斜放拍的照片也能自动扶正，这是重力方向校正地平线的早期量产应用（约）。",
    "Ricoh launched the THETA 360° camera in 2013 and filed patents on using an acceleration (gravity) sensor to detect tilt and apply 'zenith correction' to spherical photos, so shots taken upside down or slanted come out upright, an early shipped use of gravity-based horizon correction (approx.).",
    [
     0
    ]
   ],
   [
    2014,
    "mass",
    "2014 年 1 月 Evil Window Dog 发布 iOS App Horizon：用手机陀螺仪实时测横滚角，旋转并裁切画面，不管手机竖拿、斜拿还是拍摄中转动，录出的视频始终是水平横屏，售价 0.99 美元，是手机上第一个大众化的陀螺地平线锁定。",
    "In January 2014 Evil Window Dog released the iOS app Horizon: it read the phone's gyroscope for roll and rotated and cropped the frame so video always came out level and landscape however the phone was held or turned, for US$0.99, the first mainstream gyro horizon lock on phones.",
    [
     1
    ]
   ],
   [
    2015,
    "ver",
    "2015 年 Ricoh THETA S 把天顶校正扩展到视频：转换全景视频时可选「倾斜上下校正」，并同时做旋转抖动校正。",
    "The 2015 Ricoh THETA S extended zenith correction to video: converting a 360° clip offered top/bottom tilt correction together with rotational shake correction.",
    [
     2
    ]
   ],
   [
    2018,
    "ver",
    "2018 年 10 月 Insta360 ONE X 发布（售价 400 美元，5.7K 全景），用 6 轴陀螺 + FlowState 算法做全向防抖，App 和 Insta360 Studio 里可开自动地平线校正，因为全景画面不怕裁切，可以 360° 旋转仍保持水平。",
    "The Insta360 ONE X (October 2018, US$400, 5.7K 360°) used a 6-axis gyro and the FlowState algorithm for all-direction stabilization, with automatic horizon leveling in the app and Insta360 Studio; because a 360° frame has nothing to crop away, it stays level through full rotation.",
    [
     3
    ]
   ],
   [
    2019,
    "ver",
    "2019 年 10 月 GoPro HERO8 Black 在 GoPro App 里加入一键地平线校正，属于后期处理；单镜头视场有限，校正角度大时裁切明显，评测者认为校正后的流畅度略逊于原片。",
    "In October 2019 the GoPro HERO8 Black added one-tap horizon leveling in the GoPro app, a post-processing step; with a single lens's limited field of view, big corrections cost a noticeable crop, and reviewers found the leveled result slightly less smooth than the source.",
    [
     4
    ]
   ],
   [
    2019,
    "mass",
    "同月发布的 GoPro MAX 用 Max HyperSmooth 把 180° 以上的拍摄范围当缓冲区，在 HERO（单镜头）模式下机内实时做地平线校正，相机转 360° 地平线也不歪，是运动相机首次机内全角度锁定。",
    "The GoPro MAX, launched the same month, used its 180°-plus capture as a buffer for Max HyperSmooth and leveled the horizon in-camera in HERO (single-lens) mode, staying level through 360° of rotation, the first in-camera full-rotation lock on an action cam.",
    [
     5
    ]
   ],
   [
    2021,
    "ver",
    "此前 GoPro 单镜头机型只有配 Max Lens Mod 才能 360° 锁定，机内水平校正有角度上限：HERO10 Black（2021 年）最多 45°。",
    "Before this, single-lens GoPros could lock through 360° only with the Max Lens Mod, and in-camera leveling had an angle limit: up to 45° on the 2021 HERO10 Black.",
    [
     6
    ]
   ],
   [
    2022,
    "ver",
    "2022 年 9 月 GoPro HERO11 Black 换用 8:7 比例的 1/1.9 英寸传感器，多出的上下余量让机内 360° Horizon Lock 不再需要 Max Lens Mod。",
    "The GoPro HERO11 Black (September 2022) switched to an 8:7, 1/1.9-inch sensor whose extra vertical margin enabled in-camera 360° Horizon Lock without the Max Lens Mod.",
    [
     6
    ]
   ],
   [
    2023,
    "ver",
    "2023 年 5 月 Motorola Edge+（2023）加入 Horizon Lock：同时用主摄和超广角两颗摄像头，配合陀螺、加速度计和 AI 融合出一段地平线不随手机横滚的视频，手机倒过来也保持水平，但输出分辨率受限。",
    "The Motorola Edge+ (2023), from May 2023, added Horizon Lock: it fuses the main and ultra-wide cameras using gyro, accelerometer and AI into video whose horizon ignores phone roll, staying level even upside down, though at limited output resolution.",
    [
     7
    ]
   ]
  ],
  "now": [
   "全角度地平线锁定已是运动相机标配：GoPro HERO11 以后的机型、DJI Osmo Action 3 起的 HorizonSteady、Insta360 全系都能机内 360° 锁定，全景相机靠后期重构。手机端 Motorola 首先跟进，Samsung 在 Galaxy S26 系列加入类似的 Horizontal Lock。",
   "Full-rotation horizon lock is standard on action cams: GoPro HERO11 and later, DJI's HorizonSteady from the Osmo Action 3, and all of Insta360 lock 360° in camera, while 360° cameras reframe in post. On phones Motorola led, and Samsung added a similar Horizontal Lock on the Galaxy S26 series."
  ],
  "replaced": [
   "没有被替代。它和电子防抖用同一套陀螺数据，限制是要牺牲视场或分辨率；更大的传感器比例（8:7、正方形）、超广角 + 主摄融合和 360° 拍摄都是在用更多像素余量换取更大的锁定角度。",
   "Not replaced. It shares gyro data with EIS and its cost is field of view or resolution; taller sensor ratios (8:7, square), ultra-wide plus main-camera fusion and 360° capture all trade extra pixel margin for a wider locking range."
  ],
  "refs": [
   {
    "t": "RICOH THETA (m15) Specifications - zenith correction",
    "u": "https://theta-archive.ricoh360.com/topics.theta360.com/en/faq/c_02/2048/"
   },
   {
    "t": "Engadget: Horizon for iOS records landscape video no matter how you hold your phone",
    "u": "https://www.engadget.com/2014/01/14/horizon-ios-app-horizontal-video/"
   },
   {
    "t": "Ricoh Imaging: RICOH THETA S",
    "u": "https://www.ricoh-imaging.co.jp/english/products/theta_s/"
   },
   {
    "t": "PetaPixel: Insta360 ONE X is a 5.7K 360° Action Cam with 'Impossible' Stabilization",
    "u": "https://petapixel.com/2018/10/10/insta360-one-x-is-a-5-7k-360-action-cam-with-impossible-stabilization/"
   },
   {
    "t": "DC Rainmaker: GoPro Hero8 Black In-Depth Review",
    "u": "https://dcrainmaker.com/2019/10/gopro-hero8-review.html"
   },
   {
    "t": "Engadget: GoPro Max review",
    "u": "https://www.engadget.com/2019-10-22-gopro-max-review.html"
   },
   {
    "t": "PetaPixel: GoPro Hero11 Black Review",
    "u": "https://petapixel.com/2022/09/14/gopro-hero11-black-review-a-solid-upgrade-on-a-proven-formula/"
   },
   {
    "t": "Android Central: Motorola's Horizon Lock is the coolest camera feature I've seen in years",
    "u": "https://androidcentral.com/phones/motorolas-horizon-lock-is-the-coolest-camera-feature-ive-seen-in-years"
   }
  ]
 },
 "ois": {
  "stages": [
   [
    1962,
    "idea",
    "Juan de la Cierva（Dynasciences）1962 年申请专利 US3212420：在镜头前放可变角度液体棱镜，由速率陀螺和伺服实时偏折光路，抵消飞机姿态抖动，产品即 Dynalens；1965 年授权。",
    "Juan de la Cierva of Dynasciences filed US3212420 in 1962: a variable-angle fluid-filled prism in front of the lens, tilted by rate gyros and servos to cancel aircraft motion; granted in 1965, it became the Dynalens.",
    [
     1
    ]
   ],
   [
    1983,
    "paper",
    "Panasonic 的 Oshima 等人 1983 年申请基于振动陀螺的手抖补偿基础专利。",
    "Oshima et al. at Panasonic filed the fundamental patent for vibration-gyro-based handshake compensation in 1983.",
    [
     2
    ]
   ],
   [
    1988,
    "mass",
    "Panasonic PV-460 VHS 摄像机 1988 年 6 月上市，用音叉式振动陀螺检测抖动，让镜头与传感器整组摆动（lens unit swing）校正光轴，是首款内置光学防抖的消费摄像机，2026 年获评 IEEE Milestone。",
    "Panasonic's PV-460 VHS camcorder (June 1988) used a tuning-fork vibration gyro and swung the whole lens-and-sensor unit to correct the optical axis, the first consumer camcorder with optical stabilisation; it became an IEEE Milestone in 2026.",
    [
     2
    ]
   ],
   [
    1994,
    "ver",
    "Nikon Zoom 700VR（美国名 Zoom-Touch 105 VR）1994 年发布，38–105mm f/4–7.8 镜头内移动镜片做双轴 VR，是首台带光学防抖的相机。",
    "Nikon's Zoom 700VR (Zoom-Touch 105 VR in the US), released in 1994, shifted elements in its 38–105mm f/4–7.8 lens for two-axis VR, the first still camera with optical stabilisation.",
    [
     0,
     3
    ]
   ],
   [
    1995,
    "ver",
    "Canon EF 75-300mm f/4-5.6 IS USM 1995 年 9 月上市，首支带防抖的 SLR 可换镜头：陀螺检测，平移第二组镜片，约 2 档。",
    "The Canon EF 75-300mm f/4-5.6 IS USM (September 1995) was the first interchangeable SLR lens with stabilisation: gyro sensing and a shifting second lens group, worth about two stops.",
    [
     4
    ]
   ],
   [
    2003,
    "rival",
    "Minolta DiMAGE A1 首次用传感器位移（sensor-shift）做双轴防抖，所有镜头都能防抖；2008 年 Sony A900 把它带到全画幅。",
    "The Minolta DiMAGE A1 introduced two-axis sensor-shift stabilisation, working with any lens; Sony brought it to full frame with the A900 in 2008.",
    [
     0
    ]
   ],
   [
    2009,
    "ver",
    "Canon EF 100mm f/2.8L Macro IS USM 首次用 Hybrid IS，同时补偿角度抖动和平移抖动，针对微距。",
    "The Canon EF 100mm f/2.8L Macro IS USM introduced Hybrid IS, correcting both angular and shift shake for macro work.",
    [
     0
    ]
   ],
   [
    2012,
    "mass",
    "Nokia Lumia 920（2012 年 9 月发布）首次在手机上用光学防抖：floating lens 用陀螺控制整组光学模组移动，号称约 3EV。",
    "The Nokia Lumia 920 (announced September 2012) brought OIS to phones: its floating-lens design moved the whole optical assembly under gyro control, claimed at about 3 EV.",
    [
     5,
     0
    ]
   ],
   [
    2014,
    "ver",
    "Sony α7 II 做出全画幅 5 轴机身防抖；同年 iPhone 6 Plus 加入 OIS，手机 OIS 走向主流。",
    "The Sony α7 II brought 5-axis in-body stabilisation to full frame; the same year the iPhone 6 Plus added OIS and phone OIS went mainstream.",
    [
     0,
     6
    ]
   ],
   [
    2015,
    "ver",
    "Panasonic Lumix GX8 推出 Dual IS，让镜头 OIS 与机身防抖协同；Olympus 2016 年推出同步双防抖。",
    "The Panasonic Lumix GX8 introduced Dual IS, coordinating lens OIS with in-body stabilisation; Olympus followed with synchronised dual IS in 2016.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "iPhone 12 Pro Max 首次在 iPhone 用传感器位移防抖，四角磁铁驱动传感器，Apple 称每秒校正 5000 次以上；同年 vivo X50 Pro 推出微云台，整个摄像模组反向转动，号称补偿幅度约为传统 OIS 的 3 倍。",
    "The iPhone 12 Pro Max brought sensor-shift stabilisation to iPhone, moving the sensor with magnets at four corners and, per Apple, adjusting over 5,000 times a second; the same year the vivo X50 Pro introduced a micro-gimbal rotating the whole camera module, claiming about three times the correction range of conventional OIS.",
    [
     7,
     8
    ]
   ]
  ],
  "now": [
   "光学防抖已是标配：相机普遍是机身 5 轴 + 镜头 OIS 协同，手机主摄普遍有 OIS，iPhone 用传感器位移，vivo 等用云台式模组，再叠加电子防抖（EIS）。",
   "Optical stabilisation is standard: cameras combine 5-axis IBIS with lens OIS, phone main cameras nearly all have OIS (sensor-shift on iPhone, gimbal-style modules on vivo and others), layered with electronic stabilisation (EIS)."
  ],
  "replaced": [
   "没有被取代；镜片位移在手机上逐步让位于传感器位移和整模组云台，视频端越来越依赖 EIS 与陀螺数据后期防抖做补充。",
   "Not replaced; in phones lens shift is giving way to sensor shift and whole-module gimbals, and video increasingly leans on EIS and gyro-based stabilisation as a complement."
  ],
  "refs": [
   {
    "t": "Image stabilization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Image_stabilization"
   },
   {
    "t": "US3212420A - Image motion compensator (Juan de la Cierva, Dynasciences)",
    "u": "https://patents.google.com/patent/US3212420"
   },
   {
    "t": "ETHW: Milestones: Camcorder with Image Stabilization, 1988",
    "u": "https://ethw.org/Milestones:Camcorder_with_Image_Stabilization,_1988"
   },
   {
    "t": "Camera-wiki: Nikon Zoom 700 VR / Zoom-Touch 105 VR",
    "u": "https://camera-wiki.org/wiki/Nikon_Zoom_700_VR/Zoom-Touch_105_VR"
   },
   {
    "t": "Canon Camera Museum: EF75-300mm f/4-5.6 IS USM",
    "u": "https://global.canon/en/c-museum/product/ef330.html"
   },
   {
    "t": "Windows Blog: Taking PureView to the next level (2012)",
    "u": "https://blogs.windows.com/devices/2012/09/05/taking-pureview-to-the-next-level/"
   },
   {
    "t": "Apple: iPhone 6 and iPhone 6 Plus announcement (2014)",
    "u": "https://www.apple.com/au/newsroom/2014/09/09Apple-Announces-iPhone-6-iPhone-6-Plus-The-Biggest-Advancements-in-iPhone-History"
   },
   {
    "t": "Digit: Apple iPhone 12 Pro Max sensor-shift stabilisation explained",
    "u": "https://www.digit.in/news/mobile-phones/apple-iphone-12-pro-max-camera-sensor-shift-stabilisation-explained-57333.html"
   },
   {
    "t": "Android Central: Vivo X50 series brings gimbal stabilization to phones",
    "u": "https://www.androidcentral.com/vivo-x50-series-brings-gimbal-video-stabilization-phones"
   }
  ]
 },
 "ibis": {
  "stages": [
   [
    1994,
    "rival",
    "先出现的是镜头防抖：Nikon Zoom 700VR（1994）首个双轴光学防抖镜头，Canon EF 75–300mm IS USM（1995）把它带进可换镜头；缺点是每支镜头都要自带防抖组。",
    "Lens-based stabilization came first: the Nikon Zoom 700VR (1994) had the first two-axis stabilized lens and Canon's EF 75–300mm IS USM (1995) brought it to interchangeable lenses — but every lens needs its own IS group.",
    [
     0
    ]
   ],
   [
    2003,
    "mass",
    "Minolta DiMAGE A1（2003 年 8 月 7 日发布，5MP、28–200mm 等效）首创 Anti-Shake：不动镜片，而让 CCD 在 x/y 两轴浮动补偿抖动，是首台传感器位移防抖相机。",
    "The Minolta DiMAGE A1 (announced 7 August 2003, 5MP, 28–200mm equiv.) introduced Anti-Shake, moving the CCD on x/y axes instead of a lens element — the first sensor-shift stabilized camera.",
    [
     1,
     0
    ]
   ],
   [
    2004,
    "ver",
    "Konica Minolta Maxxum 7D（Dynax 7D）把 CCD 位移防抖搬进单反机身，让所有卡口镜头都获得防抖。",
    "The Konica Minolta Maxxum 7D (Dynax 7D) brought CCD-shift stabilization to a DSLR body, stabilizing every mounted lens.",
    [
     0
    ]
   ],
   [
    2006,
    "corp",
    "Pentax K100D（2006 年 5 月美国上市）采用机身 Shake Reduction；同年 Sony 接手 Konica Minolta 相机业务，以 Super SteadyShot 延续该技术。",
    "The Pentax K100D (US launch May 2006) adopted in-body Shake Reduction; Sony, having taken over Konica Minolta's camera business, continued the technology as Super SteadyShot.",
    [
     2,
     0
    ]
   ],
   [
    2007,
    "corp",
    "Olympus E-510 加入机身防抖，用超声波驱动（Supersonic Wave Drive）移动传感器，四大厂里第三家采用 IBIS。",
    "The Olympus E-510 added in-body IS driven by a Supersonic Wave Drive, making Olympus another major maker to adopt IBIS.",
    [
     0
    ]
   ],
   [
    2012,
    "ver",
    "Olympus OM-D E-M5（2012 年 2 月 8 日）推出世界首个 5 轴 IBIS：除 x/y 平移外还补偿 pitch、yaw 与绕光轴 roll，约 4 档。",
    "The Olympus OM-D E-M5 (8 February 2012) launched the world's first 5-axis IBIS, correcting pitch, yaw and roll around the optical axis on top of x/y shift, about 4 stops.",
    [
     3
    ]
   ],
   [
    2014,
    "ver",
    "Sony α7 II（2014 年 11 月 20 日）把 5 轴传感器位移防抖带进全画幅无反，之后全画幅机型陆续标配。",
    "The Sony α7 II (20 November 2014) brought 5-axis sensor-shift IS to full-frame mirrorless; full-frame bodies soon made it standard.",
    [
     4
    ]
   ],
   [
    2015,
    "ver",
    "Panasonic Lumix GX8 推出 Dual IS，把镜头防抖与机身防抖协同控制，此后 Canon、Nikon、OM 都做了镜头+机身联动。",
    "The Panasonic Lumix GX8 introduced Dual IS, coordinating lens and body stabilization; Canon, Nikon and OM later did the same.",
    [
     0
    ]
   ],
   [
    2020,
    "ver",
    "iPhone 12 Pro Max 主摄首次在 iPhone 上用 sensor-shift OIS：移动比镜筒轻得多的传感器，每秒数千次修正。",
    "The iPhone 12 Pro Max main camera was the first iPhone with sensor-shift OIS, moving the far lighter sensor instead of the lens barrel thousands of times per second.",
    [
     5
    ]
   ],
   [
    2020,
    "rival",
    "vivo X50 Pro（2020 年 6 月）推出“微云台”，双滚珠悬挂整个摄像头模组反向摆动，号称防抖角度比传统 OIS 大 300%，与 sensor-shift 争夺手机防抖路线。",
    "The vivo X50 Pro (June 2020) launched a micro-gimbal that swings the whole camera module on a double-ball suspension, claiming 300% more correction angle than OIS — a rival to sensor-shift in phones.",
    [
     6
    ]
   ],
   [
    2020,
    "ver",
    "Canon EOS R5（2020 年 7 月 9 日）配 5 轴 IBIS，配合 IS 镜头最高 8 档，宣告 IBIS 成为高端全画幅标配。",
    "The Canon EOS R5 (9 July 2020) had 5-axis IBIS rated up to 8 stops with IS lenses, cementing IBIS as standard on high-end full-frame.",
    [
     7
    ]
   ],
   [
    2024,
    "ver",
    "OM System OM-1 Mark II（2024 年 1 月 30 日）配合支持镜头达 8.5 档防抖，当时业界最高。",
    "The OM System OM-1 Mark II (30 January 2024) reached 8.5 stops with supported lenses, the highest in the industry at the time.",
    [
     8
    ]
   ]
  ],
  "now": [
   "2026 年 IBIS 几乎是所有中高端无反（Sony、Canon、Nikon、Fujifilm、OM System）标配，最高约 8–8.5 档；手机上 iPhone 主摄等旗舰用 sensor-shift，也有长焦把传感器位移与棱镜防抖组合。",
   "In 2026 IBIS is standard on nearly all mid- to high-end mirrorless cameras (Sony, Canon, Nikon, Fujifilm, OM System), rated around 8–8.5 stops; in phones, iPhone main cameras and other flagships use sensor-shift, sometimes combined with prism stabilization on telephotos."
  ],
  "replaced": [
   "没有被取代；它与镜头防抖、电子防抖（EIS/陀螺仪裁切）融合成多级协同防抖。同一套位移机构还衍生出像素位移高像素合成、Pentax AstroTracer 等功能。",
   "Not replaced; it has merged with lens IS and electronic (gyro-crop) stabilization into coordinated systems. The same shift mechanism also enables pixel-shift high-resolution modes and astro tracking."
  ],
  "refs": [
   {
    "t": "Image stabilization - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Image_stabilization"
   },
   {
    "t": "DPReview: Minolta DiMAGE A1 – anti-shake CCD",
    "u": "https://www.dpreview.com/articles/0039274904/dimagea1"
   },
   {
    "t": "Pentax K100D - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Pentax_K100D"
   },
   {
    "t": "Engadget: Olympus OM-D E-M5 five-axis sensor-shift stabilization hands-on",
    "u": "https://www.engadget.com/2012/02/08/olympus-om-d-e-m5-five-axis-sensor-shift-image-stabilization-han/"
   },
   {
    "t": "Sony α7 II - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Sony_%CE%B17_II"
   },
   {
    "t": "TechCrunch: iPhone 12 Pro camera upgrades",
    "u": "https://techcrunch.com/2020/10/13/apples-iphone-12-pro-camera-upgrades-sharpen-focus-on-serious-photographers"
   },
   {
    "t": "Android Central: Vivo X50 series brings gimbal-like stabilization",
    "u": "https://www.androidcentral.com/vivo-x50-series-brings-gimbal-video-stabilization-phones"
   },
   {
    "t": "Canon EOS R5 - Wikipedia",
    "u": "https://en.wikipedia.org/wiki/Canon_EOS_R5"
   },
   {
    "t": "Engadget: OM System OM-1 Mark II improved stabilization",
    "u": "https://engadget.com/om-systems-om-1-mark-ii-offers-improved-autofocus-and-stabilization-201810603.html"
   }
  ]
 },
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
 "pixshift": {
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
    "u": "https://www.dcviews.com/press/Hasselblad-H3DII-39MS.htm"
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
 }
};
