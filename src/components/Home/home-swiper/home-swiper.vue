<template>
  <div class='home-swiper' ref="bscroll">
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
        
        >
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                  <keep-alive>
                      <component :is="item.component"></component>
                  </keep-alive>
              </div>
          </div>
      </div>
      </van-pull-refresh>
  </div>
  
</template>

<script>
import Songs from '@/components/Home/Songs/Songs'
import Choice from '@/components/Home/Choice/Choice'
import Question from '@/components/Home/Question/Question'
import Story from '@/components/Home/Story/Story'
import Swiper from '../../../../static/swiper.min.js'
import '../../../../static/swiper.min.css'
import bus from '../../../assets/bus.js'
import BScroll from "better-scroll"
import { Toast } from 'vant';

export default {
  components:{
      Songs,
      Choice,
      Question,
      Story
  },
//   watch:{
//       navIndex(index){
//           this.mySwiper.slideTo(index,0,false)
//       }
//   },
  data(){
    return {
        list:[
            {path:'/home/choice',component:Choice},
            {path:'/home/songs',component:Songs},
            {path:'/home/story',component:Story},
            {path:'/home/question',component:Question},
        ],
        mySwiper:null,
        isLoading: false
    }
  },
  mounted() {
    this.mySwiper = new Swiper('.swiper-container',{
        //   设定初始化时silde的索引
        initialSlide: this.$route.path === '/home/choice' ? 0 : this.$route.path === '/home/songs' ? 1 : this.$route.path === '/home/story' ? 2 : this.$route.path === 'home/question' ? 3 : 0,
        
    });
    // 实现左右滑动内容区时导航跟随切换高亮
        // 监控滑动后当前页面的索引，并发送给nav组件
    this.mySwiper.on('slideChange',()=>{
        bus.$emit('slideTab',this.mySwiper.activeIndex)
    })

    // 接收nav组件传过来的导航按钮索引值，跳转到相应的内容区
    bus.$on('changeTab', (index) => {
        this.mySwiper.slideTo(index,0,false);
    });


    this.$nextTick(() => {

        let bscrollDom = this.$refs.bscroll;

        this.aBScroll = new BScroll(bscrollDom,{
            click:true,
            bounce: false
        })

    });
    
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  },
}
</script>
<style lang='stylus' scoped>
.home-swiper
    width 100%                
    // margin 50px 0 55px 0
    position absolute
    top 50px
    bottom 55px
    overflow hidden
</style>
