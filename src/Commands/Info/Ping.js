const Discord = require('discord.js')
const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['pong'],
            description: 'Cek Ping BOT',
            category: 'Info'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message) {
		const m = await message.channel.send('Mendapatkan Info ...')
            
        const aembed = new Discord.MessageEmbed()
        .setTitle("🏓 PONG!")
        .addField("Roundtrip took", (`${m.createdTimestamp - message.createdTimestamp}ms`), true)
        .addField("Hearthbeat", (`${Math.round(this.client.ws.ping)}ms​`), true)
        .setColor('#00f1ff')
        .setFooter("BOT By FrenzyQrunch")
        return setTimeout(function(){ 
        m.edit("Sukses Mendapatkan Info !", aembed)
        }, 3000);
	}

};
