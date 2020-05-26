<template>
  <div class='usual'>
    <div class="head">       
      <router-link to="/home">
        <van-icon name="arrow-left" />
      </router-link>
      <span>常用单词</span>
    </div>

    <van-swipe ref="Swipe" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in usual" :key="index">
          <div class="wrapper">
            <div class="title">
              <p>{{item.title}}</p>
              <p>{{item.word}}</p>
              <van-icon name="volume" class="music" />
            </div>
            <img v-for="list in item.photo" :key=list.id :src=list.src @click="getId(list.id,item.type)" />
          </div>
        </van-swipe-item>
    </van-swipe>
    
    
    

  </div>
</template>

<script>
export default {
  name: 'usual',
  data(){
    return {
      usual:{},
      id:0,
      type:1,
      timer:''
    }
  },
  created() {
    this.$axios.get("../../../../static/data.json")
    .then(res=>{
      this.usual = res.data.usual;
    })
    .catch(err=>{
      console.log(err)
    })
  },
  methods: {
    getId(id,type){
      this.id = id;
      this.type = type;
      if(this.id === this.type){
        this.$toast({
          message:'回答正确',
          icon:'success',
          duration:'800'
          });
        this.timer = setTimeout(()=>{
          this.$refs.Swipe.next()
        },1000);
      }else{
        this.$toast({
          message:'回答错误',
          icon:'cross',
          duration:'800'
          });
      } 
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
  
}
</script>
<style lang='stylus' scoped>
.usual
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
    > span
      position absolute
      left 50%
      transform translateX(-50%)
      color #fff
      font-weight 600
      letter-spacing 3px
    > a
      color #fff
      font-size 14px
      
  .wrapper
    padding 0 20px
    text-align center
    .title
      width 100%
      height 30%
      text-align center
      margin 15% 0 5% 0
      line-height 55px
      >p
        font-size 25px
        &:first-child
          font-size 35px
          font-weight 600
      .music
        font-size 30px
        color rgb(87, 207, 30)
        transition: transform 0.5s ease-out
        &:active
          transform scale(1.5)
    img
      display inline-block
      width 40%
      float left
      margin 5%
  .yes
    position absolute
    left 50%
    top 35%
    transform translate(-50%)
    font-size 100px
    color red
    font-weight 700
    &.down-enter-active
      transition:all 0.5s Ease-out
    &.down-enter,&.down-leave-to
      top 25%
  // .tips
  //   position absolute
  //   top 0
  //   left 0
  //   bottom 0
  //   right 0
  //   z-index 100
  //   background-color rgba(0,0,0,0.2)
  //   .content
  //     position absolute
  //     left 50%
  //     top 50%
  //     transform translate(-50%,-50%)
  //     width 180px
  //     height 150px
  //     background-color #fff
</style>
