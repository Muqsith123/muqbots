const { prefix, owners } = require('../config.json')

module.exports = async (bot, message) => {
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(!command) return;
    if(command.ownerOnly && message.author.id != owners) return message.reply('Only Owner Can Use This !')
    command.run(bot,message,args)
    
}