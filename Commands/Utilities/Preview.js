const Discord = require('discord.js')
const puppeteer = require('puppeteer');


module.exports = {
    name: 'prev',
    description: 'Look WEBSITE',
    run: async(bot, message, args) => {
    let web = args.join(" ");
    if(!web) return message.reply('Mohon Memasukkan Pencarian !');

    try {
(async () => {
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

  const attachment = new Discord.MessageAttachment(a);
  
  message.channel.send(attachment)

  await browser.close();

})();}catch{
    message.reply('Gagal Mengunjungi Website. Pastikan Menulis Dengan Benar !')
    };
   }
} 