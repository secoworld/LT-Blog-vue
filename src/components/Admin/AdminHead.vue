<template>
  <div class="header-container">
    <div class="header-left">
      <div class="header-logo">LT's Blog 管理后台</div>
      <div class="header-bread">
        <admin-bread-crumb></admin-bread-crumb>
      </div>
    </div>

    <div class="header-right">
      <div class="blog-button">
        <div class="menu-icon">
          <el-tooltip effect="dark" placement="bottom" content="刷新">
            <span @click="reloadPage">
              <!-- <svg-icon name="reload" /> -->
              <el-icon :size="30"> <RefreshLeft /></el-icon>
            </span>
          </el-tooltip>
        </div>

        <div class="menu-icon">
          <el-tooltip effect="dark" placement="bottom" content="博客主页">
            <span @click="goHome">
              <el-icon :size="30"><HomeFilled /></el-icon>
            </span>
          </el-tooltip>
        </div>
      </div>

      <div class="header-img">
        <el-dropdown>
          <span class="header-img-dropdwon">
            <el-avatar :size="40" src=""></el-avatar>
            <el-icon :size="20" color="#eee" class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import AdminBreadCrumb from "./AdminBreadCrumb.vue";
import { nextTick } from "vue";

export default {
  name: "AdminHeader",
  components: {
    AdminBreadCrumb,
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },

    reloadPage() {
      let routeName = this.$route.name;
      this.$store.commit("SET_RELOAD", false);
      this.$store.commit("REMOVE_CACHE_TAB", routeName);
      nextTick(() => {
        this.$store.commit("SET_RELOAD", true);
        this.$store.commit("ADD_CACHE_TAB", routeName);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global.scss";

.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-family: $--font-family;
  background-color: #000;
  color: #eee;

  .header-left {
    @extend .flex-rows-center-middle;

    .header-bread {
      margin-left: 20px;
    }
  }

  .header-logo {
    height: 100%;
    vertical-align: middle;
    font-size: 20px;
    font-weight: bolder;
    @extend .flex-rows-center-middle;
  }
}

.header-right {
  @extend .flex-rows-center-middle;

  .blog-button {
    @extend .flex-rows-center-middle;
    margin-right: 20px;
    cursor: pointer;

    .menu-icon{
      padding-top: 3px;
      margin-left: 10px;

      &:active{
        color: #409eff;
      }
    }
  }

  .header-img .el-dropdown .header-img-dropdwon {
    @extend .flex-rows-center-middle;
    margin-right: 10px;
    cursor: pointer;
  }

  & > div {
    vertical-align: middle;
  }
}
</style>