<template>
  <div class='chat'>
    <div class="head">       
      <router-link to="/mine">
        <van-icon name="arrow-left" />
        
      </router-link>
      <span>交流专区</span>
    </div>
    <ul class="content">
      <li v-for="(item,index) in messageArray" :key="index">
        <img src="./images/photo.jpg" width="50px" height="50px">
        <span class="van-hairline--surround">{{item}}</span>
      </li>
      
        
      
    </ul>
    <div class="foot">
        <div class="avatar"> <img src="./images/photo.jpg" alt="" id="icon"> </div>
        <input class="text" type="text" placeholder="说点什么吧..." v-focus
        v-model="message"
        ref="searchInput">
        <span class="btn" @click="send">发送</span> 
	  </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'chat',
  data(){
    return {
      screenHeight: document.body.clientHeight,   // 这里是给到了一个默认值
      originHeight: document.body.clientHeight,   // 默认高度在watch里拿来做比较
      isOriginHei :true,                          // 这个属性是固定定位按钮的显隐开关
      message:'',
      messageArray:[]
    }
  },
  directives: {
    focus: {
    // 指令的定义
      inserted: function (el) {
      el.focus()
      }
    }
  },
  mounted() {
    //处理软键盘弹出底部固定定位按钮顶起问题
    let self = this
    window.onresize = () => {
        return (() => {
            self.screenHeight= document.body.clientHeight
        })()
    }
  },
  watch: {
    screenHeight (val) {
      // 判断软键盘弹出，收起
      if(this.originHeight-val > 50) {
          // 键盘弹出
          this.isOriginHei = false
      }else{
          // 键盘收起
          this.isOriginHei = true
      }
    }
  },
  beforeDestroy () {
     window.onresize = null;     //注销window.onresize事件
  },
  methods: {
    send(){
      if(this.message !== ''){
        this.messageArray.push(this.message);
        this.message = '';
      }else{
        Toast({
                message:'输入内容不能为空',
                duration:'1000'
              });
      }
    }
  },
}
</script>
<style lang='stylus' scoped>
.chat
  background-color #eeeeee
  z-index 120
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
       
  .foot
    width 430px
    height 40px
    background #999
    position absolute
    bottom 0
    padding 10px
  .avatar 
    display inline-block
    background red
    width 50px
    height 50px
    border-radius 30px
    position absolute
    bottom 4px
    left 10px
    cursor pointer
    overflow hidden
    > img 
      width 50px
      height 50px
      border-radius 8px
  .text 
    width: 250px
    height: 38px
    outline: none
    font-size: 16px
    text-indent: 10px
    position: absolute
    border-radius: 6px
    right: 120px
  .btn 
    display: inline-block
    width: 62px
    height: 38px
    background: #ccc
    font-weight: 900
    line-height: 38px
    cursor: pointer
    text-align: center
    position: absolute
    right: 50px
    top: 10px
    border-radius: 6px
    &:hover 
      color: #777
      background: #ddd
  .content
    font-size 20px
    height 662px
    overflow auto
    padding 15px
    >li
      margin-top 10px
      padding-left 10px
      display block
      clear both
      overflow hidden
      &:first-child
        margin-top 0
      >img
        float right
      >span
        background-color #7cfc00
        padding 10px
        border-radius 10px
        float right 
        margin 6px 10px 0 10px
        max-width 310px
        border-color #ccc
        box-shadow 0 0 3px #ccc
      
      
</style>
