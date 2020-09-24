const Discord = require('discord.js')

module.exports = {
  name: 'faq',
  description: 'Info - Info Sejumlah Bot',
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setColor("#00f1ff")
      .setTitle("Who Make Me ?")
      .setDescription("`I Created By Muqsith a.k.a FrenzyQrunch Im made with glitch.com`")
      .setThumbnail("https://cdn.glitch.com/a7da6b68-d9ce-41aa-bd4d-b73d4c08329f%2F20200812_082904.jpg?v=1599265711166")
      .addFields(
        {name: "Why Muqsith Make Me ?", value: "`Muqsith Make Me Because, He Like Coding`", inline: false}
      )
    message.channel.send(embed); 
  }
};