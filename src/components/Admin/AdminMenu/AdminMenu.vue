<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#000"
      text-color="#eee"
      class="admin-menu"
      :default-active="$route.name"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
    <admin-menu-item :menu-list="menuList" ></admin-menu-item>
  </el-menu>
</template>

<script>
import AdminMenuItem from '../AdminMenuItem/AdminMenuItem.vue';

export default {
    name: 'admin-menu',
    props: {
        menuList: {
            type: Array,
            required: true
        },
        isCollapse: Boolean,
    },
    components:{
        AdminMenuItem,
    }
}
</script>

<style lang="scss" scoped>

.admin-menu {
    border-right: 0px;
  }
</style>