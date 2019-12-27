<template>
  <el-row>
    <el-col :span="24" class="margin-bottom-15">
      <span class="title margin-right-10">草稿箱</span>
      <span>检索结果共<a href="javascript: void(0)">{{ total }}</a>条</span>
    </el-col>
    <el-col :span="24">
      <el-table
        border
        v-loading="loading"
        :data="tableData"
        max-height="450"
        style="width: 100%">
        <el-table-column
          prop="projectid" align="center"
          label="项目ID">
        </el-table-column>
        <el-table-column
          prop="parkname" align="center"
          label="园区名称">
        </el-table-column>
        <el-table-column
          prop="parktype" align="center"
          label="园区类型">
        </el-table-column>
        <el-table-column
          prop="location" align="center"
          label="所属区位">
        </el-table-column>
        <el-table-column
          prop="usetype" align="center"
          label="用地性质">
        </el-table-column>
        <el-table-column
          prop="usearea" align="center"
          label="用地面积（公顷）">
        </el-table-column>
        <el-table-column
          prop="updatetime" align="center"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="operate" align="center"
          label="编辑">
        <template slot-scope="{row}">
          <div  style="text-align: center">
            <i class="el-icon-edit" @click="editProject(row)" style="margin-right:50px"></i>
            <i class="el-icon-delete pointer" @click="deleteProject(row)"></i>
          </div>

        </template>
        </el-table-column>
      </el-table>
    </el-col>
    <!-- <el-col :span="24" v-show="!loading && tableData.length === 0" class="empty">
      暂无数据！
    </el-col> -->
    <el-col :span="24">
      <el-pagination
        background
        layout="prev, pager, next"
        class="text-center"
        :current-page.sync="page"
        :page-size="pageSize"
        :total="total">
      </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
import URL from '@config/urlConfig.js'

export default {
  name: 'projectList',
  data () {
    return {
      loading: true,
      tableData: [],
      page: 1,
      pageSize: 10,
      total: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$axios.post(URL['SELECT_PARK_INFO'], { parkstatus: 1, page: this.page, pageSize: this.pageSize }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            this.tableData = resp.data.data
            this.tableData.forEach(item => {
              item.updatetime = item.updatetime.substring(0, 10)
            })
            this.total = resp.data.pageCount
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    editProject (row) {
      this.$router.push({ path: `editProject/${row.projectid}` })
    },
    deleteProject (row) {
      this.$axios.post(URL['DELETE_PROJECT_BASE'], { projectid: row.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            this.$message.success(resp.data.msg || '操作成功！')
            this.getData()
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-weight: bold;
  @include font18;
}
.empty{
  text-align: center;
  line-height: 300px;
}
</style>
