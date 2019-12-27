<template>
<div>

  <el-row class="park-header" >
    <el-col :span="4" style="width:300px;">
      <img class="mark" src="@images/logo.png" />
    </el-col>
    <!-- <el-col :span="2">
      <div class="header-title padding-left-5">产业数据库</div>
    </el-col> -->
    <el-col :span="16">
      <el-menu
        :default-active="activeIndex"
        class="header-menu"
        mode="horizontal"
        :style="{padding}"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="item in headerList"
          :key="item.index"
          :index="item.index"
        >{{ item.label }}</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <div class="inline-block line-h-h float-right exit" @click="logout">退出</div>
      <div class="inline-block line-h-h float-right">
        <i class="el-icon-s-custom"></i>
        <span>admin</span>
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import * as _ from 'lodash'
import * as D from '@config/default.js'
import T from '@utils/tools/index.js'

export default {
  name: 'Header',
  data () {
    const headerList = D.headerList
    let activeIndex = headerList.length > 0 ? _.head(headerList).index : null
    const winSize = T.getWinSize()
    let padding = winSize.screenWidth / 3 - 240
    return {
      activeIndex,
      headerList: D.headerList,
      padding: `0 ${padding}px`
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
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 78px;

.park-header {
  width: 100% !important;
  height: $height;
  background-color: #262b35;
  color: $white;
  @include font16;
  .el-col-16{
  width:58.2%;
  }

  img {
    height: 48px;
    margin-left: 42px;
    margin-top: 10px;
  }

  .header-title {
    height: $height;
    line-height: $height;
    @include font18;
  }
  .el-menu{
  margin: 0 auto;
  }
  .header-menu{
      width:45% !important;
      padding:0 50px !important;
  }

  .header-menu.el-menu {
    background-color: #262b35;
    border-width: 0px;

    .el-menu-item {
      height: $height;
      line-height: $height;
      color: #A9B0B8;
      @include font16;

      &:hover,
      &.is-active {
        background-color: #262b35 !important;
        color:$white;
      }
    }
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
