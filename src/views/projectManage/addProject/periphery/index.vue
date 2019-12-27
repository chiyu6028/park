<template>
  <el-form ref="periphery" :model="form" label-position="top" :inline="true">
    <el-form-item class="inline-1">
      <TitleBlock title="周边条件"></TitleBlock>
    </el-form-item>
    <el-form-item label="周边概述" class="inline-1">
      <el-input v-model="form.neardes"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="周边园区"></TitleBlock>
    </el-form-item>
    <el-form-item class="inline-1">
      <ParkGround
        v-for="item in form.parkNearGarden"
        :key="item.timeStamp"
        :row="item"
        ref="park"
        @deletePark="deletePark">
      </ParkGround>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="addPark">新增一条周边园区</el-button>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="周边住宅"></TitleBlock>
    </el-form-item>
    <el-form-item class="inline-1">
      <ApartmentsAround
        v-for="item in form.parkNearHouse"
        :key="item.timeStamp"
        :row="item"
        ref="apartments"
        @deleteApartments="deleteApartments">
      </ApartmentsAround>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="addApartments">新增一条周边小区</el-button>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import * as _ from 'lodash'
import TitleBlock from '@components/block/titleBlock'
import ParkGround from './parkAround.vue'
import ApartmentsAround from './apartmentsAround'
import URL from '@config/urlConfig.js'
import { getParkTmpl, getApartmentsTmpl } from './tools'

export default {
  name: 'periphery',
  components: { TitleBlock, ParkGround, ApartmentsAround },
  data () {
    return {
      form: {
        neardes: '',
        parkNearGarden: [ getParkTmpl() ],
        parkNearHouse: [ getApartmentsTmpl() ]
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
    addPark () {
      this.form.parkNearGarden.push(getParkTmpl())
    },
    deletePark (timeStamp) {
      this.form.parkNearGarden = _.filter(this.form.parkNearGarden, v => v.timeStamp !== timeStamp)
    },
    addApartments () {
      this.form.parkNearHouse.push(getApartmentsTmpl())
    },
    deleteApartments (timeStamp) {
      this.form.parkNearHouse = _.filter(this.form.parkNearHouse, v => v.timeStamp !== timeStamp)
    },
    collectInfo () {
      this.form.parkNearGarden = _.map(this.$refs['park'], v => v.getInfo())
      this.form.parkNearHouse = _.map(this.$refs['apartments'], v => v.getInfo())
    },
    onSubmit () {
      // 获取全部的信息
      this.collectInfo()
      this.$axios.post(URL['INSERT_NEAR_CONDITION'], { ...this.form, projectid: this.projectid }).then(resp => {
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
.inline-5.el-form-item {
  width: 20%;
  margin-right: 0;
}
.inline-1.el-form-item{
  width: 100%;
  margin-right: 0;
}
</style>
