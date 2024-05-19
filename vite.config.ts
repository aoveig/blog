import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import ElementPlus from "unplugin-element-plus/vite";
import Markdown from "unplugin-vue-markdown/vite";
import Pages from "vite-plugin-pages";

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
      dirs: "pages/blog",
      extendRoute(route) {
        route.path = `/article${route.path}`;
        return {
          ...route,
          meta: { auth: true }
        };
      }
    })
  ],
  resolve: {
    alias
  }
});
