/*
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-05-12 01:39:50
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-10-08 23:02:41
 * @FilePath: \tgvue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: () =>
                import ('../views/home'),
            meta: { title: '100元话费领取' }
        },
        {
            path: '/rule',
            component: () =>
                import ('../views/rule'),
        },
        {
            path: '/pay',
            component: () =>
                import ('../views/pay'),
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '话费月月领取';
    next();
    if (_hmt) {
        if (to.path) {
            _hmt.push(['_trackPageview', '/#' + to.fullPath]);
        }
    }
    next();
});


export default router