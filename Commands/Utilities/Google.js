const Discord = require('discord.js');
const request = require('node-superfetch');

module.exports = {
    name: 'google',
    description: 'mencari isi web',
    category: 'Utilities',
    aliases: ['search', 'gog'],
    run: async(bot, message, args) => {
        const googlekey = process.env.GOOGLE_API;
        const csx = '5bc857784fb9d1718';
        let query = args.join(" ");
        let result;

         if (!query) return message.channel.send("Please enter the query.");

        href = await search(query);
        if (!href) return message.channel.send("Unknown search.");

        const embed = new Discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet) // Sometimes, the thumbnail might be unavailable in variant site. Return it to null.
        .setURL(href.link)
        .setColor('#00f1ff')
        .setFooter("Powered by Google")

        try{
            embed.setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
            return message.channel.send(embed);
        }catch(err) {
            return message.channel.send(embed);
        }

    async function search(query) {
        const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
            key: googlekey, cx: csx, safe: "off", q: query
        });

        if (!body.items) return null;
        return body.items[0];
      }
    }
}