const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client({
    disableMentions: "everyone"
})
const alexa = require('alexa-bot-api');
const ai = new alexa("aw2plm")

const config = require('./config.json');
const message = require('./Events/message');
const prefix = config.prefix;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.categories = fs.readdirSync('./Commands/');

["commands", "events"].forEach(handlers=>{
    require(`./Handlers/${handlers}`)(bot);
})

bot.on("message", message => {
  if(message.author.bot) return;
  if (message.channel.id === "762919514995556382") { 
      let bacotan = message.content;
      ai.getReply(bacotan).then(r => message.channel.send(r)); 
      } else {
          return;
      }
})
bot.on("messageUpdate", async (oldMessage, newMessage) => {
  require("./Events/messageUpdate")(oldMessage, newMessage);
});

bot.on("messageDelete", async (message) => {
  require("./Events/messageDelete")(message);
});


bot.login(process.env.TOKEN1)
