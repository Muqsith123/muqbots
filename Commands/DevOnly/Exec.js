const process = require('child_process');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'exec',
  category: 'DevOnly',
  description: 'Exec Command For Developer !',
  ownerOnly: true,
  run: async(bot, message, args) => {
    let input = args.join(" ")
    if(!input) return message.reply('Please Input The Command, **BAKA !**')
    let waiting = await message.channel.send('Please Wait...');

    process.exec(input, (error, stdout) => {
      let result = (error || stdout);
      let embed = new MessageEmbed()
      .setColor('RANDOM')
      .addFields(
        {name: 'Input : ', value: '``\`'+input+'``\`', inline: false}
        );
      embed.addFields(
        {name: 'Result : ', value: '``\`'+result+'``\`', inline: false}
        )
      waiting.delete()
      message.channel.send(embed).catch(err => {
      embed.addFields(
        {name: 'Error : ', value: err, inline: false}
        )
      waiting.delete()
      message.channel.send(embed)
      }) 
    })

    return;
  }
}