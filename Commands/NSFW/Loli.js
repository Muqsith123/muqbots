let a = 1;
const Loli = require('lolis.life')
const loli = new Loli()
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'loli',
    description: 'Menuhin Gizi lo',
    category: 'NSFW',
    run: async(bot, message) => {
        let ijin = true;
        if (!message.channel.nsfw) ijin = false;
        if (message.author.id === '710492761303941150') ijin = true;
        if(ijin === false) return message.reply('Command Hanya Bisa Di Akses Di Channel NSFW !')

        const embed = new MessageEmbed()
        .setColor('#00f1ff')
        .setTitle("Penuhi Gizi Lo Dengan Loli !")
        .setFooter('Ingat ! Cintai Loli Mu !')
        
        /*function loli1() {
                loli.getSFWLoli().then((loliJSONoutput) => {
                console.log(loliJSONoutput)
                embed.setImage(loliJSONoutput.url)                 
                message.channel.send(embed)
                })
            }*/
        function loli2() {               
            fetch('https://api.lolis.life/random?category=kawaii')
            .then(response => response.json())
            .then(data => {
                embed.setImage(data.url)
                message.channel.send(embed)
            })         
        }
        if(a === 1) {
            loli2();
            a++
        }
        else if(a == 2) {
            loli2();
            a--
        }
    }
}