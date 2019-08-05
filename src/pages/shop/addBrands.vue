<template>
  <el-dialog title="高级检索" :visible.sync="dialogVisible">
    <el-form label-width="100px">
      <el-form-item label="品牌名称：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="品牌类别：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
