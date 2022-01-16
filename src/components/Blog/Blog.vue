<template>
  <div class="container">
    <el-row :gutter="20" type="flex">
      <el-col :span="18" :xs="24" >
        <article-list></article-list>
      </el-col>

      <el-col :span="6" :xs="24" class="right-col"> 
        <right-menu />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from "./ArticleList.vue";
import rightMenu from "../RightMenu/RightMenu.vue"
export default {
  components: { ArticleList, rightMenu },
  name: "Blog",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_container.scss";

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.right-col{
  width: 100%;
}
</style>