import { createRouter, createWebHistory } from 'vue-router'
import Models from '@/views/Models'
import About from '@/views/About'
import Model from '@/views/Model'
import CrossValidation from '@/views/CrossValidation'
import GetInvolved from '@/views/GetInvolved'
import MissingModels from '@/views/MissingModels'
import Copyright from '@/views/Copyright'
import Privacy from '@/views/Privacy'
import LandingPage from '@/views/LandingPage'
import UnderConstruction from '@/views/UnderConstruction'
import NotFound from '@/views/NotFound'
import Credits from '@/views/Credits'

const routes = [
    {
        path: '/models',
        name: 'models',
        component: Models
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/models/:id',
        name: 'model',
        component: Model
    },
    {
        path: '/cross-validation',
        name: 'cross-validation',
        component: CrossValidation
    },
    {
        path: '/missing-models',
        name: 'missing-models',
        component: MissingModels
    },
    {
        path: '/get-involved',
        name: 'get-involved',
        component: UnderConstruction
    },
    { 
        path: '/faq',
        name: 'faq',
        component: UnderConstruction
    },
    { 
        path:'/copyright',
        name: 'copyright',
        component: Copyright
    },
    { 
        path: '/privacy',
        name: 'privacy',
        component: Privacy
    },
    { 
        path: '/credits',
        name: 'credits',
        component: Credits
    },
    {
        path: '/',
        name: 'landing',
        component: LandingPage
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router