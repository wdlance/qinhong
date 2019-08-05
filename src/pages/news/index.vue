<template>
  <div class="inner">
    <el-button-group>
      <el-button @click="addNews">添加消息</el-button>
    </el-button-group>
    <div class="search-wrap">
      <div class="table-caption flex">
        <div class="left">筛选条件</div>
        <div class="right">
        </div>
      </div>
      <el-form :inline="true">
        <el-form-item label="消息标题：">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="发布时间：">
          <el-date-picker v-model="conditions.startTime" align="right" type="date" placeholder="开始时间" :picker-options="pickerOptions1">
          </el-date-picker>
          ~
          <el-date-picker v-model="conditions.endTime" align="right" type="date" placeholder="结束时间" :picker-options="pickerOptions1">
          </el-date-picker>
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
      <el-table-column prop="picture" label="消息标题" width="120">
      </el-table-column>
      <el-table-column prop="name" label="发布时间" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classify" label="接收人员" width="120">
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
  </div>
</template>
<script>
export default {

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
    addNews: function() {
      this.$router.push("/news/add")
    },
    handleLook: function(index, item) {
      this.$router.push("/customer/1")
    },

    handleDelete: function(index, item) {

    },
    handleDelete: function(index, item) {

    },
    handleSelectionChange: function() {

    },
    handleCurrentChange: function() {

    },
    handleSizeChange: function() {

    },

  }
}

</script>
<style lang="scss" scoped>
</style>
