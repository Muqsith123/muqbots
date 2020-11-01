const { MessageEmbed, version: djsversion } = require('discord.js')
const { version } = require('../../package.json')
const os = require('os')
const ms = require('ms')
const { utc } = require('moment')
const { owners } = require('../../config')

function formatBytes(bytes) {
		if (bytes === 0) return '0 Bytes';
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(1024));
		return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
	}

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
          `Servers : ${bot.guilds.cache.size.toLocaleString()}`,
          `Users : ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
          `Channels : ${bot.channels.cache.size.toLocaleString()}`,
          `Creation Date : ${utc(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
          `Node.js : ${process.version}`,
          `Version : v${version}`,
          `Discord.js : v${djsversion}`,
          '``\`'
        ], inline: false}
        )
        .addFields(
          {name: 'System : ', value: [
            '``\`',
            `Platform : ${process.platform}`,
            `Uptime : ${ms(os.uptime() * 1000, { long: true })}`,
            `CPU : `,
            `\u3000 Cores: ${os.cpus().length}`,
				    `\u3000 Model: ${core.model}`,
				    `\u3000 Speed: ${core.speed}MHz`,
            `Memory : `,
            `\u3000 Total: ${formatBytes(process.memoryUsage().heapTotal)}`,
			    	`\u3000 Used: ${formatBytes(process.memoryUsage().heapUsed)}`,
            '``\`'
          ], inline: false}
          )
          .setTimestamp()
      message.channel.send(embed)
  }
}