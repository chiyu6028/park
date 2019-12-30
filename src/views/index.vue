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
import * as _ from 'lodash'
import { mapMutations } from 'vuex'
import Header from '@components/block/header.vue'
import URL from '@config/urlConfig.js'

export default {
  name: 'Index',
  components: {
    Header
  },
  methods: {
    ...mapMutations({
      setProvince: 'setProvince',
      setCity: 'setCity',
      setEgion: 'setEgion',
      setStreet: 'setStreet'
    })
  },
  beforeCreate () {
    this.$axios.post(URL['GET_SELECT_AREA'], {}).then(resp => {
      if (resp.status === 200) {
        if (resp.data && resp.data.code === 1) {
          const province = []
          const city = []
          const egion = []
          const street = []
          _.each(resp.data.data || [], v => {
            if (v.level === '1') {
              province.push(v)
            } else if (v.level === '2') {
              city.push(v)
            } else if (v.level === '3') {
              egion.push(v)
            } else if (v.level === '4') {
              street.push(v)
            }
          })
          this.setProvince({ value: province })
          this.setCity({ value: city })
          this.setEgion({ value: egion })
          this.setStreet({ value: street })
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.park-main {
  height: 100%;
}
</style>
