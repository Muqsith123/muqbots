const { prefix } = require('../config.json')
const mongoose = require('mongoose')

module.exports = async (bot) =>{
		console.log(`Logged in as ${bot.user.tag}`)
		mongoose.connect(process.env.mongoose, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(console.log('MongoDB Login !'))
		bot.user.setPresence({
			status: 'idle',
			activity: {
				name: `${prefix}help`,
				type: 'WATCHING'
			}
		})
};