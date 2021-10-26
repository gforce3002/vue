<template>
    <div>
        <v-app-bar
      app
      color="primary"
      dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title >
          App note
        </v-toolbar-title>
  
      

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        text
      >
        <span class="mr-2">Ingresar</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn  text @click="cerrarsession()">
        Salir
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer 
    app 
    v-model="drawer" 
    color="primary" 
    dark
    expand-on-hover
    class="darken-2">
    <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list >
         <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
           <v-list-item to="/notas">
            <v-list-item-icon>
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Notas</v-list-item-title>
          </v-list-item>
          
        </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data: () => ({
    drawer:true
  }),
  methods:{
    ...mapActions(['cerrarsession'])
  }
}
</script>
