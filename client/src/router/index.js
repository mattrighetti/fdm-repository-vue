import Vue from 'vue'
import Router from 'vue-router'
import Models from '@/components/Models'
import Model from '@/components/Model'
import About from '@/components/About'
import GetInvolved from '@/components/GetInvolved'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "models",
            component: Models
        },
        {
            path: "/model/:model_id",
            name: "model",
            model_id: 0,
            component: Model
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/getInvolved",
            name: "get_involved",
            component: GetInvolved
        }
    ]
})