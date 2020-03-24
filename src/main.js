import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import router from "./router/index";
import 'view-design/dist/styles/iview.css';
import store from '../src/store/index'
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
