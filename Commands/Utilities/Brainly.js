const { MessageEmbed } = require('discord.js');
const brainly = require('brainly-scraper');
 
module.exports = {
    name: 'brainly',
    category: 'Info',
    description: 'Membantu Yang Lagi Mengerjakan Tugas !',
    run: async(bot, message, args) => {
        let tanya = args.join(" ")

        if (!tanya) return message.channel.send('Masukkan Pencarian !');
       try {
        brainly(tanya).then(res => {
            let hasil = JSON.stringify(res.data)
            console.log(hasil)
        })
           }catch(err) {
        console.log(err)
       } 
        
    }
}

