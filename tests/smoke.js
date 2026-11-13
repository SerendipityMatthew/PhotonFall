/* 冒烟测试 — 在浏览器页面上下文中执行，await smoke() 返回 {ok, fails} */
async function smoke() {
  const errors = [];
  const fails = [];
  const onerr = e => errors.push(e.message || String(e));
  window.addEventListener('error', onerr);

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
  function expect(cond, msg) { if (!cond) fails.push(msg); }

  // ---- [route] ----
  location.hash = '#/step/14'; await wait(300);
  expect(step === 14, '[route] hash → step 14');
  expect($('title').textContent.includes(STEPS[14].t), '[route] title');
  const h0 = history.length;
  navigate({view:'step', n:15}); await wait(100);       // 14 属第 2 章，15 属第 3 章 → push
  expect(history.length === h0 + 1, '[route] cross-chapter push');
  navigate({view:'step', n:16}); await wait(100);       // 15、16 同在第 3 章 → replace
  expect(history.length === h0 + 1, '[route] same-chapter replace');
  history.back(); await wait(300);
  expect(step === 14, '[route] back');
  location.hash = '#/step/abc'; await wait(300);
  expect(step === 0, '[route] bad hash → 0');

  // ---- [keys] ----
  navigate({view:'step', n:5}); await wait(100);
  dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight'})); await wait(100);
  expect(step === 6, '[keys] arrow right');
  const inp = $('zo'); inp.focus();
  inp.dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight', bubbles:true})); await wait(100);
  expect(step === 6, '[keys] ignored in input');

  // ---- [layout] ----
  for (let i = 0; i < STEPS.length; i++) {
    navigate({view:'step', n:i}); await wait(30);
    expect(!!$('chnav').querySelector('[aria-current="true"]'), `[layout] chapter marked ${i}`);
    expect($('hardwrap').hidden === !STEPS[i].hard, `[layout] hard visibility ${i}`);
  }

  // ---- [visual] ----
  const css = getComputedStyle(document.documentElement);
  expect(css.getPropertyValue('--accent').trim().toLowerCase() === '#c8502d', '[visual] accent token');
  expect(getComputedStyle($('panel')).backgroundColor !== getComputedStyle($('view')).backgroundColor, '[visual] paper vs stage');
  expect(document.documentElement.scrollWidth <= innerWidth, '[visual] no horizontal scroll');

  // ---- [palette] ----
  const cvs = {airy:5, pdc:4, ibc:10, spec:12, snr:22, adcc:24, shc:25, tm:16, pot:16};
  for (const [id, st] of Object.entries(cvs)) {
    navigate({view:'step', n:st}); await wait(300);
    const d = $(id).getContext('2d').getImageData(1, 1, 2, 2).data;
    const lum = (d[0] + d[1] + d[2]) / 3;
    expect(lum > 200, `[palette] ${id} background light (${lum|0})`);
  }

  // ---- [hl] ----
  navigate({view:'step', n:15}); await wait(200);          // 4×4 像素阵列，有"微透镜"标注
  expect(hl('微透镜') === true, '[hl] finds visible label');
  expect(labels.find(l => l.el.textContent === '微透镜').el.classList.contains('hl'), '[hl] class added');
  expect(hl('不存在的标注') === false, '[hl] missing label → false');
  navigate({view:'step', n:1}); await wait(200);
  expect(hl('微透镜') === false, '[hl] hidden group ignored');
  // nudge=false（默认）不移动 goal.l；nudge=true 才移
  const glBefore = goal.l.clone();
  hl('FE 50-150mm F2 GM');              // nudge defaults to false
  expect(goal.l.equals(glBefore), '[hl] no nudge → goal.l unchanged');
  hl('FE 50-150mm F2 GM', true);        // nudge=true
  expect(!goal.l.equals(glBefore), '[hl] nudge=true → goal.l moved');
  // 标注在屏幕外：把镜头拉远到看不见，再高亮
  cam.position.set(0, 0, 500); await wait(50);
  expect(hl('FE 50-150mm F2 GM') === true, '[hl] off-screen label still works');

  // ---- [hl-cam] ----  点关键词：镜头真的转过去，标注落在舞台里；读者自己转过的视角不被拉回预设
  const visLabel = t => labels.find(l => { if (l.el.textContent !== t) return false; for (let o = l.g; o; o = o.parent) if (!o.visible) return false; return true; });
  const onStage = t => { const p = visLabel(t).v.clone().project(cam); return p.z < 1 && Math.abs(p.x) <= 1 && Math.abs(p.y) <= 1; };
  const settle = async () => { for (let k = 0; k < 60 && tween; k++) await wait(50); };
  navigate({view:'step', n:1}); await wait(100); stopTour(); await settle();
  hl('太阳', true); await wait(100); await settle();
  expect(onStage('太阳'), '[hl-cam] step 1 太阳 on stage after nudge');
  cam.position.set(0, 0, 500); ctr.update(); tween = false;
  hl('太阳', true); await wait(100); await settle();
  expect(onStage('太阳'), '[hl-cam] off-screen 太阳 brought on stage');
  navigate({view:'step', n:15}); await wait(100); await settle();
  const t15 = ctr.target.clone(), want15 = goal.l.clone().lerp(visLabel('微透镜').v, .4);
  hl('微透镜', true); await wait(100); await settle();
  expect(ctr.target.distanceTo(want15) < .05, `[hl-cam] step 15 target reached (${ctr.target.distanceTo(t15).toFixed(3)} of ${t15.distanceTo(want15).toFixed(3)})`);
  expect(onStage('微透镜'), '[hl-cam] step 15 微透镜 on stage');
  cam.position.add(new THREE.Vector3(2.5, 1, 0)); ctr.update(); tween = false;
  const mine = cam.position.clone();
  hl('微透镜', true); await wait(100); await settle();
  expect(cam.position.distanceTo(mine) < .3, `[hl-cam] orbit kept (moved ${cam.position.distanceTo(mine).toFixed(2)})`);
  hl('微透镜'); navigate({view:'step', n:16}); await wait(60);
  expect(!hlRing.visible, '[hl-cam] ring cleared on step change');

  // ---- [focus] ----  键盘焦点不因重绘或按钮失效而掉到 <body>
  navigate({view:'step', n:15}); await wait(60);
  let pill = $('sub').querySelector('[data-i="16"]'); pill.focus(); pill.click(); await wait(60);
  expect(step === 16 && document.activeElement.closest && document.activeElement.closest('#sub') && document.activeElement.dataset.i === '16', '[focus] #sub pill keeps focus');
  pill = $('chnav').querySelector('[data-ch="4"]'); pill.focus(); pill.click(); await wait(60);
  expect(document.activeElement.closest && document.activeElement.closest('#chnav') && document.activeElement.dataset.ch === '4', '[focus] #chnav pill keeps focus');
  navigate({view:'step', n:STEPS.length - 2}); await wait(60);
  $('next').focus(); $('next').click(); await wait(60);
  expect(step === STEPS.length - 1 && document.activeElement !== document.body && !document.activeElement.disabled, '[focus] next disabled → focus moves');
  navigate({view:'step', n:1}); await wait(60);
  $('prev').focus(); $('prev').click(); await wait(60);
  expect(step === 0 && document.activeElement !== document.body && !document.activeElement.disabled, '[focus] prev disabled → focus moves');
  navigate({view:'step', n:5}); await wait(60);
  dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowLeft', altKey:true})); await wait(60);
  expect(step === 5, '[keys] Alt+← ignored');

  // ---- [hl-content] ----  每个关键词都能在它那一步找到标注
  for (let i = 0; i < STEPS.length; i++) {
    navigate({view:'step', n:i}); await wait(60);
    for (const k of $('lead').querySelectorAll('[data-hl]'))
      expect(hl(k.dataset.hl), `[hl-content] step ${i} "${k.dataset.hl}"`);
  }

  // ---- [tour] ----
  navigate({view:'step', n:0}); await wait(200);
  expect(tourOn === true, '[tour] auto starts on step 0');
  expect($('ctl').hidden && $('vfwrap').hidden, '[tour] camera controls hidden');
  navigate({view:'step', n:5}); await wait(1500);
  expect(tourOn === false, '[tour] stops when leaving');
  expect(cam.position.distanceTo(new THREE.Vector3(...STEPS[5].cam)) < 0.5, '[tour] camera settles on step 5');
  navigate({view:'step', n:0}); await wait(200);
  ctr.dispatchEvent({type:'start'});
  expect(tourOn === false, '[tour] user drag stops it');
  $('tourbtn').click();
  expect(tourOn === true, '[tour] replay');
  const flow = $('flow');
  expect(!!flow && flow.offsetHeight > 0, '[tour] step 0 diagram visible');
  const curStage = () => { const c = flow && flow.querySelector('[aria-current]'); return c ? c.textContent : ''; };
  await wait(100); const s0 = curStage();
  tourT = 7.5; await wait(150);
  expect(s0 !== '' && curStage() !== s0, `[tour] highlighted stage changes (${s0} → ${curStage()})`);
  expect(visLabel('FE 50-150mm F2 GM').el.classList.contains('hl'), '[tour] lens label highlighted in lens stage');
  expect($('advwrap').open === false, '[tour] 进阶 stays collapsed');

  // ---- [lensparts] ----  第 7 步：前组 / 补偿组 / 后组 只在本步出现，位置跟着镜片组走
  const PARTS = ['前组', '补偿组', '后组'];
  const shown = t => !!visLabel(t);
  navigate({view:'step', n:7}); await wait(200);
  for (const t of PARTS) expect(shown(t), `[lensparts] ${t} visible on step 7`);
  expect(shown('变焦组') && shown('对焦组'), '[lensparts] zoom / focus labels still there');
  const zo0 = $('zo').value;
  for (const f of [50, 150]) {
    $('zo').value = f; $('zo').dispatchEvent(new Event('input'));
    expect(Math.abs(visLabel('补偿组').v.x - G.comp.position.x) < 1e-6, `[lensparts] 补偿组 label follows the group at ${f} mm`);
    expect(Math.abs(visLabel('前组').v.x - G.front.position.x) < 1e-6 && Math.abs(visLabel('后组').v.x - G.rear.position.x) < 1e-6, `[lensparts] 前组 / 后组 labels on their groups at ${f} mm`);
  }
  $('zo').value = zo0; $('zo').dispatchEvent(new Event('input'));
  for (let i = 0; i < STEPS.length; i++) {
    if (i === 7 || STEPS[i].g !== 'macro') continue;
    navigate({view:'step', n:i}); await wait(30);
    for (const t of PARTS) expect(!shown(t), `[lensparts] ${t} hidden on step ${i}`);
  }

  // ---- [timeline] ----
  navigate({view:'step', n:19}); await wait(200);
  expect($('evo').querySelectorAll('.evo-card').length === evoForStep(19).length, '[timeline] cards on step');
  $('evo').querySelector('.evo-card').click(); await wait(300);
  expect(route.view === 'timeline' && paused === true && !$('tldrawer').hidden, '[timeline] card → drawer');
  dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight'})); await wait(100);
  expect(route.view === 'timeline', '[timeline] arrows ignored');
  $('tldrawer').querySelector('[data-step]').click(); await wait(300);
  expect(route.view === 'step' && paused === false, '[timeline] 去看原理 → step');
  expect(document.activeElement !== document.body && $('panel').contains(document.activeElement) && !$('timeline').contains(document.activeElement), '[timeline] focus lands in #panel');
  location.hash = '#/timeline/not-a-node'; await wait(300);
  expect(route.view === 'timeline' && $('tldrawer').hidden, '[timeline] unknown id → no drawer');
  for (const e of EVO) {
    location.hash = '#/timeline/' + e.id; await wait(60);
    expect(!$('tldrawer').hidden && $('tldrawer').textContent.includes(e.title), `[timeline] deep link ${e.id}`);
  }
  expect(document.documentElement.scrollWidth <= innerWidth, '[timeline] no page h-scroll');
  // 电脑：最后一个年代列里的卡打开抽屉后，卡不能被抽屉盖住
  if (innerWidth > 768) {
    const lastEra = ERAS[ERAS.length - 1].id;
    const lastCards = [...$('tllanes').querySelectorAll(`.tl-cell[data-era="${lastEra}"] .tl-card`)];
    const lc = lastCards[lastCards.length - 1];
    location.hash = '#/timeline/' + lc.dataset.id; await wait(400);
    const a = lc.getBoundingClientRect(), d = $('tldrawer').getBoundingClientRect();
    expect(a.right <= d.left + 1, `[timeline] drawer clear of last-column card (card right ${a.right|0}, drawer left ${d.left|0})`);
  }

  // collect any JS errors that fired during the test
  window.removeEventListener('error', onerr);
  errors.forEach(e => fails.push('[error] ' + e));

  return { ok: fails.length === 0, fails };
}
