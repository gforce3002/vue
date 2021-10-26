import express  from "express";
import bcrypt from 'bcrypt'
import _ from 'underscore'
import {verificarAuth, verificarAdmon} from '../middlewares/autenticacion'

const router = express.Router();
const saltRounds = 10
/**Importar el modelo nota */
import User from '../models/user'

//
router
    .post('/usuario/nuevo-user', async(req, res)=>{
        
        const body = {
            nombre : req.body.nombre,
            email: req.body.email,
            role: req.body.role,
            pass: bcrypt.hashSync(req.body.pass, saltRounds)
        }

        try {
            const userDB = await User.create(body)
            res.status(200).json(userDB)
        } catch (error) {
            return res.status(500).json({
                mensaje:"Error en el servidor",
                error
            })
        }
    })
    .put('/usuario/editar-user/:_id',[verificarAuth, verificarAdmon], async(req, res)=>{
        const id = req.params
        const body = _.pick(req.body, ['nombre','email','pass','activo']) 
        if(body.pass){
            body.pass= bcrypt.hashSync(body.pass, saltRounds)
        }
        try {
          const userDB = await User.findByIdAndUpdate(id,{$set: body},{new:true, runValidators:true})
          res.status(200).json(userDB)   
        } catch (error) {
          return res.status(400).json({
              mensaje:"Ocurrio un error al editar el usuario",
              error
          })
        }
      })
module.exports = router