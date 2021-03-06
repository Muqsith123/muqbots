const { MessageEmbed } = require('discord.js')
const { owners, prefix } = require('../../config.json')

module.exports = {
    name: 'eval',
    category: 'DevOnly',
    description: 'STTTTTTT',
    usage: `${prefix}eval (CODE)`,
    ownerOnly: true,
    run: async(bot, message, args) => {
         const embed = new MessageEmbed()
        .addField("Input", "```js\n" + args.join(" ") + "```")
        try {
            const code = args.join(" ");
            if (!code) return message.channel.send("Mohon Masukkan Codenya !");
            let evaled;
            // This method is to prevent someone that you trust, open the secret shit here.
            if (code.includes(`SECRET`) || code.includes(`TOKEN1`) || code.includes("process.env")) {
              evaled = "Sistem Menolak Untuk Menampilkan Hal Rahasia !";
            } else {
              evaled = await eval(code);
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