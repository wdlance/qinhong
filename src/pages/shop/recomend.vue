<template>
  <div class="inner">
    <el-button-group>
    </el-button-group>
    <div class="search-wrap">
      <div class="table-caption flex">
        <div class="left">筛选条件</div>
        <div class="right">
        </div>
      </div>
      <el-form :inline="true">
        <el-form-item label="评价人：">
          <el-input placeholder="输入评价人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询结果</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="编号" min-width="120">
      </el-table-column>
      <el-table-column label="评价信息" min-width="120">
      </el-table-column>
      <el-table-column label="评价人" min-width="120">
      </el-table-column>
      <el-table-column label="评价时间" min-width="120">
      </el-table-column>
      <el-table-column label="评价等级" min-width="120">
      </el-table-column>
      <el-table-column label="操作" min-width="120">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleLook(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
    <add-brands :dialogVisible="dialog.visible"></add-brands>
  </div>
</template>
<script>
import AddBrands from "./addBrands"
export default {
  components: { AddBrands },
  data() {
    return {
      tableData: [{
        num: 1
      }],
      currentPage4: 0,
      dialog: {
        visible: false
      }
    }
  },
  methods: {
    addBrands: function() {
      this.dialog.visible = true
    },
    handleEdit: function(index, item) {

    },
    handlePreview: function(index, item) {

    },
    handleDelete: function(index, item) {

    },
    handleSelectionChange: function() {

    },
    handleCurrentChange: function() {

    },
    handleSizeChange: function() {

    },
    showConditions: function() {
      this.dialog.visible = true
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
