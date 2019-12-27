<template>
  <el-tabs v-model="tabVal" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="item in detailList" :key="item.name" :label="item.label" :name="item.name">
      <component :is="item.componentId"></component>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import * as D from '@config/default.js'
import Parkview from './parkview'
export default {
  components: { Parkview },
  data () {
    const detailList = D.addProjectTab
    return {
      tabVal: 'first',
      detailList
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
