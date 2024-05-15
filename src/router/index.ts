import { RouteRecordRaw } from "vue-router";
import Layout from "~/layout/index.vue";

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
      }
    ]
  }
];

export default routes;
