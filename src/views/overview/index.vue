<template>
  <div class="yqbg">
    <div class="btn-group">
      <el-button type="primary" v-if="isvisible"  round @click="dialogTableVisible = true">多维对比</el-button>
      <el-button type="primary" v-if="!isvisible"  round @click="chooseDimen">选择维度</el-button>
      <el-button type="primary" v-if="!isvisible"  round @click="exportResult">结果导出</el-button>
      <el-button type="info"  v-if="!isvisible" round @click="closeCompare">关闭对比</el-button>
    </div>
    <div>
      <img src="@images/maptop.png" style="height:100%;">
      <img src="@images/bgright.png" class="right-img">
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
  </div>
</template>

<script>
import URL from '@config/urlConfig.js'
export default {
  name: 'Overview',
  data () {
    return {
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
      }
    }
  },
  created () {
    this.getDimensionList()
    this.getProjectList()
  },
  methods: {
    compareCancel () {
      this.isvisible = true
      this.dialogTableVisible = false
      this.form.project = ''
      this.form.dimensions = ''
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
.yqbg{
  position:relative;
  background-image:url("~@images/map.png");
  height:100%;
  width:100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color:#171717;
  text-align:center;
}
.btn-group{
  position: absolute;
  left: 60px;
  top: 30px;
  z-index: 2002;
}
.right-img{
  position:absolute;
  right:20px;
  top:40px;
  height:89%;
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
</style>
