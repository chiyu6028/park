<template>
	<div class="park-content">
	  <div class="box-content">
		  <div class="title">产业规划方案</div>
	<el-row :gutter="24">
	  <el-col :span="24" class="r-box"><div class="right-content">
	      <span>{{form.industryschemeArr}}</span>
	    </div>
	    </el-col>
		</el-row>
		<div class="title">规划设计方案</div>
		<el-row :gutter="24">
	    <el-col :span="24" class="r-box"><div class="right-content">
	      <span>{{form.planschemeArr}}</span>
	    </div>
	    </el-col>
		</el-row>
		<div class="title">建筑设计方案</div>
		<el-row :gutter="24">
		<el-col :span="24" class="r-box"><div class="right-content">
		  <span>{{form.buildschemeArr}}</span>
		</div>
		</el-col>
		</el-row>
		<div class="title">环境设计方案</div>
		<el-row :gutter="24">
		<el-col :span="24" class="r-box"><div class="right-content">
		  <span>{{form.environschemeArr}}</span>
		</div>
		</el-col>
		</el-row>
		<div class="title">招商运营方案</div>
		<el-row :gutter="24">
		<el-col :span="24" class="r-box"><div class="right-content">
		  <span>{{form.industryschemeArr}}</span>
		</div>
		</el-col>
	</el-row>
	</div></div>
</template>

<script>
import { mapState } from 'vuex'
import URL from '@config/urlConfig.js'

export default {
  name: 'information',
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
        industryscheme: '',
        industryschemeArr: [],
        planscheme: '',
        planschemeArr: [],
        buildscheme: '',
        buildschemeArr: [],
        environscheme: '',
        environschemeArr: [],
        investscheme: '',
        investschemeArr: []
      }
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  mounted (id) {
    if (this.$route.path.indexOf('/editProject/') !== -1) {
      this.initForm(this.$route.params.id)
    }
  },
  methods: {
    initForm (id) {
      this.$axios.post(URL['SELECT_SCHEMEMATER_MATER_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form = resp.data.data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    onSubmit () {
      this.$axios.post(URL['INSERT_SCHEME_MATERIAL'], { ...this.form, projectid: this.projectid }).then(resp => {
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
