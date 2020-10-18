const prefixModel = require('../../MongoDB/mongodb');
const mongoose = require('mongoose');

module.exports = {
    name: 'prefix',
    description: 'Mengatur Prefix Server !',
    adminOnly: true,
    run: async(bot, message, args) => {
        const data = prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })

        if(!args[0]) return message.reply('Masukkan Prefix Baru !');
        if(args[0].length > 3) return message.reply('Prefix Terlalu Panjang !')

        if (data) {
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
            
            message.channel.send(`The new prefix is now **\`${args[0]}\`**`);
    
            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        } else if (!data) {
            message.channel.send(`The new prefix is now **\`${args[0]}\`**`);
    
            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        }
    }
}