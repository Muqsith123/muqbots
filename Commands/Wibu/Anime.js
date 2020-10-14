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

            for(i = 0;i < hasil.length; i++) {
                a.addFields(
                {name: hasil[i].name, value: "\n\u200b", inline: false}
                )
            }
            if(i === hasil.length) return message.channel.send(a).then(msg => {
                bot.on("message", message => {
                    let wow = 0;
                    if(message.author.bot) return;
                    if(message.content != wow) return message.reply('Mohon Masukkan Angka Dari List Anime !');
                    translate(hasil[wow].plot, {to: 'id'}).then(res => {
                        let terjemahan = res.text
                        const embed = new MessageEmbed()
                    .setColor('#00f1ff')
                    .setTitle(hasil[wow].name)
                    .setDescription(hasil[wow].plot)
                    .setImage(hasil[wow].img)
                    .addFields(
                        {name: 'Terjemahan :', value: terjemahan, inline: false},
                        {name: 'Rating :', value: hasil[wow].rating, inline: false},
                        {name: 'Type :', value: hasil[wow].type, inline: false}
                    )
        
                    message.channel.send(embed)
                    })
                })
            })
            
             
    })
        }catch(err) {
     message.reply('Pencarian Tidak Di Temukan !')  
    }
   }
}