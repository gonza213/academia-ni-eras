const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bobby:bobby@cluster0-71avk.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('La Base de Datos esta conectado'))
.catch(err => console.log(err));
