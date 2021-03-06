import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const port= 8080;
/**conexion a la base de datos */
const uri = "mongodb://localhost:27017/udemy"
//const uri = "mongodb://gforce3002:9804520k@cluster0-shard-00-00.dhw1u.mongodb.net:27017,cluster0-shard-00-01.dhw1u.mongodb.net:27017,cluster0-shard-00-02.dhw1u.mongodb.net:27017/udemy?ssl=true&replicaSet=atlas-r4vmww-shard-0&authSource=admin&retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true

}
mongoose.connect(uri,options).then(
    ()=>{
        console.log("conectado a la base de datos")
    },
    err=>{console.log(err)}
)

//MIDDLEWARE
/**Morgan se utiliza para visualizar las peticiones que hagan el usuario 
 * atravez de los verbos http como es GET, PUT, DELETE, POST
 */
app.use(morgan('tiny'))

/**Cors permite para validar peticiones de otros dominios */
app.use(cors())

/**convertir peticiones en json */
app.use(express.json())
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))

//RUTAS

/* app.get('/', function(req,res){
    res.send("Hola mundoonno")
}) */
app.use('/api/login', require('./routes/login'))
app.use('/api', require('./routes/nota'))
app.use('/api', require('./routes/user'))

//Middleware para Vue.js router modo history
/**Esta linea sirve para visualizar todas las paginas o las vistas ui del sitio web
 * de acuerdo al directorio que se determine
 */
 const history = require('connect-history-api-fallback')
 app.use(history())
 app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || port)
app.listen(app.get('puerto'),()=>{
    console.log(`El servidor esta escuchando en http://localhost:${app.get('puerto')}`)
})