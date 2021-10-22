<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="6">
          <v-card-text>
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
                  <!-- <tr
                    v-for="item in desserts"
                    :key="item.name"
                  >
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr> -->
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
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
    components: {
      
    },
  }
</script>
