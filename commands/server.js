const Discord = require('discord.js')

module.exports = {
	name: 'server',
	description: 'Informasi Server !',
  cooldown: 15,
  guildOnly: true,
	execute(message) {
    const embed = new Discord.MessageEmbed()
      .setColor('#00f1ff')
      .setTitle('INFO SERVER')
      .setDescription(`Nama Server : ${message.guild.name}\nTotal Member : ${message.guild.memberCount}\nLokasi Server : Indonesia`);
    message.channel.send(embed);
    }
	};