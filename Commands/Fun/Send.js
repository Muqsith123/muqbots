module.exports = {
    name: 'send',
    description: 'Mengirim Message Ke Channel Channel !',
    category: 'Fun',
    run: async(bot, message, args) => {
        let tujuan = args[0]
        let pesan = args.join(" ").slice(tujuan.length);
        let anjayani = tujuan.replace(/</g, "").replace(/>/g, "").replace(/#/g, "")

        console.log(anjayani)
        let channel = bot.channels.cache.get(anjayani)
        channel.send(pesan)
    }
}