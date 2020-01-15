<template>
  <div class="title-block">
    <span class="title">{{title}}</span>
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
  border-left: 4px solid #3F97F9;
  height:16px;
  line-height:16px;
  vertical-align: middle;
  margin: 8px 0;
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(63,151,249,1);

  .title {
    padding-left: 15px;
  }
}
</style>
