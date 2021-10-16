<template>
    <h1>Registro de Usuarios</h1>
    <div class="alert alert-danger" v-if="error.tipo !== null">
      {{error.mensaje}}
    </div>
    <form @submit.prevent="procesarformulario()">
        <input type="email" class="form-control my-2" placeholder="email" v-model.trim="email" :class="[error.tipo === 'email'? 'is-invalid':'']">
        <input type="password" class="form-control my-2" placeholder="password" v-model.trim="pass1">
        <input type="password" class="form-control my-2" placeholder="password" v-model.trim="pass2">
        <button type="submit" :disabled="bloquear" class="btn btn-primary">Registrar</button>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return {
            email:'',
            pass1:'',
            pass2:''
        }
    },
    computed:{
        /**Realiamos validades del formulario */
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5 && this.pass1 === this.pass2){
                return false
            }
            return true
        },
        ...mapState(['error'])
    },
    methods:{
        ...mapActions(['registrarUsuario']),
       async procesarformulario(){
            await this.registrarUsuario({email:this.email, password: this.pass1});
            if(this.error.tipo !== null){
                return
            }
            this.email = '';
            this.pass1 = '';
            this.pass2 = '';
        }
    }
}
</script>