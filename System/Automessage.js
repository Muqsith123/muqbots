const { MessageEmbed } = require('discord.js');
const csprefix = require('../MongoDB/mongodb')
const settingan = require('../config.json')
const mongoose = require('mongoose')

module.exports = async(bot, message) => {
    let komen = message.content.toLowerCase()
    if(message.author.bot) return;
    if(komen.includes(`<@!${bot.user.id}>` || `<@${bot.user.id}`)) {
        let data = await csprefix.findOne({
            GuildID: message.guild.id,
        })
        let prefix;
        if(data && data.Prefix) prefix = data.Prefix;
        if (!data.Prefix || !data) prefix = settingan.prefix;

        message.channel.send(`Hello My Prefix Is \`${prefix}\`. Use \`${prefix}help\` for show list of the command`)
    } else if(komen.includes('indihome')) {
        let embed = new MessageEmbed()
        .setTitle('Ada Masalah ?')
        .setDescription('Apapun Masalahnya Restart Router Solusinya !')
        .setColor('YELLOW')

        message.channel.send(embed)
    }
}