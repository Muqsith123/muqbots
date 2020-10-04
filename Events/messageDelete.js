const { MessageEmbed } = require("discord.js");
module.exports = (message) => {
  try {
    if (message.author.bot) return;
    const snipes = message.client.snipes.get(message.channel.id) || [];
    snipes.unshift({
      content: message.content,
      author: message.author,
      image: message.attachments.first()
        ? message.attachments.first().proxyURL
        : null,
      date: new Date().toLocaleString("en-GB", {
        dataStyle: "full",
        timeStyle: "short",
      }),
    });
    snipes.splice(10);
    message.client.snipes.set(message.channel.id, snipes);
    let embed = new MessageEmbed()
      .setTitle(`Pesan Terhapus Terbaru !`)
      .setDescription(
        `**Si ${message.author.tag} Menghapus Pesan Di Channel <#${message.channel.id}>**`
      )
      .addField(`Berisi :`, message.content, true)
      .setColor(`RED`);
    let channel = message.guild.channels.cache.find(
      (ch) => ch.name === "📜║log-bot"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};
