const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Ini Hanya Test',
  execute(message)  {
      const embed = new Discord.MessageEmbed() 
      .setColor("#00f1ff")
      .setTitle("This Is List Of The Command !")
      .addFields(
        { name: "Speak", value: "``", inline: false},
        { name: "Music", value: "`$play, $skip, $stop`", inline: false }
    )   
      message.channel.send(embed);    
  }
};