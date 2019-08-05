<template>
  <div class="login-wrap">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  created: function() {

  },
  methods: {
    onSubmit() {
      this.$store.dispatch("account_login_action", {
        username: this.form.username,
        password: this.form.password
      }).then(res => {
        if (res.code == "000") {
          this.$router.push("/brands")
        } else {
          this.$message.error(res.msg);
        }
      }).catch(e => {})
    }
  }
}

</script>
<style lang="scss" scoped>
.login-wrap {
  width: 500px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
