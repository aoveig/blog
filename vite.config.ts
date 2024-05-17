import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import ElementPlus from "unplugin-element-plus/vite";
import Markdown from "unplugin-vue-markdown/vite";

const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir);
};

const alias: Record<string, string> = {
  "~": pathResolve("./src")
};

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    ElementPlus({}),
    Markdown({})
  ],
  resolve: {
    alias
  }
});
