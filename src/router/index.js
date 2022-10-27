import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DonutShop from "../views/DonutShop.vue";
import AboutDonuts from "../views/AboutDonuts.vue";
import AboutUs from "../views/AboutUs.vue";
import SingleDonut from "../views/SingleDonut.vue";
import ContactPage from "../views/ContactPage.vue";
import BasketPage from "../views/BasketPage.vue";
import PaymentPage from "../views/PaymentPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/Donutshop", component: Home },
    { path: "/DonutStore", component: DonutShop },
    { path: "/AboutDonuts", component: AboutDonuts },
    { path: "/AboutUs", component: AboutUs },
    { path: "/donut/:id", component: SingleDonut },
    { path: "/Contact", component: ContactPage },
    { path: "/BasketPage", component: BasketPage },
    { path: "/PaymentPage", component: PaymentPage },
  ],
});

export default router;
