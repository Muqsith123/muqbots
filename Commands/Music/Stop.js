const { GuildMember } = require("discord.js")

module.exports = {
    name: 'stop',
    description: 'Mengeluarkan BOT Dari Voice Channel',
    category: 'Music',
    run: async(bot, message) => {
        const serverQueue = message.client.queue.get(message.guild.id); 
        if(!message.member.voice.channel) return message.reply('You have to be in a voice channel to stop the music!');
        serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
    }
}