/* 首页早显示：紧跟 #landing 加载，免得 three.js 下载期间先闪出 3D 主界面。必须是外部文件：_headers 的 CSP 不允许内联脚本。 */
if (!location.hash || location.hash === '#' || location.hash === '#/') document.getElementById('landing').hidden = false;
