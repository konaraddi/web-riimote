import io from 'socket.io-client'
import Vue from 'vue'
import server_url from './server_url'
Vue.prototype.$socket = io(`${server_url}`)
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
