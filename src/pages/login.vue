<template>
  <div class="login-wrap">
    <el-form ref="form" :model="form">
      <h3>与好家商家管理平台</h3>
      <el-form-item>
        <el-input v-model="form.mobile" :maxlength="inputLength"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" :maxlength="inputLength"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-preventReClick="3000" @click="onSubmit($event)" class="full login-btn">登录</el-button>
        <a>忘记密码？</a>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Directives from "@/util/directives"
export default {
  data() {
    return {
      form: {
        mobile: '13006616675',
        password: '123456'
      },
      inputLength:this.Global.inputLength
    }
  },

  methods: {
    onSubmit(e) {
      if (e.target.disabled) {
        return
      }
      this.$store.dispatch("account_login_action", {
        mobile: this.form.mobile,
        password: this.form.password
      }).then(res => {
        this.$router.push("/home")
      }).catch(e => {
        this.$message.error(e);
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.login-wrap {
  background: #1abc9c;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.el-form {
  padding: 50px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
}

.el-input {
  width: 300px;
}

.login-btn {
  background: #1abc9c;
}

h3 {
  text-align: center;
  color: #1abc9c;
  margin-bottom: 60px;
}

</style>
