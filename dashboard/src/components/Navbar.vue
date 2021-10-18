<template>
    <nav>
        <v-app-bar color="red" dark app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer">

            </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">E-education</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" color="red">
                        <v-icon left>mdi-menu-down-outline</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list flat>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text> 
                <span>Exit</span>
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" dark app class="red darken-4">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <v-img src="/img1.png"></v-img>
                    </v-avatar>   
                </v-flex>
                <p class="text-center white--text subheading mt-1">ing Francisco Ramirez</p>
            </v-layout>
            <Popup class="mt-4 mb-4" />
            <v-list flat>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon> 
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
    components:{
        Popup
    },
    data: ()=>({
        drawer:true,
        links:[
            {icon:'mdi-view-dashboard', text: "Dashboard", route:'/'},
            {icon:'mdi-folder', text: "My Project", route:'/project'},
            {icon:'mdi-account-circle', text: "Team", route:'/team'}
            
        ]
    })
}
</script>

<style scoped>
    .border{
        border-left: 4px solid #0ba518
    }
</style>
