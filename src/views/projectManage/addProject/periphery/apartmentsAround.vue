<template>
  <el-form ref="parkAround" :model="form" :rules="rules" label-position="top" :inline="true">
    <el-form-item label="小区名称" class="inline-1" prop="villagename">
      <el-input v-model="form.villagename" class="inline-4"></el-input>
      <el-button type="danger" class="float-right" @click="removeSelf">删除</el-button>
    </el-form-item>
    <el-form-item label="房价水平(万/m²)" class="inline-1" prop="housprice">
      <el-input v-model="form.housprice" class="inline-4"></el-input>
    </el-form-item>
    <el-form-item label="园区图册" class="inline-1">
      <Upload :value="form.villageimgArr" @setFileList="value => setFileList('villageimg', value)"></Upload>
    </el-form-item>
  </el-form>
</template>

<script>
import Upload from '@components/form/upload'
import { getApartmentsTmpl } from './tools'
import rules from './rules.js'

export default {
  name: 'ApartmentsAround',
  components: { Upload },
  props: {
    row: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      rules,
      form: getApartmentsTmpl()
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
      this.$emit('deleteApartments', this.row.lsh)
    },
    setFileList (column, value) {
      this.form[column] = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
