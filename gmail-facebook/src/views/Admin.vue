<template>
 <v-layout justify-center>
     <v-flex xs6>
         <v-card class="text-center">
             <v-card-text>
                 <v-avatar>
                     <img :src="usuario.foto" alt="" >
                 </v-avatar>
             </v-card-text>
             <v-card-text>
                 <p>{{usuario.nombre}}</p>
             </v-card-text>
              <v-card-text>
                  <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)">
                 <v-btn color="primary" @click="$refs.boton.click()" class="mr-2">Buscar Imagen</v-btn>
                 <v-btn color="success" :disabled="file===null" @click="upLoadImage()"
                 :loading="loading">Subir Imagen</v-btn>
             </v-card-text>
             <v-card-text v-if="file">
                 <h4>{{file.name}}</h4>
                 <v-img :src="urlTemp"></v-img>
             </v-card-text>
         </v-card>
     </v-flex>
 </v-layout>
</template>

<script>
import {firebase, storage, db} from '../plugins/firebase'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            file:null,
            urlTemp: '',
            loading:false
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        buscarImagen(event){
            //console.log(event.target.files[0])
            this.file=event.target.files[0];
            const reader = new FileReader()
            reader.readAsDataURL(this.file)
            reader.onload = (e) =>{
                //console.log(e.target.result)
                this.urlTemp = e.target.result
            }
        },
        async upLoadImage(){
            try {
                this.loading = true
                const refImagen = storage.ref().child(this.usuario.email).child("foto_perfil")
                const res = await refImagen.put(this.file)
                const urlDescarga = await refImagen.getDownloadURL()
                this.usuario.foto = urlDescarga;
                await db.collection('usuarios').doc(this.usuario.uid).update({Foto: this.usuario.foto})
            } catch (error) {
                console.log(error)
            } finally{
                this.loading = false
            }
        }
    }
}
</script>

<style>

</style>