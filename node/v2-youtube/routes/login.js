import express  from "express";
import bcrypt from 'bcrypt'
import User from '../models/user'
import jwt from 'jsonwebtoken'

const router = express.Router();
const saltRounds = 10

router.post('/', async (req, res)=>{
    const body = req.body

    try {
        console.log(body)
        const UserDB = await User.findOne({email: body.email})
        if(!UserDB || !bcrypt.compareSync(body.password, UserDB.pass)){
            return res.status(400).json({
                mensaje:"Usuario o contraseña incorrectos"
            })    
        }else{
            /* Generar el token */
            
            const token = jwt.sign({data: UserDB},
                'secret',{expiresIn: 60 * 60 * 24})

            return res.status(200).json({
                data: UserDB,
                token: token
            })
        }
    } catch (error) {
        return res.status(400).json({
            mensaje:"Ocurrio un error",
            error
        })
    }
})

module.exports = router;