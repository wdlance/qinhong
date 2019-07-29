<template>
  <div id="shops" v-loading="loading">

    <el-form :inline="true" :model="params" class="demo-form-inline">
      <el-form-item label="地区">
        <el-cascader
                :props="props"
                v-model="params.regions"
                :size="inputSize"
                placeholder="试试搜索：深圳"
                filterable
                clearable></el-cascader>
      </el-form-item>
      <el-form-item label="门店名称">
        <el-input v-model="params.name" placeholder="门店名称" :size="inputSize"></el-input>
      </el-form-item>
      <el-form-item label="认领状态">
        <el-select v-model="params.is_user_status" placeholder="状态" :size="inputSize" clearable>
          <el-option label="待认领" :value="0"></el-option>
          <el-option label="已认领" :value="1"></el-option>
          <el-option label="认领中" :value="2"></el-option>
        </el-select>
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
              label="封面"
              width="140">
        <template slot-scope="scope">
          <el-image scroll-container="#shops .el-table__body-wrapper" style="width:90px; height:60px;border-radius:4px;" fit="cover"  :src="scope.row.preview_image" lazy></el-image>
        </template>
      </el-table-column>
      <el-table-column
              prop="name"
              label="门店名称"
              width="150">
      </el-table-column>
      <el-table-column
              label="？认领"
              width="100">
        <template slot-scope="scope">
          <el-tag size="small" v-if="scope.row.is_user_status==0" type="info">待认领</el-tag>
          <el-tag size="small" v-if="scope.row.is_user_status==1" type="success">已认领</el-tag>
          <el-tag size="small" v-if="scope.row.is_user_status==2">认领中</el-tag>
        </template>
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址"
              min-width="200">
      </el-table-column>
      <el-table-column
              label="评分"
              width="150">
        <template slot-scope="scope">
          <el-rate
                  v-model="scope.row.score"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}">
          </el-rate>
        </template>
      </el-table-column>
      <el-table-column
              prop="create_time"
              label="创建时间"
              width="160">
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
import Vue from "vue"
export default {
  data() {
    let self = this;
    return {
      inputSize:'small',
      loading:true,
      table:[],
      size:10,
      total:0,
      params: {
      },
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
          const { level } = node;
          let _this = this
          setTimeout(() => {
            let url = Vue.prototype.GLOBAL.ajaxUrlPre+"/backend/regions"
            let params = {
              level:level+1,
              id: level==0?100000:node.value
            };
            self.$http.get(url,{params:params}).then((response)=>{
              resolve(response.data);
            },(error)=>{
              console.log('请求失败',error);
            });
          }, 200);
        }
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
      let url=Vue.prototype.GLOBAL.ajaxUrlPre+"/backend/shops"
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
    },
    handleTabsCreate(tab){
        let newTabName = tab.page;
        let oldTab = this.editableTabs.find(o => o.name == newTabName);
        if (typeof(oldTab) =='undefined'){
          this.editableTabs.push({
            title: tab.name,
            name: newTabName,
            content: 'New Tab content_'+tab.page
          });
        }
        this.editableTabsValue = newTabName;
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
