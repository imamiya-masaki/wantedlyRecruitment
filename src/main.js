import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import axios from 'axios' // 追記
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 追記
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
