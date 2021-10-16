<template>
  <nav class="navbar navbar-dark bg-dark">
      
    <router-link to="/" class="navbar-brand">
        Formularios
    </router-link>
    <div class="flex">
        <router-link to="/" class="btn btn-dark" v-if="usuarioAutenticado">
            Tareas
        </router-link>
        <router-link to="/login" class="btn btn-dark" v-if="!usuarioAutenticado">
            Log In
        </router-link>
        <router-link to="/registro" class="btn btn-dark" v-if="!usuarioAutenticado">
            Registrar
        </router-link>
        <button v-if="usuarioAutenticado" class="btn btn-dark" @click="cerrarSession()"> Cerrar session</button>
    </div>
      
        
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed:{
      ...mapGetters(['usuarioAutenticado'])
    },
    methods:{
      ...mapActions(['cerrarSession'])
    }

}
</script>

