<template>
  <el-container>
    <el-header height="78px" class="padding-0">
      <Header></Header>
    </el-header>
    <el-main class="padding-0 park-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@components/block/header.vue'
export default {
  name: 'Index',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.park-main {
  height: 100%;
}
</style>
