<template>
  <div id="merchants">
    <el-table
            :data="table"
            style="width: 100%"
            height="80vh"
            v-loading="loading">
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
              label="头像"
              min-width="100">
        <template slot-scope="scope">
          <el-image scroll-container="#merchants .el-table__body-wrapper" style="width:80px; height:60px;border-radius:4px;" fit="cover"  :src="scope.row.avatar" lazy></el-image>
        </template>
      </el-table-column>
      <el-table-column
              prop="nickname"
              label="昵称"
              min-width="100">
      </el-table-column>
      <el-table-column
              prop="username"
              label="用户名"
              min-width="100">
      </el-table-column>
      <el-table-column
              prop="mobile"
              label="手机号"
              min-width="100">
      </el-table-column>
      <el-table-column
              label="性别"
              width="100">
        <template slot-scope="scope">
          {{ GLOBAL.sexStr[scope.row.sex]}}
        </template>
      </el-table-column>
      <el-table-column
              prop="create_time"
              label="创建时间"
              min-width="160">
      </el-table-column>
      <el-table-column
              prop="status"
              label="状态"
              width="100">
        <template slot-scope="scope">
          <i v-bind:class="[scope.row.status ? 'el-icon-success ok' : 'el-icon-warning','status']"></i>
        </template>
      </el-table-column>
      <el-table-column
              label="操作"
              min-width="160">
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
export default {
  data() {
    return {
      loading:true,
      table:[],
      size:10,
      total:0,
      circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      params: {},
    };
  },
  mounted: function () {
    this.handlePage(1);
  },
  methods: {
    handlePage(page){
      this.$set(this.params,'page',page)
      this.loading = true
      let url=this.GLOBAL.ajaxUrlPre + "/backend/merchants"
      const params = this.params;
      this.$nextTick(function () {
        this.$http.get(url,{params:params}).then((response)=>{
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
