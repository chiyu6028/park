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
import URL from '@config/urlConfig.js'
export default {
  name: 'Index',
  components: {
    Header
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      let islogin = sessionStorage.getItem('islogin')
      if (islogin === '1') {
        let user = sessionStorage.getItem('user')
        let role = sessionStorage.getItem('role')
        this.$store.commit('setRole', role)
        this.$store.commit('setUser', user)
        this.$store.commit('setIslogin', '1')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.park-main {
  height: 100%;
  width: 100%;
  //max-width: 1920px;
  //margin: 0 auto;
}
</style>
