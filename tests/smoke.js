/* 冒烟测试 — 在浏览器页面上下文中执行，await smoke() 返回 {ok, fails} */
async function smoke() {
  const errors = [];
  const fails = [];
  const onerr = e => errors.push(e.message || String(e));
  window.addEventListener('error', onerr);

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
  function expect(cond, msg) { if (!cond) fails.push(msg); }

  // ---- [route] ----
  location.hash = '#/step/12'; await wait(300);
  expect(step === 12, '[route] hash → step 12');
  expect($('title').textContent.includes(STEPS[12].t), '[route] title');
  const h0 = history.length;
  navigate({view:'step', n:13}); await wait(100);       // 12 属第 2 章，13 属第 3 章 → push
  expect(history.length === h0 + 1, '[route] cross-chapter push');
  navigate({view:'step', n:14}); await wait(100);       // 13、14 同在第 3 章 → replace
  expect(history.length === h0 + 1, '[route] same-chapter replace');
  history.back(); await wait(300);
  expect(step === 12, '[route] back');
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
  for (let i = 0; i < 32; i++) {
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
  const cvs = {airy:5, pdc:4, ibc:8, spec:10, snr:20, adcc:22, shc:23, tm:14, pot:14};
  for (const [id, st] of Object.entries(cvs)) {
    navigate({view:'step', n:st}); await wait(300);
    const d = $(id).getContext('2d').getImageData(1, 1, 2, 2).data;
    const lum = (d[0] + d[1] + d[2]) / 3;
    expect(lum > 200, `[palette] ${id} background light (${lum|0})`);
  }

  // ---- [hl] ----
  navigate({view:'step', n:13}); await wait(200);          // 4×4 像素阵列，有"微透镜"标注
  expect(hl('微透镜') === true, '[hl] finds visible label');
  expect(labels.find(l => l.el.textContent === '微透镜').el.classList.contains('hl'), '[hl] class added');
  expect(hl('不存在的标注') === false, '[hl] missing label → false');
  navigate({view:'step', n:1}); await wait(200);
  expect(hl('微透镜') === false, '[hl] hidden group ignored');
  // 标注在屏幕外：把镜头拉远到看不见，再高亮
  cam.position.set(0, 0, 500); await wait(50);
  expect(hl('FE 50-150mm F2 GM') === true, '[hl] off-screen label still works');

  // collect any JS errors that fired during the test
  window.removeEventListener('error', onerr);
  errors.forEach(e => fails.push('[error] ' + e));

  return { ok: fails.length === 0, fails };
}
