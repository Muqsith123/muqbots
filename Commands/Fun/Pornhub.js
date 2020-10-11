const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'xnxx',
    description: 'Fake XNXX Comment',
    aliases: ['xx', 'xn'],
    run: async(bot, message, args) => {
        function addNewlines(str) {
            var result = '';
            while (str.length > 0) {
              result += str.substring(0, 30) + '\n';
              str = str.substring(30);
            }
            return result;
          }
        let comment = args.join(" ")
        if(!comment) return message.reply('Please Input The Comment !');
        
        comment = addNewlines(comment)
        let canvass = createCanvas(1280, 775)
        const ctx = canvass.getContext('2d')
        const background = await loadImage('https://cdn.discordapp.com/attachments/752554903179624548/764886884559486986/WhatsApp_Image_2020-10-11_at_23.22.44.jpeg')
        
        ctx.drawImage(background, 0, 0, 1280, 775);
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(0, 0, 1280, 775);
        
        ctx.font = '60px Helvetica'
        ctx.fillStyle = '#ffffff';
        ctx.fillText(comment, 130, 480)
        ctx.fillStyle = '#ffc93a';
        ctx.fillText(message.author.username, 130, 410)
        const canvasbruh = new MessageAttachment(canvass.toBuffer(), 'made-by-muqsith.jpg'); 
        message.channel.send(canvasbruh)
    }
}