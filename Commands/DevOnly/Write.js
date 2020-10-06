const fs = require('fs')

module.exports = {
    name: 'write',
    description: 'WEW',
    category: 'DevOnly',
    run: async(bot, message) => {
        fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
            if (err) return console.log(err);
            message.channel.send('Hello World > helloworld.txt');
          });
    }
}