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
client.snipes = new Discord.Collection();


Canvas.registerFont('./sc/font.ttf', {family: 'fontFamily'});

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
	if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const commandwew = args.shift().toLowerCase();

 if (commandwew === 'start' && message.member.roles.cache.get('752793011435339776')) {
  let hasil, canvass;
    
  function randoming()  {
    hasil = Math.floor(Math.random() * 99999 + 1)
  }  



  async function generateimg() {
  const canvas = Canvas.createCanvas(1280, 720);
  const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage('./sc/background/back1.jpg');
  
  ctx.drawImage(background, 0, 0, 1280, 720);
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(0, 0, 1280, 720);
  
  ctx.font = '35px fontFamily';
  ctx.shadowBlur = 10;
	ctx.fillStyle = '#ffffff';
	ctx.shadowColor = "#000000";
  ctx.shadowOffs = 0;
  ctx.fillText(`${hasil}`, canvas.width / 3.0, canvas.height / 3.0);
  
  canvass = new Discord.MessageAttachment(canvas.toBuffer(), 'weh.jpg')
  message.channel.send(`Masukkan Plat Nomer Ini Sebelum Mobil Itu Menghilang !`, canvass)
  .then(msg => {
    msg.delete({ timeout: 8000})
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
        }, 8000)
      }, 10000)
    }, 18000)
      
      client.on("message", message => {
      if (message.content === `${hasil}` && !message.author.bot) {
        message.channel.send('Berhasil !')
      }
    })
      
    
  } else if(commandwew === 'snipe') {
    const snipes = client.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`That is not a valid snipe...`);
    const Embed = new Discord.MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  }

})
  



  
  
  
  


//status bot

client.on('ready', () => {
    client.user.setActivity("MANTENGIN ELU !", {
    type: "WATCHING",
    
    })
  })


client.login(process.env.TOKEN1)