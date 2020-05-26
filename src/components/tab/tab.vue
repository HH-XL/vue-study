<template>
  <div class='tab'>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/home">
          <span class="icon-home"></span>
          <p>首页</p>
        </router-link>
      </div>
      <div class="tab-item">       
        <router-link to="/learn">
          <span class="icon-book"></span>
          <p>学习</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mine">
          <span class="icon-user"></span>
          <p>我的</p>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data(){
    return {}
  },
}
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/mixin';
  #app
    .tab
      position fixed !important
      bottom 0
      left 0
      display flex
      box-sizing border-box
      width 100%
      height 55px
      line-height 17px
      padding 8px
      border-1px(#d7dbe2)
      background-color #fff
      // z-index 100
      .tab-item
        flex 1
        text-align center
        &:active
          background-color rgba(212, 221, 223,0.2)
        & > a
          font-size 14px
          color #d7dbe2
          &.active
            color #57cf1e
          > span
            font-size 22px
            
</style>
