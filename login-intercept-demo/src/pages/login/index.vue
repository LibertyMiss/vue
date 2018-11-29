<template>
  <div class="login-container">
    <h1 class="title">登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input @keyup.enter.native="handleLogin" type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '../../api'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      console.log("执行登录操作!");
        login(this.username, this.password)
        .then(res => {
          console.log(res);

          if (res.data.meta.status === 200) {
            // 因为加入了导航守卫 所以存储token一定要在路由跳转之前完成
            // 将token存储在localStorage中
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem('userInfo', JSON.stringify(res.data.data))

            // 登陆成功  进行跳转
            // 使用message提醒用户
            this.$message({
              message: "恭喜您!登录成功!",
              type: "success",
              center: true
            });
            // 跳转页面
            this.$router.push("/home");
          } else {
            // 登录失败 提醒用户
            this.$message({
              message: "恭喜您!登录失败!",
              type: "error",
              center: true
            });
          }
        });
    }
  }
};
</script>

<style lang="less">
.login-container {
  width: 500px;
  margin: 15% auto;
  .title {
    font-size: 24px;
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
