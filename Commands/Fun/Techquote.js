const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const translate = require("@vitalets/google-translate-api")

module.exports = {
    name: 'techquote',
    category: 'Fun',
    description: 'Membuat Programmer Menjadi Semangat !',
    run: async(bot, message)=> {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(response => response.json())
    .then(data => {
            let quotenya = `"` + data.quote.toLocaleString() + `"`
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