<template>
  <div class="goods-add-wrap">
    <div class="relative">
      <el-form ref="form" label-width="100px">
        <el-form-item label="商品分类：" rquire>
          <Classify />
          <div class="meta">您当前选择的商品类别是：家具> 床> 双人床</div>
        </el-form-item>
        <el-form-item label="商品名称：" rquire>
        </el-form-item>
        <el-form-item label="副标题：">
        </el-form-item>
        <el-form-item label="商品品牌：">
          <el-switch></el-switch>
        </el-form-item>
        <el-form-item label="活动性质：">
        </el-form-item>
        <el-form-item label="商品介绍：">
        </el-form-item>
        <el-form-item label="市场价：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="销售价格：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="服务保证：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="详情页标题：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="详情页描述：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品上架：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品推荐：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品备注：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="特惠促销：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品限购：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="满减价格：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="title">商品属性</div>
        </el-form-item>
        <el-form-item label="商品规格：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品货号：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="产地：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="风格：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="材质：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="饰面材质：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="适用空间：">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="title">商品相册</div>
        </el-form-item>
        <el-form-item>
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog size="tiny">
            <img width="100%" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <div class="title">移动端</div>
        </el-form-item>
        <el-form-item>
          <Veditor></Veditor>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-group">
      <el-button type="primary">立即创建</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import Veditor from "@/components/Editor";
import Classify from "@/components/classify"
export default {
  components: {
    Veditor,
    Classify
  },
  data() {
    return {

    }
  }
}

</script>
<style scoped lang="scss">
.goods-add-wrap,
.relative {
  height: 100%;
}

.goods-add-wrap {
  position: relative;
  padding-bottom: 70px;
  box-sizing: border-box;
}

.relative {
  overflow: auto;
}

.el-form {
  width: 800px;
  margin: auto;
  padding: 100px;
}

.button-group {
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  text-align: center;
  height: auto;
  padding: 10px 0;
  background: #fff;
  border-top: 1px solid #dcdcdc;
}

#quill-container {
  height: 500px;
}

</style>
