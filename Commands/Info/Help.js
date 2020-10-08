const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config.json')
module.exports = {
    name: 'help',
    description: 'Menjelaskan Command Command',
    category: 'Info',
    run: async(bot, message) => {
        const data = [];
        const { commands } = bot.commands

       		data.push('Here\'s a list of all my commands:');
			data.push(commands);
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            
            return message.author.send(data, { split: true })
    }
}