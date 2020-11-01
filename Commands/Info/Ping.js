const Discord = require('discord.js')
const { prefix } = require('../../config.json')

module.exports = {
      name: 'ping',
      category: 'Info',
      description: 'Melihat Status BOT',
      usage: `${prefix}ping`,
      run: async(bot, message)=> {
            
        const m = await message.channel.send('Mendapatkan Info ...')
            
        const aembed = new Discord.MessageEmbed()
        .setTitle("🏓 PONG!")
        .addField("Roundtrip took", (`${m.createdTimestamp - message.createdTimestamp}ms`), true)
        .addField("Hearthbeat", (`${Math.round(bot.ws.ping)}ms​`), true)
        .setColor('#00f1ff')
        .setTimestamp()
        return setTimeout(function(){ 
        m.edit("Sukses Mendapatkan Info !", aembed)
        }, 3000);
	}

};
