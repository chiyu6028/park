<template>
  <div>
    <el-tabs v-model="activeName" type="card" class="add-tabs">
      <el-tab-pane v-for="item in addList" :key="item.name" :label="item.label" :name="item.name" :lazy="true" class="add-tabs-pane">
        <component :is="item.componentId"></component>
      </el-tab-pane>
    </el-tabs>
    <div class="notice">
      <el-button round @click="toList" v-if="flag === 'edit'">
        <i class="el-icon-notebook-2"></i>
        返回列表
      </el-button>
      <!-- <el-button type="info" round @click="() => save(1)">
        <i class="el-icon-delete"></i>
        存为草稿
      </el-button> -->
      <el-button type="primary" round @click="() => save(2)">
        <i class="el-icon-s-promotion"></i>
        确认发布
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as _ from 'lodash'
import * as D from '@config/default.js'
import URL from '@config/urlConfig.js'
import ParkPlanDesign from './parkPlanDesign'
import Parkview from './parkview'
import Investment from './investment'
import IndustrialPlanning from './industrialPlanning'
import ArchitecturalDesign from './architecturalDesign'
import LandscapeDesign from './landscapeDesign'
import Periphery from './periphery'
import Information from './information'

export default {
  name: 'addProject',
  props: ['flag'],
  components: { ParkPlanDesign, Parkview, Investment, IndustrialPlanning, ArchitecturalDesign, LandscapeDesign, Periphery, Information },
  data () {
    const addList = D.addProjectTab
    let activeName = _.head(addList).name
    return {
      addList,
      activeName
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  methods: {
    ...mapMutations('addProject', {
      setProjectId: 'setProjectId'
    }),
    save (value) {
      this.$axios.post(URL['UPDATE_PROJECT_BASE_STATUS'], { projectid: this.projectid, parkstatus: value }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            this.$message.success(resp.data.msg)
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    toList () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (this.flag === 'add') {
      this.$axios.get(URL['GET_PARK_PROJECTID']).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1 && resp.data.data && resp.data.data.projectId) {
            this.setProjectId({ projectId: resp.data.data.projectId })
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '获取项目id失败！')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    } else {
      this.setProjectId({ projectId: this.$route.params.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice{
  position: absolute;
  top: 78px;
  right: 90px;
  z-index: 12;
}
</style>
