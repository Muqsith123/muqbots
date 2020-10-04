const { MessageEmbed } = require("discord.js");

module.exports = (oldMessage, newMessage) => {
  try {
    let embed = new MessageEmbed()
      .setTitle(`Pesan Di Edit Terbaru`)
      .setColor(`YELLOW`)
      .setDescription(
        `**Si ${oldMessage.author.tag} Mengubah Pesan Di <#${oldMessage.channel.id}>**`
      )
      .addField(`Pesan Awal :`, oldMessage.content, true)
      .addField(`Setelah Di Edit :`, newMessage.content, true);
    let channel = oldMessage.guild.channels.cache.find(
      (ch) => ch.name === "📜║log-bot"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};
