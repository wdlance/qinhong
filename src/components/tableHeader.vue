<template>
  <div class="table-header">
    <el-button-group>
      <el-button type="primary" icon="el-icon-plus" :size="inputSize" @click="addData()" plain></el-button>
      <el-button type="primary" icon="el-icon-download" :size="inputSize" @click="batchDownloadData()" plain></el-button>
      <el-button type="primary" icon="el-icon-delete" :size="inputSize" @click="batchDeleteData()" plain></el-button>
      <el-button type="primary" icon="el-icon-refresh" :size="inputSize" @click="refresh()" plain></el-button>
    </el-button-group>
    <el-form :inline="true">
      <slot name="conditions">
        <el-form-item label="名称">
          <el-input v-model="name" placeholder="搜索名称" :size="inputSize"></el-input>
        </el-form-item>
      </slot>
      <el-form-item>
        <el-button type="primary" plain :size="inputSize">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {

      name: ''
    }
  },
  props: {
    inputSize: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    addData() {
      this.$parent.addData()
    },
    bathcDownloadData() {

    },
    batchDeleteData() {

    },
    refresh() {

    }
  }
}

</script>
<style>
.table-header {
  display: flex;
  justify-content: space-between;
}

</style>
