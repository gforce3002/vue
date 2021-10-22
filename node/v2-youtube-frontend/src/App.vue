<template>
  <v-app>
    <Navbar />
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
export default {
  name: 'App',

  
  components:{
    Navbar,
    Loader,
    Alert

  }
};
</script>
