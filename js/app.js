/* 步骤切换、动画循环与启动 */
/* ---------- 步骤切换 ---------- */
let step=0;const goal={p:V(),l:V()}, GR={macro,micro,tx,arch,chip,cap5,pdaf,ibis,mls,quad,stk4};
$('steps').innerHTML=STEPS.map((s,i)=>`<button role="tab" title="${s.t}" data-i="${i}">${i+1}</button>`).join('');
$('steps').onclick=e=>e.target.dataset.i&&go(+e.target.dataset.i);
$('prev').onclick=()=>go(step-1);$('next').onclick=()=>go(step+1);
addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;if(e.key==='ArrowRight')go(step+1);if(e.key==='ArrowLeft')go(step-1)});
function go(i){if(i<0||i>=STEPS.length)return;step=i;const s=STEPS[i];
  $('title').textContent=`${i+1}. ${s.t}`;$('body').innerHTML=s.h;$('panel').scrollTop=0;
  [...$('steps').children].forEach((b,n)=>b.setAttribute('aria-current',n===i));
  $('prev').disabled=i===0;$('next').disabled=i===STEPS.length-1;
  for(const k in GR)GR[k].visible=k===s.g;
  $('ctl').hidden=$('vfwrap').hidden=s.g!=='macro';$('txwrap').hidden=s.g!=='tx';$('chipctl').hidden=s.g!=='chip';$('dnwrap').hidden=!s.dn;$('isp').hidden=!s.isp;lof.visible=!!s.lofic;
  document.querySelectorAll('[data-pn]').forEach(el=>el.hidden=!(s.pn||[]).includes(el.id));glassL.visible=s.lg==='glass';st.ab=!!s.ab&&$('abon').checked;
  if((s.pn||[]).includes('pdafwrap'))drawPdaf();if((s.pn||[]).includes('snrwrap'))drawSnr();
  goal.p.set(...s.cam);goal.l.set(...s.look);tween=true;listComps();}

/* ---------- 动画循环 ---------- */
const M=new THREE.Object3D(), col=new THREE.Color(), clock=new THREE.Clock(), tmp=V();
function frame(){requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.05), t=clock.elapsedTime;
  if(tween){cam.position.lerp(goal.p,.07);ctr.target.lerp(goal.l,.07);if(cam.position.distanceTo(goal.p)<.01)tween=false;}
  ctr.update();
  if(macro.visible){
    let open=true, dark=false;
    if(shot){shot.t+=dt;const a=shot.t, e=.3+shot.open;open=a>.3&&a<e||a>e+.3;dark=a<.3||a>=e&&a<e+.3;
      if(a>=e&&!shot.done){shot.done=true;$('photo').getContext('2d').drawImage(vf,0,0);$('exif').textContent=`${st.f} mm · f/${st.N} · ${TN[+$('sh').value]} s · ISO ${st.iso}`;}
      if(a>e+.6)shot=null;}
    shutter.position.y+=((open?1.3:0)-shutter.position.y)*.35;
    ball3.position.z=ballX(t)*K;
    drawVF(t);if(dark){vg.fillStyle='#000';vg.fillRect(0,0,W,HH);}senTex.needsUpdate=true;
    paths.forEach((pa,r)=>{const L=pa.len[3];for(let k=0;k<PH;k++){let d=((t*.05+k/PH+r*.37)%1)*L, s=1;while(s<3&&d>pa.len[s])s++;
      tmp.lerpVectors(pa.pts[s-1],pa.pts[s],(d-pa.len[s-1])/(pa.len[s]-pa.len[s-1]));
      M.position.copy(tmp);M.scale.setScalar(!open&&tmp.x>-.2?0:1);M.updateMatrix();photons.setMatrixAt(r*PH+k,M.matrix);}});
    photons.instanceMatrix.needsUpdate=true;
  }else if(tx.visible)(lof.visible?animLof:animTx)(t);
  else if(arch.visible)animArch(t,dt);
  else if(chip.visible)animChip(t,dt);
  else if(cap5.visible)animCap(t,dt);
  else if(pdaf.visible)animPdaf(t);
  else if(ibis.visible)animIbis(t);
  else if(mls.visible)animMls(t);
  else if(quad.visible)animQuad(t,dt);
  else if(stk4.visible)animStk4(t,dt);
  else{
    mp.forEach((p,n)=>{p.y-=dt*1.1;
      if(p.y<1&&p.c!==p.px.c||p.y<DEPTH[p.c]){if(p.y<DEPTH[p.c]&&Math.random()<QE[p.c])p.px.e=Math.min(FULL,p.px.e+1);spawn(p);mph.setColorAt(n,col.set(BAY[p.c]));}
      const f=p.y>1.1?1:Math.max(.18,1-(1.1-p.y)/.6*.82);M.position.set(p.px.x+p.x0*f,p.y,p.px.z+p.z0*f);M.scale.setScalar(1);M.updateMatrix();mph.setMatrixAt(n,M.matrix);});
    mph.instanceMatrix.needsUpdate=true;mph.instanceColor.needsUpdate=true;
    rowT+=dt;pulseT+=dt;
    if(rowT>1.6){rowT=0;pulseT=0;row=(row+1)%4;px.forEach((p,n)=>{if(p.k===row){p.dn=Math.round(p.e/FULL*1023);p.e=0;$('d'+n).textContent=p.dn;}});}
    rowBox.position.z=row-1.5;
    px.forEach(p=>{const h=Math.max(.001,p.e/FULL*.72);p.fill.scale.y=h;p.fill.position.y=.13+h/2;});
    for(let i=0;i<4;i++){const a=Math.min(1,pulseT/.8);M.position.set(i-1.5,-.05,(row-1.5)+(3.2-(row-1.5))*a);M.scale.setScalar(a<1?1:0);M.updateMatrix();pulses.setMatrixAt(i,M.matrix);}
    pulses.instanceMatrix.needsUpdate=true;
  }
  (STEPS[step].pn||[]).forEach(id=>PANIM[id]&&PANIM[id](t,dt));
  const w=view.clientWidth,h=view.clientHeight;
  labels.forEach(l=>{tmp.copy(l.v).project(cam);const on=l.g.visible&&tmp.z<1;l.el.hidden=!on;if(on)l.el.style.transform=`translate(${((tmp.x+1)/2*w).toFixed(1)}px,${((1-tmp.y)/2*h).toFixed(1)}px) translate(-50%,-50%)`;});
  renderer.render(scene,cam);}
rebuild();go(0);cam.position.set(...STEPS[0].cam);ctr.target.set(...STEPS[0].look);frame();
