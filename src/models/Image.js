const { Schema, model} = require('mongoose');

const imageSchema = new Schema({
    nombre: {type: String},
    email: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: String},
    created_at : {type: Date, default: Date.now()}
});


module.exports = model('Image', imageSchema);