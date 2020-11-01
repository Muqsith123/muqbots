const gplay = require('google-play-scraper');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gplay',
    description: 'Search Google Play App !',
    category: 'Utilities',
    usage: '(Command) (Total) (App Name)',
    run: async(bot, message, args) => {
        let total = parseInt(args[0]);
        if(!total) return message.channel.send("Please Input Total !")
        let query = args.join(" ").slice(total.length);
        if(!query) return message.channel.send('Please Input Query !')

        gplay.search({
            term: query,
            num: total
        }).then(hasil => {
            let embed = new MessageEmbed()
            .setTitle('Result : ')
            .setFooter('Please Input Number Of List !')
            .setColor('RANDOM')
            for(let i = 0;i < hasil.length;i++) {
                embed.addFields({
                    name: `${i+1}. ${hasil[i].title}`, value: `Input ${i + 1} for Detail !`
                })
            if(i === hasil.length - 1) {
                message.channel.send(embed)
                message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000}).then(collected => {
                    if(message.author.bot) return;
                    let inputnumber = parseInt(collected.first().content)-1
                    
                    gplay.app({appId: hasil[inputnumber].appId})
                    .then(hasilakhir => {
                        let newembed = new MessageEmbed()
                    .setTitle(hasilakhir.title)
                    .setURL(hasilakhir.url)
                    .setDescription(hasilakhir.description.substring(0, 2048))
                    .addFields(
                        {name: 'Summary : ', value: hasilakhir.summary, inline: true},
                        {name: 'Genre : ', value: hasilakhir.genre, inline: true},
                        {name: 'Developer : ', value: hasilakhir.developer, inline: true},
                        {name: 'Score : ', value: hasilakhir.scoreText, inline: true},
                        {name: 'Price : ', value: hasilakhir.currency+hasilakhir.priceText, inline: true},
                        {name: 'Version : ', value: hasilakhir.version, inline: true},
                        {name: 'Installs : ', value: hasilakhir.installs, inline: true}
                    )
                    .setImage(hasilakhir.screenshots[0])
                    .setThumbnail(hasilakhir.icon)
                    .setColor('RANDOM')

                    message.channel.send(newembed)
                    });
    
                })
                }
            }
        })

    }
}