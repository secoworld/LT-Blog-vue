<template>
  <el-card>
    <el-tabs
      v-model="localActiveTab"
      type="card"
      @tab-remove="handleTabs"
      @tab-click="activeTabs"
    >
      <template v-for="(item, index) in tabs" :key="index">
        <el-tab-pane
          :label="item.title"
          :name="item.title"
          :closable="item.title != '首页'"
          @click="clickTab(item)"
        >
          <slot></slot>
        </el-tab-pane>
      </template>
    </el-tabs>
  </el-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "admin-tabs",
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
    handleTabs(tab) {
      this.$store.commit("removeTabs", tab);
    },

    activeTabs(tab) {
      let i = this.tabs.findIndex((item) => item.title == tab.props.name);
      let url = this.tabs[i].url;
      this.$store.commit("activeTabs", tab.props.name);
      this.$router.push(url);
    },

    clickTab(item) {
      console.log(item);
    },
  },

  watch: {
    activeTab(newVal) {
      this.localActiveTab = newVal;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>