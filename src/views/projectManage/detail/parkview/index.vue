<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">项目ID：dddd</el-col>
        <el-col :span="6" class="info-li">园区名称：dddd</el-col>
        <el-col :span="6" class="info-li">园区类型：dddd</el-col>
        <el-col :span="6" class="info-li">项目地址：dddd</el-col>
        <el-col :span="6" class="info-li">发布时间：dddd</el-col>
        <el-col :span="6" class="info-li">建成时间：dddd</el-col>
        <el-col :span="24" class="r-box">园区介绍：<div class="right-content">ddd</div></el-col>
      </el-row>
    </div>
    <!-- 技术指标 -->
    <div class="box-content">
      <div class="title">技术指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地性质：dddd</el-col>
        <el-col :span="6" class="info-li">用地面积：dddd</el-col>
        <el-col :span="6" class="info-li">总建筑面积：dddd</el-col>
        <el-col :span="6" class="info-li">绿化率：dddd</el-col>
        <el-col :span="6" class="info-li">容积率：dddd</el-col>
        <el-col :span="24" class="r-box">项目区位：<div class="right-content">
          <span>对对对</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div></el-col>
        <el-col :span="24" class="r-box">用地范围：<div class="right-content">
          <span>的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃</span>
          <ul class="img-list">
            <li>
              <img src="@images/map.png" alt="">
              <div class="text">大开发就发</div>
            </li>
            <li>
              <img src="@images/map.png" alt="">
              <div class="text">大开发就发</div>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
     <!-- 园区经济指标 -->
    <div class="box-content">
      <div class="title">园区经济指标</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">主导产业：dddd</el-col>
        <el-col :span="6" class="info-li">主导功能：dddd</el-col>
        <el-col :span="6" class="info-li">投资主体：dddd</el-col>
        <el-col :span="6" class="info-li">运营主体：dddd</el-col>
        <el-col :span="6" class="info-li">运营模式：dddd</el-col>
        <el-col :span="6" class="info-li">企业数量：dddd</el-col>
        <el-col :span="6" class="info-li">投资规模：dddd</el-col>
        <el-col :span="6" class="info-li">园区产值：dddd</el-col>
      </el-row>
    </div>
    <!-- 相册 -->
    <div class="box-content">
      <div class="title">相册</div>
      <el-col :span="24" class="r-box"  v-for="(item,index) in imgList" :key="index">{{item.title}}<div class="right-content">
          <ul class="img-list list-phone">
            <li v-for="(tag,idx) in item.list" :key="idx">
              <img :src="tag.url" alt="">
            </li>
          </ul>
          </div>
        </el-col>
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
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' }
          ]
        },
        {
          title: '实景照片',
          list: [
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' }
          ]
        },
        {
          title: '园区照片',
          list: [
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' }
          ]
        },
        {
          title: '园区宣传片',
          list: [
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' }
          ]
        },
        {
          title: '园区航拍',
          list: [
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' }
          ]
        },
        {
          title: '园区荣誉',
          list: [
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' },
            { url: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg' }
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
  display: flex;
  border-bottom: 1px solid #ECF1F2;
  padding: 20px 0 10px;
  .right-content{
    flex: 1;
    line-height: 24px;
  }
  .img-list{
    padding:10px 0;
    display: flex;
    margin-left: -10px;
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
