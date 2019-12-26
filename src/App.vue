<template>
  <transition name="router-fade" mode="out-in">
    <router-view class="home-container"></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
