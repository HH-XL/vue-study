<template>
  <div class='songs'>
      <div class="recommend">
        <p>今日推荐</p>
        <div class="content">
          <!-- <div class="photo"> -->
            <!-- <img src="../images/song1.jpeg" alt="">
            <div class="start">
              <van-icon name="play-circle" />
            </div> -->
            <video-player  class="video-player vjs-custom-skin" 
                          ref="videoPlayer" 
                          :playsinline="true" 
                          :options="playerOptions"
            ></video-player>
          <!-- </div> -->
          <div class="des">
            <span class="name">Ten Little Indians
            </span>
            <span class="time">《十个印第安小朋友》</span>
          </div>
        </div>
      </div>
      <div class="more">
        <p>唱跳儿歌</p>
        <ul>
          <li v-for="(item,index) in songs" :key="index">
            <img :src="item.src">
            <van-icon name="play-circle" />
            <span class="time">{{item.time}}</span>
            <div class="name">
              <p>{{item.name}}</p>
              <p>{{item.word}}</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'all',
  data(){
    return {
      songs:{},
      url:"http://localhost/",
      playerOptions : {
        playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
        autoplay : false, //如果true,浏览器准备好时开始回放。
        muted : false, // 默认情况下将会消除任何音频。
        loop : false, // 视频一结束就重新开始。
        preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language : 'zh-CN',
        aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type : "video/mp4",
          src : require('../images/song1.mp4')//url地址          
          // src: "" //url地址
        }],
        poster: require("../images/song1.jpeg"), //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    }
  },
  created() {
    this.$axios.get(this.url+'phpvue/songs.php')
        .then(res => {
          this.songs = res.data.songs;
        })
        .catch(function (error) {
            console.log(error);
        });

  },
}
</script>
<style lang='stylus' scoped>
.songs
  padding  0 25px
  .recommend
    margin 15px auto
    width 100%
    > p
      font-weight 600
    .content
      width 324px
      margin-top 15px
      background-color #fff
      border-radius 15px
      box-shadow 0px 10px 20px 10px rgba(215, 219, 226,0.5)
      padding 20px
      .des
        position relative
        margin-top 10px
        .time
          display inline-block
          color #d7dbe2
          position absolute
          font-size 14px
          top 0
          right 0
  .more
    margin-top 25px
    > p
      font-weight 600
    > ul
      margin-top 15px
      > li
        margin-bottom 15px
        position relative
        >img
          margin-right 15px
          vertical-align middle
          border-radius 10px
          width 150px
          height 90px 
        .van-icon
          font-size 20px
          z-index 10
          position absolute
          left 0
          bottom 0
          color rgba(0,0,0,0.6)
        .time
          display inline-block
          position absolute
          left 105px
          bottom 0
          font-size 14px
          background-color rgba(0,0,0,0.3)
          padding 3px
          border-radius 10px
          color #fff
        .name
          display inline-block
          position absolute
          top 45px
          transform translateY(-50%)
          line-height 20px
          >p
            &:last-child
              margin-top 5px

          
          
</style>
