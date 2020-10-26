const kagApi = require('@kagchi/kag-api');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'memeind',
    description: 'Meme +62 People !',
    category: 'Fun',
    aliases: ['meme+62', 'memeindonesia', 'memeindo', 'meme62'],
    run: async(bot, message) => {
        let meme = await kagApi.memeindo()
        console.log(meme)

        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(meme.title)
        .setImage(`http://imgur.com/${meme.hash}.jpg`)
        .setFooter(`Meme By : ${meme.author}\n👍 : ${meme.score}\n👥 : ${meme.views}`)
        
        message.channel.send(embed)
    }   
}