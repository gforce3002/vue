<template>
  <div class="mt-2">
    <Navbar />
  <div class="container">
    <router-view/>
  </div>
  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapActions } from 'vuex';

export default ({
  data() {
    
  },
  components:{
    Navbar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage();
  }
})
</script>

