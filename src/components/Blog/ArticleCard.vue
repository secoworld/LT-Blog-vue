<template>
  <el-card class="article-card">
    <!-- 显示标签 -->
    <div class="article-tags">
      <el-tag
        type="info"
        v-for="(tag, index) in article.tags"
        :key="index"
        class="article-tag"
      >
        {{ tag }}
      </el-tag>
    </div>
    <div class="article-title">{{ article.title }}</div>
    <div class="article-content">
      {{ article.content }}
    </div>
    <el-divider></el-divider>
    <div class="article-detail">展示作者等信息</div>
  </el-card>
</template>

<script>
export default {
  name: "ArticleCard",
  props: ["article"],
  mounted() {
    // console.log(this.article);
  },
  methods:{
    //   DealContent(content){
    //       return;
    //   }
  }
};
</script>
<style scoped>
.article-card {
  margin-bottom: 10px;
}

.article-tag {
  margin-right: 8px;
}

.article-title {
  font-size: 2em;
  margin: 10px 0;
}

.el-divider{
    margin: 8px 0;
}
</style>