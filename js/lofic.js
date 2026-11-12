/* LOFIC 溢出电容的工作过程 */
/* ---------- LOFIC：FD 旁经开关接一个大电容 ---------- */
const lof=new THREE.Group();lof.visible=false;tx.add(lof);
add(lof,new THREE.BoxGeometry(.5,.05,.5),std(0x4fa3e0),.05,.026,-1.6);add(lof,new THREE.BoxGeometry(.52,.04,.3),std(0x9aa7bd),.05,.07,-1.15);
const Smat=add(lof,new THREE.BoxGeometry(.5,.22,.3),std(0x6a5a8c,{emissive:0x000000}),.05,.2,-1.15).material;
add(lof,new THREE.BoxGeometry(.08,.5,.08),std(0xd9a441,{metalness:.25,roughness:.4}),.05,.3,-1.78);
add(lof,new THREE.BoxGeometry(1.5,.06,.9),std(0xd9a441,{metalness:.25,roughness:.4}),.5,.58,-1.75);add(lof,new THREE.BoxGeometry(1.5,.05,.9),std(0x7fd0c0,{transparent:true,opacity:.6}),.5,.64,-1.75);add(lof,new THREE.BoxGeometry(1.5,.06,.9),std(0x8f9bb0,{metalness:.25,roughness:.4}),.5,.7,-1.75);
label(lof,'LOFIC 开关',V(-.75,.55,-1.15));label(lof,'LOFIC 大电容',V(1.2,1.1,-1.9));
const CSs=i=>V(-.13+(i%4)*.12,.14,-1.78+(i>>2)*.09), LT=16, cl=x=>Math.min(1,Math.max(0,x)), gen=i=>1.9+i*.22;
const LS={RST:t=>t<1.5,S:t=>t<6.5||t>=10,TX:t=>t>=7.5&&t<9?1:t>=1.5&&t<6.5?.4:0,SEL:t=>t>=6.5&&t<12.5};
const vL=t=>t<.25?2.7:t<6.5?2.8-.06*cl((t-3.66)/2.44):t<7.5?2.74:t<9?2.74-.8*cl((t-7.5)/1.3):t<10?1.94:1.94+.76*cl((t-10)/.5);
const LPH=[[1.5,'① 复位：RST 和 LOFIC 开关都打开，FD 和大电容一起清空，回到 2.8 V。'],[6.5,'② 曝光：PD 装到 8000 个电子就满了。之后的电子越过 TX 那道矮堤坝，流进 FD 和大电容存起来。大电容容量大，12000 个电子只让电压降了 0.06 V。'],[7.5,'③ 关掉 LOFIC 开关，FD 单独工作。读复位电平 2.74 V。'],[9,'④ TX 全开：PD 里的 8000 个电子倒进 FD。小电容上 100 µV 一个电子，FD 降 0.8 V。'],[10,'⑤ 高增益读数：2.74 − 1.94 = 0.8 V，对应 PD 里的 8000 个电子。噪声低，暗部用这个。'],[11,'⑥ 打开 LOFIC 开关：FD 和大电容连通，全部 20000 个电子摊在大电容上（约 5 µV 一个电子），电压回到 2.70 V。'],[12.5,'⑦ 低增益读数：2.80 − 2.70 = 0.1 V，对应全部 20000 个电子。高光用这个。'],[16,'⑧ 合成：这个像素的高增益读数已经到顶（PD 满了），所以取低增益读数换算：0.1 V ÷ 5 µV = 20000 个电子。没有 LOFIC 就只能记到 8000。']];
/* 电子 i 在时刻 t 的位置和所在区域（3D 和电势图共用） */
function eL(i,t,out){const stay=i<2;let r='', a;
  if(t<1.5){a=cl(t/1.2);out.lerpVectors(i<NE&&stay?FDs(i):CSs(i),VDDp,a);return a<1?(i<NE&&stay?'FD':'CS'):'';}
  if(t<gen(i))return '';
  if(i>=NE){a=cl((t-gen(i))/.9);if(a<.5){out.lerpVectors(PDs(i%NE).setY(.3),FDs(i%NE),a*2);return 'PD';}out.lerpVectors(FDs(i%NE),CSs(i),a*2-1);return a<1?'FD':'CS';}
  if(t<7.5){out.copy(PDs(i));return 'PD';}
  a=cl((t-7.5-i*.07)/.8);if(t<10||stay){out.lerpVectors(PDs(i),FDs(i),a);return a<1?'PD':'FD';}
  a=cl((t-10-i*.05)/.6);out.lerpVectors(FDs(i),CSs(i),a);return a<1?'FD':'CS';}
function drawPotL(t,n){const w=340,h=150, tx_=LS.TX(t), so=LS.S(t);
  const R=[['PD',12,96,78],['TX',96,128,tx_===1?92:tx_?50:26],['FD',128,166,112],['开关',166,196,so?112:30],['LOFIC 大电容',196,328,112]];
  pg.clearRect(0,0,w,h);pg.font='12px ui-monospace,Menlo,monospace';pg.textAlign='center';
  pg.fillStyle='#1c2a40';pg.beginPath();pg.moveTo(12,h-18);pg.lineTo(12,14);R.forEach(([,a,b,y])=>{pg.lineTo(a,y);pg.lineTo(b,y);});pg.lineTo(328,14);pg.lineTo(328,h-18);pg.fill();
  pg.strokeStyle='#93a0b8';pg.lineWidth=1.5;pg.beginPath();pg.moveTo(12,14);R.forEach(([,a,b,y])=>{pg.lineTo(a,y);pg.lineTo(b,y);});pg.lineTo(328,14);pg.stroke();
  R.forEach(([nm,a,b],k)=>{const g=k===1||k===3, on=k===1?tx_:so;pg.fillStyle=g&&on?'#ffc45c':'#93a0b8';pg.fillText(k===1?(tx_===1?'TX 开':tx_?'TX 半':'TX 关'):k===3?(so?'开':'关'):nm,(a+b)/2,h-4);});
  pg.fillStyle='#4fd8e8';const dots=(c,a,y,cols)=>{for(let i=0;i<c;i++){pg.beginPath();pg.arc(a+9+(i%cols)*11,y-6-((i/cols)|0)*10,4,0,7);pg.fill();}};
  dots(n.PD,14,78,7);dots(n.FD,128,112,3);dots(n.CS,198,112,11);pg.textAlign='left';pg.fillStyle='#93a0b8';}
function drawTimingL(t){const w=340,h=150,x0=62,xw=w-x0-8;tg.clearRect(0,0,w,h);tg.font='12px ui-monospace,Menlo,monospace';tg.lineWidth=1.5;tg.textAlign='left';
  [['RST',LS.RST],['开关',LS.S],['TX',LS.TX],['SEL',LS.SEL],['V(FD)',u=>vL(u)-1.8]].forEach(([nm,fn],r)=>{const y=26+r*28;tg.fillStyle='#93a0b8';tg.fillText(nm,6,y-4);tg.strokeStyle=r===4?'#4fd8e8':'#ffc45c';tg.beginPath();
    for(let i=0;i<=320;i++){const u=i/320*LT;tg.lineTo(x0+i/320*xw,y-(+fn(u))*16);}tg.stroke();});
  tg.strokeStyle='#e6ebf4';tg.lineWidth=1;tg.beginPath();tg.moveTo(x0+t/LT*xw,4);tg.lineTo(x0+t/LT*xw,h-6);tg.stroke();}
function animLof(time){const t=time%LT, n={PD:0,FD:0,CS:0}, txl=LS.TX(t);
  TXM.RST.emissive.setHex(LS.RST(t)?0xffa726:0);TXM.TX.emissive.setHex(txl===1?0xffa726:txl?0x7a4f12:0);TXM.SEL.emissive.setHex(LS.SEL(t)?0xffa726:0);TXM.SF.emissive.setHex(LS.SEL(t)?0x2a6f7a:0);Smat.emissive.setHex(LS.S(t)?0xffa726:0);
  for(let i=0;i<NL;i++){const r=eL(i,t,M.position);if(r)n[r]++;M.scale.setScalar(r?1:0);M.updateMatrix();eMesh.setMatrixAt(i,M.matrix);}
  eMesh.instanceMatrix.needsUpdate=true;
  for(let k=0;k<NT;k++){const a=(time*.45+k/NT)%1, y=4.6-a*4.5, f=y>2.6?1:Math.max(.4,y/2.6);M.position.set(-2.05+((k*.37%1)-.5)*2.2*f,y,-.6+((k*.61%1)-.5)*1.4*f);M.scale.setScalar(t>1.5&&t<6.5&&(k%3===1||y>2.45)?1:0);M.updateMatrix();tph.setMatrixAt(k,M.matrix);}
  tph.instanceMatrix.needsUpdate=true;
  const pa=t>=6.6&&t<7.4?(t-6.6)/.8:t>=9.1&&t<9.9?(t-9.1)/.8:t>=11.2&&t<12.3?(t-11.2)/1.1:-1;pulse.visible=pa>=0&&pa<1;
  if(pulse.visible){const q=pa*3, i=Math.min(2,q|0);pulse.position.lerpVectors(PPATH[i],PPATH[i+1],q-i);pulse.material.color.setHex(t<7.5?0xffc45c:0x4fd8e8);}
  drawPotL(t,n);drawTimingL(t);const ph=LPH.find(p=>t<p[0])[1];if($('txs').textContent!==ph)$('txs').textContent=ph;}
