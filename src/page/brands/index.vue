<template>
  <div id="brands">
    <table-header>
      <template slot="conditions">
        <el-form-item label="品牌名称">
          <el-input v-model="params.name" placeholder="搜索品牌名称" :size="inputSize"></el-input>
        </el-form-item>
      </template>
    </table-header>
    <el-table :data="table" style="width: 100%" height="80vh" v-loading="loading">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="#" width="100">
      </el-table-column>
      <el-table-column label="图片" min-width="100">
        <template slot-scope="scope">
          <el-image scroll-container="#brands .el-table__body-wrapper" style="width:80px; height:60px;border-radius:4px;" fit="cover" :src="scope.row.logo" lazy></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="品牌名称" min-width="100">
      </el-table-column>
      <el-table-column prop="desc" label="品牌介绍" min-width="300">
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" min-width="160">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100">
        <template slot-scope="scope">
          <i v-bind:class="[scope.row.status ? 'el-icon-success ok' : 'el-icon-warning','status']"></i>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="160">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-view" size="mini" plain @click="preView(scope.row.id)"></el-button>
            <el-button type="primary" icon="el-icon-edit" size="mini" plain @click="modify(scope.row.id)"></el-button>
            <el-button type="primary" icon="el-icon-delete" size="mini" plain></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="page" v-if="total>0">
      <el-pagination background layout="prev, pager, next" @current-change="handlePage" :page-size="size" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import TableHeader from "@/components/tableHeader.vue"
import Axios from "axios"
import Sign from "@/util/sign"
import Common from "@/util/common"
export default {
  components: {
    TableHeader
  },
  data() {
    return {
      loading: true,
      table: [],
      size: 10,
      total: 0,
      params: {},
      inputSize: 'small',
    };
  },
  mounted: function() {
    this.handlePage(1);
  },
  methods: {
    addData: function() {
      this.$router.push("/update" + this.$route.path)
    },
    preView(id) {
      this.$router.push("/preview" + this.$route.path + "/" + id)
    },
    modify(id) {
      this.$router.push("/update" + this.$route.path + "/" + id)
    },
    handlePage(page) {
      this.$set(this.params, 'page', page)
      this.loading = true
      let url = "/backend/brands"
      const params = this.params;
      this.$nextTick(function() {
        this.$store.dispatch("get_brands_action", params).then(res => {
          if (res.code == "000") {
            this.table = res.data.data;
            this.total = res.data.total;
            this.size = res.data.per_page;
            setTimeout(() => {
              this.loading = false;
            }, this.GLOBAL.time)
          }
        }).catch(e => {
          if (Common.isObject(e)) {
            if (e.response && e.response.status == 401) {
              this.$router.push("/login")
            } else {
              console.log('请求品牌信息失败', JSON.stringify(e));
            }
          } else {
            console.log('请求品牌信息失败', e);
          }
        })
      })
    },
    handleTabsCreate(tab) {
      let newTabName = tab.page;
      let oldTab = this.editableTabs.find(o => o.name == newTabName);
      if (typeof(oldTab) == 'undefined') {
        this.editableTabs.push({
          title: tab.name,
          name: newTabName,
          content: 'New Tab content_' + tab.page
        });
      }
      this.editableTabsValue = newTabName;
    }
  }
}

</script>
<style>
.table-header {
  display: flex;
  justify-content: space-between;

  .el-form-item {
    margin-bottom: 0px;
  }
}

.ok {
  color: #3f9ae5;
}

.status {
  font-size: 16px;
}

.page {
  padding: 11px 0;
  text-align: right;
}

</style>
