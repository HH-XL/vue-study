<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <tab></tab>
    
  </div>
</template>

<script>
import tab from './components/tab/tab'
export default {
  name: 'App',
  components:{
    tab
  }
}
</script>

<style lang="stylus">
#app
  font-size 16px
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  .van-popup
    .wrapper
      text-align center
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      line-height 40px
      font-size 25px


</style>
