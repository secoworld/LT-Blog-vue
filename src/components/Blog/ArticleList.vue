<template>
  <div id="articles">
    <ArticleCard
      v-for="art in articles"
      :key="art.id"
      :article="art"
    ></ArticleCard>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
export default {
  name: "articleList",
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "这是一篇博客",
          content:
            "当一个 Vue 实例被创建时，它将 data 对象返回的所有属性加入到 Vue 的响应式系统中。更神奇的是，当这些属性的值发生改变时，视图将会产生“响应”，即自动更新为新的值。",
          tags: ["vue", "html", "前端"],
          category: "html",
          author: 'longtao',
          time: "2022-01-22 12:22:00",
          watch: 10,
        },
        {
          id: 2,
          title: "这是一篇博客",
          content:
            "当一个 Vue 实例被创建时，它将 data 对象返回的所有属性加入到 Vue 的响应式系统中。更神奇的是，当这些属性的值发生改变时，视图将会产生“响应”，即自动更新为新的值。",
          tags: ["vue", "html", "前端"],
          category: "html",
          author: 'longtao',
          time: "2022-01-22 12:22:00",
          watch: 10,
        },
        {
          id: 3,
          title: "这是一篇博客",
          content:
            "当一个 Vue 实例被创建时，它将 data 对象返回的所有属性加入到 Vue 的响应式系统中。更神奇的是，当这些属性的值发生改变时，视图将会产生“响应”，即自动更新为新的值。",
          tags: ["vue", "html", "前端"],
          category: "html",
          author: 'longtao',
          time: "2022-01-22 12:22:00",
          watch: 10,
        },
        {
          id: 4,
          title: "这是一篇博客",
          content:
            "当一个 Vue 实例被创建时，它将 data 对象返回的所有属性加入到 Vue 的响应式系统中。更神奇的是，当这些属性的值发生改变时，视图将会产生“响应”，即自动更新为新的值。",
          tags: ["vue", "html", "前端"],
          category: "html",
          author: 'longtao',
          time: "2022-01-22 12:22:00",
          watch: 10,
        },
      ],
    };
  },
};
</script>

<style  scoped>
#articles {
  padding: 10px;
}

.article-title {
  font-size: large;
  font-weight: bolder;
  color: black;
  text-decoration: none;
  padding: 5px 0 5px 0;
}

.tag {
  padding: 2px 5px 2px 5px;
  margin: 5px 5px 5px 0;
  font-family: Georgia, Arial, sans-serif;
  font-size: small;
  background-color: #4e4e4e;
  color: whitesmoke;
  border-radius: 5px;
}
</style>