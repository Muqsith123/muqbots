const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'signaljammer',
    description: 'GTA Online, Signal Jammer Location !',
    category: 'GTA Online',
    aliases: ['sj'],
    run: async(bot, message) => {
        const embed = new MessageEmbed()
        .setTitle('GTA Online, Signal Jammer Location !')
        .setColor('RANDOM')
        .setImage('https://media.discordapp.net/attachments/703130913319419984/737163535422849044/50_signal_jammers_locations.jpg?width=474&height=677')
        .setFooter('Source: Dimedigger')

        message.channel.send(embed)
    }
}