import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = () => import('@/components/HelloWorld')
const duck = () => import('@/components/duck')
const goose = () => import('@/components/goose')
const cybor = () => import('@/components/cybor')
const BigCity = () => import('@/components/BigCity')
const place3 = () => import('@/components/place3')

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// Router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
Vue.use(Router)

const routerPath = [
  {
    path: '/',
    name: 'HelloWorld',
    redirect: '/item1/duck',
    component: HelloWorld,
    children: [
      {
        path: 'item1/duck',
        name: 'Duck',
        component: duck,
        meta: {
          title: 'duck'
        }
      },
      {
        path: 'item1/goose',
        name: 'Goose',
        component: goose,
        meta: {
          title: 'goose'
        }
      },
      {
        path: 'item2/cybor',
        name: 'Duck',
        component: cybor,
        meta: {
          title: 'cybor'
        }
      },
      {
        path: 'item2/bigCity',
        name: 'Goose',
        component: BigCity,
        meta: {
          title: 'bigCity'
        }
      },
      {
        path: 'item3/:ha',
        name: 'place3',
        component: place3,
        components: {default: place3},
        props: {default: true},
        meta: {
          title: 'place3'
        }
      }
    ]
  },
  {
    path: '/*',
    name: 'HelloWorld',
    redirect: '/item1/duck',
    component: HelloWorld
  }
]
const router = new Router({
  routes: routerPath
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
