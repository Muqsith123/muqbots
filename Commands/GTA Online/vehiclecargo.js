const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'vehiclecargo',
    description: 'GTA Online, Vehicle Cargo Data !',
    category: 'GTA Online',
    aliases: ['vc'],
    run: async(bot, message) => {
        const embed = new MessageEmbed()
        .setTitle('GTA Online, Vehicle Cargo Data !')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/700031233979056158/705837913858113566/1052FE3EDC0004BD5F1268884E9955F5089F2B73.jpg')
        .setFooter('Source: Dimedigger')

        message.channel.send(embed)
    }
}