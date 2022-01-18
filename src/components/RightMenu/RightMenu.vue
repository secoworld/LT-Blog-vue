<template>
  <div class="right-menu">
    <right-tags-card class="right-item" :tags="list" />
    <right-category class="right-item" :categorys="list" />
  </div>
</template>

<script>
import RightCategory from "./RightCategory.vue";
import RightTagsCard from "./RightTagsCard.vue";
export default {
  name: "rightMenu",
  components: { RightTagsCard, RightCategory },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "html",
        },
        {
          id: 2,
          name: "java",
        },
        {
          id: 3,
          name: "Python",
        },
        {
          id: 4,
          name: "计算机网络",
        },
        {
          id: 5,
          name: "操作系统",
        },
        {
          id: 6,
          name: "数据结构",
        },
        {
          id: 7,
          name: "Go",
        },
      ],
    };
  },
};
</script>

<style scoped>
.right-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.right-item {
  margin: 10px auto;
}
</style>