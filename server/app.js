const express = require("express");

//connexion database
require("./database/connexion")
const bodyParser = require("body-parser");


// Routes
const authRoutes = require('./routes/adminAuth');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
app.use('/api/articleUser', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
