<template>
  <div class="inner">
    <div class="form-wrap">
      <div class="caption">公司及联系人信息</div>
      <el-form label-width="140px">
        <el-form-item label="公司名称：" required>
          <el-input :maxlength="inputLength" v-model="company.name"></el-input>
        </el-form-item>
        <el-form-item label="公司所在地：" required>
          <el-input type="text" :maxlength="inputLength" v-model="company.location"></el-input>
        </el-form-item>
        <el-form-item label="公司详细地址：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.address"></el-input>
        </el-form-item>
        <el-form-item label="公司电话：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.tel"></el-input>
        </el-form-item>
        <el-form-item label="员工总数：" required>
          <el-input :maxlength="inputLength" v-model="company.staffs"  v-inputLimit="numOrLetter" class="short">
<span slot="append">人</span>
          </el-input>
        </el-form-item>
        <el-form-item label="联系人姓名：" required>
          <el-input type="text" :maxlength="inputLength" v-model="company.contacter"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.contacts"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.license"></el-input>
        </el-form-item>
        <el-form-item label="营业执照所在地：" required>
          <el-input :maxlength="inputLength" v-model="company.businessLocation"></el-input>
        </el-form-item>
        <el-form-item label="营业执照有效期：" required>
          <el-input type="text" :maxlength="inputLength" v-model="company.licenseValid"></el-input>
        </el-form-item>
        <el-form-item label="法定营业范围：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.businessScope"></el-input>
        </el-form-item>
        <el-form-item label="营业执照电子版：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.licensePic"></el-input>
        </el-form-item>
        <el-form-item label="法人身份证：" required>
          <el-input type="password" :maxlength="inputLength" v-model="company.idCard"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button primary v-preventReClick="3000" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company: {
        name: '',
        location: '',
        address: '',
        tel: '',
        staffs: '',
        contacter: '',
        contacts: '',
        license: '',
        businessLocation: '',
        licenseValid: '',
        businessScope: '',
        licensePic: '',
        idCard: ''
      },
      inputLength: this.Global.inputLength,
      numOrLetter: this.Global.numOrLetter
    }
  },
  methods: {
    onSubmit() {

    }
  }
}

</script>
<style lang="scss" scoped>
.form-wrap {
  width: 800px;
  border-radius: $borderRadius;
  border: 1px solid $borderColor;
  margin: 100px auto;

}

.el-form {
  padding: 100px 50px;
  text-align: center;
}

</style>
