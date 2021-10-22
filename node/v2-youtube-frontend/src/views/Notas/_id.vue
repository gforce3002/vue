<template>
  <v-container>
      <v-card>
          <v-card-text>
              <h1>Agregar nueva nota</h1>
              <v-form>
                  <v-row>
                      <v-col cols="12" md="6">
                          <v-text-field label="Nombre de la nota" v-model="nota.nombre"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                          <v-text-field label="Descripcion de la nota"></v-text-field>
                      </v-col>
                  </v-row>
                  <v-btn color="primary" class="mr-5">Guardar</v-btn>
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
        btnRegresar(){
            this.$router.push({name:"Notas"})
        }
    }

}
</script>

<style>

</style>