<template>
  <div class="admin-menu-box">
    <el-button @click="reverseMenu" class="menu-collapse-btn"
      ><el-icon><fold /></el-icon
    ></el-button>
  
  <admin-menu :menuList="localMenuList" :isCollapse="isCollapse"></admin-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AdminMenu from './AdminMenu/AdminMenu.vue';
export default {
  name: "AdminLeftMenu",
  components:{
    AdminMenu,
  },
  data() {
    return {
      // menuList: [
      //   {
      //     icon: "House",
      //     title: "首页",
      //     name: 'home',
      //     index: 0,
      //     url: "/admin",
      //   },
      //   {
      //     icon: "Notebook",
      //     title: "文章管理",
      //     name: 'article-manage',
      //     index: 1,
      //     url: "/article",
      //     children: [
      //       {
      //         icon: "List",
      //         title: "文章列表",
      //         name: 'artilcle-list',
      //         index: 1,
      //         url: "/admin/article/list",
      //       },
      //       {
      //         icon: "DocumentAdd",
      //        title: "新增文章",
      //        name: 'article-add',
      //         index: 2,
      //         url: "/admin/article/add",
      //       },
      //       {
      //         icon: "edit",
      //         title: "草稿箱",
      //         name: 'article-draft',
      //         index: 3,
      //         url: "/admin/article/draft",
      //       },
      //     ],
      //   },
      //   // 分类
      //   {
      //     icon: "Guide",
      //     title: "分类管理",
      //     name: 'categorys',
      //     index: 2,
      //     url: "/admin/category",
      //   },
      //   // 标签
      //   {
      //     icon: "CollectionTag",
      //     title: "标签管理",
      //     name: 'tags',
      //     index: 3,
      //     url: "/admin/tag",
      //   },

      //   // 友链管理
      //   {
      //     icon: "Link",
      //     title: "友链管理",
      //     name: 'friend-link',
      //     index: 4,
      //     url: "/admin/friendLink",
      //   },

      //   //用户管理
      //   {
      //     icon: "User",
      //     title: "用户管理",
      //     name: 'users',
      //     index: 5,
      //     url: "/admin/users",
      //   },
      // ],
    };
  },

  computed: {
    ...mapState({
      isCollapse: (state) => state.admin.isCollapse,
    }),

    localMenuList(){
      let routes =  this.$router.options.routes;
      let index = routes.findIndex(item => item.name == 'admin');
      if(index >= 0){
        return routes[index].children;
      }else{
        return [];
      }
    }
  },

  methods: {
    reverseMenu() {
      this.$store.commit("reverseAdminMenu");
    },

    handleMenuItem(item){
      this.$store.commit("changeBreadCrumb", item);

      this.$store.commit("ADD_TAB", item);
    }
  },

  mounted(){
    // console.log(this.$router.options)
    // console.log(this.$router.options.routes);
  }
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