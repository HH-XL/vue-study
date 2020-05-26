<template>
  <div class='home-nav'>
      <ul class="nav-list">
          <li class="nav-item" v-for="(item,index) in navList" :key="index" :class="{'active':isActive===index}" @click="tabClick(index)">{{item.name}}</li>
      </ul>
      
  </div>
</template>

<script>
import bus from '../../../assets/bus.js'

export default {
  data(){
    return {
        navList:[
          {name:"精选课程"},
          {name:"唱跳儿歌"},
          {name:"故事会"},
          {name:"好奇星球"}
        ],
        isActive: 0
    }
  },
  mounted() {
    // 初始化，保证刷新页面后内容区和导航一致
    this.$nextTick(()=>{
      this.initPage();
    });
    // 接收swiper组件发送的index进行导航按钮切换高亮和更新模板地址
    bus.$on('slideTab',this.slideTab)
  },
  methods: {
    initPage(){
      this.isActive = this.$route.path === '/home/choice' ? 0 : this.$route.path === '/home/songs' ? 1 : this.$route.path === '/home/story' ? 2 : this.$route.path === 'home/question' ? 3 : 0;
    },
    tabClick(index){
        this.isActive = index;
    //   点击导航按钮时向swiper组件发射index
        bus.$emit('changeTab',index);
    },
    slideTab(index){
      this.isActive = index;
      // let router = new Router();
      let href = index === 0 ? '/home/choice' : index === 1 ? '/home/songs' : index === 2 ? '/home/story' : index === 3 ? '/home/question' : '/home/choice';
      // 利用路由的push方法更新路径地址
      this.$router.push(href);
    }
  }
}
</script>
<style lang='stylus' scoped>
 .home-nav   
    .nav-list
      display flex
      position fixed
      top 0
      left 0
      width 100%
      height 50px
      line-height 50px
      background-color #57cf1e
      // z-index 100
      .nav-item
        flex 1
        text-align center
        color rgba(255, 255, 255,0.8)
        font-size 14px
        &.active
          font-size 17px
          color #fff
</style>