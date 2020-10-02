const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');

module.exports = class MenuDocsClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);
        
        this.commands = new Collection();

		this.events = new Collection();

		this.aliases = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;

		this.snipes = new Collection;
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object.');

		if (!options.token) throw new Error('You must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass a prefix for the client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be a type of String.');
		this.prefix = options.prefix;
	}

	async start(token = process.env.TOKEN1) {
		this.utils.loadCommands()
		this.utils.loadEvents();
		super.login(token);
	}

};