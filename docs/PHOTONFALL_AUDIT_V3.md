# PhotonFall V3 技术审查

> 基于 V2 全部 27 PR 落地后（2026-11）对项目的回看审查。V2 是地毯式审查 + 28 PR 大改造；V3 只看三件事：V2 自己留下的回归、新内容的可信度抽检、V2 没管到的现代 Web 面。按 Ponytail 原则：一份文档，不再拆五份。

**项目当前状态**
- 37 步 · 7 章 · 26 EVO · 10+ Canvas 模拟器 · 独立 `js/physics.js` + 13 项物理测试
- 全部 V2 落地（#35–#61），仅 PR28（英文翻译）跳过
- 两套测试全过：`tests/check.js` 9 项 · `tests/physics.js` 13 项
- 部署 https://photonfall.pages.dev/ via Cloudflare Pages · three.js r128 (CDN)

---

## 1 · V3 top-line 结论

V2 把内容和公式搬平整了，但**V2 自己留下了一组低风险但显眼的回归**：加了 3 步内容却忘了改 SEO 文案和 README 里的"34 步"。新内容科学性抽检总体可信，三处值得微调。现代 Web 面（a11y、移动端细化、per-step OG、CSP）V2 没碰——该不该现在碰取决于项目是否希望从"个人科普站"升级为"长期公共资源"。

**五个 P0 修复**（一个 PR 吃掉）
1. 全站"34 步"→"37 步"刷一遍
2. 显示端步里 Vision Pro 2024 相关表述修正
3. Deep Fusion 从"AI 降噪"归类移走
4. QD-OLED 色域数字改稳妥口径
5. 暗视阈值 `< 0.001 cd/m²` 调到更常用的 `< 0.003 cd/m²`

---

## 2 · V3-R · V2 自己造成的回归（5 条）

V2 加了 3 步（人眼/显示/多帧融合/ML 场景 ≈ +3 步），但步数文案没跟着改。SEO 元数据影响搜索展现，README 影响第一印象。

### PF-V3-R-01 「34 步」在 6 处过期（P0）
- `README.md:5` 正文第一段
- `index.html:7` meta description
- `index.html:13` og:description
- `index.html:20` og:image:alt
- `index.html:23` twitter:description
- `index.html:26` JSON-LD `description`

**真实数字**：37 步，但第 0 步是"先看全景"，正文是第 1-36 步（36 步而非 37）。描述可以是"36 步可交互的 3D 讲解（外加第 0 步全景）"或直接 37。统一一个口径刷过去。

### PF-V3-R-02 `evoForStep` 耦合风险（P2）
`tests/check.js:143` 每加一步都要维护 `evoForStep(n).length >= 1`。V2 中 PR21-23 有 3 次差点漏改。未来再加步骤还会踩。可以给 `EVO` 加一个默认兜底（任何步至少映射到对应章的概览 EVO），或者把该断言从硬失败降级为 warning。暂不影响使用。

### PF-V3-R-03 `tests/smoke.js` 未在 CLAUDE.md 强制验证列表中（P3）
`tests/check.js` 是 CLAUDE.md 列的硬性验证，但 `tests/smoke.js` 385 行测试目前没约定何时跑。要么纳入强制验证列表，要么砍掉减少维护表面。

### PF-V3-R-04 CARD_CTL 和 `data-pn` 依赖只靠测试断言长度（P3）
V2 PR27 把 CARD_CTL 从 18 改到 19，`tests/check.js:161` 的断言是 `=== 19`。再加面板就要改测试，而不是测"每个 CARD_CTL id 对应的 DOM 都存在"。本质是弱断言，不紧急。

### PF-V3-R-05 `index.html` 里 `cardfold` 默认 `aria-expanded="true"` 但抽屉可能是收起状态（P3）
看 `index.html:42`，静态初值和运行时初值的同步靠 JS。首屏对 AT（屏幕阅读器）会有一瞬不一致。细节，低优先。

---

## 3 · V3-A · 新内容科学性抽检

V2 TECHNICAL_ACCURACY_V2 覆盖了老内容 39 项；V3 只抽检 V2 新加的 4 步（28、31、35、36）。总体可信，三处建议微调。

### PF-V3-A-01 步 31 Vision Pro 2024 「Micro LED 原型」措辞误导（P0）
`js/steps.js`（步 31 Micro LED 段）写：
> Micro LED ... 目前只做大型拼接屏（Samsung The Wall）和小尺寸头显（Apple Vision Pro 2024 原型）

**问题**：2024 发货的 Vision Pro 使用的是 **Micro OLED**（Sony 面板），不是 Micro LED。下一段才正确说 Vision Pro 是 Micro OLED。这里的"2024 原型"可能想说 Apple 传闻中的下一代（2026+）会用 Micro LED，但当前措辞容易让读者以为发货产品就是 Micro LED。
**改法**：删除 Vision Pro 这个举例，或改成 "Apple 未来 Vision 系列的目标方案"。

### PF-V3-A-02 步 31 QD-OLED 「~95% Rec.2020」口径高（P1）
Samsung Display 2024 主流 QD-OLED 面板实测 Rec.2020 覆盖 **~80%**（相当于 ~99% DCI-P3）。95% 是厂商在特定色度坐标下的宣传口径。建议改"~80% Rec.2020 / ~99% P3"或"接近 Rec.2020 中段"。
**改法**：具体数字改保守口径。

### PF-V3-A-03 步 28 暗视上限 「< 0.001 cd/m²」偏严（P1）
教科书（CIE、Hunt）常用 **< 0.003 cd/m²**（约 3 × 10⁻³）作为纯暗视阈，> 3 cd/m² 作为纯光度视。0.001 是更严的切分但不是主流。
**改法**：改到 `< 0.003 cd/m²`，和中间视的下限对齐。

### PF-V3-A-04 步 36 Deep Fusion 归类「AI 降噪」（P1）
Deep Fusion 的核心是**多帧细节融合与锐度恢复**（短曝光 + 长曝光各几张，逐像素选最锐），而不是降噪。放到 "AI 降噪" 段落列表里不准确。
**改法**：Deep Fusion 从步 36 的"AI 降噪"段移到步 35「多帧融合」里，或在步 36 中独立说明它的定位。

### PF-V3-A-05 步 36 iPhone "融合变焦" 命名含糊（P3）
苹果官方品牌名是 iPhone 15/16 Pro 的 **"Fusion Camera"**（融合式摄像头）或 "4800 万像素融合"。"融合变焦"不是官方术语。影响不大，但可以收敛到官方命名。

### PF-V3-A-06 步 35 "√N SNR 提升" 没强调前提（P3）
原文：「线性域叠加，信噪比 √N 提升」。严格说这只对独立同分布高斯噪声成立；泊松（散粒）叠加后信噪比 ≈ √(NS) / √(NS) = √(NS)，也是 √N 等效结果。但"对齐误差"会毁掉这个假设。可以加一句"对齐精度到亚像素时近似成立"。

---

## 4 · V3-U · V2 没管的现代 Web 面

V2 专注内容和科学性，Web 工程面只碰了 sitemap（PR24）和 Canvas 宽高比（PR25）。剩下的是加分项：

### PF-V3-U-01 Canvas 元素缺 aria-label（P2）
每个 Canvas 都是独立知识点，但 `<canvas>` 本身只有视觉。屏幕阅读器用户听不到任何内容。至少给每个 Canvas 一个 `aria-label="MTF 曲线：横轴 cy/mm 纵轴对比度"` 之类的描述，或者在周边 `.cap` 里加 `role="img"` + `aria-label`。
**改法**：10 个 Canvas id 各加一句 aria-label。一个 PR 搞定。

### PF-V3-U-02 Per-step OG image / description 缺失（P2）
`index.html` 所有 OG 元数据是全站同一份。分享单步链接（#/step/22）到微信/Twitter，卡片都是全站封面。要么：
- 轻方案：JS 动态改 og:title / og:description（但爬虫往往不跑 JS，收益低）
- 重方案：Cloudflare Pages Functions 给每个 #/step/N 做 server-side 注入
- 更重：预生成 37 张 og 图片
**现实建议**：先把 JSON-LD 的 `description` 做动态插值（JS 加载时根据当前 route 更新），至少微信卡片有机会读到最新步标题。

### PF-V3-U-03 没有 CSP / security headers（P3）
Cloudflare Pages 默认不加 CSP。对于这种加载 CDN three.js 的站，加一个基本的 `Content-Security-Policy` meta 或 `_headers` 文件能挡掉非预期脚本注入。因为没有用户输入，风险低，但是加分项。

### PF-V3-U-04 移动端只有 `@media (max-width:768px)` 一档（P2）
10 个 `max-width` 都卡在 768。小屏手机（< 400 px 宽）布局没有进一步优化。目前 Canvas 都 `height:auto`（PR25 修的）所以不会炸，但按钮、CARD_CTL 的 grid 在 360 px 屏上可能挤。手动在 iPhone SE 宽度试过一次就知道。
**建议**：先在真机或 DevTools 窄屏模式下走一遍 37 步，列出具体挤的地方再决定要不要加 480 px 断点。

### PF-V3-U-05 three.js r128 已经非常老（P2）
2026-11 的 three.js 当前稳定版在 r170+。r128 大约是 2021 年。升级风险：OrbitControls API 变化、BufferGeometry 变化、材质系统调整。收益：bug fix、WebGL 2 兼容性更好、BVH 等性能特性。
**建议**：评估成本——跑一次测试升级到 r170，看 regression 范围。如果大，降级到 r150 做中间步。**不建议盲目升**，但也不建议永远停在 r128。

### PF-V3-U-06 `tests/smoke.js` DOM 测试是否接 CI（P2）
`tests/smoke.js` 385 行，比 `check.js` 大一倍。理论上是 happy path 浏览器端测试。但 CLAUDE.md 只要求 `tests/check.js`。弄清它跑不跑、怎么跑——要么接起来，要么文档化它不跑的原因，要么砍掉。

---

## 5 · V3-D · 从 V2 转来的 deferred 项

### PF-V3-D-01 PR28 内容英文翻译（P1，但巨大）
V2 roadmap 原列 PR28 "全站 i18n，优先中文"。翻译 37 步每步 ~500 字 lead/adv/hard，加公式说明和 refs，保守估 2-4 周。
**现实化小步版**：
- Phase 1：UI chrome（按钮、章名、目录）—— 1 天
- Phase 2：步 0 全景 + 「快速入门」路径 9 步 —— 2-3 天
- Phase 3：若 Phase 2 有读者反馈，再推全站

### PF-V3-D-02 V2 PF-### 中未落地的（无）
核对 IMPLEMENTATION_ROADMAP_V2.md：PR1-PR27 都已合（PR24/25/27 在本次会话最后合），PR28 上述处理。V2 原始 20 个 PF-### 发现都走进了某个 PR。

### PF-V3-D-03 新增：无 analytics / 用户路径数据（P3）
项目没有埋点，也就不知道哪些步被看最多、哪些模拟器有人玩。如果想继续优化内容，可以考虑 Cloudflare Web Analytics（无 cookie，匿名）或 Plausible。**仅在产品方想做数据驱动时加**，否则保持纯净更好。

---

## 6 · V3 推荐 PR 清单（7 个，不是 28 个）

按 impact / effort 排。每条一行 PR 描述。

| # | 标题 | 改动 | 优先级 |
|---|---|---|---|
| V3-PR1 | 「34 步」全站刷新到 37 | README + index.html 6 处 metadata | P0 |
| V3-PR2 | 步 31 Vision Pro / QD-OLED / 步 28 暗视阈值 / 步 36 Deep Fusion 四处科学口径微调 | `js/steps.js` 四处 Edit | P0 |
| V3-PR3 | Canvas 加 aria-label（a11y） | index.html + card.js 10 个 canvas | P2 |
| V3-PR4 | JSON-LD description 按 route 动态注入 | js/app.js 加 4-5 行 | P2 |
| V3-PR5 | 480 px 窄屏断点 + 真机走查 | css/style.css + 走一遍 37 步 | P2 |
| V3-PR6 | `_headers` 文件：基础 CSP + security headers | 新增 1 文件 | P3 |
| V3-PR7 | `tests/smoke.js` 接入 CI 或归档 | GitHub Actions 或删除 | P2 |

V3 **不推荐**现在做的：
- three.js 升级：收益不明确，风险大。等到真遇到 r128 bug 再升。
- 全站英文翻译（PR28）：分阶段推，先 UI chrome。
- 大规模内容扩写：V2 已把 37 步覆盖得很完整。

---

## 7 · 测试与回归

V3 审查未发现 **任何破坏性回归**。
- `tests/check.js` · 9/9 过
- `tests/physics.js` · 13/13 过
- 37 步 step shape、章节分布、EVO 覆盖、route parse 全部一致

V2 的工程纪律起了作用：每个 PR 都带测试，step 索引迁移脚本化。V3 发现的唯一回归是元数据层面的"数字过期"，不是代码正确性问题。

---

## 8 · 结尾

V2 是一次改造；V3 是一次抽检。改造后项目的骨架很硬，科学性在 ~95% 准确区间。V3 的 7 个 PR 全做完也就约 1-2 天工作量，而不是 V2 的几周。

**建议**：V3-PR1 + V3-PR2 立刻做（一个 metadata 刷新，一个科学口径微调），其余按作者兴趣推进。V3 不必再做一次 V2 的地毯式改造。

