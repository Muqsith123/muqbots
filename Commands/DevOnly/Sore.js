const cron = require('node-cron')

module.exports = {
    name: 'sore',
    description: 'Alarm !',
    devOnly: true,
    category: 'DevOnly',
    run: async(bot, message) => {
        message.reply('Sukses Menyalakan !').then(msg => {
            message.delete()
            msg.delete({timeout: 5000})
        })
        cron.schedule("*/10 * * * * *", () => {
            message.channel.get('')
          }, {
            scheduled: true,
            timezone: "America/Sao_Paulo"
          });

    }
}