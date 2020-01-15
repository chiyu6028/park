<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>项目详情</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="backToList">返回项目列表</el-button>
  </div>
    <el-tabs v-model="tabVal" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="item in detailList" :key="item.name" :label="item.label" :name="item.name">
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
