const PrefixSchema = require('../../MongoDB/mongodb');
const mongoose = require('mongoose');

module.exports = {
    name: 'prefix',
    description: 'Mengatur Prefix Server !',
    adminOnly: true,
    run: async(bot, message, args) => {
        const data = await PrefixSchema.findOne({
            GuildID: message.guild.id
        })

        if(!args[0]) return message.reply('Masukkan Prefix Baru !');
        if(args[0].length > 3) return message.reply('Prefix Terlalu Panjang !')

        const filter = { GuildID: message.guild.id }
        const newprefix = { Prefix: args[0] }
        if (data) {
            await PrefixSchema.findOneAndUpdate(filter, newprefix, {
                new: true
            })
            
            message.channel.send(`The new prefix is now **\`${args[0]}\`**`);
        } else if (!data) {
            message.channel.send(`The new prefix is now **\`${args[0]}\`**`);
    
            await PrefixSchema.create({
                GuildID: message.guild.id,
                Prefix: args[0]
            })
        }
    }
}