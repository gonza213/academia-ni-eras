const { Schema, model} = require('mongoose');

const examenSchema = new Schema({
    nombre: {type: String},
    dni: {type: String},
    email: {type: String},
    question1: {type: String},
    question2: {type: String},
    question3: {type: String},
    question4: {type: String},
    question5: {type: String},
    question6: {type: String},
    question7: {type: String},
    question8: {type: String},
    question9: {type: String},
    question10: {type: String},
    created_at : {type: Date, default: Date.now()}
});


module.exports = model('Examen', examenSchema);