<template>
  <v-container>
      <v-card>
          <v-card-text>
              <h1>Agregar nueva nota</h1>
              <v-form @submit.prevent="AddNota()">
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
export default {
    data(){
        return{
            nota : {nombre:'', descripcion:''}
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
            this.$loader.activate();
            this.axios.post('/nueva-nota',this.nota)
            .then(res=>{
                this.$alert.showAlertSimple('success',"La nota se agrego correctamente");
                this.btnRegresar();
            })
            .catch (error => {
                if(error.response.data.error.errors.nombre.message){
                    this.$alert.showAlertSimple('error',error.response.data.error.errors.nombre.message);
                }
                
                console.log()})
            .finally(e => {
                this.$loader.deactivate();
                console.log("Se termino de ejecutar la funcion")
            })
            
        }
    }

}
</script>

<style>

</style>