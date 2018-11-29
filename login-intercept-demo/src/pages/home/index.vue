<template>
  <div class="home-container">
    <el-row class="tac">
      <!-- elementui把屏幕分为了24栅格 -->
      <el-col :span="4">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">用户权限</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>角色管理</span>
            </template>
            <el-menu-item index="2-1">角色列表</el-menu-item>
            <el-menu-item index="2-2">角色权限</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">商品列表</el-menu-item>
            <el-menu-item index="3-2">商品</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-button @click="logout" type="danger" style="float: right; margin: 30px" size="small">注销</el-button>
        <span style="float: right; margin: 30px">欢迎: {{userInfo.username}}</span>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1-1',
      userInfo: {}
    }
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log('跳转了!')
      switch (key) {
        case "1-1":
          // 跳转到用户列表页面
          this.$router.push('/home/users')
          break;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      // 清除token
      localStorage.removeItem('token')
      // 跳转回登录页
      this.$router.push('/login')
      this.$message({
        type: 'success',
        message: '恭喜您!退出成功!'
      })
    }
  }
};
</script>

<style lang="less">
.home-container {
  .el-menu {
    border-right: 0;
  }
}
</style>
