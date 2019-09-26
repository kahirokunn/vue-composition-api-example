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
    path: "/example2",
    name: "example2",
    component: () => import("../views/Example2.vue")
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
