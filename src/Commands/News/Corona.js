const Command = require('../../Structures/Command.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const { prefix } = require('../../../config.json')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: 'Melihat Jumlah Corona Di Indonesia',
            aliases: ['covid', 'covid19'],
            category: 'News',
            usage: '(negara/all)'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Masukkan Negara Yang Benar !')
        .setColor(0xFF0000)
        .setDescription(`CONTOH : ${prefix}corona all/${prefix}corona indonesia`)
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