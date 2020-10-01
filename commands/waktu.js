const moment = require('moment');

module.exports = {
    name: 'waktu',
    description: 'dino opo iki',
    execute(message) {
        message.channel.send("Sekarang " + moment().format('D MMMM YYYY, h:mm:ss a'));
    }
}