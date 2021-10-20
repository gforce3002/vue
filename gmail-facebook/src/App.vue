<template>
  <v-app>
    <Navbar v-if="existeUsuario"/>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  },
  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['cerrarSession']),
  },
  computed:{
    ...mapState(['usuario']),
    ...mapGetters(['existeUsuario'])
  }
};
</script>
