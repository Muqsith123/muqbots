const { searchbyName } = require('anime-scrapper')
const { MessageEmbed, Message } = require('discord.js')
const translate = require('@vitalets/google-translate-api')

module.exports = {
    name: 'anime',
    description: 'Search Anime Yang Klean Cari !',
    category: 'Wibu',
    run: async(bot, message, args) => {
        const pencarian = args.join(" ")

        if(!pencarian) return message.reply('Mohon Masukkan Pencarian !');
        let i;
        try {
        searchbyName(pencarian).then(async (result)=>{
            let hasil = await JSON.parse(JSON.stringify(result));
            console.log(hasil)
            const a = new MessageEmbed()
            .setColor('#00f1ff')
            .setFooter('Masukkan Angka List Anime Untuk Melihat Detail !')
            for(i = 0;i < hasil.length; i++) {
                let lutfi = i + 1;
                a.addFields(
                {name: `${lutfi}. ${hasil[i].name}`, value: "\n\u200b", inline: false}
                )
            }
            if(i === hasil.length) return message.channel.send(a).then(msg => {
                message.channel.awaitMessages(m => m.author.id == message.author.id,
                    {max: 1, time: 30000}).then(collected => {
                        let wow = collected.first().content-1
                        if(message.author.bot) return;
                       translate(hasil[wow].plot, {to: 'id'}).then(res => {
                            let terjemahan = res.text
                            const embed = new MessageEmbed()
                        .setColor('#00f1ff')
                        .setTitle(hasil[wow].name)
                        .setImage(hasil[wow].img)
                        .setDescription(hasil[wow].plot)
                        .addFields(
                            {name: 'Terjemahan :', value: terjemahan, inline: false},
                            {name: 'Rating :', value: hasil[wow].rating, inline: false},
                            {name: 'Type :', value: hasil[wow].type, inline: false}
                        )
            
                        message.channel.send(embed)
                        })
                    }).catch((err) => {
                        console.log(err)
                        message.reply('Anda Tidak Memasukkan Angka List !')
                    })

            })
            
             
    })
        }catch(err) {
     message.reply('Pencarian Tidak Di Temukan !')  
    }
   }
}