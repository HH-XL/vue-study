<template>
  <div class='cards'>
      <div class="head">       
        <router-link to="/home">
          <van-icon name="arrow-left" />
        </router-link>
        <span>单词卡片</span>
      </div>
      
      <van-icon class="leftButton" name="arrow-left" @click="left"/>
      <van-icon class="rightButton" name="arrow" @click="right"/>
      <van-swipe ref="leftSwipe" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in cards" :key="index">
          <div class="photo">
            <img :src="item.photo">
          </div>
          <div class="title">
            <span>{{item.title}}</span>
            <span>{{item.word}}</span>
          </div>
        </van-swipe-item>
      </van-swipe>
      <van-icon class="music" name="volume"  ref="message"  />

      
  </div>
</template>

<script>
export default {
  name: 'cards',
  data(){
    return {
      cards:{},
      scale:0.5,
      url:"http://localhost/",
    }
  },
  created() {
    this.$axios.get(this.url+'phpvue/cards.php')
        .then(res => {
          this.cards = res.data.cards;
        })
        .catch(function (error) {
            console.log(error);
        });
  },
  methods: {
    left(){
      this.$refs.leftSwipe.prev();
    },
    right(){
      this.$refs.leftSwipe.next();
    }
  },
}
</script>
<style lang='stylus' scoped>
.cards
  background-color #fff
  z-index 100
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  width 100%
  overflow hidden
  .head
    height 50px
    width 100%
    background-color rgb(87, 207, 30)
    line-height 50px
    padding-left 20px
    vertical-align middle
    color #fff
    > span
      position absolute
      left 50%
      transform translateX(-50%)
      font-weight 600
      letter-spacing 3px
    > a
      color #fff
      font-size 14px
  .van-swipe
    width 70%
    background-color rgba(87, 207, 30,0.2)
    height 70%
    margin 10% auto
    border-radius 15px
    box-shadow 2px 2px 5px 2px rgb(215, 219, 226)
    position relative
    .photo
      position absolute
      background-color #fff
      left 20px
      right 20px
      top 30px  
      bottom 150px
      > img
        width 100%
        height 100%
        border-radius 15px
    .title
      position absolute
      bottom 50px
      left 0
      width 100%
      > span
        display block
        text-align center
        font-size 30px
        line-height 45px
        &:first-child
          font-size 35px
          font-weight 600
  .leftButton,.rightButton
    font-size 30px
    font-weight 700
    color rgb(87, 207, 30)
    position absolute
    top 40%
  .rightButton
    right 20px
  .leftButton
    left 20px
  .music
    font-size 40px
    color rgb(87, 207, 30)
    position absolute
    bottom 7%
    left 50%
    transform translateX(-50%)
    transition: transform 0.3s ease-out
    &:active
      transform scale(1.3)
</style>
