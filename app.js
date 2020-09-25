const Discord = require("discord.js");
const client = new Discord.Client(); //memanggil discord.js
const {
  prefix,
  a1,
  a2,
  a3
} = require("./config.json");//hal hal yang di perlukan
const ytdl = require('ytdl-core');//yt ke bot
const queue = new Map();//membuat map musik
const fs = require('fs');


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
  
  
  //music anjing
   const serverQueue = queue.get(message.guild.id);
     if (command === "sing2") { //music2
		if (message.channel.type === 'dm') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl(a2, { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});




  
  
  
  


//status bot


const activities_list = [
    "Mantengin Elu !.", 
    "-help",
    "RETR0 KENTANG", 
    "BETA"
    ];

client.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index], {
    type: "WATCHING",
    
    
    })
  }, 5000);
})


client.login(process.env.TOKEN1)