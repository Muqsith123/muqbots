const { getbyName } = require('anime-scrapper')
const { MessageEmbed } = require('discord.js')
const translate = require('@vitalets/google-translate-api')

module.exports = {
    name: 'anime',
    description: 'Search Anime Yang Klean Cari !',
    category: 'Wibu',
    run: async(bot, message, args) => {
        const pencarian = args.join(" ")
        getbyName(pencarian).then(async (result)=>{
            let hasil = await JSON.parse(JSON.stringify(result));
            translate(hasil.response.plot, {to: 'id'}).then(res => {
                let terjemahan = res.text
                const embed = new MessageEmbed()
            .setColor('#00f1ff')
            .setTitle(hasil.response.name)
            .setDescription(hasil.response.plot)
            .setImage(hasil.response.img)
            .addFields(
                {name: 'Terjemahan :', value: terjemahan, inline: false},
                {name: 'Rank :', value: hasil.response.rank, inline: false},
                {name: 'Rating :', value: hasil.response.rating, inline: false},
                {name: 'Type :', value: hasil.response.type, inline: false},
                {name: 'Season :', value: `Time : ${hasil.response.season.time}\nStart : ${hasil.response.season.start}\nEnd : ${hasil.response.season.end}`, inline: false}
            )

            console.log(hasil)
            message.channel.send(embed)
            })
        })
    }
}