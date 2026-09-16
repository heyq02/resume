<p align="center">
  <img src="public/favicon.png" alt="简历站点图标" width="96" height="96">
</p>

# 贺永琪 · 前端开发工程师简历

[![线上站点](https://img.shields.io/badge/GitHub%20Pages-heyq02.github.io%2Fresume-222?style=flat-square)](https://heyq02.github.io/resume/)
[![部署](https://img.shields.io/github/actions/workflow/status/heyq02/resume/github-pages.yml?style=flat-square&label=Deploy)](https://github.com/heyq02/resume/actions/workflows/github-pages.yml)
[![Node.js](https://img.shields.io/badge/Node.js-24-3c873a?style=flat-square)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-11.23.0-f69220?style=flat-square)](https://pnpm.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white)](https://react.dev)

[概览](#概览) • [特性](#特性) • [快速开始](#快速开始) • [定制内容](#定制内容) • [部署](#部署) • [相关资源](#相关资源)

贺永琪的静态单页简历站。正文为中文，技术名词保留英文。界面采用 Brutalism：黑黄高对比、粗边框、零圆角、结构可见。

> [!TIP]
> 线上地址：[https://heyq02.github.io/resume/](https://heyq02.github.io/resume/)

## 概览

这是内容驱动的 SPA，不是 CMS。履历写在一份 JSON 里，React 分区渲染，Rsbuild 产出静态 `dist/` 并发布到 GitHub Pages。

| 层 | 作用 |
| --- | --- |
| `src/data.json` | 唯一内容源（身份、技能、经历、项目、教育） |
| `src/types.ts` | 上述 JSON 的 TypeScript 契约 |
| `src/components/` | 展示型分区（`Hero`、技能、经历、项目、教育） |
| `src/App.css` | Tailwind v4 `@theme` token 与 Brutalism 基础样式 |
| GitHub Actions | 在 `master` 上构建，把 `dist/` 发布到 Pages |

没有后端、没有客户端全局状态、没有网络请求层。公开联系方式仅邮箱、GitHub 和博客。

## 特性

- **单一数据源** — UI 不复制履历文案；各分区从 `data.json` 接收带类型的切片。
- **Brutalism 设计系统** — 组件使用语义 token（`bg-accent`、`border-border`、`shadow-brutal`），不散落原始 hex。
- **可访问地标** — 跳过链接、`<main id="main">`、可见的 `:focus-visible`、以及 `prefers-reduced-motion`。
- **静态部署** — `output.assetPrefix` 为 `/resume/`，资源在 GitHub Pages 下可正确解析。
- **覆盖率门槛** — Rstest + Istanbul 要求 `src/` 的 statements / functions / branches / lines ≥90%。

## 快速开始

### 环境要求

- [Node.js 24](https://nodejs.org/download/)（CI 使用 Node 24；本仓库本地开发目标为 **24.20.0**）
- [pnpm 11.23.0](https://pnpm.io/installation) — 在 `package.json` 的 `packageManager` 中锁定
- [Git](https://git-scm.com/downloads)

> [!IMPORTANT]
> 不要用 npm、yarn 或 bun 安装依赖。包管理器必须是 `pnpm@11.23.0`。

### 安装

```bash
git clone git@github.com:heyq02/resume.git
cd resume
pnpm install
```

### 本地运行

启动开发服务器（默认 [http://localhost:3000](http://localhost:3000)）：

```bash
pnpm run dev
```

生产构建与本地预览：

```bash
pnpm run build
pnpm run preview
```

### 质量检查

```bash
pnpm run check       # Biome 检查并写回
pnpm run format      # 仅 Biome 格式化
pnpm run test        # Rstest，含覆盖率门槛
pnpm run test:watch  # 监听模式
```

## 定制内容

编辑 `src/data.json`，并与 `src/types.ts` 保持一致。页面在 `src/App.tsx` 中按以下顺序组装：

```
Hero → SkillGroups → ExperienceList → ProjectList → Education
```

常用字段：

| 字段 | 说明 |
| --- | --- |
| `name`、`title`、`summary` | 首屏文案 |
| `email`、`github`、`blog` | 公开联系方式（`mailto:` 与外链 `rel="noopener noreferrer"`） |
| `skills.*` | 分组：languages、frameworks、engineering、tools、infra |
| `experiences` / `projects` | `start`/`end` 为 `YYYY.MM` 或 `YYYY`；`end` 可为 `至今` |
| `education` | 学校、学历、专业、证书 |

视觉 token 在 `src/App.css` 的 `@theme` 中（颜色、字体、`shadow-brutal`、零圆角）。不要在组件里散落 hex。

> [!NOTE]
> 站点不展示手机号和期望薪资，请不要写入 `data.json`。

## 部署

推送到 `master` 会触发 [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml)：安装 pnpm 11.23.0，执行 `pnpm run build`，上传 `./dist`，部署到 GitHub Pages。

生产地址是 **https://heyq02.github.io/resume/**，因为 `rsbuild.config.ts` 中配置了：

```ts
output: {
  assetPrefix: '/resume/',
},
```

若 fork 后仓库名不同，把 `assetPrefix` 改成 `/<repo>/`（用户/组织根站点则用 `/`）。然后在 **Settings → Pages → GitHub Actions** 中开启 Pages。

## 目录结构

```
src/
├── data.json          # 履历内容
├── types.ts           # JSON 契约
├── App.tsx            # 跳过链接 + 分区组装
├── App.css            # Tailwind v4 主题与基础样式
├── index.tsx          # createRoot 启动
├── index.html         # 文档 lang=zh-CN
└── components/        # 展示型分区
tests/
├── rstest.setup.ts
└── index.test.tsx     # 数据驱动的 UI 测试
rsbuild.config.ts
rstest.config.ts
```

## 相关资源

- [Rsbuild](https://rsbuild.rs) — 构建与 HTML / output 配置
- [Rspack](https://rspack.rs) — 底层编译器
- [Rstest](https://rstest.rs) — 测试与覆盖率
- [Tailwind CSS v4](https://tailwindcss.com) — `@theme` token
- [React 19](https://react.dev) — UI
- [Biome](https://biomejs.dev) — 检查与格式化
