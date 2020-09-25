import { createRouter, createWebHistory } from 'vue-router'
import Models from '@/views/Models'
import About from '@/views/About'
import Model from '@/views/Model'

const routes = [{
        path: "/models",
        name: "models",
        component: Models
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/models/:id",
        name: "model",
        component: Model
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router