<template>
  <div class="inner">
    <div class="cupon flex">
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
      <div class="item">
        <div class="caption">名称</div>
        <div class="result">全品类优惠券</div>
      </div>
    </div>
    <div class="search-wrap">
      <div class="table-caption flex">
        <div class="left">筛选条件</div>
        <div class="right">
          <el-button size="mini" @click="showConditions">高级检索</el-button>
        </div>
      </div>
      <el-form :inline="true">
        <el-form-item label="优惠券使用状态：">
          <el-select>
            <el-option label="已使用" value="1"></el-option>
            <el-option label="未使用" value="2"></el-option>
            <el-option label="已过期" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="num" label="优惠码" width="120">
      </el-table-column>
      <el-table-column prop="picture" label="领取客户" width="120">
      </el-table-column>
      <el-table-column prop="name" label="领取方式" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classify" label="领取时间" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="当前状态" width="120">
      </el-table-column>
      <el-table-column prop="flag" label="使用时间" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDo(scope.$index, scope.row)">核销</el-button>
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

    handleDo: function(index, item) {

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
.cupon{
flex-wrap:wrap;

border-radius:$borderRadius;
text-align:center;
    .item{
    width:16.6%;
    border:1px solid $borderColor;
    box-sizing:border-box;
    }
    .result{
    line-height:40px;
    }
}
</style>
