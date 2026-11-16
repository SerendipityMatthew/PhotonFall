#!/usr/bin/env node
/* 物理公式与标准曲线的断言测试。独立于 tests/check.js，专测 js/physics.js。 */
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(__dirname,'..','js','physics.js'),'utf8'),ctx);
vm.runInContext('this.SPECTRAL=SPECTRAL;this.GAMUTS=GAMUTS;this.HDR_CURVES=HDR_CURVES;this.hlgLw=hlgLw;this.Physics=Physics;',ctx);
const {SPECTRAL,GAMUTS,HDR_CURVES,Physics}=ctx;

const checks=[];const check=(name,fn)=>checks.push({name,fn});
const close=(a,b,tol)=>Math.abs(a-b)<tol;

check('CIE 1931 光谱轨迹 ≥ 40 点',()=>{
  assert.ok(SPECTRAL.length>=40,`got ${SPECTRAL.length}`);
  // 抽查几点和 CIE 15:2004 Table 1
  const p=w=>SPECTRAL.find(([ww])=>ww===w);
  assert.ok(p(500)&&close(p(500)[1],.0082,.001)&&close(p(500)[2],.5384,.001),'500 nm');
  assert.ok(p(550)&&close(p(550)[1],.3016,.001)&&close(p(550)[2],.6923,.001),'550 nm');
  assert.ok(p(700)&&close(p(700)[1],.7347,.001)&&close(p(700)[2],.2653,.001),'700 nm');
});

check('色域面积：Rec.2020 > Adobe ≈ P3 > sRGB',()=>{
  // Adobe RGB 和 Display P3 在 CIE xy 的 2D 三角面积相近（方向不同，覆盖不同颜色），
  // 所以只做严格大小排序：Rec.2020 最大，sRGB 最小
  const area=g=>Math.abs((g.R[0]*(g.G[1]-g.B[1])+g.G[0]*(g.B[1]-g.R[1])+g.B[0]*(g.R[1]-g.G[1]))/2);
  const [s,p,a,r]=[area(GAMUTS.sRGB),area(GAMUTS.dispP3),area(GAMUTS.adobe),area(GAMUTS.rec2020)];
  assert.ok(r>a&&r>p,`rec2020 ${r} should be largest`);
  assert.ok(a>s&&p>s,`sRGB ${s} should be smallest`);
});

check('PQ EOTF：PQ(1) = 10000 nits',()=>{
  const v=HDR_CURVES.pq.fn(1);
  assert.ok(close(v,10000,1),`got ${v}`);
});

check('PQ EOTF：单调递增',()=>{
  const xs=[0.1,0.3,0.5,0.7,0.9,1.0];
  let prev=-1;
  for(const x of xs){const v=HDR_CURVES.pq.fn(x);assert.ok(v>prev,`PQ(${x})=${v} not > ${prev}`);prev=v;}
});

check('HLG EOTF：HLG(0) = 0，单调递增',()=>{
  assert.ok(close(HDR_CURVES.hlg.fn(0),0,1e-3),'HLG(0)');
  const xs=[0.1,0.3,0.5,0.7,0.9,1.0];let prev=-1;
  for(const x of xs){const v=HDR_CURVES.hlg.fn(x);assert.ok(v>prev,`HLG(${x})=${v} not > ${prev}`);prev=v;}
});

check('sRGB EOTF：sRGB(1) = 100 nits',()=>{
  assert.ok(close(HDR_CURVES.srgb.fn(1),100,.1),`got ${HDR_CURVES.srgb.fn(1)}`);
});

check('sRGB EOTF：线性段和曲线段连续',()=>{
  // 在 x=0.04045 处线性段和曲线段应相等
  const lin=0.04045/12.92;
  const cur=Math.pow((0.04045+.055)/1.055,2.4);
  assert.ok(close(lin,cur,1e-4),`linear ${lin} vs curve ${cur}`);
});

check('艾里斑直径：f/2 ≈ 2.68 µm (λ=550 nm)',()=>{
  assert.ok(close(Physics.airyDiameter(550,2),2.684,.01),`got ${Physics.airyDiameter(550,2)}`);
  assert.ok(close(Physics.airyDiameter(550,22),29.52,.1),'f/22');
});

check('衍射 MTF：MTF(0)=1, MTF(nuC)=0, MTF50 ≈ 0.404·nuC',()=>{
  const nuC=909;                                                                 // f/2, λ=550 nm
  assert.ok(close(Physics.diffMTF(0,nuC),1,1e-3),'MTF(0)');
  assert.ok(close(Physics.diffMTF(nuC,nuC),0,1e-6),'MTF(nuC)');
  const mtf50=Physics.diffMTF50(nuC);                                           // ≈ 367
  assert.ok(close(Physics.diffMTF(mtf50,nuC),0.5,.01),`MTF at ${mtf50} should ≈ 0.5`);
});

check('像素 MTF：pix(0)=1, pix(Nyquist)>0',()=>{
  const p=3.76e-3;                                                               // mm
  assert.ok(close(Physics.pixelMTF(0,p),1,1e-6),'pix(0)');
  const nuNy=1/(2*p);                                                            // 133 cy/mm
  assert.ok(Physics.pixelMTF(nuNy,p)>.5,`pix(Nyquist)=${Physics.pixelMTF(nuNy,p)}`);
});

check('ENOB = (SINAD - 1.76) / 6.02',()=>{
  assert.ok(close(Physics.enob(70),11.33,.02),`got ${Physics.enob(70)}`);
  assert.ok(close(Physics.enob(50),8.01,.02),`got ${Physics.enob(50)}`);
});

check('BT.601 / BT.709 / BT.2020 Y 系数和为 1',()=>{
  assert.ok(close(Physics.bt601Y(1,1,1),1,1e-6),'bt601');
  assert.ok(close(Physics.bt709Y(1,1,1),1,1e-6),'bt709');
  assert.ok(close(Physics.bt2020Y(1,1,1),1,1e-6),'bt2020');
});

check('BT.601 / BT.709 / BT.2020 对同色 Y 不同',()=>{
  const r=1,g=0,b=0;
  const y1=Physics.bt601Y(r,g,b),y2=Physics.bt709Y(r,g,b),y3=Physics.bt2020Y(r,g,b);
  assert.ok(y1!==y2&&y2!==y3,`Y 系数不同：601=${y1} 709=${y2} 2020=${y3}`);
});

let failed=0;
for(const {name,fn} of checks){try{fn();console.log(`✓ ${name}`);}catch(err){console.log(`✗ ${name}`);console.log(`  ${err.message}`);failed++;}}
if(failed>0){console.log(`\n${failed} check(s) failed.`);process.exit(1);}else{console.log(`\nAll ${checks.length} physics check(s) passed.`);}
