import { createRouter, createWebHistory } from "vue-router";
import ListUsers from "@/components/views/ListUsers.vue";
import SingleUsers from "@/components/views/SingleUsers.vue";

export const routes = [
  {
    path: "/",
    alias: "/listUsers",
    name: "ListUsers",
    component: ListUsers,
  },
  {
    path: "/singleUSers/:id",
    name: "SingleUsers",
    props: true,
    component: SingleUsers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
