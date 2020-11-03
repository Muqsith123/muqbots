const settingan = require('../config.json');
const mongoose = require('mongoose');
const csprefix = require('../MongoDB/mongodb')

module.exports = async (bot, message) => {
    let data = await csprefix.findOne({
        GuildID: message.guild.id,
    })
    if(data && data.Prefix) prefix = data.Prefix;
    if (!data || !data.Prefix) prefix = settingan.prefix;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(!command) return;
    if(command.ownerOnly && !settingan.owners.includes(message.author.id)) return message.reply('Only Owner Can Use This !')
    if(command.adminOnly && !message.member.hasPermission("ADMINISTRATOR")) return message.reply('You Need `Administrator` To Use This Command !')
    try { 
      command.run(bot,message,args) 
    } catch(err) {
      return message.channel.send(`Error: ${err}`)
    }
}