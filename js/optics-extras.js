/* 通用工具、衍射、像差、传感器前的玻璃、相位对焦、防抖 */
/* ---------- 扩展：通用工具 ---------- */
const PANIM={}, cx2=id=>$(id).getContext('2d');
const gauss=()=>{let u=0;for(let i=0;i<6;i++)u+=Math.random();return (u-3)*Math.SQRT2;};   // ponytail: 6 个均匀数近似正态
const FONT='11px ui-monospace,Menlo,monospace';

/* ---------- 衍射：艾里斑 vs 像素 ---------- */
function J1(x){const ax=Math.abs(x);if(ax<8){const y=x*x;return x*(72362614232.0+y*(-7895059235.0+y*(242396853.1+y*(-2972611.439+y*(15704.48260+y*(-30.16036606))))))/(144725228442.0+y*(2300535178.0+y*(18583304.74+y*(99447.43394+y*(376.9991397+y)))));}
  const z=8/ax,y=z*z,xx=ax-2.356194491,b1=1+y*(.183105e-2+y*(-.3516396496e-4+y*(.2457520174e-5+y*-.240337019e-6))),b2=.04687499995+y*(-.2002690873e-3+y*(.8449199096e-5+y*(-.88228987e-6+y*.105787412e-6)));
  const a=Math.sqrt(.636619772/ax)*(Math.cos(xx)*b1-z*Math.sin(xx)*b2);return x<0?-a:a;}
function drawAiry(){const c=cx2('airy'),Wc=320,Hc=170,N=st.N,lam=.55,pit=3.76,s=Wc/64,id=c.createImageData(Wc,Hc);
  for(let y=0;y<Hc;y++)for(let x=0;x<Wc;x++){const r=Math.hypot(x-Wc/2,y-Hc/2)/s,u=Math.PI*r/(lam*N)+1e-6,v=Math.sqrt((2*J1(u)/u)**2),o=(y*Wc+x)*4;id.data[o]=255*v;id.data[o+1]=196*v;id.data[o+2]=92*v;id.data[o+3]=255;}
  c.putImageData(id,0,0);c.strokeStyle='rgba(147,160,184,.45)';c.lineWidth=1;const g=pit*s;
  for(let x=(Wc/2-g/2)%g;x<Wc;x+=g){c.beginPath();c.moveTo(x,0);c.lineTo(x,Hc);c.stroke();}for(let y=(Hc/2-g/2)%g;y<Hc;y+=g){c.beginPath();c.moveTo(0,y);c.lineTo(Wc,y);c.stroke();}
  const d=2.44*lam*N;c.strokeStyle='#4fd8e8';c.beginPath();c.arc(Wc/2,Hc/2,d/2*s,0,7);c.stroke();
  c.fillStyle='rgba(13,20,32,.8)';c.fillRect(0,0,Wc,20);c.fillRect(0,Hc-18,Wc,18);c.font=FONT;c.fillStyle='#e6ebf4';c.fillText(`f/${N}　艾里斑直径 ${d.toFixed(1)} µm ≈ ${(d/pit).toFixed(1)} 个像素`,8,14);
  c.fillStyle='#93a0b8';c.fillText('网格 = 3.76 µm 像素　视野宽 64 µm　绿光 550 nm',8,Hc-5);}

/* ---------- 像差：畸变、横向色差、暗角（夸张显示） ---------- */
function applyAb(){const id=vg.getImageData(0,0,W,HH),s=id.data,o=vg.createImageData(W,HH),d=o.data,k=-.14+.24*(st.f-50)/100,ca=.014,R=Math.hypot(W/2,HH/2),vig=Math.min(.75,.7*(2/st.N)**2);
  for(let y=0;y<HH;y++)for(let x=0;x<W;x++){const u=(x-W/2)/R,v=(y-HH/2)/R,r2=u*u+v*v,sd=1-k*r2,fall=1-vig*r2,i=(y*W+x)*4;
    for(let c=0;c<3;c++){const m=sd*(c===0?1+ca:c===2?1-ca:1),sx=Math.round(W/2+u*m*R),sy=Math.round(HH/2+v*m*R);d[i+c]=sx<0||sy<0||sx>=W||sy>=HH?0:s[(sy*W+sx)*4+c]*fall;}d[i+3]=255;}
  vg.putImageData(o,0,0);}
$('abon').onchange=()=>{st.ab=!!STEPS[step].ab&&$('abon').checked;};

/* ---------- 传感器前的几片玻璃 + 摩尔纹对比 ---------- */
const glassL=new THREE.Group();glassL.visible=false;macro.add(glassL);
[[-.13,0x7fd8ff,.45,'红外截止滤光片'],[-.105,0xffffff,.3,'光学低通滤镜（两片）'],[-.088,0xffffff,.3,null],[-.045,0xdfe8f5,.25,'保护玻璃']].forEach(([x,c,o,n],i)=>{
  add(macro,new THREE.BoxGeometry(.012,1.1,1.6),std(c,{transparent:true,opacity:o,depthWrite:false}),x,0,0);if(n)label(glassL,n,V(x,.62+i*.14,-.9));});
label(glassL,'快门',V(-.16,1.35,.9));label(glassL,'像素阵列',V(0,-.6,.9));
{const Wm=120,Hm=80,z=(x,y)=>.5+.5*Math.cos(Math.PI*((x-Wm/2)**2+(y-Hm/2)**2)/55),ch=(x,y)=>y%2?(x%2?2:1):(x%2?1:0);
 const samp=(x,y,lp)=>{let a=0,n=0;for(let i=0;i<4;i++)for(let j=0;j<4;j++){const px=x+(i+.5)/4,py=y+(j+.5)/4;
   if(lp){a+=z(px-.5,py-.5)+z(px+.5,py-.5)+z(px-.5,py+.5)+z(px+.5,py+.5);n+=4;}else{a+=z(px,py);n++;}}return a/n;};
 [0,1].forEach(m=>{const raw=new Float32Array(Wm*Hm);for(let y=0;y<Hm;y++)for(let x=0;x<Wm;x++)raw[y*Wm+x]=samp(x,y,m);
   const c=cx2(m?'mo2':'mo1'),id=c.createImageData(Wm,Hm);
   for(let y=0;y<Hm;y++)for(let x=0;x<Wm;x++){const s=[0,0,0],n=[0,0,0];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const X=x+dx,Y=y+dy;if(X<0||Y<0||X>=Wm||Y>=Hm)continue;const k=ch(X,Y);s[k]+=raw[Y*Wm+X];n[k]++;}
     const o=(y*Wm+x)*4;for(let k=0;k<3;k++)id.data[o+k]=255*s[k]/n[k];id.data[o+3]=255;}
   c.putImageData(id,0,0);});}

/* ---------- 相位对焦：一个微透镜下两个 PD ---------- */
const pdaf=new THREE.Group();pdaf.visible=false;scene.add(pdaf);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,8,6);pdaf.add(l);
 [[0,0xffa94d,'镜头出瞳 · 左半边'],[1,0xb48cff,'镜头出瞳 · 右半边']].forEach(([k,c,n])=>{const m=new THREE.Mesh(new THREE.CircleGeometry(1.8,40,k?-Math.PI/2:Math.PI/2,Math.PI),basic(c,{transparent:true,opacity:.45,side:THREE.DoubleSide}));
   m.rotation.x=-Math.PI/2;m.position.y=6.5;pdaf.add(m);label(pdaf,n,V(k?1.2:-1.2,7,0));});
 const ml=add(pdaf,new THREE.SphereGeometry(1.3,32,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.28,shininess:100,depthWrite:false}),0,2.15,0);ml.scale.y=.45;
 add(pdaf,new THREE.BoxGeometry(2.7,.12,1.8),std(BAY[1],{transparent:true,opacity:.55,depthWrite:false}),0,2.06,0);
 [-.66,.66].forEach(x=>add(pdaf,new THREE.BoxGeometry(1.2,.7,1.5),std(0x3b82f6),x,1.45,0));add(pdaf,new THREE.BoxGeometry(2.8,.5,1.9),std(0x353a48),0,.85,0);
 label(pdaf,'一个微透镜',V(-2.1,2.5,0));label(pdaf,'左 PD',V(-.66,1.45,.95));label(pdaf,'右 PD',V(.66,1.45,.95));}
const PDR=[-1.5,-1,-.5,.5,1,1.5].map(x=>({pts:[V(x,6.5,0),V(x*.25,2.5,0),V(x<0?.66:-.66,1.82,0)],c:x<0?0xffa94d:0xb48cff}));
{const p=[],cl=[];PDR.forEach(r=>{const c=new THREE.Color(r.c);[[0,1],[1,2]].forEach(([a,b])=>{p.push(...r.pts[a].toArray(),...r.pts[b].toArray());cl.push(...c.toArray(),...c.toArray());});});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('color',new THREE.Float32BufferAttribute(cl,3));pdaf.add(new THREE.LineSegments(g,new THREE.LineBasicMaterial({vertexColors:true,transparent:true,opacity:.55})));}
const pdph=new THREE.InstancedMesh(new THREE.SphereGeometry(.06,8,6),basic(0xffffff),PDR.length*3);pdaf.add(pdph);PDR.forEach((r,i)=>{for(let k=0;k<3;k++)pdph.setColorAt(i*3+k,new THREE.Color(r.c));});
function animPdaf(t){PDR.forEach((r,i)=>{for(let k=0;k<3;k++){const q=((t*.35+k/3+i*.13)%1)*2,s=Math.min(1,q|0);M.position.lerpVectors(r.pts[s],r.pts[s+1],q-s);M.scale.setScalar(1);M.updateMatrix();pdph.setMatrixAt(i*3+k,M.matrix);}});pdph.instanceMatrix.needsUpdate=true;}
function drawPdaf(){const d=+$('pdd').value,c=cx2('pdc'),Wc=330,Hc=150,n=48,sh=d*7,bl=.6+Math.abs(d)*4,T=x=>.12+.7*.5*(Math.tanh((x-18)/bl*1.2)-Math.tanh((x-30)/bl*1.2));
  c.clearRect(0,0,Wc,Hc);c.font=FONT;
  [[-1,'#ffa94d','右 PD 读出（出瞳左半边的光）'],[1,'#b48cff','左 PD 读出（出瞳右半边的光）']].forEach(([sg,col,nm],k)=>{c.strokeStyle=col;c.lineWidth=2;c.beginPath();
    for(let i=0;i<=n;i++)c.lineTo(10+i/n*(Wc-20),Hc-24-T(i+sg*sh/2)*(Hc-50));c.stroke();c.fillStyle=col;c.fillText(nm,10,14+k*15);});
  c.fillStyle='#e6ebf4';c.fillText(Math.abs(d)<.03?'两幅重合：已合焦':`错开 ${Math.abs(sh).toFixed(1)} 个像素，往${d>0?'右':'左'}错 → ${d>0?'后焦':'前焦'}`,10,Hc-6);
  $('pddo').value=Math.abs(d)<.03?'合焦':(d>0?'后焦 ':'前焦 ')+Math.abs(d).toFixed(2);}
$('pdd').oninput=drawPdaf;

/* ---------- 机身防抖 ---------- */
const ibis=new THREE.Group();ibis.visible=false;scene.add(ibis);
const rig=new THREE.Group(), mount=new THREE.Group();ibis.add(rig);rig.add(mount);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(-3,6,6);ibis.add(l);
 const bw=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.2,3.2,4)),new THREE.LineBasicMaterial({color:0x56657e}));bw.position.x=.6;rig.add(bw);
 const ln=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.2,3,32,1,true),std(0xe9e6df,{transparent:true,opacity:.22,side:THREE.DoubleSide,depthWrite:false}));ln.rotation.z=Math.PI/2;ln.position.x=-2;rig.add(ln);
 const gl=new THREE.Mesh(new THREE.SphereGeometry(1.1,32,16),new THREE.MeshPhongMaterial({color:0xa9d4ff,transparent:true,opacity:.3,depthWrite:false}));gl.scale.x=.2;gl.position.x=-2;rig.add(gl);
 mount.add(new THREE.Mesh(new THREE.BoxGeometry(.06,1.2,1.8),std(0x2a3446)));
 const sp=new THREE.Mesh(new THREE.PlaneGeometry(1.8,1.2),basic(0x3b82f6,{transparent:true,opacity:.55,side:THREE.DoubleSide}));sp.rotation.y=Math.PI/2;sp.position.x=-.035;mount.add(sp);
 [[.85,0],[-.85,0],[0,1.2],[0,-1.2]].forEach(([y,z])=>{const m=new THREE.Mesh(new THREE.BoxGeometry(.2,y?.18:.9,y?1.2:.18),std(0xe0a52e,{metalness:.4,roughness:.4}));m.position.set(.15,y,z);rig.add(m);});
 const gy=new THREE.Mesh(new THREE.BoxGeometry(.3,.3,.3),std(0x19c2a0));gy.position.set(1.2,1.2,1.2);rig.add(gy);}
const ibDot=new THREE.Mesh(new THREE.SphereGeometry(.08,12,8),basic(0xffe27a));rig.add(ibDot);
label(ibis,'镜头',V(-2,1.5,0));label(ibis,'传感器',V(0,-.85,1.3));label(ibis,'音圈电机（线圈 + 磁铁）',V(.2,1.2,0));label(ibis,'陀螺仪',V(1.2,1.65,1.2));label(ibis,'点光源在传感器上的像',V(-.3,.5,-1));
let ibOn=false;const ibHist=[];$('ibon').onclick=()=>{ibOn=!ibOn;$('ibon').textContent=ibOn?'关闭机身防抖':'打开机身防抖';ibHist.length=0;};
function animIbis(t){const a=.035*(Math.sin(5.3*t)+.6*Math.sin(11.7*t+1.3)),b=.035*(Math.sin(4.1*t+2)+.6*Math.sin(9.3*t+.4));rig.rotation.z=a;rig.rotation.y=b;
  const E=6,dy=-2*Math.tan(a)*E,dz=2*Math.tan(b)*E;ibDot.position.set(-.07,dy,dz);mount.position.set(0,ibOn?dy:0,ibOn?dz:0);
  ibHist.push([dy-mount.position.y,dz-mount.position.z]);if(ibHist.length>90)ibHist.shift();
  const c=cx2('ibc'),Wc=330,Hc=150;c.clearRect(0,0,Wc,Hc);c.strokeStyle='rgba(147,160,184,.2)';c.lineWidth=1;
  for(let x=0;x<Wc;x+=15){c.beginPath();c.moveTo(x,0);c.lineTo(x,Hc);c.stroke();}for(let y=0;y<Hc;y+=15){c.beginPath();c.moveTo(0,y);c.lineTo(Wc,y);c.stroke();}
  c.strokeStyle='#ffe27a';c.lineWidth=4;c.lineCap='round';c.beginPath();ibHist.forEach(([y,z])=>c.lineTo(Wc/2+z*90,Hc/2-y*90));if(ibHist.length===1)c.lineTo(Wc/2+.1,Hc/2);c.stroke();c.lineWidth=1;
  c.font=FONT;c.fillStyle='#e6ebf4';c.fillText(ibOn?'防抖开：像几乎停在同一处，没有拖影':'防抖关：曝光期间像在传感器上划出拖影',8,14);c.fillStyle='#93a0b8';c.fillText('网格 = 像素（放大示意）',8,Hc-6);}
