<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
  <p>{{tarea}}</p>
  <hr>
  <ListaTareas />
</template>

<script>
// @ is an alias to /src
import Input from '../components/Input'
import {mapActions} from 'vuex';
import ListaTareas from '../components/Lista-tareas.vue'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
  },
  data() {
    return {
      tarea:{
        id:'',
        nombre:'',
        categorias: [],
        estado:'',
        numero:0
      },
      texto: ''
    }
  },
  methods:{
    ...mapActions(['setTareas','cargarLocalStorage']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log("Campo vacio")
        return
      }

      //generar id
      this.tarea.id = shortid.generate();
      
      //envian los datos
      this.setTareas(this.tarea);

      /* Envaimos los datos */
      this.tarea={
        id:'',
        nombre:'',
        categorias: [],
        estado:'',
        numero:0
      }
    }
  },
  computed:{
    bloquear(){
      return this.tarea.nombre.trim() === ""? true:false;
    }
  },
  created(){
    this.cargarLocalStorage();
  }
}
</script>
