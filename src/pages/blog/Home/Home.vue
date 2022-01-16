<template>
  <el-container>
    <el-header>
      <blog-header></blog-header>
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer>
      <blog-footer></blog-footer>
    </el-footer>
  </el-container>
</template>

<script>
import BlogFooter from "@/components/Blog/BlogFooter.vue";
import BlogHeader from "@/components/Blog/BlogHeader.vue";

export default {
  name: "home",
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer,
.el-main {
  margin: 0px;
  padding: 0px;
}

.el-header{
  position: sticky;
  top: 0px;
  z-index: 100;
}
</style>