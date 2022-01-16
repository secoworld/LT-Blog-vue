<template>
  <div class="admin-menu-box">
    <el-button @click="reverseMenu" class="menu-collapse-btn"
      ><el-icon><fold /></el-icon
    ></el-button>

    <el-menu
      active-text-color="#ffd04b"
      background-color="#000"
      text-color="#eee"
      class="admin-menu"
      default-active="/admin"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
    >
      <template v-for="(item, index) in menuList" :key="index">
        <!-- 判断是否为父类 -->
        <!-- 如果不是父类，使用el-menu-item -->
        <el-menu-item
          v-if="item.children === undefined || item.children.length == 0"
          :index="item.url"
          @click="handleMenuItem(item)"
        >
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            {{ item.title }}
          </template>
        </el-menu-item>

      <!-- 如果是父类，则使用el-sub-menu -->
        <template v-else>
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>

            <!-- 展开子类 -->
            <el-menu-item
              v-for="(child, idx) in item.children"
              :key="idx"
              :index="child.url"
              @click="handleMenuItem(child)"
            >
              <el-icon>
                <component :is="child.icon"></component>
              </el-icon>
              <template #title>
                {{ child.title }}
              </template>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </template>

    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdminMenu",
  data() {
    return {
      menuList: [
        {
          icon: "House",
          title: "首页",
          name: 'home',
          index: 0,
          url: "/admin",
        },
        {
          icon: "Notebook",
          title: "文章管理",
          name: 'article-manage',
          index: 1,
          url: "/article",
          children: [
            {
              icon: "List",
              title: "文章列表",
              name: 'artilcle-list',
              index: 1,
              url: "/admin/article/list",
            },
            {
              icon: "DocumentAdd",
             title: "新增文章",
             name: 'article-add',
              index: 2,
              url: "/admin/article/add",
            },
            {
              icon: "edit",
              title: "草稿箱",
              name: 'article-draft',
              index: 3,
              url: "/admin/article/draft",
            },
          ],
        },
        // 分类
        {
          icon: "Guide",
          title: "分类管理",
          name: 'categorys',
          index: 2,
          url: "/admin/category",
        },
        // 标签
        {
          icon: "CollectionTag",
          title: "标签管理",
          name: 'tags',
          index: 3,
          url: "/admin/tag",
        },

        // 友链管理
        {
          icon: "Link",
          title: "友链管理",
          name: 'friend-link',
          index: 4,
          url: "/admin/friendLink",
        },

        //用户管理
        {
          icon: "User",
          title: "用户管理",
          name: 'user-manage',
          index: 5,
          url: "/admin/users",
        },
      ],
    };
  },

  computed: {
    ...mapState({
      isCollapse: (state) => state.admin.isCollapse,
    }),
  },

  methods: {
    reverseMenu() {
      this.$store.commit("reverseAdminMenu");
    },

    handleMenuItem(item){
      this.$store.commit("changeBreadCrumb", item);

      this.$store.commit("addTabs", item);
    }
  },
};
</script>

<style lang="scss" scoped>
.admin-menu-box {
  background-color: #000;
  color: #eee;
  height: 100%;

  .menu-collapse-btn {
    max-width: 150px;
    width: 80%;
  }

  .admin-menu {
    border-right: 0px;
  }
}
</style>