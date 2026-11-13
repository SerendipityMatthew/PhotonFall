/* 技术演进线：年代、泳道、演进节点数据。
   顶层只放数据和纯函数（Node 的 vm 里也要能加载），画图只在 draw 函数体里碰 canvas。
   每个节点回答四个问题：解决了什么 / 带来的新问题 / 推动力 / 行业变化；story 末尾记来源。 */

const ERAS=[{id:'film',name:'胶片',span:'1990 前'},{id:'ccd',name:'CCD 数码',span:'1990s'},{id:'cmos',name:'CMOS',span:'2000s'},{id:'bsi',name:'背照与堆栈',span:'2010s'},{id:'phone',name:'手机计算摄影',span:'2015+'},{id:'ai',name:'全局快门与 AI',span:'2020s'}];
const LANES=[{id:'lens',name:'镜头'},{id:'sensor',name:'传感器'},{id:'proc',name:'图像处理'},{id:'store',name:'存储与传输'},{id:'product',name:'产品形态'}];

/* ---------- 配图小工具（只在 draw 里被调用） ---------- */
const EVO_INK='#2a2622', EVO_ACC='#c8502d', EVO_RGB={r:'#ef5a5f',g:'#48c26a',b:'#5a95ff'};
function evoBg(c,w,h){const u=Math.max(8,Math.min(w,h));
  c.fillStyle='#f7f3ea';c.fillRect(0,0,w,h);
  c.strokeStyle=EVO_INK;c.fillStyle=EVO_INK;c.lineWidth=Math.max(1,u/80);c.lineJoin='round';
  c.textAlign='center';c.textBaseline='middle';c.font=Math.round(Math.max(8,u/10))+'px sans-serif';return u;}
function evoText(c,t,x,y,col){c.fillStyle=col||EVO_INK;c.fillText(t,x,y);}
function evoArrow(c,x1,y1,x2,y2,col){const a=Math.atan2(y2-y1,x2-x1),k=Math.max(4,Math.hypot(x2-x1,y2-y1)*.18);
  c.strokeStyle=c.fillStyle=col||EVO_INK;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();
  c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-k*Math.cos(a-.5),y2-k*Math.sin(a-.5));c.lineTo(x2-k*Math.cos(a+.5),y2-k*Math.sin(a+.5));c.fill();}
/* 方格阵列：col(i,j) 给出每格颜色 */
function evoGrid(c,x,y,s,n,col){const d=s/n;for(let i=0;i<n;i++)for(let j=0;j<n;j++){c.fillStyle=col(i,j);c.fillRect(x+j*d+1,y+i*d+1,d-2,d-2);}}
/* 存储卡外形：cut 为 true 时切掉右上角（SD 的样子） */
function evoCard(c,w,h,name,cut,sub){const u=evoBg(c,w,h),cw=u*.45,ch=u*.6,x=w/2-cw/2,y=h/2-ch/2,k=cut?cw*.25:0;
  c.beginPath();c.moveTo(x,y);c.lineTo(x+cw-k,y);c.lineTo(x+cw,y+k);c.lineTo(x+cw,y+ch);c.lineTo(x,y+ch);c.closePath();c.stroke();
  evoText(c,name,w/2,h/2,EVO_ACC);if(sub)evoText(c,sub,w/2,y+ch+u*.12);}
/* 层叠结构：layers 从上到下 [文字, 是否强调] */
function evoLayers(c,w,h,layers){const u=evoBg(c,w,h),lw=w*.7,lh=h*.7/layers.length;
  layers.forEach(([t,hot],i)=>{const y=h*.15+i*lh;c.fillStyle=hot?EVO_ACC:'#e6dccb';c.fillRect(w*.15,y+1,lw,lh-2);evoText(c,t,w/2,y+lh/2,hot?'#fff':EVO_INK);});
  evoArrow(c,w*.08,h*.02,w*.08,h*.2,EVO_ACC);return u;}
/* 柱状：vals 0..1 */
function evoBars(c,w,h,vals,labels,hot){const u=evoBg(c,w,h),n=vals.length,bw=w*.7/n;
  vals.forEach((v,i)=>{c.fillStyle=i===hot?EVO_ACC:EVO_INK;c.fillRect(w*.15+i*bw+bw*.15,h*.8-v*h*.6,bw*.7,v*h*.6);
    if(labels[i])evoText(c,labels[i],w*.15+i*bw+bw/2,h*.9);});return u;}

/* ---------- 节点 ---------- */
const EVO=[
/* ===== 胶片 ===== */
{id:'film-grain',year:1982,era:'film',lane:'sensor',title:'胶片 ISO 与颗粒',
 solved:'T 颗粒乳剂让高感光度胶片也能保持较细的颗粒。',
 newProblem:'感光度和颗粒还是一对矛盾，一卷胶片只能用一个 ISO。',
 driver:'新闻和家庭用户想在室内弱光下不用闪光灯也能拍。',
 industry:'“ISO 越高越粗糙”成了常识，也是后来数码噪声的老祖宗。',
 story:'胶片上的银盐颗粒越大，越容易被光“点亮”，感光度就越高，但画面也越粗。1982 年柯达发布 Kodacolor VR 1000，用扁平的“T 颗粒”乳剂，把彩色负片做到 ISO 1000，颗粒仍然可以接受。数码相机后来的 ISO 和噪声，讲的是同一笔交换。来源：柯达资料、Christian Science Monitor（1982）、Wikipedia「Kodacolor」。',
 steps:[9,15,22],
 draw(c,w,h){const u=evoBg(c,w,h);let s=7;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;
  [[.27,.012,'ISO 100'],[.73,.035,'ISO 1000']].forEach(([cx,r,t])=>{c.strokeRect(w*cx-u*.2,h*.15,u*.4,h*.55);c.fillStyle=EVO_INK;
   for(let i=0;i<60;i++){c.beginPath();c.arc(w*cx-u*.18+rnd()*u*.36,h*.17+rnd()*h*.51,u*r*(.5+rnd()),0,7);c.fill();}
   evoText(c,t,w*cx,h*.85,cx>.5?EVO_ACC:EVO_INK);});}},

{id:'bayer',year:1976,era:'film',lane:'sensor',title:'拜耳滤色阵列',
 solved:'一块只认亮度的传感器，从此也能拍出彩色。',
 newProblem:'每个像素只记一种颜色，另外两种要靠“猜”，细纹理上会出摩尔纹和伪色。',
 driver:'柯达想用单块传感器做彩色成像，又不想用三块传感器加分光棱镜。',
 industry:'后来，RGGB 排列几乎成了所有数码相机和手机的标准。',
 story:'1976 年 7 月，柯达的 Bryce Bayer 拿到美国专利 3,971,065“彩色成像阵列”：绿色像素占一半，红蓝各占四分之一，因为人眼对绿光最敏感。缺的颜色要由相邻像素算出来（去马赛克），所以很多相机前面还要加一片低通滤镜，压住摩尔纹。来源：美国专利 US 3,971,065、DPReview。',
 steps:[11,12],
 draw(c,w,h){const u=evoBg(c,w,h),s=u*.7;evoGrid(c,w/2-s/2,h/2-s/2,s,4,(i,j)=>i%2?(j%2?EVO_RGB.b:EVO_RGB.g):(j%2?EVO_RGB.g:EVO_RGB.r));}},

{id:'af-slr',year:1985,era:'film',lane:'lens',title:'机身自动对焦单反',
 solved:'对焦从手拧对焦环变成按一下快门就自动完成。',
 newProblem:'镜头要配马达和电子触点，老镜头卡口不再通用。',
 driver:'普通人拍不准焦，运动和新闻摄影要求更快。',
 industry:'各家纷纷改卡口跟进，自动对焦成了单反的标配。',
 story:'1985 年 2 月，美能达发布 Maxxum 7000（α-7000），第一次把相位检测自动对焦和电机都放进可换镜头单反的机身里。它的“比较两束光是否重合”的原理，后来被直接搬到了传感器上。来源：Wikipedia「Minolta Maxxum 7000」、Ken Rockwell。',
 steps:[3,4],
 draw(c,w,h){const u=evoBg(c,w,h);c.beginPath();c.ellipse(w*.3,h/2,u*.06,u*.3,0,0,7);c.stroke();
  c.strokeStyle=EVO_ACC;c.beginPath();c.moveTo(w*.08,h*.25);c.lineTo(w*.3,h*.25);c.lineTo(w*.75,h/2);c.moveTo(w*.08,h*.75);c.lineTo(w*.3,h*.75);c.lineTo(w*.75,h/2);c.stroke();
  c.fillStyle=EVO_ACC;c.beginPath();c.arc(w*.75,h/2,u*.04,0,7);c.fill();evoText(c,'AF',w*.85,h*.3);}},

/* ===== CCD 数码 ===== */
{id:'dsc',year:1991,era:'ccd',lane:'product',title:'CCD 数码相机',
 solved:'照片不用冲洗，拍完就能传进电脑。',
 newProblem:'早期机器又贵又重，分辨率远不如胶片。',
 driver:'报社要把现场照片尽快传回编辑部。',
 industry:'照相从化学工艺开始转向电子工业。',
 story:'1975 年柯达工程师 Steven Sasson 用一块 100×100 像素的 CCD 做出第一台数码相机原型。1991 年 5 月，柯达推出 DCS（后称 DCS 100），在尼康 F3 机身上加数码后背，是第一台商用数码单反。CCD 把电荷一格格挪到边上读出，画质好，但耗电也大。来源：Wikipedia「Kodak DCS 100」、PetaPixel。',
 steps:[15,23],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeRect(w/2-u*.38,h/2-u*.22,u*.76,u*.44);c.beginPath();c.arc(w/2,h/2,u*.15,0,7);c.stroke();
  c.fillStyle=EVO_ACC;c.fillRect(w/2-u*.06,h/2-u*.05,u*.12,u*.1);evoText(c,'CCD',w/2,h/2+u*.32);}},

{id:'jpeg',year:1992,era:'ccd',lane:'proc',title:'JPEG 压缩',
 solved:'一张照片压到原来的十分之一左右，存得下也传得动。',
 newProblem:'压缩会丢细节，压狠了出现方块和色带。',
 driver:'存储贵、网速慢，数码照片需要一个通用格式。',
 industry:'相机里开始有专门的处理芯片，“直出 JPEG”和“保留 RAW”分成两条路。',
 story:'JPEG 小组 1986 年成立，1992 年 9 月标准通过（ITU-T T.81，后来也成为 ISO/IEC 10918-1）。它把画面切成 8×8 的小块，把人眼不敏感的细节扔掉。三十多年后它仍是最常见的照片格式。来源：ITU-T T.81、W3C 存档的标准文本。',
 steps:[26,29],
 draw(c,w,h){const u=evoBg(c,w,h),s=u*.6;evoGrid(c,w/2-s/2,h*.1,s,8,(i,j)=>(i<4&&j<4)?EVO_ACC:((i+j)%2?'#d8ccb8':'#bfb3a0'));evoText(c,'8×8',w/2,h*.1+s+u*.12);}},

{id:'cf-card',year:1994,era:'ccd',lane:'store',title:'CF 存储卡',
 solved:'照片存在一张不怕震的小卡里，换卡就能接着拍。',
 newProblem:'容量小、价格高，卡还偏厚偏大。',
 driver:'数码相机需要一种代替胶卷的“可换存储”。',
 industry:'闪存卡成了相机的“新胶卷”，专业机长期用 CF。',
 story:'1994 年闪迪（SanDisk）推出 CompactFlash（CF）卡，用闪存，没有机械部件。它很快成了专业数码单反的主流存储，一直用到 2010 年代。来源：TechTarget、Tom\'s Hardware「Flash Storage」。',
 steps:[31],
 draw(c,w,h){evoCard(c,w,h,'CF',false,'1994');}},

/* ===== CMOS ===== */
{id:'cmos',year:2000,era:'cmos',lane:'sensor',title:'CMOS 取代 CCD',
 solved:'读出电路和像素做在同一块芯片上，更省电、更快、更便宜。',
 newProblem:'早期 CMOS 噪声大，每列电路不一致会出竖条纹。',
 driver:'数码相机要变便宜、要连拍，后来手机也要摄像头。',
 industry:'传感器跟着普通芯片工艺进步，CCD 逐步退出市场。',
 story:'2000 年佳能发布 EOS D30：这是佳能第一台完全自研的数码单反，用的是自家 CMOS 传感器，也是最早量产的数百万像素 CMOS 相机之一。2007 年索尼推出给每一列配一个模数转换器的 Exmor 传感器，读得又快又安静。2015 年初，索尼宣布逐步停产 CCD（2017 年停掉晶圆产线）。来源：Canon Camera Museum、Imaging Resource、PetaPixel（2015）。',
 steps:[21,23,24],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeRect(w*.08,h*.3,u*.4,u*.32);evoText(c,'CCD',w*.08+u*.2,h*.3+u*.16);
  evoArrow(c,w*.42,h/2,w*.58,h/2,EVO_ACC);c.strokeStyle=EVO_ACC;c.strokeRect(w*.92-u*.4,h*.3,u*.4,u*.32);evoText(c,'CMOS',w*.92-u*.2,h*.3+u*.16,EVO_ACC);}},

{id:'pixel-4t',year:1995,era:'cmos',lane:'sensor',title:'4T 像素与相关双采样',
 solved:'钉扎光电二极管加转移管，能先读“空白”再读“信号”，把复位噪声减掉。',
 newProblem:'每个像素要挤进四个晶体管，留给感光的面积变小。',
 driver:'CMOS 想在画质上追上 CCD。',
 industry:'4T 成为 CMOS 像素的基本结构，后来的共享像素、背照都以它为起点。',
 story:'1995 年，喷气推进实验室（JPL）和柯达的团队（Fossum、Lee、Guidash 等）第一次把 CCD 里用的钉扎光电二极管做进 CMOS 有源像素。多了一个转移管，就能做相关双采样（CDS）：同一像素读两次，相减去掉复位噪声。来源：Eric Fossum 论文列表、1995 IEEE CCD 与先进图像传感器研讨会、美国专利 5,904,493。',
 steps:[16,22],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeRect(w/2-u*.38,h/2-u*.38,u*.76,u*.76);c.fillStyle=EVO_ACC;c.fillRect(w/2-u*.33,h/2-u*.33,u*.38,u*.66);
  ['TX','RST','SF','SEL'].forEach((t,i)=>{c.strokeRect(w/2+u*.1,h/2-u*.33+i*u*.17,u*.24,u*.13);c.save();c.font=Math.round(Math.max(7,u/14))+'px sans-serif';evoText(c,t,w/2+u*.22,h/2-u*.265+i*u*.17);c.restore();});}},

{id:'sd-card',year:1999,era:'cmos',lane:'store',title:'SD 卡',
 solved:'卡更小更薄，便宜到人人用得起。',
 newProblem:'接口一代代提速，老卡、新机常常速度对不上。',
 driver:'卡片机、手机、MP3 都要一种小而便宜的卡。',
 industry:'SD 成了消费电子的通用存储，相机厂不再各搞一种卡。',
 story:'1999 年 8 月，闪迪、松下和东芝联合推出 SD 卡，2000 年 1 月成立 SD 协会管理标准。此后容量从 MB 级一路涨到 TB 级，接口也从几 MB/s 提到 UHS-II 的数百 MB/s。来源：Digital Camera World、Blocks & Files（SD 25 周年）。',
 steps:[31],
 draw(c,w,h){evoCard(c,w,h,'SD',true,'1999');}},

{id:'ibis',year:2003,era:'cmos',lane:'lens',title:'机身防抖',
 solved:'让传感器跟着手抖反向移动，换什么镜头都能防抖。',
 newProblem:'传感器要装在可移动的平台上，机身更复杂、更耗电，移动幅度大时边角画质会下降。',
 driver:'数码相机越做越小、像素越来越高，手抖更容易糊。',
 industry:'防抖从“买镜头送功能”变成机身标配，后来无反几乎都带。',
 story:'1995 年佳能推出 EF 75-300mm IS，是第一支带光学防抖的单反镜头（尼康 1994 年先在一台胶片小相机上用了防抖）。2003 年美能达 DiMAGE A1 改为移动 CCD 来抵消抖动，2004 年的 Maxxum 7D 把它带进了数码单反。来源：Canon Camera Museum、DPReview、Konica Minolta 新闻稿（2004）。',
 steps:[10],
 draw(c,w,h){const u=evoBg(c,w,h);c.fillStyle=EVO_ACC;c.fillRect(w/2-u*.18,h/2-u*.13,u*.36,u*.26);
  evoArrow(c,w/2-u*.22,h/2,w/2-u*.42,h/2);evoArrow(c,w/2+u*.22,h/2,w/2+u*.42,h/2);evoArrow(c,w/2,h/2-u*.17,w/2,h/2-u*.37);evoArrow(c,w/2,h/2+u*.17,w/2,h/2+u*.37);}},

{id:'coating',year:2004,era:'cmos',lane:'lens',title:'ED 玻璃、非球面与纳米镀膜',
 solved:'特殊玻璃压住色散，非球面片减少像差，纳米镀膜大幅减少反光。',
 newProblem:'镜头越做越复杂、越贵，单靠光学也很难把每种像差都消干净。',
 driver:'数码传感器像素越来越密，又会把光反射回镜头，鬼影比胶片时代更明显。',
 industry:'“光学 + 机内数字校正”成为常规做法，高端镜头的卖点从焦段变成画质。',
 story:'尼康 1972 年为札幌冬奥会做的 300mm f/2.8 首次用上超低色散（ED）玻璃。2004 年 9 月发布的 AF-S VR 300mm f/2.8G 是第一支用“纳米结晶涂层”的尼克尔镜头：最外层是含纳米晶粒的超低折射率层，反射大幅降低。来源：尼康「NIKKOR 千夜一夜」第 11 话、Nikon USA 新闻稿（2004）、尼康技术故事。',
 steps:[6,7,8],
 draw(c,w,h){const u=evoBg(c,w,h);c.beginPath();c.ellipse(w/2,h/2,u*.08,u*.34,0,0,7);c.stroke();
  c.beginPath();c.moveTo(w*.08,h*.35);c.lineTo(w*.92,h*.35);c.moveTo(w*.08,h*.65);c.lineTo(w*.92,h*.65);c.stroke();
  c.strokeStyle=EVO_ACC;c.setLineDash([u*.03,u*.03]);c.beginPath();c.moveTo(w/2-u*.08,h*.35);c.lineTo(w*.15,h*.12);c.stroke();c.setLineDash([]);
  evoText(c,'×',w*.15,h*.12,EVO_ACC);}},

/* ===== 背照与堆栈 ===== */
{id:'bsi',year:2009,era:'bsi',lane:'sensor',title:'背照式 BSI',
 solved:'把金属走线挪到感光层背后，光不再被挡，小像素也更亮、更干净。',
 newProblem:'硅片要磨到极薄，制造难；相邻像素之间更容易串光。',
 driver:'手机像素越做越小，前照式的走线把光挡掉了一大块。',
 industry:'背照式先在手机上普及，后来进入全画幅相机。',
 story:'2008 年 6 月索尼发布 Exmor R，是第一款量产的背照式 CMOS，信噪比比同尺寸前照式高约 8 dB，2009 年起用在索尼自家产品里。2010 年的 iPhone 4 也在宣传里强调了“背照式传感器”。来源：索尼新闻稿（2008）、Apple Newsroom（2010）、DPReview、Phys.org。',
 steps:[13,15,18],
 draw(c,w,h){evoLayers(c,w,h,[['微透镜',false],['光电二极管',true],['走线',false]]);}},

{id:'pdaf',year:2010,era:'bsi',lane:'sensor',title:'相位对焦上传感器',
 solved:'对焦像素直接做在传感器上，不用反光镜也能快速判断往哪边对焦。',
 newProblem:'对焦像素不完整成像，处理不好会留下条纹，暗光下也不够准。',
 driver:'卡片机、无反和视频需要“看着画面”快速对焦。',
 industry:'没有反光镜的相机终于对焦够快，为无反取代单反铺了路。',
 story:'2010 年富士 F300EXR 第一次在传感器上放了成对的相位检测像素。2013 年 7 月佳能 70D 推出全像素双核对焦（Dual Pixel），每个像素分成左右两半，整块传感器都能做相位对焦，拍视频时尤其顺滑。来源：Imaging Resource（2010）、佳能新闻稿（2013）。',
 steps:[3,4],
 draw(c,w,h){const u=evoBg(c,w,h);const hump=(x0,col)=>{c.strokeStyle=col;c.beginPath();for(let i=0;i<=20;i++){const x=w*.1+i*w*.04,y=h*.75-Math.exp(-((x-x0)**2)/(2*(w*.08)**2))*h*.5;i?c.lineTo(x,y):c.moveTo(x,y);}c.stroke();};
  hump(w*.4,EVO_INK);hump(w*.6,EVO_ACC);evoText(c,'左',w*.4,h*.88);evoText(c,'右',w*.6,h*.88,EVO_ACC);}},

{id:'phone-compact',year:2010,era:'bsi',lane:'product',title:'手机吃掉卡片机',
 solved:'相机一直在口袋里，拍完马上能分享。',
 newProblem:'手机镜头和传感器太小，弱光、变焦和虚化都吃亏。',
 driver:'社交网络让“随手拍、马上发”比画质更重要。',
 industry:'卡片机市场几乎消失，相机厂转向高端，传感器厂的大客户变成手机厂。',
 story:'据日本相机影像器材工业协会（CIPA）统计，数码相机出货量在 2010 年达到约 1.21 亿台的顶峰，同年 iPhone 4 发布；此后卡片机一路下滑，到 2023 年全行业出货量比顶峰少了九成多。手机厂把钱砸向传感器和算法，补上小镜头的短板。来源：CIPA 统计、Statista、Digital Trends。',
 steps:[32],
 draw(c,w,h){evoBars(c,w,h,[1,.9,.62,.35,.2,.08],['2010','','','','','2023'],0);}},

{id:'stacked',year:2012,era:'bsi',lane:'sensor',title:'堆栈式传感器',
 solved:'像素层和电路层分开做再叠起来，像素面积不被挤占，电路也能更强更快。',
 newProblem:'两层（后来三层）晶圆要精确对齐键合，成本高，发热也更集中。',
 driver:'手机要更小的模组，相机要更快的连拍和视频。',
 industry:'读出速度大增，带来高速连拍、无黑屏取景，也让单帧 HDR 和全局快门有了地方放电路。',
 story:'2012 年 8 月，索尼发布 Exmor RS，称是世界首款堆栈式 CMOS 图像传感器，同年 10 月开始送样，先用在手机上。后来索尼又在像素层和逻辑层之间加了一层 DRAM，做成三层堆栈，读出更快。来源：索尼新闻稿（2012）、Phys.org、Image Sensors World。',
 steps:[18,20,21,23,25],
 draw(c,w,h){evoLayers(c,w,h,[['像素层',true],['逻辑电路层',false]]);}},

{id:'h265-log',year:2013,era:'bsi',lane:'store',title:'Log 与 H.265 视频',
 solved:'Log 曲线保住亮部和暗部的层次，H.265 用约一半码率存下同样画质。',
 newProblem:'Log 素材直出发灰，必须调色；H.265 解码更吃电脑性能。',
 driver:'4K、HDR 和网络视频让数据量暴涨，普通创作者也想要电影感。',
 industry:'相机成了视频工具，调色和高效编码进入普通创作者的工作流。',
 story:'2013 年 4 月，H.265（HEVC）通过成为 ITU-T 标准，目标是在相同画质下比 H.264 再省约一半码率。2014 年索尼 α7S 把专业摄影机上的 S-Log2 曲线带进小型全画幅相机。后来不少相机和手机都用 H.265 录 4K 甚至 8K。来源：ITU、Imaging Resource、Wikipedia「High Efficiency Video Coding」。',
 steps:[29,30],
 draw(c,w,h){const u=evoBg(c,w,h);c.fillStyle=EVO_INK;c.fillRect(w*.15,h*.3,w*.7,h*.15);c.fillStyle=EVO_ACC;c.fillRect(w*.15,h*.6,w*.35,h*.15);
  c.textAlign='left';evoText(c,'H.264',w*.17,h*.22);evoText(c,'H.265',w*.17,h*.52,EVO_ACC);}},

{id:'kodak',year:2012,era:'bsi',lane:'product',title:'数码取代胶片与柯达',
 solved:'数码让每张照片几乎零成本，拍完就能看。',
 newProblem:'靠卖胶卷和冲印赚钱的整条产业链失去了收入来源。',
 driver:'数码相机和手机让胶卷需求断崖式下降。',
 industry:'胶片巨头没能转型，影像行业的主角换成了电子和手机公司。',
 story:'讽刺的是，第一台数码相机就诞生在柯达（1975 年）。2012 年 1 月 19 日，有 131 年历史的柯达申请破产保护，报告资产 51 亿美元、负债 68 亿美元；它在 1980 年代高峰时有约 14.5 万名员工，申请时只剩约 1.9 万。来源：ABC News、Engadget、Imaging Resource（2012）。',
 steps:[9,15],
 draw(c,w,h){const u=evoBg(c,w,h);c.fillStyle=EVO_INK;c.fillRect(w*.1,h*.3,w*.8,h*.4);c.fillStyle='#f7f3ea';
  for(let i=0;i<8;i++){c.fillRect(w*.13+i*w*.1,h*.33,w*.05,h*.05);c.fillRect(w*.13+i*w*.1,h*.62,w*.05,h*.05);}
  c.strokeStyle=EVO_ACC;c.lineWidth*=2;c.beginPath();c.moveTo(w*.2,h*.2);c.lineTo(w*.8,h*.8);c.stroke();}},

{id:'mirrorless',year:2018,era:'bsi',lane:'product',title:'无反取代单反',
 solved:'去掉反光镜，机身更小，取景器里看到的就是最终曝光效果。',
 newProblem:'电子取景器耗电、早期有延迟，老单反镜头要转接。',
 driver:'传感器上的相位对焦和电子取景器终于够快够好。',
 industry:'佳能、尼康相继转向无反新卡口，单反逐步退出主流。',
 story:'2008 年 9 月，松下 G1 成为第一台无反可换镜头相机。2018 年，尼康发布 Z 卡口全画幅无反，几周后佳能发布 EOS R，两大单反厂正式转向。短法兰距让镜头后组更贴近传感器，边缘的光更斜，于是更依赖微透镜偏移等设计。来源：Panasonic 官网、Engadget、Amateur Photographer。',
 steps:[13,27],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeRect(w*.1,h*.3,u*.38,u*.38);c.beginPath();c.moveTo(w*.1+u*.05,h*.3+u*.33);c.lineTo(w*.1+u*.33,h*.3+u*.05);c.stroke();
  evoArrow(c,w*.5,h/2,w*.62,h/2,EVO_ACC);c.strokeStyle=EVO_ACC;c.strokeRect(w*.9-u*.25,h*.35,u*.25,u*.3);}},

/* ===== 手机计算摄影 ===== */
{id:'multi-cam',year:2016,era:'phone',lane:'lens',title:'手机多摄与潜望长焦',
 solved:'用几颗不同焦距的镜头切换，手机也有了光学变焦和人像虚化。',
 newProblem:'每颗镜头的颜色和画质不一致，切换时会跳；模组越来越厚。',
 driver:'手机太薄放不下变焦镜组，用户又想拍远处和背景虚化。',
 industry:'手机背面变成“镜头矩阵”，光学模组厂和算法团队一起变重要。',
 story:'2016 年 9 月 iPhone 7 Plus 用一颗广角加一颗 2 倍长焦，随后推出靠双摄测距的人像模式。2019 年 3 月华为 P30 Pro 把镜头横着放、用棱镜把光拐 90 度，做出 5 倍潜望式长焦。来源：Apple Newsroom（2016）、Laser Focus World（2019）、GSMArena。',
 steps:[2,5,32],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeRect(w/2-u*.25,h/2-u*.42,u*.5,u*.84);
  [['0.5×',-.22],['1×',0],['5×',.22]].forEach(([t,dy],i)=>{c.strokeStyle=i===2?EVO_ACC:EVO_INK;c.beginPath();c.arc(w/2-u*.06,h/2+dy*u*1.4,u*.09,0,7);c.stroke();
   c.save();c.textAlign='left';c.font=Math.round(Math.max(7,u/14))+'px sans-serif';evoText(c,t,w/2+u*.06,h/2+dy*u*1.4,i===2?EVO_ACC:EVO_INK);c.restore();});}},

{id:'quad-bayer',year:2018,era:'phone',lane:'sensor',title:'四合一像素',
 solved:'四个同色小像素白天分开读出高像素，夜里合成一个大像素降噪。',
 newProblem:'高像素模式要重新排列颜色，细节和伪色不如真正的同尺寸拜耳。',
 driver:'手机厂想要“4800 万像素”的宣传数字，又不想牺牲夜景。',
 industry:'“高像素 + 合并”成了手机主摄常见做法，后来出现九合一、十六合一。',
 story:'2018 年 7 月，索尼发布 IMX586：4800 万个 0.8 微米像素，滤色片按 2×2 同色排成“Quad Bayer”。暗光下把四个像素合并，灵敏度相当于 1.6 微米像素的 1200 万像素传感器。来源：索尼新闻稿（2018）、PetaPixel、Engadget。',
 steps:[14,22],
 draw(c,w,h){const u=evoBg(c,w,h),s=u*.7;evoGrid(c,w/2-s/2,h/2-s/2,s,4,(i,j)=>{const a=i>>1,b=j>>1;return a?(b?EVO_RGB.b:EVO_RGB.g):(b?EVO_RGB.g:EVO_RGB.r);});}},

{id:'hdr-night',year:2018,era:'phone',lane:'proc',title:'多帧 HDR 与夜景模式',
 solved:'连拍很多张短曝光再对齐叠加，小传感器也能拍出干净的夜景和大光比。',
 newProblem:'画面里有东西在动就会出鬼影，等待时间也变长，“算出来”的画面有时不够真实。',
 driver:'手机传感器小、镜头小，单张照片在暗处噪声太大。',
 industry:'手机拍照的竞争从硬件转向算法，图像处理芯片和 AI 加速器成了卖点。',
 story:'谷歌 2013 年起在 Nexus 手机上用 HDR+ 连拍合成提升宽容度，2018 年 11 月在 Pixel 上推出 Night Sight（夜视）：按下快门后连拍多张偏暗但不糊的照片，对齐合并后再用学习算法校正白平衡。各家手机随后都有了夜景模式。来源：Google AI Blog（2014、2018）、Engadget、The Next Web。',
 steps:[26,28,32],
 draw(c,w,h){const u=evoBg(c,w,h);for(let i=0;i<3;i++){c.fillStyle=i===2?'#fff':'#e6dccb';c.fillRect(w*.08+i*u*.06,h*.2+i*u*.06,u*.35,u*.35);c.strokeRect(w*.08+i*u*.06,h*.2+i*u*.06,u*.35,u*.35);}
  evoArrow(c,w*.52,h/2,w*.64,h/2,EVO_ACC);c.fillStyle=EVO_ACC;c.fillRect(w*.92-u*.3,h/2-u*.15,u*.3,u*.3);}},

/* ===== 全局快门与 AI ===== */
{id:'cfexpress',year:2020,era:'ai',lane:'store',title:'CFexpress 存储卡',
 solved:'用电脑固态硬盘同款的 PCIe/NVMe 接口，写入速度达到每秒上千兆字节。',
 newProblem:'卡和读卡器都贵，发热明显，Type A/B 两种尺寸互不通用。',
 driver:'8K、RAW 视频和每秒几十张的连拍，SD 卡写不过来。',
 industry:'相机存储向电脑硬盘看齐，高端机普遍改用 CFexpress。',
 story:'CF 卡协会 2016 年 9 月宣布 CFexpress，2017 年 4 月发布 1.0 规范。2020 年 1 月佳能 1D X Mark III 用上 CFexpress B 卡，同年的 EOS R5 能内录 8K RAW，都离不开这种速度。来源：CompactFlash 协会、Canon Asia、PetaPixel。',
 steps:[30,31],
 draw(c,w,h){evoCard(c,w,h,'CFe',false,'PCIe');}},

{id:'ai-af',year:2022,era:'ai',lane:'proc',title:'AI 识别对焦',
 solved:'相机能认出人眼、动物、鸟、车，自动盯住主体追焦。',
 newProblem:'认错主体或在复杂背景里跳焦，用户不知道它“为什么”这样选。',
 driver:'体育、野生动物和独立视频创作者需要相机自己判断该对哪里。',
 industry:'相机里开始配专门的 AI 处理单元，对焦能力成了软件和算力的比拼。',
 story:'2022 年 10 月，索尼 α7R V 加入专门的 AI 处理单元，用深度学习识别人的脸、眼和身体姿态，也能识别动物、鸟、昆虫和车辆。佳能、尼康等同期也在用深度学习训练主体识别。来源：Sony 新闻稿（2022）、Imaging Resource、CineD。',
 steps:[3,4,32],
 draw(c,w,h){const u=evoBg(c,w,h);c.beginPath();c.arc(w/2,h/2,u*.22,0,7);c.stroke();c.beginPath();c.arc(w/2-u*.08,h/2-u*.04,u*.03,0,7);c.arc(w/2+u*.08,h/2-u*.04,u*.03,0,7);c.fill();
  c.strokeStyle=EVO_ACC;c.lineWidth*=2;c.strokeRect(w/2-u*.16,h/2-u*.11,u*.32,u*.14);}},

{id:'lofic',year:2023,era:'ai',lane:'sensor',title:'LOFIC 单帧 HDR（车载推动）',
 solved:'像素装满后多出的电子流进旁边的电容存起来，一次曝光就能同时记下极暗和极亮。',
 newProblem:'每个像素要多放一个电容，像素更难做小，两路信号拼接处要仔细校准。',
 driver:'自动驾驶摄像头要看清隧道口、车灯和闪烁的 LED 交通灯，多帧合成来不及也会出错。',
 industry:'车载需求把单帧 HDR 做成量产技术，再回流到手机和相机。',
 story:'LOFIC（横向溢出积分电容）由日本东北大学须川成利团队在 2005 年 ISSCC 上提出，当时做到约 100 dB 动态范围。2023 年 9 月，豪威（OmniVision）发布结合 LOFIC 和双转换增益的 TheiaCel 技术与 800 万像素车载传感器 OX08D10，主打抑制 LED 闪烁。来源：ISSCC 2005 论文、OmniVision 新闻稿（2023）、New Electronics。',
 steps:[17,19,20,28],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeRect(w*.18,h*.25,u*.3,u*.5);c.fillStyle=EVO_RGB.b;c.fillRect(w*.18,h*.25,u*.3,u*.5);
  c.strokeStyle=EVO_ACC;c.strokeRect(w*.88-u*.3,h*.25+u*.25,u*.3,u*.25);c.fillStyle=EVO_ACC;c.fillRect(w*.88-u*.3,h*.25+u*.38,u*.3,u*.12);
  evoArrow(c,w*.18+u*.32,h*.27,w*.88-u*.32,h*.25+u*.3,EVO_ACC);}},

{id:'global-ff',year:2023,era:'ai',lane:'sensor',title:'全局快门全画幅',
 solved:'所有像素同一瞬间曝光，高速运动不再歪斜，闪光灯在任何快门速度都能同步。',
 newProblem:'每个像素要多放存储节点，最低 ISO 偏高、动态范围不如同代卷帘快门。',
 driver:'体育和新闻摄影要拍极快的动作，还想彻底摆脱机械快门。',
 industry:'“取消机械快门”从口号变成现实，堆栈式的电路层是它能做出来的关键。',
 story:'2023 年 11 月 7 日，索尼发布 α9 III，称是第一台全画幅全局快门相机：2460 万像素，每秒最高 120 张，闪光同步可以到 1/80000 秒。代价是基础感光度从 ISO 250 起。来源：PetaPixel（2023）、Rangefinder、Sony 新闻稿。',
 steps:[25,27],
 draw(c,w,h){const u=evoBg(c,w,h);c.strokeStyle=EVO_INK;for(let i=0;i<4;i++){c.beginPath();c.moveTo(w*.1+i*u*.08,h*.75);c.lineTo(w*.2+i*u*.08,h*.25);c.stroke();}
  c.strokeStyle=EVO_ACC;for(let i=0;i<4;i++){c.beginPath();c.moveTo(w*.62+i*u*.08,h*.75);c.lineTo(w*.62+i*u*.08,h*.25);c.stroke();}
  evoText(c,'卷帘',w*.25,h*.88);evoText(c,'全局',w*.73,h*.88,EVO_ACC);}},
];

/* 某一步挂哪些演进卡：steps 含 n 的节点，按年份排 */
function evoForStep(n){return EVO.filter(e=>e.steps.includes(n)).sort((a,b)=>a.year-b.year);}
