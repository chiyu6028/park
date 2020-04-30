<template>
  <el-form ref="investment" :model="form" :rules="rules" label-position="top" :inline="true">
    <el-form-item class="inline-1">
      <TitleBlock title="园区效益"></TitleBlock>
    </el-form-item>
    <el-form-item label="主导产业" class="inline-1 form-leadindustry">
      <el-checkbox-group v-model="form.leadindustryArray" >
        <el-checkbox v-for="item in leadindustryList" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="主导功能" class="inline-7">
      <el-select v-model="form.leadfunc" placeholder="请选择" :clearable="true">
        <el-option v-for="item in leadfuncList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="parkvalue" label="园区产值（亿元）" class="inline-7">
      <el-input v-model="form.parkvalue"></el-input>
    </el-form-item>
    <el-form-item prop="avgvalue" label="平均产值（亿元/k㎡）" class="inline-7">
      <el-input v-model="form.avgvalue"></el-input>
    </el-form-item>
    <el-form-item prop="employmentpeople" label="就业人口（万人）" class="inline-7">
      <el-input v-model="form.employmentpeople"></el-input>
    </el-form-item>
    <el-form-item prop="devotetax" label="贡献税收（亿元）" class="inline-7">
      <el-input v-model="form.devotetax"></el-input>
    </el-form-item>
    <el-form-item prop="knowledgeproperty" label="知识产权（件）" class="inline-7">
      <el-input v-model="form.knowledgeproperty"></el-input>
    </el-form-item>
    <el-form-item prop="leasenature" label="租售性质" class="inline-7">
      <el-input v-model="form.leasenature"></el-input>
    </el-form-item>
    <el-form-item prop="leaseproportion" label="租售比例（%）" class="inline-7">
      <el-input v-model="form.leaseproportion"></el-input>
    </el-form-item>
    <el-form-item prop="propertyfee" label="物业管理费（元/m²/月）" class="inline-7">
      <el-input v-model="form.propertyfee"></el-input>
    </el-form-item>
    <el-form-item prop="sellprice" label="出售价格（万元/㎡）" class="inline-7">
      <el-input v-model="form.sellprice"></el-input>
    </el-form-item>
    <el-form-item prop="sellarea" label="出售面积（m²）" class="inline-7">
      <el-input v-model="form.sellarea"></el-input>
    </el-form-item>
    <el-form-item prop="rentlevel" label="租金水平（元/m²/月）" class="inline-7">
      <el-input v-model="form.rentlevel"></el-input>
    </el-form-item>
    <el-form-item prop="leasedarea" label="已租出面积（m²）" class="inline-7">
      <el-input v-model="form.leasedarea"></el-input>
    </el-form-item>
    <el-form-item prop="surplusleasearea" label="剩余出租面积（m²）" class="inline-7">
      <el-input v-model="form.surplusleasearea"></el-input>
    </el-form-item>
    <el-form-item prop="rentalrate" label="出租率（%）" class="inline-7">
      <el-input v-model="form.rentalrate"></el-input>
    </el-form-item>
    <el-form-item prop="enterprisenum" label="企业数量（家）" class="inline-7">
      <el-input v-model="form.enterprisenum"></el-input>
    </el-form-item>
    <el-form-item prop="nhenterprisenum" label="高新企业（家）" class="inline-7">
      <el-input v-model="form.nhenterprisenum"></el-input>
    </el-form-item>
    <el-form-item prop="rdorg" label="科研/研发机构（家）" class="inline-7">
      <el-input v-model="form.rdorg"></el-input>
    </el-form-item>
    <el-form-item prop="rdorg" label="更新时间" class="inline-7">
    <el-date-picker
      v-model="form.updatedate"
      type="date"
      placeholder="选择日期"
      format="yyyy-MM-dd"
      value-format="yyyyMMdd">
    </el-date-picker>
    </el-form-item>
    <el-form-item prop="typicalenterprises_t" label="典型企业" class="inline-1">
      <el-input type="textarea" autosize v-model="form.typicalenterprises_t"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.typicalenterprisesArr" @setFileList="value => setFileList('typicalenterprises', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item prop="typicalrdorg" label="典型科研/研发机构" class="inline-1">
      <el-input type="textarea" autosize v-model="form.typicalrdorg"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.typicalrdorgimgArr" @setFileList="value => setFileList('typicalrdorgimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="投资开发运营招商"></TitleBlock>
    </el-form-item>
    <el-form-item label="投资主体属性" class="inline-7">
      <el-select v-model="form.devsubject" placeholder="请选择" :clearable="true">
        <el-option v-for="item in devSubjectList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="investors" label="开发主体" class="inline-7">
      <el-input v-model="form.investors"></el-input>
    </el-form-item>
    <el-form-item prop="landmethod" label="土地获得方式" class="inline-7">
      <el-input v-model="form.landmethod"></el-input>
    </el-form-item>
    <el-form-item prop="investorattr" label="投资主体" class="inline-7">
      <el-input v-model="form.investorattr"></el-input>
    </el-form-item>
    
    <el-form-item prop="investmentmode" label="投资规模(亿元)" class="inline-7">
      <el-input v-model="form.investmentmode"></el-input>
    </el-form-item>
    <el-form-item prop="investteam" label="招商团队" class="inline-7">
      <el-input v-model="form.investteam"></el-input>
    </el-form-item>
    <el-form-item prop="investstrategy" label="招商策略" class="inline-7">
      <el-input v-model="form.investstrategy"></el-input>
    </el-form-item>
    <el-form-item prop="operubject" label="运营主体" class="inline-7">
      <el-input v-model="form.operubject"></el-input>
    </el-form-item>
    <el-form-item label="运营模式" class="inline-7">
      <el-select v-model="form.opermode" placeholder="请选择" :clearable="true">
        <el-option v-for="item in operModeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="operteam" label="运营团队" class="inline-7">
      <el-input v-model="form.operteam"></el-input>
    </el-form-item>
    <el-form-item prop="depmethod" label="开发方式" class="inline-1">
      <el-input type="textarea" autosize v-model="form.depmethod"></el-input>
      </el-select>
    </el-form-item>
    <el-form-item prop="investmode" label="招商方式" class="inline-1">
        <el-input type="textarea" autosize v-model="form.investmode"></el-input>
      </el-select>
    </el-form-item>
    <el-form-item prop="favouredpolicy" label="优惠政策" class="inline-1">
      <el-input type="textarea" autosize v-model="form.favouredpolicy"></el-input>
    </el-form-item>
    <el-form-item prop="witplatform" label="智慧园区" class="inline-1">
      <el-input type="textarea" autosize v-model="form.witplatform"></el-input>
    </el-form-item>
    <el-form-item prop="parkservice" label="园区服务" class="inline-1">
      <el-input type="textarea" autosize v-model="form.parkservice"></el-input>
    </el-form-item>
    <el-form-item prop="opercost" label="运营成本" class="inline-1">
      <el-input type="textarea" autosize v-model="form.opercost"></el-input>
    </el-form-item>
    <el-form-item prop="operprofit" label="运营收益" class="inline-1">
      <el-input type="textarea" autosize v-model="form.operprofit"></el-input>
    </el-form-item>
    <el-form-item prop="parkactivity" label="园区活动" class="inline-1">
      <el-input type="textarea" autosize v-model="form.parkactivity"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.parkactivityimgArr" @setFileList="value => setFileList('parkactivityimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="配套设施"></TitleBlock>
    </el-form-item>
    <el-form-item prop="businessfacilities" label="商业设施" class="inline-1">
      <el-input type="textarea" autosize v-model="form.businessfacilities"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.businessfacilitiesimgArr" @setFileList="value => setFileList('businessfacilitiesimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item prop="accommodations" label="居住设施" class="inline-1">
      <el-input type="textarea" autosize v-model="form.accommodations"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.accommodationsimgArr" @setFileList="value => setFileList('accommodationsimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item prop="conferencehall" label="会议展厅" class="inline-1">
      <el-input type="textarea" autosize v-model="form.conferencehall"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.conferencehallimgArr" @setFileList="value => setFileList('conferencehallimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item prop="parkfacility" label="停车设施" class="inline-1">
      <el-input type="textarea" autosize v-model="form.parkfacility"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.parkfacilityimgArr" @setFileList="value => setFileList('parkfacilityimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item prop="publicfacilities" label="公共服务设施" class="inline-1">
      <el-input type="textarea" autosize v-model="form.publicfacilities"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.publicfacilitiesimgArr" @setFileList="value => setFileList('publicfacilitiesimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="投资运营小结 "></TitleBlock>
    </el-form-item>
    <el-form-item prop="investadvantage" label="投资运营亮点" class="inline-1">
      <el-input type="textarea" autosize v-model="form.investadvantage"></el-input>
    </el-form-item>
    <el-form-item prop="deficiencies" label="投资运营困境" class="inline-1">
      <el-input type="textarea" autosize v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">
        <span v-if="form.butflag=='add'">保存到草稿箱</span>
        <span v-if="form.butflag!='add'">保存修改</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import * as _ from 'lodash'
import TitleBlock from '@components/block/titleBlock'
import UploadDescBottom from '@components/form/upload-desc-bottom'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'
import rules from './rules.js'

export default {
  name: 'investment',
  components: { TitleBlock, UploadDescBottom },
  data () {
    return {
      leadindustryList: _D.leadIndustryList,
      devSubjectList: _D.devSubjectList,
      depmethodList: _D.depmethodList,
      investModeList: _D.investModeList,
      operModeList: _D.operModeList,
      leadfuncList: _D.leadfuncList,
      rules,
      form: {
        updatedate:'',
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
        typicalenterprises_t:'',
        typicalenterprises: '',
        typicalenterprisesArr: [],
        typicalrdorg:'',
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
        parkactivity:'',
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
        parkfacility: '',
        parkfacilityimg: '',
        parkfacilityimgArr: [],
        publicfacilities: '',
        publicfacilitiesimg: '',
        publicfacilitiesimgArr: [],
        investadvantage: '',
        deficiencies: '',
        butflag: 'add'
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    }),
    leadindustry () {
      return this.form.leadindustryArray.join(',')
    }
  },
  mounted () {
    if (this.$route.path.indexOf('/editProject/') !== -1) {
      this.initForm(this.$route.params.id)
      this.form.butflag = 'update'
    }
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
    },
    onSubmit () {
      this.$refs.investment.validate(isValid => {
        if (isValid) {
          this.$axios.post(URL['INSERT_INVEST_OPERATE'], { ...this.form, projectid: this.projectid, leadindustry: this.leadindustry }).then(resp => {
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
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-leadindustry .el-checkbox{
  width: calc(10%)
}
.el-checkbox__label{
  font-size: 12px !important;
}
</style>
