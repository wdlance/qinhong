<template>
<div>
<el-menu :default-active="$route.path" router unique-opened>
                <template v-for="(item,index) in menus">
                  <el-menu-item v-if="item.page" :index="'/'+item.page" :class="$route.path=='/'+item.page?'is-active':''" @click="handleMenu(item)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.name }}</span>
                  </el-menu-item>
                  <el-submenu v-else :index="index+'_'" style="overflow: hidden">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span slot="title">{{ item.name }}</span>
                    </template>
                    <el-menu-item :key="item.page"  v-for="(val,key) in item.child" :index="'/'+val.page" :class="$route.path=='/'+val.page?'is-active':''" @click="handleMenu(val)">
                      <i :class="val.icon"></i>
                      <span slot="title">{{ val.name }}</span>
                    </el-menu-item>
                  </el-submenu>
                </template>
              </el-menu>
</div>
</template>
<script>

export default{
data(){
return {
uniqueOpened:true
}
},
	computed:{
	menus:function(){
	return this.$store.state.menus.menus
	},
  defaultActiveMenuIndex:function(){
  console.log("当前活跃菜单:"+this.$store.state.menus.currentMenuIndex)
  return this.$store.state.menus.currentMenuIndex
  }
	},
  created:function(){
  this.$bus.on("returnToHistory",(menu)=>{
  this.handleMenu(menu)
  })
  },
  watch:{
  },
	methods:{
	handleMenu:function(menu){
	this.$store.commit("addHistoryHandler",menu)
  this.$router.push("/"+menu.page)
	}
	}
}
</script>
<style scoped>
.el-menu{
  padding-bottom: 20px;
}
</style>