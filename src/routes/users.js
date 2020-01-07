const express = require('express');
const router = express.Router();

const User = require('../models/User');

const passport = require('passport');


router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/cms/inicio',
    failureRedirect: '/users/signin',
    failureFlash: true
}));


router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
    const { name, lastname, email, password, confirm_password } = req.body;
    const errors = [];
    if(name.length <= 0){
        errors.push({text: 'Por favor escriba su Nombre'});
    }
    if(lastname.length <= 0){
        errors.push({text: 'Por favor escriba su Apellido'});
    }
    if(email.length <= 0){
        errors.push({text: 'Por favor escriba un Email'});
    }
    if(password != confirm_password){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(password.length < 4){
        errors.push({text: 'La contraseña debe tener más de 4 carácteres'});
    }
    if(errors.length > 0){
        res.render('users/signup', { errors, name, lastname, email, password, confirm_password });
    }else{
        const emailUser = await User.findOne({email: email});
        if( emailUser ){
            req.flash('error_msg', 'El email ya ha sido utilizado');
            res.redirect('/users/signup');
        }
        const newUser = new User({name, lastname, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Usted ha sido registrada');
        res.redirect('/users/signin');
    }
});

router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});





module.exports = router;