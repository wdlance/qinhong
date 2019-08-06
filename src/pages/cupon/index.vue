<template>
  <div class="inner">
    <el-button-group>
      <el-button type="primary" @click="addCupon">添加优惠券</el-button>
    </el-button-group>
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
      <el-table-column prop="picture" label="优惠券名称" width="120">
      </el-table-column>
      <el-table-column prop="name" label="优惠券类型" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classify" label="可使用商品" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="使用门槛" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="面值" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="有效期" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="状态" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleLook(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    addCupon: function() {
      this.$router.push('/cupon/add')
    },
    handleLook: function(index, item) {
      this.$router.push("/cupon/detail")
    },
    handleEdit: function(index, item) {
      this.$router.push('/cupon/edit')
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
