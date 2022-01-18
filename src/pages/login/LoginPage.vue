<template>
  <div class="login-container">
    <login></login>
  </div>
</template>

<script>
import Login from "@/components/login/login.vue";
export default {
  name: "loginPage",
  components: {
      Login,
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
}
</style>