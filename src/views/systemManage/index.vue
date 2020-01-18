<template>
  <el-container class="project-container">
    <el-aside class="project-aside">
      <el-menu :default-active="activeIndex" @select="handleSelect">
        <el-menu-item
          v-for="item in asideList"
          :key="item.index"
          :index="item.index"
        >{{item.label }}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container class="project-content">
      <el-main class="content-main padding-0">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="beeadrumb">
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>{{ pageName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view :key="$route.path + $route.query.t" class="content-main-panel"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import * as _ from 'lodash'
import * as D from '@config/default.js'

export default {
  name: 'SystemManage',
  data () {
    const asideList = D.systemManageAside
    let activeIndex = _.head(asideList).index
    return {
      activeIndex,
      asideList
    }
  },
  computed: {
    pageName () {
      let name = ''
      _.each(D.systemManageAside, v => {
        if (this.$route.path === v.path) name = v.label
      })
      if (!name && this.$route.path.indexOf('/editProject/') !== -1) {
        name = '编辑项目'
      }
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
.project-container {
  .project-aside {
    position: absolute;
    top: 78px;
    left: 0;
    bottom: 0;
    width: 180px !important;
    overflow-y: auto;
	padding-top: 50px;
  }
  .project-content {
    position: absolute;
    top: 78px;
    left: 179px;
    right: 0;
    overflow: auto;
    background-color: #dbdbdc;
	z-index: 1;

    .content-main{
      margin: 0 0 0 60px;
      padding-right: 40px;

      .content-main-panel{
        background-color: $white;
      }
    }

    .beeadrumb{
      height: 70px;
      line-height: 70px;
      @include font12;
    }
  }
  .el-menu {
    background-color: #FFFFFF;
    height: calc(100%);
	position: fixed;
	width: 179px;

    .el-menu-item {
      background-color: #FFFFFF;
      color: $white;
	  text-align: center;
	  margin-top: 10px;
      @include font16;

      &:hover {
        background-color: #294262;
        color: $white;
        @include font16;
      }

      &.is-active {
        background-color: #1580f8;
        color: $white;
        @include font16;
      }
    }
  }
}
</style>
