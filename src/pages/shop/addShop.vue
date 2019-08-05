<template>
  <div class="inner">
    <div class="relative">
      <el-form ref="form" label-width="120px">
        <el-form-item label="店铺名称：" rquire>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="选择店铺分类：" rquire>
          <el-select v-model="shop.classify" multiple placeholder="请选择店铺分类">
            <el-option v-for="item in shopClassify" :key="item.key" :label="item.value" :value="item.key">
              <el-checkbox :label="item.value"></el-checkbox>
            </el-option>
          </el-select>
          <div class="meta">勾选店铺分类有助于客户快速找到您的店铺，例如“床，沙发，桌子”</div>
        </el-form-item>
        <el-form-item label="店铺logo：">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small" type="primary">上传图片</el-button>
            <div slot="tip" class="el-upload__tip">此处为您店铺的logo，将显示在店铺logo栏里；
              建议使用宽200像素*高</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="店铺所在地：">
          <el-input v-model="shop.address" @change="changeAddr"></el-input>
          <BMap ref="map" />
        </el-form-item>
        <el-form-item label="店铺经营时间：">
          <el-time-picker v-model="shop.beginTime" :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }" placeholder="起始时间">
          </el-time-picker>
          ~
          <el-time-picker v-model="shop.endTime" :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }" placeholder="截止时间">
          </el-time-picker>
        </el-form-item>
        <el-form-item label="店铺图片：">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small" type="primary">上传图片</el-button>
            <div slot="tip" class="el-upload__tip"></div>
          </el-upload>
        </el-form-item>
        <el-form-item label="店铺描述：">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-group">

      <el-button>取消</el-button>
        <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>
<script>
import BMap from '@/components/map.vue'
import Common from '@/util/common'
export default {
  components: {

    BMap,

  },
  data() {
    return {
      shop: {
        address: '',
        lngAndlat: '',
        classify: '',
        beginTime: new Date(2016, 9, 10, 9, 0),
        endTime: new Date(2016, 9, 10, 18, 30)
      },
      shopClassify: [{
        key: 1,
        value: "床"
      }, {
        key: 2,
        value: "沙发"
      }]
    }
  },
  created:function(){

console.log(this.$route.path)
  },
  methods: {
    changeAddr() {
      Common.debounce(() => {
        this.shop.lngAndlat = this.$refs.map.searchByStationName(this.shop.address)

      }, 1000)()
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
.button-group{
  text-align:center;
}
</style>
