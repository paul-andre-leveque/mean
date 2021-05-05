const mongoose = require('mongoose');

const articleWikiSchema = mongoose.Schema({
    title: { type: String, required: true },
    resume: { type: String, required: true },
    synopsie: { type: String, required: true },
    gameplay: { type: String, required: true },
    developpement: { type: String, required: true },
    accueil: { type: String, required: true },
    dev: { type: String, required: true },
    editeur: { type: String, required: true },
    directeur: { type: String, required: true },
    compositeur: { type: String, required: true },
    date: { type: String, required: true },
    genre: { type: String, required: true },
    plateforme: { type: String, required: true },
    mod: { type: String, required: true },
    langue: { type: String, required: true },
    imageUrl1: { type: String, required: true },
    imageUrl2: { type: String },
    imageUrl3: { type: String },
    userId: { type: String },
});

module.exports = mongoose.model('ArticleWiki', articleWikiSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const articleWikiSchema = Schema({
//     title: String,
//     resume: String,
//     synopsie: String,
//     developpement: String,
//     accueil: String,
//     imageUrl: String,
//     //userId: String,
// })

// const User = mongoose.model('ArticleWiki', articleWikiSchema);

// module.exports = User;