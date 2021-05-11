const ArticleWiki = require('../models/articleWiki.model')


exports.getOnesearchResult = (req, res, next) => {
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


exports.getSearch = (req, res, next) => {
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