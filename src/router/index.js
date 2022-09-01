import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DonutShop from "../views/DonutShop.vue";
import AboutDonuts from "../views/AboutDonuts.vue";
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/DonutShop", component: DonutShop },
    { path: "/AboutDonuts", component: AboutDonuts },
    { path: "/AboutUs", component: AboutUs }
  ],
});

export default router;
