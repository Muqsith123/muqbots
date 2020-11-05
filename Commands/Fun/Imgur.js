const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'imgur',
  description: 'Search Image With Google Images !',
  category: 'Fun',
  run: async(bot, message, args) => {
    let query = args.join(" ");
    if(!query) return message.channel.send('Please Input The Query !');

    const url = `https://api.imgur.com/3/gallery/search/top/1/?q=${query}&q_type=jpg,jpeg,png`
    const api = process.env.IMGUR;

    fetch(url, {headers: {Authorization: `Client-ID ${api}`}})
    .then(res => res.json())
    .then(json => {
      let id = Math.floor(Math.random() * json.data.length)
      let embed = new MessageEmbed()
      .setTitle(json.data[id].title)
      .setImage(json.data[id].images[0].link)
      .setColor('RANDOM')
      .setURL(json.data[id].link)
      .setFooter(`Author : ${json.data[id].account_url}`)

      message.channel.send(embed)
    })


  }
}