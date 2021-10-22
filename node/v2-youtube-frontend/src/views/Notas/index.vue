<template>
    <v-container>
    <v-row>
      <v-col>
        <v-card elevation="6" class="mt-10">
          <v-card-text>
            <v-btn  color="blue" dark fab absolute right top :to="{name: 'NotasNew'}">+</v-btn>
           <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left" width="">
                      #
                    </th>
                    <th class="text-left">
                      Nombre
                    </th>
                    <th class="text-left">
                      Descripcion
                    </th>
                    <th class="text-left">
                      Fecha
                    </th>
                    <th class="text-left">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in notas"
                    :key="index"
                  >
                    <td>{{ index }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.descripcion }}</td>
                    <td>{{ item.fecha }}</td>
                    <td></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'Home',
    data(){
      return{
        notas : []
      }
    },
    components: {
      
    },
    methods:{
      listarNotas(){
        this.axios.get('/notas')
        .then(res =>{
          this.notas = res.data()
          console.log(res.data())
        })
        .catch(e => {console.log(e.response)})
      }
    },
    created(){
      this.listarNotas();
    }

  }
</script>

