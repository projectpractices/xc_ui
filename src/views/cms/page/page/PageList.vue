<template>
  <div>
    <el-select v-model="queryparams.pageId" clearable placeholder="请选择站点">
      <el-option
        v-for="item in selectOptionData" :key="item.pageId" :lable="item.pageAliase" :value="item.pageId">
      </el-option>
    </el-select>
    <el-button type="primary" plain @click="query()">查询</el-button>
    <router-link :to="{path:'/cms/page/add',query:{
      page:this.params.page,
      pageId:this.queryparams.pageId
    }}">
      <el-button type="primary" plain @click="query()">添加</el-button>
    </router-link>
    <el-table :data="tableData" max-height="600" stripe style="width: 100%">
      <el-table-column type="index" fixed width="60"></el-table-column>
      <el-table-column prop="pageName"  label="页面名称"  width="120"/>
      <el-table-column prop="pageAliase"  label="别名"  width="120"/>
      <el-table-column prop="pageType"  label="页面类型"  width="150"/>
      <el-table-column prop="pageWebPath"  label="访问路径"  width="250"/>
      <el-table-column prop="pagePhysicalPath"  label="物理路径"  width="250"/>
      <el-table-column prop="pageCreateTime" fixed="right"  label="创建时间"  width="180"/>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="pageDelete(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="pageEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="params.size"
                   :current-page="params.page"
                   @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<script>
    import * as cmsApi from '../../api/cms'

    export default {
        name: 'PageList',
        data() {
            return {
                selectOptionData: [],
                tableData: [],
                total: 0,
                params: {
                    page: 1,//页码
                    size: 10//每页显示个数
                },
                queryparams: {
                    pageId: '',
                    pageAliase: ''
                }
            }
        },
        methods: {
            query: function () {
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
            handleCurrentChange(val) {
                this.params.page = val;
                this.query();
            }
        },
        mounted() {//钩子方法
            this.query();
            cmsApi.page_list().then(res => {
                this.selectOptionData = res.queryResult.list;
            })
        },
        created() {
            this.params.page = Number.parseInt(this.$route.query.page || 1);
            this.queryparams.pageId = this.$route.query.pageId || '';
        }
    }
</script>

<style scoped>

</style>
