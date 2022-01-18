<template>
  <el-card class="admin-tab" id="admin-tabs">
    <div class="tag-group">
      <el-tag
        v-for="(item, index) in tabs"
        :key="index"
        :closable="item.title != '首页'"
        :class="['head-tab', item.name == activeTab ? 'active-tab' : '']"
        @close="handleTabs(item.name)"
        @click="activeTabs(item.name)"
      >
        {{ item.title }}
      </el-tag>
    </div>
  </el-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "adminTabs",
  data: () => {
    return {
      localActiveTab: "首页",
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
  },

  watch: {
  },
};
</script>

<style lang="scss" scoped>
.admin-tab {
  padding: 0px;
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

      & >>> .el-tag__close{
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
</style>