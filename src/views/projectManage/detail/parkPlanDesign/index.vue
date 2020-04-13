<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地面积：<span>{{form2.usearea}}（ha）</span></el-col>
        <el-col :span="6" class="info-li">总建筑面积：<span>{{form2.buildarea}}（m²）</span></el-col>
        <el-col :span="6" class="info-li">容积率：<span>{{form2.plotratio}}（%）</span></el-col>
        <el-col :span="6" class="info-li">绿化率：<span>{{form2.greenrate}}（%）</span></el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">用地性质：</span><span>{{form.usetype}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">周边项目：</span><span>{{form.nearproject}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 规划设计方案 -->
    <div class="box-content">
      <div class="title">规划设计方案</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">规划设计理念：</span><span>{{form.designidea}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.designideaimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <div><span class="cont-title">功能结构：</span><span>{{form.funcstructure}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.funcstructureimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">土地利用：</span><span>{{form.landuse}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.landuseimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2"><div class="right-content">
          <div><span class="cont-title">空间形态：</span><span>{{form.spatialform}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.spatialformimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">道路交通：</span><span>{{form.roadtraffic}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.roadtrafficimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">配套设施：</span><span>{{form.supportingfacilities}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.supportingfacilitiesimgArr" :key="idx">
              <el-image  style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <div><span class="cont-title">实施控制：</span><span>{{form.impcontrol}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.impcontrolimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
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
        <el-col :span="24" class="r-box r-box2">规划设计团队：<div class="right-content">{{form.designteam}}</div></el-col>
        <el-col :span="24" class="r-box">规划设计亮点<div class="right-content">
            <span>{{form.planadvantage}}</span>
          </div>
          </el-col>
          <el-col :span="24" class="r-box">规划设计不足：<div class="right-content">
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
import * as _D from '@config/dictionaries'

export default {
  name: 'parkPlanDesign',
  data () {
    return {
      url: '/downloadFile?filePath=',
      usetypeList: _D.usetypeList,
      form: {
        usetype: '',
        nearproject: '',
        designteam: '',
        designidea: '',
        designideaimg: '',
        designideaimgArr: [],
        funcstructure: '',
        funcstructureimg: '',
        funcstructureimgArr: [],
        landuse: '',
        landuseimg: '',
        landuseimgArr: [],
        spatialform: '',
        spatialformimg: '',
        spatialformimgArr: [],
        roadtraffic: '',
        roadtrafficimg: '',
        roadtrafficimgArr: [],
        supportingfacilities: '',
        supportingfacilitiesimg: '',
        supportingfacilitiesimgArr: [],
        impcontrol: '',
        impcontrolimg: '',
        impcontrolimgArr: [],
        planadvantage: '',
        deficiencies: ''
      },
      form2: {
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
      this.$axios.post(URL['SELECT_PLAN_DESIGN_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form = resp.data.data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
      this.$axios.post(URL['SELECT_BUILD_DESIGN_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form2 = resp.data.data
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
  //border-bottom: 1px solid #ECF1F2;
      padding: 10px 0 0px;
  &.r-box2{
    border-bottom:none;
    padding-top: 10px;
  }
  .right-content{
    flex: 1;
    line-height: 24px;
    .cont-title{
      color:#999999;
    }
  }
  .img-list{
    margin: 10px 15px 0px -10px;
    // display: flex;
    margin-left: -10px;
    &.tb{
      margin-left: -80px;
    }
    li{
      float: left;
      padding: 10px;
      // img{
      //   width: 300px;
      //    height: 180px;
      // }
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
