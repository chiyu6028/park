<template>
  <el-row class="form-table-list">
    <el-col :span="24" class="margin-bottom-15">
      <span class="title margin-right-10">草稿箱</span>
      <span class="result">检索结果共<span class="num">{{ total }}</span>条</span>
    </el-col>
    <el-col :span="24">
      <el-table v-loading="loading" :data="tableData" @row-dblclick="viewDetail" style="width: 100%">
        <el-table-column align="center" prop="projectid" label="项目ID"></el-table-column>
        <el-table-column align="center" prop="parkname" label="园区名称">
          <template slot-scope="{row}">
            <i @click="detailProject(row)">{{row.parkname}}</i>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="parktype" label="园区类型"></el-table-column>
        <el-table-column align="center" prop="location" label="所属区位"></el-table-column>
        <el-table-column align="center" prop="usetype" label="用地性质"></el-table-column>
        <el-table-column align="center" prop="usearea" label="用地面积（公顷）"></el-table-column>
        <el-table-column align="center" prop="buildArea" label="建筑面积（公顷）"></el-table-column>
        <el-table-column align="center" prop="updatetime" label="发布时间"></el-table-column>
        <el-table-column align="center" prop="operate" label="编辑">
          <template slot-scope="{row}">
            <i class="el-icon-edit pointer" title="操作" @click="editProject(row)"></i>
            <i class="el-icon-delete pointer padding-left-10" title="删除" @click="deleteProject(row)"></i>
          </template>
          </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24" style="margin-top: 20px;text-align:center;">
      <el-pagination @size-change="changeSize" @current-change="changePage" :current-page="page" :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
    </el-col>
  </el-row>
</template>

<script>
import * as _ from 'lodash'
import URL from '@config/urlConfig.js'
import T from '@utils/tools'
import * as _D from '@config/dictionaries'

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
    getData (page) {
      this.loading = true
      this.$axios.post(URL['SELECT_PARK_INFO'], { parkstatus: 1, page: page || this.page, pageSize: this.pageSize }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            let data = resp.data && resp.data.data ? resp.data.data : []
            let typeConvert = T.getConvert(_D.parkTypeList)
            let usetypeConvert = T.getConvert(_D.usetypeList)
            this.tableData = _.map(data, v => ({
              ...v,
              _parktype: v.parktype,
              parktype: T.getConvertValue(v.parktype, typeConvert),
              _usetype: v.usetype,
              usetype: T.getConvertValue(v.usetype, usetypeConvert)
            }))
            this.page = resp.data.curPage
            this.total = resp.data.total
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    editProject (row) {
      this.$router.push({ path: `editProject/${row.projectid}`, query: { t: Date.now() } })
    },
    detailProject (row) {
      this.$router.push({ path: `detail/${row.projectid}`, query: { t: Date.now() } })
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
    },
    changeSize (pageSize) {
      this.pageSize = pageSize
      this.getData()
    },
    changePage (page) {
      this.page = page
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-weight: bold;
  @include font18;
}
.result{
  .num{
    padding: 0 5px;
    color: #feb1b1;
  }
  @include font12;
}
.empty{
  text-align: center;
  line-height: 300px;
}
</style>
