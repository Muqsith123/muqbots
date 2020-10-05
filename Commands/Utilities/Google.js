const Discord = require('discord.js');
const request = require('node-superfetch');

module.exports = {
    name: 'google',
    description: 'mencari isi web',
    run: async(bot, message, args) => {
        const googlekey = process.env.GOOGLE_API;
        const csx = '5bc857784fb9d1718';
        let query = args.join(" ");
        let result;

        if(!query) return message.channel.send("Mohon Masukkan Pencarian !");

        href = await search(query)
        if(!href) return message.channel.send("Pencarian Tidak Di Temukan !");

        const embed = new Discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet)
        .setURL(href.link)
        .setImage(href.pagemap ? !href.pagemap : null)
        .setColor('#00f1ff')
        .setFooter('Powered By Google')

        return message.channel.send(embed)

        async function search(query) {
            const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: googlekey, cx: csx, safe: 'off', q: query
            })
        if(!body.items) return null;
        return body.items[0];
        }
    }
}