<template>
  <div class='learn'>
      <div class="title">
        <p>学习报告</p>
      </div>
      <div class="wrapper">
        <div class="des">今天是宝贝在少儿英语学习的第<span class="active">3</span>天，坚持就会有进步哦！</div>
      
        <div class="report">
          <van-tabs swipeable animated swipe-threshold="7" color="#57cf1e">
            <van-tab class="content" v-for="(item,index) in contents" :key="index" :title="item.date">
              <span class="icon-pencil"></span>
              <div>今天学习了<span class="light">{{item.words}}</span>个单词</div>
              <div>今天学习了<span class="light">{{item.sentence}}</span>个语句</div>
              <div>今天观看了<span class="light">{{item.video}}</span>个视频</div>
              <div>超过同龄<span class="high">{{item.percentage}}</span>的学生</div>
            </van-tab>
          </van-tabs>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'learn',
  data(){
    return {
       contents:[
          {date:"21",words:"20",sentence:"10",video:"3",percentage:"70%"},
          {date:"22",words:"35",sentence:"12",video:"8",percentage:"80%"},
          {date:"23",words:"30",sentence:"5",video:"6",percentage:"73%"},
          {date:"24",words:"0",sentence:"0",video:"0",percentage:"0%"},
          {date:"25",words:"0",sentence:"0",video:"0",percentage:"0%"},
          {date:"26",words:"0",sentence:"0",video:"0",percentage:"0%"},
          {date:"27",words:"0",sentence:"0",video:"0",percentage:"0%"},
        ]
    }
  },
}
</script>
<style lang='stylus' scoped>
.learn
  .title
    display flex
    position fixed
    top 0
    left 0
    width 100%
    height 50px
    line-height 50px
    background-color #57cf1e
    z-index 100
    & p
      margin 0 auto
      color #fff
      font-size 17px
      font-weight 600
      letter-spacing 2px
  .wrapper
    margin 80px 0
    padding 0 30px
    .report
      margin 0 10px
    .content
      text-align center
      background-color rgba(215, 219, 226,0.2)
      padding 50px 0px
      border-radius 10px
      line-height 40px
      box-shadow 0px 0px 9px -3px rgb(215, 219, 226)
      margin 35px 0px
      font-size 18px
      .icon-pencil
        color rgb(87, 207, 30)
        font-size 35px
      .light
        color #57cf1e
        font-size 22px
        margin 2px
      .high
        color red
        font-size 22px
        margin 2px
        
        
    .des
      background-color rgba(215, 219, 226,0.3)
      padding 12px 15px 20px
      border-radius 10px
      line-height 30px
      box-shadow 2px 2px 5px 2px rgb(215, 219, 226)
      margin 35px 0
      .active
        display inline-block
        margin 0 3px
        color #57cf1e
        font-weight 600
        font-size 25px
    .time
      margin 25px 0
      background-color rgba(215, 219, 226,0.3)
      padding 10px
      border-radius 20px
      display flex
      > span 
        flex 1
        text-align center
      
</style>
