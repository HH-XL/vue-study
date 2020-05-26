<template>
  <div class='home'>
      <home-nav></home-nav>
      <home-swiper></home-swiper>
      
  </div>
</template>

<script>
import nav from './home-nav/home-nav'
import swiper from './home-swiper/home-swiper'

export default {
  data(){
    return {

    }
  },
  components:{
    'home-nav' : nav,
    'home-swiper' : swiper
  },
  methods: {
    
  },
}
</script>
<style lang='stylus' scoped>
 

    
</style>
