<template>
  <el-breadcrumb class="head-bread" separator="/" color="#fff">
    <template v-for="(item, index) in breadCrumb" :key="index">
      <el-breadcrumb-item :to="item.url" @click="handleBread(item)">{{
        item.title
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdminBreadCrumb",

  methods: {
    handleBread(item) {
      this.$store.commit("changeBreadCrumb", item);
    },
  },
  computed: {
    ...mapState({
      breadCrumb: (state) => state.admin.breadCrumb,
    }),
  },

  watch: {
    breadCrumb(newVal, oldVal) {
      console.log("监听breadCrumb", newVal, oldVal);
    },
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


.el-breadcrumb-item >>> span.el-breadcrumb__inner {
  font-size: 18px;
  color: red !important;
}
</style>

<style lang="scss">
.head-bread ::v-deep .el-breadcrumb__inner  {
  font-size: 16px;
  color: #fff !important;
}

.head-bread>>>.el-breadcrumb__inner  {
  font-size: 18px;
  color: red !important;
}
</style>