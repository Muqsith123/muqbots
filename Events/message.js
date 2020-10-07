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
    if(command.ownerOnly) {
        if(!message.author.id === owners) return;
        if(message.author.id === owners) command.run(bot,message,args);
    } else if(command) command.run(bot,message,args)
    
}