import  { createRouter, createWebHistory }  from 'vue-router'

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
    },{
        path: '/admin',
        name: 'admin',
        component: () => import('@/pages/admin/Admin.vue'),
        children:[
            {
                path: '',
                name: 'index',
                component: ()=> import('@/components/Admin/index.vue'),
            },
            {
                path: 'article/add',
                name: 'article-add',
                component: ()=> import('@/pages/admin/article/Add.vue'),
            },
            {
                path: ':url(.*)',
                name: 'all',
                component: ()=> import('@/components/Admin/index.vue'),
            },
        ]
    },
    {
        path: "/:url(.*)",
        component: ()=> import('@/pages/error/404.vue'),
       
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
}) 