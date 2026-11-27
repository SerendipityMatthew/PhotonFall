/* 讲解栏渲染 — 依赖 CHAPTERS、STEPS（steps.js）和 $（core.js） */

/* 可信度标签：见 docs/PHOTONFALL_AUDIT.md */
const CAL = {
  confirmed:  {label:'有据可查', hint:'有官方、论文或标准文档可查'},
  general:    {label:'通用原理', hint:'物理、信息论、色彩学等教材里的标准内容'},
  simplified: {label:'简化模型', hint:'为教学简化的模型，不代表真实器件'},
  concept:    {label:'示意图',   hint:'布局、比例、参数只作示意'},
  vendor:     {label:'厂商实现', hint:'某厂商的具体做法，不可推广'},
  estimated: {label:'估算',      hint:'公开资料不足，按业界常见做法估算'},
  todo:       {label:'待验证',   hint:'暂未复核'},
};

function renderPanel(i) {
  const s = STEPS[i];

  /* #prog ： 进度条宽度 */
  $('prog').style.width = (i / (STEPS.length - 1) * 100).toFixed(2) + '%';

  /* 文字内容（按 lang 选 en / zh） */
  const en = typeof getLang === 'function' && getLang() === 'en';
  $('title').textContent = (en && s.tEn) ? s.tEn : s.t;
  $('lead').innerHTML = (en && s.leadEn) ? s.leadEn : (s.lead || '');

  /* KEY IDEA 紫色要点卡：可选字段。按 lang 选 en / zh。 */
  const keyContent = (en && s.keyEn) ? s.keyEn : s.key;
  if (keyContent) { $('keyidea').innerHTML = keyContent; $('keyidea').hidden = false; }
  else $('keyidea').hidden = true;

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

  /* 可信度标签 */
  const cal = (s.cal || []).filter(k => CAL[k]);
  $('cal').innerHTML = cal.map(k => `<span class="cal cal-${k}" title="${CAL[k].hint}">${CAL[k].label}</span>`).join('');
  $('cal').hidden = !cal.length;

  /* 模型限制：对 cal 标签的具体展开。可选字段。按 lang 选。 */
  const limitsText = (en && s.limitsEn) ? s.limitsEn : s.limits;
  if (limitsText) { $('limits').innerHTML = limitsText; $('limits').hidden = false; }
  else $('limits').hidden = true;

  /* 抽屉「深入」：进阶，后接硬核（没有硬核时连小标题一起藏） */
  const advContent = (en && s.advEn) ? s.advEn : (s.adv || '');
  $('adv').innerHTML = advContent;
  $('advh').hidden = !advContent;
  const hardContent = (en && s.hardEn) ? s.hardEn : (s.hard || '');
  $('hard').innerHTML = hardContent;
  $('hardh').hidden = !hardContent;

  /* 来源 */
  const refs = s.refs || [];
  $('refs').innerHTML = refs.map(r =>
    `<li>${r.u ? `<a href="${r.u}" target="_blank" rel="noopener">${r.t}</a>` : r.t}${r.n ? ` — ${r.n}` : ''}</li>`
  ).join('');
  $('refsh').hidden = !refs.length;

  /* 相关知识点：related chips 跳到其他步 */
  const rel = (s.related || []).filter(n => n >= 0 && n < STEPS.length && n !== i);
  $('rel').innerHTML = rel.map(n => `<button type="button" class="rel-chip" data-step="${n}">${STEPS[n].t}</button>`).join('');
  $('relh').hidden = !rel.length;
  $('rel').querySelectorAll('.rel-chip').forEach(b => b.onclick = () => navigate({view:'step', n:+b.dataset.step}));

  /* 抽屉「来龙去脉」：这一步背后的技术是哪年、为什么出现的；点卡片去时间轴 */
  const evs = evoForStep(i);
  $('evo').innerHTML = !evs.length ? '' : evs.map(e =>
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
