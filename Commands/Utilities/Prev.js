const Discord = require('discord.js')
const puppeteer = require('puppeteer');


module.exports = {
    name: 'prev',
    description: 'Look WEBSITE',
    run: async(bot, message, args) => {
    let web = args.join(" ");
    if(!web) return message.reply('Mohon Memasukkan Pencarian !');
    
    const blacklist = [
      "pornhub",
      "xnxx",
      "nekopoi"
    ]
    
    blacklist.forEach(async site => {
      if(web.includes(site)) return message.reply('Bokep Aja Teros !');
      if(!web.includes('https://')) web = 'https://' + web;
    })

    try {
      const browser = await puppeteer.launch({
      defaultViewport: {width: 1920, height: 1080},
      'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
      ]
       });
          const page = await browser.newPage();
          await page.goto(web);

          let a = await page.screenshot({path: 'example.png'});
          
          await browser.close();

          const attachment = new Discord.MessageAttachment(a);
  
          message.channel.send(attachment)


      }catch {
        message.reply('Error Mengunjungi WEBSITE. Pastikan Menulis URL Dengan Benar !');
        }
   }
}