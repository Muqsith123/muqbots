const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'giveaway',
    description: 'Jadi Host Gip Away !',
    adminOnly: true,
    category: 'Utilities',
    run: async(bot, message, args) => {
        if(!args[0]) return message.reply('You did not specify your time!')
        if(
            !args[0].endsWith("h") &&
            !args[0].endsWith("j") &&
            !args[0].endsWith("m")
        ) return message.reply('Please Input The Correct Time Format !');
        if(isNaN(args[0][0])) return message.reply('That is not a number !');

        let channeltarget = message.mentions.channels.first();
        if(!channeltarget) return message.reply('I Cannot Find That Channel In This Guild !');

        let jumlahpemenang = parseInt(args[2])
        if(!jumlahpemenang || typeof jumlahpemenang != 'number') return message.reply('Please Input Correct Winner Amount !');
        let hadiah = args.slice(3).join(" ");
        if(!hadiah) message.reply('Please enter specific prizes')
        
        message.channel.send(`Success Make Giveaway In ${channeltarget}`)
    }
}