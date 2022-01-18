<template>
  <div class="search">
    <el-input
      type="text"
      placeholder="请输入搜索内容"
      :suffix-icon="search"
      v-model="search"
      size="large"
    >
      <template #append>
        <el-button>
          <el-icon class="search" style="vertical-align: middle">
            <search />
          </el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "MySearch",
  data() {
    return {
      search: null,
    };
  },
  methods: {
    getSearch() {
      console.log("点击搜索按钮");
    },
  },
};
</script>

<style lang="scss" scoped>

.search{
  font-size: 16px;
  vertical-align: middle;
}

.el-button{
  vertical-align: middle;
  font-size: 16px;
}
</style>