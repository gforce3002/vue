<template>
  <h1>Login</h1>
  <div class="alert alert-danger" v-if="error.tipo !== null">
      {{error.mensaje}}
  </div>
  <form @submit.prevent="procesarformulario()">
      <input type="email" class="form-control my-2" placeholder="email" v-model.trim="email" :class="[error.tipo === 'email'? 'is-invalid':'']">
      <input type="password" class="form-control my-2" placeholder="password" v-model.trim="pass" :class="[error.tipo === 'Password'? 'is-invalid':'']">
      <button type="submit" :disabled="bloquear" class="btn btn-primary">Entrar</button>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data(){
    return{
      email:'',
      pass:''
    }
  },
  computed:{
        /**Realiamos validades del formulario */
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass.length > 5){
                return false
            }
            return true
        },
        ...mapState(['error'])

    },
  methods:{
    ...mapActions(['ingresoUsuario']),
   async procesarformulario(){
        await this.ingresoUsuario({email:this.email, password: this.pass});
        if(this.error.tipo !== null){
          return
        }
        this.email = '';
        this.pass = '';
    }
  }
}
</script>