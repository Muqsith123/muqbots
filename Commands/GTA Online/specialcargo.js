const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'specialcargo',
    description: 'GTA Online, Special Cargo Data !',
    category: 'GTA Online',
    aliases: ['sc'],
    run: async(bot, message) => {
        const embed = new MessageEmbed()
        .setTitle('GTA Online, Special Cargo Data !')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/704875648862388334/705840252459417670/Cargo_Profit.jpg')
        .setFooter('Source: Dimedigger')

        message.channel.send(embed)
    }
}