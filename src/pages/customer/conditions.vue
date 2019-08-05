<template>
  <el-dialog title="高级检索" :visible.sync="dialogVisible">
    <el-form>
      <el-form-item label="活动名称"x>
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button>重置</el-button>
      <el-button type="primary">开始检索</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default{
    props:{
    dialogVisible:{
    type:Boolean,
    default:false
    }
    }
}
</script>