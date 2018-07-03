import Vue from 'vue'

// for sockets
import io from 'socket.io-client'
import server_address from './server_address'
Vue.prototype.$socket = io(`${server_address}`)

// for Buefy (styling + pre-built Bulma-based components)
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy)

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
