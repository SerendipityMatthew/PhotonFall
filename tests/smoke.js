/* 冒烟测试 — 在浏览器页面上下文中执行，await smoke() 返回 {ok, fails} */
async function smoke() {
  const errors = [];
  const fails = [];
  const onerr = e => errors.push(e.message || String(e));
  window.addEventListener('error', onerr);

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
  function expect(cond, msg) { if (!cond) fails.push(msg); }

  // suppress onboard auto-show for all sections except [onboard]
  try { localStorage.setItem(ONBOARD_KEY, '1'); } catch {}
  hideOnboard();

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
  const locWant = i => (innerWidth <= 768 ? locShort : locText)(i, STEPS, CHAPTERS);   // 手机顶栏用短写
  for (let i = 0; i < STEPS.length; i++) {
    navigate({view:'step', n:i}); await wait(30);
    expect($('loc').textContent === locWant(i), `[layout] location shown ${i}`);
    expect($('hardh').hidden === !STEPS[i].hard && $('tabdeep').contains($('hardh')), `[layout] hard heading visibility ${i}`);
  }

  // ---- [visual] ----
  const css = getComputedStyle(document.documentElement);
  expect(css.getPropertyValue('--accent').trim().toLowerCase() === '#c8502d', '[visual] accent token');
  expect(getComputedStyle($('card')).backgroundColor !== getComputedStyle($('view')).backgroundColor, '[visual] paper vs stage');
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

  // ---- [focus] ----  键盘焦点不因重绘、面板搬家或按钮失效而掉到 <body>
  const okFocus = () => [$('prev'), $('next'), $('title')].includes(document.activeElement) && !document.activeElement.disabled;
  navigate({view:'step', n:15}); await wait(60);
  $('next').focus(); $('next').click(); await wait(60);
  expect(step === 16 && document.activeElement === $('next'), '[focus] next keeps focus');
  navigate({view:'step', n:STEPS.length - 2}); await wait(60);
  $('next').focus(); $('next').click(); await wait(60);
  expect(step === STEPS.length - 1 && okFocus() && document.activeElement !== $('next'), '[focus] next disabled → focus moves to prev or title');
  navigate({view:'step', n:1}); await wait(60);
  $('prev').focus(); $('prev').click(); await wait(60);
  expect(step === 0 && okFocus() && document.activeElement !== $('prev'), '[focus] prev disabled → focus moves to next or title');
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
  expect(!drawerOpen && $('drawer').hidden, '[tour] 详细抽屉 stays closed');

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

  // ---- [refl] ----  第 8 步：反射率小图纸色底、曲线已画，拖入射角曲线会变
  navigate({view:'step', n:8}); await wait(200);
  expect(!$('reflwrap').hidden && !$('coatpn').hidden, '[refl] chart and coating button shown on step 8');
  const rc = $('reflc').getContext('2d'), rw = $('reflc').width, rh = $('reflc').height;
  const bg = rc.getImageData(1, 1, 1, 1).data;
  expect(Math.abs(bg[0] - 0xf7) < 3 && Math.abs(bg[1] - 0xf3) < 3 && Math.abs(bg[2] - 0xea) < 3, `[refl] paper background (${bg[0]},${bg[1]},${bg[2]})`);
  const snap = () => rc.getImageData(0, 0, rw, rh).data;
  const px0 = snap();
  let inked = 0;
  for (let i = 0; i < px0.length; i += 4) if (Math.abs(px0[i] - 0xf7) + Math.abs(px0[i + 1] - 0xf3) + Math.abs(px0[i + 2] - 0xea) > 60) inked++;
  expect(inked > 500, `[refl] curves drawn (${inked} inked px)`);
  const accentDrawn = (() => { for (let i = 0; i < px0.length; i += 4) if (Math.abs(px0[i] - 0xc8) < 12 && Math.abs(px0[i + 1] - 0x50) < 12 && Math.abs(px0[i + 2] - 0x2d) < 12) return true; return false; })();
  expect(accentDrawn, '[refl] single-layer curve (accent colour) drawn');
  const a0 = $('refla').value;
  $('refla').value = 50; $('refla').dispatchEvent(new Event('input'));
  const px1 = snap();
  let diff = 0;
  for (let i = 0; i < px0.length; i += 4) if (px0[i] !== px1[i] || px0[i + 1] !== px1[i + 1] || px0[i + 2] !== px1[i + 2]) diff++;
  expect(diff > 300, `[refl] curves move with incidence angle (${diff} px changed)`);
  expect($('reflao').value.includes('50'), '[refl] angle readout');
  $('refla').value = a0; $('refla').dispatchEvent(new Event('input'));
  navigate({view:'step', n:9}); await wait(60);
  expect($('reflwrap').hidden, '[refl] chart hidden on other steps');

  // ---- [timeline] ----
  navigate({view:'step', n:19}); await wait(200);
  expect($('evo').querySelectorAll('.evo-card').length === evoForStep(19).length, '[timeline] cards on step');
  $('evo').querySelector('.evo-card').click(); await wait(300);
  expect(route.view === 'timeline' && paused === true && !$('tldrawer').hidden, '[timeline] card → drawer');
  dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight'})); await wait(100);
  expect(route.view === 'timeline', '[timeline] arrows ignored');
  $('tldrawer').querySelector('[data-step]').click(); await wait(300);
  expect(route.view === 'step' && paused === false, '[timeline] 去看原理 → step');
  expect(document.activeElement !== document.body && $('card').contains(document.activeElement) && !$('timeline').contains(document.activeElement), '[timeline] focus lands in #card');
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

  // ---- [card] ----  控件都在卡片里；有 fig 的步骤关键图在卡片里；详细抽屉开关
  for (let i = 0; i < STEPS.length; i++) {
    navigate({view:'step', n:i}); await wait(40);
    for (const id of CARD_CTL) { const el = $(id); if (el && !el.hidden)
      expect($('cardctl').contains(el), `[card] step ${i} control ${id} in card`); }
    if (STEPS[i].fig) expect($('cardfig').contains($(STEPS[i].fig)), `[card] step ${i} fig ${STEPS[i].fig} in card`);
    else expect($('cardfig').children.length === 0, `[card] step ${i} no fig`);
    expect($('loc').textContent === locWant(i), `[card] step ${i} loc`);
  }
  // 取景器步骤：关键小图先于控件，打开卡片就能看到至少一半；读数 #hud 在详细抽屉里
  navigate({view:'step', n:1}); await wait(100);
  if (innerWidth > 768) {
    const c = $('card').getBoundingClientRect(), f = $('cardfig').getBoundingClientRect(), nv = $('card').querySelector('.nav').getBoundingClientRect();
    const seen = Math.max(0, Math.min(f.bottom, nv.top) - Math.max(f.top, c.top));
    expect(f.height > 0 && seen >= f.height * .5, `[card] step 1 viewfinder ≥50% visible (${seen|0}/${f.height|0})`);
    expect($('drawer').contains($('hud')) && !$('card').contains($('hud')), '[card] #hud in drawer, not card');
  } else expect($('drawer').contains($('hud')) && $('cardfig').compareDocumentPosition($('cardctl')) & Node.DOCUMENT_POSITION_FOLLOWING, '[card] phone: fig before controls, #hud in drawer');
  navigate({view:'step', n:4}); await wait(60);
  expect($('cardctl').compareDocumentPosition($('cardfig')) & Node.DOCUMENT_POSITION_FOLLOWING, '[card] step 4 controls before fig');
  navigate({view:'step', n:16}); await wait(60);
  $('detailbtn').click(); await wait(60);
  expect(drawerOpen && !$('drawer').hidden, '[card] detail opens drawer');
  expect($('tabdeep').contains($('tm')), '[card] non-key figure in drawer');
  document.querySelector('[data-tab="evo"]').click(); expect(!$('tabevo').hidden && $('tabdeep').hidden, '[card] tab switch');
  dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'})); await wait(60);
  expect(!drawerOpen && document.activeElement === $('detailbtn'), '[card] Esc closes, focus back');

  // ---- [esc] ----  统一 Esc 分层：zoom → toc → drawer；一次只关最上层
  {
    const esc = () => dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'}));
    navigate({view:'step', n:1}); await wait(60);
    openDrawer(); openToc(); openZoom($('cardfig').firstElementChild); await wait(40);
    esc(); expect($('zoom').hidden && !$('toc').hidden && drawerOpen, '[esc] closes zoom first');
    esc(); expect($('toc').hidden && drawerOpen, '[esc] then toc');
    esc(); expect(!drawerOpen, '[esc] then drawer');
    closeDrawer(false);
    // 标签方向键不触发步骤切换
    navigate({view:'step', n:5}); await wait(60);
    openDrawer(); await wait(40);
    tabBtn('deep').focus();
    const stepBefore = step;
    tabBtn('deep').dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowRight', bubbles:true}));
    expect(drawerTab === 'evo' && step === stepBefore, '[esc] tab ArrowRight switches tab, step unchanged');
    closeDrawer(false);
  }

  // ---- [cardui] ----  卡片不出视口、按钮行可见；收起切步保持；关键小图点开放大，Esc 关
  navigate({view:'step', n:1}); await wait(60);
  const cr = $('card').getBoundingClientRect();
  expect(cr.bottom <= innerHeight && cr.top >= 0, '[cardui] card inside viewport');
  expect($('next').getBoundingClientRect().bottom <= innerHeight, '[cardui] next button visible');
  toggleCard(true); navigate({view:'step', n:2}); await wait(60);
  expect(cardFolded && $('lead').offsetParent === null, '[cardui] fold persists across steps');
  toggleCard(false);
  $('cardfig').firstElementChild.click(); await wait(40);
  expect(!$('zoom').hidden, '[cardui] figure zoom opens');
  dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'})); await wait(40);
  expect($('zoom').hidden, '[cardui] Esc closes zoom');
  expect(document.documentElement.scrollWidth <= innerWidth, '[cardui] no h-scroll');

  // ---- [toc] ----  目录弹层：跳步、焦点、时间轴进出
  // (3) Esc 返回开启按钮
  navigate({view:'step', n:3}); await wait(40);
  $('tocbtn').click(); await wait(40);
  expect(!$('toc').hidden, '[toc] opens');
  dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'})); await wait(40);
  expect($('toc').hidden && document.activeElement === $('tocbtn'), '[toc] Esc returns focus to opener');
  // (1) 顶栏目录跳步后焦点在 #title
  $('tocbtn').click(); await wait(40);
  $('toc').querySelector('[data-i="20"]').click(); await wait(80);
  expect(step === 20 && $('toc').hidden, '[toc] jump closes');
  expect(document.activeElement === $('title'), '[toc] jump focuses #title');
  // 时间轴隐藏卡片和抽屉
  openDrawer(); navigate({view:'timeline', id:null}); await wait(80);
  expect($('card').getClientRects().length === 0 && $('drawer').getClientRects().length === 0, '[toc] timeline hides card+drawer');
  // (2) 从时间轴目录跳步后焦点在 #title，时间轴已隐藏
  $('tltocbtn').click(); await wait(40);
  $('toc').querySelector('[data-i="5"]').click(); await wait(80);
  expect(step === 5 && $('toc').hidden && $('timeline').hidden, '[toc] timeline TOC jump hides timeline');
  expect(document.activeElement === $('title'), '[toc] jump from timeline focuses #title');
  // 进出时间轴保留抽屉状态
  navigate({view:'step', n:20}); await wait(60);
  openDrawer(); navigate({view:'timeline', id:null}); await wait(80);
  history.back(); await wait(200);
  expect(step === 20 && drawerOpen && !$('drawer').hidden, '[toc] drawer restored after timeline');
  closeDrawer();

  // ---- [labels] ----  标注按需显示：默认只显示入门句提到的；切换全部；hl 临时显示隐藏的标注
  showAllLabels = false; navigate({view:'step', n:16}); await wait(150);
  const vis = () => labels.filter(l => !l.el.hidden).map(l => l.el.textContent).sort();
  const want = [...new Set(mentioned(STEPS[16].lead))].sort();
  expect(vis().length > 0 && vis().every(t => want.includes(t)), '[labels] only mentioned visible');
  $('lblbtn').click(); await wait(150);
  expect(showAllLabels && vis().length > want.length, '[labels] all shows more');
  navigate({view:'step', n:15}); await wait(150);
  expect(showAllLabels, '[labels] toggle persists');
  $('lblbtn').click(); await wait(150);
  const hidden = labels.find(l => l.el.hidden && l.g.visible && !curMentioned.has(l.el.textContent));
  if (hidden) { hl(hidden.el.textContent); await wait(150); expect(!hidden.el.hidden, '[labels] hl temporarily shows hidden label'); }

  // ---- [onboard] ----
  try { localStorage.removeItem(ONBOARD_KEY); } catch {}
  hideOnboard(); if (!onboardSeen()) showOnboard();
  expect(!$('onboard').hidden && $('onboard').textContent.includes('拖动画面可以转动'), '[onboard] shows when unseen');
  for (let k = 0; k < 3; k++) $('onboard').querySelector('button').click();
  expect($('onboard').hidden && onboardSeen(), '[onboard] done marks seen');
  $('helpbtn').click(); expect(!$('onboard').hidden, '[onboard] ? reopens'); hideOnboard();
  const orig = Storage.prototype.getItem; Storage.prototype.getItem = () => { throw new Error('blocked'); };
  let threw = false; try { expect(onboardSeen() === false, '[onboard] storage error → unseen'); } catch { threw = true; }
  Storage.prototype.getItem = orig; expect(!threw, '[onboard] storage error does not throw');

  // ---- [sheet] ----  手机：小卡是底部抽屉，三档，拖把手吸附
  if (innerWidth <= 768) {
    navigate({view:'step', n:1}); await wait(80);
    expect(sheetState === 'mid' && $('card').getBoundingClientRect().height <= innerHeight * 0.52, '[sheet] mid ≤ ~50vh');
    expect($('loc').textContent === locShort(1, STEPS, CHAPTERS), '[sheet] short loc');
    $('detailbtn').click(); await wait(80);
    expect(sheetState === 'max', '[sheet] detail expands');
    setSheet('min'); await wait(80);
    expect($('card').getBoundingClientRect().height < 90, '[sheet] min is a strip');
    const g = $('grip').getBoundingClientRect(), x = g.left + g.width/2, y0 = g.top + 4;
    $('grip').dispatchEvent(new PointerEvent('pointerdown', {clientX:x, clientY:y0, pointerId:1, bubbles:true}));
    expect(ctr.enabled === false, '[sheet] drag disables orbit');
    $('grip').dispatchEvent(new PointerEvent('pointermove', {clientX:x, clientY:y0 - 300, pointerId:1, bubbles:true}));
    $('grip').dispatchEvent(new PointerEvent('pointerup', {clientX:x, clientY:y0 - 300, pointerId:1, bubbles:true}));
    await wait(80);
    expect(ctr.enabled === true && sheetState !== 'min', '[sheet] drag up snaps, orbit restored');
    setSheet('mid');
    expect(document.documentElement.scrollWidth <= innerWidth, '[sheet] no h-scroll');
  }

  // collect any JS errors that fired during the test
  window.removeEventListener('error', onerr);
  errors.forEach(e => fails.push('[error] ' + e));

  return { ok: fails.length === 0, fails };
}
