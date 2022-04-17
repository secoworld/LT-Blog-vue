<template>
  <div class="markdown">
    <md-editor v-model="text" />
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
// import katex from 'katex';  // 公式

export default {
  name: "MarkdownEditor",
  components: {
    MdEditor,
    
  },
  props: {
    content: String,
  },
  emits: ["update:content"],
  data() {
    return {
      text: "",
     
    };
  },
  methods: {
    // 上传图片
    // async onUploadImg(files, callback) {
    //   const res = await Promise.all(
    //     Array.from(files).map((file) => {
    //       return new Promise((rev, rej) => {
    //         const form = new FormData();
    //         form.append("file", file);

    //         axios
    //           .post("/api/img/upload", form, {
    //             headers: {
    //               "Content-Type": "multipart/form-data",
    //             },
    //           })
    //           .then((res) => rev(res))
    //           .catch((error) => rej(error));
    //       });
    //     })
    //   );

    //   callback(res.map((item) => item.data.url));
    // },
  },
  watch: {
    // 实现双向绑定content
    content(newVal) {
      this.text = newVal;
    },

    // 实现双向绑定content
    text(newVal) {
      // this.content = newVal;
      this.$emit("update:content", newVal);
    },
  },

  mounted() {
    this.text = this.content;
  },
};
</script>

<style lang="scss" scoped>
.markdown {
  width: 100%;
  height: 100%;
}
</style>>