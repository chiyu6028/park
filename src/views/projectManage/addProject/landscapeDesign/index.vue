<template>
  <el-form ref="landscapeDesign" :model="form" :rules="rules" :inline="false" label-position="top">
    <el-form-item>
      <TitleBlock title="总体景观设计"></TitleBlock>
    </el-form-item>
    <el-form-item label="景观设计理念与策略" class="inline-1" prop="gideasstrategy">
      <el-input type="textarea" autosize  v-model="form.gideasstrategy"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.gideasstrategyimgArr" @setFileList="value => setFileList('gideasstrategyimg', value)"></Upload> -->
      <UploadDescBottom :value="form.gideasstrategyimgArr" @setFileList="value => setFileList('gideasstrategyimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="景观总平面图" class="inline-1" prop="generallayout">
      <el-input type="textarea" autosize  v-model="form.generallayout"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.generallayoutimgArr" @setFileList="value => setFileList('generallayoutimg', value)"></Upload> -->
      <UploadDescBottom :value="form.generallayoutimgArr" @setFileList="value => setFileList('generallayoutimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="景观功能结构" class="inline-1" prop="gfuncstructure">
      <el-input type="textarea" autosize  v-model="form.gfuncstructure"></el-input>
    </el-form-item>
    <el-form-item  class="inline-1">
      <!-- <Upload :value="form.gfuncstructureimgArr" @setFileList="value => setFileList('gfuncstructureimg', value)"></Upload> -->
      <UploadDescBottom :value="form.gfuncstructureimgArr" @setFileList="value => setFileList('gfuncstructureimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item>
      <TitleBlock title="重要节点景观设计"></TitleBlock>
    </el-form-item>
    <el-form-item label="核心景观设计" class="inline-1" prop="coredesign">
      <el-input type="textarea" autosize  v-model="form.coredesign"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.coredesignimgArr" @setFileList="value => setFileList('coredesignimg', value)"></Upload> -->
      <UploadDescBottom :value="form.coredesignimgArr" @setFileList="value => setFileList('coredesignimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="园区入口设计" class="inline-1" prop="entrydesign">
      <el-input type="textarea" autosize  v-model="form.entrydesign"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.entrydesignimgArr" @setFileList="value => setFileList('entrydesignimg', value)"></Upload> -->
      <UploadDescBottom :value="form.entrydesignimgArr" @setFileList="value => setFileList('entrydesignimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="公共平台/连廊空间设计" class="inline-1" prop="pubspacedesign">
      <el-input type="textarea" autosize  v-model="form.pubspacedesign" ></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.pubspacedesignimgArr" @setFileList="value => setFileList('pubspacedesignimg', value)"></Upload> -->
      <UploadDescBottom :value="form.pubspacedesignimgArr" @setFileList="value => setFileList('pubspacedesignimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="屋顶绿化设计" class="inline-1" prop="roofdesign">
      <el-input type="textarea" autosize  v-model="form.roofdesign" ></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.roofdesignimgArr" @setFileList="value => setFileList('roofdesignimg', value)"></Upload> -->
      <UploadDescBottom :value="form.roofdesignimgArr" @setFileList="value => setFileList('roofdesignimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="景观小品设计" class="inline-1" prop="sketchdesign">
      <el-input type="textarea" autosize  v-model="form.sketchdesign"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.sketchdesignimgArr" @setFileList="value => setFileList('sketchdesignimg', value)"></Upload> -->
      <UploadDescBottom :value="form.sketchdesignimgArr" @setFileList="value => setFileList('sketchdesignimg', value)"></UploadDescBottom>
    </el-form-item>

    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item>
      <TitleBlock title="景观设计小结"></TitleBlock>
    </el-form-item>
    <el-form-item label="景观设计团队" prop="designteam">
      <el-input type="textarea" autosize  v-model="form.designteam"></el-input>
    </el-form-item>
    <el-form-item label="景观设计亮点" prop="gardenadvantage">
      <el-input type="textarea" autosize  v-model="form.gardenadvantage"></el-input>
    </el-form-item>
    <el-form-item label="景观设计不足" prop="deficiencies">
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
// import Upload from '@components/form/upload'
import URL from '@config/urlConfig.js'
import rules from './rules.js'

export default {
  name: 'parkview',
  components: { UploadDescBottom, TitleBlock }, //, Upload
  data () {
    return {
      rules,
      form: {
        designteam: '',
        gideasstrategy: '',
        gideasstrategyimg: '',
        gideasstrategyimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        gfuncstructure: '',
        gfuncstructureimg: '',
        gfuncstructureimgArr: [],
        coredesign: '',
        coredesignimg: '',
        coredesignimgArr: [],
        entrydesign: '',
        entrydesignimg: '',
        entrydesignimgArr: [],
        pubspacedesign: '',
        pubspacedesignimg: '',
        pubspacedesignimgArr: [],
        roofdesign: '',
        roofdesignimg: '',
        roofdesignimgArr: [],
        sketchdesign: '',
        sketchdesignimg: '',
        sketchdesignimgArr: [],
        gardenadvantage: '',
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
    initForm (id) {
      this.$axios.post(URL['SELECT_GARDEN_DESIGN_INFO'], { projectid: id || this.projectid }).then(resp => {
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
      this.$axios.post(URL['INSERT_GARDEN_DESIGN'], { ...this.form, projectid: this.projectid }).then(resp => {
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
    },
    setFileList (column, value) {
      this.form[column] = value
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
