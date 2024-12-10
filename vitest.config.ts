/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: ['__tests__/vitest/setup.ts'],
    css: false,
    exclude: ['node_modules', '**/*.e2e-spec.ts'],
    include: ['**\/*{test,spec}.?(c|m)[jt]s?(x)'],
    // ... Specify options here.
  },
  plugins: [tsconfigPaths()],
});
