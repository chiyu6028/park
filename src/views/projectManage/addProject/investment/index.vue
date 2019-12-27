<template>
  <el-form ref="investment" :model="form" label-position="top" :inline="true">
    <el-form-item class="inline-1">
      <TitleBlock title="园区效益"></TitleBlock>
    </el-form-item>
    <el-form-item label="主导产业：互联网、新能源、高端装备制造、现代服务业、人工智能 " class="inline-1">
      <el-checkbox-group v-model="form.leadindustryArray">
        <el-checkbox label="1">新一代信息技术</el-checkbox>
        <el-checkbox label="2">互联网</el-checkbox>
        <el-checkbox label="3">新能源</el-checkbox>
        <el-checkbox label="4">新材料</el-checkbox>
        <el-checkbox label="5">高端装备制造</el-checkbox>
        <el-checkbox label="6">节能环保</el-checkbox>
        <el-checkbox label="7">生物医药</el-checkbox>
        <el-checkbox label="8">文化创意</el-checkbox>
        <el-checkbox label="9">航空航天</el-checkbox>
        <el-checkbox label="10">无人机</el-checkbox>
        <el-checkbox label="11">海洋经济</el-checkbox>
        <el-checkbox label="12">现代服务业</el-checkbox>
        <el-checkbox label="13">人工智能</el-checkbox>
        <el-checkbox label="14">5G</el-checkbox>
        <el-checkbox label="15">物联网</el-checkbox>
        <el-checkbox label="16">集成电路</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="主导功能" class="inline-7">
      <el-select v-model="form.leadfunc" placeholder="选择功能">
        <el-option label="研发" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="园区产值（亿元）" class="inline-7">
      <el-input v-model="form.parkvalue"></el-input>
    </el-form-item>
    <el-form-item label="平均产值（亿元）" class="inline-7">
      <el-input v-model="form.avgvalue"></el-input>
    </el-form-item>
    <el-form-item label="就业人口（万）" class="inline-7">
      <el-input v-model="form.employmentpeople"></el-input>
    </el-form-item>
    <el-form-item label="贡献税收（亿元）" class="inline-7">
      <el-input v-model="form.devotetax"></el-input>
    </el-form-item>
    <el-form-item label="知识产权（件）" class="inline-7">
      <el-input v-model="form.knowledgeproperty"></el-input>
    </el-form-item>
    <el-form-item label="租售性质" class="inline-7">
      <el-input v-model="form.leasenature"></el-input>
    </el-form-item>
    <el-form-item label="租售比例（%）" class="inline-7">
      <el-input v-model="form.leaseproportion"></el-input>
    </el-form-item>
    <el-form-item label="物业管理费（元/m²/月）" class="inline-7">
      <el-input v-model="form.propertyfee"></el-input>
    </el-form-item>
    <el-form-item label="出售价格（万元）" class="inline-7">
      <el-input v-model="form.sellprice"></el-input>
    </el-form-item>
    <el-form-item label="出售面积（m²）" class="inline-7">
      <el-input v-model="form.sellarea"></el-input>
    </el-form-item>
    <el-form-item label="租金水平（元/m²/月）" class="inline-7">
      <el-input v-model="form.rentlevel"></el-input>
    </el-form-item>
    <el-form-item label="已租出面积（m²）" class="inline-7">
      <el-input v-model="form.leasedarea"></el-input>
    </el-form-item>
    <el-form-item label="剩余出租面积（m²）" class="inline-7">
      <el-input v-model="form.surplusleasearea"></el-input>
    </el-form-item>
    <el-form-item label="出租率（%）" class="inline-7">
      <el-input v-model="form.rentalrate"></el-input>
    </el-form-item>
    <el-form-item label="企业数量（家）" class="inline-7">
      <el-input v-model="form.enterprisenum"></el-input>
    </el-form-item>
    <el-form-item label="高新企业（家）" class="inline-7">
      <el-input v-model="form.nhenterprisenum"></el-input>
    </el-form-item>
    <el-form-item label="科研/研发机构（家）" class="inline-7">
      <el-input v-model="form.rdorg"></el-input>
    </el-form-item>
    <el-form-item label="典型企业" class="inline-1">
      <UploadDescBottom @setFileList="value => setFileList('typicalenterprises', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item label="典型科研/研发机构" class="inline-1">
      <UploadDescBottom @setFileList="value => setFileList('typicalrdorgimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="投资开发运营招商"></TitleBlock>
    </el-form-item>
    <el-form-item label="投资主体" class="inline-7">
      <el-input v-model="form.investors"></el-input>
    </el-form-item>
    <el-form-item label="开发主体" class="inline-7">
      <el-select v-model="form.devsubject" placeholder="请选择">
        <el-option label="主体1" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="土地获得方式" class="inline-7">
      <el-input v-model="form.landmethod"></el-input>
    </el-form-item>
    <el-form-item label="投资主体属性" class="inline-7">
      <el-input v-model="form.investorattr"></el-input>
    </el-form-item>
    <el-form-item label="开发方式" class="inline-7">
      <el-select v-model="form.depmethod" placeholder="请选择">
        <el-option label="方式1" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="投资规模(亿元)" class="inline-7">
      <el-input v-model="form.investmentmode"></el-input>
    </el-form-item>
    <el-form-item label="招商方式" class="inline-7">
      <el-select v-model="form.investmode" placeholder="请选择">
        <el-option label="方式1" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="招商团队" class="inline-7">
      <el-input v-model="form.investteam"></el-input>
    </el-form-item>
    <el-form-item label="招商策略" class="inline-7">
      <el-input v-model="form.investstrategy"></el-input>
    </el-form-item>
    <el-form-item label="运营主体" class="inline-7">
      <el-input v-model="form.operubject"></el-input>
    </el-form-item>
    <el-form-item label="运营模式" class="inline-7">
      <el-select v-model="form.opermode" placeholder="请选择">
        <el-option label="模式1" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="运营团队" class="inline-7">
      <el-input v-model="form.operteam"></el-input>
    </el-form-item>
    <el-form-item label="优惠政策" class="inline-1">
      <el-input v-model="form.favouredpolicy"></el-input>
    </el-form-item>
    <el-form-item label="智慧园区平台" class="inline-1">
      <el-input v-model="form.witplatform"></el-input>
    </el-form-item>
    <el-form-item label="园区服务" class="inline-1">
      <el-input v-model="form.parkservice"></el-input>
    </el-form-item>
    <el-form-item label="运营成本" class="inline-1">
      <el-input v-model="form.opercost"></el-input>
    </el-form-item>
    <el-form-item label="运营收益" class="inline-1">
      <el-input v-model="form.operprofit"></el-input>
    </el-form-item>
    <el-form-item label="园区活动" class="inline-1">
      <UploadDescBottom @setFileList="value => setFileList('parkactivityimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="配套设施"></TitleBlock>
    </el-form-item>
    <el-form-item label="商业设施" class="inline-1">
      <el-input v-model="form.businessfacilities"></el-input>
      <UploadDescBottom @setFileList="value => setFileList('businessfacilitiesimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item label="居住设施" class="inline-1">
      <el-input v-model="form.accommodations"></el-input>
      <UploadDescBottom @setFileList="value => setFileList('accommodationsimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item label="会议展厅" class="inline-1">
      <el-input v-model="form.conferencehall"></el-input>
      <UploadDescBottom @setFileList="value => setFileList('conferencehallimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item label="公共服务设施" class="inline-1">
      <el-input v-model="form.publicfacilities"></el-input>
      <UploadDescBottom @setFileList="value => setFileList('publicfacilitiesimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="inline-1">
      <TitleBlock title="投资运营小结 "></TitleBlock>
    </el-form-item>
    <el-form-item label="项目亮点" class="inline-1">
      <el-input v-model="form.investadvantage"></el-input>
    </el-form-item>
    <el-form-item label="面临困境" class="inline-1">
      <el-input v-model="form.deficiencies"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import TitleBlock from '@components/block/titleBlock'
import UploadDescBottom from '@components/form/upload-desc-bottom'
import URL from '@config/urlConfig.js'

export default {
  name: 'investment',
  components: { TitleBlock, UploadDescBottom },
  data () {
    return {
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
        typicalrdorgimg: '',
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
        businessfacilities: '',
        businessfacilitiesimg: '',
        accommodations: '',
        accommodationsimg: '',
        conferencehall: '',
        conferencehallimg: '',
        publicfacilities: '',
        publicfacilitiesimg: '',
        investadvantage: '',
        deficiencies: ''
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id,
      flag: state => state.flag,
      pageMark: state => state.flag + ',' + state.project_id
    }),
    leadindustry () {
      return this.form.leadindustryArray.join(',')
    }
  },
  mounted () {
    if (this.flag === 'edit') this.initForm()
  },
  methods: {
    initForm () {
      this.$axios.post(URL['selectForFormByAjax'], { projectid: this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1) {
            this.form = resp.data.data
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
    },
    onSubmit () {
      this.$axios.post(URL['INSERT_INVEST_OPERATE'], { ...this.form, projectid: this.projectid }).then(resp => {
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
  },
  watch: {
    pageMark (value) {
      let info = value.split(',')
      if (info[0] === 'edit' && info[1]) this.initForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-7.el-form-item {
  width: 14%;
  margin-right: 0;
}
.inline-5.el-form-item {
  width: 20%;
  margin-right: 0;
}
.inline-1.el-form-item{
  width: 100%;
  margin-right: 0;
}
</style>
