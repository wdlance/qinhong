<template>
  <div class="form" v-loading="loading">
    <el-form :model="form" size="medium" label-width="120px">
      <el-form-item label="ID" v-if="form.id">
        {{form.id}}
      </el-form-item>
      <el-form-item label="封面">
        <el-upload class="avatar-uploader" name="image" :action="GLOBAL.uploadUrl" :show-file-list="false" :on-success="handleSuccess" :before-upload="beforeUpload">
          <el-popover v-if="form.image" placement="bottom" trigger="hover">
            <div class="tools">
              <i class="el-icon-delete" @click="handleClear"></i>
              <i class="el-icon-zoom-in" @click="handlePreview(form.image)"></i>
            </div>
            <el-image slot="reference" :src="form.image" fit="scale-down"></el-image>
          </el-popover>
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImage" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="所属分类" v-if="types.length!=0">
        <el-select v-model="form.type_id" placeholder="请选所属分类">
          <el-option v-for="(item,i) in types.data" :label="item.name" :value="item.id" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜素关键字">
        <el-input type="textarea" v-model="form.keywords"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <Veditor v-model="form.content"></Veditor>
      </el-form-item>
      <el-form-item label="显示">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-divider content-position="left">相关特质</el-divider>
      <div v-if="form.trait">
        <el-form-item label="位置">
          <el-radio-group v-model="form.trait.position">
            <el-radio :label="1">用户端</el-radio>
            <el-radio :label="2">商户端</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="浏览量">
          <el-input v-model="form.trait.view_count"></el-input>
        </el-form-item>
        <el-form-item label="SEO关键字">
          <el-input v-model="form.trait.keyword"></el-input>
        </el-form-item>
        <el-form-item label="SEO描述">
          <el-input type="textarea" v-model="form.trait.description"></el-input>
        </el-form-item>
        <el-form-item label="包含">
          <el-radio-group v-model="form.trait.is_visible">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="市级">
          <el-input v-model="form.trait.region_id"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" :loading="btnLoading">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Veditor from "@/components/Editor";
 import Axios from "axios"
export default {
  components: {
    Veditor
  },
  //  props: ['id'],
  data() {
    return {
      baseUrl:'/backend/articles',
      loading: true,
      btnLoading: false,
      dialogVisible: false,
      dialogImage: '',
      form: {},
      types: []
    };
  },
  computed: {
    id: function() {
      return this.$route.params.id
    }
  },
  mounted: function() {

    let id = this.id;
    if (id) {
      this.handleForm(id);
    } else {
      setTimeout(() => {
        this.loading = false;
      }, this.GLOBAL.time)
    }
    this.loadType();
  },
  methods: {
    loadType() {
      let url = "/backend/articles-types"
      Axios.get(url).then((response) => {

        this.types = response.data;


        console.log("32423")
      }, (error) => {
        console.log('请求失败', error);
      });
    },
    handleClear() {
      this.form.image = null;
    },
    handlePreview(url) {
      this.dialogImage = url;
      this.dialogVisible = true;
    },
    submitForm() {
      this.btnLoading = true
      let _this = this
      Axios.post(this.baseUrl, this.form).then((response) => {
        //console.log(response.data);
        setTimeout(() => {
          this.btnLoading = false;
          debugger;
          let path = _this.$route.params.page
          _this.$router.push("/" + path)
        }, this.GLOBAL.time)
      }, (error) => {
        console.log('请求失败', error);
      });
    },
    resetForm() {},
    handleSuccess(res, file) {
      //this.form.image = URL.createObjectURL(file.raw);
      this.$set(this.form, 'image', res.url)
    },
    beforeUpload(file) {
      if (file.type.indexOf('image') < 0) {
        this.$message.error('请选择上传图片类型文件!');
        return false
      }
      let w = 0;
      let h = 0;
      let width = 334;
      let height = 204;
      const isRight = new Promise(function(resolve, reject) {
        let _URL = window.URL || window.webkitURL;
        let img = new Image();
        img.onload = function() {
          w = img.width;
          h = img.height;
          (w == width && h == height) ? resolve(): reject();
        }
        img.src = _URL.createObjectURL(file);
      }).then(() => {
        return file;
      }, () => {
        this.$alert('<p style="text-indent: 1em">要求尺寸：' + width + '*' + height + '；当前尺寸：' + w + '*' + h + '。</p>', '提示', {
          dangerouslyUseHTMLString: true,
          callback: action => {}
        });
        return Promise.reject();
      });
      return isRight;
    },
    handleForm(id) {
      this.loading = true
      this.$nextTick(function() {
        Axios.get(this.baseUrl + '/' + id).then((response) => {
          this.form = response.data;
          setTimeout(() => {
            this.loading = false;
          }, this.GLOBAL.time)
        }, (error) => {
          console.log('请求失败', error);
        });
      })
    }
  }
}

</script>
<style scoped lang="scss">
.form {
  padding-top: 20px;
  padding-right: 120px;
  max-width: 80%;
  margin: 0 auto;
  text-align: left;
  height: 90vh;
  overflow: auto;
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
.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.tools {
  text-align: center;
  display: flex;
  justify-content: space-around;
}

.tools i {
  cursor: pointer;
}

.tools i:hover {
  color: #409EFF;
}

.el-image {
  vertical-align: bottom;
  max-width: 200px;
  max-height: 120px;
}

</style>
