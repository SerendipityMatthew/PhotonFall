/* 像素结构对比：FSI / BSI / 堆栈式 / LOFIC、电容五种位置、堆栈式 LOFIC */
/* ---------- 三种像素结构：FSI / BSI / 堆栈式 剖面 + 整颗芯片 ---------- */
/* 颜色只表达三样东西：金色 = 金属布线，蓝色 = 感光的 PD，青绿 = ADC 等电路。灰色 = 不干活的硅。 */
const arch=new THREE.Group();arch.visible=false;scene.add(arch);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,6,8);arch.add(l);}
const AX=[-7.5,-2.5,2.5,7.5], FC=[0,1,2,1], CAPC=0xff7eb6, SI=0x353a48, PDC=0x3b82f6, MET=0xe0a52e, CIR=0x19c2a0, CU=0xe07a45, GATE=0xb48cff;
const bx=(w,h,d,c,x,y,z=0,o={})=>add(arch,new THREE.BoxGeometry(w,h,d),std(c,o),x,y,z);
const bars=(X,y,gap)=>{if(gap){bx(1.2-gap,.16,1.6,MET,X-(1.2+gap)/2,y);bx(1.2-gap,.16,1.6,MET,X+(1.2+gap)/2,y);}else[-.8,0,.8].forEach(d=>bx(.6,.16,1.6,MET,X+d,y));};
AX.forEach((X,c)=>{const ml=add(arch,new THREE.SphereGeometry(1.2,32,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.22,shininess:100,depthWrite:false}),X,4.15,0);ml.scale.set(1,.4,.67);
  bx(2.4,.16,1.6,BAY[FC[c]],X,4.05,0,{transparent:true,opacity:.6,depthWrite:false});
  if(c===0){[3.65,3.15,2.65].forEach(y=>bars(X,y,.45));bx(2.4,2.3,1.6,SI,X,1.15);bx(1.1,.5,1.3,PDC,X-.25,2.07,.01);bx(.4,.2,1.2,GATE,X+.8,2.4);bx(.6,.9,1.6,CIR,X+2.2,1.85);}
  else{bx(2.05,.8,1.35,PDC,X,3.5);bx(2.4,.9,1.6,SI,X,3.5,0,{transparent:true,opacity:.35,depthWrite:false});bx(.4,.14,1.2,GATE,X+.8,2.97);
    if(c===1){[2.75,2.35,1.95].forEach(y=>bars(X,y,0));bx(2.4,1.6,1.6,SI,X,.8);bx(.6,.9,1.6,CIR,X+2.2,3.5);}
    else if(c===2){[2.75,2.45].forEach(y=>bars(X,y,0));[-.6,.6].forEach(d=>bx(.3,.26,.5,CU,X+d,2.17));[1.9,1.6].forEach(y=>bars(X,y,0));bx(2.4,1.4,1.6,CIR,X,.7);}
    else{bx(.4,.14,1.2,GATE,X+.25,2.97);bars(X,2.75,0);bx(2.2,.07,1.4,CAPC,X,2.47);bx(2.2,.08,1.4,0xffffff,X,2.395,0,{transparent:true,opacity:.35});bx(2.2,.07,1.4,CAPC,X,2.32);bars(X,2.05,0);bx(2.4,1.6,1.6,SI,X,.8);bx(.6,.9,1.6,CIR,X+2.2,3.5);}}});
/* 一个像素的占地（俯视）：同样大小的一格里，各样东西占多少 */
const tile=(X,z,parts)=>{bx(2.4,.1,2.4,0x4a5164,X,.05,z);parts.forEach(([w,d,c,dx,dz,y=.13])=>bx(w,.06,d,c,X+dx,y,z+dz));};
const TR=[-.75,-.25,.25,.75].map(dz=>[.4,.34,GATE,.85,dz]);
tile(AX[0],4.6,[[1.5,1.5,PDC,-.3,0],...TR,[2.4,.3,MET,0,-1.05,.3],[2.4,.3,MET,0,1.05,.3],[.3,2.4,MET,-1.05,0,.3],[.5,2.4,MET,.95,0,.3]]);
[1,2].forEach(c=>{tile(AX[c],4.6,[[2.2,2.2,PDC,0,0]]);tile(AX[c],7.6,[[1.55,2.2,PDC,-.3,0],...TR]);});
tile(AX[3],4.6,[[2.2,2.2,PDC,0,0]]);tile(AX[3],7.6,[[1.3,2.2,PDC,-.45,0],...[-.8,-.4,0,.4,.8].map(dz=>[.4,.3,GATE,.85,dz])]);bx(2.1,.04,2.1,CAPC,AX[3],.3,7.6,{transparent:true,opacity:.45,depthWrite:false});
const NAME=['前照式 FSI','背照式 BSI','堆栈式','LOFIC 像素'], ATL=NAME.map((n,c)=>{label(arch,n,V(AX[c],5.4,0));return labels[labels.length-1].el;});
label(arch,'金属在 PD 上面，挡光',V(AX[0]-.2,3.15,.95));label(arch,'PD 只占一小块',V(AX[0]-.3,2.0,.95));label(arch,'阵列外的电路（很远，不占像素面积）',V(AX[0]+2.2,1.2,.9));label(arch,'像素内晶体管，和 PD 抢地方',V(AX[0]+1.1,2.62,.95));
label(arch,'PD 铺满，光直接到',V(AX[1],3.5,.95));label(arch,'金属挪到 PD 下面',V(AX[1],2.35,.95));label(arch,'下面这片不干活，只是垫着',V(AX[1],.8,.95));label(arch,'阵列外的电路',V(AX[1]+2.2,4.2,.9));
label(arch,'像素这层和背照式一样',V(AX[2],3.5,.95));label(arch,'铜柱把上下两片连起来',V(AX[2]+2.2,2.17,0));label(arch,'下面这片换成了电路',V(AX[2],.7,.95));
label(arch,'多一个开关管 S',V(AX[3]+.25,2.97,.95));label(arch,'LOFIC 电容：夹在金属层里',V(AX[3],2.4,.95));label(arch,'受光面：同背照式',V(AX[3],.7,4.6));label(arch,'另一面：5 个管子，电容叠在金属层',V(AX[3],.7,7.6));label(arch,'一个像素的占地：能进光的开口约 40%',V(AX[0],.9,6.1));label(arch,'受光面：几乎整格',V(AX[1],.7,4.6));label(arch,'另一面：晶体管仍占一条',V(AX[1],.7,7.6));label(arch,'受光面：同背照式',V(AX[2],.7,4.6));label(arch,'另一面：同背照式',V(AX[2],.7,7.6));
const NA=30, aph=new THREE.InstancedMesh(new THREE.SphereGeometry(.07,8,6),basic(0xffffff),NA*4), ap=[], atal=[[0,0],[0,0],[0,0],[0,0]], AMB=new THREE.Color(0xffc45c), GREY=new THREE.Color(0x9aa3b5), QC=[0,1,1,2];arch.add(aph);
const respawn=(q,n,y)=>{q.x=(Math.random()-.5)*2.2;q.z=(Math.random()-.5)*1.3;q.y=y;q.dead=0;q.passed=false;q.k=Math.random()*3|0;aph.setColorAt(n,new THREE.Color(BAY[q.k]));};
for(let n=0;n<NA*4;n++){const q={};ap.push(q);respawn(q,n,4.4+Math.random()*2.2);}
const APATH=AX.map((X,c)=>c===0?[V(X+.2,2.3,.85),V(X+.75,2.3,.85),V(X+.75,3.15,.85),V(X+2.2,3.15,.85),V(X+2.2,2.3,.85)]:c===1?[V(X+.2,3.1,.85),V(X+.75,3.1,.85),V(X+.75,2.35,.85),V(X+2.2,2.35,.85),V(X+2.2,3.05,.85)]:c===2?[V(X+.2,3.1,.85),V(X+.6,3.1,.85),V(X+.6,2.6,.85),V(X+.6,2.0,.85),V(X+.6,1.4,.85)]:[V(X-.2,3.1,.85),V(X+.25,2.97,.85),V(X+.25,2.4,.85),V(X-.8,2.4,.85),V(X+.8,2.4,.85)]);
const apulse=AX.map(()=>add(arch,new THREE.SphereGeometry(.13,12,8),basic(0x4fd8e8),0,0,0));let atalT=0;
function animArch(t,dt){
  ap.forEach((q,n)=>{const c=n/NA|0, ypd=c?3.6:2.15, f=q.y>4.15?1:1-(4.15-q.y)/(4.15-ypd)*.6;
    if(q.dead>0){if((q.dead-=dt)<=0)respawn(q,n,5.6+Math.random()*.6);}
    else{q.y-=dt*1.3;
      if(!q.passed&&q.y<4.08){if(q.k!==FC[c]){q.dead=.001;}else q.passed=true;}
      const hit=q.dead<=0&&c===0&&q.y<3.76&&Math.abs(q.x*f)>.45;
      if(hit){atal[c][1]++;q.dead=.7;aph.setColorAt(n,GREY);}else if(q.dead<=0&&q.y<ypd){atal[c][0]++;q.dead=.001;}}
    M.position.set(AX[c]+q.x*f,q.y,q.z*f);M.scale.setScalar(q.dead>0&&q.dead<.01?0:q.dead>0?1.5:1);M.updateMatrix();aph.setMatrixAt(n,M.matrix);});
  aph.instanceMatrix.needsUpdate=true;aph.instanceColor.needsUpdate=true;
  apulse.forEach((m,c)=>{const q=((t*.4+c*.33)%1)*4, i=Math.min(3,q|0);m.position.lerpVectors(APATH[c][i],APATH[c][i+1],q-i);m.material.color.setHex(c===3&&i>=2?0xff7eb6:0x4fd8e8);});
  if((atalT+=dt)>.5){atalT=0;ATL.forEach((el,c)=>{const [h,m]=atal[c];if(h+m)el.textContent=NAME[c]+` · 光到达 ${Math.round(h/(h+m)*100)}%`;});}}

/* ---------- LOFIC 电容的五种位置（都以背照式为底） ---------- */
const cap5=new THREE.Group();cap5.visible=false;scene.add(cap5);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,7,8);cap5.add(l);}
const CX=[-10.4,-5.2,0,5.2,10.4], PK=0xff7eb6, PU=0xb48cff, GD=0xe0a52e, BL=0x3b82f6, GRY=0x353a48;
const cb=(w,h,d,c,x,y,z=0,o={})=>add(cap5,new THREE.BoxGeometry(w,h,d),std(c,o),x,y,z);
const cbars=(X,y)=>[-.8,0,.8].forEach(d=>cb(.6,.16,1.6,GD,X+d,y));
const CAPAT=[], PDAT=[];
CX.forEach((X,v)=>{const ml=add(cap5,new THREE.SphereGeometry(1.2,32,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.22,shininess:100,depthWrite:false}),X,4.15,0);ml.scale.set(1,.4,.67);
  cb(2.4,.16,1.6,BAY[1],X,4.05,0,{transparent:true,opacity:.6,depthWrite:false});
  cb(2.4,.9,1.6,GRY,X,3.5,0,{transparent:true,opacity:.3,depthWrite:false});
  const pdw=[1.3,2.05,1.55,1.8,2.05][v], pdx=[-.45,0,-.25,0,0][v];cb(pdw,.8,1.35,BL,X+pdx,3.5);PDAT.push(V(X+pdx,3.5,.75));
  cb(.4,.14,1.2,PU,X+.8,2.97);cb(.4,.14,1.2,PU,X+.25,2.97);
  if(v===0){cb(.75,.26,1.35,PK,X+.78,3.18);cbars(X,2.75);cbars(X,2.35);CAPAT.push(V(X+.78,3.18,.75));cb(2.4,1.8,1.6,GRY,X,1.1);}
  if(v===1){cbars(X,2.75);cb(2.2,.07,1.4,PK,X,2.47);cb(2.2,.08,1.4,0xffffff,X,2.395,0,{transparent:true,opacity:.35});cb(2.2,.07,1.4,PK,X,2.32);cbars(X,2.05);CAPAT.push(V(X,2.4,.75));cb(2.4,1.6,1.6,GRY,X,.8);}
  if(v===2){[.62,.86,1.1].forEach(d=>cb(.1,.72,1.3,PK,X+d,3.4));cbars(X,2.75);cbars(X,2.35);CAPAT.push(V(X+.86,3.4,.75));cb(2.4,1.8,1.6,GRY,X,1.1);}
  if(v===3){[-1.17,1.17].forEach(d=>cb(.1,.9,1.6,PK,X+d,3.5));cbars(X,2.75);cbars(X,2.35);CAPAT.push(V(X+1.17,3.5,.8));cb(2.4,1.8,1.6,GRY,X,1.1);}
  if(v===4){cbars(X,2.75);cbars(X,2.45);[-.6,.6].forEach(d=>cb(.3,.26,.5,0xe07a45,X+d,2.17));cbars(X,1.9);cb(2.2,.55,1.4,PK,X,1.35);cb(2.4,1,1.6,0x19c2a0,X,.5);CAPAT.push(V(X,1.35,.75));}
  /* 正面（不受光那面）的硅怎么分 */
  const z=4.4;cb(2.4,.1,2.4,0x4a5164,X,.05,z);cb(pdw,.06,2.1,BL,X+pdx,.13,z);[-.8,-.4,0,.4,.8].forEach(dz=>cb(.36,.08,.3,PU,X+.95,.17,z+dz));
  if(v===0)cb(.6,.07,2.1,PK,X+.45,.15,z);if(v===2)[-.7,-.25,.2,.65].forEach(dz=>cb(.18,.08,.18,PK,X+.5,.16,z+dz));
  if(v===3){cb(2.4,.08,.1,PK,X,.16,z-1.15);cb(2.4,.08,.1,PK,X,.16,z+1.15);cb(.1,.08,2.4,PK,X-1.15,.16,z);cb(.1,.08,2.4,PK,X+1.15,.16,z);}
  if(v===1)cb(2.2,.03,2.2,PK,X,.3,z,{transparent:true,opacity:.4,depthWrite:false});});
[['① 硅表面','和 PD 抢面积 · 漏电大'],['② 金属层 MIM','不占硅 · 容量小'],['③ 深沟槽电容','往深处要容量'],['④ 隔离沟槽兼电容','几乎不额外占地'],['⑤ 下层晶圆','容量最大 · 要像素级键合']].forEach(([a,b],v)=>{label(cap5,a,V(CX[v],5.4,0));label(cap5,b,V(CX[v],4.9,0));});
label(cap5,'正面的硅：蓝 PD · 紫 晶体管 · 粉 电容',V(CX[2],.8,5.9));
const NC=10, cph=new THREE.InstancedMesh(new THREE.SphereGeometry(.07,8,6),basic(0x48c26a),NC*5), cel=new THREE.InstancedMesh(new THREE.SphereGeometry(.09,10,8),basic(PK),15);cap5.add(cph,cel);
const cq=[...Array(NC*5)].map(()=>({x:Math.random()-.5,z:Math.random()-.5,y:4.4+Math.random()*1.6}));
function animCap(t,dt){
  cq.forEach((q,n)=>{const v=n/NC|0;q.y-=dt*1.2;if(q.y<3.6){q.y=5.6;q.x=Math.random()-.5;q.z=Math.random()-.5;}const f=q.y>4.15?1:.4+.6*(q.y-3.6)/.55;
    M.position.set(CX[v]+q.x*2.2*f,q.y,q.z*1.3*f);M.scale.setScalar(1);M.updateMatrix();cph.setMatrixAt(n,M.matrix);});cph.instanceMatrix.needsUpdate=true;
  for(let n=0;n<15;n++){const v=n%5, a=((t*.35+(n/5|0)/3)%1);M.position.lerpVectors(PDAT[v],CAPAT[v],a);M.scale.setScalar(1);M.updateMatrix();cel.setMatrixAt(n,M.matrix);}cel.instanceMatrix.needsUpdate=true;}

/* ---------- 堆栈式 LOFIC：背照式 / 两层（电容在上）/ 两层（电容在下，像素级键合）/ 三层 ---------- */
const stk4=new THREE.Group();stk4.visible=false;scene.add(stk4);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,7,8);stk4.add(l);}
const SX=[-7.8,-2.6,2.6,7.8], SPK=0xff7eb6, SPU=0xb48cff, SGD=0xe0a52e, SBL=0x3b82f6, SGR=0x353a48, SCI=0x19c2a0, SCU=0xe07a45;
const sb=(w,h,d,c,x,y,z=0,o={})=>add(stk4,new THREE.BoxGeometry(w,h,d),std(c,o),x,y,z);
const sbars=(X,y)=>[-.8,0,.8].forEach(d=>sb(.6,.14,1.6,SGD,X+d,y));
const mim=(X,y,w=2.2)=>{sb(w,.07,1.4,SPK,X,y+.075);sb(w,.08,1.4,0xffffff,X,y,0,{transparent:true,opacity:.35});sb(w,.07,1.4,SPK,X,y-.075);};
const SPD=[], SCAP=[], SOUT=[];
SX.forEach((X,v)=>{const ml=add(stk4,new THREE.SphereGeometry(1.2,32,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.22,shininess:100,depthWrite:false}),X,4.15,0);ml.scale.set(1,.4,.67);
  sb(2.4,.16,1.6,BAY[1],X,4.05,0,{transparent:true,opacity:.6,depthWrite:false});sb(2.4,.9,1.6,SGR,X,3.5,0,{transparent:true,opacity:.3,depthWrite:false});
  const pw=[1.7,1.7,1.9,2.15][v];sb(pw,.8,1.35,SBL,X-(2.05-pw)/2,3.5);SPD.push(V(X,3.5,.75));
  if(v<3){sb(.36,.14,1.2,SPU,X+.85,2.97);sb(.36,.14,1.2,SPU,X+.4,2.97);}else sb(.36,.14,1.2,SPU,X+.85,2.97);
  if(v===0){sbars(X,2.75);mim(X,2.4);sbars(X,2.05);sb(2.4,1.7,1.6,SGR,X,.85);SCAP.push(V(X,2.4,.75));SOUT.push(V(X+2.1,2.75,.75));sb(.5,.8,1.6,SCI,X+2.1,2.75);}
  if(v===1){sbars(X,2.75);mim(X,2.4);sbars(X,2.05);[-.95,.95].forEach(d=>{sb(.3,.13,.5,SCU,X+d,1.89);sb(.3,.13,.5,SCU,X+d,1.76);});sbars(X,1.55);sb(2.4,1.4,1.6,SCI,X,.7);SCAP.push(V(X,2.4,.75));SOUT.push(V(X+.95,.9,.75));}
  if(v===2){sbars(X,2.75);sbars(X,2.45);sb(.42,.13,.6,SCU,X,2.23);sb(.42,.13,.6,SCU,X,2.1);sbars(X,1.88);sb(2.2,.5,1.4,SPK,X,1.45);sb(2.4,1.1,1.6,SCI,X,.55);SCAP.push(V(X,1.45,.75));SOUT.push(V(X,.6,.75));}
  if(v===3){sbars(X,2.78);sb(.42,.12,.6,SCU,X,2.6);sb(.42,.12,.6,SCU,X,2.48);
    sb(2.4,.42,1.6,SGR,X,2.18,0,{transparent:true,opacity:.45,depthWrite:false});[-.75,-.25,.25,.75].forEach(d=>sb(.34,.12,1.1,SPU,X+d,2.45));
    mim(X,1.82);sbars(X,1.58);sb(.42,.12,.6,SCU,X,1.42);sb(.42,.12,.6,SCU,X,1.3);sb(2.4,1.18,1.6,SCI,X,.6);SCAP.push(V(X,1.82,.75));SOUT.push(V(X,.6,.75));}});
[['背照式 LOFIC','电容在金属层 · 下面是空白支撑片'],['两层堆栈 · 电容在像素晶圆','下层换成 ADC 等电路'],['两层堆栈 · 电容在下层','每个像素一个铜–铜键合点'],['三层堆栈','像素层只留 PD 和 TX']].forEach(([a,b],v)=>{label(stk4,a,V(SX[v],5.4,0));label(stk4,b,V(SX[v],4.9,0));});
label(stk4,'支撑晶圆',V(SX[0],.8,.95));label(stk4,'列级键合',V(SX[1]+1.75,1.83,0));label(stk4,'逻辑晶圆',V(SX[1],.7,.95));
label(stk4,'像素级键合',V(SX[2]+1.6,2.17,0));label(stk4,'下层：LOFIC 电容',V(SX[2],1.45,.95));label(stk4,'逻辑电路',V(SX[2],.45,.95));
label(stk4,'① 像素晶圆：PD + TX',V(SX[3]+2.2,3.5,0));label(stk4,'② 中间晶圆：RST · SF · SEL · 开关 + 电容',V(SX[3]+2.6,2.1,0));label(stk4,'③ 底层晶圆：ADC 与逻辑',V(SX[3]+2.1,.6,0));
label(stk4,'粉 = LOFIC 电容 · 紫 = 晶体管 · 橙 = 铜–铜键合 · 青绿 = 逻辑电路',V(0,-.6,1.6));
const S4N=10, s4ph=new THREE.InstancedMesh(new THREE.SphereGeometry(.07,8,6),basic(0x48c26a),S4N*4), s4e=new THREE.InstancedMesh(new THREE.SphereGeometry(.09,10,8),basic(SPK),12), s4s=new THREE.InstancedMesh(new THREE.SphereGeometry(.1,10,8),basic(0x4fd8e8),8);stk4.add(s4ph,s4e,s4s);
const s4q=[...Array(S4N*4)].map(()=>({x:Math.random()-.5,z:Math.random()-.5,y:4.4+Math.random()*1.6}));
function animStk4(t,dt){
  s4q.forEach((q,n)=>{const v=n/S4N|0;q.y-=dt*1.2;if(q.y<3.6){q.y=5.6;q.x=Math.random()-.5;q.z=Math.random()-.5;}const f=q.y>4.15?1:.4+.6*(q.y-3.6)/.55;
    M.position.set(SX[v]+q.x*2.2*f,q.y,q.z*1.3*f);M.scale.setScalar(1);M.updateMatrix();s4ph.setMatrixAt(n,M.matrix);});s4ph.instanceMatrix.needsUpdate=true;
  for(let n=0;n<12;n++){const v=n%4,a=(t*.35+(n>>2)/3)%1;M.position.lerpVectors(SPD[v],SCAP[v],a);M.scale.setScalar(1);M.updateMatrix();s4e.setMatrixAt(n,M.matrix);}s4e.instanceMatrix.needsUpdate=true;
  for(let n=0;n<8;n++){const v=n%4,a=(t*.3+(n>>2)/2)%1;M.position.lerpVectors(SCAP[v],SOUT[v],a);M.scale.setScalar(1);M.updateMatrix();s4s.setMatrixAt(n,M.matrix);}s4s.instanceMatrix.needsUpdate=true;}
