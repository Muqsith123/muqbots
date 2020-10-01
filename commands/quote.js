const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'quote',
    description: 'Membuat Hidup Menjadi Lebih Semangat',
    execute(message) {
        fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then(response => response.json())
        .then(data => {
            let quotenya = data.quote.toLocaleString()
            let author = data.author.toLocaleString()
            const embed = new MessageEmbed()
            .setDescription('"' + quotenya + '"')
            .setAuthor(author)
            .setColor('#00f1ff')
            message.channel.send(embed)
        }).catch(e => {
            return message.channel.send('Terjadi Error. Mohon Coba Lagi Nanti !')
        })
    }
}
