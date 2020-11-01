const { MessageEmbed, version: djsversion } = require('discord.js')
const { version } = require('../../package.json')
const os = require('os')
const ms = require('ms')
const { utc } = require('moment')
const { owners } = require('../../config')

module.exports = {
  name: 'botinfo',
  description: 'Show Bot Info !',
  category: 'Info',
  run: async(bot, message) => {
      const pemilik = bot.users.cache.get(owners).tag
      const core = os.cpus()[0]
      let embed = new MessageEmbed()
      .setThumbnail(bot.user.displayAvatarURL())
      .setColor('RANDOM')
      .addFields(
        {name: 'Developer : ', value: '```'+pemilik+'```', inline: false},
        {name: 'General : ', value: [
          '``\`',
          `Client : ${bot.user.tag} (${bot.user.id})`,
          `Commands Total : ${bot.commands.size}`,
          `Servers : ${bot.guids.cache.get.size.toLocaleString()}`,
          `Users : ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
          `Channels : ${bot.channels.cache.size.toLocaleString()}`,
          `Creation Date : ${utc(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
          `Node.js : ${process.version}`,
          `Version : v${version}`,
          `Discord.js : v${djsversion}`
          '``\`'
        ], inline: false}
        )
      message.channel.send(embed)
  }
}