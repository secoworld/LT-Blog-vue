<template>
  <div class="header-container">
    <div class="header-left">
      <div class="header-logo">LT's Blog 管理后台</div>
      <div class="header-bread">
        <admin-bread-crumb></admin-bread-crumb>
      </div>
    </div>

    <div class="header-right">
      <div class="blog-home" @click="goHome">
        <el-icon :size="30"><HomeFilled /></el-icon>主页
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

export default {
  name: "AdminHeader",
  components: {
    AdminBreadCrumb,
  },
  methods: {
    goHome() {
      this.$router.push("/");
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

  .header-left{
     @extend .flex-rows-center-middle;

     .header-bread{
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

  .blog-home {
    @extend .flex-rows-center-middle;
    margin-right: 20px;
    cursor: pointer;
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