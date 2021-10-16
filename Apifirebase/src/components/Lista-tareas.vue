<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <td>#</td>
                <td>id</td>
                <td>Nombre</td>
                <td>Categoria</td>
                <td>Estado</td>
                <td>Numero</td>
                <td>Accion</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(e, index) in tareas" :key="e.id">
                <td>{{index + 1}}</td>
                <td scope="row">{{e.id}}</td>
                <td>{{e.nombre}}</td>
                <td>{{e.categorias.join(', ')}}

                    <!-- <span v-for="(cat, index) in e.categorias" :key="index">
                       {{e.categorias.length === index+1? cat:cat + ', '}}
                    </span> --></td>
                <td>{{e.estado}}</td>
                <td>{{e.numero}}</td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="deleteTareas(e.id)">Eliminar</button>
                    <router-link class="btn btn-warning btn-sm ml-2" :to="{name:'Editar', params:{id:e.id}}">Editar</router-link>
                    </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data(){
        return{}
    },
    computed:{
        ...mapState(['tareas']),
    },
    methods:{
        ...mapActions(['deleteTareas'])
    }

}
</script>