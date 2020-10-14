const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config.json')

module.exports = {
	name: 'avatar',
	category: 'Utilities',
  description: 'Melihat PP Orang',
  aliases : ['pp'],
  usage: `${prefix}avatar (Tag people to wanna see her profile picture)`,
	run: async(bot, message, args)=> {
	let member = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author

    let avatar = member.displayAvatarURL({dynamic: true, size: 1024})

    const embed = new MessageEmbed()
    .setTitle(`Ini Fotonya ${member.username}`)
    .setImage(avatar)
    .setColor('#00f1ff')
      message.channel.send(embed);
	}

};