<template>
  <v-container>
      <v-card>
          <v-card-text>
              <h1 class="mb-5">{{edit? "Editar nota":"Agregar nueva nota"}}</h1>
              <v-form @submit.prevent="edit? EditNota():AddNota()">
                  <v-row>
                      <v-col cols="12" md="6">
                          <v-text-field label="Nombre de la nota" v-model="nota.nombre"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                          <v-text-field label="Descripcion de la nota" v-model="nota.descripcion"></v-text-field>
                      </v-col>
                  </v-row>
                  <v-btn color="primary" class="mr-5" type="submit" >Guardar</v-btn>
                  <v-btn color="error" @click="btnRegresar()">Regresar</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
      
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            nota : {nombre:'', descripcion:''},
            edit: false

        }
    },
    methods:{
        btnGuadar(){
            this.$alert.showAlertSimple('success',"Mensaje correcto");
        },
        btnRegresar(){
            this.$router.push({name:"Notas"})
        },
        AddNota(){
             let config = {
                headers: {
                    token: this.token
                }
            }
            this.$loader.activate();
            this.axios.post('/nueva-nota', this.nota, config)
            .then(res=>{
                this.$alert.showAlertSimple('success',"La nota se agrego correctamente");
                this.btnRegresar();
            })
            .catch (error => {
                if(error.response.data.error.errors.nombre.message){
                    this.$alert.showAlertSimple('error',error.response.data.error.errors.nombre.message);
                }
                
                console.log()})
            .finally(() => {
                this.$loader.deactivate();
                console.log("Se termino de ejecutar la funcion")
            })
            
        },
        EditNota(){
            console.log(this.nota)
            if(confirm("Estas seguro de guardar las notas")){
                this.$loader.activate();
                this.nota.dateupdate = new Date()
                this.axios.put(`/nota/${this.$route.params.id}`,this.nota)
                    .then(res => {
                        this.$alert.showAlertSimple('success',"La nota se modifico correctamente");
                        this.btnRegresar();
                    })
                    .catch(error => {
                        this.$alert.showAlertSimple('error',error.response.data);
                    })
                    .finally(()=>{
                        this.$loader.deactivate();
                    })
            }
            
            
        },
        getOneNote(id){
            this.axios.get(`/nota/${id}`)
            .then(res=>{
                /* this.nota.nombre = res.data.nombre
                this.nota.descripcion = res.data.descripcion */
                this.nota = res.data
               
            })
            .catch(error=>{

            })
        }

    },
    created(){
        if(this.$route.params.id){
            this.edit = true;
            this.getOneNote(this.$route.params.id);
        }
    },
    computed:{
        ...mapState(['token'])
    }

}
</script>

<style>

</style>