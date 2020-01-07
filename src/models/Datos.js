const { Schema, model} = require('mongoose');

const datosSchema = new Schema({
    nombre: {type: String},
    dni: {type: String},
    email: {type: String},
    tel: {type: String},
    ciudad: {type: String},
    edad: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: String},
    created_at : {type: Date, default: Date.now()}
});


module.exports = model('Datos', datosSchema);