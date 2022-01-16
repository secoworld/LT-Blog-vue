<template>
  <el-container class="admin-contanier">
    <el-header height="51px">
      <admin-header />
    </el-header>
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <admin-menu></admin-menu>
      </el-aside>

      <!-- 右侧显示内容栏 -->
      <el-main height="">
        <admin-tabs> </admin-tabs>
        <!-- Main content -->
        <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
        </router-view>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AdminHeader from "../../components/Admin/AdminHead.vue";
import AdminMenu from "../../components/Admin/AdminMenu.vue";

import { mapState } from "vuex";
import AdminTabs from "../../components/Admin/AdminTabs.vue";

export default {
  name: "admin",
  components: {
    AdminHeader,
    AdminMenu,
    AdminTabs,
  },

  data: () => {
    return {};
  },

  computed: {
    ...mapState({
      isCollapse: (state) => state.admin.isCollapse,
      cacheTabList: (state) => state.admin.cacheTabList,
    }),
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.admin-contanier {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: absolute;
}

.el-header {
  background-color: #000;
  color: #eee;
}
</style>