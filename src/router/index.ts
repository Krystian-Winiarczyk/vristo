import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

const routes: RouteRecordRaw[] = [
    {
        path: '/users',
        name: 'users',
        component: () => import(/* webpackChunkName: "apps-contacts" */ '../pages/Users.vue'),
    },
    {
        path: '/pages/error404',
        name: 'error404',
        component: () => import(/* webpackChunkName: "pages-error404" */ '../pages/Error404.vue'),
        meta: { layout: 'auth' },
    },
    // authentication
    {
        path: '/auth/signin',
        name: 'signin',
        component: () => import(/* webpackChunkName: "auth-boxed-signin" */ '../pages/Signin.vue'),
        meta: { layout: 'auth' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
