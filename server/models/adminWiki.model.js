const mongoose = require('mongoose');
const uniqueValidator = require('moogose-unique-validator');


const adminWikiSchema = mongoose.Schema({
    Name: { type: String, required: true },

})


adminWikiSchema.plugin(uniqueValidator);

module.exports = mongoose.model('adminWiki', adminWikiSchema);