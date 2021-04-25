const mongoose = require('mongoose');

const articleWikiSchema = mongoose.Schema({
    title: { type: String, required: true },
    resume: { type: String, required: true },
    synopsie: { type: String, required: true },
    developpement: { type: String, required: true },
    accueil: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
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