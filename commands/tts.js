module.exports = {
    name: 'tts',
    description: 'Bot bisa ngomong lo !',
    execute(message, args) {
        let perkaataan = args.join(" ");

        if(!args[0]) return message.channel.send('Aku harus ngomong apa ?');

        message.channel.send(`${perkaataan}`, {
            tts: true
           })
    }
}