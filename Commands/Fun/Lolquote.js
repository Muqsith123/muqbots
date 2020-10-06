/*const { MessageEmbed } = require('discord.js');
const translate = require("@vitalets/google-translate-api");
module.exports = {
    name: 'memequote',
    category: 'Fun',
    description: 'Membuat Hidup Menjadi Lebih Mantap',
    run: async(bot, message)=> {
        const ke1 = require('../../sc/listquote.json');
        let quotenya = ke1.quote;
        let author = ke1.owner; 

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
    }
}*/