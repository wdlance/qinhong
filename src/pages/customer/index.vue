<template>
  <div class="inner">

    <div class="search-wrap">
      <div class="table-caption flex">
        <div class="left">筛选条件</div>
        <div class="right">
<el-button size="mini" @click="showConditions">高级检索</el-button>
        </div>
      </div>
      <el-form :inline="true">
        <el-form-item label="输入搜索：">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="商品分类：">
          <el-select placeholder="请选择商品分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品品牌：">
          <el-select placeholder="请选择品牌">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="num" label="编号" width="120">
      </el-table-column>
      <el-table-column prop="picture" label="用户ID" width="120">
      </el-table-column>
      <el-table-column prop="name" label="用户账号" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classify" label="用户昵称" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="注册时间" width="120">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleLook(scope.$index, scope.row)">查看</el-button>

          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
    <Conditions :dialogVisible="dialog.visible"/>
  </div>
</template>
<script>
import Conditions from "./conditions"
export default {
components:{Conditions},
  data() {
    return {
      tableData: [{
        num: 1
      }],
      currentPage4: 0,
      dialog:{
      visible:false
      }
    }
  },
  methods: {
    handleLook: function(index, item) {
this.$router.push("/customer/1")
    },

    handleDelete: function(index, item) {

    },
    handleSelectionChange: function() {

    },
    handleCurrentChange: function() {

    },
    handleSizeChange: function() {

    },
    showConditions:function(){
    this.dialog.visible = true
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
