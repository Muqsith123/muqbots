const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
    Prefix: {
        type: String
    },
    badword: {
        type: Boolean,
        default: false
    },
    GuildID: String
});

const MessageModel = module.exports = mongoose.model('prefixes', PrefixSchema);