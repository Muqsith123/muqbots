const translate = require("@vitalets/google-translate-api");
const Discord = require('discord.js');
const { prefix } = require('../config.json');
const { post } = require("node-superfetch");

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
    } else if (command === 'eval') {
        if(!message.author.id === '710492761303941150') return message.reply('Kamu Bukan Pemilik Bot Ini !');

        const embed = new Discord.MessageEmbed()
        .addField("Input", "```js\n" + args.join(" ") + "```");

        try {
            const code = args.join(" ");
            if (!code) return message.channel.send("Mohon Masukkan Codenya !");
            let evaled;
            
            // This method is to prevent someone that you trust, open the secret shit here.
            if (code.includes(`SECRET`) || code.includes(`TOKEN1`) || code.includes("process.env")) {
              evaled = "Sistem Menolak Untuk Menampilkan Hal Rahasia !";
            } else {
              evaled = eval(code);
            }
            
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
            
            let output = clean(evaled);
            if (output.length > 1024) {
              // If the output was more than 1024 characters, we're gonna export them into the hastebin.
              const {body} = await post("https://hastebin.com/documents").send(output);
              embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor('#00f1ff');
              // Sometimes, the body.key will turn into undefined. It might be the API is under maintenance or broken.
            } else {
              embed.addField("Output", "```js\n" + output + "```").setColor('#00f1ff')
            }
            
            message.channel.send(embed);
            
          } catch (error) {
            let err = clean(error);
            if (err.length > 1024) {
              // Do the same like above if the error output was more than 1024 characters.
              const {body} = await post("https://hastebin.com/documents").send(err);
              embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
            } else {
              embed.addField("Output", "```js\n" + err + "```").setColor("RED");
            }
            
            message.channel.send(embed);
          } function clean(string) {
            if (typeof text === "string") {
              return string.replace(/`/g, "`" + String.fromCharCode(8203))
              .replace(/@/g, "@" + String.fromCharCode(8203))
            } else {
              return string;
            }
         }
        }
        

    }