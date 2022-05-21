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
