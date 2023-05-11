import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: () =>
                import ('../views/home')
        },
        {
            path: '/rule',
            component: () =>
                import ('../views/rule'),
        },
        {
            path: '/refund',
            component: () =>
                import ('../views/fund'),
        },
    ]
})

export default router