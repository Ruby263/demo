import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("/@/views/Home.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("/@/views/Setting.vue"),
  },
  // 全屏模板
  {
    path: "/large-screen",
    name: "large-screen",
    component: () => import("/@/views/large-screen.vue"),
  },
];

export default createRouter({
  history: createWebHistory("/start-vue3/"),
  routes,
});
