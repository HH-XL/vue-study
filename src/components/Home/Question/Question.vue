<template>
  <div class='question'>
      <div class="recommend">
        <p>趣味英语：这些问题你想过吗？</p>
        <div class="content">
        </div>
      </div>
      <div class="more">
        <ul>
          <li v-for="(item,index) in questions" :key="index">
            <div class="content" >
              <p>{{item.matter}}</p>
              <p>{{item.matterWords}}</p>
            </div>
            <div class="box" @click="clickBox(index)">
              <img height="140px" src="../images/button.gif">
            </div>
            <van-popup v-model="show" closeable 
    position="bottom"
  :style="{ height: '30%' }"  get-container="#app" >
              <div class="wrapper">
                <p>{{questions[nowIndex].answer}}</p>
                <p>{{questions[nowIndex].answerWords}}</p>
              </div>
            </van-popup>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'question',
  
  data(){
    return {
      questions:{},
      url:"http://localhost/",
      show: false,
      nowIndex: 0
    }
  },
  created() {
    this.$axios.get(this.url+'phpvue/questions.php')
        .then(res => {
          this.questions = res.data.questions;
        })
        .catch(function (error) {
            console.log(error);
        });
  },
  methods: {
    clickBox(index){
      this.show = true;
      this.nowIndex = index;
    }
  },
}
</script>
<style lang='stylus' scoped>
.question
  padding  0 25px
  .recommend
    margin 20px auto
    width 100%
    > p
      font-weight 600
    .content
      height 180px
      margin-top 20px
      background url('../images/question1.png') no-repeat
      background-size 100% 100%
      border-radius 15px
      box-shadow 0px 10px 20px 10px rgba(215, 219, 226,0.5)
      padding 20px
  .more
    margin-top 25px
    background-color #fff
    > ul
      margin-top 15px
      > li
        display flex
        align-items center
        .content
          flex 1
          line-height 25px
          padding 0 0 0 15px
        .box
          flex 0 0 100px
          overflow hidden
          >img
            transform scale(1.3)


          
          
</style>