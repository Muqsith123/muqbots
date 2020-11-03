const Discord = require('discord.js');
const fs = require('fs')
const ytdl = require('ytdl-core')
const bot = new Discord.Client({
    disableMentions: "everyone",
    fetchAllMembers:true
})
const { config } = require('dotenv')
const keepAlive = require('./server');

keepAlive()
const configjson = require('./config.json')
const prefix = configjson.prefix;
const owners = configjson.owners;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.categories = fs.readdirSync('./Commands/');
bot.queue = new Map();

config({
  path: __dirname + "/.env"
});

["commands", "events", "system"].forEach(handlers=>{
    require(`./Handlers/${handlers}`)(bot);
})


bot.on("messageUpdate", async (oldMessage, newMessage) => {
  require("./Events/messageUpdate")(oldMessage, newMessage);
});

bot.on("messageDelete", async (message) => {
  require("./Events/messageDelete")(message);
});

bot.login(process.env.TOKEN1)
