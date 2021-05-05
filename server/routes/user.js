const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


// authentification 
router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);

// refresh token avec expiration
router.get('/refresh-token', userCtrl.refreshToken);

module.exports = router;