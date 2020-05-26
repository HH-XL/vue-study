import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Learn from '@/components/Learn/Learn'
import Mine from '@/components/Mine/Mine'
import NotFound from '@/components/NotFound/NotFound'
import Songs from '@/components/Home/Songs/Songs'
import Story from '@/components/Home/Story/Story'
import Choice from '@/components/Home/Choice/Choice'
import Question from '@/components/Home/Question/Question'
import Cards from '@/components/Home/Choice/Cards'
import Usual from '@/components/Home/Choice/Usual'
import Sentence from '@/components/Home/Choice/Sentence'
import Chat from '@/components/Mine/chat'
// import Login from '@/components/Mine/login'
// import Register from '@/components/Mine/register'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '*',
      component: NotFound
    }, 
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'songs',
          component:Songs
        },
        {
          path: 'story',
          component: Story
        },
        {
          path: 'choice',
          component: Choice
        },
        {
          path: 'question',
          component: Question
        }
      ]
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    }, 
    {
      path: '/usual',
      name: 'Usual',
      component: Usual
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/sentence',
      name: 'Sentence',
      component: Sentence
    },
  ],
  mode: 'history'
})
