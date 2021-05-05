const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));



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

app.use('/api/admin', adminRoutes);
app.use('/api/auth', userRoutes);
// app.use(index);



module.exports = app;
