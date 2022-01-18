<template>
  <div class="container header-container">
    <el-row :gutter="20" align="middle">
      <el-col :span="6" class="header-logo">
        <!-- 博客LOGO -->
        <div class="header">LT's Blog</div>
      </el-col>

      <el-col :span="12" >
        <!-- 博客菜单 -->
        <div class="header-menu">
          <el-menu
            mode="horizontal"
            background-color="#000"
            text-color="#fff"
            active-text-color="#ffd04b"
            :ellipsis="false"
          >
            <el-menu-item
              v-for="(item, idx) in menuList"
              :key="idx"
              :index="'' + idx "
              >{{ item.name }}</el-menu-item
            >
          </el-menu>
        </div>
      </el-col>
        <el-col :span="4">
         <my-search></my-search>
        </el-col>
      <el-col :span="2">
          <el-button>登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MySearch from "@/components/Search/MySearch"
export default {
  name: "BlogHeader",
  components:{
      MySearch,
  },
  data() {
    return {
      menuList: [
        {
          name: "首页",
          index: 1,
        },
        {
          name: "归档",
          index: 2,
        },
        {
          name: "分类",
          index: 3,
        },
        {
          name: "留言板",
          index: 4,
        },
        {
          name: "个人简介",
          index: 5,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/_container.scss";

.header-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: #000;

  .el-row {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  .header-menu {
    align-self: center;
    height: 100%;

    .el-menu, .el-menu-item{
        height: 100%;
        font-size: 16px;
        font-weight: 550;
        border-bottom: 0px;
    }
  }
}

.header-logo{
  height: 100%;
  display: flex;
  justify-content: flex-start;
} 
.header {
  /* position: sticky; */
  text-align: center;
  font-size: 2em;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  color: #eee;
  height: auto;
}
</style>