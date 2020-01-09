const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mthovr = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
// const morgan = require('morgan');
const multer = require ('multer');
const uuid = require('uuid/v4');

//INITILIAZATIONS
const app = express();
require('./database');
require('./config/passport');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//MIDDLEAWARES
// app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Archvos
const storage = multer.diskStorage({
    destination:  path.join(__dirname, '/public/archivos'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
})
app.use(multer({storage : storage}).single('image'));

app.use(mthovr('_method'));
app.use(session({
    secret: 'bobby',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//GLOBAL VARIABLES
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; 

    next();
});


//ROUTES
app.use(require('./routes/index'));
app.use(require('./routes/cms'));
app.use(require('./routes/users'));
app.use(require('./routes/lectura'));


//STATIC FILES
app.use(express.static(path.join(__dirname , '/public')));


//SERVER IS LISTENNING
app.listen(app.get('port'), () =>{
    console.log('El servidor esta escuchando puerto: ', app.get('port'));
});