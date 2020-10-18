const prefixModel = require('../../MongoDB/badword');
const mongoose = require('mongoose');

module.exports = {
    name: 'badword',
    description: 'Mengatur Pengaturan Badword',
    category: 'DevOnly',
    adminOnly: true,
    run: async(bot, message) => {
        
        console.log('Program Di Eksekusi !')
        const data = prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })

        if(data) {
            message.reply('Sukses Memulai !')

            let newData = new prefixModel({
                Badword: true,
                GuildID: message.guild.id
            })
            newData.save();
        }
        else if (data.Badword === true) {
            message.reply('Sukses Mematikan Sistem Badword !')
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
            let newData = new prefixModel({
                Badword: false,
                GuildID: message.guild.id
            })
            newData.save();
        } else if(data.Badword === false){
            message.reply('Sukses Menyalakan Sistem Badword !');
            
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })

            let newData = new prefixModel({
                Badword: true,
                GuildID: message.guild.id
            })
            newData.save();
        } 
    }
}