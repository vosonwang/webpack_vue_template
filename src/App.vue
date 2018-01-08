<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
  /*格式化边框等差异化因素，防止滚动条莫名的出现*/
  div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    zoom: 1;
    overflow: hidden; /*消除滚动条莫名出现*/
  }
</style>
