const Event = require('../Structures/Event');
const { prefix } = require('../config.json')

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands!`,
			`Loaded ${this.client.events.size} events!`
		].join('\n'));
		this.client.user.setPresence({
			status: 'idle',
			activity: {
				name: `${prefix}help`,
				type: 'WATCHING'
			}
		})
	}

};