<template>
  <el-row>
    <el-col :span="24">
      <el-form ref="projectList" :model="form" label-position="right" :inline="true">
        <el-form-item class="inline-1">
          <el-col :span="20"><el-input v-model="form.parkName" placeholder="请输入园区名称"></el-input></el-col>
          <el-col :span="4"><el-button type="primary" class="inline" @click="getData">确认</el-button></el-col>
        </el-form-item>
        <el-form-item label="项目地址" class="inline-5">
          <el-cascader
            v-model="form.position"
            :props="positionProps"></el-cascader>
        </el-form-item>
        <el-form-item label="用地面积" class="inline-5">
          <el-input v-model="form.useArea"></el-input>
        </el-form-item>
        <el-form-item label="总建筑面积" class="inline-5">
          <el-input v-model="form.buildArea"></el-input>
        </el-form-item>
        <el-form-item label="容积率" class="inline-5">
          <el-input v-model="form.plotRatio"></el-input>
        </el-form-item>
        <el-form-item label="开发时间" class="inline-5">
          <el-date-picker
            v-model="form.developTime"
            type="year"
            format="yyyy"
            value-format="yyyy"
            placeholder="选择年">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="建成时间" class="inline-5">
          <el-date-picker
            v-model="form.createTime"
            type="year"
            format="yyyy"
            value-format="yyyy"
            placeholder="选择年">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="主导产业" class="inline-5">
          <el-input v-model="form.leadIndustry"></el-input>
        </el-form-item>
        <el-form-item label="开发主体" class="inline-5">
          <el-input v-model="form.devSubject"></el-input>
        </el-form-item>
        <el-form-item label="运营模式" class="inline-5">
          <el-select v-model="form.operMode" placeholder="请选择">
            <el-option v-for="item in operModeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="园区类型" class="inline-5">
          <el-select v-model="form.parkType" placeholder="请选择">
            <el-option v-for="item in parkTypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24">
      <el-table
        border
        v-loading="loading"
        :data="tableData"
        max-height="450"
        style="width: 100%">
        <el-table-column
          prop="projectid"
          label="项目ID">
        </el-table-column>
        <el-table-column
          prop="parkname"
          label="园区名称">
        </el-table-column>
        <el-table-column
          prop="parktype"
          label="园区类型">
        </el-table-column>
        <el-table-column
          prop="location"
          label="所属区位">
        </el-table-column>
        <el-table-column
          prop="usetype"
          label="用地性质">
        </el-table-column>
        <el-table-column
          prop="usearea"
          label="用地面积（公顷）">
        </el-table-column>
        <el-table-column
          prop="updatetime"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="编辑">
        <template slot-scope="{row}">
          <!-- <i class="el-icon-edit"></i> -->
          <i class="el-icon-delete pointer" @click="deleteProject(row)"></i>
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
import * as _ from 'lodash'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'

export default {
  name: 'projectList',
  data () {
    return {
      loading: true,
      tableData: [],
      page: 1,
      pageSize: 10,
      total: 0,
      operModeList: _D.operModeList,
      parkTypeList: _D.parkTypeList,
      form: {
        parkName: '',
        position: [],
        province: '',
        city: '',
        region: '',
        street: '',
        useArea: '',
        buildArea: '',
        plotRatio: '',
        developTime: '',
        createTime: '',
        leadIndustry: '',
        devSubject: '',
        operMode: '',
        parkType: ''
      }
    }
  },
  computed: {
    positionProps () {
      let vm = this
      return {
        expandTrigger: 'click',
        lazy: true,
        lazyLoad (node, resolve) {
          const { level = 0, value = -1 } = node
          vm.$axios.post(URL['GET_SELECT_AREA'], { level: level + 1 }).then(resp => {
            if (resp.status === 200) {
              if (resp.data && resp.data.code === 1) {
                resolve(_.map(_.filter(resp.data.data || [], v => v.parentid === value), v => ({ value: v.areaid, label: v.areaname })))
              }
            }
          })
        }
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$axios.post(URL['SELECT_PARK_INFO'], { ...this.form, parkstatus: 2, page: this.page, pageSize: this.pageSize }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            this.tableData = resp.data.data
            this.total = resp.data.pageCount
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
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
  },
  watch: {
    'form.position' (value) {
      const [ province, city, region, street ] = value
      this.form.province = province
      this.form.city = city
      this.form.region = region
      this.form.street = street
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-5.el-form-item {
  width: 20%;
  margin-right: 0;
}
.inline-5.el-input {
  width: 20%;
  margin-right: 0;
}
.inline-4.el-form-item {
  width: 25%;
  margin-right: 0;
}
.inline-4.el-input {
  width: 25%;
  margin-right: 0;
}
.inline-1.el-form-item{
  width: 100%;
  margin-right: 0;
}
.empty{
  text-align: center;
  line-height: 300px;
}
</style>
