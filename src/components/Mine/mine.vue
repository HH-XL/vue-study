<template>
  <div class='mine'>
    <div class="head">
      <div class="avatar">
        <img src="./images/photo.jpg" alt="">
      </div>
      <div class="message" v-show="flag">
        <p>{{myUname}}</p>
        <p>age：10</p>
        <a @click="showLogin">重新登录</a>
      </div>
      <!-- 登录入口 -->
      <div class="loginBox" >
        <div class="enter" v-show="enterShow">
          请先
          <a @click="showLogin">登录</a>
        </div>
        <!-- 登录 -->
        <div class="login" v-show="loginShow">
          <div class="box">
            <van-icon name="cross" @click="closeLogin"/>
            <span class="main">用户名：</span><input type="text" v-model="myUname" placeholder="请输入用户名" v-focus><br/>
            <span class="main">密码：</span><input type="password"  v-model="myUpass" placeholder="请输入密码"><br/>
            <span class="main">验证码：</span><input type="text"  placeholder="请输入验证码"  v-model="picLyanzhengma"><br/>
            <div @click="createdCode" class="verification" >
              <span v-for="(item,index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
            </div>
            <br/>
            <div class="word">

              <span>没有账号？点此</span><a @click="registerGo">注册</a>
              <a class="forget" >忘记密码？</a>
            </div>
            <button @click="login">登录</button>
          </div>
        </div>
        <!-- 注册 -->
        <div class="register" v-show="registerShow">
          <div class="box">
              <van-icon name="cross" @click="closeRegister"/>
              <span class="main">用户名：</span><input type="text"  v-model="myName" placeholder="请输入用户名" v-focus><br/>
              <span class="main">年龄：</span><input type="text"  v-model="age" placeholder="请输入您的年龄" v-focus><br/>
              <span class="main">密码：</span><input type="password" v-model="myPw" placeholder="请输入密码"><br/>
              <span class="main">确认密码：</span><input type="password" v-model="isPw" placeholder="请输入确认密码"><br/>
              
              <div class="word">
                <a class="forget"  @click="GotoLogin">重新登录</a>
              </div>
              <button @click="register">注册</button>
            </div>
        </div>
        
      </div>
      
    </div>

    <div class="wrapper">
      <ul>
        <li>
          <span class="icon-users"></span>
          家长中心
          <span class="icon-keyboard_arrow_right"></span>
        </li>
        <li>
          <router-link to="/chat">
            <span class="icon-bubbles"></span>
            交流专区
            <span class="icon-keyboard_arrow_right"></span>
          </router-link>
        </li>
        <li>
          <span class="icon-bubbles"></span>
          关于我们
          <span class="icon-keyboard_arrow_right"></span>
        </li>
        <li>
          <span class="icon-telegram"></span>
          联系我们
          <span class="icon-keyboard_arrow_right"></span>
        </li>
        <li>
          <span class="icon-cog"></span>
          设置
          <span class="icon-keyboard_arrow_right"></span>
        </li>    
      </ul>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
import qs from 'qs';
export default {
  name: 'mine',
  data(){
    return {
      flag:false,
      loginShow:false,
      enterShow:true,
      registerShow:false,
      myUname:'',
      myUpass:'',
      myName:'',
      myPw:'',
      age:'',
      isPw:'',
      url:"http://localhost/",
      timer:'',
      timer2:'',
      code:'',
      length:4,
      checkString:'',             //随机验证码    
      codeList:[], 
      picLyanzhengma:''         //输入验证码
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    showLogin(){
      this.loginShow = true
    },
    closeLogin(){
      this.loginShow = false;
    },
    login(){
      if(this.myUname == ''){
        Toast({
                message:'用户名不能为空',
                duration:'1000'
              });
      }else if(this.myUpass == ''){
        Toast({
                message:'密码不能为空',
                duration:'1000'
              });
      }else if(this.picLyanzhengma !== this.checkString){
        Toast({
                message:'验证码错误',
                duration:'1000'
              });
      }else{
        this.$axios.post(this.url+'phpvue/login.php', qs.stringify({
          myUname: this.myUname,
          myUpass: this.myUpass
        }))
        .then(res => {
            if(res.data.infoCode == 0){
              Toast({
                message:'登录成功',
                duration:'1000'
              });
              this.timer = setTimeout(()=>{
                this.closeLogin();
                this.enterShow = false;
                this.flag = true;
              },1200);
            }else if(res.data.infoCode == 1){
              // Dialog.alert({
              //   message: '用户名或密码错误',
              // })
              Toast({
                message:'用户名或密码错误',
                duration:'1000'
              });
            }else{
              alert('网络连接失败')
            }
            // console.log(res)
        })
        .catch(function (error) {
            console.log(error);
        });
      }
      
    },
    registerGo(){
      this.loginShow = false;
      this.registerShow = true;
    },
    register(){
      if(this.myName == ''){
        Toast({
                message:'用户名不能为空',
                duration:'1000'
              });
      }else if(this.age == ''){
        Toast({
                message:'年龄不能为空',
                duration:'1000'
              });
      }else if(this.myPw == ''){
        Toast({
                message:'密码不能为空',
                duration:'1000'
              });
      }else if(this.myPw.length < 6 || this.myPw.length > 12){
        Toast({
                message:'密码不能少于6位或大于12位',
                duration:'1000'
              });
      }else if(this.isPw == ''){
        Toast({
                message:'确认密码不能为空',
                duration:'1000'
              });
      }else if(this.isPw !== this.myPw){
        Toast({
                message:'确认密码要与密码一致',
                duration:'1000'
              });
      }else{
        this.$axios.post(this.url+'phpvue/register.php', qs.stringify({
              myName: this.myName,
              myPw: this.myPw,
              age:this.age
          }))
          .then(res => {
              Toast({
                message:'注册成功',
                duration:'1000'
              });
              this.timer2 = setTimeout(()=>{
                this.loginShow = true;
                this.registerShow = false;
              },1200)
          })
          .catch(function (error) {
              console.log(error);
          });
      }
      
    },
    GotoLogin(){
      this.registerShow = false;
      this.loginShow = true;
    },
    closeRegister(){
      this.registerShow = false;
    },
    createdCode(){
      let len = this.length;
      let codeList = [];
      let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
      let charsLen = chars.length;
      let codeLast = [];
      // 生成
      for(let i = 0; i < len; i++){
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)];
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `${[Math.floor(Math.random() * 7 + 14)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        });
      }
      this.codeList = codeList;

      for(let j = 0; j < codeList.length; j++){
        codeLast.push(codeList[j].code);
      }
      this.checkString = codeLast.join('');

    },
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }

  },
  created () {
    this.createdCode();
  },
  directives: {
    focus: {
    // 指令的定义
      inserted: function (el) {
      el.focus()
      }
    }
  },
  beforeDestroy() {
		    clearInterval(this.timer);        
		    this.timer = null;
  }
}
</script>
<style lang='stylus' scoped>
.mine
  .head
    background-color #57cf1e
    width 100%
    height 200px
    position relative
    display flex
    padding 40px 0 0 40px
    box-sizing border-box
    .avatar
      flex 0 0 120px
      >img
        width 80px
        height 80px
        border-radius 50%
        box-shadow 0px 0px 2px 2px #d7dbd2     
    .message
      flex 1
      line-height 20px
      font-size 14px
      >p
        &:first-child
          font-size 20px
          font-weight 600
          line-height 45px
      >a
        text-decoration underline
        color #d7dbe2
        position absolute
        top 95px
        right 20px
    .loginBox
      .enter
        line-height 80px
        >a
          color #d7dbe2
          font-weight 600
          text-decoration underline
      .login,.register
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        background-color rgba(0,0,0,0.5)
        z-index 100
        .box
          background-color #fff
          width 330px
          height 350px
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          border-radius 15px
          padding 30px 0
          box-sizing border-box
          text-align center
          .van-icon
            position absolute
            top 10px
            right 10px
            color #ccc
          .verification
            
            border-radius: 12px
            width: 100x
            letter-spacing: 5px
            height: 40px
            transform: translate(45px,5px)
            box-sizing border-box
            > span 
              display inline-block
          .main
            display inline-block
            width 70px
            text-align justify
            text-align-last justify
            line-height 50px
          > input
            border 1px solid #ccc 
            line-height 30px
            text-indent: 10px
          > a
            font-size 12px
            position absolute 
            text-decoration underline
          .word
            font-size 12px
            position absolute
            bottom 90px
            right 30px
            > a
              text-decoration underline
            .forget
              margin-left 68px
          > button
            margin-top 60px
            width 240px
            height 35px
            color #fff
            background-color rgb(87, 207, 30)
            border none
            border-radius 20px
      .register
        .box
          height 350px
          .main
            width 80px
          .word
            bottom 105px
          >button
            margin-top 50px
  .wrapper
    background-color #fff 
    position absolute
    bottom 0px
    top 150px
    left 15px
    right 15px
    padding 10px 25px
    border-radius 15px
    box-shadow 0px 0px 10px 2px #bebebe
    >ul
      >li
        height 50px
        line-height 50px
        font-size 14px
        position relative
        >a
          color #000
          >span
            font-size 20px
            margin-right 10px
            vertical-align middle
            color rgb(87, 207, 30)
            &:last-child
              position absolute
              right 0
              line-height 50px
        >span
          font-size 20px
          margin-right 10px
          vertical-align middle
          color rgb(87, 207, 30)
          &:last-child
            position absolute
            right 0
            line-height 50px
        

</style>
