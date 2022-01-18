import adminRoutes from './moudles/admin'

export const routes = [
    {
        path: "",
        redirect: '/blog',
       
    },
    {
        path: '/blog',
        component: () => import('../pages/blog/Home/Home.vue'),
        children: [
            {
                path: '',
                component: () => import('../components/Blog/Blog.vue')
            }
        ]
    },
    {
        path: '/article/:id',
        component: () => import('../components/Article/Article.vue')
    },
    {
        path: '/login',
        component: () => import('../pages/login/LoginPage.vue')
    },
    ...adminRoutes,

    {
        path: "/:url(.*)",
        component: ()=> import('@/pages/error/404.vue'),
       
    },
]

export default routes