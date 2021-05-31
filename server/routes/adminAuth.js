const express = require('express');
const router = express.Router();
const adminAuth = require('../controllers/adminAuth');


// authentification 
router.post('/signup', adminAuth.signup);
router.post('/signin', adminAuth.signin);

// refresh token avec expiration
router.get('/refresh-token', adminAuth.refreshToken);

module.exports = router;