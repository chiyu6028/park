<template>
  <div class="park-content" v-loading="isloading" element-loading-text="下载中......">
    <div class="box-content">
      <el-row :gutter="24">
        <div class="info-title">产业规划方案</div>
        <el-col :span="24" class="r-box">
          <div class="right-content">
            <ul class="img-list">
              <li><el-button :type="industryschemeFlag" @click="downLoadAll(form.industryschemeArr,'产业规划方案')">下载全部</el-button></li>
              <li v-for="(tag,idx) in form.industryschemeArr" :key="idx">
                <span>
                  <i class="el-icon-paperclip attapath-icon-first"></i>
                  <span>{{tag.attrealname}}</span>
                  <a :href="url + tag.attpath" :download="tag.attrealname"><i class="el-icon-download attapath-icon-second"></i></a>
                </span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <div class="info-title">规划设计方案</div>
        <el-col :span="24" class="r-box">
          <div class="right-content">
            <ul class="img-list">
              <li><el-button :type="planschemeFlag" @click="downLoadAll(form.planschemeArr,'规划设计方案')">下载全部</el-button></li>
              <li v-for="(tag,idx) in form.planschemeArr" :key="idx">
                 <span>
                  <i class="el-icon-paperclip attapath-icon-first"></i>
                  <span>{{tag.attrealname}}</span>
                  <a :href="url + tag.attpath" :download="tag.attrealname"><i class="el-icon-download attapath-icon-second"></i></a>
                </span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <div class="info-title">建筑设计方案</div>
        <el-col :span="24" class="r-box"><div class="right-content">
          <ul class="img-list">
            <li><el-button :type="buildschemeFlag" @click="downLoadAll(form.buildschemeArr,'建筑设计方案')">下载全部</el-button></li>
            <li v-for="(tag,idx) in form.buildschemeArr" :key="idx">
               <span>
                  <i class="el-icon-paperclip attapath-icon-first"></i>
                  <span>{{tag.attrealname}}</span>
                  <a :href="url + tag.attpath" :download="tag.attrealname"><i class="el-icon-download attapath-icon-second"></i></a>
                </span>
            </li>
          </ul>
        </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <div class="info-title">环境设计方案</div>
        <el-col :span="24" class="r-box"><div class="right-content">
          <ul class="img-list">
            <li><el-button :type="environschemeFlag" @click="downLoadAll(form.environschemeArr,'环境设计方案')">下载全部</el-button></li>
            <li v-for="(tag,idx) in form.environschemeArr" :key="idx">
              <span>
                  <i class="el-icon-paperclip attapath-icon-first"></i>
                  <span>{{tag.attrealname}}</span>
                  <a :href="url + tag.attpath" :download="tag.attrealname"><i class="el-icon-download attapath-icon-second"></i></a>
                </span>
            </li>
          </ul>
        </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <div class="info-title">招商运营方案</div>
        <el-col :span="24" class="r-box"><div class="right-content">
          <ul class="img-list">
            <li><el-button :type="investschemeFlag" @click="downLoadAll(form.investschemeArr,'招商运营方案')">下载全部</el-button></li>
            <li v-for="(tag,idx) in form.investschemeArr" :key="idx">
              <span>
                  <i class="el-icon-paperclip attapath-icon-first"></i>
                  <span>{{tag.attrealname}}</span>
                  <a :href="url + tag.attpath" :download="tag.attrealname"><i class="el-icon-download attapath-icon-second"></i></a>
                </span>
            </li>
          </ul>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import URL from '@config/urlConfig.js'
import config from '@config/index.js'
import * as _ from 'lodash'

export default {
  name: 'information',
  data () {
    return {
      url: '',
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
      },
      isloading: false,
      industryschemeFlag: 'info',
      planschemeFlag: 'info',
      buildschemeFlag: 'info',
      environschemeFlag: 'info',
      investschemeFlag: 'info'
    }
  },
  mounted (id) {
    this.initForm(this.$route.params.id)
    this.url = config.baseUrl.dev_static_ip
  },
  methods: {
    downLoadAll (arr, fileName) {
      if (arr.length) {
        let paramArr = _.map(arr, item => item.attid)
        this.isloading = true
        this.$axios.get(URL['downloadFiles'], { params: { fileids: paramArr.join(',') }, responseType: 'blob' }).then(resp => {
          if (resp.status === 200) {
            if (resp.data) {
              let excelData = resp.data
              const reader = new FileReader()
              let fileSuffix = '.zip'
              let filename = resp.headers['content-disposition'].split('; ')[1]
              if (filename) {
                fileSuffix = '.' + filename.match(/zip|rar/)[0]
              }
              reader.readAsDataURL(excelData)
              reader.onload = e => {
                const a = document.createElement('a')
                a.download = fileName + fileSuffix
                a.href = e.target.result
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                this.isloading = false
              }
            } else {
              this.$message.error('系统异常，请联系管理员！')
            }
          } else {
            this.$message.error('系统异常，请联系管理员！')
          }
        })
      }
    },
    initForm (id) {
      this.$axios.post(URL['SELECT_SCHEMEMATER_MATER_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            this.form = resp.data.data
            this.industryschemeFlag = this.form.industryschemeArr.length ? 'primary' : 'info'
            this.planschemeFlag = this.form.planschemeArr.length ? 'primary' : 'info'
            this.buildschemeFlag = this.form.buildschemeArr.length ? 'primary' : 'info'
            this.environschemeFlag = this.form.environschemeArr.length ? 'primary' : 'info'
            this.investschemeFlag = this.form.investschemeArr.length ? 'primary' : 'info'
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
  .info-title {
    color: #656B7F;
    font-size: 14px;
    margin-bottom: 10px;
  }
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
  border: 1px solid #ECF1F2;
  // padding: 20px 0 10px;
  margin-bottom: 20px;
  &.r-box2{
    border-bottom:none;
    padding-top: 10px;
  }
  .right-content{
    flex: 1;
    line-height: 24px;
  }
  .img-list{
    padding: 10px;
    display: flex;
    &.tb{
      margin-left: -80px;
    }
    li{
      padding-top: 10px;
      .attapath-icon-first{
        margin-right: 10px;
        font-size: 16px;
      }
      .attapath-icon-second{
        margin-left: 10px;
        font-size: 16px;
        cursor: pointer;
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
