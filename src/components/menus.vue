<template>
  <div>
    <el-menu :default-active="activeIndex" router unique-opened @select="selectMenu">
      <template v-for="(item,index) in menus">
        <el-menu-item v-if="!item.children||item.children.length==0" :index="'/'+item.page" :class="$route.path=='/'+item.page?'is-active':''">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="index+''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item :key="val.page" v-for="(val,key) in item.children" :index="'/'+item.page+'/'+val.page" :class="$route.path=='/'+item.page+'/'+val.page?'is-active':''">
            <i :class="val.icon"></i>
            <span slot="title">{{ val.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: localStorage.betterHome ? JSON.parse(localStorage.betterHome).activeMenuIndex : this.$route.path
    }
  },
  computed: {
    menus() {
      return this.$store.state.menus.menus
    },

  },
  created: function() {

  },
  watch: {
    $route: {
      handler(newName, oldName) {
        this.selectMenu(this.activeIndex)
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  },
  methods: {
    selectMenu(index) {

      this.activeIndex = index
      let betterHome = {
        activeMenuIndex: index
      }
      localStorage.setItem("betterHome", JSON.stringify(betterHome))
    }
  }
}

</script>
<style scoped>
.el-menu {
  padding-bottom: 20px;
}

</style>
