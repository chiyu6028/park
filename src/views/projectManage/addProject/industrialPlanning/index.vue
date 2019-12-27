<template>
  <el-form ref="industrialPlanning" :model="form" :inline="false" label-position="top">
    <el-form-item>
      <TitleBlock title="产业规划"></TitleBlock>
    </el-form-item>
    <el-form-item label="产业规划理念">
      <el-input v-model="form.planconcept"></el-input>
    </el-form-item>
    <el-form-item label="产业定位">
      <el-input v-model="form.planlocation"></el-input>
    </el-form-item>
    <el-form-item label="发展目标">
      <el-input v-model="form.depgoal"></el-input>
    </el-form-item>
    <el-form-item label="产业体系">
      <el-input v-model="form.industrysystem"></el-input>
    </el-form-item>
    <el-form-item label="业态组成">
      <el-input v-model="form.formatcomposition"></el-input>
    </el-form-item>
    <el-form-item label="产业发展路径">
      <el-input v-model="form.deppath"></el-input>
    </el-form-item>
    <el-form-item label="产业政策">
      <el-input v-model="form.deppolicy"></el-input>
    </el-form-item>
    <el-form-item label="产业规划团队">
      <el-input v-model="form.depteam"></el-input>
    </el-form-item>
    <el-form-item label="项目区位">
      <el-input v-model="form.location"></el-input>
      <Upload @setFileList="value => setFileList('locationimges', value)"></Upload>
    </el-form-item>
    <el-form-item>
      <TitleBlock title="产业规划小结 "></TitleBlock>
    </el-form-item>
    <el-form-item label="项目亮点" class="inline-1">
      <el-input v-model="form.planadvantage"></el-input>
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

export default {
  name: 'industrialPlanning',
  components: { TitleBlock, Upload },
  data () {
    return {
      form: {
        planconcept: '',
        planlocation: '',
        depgoal: '',
        industrysystem: '',
        formatcomposition: '',
        deppath: '',
        deppolicy: '',
        depteam: '',
        location: '',
        locationimges: '',
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
    setFileList (column, value) {
      this.form[column] = value
    },
    onSubmit () {
      this.$axios.post(URL['INSERT_INDUSTRIAL_PLAN'], { ...this.form, projectid: this.projectid }).then(resp => {
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
