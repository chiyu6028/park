<template>
  <el-form ref="information" :model="form" :inline="false" label-position="top">
    <el-form-item label="产业规划方案">
      <p>1、后台资料上传，可批量上传，每一类可上传最多5个文件；  2、上传文件类型包括PDF、压缩文件（rar）</p>
      <UploadButton @setFileList="value => setFileList('industryscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="规划设计方案">
      <UploadButton @setFileList="value => setFileList('planscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="建筑设计方案">
      <UploadButton @setFileList="value => setFileList('buildscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="环境设计方案">
      <UploadButton @setFileList="value => setFileList('environscheme', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="招商运营方案">
      <UploadButton @setFileList="value => setFileList('investscheme', value)"></UploadButton>
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
        planscheme: '',
        buildscheme: '',
        environscheme: '',
        investscheme: ''
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  methods: {
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
