<template>
  <div id="app">
    <el-header v-if="$route.path!='/login'">
      <Header />
    </el-header>
    <el-container v-if="$route.path!='/login'">
      <el-aside>
        <Menus />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-container v-else>
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>
import Menus from "@/components/menus"
import Header from "@/components/header"
import Common from "@/util/common"

export default {
  components: { Menus, Header },
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      editableTabsValue: '',
      editableTabs: [],
    };
  },
  created: function() {


  },
  methods: {
    logout() {
      this.$store.dispatch("account_logout_action").then(res => {
        if (res.code == "000") {
          localStorage.removeItem("loginUser")
          this.$router.push("/login")
        } else {
          this.$message.error(res.msg);
        }
      })
    }
  }
}

</script>
<style lang="scss">
@import './assets/css/common.scss';

#app {
  font-family: Helvetica, sans-serif;
}
body{
  min-width:1280px;
}
.el-header {
  height: 8vh !important;
  line-height:8vh !important;
  height: 60px;
  line-height:60px;
  min-height:60px;
  padding: 0;
  background-color: $mainColor;
}

.el-container {
  height: 92vh;
}

.el-aside {
  width: 250px !important;
  border-right: solid 1px $borderColor;
}

.el-main {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 0px;
  oveflow: auto;
}

.main {
  height: 91vh;
}

</style>
