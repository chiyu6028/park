<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地面积：<span>{{form.usearea}}</span></el-col>
        <el-col :span="6" class="info-li">总建筑面积：<span>{{form.buildarea}}</span></el-col>
        <el-col :span="6" class="info-li">计容建筑面积：<span>{{form.meterbuildarea}}</span></el-col>
        <el-col :span="6" class="info-li">容积率：<span>{{form.plotratio}}</span></el-col>
        <el-col :span="6" class="info-li">绿化率：<span>{{form.greenrate}}</span></el-col>
        <el-col :span="6" class="info-li">架空面积：<span>{{form.overheadarea}}</span></el-col>
        <el-col :span="6" class="info-li">地下面积：<span>{{form.undergroundarea}}</span></el-col>
        <el-col :span="24" class="r-box r-box2">停车位（地上/地下）：<div class="right-content">{{form.parkspaceup+form.parkspacedown}}</div></el-col>
      </el-row>
    </div>
    <!-- 规划设计方案 -->
    <div class="box-content">
      <div class="title">规划设计方案</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">规划设计团队：<div class="right-content">{{form.buildteam}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">规划设计理念与策略：<div class="right-content">
          <span>{{form.ideasstrategy}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.ideasstrategyimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">周边概况：<div class="right-content">
          <span>{{form.neardes}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.neardesimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">效果图：<div class="right-content">
          <span>{{form.designsketch}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.designsketchimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">总平面图：<div class="right-content">
          <span>{{form.generallayout}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.generallayoutimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">功能布局：<div class="right-content">
          <span>{{form.funclayout}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.funclayoutimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">流线分析：<div class="right-content">
          <span>{{form.streamlineanalysis}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.streamlineanalysisimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 专业技术 -->
    <div class="box-content">
      <div class="title">专业技术</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">幕墙：<div class="right-content">
          <span>{{form.curtain}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.curtainimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">结构：<div class="right-content">
          <span>{{form.structure}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.structureimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">机电：<div class="right-content">
          <span>{{form.electromechanical}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.electromechanicalimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">暖通：<div class="right-content">
          <span>{{form.hvac}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.hvacimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">给排水：<div class="right-content">
          <span>{{form.drainage}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.drainageimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 规划设计小结 -->
    <div class="box-content">
      <div class="title">规划设计小结</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box">投资亮点：<div class="right-content">
            <span>{{form.designadvantage}}</span>
          </div>
          </el-col>
          <el-col :span="24" class="r-box">面临困境：<div class="right-content">
            <span>{{form.deficiencies}}</span>
          </div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import URL from '@config/urlConfig.js'

export default {
  name: 'industrialPlanning',
  data () {
    return {
      url: '/downloadFile?filePath=',
      form: {
        usearea: '',
        buildarea: '',
        meterbuildarea: '',
        plotratio: '',
        builddensity: '',
        overheadarea: '',
        undergroundarea: '',
        greenrate: '',
        parkspaceup: '',
        parkspacedown: '',
        buildteam: '',
        ideasstrategy: '',
        ideasstrategyimg: '',
        ideasstrategyimgArr: [],
        neardes: '',
        neardesimg: '',
        neardesimgArr: [],
        designsketch: '',
        designsketchimg: '',
        designsketchimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        funclayout: '',
        funclayoutimg: '',
        funclayoutimgArr: [],
        streamlineanalysis: '',
        streamlineanalysisimg: '',
        streamlineanalysisimgArr: [],
        curtain: '',
        curtainimg: '',
        curtainimgArr: [],
        structure: '',
        structureimg: '',
        structureimgArr: [],
        electromechanical: '',
        electromechanicalimg: '',
        electromechanicalimgArr: [],
        hvac: '',
        hvacimg: '',
        hvacimgArr: [],
        drainage: '',
        drainageimg: '',
        drainageimgArr: [],
        designadvantage: '',
        deficiencies: ''
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  mounted () {
    this.initForm(this.$route.params.id)
  },
  methods: {
    initForm (id) {
      this.$axios.post(URL['SELECT_BUILD_DESIGN_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form = resp.data.data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    setFileList (column, value) {
      this.form[column] = value
    }
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
</style>
<style scoped lang="scss">
.park-content{
  padding:0 20px;
}
.title{
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(63,151,249,1);
  line-height:34px;
      position: relative;
      margin-left: 20px;
  &::before{
    content: "";
    display: block;
    width:4px;
    height:12px;
    background:rgba(63,151,249,1);
    border-radius:2px;
    position: absolute;
    top: 10px;
    left: -20px;
  }
}
.info-li{
  padding:10px 0;
  color: #999999;
}
.info-li span{
	color: #000000;
}
.box-content{
  margin-bottom: 20px;
}
.imglist{
  img{
    width: 300px;
    height: 180px;
    margin:10px;
  }
}
.r-box{
  //display: flex;
  border-bottom: 1px solid #ECF1F2;
  padding: 20px 0 10px;
  &.r-box2{
    border-bottom:none;
    padding-top: 10px;
  }
  .right-content{
    flex: 1;
    line-height: 24px;
  }
  .img-list{
    padding:20px 0 10px;
    display: flex;
    margin-left: -10px;
    &.tb{
      margin-left: -80px;
    }
    li{
      width: 300px;
      padding: 10px;
      img{
        width: 300px;
         height: 180px;
      }
    }
    .text{
      text-align: center;
    }
  }
  .list-phone{
    margin-left: 10px;
    margin-top: 20px;
  }
}
</style>
