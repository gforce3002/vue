import Vue from 'vue'
import Vuetify from 'vuetify'
//import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify,{
    theme:{
        primary: '#ee44aa',
        secondary:'#424242',
        accent:'#82b1ff',
        error:'#ff5252',
        info:'#2196f3',
        syccess:'#4caf50',
        warning:'#ffc107'
    },
    customProperties: true,
    iconfont:'md'
})