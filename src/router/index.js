import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home',component:  resolve=>require(['../components/Home.vue'],resolve),children:[
        { path:"", component: resolve=>require(['../components/index.vue'],resolve) },
        { path:"furnishing", component: resolve=>require(['../components/furnishing.vue'],resolve) },
        { path:"shoes", component: resolve=>require(['../components/shoes.vue'],resolve) },
        { path:"clothes", component: resolve=>require(['../components/clothes.vue'],resolve) },
        { path:"electrical", component: resolve=>require(['../components/electrical.vue'],resolve) },
        { path:"wash", component: resolve=>require(['../components/wash.vue'],resolve) },
        { path:"food", component: resolve=>require(['../components/food.vue'],resolve) },
        { path:"details", component: resolve=>require(['../components/details.vue'],resolve) },
        { path:"products", name:'products',component: resolve=>require(['../components/products.vue'],resolve),props:true},
        { path:'shopcart',name:'shopcart',component:resolve=>require(['../components/shopCart.vue'],resolve)},
        { path:'address',name:'address',component:resolve=>require(['../components/address.vue'],resolve)},
        {path:'order',name:'order',component:resolve=>require(['../components/order.vue'],resolve)},
        {path:'foryou',name:'foryou',component:resolve=>require(['../components/justForYou.vue'],resolve)},
        {path:'crowdfunding',name:'foryou',component:resolve=>require(['../components/crowdfunding.vue'],resolve)},
        {path:'pay',name:'yay',component:resolve=>require(['../components/payment.vue'],resolve)}
    ]
    },
      {
          path:'/register',component: resolve=>require(['../components/register.vue'],resolve)
      },
      {
          path:'/canvas',component:resolve=>require(['../components/many/canvasFireworks.vue'],resolve)
      }
  ]
})
