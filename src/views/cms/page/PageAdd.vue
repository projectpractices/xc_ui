<template>
  <div>
    <el-form ref="form" :model="pageForm" label-width="80px" style="width: 400px;">
      <el-form-item label="所属站点">
        <el-select v-model="pageForm.siteId" placeholder="请选择站点">
          <el-option v-for="item in siteList"
                     :key="item.siteId"
                     :label="item.siteName"
                     :value="item.siteId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择模板">
        <el-select v-model="pageForm.templateId" placeholder="请选择模板">
          <el-option v-for="item in templateList"
                     :key="item.templateId"
                     :label="item.templateName"
                     :value="item.templateId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="页面名称">
        <el-input v-model="pageForm.pageName" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="别名">
        <el-input v-model="pageForm.pageAliase" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="访问路径">
        <el-input v-model="pageForm.pageWebPath" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="物理路径">
        <el-input v-model="pageForm.pagePhysicalPath" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="pageForm.pageType">
          <el-radio class="radio" label="0">静态</el-radio>
          <el-radio class="radio" label="1">动态</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker v-model="pageForm.pageCreateTime" type="datetime" placeholder="选择日期时间"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="primary" @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import * as cmsApi from '../api/cms'

    export default {
        name: 'pageForm',
        data() {
            return {
                siteList: [],
                templateList: [],
                pageForm: {
                    siteId: '',
                    templateId: '',
                    pageName: '',
                    pageAliase: '',
                    pageWebPath: '',
                    pageParameter: '',
                    pagePhysicalPath: '',
                    pageType: '',
                    pageCreateTime: new Date()
                }
            }
        },
        methods: {
            onSubmit: function () {

            },
            goBack: function () {
                this.$router.push({
                    path: '/cms/page/pagelist',
                    query: {
                        page: this.$route.query.page,
                        pageId: this.$route.query.pageId
                    }
                })
            },
            handleCurrentChange(val) {

            }
        },
        mounted() {//钩子方法

        },
        created() {
            //初始化站点列表
            this.siteList = [
                {
                    siteId: '5a751fab6abb5044e0d19ea1',
                    siteName: '门户主站'
                },
                {
                    siteId: '102',
                    siteName: '测试站'
                }
            ],
                //模板列表
                this.templateList = [
                    {
                        templateId: '5a962b52b00ffc514038faf7',
                        templateName: '首页'
                    },
                    {
                        templateId: '5a962bf8b00ffc514038fafa',
                        templateName: '轮播图'
                    }
                ]
        }
    }
</script>

<style scoped>

</style>
