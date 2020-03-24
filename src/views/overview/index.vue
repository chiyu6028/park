<template>
<div class="park-outter">
  <div class="yqbg">
    <div class="btn-group">
      <el-button type="primary" v-if="isvisible"  round @click="dialogTableVisible = true">多维对比</el-button>
      <el-button type="primary" v-if="!isvisible"  round @click="chooseDimen">第二步：选择维度</el-button>
      <el-button type="primary" v-if="!isvisible"  round @click="exportResult">结果导出</el-button>
      <el-button type="info"  v-if="!isvisible" round @click="closeCompare">关闭对比</el-button>
    </div>
  <div class="topmap" ref="topmap">
	<img class="big-map" src="../../assets/images/top.png" ref="imgSize">
    <div class="tips-click dot01"  ref="dotxy01" :style="dotxy01">
		<a @click="detailProject(334)">
      <hover-detaill :title="'华强创意产业园'" :dotId="'334'"></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy02" :style="dotxy02">
      <!-- 327 -->
      <!-- <span style="left: -44px;">宝能科技城</span> -->
	  <a @click="detailProject(327)">
      <hover-detaill :title="'宝能科技城'" :titleStyle="'margin-left: -15px;'" :dotId="'327'"  ></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy03" :style="dotxy03">
      <!-- 129 -->
      <!-- <span style="left: -13px;">平湖恒路物流创新广场</span> -->
	  <a @click="detailProject(129)">
      <hover-detaill :title="'平湖恒路物流创新广场'" :titleStyle="'margin-left: 35px;'" :dotId="'129'"></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy04" :style="dotxy04">
      <!-- 136 -->
      <!-- <span>启迪协信科技园</span> -->
	  <a  @click="detailProject(136)">
      <hover-detaill :title="'启迪协信科技园'" :dotId="'136'"></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy05" :style="dotxy05">
      <!-- 131 -->
      <!-- <span style="left: -50px;">创智云城</span> -->
	  <a @click="detailProject(131)">
      <hover-detaill :title="'创智云城'" :titleStyle="'margin-left: -30px;'" :dotId="'131'"></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy06" :style="dotxy06">
      <!-- 162 -->
      <!-- <span style="left: -26px;">南山科技创新中心</span> -->
	  <a @click="detailProject(162)">
      <hover-detaill :title="'南山科技创新中心'" :titleStyle="'margin-left: 20px;'"  :dotId="'162'" ></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy07" :style="dotxy07">
      <!-- 235 -->
      <!-- <span style="left: -38px;">创智天地大厦</span> -->
	  <a @click="detailProject(235)">
      <hover-detaill :title="'创智天地大厦'" :titleStyle="'margin-left: -10px;'" :dotId="'235'" ></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy08" :style="dotxy08">
      <!-- 182 -->
      <!-- <span style="left: -20px;">长城开发彩田工业园</span> -->
	  <a  @click="detailProject(182)">
      <hover-detaill :title="'长城开发彩田工业园'" :titleStyle="'margin-left: 20px;'" :dotId="'182'"></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy09" :style="dotxy09">
      <!-- 177 -->
      <!-- <span style="left: -25px;">深圳湾科技生态园</span> -->
	  <a  @click="detailProject(177)">
      <hover-detaill :title="'深圳湾科技生态园'" :titleStyle="'margin-left: 10px;'"  :dotId="'177'"></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy10" :style="dotxy10">
      <!-- 159 -->
      <!-- <span style="left: -18px;">深圳市软件产业基地</span> -->
	  <a @click="detailProject(159)">
      <hover-detaill :title="'深圳市软件产业基地'" :titleStyle="'margin-left: 30px;'" :dotId="'159'" ></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
    </a>
    </div>
    <div class="tips-click dot01"  ref="dotxy11" :style="dotxy11">
      <!-- 160 -->
      <!-- <span style="left: -155px;">万科前海企业公馆</span> -->
	  <a @click="detailProject(160)">
      <hover-detaill :title="'万科前海企业公馆'" :titleStyle="'margin-left: -250px;'" :dotId="'160'" ></hover-detaill>
      <b></b>
      <b></b>
      <b></b>
	  </a>
    </div>
    <!--<img src="@images/top.png" style="position: absolute;left: 0;top: 0;"> -->
    <!-- <img src="@images/bgright01.png" class="right-img" ref="rightImg" @load="loadImg">
    <img src="@images/bgright.png" class="right-img" ref="rightImg" @load="loadImg">-->
    <div class="right-content" ref="rightContent" >
    <div class="content-top" >
      <div class="park-amount">
        <span class="text desc">园区总量<a>（个）</a></span>
        <span class="text amout" style="font-size: 72px;">{{parkTotal}}</span>
      </div>
    </div>
    <ul class="item-list" :style="rightArea">
      <li v-for="(item,index) in itemList" :key="index" @click="checkItem(index)">
        <div class="li-item">
          <span>{{item.content1}}<a>{{item.content2}}</a></span>
          <i class="el-icon-arrow-down" style="color:#fff" v-if="idxShow !==index"></i>
          <i class="el-icon-arrow-up" style="color:#fff" v-if="idxShow==index"></i>
        </div>
        <div class="item-box" v-show="idxShow==index">
          <div class="content-center" style="height:330px">
            <div class="area-amount">
              <!-- <span class="text desc">用地面积</span> -->
              <span class="text amout">{{item.total}}</span>
            </div>
            <div>
            <div class="area-chart" :id="item.echartsId" :style="{width: '320px', height: item.height + 'px'}"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
      <!--<div class="content-bottom">
        <div class="pie-chart" id="pieChart" :style="{width: '320px', height: '280px'}"></div>
      </div>-->
    </div>
	</div>
  <div class="compareDiv" v-if="dialogTableVisible">
      <el-card class="box-card">
        <div class="content">
          <div class="item left">
            <el-row class="title">第一步：选择项目</el-row>
            <el-row class="tip"><span style="color: red;">*</span>&nbsp;最多可选12个项目</el-row>
            <el-row style="width: 70%;margin-top: 20px;">
               <el-cascader  v-model="form.project" :options="projectList" :show-all-levels="false"  ref="project" :props="{ multiple: true,checkStrictly: true }" clearable filterable></el-cascader>
            </el-row>
            <el-row style="text-align: center;margin-right: 100px;margin-top: 80px;">
              <img src="../../assets/images/project_left.png" style="width: 268px;height: 271px;"  alt="" srcset="">
            </el-row>
          </div>
          <div class="item right">
            <el-row class="title">第二步：选择维度</el-row>
            <el-row class="tip"><span style="color: red;">*</span>&nbsp;最多可选10个维度</el-row>
             <el-row style="width: 70%;margin-top: 20px;">
               <div style="max-height: 300px;overflow: auto;">
                 <el-cascader v-model="form.dimensions" :options="dimensionList" :show-all-levels="false" ref="dimension" class="myCascder" clearable>
                   <template slot-scope="{ node, data }">
                    <span v-if="!node.isLeaf">{{ data.label }}</span>
                    <span v-else @click.stop="">
                      <el-checkbox v-model="data.checked" @change="value => changeCascaderValue(value, data, node)">{{ data.label }}</el-checkbox>
                    </span>
                  </template>
                 </el-cascader>
               </div>
            </el-row>
            <el-row style="text-align: center;margin-right: 100px;margin-top: 80px;">
              <img src="../../assets/images/project_right.png" style="width: 268px;height: 271px;" alt="" srcset="">
            </el-row>
          </div>
        </div>
        <div class="bottomBtn">
          <div>
            <el-button type="primary" @click="selectContrastInfoFun">马上对比</el-button>
            <el-button type="info" @click="isvisible=true;dialogTableVisible=false;">取&nbsp;&nbsp;&nbsp;&nbsp;消</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="compareDiv" v-if="!isvisible">
      <el-card class="box-card">
        <div class="compare-content">
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column  prop="fieldName" label="对比维度" fixed width="240px"></el-table-column>
            <el-table-column v-for="(item, index) in tableHead" :prop="item.filed"  min-width="200px"  :label="item.label" max-width="120px" :key="index"></el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  <div class="clear"></div>
  </div>
</div>
</template>

<script>
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'
import * as _ from 'lodash'
import hoverDetaill from '@components/component-item/project_hover_detaill.vue'
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/grid')

export default {
  name: 'Overview',
  data () {
    return {
      dimensionsval: [],
      dimensionslabel: [],
      widthRate: '',
      heightRate: '',
	  topHeight: '',
	  rightArea:{
		  height:''
	  },
      dotxy01: {
        top: '',
        left: ''
      },
      dotxy02: {
        top: '',
        left: ''
      },
      dotxy03: {
        top: '',
        left: ''
      },
      dotxy04: {
        top: '',
        left: ''
      },
      dotxy05: {
        top: '',
        left: ''
      },
      dotxy06: {
        top: '',
        left: ''
      },
      dotxy07: {
        top: '',
        left: ''
      },
      dotxy08: {
        top: '',
        left: ''
      },
      dotxy09: {
        top: '',
        left: ''
      },
      dotxy10: {
        top: '',
        left: ''
      },
      dotxy11: {
        top: '',
        left: ''
      },
      itemList: [
        {
          content1: '用地面积',
		  content2: '（m2）',
          id: 1,
          echartsId: 'useArea',
          total: 0,
          height: 260
        },
        {
          content1: '总建筑面积',
		  content2: '（m2）',
          id: 2,
          echartsId: 'totalBuild',
          total: 0,
          height: 260
        },
        {
          content1: '企业家数',
		  content2: '（家）',
          id: 3,
          echartsId: 'complateNum',
          total: 0,
          height: 260
        },
        {
          content1: '投资规模',
		  content2: '（亿元）',
          id: 4,
          echartsId: 'inVestNum',
          total: 0,
          height: 260
        },
        {
          content1: '园区产值',
		  content2: '（亿元）',
          id: 5,
          echartsId: 'parkNum',
          total: 0,
          height: 260
        }
      ],
      idxShow: 0,
	  tempShow: 999,
      contentStyleObj: {
        top: '',
        left: ''
      },
      isvisible: true,
      dialogTableVisible: false,
      isShowClose: false,
      projectList: [],
      dimensionList: [],
      tableData: [],
      tableHead: [],
      form: {
        project: '',
        dimensions: ''
      },
      parkTotal: 0,
      sumLandUaeArea: 0,
      parkTypeObj: _D.parkTypeObj
    }
  },
  components: {
    'hover-detaill': hoverDetaill
  },
  created () {
    this.getDimensionList()
    this.getProjectList()
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
    // window.addEventListener('topmap', this.changeXy)
    // this.changeXy()
  },
  mounted () {
    this.getAreaChart()
    var that = this
    // this.changeXy()
    that.topload()
    that.changeXy()
    window.onresize = function () { // 定义窗口大小变更通知事件
      that.topload()
      that.changeXy()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  },
  methods: {
	detailProject (row) {
	  this.$router.push({ path: `projectManage/detail/${row}`, query: { t: Date.now() } })
	},
    topload () {
      // let imgWidth = this.$refs['imgSize'].offsetWidth;
      let topWidth = this.$refs.topmap.clientWidth
      this.topHeight = this.$refs.topmap.clientHeight;
      this.widthRate = topWidth / 1920
      // this.heightRate = topHeight / 1080;
      // this.widthRate = imgWidth / 1920;
      // console.log(topHeight+'px //height')
      // console.log(this.widthRate);
      // console.log(this.heightRate);
	    },
    checkItem (idx) {
      this.idxShow = idx
	  if (idx === this.tempShow) {
		  this.idxShow = 999
		  this.tempShow = 999
	  } else {
		  this.tempShow = idx
	  }
    },
    getAreaChart () {
      // debugger
      this.$axios.post(URL['selectMapRightInfo'], {}).then(resp => {
        if (resp.status === 200) {
          let _data = resp.data.data
          if (_data) {
            this.parkTotal = _data.parkTotal
            this.sumLandUaeArea = _data.sumLandUaeArea
            this.getBar(_data.userAreaMap, 'useArea', 0)
            this.getBar(_data.buildAreaMap, 'totalBuild', 1)
            this.getBar(_data.businessMap, 'complateNum', 2)
            this.getBar(_data.investmentMap, 'inVestNum', 3)
            this.getBar(_data.parkValueMap, 'parkNum', 4)
            // this.getPie(_data.parkTypeInfo)
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    getBar (_data, eid, i_index) {
      let dataObj = []
      let top10CityList = []
      let top10CityData = []
      _.map(_data.datalist, item => {
        // dataObj[item.parkname] = item.usearea
        if (item.parkname && item.fieldvalue) {
          let obj = {}
          obj.name = item.parkname
          obj.value = parseFloat(item.fieldvalue).toFixed(2)
          top10CityList.push(item.parkname)
          top10CityData.push(parseFloat(item.fieldvalue).toFixed(2))
          dataObj.push(obj)
        }
      })
      // this.itemList[i_index].height = dataObj.length *50
      this.itemList[i_index].total = _data.totalvalue
      let option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item'
        },
        grid: {
          borderWidth: 0,
          top: '10%',
          left: '1%',
          right: '30%',
          bottom: '3%'
        },
        color: '#23BEFF',
        yAxis: [{
          type: 'category',
          inverse: true,

          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            inside: false
          },
          data: top10CityList
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            inside: false,
            textStyle: {
              color: '#fff',
              fontSize: '14',
              fontFamily: 'PingFangSC-Regular'
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: top10CityData.reverse()
        }],
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [{
          name: '',
          type: 'bar',
          zlevel: 2,
          barWidth: '12px',
          data: dataObj,
          animationDuration: 1500,
          label: {
            normal: {
              color: '#fff',
              show: true,
              position: [0, '-22px'],
              textStyle: {
                fontSize: 14
              },
              formatter: function (a, b) {
                return a.name
              }
            }
          }
        }],
        animationEasing: 'cubicOut'
      }
      let myChart = echarts.init(document.getElementById(eid))
      document.getElementById(eid).height = dataObj.length * 55 + 'px'
      myChart.resize()
      myChart.setOption(option)
    },
    getPie (_data) {
      if (_data.length) {
        // 组装数据
        let legendData = []
        let seriesData = []
        _.map(_data, item => {
          legendData.push(item.parktype)
          seriesData.push({ value: item.parksum, name: item.parktype })
        })
        let option = {
          title: {
            text: '类型分布（个）',
            textStyle: {
              color: '#ffffff',
              fontSize: 16
            },
            left: 20,
            top: 10
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            textStyle: {
              color: '#ffffff'
            },
            right: 10,
            top: '10',
            itemWidth: 10,
            itemHeight: 10,
            padding: [0, 0, 0, 10],
            data: legendData // ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          color: ['#1580FA', '#7BFBC6', '#4DCFFF', '#7CF3FA', '#89F4A2'],
          series: [
            {
              name: '类型分布（个）',
              type: 'pie',
              radius: ['40%', '50%'],
              center: ['40%', '50%'],
              avoidLabelOverlap: false,
              left: 0,
              top: 0,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: seriesData
            }
          ]
        }
        let myChart = echarts.init(document.getElementById('pieChart'))
        myChart.setOption(option)
      }
    },
    compareCancel () {
      this.isvisible = true
      this.dialogTableVisible = false
      this.form.project = ''
      this.form.dimensions = ''
    },
    getHeight () {
      this.contentStyleObj.top = window.innerHeight * 0.07 + 'px'
      this.contentStyleObj.left = window.innerWidth * 0.23 + 'px'
    },
    changeXy () {
      // console.log(parseInt(curY01 * this.widthRate) + 'px');
		  this.dotxy01.top = 405 * this.widthRate + 'px'
	  	  this.dotxy01.left = 370 * this.widthRate + 'px'
	  	  this.dotxy02.top = 535 * this.widthRate + 'px'
	  	  this.dotxy02.left = 510 * this.widthRate + 'px'
	  	  this.dotxy03.top = 555 * this.widthRate + 'px'
	  	  this.dotxy03.left = 680 * this.widthRate + 'px'
	  	  this.dotxy04.top = 525 * this.widthRate + 'px'
	  	  this.dotxy04.left = 815 * this.widthRate + 'px'
	  	  this.dotxy05.top = 640 * this.widthRate + 'px'
	  	  this.dotxy05.left = 360 * this.widthRate + 'px'
	  	  this.dotxy06.top = 680 * this.widthRate + 'px'
	  	  this.dotxy06.left = 375 * this.widthRate + 'px'
	  	  this.dotxy07.top = 720 * this.widthRate + 'px'
	  	  this.dotxy07.left = 360 * this.widthRate + 'px'
	  	  this.dotxy08.top = 690 * this.widthRate + 'px'
	  	  this.dotxy08.left = 536 * this.widthRate + 'px'
	  	  this.dotxy09.top = 740 * this.widthRate + 'px'
	  	  this.dotxy09.left = 400 * this.widthRate + 'px'
	  	  this.dotxy10.top = 760 * this.widthRate + 'px'
	  	  this.dotxy10.left = 340 * this.widthRate + 'px'
	  	  this.dotxy11.top = 770 * this.widthRate + 'px'
	  	  this.dotxy11.left = 280 * this.widthRate + 'px'
		  this.rightArea.height = (this.topHeight * 0.71 - 100 ) + 'px'
		  //console.log(this.rightArea.height+'//right height')
    },
    exportResult () {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../vender/Export2Excel.js')
        let tHeader = ['维度']
        let filterVal = ['fieldName']
        let tablePro = this.tableHead
        for (let i = 0; i < tablePro.length; i++) {
          tHeader.push(tablePro[i].label)
          filterVal.push(tablePro[i].filed
          )
        }
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        let nowDate = new Date()
        let month = (nowDate.getMonth() + 1) + ''
        let date = nowDate.getDate() + ''
        let year = nowDate.getFullYear()
        if (month.length === 1) {
          month = '0' + month
        }
        if (date.length === 1) {
          date = '0' + date
        }
        let excelName = '对比结果' + year + month + date
        export_json_to_excel(tHeader, data, excelName)
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    closeCompare () {
      this.isvisible = true
      this.form.project = ''
      this.form.dimensions = ''
    },
    chooseDimen () {
      this.isvisible = true
      this.dialogTableVisible = true
    },
    selectContrastInfoFun () {
      this.tableHead = []
      if (!this.form.project.length) {
        this.$alert('请选择项目', '标题', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return
      }
      if (this.dimensionsval.length == 0) {
        this.$alert('请选择维度', '标题', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return
      }
      if (this.dimensionsval.length > 10) {
        this.$alert('维度最多只能选择10个', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return
      }
      if (this.form.project.length > 12) {
        this.$alert('项目最多只能选择12个', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return
      }
      this.dialogTableVisible = false
      this.isvisible = false
      let dimen = this.dimensionsval
      let fieldids = ''
      let projectArr = []
      let project = ''
      // for (let i = 0; i < this.form.dimensions.length; i++) {
      //   dimen.push(this.form.dimensions[i][2])
      // }
      for (let i = 0; i < this.form.project.length; i++) {
        projectArr.push(this.form.project[i][1])
      }
      project = projectArr.join(',')
      fieldids = dimen.join(',')
      let param = {
        projectids: project,
        fieldids: fieldids
      }
      this.$axios.get(URL['selectContrastInfo'], { params: param }).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1 && resp.data.data) {
            let resData = resp.data.data
            let headObj = resData[0]
            for (let item in headObj) {
              if (headObj.hasOwnProperty(item)) {
                if (headObj[item] === '对比维度') {
                  // this.tableHead.unshift({ filed: item, label: headObj[item] })
                } else {
                  this.tableHead.push({ filed: item, label: headObj[item] })
                }
              }
            }
            this.tableData = resData.slice(1)
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    getDimensionList () {
      this.$axios.post(URL['selectContrastField'], {}).then(resp => {
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1 && resp.data.data) {
            this.dimensionList = this.getTreeData(resp.data.data, '-1')
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    getTreeData (data, pid) {
      let tree = []
      data.forEach(e => {
        if (pid === e.parentid) {
          let arr = this.getTreeData(data, e.fieldid)
          if (arr.length) {
            tree.push({ value: e.fieldid, label: e.fieldname, children: arr })
          } else {
            tree.push({ value: e.fieldid, label: e.fieldname })
          }
        }
      })
      return tree
    },
    getProjectList () {
      this.$axios.get(URL['selectCityProject']).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.code === 1 && resp.data.data) {
            let resData = resp.data.data
            let fun = (data) => {
              let tree = []
              data.forEach(elem => {
                if (elem.children) {
                  let arr = fun(elem.children)
                  if (arr.length) {
                    tree.push({ value: elem.value, label: elem.label, children: arr })
                  } else {
                    tree.push({ value: elem.value, label: elem.label })
                  }
                }
              })
              return tree
            }
            this.projectList = fun(resData)
          } else {
            this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    changeCascaderValue (value, data, node) {
      if (value) {
        this.dimensionsval.push(data.value)
        if (node.parent && node.parent.parent) {
          this.dimensionslabel.push(node.parent.parent.label + '/' + node.parent.label + '/' + data.label)
        } else {
          this.dimensionslabel.push(data.label)
        }
      } else {
        let index = this.dimensionsval.indexOf(data.value)
        this.dimensionsval.splice(index, 1)
        this.dimensionslabel.splice(index, 1)
      }
      this.$nextTick(() => {
        document.querySelector(".myCascder input[type='text'].el-input__inner").value = this.dimensionslabel.join(',')
      })
    }
  }
}
</script>
<style  lang="scss">
// .el-popper>.el-cascader-panel>.el-scrollbar>.el-cascader-menu__wrap>ul>li>label{
// 	display:none;
// }
.el-popper .el-icon-check{display:none;}
.el-popper .el-cascader-node__label{padding-left:0;}
.area-chart{margin-top:-35px;}
.item-list{
  text-align:left;
  height: 550px;
  overflow: auto;
  overflow-y: visible;
  height: 450px;
}
.item-list li{
  position:relative;
    padding-left: 30px;
    font-weight: bold;
    font-size: 18px;
    line-height: 48px;
    color: #fff;
    border-top: 5px solid rgba(0,0,0,.3);
    cursor: pointer;
    padding-right: 20px;
	background: rgba(19, 125, 240, 0.2);
	overflow:hidden;
}
.item-list li::before{
  position:absolute;
  top: 24px;
  left: 0;
  margin-top: -2px;
  content:'';
  display:inline-block;
  width:14px;
  height:4px;
  background:rgba(255, 525, 255, 0.38);
}
.item-list .li-item{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.item-list .li-item span a{
	font-size:16px;
	font-weight:normal;
}
 .compare-content table {
    thead tr th{
     background-color: #EFEFF0;
     font-weight: bold;
     height: 60px;
     text-align: center;
     color: #444444;
     font-size: 18px;
     &:first-child{
       text-align: left;
       padding-left: 10px;
     }
  }
  tbody tr td{
    text-align: center;
     &:first-child{
       text-align: left;
       padding-left: 10px;
     }
  }
 }
</style>

<style lang="scss" scoped>
.park-outter{
	background-color:#1f231d;
	width:100%;
	height:100%;
}
.topmap{
  width: 100%;
  max-width:1920px;
  overflow: hidden;
  position: relative;
  margin-top: -100px;
}
.topmap img{
	width:100%;
	height:auto;
	//margin-top: -100px;
}
.yqbg{
  // background:url("~@images/map2.png") no-repeat center center;
  position: relative;
  height:100%;
  width:100%;
  max-width:1920px;
  margin:0 auto;
  //background-size: 100%;
  // background-repeat: no-repeat;
  background-color:#1f231d;
  text-align:center;
  overflow: hidden;
}
.mid-img{
  position: absolute;
  top:50%;
  left: 50%;
  max-width: 98%;
  //max-height: 99%;
  transform: translate(-50%, -50%);
}
.btn-group{
  position: absolute;
  left: 60px;
  top: 30px;
  z-index: 2002;
  overflow: hidden;
}
.clear{
  clear: both;
  width: 100%;
  margin: 0 auto;
}
.right-img, .right-content{
  position:absolute;
  right:40px;
  top:100px;
  //height:81%;
  width:375px;
  //background: rgba(19, 125, 240,0.2)
}
.right-content {
  // border: 1px solid white;
  .content-top{
    height: 15%;
	padding: 12% 0 2% 36px;
	background: rgba(19, 125, 240, 0.2);
    // border-bottom: 1px solid white;
    .park-amount {
      //height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: flex-end;
      align-content: flex-end;
      color: white;
      .text {
        text-align: left;
        &.desc {
          font-size: 18px;
		  font-weight: bold;
        }
		&.desc a{
			font-weight:normal;
			font-size:16px;
		}
        &.amout {
          font-size: 44px;
          font-weight: bold;
        }
      }
    }
  }
  .content-center {
    height: 40%;
    // border-bottom: 1px solid white;
    //padding-left: 36px;
    padding-top: 5px;
    .area-amount{
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      color: white;
      font-weight: bold;
      // justify-content: flex-start;
      .desc {
        display: flex;
        font-size: 18px;
        margin:5px 0px;
		font-weight:bold;
      }
      .amout {
        display: flex;
        font-size: 44px;
		margin: 10px 0 30px;
      }
    }
  }
  .content-bottom {
    height: 34%;
    // border-bottom: 1px solid white;
    // background:;
  }
}
  ::-webkit-scrollbar {
  width: 6px
}
  ::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.2);
}
  ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
.compareDiv {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  margin-top: 20vh;
  width: 100%;
  height: 70vh;
  text-align: center;
  .box-card {
    width: 78%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .content{
      display: flex;
      flex-direction: row;
      height: 100%;
      justify-content: space-around;
      padding: 100px 0px 0px 0px;
      height: 471px;
      .item {
        display: inline-block;
        text-align: left;
        width: 50%;
        margin-left: 8%;
        .title {
          font-size: 20px;
          font-weight: 1000;
          color: #444444;
          margin-bottom: 5px;
        }
        .tip{
          font-size: 12px;
          color: #656B7F;
        }
      }
      .left {
        border-right: 1px dotted #DDDDDD;
      }
    }
  }
  .bottomBtn{
   position: absolute;
   margin-left: calc(50% - 102px);
   bottom: 20px;
   padding: 10px 0px;
  }
}
.dot01{
  position: absolute;
}
.tips-click{
  width: 15px;
  height: 15px;
  cursor: pointer;
  //margin:120px auto 0;
  //position: absolute;
}
.tips-click span{
  color: #fff;
  /* font-weight: bold; */
  font-size: 12px;
  position: absolute;
  left: -34px;
  top: 0px;
  /* -webkit-transform: translate(-50%, -50%); */
  /* transform: translate(-50%, -50%); */
  z-index: 2;
  width: 200px;
}
  .tips-click b{
    width: 100%;
    height:100%;
    background: #f8f015;
    border-radius: 50%;
    display: block;
    background-color: rgba(248, 240, 21, .6);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
.tips-click b:nth-of-type(1){
  -webkit-animation: click1 1s linear infinite;
  animation: click1 1s linear infinite;
  }
  .tips-click b:nth-of-type(2){
  -webkit-animation: click2 1s linear infinite;
  animation: click2 1s linear infinite;
  }

  @-webkit-keyframes click1 {
    0% {
      opacity: .8;
      -webkit-transform: scale(1);
      transform: scale(1);
    }100% {
      opacity: 0;
      -webkit-transform: scale(2);
      transform: scale(2);
    }
  }

  @keyframes click1 {
      0% {
          opacity: .8;
          -webkit-transform: scale(1);
          transform: scale(1);
      }
      100% {
          opacity: 0;
          -webkit-transform: scale(2);
          transform: scale(2);
      }
  }

  @-webkit-keyframes click2 {
      0% {
          opacity: .8;
          -webkit-transform: scale(1);
          transform: scale(1);
      }
      100% {
          opacity: 0;
          -webkit-transform: scale(3);
          transform: scale(3);
      }
  }

  @keyframes click2 {
      0% {
          opacity: .8;
          -webkit-transform: scale(1);
          transform: scale(1);
      }
      100% {
          opacity: 0;
          -webkit-transform: scale(3);
          transform: scale(3);
      }
  }

</style>
