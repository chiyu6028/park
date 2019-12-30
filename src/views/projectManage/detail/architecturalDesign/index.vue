<template>
  <div class="park-content">
    <!-- 基础信息 -->
    <div class="box-content">
      <div class="title">基础信息</div>
      <el-row :gutter="24">
        <el-col :span="6" class="info-li">用地面积：dddd</el-col>
        <el-col :span="6" class="info-li">总建筑面积：dddd</el-col>
        <el-col :span="6" class="info-li">计容建筑面积：dddd</el-col>
        <el-col :span="6" class="info-li">容积率：dddd</el-col>
        <el-col :span="6" class="info-li">绿化率：dddd</el-col>
        <el-col :span="6" class="info-li">架空面积：dddd</el-col>
        <el-col :span="6" class="info-li">地下面积：dddd</el-col>
        <el-col :span="24" class="r-box r-box2">停车位（地上/地下）：<div class="right-content">ddd</div></el-col>
      </el-row>
    </div>
    <!-- 规划设计方案 -->
    <div class="box-content">
      <div class="title">规划设计方案</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">规划设计团队：<div class="right-content">ddd</div></el-col>
        <el-col :span="24" class="r-box r-box2">规划设计理念与策略：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">周边概况：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">效果图：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">总平面图：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">功能布局：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">流线分析：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 专业技术 -->
    <div class="box-content">
      <div class="title">专业技术</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box r-box2">幕墙：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">结构：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">机电：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">暖通：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
        <el-col :span="24" class="r-box r-box2">给排水：<div class="right-content">
          <span>dsafdsfaf</span>
          <ul class="img-list">
            <li><img src="@images/map.png" alt=""></li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 规划设计小结 -->
    <div class="box-content">
      <div class="title">规划设计小结</div>
      <el-row :gutter="24">
        <el-col :span="24" class="r-box">投资亮点：<div class="right-content">
            <span>的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃</span>
          </div>
          </el-col>
          <el-col :span="24" class="r-box">面临困境：<div class="right-content">
            <span>的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃的对的呃呃</span>
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
