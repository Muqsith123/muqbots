let a = 0;
let config = require('../config.json')

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if (message.channel.id != "764731128804278272") return; 
      if(message.content === "Saya Siap Ikut Carmeet") {

        //Mengecek Roles Apakah Sudah Ikut Carmeet
        let sudahikut;

        let founder = '730010922369679440'
        let coadmin = '738395119992176670'
        let staff = '748073934745763922'
        let carmeet1 = '764709773643218954'
        let carmeet2 = '764743128032608288'

        let list_terdaftar = [founder,
                              coadmin,
                              staff,
                              carmeet2]

        list_terdaftar.forEach(getrole => {
          if (message.member.roles.cache.get(getrole)) return sudahikut = true;
        })
        if (message.member.roles.cache.get(carmeet1)) return message.reply('Anda Sudah Mengikuti Carmeet Sebelumnya !');
        
        if (sudahikut) return message.reply('Anda Sudah Terdaftar !')
        if (a === 15) return message.reply('Maaf Sudah Tercapai limit Lain Kali Aja Ya !')

        //Jika Belum Daftar Maka Akan Melanjutkan Ini :
          let role = message.guild.roles.cache.get(carmeet2)
          let member = message.author.id
          const target = message.guild.members.cache.get(member);
          a++
          message.reply(`Anda Di Terima Sebagai Urutan Ke ${a}`)
          target.roles.add(role).catch(console.error);
        } else {
          if(message.author.id(config.owners)) return;
          message.delete({timeout : 2000})
          message.reply('Mohon Masukkan Command Yang Benar `Saya Siap Ikut Carmeet`').then(msg => {
          msg.delete({ timeout: 5000})
        })
      }
}
