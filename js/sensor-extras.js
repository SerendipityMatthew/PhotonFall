/* 滤色片透光曲线、微透镜偏移、四合一 */
/* ---------- 滤色片透光曲线（示意形状） ---------- */
{const c=cx2('spec'),Wc=330,Hc=190,L=34,B=24,X=l=>L+(l-380)/(1000-380)*(Wc-L-8),Y=v=>Hc-B-v*(Hc-B-40);
 c.fillStyle=PAL.paper;c.fillRect(0,0,Wc,Hc);
 c.font=FONT;c.strokeStyle=PAL.grid;c.fillStyle=PAL.dim;c.lineWidth=1;
 for(let l=400;l<=1000;l+=100){c.beginPath();c.moveTo(X(l),40);c.lineTo(X(l),Hc-B);c.stroke();c.fillText(l,X(l)-10,Hc-B+13);}c.fillText('波长 nm',Wc-52,Hc-2);
 [0,.5,1].forEach(v=>{c.beginPath();c.moveTo(L,Y(v));c.lineTo(Wc-8,Y(v));c.stroke();c.fillText(v*100+'%',2,Y(v)+4);});
 const sig=(l,a,w)=>1/(1+Math.exp(-(l-a)/w)), ir=l=>.85*sig(l,760,22);
 const plot=(f,col,dash)=>{c.strokeStyle=col;c.setLineDash(dash||[]);c.lineWidth=2;c.beginPath();for(let l=380;l<=1000;l+=2)c.lineTo(X(l),Y(Math.max(0,f(l))));c.stroke();c.setLineDash([]);};
 plot(l=>Math.max(.9*sig(l,588,12),ir(l)),PAL.r);plot(l=>Math.max(.82*Math.exp(-(((l-535)/42)**2)),.95*ir(l)),PAL.g);plot(l=>Math.max(.86*Math.exp(-(((l-455)/36)**2)),.9*ir(l)),PAL.b);
 plot(l=>.8*Math.exp(-(((l-620)/250)**2))*(1-Math.exp(-(1110-l)/60)),PAL.dim,[4,3]);plot(l=>1-sig(l,665,8),PAL.cyan,[2,3]);
 c.fillStyle=PAL.ink;c.fillText('红 · 绿 · 蓝：三种滤色片的透过率',L,12);c.fillText('灰虚线：硅的量子效率',L,25);c.fillStyle=PAL.cyan;c.fillText('青虚线：红外截止滤光片',L+150,25);}

/* ---------- 微透镜偏移 ---------- */
const mls=new THREE.Group();mls.visible=false;scene.add(mls);
{const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(2,8,6);mls.add(l);}
const CRA=[0,8,16,24,32], MH=1.55, MLS=[];let mlsOn=false;
const mlsRays=new THREE.LineSegments(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0xffc45c,transparent:true,opacity:.5}));mls.add(mlsRays);
const mlsPh=new THREE.InstancedMesh(new THREE.SphereGeometry(.05,8,6),basic(0xffc45c),25);mls.add(mlsPh);
CRA.forEach((a,i)=>{const x=i*2.7-5.4,o={x,a:a*Math.PI/180};
  add(mls,new THREE.BoxGeometry(2.6,.9,1.6),std(0x353a48,{transparent:true,opacity:.4,depthWrite:false}),x,.45,0);add(mls,new THREE.BoxGeometry(1.6,.8,1.3),std(0x3b82f6),x,.45,0);
  o.ml=add(mls,new THREE.SphereGeometry(1.2,32,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.3,shininess:100,depthWrite:false}),x,2.3,0);o.ml.scale.set(1,.45,.6);
  o.cf=add(mls,new THREE.BoxGeometry(2.4,.14,1.5),std(BAY[1],{transparent:true,opacity:.5,depthWrite:false}),x,2.2,0);
  o.spot=add(mls,new THREE.CylinderGeometry(.3,.3,.04,24),basic(0xfff1b8,{transparent:true,opacity:.85}),x,.92,0);
  label(mls,`主光线角 ${a}°`,V(x,4.6,0));label(mls,'',V(x,-.35,.85));o.el=labels[labels.length-1].el;MLS.push(o);});
label(mls,'传感器中心',V(-5.4,5.3,0));label(mls,'越往边缘，光越斜 →',V(0,5.3,0));label(mls,'传感器边缘',V(5.4,5.3,0));
function rebuildMls(){const p=[];MLS.forEach(o=>{const tn=Math.tan(o.a),mx=o.x-(mlsOn?MH*tn:0),F=mx+MH*tn;o.ml.position.x=o.cf.position.x=mx;o.spot.position.x=F;
  const ov=Math.max(0,Math.min(F+.3,o.x+.8)-Math.max(F-.3,o.x-.8))/.6;o.el.textContent=`PD 收到 ${Math.round(ov*100)}%`;o.spot.material.color.setHex(ov>.95?0xfff1b8:0xff7a6b);
  o.rays=[-.8,-.4,0,.4,.8].map(d=>{const hit=V(mx+d,2.5,0),s0=V(hit.x-2.4*Math.sin(o.a),hit.y+2.4*Math.cos(o.a),0),f=V(F,.92,0);p.push(...s0.toArray(),...hit.toArray(),...hit.toArray(),...f.toArray());return [s0,hit,f];});});
  mlsRays.geometry.dispose();mlsRays.geometry=new THREE.BufferGeometry();mlsRays.geometry.setAttribute('position',new THREE.Float32BufferAttribute(p,3));
  $('mlsbtn').textContent=mlsOn?'改回不挪（微透镜在像素正上方）':'把微透镜和滤色片往中心挪';}
$('mlsbtn').onclick=()=>{mlsOn=!mlsOn;rebuildMls();};rebuildMls();
function animMls(t){let n=0;MLS.forEach((o,i)=>o.rays.forEach((r,k)=>{const q=((t*.4+k*.2+i*.07)%1)*2,s=Math.min(1,q|0);M.position.lerpVectors(r[s],r[s+1],q-s);M.scale.setScalar(1);M.updateMatrix();mlsPh.setMatrixAt(n++,M.matrix);}));mlsPh.instanceMatrix.needsUpdate=true;}

/* ---------- 四合一像素 ---------- */
const quad=new THREE.Group();quad.visible=false;scene.add(quad);
{const l=new THREE.DirectionalLight(0xffffff,.95);l.position.set(3,9,5);quad.add(l);}
const QN=8, qm=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),std(0xffffff),QN*QN);quad.add(qm);
add(quad,new THREE.BoxGeometry(QN*.9+.3,.1,QN*.9+.3),std(0x2a3142),0,-.05,0);
label(quad,'柱高 = 这一格收到的电子数',V(0,2.4,-3.9));
const bay=(i,k)=>k%2?(i%2?2:1):(i%2?1:0);let qMode='raw',qT=9;const qVal=new Float32Array(QN*QN),qShow=new Float32Array(QN*QN);
const qSample=()=>{for(let n=0;n<QN*QN;n++)qVal[n]=Math.max(0,9+3*gauss());};qSample();
$('quadctl').querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{qMode=b.dataset.q;qT=9;$('quadctl').querySelectorAll('[data-q]').forEach(x=>x.setAttribute('aria-pressed',x===b));});
function animQuad(t,dt){if((qT+=dt)>1.4){qT=0;qSample();}const bin=qMode==='bin';
  for(let k=0;k<QN;k++)for(let i=0;i<QN;i++){const n=k*QN+i,bi=i&~1,bk=k&~1,v=bin?(qVal[bk*QN+bi]+qVal[bk*QN+bi+1]+qVal[(bk+1)*QN+bi]+qVal[(bk+1)*QN+bi+1])/4:qVal[n];
    qShow[n]+=(v-qShow[n])*Math.min(1,dt*6);const h=.1+qShow[n]*.09,g=bin?.9:.76;
    M.position.set((i-3.5)*.9+(bin?(i%2?-.045:.045):0),h/2,(k-3.5)*.9+(bin?(k%2?-.045:.045):0));M.scale.set(g,h,g);M.updateMatrix();qm.setMatrixAt(n,M.matrix);
    qm.setColorAt(n,col.set(BAY[qMode==='remo'?bay(i,k):bay(i>>1,k>>1)]));}
  M.scale.set(1,1,1);qm.instanceMatrix.needsUpdate=true;qm.instanceColor.needsUpdate=true;}
