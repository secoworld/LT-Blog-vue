import router from '@/router';
import { nextTick } from 'vue';

const admin = {
    state: {
        isCollapse: false,
        breadCrumb: [{
            title: '首页',
            name: 'adminHome',
        },],
        activeTab: "adminHome",
        tabs: [
            {
                title: "首页",
                name: 'adminHome',
            },
        ],
        cacheTabList: ['adminHome'],
        reload: true,

    },

    mutations: {
        // 控制管理界面菜单栏展开与关闭
        reverseAdminMenu(state) {
            state.isCollapse = !state.isCollapse;
        },

        changeBreadCrumb(state, item) {
            let i = state.breadCrumb.findIndex(val => val.title == item.title);
            let len = state.breadCrumb.length;
            if (i == len - 1) return;
            if (i == -1) {
                state.breadCrumb.splice(1, len - 1);
                state.breadCrumb.push(item);
            } else {
                state.breadCrumb.splice(i + 1, len - i - 1);
            }
        },

        // 添加新的标签页
        ADD_TAB(state, to) {
            let temp = localStorage.getItem('activeTabs');
            if (temp) {
                state.tabs = JSON.parse(temp);
            }
            let some = state.tabs.some(it => it.name == to.name);
            if (!some) {
                state.tabs.push({
                    title: to.meta.title,
                    name: to.name,
                });
            }
            state.activeTab = to.name;

            // 存储到localStorage中
            localStorage.setItem('activeTabs', JSON.stringify(state.tabs));
        },

        // 删除标签页
        REMOVE_TAB(state, name) {
            let temp = localStorage.getItem('activeTabs');
            if (temp) {
                state.tabs = JSON.parse(temp);
            }
            let index = state.tabs.findIndex(it => it.name == name);
            if (index > 0) {
                let rmTab = state.tabs[index];
                if (rmTab.name == state.activeTab) {
                    state.activeTab = state.tabs[index - 1].name;
                }
                state.tabs.splice(index, 1);
                router.push({ name: state.activeTab })
            }

            temp = localStorage.getItem('cacheTabList');
            if (temp) {
                state.cacheTabList = JSON.parse(temp);
            }

            index = state.cacheTabList.findIndex(item => item == name);
            console.log("删除CacheList = ", index, name, state.cacheTabList);
            if (index > 0) {
                console.log("删除CacheList = ", index, name, state.cacheTabList);
                state.cacheTabList.splice(index, 1);
            }

            localStorage.setItem('activeTabs', JSON.stringify(state.tabs));
            localStorage.setItem('cacheTabList', JSON.stringify(state.cacheTabList))
        },

        // 激活tab
        ACTIVE_TAB(state, name) {
            let index = state.tabs.findIndex(it => it.name == name);
            if (index >= 0) {
                state.activeTab = state.tabs[index].name;
                router.push({ name: state.activeTab })
            }

        },

        // 增加缓存，缓存对应的列表
        ADD_CACHE_TAB(state, name) {
            let flag = state.cacheTabList.includes(name);
            if (!flag) {
                state.cacheTabList.push(name);
            }

            localStorage.setItem('cacheTabList', JSON.stringify(state.cacheTabList))
        },

        // 删除右侧的标签
        REMOVE_RIGHT_TAB(state, routeName) {

            // console.log("关闭右侧标签");
            this.commit('getCacheActiveTabs');
            this.commit('getcacheTabList')
            

            // 修改打开的标签页栏
            let index = state.cacheTabList.findIndex(item => item === routeName);
            if(index > 0){
                state.cacheTabList = state.cacheTabList.slice(0, index+1);
            }   
            
            // 修改缓存的标签页
            index = state.tabs.findIndex(item => item.name === routeName);
            if(index > 0){
                state.tabs = state.tabs.slice(0, index + 1);
            }

            // 更新当前活动标签页
            if(state.activeTab != routeName){
                router.push({name: routeName})
            }

            this.commit('setCacheActiveTabs')
            this.commit('setCacheTabList')

        },

        // 删除其他标签
        REMOVE_OTHER_TAB(state, routeName){
            this.commit('getCacheActiveTabs');
            this.commit('getcacheTabList')
            
            state.cacheTabList = state.cacheTabList.filter(item => item==='adminHome' || item===routeName);
            state.tabs = state.tabs.filter(item => item.name==='adminHome' || item.name===routeName);
            
            if(state.activeTab != routeName){
                router.push({name: routeName})
            }

            this.commit('setCacheActiveTabs')
            this.commit('setCacheTabList')
        },

        // 删除全部标签
        REMOVE_ALL_TAB(state){
            this.commit('getCacheActiveTabs');
            this.commit('getcacheTabList')
            
            
            state.cacheTabList = state.cacheTabList.filter(item => item==='adminHome' );
            state.tabs = state.tabs.filter(item => item.name==='adminHome');
            
            if(state.activeTab != state.cacheTabList[0]){
                router.push({name: state.cacheTabList[0]})
            }

            this.commit('setCacheActiveTabs')
            this.commit('setCacheTabList')
        },

        // 删除缓存的tab页
        REMOVE_CACHE_TAB(state, routName){
            this.commit('getcacheTabList')
            let index = state.cacheTabList.findIndex(item => item === routName);
            if(index > 0){
                state.cacheTabList.splice(index, 1);
                this.commit('setCacheTabList')
            }
            
        },

        // 设置reload的属性
        SET_RELOAD(state, value){
            state.reload = value;
        },

        // 刷新
        RELOAD(state){
            let tab = state.activeTab;
            let index = state.cacheTabList.findIndex(item => item === tab);
            if(index > 0){
                state.cacheTabList.splice(index, 1);
            }

            nextTick(() => {
                state.cacheTabList.push(tab);
                router.push({name: tab})
            })
        },

        // 获取缓存的CacheTabList
        getcacheTabList(state) {
            let temp = localStorage.getItem('cacheTabList');
            if (temp) {
                state.cacheTabList = JSON.parse(temp);
            }
        },
        // 设置缓存的cacheTabList
        setCacheTabList(state){
            localStorage.setItem('cacheTabList', JSON.stringify(state.cacheTabList))
        },

        // 获取缓存的tabs
        getCacheActiveTabs(state) {
            let temp = localStorage.getItem('activeTabs');
            if (temp) {
                state.tabs = JSON.parse(temp);
            }
        },
        // 设置缓存的tabs
        setCacheActiveTabs(state){
            localStorage.setItem('activeTabs', JSON.stringify(state.tabs));
        }

    }
}

export default admin