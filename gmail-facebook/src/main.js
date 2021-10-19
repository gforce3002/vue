import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {auth} from '@/plugins/firebase'


Vue.config.productionTip = false

//Esta funcion permite comprobar si hay un usuario
//Logeado

auth.onAuthStateChanged(function(user){
  if(user){
    console.log(user.displayName)
    store.dispatch('setUsuario', user)
  }
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})


