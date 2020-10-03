module.exports = {
	  name: 'hello',
      category: 'Fun',
      description: 'Menyapa Bot',
      run: async(bot, message)=> {
		message.channel.send('Hello!');
	}

};