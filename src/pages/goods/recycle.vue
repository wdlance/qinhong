<template>
  <div class="inner">
    <el-button-group>
      <el-button type="primary">全部商品<span>（{{tableData.length}}）</span></el-button>
      <el-button type="primary">已上架<span>（）</span></el-button>
      <el-button type="primary">未上架<span>（）</span></el-button>
      <el-button type="primary">待审核<span>（）</span></el-button>
      <el-button type="primary">未通过<span>（）</span></el-button>
    </el-button-group>
    <div class="search-wrap">
      <div class="table-caption flex">
        <div class="left">筛选条件</div>
        <div class="right">高级检索</div>
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
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="num" label="编号" width="120">
      </el-table-column>
      <el-table-column prop="picture" label="图片" width="120">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classify" label="商品分类" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="标签" width="120">
      </el-table-column>
      <el-table-column prop="price" label="销售价格" width="120">
      </el-table-column>
      <el-table-column prop="brand" label="商品品牌" width="120">
      </el-table-column>
      <el-table-column prop="status" label="审核状态" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleRecycle(scope.$index, scope.row)">还原</el-button>
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
    }
  },
  methods: {
    handleRecycle: function(index, item) {

    },

    handleDelete: function(index, item) {

    },
    handleSelectionChange: function() {

    },
    handleCurrentChange: function() {

    },
    handleSizeChange: function() {

    }
  }
}

</script>
<style lang="scss" scoped>
</style>
