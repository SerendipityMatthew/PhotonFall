/* 4×4 像素阵列：光子、滤色片、逐行读出 */
/* ---------- 微观：4×4 像素（背照式结构，光从上方进入） ---------- */
const BAY=[0xef5a5f,0x48c26a,0x5a95ff], CSS=['var(--r)','var(--g)','var(--b)'], FULL=12, DEPTH=[.28,.5,.74], QE=[.6,.8,.7];
const px=[];
for(let k=0;k<4;k++)for(let i=0;i<4;i++){const c=k%2?(i%2?2:1):(i%2?1:0), x=i-1.5, z=k-1.5;
  const ml=new THREE.Mesh(new THREE.SphereGeometry(.5,24,12,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.28,shininess:100,depthWrite:false}));ml.scale.y=.45;ml.position.set(x,1.1,z);
  const cf=new THREE.Mesh(new THREE.BoxGeometry(.94,.14,.94),new THREE.MeshStandardMaterial({color:BAY[c],transparent:true,opacity:.6,depthWrite:false}));cf.position.set(x,1,z);
  const pd=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(.82,.75,.82)),new THREE.LineBasicMaterial({color:0x56657e}));pd.position.set(x,.5,z);
  const fill=new THREE.Mesh(new THREE.BoxGeometry(.78,1,.78),basic(0x4fd8e8,{transparent:true,opacity:.55,depthWrite:false}));fill.position.set(x,.13,z);
  micro.add(ml,cf,pd,fill);px.push({i,k,c,x,z,e:0,fill,dn:0});}
const slab=new THREE.Mesh(new THREE.BoxGeometry(4.3,.1,4.3),new THREE.MeshStandardMaterial({color:0x1b2434}));slab.position.y=.05;micro.add(slab);
for(let i=0;i<4;i++){const w=new THREE.Mesh(new THREE.BoxGeometry(.07,.05,5),new THREE.MeshStandardMaterial({color:0xb08a4a,metalness:.8,roughness:.4}));w.position.set(i-1.5,-.05,.6);
  const adc=new THREE.Mesh(new THREE.BoxGeometry(.7,.3,.5),new THREE.MeshStandardMaterial({color:0x2f4a6b}));adc.position.set(i-1.5,-.05,3.2);micro.add(w,adc);}
const rowBox=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(4.1,.85,.98)),new THREE.LineBasicMaterial({color:0xffc45c}));rowBox.position.y=.5;micro.add(rowBox);
const pulses=new THREE.InstancedMesh(new THREE.SphereGeometry(.06,10,8),basic(0x4fd8e8),4);micro.add(pulses);
const mlight=new THREE.DirectionalLight(0xffffff,.9);mlight.position.set(3,6,4);micro.add(mlight);
label(micro,'微透镜',V(-1.5,1.55,-1.5));label(micro,'滤色片（RGGB）',V(1.5,1.05,-1.5).add(V(.9,0,0)));label(micro,'光电二极管（硅）',V(2.3,.45,.5));label(micro,'列线',V(-1.5,-.05,2.5).add(V(-.5,0,0)));label(micro,'列 ADC',V(1.5,-.05,3.2).add(V(.9,0,0)));
const NM=110, mph=new THREE.InstancedMesh(new THREE.SphereGeometry(.035,8,6),basic(0xffffff),NM), mp=[];micro.add(mph);
function spawn(p,y){p.px=px[Math.random()*16|0];const r=Math.random()*2.25;p.c=r<.45?2:r<1.25?1:0;   /* 入射光偏暖：红多蓝少 */p.x0=(Math.random()-.5)*.84;p.z0=(Math.random()-.5)*.84;p.y=y??2.4+Math.random()*1.2;p.dead=false;}
for(let n=0;n<NM;n++){const p={};spawn(p,1+Math.random()*2.6);mp.push(p);mph.setColorAt(n,new THREE.Color(BAY[p.c]));}
let row=0, rowT=0, pulseT=9;
$('dn').innerHTML=px.map((p,n)=>`<span id="d${n}" style="background:${CSS[p.c]}">–</span>`).join('');
