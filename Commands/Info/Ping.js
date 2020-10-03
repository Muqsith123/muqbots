const Discord = require('discord.js')

module.exports = {
      name: 'ping',
      category: 'Info',
      description: 'Melihat Status BOT',
      run: async(bot, message)=> {
            
        const m = await message.channel.send('Mendapatkan Info ...')
            
        const aembed = new Discord.MessageEmbed()
        .setTitle("🏓 PONG!")
        .addField("Roundtrip took", (`${m.createdTimestamp - message.createdTimestamp}ms`), true)
        .addField("Hearthbeat", (`${Math.round(bot.ws.ping)}ms​`), true)
        .setColor('#00f1ff')
        .setFooter("BOT By FrenzyQrunch")
        return setTimeout(function(){ 
        m.edit("Sukses Mendapatkan Info !", aembed)
        }, 3000);
	}

};
