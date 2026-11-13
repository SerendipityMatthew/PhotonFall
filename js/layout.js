/* 布局工具：标注提取、位置文字、控件容器列表 — 无 DOM / THREE 依赖 */

/**
 * 按出现顺序返回 lead 字符串里所有 data-hl="…" 的值，去重。
 * @param {string} lead
 * @returns {string[]}
 */
function mentioned(lead) {
  var seen = new Set();
  var result = [];
  var re = /data-hl="([^"]+)"/g;
  var m;
  while ((m = re.exec(lead)) !== null) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      result.push(m[1]);
    }
  }
  return result;
}

/**
 * 步骤位置的长文字描述。
 * 第 0 步返回 '先看全景'；其余返回 `${ch} ${章名} · 第 ${x}/${y} 步`。
 * @param {number} i
 * @param {Array} steps
 * @param {Array} chapters
 * @returns {string}
 */
function locText(i, steps, chapters) {
  if (i === 0) return '先看全景';
  var ch = steps[i].ch;
  var chName = chapters[ch].name;
  var firstIdx = -1, y = 0;
  for (var j = 0; j < steps.length; j++) {
    if (steps[j].ch === ch) {
      if (firstIdx === -1) firstIdx = j;
      y++;
    }
  }
  var x = i - firstIdx + 1;
  return `${ch} ${chName} · 第 ${x}/${y} 步`;
}

/**
 * 步骤位置的短文字描述。
 * 第 0 步返回 '先看全景'；其余返回 `${ch} ${章名} · ${x}/${y}`。
 * @param {number} i
 * @param {Array} steps
 * @param {Array} chapters
 * @returns {string}
 */
function locShort(i, steps, chapters) {
  if (i === 0) return '先看全景';
  var ch = steps[i].ch;
  var chName = chapters[ch].name;
  var firstIdx = -1, y = 0;
  for (var j = 0; j < steps.length; j++) {
    if (steps[j].ch === ch) {
      if (firstIdx === -1) firstIdx = j;
      y++;
    }
  }
  var x = i - firstIdx + 1;
  return `${ch} ${chName} · ${x}/${y}`;
}

/**
 * 进卡片的控件容器 id 列表（后四个是 Task 2 拆出来的新容器）。
 * @type {string[]}
 */
const CARD_CTL = ['ctl','chipctl','tourpn','coatpn','shutpn','storpn','mlsctl','quadctl','abwrap','pdafctl','snrctl','ibctl','reflctl'];
