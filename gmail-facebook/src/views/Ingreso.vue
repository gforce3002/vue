<template>
    
        <v-row align="center" justify="center" class="my-5" >
        <v-col cols="12" sm="8" md="8" >
            <v-card class="elevation-12">
                <v-card-text :class="registro? 'success':'primary'" class="display-1 text-uppercase primary white--text text-center">
                    <span v-if="!registro">Login</span>
                    <span v-else>Registro</span>
                </v-card-text>
                <v-card-text>
                    <v-btn block color="error" class="mt-3" @click="btngoogle()">
                        <v-icon left dark>mdi-google</v-icon>
                        Google 
                        
                    </v-btn> 
                    <v-btn block color="info" class="mt-3" left dark @click="btnfacebook()">
                        <v-icon left dark>mdi-facebook</v-icon>
                        Facebook
                    </v-btn>
                </v-card-text>
                <v-card-text>
                    <v-btn block @click="registro = true" v-if="!registro">¿No tienes cuenta? Registrate aqui</v-btn>
                    <v-btn block @click="registro = false" v-else>¿Ya tienes cuenta? Ingresa aqui</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>    
    
    
 
</template>

<script>
import {firebase, auth, db} from '@/plugins/firebase'
import {mapActions, mapMutations} from 'vuex'
import router from '../router'
export default {
    data(){
        return{
           registro:false 
        }
    },
    methods: {
    
       ...mapMutations(['nuevoUsuario']),
       ...mapActions(['setUsuario']),
        btngoogle(){
            console.log("google")
            const provider = new firebase.auth.GoogleAuthProvider()
            this.ingresar(provider)
        },
        btnfacebook(){
            const provider = new firebase.auth.FacebookAuthProvider()
            this.ingresar(provider) 
        },

        async ingresar(provider){
            firebase.auth().lenguageCode = 'es'
            try {
                const result = await firebase.auth().signInWithPopup(provider)
                const user = result.user; 
                this.setUsuario(user)
                router.push({name:'Home'})
            } catch (error) {
              console.log(error)  
            }
        }
    },
}
</script>

