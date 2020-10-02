const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['ciduk'],
            description: 'Melihat Pesan Yang Terhapus',
            category: 'Utilities'
		});
	}

	async run(message, args) {
	const snipes = this.client.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`Tidak Ada Pesan Terdeteksi...`);
    const Embed = new MessageEmbed()
      .setColor(0xFF0000)
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
	}
	

};