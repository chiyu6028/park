<template>
  <div class="park-content" id="parkViewdetail">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <!-- <el-col :span="6" class="info-li">项目ID：<span>{{form.projectid}}</span></el-col> -->
        <el-col :span="6" class="info-li">项目编号：<span>{{form.projectbh}}</span></el-col>
        <el-col :span="6" class="info-li">园区名称：<span>{{form.parkname}}</span></el-col>
        <el-col :span="6" class="info-li">园区类型：<span>{{form.parktype}}</span></el-col>
        <el-col :span="6" class="info-li">建成时间：<span>{{form.createtime}}</span></el-col>
        <el-col :span="6" class="info-li">开发时间：<span>{{form.developtime}}</span></el-col>
        <el-col :span="12" class="info-li">项目地址：<span>{{form.locationAddr}}</span></el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">园区介绍：</span><span>{{form.parkdes}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 技术指标 -->
    <div class="box-content">
      <div class="title">技术指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地面积：<span>{{form.usearea}}（ha）</span></el-col>
        <el-col :span="6" class="info-li">总建筑面积：<span>{{form.buildarea}}（m²）</span></el-col>
        <el-col :span="6" class="info-li">绿化率：<span>{{form.greenrate}}（%）</span></el-col>
        <el-col :span="6" class="info-li">容积率：<span>{{form.plotratio}}（%）</span></el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">用地性质：</span><span>{{form.usetype}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">项目区位：</span><span>{{form.location}}</span>
           </div>
          <ul class="img-list" style="padding-top: 15px;">
            <li v-for="(tag,idx) in form.locationimgesArr" :key="idx">
               <el-image style="width: 300px; height: 180px;" class="img"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
               <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
         
        </el-col>

        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">用地范围：</span><span>{{form.landscope}}</span>
           </div>
          <ul class="img-list" style="padding-top: 15px;">
              <li v-for="(tag,idx) in form.landscopeimgArr" :key="idx">
                <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
                <div class="text">{{tag.attdis}}</div>
              </li>
            </ul>
        </el-col>
      </el-row>
    </div>
     <!-- 园区经济指标 -->
    <div class="box-content">
      <div class="title">园区经济指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">园区产值：<span>{{form.parkvalue}}(亿元)</span></el-col>
        <el-col :span="6" class="info-li">主导功能：<span>{{form.leadfunc}}</span></el-col>
        <el-col :span="6" class="info-li">投资主体：<span>{{form.investors}}</span></el-col>
        <el-col :span="6" class="info-li">运营主体：<span>{{form.operubject}}</span></el-col>
        <el-col :span="6" class="info-li">运营模式：<span v-if="operModeList[form.opermode]">{{operModeList[form.opermode].label}}</span></el-col>
        <el-col :span="6" class="info-li">企业数量：<span>{{form.nhenterprisenum}}(家)</span></el-col>
        <el-col :span="6" class="info-li">投资规模：<span>{{form.investmentmode}}(亿元)</span></el-col>
        <el-col :span="24" class="info-li">主导产业：<span>{{form.leadindustry}}</span></el-col>
      </el-row>
    </div>
    <!-- 相册 -->
    <div class="box-content">
      <div class="title">相册</div>
      <el-col :span="24" class="r-box">总平面图
        <div class="right-content">
          <ul class="img-list list-phone">
            <li v-for="(item,idx) in form.generallayoutimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+item.attpath" :preview-src-list="[url+item.attpath]"></el-image>
              <div class="text">{{item.attdis}}</div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="24" class="r-box">实景照片
        <div class="right-content">
          <ul class="img-list list-phone">
            <li v-for="(tag,idx) in form.realphotosimgArr" :key="idx">
               <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
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
          <li style="width: 300px; height: 180px;" v-for="(tag,idx) in form.multimediapromoArr" :key="idx">
             <!-- <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image> -->
       <video-player class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="{
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    autoplay: false, //如果true,则自动播放
                    loop: false, // 循环播放
                    preload: 'auto',
                    aspectRatio: '16:9',
                    fluid: true,
                    sources: [{
                      type: 'video/mp4',
                      type: 'video/ogg',
                      type: 'video/webm',
                      src: url+tag.attpath
                    }],
              controlBar: {       
                timeDivider: false,
                durationDisplay: false,
                remainingTimeDisplay: false,
                currentTimeDisplay: false, // 当前时间
                volumeControl: false, // 声音控制键
                playToggle: false, // 暂停和播放键
                progressControl: true, // 进度条
                fullscreenToggle: true // 全屏按钮          
              }
                   }"
               ></video-player>
            <div class="text">{{tag.attdis}}</div>
          </li>
      <li>
      
      </li>
        </ul>
        </div>
      </el-col>

      <el-col :span="24" class="r-box">园区航拍<div class="right-content">
        <ul class="img-list list-phone">
          <li style="width: 300px; height: 180px;" v-for="(tag,idx) in form.shortvideoArr" :key="idx">
             <!-- <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image> -->
       <video-player class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="{
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    autoplay: false, //如果true,则自动播放
                    loop: false, // 循环播放
                    preload: 'auto',
                    aspectRatio: '16:9',
                    fluid: true,
                    sources: [{
                      type: 'video/mp4',
                      type: 'video/ogg',
                      type: 'video/webm',
                      src: url+tag.attpath
                    }],
              controlBar: {       
                timeDivider: false,
                durationDisplay: false,
                remainingTimeDisplay: false,
                currentTimeDisplay: false, // 当前时间
                volumeControl: false, // 声音控制键
                playToggle: false, // 暂停和播放键
                progressControl: true, // 进度条
                fullscreenToggle: true // 全屏按钮          
              }
                   }"
               ></video-player>
            <div class="text">{{tag.attdis}}</div>
          </li>
        </ul>
        </div>
      </el-col>

      <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">园区荣誉：</span><span>{{form.parkhonor}}</span>
           </div>
          <ul class="img-list" style="padding-top: 15px;">
            <li v-for="(tag,idx) in form.parkhonorimgArr" :key="idx">
               <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
        </el-col>
        <div style="clear: both;width:100%;"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'
import positionMaps from '@config/maps.js'
import { videoPlayer } from 'vue-video-player'
import T from '@utils/tools'

export default {
  name: 'parkViewdetail',
  data () {
    return {
      url: '/downloadVideoFile?filePath=',
      parkTypeList: _D.parkTypeList,
      usetypeList: _D.usetypeList,
      operModeList: _D.operModeList,
      leadindustryObj: _D.leadIndustryObj,
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
        parkvalue: '',
        locationAddr: ''
      }

    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    }),
  player() {
      return this.$refs.videoPlayer.player
  }
  },
  mounted () {
    this.initForm(this.$route.params.id)
  //this.videoUrl()
  },
   components: {
      videoPlayer
    },
  methods: {
    // onPlayerPlay(player) {
    //       alert("play");
    //     },
    //     onPlayerPause(player){
    //       alert("pause");
    //     },
  // videoUrl(){
  //  if (this.data.multimediapromoArr && this.data.multimediapromoArr.length > 0) {
  //      for (let i = 0; i < this.data.multimediapromoArr.length; i++) {
  //          let attinfo = this.data.multimediapromoArr[i]
  //          let videoinfo = { muted: true, playbackRates: [0.7, 1.0, 1.5, 2.0], sources: [{ type: 'video/mp4', src: this.url + attinfo.attpath }], language: 'zh-CN' }
  //          this.option01.push(videoinfo)
  //      }
  //  }
  // },
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
            let _this = this
            let leadStr = ''
            _.map((data.leadindustry || '').split(','), v => {
              if (_this.leadindustryObj[v]) {
                leadStr = leadStr + _this.leadindustryObj[v] + '，'
              }
            })
            data.leadindustry = leadStr.substr(0, leadStr.length - 1)
            data.leadfunc = _D.leadfuncObj[data.leadfunc + '']
            this.form = data
            let usetypeConvert = T.getConvert(_D.usetypeList)
           if (this.form.usetype) {
                this.form.usetype = T.getConvertValue2(this.form.usetype, usetypeConvert).replace(/,/g, '，')
              }
              let parktypeConvert = T.getConvert(_D.parktypeList)
           if (this.form.parktype) {
                this.form.parktype = T.getConvertValue(this.form.parktype, parktypeConvert).replace(/,/g, '，')
              }
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
  .video-js .vjs-icon-placeholder {
      width: 300px;
      height: 180px;
      display: block;
  }
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
  font-size: 12px;
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
  color: #999;
  font-size: 12px;
  padding: 20px 0 10px;
  .right-content{
    flex: 1;
    line-height: 24px;
    color: #000;
    .cont-title{
      color:#999999;
    }
  }
  .img-list{
    padding:10px 0;
    // display: flex;
    margin-left: -10px;
    li{
      float: left;
      // width: 300px;
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
    margin: 10px 15px 0px -10px;
  }
}
</style>
