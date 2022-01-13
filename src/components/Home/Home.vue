<template>
  <el-conatiner>
    <el-header>
      <blog-header></blog-header>
    </el-header>

    <el-main>
      <div>
        <router-view />
      </div>
    </el-main>

    <el-footer>
      <blog-footer></blog-footer>
    </el-footer>
  </el-conatiner>
</template>

<script>
import BlogFooter from "../Blog/BlogFooter.vue";
import BlogHeader from "../Blog/BlogHeader.vue";

export default {
  name: "home",
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>