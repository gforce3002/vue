<template>
    <div class="mt-5">
        <form>
            <b-row>
                <b-col cols="12" md="6" lg="3">
                    <b-form-input v-model="text" placeholder="Enter your name" type="text"></b-form-input>
                    <div class="mt-2">Value: {{ text }}</div>
                </b-col>
                <b-col cols="12" md="6" lg="3">
                    <b-form-input v-model="text" placeholder="Enter your name" type="text"></b-form-input>
                    <div class="mt-2">Value: {{ text }}</div>
                </b-col>
                <b-col cols="12">
                    <div role="group">
                        <label for="input-live">Name:</label>
                        <b-form-input
                        id="input-live"
                        v-model="name"
                        :state="nameState"
                        aria-describedby="input-live-help input-live-feedback"
                        placeholder="Enter your name"
                        trim
                        ></b-form-input>

                        <!-- This will only be shown if the preceding input has an invalid state -->
                        <b-form-invalid-feedback id="input-live-feedback">
                        Enter at least 3 letters
                        </b-form-invalid-feedback>

                        <!-- This is a form text block (formerly known as help block) -->
                        <b-form-text id="input-live-help">Your full name.</b-form-text>
                    </div>
                </b-col>
                <b-col md="3" class="mt-5">
                    <b-form-text id="input-live-help">Animal Favorito</b-form-text>
                    <b-form-select label="" v-model="select" :options="animales"></b-form-select>
                    <b-form-text>opcion: {{select}}</b-form-text>
                </b-col>
                <b-col md="3" class="mt-5">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <p>Radio:{{radio}}</p>
                </b-col>
                 <b-col md="3" class="mt-5">
                    <b-form-checkbox-group 
                    id="checkbox-group-1"
                    v-model="selected"
                    :options="options"
                    name="flavour-1"></b-form-checkbox-group>
                    <p>check:{{selected}}</p>
                </b-col>

            </b-row>
            
        </form>
        
    </div>
    
</template>

<script>
export default {
    name:"Forms",
    data(){
        return{
            text:'',
            name:'',
            select:'',
            radio:'',
            animales:[
                {label:"Selecciona tu animal favorito", 
                options: [
                {value:'perro', text: "Perro"},
                {value:'gato', text: "Gato"},
                {value:'pato', text: "Pato"}
                ]}
            ],
            animalesRadio:[
                {value:'perro', text: "Perro"},
                {value:'gato', text: "Gato"},
                {value:'pato', text: "Pato"}
            ],
            selected: [], // Must be an array reference!
            options: [
            { text: 'Orange', value: 'orange' },
            { text: 'Apple', value: 'apple' },
            { text: 'Pineapple', value: 'pineapple' },
            { text: 'Grape', value: 'grape' }
            ]
        }
    },
    computed:{
        /**
         * Siempre las funciones que esten en computed regresaran un true o false
         */
        nameState(){
            return this.name.length > 2? true:false;
        }
    }
}
</script>