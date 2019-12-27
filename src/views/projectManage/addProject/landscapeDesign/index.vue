<template>
  <el-form ref="landscapeDesign" :model="form" :inline="false" label-position="top">
    <el-form-item>
      <TitleBlock title="总体景观设计"></TitleBlock>
    </el-form-item>
    <el-form-item label="设计团队">
      <el-input v-model="form.designteam"></el-input>
    </el-form-item>
    <el-form-item label="环境设计理念与策略">
      <el-input v-model="form.gideasstrategy"></el-input>
      <Upload @setFileList="value => setFileList('gideasstrategyimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="景观总平面图">
      <el-input v-model="form.generallayout"></el-input>
      <Upload @setFileList="value => setFileList('generallayoutimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="景观功能结构">
      <el-input v-model="form.gfuncstructure"></el-input>
      <Upload @setFileList="value => setFileList('gfuncstructureimg', value)"></Upload>
    </el-form-item>
    <el-form-item>
      <TitleBlock title="重要节点景观设计"></TitleBlock>
    </el-form-item>
    <el-form-item label="核心景观设计">
      <el-input v-model="form.coredesign"></el-input>
      <Upload @setFileList="value => setFileList('coredesignimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="园区入口设计">
      <el-input v-model="form.entrydesign"></el-input>
      <Upload @setFileList="value => setFileList('entrydesignimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="公共平台/空间设计">
      <el-input v-model="form.pubspacedesign"></el-input>
      <Upload @setFileList="value => setFileList('pubspacedesignimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="屋顶景观设计">
      <el-input v-model="form.roofdesign"></el-input>
      <Upload @setFileList="value => setFileList('roofdesignimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="外立面景观设计">
      <el-input v-model="form.sketchdesign"></el-input>
      <Upload @setFileList="value => setFileList('sketchdesignimg', value)"></Upload>
    </el-form-item>
    <el-form-item>
      <TitleBlock title="景观设计小结"></TitleBlock>
    </el-form-item>
    <el-form-item label="项目亮点">
      <el-input v-model="form.gardenadvantage"></el-input>
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
import URL from '@config/urlConfig.js'

export default {
  name: 'parkview',
  components: { TitleBlock, Upload },
  data () {
    return {
      form: {
        designteam: '',
        gideasstrategy: '',
        gideasstrategyimg: '',
        generallayout: '',
        generallayoutimg: '',
        gfuncstructure: '',
        gfuncstructureimg: '',
        coredesign: '',
        coredesignimg: '',
        entrydesign: '',
        entrydesignimg: '',
        pubspacedesign: '',
        pubspacedesignimg: '',
        roofdesign: '',
        roofdesignimg: '',
        sketchdesign: '',
        sketchdesignimg: '',
        gardenadvantage: '',
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
      this.$axios.post(URL['SELECT_GARDEN_DESIGN_INFO'], { projectid: this.projectid }).then(resp => {
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

</style>
