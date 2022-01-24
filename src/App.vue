<!--
 * @Author: ycl
 * @Date: 2022-01-18 11:01:05
 * @LastEditors: ycl
 * @LastEditTime: 2022-01-24 11:15:16
 * @Description: 水印效果
-->
<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>
import MainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,p,a,div {
  margin: 0;
  padding: 0;
}
</style>
