<template>
  <div class='choice'>
    <div class="content">
      <div class="carousel">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item><img src="./images/swiper1.jpg"></van-swipe-item>
        <van-swipe-item><img src="./images/swiper2.jpg"></van-swipe-item>
        <van-swipe-item><img src="./images/swiper3.jpg"></van-swipe-item>
        <van-swipe-item><img src="./images/swiper4.jpg"></van-swipe-item>
      </van-swipe>
    </div> 
    <div class="wrapper">
      <div class="title">
        <span>基础学习</span>
      </div>
      <div class="item">
        <router-link to="/usual">
          <div class="item-left" :class="{'animated bounceIn':whether1}"  @touchstart="touchstart1" @touchend="touchend1">
            <span>常用单词</span>
            <img v-lazy="require('./images/choice1.png')">
          </div>
        </router-link>
        <router-link to="/cards">
          <div class="item-right" :class="{'animated bounceIn':whether2}"  @touchstart="touchstart2" @touchend="touchend2">
            <span>单词卡片</span>
            <img v-lazy="require('./images/choice2.png')">
          </div>
        </router-link>
      </div>
      <div class="item">
        <div class="item-left  color1" >
          <span>单词拼读</span>
          <img v-lazy="require('./images/choice3.png')">
          </div>
        <div class="item-right  color3">
          <span>音标学习</span>
          <img v-lazy="require('./images/choice4.png')">
        </div>
      </div>
      <div class="title">
        <span>拓展学习</span>
      </div>
      <div class="item">
        <router-link to="/sentence">
          <div class="item-left color2" :class="{'animated bounceIn':whether3}"  @touchstart="touchstart3" @touchend="touchend3">
            <span>日常用语</span>
            <img v-lazy="require('./images/choice5.png')">
            </div>
        </router-link>
        <a href="#">
          <div class="item-right  color4">
            <span>趣味复习</span>
            <img v-lazy="require('./images/choice8.png')">
          </div>
        </a>
      </div>
      <div class="item">
        <div class="item-left  color5">
          <span>每日一词</span>
          <img v-lazy="require('./images/choice7.png')">
          </div>
        <div class="item-right  color6">
          <span>唱跳儿歌</span>
          <img v-lazy="require('./images/choice6.png')">
        </div>
      </div>
      <div class="item">
        <div class="item-left  color2">
          <span>故事会</span>
          <img v-lazy="require('./images/choice2.png')">
          </div>
        <div class="item-right  color1">
          <span>好奇星球</span>
          <img v-lazy="require('./images/choice4.png')">
        </div>
      </div>
    </div>  
    </div>
  
  </div>

</template>

<script>

export default {
  name: 'choice',
  data(){
    return {
      flag:false,
      whether1:false,
      whether2:false,
      whether3:false,
    }
  },
  methods: {
    enter(){
      this.flag = true
    },
    leave(){
      this.flag = false
    },
    touchstart1(){
      this.whether1 = true;
    },
    touchend1(){
      this.whether1 = false;
    },
    touchstart2(){
      this.whether2 = true;
    },
    touchend2(){
      this.whether2 = false;
    },
    touchstart3(){
      this.whether3 = true;
    },
    touchend3(){
      this.whether3 = false;
    }
  },
}
</script>
<style lang='stylus' scoped>
.choice
  width 100%
  top 50px
  
  .carousel
    margin 20px 20px
    border-radius 10px
    .van-swipe-item
      border-radius 10px
      width 100%
    & img 
      border-radius 10px
      width 100%
  .wrapper
    margin 15px 20px
    .title
      margin 0 0 12px 5px 
      border-left 3px/*no*/ solid #57cf1e
      padding 0 10px
      >span
        font-weight 600
    .item 
      width 100%
      display flex
      margin-bottom 15px
      > a
        display inline-block
        flex 1
        color #000
      .item-left,.item-right
        flex 1
        text-align center
        height 110px
        line-height 110px
        background-color rgba(239, 209, 185,0.5)
        margin-right 7px
        border-radius 10px
        &.show
          background-color #fff
          border 1px solid #bebebe
        &.color1
          background-color rgba(248, 228, 237,0.7)
        &.color2
          background-color rgba(251, 176, 59,0.5)
        &.color5
          background-color rgba(190, 216, 105,0.5)
        & span 
          display inline-block
          font-size 16px
          vertical-align top
          margin 0 7px
        & img 
          width 60px
          margin-top 25px   
      .item-right
        background-color rgba(199, 123, 91,0.5)
        margin-left 7px
        margin-right 0
        &.color3
          background-color rgba(147, 198, 253,0.4)
        &.color4
          background-color rgba(57, 205, 220,0.4)
        &.color6
          background-color rgba(238, 88, 89,0.5)

</style>
