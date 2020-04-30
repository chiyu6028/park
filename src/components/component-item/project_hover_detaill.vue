<template>
  <el-popover placement="bottom-start" :width="popoverWidth" trigger="hover" @show="showContent">
    <div class="content">
      <el-row class="item">
        <el-col :span="24">
          <a class="title" @click="detailProject(item)">{{item.parkname}}</a>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="12" class="col-item">
          <span class="label">园区类型:</span>
          <span class="value">{{item.parkTypeStr}}</span>
        </el-col>
        <el-col :span="12" class="col-item">
          <span class="label">园区产值:</span>
          <span class="value">{{item.parkValue}}</span>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="12">
          <span class="label">用地面积:</span>
          <span class="value">{{item.useArea}}</span>
        </el-col>
        <el-col :span="12">
          <span class="label">总建筑面积:</span>
          <span class="value">{{item.buildArea}}</span>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="12">
          <span class="label">企业数量:</span>
          <span class="value">{{item.compNum}}</span>
        </el-col>
        <el-col :span="12">
          <span class="label">开发主体:</span>
          <span class="value">{{item.devSubjectStr}}</span>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="12">
          <span class="label">投资规模:</span>
          <span class="value">{{item.investmentMode}}</span>
        </el-col>
        <el-col :span="12">
          <span class="label">主导功能:</span>
          <span class="value">{{item.leadFuncStr}}</span>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="12">
          <span class="label">科研/研发机构:</span>
          <span class="value">{{item.rdorg}}</span>
        </el-col>
      </el-row>
      <el-row class="item" style="line-height: 1.7;">
        <el-col :span="22">
          <span class="label">用地性质:</span>
          <span class="value">{{item.useTypeStr}}</span>
        </el-col>
      </el-row>
      <el-row class="item" style="line-height: 1.7;">
        <el-col :span="22">
          <span class="label">主导产业:</span>
          <span class="value">{{item.leadIndustryStr}}</span>
        </el-col>
      </el-row>
    </div>
    <el-row class="item" style="line-height: 1.7;">
      <el-col :span="22">
        <span class="label">园区地址:</span>
        <span class="value">{{item.positionMap}}</span>
      </el-col>
    </el-row>
    <span slot="reference" :style="titleStyle">{{title}}</span>
  </el-popover>
</template>

<script>
import * as _ from 'lodash'
import * as D from '@config/default.js'
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'
import T from '@utils/tools'

export default {
  data () {
    return {
      item: {
        buildArea: '',
        devSubject: '',
        investmentMode: '',
        leadFunc: '',
        leadIndustry: '',
        parkValue: '',
        parkname: '',
        projectbh: '',
        projectid: '',
        rdorg: '',
        useArea: '',
        useType: '',
        compNum: '',
        parkType: '',
        positionMap: '',
        useTypeStr: ''
      },
      leadIndustryObj: _D.leadIndustryObj, // 主导产业
      leadfuncObj: _D.leadfuncObj, // 主导功能
      devSubjectObj: _D.devSubjectObj, // 开发主体
      parkTypeObj: _D.parkTypeObj,
      popoverWidth: '500'
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    dotId: {
      type: String,
      required: true
    },
    titleStyle: {
      type: String
    }
  },
  methods: {
    detailProject (row) {
      this.$router.push({
        path: `projectManage/detail/${row.projectid}`,
        query: { t: Date.now() }
      })
    },
    showContent () {
      this.selectParkSurveyById()
    },
    selectParkSurveyById () {
      let param = {
        projectid: this.dotId
      }
      this.$axios
        .get(URL['selectParkSurveyById'], { params: param })
        .then(resp => {
          if (resp.status === 200) {
            if (resp.data && resp.data.code === 1 && resp.data.data) {
              let resData = resp.data.data
              let leadIndustryStr = '-'
              // let usetype = '-'
              let useTypeStr = '-'
              let devSubjectStr = '-'
              let leadFuncStr = '-'
              let usetypeConvert = T.getConvert(_D.usetypeList)
              let parkTypeStr = '-'
              if (resData.parkType) {
                parkTypeStr = ''
                _.map(resData.parkType.split(','), value => {
                  parkTypeStr += this.parkTypeObj[value] + '，'
                })
                parkTypeStr = parkTypeStr.substring(0, parkTypeStr.length - 1)
              }
              if (resData.leadIndustry) {
                leadIndustryStr = ''
                _.map(resData.leadIndustry.split(','), value => {
                  leadIndustryStr += this.leadIndustryObj[value] + '，'
                })
                leadIndustryStr = leadIndustryStr.substring(0, leadIndustryStr.length - 1)
              }

              if (resData.useType) {
                useTypeStr = T.getConvertValue2(resData.useType, usetypeConvert)
                // _.map(data, v => ({
                //   ...v,
                //   _usetype: v.usetype,
                //   usetype: T.getConvertValue2(v.usetype, usetypeConvert)
                // }))
              }

              if (resData.devSubject) {
                devSubjectStr = ''
                _.map(resData.devSubject.split(','), value => {
                  devSubjectStr += this.devSubjectObj[value] + '，'
                })
                devSubjectStr = devSubjectStr.substring(
                  0,
                  devSubjectStr.length - 1
                )
              }
              if (resData.leadFunc) {
                leadFuncStr = ''
                _.map(resData.leadFunc.split(','), value => {
                  leadFuncStr += this.leadfuncObj[value] + '，'
                })
                leadFuncStr = leadFuncStr.substring(0, leadFuncStr.length - 1)
              }
              resData.parkValue = resData.parkValue ? parseFloat(resData.parkValue).toFixed(2) + ' 亿元' : '-'
              resData.buildArea = resData.buildArea ? parseFloat(resData.buildArea).toFixed(2) + ' m²' : '-'
              resData.investmentMode = resData.investmentMode ? parseFloat(resData.investmentMode).toFixed(2) + ' 亿元' : '-'
              resData.rdorg = resData.rdorg ? resData.rdorg + ' 家' : '-'
              resData.compNum = resData.compNum ? resData.compNum + ' 家' : '-'
              resData.useArea = resData.useArea ? parseFloat(resData.useArea).toFixed(2) + ' ha' : '-'

              this.item = resData
              this.item.leadIndustryStr = leadIndustryStr
              this.item.useTypeStr = useTypeStr.replace(/,/g, '，')
              this.item.devSubjectStr = devSubjectStr
              this.item.leadFuncStr = leadFuncStr
              this.item.parkTypeStr = parkTypeStr
              this.item.positionMapStr = parkTypeStr
              this.item.positionMapStr = this.item.positionMapStr ? this.item.positionMapStr : '-'
            } else {
              this.$message.error(
                resp.data && resp.data.msg ? resp.data.msg : '处理失败'
              )
            }
          } else {
            this.$message.error('系统异常，请联系管理员！')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 10px;
  margin-left: 20px;
  .title {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }
  .label {
    color: #c5c5c5;
    display: inline-block;
    margin-right: 10px;
  }
  .value {
    color: #000;
  }
  .col-item {
    marin-right: 10px;
  }
}
</style>
