import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueJsonp from 'vue-jsonp'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入全局CSS
import './assets/css/reset.css'
import './assets/css/common.css'
Vue.use(VueJsonp);
Vue.use(ElementUI);
Vue.config.productionTip = false
window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')