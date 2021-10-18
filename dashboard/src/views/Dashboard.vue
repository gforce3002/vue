<template>
  <div>
    <h1 class=" subheading ml-5 grey--text">Dashboard</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7" width="80" height="80">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>mdi-store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right" >523614</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content> 
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-account</v-icon>
               <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7" width="80" height="80">
                <v-sheet color="#F44336" width="80" height="80" elevation="10">
                  <v-icon dark large>mdi-playlist-check</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Abonné</div>
                <v-list-item-title class="headline mb-1 text-right" >+700</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content> 
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-playlist-check</v-icon>
               <div class="overline">AAE IdeaPro</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7" width="80" height="80">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>mdi-cart</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Shoppíng</div>
                <v-list-item-title class="headline mb-1 text-right" >$34,245</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content> 
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-credit-card</v-icon>
               <div class="overline">VISA card</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7" width="80" height="80">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>mdi-folder-move</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Folder shared</div>
                <v-list-item-title class="headline mb-1 text-right" >1730</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content> 
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-folder</v-icon>
               <div class="overline">Product</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
              <v-card class="text-center ma-3">
                <v-responsive class="pt-4">
                   <v-avatar size="100" class="red lighten-2">
                     <img :src="person.avatar" alt="" >
                   </v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="subheading">{{person.name}}</div>
                  <div class="grey--text">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined color="orange">
                        <v-icon small left >mdi-contacts</v-icon>
                        <span>Message</span>
                    </v-btn>
                </v-card-actions>
              </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  

  export default {
    name: 'Home',

    components: {
      
    },
    data(){
      return{
        team:[
          {name:"Jorge", role: "web developer", avatar:"/img1.png"},
          {name:"Maria Jose", role: "UI - UX", avatar:"/img3.png"},
          {name:"Josue Daniel", role: "back-end developer", avatar:"/img6.png"},
          {name:"Josus", role: "Tech Soport", avatar:"/img6.png"},
        ]
      }
    }
  }
</script>
