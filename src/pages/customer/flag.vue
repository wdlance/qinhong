<template>
  <el-dialog title="设置标签" :visible.sync="dialogVisible">
    <el-checkbox-group v-model="choosedFlag">
      <el-checkbox :label="item.name" :key="item.id" v-for="item in flags"></el-checkbox>
    </el-checkbox-group>
    <div slot="footer" class="dialog-footer">
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
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
  },
  data() {
    return {
      flags: [{
        id: 1,
        name: '80后'
      }, {
        id: 2,
        name: '80后'
      }, {
        id: 3,
        name: '80后'
      }, {
        id: 4,
        name: '80后'
      }, {
        id: 5,
        name: '80后'
      }, {
        id: 6,
        name: '80后'
      }, {
        id: 7,
        name: '80后'
      }],
      choosedFlag:''
    }
  }
}

</script>
