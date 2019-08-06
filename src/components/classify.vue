<template>
  <div class="flex">
    <div class="flex-item">
      <div class="classify">
        <div class="caption">选择一级分类</div>
        <div class="options" ref="select1">
          <div class="option flex" v-for="(item,index) in classify1" :key="item.id" @click="select(1,index)" :class="{active:select1==item.id}">
            <span>{{item.name}}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <i class="el-icon-d-arrow-right"></i>
    <div class="flex-item">
      <div class="classify">
        <div class="caption">选择二级分类</div>
        <div class="options" ref="select2">
          <div class="option flex" v-for="(item,index) in classify2" :key="item.id" @click="select(2,index)" :class="{active:select2==item.id}">
            <span>{{item.name}}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <i class="el-icon-d-arrow-right"></i>
    <div class="flex-item">
      <div class="classify">
        <div class="caption flex">选择三级分类</div>
        <div class="options" ref="select3">
          <div class="option" v-for="(item,index) in classify3" :key="item.id" @click="select(3,index)" :class="{active:select3==item.id}">
            <span>{{item.name}}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classify1: [{
        id: 1,
        name: '家具',
      }, {
        id: 2,
        name: '灯具',
      }],
      classify2: [{
        pid: 1,
        id: 1,
        name: '床',
      }, {
        pid: 1,
        id: 1,
        name: '衣柜',
      }],
      classify3: [{
        pid: 2,
        id: 1,
        name: '双门',
      }],
      select1: '',
      select2: '',
      select3: ''
    }
  },
  mounted(){
  debugger;
  this.select(1,0)
  },
  methods:{
  select(num,index){
  if(num==1){
  this.select1 = this.classify1[index].id
  }else if(num==2){
  if(this.classify2&&this.classify2.length!=0){
for(let i=0;i<this.classify2.length;i++){
    if(this.classify2[i].pid==this.select1){

    }
}
  }
  }else if(num==3){

  }
  }
  }
}

</script>
<style scoped lang="scss">
.flex {
  justify-content: center;
  align-items: center;
}

.flex-item {
  width: 33.33%;
  padding: 0 15px;

}

.classify {
  border: 1px solid $borderColor;
  border-radius: $borderRadius;

  .options {
    overflow: auto;
    height: 250px;
  }

  .option {
    line-height: 40px;
    padding: 0 15px;
    justify-content: space-between;
    border-bottom: 1px solid $borderColor;


    &.active {
      background: #f2f2f2;
    }
  }
}

</style>
