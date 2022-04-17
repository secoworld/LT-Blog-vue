<template>
  <el-card>
    <el-form label-width="120px">
      <!-- 文章标题 -->
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>

      <!-- 文章类型 -->
      <el-form-item label="分类">
        <el-select placeholder="文章分类" v-model="article.category"> </el-select>
      </el-form-item>

      <!-- 文章标签 -->
      <el-form-item label="标签">
        <el-select multiple placeholder="标签" v-model="article.tags"> </el-select>
      </el-form-item>

      <!-- 文章内容 -->
      <el-form-item label="文章内容" label-position="top">
        <!-- <el-input type="textarea" placeholder="文章内容" :autosize="{ minRows: 8, maxRows: 15 }"> </el-input> -->
        <MarkdownEditor v-model:content="article.content"/>
      </el-form-item>

      <!-- 点击按钮 -->
      <el-form-item>
        <el-button type="primary">暂存</el-button>
        <el-button type="success">发表</el-button>
        <el-button type="danger">删除</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import MarkdownEditor from '@/components/editor/MarkdownEditor.vue'

export default {
  name: "articleAdd",
  components: {
    MarkdownEditor,
  },
  data() {
    return {
     
       article: {
        id: Number,
        title: "",
        category: "",
        tags: [],
        content: "",
      }
    };
  },
  methods: {},
};
</script>

<style>
</style>