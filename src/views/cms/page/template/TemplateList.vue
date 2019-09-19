<template>
  <div>
    <el-table :data="tableData" max-height="600" stripe style="width: 100%">
      <el-table-column type="index" fixed width="60"></el-table-column>
      <el-table-column prop="siteId"  label="站点id"  width="120"/>
      <el-table-column prop="templateId"  label="模板id"  width="120"/>
      <el-table-column prop="templateName"  label="模板名称"  width="150"/>
      <el-table-column prop="templateParameter"  label="模板参数"  width="250"/>
      <el-table-column prop="templateFileId"  label="模板文件id"  width="250"/>
      <!--<el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="pageDelete(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="pageEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="params.size"
                   :current-page="params.page"
                   @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<script>
    import * as cmsApi from '../../api/cms'

    export default {
        name: 'TemplateList',
        data() {
            return {
                tableData: [],
                total: 0,
                params: {
                    page: 1,//页码
                    size: 10//每页显示个数
                }
            }
        },
        methods: {
            query: function () {
                cmsApi.template_pagelist(this.params.page, this.params.size).then(res => {
                    this.tableData = res.queryResult.list;
                    this.total = res.queryResult.total;
                })
            },
            handleCurrentChange(val) {
                this.params.page = val;
                this.query();
            }
            /*query: function () {
                cmsApi.page_pagelist(this.params.page, this.params.size, this.queryparams).then(res => {
                    this.tableData = res.queryResult.list;
                    this.total = res.queryResult.total;
                })
            },
            pageEdit: function (res) {
                this.$router.push({
                    path:'/cms/page/edit/'+res.pageId
                })
            },
            pageDelete: function (dval) {
                cmsApi.page_delete(dval.pageId).then(res => {
                    if (res.success){
                        this.$message.success('删除成功');
                        this.query();
                    }else {
                        this.$message.success('删除失败');
                    }
                })
            },
            */
        },
        mounted() {//钩子方法
            this.query();
            /*this.query();
            cmsApi.page_list().then(res => {
                this.selectOptionData = res.queryResult.list;
            })*/
        },
        created() {
            /*this.params.page = Number.parseInt(this.$route.query.page || 1);
            this.queryparams.pageId = this.$route.query.pageId || '';*/
        }
    }
</script>

<style scoped>

</style>
