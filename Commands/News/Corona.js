const fetch = require('node-fetch');
const Discord = require('discord.js');
const { prefix } = require('../../config.json')

module.exports = {
    name: 'corona',
    category: 'News',
    description: 'Melihat Jumlah COVID-19 Di Dunia!',
    run: async(bot, message, args)=> {

	// eslint-disable-next-line no-unused-vars
		let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Masukkan Negara Yang Benar !')
        .setColor(0xFF0000)
        .setDescription(`CONTOH : ${prefix}corona all/${prefix}corona indonesia`)
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all" || args[0] === "semua" || args[0] === "seluruh"){
            fetch(`https://disease.sh/v3/covid-19/all`)
            .then(response => response.json())
            .then(data => {
                let terkonfirmasi = data.cases.toLocaleString()
                let selamat = data.recovered.toLocaleString()
                let modar = data.deaths.toLocaleString()
                let kasushariini = data.todayCases.toLocaleString()
                let modarhariini = data.todayDeaths.toLocaleString()
                let sembuhharini = data.todayRecovered.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor('#00f1ff')
                .setTitle(`Berita COVID-19 Di Dunia 🌎`)
                .addField('Kasus', terkonfirmasi)
                .addField('Sembuh', selamat)
                .addField('Meninggal', modar)
                .addField('Kasus Hari Ini', kasushariini)
                .addField('Meninggal Hari Ini', modarhariini)
                .addField('Sembuh Hari ini', sembuhharini)
                .setFooter('Stay Safe Everyone !')
                
                message.channel.send(embed)
            })
        } else {
            fetch(`https://disease.sh/v3/covid-19/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let negara = data.country
                let bendera = data.countryInfo.flag
                let terkonfirmasi = data.cases.toLocaleString()
                let selamat = data.recovered.toLocaleString()
                let modar = data.deaths.toLocaleString()
                let kasushariini = data.todayCases.toLocaleString()
                let modarhariini = data.todayDeaths.toLocaleString()
                let sembuhharini = data.todayRecovered.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor('#00f1ff')
                .setTitle(`Berita COVID-19 Untuk Negara **${negara}**`)
                .setThumbnail(bendera)
                .addField('Kasus', terkonfirmasi)
                .addField('Sembuh', selamat)
                .addField('Meninggal', modar)
                .addField('Kasus Hari Ini', kasushariini)
                .addField('Meninggal Hari Ini', modarhariini)
                .addField('Sembuh Hari ini', sembuhharini)
                .setFooter('Stay Safe Everyone !')
                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Masukkan Negara Yang Benar !')
            })
        }
	}

};