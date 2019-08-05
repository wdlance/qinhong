<template>
  <div id="user">
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
              prop="avatar"
              label="头像"
              width="120">
        <template slot-scope="scope">
          <el-avatar shape="square" :size="50" :src="scope.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column
              prop="nickname"
              label="昵称"
              min-width="180">
      </el-table-column>
      <el-table-column
              label="性别"
              width="100">
        <template slot-scope="scope">
          {{ GLOBAL.sexStr[scope.row.sex]}}
        </template>
      </el-table-column>
      <el-table-column
              prop="mobile"
              label="手机号码"
              min-width="150">
      </el-table-column>
      <el-table-column
              prop="birthday"
              label="生日"
              min-width="150">
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
  </div>
</template>

<script>
 import Axios from "axios"
export default {
  data() {
    return {
      loading:true,
      table:[],
      circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },
  mounted: function () {
    let url="/backend/users"
    this.$nextTick(function () {
      Axios.get(url).then((response)=>{
        this.table  = response.data.data;
      },(error)=>{
        console.log('请求失败',error);
      });

      setTimeout(()=>{
        this.loading = false;
      },this.GLOBAL.time)
    })
  },
  methods: {
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
    },
    handleTabsEdit(targetName, action) {
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
  .ok{
    color: #3f9ae5;

  }
  .status{
    font-size: 16px;
  }
</style>
