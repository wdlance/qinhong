<template>
  <el-dialog title="审核详情" :visible.sync="dialogVisible">
    <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="time" label="审核时间" min-width="120">
      </el-table-column>
      <el-table-column prop="auditor" label="审核人员" min-width="120">
      </el-table-column>
      <el-table-column prop="result" label="审核结果" min-width="120">
      </el-table-column>
      <el-table-column label="feedback">
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [{}]
    }
  }
}

</script>
