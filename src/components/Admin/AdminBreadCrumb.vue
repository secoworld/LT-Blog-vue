<template>
  <el-breadcrumb
    class="head-bread"
    separator="/"
    style="color: #fff"
    color="#fff"
  >
    <el-breadcrumb-item to="/admin"> 首页 </el-breadcrumb-item>

    <template v-for="(item, index) in breadCrumb" :key="index">
      <el-breadcrumb-item :to="{ name: item.name }">
        {{item.title}}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "AdminBreadCrumb",

  methods: {},
  computed: {
    breadCrumb() {
      return this.$route.meta.breadCrumb;
    },
  },

  watch: {
  },
};
</script>

<style lang="scss" scoped>
.page-head-bread {
  width: 100%;
  font-size: 15px;
}

.el-breadcrumb {
  color: white;
}

.el-breadcrumb-item{
  cursor: pointer;
}

.el-breadcrumb-item >>> span.el-breadcrumb__inner {
  font-size: 18px;
  color: red !important;
}
</style>

<style >
.head-bread ::v-deep .el-breadcrumb__inner {
  font-size: 16px;
  color: #fff !important;
}

.head-bread >>> .el-breadcrumb__inner {
  font-size: 18px;
  color: red !important;
}
</style>