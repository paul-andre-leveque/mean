const mongoose = require("mongoose");
// mongoose.connect('mongodb://user:password@database/db?authSource=admin', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(async () => {
//   console.log('connexion ok !');
// })
// .catch(err => console.log(err));

mongoose.connect(
    "mongodb+srv://paul-dev:AeN2oXjKtv0XmvKi@cluster-node.mb2yl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        keepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    function (error) {
        if (error) {
            console.log("Connexion à MongoDB échouée !");
        } else {
            console.log("Connexion à MongoDB réussie !");
        }
    }
);