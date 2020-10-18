const settingan = require('../config.json');
const mongoose = require('mongoose');
const csprefix = require('../MongoDB/mongodb')

module.exports = async (bot, message) => {
    let data = await csprefix.findOne({
        GuildID: message.guild.id,
    })
    if(data) prefix = data.Prefix;
    if (!data) prefix = settingan.prefix;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(!command) return;
    if(command.ownerOnly && message.author.id != settingan.owners) return message.reply('Only Owner Can Use This !')
    if(command.adminOnly && !message.member.hasPermission("ADMINISTRATOR")) return message.reply('You Need `Administrator` To Use This Command !')
    command.run(bot,message,args)
}