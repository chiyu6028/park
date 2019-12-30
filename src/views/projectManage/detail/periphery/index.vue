<template>
  <div class="park-content">
    <!-- 周边条件 -->
    <div class="box-content">
      <div class="title">周边条件</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">周边概述：<div class="right-content">ddd</div></el-col>
      </el-row>
    </div>
    <!-- 周边园区 -->
    <div class="box-content">
      <div class="title">周边园区</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">园区名称：dddd</el-col>
        <el-col :span="6" class="info-li">用地面积：dddd</el-col>
        <el-col :span="6" class="info-li">总建筑面积：dddd</el-col>
        <el-col :span="6" class="info-li">容积率：dddd</el-col>
        <el-col :span="6" class="info-li">园区类型：dddd</el-col>
        <el-col :span="6" class="info-li">园区产值：dddd</el-col>
        <el-col :span="6" class="info-li">平均产值：dddd</el-col>
        <el-col :span="6" class="info-li">就业人口：dddd</el-col>
        <el-col :span="6" class="info-li">企业数量：dddd</el-col>
        <el-col :span="6" class="info-li">代表企业：dddd</el-col>
        <el-col :span="6" class="info-li">租金水平：dddd</el-col>
        <el-col :span="6" class="info-li">出租率：dddd</el-col>
        <el-col :span="24" class="r-box r-box2">园区图册：<div class="right-content">
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
     <!-- 周边住宅 -->
    <div class="box-content">
      <div class="title">周边住宅</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">小区名称：dddd</el-col>
        <el-col :span="6" class="info-li">房价水平：dddd</el-col>
        <el-col :span="24" class="r-box r-box2">周边介绍：<div class="right-content">ddd</div></el-col>
        <el-col :span="24" class="r-box r-box2">小区图册：<div class="right-content">
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
      </el-row>
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
