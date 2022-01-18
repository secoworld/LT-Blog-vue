import router from '@/router';

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
            if(temp){
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
            if(temp){
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
            if(temp){
                state.cacheTabList = JSON.parse(temp);
            }

            index = state.cacheTabList.findIndex(item => item == name);
            console.log("删除CacheList = ", index, name, state.cacheTabList);
            if(index > 0){
                console.log("删除CacheList = ", index,  name,  state.cacheTabList);
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
        }

    }
}

export default admin