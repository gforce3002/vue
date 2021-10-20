<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido {{usuario.nombre}}</h3>
                </v-card-text>
                <v-card-text class="scroll" v-chat-scroll>
                    <div :class="item.nombre === usuario.nombre? 'text-right':'text-left'" 
                    v-for="(item, index) in mensajes" :key="index">
                        <v-chip>
                            <v-avatar class="mr-2">
                                <img :src="item.foto" alt="">
                            </v-avatar> {{item.mensaje}}
                        </v-chip>
                        <p class="caption ">{{item.fecha}}</p>
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-form @submit.prevent="enviarMensaje()" v-model="valido">
                        <v-text-field v-model="mensaje" label="escribe tu mensaje a enviar" required
                        :rules="reglas">

                        </v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import {db} from '../plugins/firebase'
import moment from 'moment';
export default {
    data(){
        return{
            mensaje:'',
            valido:false,
            reglas:[
                v => !!v || "Tienes que escribir un mensaje"
            ],
            mensajes: []
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        enviarMensaje(){
            if(this.valido){
                console.log(this.mensaje, this.valido)
                
                db.collection('chats').add({
                    mensaje: this.mensaje,
                    nombre: this.usuario.nombre,
                    foto: this.usuario.foto,
                    fecha: Date.now()
                }).catch(error=>console.log(error))
                this.mensaje =''
            }else{
                console.log("no escribiste ndad")
            }
            
        }
    },
    created(){
        moment.locale('es');
        let ref = db.collection('chats').orderBy('fecha', "desc").limit(10)
        ref.onSnapshot(querySnapshot=>{
            this.mensajes = []
            querySnapshot.forEach(e => {
                this.mensajes.unshift({
                    nombre: e.data().nombre,
                    mensaje: e.data().mensaje,
                    foto: e.data().foto,
                    fecha: moment(e.data().fecha).format('lll')
                })
            })
            console.log(this.mensajes)
        })
    }
}
</script>

<style scoped>
    .scroll{
        height: 70vh;
        overflow: auto;
    }
</style>