<template>
  <el-form ref="industrialPlanning" :model="form" :rules="rules" :inline="true" label-position="top">
    <el-form-item class="inline-1">
      <TitleBlock title="基本信息"></TitleBlock>
    </el-form-item>
    <el-form-item prop="usearea" label="用地面积（m²）" class="inline-7">
      <el-input v-model="form.usearea"></el-input>
    </el-form-item>
    <el-form-item prop="buildarea" label="总建筑面积（m²）" class="inline-7">

      <el-input v-model="form.buildarea"></el-input>
    </el-form-item>
    <el-form-item prop="meterbuildarea" label="计容建筑面积（m²）" class="inline-7">
      <el-input v-model="form.meterbuildarea"></el-input>
    </el-form-item>
    <el-form-item prop="plotratio" label="容积率" class="inline-7">
      <el-input v-model="form.plotratio"></el-input>
    </el-form-item>
    <el-form-item prop="builddensity" label="建筑密度（%）" class="inline-7">
      <el-input v-model="form.builddensity"></el-input>
    </el-form-item>
    <el-form-item prop="overheadarea" label="架空面积（m²）" class="inline-7">
      <el-input v-model="form.overheadarea"></el-input>
    </el-form-item>
    <el-form-item prop="undergroundarea" label="地下面积（m²）" class="inline-7">
      <el-input v-model="form.undergroundarea"></el-input>
    </el-form-item>
    <el-form-item prop="greenrate" label="绿化率（%）" class="inline-7">
      <el-input v-model="form.greenrate"></el-input>
    </el-form-item>
    <el-form-item prop="parkspaceup" label="停车位（地上）" class="inline-7">
      <el-input v-model="form.parkspaceup"></el-input>
    </el-form-item>
    <el-form-item prop="parkspacedown" label="停车位（地下）" class="inline-7">
      <el-input v-model="form.parkspacedown"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="建筑设计方案"></TitleBlock>
    </el-form-item>
    <el-form-item prop="ideasstrategy" label="建筑设计理念与策略" class="inline-1">
      <el-input type="textarea" autosize v-model="form.ideasstrategy"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.ideasstrategyimgArr' @setFileList="value => setFileList('ideasstrategyimg', value)"></Upload> -->
      <UploadDescBottom :value="form.ideasstrategyimgArr" @setFileList="value => setFileList('ideasstrategyimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="neardes" label="周边概况" class="inline-1">
      <el-input type="textarea" autosize v-model="form.neardes"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.neardesimgArr' @setFileList="value => setFileList('neardesimg', value)"></Upload> -->
      <UploadDescBottom :value="form.neardesimgArr" @setFileList="value => setFileList('neardesimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="designsketch" label="效果图" class="inline-1">
      <el-input type="textarea" autosize v-model="form.designsketch"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.designsketchimgArr' @setFileList="value => setFileList('designsketchimg', value)"></Upload> -->
      <UploadDescBottom :value="form.designsketchimgArr" @setFileList="value => setFileList('designsketchimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="generallayout" label="总平面图" class="inline-1">
      <el-input type="textarea" autosize v-model="form.generallayout"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.generallayoutimgArr' @setFileList="value => setFileList('generallayoutimg', value)"></Upload> -->
      <UploadDescBottom :value="form.generallayoutimgArr" @setFileList="value => setFileList('generallayoutimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="funclayout" label="功能布局" class="inline-1">
      <el-input type="textarea" autosize v-model="form.funclayout"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.funclayoutimgArr' @setFileList="value => setFileList('funclayoutimg', value)"></Upload> -->
      <UploadDescBottom :value="form.funclayoutimgArr" @setFileList="value => setFileList('funclayoutimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="streamlineanalysis" label="流线分析" class="inline-1">
      <el-input type="textarea" autosize v-model="form.streamlineanalysis"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.streamlineanalysisimgArr' @setFileList="value => setFileList('streamlineanalysisimg', value)"></Upload> -->
      <UploadDescBottom :value="form.streamlineanalysisimgArr" @setFileList="value => setFileList('streamlineanalysisimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="专业技术"></TitleBlock>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="curtain" label="幕墙" class="inline-1">
      <el-input type="textarea" autosize v-model="form.curtain"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.curtainimgArr' @setFileList="value => setFileList('curtainimg', value)"></Upload> -->
      <UploadDescBottom :value="form.curtainimgArr" @setFileList="value => setFileList('curtainimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="structure" label="结构" class="inline-1">
      <el-input type="textarea" autosize v-model="form.structure"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.structureimgArr' @setFileList="value => setFileList('structureimg', value)"></Upload> -->
      <UploadDescBottom :value="form.structureimgArr" @setFileList="value => setFileList('structureimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="electromechanical" label="机电" class="inline-1">
      <el-input type="textarea" autosize v-model="form.electromechanical"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.electromechanicalimgArr' @setFileList="value => setFileList('electromechanicalimg', value)"></Upload> -->
      <UploadDescBottom :value="form.electromechanicalimgArr" @setFileList="value => setFileList('electromechanicalimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="hvac" label="暖通" class="inline-1">
      <el-input type="textarea" autosize v-model="form.hvac"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.hvacimgArr' @setFileList="value => setFileList('hvacimg', value)"></Upload> -->
      <UploadDescBottom :value="form.hvacimgArr" @setFileList="value => setFileList('hvacimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="drainage" label="给排水" class="inline-1">
      <el-input type="textarea" autosize v-model="form.drainage"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value='form.drainageimgArr' @setFileList="value => setFileList('drainageimg', value)"></Upload> -->
      <UploadDescBottom :value="form.drainageimgArr" @setFileList="value => setFileList('drainageimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="建筑设计小结  "></TitleBlock>
    </el-form-item>
    <el-form-item prop="buildteam" label="建筑设计团队" class="inline-1">
      <el-input type="textarea" autosize v-model="form.buildteam"></el-input>
    </el-form-item>
    <el-form-item type="textarea" autosize prop="designadvantage" label="项目亮点" class="inline-1">
      <el-input v-model="form.designadvantage"></el-input>
    </el-form-item>
    <el-form-item type="textarea" autosize prop="deficiencies" label="建筑设计不足" class="inline-1">
      <el-input v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import TitleBlock from '@components/block/titleBlock'
import UploadDescBottom from '@components/form/upload-desc-bottom'
// import Upload from '@components/form/upload'
import URL from '@config/urlConfig.js'
import rules from './rules.js'

export default {
  name: 'industrialPlanning',
  components: { UploadDescBottom, TitleBlock }, //, Upload
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
        ideasstrategyimgArr: [],
        neardes: '',
        neardesimg: '',
        neardesimgArr: [],
        designsketch: '',
        designsketchimg: '',
        designsketchimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        funclayout: '',
        funclayoutimg: '',
        funclayoutimgArr: [],
        streamlineanalysis: '',
        streamlineanalysisimg: '',
        streamlineanalysisimgArr: [],
        curtain: '',
        curtainimg: '',
        curtainimgArr: [],
        structure: '',
        structureimg: '',
        structureimgArr: [],
        electromechanical: '',
        electromechanicalimg: '',
        electromechanicalimgArr: [],
        hvac: '',
        hvacimg: '',
        hvacimgArr: [],
        drainage: '',
        drainageimg: '',
        drainageimgArr: [],
        designadvantage: '',
        deficiencies: ''
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  mounted () {
    if (this.$route.path.indexOf('/editProject/') !== -1) {
      this.initForm(this.$route.params.id)
    }
  },
  methods: {
    initForm (id) {
      this.$axios.post(URL['SELECT_BUILD_DESIGN_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form = resp.data.data
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
  }
}
</script>

<style lang="scss" scoped>
</style>
