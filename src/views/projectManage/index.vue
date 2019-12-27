<template>
  <el-container class="project-container">
    <el-aside width="200px" class="project-aside">
      <el-menu :default-active="activeIndex" @select="handleSelect">
        <el-menu-item
          v-for="item in asideList"
          :key="item.index"
          :index="item.index"
        >{{item.label }}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container class="project-content padding-0">
      <el-main class="content-main">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="beeadrumb">
          <el-breadcrumb-item>项目管理</el-breadcrumb-item>
          <el-breadcrumb-item>{{ pageName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width:100%;background-color:#fff;padding:30px;position:relative;">
        <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import * as _ from 'lodash'
import * as D from '@config/default.js'
// import { getWinSize } from '@utils/tools'

export default {
  name: 'ProjectManage',
  data () {
    const asideList = D.projectManageAside
    let activeIndex = _.head(asideList).index
    return {
      activeIndex,
      asideList
    }
  },
  computed: {
    pageName () {
      let name = ''
      _.each(D.projectManageAside, v => {
        if (this.$route.path === v.path) name = v.label
      })
      return name
    }
  },
  methods: {
    handleSelect (key) {
      let path = ''
      _.each(this.asideList, v => {
        if (v.index === key) {
          path = v.path
        }
      })
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>

    .el-main{
    background:rgba(236,241,242,1);
    padding:30px !important;
    margin:0 !important;
    }
    .beeadrumb{
    height: 45px !important;
    line-height: 10px !important;
    font-size: 12px !important;
    }
.project-container {
  .project-aside {
    position: absolute;
    top: 78px;
    left: 0;
    bottom: 0;
    width: 200px;
    overflow-y: auto;
  }
  .el-breadcrumb__inner{
  color:#999999 !important;
  }
  .project-content {
    position: absolute;
    top: 78px;
    left: 200px;
    bottom: 0;
    right: 0;
    overflow: auto;

    .content-main{
      margin: 0 0 0 60px;
    }
  .el-form-item__label{
color:#656B7F !important;

  }
    .beeadrumb{
      height: 78px;
      line-height: 78px;
      @include font12;
    }
  }
  .el-menu {
    background-color: #2e333d;
    height: calc(100%);
    padding-top:30px;

    .el-menu-item {
      background-color: #2e333d;
      color:#A9B0B8;
      text-align:center;
      margin-top:20px;
      @include font16;

      &:hover {
        background-color: #294262;
        color: $white;
        @include font16;
      }

      &.is-active {
        background-color: #294262;
        color: $white;
        border-left: 2px #539ef4 solid;
        text-align:center;
        @include font16;
      }
    }
  }
}
</style>
