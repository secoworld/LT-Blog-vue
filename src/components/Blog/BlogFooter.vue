<template>
  <div class="container" id="footer">
    <div class="foot-group">
      <el-row :gutter="20">
        <el-col
          :span="8"
          class="foot-item"
          v-for="(item, index) in data"
          :key="index"
        >
          <div class="foot-item-box">
            <div class="item-title">
              {{ item.name }}
            </div>
            <div
              v-for="(child, idx) in item.children"
              :key="idx"
              class="item-child"
            >
              <el-link :underline="false" :href="child.url">{{
                child.name
              }}</el-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-divider></el-divider>

    <!-- 版权声明以及备案 -->
    <div class="copy-right">
      <div>版权所有，违反必究</div>
      <div>备案信息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogFooter",
  data() {
    return {
      data: [
        {
          name: "分类",
          children: [
            {
              name: "html",
              url: "",
            },
            {
              name: "html",
              url: "",
            },
            {
              name: "html",
              url: "",
            },
            {
              name: "html",
              url: "",
            },
          ],
        },
        {
          name: "归档",
          children: [
            {
              name: "一月",
              url: "",
            },
            {
              name: "二月",
              url: "",
            },
            {
              name: "三月",
              url: "",
            },
          ],
        },
        {
          name: "友链",
          children: [
            {
              name: "网站1",
              url: "",
            },
            {
              name: "网站2",
              url: "",
            },
            {
              name: "网站3",
              url: "",
            },
            {
              name: "网站4",
              url: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_container.scss";

.container {
  /* position: relative; */
  left: 0;
  bottom: 0;
  text-align: center;
  font-weight: bold;
  color: #eee;
  background-color: #000;
  // padding: 10px 20px   ;
}

.foot-group {
  padding: 10px;
  height: 100%;
}

.foot-group {
  font-size: 14px;
  text-align: left;

  .foot-item {
    padding-left: 20px;
    display: flex;
    justify-content: center;
  }

  .item-title {
    font-weight: bolder;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .item-child {
    padding: 4px auto;

    .el-link {
      font-size: 14px;
      color: #eee;

      &:hover {
        color: rgb(255, 153, 0);
      }
    }
  }
}

.el-divider {
  margin: 5px auto;
}

.copy-right {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 12px;

  div {
    margin: auto 10px;
  }
}
</style>