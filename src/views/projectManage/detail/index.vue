<template>
<el-card>
  <div class="notice" style="position: absolute;right: 15px;z-index: 999;">
    <el-button round @click="backToList" >
      <i class="el-icon-notebook-2"></i>
      返回列表
    </el-button>
    <el-button type="primary" round @click="editProject()" v-if="enable&&this.pagetype=='publish'">
      <i class="el-icon-edit"></i>
      编辑
    </el-button>
    <el-button type="primary" round @click="editDraftProject()" v-if="enable&&this.pagetype=='draft'">
      <i class="el-icon-edit"></i>
      编辑
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
      enable: true,
      tabVal: '1',
      detailList,
      pagetype: 'publish',
      isPermission: false
    }
  },
  created () {
    if (this.$store.state.role === '3' || this.$store.state.role === '2') {
      this.enable = false
    };
  },
  mounted () {
    let role = this.$store.state.role
    if (role === '1') {
      this.isPermission = true
    };
    if (this.$route.query.pagetype === 'draft') {
        this.pagetype = 'draft'
      }
  },
  methods: {
    backToList () {
      if (this.pagetype=='publish') {
        this.$router.push({ path: '/index/projectManage/projectList'})
      }else{
        this.$router.push({ path: '/index/projectManage/draft'})
      }
      
    },
    editProject () {
      let editHref = this.$router.resolve({ path: `../editProject/${this.$route.params.id}`, query: { t: Date.now(), pagetype: 'list' } })
      window.open(editHref.href, '_blank')
    },
    editDraftProject () {
      let editHref = this.$router.resolve({ path: `../editProject/${this.$route.params.id}`, query: { t: Date.now(), pagetype: 'draft' } })
      window.open(editHref.href, '_blank')
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
  font-size: 13px;
}
.r-box,.info-li{
  color: #999999 !important;
  font-size: 13px !important;
}
.r-box .right-content,.info-li span{
  color: #000000 !important;
}
.r-box{
  display: block !important;
  float: left !important;
  font-size: 13px !important;
  padding-bottom: 20px;
}
.r-box .img-list{
  display: block !important;
  float:left !important;
}

</style>
