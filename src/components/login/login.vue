<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-form
        @submit.prevent
        ref="loginFormRef"
        :rules="loginRules"
        label-width="80px"
        :model="loginForm"
        size="large"
      >
        <el-form>
          <div class="login-head">
            <h2>LT's Blog 后台登录</h2>
          </div>
        </el-form>
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="loginForm.username"
            autocomplete="false"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="false"
            show-password="true"
          ></el-input>
        </el-form-item>

        <el-form-item class="button-group">
          <el-button type="primary" @click="onLogin('loginFormRef')"
            >登录</el-button
          >
          <el-button type="warning" @click="onResetForm('loginFormRef')"
            >重置</el-button
          >
          <el-button type="danger" @click="forgetPasswd">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "用户名为3-10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "密码长度为6-10个字符", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    onLogin(refName) {
      console.log("点击登录按钮");
      this.$refs[refName].validate((valid) => {
        if (valid) {
          console.log("校验成功");
        } else {
          console.log("校验失败");
        }
      });
    },

    onResetForm(refName) {
      console.log("重置表单输入");
      this.$refs[refName].resetFields();
    },

    forgetPasswd() {
      console.log("忘记密码了");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global.scss";

.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-image: url("../../assets/img/lgoin-background.jpg");
  background-size: 100% 100%;
  font-family: $--font-family;

  .login-card {
    min-width: 400px;
  }

  .el-form-item {
    font-size: 16px;

    ::v-deep .el-form-item__label {
      font-size: inherit;
    }
  }

  .button-group {
      margin-top: 20px;

    ::v-deep .el-form-item__content {
      margin-left: 0px !important;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      font-size: inherit;

      button {
        font-family: $--font-family;
        font-size: inherit;
      }
    }
  }
}
</style>