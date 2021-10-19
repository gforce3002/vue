import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from '../plugins/firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:{}
  },
  mutations: {
    nuevoUsuario(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    setUsuario({commit},payload){
      const usuario = {
        nombre: payload.displayName,
        email: payload.email,
        uid: payload.uid,
        foto: payload.photoURL
      }
      commit('nuevoUsuario', usuario);
    },
    cerrarSession({commit}){
      auth.signOut()
      commit('nuevoUsuario',null)
      router.push({name:'Ingreso'})
    }
  },
  modules: {
  }
})
