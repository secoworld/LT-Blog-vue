import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '../store/index';
import handleKeepAlive from './func/handleKeepAlive'

export const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    if (to.matched && to.matched[0].name == 'admin') {
        // 添加标签页
        store.commit('ADD_TAB', to);

        // route.name 必须与 component.name 相同，不然无法使用<keep-alive :include>缓存页面
        store.commit('ADD_CACHE_TAB', to.name);

    }
    handleKeepAlive(to);
    next()
})

// router.afterEach((to) => {

//     if (to.matched && to.matched[0].name == 'admin') {
//         let matched = to.matched;
//         // 判断matched是否存在
//         if (matched) {
//             let componetName = matched[matched.length - 1].components.default.name;
//             if(componetName){
//                 console.log(componetName);
//                 store.commit('ADD_CACHE_TAB', componetName);
//             }
            
//         }
//     }
   

// })

export default router