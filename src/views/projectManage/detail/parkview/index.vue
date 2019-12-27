<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">项目ID:dddd</el-col>
        <el-col :span="6" class="info-li">园区名称:dddd</el-col>
        <el-col :span="6" class="info-li">园区类型:dddd</el-col>
        <el-col :span="6" class="info-li">项目地址:dddd</el-col>
        <el-col :span="6" class="info-li">发布时间:dddd</el-col>
        <el-col :span="6" class="info-li">建成时间:dddd</el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="4">园区介绍:dddd</el-col>
      </el-row>
    </div>
    <!-- 技术指标 -->
    <div class="box-content">
      <div class="title">技术指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地性质:dddd</el-col>
        <el-col :span="6" class="info-li">用地面积:dddd</el-col>
        <el-col :span="6" class="info-li">总建筑面积:dddd</el-col>
        <el-col :span="6" class="info-li">绿化率:dddd</el-col>
        <el-col :span="6" class="info-li">容积率:dddd</el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">项目区位:对对对
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">用地范围:的对的呃呃
        </el-col>
      </el-row>
    </div>
     <!-- 园区经济指标 -->
    <div class="box-content">
      <div class="title">园区经济指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">主导产业:dddd</el-col>
        <el-col :span="6" class="info-li">主导功能:dddd</el-col>
        <el-col :span="6" class="info-li">投资主体:dddd</el-col>
        <el-col :span="6" class="info-li">运营主体:dddd</el-col>
        <el-col :span="6" class="info-li">运营模式:dddd</el-col>
        <el-col :span="6" class="info-li">企业数量:dddd</el-col>
        <el-col :span="6" class="info-li">投资规模:dddd</el-col>
        <el-col :span="6" class="info-li">园区产值:dddd</el-col>
      </el-row>
    </div>
    <!-- 相册 -->
    <div class="box-content">
      <div class="title">相册</div>
      <div v-for="(item,index) in imgList" :key="index">
        <div>{{item.title}}</div>
        <el-row :gutter="24" class="imglist">
          <el-col :span="6" v-for="(tag,idx) in item.list" :key="idx"><img :src="tag.url" alt=""></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        {
          title: '总平面图',
          list: [
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          title: '实景照片',
          list: [
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          title: '园区照片',
          list: [
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          title: '园区宣传片',
          list: [
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          title: '园区航拍',
          list: [
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          title: '园区荣誉',
          list: [
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        }
      ]
    }
  },
  created () {

  },
  methods: {

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
</style>
