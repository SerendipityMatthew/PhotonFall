/* 镜头、景物、传感器与取景器（macro 宏观场景：全景导览、镜头章里 g:'macro' 的各步和传感器前的玻璃那一步） */
/* ---------- 宏观：场景三层 + FE 50-150mm F2 GM + 机身 ---------- */
/* 像方（镜头到传感器）按真实比例：1 单位 = 25 mm，传感器在 x=0。物方距离压缩绘制。 */
const U=25, K=3, SUN=V(-20,13,9);
const sx=d=>-10.5-14.5*Math.log(d/.4)/Math.log(20);                      // 真实距离 d(m) → 画在哪
const OBJ=[{n:'前景',d:1.2,Y:-.04,c:0xff6fae},{n:'主体',d:3,Y:.12,c:0xffffff},{n:'背景灯',d:8,Y:.4,c:0xffc45c}];
const NS=[1.2,1.4,1.8,2,2.8,4,5.6,8,11,16,22], TS=[1/4,1/15,1/60,1/250,1/1000,1/4000,1/8000], TN=['1/4','1/15','1/60','1/250','1/1000','1/4000','1/8000'], ISOS=[100,200,400,800,1600,3200,6400,12800];
/* 可选镜头（Sony FE）。规格核对自 sony.jp 各型号 spec / feature 页（2026-11）。
   f 焦段 mm；N 最大光圈（N2 = 长焦端）；b 叶片；g 克（50-150 / 70-200 / 200-600 不含脚架环）；mf 最近对焦 m（变焦两端）；
   el 片/组（fl:1 = 含 1 片后置滤镜）；sp 特殊镜片（官方没给片数的只写种类）；m × mt 对焦马达：XD 线性 / DDSSM 直驱超声 / DLM 双线性 */
const LENSES=[
  {n:'FE 50-150mm F2 GM', el:'19/17',sp:'2 XA · 2 Super ED · 3 ED',m:4,mt:'XD',f:[50,150], N:2, b:11, g:1340, mf:[.4,.74], zh:'本站默认演示镜头：人像长焦变焦，全程 F2', en:'This site\'s default demo lens: portrait tele zoom, constant F2'},
  {n:'FE 16-35mm F2.8 GM II', el:'15/12',sp:'5 asph (3 XA) · 1 Super ED · 2 ED',m:4,mt:'XD',f:[16,35], N:2.8, b:11, g:547, mf:[.22,.22], zh:'超广角：风光、建筑、星空', en:'Ultra-wide: landscape, architecture, astro'},
  {n:'FE 24mm F1.4 GM', el:'13/10',sp:'2 XA · 3 ED',m:1,mt:'DDSSM',f:[24], N:1.4, b:11, g:445, mf:[.24], zh:'广角定焦：星空、环境人像、街拍', en:'Wide prime: astro, environmental portrait, street'},
  {n:'FE 24-70mm F2.8 GM II', el:'20/15',sp:'5 asph (2 XA) · 2 Super ED · 2 ED',m:4,mt:'XD',f:[24,70], N:2.8, b:11, g:695, mf:[.21,.30], zh:'标准变焦：一支走天下', en:'Standard zoom: the do-everything lens'},
  {n:'FE 50mm F1.2 GM', el:'14/10',sp:'3 XA',m:4,mt:'XD',f:[50], N:1.2, b:11, g:778, mf:[.40], zh:'标准大光圈：人像、暗光，虚化最强的标头', en:'Fast standard: portrait, low light, strongest-bokeh 50'},
  {n:'FE 85mm F1.8', el:'9/8',sp:'ED',m:1,mt:'DLM',f:[85], N:1.8, b:9, g:371, mf:[.80], zh:'人像定焦：便宜轻巧的虚化入门', en:'Portrait prime: light, affordable bokeh starter'},
  {n:'FE 90mm F2.8 Macro G OSS', el:'15/11',sp:'Super ED',m:2,mt:'DDSSM',f:[90], N:2.8, b:9, g:602, mf:[.28], zh:'微距：1:1 放大，花、昆虫、产品', en:'Macro: 1:1 magnification, flowers, insects, products'},
  {n:'FE 135mm F1.8 GM', el:'13/10',sp:'XA · 1 Super ED · 1 ED',m:4,mt:'XD',f:[135], N:1.8, b:11, g:950, mf:[.70], zh:'中长焦人像：背景压缩 + 奶油虚化', en:'Tele portrait: background compression + creamy bokeh'},
  {n:'FE 70-200mm F2.8 GM OSS II', el:'17/14',sp:'XA · ED asph · 2 Super ED · 2 ED',m:4,mt:'XD',f:[70,200], N:2.8, b:11, g:1045, mf:[.40,.82], zh:'长焦变焦：活动、舞台、人像', en:'Tele zoom: events, stage, portrait'},
  {n:'FE 200-600mm F5.6-6.3 G OSS', el:'24/17',sp:'5 ED · 1 asph',m:1,mt:'DDSSM',f:[200,600], N:5.6, N2:6.3, b:11, g:2115, mf:[2.4,2.4], zh:'超长焦变焦：鸟类、野生动物、体育（性价比）', en:'Super-tele zoom: birds, wildlife, sports (value)'},
  {n:'FE 400mm F2.8 GM OSS', el:'23/17',sp:'3 fluorite',m:2,mt:'XD',fl:1,f:[400], N:2.8, b:11, g:2895, mf:[2.7], zh:'超长焦大光圈：职业体育、暗光运动', en:'Fast super-tele: pro sports, low-light action'},
  {n:'FE 600mm F4 GM OSS', el:'24/18',sp:'3 fluorite · 1 XA',m:2,mt:'XD',fl:1,f:[600], N:4, b:11, g:3040, mf:[4.5], zh:'超长焦大光圈：远距离鸟类、野生动物', en:'Fast super-tele: distant birds, wildlife'},
];
let LENS=LENSES[0];
const lensZ=f=>LENS.f.length>1?(f-LENS.f[0])/(LENS.f[1]-LENS.f[0]):0;                  // 焦段内位置 0..1
const lensMinN=f=>LENS.N2?LENS.N+(LENS.N2-LENS.N)*lensZ(f):LENS.N;                     // 当前焦距下的最大光圈
/* 画面比例：像方 1 单位 = U mm 只适合 50-150 mm；超长焦压缩、超广角放大，让光圈始终落在镜筒里 */
const lensU=()=>U*Math.max(LENS.f[LENS.f.length-1]/150,Math.min(1,LENS.f[0]/50));
const LIGHTS=[-1.2,-.8,-.4,0,.4,.8,1.2].map((X,i)=>({X,c:['#ffd27a','#ff9d6b','#ffe9b0','#ff7f9a','#ffd27a','#9ad0ff','#ffb35c'][i]}));
const ballX=t=>.25*Math.sin(t*4.2), ballV=t=>.25*4.2*Math.cos(t*4.2);       // 小球：m，m/s
const std=(color,o={})=>new THREE.MeshStandardMaterial({color,roughness:.8,...o});
function add(g,geo,mat,x,y,z){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);g.add(m);return m;}

const sun=new THREE.DirectionalLight(0xfff0cc,1.25);sun.position.copy(SUN);sun.target.position.set(-18,0,0);sun.castShadow=true;
Object.assign(sun.shadow.camera,{left:-16,right:16,top:12,bottom:-12,far:60});macro.add(sun,sun.target);
add(macro,new THREE.SphereGeometry(.7,24,16),basic(0xffd66b),SUN.x,SUN.y,SUN.z);
const ground=add(macro,new THREE.PlaneGeometry(50,30),std(0x18222f,{roughness:1}),-12,-.75,0);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;
const srcCv=mkCanvas(384,256);drawScene(srcCv.getContext('2d'),384,256);
const backdrop=add(macro,new THREE.PlaneGeometry(6.4*K,4.27*K),std(0xffffff,{map:new THREE.CanvasTexture(srcCv)}),sx(8)-.4,0,0);backdrop.rotation.y=Math.PI/2;
LIGHTS.forEach(l=>add(macro,new THREE.SphereGeometry(.13,12,8),basic(new THREE.Color(l.c)),sx(8),.4*K,l.X*K));
{const x=sx(3);add(macro,new THREE.CylinderGeometry(.3,.33,.75,20),std(0xe8823a),x,-.22,0).castShadow=true;add(macro,new THREE.SphereGeometry(.24,20,14),std(0xf2d3b1),x,.36,0).castShadow=true;add(macro,new THREE.BoxGeometry(.9,.15,.9),std(0x39455a),x,-.67,0);}
const ball3=add(macro,new THREE.SphereGeometry(.09,14,10),std(0x4c8dff),sx(3),-.3,0);
[[0,0,0],[.12,.14,.1],[-.1,.1,-.12],[.02,.24,-.02]].forEach(([a,b,c])=>add(macro,new THREE.SphereGeometry(.17,12,8),std(0x3fa55a),sx(1.2)+a,-.24+b,-.3+c).castShadow=true);
add(macro,new THREE.CylinderGeometry(.03,.03,.5,8),std(0x2f6b3d),sx(1.2),-.5,-.3);

const lensG=new THREE.Group();macro.add(lensG);
const glassMat=new THREE.MeshPhongMaterial({color:0xa9d4ff,transparent:true,opacity:.26,shininess:120,specular:0xffffff,depthWrite:false});
const elem=(r,th)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(r,36,20),glassMat);m.scale.x=th/r;lensG.add(m);return m;};
const G={front:elem(1.85,.34),vari:elem(1.3,.16),comp:elem(1.2,.22),focA:elem(1.0,.14),focB:elem(1.0,.18),rear:elem(.95,.24)};
G.front.position.x=-8.3;G.rear.position.x=-1.15;
const barrel=new THREE.Mesh(new THREE.CylinderGeometry(2.06,2.06,8,48,1,true,0,Math.PI),std(0xe9e6df,{transparent:true,opacity:.3,side:THREE.DoubleSide,depthWrite:false}));barrel.rotation.z=Math.PI/2;barrel.rotation.x=Math.PI/2;barrel.position.x=-4.72;lensG.add(barrel);
const irisMat=std(0x10151d,{side:THREE.DoubleSide,metalness:.6,roughness:.5});
const irisMat2=std(0x2a3240,{side:THREE.DoubleSide,metalness:.6,roughness:.45}),irisMat3=std(0x1c2230,{side:THREE.DoubleSide,metalness:.6,roughness:.5});
const iris=new THREE.Mesh(new THREE.BufferGeometry(),[irisMat,irisMat2,irisMat3]);iris.rotation.y=Math.PI/2;lensG.add(iris);
/* 11 片光圈叶片的分界线：11 条辐射线从光圈内缘到镜筒 */
const BLADES=11;
const irisSeams=new THREE.LineSegments(
  new THREE.BufferGeometry().setAttribute('position',new THREE.BufferAttribute(new Float32Array(BLADES*6),3)),
  new THREE.LineBasicMaterial({color:0xaab6cc})
);
irisSeams.rotation.y=Math.PI/2;lensG.add(irisSeams);
const plane=new THREE.Mesh(new THREE.TorusGeometry(1.95,.02,8,64),basic(0xffc45c));plane.rotation.y=Math.PI/2;lensG.add(plane);
/* 机身：主体仍是线框（保留剖视感），再加取景器凸起、手柄、快门按钮、模式转盘和卡口环 */
const bodyLn=new THREE.LineBasicMaterial({color:0x56657e});
const body=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.3,3.8,5.2)),bodyLn);body.position.set(.43,0,0);macro.add(body);
const edgeAt=(geo,x,y,z)=>{const o=new THREE.LineSegments(new THREE.EdgesGeometry(geo),bodyLn);o.position.set(x,y,z);macro.add(o);return o;};
edgeAt(new THREE.BoxGeometry(1.8,.45,1.2),.43,2.13,-1.1);                                               // 取景器凸起
edgeAt(new THREE.BoxGeometry(2.3,3.0,.7),.43,-.2,2.95);                                                 // 手柄凸起
const shutterBtn=add(macro,new THREE.CylinderGeometry(.14,.14,.14,20),std(0xc8c8c8,{metalness:.65,roughness:.35}),.43,2.07,2.6);shutterBtn.castShadow=true;
const dial=add(macro,new THREE.CylinderGeometry(.42,.42,.22,24),std(0x8a8d93,{metalness:.4,roughness:.45}),.43,2.01,1.45);dial.castShadow=true;
const lensMount=add(macro,new THREE.TorusGeometry(1.1,.08,10,36),std(0x0e1115,{metalness:.7,roughness:.3}),-.73,0,0);lensMount.rotation.y=Math.PI/2;
add(macro,new THREE.SphereGeometry(.06,10,8),std(0xd9483b),-.69,-1.15,0);                               // 卡口对齐红点
label(macro,'取景器凸起',V(.43,2.5,-1.1));label(macro,'手柄',V(.43,.1,3.35));
label(macro,'快门按钮',V(.43,2.5,2.6));label(macro,'模式转盘',V(.43,2.3,1.45));label(macro,'镜头卡口',V(-.73,1.4,0));
const vf=$('vf'), senTex=new THREE.CanvasTexture(vf), senMat=basic(0xffffff,{map:senTex,side:THREE.DoubleSide});
const senG=new THREE.Group();senG.rotation.x=Math.PI;macro.add(senG);                                   // 绕光轴转 180° = 倒立的像
add(senG,new THREE.BoxGeometry(.06,1.1,1.6),std(0x0a0d12),.04,0,0);
const senImg=add(senG,new THREE.PlaneGeometry(1.44,.96),senMat,0,0,0);senImg.rotation.y=-Math.PI/2;senImg.scale.x=-1;
const shutter=add(macro,new THREE.BoxGeometry(.03,1.15,1.65),std(0x2c3545,{metalness:.7,roughness:.4}),-.16,1.3,0);
const fplane=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(3.2,2.4)),new THREE.LineBasicMaterial({color:0x4fd8e8}));fplane.rotation.y=Math.PI/2;macro.add(fplane);
const frustum=new THREE.LineSegments(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0xffe27a,transparent:true,opacity:.5}));frustum.geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(48),3));macro.add(frustum);
label(macro,'太阳',SUN.clone().add(V(0,1.1,0)));OBJ.forEach(o=>label(macro,`${o.n}（${o.d} m）`,V(sx(o.d),o.d===8?1.9:1.1,o.d===1.2?-.3:0)));
label(macro,'FE 50-150mm F2 GM',V(-4.7,2.45,0));const lensLbl=labels[labels.length-1].el;label(macro,'全画幅 CMOS',V(0,-.85,0));label(macro,'快门',V(-.16,2.1,0));
const LV={vari:label(macro,'变焦组',V()),foc:label(macro,'对焦组',V()),pl:label(macro,'等效主平面 + 光圈',V()),fp:label(macro,'对焦平面',V())};
/* 第 7 步「镜头里的每片镜片」才显示的镜组标注（示意分工，不是真实光学设计）；可见性由 STEPS 的 lg:'parts' 控制 */
const partsL=new THREE.Group();partsL.visible=false;macro.add(partsL);
const LPT={front:label(partsL,'前组',V()),comp:label(partsL,'补偿组',V()),rear:label(partsL,'后组',V())};

const NR=7, PH=3, NRAY=OBJ.length*NR;
const rayGeo=new THREE.BufferGeometry();rayGeo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(NRAY*18),3));
{const rc=new Float32Array(NRAY*18);OBJ.forEach((o,p)=>{const c=new THREE.Color(o.c);for(let i=0;i<NR*18;i+=3)c.toArray(rc,p*NR*18+i)});rayGeo.setAttribute('color',new THREE.BufferAttribute(rc,3));}
macro.add(new THREE.LineSegments(rayGeo,new THREE.LineBasicMaterial({vertexColors:true,transparent:true,opacity:.45})));
const photons=new THREE.InstancedMesh(new THREE.SphereGeometry(.05,8,6),basic(0xffffff),NRAY*PH);macro.add(photons);
OBJ.forEach((o,p)=>{for(let i=0;i<NR*PH;i++)photons.setColorAt(p*NR*PH+i,new THREE.Color(o.c))});

const st={f:85,s:3,coc:[0,0,0],gain:1};let paths=[];
const mfd=f=>{const m=LENS.mf;return m.length>1?m[0]+(m[1]-m[0])*lensZ(f):m[0];}, img=(f,d)=>f*d*1000/(d*1000-f);          // 像距 mm（d 用 m）
function rebuild(){
  const f=st.f=+$('zo').value, m=mfd(f);st.s=Math.max(st.s,m);$('fo').value=Math.log(st.s/m)/Math.log(30/m);
  const s=st.s, N=st.N=Math.round(Math.max(NS[+$('ap').value],lensMinN(f))*10)/10, t=st.t=TS[+$('sh').value], iso=st.iso=ISOS[+$('iso').value];
  const Ul=lensU(), B=LENS.b, vs=st.vs=img(f,s), xL=-vs/Ul, R=Math.min(1.85,f/(2*N)/Ul), z=lensZ(f), fo=(1/s-1/30)/(1/m-1/30);
  G.vari.position.x=-7.3+2.3*z;G.comp.position.x=-4.7+.5*Math.sin(Math.PI*z);G.focA.position.x=-3.3-.5*fo;G.focB.position.x=-2.2+.35*fo;
  /* 每个 theta 段就是一片叶片：内缘是 11 边形（收光圈时光斑就是这个形状），三色交替让叶片分得开 */
  iris.geometry.dispose();iris.geometry=new THREE.RingGeometry(R,1.95,B,1);
  iris.geometry.clearGroups();for(let i=0;i<B;i++)iris.geometry.addGroup(6*i,6,B%3===1&&i===B-1?1:i%3);
  iris.position.x=plane.position.x=xL;
  {const sp=irisSeams.geometry.attributes.position.array;
   for(let i=0;i<B;i++){const a=2*Math.PI*i/B,c=Math.cos(a),s=Math.sin(a);
     sp[i*6]=c*R;sp[i*6+1]=s*R;sp[i*6+2]=0;sp[i*6+3]=c*1.95;sp[i*6+4]=s*1.95;sp[i*6+5]=0;}
   irisSeams.geometry.setDrawRange(0,B*2);irisSeams.geometry.attributes.position.needsUpdate=true;irisSeams.position.x=xL;}
  LV.vari.set(G.vari.position.x,-1.6,0);LV.foc.set(-2.75,-1.3,0);LV.pl.set(xL,2.2,.9);
  LPT.front.set(G.front.position.x,-2.25,0);LPT.comp.set(G.comp.position.x,-2.6,0);LPT.rear.set(G.rear.position.x,1.3,0);
  fplane.position.x=sx(s);LV.fp.set(sx(s),-1.4,1.6);
  paths=[];const pos=rayGeo.attributes.position.array;let o=0;
  OBJ.forEach((ob,k)=>{const vd=img(f,ob.d), P=V(sx(ob.d),ob.Y*K,0), I=V(xL+vd/Ul,-ob.Y*vd/ob.d/Ul,0);st.coc[k]=f/N*Math.abs(vs-vd)/vd;
    for(let j=0;j<NR;j++){const a=j*Math.PI/3, r=j?R*.94:0, Q=V(xL,r*Math.sin(a),r*Math.cos(a)), S=Q.clone().add(I.clone().sub(Q).multiplyScalar(vs/vd));
      [[SUN,P],[P,Q],[Q,S]].forEach(([A,B])=>{A.toArray(pos,o);B.toArray(pos,o+3);o+=6});
      const pts=[SUN,P,Q,S], len=[0];for(let i=1;i<4;i++)len[i]=len[i-1]+pts[i].distanceTo(pts[i-1]);paths.push({pts,len});}});
  rayGeo.attributes.position.needsUpdate=true;
  {const h=12*8/img(f,8)*K, w=h*1.5, x=sx(8)-.3, c=[[h,w],[h,-w],[-h,-w],[-h,w]], a=frustum.geometry.attributes.position.array;let i=0;
   c.forEach(([y,zz],n)=>{a.set([xL,0,0,x,y,zz],i);i+=6;const q=c[(n+1)%4];a.set([x,y,zz,x,q[0],q[1]],i);i+=6;});frustum.geometry.attributes.position.needsUpdate=true;}
  const ev=st.ev=Math.log2(t*250*iso/100*4/(N*N));st.gain=Math.min(5,Math.max(.03,2**(ev/2.2)));
  const H=f*f/(N*.03)+f, sm=s*1000, near=sm*(H-f)/(H+sm-2*f), far=sm<H?sm*(H-f)/(H-sm):Infinity, fm=x=>isFinite(x)?(x/1000).toFixed(2)+' m':'∞';
  $('zoo').value=f+' mm';$('foo').value=s>=29.9?'30 m（近似 ∞）':s.toFixed(2)+' m';$('apo').value='f/'+N;$('sho').value=TN[+$('sh').value]+' s';$('isoo').value=iso;
  $('hud').textContent=`对角视角 ${(2*Math.atan(21.63/vs)*180/Math.PI).toFixed(1)}°　入瞳直径 ${(f/N).toFixed(1)} mm
像距 v = ${vs.toFixed(1)} mm　最近对焦 ${m.toFixed(2)} m
景深 ${fm(near)} – ${fm(far)}（弥散圆 0.03 mm）
弥散圆：前景 ${st.coc[0].toFixed(2)} · 主体 ${st.coc[1].toFixed(2)} · 背景 ${st.coc[2].toFixed(2)} mm
曝光 ${Math.abs(ev)<.05?'正确':(ev>0?'过曝 +':'欠曝 −')+Math.abs(ev).toFixed(1)+' 档'}
衍射艾里斑 ${(2.44*.55*N).toFixed(1)} µm（3.76 µm 像素约 ${(2.44*.55*N/3.76).toFixed(1)} 格）`;
  drawAiry();
}
['zo','ap','sh','iso'].forEach(id=>$(id).oninput=rebuild);
/* 换镜头：焦段、最大光圈、最近对焦、叶片数都换成这支镜头的 */
function selectLens(i){
  LENS=LENSES[i];
  const zo=$('zo'), ap=$('ap'), [f0,f1=f0]=LENS.f;
  zo.min=f0;zo.max=f1;zo.value=Math.min(f1,Math.max(f0,+zo.value));zo.disabled=f0===f1;
  const k=NS.findIndex(n=>n>=LENS.N-.01);ap.min=k;ap.max=NS.length-1;ap.value=Math.max(k,+ap.value);
  $('lens').value=i;lensLbl.textContent=LENS.n;
  rebuild();
  if(typeof renderLensDb==='function')renderLensDb();
}
$('lens').innerHTML=LENSES.map((l,i)=>`<option value="${i}">${l.n}</option>`).join('');
$('lens').onchange=e=>selectLens(+e.target.value);
$('fo').oninput=()=>{const m=mfd(st.f);st.s=m*(30/m)**+$('fo').value;rebuild();};
document.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{st.s=+b.dataset.s;rebuild();});

/* ---------- 取景器：三层按各自的放大率、弥散圆、快门时间、ISO 实时合成 ---------- */
const W=360,HH=240,PX=10, sc=mkCanvas(W,HH), sg=sc.getContext('2d'), vg=vf.getContext('2d'), noise=mkCanvas(W*2,HH*2);
{const n=noise.getContext('2d'), d=n.createImageData(W*2,HH*2);for(let i=0;i<d.data.length;i+=4){d.data[i]=d.data[i+1]=d.data[i+2]=Math.random()*255;d.data[i+3]=255;}n.putImageData(d,0,0);}
const canBlur='filter' in sg;
function drawVF(t){const f=st.f, cx=W/2, cy=HH/2, ppm=d=>img(f,d)/d*PX, bl=k=>canBlur?`blur(${(st.coc[k]*PX/2.4).toFixed(2)}px)`:'none';
  sg.globalCompositeOperation='source-over';sg.filter='none';sg.fillStyle='#000';sg.fillRect(0,0,W,HH);
  let p=ppm(8);sg.filter=bl(2);sg.drawImage(srcCv,cx-3.2*p,cy-2.135*p,6.4*p,4.27*p);sg.filter='none';
  sg.globalCompositeOperation='lighter';const r=Math.max(1.6,st.coc[2]*PX/2);sg.globalAlpha=Math.min(1,Math.max(.22,14/(r*r)));
  LIGHTS.forEach(l=>{const lx=cx+l.X*p,ly=cy-.4*p,dx=lx-cx,dy=ly-cy,dl=Math.hypot(dx,dy)||1,cut=Math.min(1,Math.max(0,1-(st.N-2)/3.6))*Math.min(1,dl/Math.hypot(cx,cy))*1.3;sg.save();
    if(cut>.02){sg.beginPath();sg.arc(lx-dx/dl*r*cut,ly-dy/dl*r*cut,r*1.02,0,7);sg.clip();}   // 猫眼：镜筒挡掉边缘光斑的外侧
    sg.fillStyle=l.c;sg.beginPath();for(let i=0;i<LENS.b;i++){const a=i/LENS.b*6.2832+.3;sg.lineTo(lx+r*Math.cos(a),ly+r*Math.sin(a));}sg.fill();
    if(st.ab&&r>5){sg.strokeStyle='rgba(255,255,255,.35)';sg.lineWidth=1;[.35,.6,.82].forEach(k=>{sg.beginPath();sg.arc(lx,ly,r*k,0,7);sg.stroke();});}sg.restore();});
  sg.globalAlpha=1;sg.globalCompositeOperation='source-over';
  p=ppm(3);sg.filter=bl(1);sg.fillStyle='#39455a';sg.fillRect(cx-.15*p,cy+.2*p,.3*p,.05*p);sg.fillStyle='#e8823a';sg.fillRect(cx-.1*p,cy-.05*p,.2*p,.25*p);
  sg.fillStyle='#f2d3b1';sg.beginPath();sg.arc(cx,cy-.12*p,.08*p,0,7);sg.fill();
  const bx=cx+ballX(t)*p, L=Math.abs(ballV(t))*st.t*p, br=.03*p;sg.strokeStyle='#4c8dff';sg.lineCap='round';sg.lineWidth=2*br;sg.globalAlpha=Math.min(1,2*br/(2*br+L));
  sg.beginPath();sg.moveTo(bx-L/2,cy+.1*p);sg.lineTo(bx+L/2+.01,cy+.1*p);sg.stroke();sg.globalAlpha=1;
  p=ppm(1.2);sg.filter=bl(0);sg.fillStyle='#3fa55a';[[0,0],[.04,-.05],[-.035,-.035],[.005,-.08]].forEach(([a,b])=>{sg.beginPath();sg.arc(cx+(-.1+a)*p,cy+(.08+b)*p,.057*p,0,7);sg.fill();});sg.filter='none';
  vg.globalCompositeOperation='source-over';vg.globalAlpha=1;vg.filter=canBlur?`brightness(${st.gain.toFixed(3)})`:'none';vg.drawImage(sc,0,0);vg.filter='none';
  vg.globalCompositeOperation='overlay';vg.globalAlpha=Math.min(.75,.035*Math.sqrt(st.iso/100)*2);vg.drawImage(noise,-Math.random()*W,-Math.random()*HH);vg.globalAlpha=1;vg.globalCompositeOperation='source-over';if(st.ab)applyAb();}
let shot=null;                                                                // 拍照动画：关 → 开 t → 关 → 开
$('shoot').onclick=()=>{if(!shot)shot={t:0,open:.3+Math.min(1.2,st.t*4.8),done:false};};
