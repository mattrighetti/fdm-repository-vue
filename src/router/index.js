import { createRouter, createWebHistory } from 'vue-router'
import Models from '@/views/Models'
import About from '@/views/About'
import Model from '@/views/Model'
import CrossValidation from '@/views/CrossValidation'
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
        component: LandingPage,
        meta: {
            title: "Flood Damage Model Repository",
            metaTags: [
                {
                    name: "description",
                    content: "Supporting flood damage modelers in the choice of the best available model for a specific country and a specific problem"
                },
                {
                    property: "og:description",
                    content: "Supporting flood damage modelers in the choice of the best available model for a specific country and a specific problem"
                },
                {
                    property: "og:image",
                    content: "http://www.fdm.polimi.it/img/logos/FDM-Round-Logo-B.png"
                }
            ]
        }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router