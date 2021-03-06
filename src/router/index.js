import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/portifolio/projetos",
    name: "Projetos",
    component: () => import("../components/Projetos.vue"),
  },
  {
    path: "/portifolio/projetos/coletor",
    name: "Coletor",
    component: () => import("../components/Coletor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
