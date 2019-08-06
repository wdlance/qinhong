<template>
  <div class="limits">
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <div v-if="type=='goods'">
        <div class="search-wrap">
          <el-form :inline="true">
            <el-form-item label="输入搜索：">
              <el-input placeholder="商品名称" :maxlength="inputLength"></el-input>
            </el-form-item>
            <el-form-item label="商品分类：">
              <el-select placeholder="请选择商品分类" v-model="conditions.category">
                <el-option :label="item.name" :key="item.id" :value="item.id" v-for="item in categories"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="发布时间：">
              <el-date-picker v-model="value3" type="datetimerange" range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="审核状态：">
              <el-select v-model="conditions.status">
                <el-option :label="item.name" :key="item.id" :value="item.id" v-for="item in brands"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-preventReClick="1000" @click="startSearch">查询</el-button>
            </el-form-item>
          </el-form>
          <div class="batch">
            <el-checkbox v-model="checked1" disabled>全选</el-checkbox>
          </div>
          <el-table :data="tableData">
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
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
      <div v-else>
        <div class="search-wrap">
          <el-form>
            <el-form-item label="您最近使用的商品分类：">
              <el-input auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <Classify />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Classify from "@/components/classify"
export default {
  components: {
    Classify
  },
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
    },
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
      type: Object,
      default: () => {
        return {
          category: "",
          status: ''
        }
      }
    },
    status
  },
  data() {
    return {
      inputLength: this.Global.inputLength
    }
  }
}

</script>
