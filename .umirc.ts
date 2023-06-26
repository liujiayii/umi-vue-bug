import { defineConfig } from "umi";

export default defineConfig({
  plugins: ["@umijs/plugins/dist/qiankun"],
  qiankun: {
    slave: {},
  },
  npmClient: 'pnpm',
  presets: [require.resolve('@umijs/preset-vue')],
});
