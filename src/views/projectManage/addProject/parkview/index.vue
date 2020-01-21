<template>
  <el-form ref="parkView" :model="form" :rules="rules" label-position="top" :inline="true" style="padding-top: 23px;">
    <el-form-item label="园区名称" class="inline-5" prop="parkname">
      <el-input v-model="form.parkname"></el-input>
    </el-form-item>
    <el-form-item label="园区类型" class="inline-5" prop="parktype">
      <el-select v-model="form.parktype" placeholder="请选择" :clearable="true">
        <el-option v-for="item in parkTypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目地址" class="inline-5">
      <el-cascader
        v-model="form.position"
        :options="positionMaps"
        :props="{ expandTrigger: 'hover' }"></el-cascader>
    </el-form-item>
    <el-form-item label="开发时间" class="inline-5">
      <el-date-picker
        v-model="form.developtime"
        type="year"
        format="yyyy"
        value-format="yyyy"
        placeholder="选择年">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="建成时间" class="inline-5">
      <el-date-picker
        v-model="form.createtime"
        format="yyyy"
        value-format="yyyy"
        type="year"
        placeholder="选择年">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="园区介绍" class="inline-1" prop="parkdes">
      <el-input type="textarea" autosize v-model="form.parkdes"></el-input>
    </el-form-item>
    <el-form-item label="用地范围" class="inline-1" prop="landscope">
      <el-input type="textarea" autosize v-model="form.landscope"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.landscopeimgArr" @setFileList="value => setFileList('landscopeimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="总平面图" class="inline-1" prop="generallayout">
      <el-input  type="textarea" autosize v-model="form.generallayout"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.generallayoutimgArr" @setFileList="value => setFileList('generallayoutimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item label="实景图" class="inline-1" prop="realphotos">
      <el-input  type="textarea"  autosize v-model="form.realphotos"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.realphotosimgArr" @setFileList="value => setFileList('realphotosimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="多媒体宣传片" class="inline-1">
      <UploadButton :value="form.multimediapromoArr" @setFileList="value => setFileList('multimediapromo', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="航拍短视频" class="inline-1">
      <UploadButton :value="form.shortvideoArr" @setFileList="value => setFileList('shortvideo', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="园区荣誉" class="inline-1" prop="parkhonor">
      <el-input  type="textarea"  autosize v-model="form.parkhonor"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.parkhonorimgArr" @setFileList="value => setFileList('parkhonorimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import UploadDescBottom from '@components/form/upload-desc-bottom'
import UploadButton from '@components/form/upload-button'
import URL from '@config/urlConfig.js'
import rules from './rules.js'
import * as _D from '@config/dictionaries'
import positionMaps from '@config/maps.js'

export default {
  name: 'parkview',
  components: { UploadDescBottom, UploadButton },
  data () {
    return {
      parkTypeList: _D.parkTypeList,
      rules,
      positionMaps,
      form: {
        parkname: '',
        parktype: '',
        position: [],
        province: '',
        city: '',
        region: '',
        street: '',
        developtime: '',
        createtime: '',
        parkdes: '',
        landscope: '',
        landscopeimg: '',
        landscopeimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        realphotos: '',
        realphotosimg: '',
        realphotosimgArr: [],
        multimediapromo: '',
        multimediapromoArr: [],
        shortvideo: '',
        shortvideoArr: [],
        parkhonor: '',
        parkhonorimg: '',
        parkhonorimgArr: []
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
      this.$axios.post(URL['SELECT_PROJECT_BASE_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            let data = resp.data.data
            const { province = '', city = '', region = '', street = '' } = data
            data.position = [province, city, region, street]
            // data.developtime = data.developtime ? new Date(data.developtime + '').toJSON() : ''
            // data.createtime = data.createtime ? new Date(data.createtime + '').toJSON() : ''
            this.form = data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    onSubmit () {
      this.$refs.parkView.validate(isValid => {
        if (isValid) {
          // 填充项目地址
          const [ province, city, region, street ] = this.form.position || []
          this.form.province = province || ''
          this.form.city = city || ''
          this.form.region = region || ''
          this.form.street = street || ''
          this.$axios.post(URL['INSERT_PROJECT_BASE'], { ...this.form, projectid: this.projectid }).then(resp => {
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
