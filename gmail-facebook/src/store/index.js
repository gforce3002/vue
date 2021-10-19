import Vue from 'vue'
import Vuex from 'vuex'

import {auth, db} from '../plugins/firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:''
  },
  mutations: {
    nuevoUsuario(state, payload){
      state.usuario = payload
      if(payload === null){
        state.usuario=''
      }
    }
  },
  actions: {
    async setUsuario({commit},payload){
      try {
        const doc = await db.collection('usuarios').doc(payload.uid).get()
        if(doc.exists){
          //console.log(doc.data())
          commit('nuevoUsuario', doc.data())
        }else{
          const usuario = {
            nombre: payload.displayName,
            email: payload.email,
            uid: payload.uid,
            foto: payload.photoURL
          }
          await db.collection('usuarios').doc(usuario.uid).set(usuario)
          console.log("Usuaurio guardado en db")
          commit('nuevoUsuario', usuario);
        }
      } catch (error) {
          console.log(error)
      }
      
    },
    cerrarSession({commit}){
      auth.signOut()
      commit('nuevoUsuario',null)
      router.push({name:'Ingreso'})
    }
  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null){
        return false
      }else{
        return true
      }
      
    }
  },
  modules: {
  }
})
