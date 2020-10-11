let a = 0;

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if (!message.channel.id === "764731128804278272") return; 
      if(message.content === "Saya Siap Ikut Carmeet") {
        if (message.member.roles.cache.get('730010922369679440')) return message.reply('Anda Sudah Terdaftar !');
        if (message.member.roles.cache.get('738395119992176670')) return message.reply('Anda Sudah Terdaftar !');
        if (message.member.roles.cache.get('748073934745763922')) return message.reply('Anda Sudah Terdaftar !');
        if (message.member.roles.cache.get('764709773643218954')) return message.reply('Anda Sudah Terdaftar !');
        if (a === 15) return message.reply('Maaf Sudah Tercapai limit Lain Kali Aja Ya !')
          let role = message.guild.roles.cache.get('764709773643218954')
          let member = message.author.id
          const target = message.guild.members.cache.get(member);
          a++
          message.reply(`Anda Di Terima Sebagai Urutan Ke ${a}`)
          target.roles.add(role).catch(console.error);
        } else {
          message.delete({timeout : 2000})
          message.reply('Mohon Masukkan Command Yang Benar `Saya Siap Ikut Carmeet`').then(msg => {
          msg.delete({ timeout: 5000})
        })
      }
}