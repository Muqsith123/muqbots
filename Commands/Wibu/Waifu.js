const kagApi = require('@kagchi/kag-api');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'waifu',
    description: 'Generate Random Waifu Image !',
    category: 'Wibu',
    run: async(bot, message, args) => {
        let query = args.join(" ").toLowerCase();

        function wow() {
            let njay = new MessageEmbed()
            .setTitle('Masukkan Waifu Yang Benar !')
            .addFields({name: 'List Waifu :', value: 'Nezuko, Bunnygirl, Megumin, Zero Two, Rem, Hayasaka, Chika', inline: false})
            .setColor('RED')
            message.channel.send(njay)
        }
        let waifu;
        if(!query) return wow();
        if(query === 'zero two') waifu = await kagApi.waifu.zerotwo()
        else if(query === 'megumin') waifu = await kagApi.waifu.megumin()
        else if(query === 'nezuko') waifu = await kagApi.waifu.nezuko()
        else if(query === 'rem') waifu = await kagApi.waifu.rem()
        else if(query === 'bunnygirl') waifu = await kagApi.waifu.bunnygirl()
        else if(query === 'chika') waifu = await kagApi.waifu.chika()
        else if(query === 'chika') waifu = await kagApi.waifu.hayasaka()

        else return wow();
        
        let embed = new MessageEmbed()
        .setTitle('This Your Waifu !')
        .setImage(waifu)
        .setColor('#ff5fda')

        message.channel.send(embed)
    }
}