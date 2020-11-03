const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'mc',
    description: 'GTA Online MC Business Data',
    category: 'GTA Online',
    run: async(bot, message) => {
        const embed = new MessageEmbed()
        .setTitle('GTA Online MC Business Data : ')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/754171170236006400/772993733566136330/20201103_082039.jpg')
        .setFooter('Source: Dimedigger')

        message.channel.send(embed)
    }
}