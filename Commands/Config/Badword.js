const prefixModel = require('../../MongoDB/mongodb');
const mongoose = require('mongoose');

module.exports = {
    name: 'badword',
    description: 'Mengatur Pengaturan badword',
    category: 'Config',
    adminOnly: true,
    run: async(bot, message) => {
        console.log('Program Di Eksekusi !')
        const data = prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })

        if (data && data.badword === "true") {
            message.reply('Sukses Mematikan Sistem badword !')
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
            let newData = new prefixModel({
                badword: "false",
                GuildID: message.guild.id
            })
            newData.save();
        } else if(data && data.badword === "false"){
            message.reply('Sukses Menyalakan Sistem badword !');
            
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })

            let newData = new prefixModel({
                badword: "true" ,
                GuildID: message.guild.id
            })
            newData.save();
        } else if(!data.badword || !data) {
            message.reply('Sukses Memulai !')

            let newData = new prefixModel({
                badword: "true",
                GuildID: message.guild.id
            })
            newData.save();
        } 
    }
}