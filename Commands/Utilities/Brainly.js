const { MessageEmbed } = require('discord.js');
const kagApi = require('@kagchi/kag-api')
const { titleCase } = require('../../sc/Functions/titleCase') 

module.exports = {
    name: 'brainly',
    category: 'Info',
    description: 'Membantu Yang Lagi Mengerjakan Tugas !',
    aliases: ['br'],
    run: async(bot, message, args) => {
        let tanya = args.join(" ")
        if (!tanya) return message.channel.send('Masukkan Pencarian !');
        try{
            kagApi.brainly.search.id(tanya).then(async res => {
                let hasil = await JSON.parse(JSON.stringify(res.data));
                let soal = new MessageEmbed()
                .setColor('#00f1ff');

                for(let i = 0;i < hasil.length; i++) {
                    let urutan = i + 1;
                    soal.addFields(
                    { name: `${urutan}. ` + titleCase(hasil[i].node.content), value: "\n\u200b", inline: false},
                )
                console.log(hasil[i].node.content)
                if(i === hasil.length - 1) return message.channel.send(soal).then(msg => {
                    switch (urutan) {
                        case 5:
                            msg.react('5️⃣');
                        case 4:
                            msg.react('4️⃣');
                        case 3: 
                            msg.react('3️⃣');
                        case 2:
                            msg.react('2️⃣');
                        case 1:
                            msg.react('1️⃣');
                    }
                    const filter = (reaction, user) => {
                        return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                    };
                    
                    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();
                        
                        let a;
                        if(reaction.emoji.name === '1️⃣') a = 0;
                        else if(reaction.emoji.name === '2️⃣') a = 1;
                        else if(reaction.emoji.name === '3️⃣') a = 2;
                        else if(reaction.emoji.name === '4️⃣') a = 3;
                        else if(reaction.emoji.name === '5️⃣') a = 4;

                        const embedjwb = new MessageEmbed()
                            .setColor('#00f1ff')
                            .setTitle(titleCase(hasil[i].node.content))
                            .setDescription(titleCase(hasil[i].node.answers.nodes[0].content))
                            message.channel.send(embedjwb)
                    }).catch(collected => {
                        message.reply('Anda Tidak Mereact Untuk Memunculkan Jawaban !');
                    });
                })
                }
            })
        }catch{
            let error = new MessageEmbed()
            .setTitle('Not Found !')
            .setDescription('Please Using Other Keywords\nStill Not Working ? Maybe Package Error !')
            .setColor('RED')

            message.channel.send(error)
        }
    
    }
}
