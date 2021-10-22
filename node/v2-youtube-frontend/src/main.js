import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios, axios)

axios.defaults.baseURL = "http://192.168.1.94:8080/api"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
