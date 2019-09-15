<template>
  <div>
    <el-form :model="pageForm" :rules="rules" ref="pageForm" label-width="80px" style="width: 400px;">
      <el-form-item label="所属站点" prop="siteId">
        <el-select v-model="pageForm.siteId" placeholder="请选择站点">
          <el-option v-for="item in siteList"
                     :key="item.siteId"
                     :label="item.siteName"
                     :value="item.siteId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择模板" prop="templateId">
        <el-select v-model="pageForm.templateId" placeholder="请选择模板">
          <el-option v-for="item in templateList"
                     :key="item.templateId"
                     :label="item.templateName"
                     :value="item.templateId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="页面名称" prop="pageName">
        <el-input v-model="pageForm.pageName" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="别名" prop="pageAliase">
        <el-input v-model="pageForm.pageAliase" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="访问路径" prop="pageWebPath">
        <el-input v-model="pageForm.pageWebPath" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="物理路径" prop="pagePhysicalPath">
        <el-input v-model="pageForm.pagePhysicalPath" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="类型" prop="pageType">
        <el-radio-group v-model="pageForm.pageType">
          <el-radio class="radio" label="0">静态</el-radio>
          <el-radio class="radio" label="1">动态</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="创建时间" prop="pageCreateTime">
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
                },
                rules: {
                    siteId: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ],
                    templateId: [
                        {required: true, message: '请选择活动区域', trigger: 'blur'}
                    ],
                    pageName: [
                        {required: true, message: '请选择活动区域', trigger: 'blur'}
                    ],
                    pageAliase: [
                        {required: true, message: '请选择活动区域', trigger: 'blur'}
                    ],
                    pageWebPath: [
                        {required: true, message: '请选择活动区域', trigger: 'blur'}
                    ],
                    pagePhysicalPath: [
                        {required: true, message: '请选择活动资源', trigger: 'blur'}
                    ],
                    pageCreateTime: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs['pageForm'].validate((valid) => {
                    if (valid) {
                        this.$confirm('是否确定提交', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            cmsApi.page_add(this.pageForm).then(res => {
                                if (res.success) {
                                    this.$message.success('保存成功');
                                    this.$refs['pageForm'].resetFields();
                                }else {
                                    this.$message.error('保存失败');
                                }
                            });
                        }).catch(() => {
                            this.$message.success('取消保存');
                        });
                    }
                });
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
