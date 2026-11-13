/* 操作提示：第一次进入显示三张小卡，? 按钮可重新打开
   依赖 $（core.js）；在 card.js 之后加载，在 app.js 之前。 */

const ONBOARD_KEY = 'photonfall.onboarded';

const TIPS = [
  '拖动画面可以转动，双指或滚轮缩放。',
  '文字里带下划线的词可以点，3D 里会标出来。',
  '点"下一步"往下走；"详细"里有更深的内容和来龙去脉。',
];

let _onboardIdx = 0;
let _onboardOpener = null;

function onboardSeen() {
  try { return !!localStorage.getItem(ONBOARD_KEY); } catch { return false; }
}

function markOnboard() {
  try { localStorage.setItem(ONBOARD_KEY, '1'); } catch {}
}

function _renderOnboard() {
  $('onboard-t').textContent = TIPS[_onboardIdx];
  $('onboard-btn').textContent = _onboardIdx < TIPS.length - 1 ? '下一张' : '知道了';
  const dots = $('onboard').querySelectorAll('.onboard-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === _onboardIdx));
}

function showOnboard(opener) {
  _onboardIdx = 0;
  _onboardOpener = opener || null;
  _renderOnboard();
  $('onboard').hidden = false;
  $('onboard-btn').focus({ preventScroll: true });
}

function hideOnboard() {
  $('onboard').hidden = true;
  if (_onboardOpener) {
    _onboardOpener.focus({ preventScroll: true });
    _onboardOpener = null;
  }
}

$('onboard-btn').addEventListener('click', () => {
  if (_onboardIdx < TIPS.length - 1) {
    _onboardIdx++;
    _renderOnboard();
    $('onboard-btn').focus({ preventScroll: true });
  } else {
    markOnboard();
    hideOnboard();
  }
});

$('helpbtn').addEventListener('click', () => showOnboard($('helpbtn')));

/* 首次进入自动显示 */
if (!onboardSeen()) showOnboard();
