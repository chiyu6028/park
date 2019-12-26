<template>
  <el-form ref="parkAround" :model="form" label-position="top" :inline="true">
    <el-form-item label="园区名称" class="inline-1">
      <el-input v-model="form.parkname" class="inline-4"></el-input>
      <el-button type="danger" class="float-right" @click="removeSelf">删除</el-button>
    </el-form-item>
    <el-form-item label="园区类型" class="inline-7">
      <el-input v-model="form.parktype"></el-input>
    </el-form-item>
    <el-form-item label="出租率(%)" class="inline-7">
      <el-input v-model="form.rentalrate"></el-input>
    </el-form-item>
    <el-form-item label="园区产值(亿元)" class="inline-7">
      <el-input v-model="form.parkvalue"></el-input>
    </el-form-item>
    <el-form-item label="平均产值(亿元)" class="inline-7">
      <el-input v-model="form.avgvalue"></el-input>
    </el-form-item>
    <el-form-item label="租金水平(元/m²/月)" class="inline-7">
      <el-input v-model="form.rentlevel"></el-input>
    </el-form-item>
    <el-form-item label="用地面积(ha)" class="inline-7">
      <el-input v-model="form.uselandarea"></el-input>
    </el-form-item>
    <el-form-item label="总建筑面积(m²)" class="inline-7">
      <el-input v-model="form.totalbuildarea"></el-input>
    </el-form-item>
    <el-form-item label="容积率" class="inline-7">
      <el-input v-model="form.plotratio"></el-input>
    </el-form-item>
    <el-form-item label="就业人口(万)" class="inline-7">
      <el-input v-model="form.employmentpeople"></el-input>
    </el-form-item>
    <el-form-item label="企业数量(家)" class="inline-7">
      <el-input v-model="form.enterprisenum"></el-input>
    </el-form-item>
    <el-form-item label="代表企业" class="inline-1">
      <el-input v-model="form.deputyenterprise"></el-input>
    </el-form-item>
    <el-form-item label="园区图册" class="inline-1">
      <Upload @setFileList="value => setFileList('parkimg', value)"></Upload>
    </el-form-item>
  </el-form>
</template>

<script>
import Upload from '@components/form/upload'

export default {
  name: 'ParkGround',
  components: { Upload },
  props: {
    row: Object,
    default: () => ({})
  },
  data () {
    return {
      form: this.row
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
