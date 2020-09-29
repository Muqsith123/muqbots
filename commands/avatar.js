const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'PP Klean !',
  aliases: ['pp'],
  execute(message) {

    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024})

    const embed = new Discord.MessageEmbed()
    .setTitle(`Ini Fotonya ${member.username}`)
    .setImage(avatar)
    .setColor('#00f1ff')
      message.channel.send(embed);
    
  }
  
  
  
}