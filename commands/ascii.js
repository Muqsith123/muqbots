const figlet = require('figlet');


module.exports = {
  name: 'ascii',
  description: 'Rubah Tulisan Mu Jadi ASCII !',
  cooldown: 10,
  execute(message, args) {
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

}