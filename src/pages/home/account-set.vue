<template>
  <div class="middle-wrap">
    <div class="form-wrap">
      <div class="caption">账号设置</div>
      <el-form label-width="100px">
        <div class="avatar-wrap">
          <div class="avatar"></div>
        </div>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-form-item label="用户名：" required>
          <el-input :maxlength="inputLength" readonly disabled v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="旧密码：" required>
          <el-input type="text" :maxlength="inputLength" v-model="oldPassword" v-inputLimit="numOrLetter"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" required>
          <el-input type="password" :maxlength="inputLength" v-model="newPassword" v-inputLimit="numOrLetter"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" required>
          <el-input type="password" :maxlength="inputLength" v-model="againPassword" v-inputLimit="numOrLetter"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button primary v-preventReClick="3000" @click="onSubmit($event)">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      avatar: '',
      username: '',
      newPassword: '',
      oldPassword: '',
      againPassword: '',
      inputLength: this.Global.inputLength,
      numOrLetter: this.Global.numOrLetter
    }
  },
  methods: {
    onSubmit() {
      if (this.username == '' || this.oldPassword == '' || this.newPassword == '' || this.againPassword == "") {
        this.$message.error("非空必填项不能为空！")
        return
      } else if (this.newPassword != this.againPassword) {
        this.$message.error("两次密码输入不一致！")
        return
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.avatar-wrap {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.avatar {
  width: 100px;
  height: 100px;
  border: 1px solid #dcdcdc;
  border-radius: 100%;
}

.form-wrap {
  width: 700px;
  border-radius: $borderRadius;
  border: 1px solid $borderColor;
  margin: auto;
}

.el-form {
  padding: 0 100px 50px;
  text-align: center;
}

</style>
