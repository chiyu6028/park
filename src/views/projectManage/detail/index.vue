<template>
<el-card>
  <div class="notice" style="position: absolute;right: 5px;z-index: 999;">
    <el-button round @click="backToList">
      <i class="el-icon-notebook-2"></i>
      返回列表
    </el-button>
    <!-- <el-button type="info" round @click="() => save(1)">
      <i class="el-icon-delete"></i>
      存为草稿
    </el-button> -->
  </div>
    <el-tabs class="add-tabs" v-model="tabVal" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="item in detailList" :key="item.name" :label="item.label" :name="item.name" class="add-tabs-pane">
      <component :is="item.componentId"></component>
    </el-tab-pane>
  </el-tabs>

</el-card>

</template>
<script>
import * as D from '@config/default.js'
import Parkview from './parkview'
import Investment from './investment'
import IndustrialPlanning from './industrialPlanning'
import ParkPlanDesign from './parkPlanDesign'
import ArchitecturalDesign from './architecturalDesign'
import LandscapeDesign from './landscapeDesign'
import Periphery from './periphery'
import Information from './information'
export default {
  components: { Parkview, Investment, IndustrialPlanning, ParkPlanDesign, ArchitecturalDesign, LandscapeDesign, Periphery, Information },
  data () {
    const detailList = D.addProjectTab
    return {
      tabVal: '1',
      detailList
    }
  },
  created () {
  },
  methods: {
    backToList () {
      this.$router.push({ path: '/index/projectManage/projectList' })
    },
    handleClick (tab, event) {

    }
  }
}
</script>
<style>
.el-card__body{
  padding: 0 !important;
}
.el-card{
  border: 0 !important;
}
.el-card.is-always-shadow{
  box-shadow: none !important;
}
.box-content{
  margin: 30px 20px !important;
}
.title{
  margin-bottom: 15px;
}
.info-li{
  font-size: 12px;
}
.r-box,.info-li{
  color: #999999 !important;
  font-size: 12px !important;
}
.r-box .right-content,.info-li span{
  color: #000000 !important;
}
.r-box{
  display: block !important;
  float: left !important;
  font-size: 12px !important;
  padding-bottom: 20px;
}
.r-box .img-list{
  display: block !important;
  float:left !important;
}

</style>
