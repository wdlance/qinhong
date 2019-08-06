<template>
  <div class="inner">
    <el-button size="mini" @click="setFlag">设置标签</el-button>
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
    <Conditions :dialogVisible="dialog.visible" />
    <Flag :dialogVisible="flagDialog.visible" />
  </div>
</template>
<script>
import Conditions from "./conditions"
import Flag from "./flag"
export default {
  components: { Conditions, Flag },
  data() {
    return {
      tableData: [{
        num: 1
      }],
      currentPage4: 0,
      dialog: {
        visible: false
      },
      flagDialog: {
        visible: false
      }
    }
  },
  methods: {
    handleLook: function(index, item) {
      this.$router.push("/customer/1")
    },
    setFlag() {
    this.flagDialog.visible = true
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
