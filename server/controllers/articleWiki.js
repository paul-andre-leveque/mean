const ArticleWiki = require('../models/articleWiki.model')

exports.createArticleWiki = (req, res, next) => {
    const articleWiki = new ArticleWiki({
        title: req.body.title,
        resume: req.body.resume,
        synopsie: req.body.synopsie,
        developpement: req.body.accueil,
        accueil: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId
    });
    articleWiki.save().then(
        () => {
            res.status(201).json({
                message: 'Article enregistre !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

// exports.createArticleWiki = (req, res, next) => {
//     const newArticleWiki = new ArticleWiki({
//         title: req.body.title,
//         resume: req.body.resume,
//         synopsie: req.body.synopsie,
//         developpement: req.body.accueil,
//         accueil: req.body.description,
//         imageUrl: req.body.imageUrl,
//         userId: req.body.userId
//     })

//     newArticleWiki.save((err) => {
//         if (err) { res.status(500).json('erreur signup') }
//         res.status(200).json('signup ok !');
//     })
// };