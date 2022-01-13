import  { createRouter, createWebHistory }  from 'vue-router'

export const routes = [
    {
        path: "",
        redirect: '/blog',
        component: () => import('../components/Home/Home.vue')
    },
    {
        path: '/blog',
        component: () => import('../components/Home/Home.vue'),
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
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
}) 