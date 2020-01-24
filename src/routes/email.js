// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');

// router.get('/email/enviar-email', (req, res) => {
//     res.render('email/enviar-email');
// });

// router.post('/enviar-email', async (req, res) => {

//     const { name, email, phone, message} = req.body;
   
//     contenHTML = `
//        <h1>Información usuario</h1>
//        <ul>
//            <li>Nombre de Usuario:${name}</li>
//            <li>Email: ${email}</li>
//            <li>Teléfono: ${phone}</li>
//        </ul>
//        <p> ${message}</p>
//     `;

//     const transporter = nodemailer.createTransport({

//                         host: 'smtp.hostinger.com.ar',
//                         port: 587,
//                         secure: false,
//                         auth: {
//                             user: 'cursos@niñerasalrescate.com',
//                             pass: '2017rescate'
//                         },
//                         tls: {
//                             rejectUnauthorized: false
//                         }

//                         });
    
//     const info = await transporter.sendMail({
//         from: "'Niñeras al Rescate' <cursos@niñerasalrescate.com>",
//         to: 'gonzaa.vidal.18@gmail.com',
//         subject: 'Email prueba',
//         text: 'Hola email'
//     });

//     console.log('mensaje enviado', info.messageID);

//     req.flash('success_msg', 'El email se ha enviado correctamente');
//     res.redirect('/email/enviar-email');
// });

// module.exports= router;