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
        <el-form-item label="消息类型：">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="消息标题：">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="发布时间：">
          <el-date-picker v-model="conditions.startTime" align="right" type="date" placeholder="开始时间" :picker-options="pickerOptions1" format="yyyy-MM-dd HH:ss:mm">
          </el-date-picker>
          ~
          <el-date-picker v-model="conditions.endTime" align="right" type="date" placeholder="结束时间" :picker-options="pickerOptions1" format="yyyy年MM月dd日 HH时ss分秒">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="编号" min-width="120">
      </el-table-column>
      <el-table-column prop="type" label="消息类型" min-width="120">
      </el-table-column>
      <el-table-column prop="title" label="消息标题" min-width="120">
      </el-table-column>
      <el-table-column prop="time" label="发送时间" min-width="120">
      </el-table-column>
      <el-table-column label="审核状态" min-width="120">
        <template slot-scope="scope">
          <template v-if="status==1">
            <div>已通过</div>
          </template>
          <template v-else>
            <div>未通过</div>
          </template>
          <a @click="auditDetails(scope.$index, scope.row)">审核详情</a>
        </template>
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
    <AuditDetails :dialogVisible="dialog.visible" />
  </div>
</template>
<script>
import AuditDetails from "./auditDetails"
export default {
  components: { AuditDetails },
  data() {
    return {
      tableData: [{
        num: 1,
        status: 1
      }],
      currentPage4: 0,
      dialog: {
        visible: false
      },
      conditions: {
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    auditDetails(index, item) {
      this.dialog.visible = true
    },
    addNews: function() {
      this.$router.push("/news/add")
    },
    handleLook: function(index, item) {
      this.$router.push("/customer/1")
    },

    handleDelete: function(index, item) {
      this.$confirm('确认删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      })
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
