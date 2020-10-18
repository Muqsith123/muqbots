const mongoose = require('mongoose');

const BadwordScheme = new mongoose.Schema({
    GuildID: String,
    Badword: Boolean
});

const MessageModel = module.exports = mongoose.model('badword', BadwordScheme);