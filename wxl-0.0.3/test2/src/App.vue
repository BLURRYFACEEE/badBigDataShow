<template>
  <div id="app">
<!--    <h2>哈哈哈哈哈！</h2>-->
    <transition  name="fade">
    <router-view/>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>

<style>
  html,body,h1,h2,h3,h4,h5,span,a,ul,li,div,link {
    padding: 0;
    margin: 0;
  }
</style>
