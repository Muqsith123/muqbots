const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: 'Melihat Avata/Photo Profile',
			aliases: ['pp'],
			category: 'Utilities',
			usage: '(nama orang)'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message) {
	let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024})

    const embed = new MessageEmbed()
    .setTitle(`Ini Fotonya ${member.username}`)
    .setImage(avatar)
    .setColor('#00f1ff')
      message.channel.send(embed);
	}

};