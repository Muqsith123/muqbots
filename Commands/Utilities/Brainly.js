const { MessageEmbed } = require('discord.js');
const brainly = require('brainly-scraper-v2');
 
module.exports = {
    name: 'brainly',
    category: 'Info',
    description: 'Membantu Yang Lagi Mengerjakan Tugas !',
    run: async(bot, message, args) => {
        let tanya = args.join(" ")
        brainly(tanya, 5, "id").then(res => {
            var mydata = JSON.stringify(res);
            var hasil = JSON.parse(mydata)

            console.log(mydata)       
    })
   }
}

           
