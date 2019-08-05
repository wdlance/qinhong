<template>
  <el-dialog title="高级检索" :visible.sync="dialogVisible">
    <el-form>
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
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button>重置</el-button>
      <el-button type="primary">开始检索</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    categories: {
      type: Array,
      default:()=>{
      return [{}]
      }
    },
    brands: {
      type: Array,
      default: ()=>{
      return [{}]
      }
    },

  },
  data() {
    return {
      conditions: {
        name: '',
        category: "",
        brand: ''
      },
      inputLength: this.Global.inputLength
    }
  }
}

</script>
