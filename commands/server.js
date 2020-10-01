const Discord = require('discord.js')

module.exports = {
	name: 'server',
	description: 'Informasi Server !',
  cooldown: 15,
  guildOnly: true,
	execute(message) {
    function toTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }
    var lokasi = message.guild.region 
    var tlokasi = toTitleCase(lokasi);

    const embed = new Discord.MessageEmbed()
      .setColor('#00f1ff')
      .setTitle('INFO SERVER')
      .setThumbnail(message.guild.iconURL())
      .setDescription(`Nama Server : ${message.guild.name}\nTotal Member : ${message.guild.memberCount}\nTotal BOT : ${message.guild.members.cache.filter(m => m.user.bot).size}\nLokasi Server : ${tlokasi}`);
    message.channel.send(embed);
    }
	};