/* 单个像素的 4T 结构、电势图与时序图 */
/* ---------- 单个像素：4T 结构（PD + TX / RST / SF / SEL） ---------- */
const TXM={}, wire=(pts,color,y)=>{const m=std(color,{metalness:.25,roughness:.4});pts.forEach((p,i)=>{if(i){const q=pts[i-1], dx=p[0]-q[0], dz=p[1]-q[1];add(tx,new THREE.BoxGeometry(Math.abs(dx)+.08,.07,Math.abs(dz)+.08),m,(p[0]+q[0])/2,y,(p[1]+q[1])/2);}});
  [pts[0],pts[pts.length-1]].forEach(p=>add(tx,new THREE.BoxGeometry(.08,y-.05,.08),m,p[0],(y+.05)/2,p[1]));};
add(tx,new THREE.BoxGeometry(7.4,.6,4.2),std(0x2b2540),0,-.3,.2);
const dope=(w,d,c,x,z)=>add(tx,new THREE.BoxGeometry(w,.05,d),std(c),x,.025,z);
dope(2.3,1.5,0x2f6fb0,-2.05,-.6);dope(.5,.7,0x4fa3e0,.05,-.6);dope(.5,.7,0x4fa3e0,1.3,-.6);dope(.45,.6,0x4fa3e0,.2,1);dope(.45,.6,0x4fa3e0,1.2,1);dope(.45,.6,0x4fa3e0,2.2,1);
const gate=(n,x,z,d)=>{add(tx,new THREE.BoxGeometry(.52,.04,d),std(0x9aa7bd),x,.07,z);TXM[n]=add(tx,new THREE.BoxGeometry(.5,.22,d),std(0x6a5a8c,{emissive:0x000000}),x,.2,z).material;};
gate('TX',-.55,-.6,1.5);gate('RST',.68,-.6,.8);gate('SF',.7,1,.7);gate('SEL',1.7,1,.7);
wire([[.05,-.6],[.05,1.55],[.7,1.55],[.7,1.2]],0xd9a441,.8);                 // FD → SF 栅极
wire([[1.3,-.6],[1.3,.25],[.2,.25],[.2,1]],0xd9534f,1.1);                   // VDD
wire([[2.2,1],[3.1,1]],0x8fb6d9,.8);add(tx,new THREE.BoxGeometry(.09,.07,4.6),std(0x8fb6d9,{metalness:.25,roughness:.4}),3.1,.8,.4); // 输出 → 列线
[['光电二极管 PD',-2.05,.5,-1.5],['TX 传输门',-.55,.75,-1.5],['FD 浮置扩散',.05,1.15,-.9],['RST 复位管',.68,.7,-1.3],['VDD 电源',1.5,1.45,-.3],['SF 源极跟随器',.5,.7,1.9],['SEL 行选通',1.8,.7,1.75],['列线 → ADC',3.1,1.15,2.4]].forEach(([t,x,y,z])=>label(tx,t,V(x,y,z)));
const NE=8, NL=20, eMesh=new THREE.InstancedMesh(new THREE.SphereGeometry(.09,12,8),basic(0x4fd8e8),NL), NT=18, tph=new THREE.InstancedMesh(new THREE.SphereGeometry(.06,8,6),basic(0xffffff),NT);tx.add(eMesh,tph);
for(let k=0;k<NT;k++)tph.setColorAt(k,new THREE.Color(BAY[k%3]));
{const ml=add(tx,new THREE.SphereGeometry(1.25,32,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshPhongMaterial({color:0xcfe6ff,transparent:true,opacity:.25,shininess:100,depthWrite:false}),-2.05,2.55,-.6);ml.scale.set(1,.4,.7);
 add(tx,new THREE.BoxGeometry(2.5,.16,1.75),std(BAY[1],{transparent:true,opacity:.5,depthWrite:false}),-2.05,2.45,-.6);
 label(tx,'微透镜',V(-3.3,3.2,-.6));label(tx,'滤色片（只过绿光）',V(-.3,2.45,-.6));}
const pulse=add(tx,new THREE.SphereGeometry(.11,12,8),basic(0xffc45c),0,0,0);
const tl=new THREE.DirectionalLight(0xffffff,.9);tl.position.set(2,6,4);tx.add(tl);
const PDs=i=>V(-2.8+(i%4)*.5,.14,-1+(i>>2)*.75), FDs=i=>V(-.07+(i%4)*.08,.14,-.75+(i>>2)*.25), VDDp=V(1.3,.14,-.6), PPATH=[V(.7,.45,1),V(2.2,.45,1),V(3.1,.8,1),V(3.1,.8,2.6)];
const TXT=12, SIG={RST:t=>t<1.5,TX:t=>t>=6.5&&t<8,SEL:t=>t>=5.5&&t<9.5}, vfd=t=>t<.25?2:t<6.5?2.8:t<8?2.8-.8*(t-6.5)/1.5:2;
const PHASE=[[1.5,'① 复位：RST 打开，FD 接到 VDD，上一次留下的电子被抽走。FD 回到 2.8 V。'],[5.5,'② 曝光：TX 关着。光子在 PD 里打出电子，电子留在 PD 的势阱里累积。'],[6.5,'③ 读复位电平：SEL 打开，SF 把 FD 此刻的电压（2.8 V）送上列线，列尾电路记下来。'],[8,'④ 传输：TX 打开，PD 里的电子全部倒进 FD。8000 个电子 × 100 µV = 0.8 V，FD 降到 2.0 V。'],[9.5,'⑤ 读信号电平：SF 把 2.0 V 送上列线。'],[12,'⑥ 相关双采样：2.8 − 2.0 = 0.8 V。复位时带进来的随机偏差在两次读数里相同，相减就消掉了。0.8 V 交给 ADC。']];
const tg=$('tm').getContext('2d');
function drawTiming(t){const w=340,h=150,x0=62,xw=w-x0-8;tg.clearRect(0,0,w,h);tg.font='12px ui-monospace,Menlo,monospace';tg.lineWidth=1.5;
  [['RST',SIG.RST,'#ffc45c'],['TX',SIG.TX,'#ffc45c'],['SEL',SIG.SEL,'#ffc45c'],['V(FD)',u=>(vfd(u)-1.8),'#4fd8e8']].forEach(([n,fn,c],r)=>{const y=30+r*34;tg.fillStyle='#93a0b8';tg.fillText(n,6,y-4);tg.strokeStyle=c;tg.beginPath();
    for(let i=0;i<=240;i++){const u=i/240*TXT, v=+fn(u);tg.lineTo(x0+i/240*xw,y-v*18);}tg.stroke();});
  tg.strokeStyle='#e6ebf4';tg.lineWidth=1;tg.beginPath();tg.moveTo(x0+t/TXT*xw,4);tg.lineTo(x0+t/TXT*xw,h-6);tg.stroke();}
const pg=$('pot').getContext('2d');
function drawPot(t){const w=340,h=150, on=k=>SIG[k](t), nE=i=>t>1.9+i*.42, moved=i=>t>=6.5+i*.07+.8;let nPD=0,nFD=0;
  for(let i=0;i<NE;i++){if(t<1.5){if(t<1.2*(1-i/NE))nFD++;}else if(t<6.5){if(nE(i))nPD++;}else if(moved(i))nFD++;else nPD++;}
  const R=[['PD',16,130,78],['TX',130,166,on('TX')?92:26],['FD',166,214,112],['RST',214,250,on('RST')?124:26],['VDD',250,324,130]];
  pg.clearRect(0,0,w,h);pg.font='12px ui-monospace,Menlo,monospace';pg.textAlign='center';
  pg.fillStyle='#1c2a40';pg.beginPath();pg.moveTo(16,h-18);pg.lineTo(16,14);R.forEach(([,a,b,y])=>{pg.lineTo(a,y);pg.lineTo(b,y);});pg.lineTo(324,14);pg.lineTo(324,h-18);pg.fill();
  pg.strokeStyle='#93a0b8';pg.lineWidth=1.5;pg.beginPath();pg.moveTo(16,14);R.forEach(([,a,b,y])=>{pg.lineTo(a,y);pg.lineTo(b,y);});pg.lineTo(324,14);pg.stroke();
  R.forEach(([n,a,b,y])=>{const g=n==='TX'||n==='RST';pg.fillStyle=g&&on(n)?'#ffc45c':'#93a0b8';pg.fillText(g?n+(on(n)?' 开':' 关'):n,(a+b)/2,h-4);});
  pg.fillStyle='#4fd8e8';const dots=(n,a,y,cols)=>{for(let i=0;i<n;i++){pg.beginPath();pg.arc(a+12+(i%cols)*13,y-7-((i/cols)|0)*12,4.5,0,7);pg.fill();}};
  dots(nPD,16,78,8);dots(nFD,166,112,3);
  pg.fillStyle='#93a0b8';pg.textAlign='left';pg.fillText('↓ 坑越深，电子越愿意待',20,h-22>100?12:12);}
function animTx(time){const t=time%TXT, cl=x=>Math.min(1,Math.max(0,x));
  for(const k in SIG)TXM[k].emissive.setHex(SIG[k](t)?0xffa726:0);TXM.SF.emissive.setHex(SIG.SEL(t)?0x2a6f7a:0);
  for(let i=0;i<NE;i++){let s=1;
    if(t<1.5){const a=cl(t/1.2);M.position.lerpVectors(FDs(i),VDDp,a);s=a<1?1:0;}
    else if(t<6.5){M.position.copy(PDs(i));s=t>1.9+i*.42?1:0;}
    else M.position.lerpVectors(PDs(i),FDs(i),cl((t-6.5-i*.07)/.8));
    M.scale.setScalar(s);M.updateMatrix();eMesh.setMatrixAt(i,M.matrix);}
  for(let i=NE;i<NL;i++){M.scale.setScalar(0);M.updateMatrix();eMesh.setMatrixAt(i,M.matrix);}
  eMesh.instanceMatrix.needsUpdate=true;
  for(let k=0;k<NT;k++){const a=(time*.3+k/NT)%1, y=4.6-a*4.5, f=y>2.6?1:Math.max(.4,y/2.6);M.position.set(-2.05+((k*.37%1)-.5)*2.2*f,y,-.6+((k*.61%1)-.5)*1.4*f);M.scale.setScalar(t>1.5&&t<5.5&&(k%3===1||y>2.45)?1:0);M.updateMatrix();tph.setMatrixAt(k,M.matrix);}
  tph.instanceMatrix.needsUpdate=true;
  const pa=t>=5.6&&t<6.5?(t-5.6)/.9:t>=8.1&&t<9.5?(t-8.1)/1.4:-1;pulse.visible=pa>=0&&pa<1;
  if(pulse.visible){const q=pa*3, i=Math.min(2,q|0);pulse.position.lerpVectors(PPATH[i],PPATH[i+1],q-i);pulse.material.color.setHex(t<7?0xffc45c:0x4fd8e8);}
  drawPot(t);drawTiming(t);const ph=PHASE.find(p=>t<p[0])[1];if($('txs').textContent!==ph)$('txs').textContent=ph;}
