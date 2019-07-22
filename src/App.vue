<template>
  <div id="app">
    <el-container>
      <el-header height="8vh">
        <el-row class="full" style="">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
            <div class="logo">秦鸿科技</div>
          </el-col>
          <el-col :xs="16" :sm="18" :md="20" :lg="21" :xl="21">
            <div class="nav">
              <div style="flex: 1"></div>
              <div>
                <el-popover
                        placement="bottom"
                        width="270"
                        trigger="click">
                  <div>
                    <el-avatar :size="65" :src="circleUrl"></el-avatar>
                  </div>
                  <div class="user" slot="reference"><el-avatar icon="el-icon-user-solid" :size="30"></el-avatar><span>Admin(管理员)</span></div>
                </el-popover>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-row class="full">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
            <el-aside width="auto">
              <el-menu default-active="1" style="padding-bottom: 20px">
                <template v-for="(item,index) in menus">
                  <el-menu-item v-if="item.page" :index="index+'_'" @click="handleTabsCreate(item)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.name }}</span>
                  </el-menu-item>
                  <el-submenu v-else :index="index+'_'" style="overflow: hidden">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span slot="title">{{ item.name }}</span>
                    </template>
                    <el-menu-item :key="item.page"  v-for="(val,key) in item.child" :index="index+'_'+key+'_'" @click="handleTabsCreate(val)">
                      <i :class="val.icon"></i>
                      <span slot="title">{{ val.name }}</span>
                    </el-menu-item>
                  </el-submenu>
                </template>
              </el-menu>
            </el-aside>
          </el-col>
          <el-col :xs="16" :sm="18" :md="20" :lg="21" :xl="21">
            <el-main>
              <el-tabs v-model="editableTabsValue" closable @edit="handleTabsEdit">
                <el-tab-pane
                        :key="item.name"
                        v-for="(item, index) in editableTabs"
                        :label="item.title"
                        :name="item.name">
                  <component :is="item.content" @handleTabsCreate="handleTabsCreate" @handleTabsClose="handleTabsClose" :id="item.id"></component>
                </el-tab-pane>
              </el-tabs>
            </el-main>
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus:[],
      circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      editableTabsValue: '',
      editableTabs: [],
    };
  },
  mounted: function () {
    let url="http://127.0.0.1:8000/backend/menus"
    this.$nextTick(function () {
      this.$http.get(url).then((response)=>{
        this.menus  = response.data;
      },(error)=>{
        console.log('请求失败',error);
      });

      // Code that will run only after the
      // entire view has been rendered
    })
  },
  methods: {
    handleTabsCreate(tab){
        let newTabName = tab.page;
        let oldTab = this.editableTabs.find(o => o.name == newTabName);
        if (typeof(oldTab) =='undefined')
        {
          //注册组件
          this.editableTabs.push({
            id:tab.id,
            title: tab.name,
            name: newTabName,
            content: () => import('./page/'+tab.page+'.vue')
          });
        }
        this.editableTabsValue = newTabName;
    },

    handleTabsClose(targetName){
      console.log(targetName);
      this.handleTabsEdit(targetName,'remove')
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
}
.logo{
  line-height: 8vh;
  font-size: larger;
  font-weight: bold;
  font-family: cursive;
  color: white;
  text-shadow: #1b6d85 1px 1px;
  text-align: center;
}
.el-header .el-row{
  height: 100%;
}
  .el-header{
    padding: 0;
    background-color: #18bc9c;
  }
  .el-aside{
    height: 92vh;
    border-right: solid 1px #e6e6e6;
  }
  .el-main{
    height: 92vh;
    padding: 2px 4px;
  }
  .full{
    width: 100%;
  }
  .el-menu{
    border: none;

  }
  .el-submenu__title,.el-menu-item{
    display: flex;
    align-items: center;
    color: #909399;
  }
  .nav{
    display: flex;
    align-items: center;
    height: 8vh;
  }
  .user{
    display: flex;
    align-items: center;
    color: white;
    padding: 14px;
    cursor: pointer;
  }
  .user > span{
    font-size: 14px;
    padding:0 5px;
  }
</style>
