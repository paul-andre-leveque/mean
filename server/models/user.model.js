// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = Schema({
//   email: String,
//   username: String,
//   password: String
// })

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);