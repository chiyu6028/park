<template>
  <div class="title-block">
    <span class="padding-left-5 title">{{title}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TitleBlock',
  props: {
    title: String,
    default: () => ''
  }
}
</script>

<style lang="scss" scoped>
.title-block{
  border-left: 2px solid #3F97F9;
  .title{
    width:67px;
    height:17px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(63,151,249,1);
    line-height:34px;
  }
}
</style>
