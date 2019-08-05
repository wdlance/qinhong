<template>
  <div class="inner">
    <div class="relative">
      <el-form ref="form" label-width="120px">
        <el-form-item label="优惠券类型：" rquire>
          <div class="meta">勾选店铺分类有助于客户快速找到您的店铺，例如“床，沙发，桌子”</div>
        </el-form-item>
        <el-form-item label="优惠券名称：">
          <el-input v-model="cupon.name"></el-input>
        </el-form-item>
        <el-form-item label="适用平台：" rquire>
        </el-form-item>
        <el-form-item label="总发行量：">
          <el-input v-model="cupon.number" v-inputLimit="onNum"></el-input>
        </el-form-item>
        <el-form-item label="面额：">
          <el-input placeholder="请输入内容" v-model="cupon.price" v-inputLimit="onNum">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="每人限领：">
          <el-input placeholder="请输入内容" v-model="cupon.limitNum" v-inputLimit="onNum">
            <template slot="append">张</template>
          </el-input>
        </el-form-item>
        <el-form-item label="使用门槛：">
          <el-radio-group v-model="cupon.threshold">
            <el-radio :label="0">无限制</el-radio>
            <el-radio :label="1">满<el-input placeholder="请输入内容" v-model="cupon.thresholdPrice"></el-input>元可用 </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="有效期：">
          <el-radio-group v-model="cupon.valid">
            <el-radio :label="1">日期范围
              <el-date-picker v-model="cupon.validDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-radio>
            <el-radio :label="2">固定天数
              <el-input placeholder="请输入内容" v-model="cupon.days" v-inputLimit="onNum">
                <template slot="append">天</template>
              </el-input>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="可使用商品：">
          <el-radio-group v-model="cupon.limits" @change="changeLimits">
            <el-radio :label="0">全场通用</el-radio>
            <el-radio :label="1">指定商品</el-radio>
            <el-radio :label="2">指定分类</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" :maxlength="textareaLength"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-group">
      <el-button>取消</el-button>
      <el-button type="primary">提交</el-button>
    </div>
    <Limits :dialogVisible="dialog.visible" :type="dialog.type" :title="dialog.title" />
  </div>
</template>
<script>
import Limits from "./limits"
export default {
  components: {

    Limits,

  },
  data() {
    return {
      onNum: this.Global.onNum,
      textareaLength: this.Global.textareaLength,
      cupon: {
        type: '', //类型
        number: 0, //发行量
        limits: 0, //适用范围
        price: '', //面额
        limitNum: 1, //每人限领
        threshold: 0, //门槛
        thresholdPrice: 10, //满多少使用
        valid: 0, //有效期
        validDate: '', //日期范围
        days: 0, //固定天数
        remark: '' //备注
      },
      dialog: {
        visible: false,
        type: 'goods',
        title: "指定商品"
      }
    }
  },
  created: function() {

    console.log(this.$route.path)
  },
  methods: {
    changeLimits(label) {

      if (label == 1) {
        this.dialog.visible = true
        this.dialog.type = "goods"
        this.dialog.title = "指定商品"
      } else if (label == 2) {
        this.dialog.visible = true
        this.dialog.type = "classify"
        this.dialog.title = "指定分类"
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
