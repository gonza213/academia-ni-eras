const express = require('express');
const router = express.Router();

const Datos = require('../models/Datos');
const Image = require('../models/Image');
const { isAuthenticated } = require('../helpers/auth');

router.get('/lectura/ver-cv', isAuthenticated, async (req, res) => {
    const datos = await Datos.find().sort({created_at: 'desc'}); 
    res.render('lecturas/ver-cv', {datos});
});

//ELIMINAR CV
router.delete('/lectura/ver-cv/:id', isAuthenticated, async (req, res) => {
    await Datos.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'El CV se ha borrado correctamente');
    res.redirect('/lectura/ver-cv');
});



router.get('/lectura/ver-tp', isAuthenticated, async (req, res) => {
    const trabajos = await Image.find().sort({created_at: 'desc'}); 
    res.render('lecturas/ver-tp', {trabajos});
});

//ELIMINAR NOTA
router.delete('/lectura/ver-tp/:id', isAuthenticated, async (req, res) => {
    await Image.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'El TP se ha borrado correctamente');
    res.redirect('/lectura/ver-tp');
});



module.exports = router;