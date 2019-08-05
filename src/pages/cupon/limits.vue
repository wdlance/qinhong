<template>
  <div class="limits">
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <div class="search-wrap">
        <el-form v-if="type=='goods'">
          <el-form-item label="添加商品：">
            <el-input auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <el-form v-else>
          <el-form-item label="添加分类：">
            <el-input auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="tableData" v-if="type=='goods'">
        <el-table-column property="name" label="商品名称" width="150"></el-table-column>
        <el-table-column property="name" label="货号" width="200"></el-table-column>
        <el-table-column property="name" label="操作"></el-table-column>
      </el-table>
      <el-table :data="tableData" v-else>
        <el-table-column property="name" label="分类名称" width="150"></el-table-column>
        <el-table-column property="name" label="操作"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "指定商品"
    },
    type: {
      type: String,
      default: 'goods'
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: Array,
      default: () => {
        return [{
          name: ''
        }]
      }
    }
  }
}

</script>
