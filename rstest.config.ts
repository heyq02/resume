import { withRsbuildConfig } from '@rstest/adapter-rsbuild';
import { defineConfig } from '@rstest/core';

// Docs: https://rstest.rs/config/
export default defineConfig({
  extends: withRsbuildConfig(),
  setupFiles: ['./tests/rstest.setup.ts'],
  coverage: {
    enabled: true,
    provider: 'istanbul',
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['src/index.tsx', 'src/types.ts'],
    reporters: ['text'],
    thresholds: {
      statements: 90,
      functions: 90,
      branches: 90,
      lines: 90,
    },
  },
});
