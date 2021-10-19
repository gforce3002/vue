<template>
    <nav>
        <v-app-bar color="orange" app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <router-link :to="{name: 'Home'}" class="white--text">
                    Vue
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
             <v-btn @click="cerrarSession()" color="warning" v-if="existeUsuario">
                    <span class="mr-2">Cerrar sessión</span>
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
        </v-app-bar> 
        <v-navigation-drawer color="orange lighten-1" v-model="drawer" app>
            <!-- <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 text-center">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-center">
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item> -->
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <v-img :src="usuario.foto"></v-img>
                    </v-avatar>   
                </v-flex>
                <v-flex v-if="existeUsuario">
                    <p class="text-center white--text subheading mt-1">{{usuario.nombre}}</p>
                </v-flex>
                
            </v-layout>
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.to">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{menu.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{menu.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    data(){
        return {
            drawer:true,
            menus:[
                {title: "Dashboard", icon:'mdi-view-dashboard', to:{name:"Home"}},
                {title: "Account", icon:'mdi-account-box', to:{name:"Ingreso"}},
                {title: "Admin", icon:'mdi-gavel', to:{name:"Admin"}},
            ]
        }
    },
    methods:{
    ...mapActions(['cerrarSession']),
    },
    computed:{
        ...mapState(['usuario']),
        ...mapGetters(['existeUsuario'])
    }
}
</script>

<style>

</style>