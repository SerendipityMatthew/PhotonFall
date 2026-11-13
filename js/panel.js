/* 讲解栏渲染 — 依赖 CHAPTERS、STEPS（steps.js）和 $（core.js） */

function renderPanel(i) {
  const s = STEPS[i];

  /* 下面要整块重写 #chnav / #sub：先记住键盘焦点在哪个药丸上，重写后还给同一个 */
  const fa = document.activeElement;
  const fNav = fa && fa.closest && fa.closest('#chnav, #sub');
  const fSel = !fNav ? '' : fa.dataset.ch !== undefined ? `[data-ch="${fa.dataset.ch}"]`
    : fa.dataset.i !== undefined ? `[data-i="${fa.dataset.i}"]` : '[data-timeline]';

  /* #chnav ： 章节按钮 + 时间轴入口 */
  $('chnav').innerHTML = CHAPTERS.map(ch =>
    `<button data-ch="${ch.id}"${s.ch === ch.id ? ' aria-current="true"' : ''}>${ch.name}</button>`
  ).join('') + '<button data-timeline>🕰 时间轴</button>';

  /* #prog ： 进度条宽度 */
  $('prog').style.width = (i / (STEPS.length - 1) * 100).toFixed(2) + '%';

  /* #sub ： 本章各步按钮 */
  $('sub').innerHTML = STEPS.map((st, idx) =>
    st.ch !== s.ch ? '' :
    `<button data-i="${idx}"${idx === i ? ' aria-current="true"' : ''}>${st.t}</button>`
  ).join('');

  /* 文字内容 */
  $('title').textContent = s.t;
  $('lead').innerHTML = s.lead || '';

  /* 给 #lead [data-hl] 绑定点击和悬停（Task 6）
     hover 只高亮标注（nudge=false）；click 和键盘还推镜头（nudge=true） */
  $('lead').querySelectorAll('[data-hl]').forEach(kEl => {
    kEl.setAttribute('tabindex', '0');
    kEl.setAttribute('role', 'button');
    kEl.onmouseenter = () => hl(kEl.dataset.hl);
    kEl.onclick      = () => hl(kEl.dataset.hl, true);
    kEl.onkeydown = e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hl(kEl.dataset.hl, true); }
    };
  });

  /* 进阶折叠块 — 始终存在，内容填充 */
  $('adv').innerHTML = s.adv || '';

  /* 硬核折叠块 — 无内容时整块隐藏 */
  const hasHard = !!s.hard;
  $('hardwrap').hidden = !hasHard;
  if (hasHard) $('hard').innerHTML = s.hard;

  /* 演进卡：这一步背后的技术是哪年、为什么出现的；点卡片去时间轴 */
  const evs = evoForStep(i);
  $('evo').innerHTML = !evs.length ? '' : '<h3 class="evo-h">这一步背后的技术演进</h3>' + evs.map(e =>
    `<article class="evo-card" data-id="${e.id}">
      <div class="evo-top">
        <div><p class="evo-meta"><time>${e.year}</time> · ${ERAS.find(x => x.id === e.era).name} · ${LANES.find(x => x.id === e.lane).name}</p>
        <h4><button type="button" class="evo-open">${e.title}</button></h4></div>
        <canvas aria-hidden="true"></canvas>
      </div>
      ${evoBoxes(e)}
      <p class="evo-more" aria-hidden="true">在时间轴上看前因后果</p>
    </article>`).join('');
  $('evo').querySelectorAll('.evo-card').forEach((card, k) => {
    evoPaint(card.querySelector('canvas'), evs[k], 72, 54);
    card.onclick = () => navigate({view: 'timeline', id: card.dataset.id});
  });

  /* 前后步标题 & 按钮可用性 */
  $('prevt').textContent = i > 0 ? STEPS[i - 1].t : '';
  $('nextt').textContent = i < STEPS.length - 1 ? STEPS[i + 1].t : '';
  $('prev').disabled = i === 0;
  $('next').disabled = i === STEPS.length - 1;
  /* 焦点所在的按钮刚变成不可用：交给另一个按钮，免得掉到 <body> */
  if (fa === $('next') && fa.disabled) $('prev').focus();
  if (fa === $('prev') && fa.disabled) $('next').focus();
  if (fNav) (fNav.querySelector(fSel) || fNav.querySelector('[aria-current="true"]') || $('title')).focus({preventScroll: true});

  $('panel').scrollTop = 0;

  /* 手机上药丸一行横向滚动：把当前章、当前步滚到中间（只动横向，不碰页面纵向） */
  for (const nav of [$('chnav'), $('sub')]) {
    const cur = nav.querySelector('[aria-current="true"]');
    if (!cur || nav.scrollWidth <= nav.clientWidth) continue;
    const a = nav.getBoundingClientRect(), b = cur.getBoundingClientRect();
    nav.scrollLeft += b.left - a.left - (a.width - b.width) / 2;
  }
}
