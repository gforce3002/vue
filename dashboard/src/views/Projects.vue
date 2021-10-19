<template>
  <div class="Projects">
    <h1 class=" subheading ml-5 grey--text">Projects</h1>
    <v-container class="ml-5">
      <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
          <template v-slot:activator="{on}">
            <v-btn small outlined color="green" @click="sortBy('title')" 
            class="mr-2" dark v-on="on">
              <v-icon left small >mdi-folder</v-icon>
              <span class="caption text-lowercase">By project title</span>
            </v-btn>
          </template>
          <span>sort projects</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{on}">
            <v-btn small outlined color="green" @click="sortBy('person')" 
            class="mr-2" dark v-on="on">
              <v-icon left small >mdi-account</v-icon>
              <span class="caption text-lowercase">By name</span>
            </v-btn>
          </template>
          <span>sort projects</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title" class="mb-1">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      projects:[
        {title:"Site web", person:"Francisco", due:"10/10/1987", status:"complete"},
        {title:"Aplication movil", person:"daniel", due:"10/10/1990", status:"complete"},
        {title:"Gestion de stock", person:"zineb", due:"10/10/1987", status:"yes"},
        {title:"Conception", person:"Hu java", due:"10/10/1991", status:"up"},
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=> a[prop] <b[prop]? -1:1)
    }
  }
  
}
</script>

<style scoped>
  .project.complete{
    border-left: 4px solid #3cd1c2
  }
  .project.no{
    border-left: 4px solid orange
  }
  .project.yes{
    border-left: 4px solid yellow
  }
  .project.up{
    border-left: 4px solid red
  }
</style>
