<template>
  <div class="users-container">
    <el-table
      :data="users"
      stripe
      border>
      <el-table-column
        align="center"
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
      align="center"
        prop="role_name"
        label="角色">
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <!-- scope.row 通过console.log学会了scope.row其实就是当前一行的数据 -->
          <el-button size="small" :type="scope.row.mg_state ? 'success' : 'danger'">{{scope.row.mg_state ? '已启用' : '已禁用'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { users } from "@/api";

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      // 登录完毕后必须在请求头中携带token
      // 获取本地的token
      // let token = localStorage.getItem("token");
      // axios.get('http://127.0.0.1:8888/api/private/v1/users?pagenum=1&pagesize=10')
      // axios
      //   .get("http://127.0.0.1:8888/api/private/v1/users", {
      //     headers: { Authorization: token },
      //     params: {
      //       pagenum: 1,
      //       pagesize: 10
      //     }
      //   })
      users(1, 10).then(res => {
        // console.log(res);
        if (res.data.meta.status === 200) {
          this.users = res.data.data.users;
        }
      });
    }
  }
};
</script>

<style lang="less">
.users-container {
  .el-table {
    width: 1000px;
    margin: 50px auto;
  }
}
</style>
