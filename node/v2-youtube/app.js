const express = require('express');
const app = express();
const port= 8080;

app.get('/', function(req,res){
    res.send("Hola mundo")
})

app.listen(port,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${port}`)
})