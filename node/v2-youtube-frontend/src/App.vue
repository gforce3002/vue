<template>
  <v-app>
    <Navbar v-if="estaActivo"/>
    <v-main>
      <router-view/>
    </v-main>
    <Alert />
    <Loader />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Loader from './components/utilities/Loader.vue'
import Alert from './components/utilities/Alert.vue'
import {mapState,mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',

  
  components:{
    Navbar,
    Loader,
    Alert

  },
  computed:{
    ...mapState(['session']),
    ...mapGetters(['estaActivo'])
  },
  methods:{
    ...mapActions(['leertoken'])
  },
  created(){
    this.leertoken();
  }
};
</script>
