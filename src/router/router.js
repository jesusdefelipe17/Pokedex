import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        redirect: "/Pokemons",
        },
        {
        path: "/Pokemons",
        component: () => import("../views/Pokemons.vue"),
        },
        {
        path: "/Pokemons/:id",
        component: () => import("../views/Habilidades.vue"),
        }
    ],
  });

export default router;