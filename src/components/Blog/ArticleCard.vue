<template>
  <el-card class="article-card">
    <el-row :gutter="20">
      <el-col :span="16" class="article-left">
        <!-- 博客标题 -->
        <div class="article-head">
          <div class="article-category">
            <el-tag effect="dark">
              {{ article.category }}
            </el-tag>
          </div>
          <div class="article-title">
            {{ article.title }}
          </div>
        </div>

        <!-- 博客内容提示 -->
        <div class="article-content">
          {{ article.content }}
        </div>

        <!-- 博客标签 -->
        <!-- 显示标签 -->
        <div class="article-tags">
          <el-tag
            v-for="(tag, index) in article.tags"
            :key="index"
            class="article-tag"
          >
            {{ tag }}
          </el-tag>
        </div>
      </el-col>

      <el-col :span="8" class="article-right">
        <img
          class="article-img"
          v-if="article.imgUrl != undefined"
          :src="article.imgUrl"
          alt=""
        />
        <img class="article-img" v-else src="@/assets/img/article.jpg" alt="" />
      </el-col>
    </el-row>

    <el-divider></el-divider>
    <!-- 博客的作者等详细内容 -->
    <div class="article-detail">
      <div class="detail-item">
        <el-icon><user-filled /></el-icon>
        <span>{{ article.author }}</span>
      </div>

      <div class="detail-item">
        <el-icon><timer /></el-icon>
        <span>{{ article.time }}</span>
      </div>

      <div class="detail-item">
        <el-icon><View /></el-icon>
        <span>{{ article.watch }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      id: Number,
      title: String,
      category: String,
      author: String,
      tags: [String],
      watches: Number,
      show: Boolean,
      time: String,
      url: String,
      imgUrl: {
        type: String,
        default: "@/assets/img/article.jpg",
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.article.imgUrl);
  },
  methods: {
    //   DealContent(content){
    //       return;
    //   }
  },

  computed: {
    getImgUrl() {
      return this.article.imgUrl === undefined
        ? "../../assets/img/article.jpg"
        : this.article.imgUrl;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/global.scss";

.article-card {
  margin-bottom: 10px;
  font-family: $--font-family;

  .article-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.article-tags {
  margin-top: 10px;
  text-align: left;

  .article-tag {
    margin: 5px 5px auto 5px;
    font-size: 13px;

    &:hover {
      cursor: pointer;
    }
  }
}

.article-head {
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  align-items: center;

  .article-category {
    margin-right: 10px;

    .el-tag {
      font-size: 14px;
      padding: 12px 6px;
      font-weight: bolder;
    }
  }

  .article-title {
    font-size: 20px;
    margin: 10px 0;
    font-weight: bolder;
  }
}

.el-divider {
  margin: 8px 0;
}

.article-img {
  width: 100%;
  height: 100%;
  min-height: 50px;
  border-radius: 10px;
}

.article-content {
  text-align: left;
}

.article-detail{
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .detail-item{
    margin-right: 10px;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #303133;
    font-size: 14px;

    .el-icon{
      margin-right: 3px;
    }
  }
}
</style>