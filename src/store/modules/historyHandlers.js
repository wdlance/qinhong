import Vue from "vue"
import Common from "../../util/common"

const state = {
	historyHandlers:[]
}
const getters = {

}
const mutations = {
	addHistoryHandler:(state,handler)=>{
		if(!Common.inArrayObj(state.historyHandlers,"name",handler.name)){
			Vue.set(state.historyHandlers,state.historyHandlers.length,handler)
		}
	},
	removeHistoryHandler:(state,param)=>{
		debugger;
		if(param.path == state.historyHandlers[param.index].page){
			return
		}
		state.historyHandlers.splice(param.index,1)
	}
}
const actions = {

}
export default{
	state,
	getters,
	mutations,
	actions
}