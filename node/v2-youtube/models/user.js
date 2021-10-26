import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'


const Schema = mongoose.Schema

const roles = {
    values:['ADMIN', 'USER'],
    message: "{VALUE} rol no valido"

}

const userSchema = new Schema({
    nombre:{type: String, required: [true,'Nombre obligatorio']},
    email:{type: String, required: [true,'Email obligatorio'], unique: true},
    pass: {type: String, required: [true,'Password obligatorio']},
    datecreate: {type: Date, default: Date.now},
    dateupdate: {type: Date, default: Date.now},
    role: {type: String, default: 'USER', enum: roles},
    activo: {type: Boolean, default: true}
})

userSchema.plugin(uniqueValidator, {message: 'Error, el campo {PATH} es unico'});

/**Con esta funcion no enviarmos la contraseña al cliente, la ocultamos */
userSchema.methods.toJSON = function(){
    const obj = this.toObject();
    delete obj.pass
    return obj
}
//convertir a un modelo
const User = mongoose.model('Users', userSchema)

export default User