const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'neko',
    description: 'UwU',
    category: 'NSFW',
    run: async(bot, message) => {
        let ijin = true;
        if (!message.channel.nsfw) ijin = false;
        if (message.author.id === '710492761303941150') ijin = true;
        if(ijin === false) return message.reply('Command Hanya Bisa Di Akses Di Channel NSFW !')

        if (ijin === true) {
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
}