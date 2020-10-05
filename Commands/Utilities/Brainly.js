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
            let hasil = JSON.parse(JSON.stringify(res.data));
            console.log(hasil)

            function titleCase(str) {
                return str.replace(
                  /\w\S*/g,
                  function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                  }
                );
              }

            const embed = new MessageEmbed()
            .setColor('#00f1ff')
            .addFields(
                { name: '1. ' + titleCase(hasil[0].pertanyaan), value: "\n\u200b", inline: false},
                { name: '2. ' + titleCase(hasil[1].pertanyaan), value: "\n\u200b", inline: false},
                { name: '3. ' + titleCase(hasil[2].pertanyaan), value: "\n\u200b", inline: false},
                { name: '4. ' + titleCase(hasil[3].pertanyaan), value: "\n\u200b", inline: false},
                { name: '5. ' + titleCase(hasil[4].pertanyaan), value: "\n\u200b", inline: false}
            )
            message.channel.send(embed).then(msg => {
            msg.react('1️⃣');
	    msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
            msg.react('5️⃣');
            
            const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                
                if(reaction.emoji.name === '1️⃣') {
                    const embedjwb = new MessageEmbed()
                    .setColor('#00f1ff')
                    .setTitle(titleCase(hasil[0].pertanyaan))
                    .setDescription(titleCase(hasil[0].jawaban[0].text))
                    message.channel.send(embedjwb)
                }
                else if(reaction.emoji.name === '2️⃣') {
                    const embedjwb = new MessageEmbed()
                    .setColor('#00f1ff')
                    .setTitle(titleCase(hasil[1].pertanyaan))
                    .setDescription(titleCase(hasil[1].jawaban[0].text))
                    message.channel.send(embedjwb)
                }
                else if(reaction.emoji.name === '3️⃣') {
                    const embedjwb = new MessageEmbed()
                    .setColor('#00f1ff')
                    .setTitle(titleCase(hasil[2].pertanyaan))
                    .setDescription(titleCase(hasil[2].jawaban[0].text))
                    message.channel.send(embedjwb)
                }
                else if(reaction.emoji.name === '4️⃣') {
                    const embedjwb = new MessageEmbed()
                    .setColor('#00f1ff')
                    .setTitle(titleCase(hasil[3].pertanyaan))
                    .setDescription(titleCase(hasil[3].jawaban[0].text))
                    message.channel.send(embedjwb)
                }
                else if(reaction.emoji.name === '5️⃣') {
                    const embedjwb = new MessageEmbed()
                    .setColor('#00f1ff')
                    .setTitle(titleCase(hasil[4].pertanyaan))
                    .setDescription(titleCase(hasil[4].jawaban[0].text))
                    message.channel.send(embedjwb)
                }
            }).catch(collected => {
                message.reply('Anda Tidak Mereact Untuk Memunculkan Jawaban !');
            });
            })
            });
       }catch(err) {
        console.log(err)
       } 
        
    }
}

