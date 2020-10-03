const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const translate = require("@vitalets/google-translate-api")

module.exports = {
    name: 'quote',
    category: 'Fun',
    description: 'Membuat Hidup Menjadi Lebih Semangat',
    run: async(bot, message)=> {
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
            let quotenya = `"` + data.content.toLocaleString() + `"`
            let author = data.author.toLocaleString()
            
            translate(quotenya, {to: 'id'}).then(res => {
                   let terjemahan = res.text

                const embed = new MessageEmbed()
                .setDescription(quotenya)
                .setAuthor(author)
                .setColor('#00f1ff')
                .addField('Di Terjemahan Ke Bahasa Indo : ', terjemahan, true)

            message.channel.send(embed)
                }).catch(err => {
                    console.error(err);
                });

        }).catch(e => {
            return message.channel.send('Terjadi Error. Mohon Coba Lagi Nanti !')
        })
    }
}