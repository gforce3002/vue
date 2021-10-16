<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker v-model="picker" 
          full-width locale="es-mx"
          :min="minimo" :max="maximo" @change="getDolar(picker)">

          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-xs-center">
            $ {{valor}} {{picker}}
          </v-card-text>
        </v-card>
      </v-flex>
      
    </v-layout>
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return {
      picker:new Date().toISOString().substr(0,10),
      minimo: "1984",
      maximo: new Date().toISOString().substr(0,10),
      valor:null
    }
  },
  methods:{
    ...mapMutations(['showLoading','hideLoading']),

    async getDolar(dia){
      let arrayFecha = dia.split('-')
      dia = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0];
      try {
        this.showLoading({titulo:"ejemplo", color:'warning'})
        let datos = await axios.get("https://mindicador.cl/api/dolar/"+dia)
        this.valor = await datos.data.serie.length > 0 ? datos.data.serie[0].valor:0  
      } catch (error) {
        console.log(error)
      }finally{
        this.hideLoading();
      }
    }

  },
  created(){
    this.getDolar(this.picker)
  }
}
</script>
