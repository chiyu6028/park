<template>
  <el-form ref="information" :model="form" :inline="false" label-position="top" style="padding-top: 23px;">
    <p>* 后台资料上传，只能上传PDF和压缩格式文件（rar、zip、7z）,文件大小不超过500M</p>
    <el-form-item label="产业规划方案">
	  <div class="upload-outter">
      <UploadButton :reg="['pdf', 'rar', 'zip', '7z']" matchError="只能上传PDF和压缩格式的文件！" :value="form.industryschemeArr" @setFileList="value => setFileList('industryscheme', value)"></UploadButton>
	  </div>
    </el-form-item>
    <el-form-item label="规划设计方案">
	<div class="upload-outter">
      <UploadButton :reg="['pdf', 'rar', 'zip', '7z']" matchError="只能上传PDF和压缩格式的文件！" :value="form.planschemeArr" @setFileList="value => setFileList('planscheme', value)"></UploadButton>
	  </div>
    </el-form-item>
    <el-form-item label="建筑设计方案">
		<div class="upload-outter">
      <UploadButton :reg="['pdf', 'rar', 'zip', '7z']" matchError="只能上传PDF和压缩格式的文件！" :value="form.buildschemeArr" @setFileList="value => setFileList('buildscheme', value)"></UploadButton>
	  </div>
    </el-form-item>
    <el-form-item label="环境设计方案">
		<div class="upload-outter">
      <UploadButton :reg="['pdf', 'rar', 'zip', '7z']" matchError="只能上传PDF和压缩格式的文件！" :value="form.environschemeArr" @setFileList="value => setFileList('environscheme', value)"></UploadButton>
	  </div>
    </el-form-item>
    <el-form-item label="招商运营方案">
		<div class="upload-outter">
      <UploadButton :reg="['pdf', 'rar', 'zip', '7z']" matchError="只能上传PDF和压缩格式的文件！" :value="form.investschemeArr" @setFileList="value => setFileList('investscheme', value)"></UploadButton>
	  </div>
    </el-form-item>
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
        investschemeArr: [],
        butflag: 'add'
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
      this.form.butflag = 'update'
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
.el-form-item label{
  font-weight: bold;
  font-size:14px;
}
.el-form p{
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #959595;
}
.upload-outter{
		width: calc(100% - 30px);
	    text-align: left;
	    border: 1px solid #E2E7EB;
	    padding-left: 20px;
	    padding-top: 36px;
	    padding-bottom: 36px;
}
</style>
