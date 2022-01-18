import AppMain from '@/components/Admin/AppMain/AppMain.vue';

const adminRoutes = [{
    path: '/admin',
    name: 'admin',
    redirect: "/admin/home",
    component: () => import('@/pages/admin/Admin.vue'),
    meta: {
        index: 0,
        icon: "House",
        title: "首页",
        type: 'item',
        url: '/admin/home'
    },
    children: [
        {
            path: 'home',
            name: 'adminHome',
            component: () => import('@/pages/admin/home/adminHome.vue'),
            meta: {
                index: 0,
                icon: "House",
                title: "首页",
                type: 'item',
                url: '/admin/home'
            }
        },
        {
            path: 'article',
            name: 'article',
            redirect: '/admin/article/list',
            component: AppMain,
            meta: {
                index: 1,
                icon: "Notebook",
                title: "文章管理",
                type: 'submenu',
                url: "/admin/article",
            },
            children: [
                {
                    path: 'list',
                    name: 'articleList',
                    component: () => import('@/pages/admin/article/articleList.vue'),
                    meta: {
                        index: 1,
                        icon: "List",
                        title: "文章列表",
                        type: 'item',
                        url: "/admin/article/list",
                    }
                },
                {
                    path: 'add',
                    name: 'articleAdd',
                    component: () => import('@/pages/admin/article/articleAdd.vue'),
                    meta: {
                        index: 2,
                        icon: "DocumentAdd",
                        title: "新增文章",
                        type: 'item',
                        url: "/admin/article/add",
                    }
                },
                {
                    path: 'draft',
                    name: 'articleDraft',
                    component: () => import('@/pages/admin/article/articleDraft.vue'),
                    meta: {
                        index: 3,
                        icon: "edit",
                        title: "草稿箱",
                        type: 'item',
                        url: "/admin/article/draft",
                    }
                },
            ]
        },
        {
            path: 'categorys',
            name: 'categoryList',
            component: () => import('@/pages/admin/categorys/categoryList.vue'),
            meta: {
                index: 2,
                icon: "Guide",
                title: "分类管理",
                type: 'item',
                url: "/admin/category",
            }
        },
        {
            path: 'tags',
            name: 'tagsList',
            component: () => import('@/pages/admin/tags/tagsList.vue'),
            meta: {
                index: 3,
                icon: "CollectionTag",
                title: "标签管理",
                type: 'item',
                url: "/admin/tag",
            }
        },
        {
            path: 'users',
            name: 'users',
            component: () => import('@/pages/admin/user/userList.vue'),
            meta: {
                index: 5,
                icon: "User",
                title: "用户管理",
                type: 'item',
                url: "/admin/users",
            }
        },
        {
            path: 'link',
            name: 'friendLink',
            component: () => import('@/pages/admin/friendLink/friendLink.vue'),
            meta: {
                index: 4,
                icon: "Link",
                title: "友链管理",
                type: 'item',
                url: "/admin/friendLink",
            }
        },
        {
            path: ':url(.*)',
            name: 'all',
            component: () => import('@/pages/admin/home/adminHome.vue'),
        },
    ]
},]

export default adminRoutes;