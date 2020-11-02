const DIG = require('discord-image-generation')
const { MessageAttachment } = require('discord.js')
module.exports = {
    name: 'slap',
    description: 'Slapping People !',
    category: 'Fun',
    run: async(bot, message) => {
        let avatar1 = message.author.displayAvatarURL({ dynamic: false, format: 'png', size: 512 })
        let avatar2 = message.mentions.users.first()
        if(!avatar2) return message.channel.send('Please Mention Target !')

        let img = await new DIG.Batslap().getImage(avatar1, avatar2.displayAvatarURL({ dynamic: false, format: 'png', size: 512 }))
        let attach = new MessageAttachment(img, 'slap.png');

        message.channel.send(attach)
    }
}