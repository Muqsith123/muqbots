const DIG = require('discord-image-generation')
const { MessageAttachment } = require('discord.js')

module.exports = {
  name: 'gay',
  description: 'Make Your Avatar GAY !',
  category: 'Fun',
  run: async(bot, message, args) => {
    let img;
    if(message.mentions.users.first() && message.mentions.users.first().id === '710492761303941150') img = await new DIG.Gay().getImage(message.author.displayAvatarURL({ dynamic: false, format: 'png', size: 512}))
    else if(message.mentions.users.first() && message.mentions.users.first().id != '710492761303941150') img = await new DIG.Gay().getImage(message.mentions.users.first().displayAvatarURL({ dynamic: false, format: 'png', size: 512}));
    else if(args.join(" ")) img = await new DIG.Gay().getImage(args.join(" "))
    else return message.channel.send('Please Mention User / Use URL !')
    let attach = new MessageAttachment(img, "gay.png");

    message.channel.send(attach)
  }
}