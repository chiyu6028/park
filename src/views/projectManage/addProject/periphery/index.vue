<template>
  <el-form ref="periphery" :model="form" :rules="rules" label-position="top" :inline="true">
    <el-form-item class="inline-1">
      <TitleBlock title="周边条件"></TitleBlock>
    </el-form-item>
    <el-form-item label="周边概述" class="inline-1" prop="neardes">
      <el-input type="textarea" autosize v-model="form.neardes"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="周边园区"></TitleBlock>
    </el-form-item>
    <el-form-item class="inline-1 periphery-block">
      <ParkGround
        v-for="item in form.parkNearGarden"
        :key="item.lsh"
        :row="item"
        ref="park"
        @deletePark="deletePark">
      </ParkGround>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="addPark">新增一条周边园区</el-button>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="周边住宅"></TitleBlock>
    </el-form-item>
    <el-form-item class="inline-1 periphery-block">
      <ApartmentsAround
        v-for="item in form.parkNearHouse"
        :key="item.lsh"
        :row="item"
        ref="apartments"
        @deleteApartments="deleteApartments">
      </ApartmentsAround>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="addApartments">新增一条周边小区</el-button>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
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
import rules from './rules.js'
import { getParkTmpl, getApartmentsTmpl } from './tools'

export default {
  name: 'periphery',
  components: { TitleBlock, ParkGround, ApartmentsAround },
  data () {
    return {
      rules,
      form: {
        neardes: '',
        parkNearGarden: [ getParkTmpl() ],
        parkNearHouse: [ getApartmentsTmpl() ]
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
    initForm () {
      this.$axios.post(URL['SELECT_NEAR_CONDITION_INFO'], { projectid: this.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form.neardes = resp.data.data.neardes
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
      this.$axios.post(URL['SELECT_NEAR_GARDEN_INFO'], { projectid: this.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form.parkNearGarden = resp.data.data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
      this.$axios.post(URL['SELECT_NEAR_HOUSE_INFO'], { projectid: this.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form.parkNearHouse = resp.data.data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    addPark () {
      this.form.parkNearGarden.push(getParkTmpl())
    },
    deletePark (lsh) {
      this.form.parkNearGarden = _.filter(this.form.parkNearGarden, v => v.lsh !== lsh)
    },
    addApartments () {
      this.form.parkNearHouse.push(getApartmentsTmpl())
    },
    deleteApartments (lsh) {
      this.form.parkNearHouse = _.filter(this.form.parkNearHouse, v => v.lsh !== lsh)
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
  }
}
</script>

<style lang="scss" scoped>
.el-form-item.inline-1.periphery-block {
  width: calc(100% - 60px);
  border-radius:4px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}
</style>
