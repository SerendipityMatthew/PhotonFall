/* 第 25-31 步的 3D 场景：镀膜 / 机械快门 / HDR / 色彩 / 视频 / 存储 / 计算摄影 */

/* ---------- 25. 镜头镀膜、眩光与鬼影 ---------- */
const coat=new THREE.Group();coat.visible=false;scene.add(coat);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,6,4);coat.add(l);coat.add(new THREE.AmbientLight(0x667799,.4));}
const COAT_X=[-2.4,-1.4,-.4,.6,1.6,2.6];
COAT_X.forEach((x,i)=>{const g=add(coat,new THREE.CylinderGeometry(1.4,1.4,.08,32),std(0x6a8aff,{transparent:true,opacity:.22,depthWrite:false}),x,0,0);g.rotation.z=Math.PI/2;});
add(coat,new THREE.BoxGeometry(.08,2.4,2.4),std(0x2a3142),3.6,0,0);
label(coat,'强光入射',V(-3.8,0,0));label(coat,'镜片（6 面）',V(0,1.8,0));label(coat,'传感器',V(3.9,0,0));label(coat,'鬼影 = 对称光斑',V(2.2,1.6,0));
const coatMain=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute([-3.8,0,0,3.6,0,0],3)),new THREE.LineBasicMaterial({color:0xffe27a,transparent:true,opacity:.9}));coat.add(coatMain);
const coatGhostRays=new THREE.LineSegments(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0xff9a4a,transparent:true,opacity:.6}));coat.add(coatGhostRays);
{const p=[];for(let i=0;i<COAT_X.length-1;i++){const a=COAT_X[i],b=COAT_X[i+1];p.push(b,0,0,a,.25,0,a,.25,0,3.6,.5+i*.08,0);}coatGhostRays.geometry.setAttribute('position',new THREE.Float32BufferAttribute(p,3));}
const flareQ=add(coat,new THREE.PlaneGeometry(2.4,2.4),basic(0xffd880,{transparent:true,opacity:0,depthWrite:false}),3.58,0,0);flareQ.rotation.y=Math.PI/2;
const ghostSpots=new THREE.InstancedMesh(new THREE.CircleGeometry(.14,16),basic(0xffd880,{transparent:true,opacity:.95,depthWrite:false}),8);ghostSpots.rotation.y=Math.PI/2;ghostSpots.position.x=3.57;coat.add(ghostSpots);
const coatPh=new THREE.InstancedMesh(new THREE.SphereGeometry(.08,8,6),basic(0xffe27a),24);coat.add(coatPh);
let coatOn=true;
function animCoat(t,dt){const amp=coatOn?.04:1;
  flareQ.material.opacity=amp*.22;coatGhostRays.material.opacity=amp*.5;
  for(let i=0;i<8;i++){const y=(i-3.5)*.26,s=amp*(.5+.4*Math.sin(t*1.5+i));M.position.set(0,y,0);M.scale.setScalar(s);M.updateMatrix();ghostSpots.setMatrixAt(i,M.matrix);ghostSpots.setColorAt(i,col.set(0xffd880).multiplyScalar(.6+.4*Math.sin(t+i)));}
  ghostSpots.instanceMatrix.needsUpdate=true;if(ghostSpots.instanceColor)ghostSpots.instanceColor.needsUpdate=true;
  for(let n=0;n<24;n++){const u=((t*.4+n/24)%1),x=-3.8+u*7.4;M.position.set(x,0,0);M.scale.setScalar(1);M.updateMatrix();coatPh.setMatrixAt(n,M.matrix);}
  coatPh.instanceMatrix.needsUpdate=true;}

/* ---------- 26. 机械快门与同步速度 ---------- */
const shut=new THREE.Group();shut.visible=false;scene.add(shut);
{const l=new THREE.DirectionalLight(0xffffff,.95);l.position.set(2,6,5);shut.add(l);shut.add(new THREE.AmbientLight(0x8899aa,.4));}
const SHUT_W=4,SHUT_H=3;
add(shut,new THREE.BoxGeometry(SHUT_W,SHUT_H,.12),std(0x1a2534),0,0,-.1);
{const c=mkCanvas(96,72),g=c.getContext('2d');drawScene(g,96,72);const tex=new THREE.CanvasTexture(c);add(shut,new THREE.PlaneGeometry(SHUT_W*.95,SHUT_H*.95),new THREE.MeshBasicMaterial({map:tex}),0,0,-.03);}
const shutFront=add(shut,new THREE.BoxGeometry(SHUT_W,SHUT_H,.04),std(0xd94a3b,{transparent:true,opacity:.85}),0,SHUT_H,.05);
const shutBack=add(shut,new THREE.BoxGeometry(SHUT_W,SHUT_H,.04),std(0x3b67d9,{transparent:true,opacity:.85}),0,SHUT_H,.1);
label(shut,'前帘',V(SHUT_W/2+.4,.8,.05));label(shut,'后帘',V(SHUT_W/2+.4,.3,.1));label(shut,'传感器 + 景物',V(0,-SHUT_H/2-.4,0));
const SHUT_MODES=[['慢速：整面同时全开',1.5,1.5],['高速 1/500：狭缝扫过',.25,.15],['超快 1/4000：更窄的狭缝',.08,.05]];let shutMode=0;
function animShut(t,dt){const [,open,gap]=SHUT_MODES[shutMode],cycle=open+1.2,p=(t%cycle)/cycle*(open+1.2);
  let frontY,backY;if(open>=1){const sweep=.3;if(p<sweep){frontY=SHUT_H*(1-p/sweep);backY=SHUT_H;}else if(p<sweep+open){frontY=0;backY=SHUT_H;}else if(p<sweep+open+sweep){frontY=0;backY=SHUT_H-SHUT_H*((p-sweep-open)/sweep);}else{frontY=SHUT_H;backY=0;}}
  else{const total=.5;if(p<total){frontY=SHUT_H*(1-p/total);backY=SHUT_H*(1-Math.max(0,p-gap)/total);}else{frontY=0;backY=0;}}
  shutFront.position.y=frontY;shutBack.position.y=backY;}

/* ---------- 27. HDR 与多帧合成 ---------- */
const hdr=new THREE.Group();hdr.visible=false;scene.add(hdr);
{const l=new THREE.DirectionalLight(0xffffff,.95);l.position.set(3,6,4);hdr.add(l);hdr.add(new THREE.AmbientLight(0x667799,.5));}
const HDR_EXP=[-2,-1,0,1,2],hdrFrames=[];
HDR_EXP.forEach((ev,i)=>{const c=mkCanvas(120,80),g=c.getContext('2d');drawScene(g,120,80);const id=g.getImageData(0,0,120,80),f=Math.pow(2,ev);
  for(let n=0;n<id.data.length;n+=4){id.data[n]=Math.min(255,id.data[n]*f);id.data[n+1]=Math.min(255,id.data[n+1]*f);id.data[n+2]=Math.min(255,id.data[n+2]*f);}
  g.putImageData(id,0,0);const tex=new THREE.CanvasTexture(c),m=add(hdr,new THREE.PlaneGeometry(1.8,1.2),new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:.9}),-3+i*.1,.4+i*.15,0);m.userData={ev,i};hdrFrames.push(m);
  label(hdr,`${ev>=0?'+':''}${ev} EV`,V(-3.1+i*.1,1.05+i*.15,0));});
/* 合成结果 */
{const c=mkCanvas(240,160),g=c.getContext('2d');drawScene(g,240,160);/* 简化模拟 HDR 结果：轻微 S 曲线 */const id=g.getImageData(0,0,240,160);for(let n=0;n<id.data.length;n+=4){for(let k=0;k<3;k++){const v=id.data[n+k]/255;id.data[n+k]=255*Math.pow(v,.7);}}g.putImageData(id,0,0);const tex=new THREE.CanvasTexture(c);hdr.userData.out=add(hdr,new THREE.PlaneGeometry(3.6,2.4),new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:0}),3,0,0);}
label(hdr,'队列里的欠曝帧',V(-3,2.5,0));label(hdr,'对齐 + 叠加 + 色调映射',V(0,-1.9,0));label(hdr,'HDR 输出',V(3,-1.8,0));
function animHdr(t,dt){const cycle=6,p=(t%cycle)/cycle,out=hdr.userData.out;
  hdrFrames.forEach((f,i)=>{const stackP=Math.max(0,Math.min(1,(p-i*.08)/.3)),mergeP=Math.max(0,Math.min(1,(p-.5-i*.03)/.3));
    const sx=-3+i*.1,sy=.4+i*.15,mx=0,my=0;f.position.x=sx+(mx-sx)*mergeP;f.position.y=sy+(my-sy)*mergeP;f.position.z=i*.02;
    f.material.opacity=p<.5?.9*stackP:.9*(1-mergeP);});
  out.material.opacity=p<.55?0:Math.min(1,(p-.55)/.25);
  if(p>.9){const k=(p-.9)/.1;out.material.opacity=1-k;}}

/* ---------- 28. 颜色空间：CIE 色度三角形 ---------- */
const cs=new THREE.Group();cs.visible=false;scene.add(cs);
cs.add(new THREE.AmbientLight(0xffffff,.9));
/* CIE xy 坐标：R G B 三个原色 */
const CSS_DEF=[['sRGB',[.64,.33],[.3,.6],[.15,.06],0xffc45c,0],['Display P3',[.68,.32],[.265,.69],[.15,.06],0x4fd8e8,.15],['Adobe RGB',[.64,.33],[.21,.71],[.15,.06],0xb48cff,.3],['Rec. 2020',[.708,.292],[.17,.797],[.131,.046],0x48c26a,.45],['ProPhoto',[.7347,.2653],[.1596,.8404],[.0366,.0001],0xef5a5f,.6]];
/* 色度马蹄：用点采样绘出 */
{const pts=[];for(let l=380;l<=700;l+=5){/* 简化光谱轨迹 */const x=.3+.4*Math.sin((l-380)/320*Math.PI-.6),y=.1+.7*Math.exp(-(((l-535)/90)**2));pts.push([x,y]);}
 const geo=new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(pts.flatMap(([x,y])=>[x*6-3,0,y*6-3]),3));
 cs.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:0xaaaaaa,transparent:true,opacity:.6})));}
/* 坐标轴 */
{const axG=new THREE.Group();cs.add(axG);axG.add(new THREE.Line(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute([-3,0,-3,3,0,-3,-3,0,-3,-3,0,3],3)),new THREE.LineBasicMaterial({color:0x667788})));
  label(cs,'x',V(3.3,0,-3));label(cs,'y',V(-3,0,3.3));}
CSS_DEF.forEach(([name,r,gC,b,hex,zOff])=>{const pts=[r,gC,b,r];const geo=new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(pts.flatMap(([x,y])=>[x*6-3,zOff,y*6-3]),3));
  cs.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:hex,linewidth:2})));
  const cx=(r[0]+gC[0]+b[0])/3,cy=(r[1]+gC[1]+b[1])/3;label(cs,name,V(cx*6-3,zOff+.1,cy*6-3));});
function animCs(t,dt){cs.rotation.y=Math.sin(t*.15)*.3;}

/* ---------- 29. 视频编码：I/P/B 帧和 GOP ---------- */
const vid=new THREE.Group();vid.visible=false;scene.add(vid);
vid.add(new THREE.AmbientLight(0xffffff,.9));
const VID_SEQ='IBBPBBPBBIBBPBBPBBI'.split('');const vidCubes=[];
VID_SEQ.forEach((k,i)=>{const col=k==='I'?0x5a95ff:k==='P'?0x48c26a:0xffc45c,m=add(vid,new THREE.BoxGeometry(.5,.6,.2),std(col),i*.7-6,0,0);vidCubes.push(m);label(vid,k,V(i*.7-6,.5,0));});
/* 参考箭头：P 指 I/P，B 指前后 I/P */
const vidArrows=new THREE.Group();vid.add(vidArrows);
VID_SEQ.forEach((k,i)=>{if(k==='I')return;const refs=[];
  if(k==='P'){for(let j=i-1;j>=0;j--){if(VID_SEQ[j]!=='B'){refs.push(j);break;}}}
  else{for(let j=i-1;j>=0;j--){if(VID_SEQ[j]!=='B'){refs.push(j);break;}}for(let j=i+1;j<VID_SEQ.length;j++){if(VID_SEQ[j]!=='B'){refs.push(j);break;}}}
  refs.forEach(j=>{const x1=i*.7-6,x2=j*.7-6,arc=new THREE.CatmullRomCurve3([V(x1,.3,0),V((x1+x2)/2,.9+Math.abs(x2-x1)*.08,0),V(x2,.3,0)]),g=new THREE.BufferGeometry().setFromPoints(arc.getPoints(20));
    vidArrows.add(new THREE.Line(g,new THREE.LineBasicMaterial({color:k==='P'?0x48c26a:0xffc45c,transparent:true,opacity:.5})));});});
label(vid,'I 完整 · P 参考前 · B 参考前后',V(-3,-.8,0));label(vid,'GOP 约 15~30 帧',V(-3,-1.2,0));
label(vid,'Y 亮度',V(-6,2.6,0));label(vid,'Cb / Cr 色度（1/4 分辨率）',V(-1,2.6,0));
/* 简示 YUV 通道 */
{const c=mkCanvas(120,80),g=c.getContext('2d');drawScene(g,120,80);const id=g.getImageData(0,0,120,80);
 /* Y */const cy=mkCanvas(120,80),gy=cy.getContext('2d'),idy=gy.createImageData(120,80);
 for(let n=0;n<id.data.length;n+=4){const Y=.299*id.data[n]+.587*id.data[n+1]+.114*id.data[n+2];idy.data[n]=idy.data[n+1]=idy.data[n+2]=Y;idy.data[n+3]=255;}gy.putImageData(idy,0,0);
 const tex=new THREE.CanvasTexture(cy);add(vid,new THREE.PlaneGeometry(2,1.33),new THREE.MeshBasicMaterial({map:tex}),-5,1.7,0);
 /* Cb */const cb=mkCanvas(30,20),gb=cb.getContext('2d'),idb=gb.createImageData(30,20);for(let y=0;y<20;y++)for(let x=0;x<30;x++){const sx=x*4,sy=y*4,o=(sy*120+sx)*4,Cb=128-.169*id.data[o]-.331*id.data[o+1]+.5*id.data[o+2],n=(y*30+x)*4;idb.data[n]=0;idb.data[n+1]=128;idb.data[n+2]=Math.max(0,Math.min(255,Cb+64));idb.data[n+3]=255;}gb.putImageData(idb,0,0);
 const texb=new THREE.CanvasTexture(cb);texb.magFilter=THREE.NearestFilter;add(vid,new THREE.PlaneGeometry(1.4,.95),new THREE.MeshBasicMaterial({map:texb}),-2,1.7,0);
 /* Cr */const cr=mkCanvas(30,20),gr=cr.getContext('2d'),idr=gr.createImageData(30,20);for(let y=0;y<20;y++)for(let x=0;x<30;x++){const sx=x*4,sy=y*4,o=(sy*120+sx)*4,Cr=128+.5*id.data[o]-.419*id.data[o+1]-.081*id.data[o+2],n=(y*30+x)*4;idr.data[n]=Math.max(0,Math.min(255,Cr+64));idr.data[n+1]=0;idr.data[n+2]=0;idr.data[n+3]=255;}gr.putImageData(idr,0,0);
 const texr=new THREE.CanvasTexture(cr);texr.magFilter=THREE.NearestFilter;add(vid,new THREE.PlaneGeometry(1.4,.95),new THREE.MeshBasicMaterial({map:texr}),-.3,1.7,0);}
const vidHead=add(vid,new THREE.BoxGeometry(.56,.84,.05),basic(0xffffff,{transparent:true,opacity:.7}),-6,0,.15);
function animVid(t,dt){const idx=Math.floor((t*2)%VID_SEQ.length);vidHead.position.x=idx*.7-6;
  vidCubes.forEach((m,i)=>{m.scale.setScalar(i===idx?1.2:1);});}

/* ---------- 30. 存储卡、总线与传输 ---------- */
const stor=new THREE.Group();stor.visible=false;scene.add(stor);
stor.add(new THREE.AmbientLight(0xffffff,.9));
{const l=new THREE.DirectionalLight(0xffffff,.6);l.position.set(2,5,3);stor.add(l);}
const STOR_BOXES=[['传感器',-5,0x5a95ff],['DDR 缓冲',-1.7,0x48c26a],['处理器 (ISP + 编码)',1.6,0xb48cff],['存储卡 / SSD',4.9,0xffc45c]];
STOR_BOXES.forEach(([n,x,c])=>{add(stor,new THREE.BoxGeometry(1.8,1.6,1.8),std(c),x,0,0);label(stor,n,V(x,1.3,0));});
/* DDR 填充指示 */
const storBuffer=add(stor,new THREE.BoxGeometry(1.4,1.2,.08),basic(0xffe27a,{transparent:true,opacity:.8}),-1.7,-.2,1.05);storBuffer.scale.y=.1;
label(stor,'缓冲占用',V(-1.7,-1.4,1.05));
/* 数据流粒子 */
const storPh=new THREE.InstancedMesh(new THREE.SphereGeometry(.08,8,6),basic(0x4fd8e8),40);stor.add(storPh);
/* 速度对比文字 */
label(stor,'传感器输出 ~2000 MB/s',V(-5,-1.6,0));label(stor,'写入上限 = 卡速',V(4.9,-1.6,0));
let storCard=1;
const STOR_CARDS=['SD UHS-I (90 MB/s)','SD UHS-II (250 MB/s)','CFexpress A (700 MB/s)','CFexpress B (1700 MB/s)','CFexpress B 4.0 (3500 MB/s)'];
function animStor(t,dt){const cardRate=[.2,.5,1.2,2.5,4][storCard],sensorRate=3;
  /* 粒子沿 Sensor -> DDR -> Proc -> Card 流动 */
  const seg=[[-5,-1.7],[-1.7,1.6],[1.6,4.9]];const srateSeg=[sensorRate,2.5,cardRate];
  for(let n=0;n<40;n++){const s=n<14?0:n<27?1:2,base=[-5,-1.7,1.6][s],w=[1.7-(-5),1.6-(-1.7),4.9-1.6][s];
    const u=((t*srateSeg[s]*.15+n/14)%1);M.position.set(base+u*w,0,0);M.scale.setScalar(1);M.updateMatrix();storPh.setMatrixAt(n,M.matrix);
    storPh.setColorAt(n,col.set([0x5a95ff,0x48c26a,0xb48cff][s]));}
  storPh.instanceMatrix.needsUpdate=true;if(storPh.instanceColor)storPh.instanceColor.needsUpdate=true;
  /* 缓冲占用 = max(0, (sensor-card)/sensor) 平滑 */
  const fill=Math.max(0,Math.min(1,(sensorRate-cardRate)/sensorRate));
  storBuffer.scale.y+=(Math.max(.1,fill)-storBuffer.scale.y)*Math.min(1,dt*2);storBuffer.position.y=-.8+storBuffer.scale.y*.6;
  storBuffer.material.color.setHex(fill>.7?0xd94a3b:fill>.3?0xffc45c:0x48c26a);}

/* ---------- 31. 计算摄影：多帧对齐 + 叠加 ---------- */
const compu=new THREE.Group();compu.visible=false;scene.add(compu);
compu.add(new THREE.AmbientLight(0xffffff,.9));
/* 5 张带噪声的帧 */
const compuFrames=[];
for(let i=0;i<5;i++){const c=mkCanvas(120,80),g=c.getContext('2d');drawScene(g,120,80);const id=g.getImageData(0,0,120,80);
  for(let n=0;n<id.data.length;n+=4)for(let k=0;k<3;k++)id.data[n+k]=Math.max(0,Math.min(255,id.data[n+k]*.4+gauss()*50));
  g.putImageData(id,0,0);const tex=new THREE.CanvasTexture(c),m=add(compu,new THREE.PlaneGeometry(1.8,1.2),new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:.95}),-3+i*.1,.5+i*.2,0);compuFrames.push(m);}
/* 叠加结果（干净） */
{const c=mkCanvas(240,160),g=c.getContext('2d');drawScene(g,240,160);const tex=new THREE.CanvasTexture(c);compu.userData.out=add(compu,new THREE.PlaneGeometry(3.6,2.4),new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:0}),3,0,0);}
label(compu,'手持连拍 (每张都暗、都有噪声)',V(-3,2.5,0));label(compu,'对齐 → 线性叠加 → 色调映射',V(0,-1.9,0));label(compu,'夜景输出 (√N 信噪比)',V(3,-1.8,0));
function animCompu(t,dt){const cycle=6,p=(t%cycle)/cycle,out=compu.userData.out;
  compuFrames.forEach((f,i)=>{const stackP=Math.max(0,Math.min(1,(p-i*.08)/.3)),mergeP=Math.max(0,Math.min(1,(p-.5-i*.03)/.3));
    const sx=-3+i*.1,sy=.5+i*.2,shake=p<.5?Math.sin(t*4+i)*.05*stackP:0;
    f.position.x=sx+shake+(0-sx)*mergeP;f.position.y=sy-shake+(0-sy)*mergeP;f.position.z=i*.02;
    f.material.opacity=p<.5?.95*stackP:.95*(1-mergeP);});
  out.material.opacity=p<.55?0:Math.min(1,(p-.55)/.25);
  if(p>.9){const k=(p-.9)/.1;out.material.opacity=1-k;}}

/* ---------- 按钮绑定 ---------- */
$('coatbtn').onclick=()=>{coatOn=!coatOn;$('coatbtn').textContent=coatOn?'关掉镀膜（看脏画面）':'打开镀膜（画面干净）';};
$('shutbtn').onclick=()=>{shutMode=(shutMode+1)%SHUT_MODES.length;$('shutbtn').textContent=SHUT_MODES[shutMode][0]+' · 点切换';};
$('shutbtn').textContent=SHUT_MODES[0][0]+' · 点切换';
$('storbtn').onclick=()=>{storCard=(storCard+1)%STOR_CARDS.length;$('storbtn').textContent=STOR_CARDS[storCard]+' · 点切换';};
$('storbtn').textContent=STOR_CARDS[storCard]+' · 点切换';
