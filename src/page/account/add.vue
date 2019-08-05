<template>
  <el-dialog :title="title" :visible.sync="visible" @open="openDialog">
    <el-form :model="form">
      <el-form-item class="" label="用户名" required :label-width="labelWidth">
        <el-input v-model="form.username" auto-complete="off" :maxlength="maxlength" :readonly="type==1" :disabled="type==1"></el-input>
      </el-form-item>
      <el-form-item class="" label="密码" required :label-width="labelWidth"  v-if="type==0">
        <el-input v-model="form.password" auto-complete="off" type="password" :maxlength="maxlength"></el-input>
      </el-form-item>
      <el-form-item class="" label="头像" :label-width="labelWidth">
        <div class="avatar-uploader">
          <div class="el-icon-plus avatar-uploader-icon" v-if="form.avatar==''">
            <input type="file" @change="chooseAvatar($event)">
          </div>
          <div class="avatar-uploader-icon" v-else>
            <img :src="form.avatar">
          </div>
        </div>
      </el-form-item>
      <el-form-item class="" label="昵称" required :label-width="labelWidth">
        <el-input v-model="form.nickname" auto-complete="off" :maxlength="maxlength"></el-input>
      </el-form-item>
      <el-form-item class="" label="手机号" required :label-width="labelWidth">
        <el-input v-model="form.mobile" auto-complete="off" :maxlength="maxlength"></el-input>
      </el-form-item>
      <el-form-item class="" label="邮箱" required :label-width="labelWidth">
        <el-input v-model="form.email" auto-complete="off" :maxlength="maxlength"></el-input>
      </el-form-item>
      <el-form-item class="" label="联系方式" :label-width="labelWidth">
        <el-input v-model="form.contacts" auto-complete="off" :maxlength="maxlength"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" v-preventReClick="3000" @click.prevent="confirm($event)">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import Rule from "@/util/rule";
import Common from "@/util/common"
import Directives from "@/util/directives"

export default {
  data() {
    return {
      type: 0,
      title: "新增",
      visible: false,
      labelWidth: "100px",
      maxlength: Rule.inputLength,
      isReadonly: false,
      isDisabled: false,
    }
  },
  props: {
    form: {
      type: Object,
      default: {
        username: '',
        password: '',
        avatar: '',
        nickname: '',
        contacts: '',
        email: '',
        mobile: ''
      }
    }
  },
  methods: {
    confirm(el) {
      if (el.target.disabled) {
        return
      }
      if (this.form.username == "" || this.form.password == "" || this.form.mobile == "" || this.nickname == "" || this.email == "") {
        return
      }
      this.ajaxForm()
    },
    ajaxForm(param) {
      this.$store.dispatch("add_account_action", this.form).then(res => {
        if (res.code == "000") {
          this.visible = false
          this.$message.success("账号添加成功！");
        } else {
          this.$message.error(res.msg);
        }
      })
    },
    chooseAvatar(e) {
      let file = e.target.files[0]
      let imgUrlBase64;
      let reader = new FileReader()
      let _this = this
      if (file) {
        //将文件以Data URL形式读入页面
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function(e) {
          _this.form.avatar = e.target.result
        }
      }
    },
    openDialog() {

      if (this.type == 0) {
        this.form = {
          username: '',
          password: '',
          avatar: '',
          nickname: '',
          contacts: '',
          email: '',
          mobile: ''
        }
      } else {
        this.isReadonly = true
        this.isDisabled = true
      }

    }
  }
}

</script>
<style lang="scss" scoped>
.avatar-uploader {
  float: left;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

</style>
