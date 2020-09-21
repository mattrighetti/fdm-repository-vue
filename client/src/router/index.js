import { createRouter, createWebHistory } from 'vue-router'
import Models from '@/views/Models'
import About from '@/views/About'

const routes = [{
        path: "/",
        name: "models",
        component: Models
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router