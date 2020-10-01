const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
  name: 'help',
  description: 'Ini Hanya Test',
  execute(message)  {
      const embed = new Discord.MessageEmbed() 
      .setColor("#00f1ff")
      .setTitle("Ini Daftar Command BOT !")
      .addFields(
        { name: "```━━━━━━ FUN  ━━━━━━``` :smile:", value: "```" + `${prefix}quote, ${prefix}techquote,\n${prefix}ascii, ${prefix}youcool, ${prefix}snipe` + "```", inline: false},
        { name: "```━━━━━━ NEWS ━━━━━━``` :newspaper:", value: "```" + `${prefix}corona, ${prefix}gempa` + "```", inline: false },
        { name: "```━━━━━━ INFO ━━━━━━``` :information_source:", value: "```" + `${prefix}waktu, ${prefix}help,\n${prefix}server, ${prefix}info` + "```", inline: false}
    )   
      message.channel.send(embed);    
  }
};