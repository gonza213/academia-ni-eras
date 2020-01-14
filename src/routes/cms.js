const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


const Image = require('../models/Image');
const User = require('../models/User');
const Datos = require('../models/Datos');
const Examen = require('../models/Examen');
const { isAuthenticated } = require('../helpers/auth');


router.get('/cms/inicio', isAuthenticated, (req, res) => {
    res.render('cms/inicio');
});

router.get('/cms/modulo-1', isAuthenticated, async (req, res) => {
    const modulos = await Image.find();
    res.render('cms/modulo-1', {modulos});
});

router.post('/cms/modulo-1',  async (req, res) => {
   const image = new Image();
   image.nombre = req.body.nombre;
   image.email = req.body.email;
   image.filename = req.file.filename;
   image.path = '/archivos/' + req.file.filename;
   image.originalname = req.file.originalname;
   image.mimetype = req.file.mimetype;
   image.size = req.file.size;

   await image.save();

   req.flash('success_msg', 'El trabajo practico se ha enviado');
   res.redirect('/cms/modulo-1');
});

router.get('/cms/modulo-2', isAuthenticated, (req, res) => {
    res.render('cms/modulo-2');
});

router.get('/cms/modulo-3', isAuthenticated, (req, res) => {
    res.render('cms/modulo-3');
});

router.get('/cms/modulo-4', isAuthenticated, (req, res) => {
    res.render('cms/modulo-4');
});

router.get('/cms/modulo-5', isAuthenticated, (req, res) => {
    res.render('cms/modulo-5');
});

router.get('/cms/modulo-6', isAuthenticated, (req, res) => {
    res.render('cms/modulo-6');
});

router.get('/cms/examen-final', isAuthenticated, (req, res) => {
    res.render('cms/examen');
});

router.post('/cms/examen-final', isAuthenticated,  async(req, res) => {
    const { nombre, dni, email, question1, question2,question3, question4, question5, question6, question7, question8, question9, question10} = req.body;

    const examen = new Examen({ nombre, dni, email, question1, question2,question3, question4, question5, question6, question7, question8, question9, question10});
    await  examen.save();
    req.flash('success_msg', '¡Has realizado el examen final! Se le enviará la devolución a su email');
    res.redirect('/cms/examen-final');

});


router.get('/cms/edit-perfil/:id', isAuthenticated, async (req, res) => {
    const user = await User.findById(req.params.id);
     res.render('cms/edit-perfil', {user});
 });

 router.put('/cms/edit/:id', isAuthenticated, async (req, res) => {
    
       let { name, lastname, password, email} = req.body;

          let newPassword = bcrypt.hashSync(password);

        await User.findByIdAndUpdate(req.params.id, {name, lastname, newPassword, email})
     
         req.flash('success_msg', 'El perfil se ha modificado correctamente');
         res.redirect('/cms/inicio');
 

 });

 router.get('/cms/subir-cv', isAuthenticated, (req, res) => {
     res.render('cms/subir-cv');
 });

 router.post('/cms/subir-cv', isAuthenticated, async (req, res) => {
    const datos = new Datos();
    datos.nombre = req.body.nombre;
    datos.dni = req.body.dni;
    datos.email = req.body.email;
    datos.tel = req.body.tel;
    datos.ciudad = req.body.ciudad;
    datos.edad = req.body.edad;
    datos.filename = req.file.filename;
    datos.path = '/archivos/' + req.file.filename;
    datos.originalname = req.file.originalname;
    datos.mimetype = req.file.mimetype;
    datos.size = req.file.size;
 
    await datos.save();
 
    req.flash('success_msg', 'El CV se ha enviado correctamente');
    res.redirect('/cms/inicio');
});

module.exports = router;