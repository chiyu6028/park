<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">主导产业：
          <div class="right-content">
          <span v-for="(tag,idx) in form.leadindustryArray" :key="idx">
            {{leadindustryList[tag].label  }}
          </span>
          </div></el-col>
        <el-col :span="6" class="info-li">主要功能：<span v-if="leadfuncList[form.leadfunc]">{{leadfuncList[form.leadfunc].label}}</span></el-col>
        <el-col :span="6" class="info-li">园区产值：{{form.parkvalue}}</el-col>
        <el-col :span="6" class="info-li">平均产值：{{form.avgvalue}}</el-col>
        <el-col :span="6" class="info-li">贡献税收：{{form.devotetax}}</el-col>
        <el-col :span="6" class="info-li">就业人口：{{form.employmentpeople}}</el-col>
        <el-col :span="6" class="info-li">企业数量：{{form.enterprisenum}}</el-col>
        <el-col :span="6" class="info-li">高薪企业：{{form.nhenterprisenum}}</el-col>
        <el-col :span="6" class="info-li">科研/研发机构：{{form.rdorg}}</el-col>
        <el-col :span="6" class="info-li">知识产权：{{form.knowledgeproperty}}</el-col>
        <el-col :span="6" class="info-li">租赁性质：{{form.leaseNature}}</el-col>
        <el-col :span="6" class="info-li">租赁比例：{{form.leaseproportion}}</el-col>
        <el-col :span="6" class="info-li">出售价格：{{form.sellprice}}</el-col>
        <el-col :span="6" class="info-li">出售面积：{{form.sellarea}}</el-col>
        <el-col :span="6" class="info-li">租金水平：{{form.rentlevel}}</el-col>
        <el-col :span="6" class="info-li">已租出面积：{{form.leasedarea}}</el-col>
        <el-col :span="6" class="info-li">剩余出租面积：{{form.surplusleasearea}}</el-col>
        <el-col :span="6" class="info-li">出租率：{{form.rentalrate}}</el-col>
        <el-col :span="6" class="info-li">物业管理费：{{form.propertyfee}}</el-col>
        <el-col :span="24" class="r-box">典型企业：<div class="right-content">
          <ul class="img-list">
            <li v-for="(tag,idx) in form.typicalenterprisesArr" :key="idx">
              <img :src="url+tag.attpath">
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box">典型科研/研发机构：<div class="right-content">
          <ul class="img-list tb">
            <li v-for="(tag,idx) in form.typicalrdorgimgArr" :key="idx">
              <img :src="url+tag.attpath">
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
        <el-col :span="6" class="info-li">投资主体：{{form.investors}}</el-col>
        <el-col :span="6" class="info-li">开发主体：<span v-if="devSubjectList[form.devsubject]">{{devSubjectList[form.devsubject].label}}</span></el-col>
        <el-col :span="6" class="info-li">投资主体属性：{{form.investorattr}}</el-col>
        <el-col :span="6" class="info-li">土地获得方式：{{form.rentlevel}}</el-col>
        <el-col :span="6" class="info-li">开发方式：<span v-if="depmethodList[form.depmethod]">{{depmethodList[form.depmethod].label}}</span></el-col>
        <el-col :span="6" class="info-li">投资规模：{{form.investmentmode}}</el-col>
        <el-col :span="6" class="info-li">招商方式：<span v-if="investModeList[form.investmode]">{{investModeList[form.investmode].label}}</span></el-col>
        <el-col :span="6" class="info-li">招商团队：{{form.investteam}}</el-col>
        <el-col :span="6" class="info-li">招商策略：{{form.investstrategy}}</el-col>
        <el-col :span="6" class="info-li">运营主体：{{form.operubject}}</el-col>
        <el-col :span="6" class="info-li">运营模式：<span v-if="operModeList[form.opermode]">{{operModeList[form.opermode].label}}</span></el-col>
        <el-col :span="6" class="info-li">运营团队：{{form.operteam}}</el-col>
        <el-col :span="24" class="r-box r-box2">优惠政策：<div class="right-content">{{form.favouredpolicy}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">智慧园区平台：<div class="right-content">{{form.witplatform}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">园区服务：<div class="right-content">{{form.parkservice}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">运营成本：<div class="right-content">{{form.opercost}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">运营收益：<div class="right-content">{{form.operprofit}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">园区活动：<div class="right-content">
          <ul class="img-list">
            <li v-for="(tag,idx) in form.parkactivityimgArr" :key="idx">
              <img :src="url+tag.attpath">
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
        <el-col :span="24" class="r-box">商业设施：<div class="right-content">
            <span>{{form.businessfacilities}}</span>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.businessfacilitiesimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">居住设施：<div class="right-content">
            <span>{{form.accommodations}}</span>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.accommodationsimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">会议展厅：<div class="right-content">
            <span>{{form.conferencehall}}</span>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.conferencehallimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">停车设施：<div class="right-content">
            <span>{{form.parkfacility}}</span>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.parkfacilityimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
            </ul>
            </div>
          </el-col>
          <el-col :span="24" class="r-box">公共服务设施：<div class="right-content">
            <span>{{form.publicfacilities}}</span>
            <ul class="img-list">
              <li v-for="(tag,idx) in form.publicfacilitiesimgArr" :key="idx">
              <img :src="url+tag.attpath">
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
        <el-col :span="24" class="r-box">投资亮点：<div class="right-content">
            <span>{{form.investadvantage}}</span>
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
import * as _D from '@config/dictionaries'

export default {
  name: 'parkViewdetail',
  data () {
    return {
      leadindustryList: _D.leadIndustryList,
      devSubjectList: _D.devSubjectList,
      depmethodList: _D.depmethodList,
      investModeList: _D.investModeList,
      operModeList: _D.operModeList,
      leadfuncList: _D.leadfuncList,
      url: '/downloadFile?filePath=',
      form: {
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
        typicalenterprises: '',
        typicalenterprisesArr: [],
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
            data.leadindustryArray = _.map((data.leadindustry || '').split(','), v => v || '')
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
  display: flex;
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
