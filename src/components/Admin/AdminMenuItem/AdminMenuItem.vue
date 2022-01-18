<template>
  <template v-for="(item, index) in menuItems" :key="index">
    <!-- 子目录  -->
    <el-sub-menu :index="item.name" v-if="item.type === 'submenu'">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </template>

      <!-- 判断是否还有子节点 -->
      <template v-if="item.children">
        <admin-menu-item :menu-list="item.children"></admin-menu-item>
      </template>
    </el-sub-menu>

    <!-- 如果是分组 -->
    <template v-if="item.type === 'group'">
      <el-menu-item-group>
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <template v-if="item.children">
          <admin-menu-item :menu-list="item.children"></admin-menu-item>
        </template>
      </el-menu-item-group>
    </template>

    <!-- 如果是子节点 -->
    <el-menu-item
      v-if="item.type === 'item'"
      :index="item.name"
      @click="handleMenuItem($event, item)"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>
        {{ item.title }}
      </template>
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: "admin-menu-item",
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },

  computed: {
    menuItems() {
      let list =  this.menuList.map((item) => {
        let temp = { name: item.name };
        if (item.meta) {
          temp = { ...temp, ...item.meta };
        }
        if (item.children) {
          temp.children = item.children;
        }
        return temp;
      });

     
      return list;
    },
  },
  methods: {
    handleMenuItem(event, item) {
      this.$router.push({ name: item.name });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>