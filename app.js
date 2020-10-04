const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client({
    disableMentions: "everyone"
})

const config = require('./config.json')
const prefix = config.prefix;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.categories = fs.readdirSync('./Commands/');

["commands", "events"].forEach(handlers=>{
    require(`./Handlers/${handlers}`)(bot);
})

bot.on("messageUpdate", async (oldMessage, newMessage) => {
  require("./Events/messageUpdate")(oldMessage, newMessage);
});

bot.on("messageDelete", async (message) => {
  require("./Events/messageDelete")(message);
});


bot.login(process.env.TOKEN1)
