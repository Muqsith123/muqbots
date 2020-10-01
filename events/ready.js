const { prefix } = require('../config.json')

module.exports = (client) => {
    console.log(`Selesai Login Sebagai ${client.user.tag} !`);
    client.user.setActivity(`${prefix}help`, {
        type: "WATCHING"
        })
}