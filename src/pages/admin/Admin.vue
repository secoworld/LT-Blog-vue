<template>
  <el-container class="admin-contanier">
    <el-header height="51px">
      <admin-header />
    </el-header>
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <admin-left-menu></admin-left-menu>
      </el-aside>

      <!-- 右侧显示内容栏 -->
      <el-main height="">
        <admin-tabs id="contextmenu"> </admin-tabs>
        <!-- Main content -->
        <!-- 实现缓存 -->
        <!-- <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="$route.name" />
            </keep-alive>
        </router-view> -->
        <router-view v-slot="{ Component }">
          <keep-alive :include="cacheTabList">
            <component :is="Component" v-if="reload" :key="$route.name" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import AdminHeader from "../../components/Admin/AdminHead.vue";
import AdminLeftMenu from "../../components/Admin/AdminLeftMenu.vue";
import AdminTabs from "../../components/Admin/AdminTabs.vue";
export default {
  name: "admin",
  components: {
    AdminHeader,
    AdminLeftMenu,
    AdminTabs,
  },

  data: () => {
    return {};
  },

  computed: {
    ...mapState({
      isCollapse: (state) => state.admin.isCollapse,
      cacheTabList: (state) => state.admin.cacheTabList,
      reload: (state) => state.admin.reload,
    }),
  },
  methods: {},
  watch: {},
  mounted() {
  },
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

.el-main {
  padding: 0px;
}
</style>