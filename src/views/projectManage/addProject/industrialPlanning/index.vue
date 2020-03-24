<template>
  <el-form ref="industrialPlanning" :model="form" :rules="rules" :inline="false" label-position="top">
    <el-form-item>
      <TitleBlock title="产业规划"></TitleBlock>
    </el-form-item>
    <el-form-item prop="planconcept" label="产业规划理念">
      <el-input type="textarea" autosize  v-model="form.planconcept"></el-input>
    </el-form-item>
    <el-form-item prop="planlocation" label="产业定位">
      <el-input type="textarea" autosize  v-model="form.planlocation"></el-input>
    </el-form-item>
    <el-form-item prop="depgoal" label="发展目标">
      <el-input type="textarea" autosize  v-model="form.depgoal"></el-input>
    </el-form-item>
    <el-form-item prop="industrysystem" label="产业体系">
      <el-input type="textarea" autosize  v-model="form.industrysystem"></el-input>
    </el-form-item>
    <el-form-item prop="formatcomposition" label="业态组成">
      <el-input type="textarea" autosize  v-model="form.formatcomposition"></el-input>
    </el-form-item>
    <el-form-item prop="deppath" label="产业发展路径">
      <el-input type="textarea" autosize  v-model="form.deppath"></el-input>
    </el-form-item>
    <el-form-item prop="deppolicy" label="产业政策">
      <el-input type="textarea" autosize  v-model="form.deppolicy"></el-input>
    </el-form-item>
    <el-form-item prop="location" label="项目区位">
      <el-input type="textarea" autosize  v-model="form.location"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <!-- <Upload :value="form.locationimgesArr" @setFileList="value => setFileList('locationimges', value)"></Upload> -->
      <UploadDescBottom :value="form.locationimgesArr" @setFileList="value => setFileList('locationimges', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item>
      <TitleBlock title="产业规划小结 "></TitleBlock>
    </el-form-item>
     <el-form-item prop="depteam" label="产业规划团队">
      <el-input type="textarea" autosize  v-model="form.depteam"></el-input>
    </el-form-item>
    <el-form-item prop="planadvantage" label="产业规划亮点" class="inline-1">
      <el-input type="textarea" autosize  v-model="form.planadvantage"></el-input>
    </el-form-item>
    <el-form-item prop="deficiencies" label="产业规划不足" class="inline-1">
      <el-input type="textarea" autosize  v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
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
import rules from './rules'

export default {
  name: 'industrialPlanning',
  components: { UploadDescBottom, TitleBlock }, //, Upload
  data () {
    return {
      rules,
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
        locationimgesArr: [],
        planadvantage: '',
        deficiencies: '',
        butflag: 'add'
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id,
      flag: state => state.flag
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
      this.$axios.post(URL['SELECT_INDUSTRIAL_PLAN_INFO'], { projectid: id || this.projectid }).then(resp => {
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
  }
}
</script>

<style lang="scss" scoped>

</style>
