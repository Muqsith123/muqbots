const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'avatar',
	category: 'Utilities',
	description: 'Melihat PP Orang',
	run: async(bot, message)=> {
	let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024})

    const embed = new MessageEmbed()
    .setTitle(`Ini Fotonya ${member.username}`)
    .setImage(avatar)
    .setColor('#00f1ff')
      message.channel.send(embed);
	}

};