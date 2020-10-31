const kagApi = require('@kagchi/kag-api');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'wikihow',
    description: 'Random Wikihow Image !',
    category: 'Fun',
    aliases: ['wh'],
    run: async(bot, message) => {
        let a = await kagApi.wikihow()
        if(a.nsfw && !message.channel.nsfw) return message.channel.send('NSFW Wikihow Detectead !. Please Input Command Again !') 
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(a.title)
        .setURL(a.article_url)
        .setImage(a.url)

        message.channel.send(embed)
    }
}