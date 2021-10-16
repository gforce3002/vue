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
    },
    user:null,
    error: {tipo:null, mensaje:null}
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
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
    },
    setError(state, payload){
      if(payload === "EMAIL_NOT_FOUND"){
        return state.error = {tipo:"email", mensaje:"Email no registrado"}
      }
      if(payload === "INVALID_PASSWORD"){
        return state.error = {tipo:"Password", mensaje:"La contraseña es incorrecta"}
      }
      if(payload === "INVALID_EMAIL"){
        return state.error = {tipo:"email", mensaje:"El correo es invalido"}
      }
      if(payload === "EMAIL_EXISTS"){
        return state.error = {tipo:"email", mensaje:"El correo ya existe"}
      }
      if(payload === null){
        return state.error= {tipo:null, mensaje:null}
      }
    }
  },
  actions: {
    cerrarSession({commit}){
      commit('setUser',null)
      localStorage.removeItem('usuario')
      router.push('/login')
    },
    async ingresoUsuario({commit}, usuario){
      console.log(usuario);
      try{
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8vN7eGPMlJ1GLdR0kNF7PMLfYfwB06Ic',{
          method:'POST',
          body: JSON.stringify({email:usuario.email, password:usuario.password, returnSecureToken: true})
        })
        const userDB = await res.json();
        if(userDB.error){
          console.log(userDB.error)
          return commit('setError', userDB.error.message)
        }
        commit('setUser',userDB);
        commit('setError', null)
        localStorage.setItem('usuario', JSON.stringify(userDB))
        router.push('/')
      }catch(error){
        console.log(error)
      }
    },
    async registrarUsuario({commit}, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8vN7eGPMlJ1GLdR0kNF7PMLfYfwB06Ic',{
          method:'POST',
          body: JSON.stringify({email:usuario.email, password:usuario.password, returnSecureToken: true})
        })
        const dataDB = await res.json();
        if(dataDB.error){
          console.log(dataDB.error);
          return commit('setError', dataDB.error.message)
        }
        commit('setUser',dataDB);
        localStorage.setItem('usuario', JSON.stringify(dataDB))
        router.push('/')
        console.log(dataDB);
      } catch (error) {
        console.log(error)
      }
      //commit('setUser',usuario)
    },
    async cargarLocalStorage({commit,state}){
      console.log(state);
      if(localStorage.getItem('usuario')){
        commit('setUser',JSON.parse(localStorage.getItem('usuario')));
      }else{
        return commit('setUser',null)
      }
       try {
        const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`,{
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
    async setTareas({commit,state}, tarea){
      try{
       const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,{
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
    async deleteTareas({commit,state}, id){
      try {
        const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,{
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
    async updateTarea({commit,state}, tarea){
      try {
        const res = await fetch(`https://udemy-api-8c3fd-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,{
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
  getters:{
    usuarioAutenticado(state){
      return !!state.user
    }
  },
  modules: {

  }
  
})
