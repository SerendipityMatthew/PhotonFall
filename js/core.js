/* 基础：DOM 取值、景物图、three.js 场景与相机 */
const $=id=>document.getElementById(id), V=(x,y,z)=>new THREE.Vector3(x,y,z);

/* ---------- 调色板（与 css/style.css :root 变量同值，硬编码避免运行时读 CSS） ---------- */
const PAL={paper:'#f7f3ea',ink:'#2a2622',dim:'#6b6359',grid:'#ddd3c2',accent:'#c8502d',r:'#ef5a5f',g:'#48c26a',b:'#5a95ff',cyan:'#007295',amber:'#9a6200'};

/* ---------- 场景图片（景物、传感器上的像、ISP 演示共用） ---------- */
function drawScene(c,w,h){const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#3d7fd9');g.addColorStop(.65,'#bfe0ff');c.fillStyle=g;c.fillRect(0,0,w,h);
  c.fillStyle='#ffe27a';c.beginPath();c.arc(w*.2,h*.22,h*.1,0,7);c.fill();
  c.fillStyle='#6b7f99';c.beginPath();c.moveTo(w*.3,h*.7);c.lineTo(w*.62,h*.25);c.lineTo(w*.95,h*.7);c.fill();
  c.fillStyle='#4f9a52';c.fillRect(0,h*.68,w,h*.32);
  c.fillStyle='#d9483b';c.fillRect(w*.12,h*.56,w*.2,h*.24);c.fillStyle='#7a2a22';c.beginPath();c.moveTo(w*.09,h*.57);c.lineTo(w*.22,h*.42);c.lineTo(w*.35,h*.57);c.fill();
  c.fillStyle='#f4f1e6';c.fillRect(w*.19,h*.66,w*.06,h*.14);}
const mkCanvas=(w,h)=>Object.assign(document.createElement('canvas'),{width:w,height:h});

/* ---------- three 基础 ---------- */
const view=$('view'), renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.setClearColor(0x0d1420);
view.prepend(renderer.domElement);
const scene=new THREE.Scene(), cam=new THREE.PerspectiveCamera(45,1,.1,200), ctr=new THREE.OrbitControls(cam,renderer.domElement);
ctr.enableDamping=true;let tween=true;ctr.addEventListener('start',()=>tween=false);
/* 触控板：双指滑动只平移（上下左右都是），捏合才缩放；鼠标滚轮仍是缩放。
   一次手势里锁定模式（停 200 ms 算新手势），平移途中不会混进缩放。 */
let wheelMode='pan', wheelT=0;
view.addEventListener('wheel',e=>{if(e.ctrlKey)return;                       // 捏合：交给 OrbitControls 缩放
  const now=performance.now();
  if(now-wheelT>200)wheelMode=e.deltaMode===1||(e.deltaX===0&&Number.isInteger(e.deltaY)&&Math.abs(e.deltaY)>=50)?'zoom':'pan';   // ponytail: 鼠标滚轮按步长猜，猜错只影响一次手势
  wheelT=now;if(wheelMode==='zoom')return;
  e.preventDefault();e.stopPropagation();tween=false;
  const k=cam.position.distanceTo(ctr.target)*.0015, d=new THREE.Vector3().setFromMatrixColumn(cam.matrix,0).multiplyScalar(e.deltaX*k).add(new THREE.Vector3().setFromMatrixColumn(cam.matrix,1).multiplyScalar(-e.deltaY*k));
  cam.position.add(d);ctr.target.add(d);},{capture:true,passive:false});
new ResizeObserver(()=>{const w=view.clientWidth,h=view.clientHeight;renderer.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix()}).observe(view);
scene.add(new THREE.AmbientLight(0x8899bb,.55));
const macro=new THREE.Group(), micro=new THREE.Group(), tx=new THREE.Group();scene.add(macro,micro,tx);
const labels=[];function label(g,text,v){const el=document.createElement('div');el.className='lb';el.textContent=text;view.appendChild(el);labels.push({g,el,v});return v;}
const basic=(color,o={})=>new THREE.MeshBasicMaterial({color,...o});
