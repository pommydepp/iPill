<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header:Header,
    Footer:Footer
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css');

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
footer{
  position: relative;
  bottom: 0;
}
</style>
