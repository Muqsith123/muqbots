const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
    Prefix: {
        type: String
    },
    badword: {
        type: String
    },
    GuildID: String
});

const MessageModel = module.exports = mongoose.model('prefixes', PrefixSchema);