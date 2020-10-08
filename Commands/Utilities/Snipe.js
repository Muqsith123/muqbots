const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "snipe",
  description: "Melihat Pesan Yang Terhapus !",
  category: "Utilities",
  aliases: ['ciduk'],
  run: async (bot, message, args) => {
    const snipes = bot.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`Tidak Ada Snipe Yang Valid...`);
    const Embed = new MessageEmbed()
      .setColor('YELLOW')
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  },
};