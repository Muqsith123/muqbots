const Discord = require("discord.js");	//memanggil discord.js
const client = new Discord.Client(); 
const {
  prefix,
  a1,
  a2,
  a3
} = require("./config.json");//hal hal yang di perlukan
const fs = require('fs');
const Canvas = require('canvas');

Canvas.registerFont('sc/font.ttf', {family: 'fontFamily'});

//event handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


//command handler
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));//menyaring file js di dalam commands

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command); 
};
  
const cooldowns = new Discord.Collection();

client.on("ready", () => {
  console.log("Muqsith Bot Telah Aktif !");
});


          
client.on("message", async message => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
 const commandName = args.shift().toLowerCase();
  
  const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  
  if(!command) return;
  
  if (command.guildOnly && message.channel.type === 'dm') {
	return message.reply('Chat Di Server Ya !');
} 

  
  //cooldown
  
  
  
if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
      const cdembed = new Discord.MessageEmbed()
        .setTitle('Sabar Ya :)')
        .setColor('#00f1ff')
        .setDescription(`Gunakan Command Dengan Bijak\n Tunggu ${timeLeft.toFixed(1)} Detik Untuk Menggunakan Command \`${command.name}\``)
			return message.channel.send(cdembed);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  
            
  try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send(`<@710492761303941150> Waduh Commandnya Error !`)
	}
  
}); client.on("message", async message => {
	if (message.content === '-ping') {
	const m = await message.channel.send('Mendapatkan Info ...')
        
        const aembed = new Discord.MessageEmbed()
        .setTitle("🏓 PONG!")
        .addField("Roundtrip took", (`${m.createdTimestamp - message.createdTimestamp}ms`), true)
        .addField("Hearthbeat", (`${Math.round(client.ws.ping)}ms​`), true)
        .setColor('#00f1ff')
        .setFooter("BOT By FrenzyQrunch")
        return setTimeout(function(){ 
      m.edit("Sukses Mendapatkan Info !", aembed)
      }, 3000);
  }
 if (message.content === '-start' && message.member.roles.cache.get('752793011435339776')) {
  let hasil;
  let canvass;
  function randoming()  {
    hasil = Math.floor(Math.random() * 99999 + 1)
  }  

  async function generateimg() {
  const canvas = Canvas.createCanvas(1280, 720);
  const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage('./sc/background/back1.jpg');
  const putih = ("#ffffff") 
  
  ctx.drawImage(background, 0, 0, 1280, 720);
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(0, 0, 1280, 720);
  
  ctx.font = '35px fontFamily';
  ctx.shadowBlur = 10;
	ctx.fillStyle = '#000000';
	ctx.shadowColor = "#000000";
  ctx.shadowOffs = 0;
  ctx.fillText(`${hasil}`, canvas.width / 1.0, canvas.height / 1.0);
  
  canvass = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.jpg');
  message.channel.send(`Masukkan Plat Nomer Ini Sebelum Mobil Itu Menghilang !`, canvass)
  .then(msg => {
    msg.delete({ timeout: 15000 })
  }) 
}
    setInterval(() => {
      message.channel.send('<:hmm:748069977239715942> Mencari Plat Nomer Mobil Target !')
      .then(msg => {
        msg.delete({ timeout: 10000 })
      })
      setTimeout(function(){
        randoming();  
        generateimg();
        setTimeout(function(){
          hasil = null;
        }, 15000)
      }, 10000)
    }, 25000)
      
      client.on("message", message => {
      if (message.content === `${hasil}` && !message.author.bot) {
        message.channel.send('Berhasil !')
      } else if (message.content === '-aktual')
        message.channel.send(`${hasil}`)
    })
      
    
  } 

})
  



  
  
  
  


//status bot

client.on('ready', () => {
    client.user.setActivity("MANTENGIN ELU !", {
    type: "WATCHING",
    
    })
  })


client.login(process.env.TOKEN1)