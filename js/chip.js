/* 整颗传感器：像素阵列与周边电路 */
/* ---------- 整颗芯片：像素阵列（拜耳滤色片 + 景物）与周边电路 ---------- */
const chip=new THREE.Group();chip.visible=false;scene.add(chip);
{const l=new THREE.DirectionalLight(0xffffff,.95);l.position.set(4,10,6);chip.add(l);}
const CW=24, CH=16, PP=.5, arrG=new THREE.Group();chip.add(arrG);
{const c=mkCanvas(CW,CH), g=c.getContext('2d');drawScene(g,CW,CH);const d=g.getImageData(0,0,CW,CH).data, m=new THREE.InstancedMesh(new THREE.BoxGeometry(.45,.12,.45),basic(0xffffff),CW*CH), cc=new THREE.Color(), M=new THREE.Object3D();
 for(let k=0;k<CH;k++)for(let i=0;i<CW;i++){const ch=k%2?(i%2?2:1):(i%2?1:0), v=d[((CH-1-k)*CW+(CW-1-i))*4+ch]/255, n=k*CW+i;   // 像在传感器上转了 180°
   M.position.set((i-11.5)*PP,.1,(k-7.5)*PP);M.updateMatrix();m.setMatrixAt(n,M.matrix);m.setColorAt(n,cc.set(BAY[ch]).multiplyScalar(.2+.8*v));}
 arrG.add(m);}
[[13,.5,0,-4.25],[13,.5,0,4.25],[.5,8,-6.25,0],[.5,8,6.25,0]].forEach(([w,d,x,z])=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,.13,d),std(0x0a0d12));o.position.set(x,.1,z);arrG.add(o);});
{const o=new THREE.Mesh(new THREE.BoxGeometry(13.4,.08,9.4),std(0x353a48));o.position.y=0;arrG.add(o);}
const rowBar=new THREE.Mesh(new THREE.BoxGeometry(12,.03,.5),basic(0xffe27a,{transparent:true,opacity:.55}));rowBar.position.y=.19;arrG.add(rowBar);
const cbase=add(chip,new THREE.BoxGeometry(1,.2,1),std(0x232a3a),0,0,0);
const BLK=[['行驱动',[-7.6,0],[1,8],[-5.3,0],[1,5]],['行驱动',[7.6,0],[1,8],[5.3,0],[1,5]],['CDS + 列 ADC（奇数列）',[0,-5.8],[12,1.2],[0,-3.3],[12,1.2]],['CDS + 列 ADC（偶数列）',[0,5.8],[12,1.2],[0,3.3],[12,1.2]],
  ['数字处理 + 高速输出接口',[0,7.2],[12,1],[0,0],[9,1.6]],['时序发生器 / 锁相环',[7.6,-5.8],[1.6,1.2],[-2.5,-1.7],[3,1]],['参考电压 / 偏置',[-7.6,5.8],[1.6,1.2],[2.5,1.7],[3,1]]]
  .map(([n,pa,sa,pb,sb])=>({pa,sa,pb,sb,m:add(chip,new THREE.BoxGeometry(1,.3,1),std(0x19c2a0),0,.25,0),lv:label(chip,n,V())}));
const LA=label(chip,'像素阵列（RGGB 滤色片）',V()), LO=label(chip,'遮光像素（测黑电平）',V()), LR=label(chip,'当前读出的行',V()), LP=label(chip,'焊盘',V());
const PADS=[];for(let i=-6;i<=6;i++){PADS.push([i/7,-1],[i/7,1]);}for(let i=-4;i<=4;i++){PADS.push([-1,i/5.5],[1,i/5.5]);}
const padM=new THREE.InstancedMesh(new THREE.BoxGeometry(.35,.06,.35),std(0xe0a52e,{metalness:.3,roughness:.4}),PADS.length);chip.add(padM);
const cpul=new THREE.InstancedMesh(new THREE.SphereGeometry(.1,8,6),basic(0x4fd8e8),CW), rpul=new THREE.InstancedMesh(new THREE.SphereGeometry(.13,8,6),basic(0xffe27a),2), dpul=new THREE.InstancedMesh(new THREE.SphereGeometry(.11,8,6),basic(0xe6ebf4),8);chip.add(cpul,rpul,dpul);
let stk=0, stkGoal=0;const lerp=(a,b,k)=>a+(b-a)*k, A=V(), B=V();
$('stk').onclick=()=>{stkGoal=1-stkGoal;$('stk').textContent=stkGoal?'把电路摊回像素四周（前照式 / 背照式）':'把电路叠到像素下面（堆栈式）';};
function animChip(t,dt){stk+=(stkGoal-stk)*Math.min(1,dt*3);const k=stk, ya=lerp(.2,3.4,k), hx=lerp(9.2,7,k), hz=lerp(8.6,5.1,k);
  arrG.position.y=ya;cbase.scale.set(hx*2,1,hz*2);
  BLK.forEach(b=>{b.m.position.set(lerp(b.pa[0],b.pb[0],k),.25,lerp(b.pa[1],b.pb[1],k));b.m.scale.set(lerp(b.sa[0],b.sb[0],k),1,lerp(b.sa[1],b.sb[1],k));b.lv.copy(b.m.position).y=.85;});
  PADS.forEach(([fx,fz],n)=>{M.position.set(fx*(hx-.4),.13,fz*(hz-.4));M.scale.setScalar(1);M.updateMatrix();padM.setMatrixAt(n,M.matrix);});padM.instanceMatrix.needsUpdate=true;
  const q=t/.45, row=(q|0)%CH, a=q%1, zr=(row-7.5)*PP;rowBar.position.z=zr;
  LA.set(0,ya+.9,-2.5);LO.set(-6.25,ya+.6,-4.25);LR.set(4.5,ya+.6,zr);LP.set(hx-.4,.6,hz-.4);
  for(let i=0;i<CW;i++){const x=(i-11.5)*PP, adc=BLK[i%2?2:3].m.position;A.set(x,ya+.2,zr);B.set(x,.45,lerp(adc.z,zr,k));M.position.lerpVectors(A,B,a);M.scale.setScalar(1);M.updateMatrix();cpul.setMatrixAt(i,M.matrix);}
  cpul.instanceMatrix.needsUpdate=true;
  for(let j=0;j<2;j++){const rb=BLK[j].m.position, sx=j?1:-1;A.set(rb.x,.45,zr);B.set(sx*6,ya+.2,zr);M.position.lerpVectors(A,B,Math.min(1,a*2.5));M.scale.setScalar(a<.4?1:0);M.updateMatrix();rpul.setMatrixAt(j,M.matrix);}
  rpul.instanceMatrix.needsUpdate=true;
  const P=[BLK[3].m.position,BLK[4].m.position,A.copy(BLK[4].m.position).setX(BLK[4].m.position.x+BLK[4].m.scale.x/2-.4).clone(),V((5/7)*(hx-.4),.2,hz-.4)];
  for(let j=0;j<8;j++){const u=((t*.35+j/8)%1)*3, i=Math.min(2,u|0);M.position.lerpVectors(P[i],P[i+1],u-i);M.position.y=Math.max(M.position.y,.2)+(i<2?.25:0);M.scale.setScalar(1);M.updateMatrix();dpul.setMatrixAt(j,M.matrix);}
  dpul.instanceMatrix.needsUpdate=true;}
