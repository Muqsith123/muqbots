const { MessageEmbed } = require('discord.js')

module.exports = async (bot, message) => {
    const sys = require('../sc/settings.json')
    let blockbw = true;
    let { badword } = require('../sc/badword.json')

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
        if(sys.badword && blockbw && message.content.toLowerCase().includes(salahsatubadword)) {
            message.delete()

            const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle('Mohon Menjaga Perkataan !')
            .setDescription('Sistem Di Buat Agar Saling Menghormati Sesama Member !')
            message.channel.send(embed)
        }
    })
}