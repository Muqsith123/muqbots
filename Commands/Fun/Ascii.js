const Command = require('../../Structures/Command.js');
const figlet = require('figlet');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['asc'],
            description: 'Rubah Teks Mu Menjadi ASCII',
            category: 'Fun'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
    if(!args [0]) return message.channel.send('Mohon Masukkan Text !'); 
    
    let msg = args.join(" ");
    
    figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            } 
      if(data.length > 2000) return message.channel.send('Mohon jangan ')
      
       message.channel.send('```' + data + '```')
    })        
	}

};