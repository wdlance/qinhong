<template>
  <div id="editor">
    <vue-editor
            useCustomImageHandler
            @imageAdded="handleImageAdded"
            v-model="content">
    </vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from "vue2-editor";
export default {
  props: ['value'],
  components: {
    VueEditor
  },
  data() {
    return {
      content: '',
    };
  },
  mounted: function () {
    const content = this.value;
    this.content = content;
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader){
      let formData = new FormData();
      formData.append("image", file);
      this.$http.post(this.GLOBAL.uploadUrl,formData).then((response)=>{
        let image = response.data.url;
        Editor.insertEmbed(cursorLocation, "image", image);
        resetUploader();
      },(error)=>{
        console.log('请求失败',error);
      });
    }
  },
  watch:{
    value(val){
      if (val != this.content){
        this.content = val;
      }
    },
    content(val){
      if (val != this.value){
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style>
#editor {
  line-height: normal;
}
</style>
