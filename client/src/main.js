import io from 'socket.io-client'
import Vue from 'vue'
import server_address from './server_address'
Vue.prototype.$socket = io(`${server_address}`)
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
