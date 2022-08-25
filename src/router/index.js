import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DonutShop from '../views/DonutShop.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/DonutShop', component: DonutShop }
    ]
})

export default router

