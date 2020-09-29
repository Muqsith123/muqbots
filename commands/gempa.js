const request = require('request');
const { parseString } = require('xml2js');
const { MessageEmbed } = require('discord.js');
const { get } = require('node-superfetch');

module.exports = {
 name: 'gempa',
 description: 'info gempa terkini !',
 async execute(message) {

const ops = {
  url: 'https://data.bmkg.go.id/autogempa.xml',
  headers: {}
 }
 let m = await message.channel.send('🙏 Sedang Mengambil data.');

 const {body:eq} = await get('https://data.bmkg.go.id/eqmap.gif');

    request(ops, (err, response, data) => {
   parseString(data, function(error, result) {
     console.log(result.Infogempa.gempa[0].point[0]);
     result.infoGempa = result.Infogempa;
     const embed = new MessageEmbed()
     .setColor('#00f1ff')
     .setTitle('Gempa Terkini')
     .setURL('https://bmkg.go.id')
     .setThumbnail("https://data.bmkg.go.id/include/assets/img/gempa.svg")
     .addField('⏰ Tanggal', result.infoGempa.gempa[0].Tanggal[0])
     .addField('🕖 Jam', result.infoGempa.gempa[0].Jam[0])
     .addField('📖 Kordinat', result.infoGempa.gempa[0].point[0].coordinates[0])
     .addField('🔭 Lintang dan Bujur', result.infoGempa.gempa[0].Lintang[0] + result.infoGempa.gempa[0].Bujur[0])
     .addField('📞 Magnitudo dan Kedalaman', result.infoGempa.gempa[0].Magnitude[0] + ', ' + result.infoGempa.gempa[0].Kedalaman[0])
     .addField('⛳ Wilayah', result.infoGempa.gempa[0].Wilayah1[0] ? result.infoGempa.gempa[0].Wilayah1[0] : '')
     .addField('♨ Potensi', result.infoGempa.gempa[0].Potensi[0])
     .attachFiles({ attachment: eq, name: 'gempa.gif' })
     .setImage('attachment://gempa.gif')
     .setFooter('Diambil dari data bebas Badan Meteorologi, Klimatologi, dan Geofisika');
    m.delete();
    message.reply(embed);
   })
  })
 }
}