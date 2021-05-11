const express = require('express');
const router = express.Router();
const usersWikiCtrl = require('../controllers/usersWiki');

// Récupération UN article
router.get('/:id', usersWikiCtrl.getOnesearchResult);

//Récupération searchBar
router.get('/', usersWikiCtrl.getSearch);



module.exports = router;