<template>
  <div>
    <el-container style="height: auto; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>CMS</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/cms/page/pagelist/">页面列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/cms/template/pagelist/">模板列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/cms/template/pagelist/">模板文件</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  .el-header {
    background-color: #1e90ff;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>
