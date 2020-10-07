const Loli = require('lolis.life')
const loli = new Loli()
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'loli',
    description: 'Menuhin Gizi lo',
    category: 'Wibu',
    run: async(bot, message) => {
        loli.getSFWLoli().then((loliJSONoutput) => {
            const embed = new MessageEmbed()
            .setColor('#00f1ff')
            .setTitle("Penuhi Gizi Lo Dengan Loli !")
            .setImage(loliJSONoutput.url)
            .setFooter('Ingat ! Cintai Loli Mu !')

            message.channel.send(embed)
        })
    }
}