<template>
  <div id="articles" v-loading="loading">
    <table-header>
      <template slot="conditions">
        <el-form-item label="标题">
          <el-input v-model="params.title" placeholder="搜索用户名" size="small"></el-input>
        </el-form-item>
      </template>
    </table-header>
    <el-table :data="adminList" style="width: 100%" height="72vh" v-loading="loading">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="#" width="50">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="100">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" min-width="100">
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" min-width="100">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" min-width="100">
      </el-table-column>
      <el-table-column prop="createtime" label="创建时间" min-width="100">
      </el-table-column>
      <el-table-column prop="updatetime" label="更新时间" min-width="100">
      </el-table-column>
      <el-table-column prop="logintime" label="登录时间" min-width="100">
      </el-table-column>
      </el-table-column>
      <el-table-column prop="status" label="状态" min-width="100">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" size="mini" plain @click="edit(scope.row.id)"></el-button>
            <el-button type="primary" icon="el-icon-delete" size="mini" plain></el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary" size="mini" plain @click="freeze(scope.row.id)">封号</el-button>
            <el-button type="primary" size="mini" plain @click="unFreeze(scope.row.id)">解冻</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="dataCount">
      </el-pagination>
    </div>
    <add-dialog :visible="addDialog.visible" :title="addDialog.title" ref="AddDialog" :form="oneAdmin"></add-dialog>
  </div>
</template>
<script>
import TableHeader from "@/components/tableHeader.vue"
import AddDialog from "./add"
import { mapState,mapGetters } from 'vuex'
export default {
  components: {
    TableHeader,
    AddDialog
  },
  data() {
    return {
      loading: false,
      params: {},
      addDialog: {
        type: 0,
        visible: false,
        title: "新增子账号"
      },
      oneAdmin:{}
    };
  },
  computed: {
    ...mapState({
      dataCount: state => state.account.dataCount,
      adminList: state => state.account.adminList,
    }),
    ...mapGetters([
      'getAdminById'
    ])
  },
  created: function() {
    this.getData({
      keyword: "1",
      status: 1,
      page: 1
    })

  },
  methods: {
    getData(param) {
      this.$store.dispatch("list_account_action", param)
    },
    addData() {
      this.$refs.AddDialog.visible = true
      this.$refs.AddDialog.title = "新增子账号"
      this.$refs.AddDialog.type = 0
    },
    batchDelete() {

    },
    handleDelete($id) {

    },
    handleSelectionChange(val) {

    },
    handlePage(page) {

    },
    handleTabsCreate(id) {

    },
    edit(id) {
      this.oneAdmin = this.getAdminById(id)
      this.$refs.AddDialog.visible = true
      this.$refs.AddDialog.title = "编辑子账号"
      this.$refs.AddDialog.type = 1
    },
    freeze(id) {

    },
    unFreeze(id) {
      this.$store.dispatch("unfreeze_account_action", { id: id }).then(res => {

      })
    }
  }
}

</script>
<style lang="scss" scoped>
.el-button-group {
  padding: 5px 0px;
}

</style>
