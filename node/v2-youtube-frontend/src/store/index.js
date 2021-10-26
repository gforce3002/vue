import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    usuarioDB:'',
    session: false
  },
  mutations: {
    getUsuario(state, payload){
      state.token = payload
      if(payload===''){
        state.usuarioDB = ''
        state.session=false 
      }else{
        state.usuarioDB = decode(payload)
        state.session=true 
      }
    }
  },
  actions: {
    setUsuario({commit},payload){
      localStorage.setItem('token', payload)
      commit('getUsuario', payload)
      router.push({name:'Home'})
    },
    cerrarsession({commit}){
      localStorage.removeItem('token')
      commit('getUsuario', '')
      router.push({name:'Login'})
    }

  },
  getters:{
    estaActivo: state=> state.session
  },
  modules: {
  }
})
