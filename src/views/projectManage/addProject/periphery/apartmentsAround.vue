<template>
  <el-form ref="parkAround" :model="form" label-position="top" :inline="true">
    <el-form-item label="小区名称" class="inline-1">
      <el-input v-model="form.villagename" class="inline-4"></el-input>
      <el-button type="danger" class="float-right" @click="removeSelf">删除</el-button>
    </el-form-item>
    <el-form-item label="房价水平(万/m²)" class="inline-1">
      <el-input v-model="form.housprice" class="inline-4"></el-input>
    </el-form-item>
    <el-form-item label="园区图册" class="inline-1">
      <Upload @setFileList="value => setFileList('villageimg', value)"></Upload>
    </el-form-item>
  </el-form>
</template>

<script>
import Upload from '@components/form/upload'

export default {
  name: 'ApartmentsAround',
  components: { Upload },
  props: {
    row: Object,
    default: () => ({})
  },
  data () {
    return {
      form: {
        'housprice': null,
        'villagedes': '',
        'villageimg': '',
        'villagename': ''
      }
    }
  },
  methods: {
    getInfo () {
      return this.form
    },
    removeSelf () {
      this.$emit('deletePark', this.row.timeStamp)
    },
    setFileList (column, value) {
      this.form[column] = value
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-7.el-form-item {
  width: 14%;
  margin-right: 0;
}
.inline-5.el-form-item {
  width: 20%;
  margin-right: 0;
}
.inline-4.el-input {
  width: 25%;
  margin-right: 0;
}
.inline-1.el-form-item{
  width: 100%;
  margin-right: 0;
}
</style>
