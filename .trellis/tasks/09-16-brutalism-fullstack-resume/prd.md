# Brutalism fullstack resume site

## Goal

Publish 贺永琪的前端简历站：内容来自真实 PDF 并按技术简历公式改写（不编造量级），Brutalism 单页呈现，Rsbuild + React + Tailwind v4 实现，Rstest 对 `src/` 覆盖率 ≥90%。

## Background

用户要求优化全栈/前端简历、Brutalism 界面、落地实现与 90% 测试覆盖。事实源是 `贺永琪-前端开发工程师.pdf`，辅以用户确认的京东外卖跨端+后台、南邮生医工、GitHub `heyq02`。

## Requirements

- R1. `src/data.json` 为唯一内容源，含：姓名、摘要、分类技能、京东经历、实习、项目、教育；中文正文、英文技术名。
- R2. 身份与时间线与 PDF 一致：贺永琪；京东 2024.06–至今；群杰物联 2023.07–2024.02；汇鑫融智 2023.02–2023.07；南邮生物医学工程本科 2020–2024。
- R3. 经历必须同时覆盖外卖商家后台（财务模块负责人）与跨端（秒送门/Taro、营销 H5）。
- R4. Bullet 用「动作 + 技术 + 结果」改写 PDF 职责；禁止编造 DAU/GMV/耗时；仅保留已有数字（博客 100+、阅读 21w+、日期）。
- R5. 公开联系：`mail@heyq02.cn`、https://github.com/heyq02、http://heyq02.cn。不展示手机号与期望薪资。Vue/Vite 开源贡献无 PR 链接则保持纯文本。
- R6. 界面为 Brutalism：黑白高对比、纯色强调、0 圆角、粗边框、粗字重、可见结构；语义 HTML；可见 focus；skip link；`prefers-reduced-motion`。
- R7. Tailwind v4 `@theme` 语义 token；组件使用 `bg-primary` 等 token，禁止组件内散落原始 hex。
- R8. 保持 Rsbuild 一等配置；类型从 JSON 导入，不在 UI 层复制一份履历字符串。
- R9. Rstest 覆盖 `src/**`，statements/functions/branches/lines 阈值 90%；测试断言公开 UI/数据行为，禁止 tautology。
- R10. `pnpm run check` 与 `pnpm run build` 通过。

## Out of scope

- Word/PDF 导出、CMS、鉴权、i18n 框架、后端 API。
- 编造其他正职、计算机学位、或不可核对的业务量级。
- 展示 PDF 中的期望薪资/手机号。
- 填充空的 Trellis frontend spec 占位（finish 阶段仅在产生真实约定时回写）。

## Acceptance Criteria

- [ ] AC1. 站点渲染改写后的履历，不再出现 Rsbuild starter 文案「Rsbuild with React」。
- [ ] AC2. 页面可见：姓名贺永琪、京东经历、两段实习、南邮生医工、财务模块与秒送门/跨端、邮箱/GitHub/博客链接。
- [ ] AC3. 源码与页面均无手机号、无期望薪资、无虚构的百分比/耗时指标。
- [ ] AC4. `pnpm run test` 启用 coverage，`src/` 四项覆盖率 ≥90%。
- [ ] AC5. `pnpm run check` 与 `pnpm run build` 成功。
- [ ] AC6. 375 / 768 / 1280 宽度无横向滚动；键盘可到达所有链接；对比度满足正文 4.5:1。
