<template>
  <div class="form" v-loading="loading">
        <el-form :model="form" size="medium" label-width="120px">
          <el-form-item label="ID" v-if="form.id">
            {{form.id}}
          </el-form-item>
          <el-form-item label="封面">
            <el-upload
                    class="avatar-uploader"
                    name="image"
                    :action="GLOBAL.uploadUrl"
                    :show-file-list="false"
                    :on-success="handleSuccess"
                    :before-upload="beforeUpload">
              <el-popover
                      v-if="form.image"
                      placement="bottom"
                      trigger="hover">
                <div class="tools">
                  <i class="el-icon-delete" @click="handleClear"></i>
                  <i class="el-icon-zoom-in" @click="handlePreview(form.image)"></i>
                </div>
                <el-image
                        slot="reference"
                        :src="form.image"
                        fit="scale-down"></el-image>
              </el-popover>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImage" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="品牌名称">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="品牌介绍">
            <el-input v-model="form.author" type="textarea"></el-input>
          </el-form-item>


        </el-form>
  </div>
</template>

<script>
import Veditor from "../../components/Editor";
 import Axios from "axios"
export default {
  components: {
    Veditor
  },
//  props: ['id'],
  data() {
    return {
      baseUrl:'/backend/articles',
      loading:true,
      btnLoading:false,
      dialogVisible: false,
      dialogImage:'',
      form:{},
      types:[]
    };
  },
  computed:{
  id:function(){
  return this.$route.params.id
  }
  },
  mounted: function () {

    let id = this.id;
    if (id){
      this.handleForm(id);
    }else {
      setTimeout(()=>{
        this.loading = false;
      },this.GLOBAL.time)
    }
    this.loadType();
  },
  methods: {

    }
  }

</script>
<style scoped lang="scss">
  .form{
    padding-top: 20px;
    padding-right: 120px;
    max-width: 80%;
    margin: 0 auto;
    text-align: left;
    height:90vh;
    overflow:auto;
  }
  .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  border: 1px dashed #d9d9d9;
    border-radius: 6px;
    &:hover{
     border-color: #409EFF;
    }
}
  .tools{
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
  .tools i{
    cursor: pointer;
  }
  .tools i:hover{
    color: #409EFF;
  }
  .el-image{
    vertical-align: bottom;
    max-width: 200px;
    max-height: 120px;
  }
</style>
