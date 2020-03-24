<template>
  <el-form ref="parkPlanDesign" :model="form" :rules="rules" :inline="false" label-position="top">
    <el-form-item>
      <TitleBlock title="基本信息"></TitleBlock>
    </el-form-item>
    <el-form-item label="用地性质" prop="usetype">
      <el-select v-model="form.usetype" placeholder="请选择" :clearable="true">
        <el-option v-for="item in usetypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="nearproject" label="周边项目">
      <el-input type="textarea" autosize  v-model="form.nearproject"></el-input>
    </el-form-item>
    <el-form-item>
      <TitleBlock title="规划设计方案"></TitleBlock>
    </el-form-item>
    <el-form-item prop="designidea" label="规划设计理念">
      <el-input type="textarea" autosize  v-model="form.designidea"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <Upload :value="form.designideaimgArr" @setFileList="value => setFileList('designideaimg', value)"></Upload>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="funcstructure" label="功能结构">
      <el-input type="textarea" autosize  v-model="form.funcstructure"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.funcstructureimgArr" @setFileList="value => setFileList('funcstructureimg', value)"></Upload> -->
      <UploadDescBottom :value="form.funcstructureimgArr" @setFileList="value => setFileList('funcstructureimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="landuse" label="土地利用">
      <el-input type="textarea" autosize  v-model="form.landuse"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.landuseimgArr" @setFileList="value => setFileList('landuseimg', value)"></Upload> -->
      <UploadDescBottom :value="form.landuseimgArr" @setFileList="value => setFileList('landuseimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="spatialform" label="空间形态">
      <el-input type="textarea" autosize  v-model="form.spatialform"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.spatialformimgArr" @setFileList="value => setFileList('spatialformimg', value)"></Upload> -->
      <UploadDescBottom :value="form.spatialformimgArr" @setFileList="value => setFileList('spatialformimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="roadtraffic" label="道路交通">
      <el-input type="textarea" autosize  v-model="form.roadtraffic"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.roadtrafficimgArr" @setFileList="value => setFileList('roadtrafficimg', value)"></Upload> -->
      <UploadDescBottom :value="form.roadtrafficimgArr" @setFileList="value => setFileList('roadtrafficimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="supportingfacilities" label="配套设施">
      <el-input type="textarea" autosize  v-model="form.supportingfacilities"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.supportingfacilitiesimgArr" @setFileList="value => setFileList('supportingfacilitiesimg', value)"></Upload> -->
      <UploadDescBottom :value="form.supportingfacilitiesimgArr" @setFileList="value => setFileList('supportingfacilitiesimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item prop="impcontrol" label="实施控制">
      <el-input type="textarea" autosize  v-model="form.impcontrol"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.impcontrolimgArr" @setFileList="value => setFileList('impcontrolimg', value)"></Upload> -->
      <UploadDescBottom :value="form.impcontrolimgArr" @setFileList="value => setFileList('impcontrolimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item>
      <TitleBlock title="规划设计小结"></TitleBlock>
    </el-form-item>
     <el-form-item prop="designteam" label="规划设计团队">
      <el-input type="textarea" autosize  v-model="form.designteam"></el-input>
    </el-form-item>
    <el-form-item prop="planadvantage" label="规划设计亮点">
      <el-input type="textarea" autosize  v-model="form.planadvantage"></el-input>
    </el-form-item>
    <el-form-item prop="deficiencies" label="规划设计不足">
      <el-input type="textarea" autosize  v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">
        <span v-if="form.butflag=='add'">保存到草稿箱</span>
        <span v-if="form.butflag!='add'">保存修改</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import TitleBlock from '@components/block/titleBlock'
import UploadDescBottom from '@components/form/upload-desc-bottom'
import Upload from '@components/form/upload'
import rules from './rules.js'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'

export default {
  name: 'parkPlanDesign',
  components: { TitleBlock, Upload, UploadDescBottom },
  data () {
    return {
      usetypeList: _D.usetypeList,
      rules,
      form: {
        usetype: '',
        nearproject: '',
        designteam: '',
        designidea: '',
        designideaimg: '',
        designideaimgArr: [],
        funcstructure: '',
        funcstructureimg: '',
        funcstructureimgArr: [],
        landuse: '',
        landuseimg: '',
        landuseimgArr: [],
        spatialform: '',
        spatialformimg: '',
        spatialformimgArr: [],
        roadtraffic: '',
        roadtrafficimg: '',
        roadtrafficimgArr: [],
        supportingfacilities: '',
        supportingfacilitiesimg: '',
        supportingfacilitiesimgArr: [],
        impcontrol: '',
        impcontrolimg: '',
        impcontrolimgArr: [],
        planadvantage: '',
        deficiencies: '',
        butflag: 'add'
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
      this.form.butflag = 'update'
    }
  },
  methods: {
    initForm () {
      this.$axios.post(URL['SELECT_PLAN_DESIGN_INFO'], { projectid: this.projectid }).then(resp => {
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
