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
    // this.getUserInfo()
  },
  methods: {
    // getUserInfo () {
    //   this.$axios.get(URL['getSessionUserInfo']).then(resp => {
    //     if (resp.status === 200) {
    //       if (resp.data && resp.data.code === 1 && resp.data.data) {
    //         let item = resp.data.data.list[0]
    //         this.$store.commit('setRole', item.userRole)
    //         this.$store.commit('setUser', item)
    //       } else {
    //         this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
    //       }
    //     } else {
    //       this.$message.error('系统异常，请联系管理员！')
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.park-main {
  height: 100%;
}
</style>
