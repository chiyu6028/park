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
    <el-container class="project-content">
      <el-main class="content-main padding-0">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="beeadrumb">
          <el-breadcrumb-item>项目管理</el-breadcrumb-item>
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
  name: 'ProjectManage',
  data () {
    let asideList = D.projectManageAside
    let item = {}
    if (this.$store.state.role === '2' || this.$store.state.role === '3') {
      item = asideList.find(elem => {
        return elem.index === '1'
      })
      asideList = [item]
    }
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
    width: 200px;
    overflow-y: auto;
  }
  .project-content {
    position: absolute;
    top: 78px;
    left: 200px;
    bottom: 0;
    right: 0;
    overflow: auto;
    background-color: #ecf1f2;

    .content-main{
      margin: 0 0 0 60px;
      padding-right: 40px;

      .content-main-panel{
        background-color: $white;
      }
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

    .el-menu-item {
      background-color: #2e333d;
      color: $white;
      @include font16;

      &:hover {
        background-color: #294262;
        color: $white;
        @include font16;
      }

      &.is-active {
        background-color: #294262;
        color: $white;
        border-left: 1px #539ef4 solid;
        @include font16;
      }
    }
  }
}
</style>
