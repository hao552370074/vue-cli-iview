import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import router from "./router/index";
import 'view-design/dist/styles/iview.css';
import store from '../src/store/index'
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入


// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
