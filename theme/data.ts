const data = {
  info: {
    name: '贺永琪',
    position: '软件开发工程师',
    email: 'heyongqi@example.com',
    phone: '138-0000-0000',
    github: 'heyq02',
    location: '北京',
    summary:
      '5年软件开发经验，专注于前端工程化与全栈开发。擅长 React/Vue 生态，熟悉 Node.js 后端开发与云原生部署。对代码质量与用户体验有持续追求，热衷开源社区贡献。',
  },
  skills: [
    { category: '编程语言', items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'] },
    { category: '前端框架', items: ['React', 'Vue 3', 'Next.js', 'Rspress', 'Tailwind CSS'] },
    {
      category: '后端 & 数据库',
      items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Redis', 'MongoDB'],
    },
    {
      category: '工具 & 平台',
      items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Webpack', 'Vite'],
    },
  ],
  experience: [
    {
      company: '某科技有限公司',
      role: '高级前端工程师',
      period: '2022.06 - 至今',
      achievements: [
        '主导电商平台前端架构升级，从 jQuery 迁移至 React + TypeScript，页面加载速度提升 60%',
        '设计并实现组件库，覆盖 50+ 业务组件，被 3 个产品线复用，开发效率提升 40%',
        '搭建前端监控体系，接入性能埋点与异常上报，线上问题发现时间从小时级降至分钟级',
        '指导 4 名初级工程师，建立代码审查规范，团队代码质量评分提升 35%',
      ],
    },
    {
      company: '某互联网公司',
      role: '全栈开发工程师',
      period: '2020.07 - 2022.05',
      achievements: [
        '负责内部管理系统开发，基于 Vue 3 + Node.js，服务 500+ 内部用户日常办公',
        '实现数据可视化大屏，使用 ECharts + WebSocket 实时展示业务指标，支撑管理层决策',
        '优化后端接口性能，通过 Redis 缓存与 SQL 调优，API 平均响应时间从 800ms 降至 200ms',
      ],
    },
  ],
  projects: [
    {
      name: '开源组件库 UIKit',
      tech: ['React', 'TypeScript', 'Storybook', 'Rollup'],
      description:
        '面向中后台场景的 React 组件库，包含表格、表单、图表等 30+ 组件，支持主题定制与国际化。GitHub 800+ Star。',
      link: 'https://github.com/heyq02/uikit',
    },
    {
      name: '智能日程助手',
      tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Vercel'],
      description:
        '基于 AI 的日程管理工具，支持自然语言创建事件、智能冲突检测与日程推荐。月活用户 2000+。',
      link: 'https://github.com/heyq02/scheduler',
    },
    {
      name: '实时协作白板',
      tech: ['Vue 3', 'WebSocket', 'Canvas API', 'Docker'],
      description:
        '支持多人实时协作的在线白板工具，实现画笔、图形、文字等功能，延迟控制在 50ms 以内。',
      link: 'https://github.com/heyq02/whiteboard',
    },
  ],
  education: [
    {
      school: '北京理工大学',
      degree: '本科',
      major: '计算机科学与技术',
      period: '2016.09 - 2020.06',
    },
  ],
};

export default data;
