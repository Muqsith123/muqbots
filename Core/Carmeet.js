let a = 0;

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if (message.channel.id === "764499514118897724") { 
      if(message.content === "Saya Siap Ikut Carmeet") {
        if (a === 15) return message.reply('Maaf Sudah Tercapai limit Lain Kali Aja Ya !')
          let role = message.guild.roles.cache.get('764490241549533235')
          if (!role) return console.error("404: role with ID", "not found in guild");
          let member = message.author.id
          const target = message.guild.members.cache.get(member);
          a++
          message.reply(`Anda Di Terima Sebagai Urutan Ke ${a}`)
          target.roles.add(role).catch(console.error);
        }
    } 
}