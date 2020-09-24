const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'PP Klean !',
  execute(message) {
    const embed = new Discord.MessageEmbed()
      // Replace "message.member" with "message.author"
    .setImage(message.author.avatarURL())
    .setColor('#00f1ff')
      message.channel.send(embed);
    
  }
  
  
  
}