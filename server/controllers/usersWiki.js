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
    const title = req.query.title;
    var search = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    ArticleWiki.find(search).then(
        (articleWiki) => {
            res.status(200).json(articleWiki);
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: err.message || "Aucun article trouvé"
            });
        }
    );
};

exports.getSearcha = (req, res, next) => {
    const dev = req.query.dev;
    var search = dev ? { dev: { $regex: new RegExp(dev), $options: "i" } } : {};

    ArticleWiki.find(search).then(
        (articleWiki) => {
            res.status(200).json(articleWiki);
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: err.message || "Aucun article trouvé"
            });
        }
    );
};