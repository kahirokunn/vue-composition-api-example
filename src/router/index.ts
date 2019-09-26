import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/example",
    name: "example",
    component: () => import("../views/Example.vue")
  },
  {
    path: "/use_mouse_sample",
    name: "use_mouse_sample",
    component: () => import("../views/UseMouseSample.vue")
  },
  {
    path: "/watch_sample",
    name: "watch_sample",
    component: () => import("../views/WatchSample.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
