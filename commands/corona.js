const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
  name: 'corona',
  description: 'info covid-19',
  cooldown: 15,
  execute(message, args) {
    let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Masukkan Negara Yang Benar !')
        .setColor(0xFF0000)
        .setDescription('CONTOH : $corona all/$corona indonesia')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all" || args[0] === "semua" || args[0] === "seluruh"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor('#00f1ff')
                .setTitle(`Berita COVID-19 Di Dunia 🌎`)
                .addField('Kasus', confirmed)
                .addField('Sembuh', recovered)
                .addField('Meninggal', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor('#00f1ff')
                .setTitle(`Berita COVID-19 Untuk Negara **${countries}**`)
                .addField('Kasus', confirmed)
                .addField('Sembuh', recovered)
                .addField('Meninggal', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Masukkan Negara Yang Benar !')
            })
        }
    
    
    
    
  }
  
};