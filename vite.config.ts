import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import ElementPlus from "unplugin-element-plus/vite";
import Markdown from "unplugin-vue-markdown/vite";
import Pages from "vite-plugin-pages";
import fs from "fs-extra";
import matter from "gray-matter";

const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir);
};

const alias: Record<string, string> = {
  "~": pathResolve("./src"),
  pages: pathResolve("./pages")
};

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    ElementPlus({}),
    Markdown({}),
    Pages({
      extensions: ["vue", "md"],
      dirs: "pages",
      extendRoute(route) {
        const path = resolve(
          __dirname,
          route.component.slice(1)
        );
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        const pathArr = route.path.split("/");
        route.path = `/article/${pathArr[pathArr.length - 1]}`;
        return {
          ...route,
          meta: { ...data }
        };
      }
    })
  ],
  resolve: {
    alias
  }
});
