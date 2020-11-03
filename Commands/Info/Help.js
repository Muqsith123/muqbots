const { MessageEmbed } = require('discord.js')
const { prefixasli, owners } = require('../../config.json')
const { readdirSync } = require('fs')
const mongoose = require('mongoose')
const csprefix = require('../../MongoDB/mongodb')

module.exports = {
    name: 'help',
    description: 'Menjelaskan Command Command',
    category: 'Info',
    usage: `(prefix)help/(prefix)help (Command)`,
    run: async(bot, message, args) => {
        let name = args[0]
        let commands = bot.commands;
       
        if(name) {
            name = name.toLowerCase()
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
            if(command) {
            let deskripsi = []
            if(command.description) deskripsi.push('Deskripsi : ' + command.description)
            if(command.category) deskripsi.push('Category : ' + command.category)
            if(command.usage) deskripsi.push('Usage : ' + command.usage)
            if(command.aliases) deskripsi.push('Aliases : ' + command.aliases)
            
            const odading = new MessageEmbed()
            .setTitle(command.name)
            .setDescription(deskripsi)
            .setColor('RANDOM')
            message.channel.send(odading)
            }else {
                return message.channel.send("Command Tidak Valid !")
            }
        }else {
            let prefix
            let data = await csprefix.findOne({
                GuildID: message.guild.id,
            })
            if(data && data.Prefix) prefix = data.Prefix;
            if (!data.Prefix || !data) prefix = prefixasli;

            const banyakctr = bot.categories
            var i;
            let anjayani = new MessageEmbed()
            for(i = 0;i < banyakctr.length; i++) {
            const a = bot.categories[i]
                
            let namakategori;
            if(a === 'Config') namakategori = ':gear:║ Config';
            else if(a === 'DevOnly') namakategori = ':tools:║ Developer Only';
            else if(a === 'Fun') namakategori = ':smile:║Fun';
            else if(a === 'Music') namakategori = ':musical_note:║ Music';
            else if(a === 'GTA Online') namakategori = '<:gtaonline:772999346655985684> ║ GTA Online'
            else if(a === 'Info') namakategori = ':information_source:║ Info';
            else if(a === 'NSFW') namakategori = ':underage:║ NSFW';
            else if(a === 'News') namakategori = ':newspaper:║ News';
            else if(a === 'Utilities') namakategori = ':tools:║ Utilities';
            else if(a === 'Wibu') namakategori = ':ribbon:║ Weaboo';
            
            
            let commandwew = readdirSync(`./Commands/${a}/`).join(", " + `${prefix}`)
            
            anjayani.addFields(
                {name: namakategori, value: '`' + prefix + commandwew.replace(/.js/gi, "").toLowerCase() + '`', inline: true}
            )
            let duar = banyakctr.length - 1;
            if(i === duar) {
                if(!owners.includes(message.author.id)) anjayani.fields[1] = [];
                anjayani.setColor('#00f1ff')
                anjayani.setThumbnail(bot.user.avatarURL())
                message.channel.send(anjayani)
            }
            }
        }
    }
}