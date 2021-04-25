// const router = require('express').Router();
// const ArticleWiki = require('../models/articleWiki.model')
// // const User = require('../models/user.model')



// router.post('/', (req, res) => {
//     const newArticleWiki = new ArticleWiki({
//         title: req.body.title,
//         resume: req.body.resume,

//     })

//     newArticleWiki.save((err) => {
//         if (err) { res.status(500).json('erreur signup') }
//         res.status(200).json('signup ok !');
//     })
// });

// router.post('/signin', (req, res) => {
//    User.findOne({ 'email': req.body.email }).exec((err, user) => {
//       if (user && bcrypt.compareSync(req.body.password, user.password)) {
//          const token = jwt.sign({}, RSA_KEY_PRIVATE, {
//             algorithm: 'RS256',
//             subject: user._id.toString()
//          });
//          res.status(200).json(token);
//       } else {
//          res.status(401).json('signin fail !');
//       }
//    });
// });

// module.exports = router;