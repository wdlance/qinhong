//判断通过flag判断flag值为param的对象是否在arr数组对象中
function inArrayObj(arr,flag,param){
	if(arr.length==0){
		return null;
	}
	return arr.find((v) => {
		return v[flag] == param;
	});
}
function getIndexByFlag(array,flag,param){
	array.forEach((v,k,arr)=>{
		if(v[flag]==param){
			return k
		}
	})
}
export default{
	inArrayObj:inArrayObj
}