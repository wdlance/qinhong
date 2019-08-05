<template>
    <div id="goods">
        <el-table :data="table" style="width: 100%" height="80vh" v-loading="loading">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="#" width="100">
            </el-table-column>
            <el-table-column prop="avatar" label="封面" min-width="100">
                <template slot-scope="scope">
                    <el-image scroll-container="#goods .el-table__body-wrapper" style="width:80px; height:60px;border-radius:4px;" fit="cover" :src="scope.row.preview_image" lazy></el-image>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="标题" min-width="200">
            </el-table-column>
            <el-table-column prop="price" label="价格" min-width="90">
            </el-table-column>
            <el-table-column label="类型" prop="type.name" width="100">
            </el-table-column>
            <el-table-column prop="buy_count" label="消费" min-width="50">
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
                        <el-button type="primary" icon="el-icon-view" size="mini" plain></el-button>
                        <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
                        <el-button type="primary" icon="el-icon-delete" size="mini" plain></el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
 import Axios from "axios"
export default {
    data() {
        return {
            loading: true,
            table: [],
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        };
    },
    mounted: function() {
        let url = "/backend/goods"
        this.$nextTick(function() {
            Axios.get(url).then((response) => {
                this.table = response.data.data;
            }, (error) => {
                console.log('请求失败', error);
            });
            // Code that will run only after the
            // entire view has been rendered
            setTimeout(() => {
                this.loading = false;
            }, this.GLOBAL.time)
        })
    },
    methods: {
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
.ok {
    color: #3f9ae5;
}

.status {
    font-size: 16px;
}
</style>