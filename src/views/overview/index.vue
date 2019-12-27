<template>
  <div class="yqbg">
  <img src="@images/bgright.png" style="position:absolute;right:0;top:0px;width:18%;">
  <div style="width:100%;clear:both;margin:0 auto;"></div>
  </div>
</template>

<script>
export default {
  name: 'Overview'
}
</script>

<style lang="scss" scoped>
.yqbg{
	position:relative;
	background-image:url("~@images/map.png");
	height:100%;
	width:100%;
	background-size: cover;
}
</style>
