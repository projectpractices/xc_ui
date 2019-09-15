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
                tableData: [{
                    "siteId": "5a751fab6abb5044e0d19ea1",
                    "pageId": "5a754adf6abb500ad05688d9",
                    "pageName": "index.html",
                    "pageAliase": "首页",
                    "pageWebPath": "/index.html",
                    "pageParameter": null,
                    "pagePhysicalPath": "F:\\develop\\xc_portal_static\\",
                    "pageType": "0",
                    "pageTemplate": null,
                    "pageHtml": null,
                    "pageStatus": null,
                    "pageCreateTime": "2018-02-03T05:37:53.256+0000",
                    "templateId": "5a962b52b00ffc514038faf7",
                    "pageParams": null,
                    "htmlFileId": "5a7c1c54d019f14d90a1fb23",
                    "dataUrl": null
                },
                    {
                        "siteId": "5a751fab6abb5044e0d19ea1",
                        "pageId": "5a795ac7dd573c04508f3a56",
                        "pageName": "index_banner.html",
                        "pageAliase": "轮播图",
                        "pageWebPath": "/include/index_banner.html",
                        "pageParameter": null,
                        "pagePhysicalPath": "F:\\develop\\xc_portal_static\\include\\",
                        "pageType": "0",
                        "pageTemplate": null,
                        "pageHtml": null,
                        "pageStatus": null,
                        "pageCreateTime": "2018-02-06T07:34:21.255+0000",
                        "templateId": "5a962bf8b00ffc514038fafa",
                        "pageParams": null,
                        "htmlFileId": "5a795bbcdd573c04508f3a59",
                        "dataUrl": null
                    }],
                total: 50,
                params: {
                    page: 1,//页码
                    size: 10//每页显示个数
                }
            }
        },
        methods: {
            query: function () {
                cmsApi.page_list(this.params.page, this.params.size).then(res=>{
                    this.tableData=res.queryResult.list;
                    this.total = res.queryResult.total;
                })
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>
