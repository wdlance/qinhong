<template>
  <div id="articles" v-loading="loading">

    <table-header>
    <template slot="conditions">
     <el-form-item label="标题">
          <el-input v-model="params.title" placeholder="搜索标题"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="params.status" placeholder="状态" :size="inputSize" clearable>
            <el-option label="影藏" :value="0"></el-option>
            <el-option label="显示" :value="1"></el-option>
            <el-option label="待审" :value="2"></el-option>
          </el-select>
        </el-form-item>
    </template>
    </table-header>
    <el-table
            :data="table"
            style="width: 100%"
            height="72vh"
            v-loading="loading"
            @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="55">
      </el-table-column>
      <el-table-column
              prop="id"
              label="#"
              width="100">
      </el-table-column>
      <el-table-column
              label="封面图片"
              width="140">
        <template slot-scope="scope">
          <el-image scroll-container="#articles .el-table__body-wrapper" style="width:90px; height:60px;border-radius:4px;" fit="cover"  :src="scope.row.image" lazy></el-image>
        </template>
      </el-table-column>
      <el-table-column
              prop="title"
              label="标题"
              width="380">
      </el-table-column>
      <el-table-column
              prop="author"
              label="作者"
              min-width="80">
      </el-table-column>
        <el-table-column
                prop="type.name"
                label="分类板块"
                min-width="100">
        </el-table-column>
      <el-table-column
              prop="vcount"
              label="浏览量"
              min-width="80">
      </el-table-column>

      <el-table-column
              prop="create_time"
              label="创建时间"
              min-width="160">
      </el-table-column>
      <el-table-column
              label="状态"
              min-width="100">
        <template slot-scope="scope">
          <i v-bind:class="[scope.row.status ? 'el-icon-success ok' : 'el-icon-warning','status']"></i>
        </template>
      </el-table-column>
      <el-table-column
              label="操作"
              width="160">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-view" size="mini" plain></el-button>
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="handleTabsCreate(scope.row.id)" plain></el-button>
            <el-button type="primary" icon="el-icon-delete" size="mini" @click="handleDelete(scope.row.id)" plain></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="page" v-if="total>0">
      <el-pagination
              background
              layout="prev, pager, next"
              @current-change="handlePage"
              :page-size="size"
              :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import TableHeader from "@/components/tableHeader.vue"
import Axios from "axios"
export default {
 components: {
    TableHeader
  },
  data() {
    return {
      baseUrl:'/backend/articles',

      loading:true,
      table:[],
      size:10,
      total:0,
      params: {
        page:1
      },
      ids:[]
    };
  },
  mounted: function () {
    this.handlePage(1);
  },
  methods: {
    addData: function() {
      this.$router.push("/update" + this.$route.path)
    },
    batchDelete(){
      let ids = this.ids;
      if (ids.length==0){
        this.$alert('请选择需要删除的文件！', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          callback: action => {

          }
        });
        return false;
      }
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        Axios.post(this.baseUrl+'/delete',{ids:ids}).then((response)=>{
          this.$message({
            showClose: true,
            message: response.data,
            type: 'success'
          });
          this.handlePage(1);
        },(error)=>{
          console.log('请求失败',error);
        });
      }).catch(() => {

      });
    },
    handleDelete($id){
        this.ids = [$id]
        this.batchDelete();
    },
    handleSelectionChange(val){
      let ids = [];
      val.forEach((item)=>{
        ids.push(item.id);
      })
      this.ids = ids;
    },
    handlePage(page){
      this.$set(this.params,'page',page)
      this.loading = true
      const params = this.params;
      this.$nextTick(function () {
        Axios.get(this.baseUrl,{params:params}).then((response)=>{
          this.table  = response.data.data;
          this.total = response.data.meta.total;
          this.size = response.data.meta.per_page;
          setTimeout(()=>{
            this.loading = false;
          },this.GLOBAL.time)
        },(error)=>{
          console.log('请求失败',error);
        });
      })
    },
    handleTabsCreate(id){
      if (id){
        //this.$emit('handleTabsCreate',{page:'articles_form',name:'更新('+id+')',id:id});
        this.$router.push("/update"+this.$route.path+"/"+id)
      }else{
        //this.$emit('handleTabsCreate',{page:'articles_form',name:'新建',id:null});
         this.$router.push("/update"+this.$route.path)
      }
    }
  }
}
</script>

<style>
  .el-button-group{
    padding-top: 5px;
  }
  .search{
    border-bottom:1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
  }
  .ok{
    color: #3f9ae5;
  }
  .status{
    font-size: 16px;
  }
  .page{
    padding: 11px 0;
    text-align: right;
  }
</style>
