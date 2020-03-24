<template>
   <el-popover
    placement="top-start"
    :width="popoverWidth"
    trigger="hover" @show="showContent">
    <div class="content">
      <el-row class="item">
        <el-col :span="24" >
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
          <span class="value">{{item.parkvalue}}&nbsp;亿元</span>
        </el-col>
      </el-row>
      <el-row class="item">
		 <el-col :span="12">
		     <span class="label">用地面积:</span>
		     <span class="value">{{item.useArea}}&nbsp;公顷</span>
		  </el-col>
		<el-col :span="12">
		   <span class="label">总建筑面积:</span>
		   <span class="value">{{item.buildArea}}&nbsp;m²</span>
		 </el-col>
      </el-row>
      <el-row class="item">
		  <el-col :span="12">
		    <span class="label">用地性质:</span>
		    <span class="value">{{item.useTypeStr}}</span>
		  </el-col>
         <el-col :span="12">
          <span class="label">开发主体:</span>
          <span class="value">{{item.devSubjectStr}}</span>
        </el-col>
      </el-row>
      <el-row class="item">
		  <el-col :span="12">
		     <span class="label">投资规模:</span>
		     <span class="value">{{item.investmentMode}}&nbsp;亿元</span>
		   </el-col>
        <el-col :span="12">
          <span class="label">主导功能:</span>
          <span class="value">{{item.leadFuncStr}}</span>
        </el-col>
      </el-row>
	  <el-row class="item">
		  <el-col :span="12">
		    <span class="label">科研/研发机构:</span>
		    <span class="value">{{item.rdorg}}&nbsp;家</span>
		  </el-col>
	  </el-row>
	  <el-row class="item" style="line-height: 1.7;">
	     <el-col :span="22">
	      <span class="label">主导产业:</span>
	      <span class="value" >{{item.leadIndustryStr}}</span>
	    </el-col>
	  </el-row>
    </div>
	<el-row class="item" style="line-height: 1.7;">
	  <el-col :span="22">
	    <span class="label">园区地址:</span>
	    <span class="value">{{item.positionMapStr}}</span>
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
		parkType: '',
		positionMap: ''

      },
      leadIndustryObj: _D.leadIndustryObj, // 主导产业
      leadfuncObj: _D.leadfuncObj, // 主导功能
      devSubjectObj: _D.devSubjectObj, // 开发主体
      usetypeObj: _D.usetypeObj,
	  parkTypeObj: _D.parkTypeObj,
	  positionMapObj: _D.positionMapOjb,
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
      this.$router.push({ path: `projectManage/detail/${row.projectid}`, query: { t: Date.now() } })
    },
    showContent () {
      this.selectParkSurveyById()
    },
    selectParkSurveyById () {
      let param = {
        projectid: this.dotId
      }
      this.$axios.get(URL['selectParkSurveyById'], { params: param }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1 && resp.data.data) {
            let resData = resp.data.data
            let leadIndustryStr = '-'
            let useTypeStr = '-'
            let devSubjectStr = '-'
            let leadFuncStr = '-'
			let parkTypeStr = '-'
			let positionMapStr = '-'
			if (resData.positionMap) {
			  positionMapStr = ''
			  _.map(resData.positionMap.split(','), value => {
			    positionMapyStr += this.positionMapObj[value] + '，'
			  })
			  positionMapStr = positionMapStr.substring(0, positionMapStr.length - 1)
			}
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
              useTypeStr = ''
              _.map(resData.useType.split(','), value => {
                useTypeStr += this.usetypeObj[value] + '，'
              })
              useTypeStr = useTypeStr.substring(0, useTypeStr.length - 1)
            }
            if (resData.devSubject) {
              devSubjectStr = ''
              _.map(resData.devSubject.split(','), value => {
                devSubjectStr += this.devSubjectObj[value] + '，'
              })
              devSubjectStr = devSubjectStr.substring(0, devSubjectStr.length - 1)
            }
            if (resData.leadFunc) {
              leadFuncStr = ''
              _.map(resData.leadFunc.split(','), value => {
                leadFuncStr += this.leadfuncObj[value] + '，'
              })
              leadFuncStr = leadFuncStr.substring(0, leadFuncStr.length - 1)
            }
            resData.parkvalue = resData.parkvalue ? resData.parkvalue : '0'
            resData.useArea = resData.useArea ? resData.useArea : '0'
            resData.buildArea = resData.buildArea ? resData.buildArea : '0'
            resData.investmentMode = resData.investmentMode ? resData.investmentMode : '0'
            resData.rdorg = resData.rdorg ? resData.rdorg : '0'

            this.item = resData
            this.item.leadIndustryStr = leadIndustryStr
            this.item.useTypeStr = useTypeStr
            this.item.devSubjectStr = devSubjectStr
            this.item.leadFuncStr = leadFuncStr
			this.item.parkTypeStr = parkTypeStr
			this.item.positionMapStr = parkTypeStr
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
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
  margin-left:20px;
  .title {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 18px;
    font-weight: bold;
	color:#000;
	text-decoration: underline;
	cursor: pointer;
  }
  .label {
    color: #C5C5C5;
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
