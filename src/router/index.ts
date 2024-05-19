import { RouteRecordRaw } from "vue-router";
import Layout from "~/layout/index.vue";
import pages from "~pages";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("~/view/home/index.vue")
      },
      {
        path: "/article",
        name: "Article",
        component: () => import("~/view/article/index.vue"),
        children: pages
      },
      {
        path: "/archive",
        name: "Archive",
        component: () => import("~/view/archive/index.vue")
      },
      {
        path: "/classify",
        name: "Classify",
        component: () => import("~/view/classify/index.vue")
      }
    ]
  }
];

export default routes;
