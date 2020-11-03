const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const key = process.env.TENORKEY

module.exports = {
    name: 'tenor',
    description: 'Search Random Tenor GIF',
    category: 'Fun',
    run: async(bot, message, args) => {
        let query = args.join(" ")
        if(!query) return message.channel.send('Please Input The Query !')
        let hasil =  await axios.get(`https://api.tenor.com/v1/random?q=${query}&key=${key}&limit=1`).then(x => x.data)
        
        try { 
         let embed = new MessageEmbed()
        .setTitle(`Result For : ${query}`)
        .setColor('RANDOM')
        .setImage(hasil.results[0].media[0].gif.url)

        message.channel.send(embed)
        } catch(err) {
          return message.channel.send(`Something Wen\'t Wrong : **${err}**\nPlease Using Another Keyword !`);  
        }
    }
}