const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const fs = require('fs');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                username: req.body.username,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
// clé RSA incorporer pour que le token l'utilise afin de généré le token 
exports.signin = (req, res, next) => {
    User.findOne({ 'email': req.body.email }).exec((err, user) => {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({}, RSA_KEY_PRIVATE, {
                algorithm: 'RS256',
                subject: user._id.toString()
            });
            res.status(200).json(token);
        } else {
            res.status(401).json('signin fail !');
        }
    });
};

exports.refreshToken = (req,res,next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
            if (err) {return res.status(403).json('Mauvais token') }
            const newToken = jwt.sign({}, RSA_KEY_PRIVATE, {
                algorithm: 'RS256' ,
                expiresIn: '300s',
                subject: decoded.sub
            })
            res.status(200).json(newToken);
        })
    } else {
        res.json(403).json('Pas de token a rafraichir !');
    }
};


