/* 镜头、景物、传感器与取景器（第 1–7 步的宏观场景） */
/* ---------- 宏观：场景三层 + FE 50-150mm F2 GM + 机身 ---------- */
/* 像方（镜头到传感器）按真实比例：1 单位 = 25 mm，传感器在 x=0。物方距离压缩绘制。 */
const U=25, K=3, SUN=V(-20,13,9);
const sx=d=>-10.5-14.5*Math.log(d/.4)/Math.log(20);                      // 真实距离 d(m) → 画在哪
const OBJ=[{n:'前景',d:1.2,Y:-.04,c:0xff6fae},{n:'主体',d:3,Y:.12,c:0xffffff},{n:'背景灯',d:8,Y:.4,c:0xffc45c}];
const NS=[2,2.8,4,5.6,8,11,16,22], TS=[1/4,1/15,1/60,1/250,1/1000,1/4000,1/8000], TN=['1/4','1/15','1/60','1/250','1/1000','1/4000','1/8000'], ISOS=[100,200,400,800,1600,3200,6400,12800];
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
const iris=new THREE.Mesh(new THREE.BufferGeometry(),irisMat);iris.rotation.y=Math.PI/2;lensG.add(iris);
const plane=new THREE.Mesh(new THREE.TorusGeometry(1.95,.02,8,64),basic(0xffc45c));plane.rotation.y=Math.PI/2;lensG.add(plane);
const body=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.3,3.8,5.2)),new THREE.LineBasicMaterial({color:0x56657e}));body.position.set(.43,0,0);macro.add(body);
const vf=$('vf'), senTex=new THREE.CanvasTexture(vf), senMat=basic(0xffffff,{map:senTex,side:THREE.DoubleSide});
const senG=new THREE.Group();senG.rotation.x=Math.PI;macro.add(senG);                                   // 绕光轴转 180° = 倒立的像
add(senG,new THREE.BoxGeometry(.06,1.1,1.6),std(0x0a0d12),.04,0,0);
const senImg=add(senG,new THREE.PlaneGeometry(1.44,.96),senMat,0,0,0);senImg.rotation.y=-Math.PI/2;senImg.scale.x=-1;
const shutter=add(macro,new THREE.BoxGeometry(.03,1.15,1.65),std(0x2c3545,{metalness:.7,roughness:.4}),-.16,1.3,0);
const fplane=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(3.2,2.4)),new THREE.LineBasicMaterial({color:0x4fd8e8}));fplane.rotation.y=Math.PI/2;macro.add(fplane);
const frustum=new THREE.LineSegments(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0xffe27a,transparent:true,opacity:.5}));frustum.geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(48),3));macro.add(frustum);
label(macro,'太阳',SUN.clone().add(V(0,1.1,0)));OBJ.forEach(o=>label(macro,`${o.n}（${o.d} m）`,V(sx(o.d),o.d===8?1.9:1.1,o.d===1.2?-.3:0)));
label(macro,'FE 50-150mm F2 GM',V(-4.7,2.45,0));label(macro,'全画幅 CMOS',V(0,-.85,0));label(macro,'快门',V(-.16,2.1,0));
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
const mfd=f=>.4+(f-50)/100*.34, img=(f,d)=>f*d*1000/(d*1000-f);          // 像距 mm（d 用 m）
function rebuild(){
  const f=st.f=+$('zo').value, m=mfd(f);st.s=Math.max(st.s,m);$('fo').value=Math.log(st.s/m)/Math.log(30/m);
  const s=st.s, N=st.N=NS[+$('ap').value], t=st.t=TS[+$('sh').value], iso=st.iso=ISOS[+$('iso').value];
  const vs=st.vs=img(f,s), xL=-vs/U, R=f/(2*N)/U, z=(f-50)/100, fo=(1/s-1/30)/(1/m-1/30);
  G.vari.position.x=-7.3+2.3*z;G.comp.position.x=-4.7+.5*Math.sin(Math.PI*z);G.focA.position.x=-3.3-.5*fo;G.focB.position.x=-2.2+.35*fo;
  iris.geometry.dispose();iris.geometry=new THREE.RingGeometry(R,1.95,11);iris.position.x=plane.position.x=xL;
  LV.vari.set(G.vari.position.x,-1.6,0);LV.foc.set(-2.75,-1.3,0);LV.pl.set(xL,2.2,.9);
  LPT.front.set(G.front.position.x,-2.25,0);LPT.comp.set(G.comp.position.x,-2.05,0);LPT.rear.set(G.rear.position.x,1.3,0);
  fplane.position.x=sx(s);LV.fp.set(sx(s),-1.4,1.6);
  paths=[];const pos=rayGeo.attributes.position.array;let o=0;
  OBJ.forEach((ob,k)=>{const vd=img(f,ob.d), P=V(sx(ob.d),ob.Y*K,0), I=V(xL+vd/U,-ob.Y*vd/ob.d/U,0);st.coc[k]=f/N*Math.abs(vs-vd)/vd;
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
  LIGHTS.forEach(l=>{const lx=cx+l.X*p,ly=cy-.4*p,dx=lx-cx,dy=ly-cy,dl=Math.hypot(dx,dy)||1,cut=Math.max(0,1-(st.N-2)/3.6)*Math.min(1,dl/Math.hypot(cx,cy))*1.3;sg.save();
    if(cut>.02){sg.beginPath();sg.arc(lx-dx/dl*r*cut,ly-dy/dl*r*cut,r*1.02,0,7);sg.clip();}   // 猫眼：镜筒挡掉边缘光斑的外侧
    sg.fillStyle=l.c;sg.beginPath();for(let i=0;i<11;i++){const a=i/11*6.2832+.3;sg.lineTo(lx+r*Math.cos(a),ly+r*Math.sin(a));}sg.fill();
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
