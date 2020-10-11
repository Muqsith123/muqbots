const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'f',
    description: 'F For Respect',
    category: 'Fun',
    run: async(bot, message, args) => {
        let reason = args.join(" ");
        const a = new MessageEmbed()
        .setColor('#00f1ff')
        .setTitle('Press F To Respect')
        .setDescription('Reason : ' + reason)
        message.channel.send(a).then(msg => {
            msg.react('🇫')
        })
    }
}