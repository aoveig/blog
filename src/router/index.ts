import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
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
