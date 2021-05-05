const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');
// const stuffCtrl = require('../controllers/stuff');
const adminWikiCtrl = require('../controllers/adminWiki');


///POST ENVOI DE DONNE
router.post('/articlePost', adminWikiCtrl.createArticleWiki);

///POST ENVOI DE DONNE
// router.post('/', stuffCtrl.createThing);

/// PUT MODIFICATION SOLO DONNEES
router.put('/:id', adminWikiCtrl.modifyArticle);

///DELETE SUPRESSION DE DONNEES
router.delete('/:id', adminWikiCtrl.deleteArticle);

////GET RECUPERATION DONNE SOLO
router.get('/:id', adminWikiCtrl.getOneArticle);

/// GET RECUP2RATION DES DONNEES 
router.get('/', adminWikiCtrl.getAllArticles);


module.exports = router;