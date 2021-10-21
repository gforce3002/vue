import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import path from 'path';

const app = express();
const port= 8080;

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