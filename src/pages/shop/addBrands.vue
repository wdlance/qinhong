<template>
  <el-dialog title="品牌添加" :visible.sync="dialogVisible">
    <el-form label-width="100px">
      <el-form-item label="品牌名称：" required>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="品牌类别：" required>
        <el-select v-model="value" placeholder="一级">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="二级">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item lable="品牌图标：" required>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
          <el-button size="small" type="primary">点击上传</el-button>

        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button>取消</el-button>
      <el-button type="primary">发布</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  }
}

</script>
