# 项目协作规则

## 分支工作流

- 任何实质性改动（新步、内容扩写、重构、新功能）都要**从 `develop` 切新分支**做，分支名用英文短横线描述工作内容（如 `image-format-step`、`lofic-vendors`）。
- **不要直接提交到 `develop`**。
- **合回 `develop` 必须走 PR**（`gh pr create`），不直接本地 merge 推送。做完、测试通过后推分支、开 PR，由用户在 GitHub 上合。
- 一行的 typo 修复或 README 字词调整不算实质性改动，可以直接在 `develop` 做。
- 开始前就切分支，不要先在 `develop` 提交再想起来。

## 验证

- 每次改 `js/steps.js`、`js/evolution.js`、`js/route.js`、`js/layout.js`、技术时间线 `js/*tl.js` 或发展史 `js/hist-*.js` 之后跑 `node tests/check.js`，11 项都要过。
- 改了 3D 场景或 UI 之后，起本地 server（见 `.claude/launch.json`）在浏览器里真打开确认。
- 浏览器 HTTP 缓存会咬人，改完 JS 没生效就换端口再起。

## 风格

- 文字用中文写，技术名词保留英文。
- 代码用 Ponytail 风格：先问能不能不加、能不能用标准库、能不能一行搞定。
- 不写 Markdown 文档除非用户要。
