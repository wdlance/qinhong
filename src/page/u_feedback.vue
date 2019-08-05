<template>
  <div id="feedback" v-loading="loading">

    <el-form :inline="true" :model="params" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="params.name" placeholder="门店类型名称" :size="inputSize"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlePage(1)" plain :size="inputSize">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
            :data="table"
            style="width: 100%"
            height="70vh">
      <el-table-column
              type="selection"
              width="55">
      </el-table-column>
      <el-table-column
              prop="id"
              label="#"
              width="100">
      </el-table-column>
      <el-table-column
              prop="member_id"
              label="商户ID"
              min-width="150">
      </el-table-column>
      <el-table-column
              prop="mobile"
              label="手机号"
              min-width="90">
      </el-table-column>
      <el-table-column
              prop="types"
              label="类型"
              min-width="90">
      </el-table-column>
      <el-table-column
              prop="content"
              label="内容"
              min-width="200">
      </el-table-column>
      <el-table-column
              prop="images"
              label="图片集合"
              min-width="100">
      </el-table-column>
      <el-table-column
              prop="create_time"
              label="创建时间"
              width="160">
      </el-table-column>
      <el-table-column
              label="操作"
              width="180">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-view" size="mini" plain></el-button>
            <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
            <el-button type="primary" icon="el-icon-delete" size="mini" plain></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="page" v-if="total>0">
      <el-pagination
              background
              layout="prev, pager, next"
              @current-change="handlePage"
              :page-size="size"
              :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
 import Axios from "axios"
export default {
  data() {
    return {
      inputSize:'small',
      loading:true,
      table:[],
      size:10,
      total:0,
      params: {
        position:0
      }
    };
  },
  mounted: function () {
    this.handlePage(1);
  },
  methods: {
    handlePage(page){
      this.$set(this.params,'page',page)
      this.loading = true
      let url="/backend/feedback"
      const params = this.params;
      this.$nextTick(function () {
        Axios.get(url,{params:params}).then((response)=>{
          this.table  = response.data.data;
          this.total = response.data.total;
          this.size = response.data.per_page;
          setTimeout(()=>{
            this.loading = false;
          },this.GLOBAL.time)
        },(error)=>{
          console.log('请求失败',error);
        });
      })
    }
  }
}
</script>

<style>
  .ok{
    color: #3f9ae5;
  }
  .status{
    font-size: 16px;
  }
  .page{
    padding: 11px 0;
    text-align: right;
  }
</style>
