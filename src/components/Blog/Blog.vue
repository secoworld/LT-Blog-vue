<template>
  <el-rows :gutter="20">
    <el-col :span="16">
      <article-list></article-list>
    </el-col>

    <el-col :span="8"> <div>hha</div> </el-col>
  </el-rows>
</template>

<script>
import ArticleList from './ArticleList.vue';
export default {
  components: { ArticleList },
  name: "Blog",
  
};
</script>

<style scoped>
</style>