// Composables
import { createRouter, createWebHistory } from "vue-router";

import RootLayout from "@/layouts/RootLayout.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "projects",
        name: "Projects",
        component: () => import("@/views/Projects.vue"),
      },
      {
        path: "team",
        name: "Team",
        component: () => import("@/views/Team.vue"),
      },
      {
        path: ":match(.*)*",
        component: () => import("@/views/NotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
