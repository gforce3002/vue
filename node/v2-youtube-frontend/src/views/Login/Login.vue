<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-card class="elevation-12">
        <v-row>
          <v-col cols=12>
            <v-form @submit.prevent="login()">
              <v-card-text>
                <h1 class="text-center display-2 text--accent-3" >Sign in to E-education</h1>
                
                    <v-text-field label="Email" name="Email" 
                    prepend-icon="mdi-email" type="text"
                    color="blue accent-3" v-model="usuario.email"/>
                    <v-text-field label="Password" name="Password" 
                    prepend-icon="mdi-lock" type="password"
                    color="blue accent-3" v-model="usuario.pass"/>
                  
              </v-card-text>
              <div class="text-center my-3">
                      <v-btn rounded color="blue accent-3" dark type="submit"> Entrar</v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      usuario : {email:'', pass:''}
    }
  },
  methods:{
    ...mapActions(["setUsuario"]),
    login(){
      this.$loader.activate();
      console.log(this.usuario)
      this.axios.post('/login', this.usuario)
        .then(res=>{
          this.setUsuario(res.data.token)
          console.log(res.data)
        })
        .catch (error => {
                if(error){
                    this.$alert.showAlertSimple('error',error.response.data.mensaje);
                }
        })
        .finally(() => {
            this.$loader.deactivate();
            console.log("Se termino de ejecutar la funcion")
        })
    }
  }
}
</script>

<style>

</style>