<template>
  <el-form ref="parkView" :model="form" :rules="rules" label-position="top" :inline="true">
    <el-form-item label="园区名称" class="inline-5" prop="parkname">
      <el-input v-model="form.parkname"></el-input>
    </el-form-item>
    <el-form-item label="园区类型" class="inline-5" prop="parktype">
      <el-select v-model="form.parktype" placeholder="选择类型">
        <el-option label="全部类型" value="1"></el-option>
        <el-option label="科创产业园区" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目地址" class="inline-5">
      <el-cascader
        v-model="form.position"
        :props="positionProps"></el-cascader>
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
    <el-form-item label="园区介绍" class="inline-1">
      <el-input v-model="form.parkdes"></el-input>
    </el-form-item>
    <el-form-item label="用地范围" class="inline-1">
      <el-input v-model="form.landscopeimgDes"></el-input>
      <Upload @setFileList="value => setFileList('landscopeimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="总平面图" class="inline-1">
      <el-input v-model="form.generallayoutimgDes"></el-input>
      <Upload @setFileList="value => setFileList('generallayoutimg', value)"></Upload>
    </el-form-item>
    <el-form-item label="实景图" class="inline-1">
      <el-input v-model="form.realphotosDes"></el-input>
      <Upload @setFileList="value => setFileList('realphotos', value)"></Upload>
    </el-form-item>
    <el-form-item label="多媒体宣传片" class="inline-1">
      <UploadButton @setFileList="value => setFileList('multimediapromo', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="航拍短视频" class="inline-1">
      <UploadButton @setFileList="value => setFileList('shortvideo', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="园区荣誉" class="inline-1">
      <el-input v-model="form.parkhonorDes"></el-input>
      <Upload @setFileList="value => setFileList('parkhonor', value)"></Upload>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import * as _ from 'lodash'
import Upload from '@components/form/upload'
import UploadButton from '@components/form/upload-button'
import URL from '@config/urlConfig.js'
import rules from './rules.js'

export default {
  name: 'parkview',
  components: { Upload, UploadButton },
  data () {
    return {
      rules,
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
        landscopeimg: '',
        landscopeimgDes: '',
        generallayoutimg: '',
        generallayoutimgDes: '',
        realphotos: '',
        realphotosDes: '',
        multimediapromo: '',
        shortvideo: '',
        parkhonor: '',
        parkhonorDes: ''
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id,
      flag: state => state.flag,
      pageMark: state => state.flag + ',' + state.project_id
    }),
    positionProps () {
      let vm = this
      return {
        expandTrigger: 'click',
        lazy: true,
        lazyLoad (node, resolve) {
          const { level = 0, value = -1 } = node
          vm.$axios.post(URL['GET_SELECT_AREA'], { level: level + 1 }).then(resp => {
            if (resp.status === 200) {
              if (resp.data && resp.data.code === 1) {
                resolve(_.map(_.filter(resp.data.data || [], v => v.parentid === value), v => ({ value: v.areaid, label: v.areaname })))
              }
            }
          })
        }
      }
    }
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
    onSubmit () {
      this.$refs.parkView.validate(isValid => {
        if (isValid) {
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
  },
  watch: {
    'form.position' (value) {
      const [ province, city, region, street ] = value
      this.form.province = province
      this.form.city = city
      this.form.region = region
      this.form.street = street
    },
    pageMark (value) {
      let info = value.split(',')
      if (info[0] === 'edit' && info[1]) this.initForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-5.el-form-item {
  width: 20%;
  margin-right: 0;
}
.inline-1.el-form-item{
  width: 100%;
  margin-right: 0;
}
</style>
