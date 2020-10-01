const translate = require("@vitalets/google-translate-api");
const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = async (client, message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        const m = await message.channel.send('Mendapatkan Info ...')
            
            const aembed = new Discord.MessageEmbed()
            .setTitle("🏓 PONG!")
            .addField("Roundtrip took", (`${m.createdTimestamp - message.createdTimestamp}ms`), true)
            .addField("Hearthbeat", (`${Math.round(client.ws.ping)}ms​`), true)
            .setColor('#00f1ff')
            .setFooter("BOT By FrenzyQrunch")
            return setTimeout(function(){ 
          m.edit("Sukses Mendapatkan Info !", aembed)
          }, 3000);
      } else if (command === 'lock') {
        if (message.author.id === '710492761303941150') {
        if (!message.author.id === '710492761303941150') return message.channel.send('Kamu Tidak Mempunya Akses !');
        let target = message.mentions.members.first();
        if(!target) return message.channel.send("Tag Orangnya Ya !");

        let namabaru = args.join(" ").slice(22);
        if(!args[0]) return message.channel.send('Aku harus ngomong apa ?')

        if (target, args[0]) {
            message.channel.send('Sukses Lock Nick !')
            function gantinick() {
                target.setNickname(namabaru)
            }
           var function1 = setInterval(gantinick, 10000);
           client.on("message", message => {
            if (message.content === `${prefix}stop`) {
                if (!message.author.id === '710492761303941150') return message.channel.send('Anda Tak Punya Akses !');
                if (message.author.id === '710492761303941150') {
                message.channel.send('Mencoba Stop Lock Nick !')
                clearInterval(function1);
              }
             }
            }) 
        }
       }
    } else if (command === 'info') {
        const author = client.users.cache.get('710492761303941150')
        const embed = new Discord.MessageEmbed()
          .setColor("#00f1ff")
          .setThumbnail(client.user.displayAvatarURL({size: 512}))
          .addFields(
            {name: "INFO OF BOT", value: `Name BOT : ${client.user.tag}\nPrefix : ${prefix}\nAuthor : ${author.username}\n`, inline: false},
            {name: "Need Help ?", value: 'Use `' + `${prefix}help` + '`' + ' Command !', inline: false}
        )
        message.channel.send(embed); 
    }
}