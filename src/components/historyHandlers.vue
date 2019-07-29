<template>
<div class="historyHandlers">
  <el-tag v-for="(item , index) in historyHanders"
    :key="item.name"
    closable
    type="info"
    :class="{active:activeTagIndex == index}"
    @click="returnToHistory(index)"
    @close="removeHistoryHandler(index)">
    {{item.name}}
  </el-tag>
</div>
</template>
<script>
export default{
	data(){
	return {
	activeTagIndex:0
	}
	},
	computed:{
	historyHanders:function(){
	if(this.$store.state.historyHandlers){
		return this.$store.state.historyHandlers.historyHandlers
	}
	},
	},
	watch: {
            'historyHanders.length': {
                handler(newValue, oldValue) {
                    if (newValue!=oldValue) {
                        this.activeTagIndex = newValue-1
                    }
                }
            }
        },
	methods:{
	returnToHistory:function(index){
	this.$bus.emit("returnToHistory",this.historyHanders[index])
	this.activeTagIndex  = index
	},
	removeHistoryHandler:function(index){
	let path = this.$route.path.substring(1)
	this.$store.commit("removeHistoryHandler",{
	index:index,
	path:path
	})
	}
	}
}
</script>
<style scoped lang="scss">
.historyHandlers{
	display:flex;
	just-content:flex-start;
	    border-bottom: 1px solid #ebeef5;
	    height:1vh;
	    min-height:50px;
}
.el-tag{
  margin: 5px !important;
  cursor:pointer;
  &.active{
    background-color: #ecf5ff;
    color: #409eff;
    border-color:#d9ecff;
  }
}
</style>