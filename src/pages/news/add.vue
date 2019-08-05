<template>
  <div class="form-wrap">
    <div class="caption">账号设置</div>
    <el-form label-width="100px">

      <el-form-item label="消息标题：" require>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="消息内容：" require>
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="添加人员：" require>
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item label="推送时间：" require>
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button primary v-preventReClick="3000">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: ''
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
  text-align:center;
}

</style>
