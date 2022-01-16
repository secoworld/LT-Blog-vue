
const admin = {
    state: {
        isCollapse: false,
        breadCrumb: [{
            title: '首页',
            name: 'home',
            url: '/admin',
            icon: 'House',
        },],
        activeTab: "首页",
        tabs: [
            {
                icon: "House",
                title: "首页",
                name: 'home',
                index: 0,
                url: "/admin",
            },
        ],
        cacheTabList: ["首页"],

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

        // 添加tab
        addTabs(state, item){
            let k = state.tabs.findIndex(val => val.title == item.title);
            // console.log("激活tab, k=", k, item)
            if(k == -1){
                state.tabs.push(item);
            }
            state.activeTab = item.title;
        },

        // 激活tab
        activeTabs(state, title){
            let k = state.tabs.findIndex(val => val.title == title);
            let len = state.tabs.length-1;
            if(k < 0 && k > len){
                state.activeTab = state.tabs[len].title;
            }else{
                state.activeTab = state.tabs[k].title;
            }
        },

        // 移除tab
        removeTabs(state, title){
            let k = state.tabs.findIndex(val => val.title == title);
            let len = state.tabs.length - 1;
            // console.log("移除tab, k=",k,", len=", len, name);
            if(k == 0) return;

            if(k == len){
                state.tabs.splice(k, 1);
                state.activeTab = state.tabs[len - 1].title;
            }else{
                state.activeTab = state.tabs[k - 1].title;
                state.tabs.splice(k, 1);
            }
        }
    }
}

export default admin