// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import animated from 'animate.css'
import 'lib-flexible/flexible'
import VueLazyload from 'vue-lazyload'
import {
  Swipe,
  SwipeItem,
  Tab, Tabs,
  Icon,
  Popup,
  PullRefresh,
  Toast,
  Field,
  Button,
  Notify
} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Field);
Vue.use(Button);
Vue.use(Notify);


Vue.prototype.$axios = Axios
Vue.use(animated)
Vue.use(VueLazyload)

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

const hls = require('videojs-contrib-hls')
Vue.use(hls)

Vue.use(VideoPlayer)

// import style
import 'common/stylus/index.styl'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
