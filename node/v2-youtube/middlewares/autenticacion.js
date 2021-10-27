import jwt from 'jsonwebtoken'

const verificarAuth = (req, res, next)=>{
    const token = req.get('token')
    console.log(token)
    jwt.verify(token,'secret',(err, decoded)=>{
        if(err){
            return res.status(400).json({
                mensaje:"usuario no valido",
            })
        }else{
            req.usuario = decoded.data
            next();
        }
    })
        
    
}

const verificarAdmon = (req, res, next)=>{
    const rol = req.usuario.role
    if(rol === "ADMIN"){
        next()
    }else{
        return res.status(401).json({
            mensaje:"Este usuario no tiene permisos de escritura",
        })
    }
}

module.exports = {verificarAuth, verificarAdmon}