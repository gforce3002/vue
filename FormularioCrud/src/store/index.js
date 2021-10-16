import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas:[],
    tarea: {
      id:'',
      nombre:'',
      categorias: [],
      estado:'',
      numero:0
    }
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas',JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas',JSON.stringify(state.tareas))
    },
    tarea(state, payload){
      if(!state.tareas.find(e=> e.id===payload)){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(e=> e.id===payload);
    },
    update(state, payload){
      state.tareas = state.tareas.map(e => e.id === payload.id? payload:e);
      localStorage.setItem('tareas',JSON.stringify(state.tareas))
      router.push('/')
    },
    cargar(state, payload){
      state.tareas = payload;
    }
  },
  actions: {
    cargarLocalStorage({commit}){
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({commit}, tarea){
      commit('set', tarea);
    },
    deleteTareas({commit}, id){
      commit('eliminar',id);
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }

  },
  modules: {
  }
})