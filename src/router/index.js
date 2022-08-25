import { createRouter, createWebHistory } from 'vue-router'
import HelloDonut from '../components/HelloDonut.vue'
import DonutShop from '../components/DonutShop.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloDonut },
        { path: '/DonutShop', component: DonutShop }
    ]
})

export default router

