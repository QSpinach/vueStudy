import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/hi',
      component: Hi,
      alias: '/syq', // 别名使用 别名请不要用在path为’/’中，如下代码的别名是不起作用的。
      children: [
        { path: '/' },
        { path: 'hi1', name: 'hi1', component: Hi1 },
        { path: 'hi2', component: Hi2 }
      ]
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle', // 加入正则
      name: 'Params',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle' // 重定向
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/count',
      name: 'Count',
      component: Count,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
