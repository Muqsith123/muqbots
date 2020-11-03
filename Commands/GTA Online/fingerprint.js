const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'fingerprint',
    description: 'GTA Online Diamond Casino Heist, Fingerprint',
    category: 'GTA Online',
    aliases: ['fp'],
    run: async(bot, message) => {
        const embed = new MessageEmbed()
        .setTitle('GTA Online Diamond Casino Heist, Fingerprint')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/704875648862388334/714184039417774090/Fingerprint.png')
        .setFooter('Source: Dimedigger')

        message.channel.send(embed)
    }
}