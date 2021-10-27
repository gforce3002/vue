import express  from "express";
import {verificarAuth, verificarAdmon} from '../middlewares/autenticacion'
const router = express.Router();

/**Importar el modelo nota */
import Nota from '../models/nota'

//Agregamos una nota
router
.post('/nueva-nota', verificarAuth, async(req, res)=>{
    const body = req.body
    body.usuarioId = req.usuario._id
    try {
        const notaDB = await Nota.create(body)
        res.status(200).json(notaDB)
    } catch (error) {
        return res.status(500).json({
            mensaje:"Error en el servidor",
            error
        })
    }
})
//Obtenemos una nota 
.get('/nota/:_id', async(req, res)=>{
  const id = req.params
  console.log(id);
  try {
    const notaDB = await Nota.findOne(id)
    res.status(200).json(notaDB)   
  } catch (error) {
    return res.status(400).json({
        mensaje:"Error en el servidor",
        error
    })
  }
})
//obtenemos todas las notas
// .get('/nota',verificarAuth, async(req, res)=>{
//     try {
//       const notaDB = await Nota.find({usuarioId: req.usuario._id, activo:true})
//       res.status(200).json(notaDB)   
//     } catch (error) {
//       return res.status(400).json({
//           mensaje:"no hay registros",
//           error
//       })
//     }
//   })
.get('/nota',verificarAuth, async(req, res)=>{
  //variables para la paginacion
  const page = Number(req.query.page) || 1
  const limit = 10;
  const skip = (page - 1) * limit
  
  try {
    const notaDB = await Nota.find({usuarioId: req.usuario._id, activo:true}).limit(limit).skip(skip);
    const totalDoc = await Nota.find({usuarioId: req.usuario._id, activo:true}).countDocuments();
    res.status(200).json({notaDB, totalDoc})   
  } catch (error) {
    return res.status(400).json({
        mensaje:"no hay registros",
        error
    })
  }
})  
.delete('/nota/:_id', async(req, res)=>{
    const id = req.params
    try {
      const notaDB = await Nota.findByIdAndDelete(id)
      if(!notaDB){
        return res.status(400).json({
            mensaje:"El registro ya fue eliminado",
            error
        })
      }
      res.status(200).json(notaDB)   
    } catch (error) {
      return res.status(400).json({
          mensaje:"El registro ya fue eliminado",
          error
      })
    }
  })
//Modificamos una nota
.put('/nota/:_id', async(req, res)=>{
    const id = req.params
    const body = req.body
    try {
      const notaDB = await Nota.findByIdAndUpdate(id,{$set: body})
      res.status(200).json(notaDB)   
    } catch (error) {
      return res.status(500).json({
          mensaje:"Error en el servidor",
          error
      })
    }
  })


module.exports = router