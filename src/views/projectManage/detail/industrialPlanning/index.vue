<template>
  <div class="park-content">
    <!-- 产业规划 -->
    <div class="box-content">
      <div class="title">产业规划</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业规划理念：</span><span>{{form.planconcept}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业定位：</span><span>{{form.planlocation}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">发展目标：</span><span>{{form.depgoal}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业体系：</span><span>{{form.industrysystem}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">业态组成：</span><span>{{form.formatcomposition}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业发展路径：</span><span>{{form.deppath}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业政策：</span><span>{{form.deppolicy}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box">
          <div class="right-content">
            <div><span class="cont-title">项目区位：</span><span>{{form.location}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.locationimgesArr" :key="idx">
              <el-image style="width: 300px; height: 180px;"  :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
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
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业规划团队：</span><span>{{form.depteam}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业规划亮点：</span><span>{{form.planadvantage}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">产业规划不足：</span><span>{{form.deficiencies}}</span>
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
  //border-bottom: 1px solid #ECF1F2;
      padding: 10px 0 0px;
  &.r-box2{
    border-bottom:none;
    padding-top: 10px;
  }
  .right-content{
    flex: 1;
    line-height: 24px;
    .cont-title{
      color:#999999;
    }
  }
  .img-list{
    margin: 10px 15px 0px -10px;
    // display: flex;
    margin-left: -10px;
    &.tb{
      margin-left: -80px;
    }
    li{
      float: left;
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
