<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">园区效益</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">主导产业：</span><span v-for="(item, idx) in form.leadindustryArray" :key="idx">{{ item }} </span>
          </div>
        </el-col>
        <el-col :span="6" class="info-li">主要功能：<span >{{ form.leadfunc }}</span></el-col>
        <el-col :span="6" class="info-li">园区产值：<span>{{form.parkvalue}}（亿元）</span></el-col>
        <el-col :span="6" class="info-li">平均产值：<span>{{form.avgvalue}}（亿元/k㎡）</span></el-col>
        <el-col :span="6" class="info-li">贡献税收：<span>{{form.devotetax}}（亿元）</span></el-col>
        <el-col :span="6" class="info-li">就业人口：<span>{{form.employmentpeople}}（万人）</span></el-col>
        <el-col :span="6" class="info-li">企业数量：<span>{{form.enterprisenum}}（家）</span></el-col>
        <el-col :span="6" class="info-li">高新企业：<span>{{form.nhenterprisenum}}（家）</span></el-col>
        <el-col :span="6" class="info-li">科研/研发机构：<span>{{form.rdorg}}（家）</span></el-col>
        <el-col :span="6" class="info-li">知识产权：<span>{{form.knowledgeproperty}}（件）</span></el-col>
        <el-col :span="6" class="info-li">租赁性质：<span>{{form.leasenature}}</span></el-col>
        <el-col :span="6" class="info-li">租赁比例：<span>{{form.leaseproportion}}（%）</span></el-col>
        <el-col :span="6" class="info-li">出售价格：<span>{{form.sellprice}}（万元/㎡）</span></el-col>
        <el-col :span="6" class="info-li">出售面积：<span>{{form.sellarea}}（m²）</span></el-col>
        <el-col :span="6" class="info-li">租金水平：<span>{{form.rentlevel}}（元/m²/月）</span></el-col>
        <el-col :span="6" class="info-li">已租出面积：<span>{{form.leasedarea}}（m²）</span></el-col>
        <el-col :span="6" class="info-li">剩余出租面积：<span>{{form.surplusleasearea}}（m²）</span></el-col>
        <el-col :span="6" class="info-li">出租率：<span>{{form.rentalrate}}（%）</span></el-col>
        <el-col :span="6" class="info-li">物业管理费：<span>{{form.propertyfee}}（元/m²/月）</span></el-col>
        <el-col :span="6" class="info-li">更新时间：<span>{{form.updatedate}}</span></el-col>
        <el-col :span="24" class="r-box">
          <div class="right-content">
          <div><span class="cont-title">典型企业：</span><span>{{form.typicalenterprises_t}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.typicalenterprisesArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box">
          <div class="right-content">
          <div><span class="cont-title">典型科研/研发机构：</span><span>{{form.typicalrdorg}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.typicalrdorgimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 投资开发运营招商 -->
    <div class="box-content">
      <div class="title">投资开发运营招商</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">投资主体属性：<span v-if="devSubjectList[form.devsubject]">{{devSubjectList[form.devsubject]}}</span></el-col>
        <el-col :span="6" class="info-li">开发主体：<span>{{form.investors}}</span></el-col>
        <el-col :span="6" class="info-li">投资主体：<span>{{form.investorattr}}</span></el-col>
        <el-col :span="6" class="info-li">土地获得方式：<span>{{form.landmethod}}</span></el-col>
        <el-col :span="6" class="info-li">投资规模：<span>{{form.investmentmode}}(亿元)</span></el-col>
        <el-col :span="6" class="info-li">招商团队：<span>{{form.investteam}}</span></el-col>
        <el-col :span="6" class="info-li">招商策略：<span>{{form.investstrategy}}</span></el-col>
        <el-col :span="6" class="info-li">运营主体：<span>{{form.operubject}}</span></el-col>
        <el-col :span="6" class="info-li">运营模式：<span v-if="operModeList[form.opermode]">{{operModeList[form.opermode]}}</span></el-col>
        <el-col :span="6" class="info-li">运营团队：<span>{{form.operteam}}</span></el-col>

        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">开发方式：</span><span>{{form.depmethod}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">招商方式：</span><span>{{form.investmode}}</span>
          </div>
        </el-col>

        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">优惠政策：</span><span>{{form.favouredpolicy}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">智慧园区：</span><span>{{form.witplatform}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">园区服务：</span><span>{{form.parkservice}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">运营成本：</span><span>{{form.opercost}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">运营收益：</span><span>{{form.operprofit}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box">
          <div class="right-content">
          <div><span class="cont-title">园区活动：</span><span>{{form.parkactivity}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.parkactivityimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
     <!-- 配套设施 -->
    <div class="box-content">
      <div class="title">配套设施</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box">
          <div class="right-content">
             <div><span class="cont-title">商业设施：</span><span>{{form.businessfacilities}}</span></div>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.businessfacilitiesimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">
            <div class="right-content">
              <div><span class="cont-title">居住设施：</span><span>{{form.accommodations}}</span></div>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.accommodationsimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">
            <div class="right-content">
              <div><span class="cont-title">会议展厅：</span><span>{{form.conferencehall}}</span></div>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.conferencehallimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">
            <div class="right-content">
              <div><span class="cont-title">停车设施：</span><span>{{form.parkfacility}}</span></div>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.parkfacilityimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box"><div class="right-content">
            <div><span class="cont-title">公共服务设施：</span><span>{{form.publicfacilities}}</span></div>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.publicfacilitiesimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
            </ul>
            </div>
          </el-col>
      </el-row>
    </div>
    <!-- 投资运营小结 -->
    <div class="box-content">
      <div class="title">投资运营小结</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">投资运营亮点：</span><span>{{form.investadvantage}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">投资运营困境：</span><span>{{form.deficiencies}}</span>
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
  name: 'parkViewdetail',
  data () {
    return {
      leadindustryObj: _D.leadIndustryObj,
      leadfuncObj: _D.leadfuncObj,
      devSubjectList: _D.devSubjectObj,
      depmethodList: _D.depmethodList,
      investModeList: _D.investModeList,
      operModeList: _D.operModeObj,
      leadfuncList: _D.leadfuncList,
      url: '/downloadFile?filePath=',
      form: {
        updatedate: '',
        leadindustryArray: [],
        leadindustry: '',
        leadfunc: '',
        parkvalue: '',
        avgvalue: '',
        employmentpeople: '',
        devotetax: '',
        knowledgeproperty: '',
        leasenature: '',
        leaseproportion: '',
        propertyfee: '',
        sellprice: '',
        sellarea: '',
        rentlevel: '',
        leasedarea: '',
        surplusleasearea: '',
        rentalrate: '',
        enterprisenum: '',
        nhenterprisenum: '',
        rdorg: '',
        typicalenterprises_t: '',
        typicalenterprises: '',
        typicalenterprisesArr: [],
        typicalrdorg: '',
        typicalrdorgimg: '',
        typicalrdorgimgArr: [],
        investors: '',
        devsubject: '',
        landmethod: '',
        investorattr: '',
        depmethod: '',
        investmentmode: '',
        investmode: '',
        investteam: '',
        investstrategy: '',
        operubject: '',
        opermode: '',
        operteam: '',
        favouredpolicy: '',
        witplatform: '',
        parkservice: '',
        opercost: '',
        operprofit: '',
        parkactivity: '',
        parkactivityimg: '',
        parkactivityimgArr: [],
        businessfacilities: '',
        businessfacilitiesimg: '',
        businessfacilitiesimgArr: [],
        accommodations: '',
        accommodationsimg: '',
        accommodationsimgArr: [],
        conferencehall: '',
        conferencehallimg: '',
        conferencehallimgArr: [],
        publicfacilities: '',
        publicfacilitiesimg: '',
        publicfacilitiesimgArr: [],
        investadvantage: '',
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
      this.$axios.post(URL['SELECT_INVERST_OPERATE_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            let data = resp.data.data
            let _this = this
            data.leadfunc = this.leadfuncObj[data.leadfunc + '']
            data.leadindustryArray = _.map((data.leadindustry || '').split(','), v => _this.leadindustryObj[v] || '')
            this.form = data
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
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
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
      // width: 300px;
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
