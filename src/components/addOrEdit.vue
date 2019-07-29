<template>
<div class="form">
 <div class="form-body"><component :is="name" /></div>

<div class="form-footer">
 <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
 <el-button @click="resetForm('ruleForm')">重置</el-button>
</div>
</div>
</template>
<script>
import Vue from "vue"
export default({
    data(){
    return{
    name:""
    }
    },
	created:function(){
	let path = this.$route.params.page;
	this.name = () => import(`@/page/${path}/update.vue`)
	},
	methods:{
	registerComponent(path){
  		return import(`@/page/${path}/update.vue`).then(component=>{
  		return Vue.extend(component)
  		})
	}
	}
})
</script>