<template>
  <el-row class="park-header">
    <el-col :span="9">
      <div class="img-block">
        <img class="mark" src="@images/mark.png" />
      </div>
    </el-col>
    <el-col :span="8">
      <el-menu
        :default-active="activeIndex"
        class="header-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="item in headerList"
          :key="item.index"
          :index="item.index"
        >{{ item.label }}<a> </a></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="7">
      <div class="inline-block line-h-h float-right exit pointer" style="color: #666;" @click="exit">退出</div>
      <div class="inline-block line-h-h float-right" style="margin-right: 15px;">
        <img src="../../assets/images/head.png" style="margin-top: 20px;" />
        <span style="position: absolute;right: 109px;">admin</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import * as _ from 'lodash'
import * as D from '@config/default.js'
// import T from '@utils/tools/index.js'

export default {
  name: 'Header',
  data () {
    let headerList = D.headerList
    let item = {}
    if (this.$store.state.role === '2' || this.$store.state.role === '3') {
      item = headerList.find(elem => {
        return elem.index === '2'
      })
      headerList = [item]
    }
    let activeIndex = headerList.length > 0 ? _.head(headerList).index : null
    return {
      activeIndex,
      headerList: headerList
    }
  },
  methods: {
    handleSelect (key) {
      let path = ''
      _.each(this.headerList, v => {
        if (v.index === key) {
          path = v.path
        }
      })
      this.$router.push({ path })
    },
    exit () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 78px;

.park-header {
  width: 100%;
  height: $height;
  background-color: #eeeeef;
  color: #000;
  border-bottom: 1px;
  border-color: #d2d5d8;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.35);
  position: fixed;
  // z-index: 99;
  @include font16;

  img {
    height: 40px;
    margin: ($height - 48px) / 2;
  }
.header-menu{
  margin-left: 20%;
}
  .header-menu.el-menu {
    background-color: #eeeeef;
    border-width: 0px;

    .el-menu-item {
      height: $height;
      line-height: $height;
      color: #000;
      @include font16;

      &:hover,
      &.is-active {
        font-weight: bold;
        border-bottom: 0;
        background-color: #eeeeef !important;
      }
  &.is-active a{
    position: absolute;
    border-radius: 2px;
    bottom: 17px;
    left: 34px;
    width: 40px;
    height: 4px;
    background-color: #1580f8;
    }
    }
  }
  .park-header .header-menu.el-menu .el-menu-item{
    height: 62px !important;
  }
.el-menu .el-menu-item:hover{
  background-color: #eeeeef !important;
}
  .line-h-h{
    height: $height;
    line-height: $height;
    @include font13;

    .el-icon-s-custom{
      @include font22;
    }

    &.exit{
      padding: 0 50px;
    }
  }
  .park-header .header-menu.el-menu .el-menu-item{
    height: 62px !important;
  }
.el-menu .el-menu-item:hover{
  background-color: #eeeeef !important;
}
  .line-h-h{
    height: $height;
    line-height: $height;
    @include font13;

    .el-icon-s-custom{
      @include font22;
    }

    &.exit{
      padding: 0 50px;
    }
  }
}
</style>
