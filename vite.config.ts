/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),
  ],

  optimizeDeps: {
    include: ["vue"],
  },

  // https://github.com/vitest-dev/vitest
  test: {
    globals: true,
    include: ["test/**/*.test.ts"],
    setupFiles: ["test/setup-tests.ts"],
    environment: "happy-dom",
    clearMocks: true,
    restoreMocks: true,
    mockReset: true,
    coverage: {
      provider: "c8",
      clean: true,
      cleanOnRerun: true,
      reporter: ["cobertura", "text", "html"],
      include: ["src/**/*.{vue,ts}"],
    },
    deps: {
      inline: ["@vue"],
    },
  },
});
