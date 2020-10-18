const { MessageEmbed } = require('discord.js')
const settings = require('../MongoDB/badword')
const mongoose = require('mongoose')
const { badword } = require('../sc/badword.json')

module.exports = async (bot, message) => {
    let blockbw = false;

    let data = await settings.findOne({
        GuildID: message.guild.id
    })
    if(!data) return;
    if(data) blockbw = true;

    let admin = [
        '730010922369679440',
        '738395119992176670',
        '748073934745763922'
    ]

    admin.forEach(salahsatuadmin => {
        if(!message.member.roles.cache.get(salahsatuadmin)) return blockbw = true;
        if(message.member.roles.cache.get(salahsatuadmin)) return blockbw = false;
    })

    badword.forEach(salahsatubadword => {
        if(blockbw && message.content.toLowerCase().includes(salahsatubadword)) {
            message.delete()

            const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle('Mohon Menjaga Perkataan !')
            .setDescription('Sistem Di Buat Agar Saling Menghormati Sesama Member !')
            message.channel.send(embed)
        }
    })
}