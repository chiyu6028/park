<template>
  <div class="park-content">
    <!-- 总体景观设计 -->
    <div class="box-content">
      <div class="title">总体景观设计</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
             <div><span class="cont-title">景观设计理念与策略：</span><span>{{form.gideasstrategy}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.gideasstrategyimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">景观总平面图：</span><span>{{form.generallayout}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.generallayoutimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">景观功能结构：</span><span>{{form.gfuncstructure}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.gfuncstructureimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
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
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">核心景观设计：</span><span>{{form.coredesign}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">园区入口设计：</span><span>{{form.entrydesign}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.entrydesignimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">公共平台/连廊空间设计：</span><span>{{form.pubspacedesign}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.pubspacedesignimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">屋顶绿化设计：</span><span>{{form.roofdesign}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.roofdesignimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
            </li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
            <div><span class="cont-title">景观小品设计：</span><span>{{form.sketchdesign}}</span></div>
          <ul class="img-list">
            <li v-for="(tag,idx) in form.sketchdesignimgArr" :key="idx">
              <el-image style="width: 300px; height: 180px;" :src="url+tag.attpath" :preview-src-list="[url+tag.attpath]"></el-image>
              <div class="text">{{tag.attdis}}</div>
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
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">景观设计团队：</span><span>{{form.designteam}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">景观设计亮点：</span><span>{{form.gardenadvantage}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">
          <div class="right-content">
          <span class="cont-title">景观设计不足：</span><span>{{form.deficiencies}}</span>
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
      // img{
      //   width: 300px;
      //    height: 180px;
      // }
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
