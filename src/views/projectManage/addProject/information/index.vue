<template>
  <el-form ref="information" :model="form" :inline="false" label-position="top" style="padding-top: 23px;">
    <el-form-item label="产业规划方案">
      <p>1、后台资料上传，可批量上传，每一类可上传最多5个文件；  2、上传文件类型包括PDF、压缩文件（rar）</p>
      <UploadButton :reg="['pdf', 'rar']" matchError="只能上传PDF和RAR类型的文件！" :value="form.industryschemeArr" @setFileList="value => setFileList('industryscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="规划设计方案">
      <UploadButton :reg="['pdf', 'rar']" matchError="只能上传PDF和RAR类型的文件！" :value="form.planschemeArr" @setFileList="value => setFileList('planscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="建筑设计方案">
      <UploadButton :reg="['pdf', 'rar']" matchError="只能上传PDF和RAR类型的文件！" :value="form.buildschemeArr" @setFileList="value => setFileList('buildscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="环境设计方案">
      <UploadButton :reg="['pdf', 'rar']" matchError="只能上传PDF和RAR类型的文件！" :value="form.environschemeArr" @setFileList="value => setFileList('environscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="招商运营方案">
      <UploadButton :reg="['pdf', 'rar']" matchError="只能上传PDF和RAR类型的文件！" :value="form.investschemeArr" @setFileList="value => setFileList('investscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import UploadButton from '@components/form/upload-button'
import URL from '@config/urlConfig.js'

export default {
  name: 'information',
  components: { UploadButton },
  data () {
    return {
      form: {
        industryscheme: '',
        industryschemeArr: [],
        planscheme: '',
        planschemeArr: [],
        buildscheme: '',
        buildschemeArr: [],
        environscheme: '',
        environschemeArr: [],
        investscheme: '',
        investschemeArr: []
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  mounted (id) {
    if (this.$route.path.indexOf('/editProject/') !== -1) {
      this.initForm(this.$route.params.id)
    }
  },
  methods: {
    initForm (id) {
      this.$axios.post(URL['SELECT_SCHEMEMATER_MATER_INFO'], { projectid: id || this.projectid }).then(resp => {
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
      this.$axios.post(URL['INSERT_SCHEME_MATERIAL'], { ...this.form, projectid: this.projectid }).then(resp => {
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
