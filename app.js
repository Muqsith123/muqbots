const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client({
    disableMentions: "everyone"
})

const config = require('./config.json')
const prefix = config.prefix;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync('./Commands/');

["commands"].forEach(handlers=>{
    require(`./Handlers/${handlers}`)(bot);
})

bot.on('ready',() =>{
    console.log(`Login Sebagai ${bot.user.tag}`)
})

bot.on('message', async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    const command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot,message,args)
})

bot.login(process.env.TOKEN1)