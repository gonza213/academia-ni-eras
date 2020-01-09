const express = require('express');
const router = express.Router();

const Datos = require('../models/Datos');
const { isAuthenticated } = require('../helpers/auth');

router.get('/lectura/ver-cv', isAuthenticated, async (req, res) => {
    const datos = await Datos.find().sort({created_at: 'desc'}); //usuarios individuales
    res.render('lecturas/ver-cv', {datos});
});


module.exports = router;