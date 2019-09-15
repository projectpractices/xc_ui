<template>
  <div>
    <el-button type="primary" plain @click="query()">查询</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index"  width="60"></el-table-column>
      <el-table-column prop="pageName"  label="页面名称"  width="120"/>
      <el-table-column prop="pageAliase"  label="别名"  width="120"/>
      <el-table-column prop="pageType"  label="页面类型"  width="150"/>
      <el-table-column prop="pageWebPath"  label="访问路径"  width="250"/>
      <el-table-column prop="pagePhysicalPath"  label="物理路径"  width="250"/>
      <el-table-column prop="pageCreateTime"  label="创建时间"  width="180"  />
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="params.size"
                   :current-page="params.page"
                   @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<script>
    import * as cmsApi from '../api/cms'

    export default {
        name: 'PageList',
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
                cmsApi.page_list(this.params.page, this.params.size).then(res => {
                    this.tableData = res.queryResult.list;
                    this.total = res.queryResult.total;
                })
            },
            handleCurrentChange(val) {
                this.params.page = val;
                this.query();
            }
        },
        mounted() {//钩子方法
            this.query();
        }
    }
</script>

<style scoped>

</style>
