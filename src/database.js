const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:gonza1991@curso-gysy0.mongodb.net/test', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('La Base de Datos esta conectado'))
.catch(err => console.log(err));
