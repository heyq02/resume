import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/base/',
  siteOrigin: 'https://heyq02.github.io',
  title: 'My Site',
  description: '',
  icon: '/rspress-icon.png',
  lang: 'zh',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  llms: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true
  },
});
