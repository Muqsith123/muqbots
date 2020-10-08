const figlet = require('figlet');
const { prefix } = require('../../config.json')

module.exports = {
      name: 'ascii',
      category: 'Fun',
      description: 'Rubah Teks Mu Menjadi ASCII',
      usage: `${prefix}alexa (Text Yang Di Jadiin ASCII)`,
      run: async(bot, message, args)=> {
	// eslint-disable-next-line no-unused-vars
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