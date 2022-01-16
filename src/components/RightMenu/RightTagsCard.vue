<template>
  <el-card>
    <template #header>
      <div class="tag-header">标签</div>
    </template>
    <div class="card-body">
      <el-tag
        v-for="(item, index) in tags"
        :key="index"
        :color="getColor(index)"
        effect="dark"
      >
        {{ item.name }}
      </el-tag>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "RightTagsCard",
  props: {
    tags: Array,
  },
  data() {
    return {
           colors: ['#99CC33', '#FF6600', '#990033', '#33CC99', '#009966', '#FF9900', '#99CC00'],

    };
  },
   methods:{
      getColor(index){
          return this.colors[index % this.colors.length];
      }
  }
};
</script>

<style lang="scss" scoped>
.tag-header{
    font-size: 18px;
    font-weight: bolder;
}

.el-card ::v-deep .el-card__header{
    padding: 10px ;
}


.card-body{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    .el-tag{
        margin: 5px  5px;
        font-size: 14px;
        padding: 15px 12px;
        border: 0px;
    }
}
</style>