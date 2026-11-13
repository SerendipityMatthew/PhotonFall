/* 时间轴视图：六个年代列 × 五条泳道，点卡片打开右侧抽屉。
   依赖 ERAS / LANES / EVO（evolution.js）、CHAPTERS / STEPS（steps.js）、$（core.js）；
   navigate、route、step（app.js）和 stopTour（tour.js）只在运行时调用。 */

let paused = false;            // 时间轴打开时 3D 停止渲染（frame() 里看这个）
let tlBuilt = false, tlOpenId = null;

const TL_MOBILE = matchMedia('(max-width:768px)');
const eraOf  = id => ERAS.find(x => x.id === id);
const laneOf = id => LANES.find(x => x.id === id);

/* 在画布上按 CSS 尺寸 w×h 画节点配图（按设备像素比放大，免得糊） */
function evoPaint(cv, e, w, h) {
  const k = Math.min(devicePixelRatio || 1, 2);
  cv.width = Math.round(w * k); cv.height = Math.round(h * k);
  const c = cv.getContext('2d');
  c.setTransform(k, 0, 0, k, 0, 0);
  e.draw(c, w, h);
}

/* 四格摘要：讲解页的演进卡和抽屉共用 */
function evoBoxes(e) {
  return `<div class="evo-boxes">
    <p class="evo-box" data-k="solved"><b>解决了</b>${e.solved}</p>
    <p class="evo-box" data-k="new"><b>新问题</b>${e.newProblem}</p>
    <p class="evo-box" data-k="driver"><b>推动力</b>${e.driver}</p>
    <p class="evo-box" data-k="industry"><b>行业变化</b>${e.industry}</p>
  </div>`;
}

/* ---------- 搭骨架（第一次打开时做一次） ---------- */
function tlBuild() {
  $('tlaxis').innerHTML = '<span class="tl-corner" aria-hidden="true">线索 ╲ 年代</span>' +
    ERAS.map((er, i) => `<button type="button" class="tl-era${i % 2 ? ' tl-alt' : ''}" data-era="${er.id}">` +
      `<i>${String(i + 1).padStart(2, '0')}</i><b>${er.name}</b><small>${er.span}</small></button>`).join('');

  $('tllanes').innerHTML = LANES.map(ln => `<section class="tl-lane" aria-labelledby="tl-l-${ln.id}">
    <h3 class="tl-lname" id="tl-l-${ln.id}">${ln.name}</h3><div class="tl-track">` +
    ERAS.map((er, i) => {
      const es = EVO.filter(e => e.lane === ln.id && e.era === er.id).sort((a, b) => a.year - b.year);
      return `<div class="tl-cell${i % 2 ? ' tl-alt' : ''}" data-era="${er.id}"${es.length ? '' : ' data-empty'}>` +
        `<span class="tl-cera">${er.name} · ${er.span}</span>` +
        es.map(e => `<button type="button" class="tl-card" data-id="${e.id}">` +
          `<canvas aria-hidden="true"></canvas><span class="tl-cy">${e.year}</span><span class="tl-ct">${e.title}</span></button>`).join('') +
        '</div>';
    }).join('') + '</div></section>').join('');

  $('tllanes').querySelectorAll('.tl-card').forEach(b => evoPaint(b.querySelector('canvas'), EVO.find(e => e.id === b.dataset.id), 56, 42));

  $('tllanes').addEventListener('click', ev => {
    const b = ev.target.closest('.tl-card');
    if (b) navigate({view: 'timeline', id: b.dataset.id});
  });
  /* 年代表头跟着泳道一起横向滚 */
  $('tllanes').addEventListener('scroll', () => { $('tlaxis').scrollLeft = $('tllanes').scrollLeft; }, {passive: true});
  /* 点年代：把那一列滚到眼前（手机上每条泳道各滚各的） */
  $('tlaxis').addEventListener('click', ev => {
    const b = ev.target.closest('[data-era]');
    if (!b) return;
    const i = ERAS.findIndex(x => x.id === b.dataset.era);
    if (TL_MOBILE.matches) {
      $('tllanes').querySelectorAll('.tl-track').forEach(tr => {
        const cells = [...tr.children], c = cells.slice(i).find(x => !x.hasAttribute('data-empty')) || cells.filter(x => !x.hasAttribute('data-empty')).pop();
        if (c) tr.scrollBy({left: c.getBoundingClientRect().left - tr.getBoundingClientRect().left - 16, behavior: 'smooth'});
      });
    } else {
      const sc = $('tllanes'), c = sc.querySelector(`.tl-cell[data-era="${b.dataset.era}"]`);
      sc.scrollBy({left: c.getBoundingClientRect().left - sc.getBoundingClientRect().left - sc.querySelector('.tl-lname').offsetWidth, behavior: 'smooth'});
    }
  });

  $('tlback').onclick = () => navigate({view: 'step', n: step});
  $('tldrawer').addEventListener('click', ev => {
    const b = ev.target.closest('button');
    if (!b) return;
    if (b.dataset.step !== undefined) navigate({view: 'step', n: +b.dataset.step});
    else if ('close' in b.dataset) navigate({view: 'timeline', id: null});
  });
  tlBuilt = true;
}

/* ---------- 抽屉 ---------- */
function tlOpen(e) {
  const d = $('tldrawer'), k = e.story.lastIndexOf('来源：');
  const story = k >= 0 ? e.story.slice(0, k) : e.story, src = k >= 0 ? e.story.slice(k) : '';
  d.innerHTML = `<button type="button" class="tl-x" data-close aria-label="关闭">×</button>
    <p class="tl-eyebrow">${eraOf(e.era).name} · ${laneOf(e.lane).name}</p>
    <p class="tl-dyear">${e.year}</p>
    <h3 id="tldtitle">${e.title}</h3>
    <canvas class="tl-dfig" role="img" aria-label="${e.title}示意图"></canvas>
    ${evoBoxes(e)}
    <p class="tl-story">${story}</p>
    ${src ? `<p class="tl-src">${src}</p>` : ''}
    <div class="tl-go"><p class="tl-goh">去看原理</p>` +
    e.steps.map(n => `<button type="button" data-step="${n}"><small>${CHAPTERS.find(c => c.id === STEPS[n].ch).name}</small>${STEPS[n].t}</button>`).join('') +
    '</div>';
  d.hidden = false;
  document.body.classList.add('tl-open');
  const cv = d.querySelector('canvas'), w = cv.clientWidth || 360;
  evoPaint(cv, e, w, Math.round(w * .44));

  $('tllanes').querySelectorAll('.tl-card').forEach(b => b.toggleAttribute('aria-current', b.dataset.id === e.id));
  const card = $('tllanes').querySelector(`.tl-card[data-id="${e.id}"]`);
  card.setAttribute('aria-current', 'true');
  card.scrollIntoView({block: 'nearest', inline: 'nearest'});
  if (!d.contains(document.activeElement)) d.focus({preventScroll: true});
  tlOpenId = e.id;
}

function tlClose(leaving) {
  const d = $('tldrawer'), had = d.contains(document.activeElement);
  d.hidden = true;
  document.body.classList.remove('tl-open');
  $('tllanes').querySelectorAll('.tl-card[aria-current]').forEach(b => b.removeAttribute('aria-current'));
  /* 焦点还给刚才那张卡，键盘用户不会掉到页面开头 */
  const card = tlOpenId && $('tllanes').querySelector(`.tl-card[data-id="${tlOpenId}"]`);
  if (had && card && !leaving) card.focus({preventScroll: true});
  tlOpenId = null;
}

/* ---------- 进出时间轴 ---------- */
function showTimeline(id) {
  stopTour();
  document.body.classList.add('tl');
  $('timeline').hidden = false;
  paused = true;
  if (!tlBuilt) tlBuild();
  $('tlbackt').textContent = STEPS[step].t;
  const e = EVO.find(x => x.id === id);
  if (e) tlOpen(e);
  else tlClose();
}

function hideTimeline() {
  if (!tlBuilt || $('timeline').hidden) return;
  const a = document.activeElement, lost = !a || a === document.body || $('timeline').contains(a);
  tlClose(true);
  document.body.classList.remove('tl');
  $('timeline').hidden = true;
  paused = false;
  /* 焦点原来在时间轴里：交给讲解页的标题，免得掉到 <body> */
  if (lost) $('title').focus({preventScroll: true});
}

addEventListener('keydown', ev => {
  if (ev.key === 'Escape' && route && route.view === 'timeline' && !$('tldrawer').hidden) {
    ev.preventDefault();
    navigate({view: 'timeline', id: null});
  }
});
