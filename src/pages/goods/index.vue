<template>
  <div class="inner">
    <el-button type="primary" @click="addGoods">添加商品</el-button>
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
        <div class="right">
          <el-button size="mini" @click="showConditions">高级检索</el-button>
        </div>
      </div>
      <el-form :inline="true">
        <el-form-item label="输入搜索：">
          <el-input placeholder="商品名称" :maxlength="inputLength"></el-input>
        </el-form-item>
        <el-form-item label="商品分类：">
          <el-select placeholder="请选择商品分类" v-model="conditions.category">
            <el-option :label="item.name" :key="item.id" :value="item.id" v-for="item in categories"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品品牌：">
          <el-select placeholder="请选择品牌" v-model="conditions.brand">
            <el-option :label="item.name" :key="item.id" :value="item.id" v-for="item in brands"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-preventReClick="1000" @click="startSearch">查询</el-button>
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
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handlePreview(scope.$index, scope.row)">预览</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
    <Conditions :dialogVisible="dialog.visible" :categories="categories" :brands="brands" />
  </div>
</template>
<script>
import Conditions from "./conditions"
export default {
  components: { Conditions },
  data() {
    return {
      categories: [{
        id: 1,
        name: '沙发'
      }, {
        id: 2,
        name: '床上用品'
      }],
      brands: [{
        id: 1,
        name: '顾家'
      }, {
        id: 2,
        name: '欧派'
      }],
      conditions: {
        category: "",
        brand: ''
      },
      tableData: [{
        num: 1
      }],
      currentPage4: 0,
      dialog: {
        visible: false
      },
      inputLength: this.Global.inputLength
    }
  },
  methods: {
    addGoods() {
      this.$router.push("/goods/add")
    },
    startSearch() {
      console.log("开始查询")
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
