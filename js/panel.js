/* 讲解栏渲染 — 依赖 CHAPTERS、STEPS（steps.js）和 $（core.js） */

function renderPanel(i) {
  const s = STEPS[i];

  /* #prog ： 进度条宽度 */
  $('prog').style.width = (i / (STEPS.length - 1) * 100).toFixed(2) + '%';

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

  /* 抽屉「深入」：进阶，后接硬核（没有硬核时连小标题一起藏） */
  $('adv').innerHTML = s.adv || '';
  $('hard').innerHTML = s.hard || '';
  $('hardh').hidden = !s.hard;

  /* 抽屉「来龙去脉」：这一步背后的技术是哪年、为什么出现的；点卡片去时间轴 */
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

}
