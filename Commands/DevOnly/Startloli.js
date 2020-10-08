const Loli = require('lolis.life')
const loli = new Loli()
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'startloli',
    description: 'WEW',
    category: 'DevOnly',
    devOnly: true,
    run: async(bot, message) => {
        if (!message.channel.nsfw) return message.channel.send('Channel Ini Bukan NSFW') 
        message.channel.send('Berhasil Memulai !')
        setInterval(function() {
            loli.getSFWLoli().then((loliJSONoutput) => {
                const embed = new MessageEmbed()
                .setColor('#00f1ff')
                .setTitle("Penuhi Gizi Lo Dengan Loli !")
                .setImage(loliJSONoutput.url)
                .setFooter('Ingat ! Cintai Loli Mu !')
    
                message.channel.send(embed)
            })
        }, 60000)
    }
}