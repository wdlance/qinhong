<template>
  <div class="inner">
    <div class="relative">
      <el-form ref="form" label-width="120px">
        <el-form-item label="营业执照号：" required>
          <el-input type="password" :maxlength="inputLength" v-model="shop.license"></el-input>
        </el-form-item>
        <el-form-item label="营业执照所在地：" required>
          <el-input :maxlength="inputLength" v-model="shop.businessLocation"></el-input>
        </el-form-item>
        <el-form-item label="营业执照有效期：" required>
          <el-input type="text" :maxlength="inputLength" v-model="shop.licenseValid"></el-input>
        </el-form-item>
        <el-form-item label="法定营业范围：" required>
          <el-input type="password" :maxlength="inputLength" v-model="shop.businessScope"></el-input>
        </el-form-item>
        <el-form-item label="营业执照电子版：" required>
          <el-input type="password" :maxlength="inputLength" v-model="shop.licensePic"></el-input>
        </el-form-item>
         <el-form-item label="联系人：" required>
          <el-input type="text" :maxlength="inputLength" v-model="shop.contacter"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话：" required>
          <el-input type="password" :maxlength="inputLength" v-model="shop.contacts"></el-input>
        </el-form-item>
        <el-form-item label="店铺名称：" required>
          <el-input v-model="shop.name" :maxlength="inputLength"></el-input>
        </el-form-item>
        <el-form-item label="选择店铺分类：">
          <el-select v-model="shop.classify" multiple placeholder="请选择店铺分类">
            <el-option v-for="item in shopClassify" :key="item.key" :label="item.value" :value="item.key">
              <el-checkbox :label="item.value"></el-checkbox>
            </el-option>
          </el-select>
          <div class="meta">勾选店铺分类有助于客户快速找到您的店铺，例如“床，沙发，桌子”</div>
        </el-form-item>
         <el-form-item label="品牌：">
          <el-select v-model="shop.classify" multiple placeholder="请选择品牌">
            <el-option v-for="item in shopClassify" :key="item.key" :label="item.value" :value="item.key">
              <el-checkbox :label="item.value"></el-checkbox>
            </el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="店铺logo：">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small" type="primary">上传图片</el-button>
            <div slot="tip" class="el-upload__tip">此处为您店铺的logo，将显示在店铺logo栏里；
              建议使用宽200像素*高</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="店铺所在地：" required>
          <el-input v-model="shop.address" @change="changeAddr"></el-input>
          <BMap ref="map" />
        </el-form-item>
        <el-form-item label="店铺经营时间：" required>
          <el-time-picker v-model="shop.beginTime" :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }" placeholder="起始时间" readonly>
          </el-time-picker>
          ~
          <el-time-picker v-model="shop.endTime" :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }" placeholder="截止时间" readonly>
          </el-time-picker>
        </el-form-item>

        <el-form-item label="店铺介绍：" required>
          <Veditor/>
          <el-checkbox v-model="agree">我声明，此页面所填写内容均真实有效，特别是经营地址为店铺最新可联系到的地址，同时可以作为行政机关和司法机关送达法律文件的

地址，如果上述地址信息有误，愿意承担平台处罚（<a>与好家处罚细则</a>）、行政监管和司法诉讼风险。</el-checkbox>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-group">
      <el-button>取消</el-button>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </div>
  </div>
</template>
<script>
import BMap from '@/components/map.vue'
import Common from '@/util/common'
import Veditor from "@/components/Editor";
export default {
  components: {

    BMap,
Veditor
  },
  data() {
    return {
      shop: {
        contacter: '',
        contacts: '',
        license: '',
        businessLocation: '',
        licenseValid: '',
        businessScope: '',
        licensePic: '',
        name:'',
        address: '',
        lngAndlat: '',
        classify: '',
        beginTime: new Date(2016, 9, 10, 9, 0),
        endTime: new Date(2016, 9, 10, 18, 30)
      },
      agree:false,
      shopClassify: [{
        key: 1,
        value: "床"
      }, {
        key: 2,
        value: "沙发"
      }]
    }
  },
  created: function() {

    console.log(this.$route.path)
  },
  methods: {
    changeAddr() {
      Common.debounce(() => {
        this.shop.lngAndlat = this.$refs.map.searchByStationName(this.shop.address)

      }, 1000)()
    },
    onSubmit(){
    if(!this.agree){
    return
    }
    }
  }
}

</script>
<style scoped lang="scss">
.el-form {
  .meta {
    font-size: 12px;
    color: #606266;
    margin-top: 7px;
  }
}

.button-group {
  text-align: center;
}

</style>
