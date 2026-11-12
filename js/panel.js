/* 讲解栏渲染 — 依赖 CHAPTERS、STEPS（steps.js）和 $（core.js） */

function renderPanel(i) {
  const s = STEPS[i];

  /* #chnav ： 章节按钮 + 时间轴入口 */
  $('chnav').innerHTML = CHAPTERS.map(ch =>
    `<button data-ch="${ch.id}"${s.ch === ch.id ? ' aria-current="true"' : ''}>${ch.name}</button>`
  ).join('') + '<button data-timeline>🕰 时间轴</button>';

  /* #prog ： 进度条宽度 */
  $('prog').style.width = (i / 31 * 100).toFixed(2) + '%';

  /* #sub ： 本章各步按钮 */
  $('sub').innerHTML = STEPS.map((st, idx) =>
    st.ch !== s.ch ? '' :
    `<button data-i="${idx}"${idx === i ? ' aria-current="true"' : ''}>${st.t}</button>`
  ).join('');

  /* 文字内容 */
  $('title').textContent = s.t;
  $('lead').innerHTML = s.lead || '';

  /* 进阶折叠块 — 始终存在，内容填充 */
  $('adv').innerHTML = s.adv || '';

  /* 硬核折叠块 — 无内容时整块隐藏 */
  const hasHard = !!s.hard;
  $('hardwrap').hidden = !hasHard;
  if (hasHard) $('hard').innerHTML = s.hard;

  /* 演化时间轴占位（Task 9 填充） */
  $('evo').innerHTML = '';

  /* 前后步标题 & 按钮可用性 */
  $('prevt').textContent = i > 0 ? STEPS[i - 1].t : '';
  $('nextt').textContent = i < STEPS.length - 1 ? STEPS[i + 1].t : '';
  $('prev').disabled = i === 0;
  $('next').disabled = i === STEPS.length - 1;

  $('panel').scrollTop = 0;
}
