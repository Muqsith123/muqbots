const { trace } = require("node-superfetch");

module.exports = {
    name: 'send',
    description: 'Mengirim Message Ke Channel Channel !',
    category: 'Fun',
    run: async(bot, message, args) => {
        let tujuan = message.mentions.channels.first();
        if(!tujuan) return message.channel.send('Please Input The Channel Target !')
        if(!message.member.permissionsIn(tujuan).has('SEND_MESSAGES')) return message.channel.send(`You Don\'t Have Permissions To Send Message In ${tujuan}`)
        if(!message.guild.me.permissionsIn(tujuan).has('SEND_MESSAGES')) return message.channel.send(`I Don\'t Have Permissions To Send Message In ${tujuan}`)
        let pesan = args.join(" ").slice(21);

        tujuan.send(`${pesan} (From: ${message.author.tag})`)
    }
}