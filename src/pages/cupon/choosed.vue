<template>
  <div>
    <div v-if="type=='goods'">
      <el-button @click="add">添加商品<i class="el-icon-plus"></i></el-button>
      <div class="meta">购买以下商品可使用优惠券抵扣金额 已选中130件商品</div>
      <el-table :data="choosedData">
        <el-table-column property="name" label="商品名称" width="150"></el-table-column>
        <el-table-column property="name" label="货号" width="200"></el-table-column>
        <el-table-column property="name" label="操作"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <div v-else>
      <el-button @click="add">添加分类<i class="el-icon-plus"></i></el-button>
      <div class="meta">购买以下分类商品可使用优惠券抵扣金额 已选中130个分类</div>
      <el-table :data="choosedData">
        <el-table-column property="name" label="分类名称" width="150"></el-table-column>
        <el-table-column property="name" label="操作"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'goods'
    },
    choosedData: {
      type: Array,
      default: () => {
        return [{
          name: ''
        }]
      }
    }
  },
  methods: {
    add() {
      this.$emit("addChoosed")
    }
  }
}

</script>
