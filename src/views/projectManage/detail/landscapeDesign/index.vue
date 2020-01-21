<template>
  <div class="park-content">
    <!-- 总体景观设计 -->
    <div class="box-content">
      <div class="title">总体景观设计</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">设计团队：<div class="right-content">{{form.designteam}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">环境设计理念与策略：<div class="right-content">
          <span>{{form.gideasstrategy}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.gideasstrategyimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">总平面图：<div class="right-content">
          <span>{{form.generallayout}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.generallayoutimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">功能结构：<div class="right-content">
          <span>{{form.gfuncstructure}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.gfuncstructureimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 重要节点景观设计 -->
    <div class="box-content">
      <div class="title">重要节点景观设计</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">核心景观设计：<div class="right-content">{{form.coredesign}}</div></el-col>
        <el-col :span="24" class="r-box r-box2">园区入口设计：<div class="right-content">
          <span>{{form.entrydesign}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.entrydesignimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">公共平台/空间设计：<div class="right-content">
          <span>{{form.pubspacedesign}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.pubspacedesignimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">屋顶景观设计：<div class="right-content">
          <span>{{form.roofdesign}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.roofdesignimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">外立面景观设计：<div class="right-content">
          <span>{{form.sketchdesign}}</span>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.sketchdesignimgArr" :key="idx">
              <img :src="url+tag.attpath">
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 景观设计小结 -->
    <div class="box-content">
      <div class="title">景观设计小结</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box">投资亮点：<div class="right-content">
            <span>{{form.gardenadvantage}}</span>
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
  name: 'parkview',
  data () {
    return {
      url: '/downloadFile?filePath=',
      form: {
        designteam: '',
        gideasstrategy: '',
        gideasstrategyimg: '',
        gideasstrategyimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        gfuncstructure: '',
        gfuncstructureimg: '',
        gfuncstructureimgArr: [],
        coredesign: '',
        coredesignimg: '',
        coredesignimgArr: [],
        entrydesign: '',
        entrydesignimg: '',
        entrydesignimgArr: [],
        pubspacedesign: '',
        pubspacedesignimg: '',
        pubspacedesignimgArr: [],
        roofdesign: '',
        roofdesignimg: '',
        roofdesignimgArr: [],
        sketchdesign: '',
        sketchdesignimg: '',
        sketchdesignimgArr: [],
        gardenadvantage: '',
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
      this.$axios.post(URL['SELECT_GARDEN_DESIGN_INFO'], { projectid: id || this.projectid }).then(resp => {
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
