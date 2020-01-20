const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth');

router.get('/chat/chat', isAuthenticated, (req, res) => {
   res.render('chat/chat');
});

module.exports = router;