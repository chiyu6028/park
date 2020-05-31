<template>
  <div class="park-content">
    <!-- 周边条件 -->
    <div class="box-content">
      <div class="title">周边条件</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">周边概述：</span><span>{{form.neardes}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 周边园区 -->
    <div class="box-content">
      <div class="title">周边园区</div>
      <el-row :gutter="24" v-for="(item,idx) in form.parkNearGarden" :key="idx">
        <el-col :span="6" class="info-li">园区名称：<span>{{item.parkname}}</span></el-col>
        <el-col :span="6" class="info-li">用地面积：<span>{{item.uselandarea}}（ha）</span></el-col>
        <el-col :span="6" class="info-li">总建筑面积：<span>{{item.totalbuildarea}}（m²）</span></el-col>
        <el-col :span="6" class="info-li">容积率：<span>{{item.plotratio}}（%）</span></el-col>
        <el-col :span="6" class="info-li">园区类型：<span v-if="parkTypeList[item.parktype]">{{parkTypeList[item.parktype]}}</span></el-col>
        <el-col :span="6" class="info-li">园区产值：<span>{{item.parkvalue}}（亿元）</span></el-col>
        <el-col :span="6" class="info-li">平均产值：<span>{{item.avgvalue}}（亿元/k㎡）</span></el-col>
        <el-col :span="6" class="info-li">就业人口：<span>{{item.employmentpeople}}（万人）</span></el-col>
        <el-col :span="6" class="info-li">企业数量：<span>{{item.enterprisenum}}（家）</span></el-col>
        <el-col :span="6" class="info-li">代表企业：<span>{{item.deputyenterprise}}</span></el-col>
        <el-col :span="6" class="info-li">租金水平：<span>{{item.rentlevel}}</span></el-col>
        <el-col :span="6" class="info-li">出租率：<span>{{item.rentalrate}}（%）</span></el-col>
        <el-col :span="24" class="r-box r-box2">园区图册：<div class="right-content">
          <ul class="img-list">
            <li v-for="(tag,idx) in item.parkimgArr" :key="idx">
              <!-- <img :src="url+tag.attpath"> -->
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
     <!-- 周边住宅 -->
    <div class="box-content">
      <div class="title">周边住宅</div>
      <el-row :gutter="24" v-for="(item,idx) in form.parkNearHouse" :key="idx">
        <el-col :span="6" class="info-li">小区名称：<span>{{item.villagename}}</span></el-col>
        <el-col :span="6" class="info-li">房价水平：<span>{{item.housprice}}（万/m²）</span></el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">小区介绍：</span><span>{{item.villagedes}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">小区图册：<div class="right-content">
          <ul class="img-list">
            <li v-for="(tag,idx) in item.villageimgArr" :key="idx">
              <!-- <img :src="url+tag.attpath"> -->
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'

export default {
  name: 'periphery',
  data () {
    return {
      url: '/downloadFile?filePath=',
      parkTypeList: _D.parkTypeObj,
      form: {
        neardes: '',
        parkNearGarden: [],
        parkNearHouse: []
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  mounted () {
    this.initForm(this.$route.params.id)
  },
  methods: {
    initForm (id) {
      this.$axios.post(URL['SELECT_NEAR_CONDITION_INFO'], { projectid: id || this.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form.neardes = resp.data.data.neardes
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
      this.$axios.post(URL['SELECT_NEAR_GARDEN_INFO'], { projectid: id || this.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form.parkNearGarden = resp.data.data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
      this.$axios.post(URL['SELECT_NEAR_HOUSE_INFO'], { projectid: id || this.projectid }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form.parkNearHouse = resp.data.data
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
<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
</style>
<style scoped lang="scss">
.park-content{
  padding:0 20px;
}
.title{
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(63,151,249,1);
  line-height:34px;
      position: relative;
      margin-left: 20px;
  &::before{
    content: "";
    display: block;
    width:4px;
    height:12px;
    background:rgba(63,151,249,1);
    border-radius:2px;
    position: absolute;
    top: 10px;
    left: -20px;
  }
}
.info-li{
  padding:10px 0;
}
.box-content{
  margin-bottom: 20px;
}
.imglist{
  img{
    width: 300px;
    height: 180px;
    margin:10px;
  }
}
.r-box{
  //display: flex;
  border-bottom: 1px solid #ECF1F2;
  padding: 20px 0 10px;
  &.r-box2{
    border-bottom:none;
    padding-top: 10px;
  }
  .right-content{
    flex: 1;
    line-height: 24px;
  }
  .img-list{
    margin: 10px 15px 0px -10px;
    // display: flex;
    margin-left: -10px;
    &.tb{
      margin-left: -80px;
    }
    li{
      float: left;
      padding: 10px;
      // img{
      //   width: 300px;
      //    height: 180px;
      // }
    }
    .text{
      text-align: center;
    }
  }
  .list-phone{
    margin-left: 10px;
    margin-top: 20px;
  }
}
</style>
