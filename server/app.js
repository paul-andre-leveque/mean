const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const index = require("./routes/index");
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/articleWikiRoute');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect(
  "mongodb+srv://paul-dev:AeN2oXjKtv0XmvKi@cluster-node.mb2yl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    keepAlive: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Connexion à MongoDB réussie !");
    }
  }
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



// app.use(index);
app.use('/api/auth', userRoutes, articleRoutes);
app.use

module.exports = app;
