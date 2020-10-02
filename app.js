const MenuClient = require('./Structures/MenuClient');
const config = require('./config.json');

const client = new MenuClient(config);
client.start()