<template>
    <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="check1" value="JavaScript" v-model="tarea.categorias">
      <label class="form-check-label" for="check1">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="check2" value="Nodejs" v-model="tarea.categorias">
      <label class="form-check-label" for="check2">Nodejs</label>
    </div>
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio-1" value="Urgente" v-model="tarea.estado">
        <label class="form-check-label" for="radio-1">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio-2" value="Relax" v-model="tarea.estado">
        <label class="form-check-label" for="radio-2">Relax</label>
      </div>
    </div>
    <div class="mt-2">
      <input class="form-control my-2" type="number" name="" id="" v-model.number="tarea.numero">
    </div>
    <hr>
    <button :disabled="bloquear" class="btn btn-dark mt-2 btn-block">Procesar</button>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:{
        tarea: Object
    },
    computed:{
    bloquear(){
      return this.tarea.nombre.trim() === ""? true:false;
    }
  }
}
</script>

