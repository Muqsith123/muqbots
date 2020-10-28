const Discord = require('discord.js');
const fs = require('fs')
const ytdl = require('ytdl-core')
const bot = new Discord.Client({
    disableMentions: "everyone"
})

const http = require('http');
http.createServer((req, res) => {
res.writeHead(200, {
    'Content-type': 'text/plain'
});
    res.write('Hey');
    res.end();
}).listen(4000);

const config = require('./config.json');
const prefix = config.prefix;
const owners = config.owners;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.categories = fs.readdirSync('./Commands/');
bot.queue = new Map();

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
