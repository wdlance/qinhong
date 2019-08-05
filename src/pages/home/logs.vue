<template>
  <div class="inner">
    <div class="form-wrap">
      <div class="caption">登录日志</div>
      <div class="table-wrap">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="时间" width="180">
          </el-table-column>
          <el-table-column prop="ip" label="IP" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
          <el-table-column prop="brower" label="浏览器">
          </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        address: '3423'
      }]
    }
  }
}

</script>
<style lang="scss" scoped>
.form-wrap {
  width: 900px;
  border-radius: $borderRadius;
  border: 1px solid $borderColor;
  margin: auto;
}

.table-wrap {
  padding: 50px;
}

table {
  border: 1px solid $borderColor;
  width: 100%;
}

tr {
  td {
    border-bottom: 1px solid $borderColor;
    border-right: 1px solid $borderColor;
    height: 40px;

    &:last-child {
      border-right: none;
    }
  }

  &:last-child {
    td {
      border-bottom: none;
    }

  }
}

</style>
