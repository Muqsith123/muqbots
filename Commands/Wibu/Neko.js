const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'neko',
    description: 'UwU',
    category: 'Wibu',
    run: async(bot, message) => {
        if (!message.channel.nsfw) return message.channel.send('Channel Ini Bukan NSFW');
        fetch('https://nekos.life/api/v2/img/neko')
        .then(response => response.json())
        .then(data => {
            let neko = data.url

            const embed = new MessageEmbed()
            .setColor('#00f1ff')
            .setTitle('Meow...')
            .setImage(neko)
            .setFooter('UwU')

            message.channel.send(embed)
        })
    }
}