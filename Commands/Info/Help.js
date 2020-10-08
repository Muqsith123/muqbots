const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config.json')
const { readdirSync } = require('fs')

module.exports = {
    name: 'help',
    description: 'Menjelaskan Command Command',
    category: 'Info',
    usage: `${prefix}help/${prefix}help (Command)`,
    run: async(bot, message, args) => {
        let name = args[0]
        let commands = bot.commands;
       
        if(name) {
            name = name.toLowerCase()
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
            if(command) {
            const odading = new MessageEmbed()
            .setTitle(command.name)
            .setDescription('Deskripsi : ' + command.description + '\n' + 'Category : ' + command.category + '\n' + 'Usage : ' + command.usage)
            message.channel.send(odading)
            }else {
                return message.channel.send("Command Tidak Valid !")
            }
        }else {
            const banyakctr = bot.categories
            var i;
            let anjayani = new MessageEmbed()
            for(i = 0;i < banyakctr.length; i++) {
            const a = bot.categories[i]
    
            let commandwew = readdirSync(`./Commands/${a}/`).join(" " + prefix)
            
            anjayani.addFields(
                {name: a, value: prefix + commandwew.replace(/.js/gi, ""), inline: false}
            )
            let duar = banyakctr.length - 1;
            if(i === duar) {
                anjayani.setColor('#00f1ff')
                anjayani.setThumbnail(bot.user.avatarURL())
                message.channel.send(anjayani)
            }
            }
        }
    }
}