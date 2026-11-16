/* ISP 九步处理 */
/* ---------- ISP 九步，用同一幅景物真实计算 ---------- */
{const Wi=96,Hi=64,N=Wi*Hi,cv=mkCanvas(Wi,Hi),g=cv.getContext('2d');drawScene(g,Wi,Hi);const d=g.getImageData(0,0,Wi,Hi).data,ch=(x,y)=>y%2?(x%2?2:1):(x%2?1:0);
 const MX=[[.78,.17,.05],[.12,.76,.12],[.04,.2,.76]],ILL=[.55,1,.7],BLK=64,FS=750,fall=(x,y)=>{const u=(x-Wi/2)/(Wi/2),v=(y-Hi/2)/(Wi/2);return 1-.38*(u*u+v*v);};
 const inv3=m=>{const[a,b,c]=m[0],[d2,e,f]=m[1],[g2,h,i]=m[2],A=e*i-f*h,B=-(d2*i-f*g2),C=d2*h-e*g2,D=a*A+b*B+c*C;return [[A/D,-(b*i-c*h)/D,(b*f-c*e)/D],[B/D,(a*i-c*g2)/D,-(a*f-c*d2)/D],[C/D,-(a*h-b*g2)/D,(a*e-b*d2)/D]];};
 const raw=new Float32Array(N);
 for(let y=0;y<Hi;y++)for(let x=0;x<Wi;x++){const o=(y*Wi+x)*4,k=ch(x,y),lin=[0,1,2].map(c=>Math.pow(d[o+c]/255,2.2)),e=(MX[k][0]*lin[0]+MX[k][1]*lin[1]+MX[k][2]*lin[2])*ILL[k]*fall(x,y)*3000;
   raw[y*Wi+x]=Math.max(0,Math.min(1023,Math.round(BLK+.25*(e+Math.sqrt(e)*gauss())+2*gauss())));}
 const mos=f=>{const a=new Float32Array(N);for(let n=0;n<N;n++)a[n]=f(n);return a;}, s1=mos(n=>Math.max(0,raw[n]-BLK)/FS), s2=mos(n=>s1[n]/fall(n%Wi,n/Wi|0));
 const rgb=f=>{const a=new Float32Array(N*3);for(let y=0;y<Hi;y++)for(let x=0;x<Wi;x++)f(x,y,a,(y*Wi+x)*3);return a;}, at=(a,x,y,c)=>a[(Math.min(Hi-1,Math.max(0,y))*Wi+Math.min(Wi-1,Math.max(0,x)))*3+c];
 const s3=rgb((x,y,a,o)=>{const s=[0,0,0],n=[0,0,0];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const X=x+dx,Y=y+dy;if(X<0||Y<0||X>=Wi||Y>=Hi)continue;const k=ch(X,Y);s[k]+=s2[Y*Wi+X];n[k]++;}for(let c=0;c<3;c++)a[o+c]=s[c]/n[c];});
 const s4=rgb((x,y,a,o)=>{for(let c=0;c<3;c++)a[o+c]=s3[o+c]/ILL[c];}), IM=inv3(MX);
 const s5=rgb((x,y,a,o)=>{for(let c=0;c<3;c++)a[o+c]=Math.max(0,IM[c][0]*s4[o]+IM[c][1]*s4[o+1]+IM[c][2]*s4[o+2]);});
 const s6=rgb((x,y,a,o)=>{for(let c=0;c<3;c++){const v=Math.pow(Math.min(1,s5[o+c]),1/2.2);a[o+c]=.7*v+.3*v*v*(3-2*v);}});
 const s7=rgb((x,y,a,o)=>{for(let c=0;c<3;c++){let s=0,w=0;const v0=s6[o+c];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const v=at(s6,x+dx,y+dy,c),q=Math.exp(-((v-v0)**2)/.008);s+=v*q;w+=q;}a[o+c]=s/w;}});
 const s8=rgb((x,y,a,o)=>{for(let c=0;c<3;c++){let b=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)b+=at(s7,x+dx,y+dy,c);a[o+c]=s7[o+c]+.8*(s7[o+c]-b/9);}});
 const show=(id,f)=>{const c=cx2(id),im=c.createImageData(Wi,Hi);for(let n=0;n<N;n++){const v=f(n);for(let k=0;k<3;k++)im.data[n*4+k]=255*Math.max(0,Math.min(1,v[k]));im.data[n*4+3]=255;}c.putImageData(im,0,0);};
 const tint=(a,n)=>{const k=ch(n%Wi,n/Wi|0),v=[0,0,0];v[k]=a[n]*1.3;return v;}, three=a=>n=>[a[n*3],a[n*3+1],a[n*3+2]];
 show('i0',n=>{const v=raw[n]/1023*1.25;return [v,v,v];});show('i1',n=>tint(s1,n));show('i2',n=>tint(s2,n));
 show('i3',three(s3));show('i4',three(s4));show('i5',three(s5));show('i6',three(s6));show('i7',three(s7));show('i8',three(s8));}


/* ---------- 色域模拟器：CIE 1931 xy 色度图 + 可切换的色域三角形 ---------- */
const SPECTRAL=[[380,.1741,.005],[440,.1548,.0279],[460,.1440,.0297],[480,.0913,.1327],[490,.0454,.2950],[500,.0082,.5384],[510,.0139,.7502],[520,.0743,.8338],[530,.1547,.8059],[540,.2296,.7543],[550,.3016,.6923],[560,.3731,.6245],[570,.4441,.5547],[580,.5125,.4866],[590,.5752,.4242],[600,.6270,.3725],[610,.6658,.3340],[620,.6915,.3083],[640,.7190,.2810],[700,.7347,.2653]];
const GAMUTS={sRGB:{R:[.64,.33],G:[.30,.60],B:[.15,.06],W:[.3127,.329],c:'#5a95ff',n:'sRGB'},dispP3:{R:[.680,.320],G:[.265,.690],B:[.150,.060],W:[.3127,.329],c:'#48c26a',n:'Display P3'},adobe:{R:[.64,.33],G:[.21,.71],B:[.15,.06],W:[.3127,.329],c:'#ef5a5f',n:'Adobe RGB'},rec2020:{R:[.708,.292],G:[.170,.797],B:[.131,.046],W:[.3127,.329],c:'#9a6200',n:'Rec. 2020'},prophoto:{R:[.7347,.2653],G:[.1596,.8404],B:[.0366,.0001],W:[.3457,.3585],c:'#b48cff',n:'ProPhoto'}};
const gamutShow={sRGB:true,dispP3:true,adobe:false,rec2020:true,prophoto:false};
function drawGamut(){const c=cx2('gamut'),W=320,H=300,xMax=.78,yMax=.87;
  const px=x=>24+x/xMax*(W-36), py=y=>H-24-y/yMax*(H-44);
  c.fillStyle=PAL.paper;c.fillRect(0,0,W,H);
  c.strokeStyle=PAL.grid;c.lineWidth=1;c.font=FONT;c.fillStyle=PAL.dim;
  for(let i=0;i<=7;i++){const sx=px(i/10);c.beginPath();c.moveTo(sx,H-24);c.lineTo(sx,H-20);c.stroke();c.fillText((i/10).toFixed(1),sx-7,H-10);}
  for(let j=0;j<=8;j++){const sy=py(j/10);c.beginPath();c.moveTo(20,sy);c.lineTo(24,sy);c.stroke();c.fillText((j/10).toFixed(1),2,sy+3);}
  c.strokeStyle=PAL.ink;c.lineWidth=1.3;c.beginPath();
  SPECTRAL.forEach(([w,x,y],i)=>{if(i===0)c.moveTo(px(x),py(y));else c.lineTo(px(x),py(y));});
  c.lineTo(px(SPECTRAL[0][1]),py(SPECTRAL[0][2]));c.stroke();
  c.fillStyle=PAL.dim;[[480,'480'],[500,'500'],[520,'520'],[550,'550'],[580,'580'],[620,'620']].forEach(([w,lbl])=>{const p=SPECTRAL.find(([ww])=>ww===w);if(p)c.fillText(lbl,px(p[1])+5,py(p[2])+3);});
  Object.entries(GAMUTS).forEach(([k,g])=>{if(!gamutShow[k])return;
    c.strokeStyle=g.c;c.lineWidth=1.8;c.fillStyle=g.c+'22';c.beginPath();
    c.moveTo(px(g.R[0]),py(g.R[1]));c.lineTo(px(g.G[0]),py(g.G[1]));c.lineTo(px(g.B[0]),py(g.B[1]));c.closePath();c.fill();c.stroke();
    c.fillStyle=g.c;c.beginPath();c.arc(px(g.W[0]),py(g.W[1]),2.5,0,7);c.fill();});
  c.font=FONT;c.fillStyle=PAL.ink;c.fillText('CIE 1931 xy',8,14);c.fillStyle=PAL.dim;c.fillText('x',W-14,H-10);c.fillText('y',8,20);}
document.querySelectorAll('[data-gamut]').forEach(b=>{b.setAttribute('aria-pressed',String(gamutShow[b.dataset.gamut]));b.onclick=()=>{const k=b.dataset.gamut;gamutShow[k]=!gamutShow[k];b.setAttribute('aria-pressed',String(gamutShow[k]));drawGamut();};});
drawGamut();

/* ---------- HDR 模拟器：PQ / HLG / sRGB / BT.1886 传递曲线 ---------- */
let hlgLw=1000;                                                                  // HLG 显示峰值，滑块控制；HLG EOTF 由此和系统伽马算
const HDR_CURVES={
  srgb:{n:'sRGB (SDR 100 nits)',c:'#5a95ff',fn:x=>{const v=x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4);return v*100;}},
  bt1886:{n:'BT.1886 (SDR γ=2.4)',c:'#48c26a',fn:x=>Math.pow(x,2.4)*100},
  pq:{n:'PQ · HDR10 (ST 2084)',c:'#ef5a5f',fn:x=>{const m1=2610/16384,m2=2523/32,c1=107/128,c2=2413/128,c3=2392/128;const Em=Math.pow(Math.max(x,1e-10),1/m2);const num=Math.max(Em-c1,0);const den=c2-c3*Em;return 10000*Math.pow(num/den,1/m1);}},
  hlg:{n:'HLG',c:'#9a6200',fn:x=>{const a=.17883277,b=1-4*a,cc=.5-a*Math.log(4*a);const lin=x<=.5?x*x/3:(Math.exp((x-cc)/a)+b)/12;const gam=1.2+.42*Math.log10(hlgLw/1000);return hlgLw*Math.pow(Math.max(lin,0),gam);}},
  linear:{n:'Linear (100 nits)',c:'#b48cff',fn:x=>x*100}};
const hdrShow={srgb:true,bt1886:false,pq:true,hlg:true,linear:false};
function drawHdr(){const c=cx2('hdr'),W=320,H=260;
  const yMin=Math.log10(.01),yMax=Math.log10(10000);          // 0.01 nit 到 10000 nits
  const px=x=>36+x*(W-50), py=y=>H-22-(Math.log10(Math.max(y,.01))-yMin)/(yMax-yMin)*(H-42);
  c.fillStyle=PAL.paper;c.fillRect(0,0,W,H);
  c.fillStyle='#faf5ea';c.fillRect(36,py(100),W-50,py(.01)-py(100));                             // SDR range 淡阴影（0-100 nits）
  c.strokeStyle=PAL.grid;c.lineWidth=1;c.font=FONT;c.fillStyle=PAL.dim;
  for(let i=0;i<=5;i++){const sx=px(i/5);c.beginPath();c.moveTo(sx,20);c.lineTo(sx,H-22);c.stroke();c.fillText((i/5).toFixed(1),sx-7,H-8);}
  [.01,.1,1,10,100,1000,10000].forEach(y=>{const sy=py(y);c.beginPath();c.moveTo(36,sy);c.lineTo(W,sy);c.stroke();c.fillText(y>=1?y+'':y.toString(),2,sy+3);});
  c.strokeStyle=PAL.dim;c.setLineDash([3,3]);c.beginPath();c.moveTo(36,py(100));c.lineTo(W,py(100));c.stroke();c.setLineDash([]);  // 100 nits SDR 封顶线
  Object.entries(HDR_CURVES).forEach(([k,cu])=>{if(!hdrShow[k])return;
    c.strokeStyle=cu.c;c.lineWidth=2;c.beginPath();
    for(let i=0;i<=W-50;i++){const x=i/(W-50),y=cu.fn(x);c.lineTo(px(x),py(y));}c.stroke();});
  c.fillStyle=PAL.paper;c.fillRect(0,0,W,20);c.fillRect(0,H-18,W,18);
  c.font=FONT;c.fillStyle=PAL.ink;c.fillText('传递曲线',8,14);c.fillStyle=PAL.dim;c.fillText('x = 数字编码 (0-1)　y = 亮度 (nits, log)　阴影 = SDR 范围',8,H-4);}
document.querySelectorAll('[data-hdr]').forEach(b=>{b.setAttribute('aria-pressed',String(hdrShow[b.dataset.hdr]));b.onclick=()=>{const k=b.dataset.hdr;hdrShow[k]=!hdrShow[k];b.setAttribute('aria-pressed',String(hdrShow[k]));drawHdr();};});
if($('hdrLw')){$('hdrLw').oninput=()=>{hlgLw=+$('hdrLw').value;const g=1.2+.42*Math.log10(hlgLw/1000);$('hdrLwo').textContent=`${hlgLw} nits, γ=${g.toFixed(2)}`;drawHdr();};}
drawHdr();

/* ---------- 图像编码模拟器：JPEG 质量 → 画质 / 文件大小 ---------- */
function drawCodec(){const q=+$('cq').value/100, src=$('codecSrc'), dst=$('codecDst'), w=src.width, h=src.height;
  const sctx=src.getContext('2d');drawScene(sctx,w,h);                                          // 原图：重画 drawScene 的风景
  const dataUrl=src.toDataURL('image/jpeg',q), bytes=Math.round(dataUrl.length*3/4-22);          // base64 → byte 近似，-22 是 "data:image/jpeg;base64," 头
  $('cqo').value=Math.round(q*100)+'%';$('csizeo').value=(bytes<1024?bytes+' B':(bytes/1024).toFixed(1)+' KB');
  const img=new Image();img.onload=()=>{const dctx=dst.getContext('2d');dctx.clearRect(0,0,w,h);dctx.drawImage(img,0,0);};img.src=dataUrl;}
if($('cq')){$('cq').oninput=drawCodec;drawCodec();}
