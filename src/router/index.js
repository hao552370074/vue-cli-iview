import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 主页
const home = () => import("../views/home/index.vue");
// 侧边栏
const ss = () => import("../views/main/index.vue");
// one
const one=()=>import("../views/one/index.vue")

let base = `${process.env.BASE_URL}`

// 路由
const router = new Router({
  // mode: "history",
  // mode: "hash",
    base: base,
  routes: [
    {
      path: "/",
      name: "mains",
      component: ss,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: home
        },{
          path:'/one',
          name:'one',
          component:one,
        }
      ]
    }
  ]
});

export default router;
