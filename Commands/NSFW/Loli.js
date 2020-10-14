const Loli = require('lolis.life')
const loli = new Loli()
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'loli',
    description: 'Menuhin Gizi lo',
    category: 'NSFW',
    run: async(bot, message) => {
        let ijin = true;
        if (!message.channel.nsfw) ijin = false;
        if (message.author.id === '710492761303941150') ijin = true;
        if(ijin === false) return message.reply('Command Hanya Bisa Di Akses Di Channel NSFW !')

        if (ijin === true) {
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
}