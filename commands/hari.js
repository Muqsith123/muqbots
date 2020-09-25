const moment = require('moment');

module.exports = {
    name: 'hari',
    description: 'dino opo iki',
    execute(message) {
        message.channel.send("Sekarang " + moment().format('D MMMM YYYY, h:mm:ss a'));
    }
}