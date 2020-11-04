const PrefixSchema = require('../../MongoDB/mongodb');
const mongoose = require('mongoose');

module.exports = {
    name: 'badword',
    description: 'Setting Badword System !',
    adminOnly: true,
    run: async(bot, message, args) => {
        const data = await PrefixSchema.findOne({
            GuildID: message.guild.id
        });

        const filter = { GuildID: message.guild.id }
        if (data && data.badword === true) {
            await PrefixSchema.findOneAndUpdate(filter, { badword: false }, {
                new: true
            })
            
            message.channel.send('Success Set Off !');
        } else if (data && data.badword === false) {
            await PrefixSchema.findOneAndUpdate(filter, { badword: true }, {
                new: true
            })
            
            message.channel.send('Success Set On !');
        } else if (!data) {
            message.channel.send('Success Starting !');
    
            await PrefixSchema.create({
                GuildID: message.guild.id,
                badword: true
            })
        }
    }
}