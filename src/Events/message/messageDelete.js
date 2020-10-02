const Event = require('../../Structures/Event.js')
const { MessagaEmbed } = require('discord.js')

module.exports = class extends Event {

    async run(message) {
        try {
            if (message.author.bot) return;
            const snipes = this.client.snipes.get(message.channel.id) || [];
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
            this.client.snipes.set(message.channel.id, snipes);
          } catch (e) {}
    } 
}