<template>
  <el-form ref="parkPlanDesign" :model="form" :rules="rules" :inline="false" label-position="top">
    <el-form-item>
      <TitleBlock title="基本信息"></TitleBlock>
    </el-form-item>
    <el-form-item label="用地性质" prop="usetype">
      <el-select v-model="form.usetype" placeholder="请选择活动区域">
        <el-option label="区域一" value="1"></el-option>
        <el-option label="区域二" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="周边项目">
      <el-input v-model="form.nearproject"></el-input>
    </el-form-item>
    <el-form-item>
      <TitleBlock title="规划设计方案"></TitleBlock>
    </el-form-item>
    <el-form-item label="规划设计团队">
      <el-input v-model="form.designteam"></el-input>
    </el-form-item>
    <el-form-item label="规划设计理念">
      <el-input v-model="form.designidea"></el-input>
      <Upload @setFileList="value => setFileList('designideaimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="功能结构">
      <el-input v-model="form.funcstructure"></el-input>
      <Upload @setFileList="value => setFileList('funcstructureimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="土地利用">
      <el-input v-model="form.landuse"></el-input>
      <Upload @setFileList="value => setFileList('landuseimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="空间形态">
      <el-input v-model="form.spatialform"></el-input>
      <Upload @setFileList="value => setFileList('spatialformimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="道路交通">
      <el-input v-model="form.roadtraffic"></el-input>
      <Upload @setFileList="value => setFileList('roadtrafficimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="配套设施">
      <el-input v-model="form.supportingfacilities"></el-input>
      <Upload @setFileList="value => setFileList('supportingfacilitiesimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="实施控制">
      <el-input v-model="form.impcontrol"></el-input>
      <Upload @setFileList="value => setFileList('impcontrolimg', value)"></Upload>
    </el-form-item>
    <el-form-item>
      <TitleBlock title="规划设计小结"></TitleBlock>
    </el-form-item>
    <el-form-item label="项目亮点">
      <el-input v-model="form.planadvantage"></el-input>
    </el-form-item>
    <el-form-item label="面临困境">
      <el-input v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import TitleBlock from '@components/block/titleBlock'
import Upload from '@components/form/upload'
import rules from './rules.js'
import URL from '@config/urlConfig.js'

export default {
  name: 'parkPlanDesign',
  components: { TitleBlock, Upload },
  data () {
    return {
      rules,
      form: {
        usetype: '',
        nearproject: '',
        designteam: '',
        designidea: '',
        designideaimg: '',
        funcstructure: '',
        funcstructureimg: '',
        landuse: '',
        landuseimg: '',
        spatialform: '',
        spatialformimg: '',
        roadtraffic: '',
        roadtrafficimg: '',
        supportingfacilities: '',
        supportingfacilitiesimg: '',
        impcontrol: '',
        impcontrolimg: '',
        planadvantage: '',
        deficiencies: ''
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id,
      flag: state => state.flag,
      pageMark: state => state.flag + ',' + state.project_id
    })
  },
  mounted () {
    if (this.flag === 'edit') this.initForm()
  },
  methods: {
    initForm () {
      this.$axios.post(URL['SELECT_PLAN_DESIGN_INFO'], { projectid: this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            this.form = resp.data.data
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    setFileList (column, value) {
      this.form[column] = value
    },
    onSubmit () {
      this.$refs.parkPlanDesign.validate(isValid => {
        if (isValid) {
          this.$axios.post(URL['INSERT_PLAN_DESIGN'], { ...this.form, projectid: this.projectid }).then(resp => {
            if (resp.status === 200) {
              if (resp.data && resp.data.code === 1) {
                this.$message.success(resp.data.msg)
              } else {
                this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
              }
            } else {
              this.$message.error('系统异常，请联系管理员！')
            }
          })
        }
      })
    },
    pageMark (value) {
      let info = value.split(',')
      if (info[0] === 'edit' && info[1]) this.initForm()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
