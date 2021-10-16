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
      
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      
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
      
      router.push('/')
    },
    cargar(state, payload){
      state.tareas = payload;
    }
  },
  actions: {
    async cargarLocalStorage({commit}){
       try {
        const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas.json`,{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const dataDB = await res.json();
        commit('cargar',Object.values(dataDB))
       } catch (error) {
         console.log(error)
       }
    },
    async setTareas({commit}, tarea){
      try{
       const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json();
        console.log(dataDB);
      }catch(error){
        console.log(error)
      }
      commit('set', tarea);
    },
    async deleteTareas({commit}, id){
      try {
        const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${id}.json`,{
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const dataDB = await res.json();
        commit('eliminar',id);
      } catch (error) {
        console.log(error)
      }
      
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea){
      try {
        const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PATCH',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json();
        commit('update', tarea)
      } catch (error) {
        console.log(error);
      }
     
    }

  },
  modules: {
  }
})
