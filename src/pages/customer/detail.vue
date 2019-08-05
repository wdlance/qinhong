<template>
  <div class="inner">
    <div class="">
      <div class="caption">客户详情</div>
      <el-table :data="tableData1" :span-method="arraySpanMethod" border :show-header="false">
        <el-table-column>
        </el-table-column>
        <el-table-column prop="label1">
        </el-table-column>
        <el-table-column prop="姓名">
        </el-table-column>
        <el-table-column prop="label2">
        </el-table-column>
        <el-table-column prop="数值 2（元）">
        </el-table-column>
      </el-table>
    </div>
    <div class="">
      <div class="caption">统计信息</div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="浏览商品量" width="180">
        </el-table-column>
        <el-table-column prop="name" label="收藏商品" width="180">
        </el-table-column>
        <el-table-column prop="address" label="优惠券">
        </el-table-column>
        <el-table-column prop="name" label="店铺评价" width="180">
        </el-table-column>
        <el-table-column prop="address" label="店铺分享">
        </el-table-column>
        <el-table-column prop="name" label="商品分享" width="180">
        </el-table-column>
        <el-table-column prop="address" label="关注店铺">
        </el-table-column>
        <el-table-column prop="name" label="登录次数" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData1: [{
        label1: '用户ID',
        value1: "",
        label2: "职业",
        value2: ""
      }, {
        label1: '昵称',
        value1: "",
        label2: "个性签名",
        value2: ""
      }, {
        label1: '性别',
        value1: "",
        label2: "喜欢的分类",
        value2: ""
      }, {
        label1: '生日',
        value1: "",
        label2: "注册时间",
        value2: ""
      }, {
        label1: '城市',
        value1: "",
        label2: "用户来源",
        value2: ""
      }]
    }
  },
  methods: {
    arraySpanMethod: function({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 5 === 0) {
          return {
            rowspan: 5,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.customer-info-wrap {
  height: 100%;
}

</style>
