<template>
  <div class="header flex">
    <div class="header-left">
      <div class="logo">与好家商家管理平台</div>
    </div>
    <div class="header-right flex">
      <div class="shopList flex-item">
        <el-dropdown>
          <span class="el-dropdown-link">
            店铺列表<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in shopList" :key="item.id">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-popover placement="bottom" width="270" trigger="hover" class="flex-item">
        <div class="account-info">
          <div class="caption flex">
            <div class="left">账号信息</div>
            <div class="right">
              <router-link to="/home/account-set">账号设置</router-link>
            </div>
          </div>
          <div class="info-wrap">
            <ul>
              <li>所在部门：</li>
              <li>本次登录：</li>
              <li>登录地区：</li>
              <li>上次登录：</li>
            </ul>
          </div>
        </div>
        <div class="account" slot="reference">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar><span>Admin</span>
        </div>
      </el-popover>
      <div class="bell flex-item">
        <el-badge :value="12" class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
      </div>
      <div class="logout flex-item" @click="logout">
        <i class="el-icon-close"></i>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
export default {
data(){
  return{
shopList:[{
  id:1,
  name:"店铺1"
},{
  id:2,
  name:"店铺2"
}]
  }
},
  methods: {
    logout() {
      this.$confirm('确定要退出登录吗？', '确认退出 ', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem("loginUser")
        localStorage.removeItem("betterHome")
        this.$router.push("/login")
      })
    }
  }
}

</script>
<style scoped lang="scss">
.header {
  color: #fff;
  padding: 0 30px;
  justify-content: space-between;
}


.header-left {
  width: 250px;
  text-align: center;
}

.header-right {
  flex: 1;
  justify-content: flex-end;
}

.flex-item {
  padding: 0 15px;
  cursor: pointer;
}

.account {
  display: flex;
  align-items: center;
}



.caption {
  justify-content: space-between;

}
.el-dropdown{
  color:#fff;
}
.el-icon--right{
  display:none!important;
}
</style>
