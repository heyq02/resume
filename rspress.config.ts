import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/resume/',
  siteOrigin: 'https://heyq02.github.io',
  title: '贺永琪 - 简历',
  description: '贺永琪的个人简历 - 软件开发工程师',
  icon: '/avator.png',
  lang: 'zh',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/heyq02',
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
  },
});
