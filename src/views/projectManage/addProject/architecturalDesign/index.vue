<template>
  <el-form ref="industrialPlanning" :model="form" :rules="rules" :inline="true" label-position="top">
    <el-form-item class="inline-1">
      <TitleBlock title="基本信息"></TitleBlock>
    </el-form-item>
    <el-form-item label="用地面积（ha）" class="inline-7" prop="usearea">
      <el-input v-model="form.usearea"></el-input>
    </el-form-item>
    <el-form-item label="总建筑面积（m²）" class="inline-7">
      <el-input v-model="form.buildarea"></el-input>
    </el-form-item>
    <el-form-item label="计容建筑面积（m²）" class="inline-7">
      <el-input v-model="form.meterbuildarea"></el-input>
    </el-form-item>
    <el-form-item label="容积率" class="inline-7">
      <el-input v-model="form.plotratio"></el-input>
    </el-form-item>
    <el-form-item label="建筑密度（%）" class="inline-7">
      <el-input v-model="form.builddensity"></el-input>
    </el-form-item>
    <el-form-item label="架空面积（m²）" class="inline-7">
      <el-input v-model="form.overheadarea"></el-input>
    </el-form-item>
    <el-form-item label="地下面积（m²）" class="inline-7">
      <el-input v-model="form.undergroundarea"></el-input>
    </el-form-item>
    <el-form-item label="绿化率（%）" class="inline-7">
      <el-input v-model="form.greenrate"></el-input>
    </el-form-item>
    <el-form-item label="停车位（地上）" class="inline-7">
      <el-input v-model="form.parkspaceup"></el-input>
    </el-form-item>
    <el-form-item label="停车位（地下）" class="inline-7">
      <el-input v-model="form.parkspacedown"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="建筑设计方案"></TitleBlock>
    </el-form-item>
    <el-form-item label="建筑设计团队" class="inline-1">
      <el-input v-model="form.buildteam"></el-input>
    </el-form-item>
    <el-form-item label="建筑设计理念与策略" class="inline-1">
      <el-input v-model="form.ideasstrategy"></el-input>
      <Upload @setFileList="value => setFileList('ideasstrategyimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="周边概况" class="inline-1">
      <el-input v-model="form.neardes"></el-input>
      <Upload @setFileList="value => setFileList('neardesimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="效果图" class="inline-1">
      <el-input v-model="form.designsketch"></el-input>
      <Upload @setFileList="value => setFileList('designsketchimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="总平面图" class="inline-1">
      <el-input v-model="form.generallayoutimgDes"></el-input>
      <Upload @setFileList="value => setFileList('generallayoutimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="功能布局" class="inline-1">
      <el-input v-model="form.generallayout"></el-input>
      <Upload @setFileList="value => setFileList('generallayoutimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="流线分析" class="inline-1">
      <el-input v-model="form.streamlineanalysis"></el-input>
      <Upload @setFileList="value => setFileList('streamlineanalysisimg', value)"></Upload>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="专业技术"></TitleBlock>
    </el-form-item>
    <el-form-item label="幕墙" class="inline-1">
      <el-input v-model="form.curtain"></el-input>
      <Upload @setFileList="value => setFileList('curtainimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="结构" class="inline-1">
      <el-input v-model="form.structure"></el-input>
      <Upload @setFileList="value => setFileList('structureimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="机电" class="inline-1">
      <el-input v-model="form.electromechanical"></el-input>
      <Upload @setFileList="value => setFileList('electromechanicalimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="暖通" class="inline-1">
      <el-input v-model="form.hvac"></el-input>
      <Upload @setFileList="value => setFileList('hvacimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="给排水" class="inline-1">
      <el-input v-model="form.drainage"></el-input>
      <Upload @setFileList="value => setFileList('drainageimg', value)"></Upload>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="建筑设计小结  "></TitleBlock>
    </el-form-item>
    <el-form-item label="项目亮点" class="inline-1">
      <el-input v-model="form.designadvantage"></el-input>
    </el-form-item>
    <el-form-item label="面临困境" class="inline-1">
      <el-input v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import TitleBlock from '@components/block/titleBlock'
import Upload from '@components/form/upload'
import URL from '@config/urlConfig.js'
import rules from './rules.js'

export default {
  name: 'industrialPlanning',
  components: { TitleBlock, Upload },
  data () {
    return {
      rules,
      form: {
        usearea: '',
        buildarea: '',
        meterbuildarea: '',
        plotratio: '',
        builddensity: '',
        overheadarea: '',
        undergroundarea: '',
        greenrate: '',
        parkspaceup: '',
        parkspacedown: '',
        buildteam: '',
        ideasstrategy: '',
        ideasstrategyimg: '',
        neardes: '',
        neardesimg: '',
        designsketch: '',
        designsketchimg: '',
        generallayout: '',
        generallayoutimg: '',
        streamlineanalysis: '',
        streamlineanalysisimg: '',
        curtain: '',
        curtainimg: '',
        structure: '',
        structureimg: '',
        electromechanical: '',
        electromechanicalimg: '',
        hvac: '',
        hvacimg: '',
        drainage: '',
        drainageimg: '',
        designadvantage: '',
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
      this.$axios.post(URL['selectForFormByAjax'], { projectid: this.projectid }).then(resp => {
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
    onSubmit () {
      this.$refs.industrialPlanning.validate(isValid => {
        if (isValid) {
          this.$axios.post(URL['INSERT_BUILD_DESIGN'], { ...this.form, projectid: this.projectid }).then(resp => {
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
    setFileList (column, value) {
      this.form[column] = value
    }
  },
  watch: {
    pageMark (value) {
      let info = value.split(',')
      if (info[0] === 'edit' && info[1]) this.initForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-7.el-form-item {
  width: 14%;
  margin-right: 0;
}
.inline-1.el-form-item{
  width: 100%;
  margin-right: 0;
}
</style>
