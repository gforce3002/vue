const app = Vue.createApp({
    data() {
        return {
            titulo:"Mi banco con Vue.js",
            cantidad:0,
            link: "https:/sistematece.com",
            estado: true,
            servicios:['Transferencias','pagos','giros','cheques'],
            desactivar: false
            
        }
    },
    methods: {
        agregarSaldo(){
            this.desactivar = false
            this.cantidad += 100
        },
        disminuirSaldo(cash){
            if(this.cantidad > 0){
                this.cantidad -= cash
            }else{
                this.desactivar = true
                alert("Saldo en 0");
            }
            
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500? 'text-success':"text-danger"; 
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})

