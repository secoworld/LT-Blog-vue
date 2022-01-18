<template>
  <div>
    <el-card class="admin-tab">
      <div class="tag-group">
        <el-tag
          v-for="(item, index) in tabs"
          :key="index"
          :closable="item.title != '首页'"
          :class="['head-tab', item.name == activeTab ? 'active-tab' : '']"
          @close="handleTabs(item.name)"
          @click="activeTabs(item.name)"
          @contextmenu.prevent="rightClickTab($event, item.name)"
        >
          {{ item.title }}
        </el-tag>
      </div>

       

      <!-- <context-menu
      :menu="menu"
      :routeName="routeName"
      :style="style"
      :show="show"
      v-if="show"
    ></context-menu> -->
    </el-card>
    
     <div>
       <ul v-show="show" :style="style" class="contextmenu-wrapper">
        <template v-for="(item, index) in menu" :key="index">
          <li @click="item.onClick(routeName)">
            {{ item.label }}
          </li>
        </template>
      </ul>
     </div>
  
  </div>
</template>

<script>
import { nextTick } from '@vue/runtime-core';
import { mapState } from "vuex";
// import ContextMenu from "@/plugin/contextmenu/ContextMenu";
export default {
  name: "adminTabs",
  components: {
    // ContextMenu,
  },
  data: () => {
    return {
      localActiveTab: "首页",
      show: false,
      routeName: "",
      style: { left: "0", top: "0" },
      menu: [],
      reload: true,
    };
  },

  computed: {
    ...mapState({
      activeTab: (state) => state.admin.activeTab,
      tabs: (state) => state.admin.tabs,
    }),
  },

  methods: {
    handleTabs(name) {
      this.$store.commit("REMOVE_TAB", name);
    },

    activeTabs(name) {
      this.$store.commit("ACTIVE_TAB", name);
    },

    clickTab(item) {
      console.log(item);
    },

    // 重新加载页面
    reloadTab(routeName) {
      this.$store.commit("SET_RELOAD", false);
      this.$store.commit("REMOVE_CACHE_TAB", routeName);
      nextTick(() => {
        this.$store.commit("SET_RELOAD", true);
        this.$store.commit("ADD_CACHE_TAB", routeName);
      })
    },

    // 鼠标右键点击事件
    rightClickTab(event, name) {
      this.routeName = name;
      
      this.show = true;
      this.style = {
        left: event.clientX -5 + 'px',
        top: event.clientY -10 + 'px'
      }
    },

    // 初始化创建右键显示菜单
    createContextMenu() {
      let conetextMenu = [
        {
          label: "刷新",
          onClick: (routeName) => {
            this.reloadTab(routeName);
          },
        },
        {
          label: "关闭",
          onClick: (routeName) => {
            this.handleTabs(routeName);
          },
        },
        {
          label: "关闭右侧",
          onClick: (routeName) => {
            this.$store.commit("REMOVE_RIGHT_TAB", routeName);
          },
        },
        {
          label: "关闭其他",
          onClick: (routeName) => {
            this.$store.commit("REMOVE_OTHER_TAB", routeName);
          },
        },
        {
          label: "关闭所有",
          onClick: () => {
            this.$store.commit("REMOVE_ALL_TAB");
          },
        },
      ];

      this.menu = conetextMenu;
    },

    closeMenu(){
      this.show = false;
    }
  },

  watch: {
    // 监听body的点击事件，如果菜单显示，其他区域发生点击事件，菜单显示消失。
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },

  // 模块加载后
  mounted() {
    this.createContextMenu();
  },
};
</script>

<style lang="scss" scoped>
.admin-tab {
  padding: 0px;
  position: relative;

  ::v-deep .el-card__body {
    padding: 0px;

    .el-tabs__header {
      margin: 0px;
    }
  }

  .tag-group {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .head-tab {
      background-color: #fff;
      color: rgb(48, 49, 51);
      font-size: 14px;
      font-weight: bold;
      padding: 20px 20px;
      cursor: pointer;
      margin-left: 5px;

      & >>> .el-tag__close {
        right: -3px;
        margin-left: 10px;
      }
    }

    .active-tab {
      background-color: #ecf5ff;
      color: #409eff;
    }
  }
}
.contextmenu {
  position: absolute;
}
.contextmenu-wrapper {
  width: fit-content;
    position: fixed;
    padding: 0.5rem 0;
    background-color: #fff;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    z-index: 9999;

  li {
      cursor: pointer;
    font-size: .875rem;
    padding: 0.5rem 1rem;
    list-style-type: none;

    &:hover {
      background-color: rgba(144, 147, 153, 0.1);
    }
  }
}
</style>