<template>
  <form @submit.prevent="submit">
      <input type="email" placeholder="Ingresa tu email"
       class="form-control my-3" v-model.lazy="$v.email.$model"
       :class="{'is-invalid':$v.email.$error}">
       <p class="text-danger" v-if="!$v.email.email">El correo es incorrecto</p>
       <p class="text-danger" v-if="!$v.email.required">Campo requerido</p>
      <!-- <p>{{$v.email}}</p> -->
      <input type="password" v-model.trim.lazy="$v.pass1.$model" 
      placeholder="Ingresa contraseña" class="form-control my-3"
       :class="{'is-invalid':$v.pass1.$error}">
      <p class="text-danger" v-if="!$v.pass1.required">Campo requerido</p>
      <p class="text-danger" v-if="!$v.pass1.minLength">minimo {{ $v.pass1.$params.minLength.min }} caracteres</p>
      <!-- <p>{{$v.pass1}}</p> -->
      <input type="password" v-model.trim.lazy="$v.pass2.$model" 
      placeholder="Confirma contraseña" class="form-control my-3"
       :class="{'is-invalid':$v.pass2.$error}">
      <p class="text-danger" v-if="!$v.pass2.sameAsPassword">Las contraseñas no coinciden</p>
      <!-- <p>{{$v.pass2}}</p> -->
      <b-button variant="primary" type="submit" :disabled="$v.$invalid">Enviar</b-button>
      <!-- <p>{{$v.$invalid}}</p>
      <p>{{$v}}</p> -->
  </form>
</template>

<script>
import {required, email, sameAs, minLength} from 'vuelidate/lib/validators'
export default {
    name:"Validate",
    data(){
        return{
            email:'',
            pass1:'',
            pass2:''
        }
    },
    methods:{
        submit(){
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                //this.submitStatus = 'ERROR'
                console.log('Se genero un error');
            } else {
                // do your submit logic here
                //this.submitStatus = 'PENDING'
                console.log('Todos los campos correctos');
                setTimeout(() => {
                //this.submitStatus = 'OK'
                }, 500)
            }
        }
    },
    validations:{
        email:{required, email},
        pass1:{required, minLength: minLength(6)},
        pass2:{sameAsPassword: sameAs('pass1')}

    }
}
</script>