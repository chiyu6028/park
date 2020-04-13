<template>
  <el-form ref="parkAround" :model="form" :rules="rules" label-position="top" :inline="true">
    <el-form-item label="园区名称" class="inline-1" prop="parkname">
      <el-input v-model="form.parkname" class="inline-4"></el-input>
      <el-button type="danger" class="float-right" @click="removeSelf">删除</el-button>
    </el-form-item>
    <el-form-item label="园区类型" class="inline-5" prop="parktype">
      <el-select v-model="form.parktype" placeholder="请选择" :clearable="true">
        <el-option v-for="item in parkTypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出租率（%）" class="inline-7" prop="rentalrate">
      <el-input v-model="form.rentalrate"></el-input>
    </el-form-item>
    <el-form-item label="园区产值（亿元）" class="inline-7" prop="parkvalue">
      <el-input v-model="form.parkvalue"></el-input>
    </el-form-item>
    <el-form-item label="平均产值（亿元/k㎡）" class="inline-7" prop="avgvalue">
      <el-input v-model="form.avgvalue"></el-input>
    </el-form-item>
    <el-form-item label="租金水平（元/m²/月）" class="inline-7" prop="rentlevel">
      <el-input v-model="form.rentlevel"></el-input>
    </el-form-item>
    <el-form-item label="用地面积（ha）" class="inline-7" prop="uselandarea">
      <el-input v-model="form.uselandarea"></el-input>
    </el-form-item>
    <el-form-item label="总建筑面积（m²）" class="inline-7" prop="totalbuildarea">
      <el-input v-model="form.totalbuildarea"></el-input>
    </el-form-item>
    <el-form-item label="容积率（%）" class="inline-7" prop="plotratio">
      <el-input v-model="form.plotratio"></el-input>
    </el-form-item>
    <el-form-item label="就业人口（万人）" class="inline-7" prop="employmentpeople">
      <el-input v-model="form.employmentpeople"></el-input>
    </el-form-item>
    <el-form-item label="企业数量（家）" class="inline-7" prop="enterprisenum">
      <el-input v-model="form.enterprisenum"></el-input>
    </el-form-item>
    <el-form-item label="代表企业" class="inline-1" prop="deputyenterprise">
      <el-input v-model="form.deputyenterprise"></el-input>
    </el-form-item>
    <el-form-item label="小区图册" class="inline-1">
      <!-- <Upload :value="form.parkimgArr" @setFileList="value => setFileList('parkimg', value)"></Upload> -->
      <UploadDescBottom :value="form.parkimgArr" @setFileList="value => setFileList('parkimg', value)"></UploadDescBottom>
    </el-form-item>
  </el-form>
</template>

<script>
// import Upload from '@components/form/upload'
import { getParkTmpl } from './tools'
import rules from './rules.js'
import * as _D from '@config/dictionaries'
import UploadDescBottom from '@components/form/upload-desc-bottom'

export default {
  name: 'ParkGround',
  components: { UploadDescBottom }, //, Upload
  props: {
    row: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      parkTypeList: _D.parkTypeList,
      rules,
      form: getParkTmpl()
    }
  },
  mounted () {
    this.form = this.row
  },
  methods: {
    getInfo () {
      return this.form
    },
    removeSelf () {
      this.$emit('deletePark', this.row.lsh)
    },
    setFileList (column, value) {
      this.form[column] = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
