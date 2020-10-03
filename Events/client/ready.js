const { prefix } = require('../../config.json')

module.exports=bot=>{
		console.log(`Logged in as ${bot.user.tag}`)
		bot.user.setPresence({
			status: 'idle',
			activity: {
				name: `${prefix}help`,
				type: 'WATCHING'
			}
		})
};