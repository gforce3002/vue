<template>
    <v-container>
    <v-row>
      <v-col>
        <v-card elevation="6" class="mt-10">
          <v-card-text>
            <v-btn  color="blue" dark fab absolute right top :to="{name: 'NotasNew'}">
                <v-icon>add_circle_outline</v-icon></v-btn>
           <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left" width="5%">
                      #
                    </th>
                    <th class="text-left" width="35%">
                      Nombre
                    </th>
                    <th class="text-left" width="40%">
                      Descripcion
                    </th>
                    <th class="text-left" width="10%">
                      Fecha
                    </th>
                    <th class="text-left" width="10%">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in notas"
                    :key="index"
                  >
                    <td>{{ index +1}}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.descripcion }}</td>
                    <td>{{ item.date }}</td>
                    <td class="text-center">
                        <v-btn fab small color="pink" class="mr-2 white--text" :to="`/notas/edit/${item._id}`">
                            <v-icon >mode_edit_outline</v-icon>
                        </v-btn>
                        <v-btn fab small color="error" class="mr-2" @click="btnEliminar(item._id)">
                            <v-icon>delete_outline</v-icon>
                        </v-btn>
                    </td>
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
        this.axios.get('/nota')
        .then(res =>{
          this.notas = res.data
        })
        .catch(e => {
            this.$alert.showAlertSimple('error',e);
            console.log(e)})
      },
      btnEliminar(id){
        if(confirm("Estas seguro de eliminar la nota")){
          console.log(id)
          this.$loader.activate();
          this.axios.delete(`/nota/${id}`)
          .then(res=>{
            this.notas = this.notas.filter(e=> e._id != id)
            this.$alert.showAlertSimple('success',"Nota eliminada")
          })
          .catch(error => {
              this.$alert.showAlertSimple('error',error.response.data)
          })
          .finally(()=>{
            this.$loader.deactivate();
          })
        }
      }
    },
    created(){
      this.listarNotas();
    }

  }
</script>

