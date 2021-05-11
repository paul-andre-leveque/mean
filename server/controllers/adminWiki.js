const ArticleWiki = require('../models/articleWiki.model')
// const Thing = require('../models/Thing');

exports.createArticleWiki = (req, res, next) => {
    const articleWiki = new ArticleWiki({
        title: req.body.title,
        resume: req.body.resume,
        synopsie: req.body.synopsie,
        gameplay: req.body.gameplay,
        developpement: req.body.developpement,
        accueil: req.body.accueil,
        dev: req.body.dev,
        editeur: req.body.editeur,
        directeur: req.body.directeur,
        compositeur: req.body.compositeur,
        date: req.body.date,
        genre: req.body.genre,
        plateforme: req.body.plateforme,
        mod: req.body.mod,
        langue: req.body.langue,
        imageUrl1: req.body.imageUrl1,
        imageUrl2: req.body.imageUrl2,
        imageUrl3: req.body.imageUrl3,
        imageUrl4: req.body.imageUrl4,
        imageUrl5: req.body.imageUrl5,
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

exports.getOneArticle = (req, res, next) => {
    ArticleWiki.findOne({
        _id: req.params.id
    }).then(
        (articleWiki) => {
            res.status(200).json(articleWiki);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyArticle = (req, res, next) => {
    const articleWiki = new ArticleWiki({
        _id: req.params.id,
        title: req.body.title,
        resume: req.body.resume,
        synopsie: req.body.synopsie,
        gameplay: req.body.gameplay,
        developpement: req.body.developpement,
        accueil: req.body.accueil,
        dev: req.body.dev,
        editeur: req.body.editeur,
        directeur: req.body.directeur,
        compositeur: req.body.compositeur,
        date: req.body.date,
        genre: req.body.genre,
        plateforme: req.body.plateforme,
        mod: req.body.mod,
        langue: req.body.langue,
        imageUrl1: req.body.imageUrl1,
        imageUrl2: req.body.imageUrl2,
        imageUrl3: req.body.imageUrl3,
        userId: req.body.userId
    });
    ArticleWiki.updateOne({ _id: req.params.id }, articleWiki).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
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

exports.deleteArticle = (req, res, next) => {
    ArticleWiki.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
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

exports.getAllArticles = (req, res, next) => {
    ArticleWiki.find().then(
        (articleWikis) => {
            res.status(200).json(articleWikis);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};