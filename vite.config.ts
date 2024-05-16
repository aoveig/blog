import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import ElementPlus from "unplugin-element-plus/vite";

const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir);
};

const alias: Record<string, string> = {
  "~": pathResolve("./src")
};

export default defineConfig({
  plugins: [vue(), ElementPlus({})],
  resolve: {
    alias
  }
});
