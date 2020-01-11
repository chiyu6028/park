<template>
  <div class="layout">
    <el-col :span="24"  >
      <div class="query">
        <el-form ref="queryForm" :model="queryForm" label-width="80px" :inline="true" >
          <el-form-item label="" prop="userRole">
            <el-select v-model="queryForm.userRole" placeholder="请选择系统权限">
              <el-option label="--请选择系统权限--" value=""></el-option>
              <el-option v-for="(item, index) in roleList" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="" prop="userName">
           <el-input v-model="queryForm.userName" placeholder="员工ID/用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" @click="queryData()">查询</el-button>
            <el-button @click="resetForm" size="medium">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
    <el-col :span="24">
      <el-table class="data-table"  v-loading="loading" :data="tableData" max-height="500" height="500" style="width: 100%">
        <el-table-column align="center" prop="userId" label="员工ID"></el-table-column>
        <el-table-column align="center" prop="userName" label="用户名"></el-table-column>
        <el-table-column align="center" prop="userDep" label="部门"></el-table-column>
        <el-table-column align="center" prop="userPost" label="岗位"></el-table-column>
        <el-table-column align="center" prop="loginNum" label="登录次数"></el-table-column>
        <el-table-column align="center" prop="lastLogin" label="最近登录时间"></el-table-column>
        <el-table-column align="center" prop="_userRole" label="系统权限"></el-table-column>
        <el-table-column align="center" prop="_userStatus" label="账号状态"></el-table-column>
        <el-table-column align="center" prop="userId" label="分配权限">
          <template slot-scope="scope">
            <el-button type="primary" round size="small" @click="distribution(scope.row)">分配权限</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="operate" label="账号禁用/启用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.userStstus" :active-text="scope.row._userStatus" active-value="1"  inactive-value="0" @change="changeStatus($event, scope.row)"></el-switch>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24">
      <el-pagination background layout="prev, pager, next" class="text-center" :current-page.sync="page" :page-size="pageSize" @size-change="changeSize" @current-change="changePage" @prev-click="changePage" @next-click="changePage" :total="total"></el-pagination>
    </el-col>
    <el-dialog title="选择分配权限" center :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>
        <el-radio v-model="form.userRole" label="1">超级管理员</el-radio>
        <el-radio v-model="form.userRole" label="2">下载用户</el-radio>
        <el-radio v-model="form.userRole" label="3">浏览用户</el-radio>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitUserRole">确 认</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
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
      total: 0,
      roleList: [
        { key: '1', value: '超级管理员' },
        { key: '2', value: '下载用户' },
        { key: '3', value: '浏览用户' }
      ],
      queryForm: {
        userRole: '',
        userName: ''
      },
      statusObj: {
        '0': '禁用',
        '1': '启用'
      },
      roleListObj: {
        '1': '超级管理员',
        '2': '下载用户',
        '3': '浏览用户'
      },
      dialogVisible: false,
      form: {
        userRole: '',
        id: 0
      }
    }
  },
  mounted () {
    this.queryData()
  },
  methods: {
    handleClose () {
      this.form.userRole = ''
      this.id = 0
    },
    changeStatus (newVal, row) {
      let str = ''
      let oldVal = ''
      if (newVal === '0') {
        oldVal = '1'
        str = '账号禁用后,该账号将不可登录此系统'
      } else if (newVal === '1') {
        oldVal = '0'
        str = '是否启用该账号'
      }
      this.$confirm(str, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let param = {
          userId: row.userId,
          userStstus: newVal
        }
        this.$axios.post(URL['updateUserInfo'], param).then(res => {
          if (res.status === 200) {
            if (res.data && res.data.code === 1) {
              this.$message.success('操作成功!')
              this.queryData()
            } else {
              this.$message.error(res.data && res.data.msg ? res.data.msg : '处理失败')
              row.userStstus = oldVal
            }
          } else {
            this.$message.error('系统异常，请联系管理员！')
            row.userStstus = oldVal
          }
        }).catch(e => {
          this.$message.error('系统异常，请联系管理员！')
        })
      }).catch(() => {
        row.userStstus = oldVal
      })
    },
    distribution (row) {
      this.dialogVisible = true
      this.form.userRole = row.userRole
      this.form.id = row.userId
    },
    submitUserRole () {
      this.$confirm('确定提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let param = {
          userId: this.form.id,
          userRole: this.form.userRole
        }
        this.$axios.post(URL['updateUserInfo'], param).then(res => {
          if (res.status === 200) {
            if (res.data && res.data.code === 1) {
              this.$message.success('操作成功!')
              this.dialogVisible = false
              this.queryData()
            } else {
              this.$message.error(res.data && res.data.msg ? res.data.msg : '处理失败')
            }
          } else {
            this.$message.error('系统异常，请联系管理员！')
          }
        }).catch(e => {
          this.$message.error('系统异常，请联系管理员！')
        })
      }).catch(() => {
      })
    },
    resetForm () { // 重置表单
      this.$refs.queryForm.resetFields()
    },
    queryData () {
      this.loading = true
      this.queryForm.page = this.page
      this.queryForm.pageSize = this.pageSize
      this.$axios.post(URL['selectUserList'], this.queryForm).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            let data = resp.data && resp.data.data ? resp.data.data : []
            let list = data.list ? data.list : []
            list.forEach(item => {
              item._userRole = this.roleListObj[item.userRole] ? this.roleListObj[item.userRole] : item.userRole
              item._userStatus = this.statusObj[item.userStstus] ? this.statusObj[item.userStstus] : item.userStstus
            })
            this.tableData = list
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
      this.getData(page)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  padding: 20px;
  overflow: hidden;
  .data-table{
    border: 1px solid #EBEEF5;
    margin-bottom: 10px;
  }
}
.empty{
  text-align: center;
  line-height: 300px;
}

</style>
