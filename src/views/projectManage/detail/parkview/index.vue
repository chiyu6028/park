<template>
  <div class="park-content" id="parkViewdetail">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">项目ID：<span>{{form.projectid}}</span></el-col>
        <el-col :span="6" class="info-li">园区名称：<span>{{form.parkname}}</span></el-col>
        <el-col :span="6" class="info-li">园区类型：<span v-if="parkTypeList[form.parktype]">{{parkTypeList[form.parktype].label}}</span></el-col>
        <el-col :span="6" class="info-li">项目地址：<span v-if="positionMaps[form.province]">{{positionMaps[form.province].label}}</span></el-col>
        <el-col :span="6" class="info-li">发布时间：<span>{{form.developtime}}</span></el-col>
        <el-col :span="6" class="info-li">建成时间：<span>{{form.createtime}}</span></el-col>
        <el-col :span="24" class="r-box" style="color: #999999;">园区介绍：<div class="right-content" style="color: #000;">{{form.parkdes}}</div></el-col>
      </el-row>
    </div>
    <!-- 技术指标 -->
    <div class="box-content">
      <div class="title">技术指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地性质：<span v-if="usetypeList[form.usetype]">{{usetypeList[form.usetype].label}}</span></el-col>
        <el-col :span="6" class="info-li">用地面积：<span>{{form.usearea}}</span></el-col>
        <el-col :span="6" class="info-li">总建筑面积：<span>{{form.buildarea}}</span></el-col>
        <el-col :span="6" class="info-li">绿化率：<span>{{form.greenrate}}</span></el-col>
        <el-col :span="6" class="info-li">容积率：<span>{{form.plotratio}}</span></el-col>
        <el-col :span="24" class="r-box">项目区位：<div class="right-content">
          <span>{{form.location}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.locationimgesArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div></el-col>
        <el-col :span="24" class="r-box">用地范围：<div class="right-content">
          <span>{{form.landscope}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.landscopeimgArr" :key="idx">
              <img :src="url+tag.attpath">
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
     <!-- 园区经济指标 -->
    <div class="box-content">
      <div class="title">园区经济指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">主导产业：<span>{{form.leadindustry}}</span></el-col>
        <el-col :span="6" class="info-li">主导功能：<span>{{form.leadfunc}}</span></el-col>
        <el-col :span="6" class="info-li">投资主体：<span>{{form.investors}}</span></el-col>
        <el-col :span="6" class="info-li">运营主体：<span>{{form.operubject}}</span></el-col>
        <el-col :span="6" class="info-li">运营模式：<span v-if="operModeList[form.opermode]">{{operModeList[form.opermode].label}}</span></el-col>
        <el-col :span="6" class="info-li">企业数量：<span>{{form.nhenterprisenum}}</span></el-col>
        <el-col :span="6" class="info-li">投资规模：<span>{{form.investmentmode}}</span></el-col>
        <el-col :span="6" class="info-li">园区产值：<span>{{form.parkvalue}}</span></el-col>
      </el-row>
    </div>
    <!-- 相册 -->
    <div class="box-content">
      <div class="title">相册</div>
      <el-col :span="24" class="r-box">总平面图<div class="right-content">
          <ul class="img-list list-phone">
            <li v-for="(tag,idx) in form.generalLayoutimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      <el-col :span="24" class="r-box">实景照片<div class="right-content">
          <ul class="img-list list-phone">
            <li v-for="(tag,idx) in form.realphotosimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      <!-- <el-col :span="24" class="r-box">园区照片<div class="right-content">
        <ul class="img-list list-phone">
          <li v-for="(tag,idx) in form.realphotosimgArr" :key="idx">
            <img :src="url+tag.attpath">
          </li>
        </ul>
        </div>
      </el-col> -->

      <el-col :span="24" class="r-box">园区宣传片<div class="right-content">
        <ul class="img-list list-phone">
          <li v-for="(tag,idx) in form.multimediapromoArr" :key="idx">
            <img :src="url+tag.attpath">
          </li>
        </ul>
        </div>
      </el-col>

      <el-col :span="24" class="r-box">园区航拍<div class="right-content">
        <ul class="img-list list-phone">
          <li v-for="(tag,idx) in form.shortvideoArr" :key="idx">
            <img :src="url+tag.attpath">
          </li>
        </ul>
        </div>
      </el-col>

      <el-col :span="24" class="r-box">园区荣誉<div class="right-content">
          <ul class="img-list list-phone">
            <li v-for="(tag,idx) in form.parkHonorimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'
import positionMaps from '@config/maps.js'

export default {
  name: 'parkViewdetail',
  data () {
    return {
      url: '/downloadFile?filePath=',
      parkTypeList: _D.parkTypeList,
      usetypeList: _D.usetypeList,
      operModeList: _D.operModeList,
      positionMaps,
      form: {
        parkname: '',
        parktype: '',
        position: [],
        province: '',
        city: '',
        region: '',
        street: '',
        developtime: '',
        createtime: '',
        parkdes: '',
        landscope: '',
        landscopeimg: '',
        landscopeimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        realphotos: '',
        realphotosimg: '',
        realphotosimgArr: [],
        multimediapromo: '',
        multimediapromoArr: [],
        shortvideo: '',
        shortvideoArr: [],
        parkhonor: '',
        parkhonorimg: '',
        parkhonorimgArr: [],
        usetype: '',
        usearea: '',
        buildarea: '',
        plotratio: '',
        greenrate: '',
        location: '',
        locationimges: '',
        locationimgesArr: [],
        leadindustry: '',
        leadfunc: '',
        investors: '',
        operubject: '',
        opermode: '',
        nhenterprisenum: '',
        investmentmode: '',
        parkvalue: ''
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
      this.$axios.post(URL['SELECT_PROJECT_BASE_EXT_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            let data = resp.data.data
            const { province = '', city = '', region = '', street = '' } = data
            data.position = [province, city, region, street]
            // data.developtime = data.developtime ? new Date(data.developtime + '').toJSON() : ''
            // data.createtime = data.createtime ? new Date(data.createtime + '').toJSON() : ''
            this.form = data
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
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
  color: #999;
  font-size: 12px;
  padding: 20px 0 10px;
  .right-content{
    flex: 1;
    line-height: 24px;
	color: #000;
  }
  .img-list{
    padding:10px 0;
    display: flex;
    margin-left: -10px;
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
