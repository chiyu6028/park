<template>
  <div class="park-content">
    <!-- 产业规划 -->
    <div class="box-content">
      <div class="title">产业规划</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">产业规划理念：<div class="right-content">{{form.planconcept}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">产业定位：<div class="right-content">{{form.planlocation}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">发展目标：<div class="right-content">{{form.depgoal}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">产业体系：<div class="right-content">{{form.industrysystem}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">业态组成：<div class="right-content">{{form.formatcomposition}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">产业发展路径：<div class="right-content">{{form.deppath}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">产业政策：<div class="right-content">{{form.deppolicy}}</div></el-col>
        <el-col :span="24" class="r-box">项目区位：<div class="right-content">
          <span>{{form.location}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.locationimgesArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 产业规划小结 -->
    <div class="box-content">
      <div class="title">产业规划小结</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box">产业规划团队：<div class="right-content">{{form.depteam}}</div></el-col>
        <el-col :span="24" class="r-box">产业规划亮点：<div class="right-content">
            <span>{{form.planadvantage}}</span>
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

export default {
  name: 'industrialPlanning',
  data () {
    return {
      url: '/downloadFile?filePath=',
      form: {
        planconcept: '',
        planlocation: '',
        depgoal: '',
        industrysystem: '',
        formatcomposition: '',
        deppath: '',
        deppolicy: '',
        depteam: '',
        location: '',
        locationimges: '',
        locationimgesArr: [],
        planadvantage: '',
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
      this.$axios.post(URL['SELECT_INDUSTRIAL_PLAN_INFO'], { projectid: id || this.projectid }).then(resp => {
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
