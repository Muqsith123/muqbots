const ytdl = require('ytdl-core')

module.exports = {
    name: 'play',
    description: 'Memutar Musik Mantap Mantap !',
    category: 'Music',
    run: async(bot, message, args) => {

    const bruh = args.join(" ")
    
    const queue = bot.queue;
    
    const serverQueue = queue.get(message.guild.id);
    if(!bruh) message.reply('Mohon Masukkan Nama Lagu/Link Video !');

    const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send("You need to be in a voice channel to play music!");
        const permissions = voiceChannel.permissionsFor(bot.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("I need the permissions to join and speak in your voice channel!");

        const songInfo = await ytdl.getInfo(bruh);
        const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url
        };

        if (!serverQueue) {
          const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
          };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          play(message.guild, queueContruct.songs[0]);
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
        }
          function play(guild, song) {
            const serverQueue = queue.get(guild.id);
            if (!song) {
              serverQueue.voiceChannel.leave();
              queue.delete(guild.id);
              return;
          }
        
          const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on("finish", () => {
              serverQueue.songs.shift();
              play(guild, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
          dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
          serverQueue.textChannel.send(`Start playing: **${song.title}**`);
        }
    }
}