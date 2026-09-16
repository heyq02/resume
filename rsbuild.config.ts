import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  output: {
    assetPrefix: '/resume/',
  },
  html: {
    title: '贺永琪 · 前端开发工程师',
    template: './src/index.html',
  },
  plugins: [
    pluginReact({
      // Compiler memo branches are unhit in single-pass tests; keep it for app builds.
      reactCompiler:
        process.env.npm_lifecycle_event !== 'test' &&
        process.env.npm_lifecycle_event !== 'test:watch',
    }),
    pluginTailwindcss(),
  ],
});
