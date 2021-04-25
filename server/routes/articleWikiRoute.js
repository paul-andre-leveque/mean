const express = require('express');
const router = express.Router();
const articleWikiCtrl = require('../controllers/articleWiki');


///POST ENVOI DE DONNE
router.post('/', articleWikiCtrl.createArticleWiki);


module.exports = router;