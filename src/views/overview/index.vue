<template>
  <div class="yqbg">
    <div class="btn-group">
      <el-button type="primary" v-if="isvisible"  round @click="dialogTableVisible = true">多维对比</el-button>
      <el-button type="primary" v-if="!isvisible"  round @click="chooseDimen">选择维度</el-button>
      <el-button type="primary" v-if="!isvisible"  round @click="exportResult">结果导出</el-button>
      <el-button type="info"  v-if="!isvisible" round @click="closeCompare">关闭对比</el-button>
    </div>
  <div class="topmap">
    <div class="tips-click dot01" style="top:55px;left:305px;">
      <span>华强创意产业园</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:153px;left:443px;">
      <span style="left: -44px;">宝能科技城</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:160px;left:563px;">
      <span style="left: -13px;">平湖恒路物流创新广场</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:145px;left:670px;">
      <span>启迪协信科技园</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:230px;left:293px;">
      <span style="left: -50px;">创智云城</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:258px;left:293px;">
      <span style="left: -26px;">南山科技创新中心</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:306px;left:285px;">
      <span style="left: -38px;">创智天地大厦</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:290px;left:460px;">
      <span style="left: -20px;">长城开发彩田工业园</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:327px;left:312px;">
      <span style="left: -25px;">深圳湾科技生态园</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:352px;left:276px;">
      <span style="left: -18px;">深圳市软件产业基地</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <div class="tips-click dot01" style="top:332px;left:239px;">
      <span style="left: -155px;">万科前海企业公馆</span>
      <b></b>
      <b></b>
      <b></b>
    </div>
    <img src="@images/top.png" style="position: absolute;left: 0;top: 0;">
    <!-- <img src="@images/bgright01.png" class="right-img" ref="rightImg" @load="loadImg"> -->
    <img src="@images/bgright.png" class="right-img" ref="rightImg" @load="loadImg">
    <div class="right-content" ref="rightContent" >
      <div class="content-top" >
        <div class="park-amount">
          <span class="text desc">园区总量(个)</span>
          <span class="text amout">{{parkTotal}}</span>
          <span class="text">&nbsp;</span>
        </div>
      </div>
      <div class="content-center">
        <div class="area-amount">
           <span class="text desc">用地面积</span>
          <span class="text amout">{{sumLandUaeArea}}</span>
        </div>
        <div class="area-chart" id="areaChart" :style="{width: '320px', height: '400px'}"></div>
      </div>
      <div class="content-bottom">
        <div class="pie-chart" id="pieChart" :style="{width: '320px', height: '280px'}"></div>
      </div>
    </div>
  </div>
  <div class="compareDiv" v-if="dialogTableVisible">
      <el-card class="box-card">
        <div class="content">
          <div class="item left">
            <el-row class="title">选择项目</el-row>
            <el-row class="tip"><span style="color: red;">*</span>&nbsp;最多可选12个项目</el-row>
            <el-row style="width: 70%;margin-top: 20px;">
               <el-cascader  v-model="form.project"  :options="projectList"  ref="project" :props="{ multiple: true }" clearable></el-cascader>
            </el-row>
            <el-row style="text-align: center;margin-right: 100px;margin-top: 80px;">
              <img src="../../assets/images/project_left.png" style="width: 268px;height: 271px;"  alt="" srcset="">
            </el-row>
          </div>
          <div class="item right">
            <el-row class="title">选择维度</el-row>
            <el-row class="tip"><span style="color: red;">*</span>&nbsp;最多可选10个维度</el-row>
             <el-row style="width: 70%;margin-top: 20px;">
               <div style="max-height: 300px;overflow: auto;">
                 <el-cascader v-model="form.dimensions" :options="dimensionList" ref="dimension" :props="{ multiple: true }" clearable ></el-cascader>
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
</template>

<script>
import URL from '@config/urlConfig.js'
import * as _D from '@config/dictionaries'
import * as _ from 'lodash'
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
  created () {
    this.getDimensionList()
    this.getProjectList()
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  mounted () {
    this.getAreaChart()
  },
  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  },
  methods: {
    getAreaChart () {
      this.$axios.post(URL['selectProjectInfoMap'], {}).then(resp => {
        if (resp.status === 200) {
          let _data = resp.data.data
          if (_data) {
            this.parkTotal = _data.parkTotal
            this.sumLandUaeArea = _data.sumLandUaeArea
            this.getBar(_data)
            this.getPie(_data.parkTypeInfo)
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    getBar (_data) {
      let dataObj = {}

      _.map(_data.parkInfo, item => {
        dataObj[item.parkname] = item.usearea
      })
      let option = {
        tooltip: {},
        grid: [{
          top: 20,
          width: '100%',
          bottom: '45%',
          left: -100,
          containLabel: true
        }, {
          top: '55%',
          width: '100%',
          bottom: 0,
          left: -100,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: _data.sumLandUaeArea,
          show: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff'
            }
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(dataObj), // Object.keys(builderJson.charts),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          show: false,
          // position: 'right',
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff'
            }
          }
        }],
        color: ['#23BEFF'],
        series: [{
          type: 'bar',
          stack: 'chart',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          barWidth: '10',
          data: Object.keys(dataObj).map(function (key) {
            return dataObj[key]
          })
        }, {
          type: 'bar',
          stack: 'chart',
          silent: true,
          itemStyle: {
            normal: {
              color: '#22323F'
            }
          },
          data: Object.keys(dataObj).map(function (key) {
            return _data.sumLandUaeArea - dataObj[key]
          })
        }]
      }
      let myChart = echarts.init(document.getElementById('areaChart'))
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
    loadImg () {
      this.$refs.rightContent.style.width = this.$refs.rightImg.clientWidth + 'px'
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
      if (!this.form.dimensions.length) {
        this.$alert('请选择维度', '标题', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return
      }
      if (this.form.dimensions.length > 10) {
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
      let dimen = []
      let fieldids = ''
      let projectArr = []
      let project = ''
      for (let i = 0; i < this.form.dimensions.length; i++) {
        dimen.push(this.form.dimensions[i][2])
      }
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
    }
  }
}
</script>
<style  lang="scss">
 .compare-content table {
    thead tr th{
     background-color: #EFEFF0;
     font-weight: bold;
     height: 60px;
     text-align: center;
     color: #444444;
     font-size: 16px;
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
.topmap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.yqbg{
  position:relative;
  background-image:url("~@images/map.png");
  height:100%;
  width:100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color:#171717;
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
  right:20px;
  top:-20px;
  height:95%;
}
.right-content {
  // border: 1px solid white;
  .content-top{
    height: 24%;
    margin-top: 20px;
    // border-bottom: 1px solid white;
    padding-left: 36px;
    .park-amount {
      height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: flex-end;
      align-content: flex-end;
      color: white;
      .text {
        text-align: left;
        &.desc {
          font-size: 16px;
        }
        &.amout {
          font-size: 32px;
          font-weight: bold;
        }
      }
    }
  }
  .content-center {
    height: 40%;
    // border-bottom: 1px solid white;
    padding-left: 36px;
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
        font-size: 16px;
        margin:5px 0px;
      }
      .amout {
        display: flex;
        font-size: 32px;
      }
    }
  }
  .content-bottom {
    height: 34%;
    // border-bottom: 1px solid white;
    // background:;
  }
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
  margin:120px auto 0;
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
