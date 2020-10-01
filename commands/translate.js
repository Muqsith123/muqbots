const translate = require("@vitalets/google-translate-api");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'translate',
    description: 'Menerjemahkan Kata !',
    execute(message, args) {
        args.join(" ");
        let kata = args.join(" ").slice(3);
        
        translate(kata, {to: args[0]}).then(res => {
            let hasil = res.text
            
            let bahasa = args[0].toUpperCase();
            const embed = new MessageEmbed()
            .setColor('#00f1ff')
            .addFields(
                { name: 'Dari :', value: `${kata}`, inline: false},
                { name: `Di Terjemahakan Ke ${bahasa} :`, value: `${hasil}`, inline: false}
            )
            message.channel.send(embed)           
        })
    }
}