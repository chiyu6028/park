<template>
  <el-row class="form-table-list" style="height: auto !important;">
    <el-col :span="24" class="list-row">
      <el-form ref="projectList" :model="form" :inline="true" style="width: 100% !important;">
        <el-form-item class="inline-1">
          <el-col :span="6"><el-input size="large" maxlength="30" v-model="form.parkName" placeholder="请输入园区名称"></el-input></el-col>
          <el-col :span="18" class="padding-left-15"><el-button type="primary" class="inline" @click="getData">确认</el-button></el-col>
        </el-form-item>
        <el-form-item label="项目地址" class="inline-5">
          <el-cascader
            v-model="form.position"
            :props="positionProps"></el-cascader>
        </el-form-item>
        <el-form-item label="用地面积" class="inline-5">
          <el-select v-model="form.useArea" placeholder="请选择">
            <el-option v-for="item in useAreaList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="总建面积" class="inline-5">
          <el-select v-model="form.buildArea" placeholder="请选择">
            <el-option v-for="item in buildTotalAreaList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="容积率" class="inline-5">
          <el-select v-model="form.plotRatio" placeholder="请选择">
            <el-option v-for="item in plotRatioList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
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
          <el-select v-model="form.leadIndustry" placeholder="请选择">
            <el-option v-for="item in leadIndustryList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开发主体" class="inline-5">
          <el-select v-model="form.devSubject" placeholder="请选择">
            <el-option v-for="item in devSubjectList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
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
	<h3 style="margin-bottom: 20px;">项目列表</h3>
    <el-col :span="24">
      <el-table border v-loading="loading" :data="tableData" stripe border="0" style="width: 100%">
        <el-table-column class="tbhd" width="60" align="center" prop="projectid" label="项目ID"></el-table-column>
        <el-table-column class="tbhd" align="center" prop="parkname" label="园区名称">
          <template slot-scope="{row}">
            <a class="detail" @click="detailProject(row)">{{row.parkname}}</a>
          </template>
        </el-table-column>
        <el-table-column class="tbhd" width="110" align="center" prop="parktype" label="园区类型"></el-table-column>
        <el-table-column class="tbhd" align="center" prop="location" label="项目地址"></el-table-column>
        <el-table-column class="tbhd" width="120" align="center" prop="usetype" label="用地性质"></el-table-column>
        <el-table-column class="tbhd" align="center" prop="usearea" label="用地面积(公顷)"></el-table-column>
        <el-table-column class="tbhd" align="center" prop="buildArea" label="建筑面积(公顷)"></el-table-column>
        <el-table-column class="tbhd" align="center" prop="updatetime" label="发布时间"></el-table-column>
        <el-table-column class="tbhd" width="80" align="center" prop="operate" label="操作" v-if="enable">
          <template slot-scope="{row}">
            <i class="el-icon-edit pointer" title="编辑"  @click="editProject(row)"></i> &nbsp;&nbsp;
            <i class="el-icon-delete pointer padding-left-10"  title="删除" @click="deleteProject(row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24" style="margin-top: 20px;text-align:center;">
      <el-pagination @size-change="changeSize" @current-change="changePage" :current-page="page" :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
import * as _ from 'lodash'
import T from '@utils/tools'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'

export default {
  name: 'projectList',
  data () {
    return {
      enable: true,
      loading: true,
      tableData: [],
      page: 1,
      pageSize: 10,
      total: 0,
      useAreaList: _D.useAreaList,
      buildTotalAreaList: _D.buildTotalAreaList,
      plotRatioList: _D.plotRatioList,
      leadIndustryList: _D.leadIndustryList,
      devSubjectList: _D.devSubjectList,
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
  created () {
    if (this.$store.state.role === '3' || this.$store.state.role === '2') {
      this.enable = false
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
      this.$confirm('您确定要把此项目放入回收站吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
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
.empty{
  text-align: center;
  line-height: 300px;
}
.detail {
  cursor: pointer;
  &:hover{
    color: #1580F8;
  }
}
</style>
